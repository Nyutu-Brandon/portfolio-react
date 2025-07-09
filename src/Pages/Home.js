import {FaReact, FaNodeJs, FaGithub, FaLinkedin, FaDownload} from "react-icons/fa";
import { useState } from "react";

function Home () {
    // const [showMore, setShowMore] = useState(false);

    return (
        <div style={{ textAlign: "center" }}>
            <img src="/dobronx.jpeg" alt="brandon" width="150" style={{ borderRadius: "50%" }} />
            <h1>Brandon Nyutu</h1>
            <p className="subtitle">
                <FaReact color="#61DAFB"/> Reactjs | <FaNodeJs color="#43853D"/> Nodejs
            </p>
            <p>
                I'M an entry level software developer who deals with a range of technologies
                in both mobile and web development. <br/>
                I have a wide range of projects which demonstrate my skills and experience in
                certain topics and areas and also display my creativity and problem solving skills.
            </p>
            <div className="home-buttons">
                <a href="/resume.docx" download className="btn">
                    <FaDownload /> Download CV
                </a>
                <a href="" className="btn outline" target="_blank" rel="noreferrer"> <FaLinkedin/> Linked in</a>
                <a href="https://github.com/nyutu-brandon" className="btn outline" target="_blank" rel="noreferrer"> <FaGithub/> Github</a>
            </div>

        </div>


    );
}
export default Home;