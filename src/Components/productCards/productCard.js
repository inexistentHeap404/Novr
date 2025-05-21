import "./productCard.css"

export default function productCard({source}){
    return(
        <div>
            <img src={source} alt="image1"/>
            <div>₹999</div>
        </div>
    )
}