import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"
import settings from "../settings";

const AuthContext = createContext();

const UseAuth = () => {
    return useContext(AuthContext);
}

const credentialsOptions = {
    withCredentials: true
};

export const AuthContextProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const loginResponse = await axios.get(`${settings.baseUrl}/api/auth/verify`, credentialsOptions);
                
                console.log(loginResponse.data);
                if (loginResponse.data === true) {
                    setAuthenticated(true);
                }
            } catch {
                setAuthenticated(false);
            }

        }
        fetchData();
    }, []);

    const googleLogin = async (googleResponse) => {
        console.log(googleResponse);
        const googleToken = googleResponse.credential;

        const request = {
            token: googleToken
        }

        const loginResponse = await axios.post(`${settings.baseUrl}/api/auth/google`, request, credentialsOptions);

        console.log(loginResponse.data);
        setAuthenticated(true);
    };

    const authState = {
        authenticated,
        googleLogin
    }

    return (
        <AuthContext.Provider value={authState}>
            {children}
        </AuthContext.Provider>
    )
}

export default UseAuth;