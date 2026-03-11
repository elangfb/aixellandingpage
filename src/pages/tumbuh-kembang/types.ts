export interface ChartData {
  name: string;
  curr: string;
  color: string;
  labels: string[];
  w3: number[];
  w97: number[];
  actual: (number | null)[];
  insight: string;
}

export interface MilestonePhoto {
  e: string;
  c: string;
  d: string;
}

export interface MilestoneItem {
  id: number;
  ico: string;
  title: string;
  desc: string;
  status: 'done' | 'doing' | 'todo';
  xp: number;
  pct: number;
  photos: MilestonePhoto[];
}

export interface NutritionItem {
  name: string;
  emoji: string;
  kcal: number;
  protein: number;
  karbo: number;
  lemak: number;
  serat: number;
}

export interface NutritionLog {
  sarapan: NutritionItem[];
  snack1: NutritionItem[];
  siang: NutritionItem[];
  snack2: NutritionItem[];
  malam: NutritionItem[];
  [key: string]: NutritionItem[];
}

export interface MealDef {
  key: string;
  name: string;
  ico: string;
  color: string;
}

export interface NeedDef {
  label: string;
  unit: string;
  curr: (log: NutritionLog) => number;
  target: number;
  color: string;
}

export interface DemoFood {
  emoji: string;
  name: string;
  portion: string;
  kcal: number;
  protein: number;
  karbo: number;
  lemak: number;
  serat: number;
  vita: string[];
  suitability: string;
  suitColor: string;
  notes: { ico: string; text: string }[];
}

export interface Achievement {
  e: string;
  n: string;
  d: string;
  lit: boolean;
}

export interface ChatMessage {
  role: 'bot' | 'usr';
  text: string;
}

export type TabName = 'home' | 'growth' | 'milestone' | 'nutrisi' | 'chat' | 'profile';
