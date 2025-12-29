
import { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 'currentAge',
    text: "Yo! What's your age right now? (Be honest, no one's judging... yet 😏)",
    type: 'number',
    placeholder: 'Enter your age',
    min: 1,
    max: 100
  },
  {
    id: 'startingAge',
    text: "Alright, at what age did you first start this... solo journey? 🚀 (Most people start between 12-16)",
    type: 'number',
    placeholder: 'Starting age (e.g., 13)',
    min: 5,
    max: 30
  },
  {
    id: 'currentFrequency',
    text: "How many times per week do you do it NOW? (Be real with yourself 💯)",
    type: 'select',
    options: [
      { label: '1-2 times? (Chill monk mode 🧘)', value: 1.5 },
      { label: '3-5 times? (Average dude ✅)', value: 4 },
      { label: '6-7 times? (Daily driver 🚗)', value: 6.5 },
      { label: '8-10 times? (Bro... 😳)', value: 9 },
      { label: '10+ times? (TOUCH GRASS 🌱)', value: 12 }
    ]
  },
  {
    id: 'peakFrequency',
    text: "During your PEAK horny years (usually teens), how many times per week were you going at it? 🔥",
    type: 'number',
    placeholder: 'Peak times per week',
    min: 0,
    max: 20
  },
  {
    id: 'peakDuration',
    text: "How many YEARS did that peak phase last? (Usually 1-4 years)",
    type: 'number',
    placeholder: 'Number of peak years',
    min: 0,
    max: 20
  },
  {
    id: 'longestStreak',
    text: "What's the LONGEST you've ever stopped? 🏆 (Enter in days)",
    type: 'number',
    placeholder: 'Days (e.g., 30)',
    min: 0,
    max: 365
  },
  {
    id: 'multiDay',
    text: "Ever had days where you went 2-3+ times in a single day? 🥵",
    type: 'boolean'
  },
  {
    id: 'multiDayCount',
    text: "Roughly how many days in your ENTIRE LIFE have you done it 2-3+ times?",
    type: 'select',
    options: [
      { label: 'Just a few times (5-10 days)', value: 7 },
      { label: 'Happened regularly during peak years (50-100 days)', value: 75 },
      { label: 'A lot (100-200 days)', value: 150 },
      { label: 'Too many to count (200+ days)', value: 300 }
    ]
  }
];
