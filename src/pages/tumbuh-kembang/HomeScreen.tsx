import React from 'react';
import type { TabName, NutritionLog } from './types';
import { totalKcal, totalMacro } from './data';

interface HomeScreenProps {
  active: boolean;
  onTabChange: (tab: TabName) => void;
  onActivity: () => void;
  nutritionLog: NutritionLog;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ active, onTabChange, onActivity, nutritionLog }) => {
  const kcal = totalKcal(nutritionLog);
  const prot = totalMacro(nutritionLog, 'protein');
  const karbo = totalMacro(nutritionLog, 'karbo');
  const lemak = totalMacro(nutritionLog, 'lemak');

  return (
    <div className={`screen${active ? ' active' : ''}`} id="s-home">
      <div className="home-hero">
        <div className="hero-cloud" style={{ width: 60, height: 24, top: 18, right: 60, animationDelay: '.5s', opacity: 0.7 }} />
        <div className="hero-cloud" style={{ width: 40, height: 16, top: 36, right: 40, animationDelay: '1.2s', opacity: 0.5 }} />
        <div className="hero-top">
          <div>
            <div className="hero-hi">Senin, 23 Februari 2026</div>
            <div className="hero-name">Halo, Bunda! 👋</div>
          </div>
          <div className="notif-btn">🔔<div className="ndot" /></div>
        </div>
        <div className="cc">
          <div className="cc-top">
            <div className="cc-photo" onClick={() => onTabChange('profile')}>👦</div>
            <div>
              <div className="cc-name">Rafi Arjuna</div>
              <div className="cc-age">⏳ 15 bulan 2 minggu</div>
            </div>
            <div className="cc-lv">⭐ Lv.5</div>
          </div>
          <div className="cc-stats">
            <div className="cc-stat"><div className="cc-val">9.9<span className="cc-u">kg</span></div><div className="cc-lbl">Berat</div></div>
            <div className="cc-stat"><div className="cc-val">76.9<span className="cc-u">cm</span></div><div className="cc-lbl">Tinggi</div></div>
            <div className="cc-stat"><div className="cc-val">4/6</div><div className="cc-lbl">Milestone</div></div>
          </div>
        </div>
      </div>

      <div className="xp-wrap">
        <div className="xp-row">
          <span className="xp-lbl">💙 XP — Level 5 · Bintang Muda ⭐</span>
          <span className="xp-val">720 / 1000</span>
        </div>
        <div className="xp-track"><div className="xp-fill" id="xp-fill" style={{ width: '72%' }} /></div>
      </div>

      <div className="badge-row">
        <div className="bchip lit">🔥 7-Day Streak</div>
        <div className="bchip lit">🏆 Milestone Hunter</div>
        <div className="bchip lit">📸 Memory Maker</div>
        <div className="bchip">🥗 Nutrisi Pro</div>
      </div>

      {/* Nutrisi Snippet */}
      <div className="sec">
        <div className="sec-hdr">
          <div className="sec-title">🥗 Nutrisi Hari Ini</div>
          <button className="sec-link" onClick={() => onTabChange('nutrisi')}>Detail →</button>
        </div>
        <div className="nutri-snip" onClick={() => onTabChange('nutrisi')}>
          <div className="nutri-snip-hdr">
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text2)' }}>Total Kalori</div>
              <div className="nutri-snip-kcal">{kcal} <span style={{ fontSize: 12, color: 'var(--text2)', fontWeight: 600 }}>/ 1.000 kkal</span></div>
            </div>
            <span className="tag tag-teal">{Math.round(kcal / 10)}% terpenuhi</span>
          </div>
          <div className="mini-bar-row">
            <div className="mini-bar">
              <span className="mini-bar-lbl">🍖 Protein</span>
              <div className="mini-bar-track"><div className="mini-bar-fill" style={{ width: `${Math.min(100, prot / 25 * 100)}%`, background: 'linear-gradient(90deg,#2E7CF6,#5BA8FF)' }} /></div>
              <span className="mini-bar-val">{prot}/25g</span>
            </div>
            <div className="mini-bar">
              <span className="mini-bar-lbl">🍚 Karbo</span>
              <div className="mini-bar-track"><div className="mini-bar-fill" style={{ width: `${Math.min(100, karbo / 130 * 100)}%`, background: 'linear-gradient(90deg,#FFB020,#FFD166)' }} /></div>
              <span className="mini-bar-val">{karbo}/130g</span>
            </div>
            <div className="mini-bar">
              <span className="mini-bar-lbl">🥑 Lemak</span>
              <div className="mini-bar-track"><div className="mini-bar-fill" style={{ width: `${Math.min(100, lemak / 35 * 100)}%`, background: 'linear-gradient(90deg,#00B5A3,#3DD6C8)' }} /></div>
              <span className="mini-bar-val">{lemak}/35g</span>
            </div>
          </div>
        </div>
      </div>

      {/* Aktivitas */}
      <div className="sec">
        <div className="sec-hdr"><div className="sec-title">🧩 Aktivitas Hari Ini</div></div>
        <div className="act-card">
          <div className="tag tag-purple">✦ MOTORIK HALUS · HARI 47</div>
          <div className="act-title">Bermain Balok Susun Warna-warni</div>
          <div className="act-desc">Letakkan 5 balok di depan Rafi. Tunjukkan cara menumpuk 2–3 balok, lalu biarkan mencoba sendiri. Melatih koordinasi tangan-mata dan kesabaran.</div>
          <div className="act-meta">
            <span className="act-mi">⏱ 10-15 mnt</span>
            <span className="act-mi">🏠 Di rumah</span>
            <span className="act-mi">⚡ +50 XP</span>
          </div>
          <button
            className="btn-primary"
            style={{ background: 'linear-gradient(135deg,var(--purple),#6940E0)', boxShadow: '0 5px 18px rgba(139,108,247,.35)', marginTop: 12 }}
            onClick={onActivity}
          >
            ✓ Tandai Selesai → +50 XP
          </button>
        </div>
      </div>

      {/* Milestone Terkini */}
      <div className="sec" style={{ paddingBottom: 20 }}>
        <div className="sec-hdr">
          <div className="sec-title">🎯 Milestone Terkini</div>
          <button className="sec-link" onClick={() => onTabChange('milestone')}>Lihat Semua →</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div className="ms-mini done" onClick={() => onTabChange('milestone')}>
            <div className="ms-ico">🗣️</div>
            <div style={{ flex: 1 }}>
              <div className="ms-q-t">Ucapkan 3+ kata bermakna</div>
              <div className="ms-q-s">✓ Selesai 20 Jan · +150 XP</div>
            </div>
            <span className="tag tag-green">✓ Done</span>
          </div>
          <div className="ms-mini doing" onClick={() => onTabChange('milestone')}>
            <div className="ms-ico">🧱</div>
            <div style={{ flex: 1 }}>
              <div className="ms-q-t">Tumpuk 3 balok sendiri</div>
              <div className="ms-q-s">60% tercapai — terus stimulasi!</div>
            </div>
            <span className="tag tag-gold">⏳ 60%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
