import "./Layout.css";
import { Link, Outlet } from "react-router-dom";
export default function Layout(){
    return(
        <div className="parent">
            <section>
                    <nav>
                        <div className="bname">novr</div>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/novrVision">novrVision</Link>
                                </li>
                                <li>
                                    <Link to="/auth">
                                        profile
                                    </Link>
                                </li>
                            </ul>
                    </nav>
            </section>
            <Outlet />
        </div>
    )
}