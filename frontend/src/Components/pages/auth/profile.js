import { useState } from "react"
import "./profile.css"
import { jwtDecode } from "jwt-decode"
import ViewSidebarOutlinedIcon from '@mui/icons-material/ViewSidebarOutlined';
import ProductCard from "../../productCards/productCard";
import { Link } from 'react-router-dom'

export default function Profile(){
    const [showPasswordDropdown, setShowPasswordDropdown] = useState(false);
    function generateCurrentPage(pageName){
        if(pageName === "vault"){
            /*fetch("http://192.168.29.137:3002/userVault", {
                method: "POST",
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                }
            })*/
            return(
                <div className="vaultParent">
                    <div className="pageHead">
                        <ViewSidebarOutlinedIcon className="sidebarLogo" onClick={()=>{           
                            setSidebar(!sidebar);
                        }}/>
                        <div className="pageHero">Vault</div>
                    </div>
                    <div className="userVaultItems">
                        <ProductCard productName="moving grass" productPrice="899" productRarity="rare" productImagePath="/assets/img_for_mockup/white_tshirt.jpg" productType={"vaultItem"} />
                        <ProductCard productName="moving grass" productPrice="899" productRarity="rare" productImagePath="/assets/img_for_mockup/white_tshirt.jpg" productType={"vaultItem"} />
                        <ProductCard productName="moving grass" productPrice="899" productRarity="rare" productImagePath="/assets/img_for_mockup/white_tshirt.jpg" productType={"vaultItem"} />
                        <ProductCard productName="moving grass" productPrice="899" productRarity="rare" productImagePath="/assets/img_for_mockup/white_tshirt.jpg" productType={"vaultItem"} />
                        <ProductCard productName="moving grass" productPrice="899" productRarity="rare" productImagePath="/assets/img_for_mockup/white_tshirt.jpg" productType={"vaultItem"} />
                        <ProductCard productName="moving grass" productPrice="899" productRarity="rare" productImagePath="/assets/img_for_mockup/white_tshirt.jpg" productType={"vaultItem"} />
                    </div>
                </div>
            )
        }
        else if(pageName === "wardrobe"){
            return(
                <div className="vaultParent">
                    <div className="pageHead">
                        <ViewSidebarOutlinedIcon className="sidebarLogo" onClick={()=>{           
                            setSidebar(!sidebar);
                        }}/>
                        <div className="pageHero">Wardrobe</div>
                    </div>
                    <div className="userVaultItems">
                        <ProductCard productName="moving grass" productPrice="899" productRarity="rare" productImagePath="/assets/img_for_mockup/white_tshirt.jpg" productType={"wardrobeItem"} />
                        <ProductCard productName="moving grass" productPrice="899" productRarity="rare" productImagePath="/assets/img_for_mockup/white_tshirt.jpg" productType={"wardrobeItem"} />
                        <ProductCard productName="moving grass" productPrice="899" productRarity="rare" productImagePath="/assets/img_for_mockup/white_tshirt.jpg" productType={"wardrobeItem"} />
                        <ProductCard productName="moving grass" productPrice="899" productRarity="rare" productImagePath="/assets/img_for_mockup/white_tshirt.jpg" productType={"wardrobeItem"} />
                        <ProductCard productName="moving grass" productPrice="899" productRarity="rare" productImagePath="/assets/img_for_mockup/white_tshirt.jpg" productType={"wardrobeItem"} />
                        <ProductCard productName="moving grass" productPrice="899" productRarity="rare" productImagePath="/assets/img_for_mockup/white_tshirt.jpg" productType={"wardrobeItem"} />
                    </div>
                </div>
            )
        }
        else if(pageName === "you"){
            return(
                <div className="vaultParent">
                    <div className="pageHead">
                        <ViewSidebarOutlinedIcon className="sidebarLogo" onClick={()=>{           
                            setSidebar(!sidebar);
                        }}/>
                        <div className="pageHero">You</div>
                    </div>
                    <div className="youPage">
                        <div className="you-container">
                            <div className="form-form-card">
                                <div className="form-group">
                                <div className="form-row">
                                    <label>Email ID</label>
                                    <input placeholder="lmao" disabled />
                                </div>
                                <div className="form-row">
                                    <label>Password</label>
                                    <div className="password-change">
                                    <input type="password" value="••••••••" disabled />
                                    <button className="change-button" onClick={() => setShowPasswordDropdown(!showPasswordDropdown)}>
                                        Change
                                    </button>
                                    </div>
                                    {showPasswordDropdown && (
                                    <div className="form-row">
                                        <label>Current Password</label>
                                        <input type="password" placeholder="Enter current password" />
                                    </div>
                                    )}
                                </div>
                                </div>
                            </div>

                            <div className="form-form-card">
                                <div className="form-group">
                                <div className="form-row">
                                    <label>First Name</label>
                                    <input />
                                </div>
                                <div className="form-row">
                                    <label>Last Name</label>
                                    <input />
                                </div>
                                <div className="form-row">
                                    <label>Date of Birth</label>
                                    <input type="date" />
                                </div>
                                <div className="form-row">
                                    <label>Mobile Number</label>
                                    <input/>
                                </div>
                                <div className="form-row">
                                    <label>Address</label>
                                    <textarea placeholder="No Address Selected"></textarea>
                                    <button className="change-button">Change</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                generateCurrentPage("vault")
            )
        }
    }
    const [currentPage, setCurrentPage] = useState("you");
    const [sidebar, setSidebar] = useState(true);
    return(
        <div className={sidebar ? "profileParent" : "noSidebarParent"}>
            <div className="sidebar">
                <div className="sidebarContent">
                    <div className="sidebarHero">
                        <div className="sidebarUsername">{(jwtDecode(localStorage.getItem("token"))["userName"]["userName"]).split(" ")[0]}</div>
                        <div className="sidebarEmail">{jwtDecode(localStorage.getItem("token"))["email"]}</div>
                    </div>
                    <div className="sidebarItem" onClick={()=>{setCurrentPage("vault")}}>Vault</div>
                    <div className="sidebarItem" onClick={()=>{setCurrentPage("wardrobe")}}>Wardrobe</div>
                    <div className="sidebarItem" onClick={()=>{setCurrentPage("you")}}>You</div>
                    <div className="sidebarItem tokenContainer"><b>Tokens Left</b><b>10</b><Link to="/token"><button className="change-button">Get more</button></Link></div>
                    <button className="logoutButton" onClick={()=>{
                        localStorage.removeItem("token");
                        window.location.reload();
                    }}>LOGOUT</button>
                    <button className="logoutButton">Delete my account</button>
                </div>
            </div>
            <div className="profileArea">
                {generateCurrentPage(currentPage)}
            </div>
        </div>
    )
}