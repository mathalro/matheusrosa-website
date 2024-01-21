import "./Footer.css";

const Footer = () => {
    const getYear = () => {
        const date = new Date();
        return date.getFullYear();
    }

    return (
        <div className="footer">
            <p>
                <i>Copyright &copy; {getYear()}</i> Matheus Rosa Consulting. All rights reserved.
            </p>
        </div>
    )
}

export default Footer;