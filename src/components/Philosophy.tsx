import React from 'react';
import { pillars } from '../data';
import './Philosophy.css';

const Philosophy: React.FC = () => {
    return (
        <section className="section" id="philosophy">
            <div className="reveal">
                <div className="section-label">Our Philosophy</div>
                <h2 className="section-title">Five principles behind<br />every <span className="accent">Aixel product</span></h2>
                <p className="section-desc">We don't just build software. We build the intelligence infrastructure that empowers your organization to pursue — and sustain — excellence at every level.</p>
            </div>
            <div className="pillars-row">
                {pillars.map((pillar, index) => (
                    <div
                        key={pillar.number}
                        className="pillar reveal"
                        style={{ transitionDelay: `${0.05 * (index + 1)}s` }}
                    >
                        <div className="pillar-num">{pillar.number}</div>
                        <div className="pillar-title">{pillar.title}</div>
                        <div className="pillar-desc">{pillar.description}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Philosophy;
