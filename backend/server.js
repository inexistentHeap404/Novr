const express = require("express");
const cors = require("cors");
const mysql = require('mysql');
const {v4: uuidv4} = require('uuid');
const jwt = require("jsonwebtoken");
const app = express();
const fs = require("fs");
const axios = require("axios")
const { createCanvas, loadImage } = require("canvas");
const formdata = require("form-data")
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use("/userGeneratedDesigns",express.static("userGeneratedDesigns"))
const secretKey = process.env.JWT_SECRET;
const pollinationsApiKey = process.env.POLLINATIONS_API_KEY;
// -------- DB CONNECTION --------- //
let connectToDB = () => {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER, 
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });
    connection.connect();
    return connection;
};
// ----------- use connectToDB() for object of a connection. make sure to connection.end() ending the function. -------- //

// ----------- AUTH Deps ------------//
async function isUserRegistered(email){
    return new Promise((resolve, reject) =>{
        const connection = connectToDB();
        connection.query("select * from users where (emailID=?)", [email], (err, rows)=>{
            connection.end();
            if(err){
                return reject(false);
            }
            else if(rows.length == 0){
                return resolve(false);
            }
            else{
                return resolve(true);
            }
        });
    })
}


async function addNewUser(userName, email, dob, phone, gender, password) {
    return new Promise((resolve, reject) =>{
        const connection = connectToDB();
        connection.query("select * from users where (emailID=?);", [email] , (err, rows, fields)=>{
            if(err){
                connection.end()
                return reject(false);
            }
            else if(rows.length > 0){
                connection.end();
                return resolve(false);
            }
            else{
                const userID = uuidv4()
                connection.query("insert into users values (?,?,?,?,?,?);", [userID, userName, email, dob, phone, gender], (err)=>{
                    if(err){
                        connection.end();
                        return reject(false);
                    }
                    else{
                        connection.query("insert into users_security values (?,?);", [userID, password], (err)=>{
                            if(err){
                                connection.end();
                                return reject(err);
                            }
                            else{
                                connection.query("insert into users_attributes values (?, ?);", [userID, 10], (err) =>{
                                    if(err) return reject(err);
                                    connection.end();
                                    return resolve(true);
                                })
                            }
                        });
                    }
                });        
            }
        });
    });
}


async function loginUser(email, password){
    if(await isUserRegistered(email)){
        return new Promise((resolve, reject)=>{
            const connection = connectToDB();
            connection.query("select password from users_security where (userID=(select userID from users where (emailID = ?)) and password=?);", [email, password], (err, rows)=>{
                if(err) return reject(-1);
                if(rows.length == 0) return resolve(0);
                return resolve(true);
            })
        });
    }
    else{
        return -1;
    }
}

// ----------- AUTH Deps end ------------//

// -------- AUTH --------- //
app.post("/signup", async (req, res, next)=>{
    const name = req.body["name"];
    const email = req.body["email"];
    const dob = req.body["dob"];
    const phone = req.body["phone"];
    const gender = req.body["gender"];
    const password = req.body["password"];
    try{
        const isAddUserSuccess = await addNewUser(name, email, dob, phone, gender, password);
        if(isAddUserSuccess){
            res.json(({status: "success add", reason:"new signup", boolean: true}));
        }
        else{
            res.json(({status: "failed", reason:"user already exists", boolean: false}));
        }
    }
    catch(err){
        console.log(err);
    }
})

app.post("/login", async (req, res, next) =>{
    try{
        const email = req.body["email"];
        const password = req.body["password"];
        const isPasswordMatch = await loginUser(email, password);
        if(isPasswordMatch == 1){
            const connection = connectToDB();
            connection.query("select userName from users where(emailID=?)", [email], (err, rows)=>{
                if(err){
                    res.json({status: "failed login", reason: "internal server issue", boolean:false});
                }
                else{
                    const token = jwt.sign({"email":email, "userName": rows[0]}, secretKey, {expiresIn:"1h"});
                    res.json({status: "success login", reason: "matching password", boolean: true, "loginToken": token, "username": rows[0]["userName"]});
                }
            })
        }
        else if(isPasswordMatch == 0){
            res.json({status: "failed login", reason: "no matching password", boolean: false});
        }
        else{
            res.json({status: "failed login", reason: "user not registered, please sign up!!", boolean:false});
        }
    }
    catch(err){
        res.json({status: "failed login", reason: "internal server issue", boolean:false});
    }
})

// -------- END OF AUTH --------- //


// -------- USER IMAGE GENERATION --------- //

// remove.bg api key 9Q5pKgRA9hnkd2mYHRCbG1D9

