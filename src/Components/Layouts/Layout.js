import "./Layout.css";
import Home from "../pages/Home";
import {useEffect, useState} from "react";
export default function Layout(){
    const [isLoggedIn, changeLogin] = useState(false);
    const [showNav, changeShowNav] = useState(true);
    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY >= 100){
                changeShowNav(false);
            }
            else{
                changeShowNav(true);
            }
        }
        window.addEventListener("scroll", handleScroll);
    })
    return(
        <div className="parent">
            <section>
                {
                    showNav &&
                    (<nav>
                        <div>novr</div>
                        <ul>
                            <li>home</li>
                            <li>novrVision</li>
                            <li>{isLoggedIn ? "profile" : "login"}</li>
                        </ul>
                    </nav>)
                }
            </section>
            <Home />
        </div>
    )
}