import SKillsChart from "../components/graphs/Bar";
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
                        I believe knowledge is <b>powerfull</b> and that it is the best way to change the life of people in the world.
                        <br /><br />
                        The idea behind the website <b>matheusrosa.com</b> is a <b>tech-blog</b> to share <b>tech-content</b> that I have been learning during my carrer. But beyond that, also allow other users to share their knowledge in the blog.
                        <br /><br />
                        "Big things start small". <u>Jeffrey Preston Bezos</u>
                    </p>
                </div>
                <img src="https://matheusrosa-assets.s3.eu-west-1.amazonaws.com/avatar.png" className="avatar" />
            </div>
            <div className="line"></div>
            <div className="content-group">
                <div className="work-logo">
                    <img src="https://matheusrosa-assets.s3.eu-west-1.amazonaws.com/work-logo.png" className="work-logo-img"/>
                </div>
                <div className="work-experience">
                    <h1>
                        Work Experience
                    </h1>
                    <p>
                        <b>Amazon Web Services</b>
                        <br />
                        <i className="small-font">2022 - present</i>
                        <br /><br />
                        Working as a <b>Software Developer Engineer II</b>, my organization enables Amazon and AWS applications, which are running in the internal Amazon Network, to use AWS <a href="https://aws.amazon.com/elasticloadbalancing/" target="blank">Elastic Load Balancing</a>. My team is responsible for the <b>Load Balancer DNS</b> module of our service, giving customers the capability to name and manage their Load Balancers on the DNS Endpoint level.
                    </p>
                    <p>
                        <b>Blip</b>
                        <br />
                        <i className="small-font">2018 - 2022</i>
                        <br /><br />
                        I started my carrer at Blip as an intern, and left as Techinical Lead of two squads of the Operations/Sustenance team. During my last years I was responsible for the <b>Automations</b> of Blip operational tools, used by the employees to optmize the integration between teams, and <b>Development/Documentation</b> of Blip Conversational <b>Channels Tools</b> to enrich the Blip default channels functionalities.
                    </p>
                    <p>
                        <b>CEFET-MG</b>
                        <br />
                        <i className="small-font">2015 - 2017</i>
                        <br /><br />
                        During the university I worked as <b>Professor Assistent of Algorithms and Data Structures</b> and with Scientific Initiation on <b>Artificial Inteligent and Web Development</b>.
                    </p>
                </div>
            </div>
            <div className="line"></div>
            <div className="content-group">
                <div className="skills">
                    <SKillsChart />
                </div>
            </div>
            <br /><br />
        </div>
    )
}

export default About;