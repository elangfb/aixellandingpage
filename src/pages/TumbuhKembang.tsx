import React from 'react';
import './TumbuhKembang.css';

const TumbuhKembang: React.FC = () => {
  return (
    <div className="tumbuh-kembang-page">
      <div className="wrap">
<div className="phone">

  <div className="sbar">
    <span className="sbar-t">9:41</span>
    <div className="sbar-i"><span style={{ letterSpacing: '1px', fontSize: '11px' }}>●●●</span><span style={{ marginLeft: '3px', fontSize: '11px' }}>WiFi</span><span style={{ marginLeft: '3px' }}>🔋</span></div>
  </div>

  <div className="screens">

    {/*  ══ HOME ══  */}
    <div className="screen active" id="s-home">
      <div className="home-hero">
        <div className="hero-cloud" style={{ width: '60px', height: '24px', top: '18px', right: '60px', animationDelay: '.5s', opacity: '.7' }}></div>
        <div className="hero-cloud" style={{ width: '40px', height: '16px', top: '36px', right: '40px', animationDelay: '1.2s', opacity: '.5' }}></div>
        <div className="hero-top">
          <div><div className="hero-hi">Senin, 23 Februari 2026</div><div className="hero-name">Halo, Bunda! 👋</div></div>
          <div className="notif-btn">🔔<div className="ndot"></div></div>
        </div>
        <div className="cc">
          <div className="cc-top">
            <div className="cc-photo" onClick={() => console.log("goTab('profile')")}>👦</div>
            <div><div className="cc-name">Rafi Arjuna</div><div className="cc-age">⏳ 15 bulan 2 minggu</div></div>
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
        <div className="xp-row"><span className="xp-lbl">💙 XP — Level 5 · Bintang Muda ⭐</span><span className="xp-val">720 / 1000</span></div>
        <div className="xp-track"><div className="xp-fill" id="xp-fill" style={{ width: '72%' }}></div></div>
      </div>

      <div className="badge-row">
        <div className="bchip lit">🔥 7-Day Streak</div>
        <div className="bchip lit">🏆 Milestone Hunter</div>
        <div className="bchip lit">📸 Memory Maker</div>
        <div className="bchip">🥗 Nutrisi Pro</div>
      </div>

      {/*  Nutrisi Snippet on Home  */}
      <div className="sec">
        <div className="sec-hdr"><div className="sec-title">🥗 Nutrisi Hari Ini</div><button className="sec-link" onClick={() => console.log("goTab('nutrisi')")}>Detail →</button></div>
        <div className="nutri-snip" onClick={() => console.log("goTab('nutrisi')")}>
          <div className="nutri-snip-hdr">
            <div>
              <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text2)' }}>Total Kalori</div>
              <div className="nutri-snip-kcal">680 <span style={{ fontSize: '12px', color: 'var(--text2)', fontWeight: '600' }}>/ 1.000 kkal</span></div>
            </div>
            <span className="tag tag-teal">68% terpenuhi</span>
          </div>
          <div className="mini-bar-row">
            <div className="mini-bar"><span className="mini-bar-lbl">🍖 Protein</span><div className="mini-bar-track"><div className="mini-bar-fill" style={{ width: '72%', background: 'linear-gradient(90deg,#2E7CF6,#5BA8FF)' }}></div></div><span className="mini-bar-val">18/25g</span></div>
            <div className="mini-bar"><span className="mini-bar-lbl">🍚 Karbo</span><div className="mini-bar-track"><div className="mini-bar-fill" style={{ width: '60%', background: 'linear-gradient(90deg,#FFB020,#FFD166)' }}></div></div><span className="mini-bar-val">77/130g</span></div>
            <div className="mini-bar"><span className="mini-bar-lbl">🥑 Lemak</span><div className="mini-bar-track"><div className="mini-bar-fill" style={{ width: '55%', background: 'linear-gradient(90deg,#00B5A3,#3DD6C8)' }}></div></div><span className="mini-bar-val">19/35g</span></div>
          </div>
        </div>
      </div>

      <div className="sec">
        <div className="sec-hdr"><div className="sec-title">🧩 Aktivitas Hari Ini</div></div>
        <div className="act-card">
          <div className="tag tag-purple">✦ MOTORIK HALUS · HARI 47</div>
          <div className="act-title">Bermain Balok Susun Warna-warni</div>
          <div className="act-desc">Letakkan 5 balok di depan Rafi. Tunjukkan cara menumpuk 2–3 balok, lalu biarkan mencoba sendiri. Melatih koordinasi tangan-mata dan kesabaran.</div>
          <div className="act-meta">
            <span className="act-mi">⏱ 10-15 mnt</span><span className="act-mi">🏠 Di rumah</span><span className="act-mi">⚡ +50 XP</span>
          </div>
          <button className="btn-primary" style={{ background: 'linear-gradient(135deg,var(--purple),#6940E0)', boxShadow: '0 5px 18px rgba(139,108,247,.35)', marginTop: '12px' }} onClick={() => console.log("doActivity()")}>✓ Tandai Selesai → +50 XP</button>
        </div>
      </div>

      <div className="sec" style={{ paddingBottom: '20px' }}>
        <div className="sec-hdr"><div className="sec-title">🎯 Milestone Terkini</div><button className="sec-link" onClick={() => console.log("goTab('milestone')")}>Lihat Semua →</button></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div className="ms-mini done" onClick={() => console.log("goTab('milestone')")}><div className="ms-ico">🗣️</div><div style={{ flex: '1' }}><div className="ms-q-t">Ucapkan 3+ kata bermakna</div><div className="ms-q-s">✓ Selesai 20 Jan · +150 XP</div></div><span className="tag tag-green">✓ Done</span></div>
          <div className="ms-mini doing" onClick={() => console.log("goTab('milestone')")}><div className="ms-ico">🧱</div><div style={{ flex: '1' }}><div className="ms-q-t">Tumpuk 3 balok sendiri</div><div className="ms-q-s">60% tercapai — terus stimulasi!</div></div><span className="tag tag-gold">⏳ 60%</span></div>
        </div>
      </div>
    </div>

    {/*  ══ GROWTH ══  */}
    <div className="screen" id="s-growth">
      <div className="growth-pg">
        <div className="pg-title">📈 Pertumbuhan Rafi</div>
        <div className="pg-sub">Dibandingkan standar WHO 2006</div>
        <div className="qs">
          <div className="qs-card"><div className="qs-ico">⚖️</div><div className="qs-val" style={{ color: 'var(--blue)' }}>9.9<span style={{ fontSize: '9px', color: 'var(--text3)' }}>kg</span></div><div className="qs-lbl">Berat</div></div>
          <div className="qs-card"><div className="qs-ico">📏</div><div className="qs-val" style={{ color: 'var(--teal)' }}>76.9<span style={{ fontSize: '9px', color: 'var(--text3)' }}>cm</span></div><div className="qs-lbl">Tinggi</div></div>
          <div className="qs-card"><div className="qs-ico">🔵</div><div className="qs-val" style={{ color: 'var(--purple)' }}>47.2<span style={{ fontSize: '9px', color: 'var(--text3)' }}>cm</span></div><div className="qs-lbl">L.Kepala</div></div>
        </div>
        <div className="card" style={{ marginBottom: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ fontSize: '14px', fontWeight: '800' }} id="c-name">Berat Badan</div>
            <div style={{ fontFamily: '"Fredoka",sans-serif', fontSize: '20px', color: 'var(--blue)' }} id="c-curr">9.9 kg</div>
          </div>
          <div className="ctabs">
            <button className="ctab on" onClick={() => console.log("swChart('weight',this)")}>Berat</button>
            <button className="ctab" onClick={() => console.log("swChart('height',this)")}>Tinggi</button>
            <button className="ctab" onClick={() => console.log("swChart('head',this)")}>L.Kepala</button>
          </div>
          <div id="c-area"></div>
          <div className="ai-box" id="c-insight"></div>
        </div>
        <div className="card" style={{ marginBottom: '14px' }}>
          <div style={{ fontSize: '14px', fontWeight: '800', marginBottom: '12px' }}>🧮 Indeks Massa Tubuh</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
            <div><div style={{ fontFamily: '"Fredoka",sans-serif', fontSize: '28px', color: 'var(--blue)' }}>16.8<span style={{ fontSize: '12px', color: 'var(--text2)' }}> kg/m²</span></div><div style={{ fontSize: '11px', color: 'var(--text2)', fontWeight: '600' }}>Normal untuk usia 15 bulan</div></div>
            <span className="tag tag-green" style={{ marginLeft: 'auto' }}>✓ Gizi Baik</span>
          </div>
          <div className="imt-bar"><div className="imt-ptr" style={{ left: '52%' }}></div></div>
          <div className="imt-lbls"><span>Kurus</span><span style={{ color: 'var(--green)', fontWeight: '800' }}>Normal ✓</span><span>Lebih</span><span>Obesitas</span></div>
        </div>
        <div className="card"><div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span style={{ fontSize: '28px' }}>📅</span><div style={{ flex: '1' }}><div style={{ fontSize: '13px', fontWeight: '800' }}>Pengukuran Berikutnya</div><div style={{ fontSize: '12px', color: 'var(--blue)', marginTop: '2px', fontWeight: '700' }}>3 Maret 2026 — Posyandu Melati</div></div><span className="tag tag-blue">8 hari</span></div></div>
      </div>
    </div>

    {/*  ══ MILESTONE ══  */}
    <div className="screen" id="s-milestone">
      <div className="ms-hdr">
        <div className="ms-banner">
          <div className="ms-mascot">🌟</div>
          <div><div className="ms-lv-t">Rafi si Penjelajah Dunia</div><div className="ms-lv-s">4 dari 6 milestone periode ini tercapai!</div><div className="ms-stars"><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span style={{ opacity: '.3' }}>⭐</span></div></div>
        </div>
        <div className="ptabs" id="ptabs"></div>
      </div>
      <div className="ms-list" id="ms-list"></div>
    </div>

    {/*  ══ NUTRISI SCREEN ══  */}
    <div className="screen" id="s-nutrisi">
      <div className="nutri-pg">
        <div className="nutri-hero">
          <div className="nutri-hero-title">🥗 Tracker Nutrisi Rafi</div>
          <div className="nutri-hero-sub">Senin, 23 Februari 2026 • Usia 15 bulan</div>

          {/*  Kalori ring + macros  */}
          <div className="kcal-card">
            <div className="kcal-ring-wrap">
              <svg width="84" height="84" viewBox="0 0 84 84">
                <circle cx="42" cy="42" r="36" fill="none" stroke="#E0FAF7" strokeWidth="8"/>
                <circle cx="42" cy="42" r="36" fill="none" stroke="url(#tealGrad)" strokeWidth="8"
                  strokeDasharray="226" strokeDashoffset="72" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="tealGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#00B5A3"/>
                    <stop offset="100%" stop-color="#3DD6C8"/>
                  </linearGradient>
                </defs>
              </svg>
              <div className="kcal-center"><div className="kcal-num" id="kcal-disp">680</div><div className="kcal-unit">/ 1000 kkal</div></div>
            </div>
            <div className="kcal-info">
              <div className="kcal-label">Total Asupan Hari Ini</div>
              <div className="macro-rows">
                <div className="macro-row"><div className="macro-dot" style={{ background: '#2E7CF6' }}></div><span className="macro-name">Protein</span><div className="macro-bar"><div className="macro-fill" id="mb-protein" style={{ width: '72%', background: 'linear-gradient(90deg,#2E7CF6,#5BA8FF)' }}></div></div><span className="macro-val" id="mv-protein">18/25g</span></div>
                <div className="macro-row"><div className="macro-dot" style={{ background: '#FFB020' }}></div><span className="macro-name">Karbohidrat</span><div className="macro-bar"><div className="macro-fill" id="mb-karbo" style={{ width: '59%', background: 'linear-gradient(90deg,#FFB020,#FFD166)' }}></div></div><span className="macro-val" id="mv-karbo">77/130g</span></div>
                <div className="macro-row"><div className="macro-dot" style={{ background: '#00B5A3' }}></div><span className="macro-name">Lemak</span><div className="macro-bar"><div className="macro-fill" id="mb-lemak" style={{ width: '54%', background: 'linear-gradient(90deg,#00B5A3,#3DD6C8)' }}></div></div><span className="macro-val" id="mv-lemak">19/35g</span></div>
                <div className="macro-row"><div className="macro-dot" style={{ background: '#8B6CF7' }}></div><span className="macro-name">Serat</span><div className="macro-bar"><div className="macro-fill" id="mb-serat" style={{ width: '60%', background: 'linear-gradient(90deg,#8B6CF7,#B09AFF)' }}></div></div><span className="macro-val" id="mv-serat">9.6/16g</span></div>
              </div>
            </div>
          </div>
        </div>

        {/*  Scan Button  */}
        <div className="scan-btn-wrap">
          <button className="scan-btn" onClick={() => console.log("openScanModal()")}>
            <div className="scan-btn-ico">
              {/*  Custom camera-leaf SVG icon  */}
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="1" y="5" width="20" height="14" rx="3.5" fill="rgba(255,255,255,.25)" stroke="white" strokeWidth="1.5"/>
                <circle cx="11" cy="12" r="4" fill="none" stroke="white" strokeWidth="1.8"/>
                <circle cx="11" cy="12" r="1.5" fill="white"/>
                <path d="M7 5 Q8 2 11 3 Q14 2 15 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <circle cx="17.5" cy="8" r="1.2" fill="white" opacity=".8"/>
                {/*  leaf accent  */}
                <path d="M2.5 9 Q4 7 5.5 9" stroke="rgba(255,255,255,.5)" strokeWidth="1" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
            <span>📷 Scan Makanan dengan AI</span>
          </button>
        </div>

        {/*  Meal Log  */}
        <div className="meal-section">
          <div className="meal-date-row">
            <div className="meal-date">📋 Log Makanan Hari Ini</div>
            <div className="meal-nav">
              <button className="meal-nav-btn">‹</button>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text2)' }}>Hari Ini</span>
              <button className="meal-nav-btn" style={{ opacity: '.4' }}>›</button>
            </div>
          </div>
          <div className="meal-groups" id="meal-groups"></div>
        </div>

        {/*  Kebutuhan Nutrisi  */}
        <div className="sec" style={{ paddingBottom: '20px' }}>
          <div className="sec-hdr"><div className="sec-title">📊 Kebutuhan Harian Rafi</div></div>
          <div className="need-card">
            <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text2)', marginBottom: '8px' }}>Berdasarkan AKG 2019 — Anak 1–3 tahun</div>
            <div className="need-grid" id="need-grid"></div>
          </div>
        </div>
      </div>
    </div>

    {/*  ══ CHAT ══  */}
    <div className="screen" id="s-chat">
      <div className="chat-scr">
        <div className="chat-hdr">
          <div className="chat-av">🤖</div>
          <div style={{ flex: '1' }}><div className="chat-av-name">AI Asisten dr. Piprim</div><div className="chat-av-st"><span className="online"></span>Berbasis panduan IDAI & WHO</div></div>
          <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text3)' }}>SpA(K)</span>
        </div>
        <div className="chat-msgs" id="chat-msgs"></div>
        <div className="chat-qk" id="chat-qk"></div>
        <div className="chat-bar">
          <input className="chat-inp" id="chat-inp" placeholder="Tanya seputar tumbuh kembang Rafi..." />
          <button className="send-btn" onClick={() => console.log("sendMsg()")}>➤</button>
        </div>
      </div>
    </div>

    {/*  ══ PROFILE ══  */}
    <div className="screen" id="s-profile">
      <div>
        <div className="prof-hero">
          <div className="prof-wrap"><div className="prof-ph">👦</div><div className="prof-edit">✏️</div></div>
          <div className="prof-name">Rafi Arjuna</div>
          <div className="prof-dob">🎂 Lahir 10 November 2024</div>
          <div className="prof-age-chip">⏳ 15 bulan 2 minggu</div>
        </div>
        <div className="sec">
          <div className="lv-card">
            <div className="lv-top"><div style={{ fontSize: '36px' }}>🏆</div><div><div className="lv-name">Level 5 — Bintang Muda ⭐</div><div className="lv-next">280 XP lagi ke Level 6 🚀</div></div></div>
            <div className="xp-row"><span className="xp-lbl">Total XP</span><span className="xp-val">720 / 1000</span></div>
            <div className="lv-bar"><div className="lv-fill" style={{ width: '72%' }}></div></div>
          </div>
        </div>
        <div className="sec" style={{ paddingTop: '14px' }}>
          <div className="stats2">
            <div className="sc"><div className="sc-ico">⚖️</div><span className="sc-val">9.9</span><span className="sc-unit"> kg</span><div className="sc-lbl">Berat Badan</div><div className="sc-who ok">✓ WHO P50</div></div>
            <div className="sc"><div className="sc-ico">📏</div><span className="sc-val">76.9</span><span className="sc-unit"> cm</span><div className="sc-lbl">Tinggi Badan</div><div className="sc-who ok">✓ WHO P48</div></div>
            <div className="sc"><div className="sc-ico">🔵</div><span className="sc-val">47.2</span><span className="sc-unit"> cm</span><div className="sc-lbl">Lingkar Kepala</div><div className="sc-who ok">✓ WHO P65</div></div>
            <div className="sc"><div className="sc-ico">🧮</div><span className="sc-val">16.8</span><span className="sc-unit"> IMT</span><div className="sc-lbl">Status Gizi</div><div className="sc-who warn">⚠ Pantau zat besi</div></div>
          </div>
        </div>
        <div className="sec">
          <div className="sec-hdr"><div className="sec-title">🏅 Pencapaian</div><button className="sec-link">Semua →</button></div>
          <div className="ach-grid" id="ach-grid"></div>
        </div>
        <div className="sec" style={{ paddingBottom: '24px' }}>
          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '28px' }}>👨‍⚕️</span>
            <div style={{ flex: '1' }}><div style={{ fontSize: '13px', fontWeight: '800' }}>Dokter Spesialis Anak</div><div style={{ fontSize: '12px', color: 'var(--blue)', marginTop: '2px', fontWeight: '700' }}>dr. Piprim Basarah, SpA(K) · IDAI</div></div>
            <button onClick={() => console.log("showToast('📅 Jadwal konsultasi ditambahkan!')")} style={{ background: 'var(--blue-lt)', border: '1.5px solid var(--blue-md)', borderRadius: '10px', padding: '7px 13px', fontSize: '12px', fontWeight: '800', color: 'var(--blue2)', cursor: 'pointer' }}>Jadwal</button>
          </div>
        </div>
      </div>
    </div>

  </div>{/*  /screens  */}

  {/*  ══════════════════════════════
       BOTTOM NAV — 6 tabs with custom SVG icons
  ══════════════════════════════  */}
  <nav className="bnav">

    {/*  HOME: Baby house with peek + chimney  */}
    <button className="nb on" id="nb-home" onClick={() => console.log("goTab('home')")}>
      <div className="nb-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: 'inherit' }}>
          <rect x="17" y="4.5" width="3" height="5" rx="1" fill="currentColor" opacity=".5"/>
          <circle cx="17.5" cy="3.5" r="1" fill="currentColor" opacity=".35"/>
          <circle cx="19.2" cy="3" r=".8" fill="currentColor" opacity=".25"/>
          <path d="M2 13L12 3L22 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="5" y="12" width="14" height="10" rx="2" fill="currentColor" opacity=".12" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="10.5" y="16.5" width="3" height="5.5" rx="1.2" fill="currentColor" opacity=".6"/>
          <circle cx="7.8" cy="15.5" r="2.2" fill="white" stroke="currentColor" strokeWidth="1.2"/>
          <circle cx="7.2" cy="15.1" r=".38" fill="currentColor"/>
          <circle cx="8.4" cy="15.1" r=".38" fill="currentColor"/>
          <path d="M7.3 16.4 Q7.8 16.9 8.3 16.4" stroke="currentColor" strokeWidth=".6" strokeLinecap="round" fill="none"/>
          <path d="M11.5 18.8 Q12 18.2 12.5 18.8 Q13 18.2 13.5 18.8 Q13.7 19.3 12 20.1 Q10.3 19.3 11.5 18.8Z" fill="currentColor" opacity=".7"/>
        </svg>
      </div>
      <span className="nb-lbl">Beranda</span>
    </button>

    {/*  GROWTH: Sprout + ruler  */}
    <button className="nb" id="nb-growth" onClick={() => console.log("goTab('growth')")}>
      <div className="nb-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: 'inherit' }}>
          <rect x="18" y="3" width="4" height="19" rx="1.5" fill="currentColor" opacity=".2" stroke="currentColor" strokeWidth="1"/>
          <line x1="18" y1="7" x2="21" y2="7" stroke="currentColor" strokeWidth="1" opacity=".6"/>
          <line x1="18" y1="11" x2="22" y2="11" stroke="currentColor" strokeWidth="1.2" opacity=".8"/>
          <line x1="18" y1="15" x2="21" y2="15" stroke="currentColor" strokeWidth="1" opacity=".6"/>
          <line x1="18" y1="19" x2="22" y2="19" stroke="currentColor" strokeWidth="1.2" opacity=".8"/>
          <path d="M10 21 Q10 14 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M10 16 Q5.5 13.5 6 8 Q11 10 10 16Z" fill="currentColor" opacity=".5"/>
          <path d="M10 12 Q14.5 9 14 4 Q9 7 10 12Z" fill="currentColor" opacity=".7"/>
          <circle cx="10" cy="9" r="1.4" fill="currentColor"/>
          <path d="M5 21 Q10 19.5 15 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity=".4"/>
          <path d="M14 5 L14.5 3.5 L15 5 L16.5 5 L15.3 6 L15.8 7.5 L14.5 6.6 L13.2 7.5 L13.7 6 L12.5 5Z" fill="currentColor" opacity=".55"/>
        </svg>
      </div>
      <span className="nb-lbl">Tumbuh</span>
    </button>

    {/*  NUTRISI: Plate with fork + leaf sparkle  */}
    <button className="nb" id="nb-nutrisi" onClick={() => console.log("goTab('nutrisi')")}>
      <div className="nb-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: 'inherit' }}>
          {/*  plate  */}
          <circle cx="12" cy="13" r="8" fill="currentColor" opacity=".1" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="12" cy="13" r="5.2" fill="none" stroke="currentColor" strokeWidth="1" opacity=".4"/>
          {/*  fork left  */}
          <line x1="7" y1="4" x2="7" y2="9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="5.8" y1="4" x2="5.8" y2="7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="8.2" y1="4" x2="8.2" y2="7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          <path d="M5.8 7 Q7 8.5 8.2 7" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
          <line x1="7" y1="8.5" x2="7" y2="13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          {/*  knife right  */}
          <path d="M17 4 Q19.5 5.5 17 9 L17 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          {/*  leaf on plate  */}
          <path d="M12 16 Q10.5 13 12 11 Q13.5 13 12 16Z" fill="currentColor" opacity=".7"/>
          <line x1="12" y1="11" x2="12" y2="16" stroke="currentColor" strokeWidth=".7" opacity=".5"/>
          {/*  sparkles  */}
          <circle cx="19" cy="4" r=".9" fill="currentColor" opacity=".5"/>
          <circle cx="21" cy="7" r=".7" fill="currentColor" opacity=".4"/>
          <path d="M20 4.5 L20.5 3 L21 4.5 L22.5 5 L21 5.5 L20.5 7 L20 5.5 L18.5 5Z" fill="currentColor" opacity=".5"/>
        </svg>
      </div>
      <span className="nb-lbl">Nutrisi</span>
    </button>

    {/*  MILESTONE: Chubby star baby face  */}
    <button className="nb" id="nb-milestone" onClick={() => console.log("goTab('milestone')")}>
      <div className="nb-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: 'inherit' }}>
          <path d="M12 2 L14.2 8.2 L21 8.2 L15.5 12.4 L17.7 18.8 L12 14.7 L6.3 18.8 L8.5 12.4 L3 8.2 L9.8 8.2 Z" fill="currentColor" opacity=".88" stroke="currentColor" strokeWidth=".5" strokeLinejoin="round"/>
          <circle cx="10.3" cy="11" r=".75" fill="white"/>
          <circle cx="13.7" cy="11" r=".75" fill="white"/>
          <ellipse cx="9.3" cy="12.2" rx=".9" ry=".55" fill="white" opacity=".45"/>
          <ellipse cx="14.7" cy="12.2" rx=".9" ry=".55" fill="white" opacity=".45"/>
          <path d="M10.5 13.3 Q12 14.8 13.5 13.3" stroke="white" strokeWidth=".85" strokeLinecap="round" fill="none"/>
          <path d="M4 8.5 Q2.5 8 2 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity=".38"/>
          <path d="M20 8.5 Q21.5 8 22 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity=".38"/>
          <circle cx="3" cy="3" r=".9" fill="currentColor" opacity=".35"/>
          <circle cx="21" cy="3" r=".75" fill="currentColor" opacity=".28"/>
        </svg>
      </div>
      <span className="nb-lbl">Milestone</span>
    </button>

    {/*  CHAT: Cloud + stethoscope  */}
    <button className="nb" id="nb-chat" onClick={() => console.log("goTab('chat')")}>
      <div className="nb-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: 'inherit' }}>
          <path d="M4 8 Q4 4 8 4 L17 4 Q21 4 21 8 L21 14 Q21 18 17 18 L14 18 L10 22 L10 18 L7 18 Q4 18 4 14 Z" fill="currentColor" opacity=".13" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <circle cx="7.5" cy="5" r="2.3" fill="currentColor" opacity=".18"/>
          <circle cx="12" cy="4.3" r="2.6" fill="currentColor" opacity=".18"/>
          <circle cx="16.5" cy="5" r="2.3" fill="currentColor" opacity=".18"/>
          <circle cx="9" cy="10.2" r="1.4" fill="none" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M10.4 10.2 Q13 10.2 13 13 Q13 15.5 14.8 15.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
          <circle cx="15.8" cy="16" r="2" fill="none" stroke="currentColor" strokeWidth="1.4"/>
          <circle cx="15.8" cy="16" r=".75" fill="currentColor" opacity=".6"/>
          <rect x="16.5" y="6.5" width="4.5" height="4.5" rx="1.4" fill="currentColor" opacity=".7"/>
          <path d="M18.3 8 L18.3 9.8 M17.4 8.9 L19.2 8.9" stroke="white" strokeWidth=".9" strokeLinecap="round"/>
        </svg>
      </div>
      <span className="nb-lbl">Tanya AI</span>
    </button>

    {/*  PROFILE: Baby face + tuft  */}
    <button className="nb" id="nb-profile" onClick={() => console.log("goTab('profile')")}>
      <div className="nb-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: 'inherit' }}>
          <path d="M9.5 5.5 Q9.5 2.5 12.5 3 Q15.5 2.5 15.5 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity=".55"/>
          <path d="M7.5 6 Q6.5 3.5 8.5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity=".4"/>
          <circle cx="12.5" cy="10" r="5.5" fill="currentColor" opacity=".1" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="10.5" cy="9.5" r="1.1" fill="currentColor"/>
          <circle cx="14.5" cy="9.5" r="1.1" fill="currentColor"/>
          <circle cx="10.9" cy="9.1" r=".38" fill="white"/>
          <circle cx="14.9" cy="9.1" r=".38" fill="white"/>
          <ellipse cx="9.2" cy="11" rx="1.1" ry=".65" fill="currentColor" opacity=".28"/>
          <ellipse cx="15.8" cy="11" rx="1.1" ry=".65" fill="currentColor" opacity=".28"/>
          <path d="M10.2 12.2 Q12.5 14 14.8 12.2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
          <path d="M4 23 Q4 17.5 12.5 17.5 Q21 17.5 21 23" fill="currentColor" opacity=".13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          <path d="M20 7 L20.5 5.5 L21 7 L22.5 7 L21.3 8 L21.8 9.5 L20.5 8.5 L19.2 9.5 L19.7 8 L18.5 7Z" fill="currentColor" opacity=".45"/>
        </svg>
      </div>
      <span className="nb-lbl">Profil</span>
    </button>

  </nav>

  {/*  ══ SCAN MODAL ══  */}
  <div className="modal-overlay" id="scan-modal">
    <div className="modal-sheet">
      <div className="modal-drag"></div>
      <div className="modal-hdr">
        <div className="modal-title">🔍 Scan Makanan Rafi</div>
        <button className="modal-close" onClick={() => console.log("closeScanModal()")}>✕</button>
      </div>
      <div className="modal-body">

        {/*  State: UPLOAD  */}
        <div id="state-upload">
          <div className="upload-zone" onClick={() => console.log("document.getElementById('food-input').click()")}>
            <input type="file" id="food-input" accept="image/*" capture="environment" onChange={() => console.log("handlePhoto(event)")} />
            <div className="upload-ico">📸</div>
            <div className="upload-title">Foto Makanan Rafi</div>
            <div className="upload-sub">Tap untuk ambil foto atau pilih dari galeri</div>
          </div>
          <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
            <button onClick={() => console.log("demoScan('nasi')")} style={{ flex: '1', padding: '10px', borderRadius: 'var(--rsm)', border: '1.5px solid var(--border)', background: 'var(--bg)', fontSize: '12px', fontWeight: '800', color: 'var(--text2)', cursor: 'pointer' }}>🍚 Coba Demo: Nasi</button>
            <button onClick={() => console.log("demoScan('buah')")} style={{ flex: '1', padding: '10px', borderRadius: 'var(--rsm)', border: '1.5px solid var(--border)', background: 'var(--bg)', fontSize: '12px', fontWeight: '800', color: 'var(--text2)', cursor: 'pointer' }}>🍓 Coba Demo: Buah</button>
            <button onClick={() => console.log("demoScan('telur')")} style={{ flex: '1', padding: '10px', borderRadius: 'var(--rsm)', border: '1.5px solid var(--border)', background: 'var(--bg)', fontSize: '12px', fontWeight: '800', color: 'var(--text2)', cursor: 'pointer' }}>🥚 Coba Demo: Telur</button>
          </div>
        </div>

        {/*  State: LOADING  */}
        <div id="state-loading" style={{ display: 'none' }}>
          <div className="preview-wrap" id="preview-loading" style={{ marginBottom: '16px' }}></div>
          <div className="scan-loading">
            <div className="scan-spinner"></div>
            <div className="scan-loading-title">AI sedang menganalisis...</div>
            <div className="scan-loading-sub" id="loading-step">Mengenali jenis makanan</div>
          </div>
        </div>

        {/*  State: RESULT  */}
        <div id="state-result" style={{ display: 'none' }}>
          <div className="preview-wrap" id="preview-result">
            <div id="result-img" style={{ width: '100%', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '72px', background: 'var(--teal-lt)' }}></div>
            <button className="preview-change" onClick={() => console.log("resetScan()")}>↺ Ganti</button>
          </div>

          {/*  Food result  */}
          <div className="result-card">
            <div className="result-food-row">
              <div className="result-food-img" id="r-img"></div>
              <div style={{ flex: '1' }}>
                <div className="result-food-name" id="r-name">—</div>
                <div className="result-portion" id="r-portion">—</div>
                <div style={{ marginTop: '4px' }} id="r-suitability"></div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="result-kcal-big" id="r-kcal">—</div>
                <div className="result-kcal-unit">kkal</div>
              </div>
            </div>

            <div className="result-macros" id="r-macros"></div>

            <div style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text2)', marginBottom: '6px' }}>🧪 Vitamin & Mineral</div>
            <div className="result-vita" id="r-vita"></div>
          </div>

          {/*  AI Notes  */}
          <div className="ai-notes">
            <div className="ai-notes-hdr">
              <span style={{ fontSize: '18px' }}>🤖</span>
              <div className="ai-notes-title">Catatan AI untuk Rafi (15 bulan)</div>
            </div>
            <div id="r-notes"></div>
          </div>

          {/*  Portion adjuster  */}
          <div className="portion-row">
            <div className="portion-lbl">Porsi yang dimakan:</div>
            <div className="portion-ctrl">
              <button className="portion-btn" onClick={() => console.log("adjPortion(-0.25)")}>−</button>
              <div className="portion-val" id="portion-disp">1×</div>
              <button className="portion-btn" onClick={() => console.log("adjPortion(0.25)")}>+</button>
            </div>
          </div>

          {/*  Meal time  */}
          <div style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text2)', marginBottom: '8px' }}>Tambahkan ke waktu makan:</div>
          <div className="mealtime-row" id="mealtime-row"></div>

          <button className="btn-primary" style={{ background: 'linear-gradient(135deg,var(--teal),#009E8E)', boxShadow: '0 5px 20px rgba(0,181,163,.35)' }} onClick={() => console.log("addToLog()")}>
            ✓ Tambah ke Log Nutrisi
          </button>
        </div>

      </div>
    </div>
  </div>

  {/*  Toast  */}
  <div className="toast" id="toast"></div>

</div>{/*  /phone  */}
</div>{/*  /wrap  */}
    </div>
  );
};

export default TumbuhKembang;
