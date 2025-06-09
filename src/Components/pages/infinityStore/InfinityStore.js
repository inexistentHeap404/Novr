import "./InfinityStore.css"
import { useState, useEffect } from "react"
export default function InfinityStore(){
    const [sizeIsDroppedDown, setSizeDroppedDown] = useState(true);
    const [typeIsDroppedDown, setTypeDroppedDown] = useState(true);
    const [rarityIsDroppedDown, setRarityDroppedDown] = useState(true);
    useEffect(()=>{
        window.scrollTo(0, 0);
        return ()=>{
        };
    }, [])
    return(
        <div className="storeParent">
            <div className="storeSidebar">
                <div className="dropDown">
                    <button onClick={()=>{
                        setSizeDroppedDown(!sizeIsDroppedDown);
                    }}>SIZE ⏷</button>
                    {
                        sizeIsDroppedDown &&
                        <div className="dropDownContents">
                            <label><input type="checkbox" name="size" value="s" />S</label>
                            <label><input type="checkbox" name="size" value="m" />M</label>
                            <label><input type="checkbox" name="size" value="l" />L</label>
                            <label><input type="checkbox" name="size" value="xl" />XL</label>
                            <label><input type="checkbox" name="size" value="xxl" />XXL</label>
                        </div>
                    }
                </div>
                <div className="dropDown">
                    <button onClick={
                        ()=>{
                            setTypeDroppedDown(!typeIsDroppedDown);
                        }
                    }>TYPE ⏷</button>
                    {
                        typeIsDroppedDown &&
                        <div className="dropDownContents">
                            <label><input type="checkbox" name="dressType" value="tshirt" />T-Shirts</label>
                            <label><input type="checkbox" name="dressType" value="hoodies" />Hoodies</label>
                            <label><input type="checkbox" name="dressType" value="polo" />Polo</label>
                        </div>
                    }
                </div>

                <div className="dropDown">
                    <button onClick={()=>{
                        setRarityDroppedDown(!rarityIsDroppedDown);
                    }}>RARITY ⏷</button>
                    {
                        rarityIsDroppedDown &&
                        <div className="dropDownContents">
                            <label><input type="checkbox" name="rarity" value="uncommon" />Uncommon</label>
                            <label><input type="checkbox" name="rarity" value="elite" />Elite</label>
                            <label><input type="checkbox" name="rarity" value="vanguard" />Vanguard</label>
                            <label><input type="checkbox" name="rarity" value="ascendant" />Ascendant</label>
                        </div>
                    }
                </div>
            </div>
            <div>
                <div className="storeProductCards">
                        <div className="productArray">
                            <div className="storeProductCard">p1</div>
                            <div className="storeProductCard">p2</div>
                            <div className="storeProductCard">p3</div>
                        </div>
                </div>
                <div className="storeProductCards">
                        <div className="productArray">
                            <div className="storeProductCard">p1</div>
                            <div className="storeProductCard">p2</div>
                            <div className="storeProductCard">p3</div>
                        </div>
                </div>
                <div className="storeProductCards">
                        <div className="productArray">
                            <div className="storeProductCard">p1</div>
                            <div className="storeProductCard">p2</div>
                            <div className="storeProductCard">p3</div>
                        </div>
                </div>
                <div className="storeProductCards">
                        <div className="productArray">
                            <div className="storeProductCard">p1</div>
                            <div className="storeProductCard">p2</div>
                            <div className="storeProductCard">p3</div>
                        </div>
                </div>
                <div className="storeProductCards">
                        <div className="productArray">
                            <div className="storeProductCard">p1</div>
                            <div className="storeProductCard">p2</div>
                            <div className="storeProductCard">p3</div>
                        </div>
                </div>
                <div className="storeProductCards">
                        <div className="productArray">
                            <div className="storeProductCard">p1</div>
                            <div className="storeProductCard">p2</div>
                            <div className="storeProductCard">p3</div>
                        </div>
                </div>
            </div>
        </div>
    )
}