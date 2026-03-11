import type {
  ChartData, MilestoneItem, NutritionLog, MealDef,
  NeedDef, DemoFood, Achievement, ChatMessage,
  NutritionItem,
} from './types';

// Helper functions for nutrition calculations
function totalKcal(log: NutritionLog): number {
  return Object.values(log).flat().reduce((s: number, i: NutritionItem) => s + i.kcal, 0);
}

function totalMacro(log: NutritionLog, k: keyof NutritionItem): number {
  return Math.round(
    Object.values(log).flat().reduce((s: number, i: NutritionItem) => s + (Number(i[k]) || 0), 0) * 10
  ) / 10;
}

export { totalKcal, totalMacro };

export const CHARTS: Record<string, ChartData> = {
  weight: {
    name: 'Berat Badan', curr: '9.9 kg', color: '#2E7CF6',
    labels: ['0', '3', '6', '9', '12', '15'],
    w3: [2.9, 5.1, 6.4, 7.5, 8.4, 9.0],
    w97: [4.3, 7.6, 9.0, 10.5, 11.3, 11.9],
    actual: [3.2, 5.8, 7.2, 8.6, 9.4, 9.9],
    insight: 'Berat Rafi di <strong>persentil 50 WHO</strong> — pertumbuhan optimal dan konsisten. Tidak ada tanda underweight maupun overweight.',
  },
  height: {
    name: 'Tinggi Badan', curr: '76.9 cm', color: '#00B5A3',
    labels: ['0', '3', '6', '9', '12', '15'],
    w3: [46.1, 57.3, 62.5, 66.2, 69.2, 72.0],
    w97: [53.7, 65.5, 72.7, 76.6, 80.6, 83.0],
    actual: [49.5, 60.8, 67.0, 70.8, 74.2, 76.9],
    insight: 'Tinggi Rafi di <strong>persentil 48 WHO</strong> — normal. Tren 6 bulan terakhir linear, tidak ada tanda growth faltering.',
  },
  head: {
    name: 'Lingkar Kepala', curr: '47.2 cm', color: '#8B6CF7',
    labels: ['0', '3', '6', '9', '12', '15'],
    w3: [32.1, 37.2, 40.5, 42.6, 44.2, 45.6],
    w97: [36.9, 42.8, 46.1, 48.0, 49.4, 50.0],
    actual: [34.2, 39.5, 43.0, 44.8, 46.3, 47.2],
    insight: 'Lingkar kepala di <strong>persentil 65 WHO</strong> — sedikit di atas median, masih dalam batas normal.',
  },
};

export const MS_DATA: MilestoneItem[] = [
  { id: 1, ico: '🗣️', title: 'Ucapkan 3+ kata bermakna', desc: 'Bahasa ekspresif — perkembangan kognitif dan sosial', status: 'done', xp: 150, pct: 100, photos: [{ e: '👦', c: 'linear-gradient(135deg,#74B3FF,#ADE8FF)', d: '12 Jan' }, { e: '🗣️', c: 'linear-gradient(135deg,#1DC98A,#0D9E6A)', d: '20 Jan' }] },
  { id: 2, ico: '🚶', title: 'Berjalan mandiri tanpa pegangan', desc: 'Motorik kasar — koordinasi kaki dan keseimbangan', status: 'done', xp: 200, pct: 100, photos: [{ e: '🚶', c: 'linear-gradient(135deg,#FFB020,#F09000)', d: '5 Feb' }] },
  { id: 3, ico: '🧱', title: 'Tumpuk 3 balok sendiri', desc: 'Motorik halus dan koordinasi tangan-mata yang presisi', status: 'doing', xp: 120, pct: 60, photos: [{ e: '🧱', c: 'linear-gradient(135deg,#2E7CF6,#1A5FD4)', d: '19 Feb' }] },
  { id: 4, ico: '🥄', title: 'Makan sendiri dengan sendok', desc: 'Kemandirian makan dan perkembangan motorik halus', status: 'doing', xp: 100, pct: 40, photos: [] },
  { id: 5, ico: '🎭', title: 'Bermain pura-pura (pretend play)', desc: 'Perkembangan kognitif, imajinatif, dan sosial-emosional', status: 'todo', xp: 180, pct: 0, photos: [] },
  { id: 6, ico: '🎵', title: 'Menyanyikan lagu pendek', desc: 'Perkembangan bahasa dan memori auditif', status: 'todo', xp: 130, pct: 0, photos: [] },
];

