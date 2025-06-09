import ProductCard from "../productCards/productCard"
import "./Home.css"
import { Link, Outlet } from "react-router-dom"
export default function Home(){
    return(
        <>
            <section className="quoteSect">
                <div className="quote">
                    <i>infinity</i> has shelves now
                </div>
            </section>
            <section className="showcase">
                <div className="stepCard">Jump into enso, type your style. Browse different gens and right swipe one</div>
                <div className="productCard"><ProductCard productName="dead illuminati" productPrice="1199" productRarity="vanguard" /></div>
                <div className="tryOutCard">
                    <div>Try enso</div>
                    <Link to="/enso">
                        <button>enso</button>
                    </Link>
                </div>
                <div className="productCard"><ProductCard productName="frozen bone" productPrice="999" productRarity="uncommon" /></div>
                <div className="stepCard">Approve the design and have your own, one of a kind designed tshirt in your hands within a week</div>
                <div className="productCard"><ProductCard productName="white void" productPrice="1599" productRarity="ascendant" /></div>
            </section>
            <section className="browse_try">
                <div className="ai_try">
                    <div className="card">
                        <div className="background_card">
                            <div className="foreground_card"></div>
                        </div>
                    </div>
                    <div className="tagline_holder">
                        <div className="tagline">Unleash your inner designer with enso – where <i>your</i> imagination meets <i>our</i> intelligence</div>
                        <Link to="/enso">
                            <button>generate your own using enso</button>
                        </Link>
                    </div>
                </div>
                <div className="browse_infinite">
                    <div className="card">
                        <div className="background_card">
                            <div className="foreground_card"></div>
                        </div>
                    </div>
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
                <div className="hero_end">novr</div>
            </section>
        </>
    )
}