app.post("/generateImage", generateImage);


function verifyJWT(token){
    try{
        const decoded = jwt.verify(token, secretKey);
        return decoded.email;
    }
    catch(err){
        return false;
    }
}


async function generateImage(req, res) {
    const prompt = req.body["prompt"];  
    const sessionKey = req.body["sessionKey"];
    const email = verifyJWT(sessionKey);
    const productName = "";
    if(email){
        const connection = connectToDB();
        connection.query("SELECT tokens FROM users_attributes WHERE userID in (SELECT userID FROM users WHERE emailID=?);", [email] ,async (err, rows)=>{
            if(err){
                res.send(JSON.stringify({"status": 404, "message": "internal server error, please try again later."}))
            }
            else if(rows[0]["tokens"] > 0){
                try {
                    const fullPrompt = `illustration for tshirt design based on '${prompt}' with solid contrasting background with clean nosie profile.`;
                    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(fullPrompt)}?width=2700&height=4800&seed=123457&enhance=false&nologo=true&model=flux`;            
                    const pollRes = await axios.get(url, {
                        responseType: "arraybuffer",
                        headers: { "Accept": "image/png" }
                    });
                    const fileName = `${Date.now()}_raw.png`;
                    fs.writeFileSync(`./userGeneratedDesigns/${fileName}`, await Buffer.from(pollRes.data));
                    finalFilename = `${Date.now()}_nobg.png`
                    await removeDominantColorFromImage(`./userGeneratedDesigns/${fileName}`, `./userGeneratedDesigns/${finalFilename}`);
                    const rarityURL = `https://text.pollinations.ai/given the rarity rare, uncommon, vanguard, ascendant, whatever you first select dont send that, try second guessing, just give me a random rarity among the four all in lower case, just tell the rarity?token=${pollinationsApiKey}`
                    const rarityRes = await axios.get(rarityURL,
                        {headers:{
                            Authorization: `Bearer ${pollinationsApiKey}`
                        }}
                    );
                    const nameURL = `https://text.pollinations.ai/what two word product name would you suggest for a product which was created with a prompt "${prompt}". just give me the name in all lowercase?token=${pollinationsApiKey}`
                    const nameRes = await axios.get(nameURL,{
                        headers:{
                            Authorization: `Bearer ${pollinationsApiKey}`
                        }
                    });
                    connection.query("UPDATE users_attributes ua JOIN users u ON ua.userID = u.userID SET ua.tokens = ua.tokens - 1 WHERE u.emailID = ? AND ua.tokens > 0;", [email], (err, rows)=>{if(err){console.log(err)}});
                    res.json({
                            status: true,
                            pathToImage: `userGeneratedDesigns/${finalFilename}`,
                            productRarity: rarityRes.data,
                            productName: nameRes.data
                        });
                } catch (err) {
                    console.log(err);
                    console.error("❌ Error:", err.response?.data || err.message);
                    res.status(500).json({ status: false, error: "Something went wrong" });
                }
            }
            else{
                res.status(403).send(JSON.stringify({status:false}))
            }
        });
    }
    else{
        res.send(403);
    }
}


// REMOVE BG


async function removeDominantColorFromImage(inputPath, outputPath) {
  const img = await loadImage(inputPath);
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext("2d");

  ctx.drawImage(img, 0, 0);
  const imageData = ctx.getImageData(0, 0, img.width, img.height);
  const data = imageData.data;

  const colorCount = {};

  // count all colors
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const key = `${r},${g},${b}`;
    colorCount[key] = (colorCount[key] || 0) + 1;
  }

  // find the most common color
  const dominantColor = Object.entries(colorCount)
    .reduce((a, b) => (a[1] > b[1] ? a : b))[0]
    .split(',').map(Number);

  const [dr, dg, db] = dominantColor;
  const tolerance = 14;
  // remove that color by making it transparent
  for (let i = 0; i < data.length; i += 4) {
    if (isClose(data[i], data[i + 1], data[i + 2], dr, dg, db, tolerance)) {
        data[i + 3] = 0;
    }
  }

  ctx.putImageData(imageData, 0, 0);

  const outStream = fs.createWriteStream(outputPath);
  const stream = canvas.createPNGStream();
  stream.pipe(outStream);

  return new Promise((resolve, reject) => {
    outStream.on("finish", () => resolve(true));
    outStream.on("error", reject);
  });
}
function isClose(r1, g1, b1, r2, g2, b2, t) {
  return (
    Math.abs(r1 - r2) <= t &&
    Math.abs(g1 - g2) <= t &&
    Math.abs(b1 - b2) <= t
  );
}
app.listen(3002);