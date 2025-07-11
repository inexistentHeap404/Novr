import "./auth.css";
import { useState } from "react";
import Profile from "./profile";


export default function Auth(){
        const register = (firstName, lastName, emailID, dob, phone, gender, password)=>{
            //console.log(userName, emailID, dob, phone, gender);
            fetch("http://192.168.29.137:3002/signup", {
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(
                    {
                        "name": firstName + " " + lastName,
                        "email": emailID,
                        "dob" : dob,
                        "phone": phone,
                        "gender": gender,
                        "password": password
                    }
                )
            })
            .then(response => response.json()) 
            .then(data =>{
                if(!data.boolean){
                    setSignUpText("User has already registered, Please login.")
                }
                else{
                    setSignUpText("You've registered successfully, login to join the future")
                }
            }
            )
            .catch(error => console.error(error));
        }
        function handleLogin(email, password){
            fetch("http://192.168.29.137:3002/login", {
                method: "POST",
                headers:{
                        "Content-Type": "application/json"
                    },
                    body:JSON.stringify({
                        "email": email,
                        "password": password
                    })
                })
                .then(response => response.json())
                .then((data)=>{
                    if(data.boolean){
                        localStorage.setItem("token", data.loginToken);
                        window.location.reload();
                    }
                    else{
                        setUserLoginText(data.reason);
                    }
                })
                .catch((err)=>console.log(err));
        }
        const [userLoginText, setUserLoginText] = useState("");
        const [isSignUp, setSignUp] = useState(false);
        const [type, setType] = useState("text");
        const [visible, setVisible] = useState(false);
        const [Confirmvisible, setConfirmVisible] = useState(false);
        const [passwordType, setPasswordType] = useState("password");
        const [confirmPasswordType, setConfirmPasswordType] = useState("password");
        const [signUpText, setSignUpText] = useState("Sign Up");
        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [emailID, setEmailID] = useState("");
        const [password, setPassword] = useState("");
        const [confirmPassword, setConfirmPassword] = useState("");
        const [dob, setDob] = useState("");
        const [gender, setGender] = useState("");
        const [phone, setPhone] = useState("");
        const [email, setEmail] = useState("");
        const [loginPassword, setLoginPassword] = useState("");
        if(isSignUp){
            
            return(
                <section className="authParent">
            <div className="register_hero">
                Be a part of the
                <i>
                    <b>future</b>
                </i>
            </div>
            <form className="secondParent" onSubmit={(e)=>{
                e.preventDefault();
                register(firstName , lastName, emailID,dob, phone, gender, password);
            }}>
                <center className="google">{signUpText}</center>
                <div className="register">
                    <div className="flex_inputs">
                        <input placeholder="First Name*" required onChange={(e)=>{
                            e.preventDefault();
                            setFirstName(e.target.value);
                        }} value={firstName}/>
                        <input placeholder="Last Name" onChange={(e)=>{
                            e.preventDefault();
                            setLastName(e.target.value);
                        }} value={lastName}/>
                    </div>
                    <div className="other_inputs">
                        <input placeholder="Email Id" type="emailID" onChange={(e)=>{
                            setEmailID(e.target.value);
                        }} value={emailID}/> 
                        <div className="passwordContainer">
                            <input placeholder="Choose new password*" type={passwordType} onChange={(e)=>{
                                setPassword(e.target.value);
                            }} value={password} />
                            <button onClick={()=>{
                                setVisible(!visible);
                                if(visible){
                                    setPasswordType("text");
                                }
                                else{
                                    setPasswordType("password");
                                }
                            }}>👁</button>
                        </div>
                        <div className="passwordContainer">
                            <input placeholder="Confirm new password*" type={confirmPasswordType} onChange={(e)=>{
                                setConfirmPassword(e.target.value);
                            }} value={confirmPassword} required /> 
                            <button onClick={()=>{
                                setConfirmVisible(!Confirmvisible);
                                if(Confirmvisible){
                                    setConfirmPasswordType("text");
                                }
                                else{
                                    setConfirmPasswordType("password");
                                }
                            }}>👁</button>
                        </div>
                        <input placeholder="Please enter your birth date" type={type}
                            onFocus={()=>{
                                setType("date");
                            }} 
                            onBlur={()=>{
                                setType("text");
                            }}
                            onChange={(e)=>{
                                setDob(e.target.value);
                            }}
                            value={dob}/> 
                        <div className="reg_discount">(Avail 10% Birthday discount as a member)</div>
                        <input placeholder="Mobile Number" type="tel" value={phone} onChange={(e)=>{
                            setPhone(e.target.value);
                        }}/>
                        <div className="gender_radio">
                            Gender
                            <div className="gender">
                                <input type="radio" name="gender" onClick={(e)=>{
                                    setGender(e.target.value)
                                }} value={"male"} />
                                <label for="male">Male</label>
                            </div>
                            <div className="gender">
                                <input type="radio" name="gender" onClick={(e)=>{
                                    setGender(e.target.value);
                                }} value={"female"} />
                                <label for="female">Female</label>
                            </div>
                            <div className="gender">
                                <input type="radio" name="gender" onClick={(e)=>{
                                    setGender(e.target.value);
                                }} value={"other"} />
                                <label for="other">Other</label>
                            </div>
                        </div>
                        <input type="submit" value="Register" className="submit_button_reg"  />
                        <div className="alternate_signin_link">Already a member? <button onClick={()=>{setSignUp(!isSignUp)}}>login</button></div>
                    </div>
                </div>
            </form>
        </section>
        )
    }
    else{
        if(localStorage.getItem("token")){
            return (<Profile />)
        }
        return(
            <section className="authParent">
                <div className="register_hero">Welcome back!</div>
                <form className="secondParent" onSubmit={(e)=>{
                    e.preventDefault();
                    handleLogin(email, loginPassword);
                }}>
                    <center>{userLoginText}</center>
                    <div className="register">
                        <div className="other_inputs">
                            <input placeholder="Email Id*" type="email" required onChange={(e)=>{
                                setEmail(e.target.value);
                            }} value={email}/> 
                            <input placeholder="Password*" type="text" required value={loginPassword} onChange={(e)=>{
                                setLoginPassword(e.target.value);
                            }}/> 
                            <input type="submit" value="Sign in" className="submit_button_reg" />
                            <div className="alternate_signin_link">Not a member? <button onClick={()=>{
                                setSignUp(!isSignUp)
                            }}>Sign Up</button></div>
                        </div>
                    </div>
                </form>
            </section>
        )
    }
}