
import React, { useState } from 'react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (value: any) => void;
  onBack?: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, onBack }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.type === 'number') {
      const val = parseFloat(inputValue);
      if (isNaN(val)) return;
      onAnswer(val);
      setInputValue('');
    }
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-8 rounded-2xl shadow-2xl w-full max-w-lg mx-auto transform transition-all animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-100 leading-tight">
          {question.text}
        </h2>
      </div>

      <div className="space-y-4">
        {question.type === 'number' && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              autoFocus
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={question.placeholder}
              className="bg-slate-900 border border-slate-700 text-slate-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-lg"
            />
            <button
              type="submit"
              disabled={!inputValue}
              className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-orange-500/20 transition-all active:scale-95 disabled:opacity-50"
            >
              Continue 🚀
            </button>
          </form>
        )}

        {question.type === 'select' && (
          <div className="grid gap-3">
            {question.options?.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => onAnswer(opt.value)}
                className="w-full text-left bg-slate-700/50 hover:bg-slate-700 border border-slate-600 hover:border-orange-500/50 text-slate-200 p-4 rounded-xl transition-all active:scale-[0.98]"
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}

        {question.type === 'boolean' && (
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => onAnswer(true)}
              className="bg-slate-700/50 hover:bg-slate-700 border border-slate-600 hover:border-orange-500/50 text-slate-200 font-bold py-4 rounded-xl transition-all active:scale-95"
            >
              Yes 🥵
            </button>
            <button
              onClick={() => onAnswer(false)}
              className="bg-slate-700/50 hover:bg-slate-700 border border-slate-600 hover:border-orange-500/50 text-slate-200 font-bold py-4 rounded-xl transition-all active:scale-95"
            >
              No 😇
            </button>
          </div>
        )}
      </div>

      {onBack && (
        <button
          onClick={onBack}
          className="mt-6 text-slate-500 hover:text-slate-300 transition-colors text-sm font-medium w-full text-center"
        >
          ← Go back
        </button>
      )}
    </div>
  );
};

export default QuestionCard;
