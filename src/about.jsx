import Home from "./home.jsx";

// Images
import diploma from "./images/Java_diploma.jpg";


import ship from "./images/ship.jpeg";
import git from "./images/git-144.png";
import tirana from "./images/tirana.png";
import postgres from "./images/postgresql.png";
import webstorm from "./images/webstorm.png";
import sda from "./images/sda.png";
import download from "./images/download_icon.png";

// PDFs
import CV from "./images/CV-Orson.pdf";

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
                        <h2>Frameworks</h2>

                        <div className="skill-card">
                            <img src="" alt="React"/>
                            <p>React</p>
                        </div>
                        <div className="skill-card">
                            <img src="" alt="Node.js"/>
                            <p>Node.js</p>
                        </div>
                        <div className="skill-card">
                            <img src="" alt="Django"/>
                            <p>Django</p>
                        </div>
                        <div className="skill-card">
                            <img src="" alt="Spring"/>
                            <p>Spring</p>
                        </div>
                        <div className="skill-card">
                            <img src="" alt="PyTorch"/>
                            <p>PyTorch</p>
                        </div>
                    </div>

                    <div className="languages skills-box">
                        <h2>⚡ Programming Languages</h2>
                        <div className="skill-card"><img src="" alt="JavaScript"/>  <p>JavaScript</p></div>
                        <div className="skill-card"><img src="" alt="C++"/>         <p>C++</p></div>
                        <div className="skill-card"><img src="" alt="Python"/>      <p>Python</p></div>
                        <div className="skill-card"><img src="" alt="Java"/>        <p>Java</p></div>
                    </div>



                </div>



                <div className="row3">


                    <div className="expertise skills-box">
                        <h2>📈 Expertise</h2>
                        <div className="skill-card">    <p>Full-Stack Development</p></div>
                        <div className="skill-card">    <p>Web Development</p></div>
                        <div className="skill-card">    <p>Web Applications</p></div>
                        <div className="skill-card">    <p>API Integration</p></div>
                        <div className="skill-card">    <p>Desktop Applications</p></div>
                        <div className="skill-card">    <p>GUI</p></div>
                    </div>




                    <div className="freelance skills-box">
                        <div className="skill-card"><p>Web Development</p></div>
                        <div className="skill-card"><p>Web Application Development</p></div>
                        <div className="skill-card"><p>Python Automation</p></div>
                        <div className="skill-card"><p>Web Scraping</p></div>
                        <div className="skill-card"><p>Software Testing</p></div>
                        <div className="skill-card"><p>Bug Fixes & Debugging</p></div>
                        <div className="skill-card"><p>General Support</p></div>


                </div>





                </div>
                <div className="row4">
                    <div className="tools skills-box">
                        <h2>🛠️ Tools</h2>
                        <div className="skill-card"><img src="" alt="Git"/><p>Git</p></div>
                        <div className="skill-card">   <p>GitHub</p></div>
                    </div>
                    <div className="database skills-box">
                        <h2>🗄️ Databases</h2>
                        <div className="skill-card"><img src="" alt="PostgreSQL"/><p>PostgreSQL</p></div>

                    </div>

                </div>
                <div className="row5">


                    <div className="math skills-box">
                        <h2>Mathematical Skills</h2>
                        <div className="skill-card"><p>Linear Algebra</p></div>
                        <div className="skill-card"><p>Probability and Statistics</p></div>
                        <div className="skill-card"><p>Optimization</p></div>
                        <div className="skill-card"><p>Calculus (Integral & Differential)</p></div>
                        <div className="skill-card"><p>Vector Calculus</p></div>
                        <div className="skill-card"><p>Analytical Geometry</p></div>
                        <div className="skill-card"><p>Real and Complex Analysis</p></div>
                    </div>

                    <div className="IDE skills-box">
                        <div className="skill-card"><img src="" alt="PyCharm"/><p>PyCharm</p></div>
                        <div className="skill-card"><p>VS Code</p></div>
                        <div className="skill-card"><p>IntelliJ IDEA</p></div>
                        <div className="skill-card"><p>CLion</p></div>
                        <div className="skill-card"><p>DataGrip</p></div>
                        <div className="skill-card"><img src="" alt="WebStorm"/><p>WebStorm</p></div>
                    </div>
                </div>
                <div className="row6">
                    <div className="productivity skills-box">
                        <h2>Productivity</h2>
                        <div className="skill-card"><p>MS Word</p></div>
                        <div className="skill-card"><p>MS Excel</p></div>
                    </div>
                </div>

            </div>


        </div>
    );

}
export default About;