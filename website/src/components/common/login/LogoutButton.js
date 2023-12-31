import { useGoogleAuth } from "../../../context/UserContext";

const LogoutButton = () => {
    const { signOut } = useGoogleAuth();

    return (
        <button onClick={signOut}>Logout</button>
    )
}

export default LogoutButton;