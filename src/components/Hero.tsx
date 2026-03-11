import React, { useRef } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    const heroRef = useRef<HTMLElement>(null);

    return (
        <section className="hero" ref={heroRef}>
            <div className="hero-glow1"></div>
            <div className="hero-glow2"></div>

            <div className="hero-badge">
                <div className="badge-dot"></div>AI for Excellence
            </div>

            <h1 className="hero-title">
                Intelligence that<br />
                drives your <span className="accent">business</span><br />
                <span className="light">excellence.</span>
            </h1>

            <p className="hero-sub">
                Aixel partners with ambitious enterprises to deploy AI that delivers real, measurable excellence —
                across operations, finance, talent, and beyond.
            </p>

            <div className="hero-actions">
                <a href="#products" className="btn-primary">Explore Our Suite →</a>
                <a href="#contact" className="btn-secondary">Partner With Us</a>
            </div>

            <div className="hero-metrics">
                <div>
                    <div className="metric-num">11<span>+</span></div>
                    <div className="metric-label">AI-Powered Products</div>
                </div>
                <div>
                    <div className="metric-num">2</div>
                    <div className="metric-label">Solution Verticals</div>
                </div>
                <div>
                    <div className="metric-num">1</div>
                    <div className="metric-label">Unified Intelligence Platform</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
