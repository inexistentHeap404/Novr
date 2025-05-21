import "./Layout.css";
import ProductCard from "../productCards/productCard";
export default function Layout(){
    return(
        <div className="parent">
            <nav>
                    <div>novr</div>
                    <ul>
                        <li>home</li>
                        <li>about</li>
                        <li>novrVision</li>
                    </ul>
            </nav>
            <section className="quoteSect">
                <div className="quote">
                    Blend in? <i>Nah</i>. Be the one.
                </div>
            </section>
            <section className="showcase">
                <div className="showcaseGrid">
                    <div className="product-grid">
                        <div className="left-product">
                            <ProductCard source={"InitialProductCards/BlueT.jpg"} className="ProductImages" />
                            </div>
                            <div className="right-products">
                                <div>
                                    <ProductCard source={"./InitialProductCards/BlueT.jpg"} className="ProductImages" />
                                </div>
                                <div>
                                    <ProductCard source={"./InitialProductCards/BlackT.jpg"} className="ProductImages" />
                                </div>
                                <div>
                                    <ProductCard source={"InitialProductCards/BlackT.jpg"} className="ProductImages" />
                                </div>
                                <div>
                                    <ProductCard source={"InitialProductCards/BlackT.jpg"} className="ProductImages" />
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    )
}