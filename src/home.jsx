import ship from './ship.jpeg';
import hero from './cost_city.jpg';
import diplom from './diploma.png';


function Home(){
    return (
        <div className="homeContainer">
            <div className="hero">
                <img src={hero} className="heroImg" />
                <div className="hero-con">
                    <h4 className="tagline">Humble heart but seek the vast horizon.</h4>
                    <img className="imgprof" src={ship} alt="Ship" />

                    <h1 className="intro">Hi, I’m Loren Smart</h1>
                </div>
            </div>

            <img src={diplom} className="diplomImg" />
            <section className="section">

                <p className="pabout" >
                    Welcome to my personal space.
                </p>
                <p className="pabout">
                    I am a dedicated Computer Science student and developer with
                    hands-on experience building websites, web and desktop applications,
                    and managing databases like PostgreSQL. Proficient in C++, Java,
                    JavaScript(React), and Python, I continually expand my skills through
                    formal coursework at university and self-driven projects.
                </p>
                <p className="pabout">
                    Driven by a strong work ethic and a calm, friendly approach, I take
                    pride in delivering reliable, efficient solutions. Feel free to explore
                    my projects, learn more about me, or get in touch.
                </p>
            </section>

        </div>



    );
}
export default Home;