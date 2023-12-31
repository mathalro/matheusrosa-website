import { useGoogleAuth } from "../../../context/UserContext"

const LoginButton = () => {
    const { signIn } = useGoogleAuth();

    return (
        <button onClick={signIn}>Login</button>
    )
}

export default LoginButton;