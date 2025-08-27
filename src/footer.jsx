import React from 'react';
import './index.css';
import './footer.css';
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import LINKS from './config/links';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className="footerBox">
            <h1 className="footer_tagline">Got a project? Let’s make it happen.</h1>
            <div className="links">
                <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer">
                    <Instagram size={40} />
                </a>
                <a href={`mailto:${LINKS.mail}`} target="_blank" rel="noopener noreferrer">
                    <Mail size={40} />
                </a>
                <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin size={40} />
                </a>
                <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
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
