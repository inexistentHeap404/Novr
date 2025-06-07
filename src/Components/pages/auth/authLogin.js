import "./auth.css";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
export default function Auth(){
    const [type, setType] = useState("text");
    return(
        <section className="authParent">
            <div className="secondParent">
                <div className="google"></div>
                <div className="register">
                    <div className="other_inputs">
                        <input placeholder="Email Id*" type="email" required/> 
                        <input placeholder="Password*" type="password" required/> 
                        <input type="submit" value="Sign in" className="submit_button_reg" />
                        <div className="alternate_signin_link">Not a member? <Link to="/auth">Sign up</Link> </div>
                    </div>
                </div>
            </div>
        </section>
    )
}