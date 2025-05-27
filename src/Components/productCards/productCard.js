import "./productCard.css"

export default function productCard({source, productName}){
    return(
        <div className="productCard">
            <img src={source} alt="image1" />
            <div className="productInfo">
                <div className="productName">{productName}</div>
                <div className="priceTagContainer">
                    <div className="price">₹999</div>
                    <button>Add to Novr wadrobe</button>
                    <button>BUY NOW</button>
                </div>
            </div>
        </div>
    )
}