export const PERIODS = ['0-3', '3-6', '6-9', '9-12', '12-18', '18-24'];

export const INITIAL_NUTRITION_LOG: NutritionLog = {
  sarapan: [
    { name: 'Bubur Ayam Wortel', emoji: '🍲', kcal: 185, protein: 8.2, karbo: 28, lemak: 4.5, serat: 2.1 },
    { name: 'Pisang Ambon', emoji: '🍌', kcal: 89, protein: 1.1, karbo: 23, lemak: 0.3, serat: 2.6 },
  ],
  snack1: [
    { name: 'Biskuit Bayi', emoji: '🍪', kcal: 110, protein: 2.2, karbo: 20, lemak: 2.8, serat: 0.8 },
  ],
  siang: [
    { name: 'Nasi Tim + Telur', emoji: '🍱', kcal: 220, protein: 5.8, karbo: 38, lemak: 5.2, serat: 1.4 },
  ],
  snack2: [],
  malam: [
    { name: 'Puree Ubi + Susu', emoji: '🍠', kcal: 76, protein: 1.6, karbo: 17.8, lemak: 0.8, serat: 2.8 },
  ],
};

export const MEALS_DEF: MealDef[] = [
  { key: 'sarapan', name: 'Sarapan', ico: '☀️', color: '#FFB020' },
  { key: 'snack1', name: 'Snack Pagi', ico: '🍪', color: '#FF7849' },
  { key: 'siang', name: 'Makan Siang', ico: '🌤️', color: '#2E7CF6' },
  { key: 'snack2', name: 'Snack Sore', ico: '🥨', color: '#8B6CF7' },
  { key: 'malam', name: 'Makan Malam', ico: '🌙', color: '#00B5A3' },
];

export const NEEDS: NeedDef[] = [
  { label: 'Kalori', unit: 'kkal', curr: (log) => totalKcal(log), target: 1000, color: '#00B5A3' },
  { label: 'Protein', unit: 'g', curr: (log) => totalMacro(log, 'protein'), target: 25, color: '#2E7CF6' },
  { label: 'Karbohidrat', unit: 'g', curr: (log) => totalMacro(log, 'karbo'), target: 130, color: '#FFB020' },
  { label: 'Lemak', unit: 'g', curr: (log) => totalMacro(log, 'lemak'), target: 35, color: '#00B5A3' },
  { label: 'Serat', unit: 'g', curr: (log) => totalMacro(log, 'serat'), target: 16, color: '#8B6CF7' },
  { label: 'Zat Besi', unit: 'mg', curr: () => 8.2, target: 11, color: '#FF7849' },
  { label: 'Kalsium', unit: 'mg', curr: () => 380, target: 650, color: '#1DC98A' },
  { label: 'Vitamin A', unit: 'mcg', curr: () => 220, target: 400, color: '#FFB020' },
];

