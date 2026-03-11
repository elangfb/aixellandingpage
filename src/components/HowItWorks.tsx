import React from 'react';
import './HowItWorks.css';

const HowItWorks: React.FC = () => {
    return (
        <section className="section" id="how">
            <div className="how-layout">
                <div>
                    <div className="section-label reveal">How We Work With You</div>
                    <h2 className="section-title reveal" style={{ maxWidth: '340px' }}>Your path to<br />excellence in <span className="accent">three steps</span></h2>
                    <div className="how-visual reveal" style={{ marginTop: '40px' }}>
                        <div className="how-visual-glow"></div>
                        <span className="how-small-label">The Aixel approach</span>
                        <div className="how-big-num"><span>3</span></div>
                        <div className="how-visual-desc">We don't just deploy software. We partner with you to embed intelligence where it drives the most impact.</div>
                    </div>
                </div>
                <div className="how-steps">
                    <div className="how-step reveal">
                        <div className="step-circle">01</div>
                        <div>
                            <div className="step-title">We understand your ambition</div>
                            <div className="step-desc">Every engagement starts with a deep understanding of where your business wants to go. We map your current operations, identify excellence gaps, and define the intelligence that will close them.</div>
                        </div>
                    </div>
                    <div className="how-step reveal" style={{ transitionDelay: '0.1s' }}>
                        <div className="step-circle">02</div>
                        <div>
                            <div className="step-title">We deploy intelligence that fits</div>
                            <div className="step-desc">Aixel products integrate with your existing systems — not against them. We configure, onboard, and activate the right suite for your needs, ensuring your team gains capability, not complexity.</div>
                        </div>
                    </div>
                    <div className="how-step reveal" style={{ transitionDelay: '0.2s' }}>
                        <div className="step-circle">03</div>
                        <div>
                            <div className="step-title">Your excellence compounds</div>
                            <div className="step-desc">As Aixel learns your business, the intelligence deepens. Better forecasts. Sharper decisions. Stronger outcomes. Excellence doesn't plateau — it accelerates.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
