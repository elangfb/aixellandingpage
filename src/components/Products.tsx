import React, { useState } from 'react';
import { products } from '../data';
import './Products.css';

const getIcon = (type: number) => {
    switch (type) {
        case 1: return <svg viewBox="0 0 22 22" fill="none"><circle cx="5" cy="11" r="3" stroke="#B8922A" strokeWidth="1.5" /><circle cx="17" cy="6" r="3" stroke="#B8922A" strokeWidth="1.5" /><circle cx="17" cy="16" r="3" stroke="#B8922A" strokeWidth="1.5" /><line x1="8" y1="10" x2="14" y2="7.5" stroke="#B8922A" strokeWidth="1.2" /><line x1="8" y1="12" x2="14" y2="14.5" stroke="#B8922A" strokeWidth="1.2" /></svg>;
        case 2: return <svg viewBox="0 0 22 22" fill="none"><polyline points="3,17 8,9 13,13 19,4" stroke="#B8922A" strokeWidth="1.5" /><circle cx="19" cy="4" r="1.5" fill="#B8922A" /></svg>;
        case 3: return <svg viewBox="0 0 22 22" fill="none"><rect x="2" y="5" width="8" height="5" rx="1" stroke="#B8922A" strokeWidth="1.5" /><rect x="12" y="5" width="8" height="5" rx="1" stroke="#B8922A" strokeWidth="1.5" /><rect x="2" y="13" width="8" height="5" rx="1" stroke="#B8922A" strokeWidth="1.5" /><rect x="12" y="13" width="8" height="5" rx="1" stroke="#B8922A" strokeWidth="1.5" /><line x1="10" y1="7.5" x2="12" y2="7.5" stroke="#B8922A" strokeWidth="1.2" /><line x1="10" y1="15.5" x2="12" y2="15.5" stroke="#B8922A" strokeWidth="1.2" /></svg>;
        case 4: return <svg viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="4" stroke="#B8922A" strokeWidth="1.5" /><path d="M4,19 C4,14 18,14 18,19" stroke="#B8922A" strokeWidth="1.5" /><path d="M14,3.5 L15.5,6 L18,6.5 L16,8.5 L16.5,11 L14,10 L11.5,11 L12,8.5 L10,6.5 L12.5,6 Z" stroke="#B8922A" strokeWidth="0.8" fill="none" opacity="0.7" /></svg>;
        case 5: return <svg viewBox="0 0 22 22" fill="none"><rect x="4" y="2" width="14" height="18" rx="1.5" stroke="#B8922A" strokeWidth="1.5" /><line x1="7" y1="8" x2="15" y2="8" stroke="#B8922A" strokeWidth="1.2" opacity="0.6" /><line x1="7" y1="11.5" x2="15" y2="11.5" stroke="#B8922A" strokeWidth="1.2" opacity="0.6" /><line x1="7" y1="15" x2="12" y2="15" stroke="#B8922A" strokeWidth="1.2" opacity="0.6" /></svg>;
        case 6: return <svg viewBox="0 0 22 22" fill="none"><line x1="3" y1="11" x2="19" y2="11" stroke="#B8922A" strokeWidth="1.2" /><circle cx="7" cy="11" r="2.5" stroke="#B8922A" strokeWidth="1.5" /><circle cx="13" cy="11" r="2.5" stroke="#B8922A" strokeWidth="1.5" /><path d="M18,8 L21.5,11 L18,14" stroke="#B8922A" strokeWidth="1.5" fill="none" /></svg>;
        case 7: return <svg viewBox="0 0 22 22" fill="none"><path d="M3,16 Q11,4 19,16" stroke="#B8922A" strokeWidth="1.5" fill="none" /><circle cx="11" cy="9" r="2.5" stroke="#B8922A" strokeWidth="1.5" /><line x1="11" y1="3" x2="11" y2="6" stroke="#B8922A" strokeWidth="1.5" /></svg>;
        case 8: return <svg viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="2.5" fill="#B8922A" opacity="0.7" /><circle cx="5" cy="5" r="2" stroke="#B8922A" strokeWidth="1.5" /><circle cx="17" cy="5" r="2" stroke="#B8922A" strokeWidth="1.5" /><circle cx="5" cy="17" r="2" stroke="#B8922A" strokeWidth="1.5" /><circle cx="17" cy="17" r="2" stroke="#B8922A" strokeWidth="1.5" /><line x1="7" y1="7" x2="9.5" y2="9.5" stroke="#B8922A" strokeWidth="1" opacity="0.5" /><line x1="15" y1="7" x2="12.5" y2="9.5" stroke="#B8922A" strokeWidth="1" opacity="0.5" /><line x1="7" y1="15" x2="9.5" y2="12.5" stroke="#B8922A" strokeWidth="1" opacity="0.5" /><line x1="15" y1="15" x2="12.5" y2="12.5" stroke="#B8922A" strokeWidth="1" opacity="0.5" /></svg>;
        case 9: return <svg viewBox="0 0 22 22" fill="none"><path d="M5,3 L17,3 L17,16 L11,21 L5,16 Z" stroke="#B8922A" strokeWidth="1.5" fill="none" /><polyline points="8,11 10,13 14,9" stroke="#B8922A" strokeWidth="1.5" fill="none" /></svg>;
        case 10: return <svg viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="7" stroke="#B8922A" strokeWidth="1.5" /><path d="M11,7 L11,11 L14,14" stroke="#B8922A" strokeWidth="1.5" /></svg>;
        case 11: return <svg viewBox="0 0 22 22" fill="none"><circle cx="11" cy="4" r="2.5" stroke="#B8922A" strokeWidth="1.5" /><circle cx="5" cy="14" r="2.5" stroke="#B8922A" strokeWidth="1.5" /><circle cx="17" cy="14" r="2.5" stroke="#B8922A" strokeWidth="1.5" /><line x1="10" y1="6.5" x2="6.5" y2="11.5" stroke="#B8922A" strokeWidth="1.5" /><line x1="12" y1="6.5" x2="15.5" y2="11.5" stroke="#B8922A" strokeWidth="1.5" /><line x1="5" y1="17" x2="8" y2="21" stroke="#B8922A" strokeWidth="1" opacity="0.5" /><line x1="17" y1="17" x2="14" y2="21" stroke="#B8922A" strokeWidth="1" opacity="0.5" /></svg>;
        default: return null;
    }
};

