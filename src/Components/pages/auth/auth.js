import "./auth.css";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
export default function Auth(){
    const [type, setType] = useState("text");
    const [visible, setVisible] = useState(false);
    const [Confirmvisible, setConfirmVisible] = useState(false);
    const [passwordType, setPasswordType] = useState("password");
    const [confirmPasswordType, setConfirmPasswordType] = useState("password");
    return(
        <section className="authParent">
            <div className="secondParent">
                <div className="google"></div>
                <div className="register">
                    <div className="flex_inputs">
                        <input placeholder="First Name*" required/>
                        <input placeholder="Last Name"/>
                    </div>
                    <div className="other_inputs">
                        <input placeholder="Email Id" type="email"/> 
                        <div className="passwordContainer">
                            <input placeholder="Choose new password*" type={passwordType} />
                            <button onClick={()=>{
                                setVisible(!visible);
                                if(visible){
                                    setPasswordType("text");
                                }
                                else{
                                    setPasswordType("password");
                                }
                            }}>👁</button>
                        </div>
                        <div className="passwordContainer">
                            <input placeholder="Confirm new password" type={confirmPasswordType} /> 
                            <button onClick={()=>{
                                setConfirmVisible(!Confirmvisible);
                                if(Confirmvisible){
                                    setConfirmPasswordType("text");
                                }
                                else{
                                    setConfirmPasswordType("password");
                                }
                            }}>👁</button>
                        </div>
                        <input placeholder="Please enter your birth date" type={type}
                            onFocus={()=>{
                                setType("date");
                            }} 
                            onBlur={()=>{
                                setType("text");
                            }}
                        /> 
                        <div className="reg_discount">(Avail 10% Birthday discount as a member) </div>
                        <input placeholder="Mobile Number" type="tel"/>
                        <div className="gender_radio">
                            Gender
                            <div className="gender">
                                <input type="radio" name="gender" />
                                <label for="male">Male</label>
                            </div>
                            <div className="gender">
                                <input type="radio" name="gender" />
                                <label for="female">Female</label>
                            </div>
                            <div className="gender">
                                <input type="radio" name="gender" />
                                <label for="other">Other</label>
                            </div>
                        </div>
                        <input type="submit" value="Register" className="submit_button_reg" />
                        <div className="alternate_signin_link">Already a member? <Link to="/authLogin">Sign in</Link> </div>
                    </div>
                </div>
            </div>
        </section>
    )
}