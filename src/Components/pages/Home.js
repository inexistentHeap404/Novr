import ProductCard from "../productCards/productCard"
import "./Home.css"
export default function Home(){
    return(
        <>
            <section className="quoteSect">
                <div className="quote">
                    <i>infinity</i> now has shelves
                </div>
            </section>
            <section className="showcase">
                <div className="stepCard">Jump into novrVision, type your style. Browse different gens and right swipe one</div>
                <div className="productCard"><ProductCard source={"InitialProductCards/BlackT.jpg"} productName={"Black Sound"}/></div>
                <div className="tryOutCard">
                    <div>Try novrVision</div>
                    <button>novrVision</button>
                </div>
                <div className="productCard"><ProductCard source={"InitialProductCards/BlackT.jpg"}/></div>
                <div className="stepCard">Approve the design and have your own, one of a kind designed tshirt in your hands within a week</div>
                <div className="productCard"><ProductCard source={"InitialProductCards/BlackT.jpg"}/></div>
            </section>
            <section className="browse_try">
                <div className="ai_try">
                    <div className="card">
                        <div className="background_card"></div>
                        <div className="foreground_card"></div>
                    </div>
                </div>
                <div className="browse_infinite">
                    <div className="card">
                        <div className="background_card"></div>
                        <div className="foreground_card"></div>
                    </div>
                </div>
            </section>
        </>
    )
}