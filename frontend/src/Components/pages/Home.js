import ProductCard from "../productCards/productCard"
import "./Home.css"
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState, useRef } from "react";
export default function Home(){
const txt = "cuz your imagination deserves a wardrobe.";
const [inTxt, setInTxt] = useState("");
let i = useRef(0); // track inde properly
const [subtextVisible, setSubtextVisible] = useState(false);

function typingEffect() {
  let a = setInterval(() => {
    setInTxt(prev => {
      if (i.current === txt.length) {
        clearInterval(a);
        setTimeout(()=>{
            setSubtextVisible(true);
        }, 100)
        return prev;
      }
      const next = prev + txt[i.current];
      i.current++;
      return next;
    });
  }, 50); // or any speed
}

useEffect(() => {
  typingEffect();
}, []);


    const token = localStorage.getItem("token");
    if(token && jwtDecode(token).exp * 1000 < Date.now()){
        localStorage.removeItem("token");
    }
    return(
        <div className="homeParent">
            <section className="quoteSect">
                <div className="bg" />
                <div className="overlay" />
                <div className="quote">
                    {
                        token
                        ?
                        <>Welcome back <i>@{(jwtDecode(token)['userName']["userName"]).split(" ")[0]}</i></>
                        :
                        <div className="quoteHolder">
                            <div className="quoteText">{inTxt}</div>
                            <div className={subtextVisible ?"subtext" : "subtextInvisible"}>Turn your imagination into wearable designs using AI</div>
                        </div>
                    }
                </div>
            </section>
            <section className="showcase">
                <div className="stepCard">Drop your idea to enso, your personal designer</div>
                <div className="stepCard">Approve the creation. Get it on a tee in days.</div>
                <div className="tryOutCard">
                    <div>Try enso</div>
                    <Link to="/enso">
                        <button>enso</button>
                    </Link>
                </div>
                <div className="productCard"><ProductCard productImagePath="assets/img_for_mockup/white_tshirt.jpg" productName="frozen bone" productPrice="999" productRarity="uncommon" /></div>
                <div className="productCard"><ProductCard productImagePath="assets/img_for_mockup/white_tshirt.jpg" productName="dead illuminati" productPrice="1199" productRarity="vanguard" /></div>
                <div className="productCard"><ProductCard productImagePath="assets/img_for_mockup/white_tshirt.jpg" productName="white void" productPrice="1599" productRarity="ascendant" /></div>
            </section>
            <section className="browse_try">
                <div className="ai_try">
                    <div className="tagline_holder">
                        <div className="tagline"><b>Unleash your inner designer with enso</b> – where <i>your</i> imagination meets <i>our</i> intelligence</div>
                        <Link to="/enso">
                            <button>generate your own using enso</button>
                        </Link>
                    </div>
                </div>
                <div className="browse_infinite">
                    <div className="tagline_holder">
                        <div className="tagline"><b>Straight from the Mind of AI</b> – explore T-shirt designs you’ve <i>never imagined</i>, but <i>instantly love</i>.</div>
                        <Link to="/infinityStore">
                            <button>Browse the Infinity store</button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="links_parent">
                <div className="links_cols">
                    <div className="links_rows">
                        <ul className="link_rows_ul">
                            <li className="link_header">Reach Us</li>
                            <li className="link">Email Us</li>
                            <li className="link">Instagram</li>
                            <li className="link">Join out community in Reddit</li>
                        </ul>
                    </div>
                    <div className="links_rows">
                        <ul className="link_rows_ul">
                            <li className="link_header">Quick Links</li>
                            <li className="link">Home</li>
                            <li className="link">enso</li>
                            <li className="link">Your Wadrobe</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="novrInfinity">
                <div className="scroll">
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                </div>
                <div className="scroll">
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                    <div className="scrollElement">novr</div>
                </div>
            </section>
        </div>
    )
}