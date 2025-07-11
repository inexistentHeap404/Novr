import "./productCard.css";
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';

export default function ProductCard({productName, productRarity, productPrice, productImagePath, productType}){

    if(productType === "shop"){
        return(
            <div className="productCardParent">
                <GetProductTag productRarity={productRarity} />
                <div className="imgParent">
                    <img className="productImage" src={productImagePath} alt="" />
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
    else if(productType === "vaultItem"){
        return(
            <div className="productCardParent">
                <GetProductTag productRarity={productRarity} />
                <div className="imgParent">
                    <img className="productImage" src={productImagePath} alt="" />
                </div>
                <div className="productInfo">
                    <GetProductName productName={productName} />
                    <div className="productPrompt">
                        <i>₹{productPrice}</i>
                        <button>BUY NOW</button>
                        <button>Remove from VAULT</button>
                    </div>
                </div>
            </div>
        )
    }
    else if(productType === "wardrobeItem"){
        return(
            <div className="productCardParent">
                <GetProductTag productRarity={productRarity} />
                <div className="imgParent">
                    <img className="productImage" src={productImagePath} alt="" />
                </div>
                <div className="prodcutInfo">
                    <GetProductName productName={productName} />
                </div>
            </div>
        )
    }
    else{
        return(
            <ProductCard productName={productName} productImagePath={productImagePath} productPrice={productPrice} productType={"shop"} productRarity={productRarity}/>
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
        if(productType === "wardrobeItem"){
            return(
                <div className="wardrobeProductName">
                    <div>{productName}</div>
                </div>
            )
        }

        else if(productType === "vaultItem"){
            return(
                <div className="vaultProductName">
                    <div>{productName}</div>
                </div>
            )
        }
        
        else{
            return(
                <div className="productName">
                    <div>{productName}</div>
                </div>
            )
        }
    }
}

