import Navbar from "../components/nav/Navbar";
import {Outlet} from "react-router-dom";
import "./Layout.css";

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="app-layout">
                <Outlet />
            </div>
        </>
    )
}

export default Layout;