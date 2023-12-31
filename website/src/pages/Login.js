import { GoogleLogin } from '@react-oauth/google';
import { Navigate } from 'react-router-dom';

import "./Login.css";
import UseAuth from '../context/UserContext';

const Login = () => {
    const { googleLogin, authenticated } = UseAuth();

    const errorMessage = () => {
        alert("Failed to login with google.");
    }

    return (
        <>
            {authenticated ? <Navigate to="/" /> :
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