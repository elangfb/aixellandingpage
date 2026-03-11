import React from 'react';
import { ACHIEVEMENTS } from './data';

interface ProfileScreenProps {
  active: boolean;
  onToast: (msg: string) => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ active, onToast }) => {
  return (
    <div className={`screen${active ? ' active' : ''}`} id="s-profile">
      <div>
        <div className="prof-hero">
          <div className="prof-wrap"><div className="prof-ph">👦</div><div className="prof-edit">✏️</div></div>
          <div className="prof-name">Rafi Arjuna</div>
          <div className="prof-dob">🎂 Lahir 10 November 2024</div>
          <div className="prof-age-chip">⏳ 15 bulan 2 minggu</div>
        </div>

        <div className="sec">
          <div className="lv-card">
            <div className="lv-top">
              <div style={{ fontSize: 36 }}>🏆</div>
              <div>
                <div className="lv-name">Level 5 — Bintang Muda ⭐</div>
                <div className="lv-next">280 XP lagi ke Level 6 🚀</div>
              </div>
            </div>
            <div className="xp-row"><span className="xp-lbl">Total XP</span><span className="xp-val">720 / 1000</span></div>
            <div className="lv-bar"><div className="lv-fill" style={{ width: '72%' }} /></div>
          </div>
        </div>

        <div className="sec" style={{ paddingTop: 14 }}>
          <div className="stats2">
            <div className="sc"><div className="sc-ico">⚖️</div><span className="sc-val">9.9</span><span className="sc-unit"> kg</span><div className="sc-lbl">Berat Badan</div><div className="sc-who ok">✓ WHO P50</div></div>
            <div className="sc"><div className="sc-ico">📏</div><span className="sc-val">76.9</span><span className="sc-unit"> cm</span><div className="sc-lbl">Tinggi Badan</div><div className="sc-who ok">✓ WHO P48</div></div>
            <div className="sc"><div className="sc-ico">🔵</div><span className="sc-val">47.2</span><span className="sc-unit"> cm</span><div className="sc-lbl">Lingkar Kepala</div><div className="sc-who ok">✓ WHO P65</div></div>
            <div className="sc"><div className="sc-ico">🧮</div><span className="sc-val">16.8</span><span className="sc-unit"> IMT</span><div className="sc-lbl">Status Gizi</div><div className="sc-who warn">⚠ Pantau zat besi</div></div>
          </div>
        </div>

        <div className="sec">
          <div className="sec-hdr"><div className="sec-title">🏅 Pencapaian</div><button className="sec-link">Semua →</button></div>
          <div className="ach-grid">
            {ACHIEVEMENTS.map((a, i) => (
              <div key={i} className={`ach${a.lit ? ' lit' : ''}`} onClick={() => onToast(a.lit ? `🏅 ${a.n} sudah kamu raih!` : `⏳ Terus semangat raih ${a.n}!`)}>
                <div className="ach-e">{a.e}</div>
                <div className="ach-n">{a.n}</div>
                <div className="ach-d">{a.d}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="sec" style={{ paddingBottom: 24 }}>
          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 28 }}>👨‍⚕️</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 800 }}>Dokter Spesialis Anak</div>
              <div style={{ fontSize: 12, color: 'var(--blue)', marginTop: 2, fontWeight: 700 }}>dr. Piprim Basarah, SpA(K) · IDAI</div>
            </div>
            <button
              onClick={() => onToast('📅 Jadwal konsultasi ditambahkan!')}
              style={{ background: 'var(--blue-lt)', border: '1.5px solid var(--blue-md)', borderRadius: 10, padding: '7px 13px', fontSize: 12, fontWeight: 800, color: 'var(--blue2)', cursor: 'pointer' }}
            >
              Jadwal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
