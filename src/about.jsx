import Home from "./home.jsx";
//import diploma from "./Java_diploma.jpg";
import icon from "./icon_task.png";
import icon2 from "./check_JS.png";
import ship from "./ship.jpeg"
import git from "./git-144.png"
import linkedin from "./linkedin-100.png"
import tirana from "./tirana.png"
import postgres from "./postgresql.png"
import webstorm from "./webstorm.png"
import github from "./github.png"
import diploma from "./diploma.png"
import download from "./download_icon.png"
import sda from "./sda.png"


function About(){

    return(
        <div>

            <div className="Head">
                <h1>About Me</h1>
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
    );

}
export default About;