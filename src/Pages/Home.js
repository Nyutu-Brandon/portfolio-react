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
            <div className="testimonials" style={{ marginTop: "40px", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
                <h2>Testimonials</h2>
                <div className="testimonial-card" style={{ margin: "20px 0", padding: "15px", border: "1px solid #ddd", borderRadius: "5px" }}>
                    <img src="/woman1.jpg" alt="lady1" width="150" style={{ borderRadius: "50%" }} />
                    <p><strong>- Jane Doe, Software Engineer</strong></p>
                    <p>"Brandon is a talented developer with a keen eye for detail. His projects are always well thought out and executed!"</p>

                </div>
                <div className="testimonial-card" style={{ margin: "20px 0", padding: "15px", border: "1px solid #ddd", borderRadius: "5px" }}>
                    <img src="/man.jpg" alt="brandon" width="150" style={{ borderRadius: "50%" }} />
                    <p><strong>- John Smith, Project Manager</strong></p>
                    <p>"I had the pleasure of working with Brandon on a project, and his problem-solving skills are impressive!"</p>

                </div>
                <div className="testimonial-card" style={{ margin: "20px 0", padding: "15px", border: "1px solid #ddd", borderRadius: "5px" }}>
                    <img src="/woman2.jpg" alt="lady2" width="150" style={{ borderRadius: "50%" }} />
                    <p><strong>- Emily Johnson, UX Designer</strong></p>
                    <p>"Brandon's creativity and dedication to his work make him a valuable asset to any team!"</p>

                </div>
            </div>

        </div>


    );
}
export default Home;