import Home from "./home.jsx";

// Images
import diploma from "./images/Java_diploma.jpg";

import icon from "./images/icon_task.png";
import icon2 from "./images/check_JS.png";
import ship from "./images/ship.jpeg";
import git from "./images/git-144.png";
import linkedin from "./images/linkedin-100.png";
import tirana from "./images/tirana.png";
import postgres from "./images/postgresql.png";
import webstorm from "./images/webstorm.png";
import sda from "./images/sda.png";
import download from "./images/download_icon.png";

// PDFs
import CV from "./pdfs/CV-Orson.pdf";

// HexGrid (no change)
import { HexGrid, Layout, Hexagon, Text } from "react-hexgrid";








function About(){

    return(
        <div>

            <div className="Head">
                <h1>About Me</h1>
            </div>
            <div className="BIGeducation" >
                <div className="Belinda">

                    <img src={diploma} className="Belinda2"></img>
                    <p>Receiving my diploma from Deputy Prime Minister Belinda Balluku.</p>
                </div>
                <div className="Education">
                    <div className="student_title">
                        <img
                            src={tirana}
                            style={{ width: "30px", height: "30px", objectFit: "cover" }}
                        />

                        <p>Student of Engineering of Mathematics and Computer
                            Science </p>
                    </div>


                    <p style={{ marginLeft: "40px" }}>
                        Started: October 2023 | Expected Graduation: 2026
                    </p>


                    <div className="sda_title">
                        <img src={sda} style={{ width: "30px", height: "30px", objectFit: "cover" }}
                        />
                        <p> SDA course "JAVA form Scratch" </p>
                    </div>


                    <div style={{ marginLeft: "40px" }}>
                        <p>Scope</p>
                        <p>Introduction to JAVA</p>
                        <p>Software engineering</p>
                        <p>Databases</p>
                        <p>Frontend and Backend tech</p>
                    </div>


                    <div className="downloads">
                        <img src={download} style={{ width: "30px", height: "30px", objectFit: "cover" }}/>
                        <a href="assets/SDA_diploma.pdf"
                           download="SDA_Diploma.pdf"
                        >SDA Diploma
                        </a>

                        <a  href="assets/CV-Orson.pdf"
                            download="CV-Orson.pdf"
                        >CV
                        </a>
                    </div>

                </div>
            </div>

            <div className="Skills">

                <div className="sk" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">

                   <h1>SKILLS AND TOOLS</h1>

                    <p1>Here you will find Skills and Technologies i have work with most.
                        From programing languages,frameworks, IDEs i prefer to expand in skill and tools.
                        I constantly explore new tools to improve my work.</p1>

                </div>


                <div className="row2">

                    <div className="frameworks skills-box">
                        <h2>
                            📚 Frameworks</h2>
                        <p>React</p>
                        <p>Node.js</p>
                        <p>Django</p>
                        <p>Spring</p>
                        <p>PyTorch</p>


                    </div>



                    <div className="languages skills-box">
                        <h2>⚡ Programming Languages </h2>
                        <p>JavaScript</p>
                        <p>C++</p>
                        <p>Python</p>
                        <p>Java</p>

                        </div>
                    <div className="expertise skills-box">
                        <h2>📈 Expertise</h2>

                        <p>Full-Stack Development</p>
                        <p>Web Development </p>
                        <p>Web Applications</p>
                        <p>API Integration</p>

                        <p>Desktop Applications</p>
                        <p>GUI </p>


                    </div>


                </div>

                <div className="row3">
                    <div className="tools skills-box">
                        <h2>🛠️ Tools</h2>

                        <p>Git</p>
                        <p>GitHub</p>

                    </div>

                    <div className="freelance skills-box">
                        <h2>Freelance Side Gigs</h2>
                        <p>Web Development</p>
                        <p>Web Application Development</p>
                        <p>Python Automation</p>
                        <p>Web Scraping</p>
                        <p>Software Testing</p>
                        <p>Bug Fixes & Debugging</p>
                        <p>General Support</p>

                    </div>
                    <div className="database skills-box">
                        <h2>
                            🗄️ Databases</h2>

                        <p>PostgreSQL</p>


                    </div>
                </div>


                <div className="row4">
                    <div className="productivity skills-box">
                        <h2>Productivity</h2>

                        <p>MS Word</p>
                        <p>MS Excel</p>
                    </div>


                    <div className="math skills-box">
                        <h2>
                        Mathematical skills</h2>

                        <p>Linear Algebra</p>
                        <p>Probability and Statistics</p>
                        <p>Optimization</p>
                        <p>Calculus (Integral & Differential)</p>
                        <p>Vector Calculus</p>
                        <p>Analytical Geometry</p>
                        <p>Real and Complex Analysis</p>



                    </div>
                    <div className="IDE skills-box">
                        <h2>💻 IDEs</h2>
                        <p>PyCharm</p>
                        <p>VS Code</p>
                        <p>IntelliJ IDEA</p>
                        <p>CLion</p>
                        <p>DataGrip</p>
                        <p>WebStorm</p>

                    </div>


                    </div>



            </div>

        </div>
    );

}
export default About;