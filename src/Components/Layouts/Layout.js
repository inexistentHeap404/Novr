import "./Layout.css";
import { Link, Outlet } from "react-router-dom";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import Brightness1OutlinedIcon from '@mui/icons-material/Brightness1Outlined';
import { HomeOutlined } from "@mui/icons-material";
export default function Layout(){
    return(
        <div className="parent">
            <section>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/enso"><Brightness1OutlinedIcon className="aiLogo" />enso</Link>
                            </li>
                            <li>
                                <Link to="/infinityStore"><AllInclusiveIcon />Store</Link>
                            </li>
                        </ul>
                        <div className="bname">novr</div>
                        <ul>
                            <li>
                                <Link to="/"><HomeOutlined /></Link>
                            </li>
                            <li>
                                <Link to="/auth">
                                    <PersonOutlineOutlinedIcon />
                                </Link>
                            </li>
                            <li>
                                <Link to="/cart">
                                    <ShoppingBagOutlinedIcon />
                                </Link>
                            </li>
                        </ul>
                    </nav>
            </section>
            <Outlet />
        </div>
    )
}