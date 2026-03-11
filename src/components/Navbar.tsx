import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav id="mainNav" className={scrolled ? 'scrolled' : ''}>
            <a href="#" className="logo">
                <span className="ai">ai</span>
                <span className="xel">xel</span>
            </a>
            <ul>
                <li><a href="#products">Products</a></li>
                <li><a href="#philosophy">Philosophy</a></li>
                <li><a href="#solutions">Solutions</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact" className="nav-cta">Get Started</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
