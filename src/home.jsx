import ship from './ship.jpeg';
import Home_des from "./home_des.jsx";

function Home(){
    return (
     <div>
         <h1>Humble heart but seek the vast horizon.</h1>
         <h1 >Hi, I’m Loren Smart</h1>

         <img src={ship} alt="Ship" />
         <Home_des/>
     </div>

    );
}
export default Home;