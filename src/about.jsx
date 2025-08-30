import Home from "./home.jsx";

// Images
import diploma from "./images/Java_diploma.jpg";
import { useEffect, useRef } from "react";


import ship from "./images/ship.jpeg";
import git from "./images/git-144.png";
import tirana from "./images/tirana.png";
import postgres from "./images/postgresql.png";
import webstorm from "./images/webstorm.png";
import sda from "./images/sda.png";
import download from "./images/download_icon.png";
import Rea from "./images2/React.png"
import nodejs from "./images2/nodejs.png";
import dj from "./images2/dj.png";
import spring from "./images2/spring.png";
import pytorch2 from "./images2/pytorch2.png";
import js from "./images2/js.png";
import java from "./images2/java.png";
import python from "./images2/python.png";
import cplusplus from "./images2/c++.png";
import full_stack from "./images2/full-stack.png";
import webdev2 from "./images2/webdev2.png";
import web_application from "./images2/web_application.png";
import api from "./images2/api.png";
import desktop_dev from "./images2/desktop_dev.png";
import GUI from "./images2/GUI.png";
import webdev from "./images3/webdev.png";
import webapp from "./images3/webapp.png";
import python_automation from "./images3/python_automation.png";
import webscraping from "./images3/webscraping.png";
import software_testing from "./images3/software_testing.png";
import debugging from "./images3/debugging.png";
import github from "./images3/github.png";
import LA from "./images3/linear_algebra.png";
import probability from "./images3/probability.png";
import optimization from "./images3/optimization.png";
import calculus from "./images3/calculus.png";
import geometry from "./images3/geometry.png";
import analysis from "./images3/analysis.png";
import vs from "./images3/vs_logo.png";
import pycharm from "./images3/pycharm-icon.png";
import datagrip from "./images3/DataGrip.png";
import inteli from "./images3/inteli_logo.png";
import clion from "./images3/CLion.png";
import exel  from "./images3/exel_logo.png";
import word_ from "./images3/word_logo.png";
import orson2 from "./images/osoni2.png";
import CVicon from "./images4/cv_icon_teal.png"
import dipicon from "./images4/icon_teal.png";













