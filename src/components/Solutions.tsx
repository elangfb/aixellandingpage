import React from 'react';
import './Solutions.css';

const Solutions: React.FC = () => {
    return (
        <section className="section section-white" id="solutions">
            <div className="reveal">
                <div className="section-label">Solution Verticals</div>
                <h2 className="section-title">One platform,<br /><span className="accent">two powerful verticals</span></h2>
                <p className="section-desc">Whether your focus is operational excellence or financial mastery, Aixel has the right intelligence — purpose-built for your domain and your ambition.</p>
            </div>
            <div className="cat-grid">
                <div className="cat-card biz reveal">
                    <div className="cat-glow"></div>
                    <span className="cat-label">Vertical 01</span>
                    <h3 className="cat-title">General<br />Business</h3>
                    <p className="cat-text">Nine AI-powered products that drive excellence across every business function — from how you serve customers and manage talent, to how you forecast revenue, reconcile finances, and stay compliant.</p>
                    <div className="cat-tags">
                        <span className="cat-tag"><span className="al">a</span>ccord crm</span>
                        <span className="cat-tag"><span className="al">a</span>cuity analytics</span>
                        <span className="cat-tag"><span className="al">a</span>lign reconcile</span>
                        <span className="cat-tag"><span className="al">a</span>ptitude assess</span>
                        <span className="cat-tag"><span className="al">a</span>nnals chronicle</span>
                        <span className="cat-tag"><span className="al">a</span>dvance pipeline</span>
                        <span className="cat-tag"><span className="al">a</span>ltitude viability</span>
                        <span className="cat-tag"><span className="al">a</span>rray portfolio</span>
                        <span className="cat-tag"><span className="al">a</span>udit comply</span>
                    </div>
                </div>
                <div className="cat-card fin reveal">
                    <div className="cat-glow"></div>
                    <span className="cat-label">Vertical 02</span>
                    <h3 className="cat-title">Financial<br />Services</h3>
                    <p className="cat-text">Two deeply specialized products for individuals and families who take wealth seriously — from smart personal finance management to the kind of multi-generational legacy planning that endures.</p>
                    <div className="cat-tags">
                        <span className="cat-tag"><span className="al">a</span>ffluence personal</span>
                        <span className="cat-tag"><span className="al">a</span>ncestry legacy</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
