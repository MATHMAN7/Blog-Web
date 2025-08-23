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

                <div className="sk">SKILLS</div>


                <div className="row2">

                <div className="languages skills-box">⚡ Programming Languages<br/>JavaScript, Python, C++</div>
                    <div className="frameworks skills-box">📚 Frameworks<br/>React, Django, Node.js</div>
                <div className="database skills-box">🗄️ Databases<br/>Postgres, MongoDB</div>

                </div>

                <div className="row3">
                <div className="tools skills-box">🛠️ Tools<br/>Git, Docker, Linux</div>
                <div className="IDE skills-box">💻 IDEs<br/>VS Code, PyCharm</div>
                    <div className="productivity skills-box">Productivity <br/>Word,Exel</div>
                </div>


                <div className="row4">
                   <div className="expertise skills-box">📈 Expertise<br/>Algorithms, Data Analysis</div>
                    <div className="freelance skills-box">Freelance platforms <br/>Upwork</div>
                    <div className="math skills-box"> Mathematical skills <br/>calculus</div>
                </div>

                <div className="Experiments skills-box">I have experience with <br/>pytorch</div>

            </div>

        </div>
    );

}
export default About;