import "./About.css";

const About = () => {

    const getYearsOfExperience = () => {
        const start = new Date(2018, 11, 1);
        const now = new Date();
        const timestampInit = new Date(0);
        const diff = new Date(now - start);

        return diff.getFullYear() - timestampInit.getFullYear();
    }

    return (
        <div className="app-about-content">
            <div className="content-group">
                <div className="about-description">
                    <h1>
                        Who is <b>Matheus</b><span className="rosa"> Rosa</span>
                    </h1>
                    <p>
                        <b>{getYearsOfExperience()}</b> years of experience as a Software Engineer. I have been working for impacting companies in the world, like <a href="https://aws.amazon.com/" target="blank">Amazon Web Services</a> and <a href="https://www.blip.ai" target="blank">Blip</a>.
                        <br /><br />
                        I believe knowledge is <b>powerfull</b> and that it is best way to change the life of people in the world.
                        <br /><br />
                        The idea behind the website <b>matheusrosa.com</b> is a <b>tech-blog</b> to share <b>tech-content</b> that I have been learning during my carrer. But beyond that, also allow other users to share their knowledge in the blog.
                        <br /><br />
                        "Big things start small". <i><u>Jeffrey Preston Bezos</u></i>
                    </p>
                </div>
                <img src="https://matheusrosa-assets.s3.eu-west-1.amazonaws.com/avatar.png" className="avatar" />
            </div>
            <div className="line"></div>
            <div className="content-group">
                <img src="https://matheusrosa-assets.s3.eu-west-1.amazonaws.com/work-logo.png" className="work-logo" />
                <div className="work-experience">
                    <h1>
                            Work Experience
                    </h1>
                    <p>
                        <b>Amazon Web Service</b>
                        <br />
                        <i className="small-font">2022 - present</i>
                    </p>
                    <p>
                        <b>Blip</b>
                        <br />
                        <i className="small-font">2018 - 2022</i>
                    </p>
                </div>
            </div>
            <br /><br />
        </div>
    )
}

export default About;