const Products: React.FC = () => {
    const [filter, setFilter] = useState<'all' | 'general' | 'financial'>('all');

    const filteredProducts = products.filter(p => filter === 'all' || p.category === filter);

    return (
        <section className="section section-white" id="products">
            <div className="products-header reveal">
                <div>
                    <div className="section-label">Our Product Suite</div>
                    <h2 className="section-title">Built to elevate<br />every part of your <span className="accent">business</span></h2>
                </div>
                <div className="filter-wrap">
                    <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
                    <button className={`filter-btn ${filter === 'general' ? 'active' : ''}`} onClick={() => setFilter('general')}>General Business</button>
                    <button className={`filter-btn ${filter === 'financial' ? 'active' : ''}`} onClick={() => setFilter('financial')}>Financial Services</button>
                </div>
            </div>

            <div className="products-grid" id="productsGrid">
                {filteredProducts.map((p) => (
                    <div key={p.id} className={`product-card reveal ${p.wide ? 'wide' : ''}`}>
                        <div className="card-top">
                            <div className="card-icon-wrap">
                                {getIcon(p.iconType)}
                            </div>
                            <span className="card-num">{p.number}</span>
                        </div>
                        {p.category === 'financial' && <div className="fin-badge">Financial Services</div>}
                        <div className="card-name"><span className="al">{p.nameStart}</span>{p.nameEnd}</div>
                        <div className="card-tagline">{p.tagline}</div>
                        <div className="card-desc">{p.description}</div>
                        <div className="card-bullets">
                            {p.bullets.map((b, i) => (
                                <div key={i} className="card-bullet">{b}</div>
                            ))}
                        </div>
                        <a href="#" className="card-link">Learn more →</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