export const DEMO_FOODS: Record<string, DemoFood> = {
  nasi: {
    emoji: '🍚', name: 'Nasi Tim Putih', portion: '±80g (4 sdm)', kcal: 104,
    protein: 2.1, karbo: 22.9, lemak: 0.2, serat: 0.4,
    vita: ['🌾 Zat Besi 0.4mg', '⚡ Thiamin 0.1mg', '🧀 Niasin 0.6mg'],
    suitability: '✓ Aman', suitColor: 'var(--green)',
    notes: [
      { ico: '✅', text: 'Karbohidrat kompleks yang baik sebagai sumber energi utama Rafi.' },
      { ico: '💡', text: 'Kombinasikan dengan lauk protein seperti telur atau ikan untuk nutrisi lebih lengkap.' },
      { ico: '⚠️', text: 'Hindari nasi terlalu pulen agar tidak mudah tersedak. Tekstur lembut cukup.' },
    ],
  },
  buah: {
    emoji: '🍓', name: 'Strawberry Segar', portion: '±60g (5-6 buah)', kcal: 19,
    protein: 0.4, karbo: 4.6, lemak: 0.2, serat: 1.2,
    vita: ['🍊 Vitamin C 42mg', '🧬 Folat 13mcg', '🔴 Mangan 0.2mg', '💧 Kalium 77mg'],
    suitability: '✓ Sangat Baik', suitColor: 'var(--teal)',
    notes: [
      { ico: '✅', text: 'Kaya Vitamin C yang membantu penyerapan zat besi — ideal dikombinasikan dengan lauk besi tinggi.' },
      { ico: '🌟', text: 'Antioksidan tinggi mendukung imunitas Rafi di usia tumbuh kembang aktif.' },
      { ico: '✂️', text: 'Potong menjadi potongan kecil (¼ buah) agar tidak tersedak ya Bunda.' },
    ],
  },
  telur: {
    emoji: '🥚', name: 'Telur Ayam Kampung Rebus', portion: '±50g (1 butir)', kcal: 77,
    protein: 6.3, karbo: 0.6, lemak: 5.3, serat: 0,
    vita: ['🧠 Kolin 147mg', '🌞 Vitamin D 1.1mcg', '🅱️ B12 0.6mcg', '🔑 Selenium 15.4mcg'],
    suitability: '✓ Sangat Dianjurkan', suitColor: 'var(--blue)',
    notes: [
      { ico: '🌟', text: 'Sumber protein lengkap (complete protein) terbaik untuk pertumbuhan otak dan otot Rafi.' },
      { ico: '🧠', text: 'Kolin sangat tinggi — krusial untuk perkembangan memori dan fungsi kognitif usia 1-3 tahun.' },
      { ico: '💡', text: 'Telur kampung memiliki omega-3 lebih tinggi dibanding telur biasa, baik untuk perkembangan saraf.' },
    ],
  },
};

export const ACHIEVEMENTS: Achievement[] = [
  { e: '🏆', n: 'Milestone Hunter', d: '5 milestone', lit: true },
  { e: '📸', n: 'Memory Maker', d: '10 foto', lit: true },
  { e: '🔥', n: '7-Day Streak', d: 'Login 7 hari', lit: true },
  { e: '⭐', n: 'Star Parent', d: 'Level 5', lit: true },
  { e: '🥗', n: 'Nutrisi Pro', d: '7 hari lengkap', lit: false },
  { e: '📈', n: 'Growth Master', d: '3 bln on-track', lit: false },
];

export const INITIAL_MESSAGES: ChatMessage[] = [
  { role: 'bot', text: 'Halo Bunda! 👋\n\nSaya AI Asisten berbasis panduan dr. Piprim, SpA(K) & IDAI. Siap bantu pertanyaan seputar tumbuh kembang Rafi!' },
  { role: 'usr', text: 'Rafi 15 bulan belum bisa tumpuk balok, normal ga Dok?' },
  { role: 'bot', text: 'Tenang Bunda 😊 Kemampuan menumpuk balok biasanya muncul di 15–18 bulan — Rafi masih dalam rentang normal.\n\nCoba stimulasi:\n• Masukkan bola ke lubang botol\n• Meremas-remas playdough\n• Pegang krayon tebal\n\nKalau usia 18 bulan belum bisa, baru perlu evaluasi lebih lanjut ya 🩺' },
];