function About(){


    const bigBoxRef = useRef(null);
    const smallBoxRef = useRef(null);

    const bigBoxRef2 = useRef(null);
    const smallBoxRef2 = useRef(null);


    useEffect(() => {
        if (bigBoxRef.current && smallBoxRef.current) {
            const bigWidth = bigBoxRef.current.offsetWidth;
            smallBoxRef.current.style.width = `${bigWidth}px`;
        }

        if (bigBoxRef2.current && smallBoxRef2.current) {
            const bigWidth = bigBoxRef2.current.offsetWidth;
            smallBoxRef2.current.style.width = `${bigWidth}px`;
        }

    }, []);

    return(
        <div>

            <div className="Head">
                <h1>So What About Me?</h1>
            </div>



            <div className="bio">
            <img src={orson2}/>

                <div className="biotext">
                    <h1>I am glad you asked!</h1>
                    <p>
                        I am a Computer Science student driven by pragmatism and a desire to move beyond theory.
                        I want to sharpen real skills, explore technology, and create software that solves meaningful problems
                        and bring real value to the people I am working with.
                    </p>
                    <p>


                        I am a hardworking and quiet individual who is easy to work with.
                        I adapt well to professional environments and value focus and transparency,but I also have room for casual moments.
                        Outside of work, I enjoy traveling and believe that taking long breaks after periods of intense focus helps me grow faster.
                        I’m open-minded, can talk about almost anything, and always try to see the best in people

                    </p>

                </div>

            </div>


            <div className="education"> <h1>Education and courses!!!</h1> </div>

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
                        <a  href="/CV-Orson.pdf" download="SDA_Diploma.pdf" className="download-btn">
                            <img src={dipicon} alt="Diploma Icon" />
                            <span>SDA</span>
                        </a>

                        <a href="/SDA_diploma.pdf" download="CV-Orson.pdf" className="download-btn">
                            <img src={CVicon} alt="CV Icon" />
                            <span>CV</span>
                        </a>
                    </div>


                </div>
            </div>

            <div className="Skills">

                <div className="sk" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">

                    <h1>SKILLS AND TOOLS</h1>

                    <p1>Here you will find Skills and Technologies I have worked with most.
                        From programing languages,frameworks, IDEs i prefer to expand in skill and tools.
                        I constantly explore new tools to improve my work.</p1>

                </div>

                <div className="row2">

                    <div ref={bigBoxRef} className="frameworks skills-box">
                        <div><h2>Frameworks</h2></div>



                        <div className="skills-box-row">
                        <div className="skill-card">
                            <img src={Rea} alt="React"/>
                            <p>React</p>
                        </div>
                        <div className="skill-card">
                            <img src={nodejs} alt="Node.js"/>
                            <p>Node.js</p>
                        </div>
                        <div className="skill-card">
                            <img src={dj} alt="Django"/>
                            <p>Django</p>
                        </div>
                        </div>


                        <div className="skills-box-row">
                        <div className="skill-card">
                            <img src={spring} alt="Spring"/>
                            <p>Spring</p>
                        </div>
                        <div className="skill-card">
                            <img src={pytorch2} alt="PyTorch"/>
                            <p>PyTorch</p>
                        </div>
                        </div>
                    </div>






                    <div ref={smallBoxRef} className="languages skills-box">
                        <div><h2>⚡ Programming Languages</h2></div>
                        <div className="skills-box-row">
                        <div className="skill-card"><img src={js} alt="JavaScript"/>  <p>JavaScript</p></div>
                        <div className="skill-card"><img src={cplusplus} alt="C++"/>         <p>C++</p></div>
                        </div>

                        <div className="skills-box-row">
                        <div className="skill-card"><img src={python} alt="Python"/>      <p>Python</p></div>
                        <div className="skill-card"><img src={java} alt="Java"/>        <p>Java</p></div></div>
                    </div>



                </div>



                <div className="row3">


                    <div className="expertise skills-box">
                        <div><h2>📈 Expertise</h2></div>

                        <div className="skills-box-row">
                        <div className="skill-card"> <img src={full_stack}/>   <p>Full-Stack Development</p></div>
                        <div className="skill-card">   <img src={webdev2}/> <p>Web Development</p></div>
                        <div className="skill-card">   <img src={web_application}/> <p>Web Applications</p></div>
                        </div>

                        <div className="skills-box-row">
                        <div className="skill-card"> <img src={api}/>    <p>API Integration</p></div>
                        <div className="skill-card">   <img src={desktop_dev}/> <p>Desktop Applications</p></div>
                        <div className="skill-card">    <img src={GUI}/> <p>GUI</p></div>
                        </div>
                    </div>




                    <div className="freelance skills-box">
                       <div> <h2>Freelance Services</h2></div>

                        <div className="skills-box-row">
                        <div className="skill-card"> <img src={webdev}/>  <p>Web Development</p></div>
                        <div className="skill-card">  <img src={webapp}/> <p>Web Application Development</p></div>
                        <div className="skill-card">  <img src={python_automation}/><p>Python Automation</p></div>
                        </div>

                        <div className="skills-box-row">
                        <div className="skill-card"> <img src={webscraping}/> <p>Web Scraping</p></div>
                        <div className="skill-card"> <img src={software_testing}/> <p>Software Testing</p></div>
                        <div className="skill-card"> <img src={debugging}/> <p>Bug Fixes & Debugging</p></div>
                        </div>




                </div>





                </div>
                <div  className="row4">
                    <div ref={bigBoxRef2} className="tools skills-box">
                        <h2>🛠️ Tools</h2>
                        <div className="skills-box-row">
                        <div className="skill-card"><img src={git} alt="Git"/><p>Git</p></div>
                        <div className="skill-card"> <img src={github}/>  <p>GitHub</p></div>
                        </div>
                    </div>
                    <div ref={smallBoxRef2} className="database skills-box">
                        <h2>🗄️ Databases</h2>
                        <div className="skill-card"><img src={postgres} alt="PostgreSQL"/><p>PostgreSQL</p></div>

                    </div>

                    <div  className="productivity skills-box">
                        <h2>Productivity</h2>
                        <div className="skills-box-row">
                            <div className="skill-card"><img src={word_}/><p>MS Word</p></div>
                            <div className="skill-card"><img src={exel}/> <p>MS Excel</p></div>
                        </div>
                    </div>

                </div>
                <div className="row5">


                    <div className="math skills-box">
                        <div><h2>Mathematical Skills</h2></div>

                        <div className='skills-box-row'>
                        <div className="skill-card"><img src={LA}/><p>Linear Algebra</p></div>
                        <div className="skill-card"><img src={probability}/><p>Probability and Statistics</p></div>
                        <div className="skill-card"><img src={optimization}/><p>Optimization</p></div>
                        </div>


                        <div className="skills-box-row">
                        <div className="skill-card"><img src={calculus}/><p>Calculus (Integral & Differential)</p></div>
                        <div className="skill-card"><img src={geometry}/><p>Analytical Geometry</p></div>
                        <div className="skill-card"><img src={analysis}/><p>Real and Complex Analysis</p></div>
                        </div>
                    </div>

                    <div className="IDE skills-box">
                        <div><h2>Tools and IDE</h2></div>

                        <div className="skills-box-row">
                        <div className="skill-card"><img src={pycharm} alt="PyCharm"/><p>PyCharm</p></div>
                        <div className="skill-card"><img src={vs}/> <p>VS Code</p></div>
                        <div className="skill-card"><img src={inteli}/> <p>IntelliJ IDEA</p></div>
                        </div>

                        <div className="skills-box-row">
                        <div className="skill-card"><img src={clion}/> <p>CLion</p></div>
                        <div className="skill-card"><img src={datagrip}/> <p>DataGrip</p></div>
                        <div className="skill-card"><img src={webstorm} alt="WebStorm"/><p>WebStorm</p></div>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    );

}
export default About;