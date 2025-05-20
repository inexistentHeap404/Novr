import "./productCard.css"

export default function productCard({size}){
    if(size === 1){
        return(
            <div className="smallCard">
                Hey there!!
            </div>
        )
    }
    else{
        return(
            <div className="largeCard">
                Hey there!!
            </div>
        )
    }
}