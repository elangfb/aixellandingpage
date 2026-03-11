import React, { useState, useEffect, useRef } from 'react';
import { CHARTS, buildChartSVG } from './data';

interface GrowthScreenProps {
  active: boolean;
}

const GrowthScreen: React.FC<GrowthScreenProps> = ({ active }) => {
  const [chartKey, setChartKey] = useState('weight');
  const chartAreaRef = useRef<HTMLDivElement>(null);
  const d = CHARTS[chartKey];

  useEffect(() => {
    if (chartAreaRef.current) {
      chartAreaRef.current.innerHTML = buildChartSVG(chartKey);
    }
  }, [chartKey]);

  return (
    <div className={`screen${active ? ' active' : ''}`} id="s-growth">
      <div className="growth-pg">
        <div className="pg-title">📈 Pertumbuhan Rafi</div>
        <div className="pg-sub">Dibandingkan standar WHO 2006</div>
        <div className="qs">
          <div className="qs-card"><div className="qs-ico">⚖️</div><div className="qs-val" style={{ color: 'var(--blue)' }}>9.9<span style={{ fontSize: 9, color: 'var(--text3)' }}>kg</span></div><div className="qs-lbl">Berat</div></div>
          <div className="qs-card"><div className="qs-ico">📏</div><div className="qs-val" style={{ color: 'var(--teal)' }}>76.9<span style={{ fontSize: 9, color: 'var(--text3)' }}>cm</span></div><div className="qs-lbl">Tinggi</div></div>
          <div className="qs-card"><div className="qs-ico">🔵</div><div className="qs-val" style={{ color: 'var(--purple)' }}>47.2<span style={{ fontSize: 9, color: 'var(--text3)' }}>cm</span></div><div className="qs-lbl">L.Kepala</div></div>
        </div>

        <div className="card" style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div style={{ fontSize: 14, fontWeight: 800 }}>{d.name}</div>
            <div style={{ fontFamily: "'Fredoka',sans-serif", fontSize: 20, color: d.color }}>{d.curr}</div>
          </div>
          <div className="ctabs">
            {(['weight', 'height', 'head'] as const).map(k => (
              <button key={k} className={`ctab${chartKey === k ? ' on' : ''}`} onClick={() => setChartKey(k)}>
                {k === 'weight' ? 'Berat' : k === 'height' ? 'Tinggi' : 'L.Kepala'}
              </button>
            ))}
          </div>
          <div ref={chartAreaRef} />
          <div className="ai-box" dangerouslySetInnerHTML={{ __html: `🤖 <strong>Interpretasi AI:</strong> ${d.insight}` }} />
        </div>

        <div className="card" style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 12 }}>🧮 Indeks Massa Tubuh</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <div>
              <div style={{ fontFamily: "'Fredoka',sans-serif", fontSize: 28, color: 'var(--blue)' }}>16.8<span style={{ fontSize: 12, color: 'var(--text2)' }}> kg/m²</span></div>
              <div style={{ fontSize: 11, color: 'var(--text2)', fontWeight: 600 }}>Normal untuk usia 15 bulan</div>
            </div>
            <span className="tag tag-green" style={{ marginLeft: 'auto' }}>✓ Gizi Baik</span>
          </div>
          <div className="imt-bar"><div className="imt-ptr" style={{ left: '52%' }} /></div>
          <div className="imt-lbls">
            <span>Kurus</span>
            <span style={{ color: 'var(--green)', fontWeight: 800 }}>Normal ✓</span>
            <span>Lebih</span>
            <span>Obesitas</span>
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 28 }}>📅</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 800 }}>Pengukuran Berikutnya</div>
              <div style={{ fontSize: 12, color: 'var(--blue)', marginTop: 2, fontWeight: 700 }}>3 Maret 2026 — Posyandu Melati</div>
            </div>
            <span className="tag tag-blue">8 hari</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthScreen;
