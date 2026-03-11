import React, { useState, useRef } from 'react';
import type { DemoFood, NutritionItem } from './types';
import { DEMO_FOODS, MEALS_DEF } from './data';

interface ScanModalProps {
  open: boolean;
  targetMealKey: string;
  onClose: () => void;
  onAddToLog: (mealKey: string, item: NutritionItem) => void;
  onToast: (msg: string) => void;
}

type ScanState = 'upload' | 'loading' | 'result';

const ScanModal: React.FC<ScanModalProps> = ({ open, targetMealKey, onClose, onAddToLog, onToast }) => {
  const [state, setState] = useState<ScanState>('upload');
  const [currentFood, setCurrentFood] = useState<DemoFood | null>(null);
  const [portionMult, setPortionMult] = useState(1);
  const [selectedMeal, setSelectedMeal] = useState(targetMealKey);
  const [loadingStep, setLoadingStep] = useState('Mengenali jenis makanan');
  const [previewEmoji, setPreviewEmoji] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (open) {
      setState('upload');
      setCurrentFood(null);
      setPortionMult(1);
      setSelectedMeal(targetMealKey);
    }
  }, [open, targetMealKey]);

  const demoScan = (key: string) => {
    const food = DEMO_FOODS[key];
    setPreviewEmoji(food.emoji);
    setState('loading');
    const steps = ['Mengenali jenis makanan...', 'Menghitung kandungan nutrisi...', 'Menyesuaikan porsi bayi...', 'Mengecek keamanan untuk 15 bulan...', 'Menyiapkan rekomendasi AI...'];
    let si = 0;
    const iv = setInterval(() => {
      if (si >= steps.length) { clearInterval(iv); showResult(food); return; }
      setLoadingStep(steps[si++]);
    }, 600);
  };

  const showResult = (food: DemoFood) => {
    setCurrentFood(food);
    setPortionMult(1);
    setState('result');
  };

  const adjPortion = (delta: number) => {
    setPortionMult(prev => Math.max(0.25, Math.round((prev + delta) * 4) / 4));
  };

  const addToLog = () => {
    if (!currentFood) return;
    const p = portionMult;
    const item: NutritionItem = {
      name: currentFood.name + (p !== 1 ? ` (×${p})` : ''),
      emoji: currentFood.emoji,
      kcal: Math.round(currentFood.kcal * p),
      protein: Math.round(currentFood.protein * p * 10) / 10,
      karbo: Math.round(currentFood.karbo * p * 10) / 10,
      lemak: Math.round(currentFood.lemak * p * 10) / 10,
      serat: Math.round(currentFood.serat * p * 10) / 10,
    };
    onAddToLog(selectedMeal, item);
    onClose();
    const mName = MEALS_DEF.find(m => m.key === selectedMeal)?.name || '';
    onToast(`✓ ${currentFood.name} ditambahkan ke ${mName} 🎉`);
  };

  const macros = currentFood ? [
    { lbl: 'Protein', val: Math.round(currentFood.protein * portionMult * 10) / 10, unit: 'g', color: '#2E7CF6' },
    { lbl: 'Karbo', val: Math.round(currentFood.karbo * portionMult * 10) / 10, unit: 'g', color: '#FFB020' },
    { lbl: 'Lemak', val: Math.round(currentFood.lemak * portionMult * 10) / 10, unit: 'g', color: '#00B5A3' },
    { lbl: 'Serat', val: Math.round(currentFood.serat * portionMult * 10) / 10, unit: 'g', color: '#8B6CF7' },
  ] : [];

  return (
    <div className={`modal-overlay${open ? ' open' : ''}`}>
      <div className="modal-sheet">
        <div className="modal-drag" />
        <div className="modal-hdr">
          <div className="modal-title">🔍 Scan Makanan Rafi</div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">

          {/* UPLOAD */}
          {state === 'upload' && (
            <div>
              <div className="upload-zone" onClick={() => fileRef.current?.click()}>
                <input type="file" ref={fileRef} accept="image/*" capture="environment" style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', fontSize: 0 }} />
                <div className="upload-ico">📸</div>
                <div className="upload-title">Foto Makanan Rafi</div>
                <div className="upload-sub">Tap untuk ambil foto atau pilih dari galeri</div>
              </div>
              <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
                <button onClick={() => demoScan('nasi')} style={{ flex: 1, padding: 10, borderRadius: 'var(--rsm)', border: '1.5px solid var(--border)', background: 'var(--bg)', fontSize: 12, fontWeight: 800, color: 'var(--text2)', cursor: 'pointer' }}>🍚 Coba Demo: Nasi</button>
                <button onClick={() => demoScan('buah')} style={{ flex: 1, padding: 10, borderRadius: 'var(--rsm)', border: '1.5px solid var(--border)', background: 'var(--bg)', fontSize: 12, fontWeight: 800, color: 'var(--text2)', cursor: 'pointer' }}>🍓 Coba Demo: Buah</button>
                <button onClick={() => demoScan('telur')} style={{ flex: 1, padding: 10, borderRadius: 'var(--rsm)', border: '1.5px solid var(--border)', background: 'var(--bg)', fontSize: 12, fontWeight: 800, color: 'var(--text2)', cursor: 'pointer' }}>🥚 Coba Demo: Telur</button>
              </div>
            </div>
          )}

          {/* LOADING */}
          {state === 'loading' && (
            <div>
              <div className="preview-wrap" style={{ marginBottom: 16 }}>
                <div style={{ width: '100%', height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 80, background: 'var(--teal-lt)', borderRadius: 'var(--r)' }}>{previewEmoji}</div>
              </div>
              <div className="scan-loading">
                <div className="scan-spinner" />
                <div className="scan-loading-title">AI sedang menganalisis...</div>
                <div className="scan-loading-sub">{loadingStep}</div>
              </div>
            </div>
          )}

          {/* RESULT */}
          {state === 'result' && currentFood && (
            <div>
              <div className="preview-wrap">
                <div style={{ width: '100%', height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 72, background: 'var(--teal-lt)' }}>{currentFood.emoji}</div>
                <button className="preview-change" onClick={() => setState('upload')}>↺ Ganti</button>
              </div>

              <div className="result-card">
                <div className="result-food-row">
                  <div className="result-food-img">{currentFood.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div className="result-food-name">{currentFood.name}</div>
                    <div className="result-portion">{currentFood.portion}</div>
                    <div style={{ marginTop: 4 }}>
                      <span className="tag" style={{ background: `${currentFood.suitColor}22`, color: currentFood.suitColor, border: `1.5px solid ${currentFood.suitColor}44` }}>{currentFood.suitability}</span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="result-kcal-big">{Math.round(currentFood.kcal * portionMult)}</div>
                    <div className="result-kcal-unit">kkal</div>
                  </div>
                </div>
                <div className="result-macros">
                  {macros.map((m, i) => (
                    <div key={i} className="result-macro">
                      <div className="result-macro-val" style={{ color: m.color }}>{m.val}</div>
                      <div className="result-macro-unit">{m.unit}</div>
                      <div className="result-macro-lbl">{m.lbl}</div>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--text2)', marginBottom: 6 }}>🧪 Vitamin &amp; Mineral</div>
                <div className="result-vita">
                  {(currentFood.vita || []).map((v, i) => <span key={i} className="vita-chip">{v}</span>)}
                </div>
              </div>

              <div className="ai-notes">
                <div className="ai-notes-hdr">
                  <span style={{ fontSize: 18 }}>🤖</span>
                  <div className="ai-notes-title">Catatan AI untuk Rafi (15 bulan)</div>
                </div>
                {(currentFood.notes || []).map((n, i) => (
                  <div key={i} className="ai-note-item"><span className="note-ico">{n.ico}</span><span>{n.text}</span></div>
                ))}
              </div>

              <div className="portion-row">
                <div className="portion-lbl">Porsi yang dimakan:</div>
                <div className="portion-ctrl">
                  <button className="portion-btn" onClick={() => adjPortion(-0.25)}>−</button>
                  <div className="portion-val">{portionMult}×</div>
                  <button className="portion-btn" onClick={() => adjPortion(0.25)}>+</button>
                </div>
              </div>

              <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--text2)', marginBottom: 8 }}>Tambahkan ke waktu makan:</div>
              <div className="mealtime-row">
                {MEALS_DEF.map(m => (
                  <button key={m.key} className={`mt-btn${m.key === selectedMeal ? ' on' : ''}`} onClick={() => setSelectedMeal(m.key)}>
                    {m.ico}<br /><span style={{ fontSize: 9 }}>{m.name}</span>
                  </button>
                ))}
              </div>

              <button className="btn-primary" style={{ background: 'linear-gradient(135deg,var(--teal),#009E8E)', boxShadow: '0 5px 20px rgba(0,181,163,.35)' }} onClick={addToLog}>
                ✓ Tambah ke Log Nutrisi
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScanModal;
