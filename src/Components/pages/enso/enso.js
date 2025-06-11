import { AllInclusiveOutlined, HomeOutlined, PersonOutlineOutlined, ShoppingBagOutlined } from "@mui/icons-material"
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import "./enso.css"
import { Link } from "react-router-dom"
import { useState } from "react";


export default function Enso(){
    const [promptText, setPromptText] = useState("");
    const [isPromptSent, setPromptSent] = useState(false);
    return(
        <div className="ensoParent">
            <div className="ensoNav">
                <div className="heroName">
                    <div className="hero">enso</div>
                    <div className="subHero">by novr</div>
                </div>
                <ul>
                    <li>
                        <Link to="/">
                            <HomeOutlined />
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <ShoppingBagOutlined />
                        </Link>
                    </li>
                    <li>
                        <Link to="/infinityStore">
                            <AllInclusiveOutlined />
                        </Link>
                    </li>
                    <li>
                        <Link to="/auth">
                            <PersonOutlineOutlined />
                        </Link>
                    </li>
                </ul>
            </div>
                {!isPromptSent && 
                    <div className="ensoSuggestionBox">
                        <div className="suggestionHero">Find some sparks!</div>
                        <div className="ensoSuggestionParent">
                            <div className="try" onClick={()=>{
                                setPromptText("cyberpunk samurai under neon rain");
                            }}>
                                cyberpunk samurai under neon rain
                            </div>
                            <div className="try" onClick={()=>{
                                setPromptText("solar eclipse with fractal petals")
                            }}>
                                solar eclipse with fractal petals
                            </div>
                            <div className="try" onClick={()=>{
                                setPromptText("angel falling into glitch void");
                            }}>
                                angel falling into glitch void
                            </div>
                            <div className="try" onClick={()=>{
                                setPromptText("moutains shaped like piano keys");
                            }}>
                                mountains shaped like piano keys
                            </div>
                            <div className="try" onClick={()=>{
                                setPromptText("burning rose with barcode stem");
                            }}>
                                burning rose with barcode stem
                            </div>
                        </div>
                    </div>
                }

                {
                    isPromptSent && 
                    <div>Hello world</div>
                }
            <div className="ensoPromptBox">
                <input className="promptArea" placeholder="Whats on your mind?" name="prompt" value={promptText} onChange={(e)=>{
                    setPromptText(e.target.value);
                }}/>
                <button className="promptSend" onClick={()=>{
                    setPromptSent(true)
                    fetch("http://localhost:3001/enso", {
                        method: "POST",
                        headers: {"Content-Type": "application/json"}, 
                        body: JSON.stringify({prompt: promptText})
                    })
                    .then(res => res.json())
                    .then(data => console.log(data))
                }}><ArrowUpwardOutlinedIcon /></button>
            </div>
        </div>
    )
}