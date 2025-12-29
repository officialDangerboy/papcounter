
export interface Question {
  id: string;
  text: string;
  type: 'number' | 'select' | 'boolean';
  placeholder?: string;
  min?: number;
  max?: number;
  options?: { label: string; value: any }[];
}

export interface UserData {
  age: number;
  startingAgeRange: string;
  peakStartAge: number;
  peakEndAge: number;
  peakFreqLevel: string;
  currentFreq: number;
  noFapBreaksRange: string;
  multiDayActive: boolean;
  multiDayCount: number;
  relationshipImpactMonths: number;
  stressPhaseBoosterLevel: string;
  gender: 'Boys' | 'Girls';
  fantasyStar: string;
  longestStreak: number;
}

export interface CalculationResult {
  lifetimeCount: number;
  rank: string;
  rankBadge: string;
  rankColor: string;
  comparisonPercent: number;
  quote: string;
  potentialBabiesWasted: string;
  activeYears: number;
  gapDays: number;
  // Missing properties used in ResultsView.tsx
  peakYears: number;
  peakCount: number;
  normalYears: number;
  normalCount: number;
  averageGapDays: number;
  totalSpermBillions: number;
  startingAge: number;
  peakFrequency: number;
}
