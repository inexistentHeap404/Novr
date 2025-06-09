import { useState } from "react";
import "./productCard.css";
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';

export default function ProductCard({productName, productRarity, productPrice, productImagePath}){
    return(
        <div className="productCardParent">
            <GetProductTag productRarity={productRarity} />
            <div className="productImage">
            </div>
            <div className="productInfo">
                <GetProductName productName={productName} />
                <div className="productPrompt">
                    <i>₹{productPrice}</i>
                    <button>BUY NOW</button>
                    <button>Add to VAULT</button>
                </div>
            </div>
        </div>
    )
}

function GetProductTag({productRarity}){
    if(productRarity === "uncommon"){
        return (
            <div className="rarityTagHolder">
                <div className="rarityTagUncommon">
                    <SellOutlinedIcon /> UNCOMMON
                </div>
            </div>
            )
    }
    else if(productRarity === "rare"){
        return (
            <div className="rarityTagHolder">
                <div className="rarityTagRare">
                    <SellOutlinedIcon /> RARE
                </div>
            </div>
        )
    }
    else if(productRarity === "vanguard"){
        return(
            <div className="rarityTagHolder">
                <div className="rarityTagVanguard">
                    <SellOutlinedIcon /> VANGUARD
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="rarityTagHolder">
                <div className="rarityTagAscendant">
                    <SellOutlinedIcon /> ASCENDANT
                </div>
            </div>
        )
    }
}


function GetProductName({productName}){
    return(
        <div className="productName">
            <div>{productName}</div>
        </div>
    )
}