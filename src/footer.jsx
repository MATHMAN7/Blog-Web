import React from 'react';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="text-center text-gray-500 text-sm py-4 border-t mt-8">
            © {year} Loren Smart. All rights reserved.
        </footer>
    );
}
export default Footer;
