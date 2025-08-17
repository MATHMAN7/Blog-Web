import React from 'react';
import './index.css';
import './footer.css';
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div  className="footerBox">


            <h1 className="footer_tagline">Got a project? Let’s make it happen.</h1>
            <div className="links">
            <a
                href="https://instagram.com/thegreatmathman"
                target="_blank"
                rel="noopener noreferrer">

                <Instagram size={40} />
            </a>

            <a href="mailto:sonycena844@gmail.com"
               target="_blank"
               rel="noopener noreferrer">


                <Mail size={40} />
            </a>
            <a
                href="https://www.linkedin.com/in/orson-cena-961a2434b/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Linkedin size={40} />
            </a>
            <a
                href="https://github.com/MATHMAN7"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Github size={40} />
            </a>
            </div>


            <footer className="footer">
                © {year} Loren Smart. All rights reserved.
            </footer>

        </div>
    );
}
export default Footer;