import React, { useState } from 'react';
import { MS_DATA, PERIODS } from './data';

interface MilestoneScreenProps {
  active: boolean;
  onToast: (msg: string) => void;
}

const MilestoneScreen: React.FC<MilestoneScreenProps> = ({ active, onToast }) => {
  const [activePeriod, setActivePeriod] = useState('12-18');
  const [expandedMs, setExpandedMs] = useState<number | null>(null);
  const [confettiId, setConfettiId] = useState<number | null>(null);

  const toggleMS = (id: number) => {
    setExpandedMs(prev => prev === id ? null : id);
  };

  const doComplete = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setConfettiId(id);
    const ms = MS_DATA.find(m => m.id === id);
    onToast(`🎉 Selamat! Milestone tercapai! +${ms?.xp} XP`);
    setTimeout(() => setConfettiId(null), 1100);
  };

  const colors = ['#2E7CF6', '#FFB020', '#1DC98A', '#8B6CF7', '#FF5C6A', '#00B5A3'];

  return (
    <div className={`screen${active ? ' active' : ''}`} id="s-milestone">
      <div className="ms-hdr">
        <div className="ms-banner">
          <div className="ms-mascot">🌟</div>
          <div>
            <div className="ms-lv-t">Rafi si Penjelajah Dunia</div>
            <div className="ms-lv-s">4 dari 6 milestone periode ini tercapai!</div>
            <div className="ms-stars">
              <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span style={{ opacity: 0.3 }}>⭐</span>
            </div>
          </div>
        </div>
        <div className="ptabs">
          {PERIODS.map(p => (
            <button key={p} className={`ptab${p === activePeriod ? ' on' : ''}`} onClick={() => setActivePeriod(p)}>
              {p} bln
            </button>
          ))}
        </div>
      </div>

      <div className="ms-list">
        {MS_DATA.map(m => {
          const open = expandedMs === m.id;
          const stag = m.status === 'done'
            ? <span className="tag tag-green">✓ Tercapai</span>
            : m.status === 'doing'
              ? <span className="tag tag-gold">⏳ Sedang Belajar</span>
              : <span className="tag tag-gray">○ Belum Mulai</span>;

          return (
            <div key={m.id} className={`ms-card ${m.status}`} style={{ position: 'relative', overflow: 'hidden' }} onClick={() => toggleMS(m.id)}>
              {/* Confetti */}
              {confettiId === m.id && (
                <div>{Array.from({ length: 12 }, (_, i) => (
                  <div key={i} className="conf" style={{ left: `${4 + i * 8}%`, background: colors[i % 6], animationDelay: `${i * 0.07}s`, width: i % 2 ? 6 : 10, height: i % 2 ? 6 : 10 }} />
                ))}</div>
              )}

              <div className="ms-card-top">
                <div className="ms-full-ico">{m.ico}</div>
                <div className="ms-card-b">
                  <div className="ms-card-t">{m.title}</div>
                  <div className="ms-card-d">{m.desc}</div>
                  <div className="ms-card-r">{stag}<span className="ms-xp">+{m.xp} XP</span></div>
                </div>
                <span className="ms-chevron">{open ? '▲' : '▼'}</span>
              </div>

              {m.status !== 'todo' && (
                <div className="ms-prog">
                  <div className="ms-prog-row"><span className="ms-prog-t">Progress</span><span className="ms-prog-v">{m.pct}%</span></div>
                  <div className="ms-pbar"><div className="ms-pfill" style={{ width: `${m.pct}%` }} /></div>
                </div>
              )}

              {open && (
                <div style={{ borderTop: '1.5px solid var(--border)' }}>
                  <div className="ms-gallery">
                    <div className="gal-lbl">📸 Momen</div>
                    <div className="gal-row">
                      {m.photos.map((ph, i) => (
                        <div key={i}><div className="gal-ph" style={{ background: ph.c }}>{ph.e}</div><div className="gal-date">{ph.d}</div></div>
                      ))}
                      <div>
                        <div className="gal-add" onClick={(e) => { e.stopPropagation(); onToast('📷 Buka kamera...'); }}>
                          <div style={{ fontSize: 20, color: 'var(--text3)' }}>📷</div>
                          <div style={{ fontSize: 9, fontWeight: 800, color: 'var(--text3)' }}>Tambah</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {m.status === 'doing' && (
                    <div className="ms-action">
                      <button className="btn-complete" style={{ background: 'linear-gradient(135deg,var(--green),#14B07A)', boxShadow: '0 5px 18px rgba(29,201,138,.35)' }} onClick={(e) => doComplete(m.id, e)}>
                        🎉 Tandai Tercapai! +{m.xp} XP
                      </button>
                    </div>
                  )}
                  {m.status === 'todo' && (
                    <div className="ms-action">
                      <button className="btn-start" onClick={(e) => { e.stopPropagation(); onToast('▶ Stimulasi dimulai hari ini!'); }}>▶ Mulai Stimulasi</button>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MilestoneScreen;
