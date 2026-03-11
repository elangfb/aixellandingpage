import React from 'react';
import { portfolio } from '../data';
import './Portfolio.css';

const Portfolio: React.FC = () => {
    return (
        <section className="section" id="portfolio">
            <div className="reveal">
                <div className="section-label">Our Portfolio</div>
                <h2 className="section-title">Ventures we've built<br />and <span className="accent">brought to market</span></h2>
                <p className="section-desc">Aixel doesn't just build tools — we build companies. Here are the ventures we've created, each driven by the same commitment to intelligence and excellence.</p>
            </div>

            <div className="portfolio-grid">
                {portfolio.map((item, index) => (
                    <div
                        key={item.id}
                        className="port-card reveal"
                        style={{ transitionDelay: `${0.06 * index}s` }}
                    >
                        <div className="port-header">
                            <div className={`port-icon ${item.colorClass}`}>{item.icon}</div>
                            <span className="port-domain">{item.domain}</span>
                        </div>
                        <div className="port-category">{item.category}</div>
                        <div className="port-name">{item.nameStart}<span className="domain-accent">{item.nameEnd}</span></div>
                        <p className="port-desc">{item.description}</p>
                        <div className="port-tags">
                            {item.tags.map((tag, i) => (
                                <span key={i} className="port-tag">{tag}</span>
                            ))}
                        </div>
                        <a href={item.url} className="port-link" target="_blank" rel="noopener noreferrer">Visit {item.nameStart}{item.nameEnd} →</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
