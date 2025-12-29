
import React, { useEffect, useState } from 'react';
import { UserData, CalculationResult } from '../types';

interface ResultsViewProps {
  data: UserData;
  results: CalculationResult;
  onReset: () => void;
}

const ResultsView: React.FC<ResultsViewProps> = ({ data, results, onReset }) => {
  const [visibleItems, setVisibleItems] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleItems((prev) => (prev < 12 ? prev + 1 : prev));
    }, 600);
    return () => clearInterval(timer);
  }, []);

  const shareText = `I just calculated my lifetime masturbation count on PapCounter... it's ${results.lifetimeCount} times 💀😂 Can you beat that? Try it yourself!`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareText);
    alert('Copied to clipboard! Go share the chaos 📤');
  };

  const Section: React.FC<{ index: number; children: React.ReactNode }> = ({ index, children }) => (
    <div
      className={`transition-all duration-1000 transform ${
        visibleItems >= index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } mb-8`}
    >
      {children}
    </div>
  );

  return (
    <div className="w-full max-w-2xl mx-auto py-12 px-4 pb-24 scroll-smooth">
      <Section index={1}>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-4 gradient-text tracking-tighter">
            🔥 PAPCOUNTER RESULTS 🔥
          </h1>
          <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
             <div className="h-full bg-orange-500 animate-[progress_3s_ease-in-out]"></div>
          </div>
        </div>
      </Section>

      <Section index={2}>
        <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 shadow-xl">
          <p className="text-xl text-slate-300 leading-relaxed mb-6">
            Yo <span className="text-orange-400 font-bold">{data.age}</span>-year-old warrior... your stats are IN. 📊
          </p>
          <div className="space-y-4 text-slate-200">
            <div className="flex items-center gap-3">
              <span className="text-2xl">👤</span>
              {/* Corrected: Use startingAge from results */}
              <span>Your Journey Started: <span className="font-bold">Age {results.startingAge}</span></span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">⏳</span>
              <span>Years Active: <span className="font-bold">{results.activeYears} years</span></span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📅</span>
              <span>That's <span className="font-bold">{results.activeYears * 52}</span> weeks of... exploration 😏</span>
            </div>
          </div>
        </div>
      </Section>

      <Section index={3}>
        <div className="border-t border-slate-700 my-8"></div>
        <h3 className="text-2xl font-black mb-6 text-slate-100">📈 PHASE BREAKDOWN</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-orange-500/10 p-5 rounded-xl border border-orange-500/20">
            {/* Corrected: Access properties from results object */}
            <h4 className="font-bold text-orange-400 mb-2">🔥 Peak Years ({results.peakYears} years):</h4>
            <ul className="text-sm space-y-1 text-slate-300">
              {/* Corrected: Use calculated peakFrequency */}
              <li>• Frequency: {results.peakFrequency} times/week</li>
              {/* Corrected: Use peakCount from results */}
              <li>• Total: ~{results.peakCount} times</li>
              <li className="font-bold text-orange-300">Status: BEAST MODE 💪</li>
            </ul>
          </div>
          <div className="bg-blue-500/10 p-5 rounded-xl border border-blue-500/20">
            {/* Corrected: Access properties from results object */}
            <h4 className="font-bold text-blue-400 mb-2">😌 Normal Years ({results.normalYears} years):</h4>
            <ul className="text-sm space-y-1 text-slate-300">
              {/* Corrected: Use currentFreq from data */}
              <li>• Frequency: {data.currentFreq} times/week</li>
              {/* Corrected: Use normalCount from results */}
              <li>• Total: ~{results.normalCount} times</li>
              <li className="font-bold text-blue-300">
                {/* Corrected: Use currentFreq for status checks */}
                Status: {data.currentFreq > 5 ? "Still going strong 🚀" : data.currentFreq >= 3 ? "Balanced life ✅" : "Monk mode 🧘"}
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section index={4}>
        <div className="bg-gradient-to-br from-pink-600 to-orange-600 p-8 rounded-3xl shadow-2xl text-center transform hover:scale-[1.02] transition-transform">
          <h3 className="text-xl font-bold text-white/90 mb-2 uppercase tracking-widest">🎯 YOUR LIFETIME COUNT</h3>
          <div className="text-7xl font-black text-white mb-4 animate-pulse">
            {results.lifetimeCount}
          </div>
          <p className="text-lg font-semibold text-white/90 italic">
            {results.lifetimeCount > 1500 ? "BRO. You're a LEGEND. 😂 That's dedication." :
             results.lifetimeCount > 1000 ? "Solid numbers, king. You're living the average life. 👑" :
             results.lifetimeCount > 500 ? "Respectable. Balanced and chill. ✅" :
             "Either you started late or you're a monk. Respect. 🧘"}
          </p>
        </div>
      </Section>

      <Section index={5}>
        <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 mt-8">
          <h4 className="text-lg font-bold text-slate-100 flex items-center gap-2 mb-4">
            🏆 ACHIEVEMENT UNLOCKED
          </h4>
          {/* Corrected: Use longestStreak instead of streak */}
          <p className="text-slate-300 mb-2">Longest Streak Without: <span className="font-bold text-orange-400">{data.longestStreak} days</span></p>
          <div className="text-sm font-medium p-3 bg-slate-900 rounded-lg text-slate-400 border border-slate-700">
            {/* Corrected: Use longestStreak for streak milestones */}
            {data.longestStreak > 90 ? "LEGENDARY SELF-CONTROL 🏅 You're built different." :
             data.longestStreak > 30 ? "Solid discipline. NoFap warrior status. 💪" :
             data.longestStreak > 7 ? "You tried. That's what counts. 😅" :
             "Bro couldn't even go a week 💀 No judgment though."}
          </div>
        </div>
      </Section>

      <Section index={6}>
         <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 mt-6">
          <h4 className="text-lg font-bold text-slate-100 flex items-center gap-2 mb-4">
            📊 SESSION PACE
          </h4>
          {/* Corrected: Use averageGapDays from results */}
          <p className="text-slate-300 mb-2">⏱️ You go approximately every <span className="font-bold text-orange-400">{results.averageGapDays} days</span></p>
          <div className="text-sm font-medium text-slate-400 italic">
            {/* Corrected: Use averageGapDays for pace feedback */}
            {results.averageGapDays < 1.5 ? "Basically daily. Routine locked in. 🔒" :
             results.averageGapDays < 3 ? "Every couple days. Normal rhythm. ✅" :
             results.averageGapDays < 5 ? "Couple times a week. Chill vibes. 😎" :
             "Once a week or less. Self-control king. 👑"}
          </div>
        </div>
      </Section>

      <Section index={7}>
        <div className="bg-red-950/20 border border-red-900/30 p-8 rounded-3xl mt-8">
          <h3 className="text-2xl font-black text-red-500 mb-6 flex items-center gap-2">
            🧬 THE BIOLOGICAL MATH
          </h3>
          <div className="text-center mb-6">
            {/* Corrected: Use totalSpermBillions from results */}
            <div className="text-5xl font-black text-red-400 mb-2">{results.totalSpermBillions} BILLION</div>
            <p className="text-slate-400">Total Sperm Wasted 💀😂</p>
          </div>
          <p className="text-slate-300 leading-relaxed mb-4">
            {/* Corrected: Use totalSpermBillions for biological calculation */}
            Bro you literally killed <span className="font-bold text-red-400">{results.totalSpermBillions} BILLION</span> potential kids. That's enough to populate:
          </p>
          <div className="bg-black/40 p-4 rounded-xl text-orange-400 font-bold border border-orange-500/20">
             {/* Corrected: Use totalSpermBillions for comparisons */}
             {results.totalSpermBillions > 10 ? "• THE ENTIRE PLANET multiple times over 🌍" :
              results.totalSpermBillions > 5 ? "• Almost the whole Earth's population 😳" :
              results.totalSpermBillions > 1 ? "• Like... all of India or China 🇮🇳🇨🇳" :
              "• A decent-sized country 🏙️"}
          </div>
          <p className="mt-4 text-center text-red-500 text-xs font-bold uppercase tracking-widest">RIP to the fallen soldiers 🪖⚰️</p>
        </div>
      </Section>

      <Section index={8}>
        <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 mt-8">
          <h3 className="text-2xl font-black text-slate-100 mb-6">🧠 MENTAL HEALTH CHECK</h3>
          {/* Corrected: Use currentFreq for mental health ranges */}
          {data.currentFreq <= 3 && (
            <div className="space-y-3 text-slate-300">
               <div className="text-green-400 font-bold">✅ HEALTHY RANGE</div>
               <p>Science says moderate masturbation (1-3x/week) is:</p>
               <ul className="list-disc pl-5 space-y-1">
                 <li>Stress reliever 🧘</li>
                 <li>Sleep improver 😴</li>
                 <li>Totally normal ✅</li>
               </ul>
               <p className="italic font-bold">You're chilling, king.</p>
            </div>
          )}
          {/* Corrected: Use currentFreq for mental health ranges */}
          {data.currentFreq > 3 && data.currentFreq <= 7 && (
            <div className="space-y-3 text-slate-300">
               <div className="text-green-400 font-bold">✅ NORMAL RANGE</div>
               <p>Daily or near-daily is common for:</p>
               <ul className="list-disc pl-5 space-y-1">
                 <li>Teens/young adults</li>
                 <li>High libido folks</li>
                 <li>Stressed people</li>
               </ul>
               <p className="italic font-bold">As long as it's not interfering with life, you're good 👍</p>
            </div>
          )}
          {/* Corrected: Use currentFreq for mental health ranges */}
          {data.currentFreq > 7 && data.currentFreq <= 14 && (
            <div className="space-y-3 text-slate-300">
               <div className="text-yellow-400 font-bold">⚠️ HIGH FREQUENCY</div>
               <p>Twice a day regularly? Science says:</p>
               <ul className="list-disc pl-5 space-y-1 text-sm">
                 <li>Might be stress/boredom coping 🤔</li>
                 <li>Could affect energy/focus 😮‍💨</li>
                 <li>Still not "unhealthy" but maybe... chill a bit? 😅</li>
               </ul>
               <p className="italic text-xs mt-2">Consider: Are you avoiding something? Is this your default boredom activity?</p>
            </div>
          )}
          {/* Corrected: Use currentFreq for mental health ranges */}
          {data.currentFreq > 14 && (
            <div className="space-y-3 text-slate-300">
               <div className="text-red-500 font-bold">🚨 VERY HIGH FREQUENCY</div>
               <p>Bro... 2-3 times EVERY day? 😳</p>
               <div className="bg-red-500/10 p-3 rounded-lg border border-red-500/20 text-sm">
                  This might be compulsive behavior. Consider talking to a professional. No shame! You might wanna explore WHY you're doing it this much.
               </div>
            </div>
          )}
        </div>
      </Section>

      <Section index={9}>
        <div className="bg-slate-900 border-2 border-slate-700 p-8 rounded-3xl mt-8 text-center">
          <h3 className="text-2xl font-black text-slate-100 mb-4">🎉 FINAL VERDICT</h3>
          <div className="text-3xl font-black gradient-text uppercase mb-6">
            {results.lifetimeCount > 1500 ? "HALL OF FAMER 🏆" :
             results.lifetimeCount > 1000 ? "VETERAN 💪" :
             results.lifetimeCount > 500 ? "SOLID AVERAGE ✅" :
             "THE MONK 🧘"}
          </div>
          <button
            onClick={copyToClipboard}
            className="w-full bg-slate-100 hover:bg-white text-slate-900 font-black py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xl shadow-white/10"
          >
            📤 SHARE YOUR PAP REPORT
          </button>
        </div>
      </Section>

      <Section index={10}>
        <div className="text-center mt-12 mb-20">
          <button
            onClick={onReset}
            className="text-slate-500 hover:text-slate-300 font-bold underline transition-colors"
          >
            Start over (Clean slate 🫧)
          </button>
          <p className="mt-8 text-slate-600 text-sm">
            Thanks for being honest, king 👑<br/>
            Stay healthy, stay happy! ✌️
          </p>
        </div>
      </Section>
    </div>
  );
};

export default ResultsView;
