import hero from './cost_city.jpg';
import soni from './osoni2.png';
import './index.css';



function Home(){
    return (
        <div className="homeContainer">
            <div className="hero">
                <img src={hero} className="heroImg" />
                <div className="hero-con">
                    <h4 className="tagline">Humble heart but seek the vast horizon.</h4>
                    <img className="imgprof" src={soni} alt="Ship" />

                    <h1 className="intro">Hi, I’m Loren Smart</h1>
                </div>
            </div>



        </div>



    );
}
export default Home;