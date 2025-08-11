import App from './App'


function Web_pages({onSelectPage}){
    return(
        <div className="panel">

            <button onClick={() => onSelectPage("home")}>Home</button>
            <button onClick={() => onSelectPage("about")}>About Me</button>
            <button onClick={() => onSelectPage("projects")}>Projects</button>
            <button onClick={() => onSelectPage("contact")}>Contact Me</button>

        </div>
    )
}
export default Web_pages;