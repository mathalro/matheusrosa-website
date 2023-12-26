import { GoogleLogin } from '@react-oauth/google';
import { Navigate } from 'react-router-dom';

import "./Login.css";

const Login = ({ googleLogin, userSession }) => {
    const errorMessage = (error) => {
        alert("Failed to login");
    };

    return (
        <>
            {userSession == true ? <Navigate to="/" /> :
                <div className="app-login-form">
                    <h2 className="app-login-form-item app-login-form-title">Create your account</h2>
                    <div className="app-login-form-item app-login-form-google">
                        <GoogleLogin onSuccess={googleLogin} onError={errorMessage} />
                    </div>
                </div>
            }
        </>
    )
}

export default Login;