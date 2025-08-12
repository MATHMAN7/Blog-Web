import ship from './ship.jpeg';


function Home(){
    return (
     <div className="homeContainer">
         <h1 style={{ color: "whitesmoke" }}>Humble heart but seek the vast horizon.</h1>

         <div className="picAndhi">
         <img className="imgprof" src={ship} alt="Ship" />
         <h1 className="intro">Hi, I’m Loren Smart</h1>
         </div>


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