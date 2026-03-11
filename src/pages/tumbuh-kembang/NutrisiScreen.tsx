import React from 'react';
import type { NutritionLog } from './types';
import { MEALS_DEF, NEEDS, totalKcal, totalMacro } from './data';

interface NutrisiScreenProps {
  active: boolean;
  nutritionLog: NutritionLog;
  onDeleteMealItem: (mealKey: string, idx: number) => void;
  onOpenScan: (mealKey?: string) => void;
}

const NutrisiScreen: React.FC<NutrisiScreenProps> = ({ active, nutritionLog, onDeleteMealItem, onOpenScan }) => {
  const kcal = totalKcal(nutritionLog);
  const prot = totalMacro(nutritionLog, 'protein');
  const karbo = totalMacro(nutritionLog, 'karbo');
  const lemak = totalMacro(nutritionLog, 'lemak');
  const serat = totalMacro(nutritionLog, 'serat');

  return (
    <div className={`screen${active ? ' active' : ''}`} id="s-nutrisi">
      <div className="nutri-pg">
        <div className="nutri-hero">
          <div className="nutri-hero-title">🥗 Tracker Nutrisi Rafi</div>
          <div className="nutri-hero-sub">Senin, 23 Februari 2026 • Usia 15 bulan</div>

          <div className="kcal-card">
            <div className="kcal-ring-wrap">
              <svg width="84" height="84" viewBox="0 0 84 84">
                <circle cx="42" cy="42" r="36" fill="none" stroke="#E0FAF7" strokeWidth="8" />
                <circle cx="42" cy="42" r="36" fill="none" stroke="url(#tealGrad)" strokeWidth="8"
                  strokeDasharray="226" strokeDashoffset={226 - (kcal / 1000) * 226} strokeLinecap="round" />
                <defs>
                  <linearGradient id="tealGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00B5A3" />
                    <stop offset="100%" stopColor="#3DD6C8" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="kcal-center"><div className="kcal-num">{kcal}</div><div className="kcal-unit">/ 1000 kkal</div></div>
            </div>
            <div className="kcal-info">
              <div className="kcal-label">Total Asupan Hari Ini</div>
              <div className="macro-rows">
                <div className="macro-row"><div className="macro-dot" style={{ background: '#2E7CF6' }} /><span className="macro-name">Protein</span><div className="macro-bar"><div className="macro-fill" style={{ width: `${Math.min(100, prot / 25 * 100)}%`, background: 'linear-gradient(90deg,#2E7CF6,#5BA8FF)' }} /></div><span className="macro-val">{prot}/25g</span></div>
                <div className="macro-row"><div className="macro-dot" style={{ background: '#FFB020' }} /><span className="macro-name">Karbohidrat</span><div className="macro-bar"><div className="macro-fill" style={{ width: `${Math.min(100, karbo / 130 * 100)}%`, background: 'linear-gradient(90deg,#FFB020,#FFD166)' }} /></div><span className="macro-val">{karbo}/130g</span></div>
                <div className="macro-row"><div className="macro-dot" style={{ background: '#00B5A3' }} /><span className="macro-name">Lemak</span><div className="macro-bar"><div className="macro-fill" style={{ width: `${Math.min(100, lemak / 35 * 100)}%`, background: 'linear-gradient(90deg,#00B5A3,#3DD6C8)' }} /></div><span className="macro-val">{lemak}/35g</span></div>
                <div className="macro-row"><div className="macro-dot" style={{ background: '#8B6CF7' }} /><span className="macro-name">Serat</span><div className="macro-bar"><div className="macro-fill" style={{ width: `${Math.min(100, serat / 16 * 100)}%`, background: 'linear-gradient(90deg,#8B6CF7,#B09AFF)' }} /></div><span className="macro-val">{serat}/16g</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scan Button */}
        <div className="scan-btn-wrap">
          <button className="scan-btn" onClick={() => onOpenScan()}>
            <div className="scan-btn-ico">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="1" y="5" width="20" height="14" rx="3.5" fill="rgba(255,255,255,.25)" stroke="white" strokeWidth="1.5" />
                <circle cx="11" cy="12" r="4" fill="none" stroke="white" strokeWidth="1.8" />
                <circle cx="11" cy="12" r="1.5" fill="white" />
                <path d="M7 5 Q8 2 11 3 Q14 2 15 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <circle cx="17.5" cy="8" r="1.2" fill="white" opacity=".8" />
                <path d="M2.5 9 Q4 7 5.5 9" stroke="rgba(255,255,255,.5)" strokeWidth="1" fill="none" strokeLinecap="round" />
              </svg>
            </div>
            <span>📷 Scan Makanan dengan AI</span>
          </button>
        </div>

        {/* Meal Log */}
        <div className="meal-section">
          <div className="meal-date-row">
            <div className="meal-date">📋 Log Makanan Hari Ini</div>
            <div className="meal-nav">
              <button className="meal-nav-btn">‹</button>
              <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--text2)' }}>Hari Ini</span>
              <button className="meal-nav-btn" style={{ opacity: 0.4 }}>›</button>
            </div>
          </div>
          <div className="meal-groups">
            {MEALS_DEF.map(m => {
              const items = nutritionLog[m.key] || [];
              const grpKcal = items.reduce((s, i) => s + i.kcal, 0);
              return (
                <div key={m.key} className="meal-group">
                  <div className="meal-group-hdr">
                    <div className="meal-group-ico" style={{ background: `${m.color}22` }}>{m.ico}</div>
                    <div className="meal-group-name">{m.name}</div>
                    {grpKcal > 0
                      ? <div className="meal-group-kcal" style={{ color: m.color }}>{grpKcal} <span style={{ fontSize: 10, color: 'var(--text3)', fontWeight: 600 }}>kkal</span></div>
                      : <div style={{ fontSize: 11, color: 'var(--text3)', fontWeight: 600 }}>Kosong</div>
                    }
                    <div className="meal-group-arr">{items.length > 0 ? '▼' : ''}</div>
                  </div>
                  {items.length > 0 && (
                    <div className="meal-items">
                      {items.map((item, idx) => (
                        <div key={idx} className="meal-item">
                          <div className="meal-item-photo">{item.emoji}</div>
                          <div className="meal-item-info">
                            <div className="meal-item-name">{item.name}</div>
                            <div className="meal-item-detail">{item.protein}g protein · {item.karbo}g karbo · {item.lemak}g lemak</div>
                          </div>
                          <div className="meal-item-kcal">{item.kcal}</div>
                          <button className="meal-item-del" onClick={(e) => { e.stopPropagation(); onDeleteMealItem(m.key, idx); }}>✕</button>
                        </div>
                      ))}
                      <div className="meal-add-btn" onClick={() => onOpenScan(m.key)}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="var(--blue)" strokeWidth="1.5" /><line x1="8" y1="5" x2="8" y2="11" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" /><line x1="5" y1="8" x2="11" y2="8" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" /></svg>
                        Tambah dari foto AI
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Kebutuhan Nutrisi */}
        <div className="sec" style={{ paddingBottom: 20 }}>
          <div className="sec-hdr"><div className="sec-title">📊 Kebutuhan Harian Rafi</div></div>
          <div className="need-card">
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text2)', marginBottom: 8 }}>Berdasarkan AKG 2019 — Anak 1–3 tahun</div>
            <div className="need-grid">
              {NEEDS.map((n, i) => {
                const cv = n.curr(nutritionLog);
                const pct = Math.min(100, Math.round(cv / n.target * 100));
                const col = pct >= 80 ? 'var(--green)' : pct >= 50 ? 'var(--gold)' : 'var(--red)';
                return (
                  <div key={i} className="need-item">
                    <div className="need-label">{n.label}</div>
                    <div className="need-bar"><div className="need-fill" style={{ width: `${pct}%`, background: n.color }} /></div>
                    <div className="need-vals"><span className="need-curr" style={{ color: col }}>{cv}{n.unit}</span><span className="need-target">/{n.target}{n.unit}</span></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutrisiScreen;