export const BOT_RESPONSES = [
  'Terima kasih pertanyaannya Bunda 😊\n\nBerdasarkan panduan IDAI & WHO, Rafi masih dalam perkembangan yang normal. Tetap konsisten dengan stimulasi harian ya!',
  'Pertanyaan bagus! 🩺 Untuk usia Rafi, panduan dr. Piprim menyarankan stimulasi yang menyenangkan dan tidak memaksa.',
  'Berdasarkan data tumbuh kembang Rafi, perkembangannya sesuai milestone IDAI usia 15 bulan. Ada kekhawatiran spesifik? Jadwalkan konsultasi langsung ya Bunda.',
];

export const QUICK_QUESTIONS = ['Kapan imunisasi?', 'Menu MPASI 15 bln?', 'Kenapa GTM?', 'Tanda speech delay?'];

export function buildChartSVG(key: string): string {
  const d = CHARTS[key];
  const W = 320, H = 145, pl = 14, pr = 30, pt = 8, pb = 22;
  const cW = W - pl - pr, cH = H - pt - pb, n = d.labels.length;
  const allV = [...d.w3, ...d.w97];
  const mn = Math.min(...allV) - 1, mx = Math.max(...allV) + 1;
  const xs = (i: number) => pl + (i / (n - 1)) * cW;
  const ys = (v: number) => pt + cH - ((v - mn) / (mx - mn)) * cH;
  const lp = (arr: number[]) => arr.map((v, i) => `${i === 0 ? 'M' : 'L'}${xs(i).toFixed(1)},${ys(v).toFixed(1)}`).join(' ');
  const area = `M ${d.w97.map((v, i) => `${xs(i)},${ys(v)}`).join(' L')} L ${[...d.w3].reverse().map((v, i) => `${xs(n - 1 - i)},${ys(v)}`).join(' L')} Z`;
  let pts = '';
  const actuals = (d.actual as number[]).filter(v => v !== null);
  (d.actual as number[]).forEach((v, i) => {
    if (v === null) return;
    const last = i === actuals.length - 1;
    if (last) {
      pts += `<rect x="${xs(i) - 22}" y="${ys(v) - 19}" width="44" height="15" rx="5" fill="${d.color}"/><text x="${xs(i)}" y="${ys(v) - 9}" text-anchor="middle" font-size="9" fill="white" font-weight="800" font-family="Nunito">${v}</text><circle cx="${xs(i)}" cy="${ys(v)}" r="5" fill="${d.color}" stroke="white" stroke-width="2.5"/><circle cx="${xs(i)}" cy="${ys(v)}" r="8" fill="${d.color}" opacity=".15"/>`;
    } else {
      pts += `<circle cx="${xs(i)}" cy="${ys(v)}" r="3.5" fill="none" stroke="${d.color}" stroke-width="2"/>`;
    }
  });
  const grid = [1, 2, 3].map(j => { const y = pt + (cH / 4) * j; return `<line x1="${pl}" y1="${y}" x2="${pl + cW}" y2="${y}" stroke="${d.color}" stroke-width=".7" opacity=".1"/>`; }).join('');
  const xlbls = d.labels.map((l, i) => `<text x="${xs(i)}" y="${H - 3}" text-anchor="middle" font-size="8" fill="#A0AEBE" font-family="Nunito" font-weight="700">${l}bl</text>`).join('');
  return `<svg class="chart-svg" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">${grid}<path d="${area}" fill="${d.color}" opacity=".07"/><path d="${lp(d.w97)}" stroke="${d.color}" stroke-width="1.2" fill="none" stroke-dasharray="3,2" opacity=".4"/><path d="${lp(d.w3)}" stroke="${d.color}" stroke-width="1.2" fill="none" stroke-dasharray="3,2" opacity=".4"/><path d="${lp(d.actual as number[])}" stroke="${d.color}" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>${pts}${xlbls}<text x="${pl + cW + 2}" y="${ys(d.w97[n - 1]) + 4}" font-size="8" fill="#A0AEBE" font-family="Nunito" font-weight="700">P97</text><text x="${pl + cW + 2}" y="${ys(d.w3[n - 1]) + 4}" font-size="8" fill="#A0AEBE" font-family="Nunito" font-weight="700">P3</text></svg>`;
}
