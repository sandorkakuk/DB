
import React, { useState } from 'react';
import { getDatabaseAdvice } from '../services/geminiService';

const GeminiAdvisor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    const advice = await getDatabaseAdvice(query);
    setResponse(advice);
    setLoading(false);
  };

  return (
    <section id="ai-advisor" className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">AI Adatbázis Szakértő</h2>
          <p className="text-xl text-slate-400">
            Kérdezd meg a Gemini-t, melyik adatbázis illik legjobban a projektedhez!
          </p>
        </div>

        <form onSubmit={handleAsk} className="relative group">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Példa: Egy nagy forgalmú e-commerce oldalhoz MariaDB-t vagy MySQL-t ajánlasz inkább?"
            className="w-full h-40 p-6 rounded-2xl bg-slate-800 border-2 border-slate-700 focus:border-blue-500 focus:outline-none text-lg transition-all"
          />
          <button
            type="submit"
            disabled={loading}
            className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/20"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Elemzés...
              </span>
            ) : 'Kérdezés'}
          </button>
        </form>

        {response && (
          <div className="mt-8 p-8 rounded-2xl bg-slate-800 border border-slate-700 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h4 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
              Gemini Válasza:
            </h4>
            <div className="prose prose-invert max-w-none text-slate-300 whitespace-pre-wrap leading-relaxed">
              {response}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GeminiAdvisor;
