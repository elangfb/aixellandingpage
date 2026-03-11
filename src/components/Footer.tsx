import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer>
            <a href="#" className="footer-logo">
                <span className="ai">ai</span>
                <span className="xel">xel</span>
            </a>
            <div className="footer-links">
                <a href="#">Products</a>
                <a href="#">About</a>
                <a href="#">Careers</a>
                <a href="#">Contact</a>
                <a href="#">Privacy</a>
            </div>
            <div className="footer-copy">© 2026 Aixel. AI for Excellence.</div>
        </footer>
    );
};

export default Footer;
