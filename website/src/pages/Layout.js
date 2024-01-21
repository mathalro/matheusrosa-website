import Navbar from "../components/nav/Navbar";
import {Outlet} from "react-router-dom";
import "./Layout.css";
import Footer from "../components/footer/Footer";

const Layout = () => {
    return (
        <div class="site-layout">
            <Navbar />
            <div className="app-layout">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;