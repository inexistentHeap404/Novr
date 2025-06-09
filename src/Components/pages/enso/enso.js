import "./enso.css"
import ProductCard from "../../productCards/productCard"

function processPrompt(){

    return 0;
}



export default function enso(){
    return(
        <>
            <section className="parentGenerator">
                <div className="parentG">
                    <div className="designShowcase">
                        <div>
                            <ProductCard />
                        </div>
                        <div>
                            <ProductCard />
                        </div>
                    </div>
                    <center className="centerTag">
                        <div className="chatbar">
                            <input placeholder="Wear anything" />
                            <button className="uparrowButton" onClick={processPrompt}>↑</button>
                        </div>
                    </center>
                </div>
            </section>
        </>
    )
}