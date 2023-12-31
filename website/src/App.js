import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import About from "./pages/About";
import Editor from "./pages/Editor";
import Login from "./pages/Login";
import { AuthContextProvider } from "./context/UserContext";

function App() {
    return (
        <div className="App">
            <AuthContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/write" element={<Editor />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="*" element={<NoPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AuthContextProvider>
        </div>
    );
}



export default App;