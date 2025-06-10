import { AllInclusiveOutlined, HomeOutlined, PersonOutlineOutlined, ShoppingBagOutlined, ArrowDropUpOutlined } from "@mui/icons-material"
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import "./enso.css"
import { Link } from "react-router-dom"
export default function Enso(){
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
            <div className="ensoSuggestionBox">
                <div className="suggestionHero">Find some sparks!</div>
                <div className="ensoSuggestionParent">
                    <div className="try">
                        cyberpunk samurai under neon rain
                    </div>
                    <div className="try">
                        solar eclipse with fractal petals
                    </div>
                    <div className="try">
                        angel falling into glitch void
                    </div>
                    <div className="try">
                        mountains shaped like piano keys
                    </div>
                    <div className="try">
                        burning rose with barcode stem
                    </div>
                </div>
            </div>
            <div className="ensoPromptBox">
                <input className="promptArea" placeholder="Whats on your mind?" name="prompt" />
                <button className="promptSend"><ArrowUpwardOutlinedIcon /></button>
            </div>
        </div>
    )
}