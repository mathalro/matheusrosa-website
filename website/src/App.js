import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import About from "./pages/About";
import Editor from "./pages/Editor";
import Login from "./pages/Login";
import { useState } from "react";

function App() {
    // TODO: Manage state with redux or context-api
    const [userSession, setUserSession] = useState(false);

    const googleLogin = (response) => {
        setUserSession(true);
        localStorage.setItem("user_session", true);
        alert(`Login user: ${userSession}`)
    };

    const googleLogout = () => {
        alert(`Logout user: ${userSession}`);
        setUserSession(false);
        localStorage.removeItem("user_session");
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout userSession={userSession} googleLogout={googleLogout} />}>
                        <Route index element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/write" element={<Editor />} />
                        <Route path="/login" element={<Login googleLogin={googleLogin} userSession={userSession} />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}



export default App;