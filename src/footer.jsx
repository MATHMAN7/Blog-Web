import React from 'react';
import './index.css';
import './footer.css';
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div  className="footerBox">

        <footer className="footer">
            © {year} Loren Smart. All rights reserved.
        </footer>
            <a
                href="https://instagram.com/thegreatmathman"
                target="_blank"
                rel="noopener noreferrer">

                <Instagram size={20} />
            </a>

            <a href="mailto:sonycena844@gmail.com"


            >
                <Mail size={20} />
            </a>


        </div>
    );
}
export default Footer;
