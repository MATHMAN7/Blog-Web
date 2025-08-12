import React from 'react';
import './index.css';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            © {year} Loren Smart. All rights reserved.
        </footer>
    );
}
export default Footer;
