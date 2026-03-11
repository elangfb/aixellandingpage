import React, { useEffect } from 'react';
import './InvestasiMBG.css';

const InvestasiMBG: React.FC = () => {
    useEffect(() => {
        // Scroll reveal
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    if (e.target.classList.contains('imbg-struct-card') ||
                        e.target.classList.contains('imbg-roi-card') ||
                        e.target.classList.contains('imbg-sens-card')) {
                        (e.target as HTMLElement).style.opacity = '1';
                        (e.target as HTMLElement).style.transform = 'translateY(0)';
                    }
                }
            });
        }, { threshold: 0.12 });

        document.querySelectorAll('.imbg-reveal, .imbg-reveal-left, .imbg-struct-card, .imbg-roi-card, .imbg-sens-card, .imbg-risk-card, .imbg-compare-row').forEach(el => observer.observe(el));

        // Custom delays
        const cardObs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    const delay = parseFloat((e.target as HTMLElement).style.transitionDelay || '0') * 1000;
                    setTimeout(() => {
                        (e.target as HTMLElement).style.opacity = '1';
                        (e.target as HTMLElement).style.transform = e.target.classList.contains('imbg-sens-card') && (e.target as HTMLElement).style.transform.includes('scale(1.03)')
                            ? 'scale(1.03) translateY(0)'
                            : 'translateY(0)';
                    }, delay);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.imbg-struct-card, .imbg-roi-card, .imbg-sens-card').forEach(el => cardObs.observe(el));

        const riskObs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    const delay = parseFloat((e.target as HTMLElement).style.transitionDelay || '0') * 1000;
                    setTimeout(() => {
                        (e.target as HTMLElement).style.opacity = '1';
                        (e.target as HTMLElement).style.transform = 'translateX(0)';
                    }, delay);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.imbg-risk-card').forEach(el => riskObs.observe(el));

        const barObs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    const target = e.target as HTMLElement;
                    target.style.opacity = '1';
                    target.style.transform = 'translateX(0)';
                    const pct = parseFloat(target.dataset.pct || '0');
                    const max = parseFloat(target.dataset.max || '100');
                    const bar = target.querySelector('.imbg-compare-bar') as HTMLElement;
                    setTimeout(() => {
                        if (bar) bar.style.width = (pct / max * 100) + '%';
                    }, 200 + Array.from(document.querySelectorAll('.imbg-compare-row')).indexOf(target) * 100);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.imbg-compare-row').forEach(el => barObs.observe(el));

        // SVG Chart
        const drawCashFlow = () => {
            const svg = document.getElementById('cfSvg');
            if (!svg) return;

            const W = 1000, H = 300;
            const padL = 70, padR = 30, padT = 30, padB = 50;
            const chartW = W - padL - padR;
            const chartH = H - padT - padB;

            const data: { m: number, v: number }[] = [];
            for (let m = 0; m <= 51; m++) {
                const active = Math.max(0, m - 3);
                data.push({ m, v: active * 75 - 1450 });
            }

            const minV = -1450, maxV = 2150;
            const range = maxV - minV;

            const cx = (m: number) => padL + (m / 51) * chartW;
            const cy = (v: number) => padT + chartH - ((v - minV) / range) * chartH;
            const zeroY = cy(0);

            let path = `M ${cx(0)} ${cy(-1450)}`;
            for (let i = 1; i < data.length; i++) {
                path += ` L ${cx(data[i].m)} ${cy(data[i].v)}`;
            }

            let fillPath = '';
            let started = false;
            for (let i = 0; i < data.length; i++) {
                if (data[i].v > 0 && !started) {
                    const prev = data[i - 1], cur = data[i];
                    const t = -prev.v / (cur.v - prev.v);
                    const xCross = cx(prev.m + t * (cur.m - prev.m));
                    fillPath = `M ${xCross} ${zeroY} L ${cx(cur.m)} ${cy(cur.v)}`;
                    started = true;
                } else if (data[i].v > 0) {
                    fillPath += ` L ${cx(data[i].m)} ${cy(data[i].v)}`;
                }
            }
            if (started) fillPath += ` L ${cx(48)} ${zeroY} Z`;

            const gridLines = [-1000, -500, 0, 500, 1000, 1500, 2000].map(v => `
        <line x1="${padL}" y1="${cy(v)}" x2="${W - padR}" y2="${cy(v)}"
          stroke="${v === 0 ? '#f9a825' : '#e2e8f0'}"
          stroke-width="${v === 0 ? 1.5 : 0.75}"
          stroke-dasharray="${v === 0 ? '0' : '6,4'}"
        />
        <text x="${padL - 8}" y="${cy(v) + 4}" text-anchor="end" font-size="10" fill="#94a3b8" font-family="DM Mono, monospace">
          ${v > 0 ? '+' : ''}${v}Jt
        </text>
      `).join('');

            const xAxis = [0, 6, 12, 18, 22, 24, 30, 36, 42, 48, 51].map(m => `
        <text x="${cx(m)}" y="${H - 8}" text-anchor="middle" font-size="10" fill="#94a3b8" font-family="DM Sans, sans-serif">
          ${m}
        </text>
      `).join('');

            const dots = [0, 12, 22, 36, 48, 51].map(m => {
                const d = data[m];
                return `<circle cx="${cx(m)}" cy="${cy(d.v)}" r="5" fill="${d.v >= 0 ? '#2e7d32' : '#ef4444'}" stroke="white" stroke-width="2"/>`;
            }).join('');

            svg.innerHTML = `
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#1b4a20"/>
            <stop offset="45%" stop-color="#2e7d32"/>
            <stop offset="100%" stop-color="#4caf50"/>
          </linearGradient>
        </defs>
        ${gridLines}
        ${xAxis}
        <text x="${W / 2}" y="${H - 2}" text-anchor="middle" font-size="10" fill="#94a3b8" font-family="DM Sans, sans-serif">Bulan ke-</text>
        <path d="${fillPath}" fill="#c8e6c9" fill-opacity="0.5"/>
        <path d="${path}" fill="none" stroke="url(#lineGrad)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="${cx(22.3)}" y1="${padT}" x2="${cx(22.3)}" y2="${H - padB}" stroke="#f9a825" stroke-width="1.5" stroke-dasharray="5,4"/>
        <rect x="${cx(22.3) - 38}" y="${padT + 4}" width="76" height="22" rx="4" fill="#f9a825"/>
        <text x="${cx(22.3)}" y="${padT + 19}" text-anchor="middle" font-size="10" font-weight="700" fill="#0f2d13" font-family="DM Sans, sans-serif">
          Payback ~Bln 22
        </text>
        ${dots}
      `;
        };

        drawCashFlow();
        window.addEventListener('resize', drawCashFlow);

        // Counter animation
        const animateCounters = () => {
            document.querySelectorAll('.imbg-big-stat-num').forEach(el => {
                const targetText = el.textContent || '';
                const target = parseFloat(targetText);
                if (isNaN(target)) return;
                let current = 0;
                const step = target / 60;
                const timer = setInterval(() => {
                    current = Math.min(current + step, target);
                    el.textContent = Number.isInteger(target) ? Math.round(current).toString() : current.toFixed(2).replace('.', ',');
                    if (current >= target) clearInterval(timer);
                }, 20);
            });
        };

        const statObs = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                animateCounters();
                statObs.disconnect();
            }
        }, { threshold: 0.3 });
        const statWrap = document.querySelector('.imbg-big-stat-wrap');
        if (statWrap) statObs.observe(statWrap);

        return () => {
            observer.disconnect();
            cardObs.disconnect();
            riskObs.disconnect();
            barObs.disconnect();
            statObs.disconnect();
            window.removeEventListener('resize', drawCashFlow);
        };
    }, []);

    return (
        <div className="investasi-mbg-page">
            {/* NAV */}
            <nav className="imbg-nav">
                <a href="/" className="imbg-nav-logo">Kanisa</a>
                <ul className="imbg-nav-links">
                    <li><a href="#struktur">Struktur</a></li>
                    <li><a href="#cashflow">Cash Flow</a></li>
                    <li><a href="#roi">ROI & IRR</a></li>
                    <li><a href="#risiko">Risiko</a></li>
                </ul>
                <span className="imbg-nav-badge">Confidential 2026</span>
            </nav>

            {/* HERO */}
            <div className="imbg-hero">
                <div className="imbg-hero-bg">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <div className="grid-lines"></div>
                </div>
                <div className="imbg-hero-tag">📋 Investment Proposal</div>
                <h1 className="imbg-hero-title">Dapur MBG<br /><em>Kanisa</em></h1>
                <p className="imbg-hero-sub">Program Makan Bergizi Gratis (MBG) · Peluang Investasi Bagi Hasil · 2026</p>
                <div className="imbg-hero-kpis">
                    <div className="imbg-hero-kpi">
                        <div className="imbg-hero-kpi-val">Rp 1,45 M</div>
                        <div className="imbg-hero-kpi-lbl">Nilai Investasi</div>
                    </div>
                    <div className="imbg-hero-kpi">
                        <div className="imbg-hero-kpi-val">Rp 75 Jt</div>
                        <div className="imbg-hero-kpi-lbl">Bagi Hasil / Bulan</div>
                    </div>
                    <div className="imbg-hero-kpi">
                        <div className="imbg-hero-kpi-val">48 Bulan</div>
                        <div className="imbg-hero-kpi-lbl">Periode Kerjasama</div>
                    </div>
                    <div className="imbg-hero-kpi">
                        <div className="imbg-hero-kpi-val">58%</div>
                        <div className="imbg-hero-kpi-lbl">Annual IRR</div>
                    </div>
                </div>
                <div className="imbg-hero-scroll">
                    <div className="imbg-scroll-dot"></div>
                </div>
            </div>

            <div className="imbg-divider"></div>

            {/* STRUKTUR INVESTASI */}
            <section id="struktur" className="imbg-section">
                <div className="imbg-section-label">01 — Struktur Investasi</div>
                <h2 className="imbg-section-title imbg-reveal">Parameter &amp; Ketentuan<br />Kerjasama</h2>
                <p className="imbg-section-desc imbg-reveal">Skema investasi bagi hasil yang transparan dan terstruktur, dirancang untuk memberikan kepastian return kepada investor.</p>

                <div className="imbg-struct-grid">
                    <div className="imbg-struct-card imbg-reveal">
                        <div className="imbg-struct-card-icon">💰</div>
                        <div className="imbg-struct-card-lbl">Nilai Investasi</div>
                        <div className="imbg-struct-card-val">Rp 1.450.000.000</div>
                        <div className="imbg-struct-card-sub">Modal awal pembangunan & operasional dapur MBG</div>
                    </div>
                    <div className="imbg-struct-card imbg-reveal" style={{ transitionDelay: '.1s' }}>
                        <div className="imbg-struct-card-icon">⏳</div>
                        <div className="imbg-struct-card-lbl">Grace Period</div>
                        <div className="imbg-struct-card-val">3 Bulan</div>
                        <div className="imbg-struct-card-sub">Bulan 1–3: Periode setup, instalasi, dan uji operasional dapur</div>
                    </div>
                    <div className="imbg-struct-card imbg-reveal" style={{ transitionDelay: '.2s' }}>
                        <div className="imbg-struct-card-icon">📈</div>
                        <div className="imbg-struct-card-lbl">Bagi Hasil / Bulan</div>
                        <div className="imbg-struct-card-val">Rp 75.000.000</div>
                        <div className="imbg-struct-card-sub">Dibayar mulai bulan ke-4 hingga bulan ke-48</div>
                    </div>
                    <div className="imbg-struct-card gold imbg-reveal" style={{ transitionDelay: '.3s' }}>
                        <div className="imbg-struct-card-icon">🤝</div>
                        <div className="imbg-struct-card-lbl">Periode Kerjasama</div>
                        <div className="imbg-struct-card-val">48 Bulan</div>
                        <div className="imbg-struct-card-sub">Total 51 bulan (3 grace + 48 aktif bagi hasil)</div>
                    </div>
                    <div className="imbg-struct-card gold imbg-reveal" style={{ transitionDelay: '.4s' }}>
                        <div className="imbg-struct-card-icon">📊</div>
                        <div className="imbg-struct-card-lbl">Bulan Aktif Bagi Hasil</div>
                        <div className="imbg-struct-card-val">48 Bulan</div>
                        <div className="imbg-struct-card-sub">48 bulan penuh sejak dapur beroperasi (bulan ke-4 s/d 51)</div>
                    </div>
                    <div className="imbg-struct-card gold imbg-reveal" style={{ transitionDelay: '.5s' }}>
                        <div className="imbg-struct-card-icon">🏆</div>
                        <div className="imbg-struct-card-lbl">Total Bagi Hasil</div>
                        <div className="imbg-struct-card-val">Rp 3.600.000.000</div>
                        <div className="imbg-struct-card-sub">48 bulan × Rp 75.000.000 per bulan</div>
                    </div>
                </div>

                <div className="imbg-mt3">
                    <div className="imbg-big-stat-wrap imbg-reveal">
                        <div className="imbg-big-stat">
                            <span className="imbg-big-stat-num">3.60</span><span className="imbg-big-stat-unit"> M</span>
                            <span className="imbg-big-stat-lbl">Total Penerimaan</span>
                        </div>
                        <div className="imbg-big-stat">
                            <span className="imbg-big-stat-num">2.15</span><span className="imbg-big-stat-unit"> M</span>
                            <span className="imbg-big-stat-lbl">Net Profit Investor</span>
                        </div>
                        <div className="imbg-big-stat">
                            <span className="imbg-big-stat-num">148</span><span className="imbg-big-stat-unit">%</span>
                            <span className="imbg-big-stat-lbl">Total ROI</span>
                        </div>
                        <div className="imbg-big-stat">
                            <span className="imbg-big-stat-num">22</span><span className="imbg-big-stat-unit"> bln</span>
                            <span className="imbg-big-stat-lbl">Payback Period</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="imbg-divider"></div>

            {/* CASH FLOW */}
            <section id="cashflow" className="imbg-section">
                <div className="imbg-section-label">02 — Proyeksi Arus Kas</div>
                <h2 className="imbg-section-title imbg-reveal">Cash Flow Kumulatif<br />Investor</h2>
                <p className="imbg-section-desc imbg-reveal">Visualisasi akumulasi penerimaan investor dari bulan 0 hingga bulan 51 (3 grace + 48 aktif), menunjukkan titik break-even dan zona profit murni.</p>

                <div className="imbg-cf-container imbg-reveal">
                    <div className="imbg-cf-chart-area">
                        <svg id="cfSvg" className="imbg-cf-chart-svg" viewBox="0 0 1000 300" preserveAspectRatio="none"></svg>
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', fontSize: '0.82rem', color: 'var(--gray)' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}><span style={{ width: 24, height: 3, background: 'var(--g-mid)', display: 'inline-block', borderRadius: 2 }}></span> Cash Flow Kumulatif</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}><span style={{ width: 24, height: 3, background: 'var(--gold)', display: 'inline-block', borderRadius: 2, borderTop: '2px dashed var(--gold)' }}></span> Break-even</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}><span style={{ width: 12, height: 12, background: 'var(--g-pale)', display: 'inline-block', borderRadius: 3, border: '1px solid var(--g-pale)' }}></span> Zona Profit</span>
                    </div>
                </div>
            </section>

            <div className="imbg-divider"></div>

            {/* ROI & IRR */}
            <section id="roi" className="imbg-section">
                <div className="imbg-section-label">03 — Analisis Kelayakan</div>
                <h2 className="imbg-section-title imbg-reveal">ROI &amp; IRR Analysis</h2>
                <p className="imbg-section-desc imbg-reveal">Indikator finansial utama yang membuktikan kelayakan investasi ini jauh melampaui instrumen konvensional.</p>

                <div className="imbg-roi-grid">
                    <div className="imbg-roi-card dark imbg-reveal">
                        <div className="imbg-roi-card-lbl">Total ROI</div>
                        <div className="imbg-roi-card-val">148.3%</div>
                        <div className="imbg-roi-card-sub">Return on Investment 51 bulan</div>
                    </div>
                    <div className="imbg-roi-card mid imbg-reveal" style={{ transitionDelay: '.1s' }}>
                        <div className="imbg-roi-card-lbl">ROI Tahunan</div>
                        <div className="imbg-roi-card-val">34.9%</div>
                        <div className="imbg-roi-card-sub">Annualized return per tahun</div>
                    </div>
                    <div className="imbg-roi-card gold-bg imbg-reveal" style={{ transitionDelay: '.2s' }}>
                        <div className="imbg-roi-card-lbl">Annual IRR</div>
                        <div className="imbg-roi-card-val">58%</div>
                        <div className="imbg-roi-card-sub">Internal Rate of Return p.a.</div>
                    </div>
                    <div className="imbg-roi-card green imbg-reveal" style={{ transitionDelay: '.3s' }}>
                        <div className="imbg-roi-card-lbl">NPV @ 12%</div>
                        <div className="imbg-roi-card-val" style={{ fontSize: '2rem' }}>Rp 1,35 M</div>
                        <div className="imbg-roi-card-sub">Net Present Value positif ✅</div>
                    </div>
                </div>

                <div className="imbg-two-col imbg-reveal">
                    <div>
                        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', color: 'var(--g-dark)', marginBottom: '1.2rem' }}>
                            Perbandingan vs Instrumen Lain
                        </h3>
                        <div className="imbg-compare-grid" id="compareGrid">
                            <div className="imbg-compare-row" data-pct="5.5" data-max="35">
                                <span className="imbg-compare-lbl">Deposito Bank</span>
                                <div className="imbg-compare-bar-wrap">
                                    <div className="imbg-compare-bar" style={{ width: 0 }}>
                                        <span className="imbg-compare-bar-val">5.5%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="imbg-compare-row" data-pct="7" data-max="35">
                                <span className="imbg-compare-lbl">Obligasi Gov.</span>
                                <div className="imbg-compare-bar-wrap">
                                    <div className="imbg-compare-bar" style={{ width: 0 }}>
                                        <span className="imbg-compare-bar-val">7%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="imbg-compare-row" data-pct="12" data-max="35">
                                <span className="imbg-compare-lbl">Reksa Dana</span>
                                <div className="imbg-compare-bar-wrap">
                                    <div className="imbg-compare-bar" style={{ width: 0 }}>
                                        <span className="imbg-compare-bar-val">12%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="imbg-compare-row" data-pct="15" data-max="35">
                                <span className="imbg-compare-lbl">Properti</span>
                                <div className="imbg-compare-bar-wrap">
                                    <div className="imbg-compare-bar" style={{ width: 0 }}>
                                        <span className="imbg-compare-bar-val">15%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="imbg-compare-row" data-pct="34.9" data-max="37">
                                <span className="imbg-compare-lbl" style={{ color: 'var(--g-dark)', fontWeight: 700 }}>Kanisa MBG ✦</span>
                                <div className="imbg-compare-bar-wrap">
                                    <div className="imbg-compare-bar highlight" style={{ width: 0 }}>
                                        <span className="imbg-compare-bar-val">34.9%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', color: 'var(--g-dark)', marginBottom: '1.2rem' }}>
                            Formula Perhitungan
                        </h3>
                        <div className="imbg-formula-box">
                            <span className="comment">// ROI Calculation</span><br />
                            ROI &nbsp;= (Total Return − Investasi) / Investasi<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= (3.600M − 1.45M) / 1.45M<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <span className="highlight">148.3%</span><br />
                            <br />
                            <span className="comment">// Payback Period</span><br />
                            PBP &nbsp;= Grace + (Investasi / CF/bln)<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 3 + (1.45M / 75Jt)<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <span className="highlight">~22.3 bulan</span><br />
                            <br />
                            <span className="comment">// Annual IRR (Newton-Raphson)</span><br />
                            IRR &nbsp;= (1 + IRR_monthly)^12 − 1<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <span className="result">≈ 58% p.a.</span><br />
                            <br />
                            <span className="comment">// NPV @ 12% discount rate</span><br />
                            NPV &nbsp;= Σ CF_t / (1+r)^t − Initial<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <span className="result">+ Rp 1.350.000.000 ✅</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="imbg-divider"></div>

            {/* TIMELINE */}
            <section id="timeline" className="imbg-section">
                <div className="imbg-section-label">04 — Timeline & Payback</div>
                <h2 className="imbg-section-title imbg-reveal">Alur Waktu Investasi</h2>
                <p className="imbg-section-desc imbg-reveal">Peta perjalanan investasi dari hari pertama hingga berakhirnya periode kerjasama.</p>

                <div className="imbg-timeline-track imbg-reveal">
                    <div className="imbg-tl-seg imbg-tl-invest">
                        <div className="imbg-tl-seg-title">Investasi</div>
                        <div className="imbg-tl-seg-sub">Bln 0</div>
                    </div>
                    <div className="imbg-tl-seg imbg-tl-grace">
                        <div className="imbg-tl-seg-title">Grace Period</div>
                        <div className="imbg-tl-seg-sub">Bln 1–3</div>
                    </div>
                    <div className="imbg-tl-seg imbg-tl-active" style={{ position: 'relative' }}>
                        <div className="imbg-tl-seg-title">Bagi Hasil Aktif</div>
                        <div className="imbg-tl-seg-sub">Bln 4–22 → menuju payback</div>
                    </div>
                    <div className="imbg-tl-seg imbg-tl-payback" style={{ minWidth: 60 }}>
                        <div className="imbg-tl-seg-title" style={{ fontSize: '0.65rem' }}>✓ BEP</div>
                        <div className="imbg-tl-seg-sub">~22</div>
                    </div>
                    <div className="imbg-tl-seg imbg-tl-profit">
                        <div className="imbg-tl-seg-title">💸 Pure Profit Zone</div>
                        <div className="imbg-tl-seg-sub">Bln 23–51</div>
                    </div>
                </div>

                <div className="imbg-reveal imbg-mt2">
                    <table className="imbg-milestone-table">
                        <thead>
                            <tr>
                                <th>Waktu</th>
                                <th>Event / Aksi</th>
                                <th>Posisi Investor</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="imbg-mono">Bulan 0</td>
                                <td>Investasi Rp 1.450.000.000 ditempatkan</td>
                                <td className="imbg-mono" style={{ color: '#b91c1c' }}>− Rp 1.450.000.000</td>
                                <td><span className="imbg-badge imbg-badge-red">Keluar</span></td>
                            </tr>
                            <tr>
                                <td className="imbg-mono">Bulan 1–3</td>
                                <td>Grace period — setup &amp; uji operasional dapur</td>
                                <td className="imbg-mono" style={{ color: 'var(--gray)' }}>± Rp 0</td>
                                <td><span className="imbg-badge" style={{ background: '#f1f5f9', color: 'var(--gray)', border: '1px solid var(--lightgray)' }}>Menunggu</span></td>
                            </tr>
                            <tr>
                                <td className="imbg-mono">Bulan 4</td>
                                <td>Bagi hasil pertama Rp 75 juta diterima</td>
                                <td className="imbg-mono" style={{ color: 'var(--g-mid)' }}>− Rp 1.375.000.000</td>
                                <td><span className="imbg-badge imbg-badge-green">Aktif</span></td>
                            </tr>
                            <tr>
                                <td className="imbg-mono">Bulan 12</td>
                                <td>Genap 1 tahun, total diterima Rp 675 Jt</td>
                                <td className="imbg-mono" style={{ color: 'var(--g-mid)' }}>− Rp 775.000.000</td>
                                <td><span className="imbg-badge imbg-badge-green">Berjalan</span></td>
                            </tr>
                            <tr>
                                <td className="imbg-mono" style={{ fontWeight: 700 }}>Bulan ~22</td>
                                <td><strong>Payback tercapai — modal kembali 100%</strong></td>
                                <td className="imbg-mono" style={{ color: 'var(--gold-dk)', fontWeight: 700 }}>≈ ± Rp 0 (BEP)</td>
                                <td><span className="imbg-badge imbg-badge-gold">PAYBACK ✓</span></td>
                            </tr>
                            <tr>
                                <td className="imbg-mono">Bulan 24</td>
                                <td>Genap 2 tahun, profit bersih ~Rp 225 Jt</td>
                                <td className="imbg-mono" style={{ color: 'var(--g-light)' }}>+ Rp 225.000.000</td>
                                <td><span className="imbg-badge imbg-badge-green">Profit</span></td>
                            </tr>
                            <tr>
                                <td className="imbg-mono">Bulan 36</td>
                                <td>Genap 3 tahun, profit bersih ~Rp 1,275 M</td>
                                <td className="imbg-mono" style={{ color: 'var(--g-mid)' }}>+ Rp 1.275.000.000</td>
                                <td><span className="imbg-badge imbg-badge-green">Profit</span></td>
                            </tr>
                            <tr>
                                <td className="imbg-mono" style={{ fontWeight: 700 }}>Bulan 51</td>
                                <td><strong>Periode selesai — total 48x bagi hasil diterima</strong></td>
                                <td className="imbg-mono" style={{ color: 'var(--g-mid)', fontWeight: 700 }}>+ Rp 2.150.000.000</td>
                                <td><span className="imbg-badge imbg-badge-green">Selesai ✓</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <div className="imbg-divider"></div>

            {/* RISIKO */}
            <section id="risiko" className="imbg-section">
                <div className="imbg-section-label">05 — Mitigasi Risiko</div>
                <h2 className="imbg-section-title imbg-reveal">Proteksi &amp; Faktor<br />Pendukung</h2>
                <p className="imbg-section-desc imbg-reveal">Setiap risiko diidentifikasi dan dimitigasi secara aktif untuk melindungi kepentingan investor.</p>

                <div className="imbg-risk-grid">
                    <div className="imbg-risk-card imbg-reveal-left">
                        <div className="imbg-risk-icon" style={{ background: 'var(--g-ghost)' }}>🏭</div>
                        <div className="imbg-risk-body">
                            <div className="imbg-risk-title">Risiko Operasional</div>
                            <div className="imbg-risk-desc">7 dapur sudah aktif beroperasi. Tim manajemen berpengalaman di food service & commissary kitchen dengan track record yang terbukti.</div>
                        </div>
                        <div className="imbg-risk-level" style={{ background: '#dcfce7', color: '#166534', border: '1px solid #86efac' }}>Rendah</div>
                    </div>
                    <div className="imbg-risk-card imbg-reveal-left" style={{ transitionDelay: '.1s' }}>
                        <div className="imbg-risk-icon" style={{ background: '#f0fdf4' }}>🏛️</div>
                        <div className="imbg-risk-body">
                            <div className="imbg-risk-title">Risiko Pasar / Permintaan</div>
                            <div className="imbg-risk-desc">Program MBG adalah program pemerintah dengan komitmen jangka panjang dan kontrak volume tetap. Permintaan terjamin oleh kebijakan negara.</div>
                        </div>
                        <div className="imbg-risk-level" style={{ background: '#d1fae5', color: '#065f46', border: '1px solid #6ee7b7' }}>Sangat Rendah</div>
                    </div>
                    <div className="imbg-risk-card imbg-reveal-left" style={{ transitionDelay: '.15s' }}>
                        <div className="imbg-risk-icon" style={{ background: 'var(--g-ghost)' }}>💳</div>
                        <div className="imbg-risk-body">
                            <div className="imbg-risk-title">Risiko Likuiditas</div>
                            <div className="imbg-risk-desc">Bagi hasil dibayar bulanan via transfer rekening. Rekening terpisah untuk pengelolaan kas investor memastikan transparansi arus kas.</div>
                        </div>
                        <div className="imbg-risk-level" style={{ background: '#dcfce7', color: '#166534', border: '1px solid #86efac' }}>Rendah</div>
                    </div>
                    <div className="imbg-risk-card imbg-reveal-left" style={{ transitionDelay: '.2s' }}>
                        <div className="imbg-risk-icon" style={{ background: '#f0fdf4' }}>📋</div>
                        <div className="imbg-risk-body">
                            <div className="imbg-risk-title">Risiko Regulasi</div>
                            <div className="imbg-risk-desc">MBG diatur oleh Badan Gizi Nasional RI. Kanisa memiliki seluruh perizinan operasional yang diperlukan dan mematuhi standar regulasi.</div>
                        </div>
                        <div className="imbg-risk-level" style={{ background: '#dcfce7', color: '#166534', border: '1px solid #86efac' }}>Rendah</div>
                    </div>
                    <div className="imbg-risk-card imbg-reveal-left" style={{ transitionDelay: '.25s' }}>
                        <div className="imbg-risk-icon" style={{ background: 'var(--gold-lt)' }}>🗺️</div>
                        <div className="imbg-risk-body">
                            <div className="imbg-risk-title">Risiko Konsentrasi Bisnis</div>
                            <div className="imbg-risk-desc">Dengan 7 dapur aktif dan rencana ekspansi hingga 50 dapur, diversifikasi pendapatan multi-lokasi meminimalkan risiko pada satu titik operasional.</div>
                        </div>
                        <div className="imbg-risk-level" style={{ background: 'var(--gold-lt)', color: 'var(--gold-dk)', border: '1px solid #f9c550' }}>Sedang</div>
                    </div>
                </div>
            </section>

            {/* CLOSING */}
            <div className="imbg-closing" id="closing">
                <div className="imbg-closing-bg">
                    <div className="c1"></div>
                    <div className="c2"></div>
                </div>
                <h2 className="imbg-closing-title imbg-reveal">Saatnya Berinvestasi<br /><em>dengan Dampak Nyata</em></h2>
                <p className="imbg-closing-sub imbg-reveal">Bergabunglah dengan program Dapur MBG Kanisa — investasi yang menghasilkan return finansial terbaik sekaligus berkontribusi pada ketahanan gizi bangsa Indonesia.</p>
                <div className="imbg-closing-stats imbg-reveal">
                    <div className="imbg-closing-stat">
                        <span className="imbg-closing-stat-val">58%</span>
                        <span className="imbg-closing-stat-lbl">Annual IRR</span>
                    </div>
                    <div className="imbg-closing-stat">
                        <span className="imbg-closing-stat-val">~22 bln</span>
                        <span className="imbg-closing-stat-lbl">Payback Period</span>
                    </div>
                    <div className="imbg-closing-stat">
                        <span className="imbg-closing-stat-val">Rp 2,15 M</span>
                        <span className="imbg-closing-stat-lbl">Net Profit Investor</span>
                    </div>
                    <div className="imbg-closing-stat">
                        <span className="imbg-closing-stat-val">NPV +</span>
                        <span className="imbg-closing-stat-lbl">Positif @ 12% Discount</span>
                    </div>
                </div>
                <div className="imbg-closing-footer">
                    Kanisa · Program Makan Bergizi Gratis · 2026<br />
                    Dokumen ini bersifat konfidensial dan hanya untuk calon investor yang dituju.
                </div>
            </div>
        </div>
    );
};

export default InvestasiMBG;
