import Navbar from "../components/nav/Navbar";
import {Outlet} from "react-router-dom";
import "./Layout.css";

const Layout = ({ userSession, googleLogout }) => {
    return (
        <>
            <Navbar userSession={userSession} googleLogout={googleLogout} />
            <div className="app-layout">
                <Outlet />
            </div>
        </>
    )
}

export default Layout;