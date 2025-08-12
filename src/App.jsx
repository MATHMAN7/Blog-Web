import './App.css'
import Web_pages from './web_pages'
import Home from './home'
import About from './about'
import Projects from './projects'
import Contact from './contact'
import {useState} from "react";
import Footer from "./footer.jsx";
import './index.css';


function App() {
    const [page, setPage] = useState("home");

    function handlePageChange(pageName) {
        setPage(pageName);
    }

    let content;
    switch (page) {
        case "home":
            content = <Home />;
            break;
        case "about":
            content = <About />;
            break;
        case "projects":
            content = <Projects />;
            break;
        case "contact":
            content = <Contact />;
            break;
        default:
            content = <Home />;
    }


    return (
        <div className="App">
            <Web_pages onSelectPage={handlePageChange} />
            <div className="page-content">{content}</div>
           <div className="footer"> <Footer /> </div>
        </div>
    );


}
export default App;
