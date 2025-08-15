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



function About(){

    return (
        <div>
            <div className="photoANDuni">
                <div className="PhotoAndName">
            <img src={ship} className="ship" />
            <h1 className="name">Loren Smart</h1>
                </div>


            <div className="Stu">
            <img src={tirana} className="tirana" />
                <div className="Stu2">
                <h1>Soni Cena – Engineering of Mathematics and Computer
                    Science Student</h1>
                <p>📅 Started: October 2023 | Expected Graduation: 2026</p>
                </div>
            </div>
            </div>




            <div className="diploma_bio">
            <img src={diploma} className="diploma" />
                <div className="p">
            <p className="aboutMe">
                I am a quiet and easygoing person, able to build great chemistry with
                both extroverts and introverts. I have excellent communication skills
                and a strong ability to understand people from the US, UK, and other
                English-speaking environments. I have a strong passion for mathematics,
                with excellent skills in the subject, and I also enjoy geography,
                history, and cooking.
            </p>

            <p className="aboutMe">
                I am a full-stack developer with experience in web development and
                desktop applications. I have knowledge of Python, C++, Java, and
                JavaScript, and I am familiar with frameworks and tools such as
                Spring, React, Django, and PostgreSQL. I completed a Java course
                and received a diploma, which was awarded to me by Deputy
                Prime Minister Belinda Balluku of Albania.
            </p>
              </div>
            </div>



            <img src={icon} className="diploma" />
            <img src={icon2} className="diploma2" />
            <img src={git} className="git" />
            <img src={linkedin} className="linkedin" />

            <img src={postgres} className="postgresql" />
            <img src={webstorm} className="webstorm" />
            <img src={github} className="github" />

        </div>

    );
}
export default About;import React from "react";
