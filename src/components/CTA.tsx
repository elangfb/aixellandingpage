import React from 'react';
import './CTA.css';

const CTA: React.FC = () => {
    return (
        <section className="cta-section" id="contact">
            <div className="cta-center-glow"></div>
            <div className="cta-inner">
                <div className="cta-badge reveal">Partner with Aixel</div>
                <h2 className="cta-title reveal">Ready to pursue<br /><span className="accent">excellence together?</span></h2>
                <p className="cta-sub reveal">Ambitious enterprises choose Aixel because they understand that intelligence is not a feature — it is a competitive advantage. Let's build yours.</p>
                <div className="cta-actions reveal">
                    <a href="#" className="btn-gold">Start the Conversation →</a>
                    <a href="#products" className="btn-outline-white">Explore Our Suite</a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
