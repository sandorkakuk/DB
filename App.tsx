
import React from 'react';
import HistoryTimeline from './components/HistoryTimeline';
import PopularityCharts from './components/PopularityCharts';
import Comparison from './components/Comparison';
import NoSqlComparison from './components/NoSqlComparison';
import JsonExplanation from './components/JsonExplanation';
import GeminiAdvisor from './components/GeminiAdvisor';
import LampGuide from './components/LampGuide';
import PerformanceEvolution from './components/PerformanceEvolution';

const Navbar: React.FC = () => (
  <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">D</div>
          <span className="text-xl font-extrabold text-slate-900 tracking-tight">DB Hub</span>
        </div>
        <div className="hidden md:flex space-x-4 lg:space-x-6">
          <a href="#history" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Történet</a>
          <a href="#performance" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Teljesítmény</a>
          <a href="#popularity" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Népszerűség</a>
          <a href="#comparison" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">SQL vs SQL</a>
          <a href="#nosql" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">NoSQL</a>
          <a href="#json-info" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">JSON</a>
          <a href="#lamp-guide" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Stacks</a>
          <a href="#ai-advisor" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors text-blue-600 font-bold">AI Advisor</a>
        </div>
      </div>
    </div>
  </nav>
);

const Hero: React.FC = () => (
  <div className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-slate-950"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
        Az Adatbázis-kezelők <br/>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
          Fejlődése és Jövője
        </span>
      </h1>
      <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
        Fedezd fel, hogyan alakult át az adattárolás világa az elmúlt 60 évben, és hasonlítsd össze a legnépszerűbb SQL és NoSQL megoldásokat.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="#history" className="bg-white text-slate-950 px-8 py-3 rounded-full font-bold hover:bg-slate-200 transition-all shadow-xl">
          Történet áttekintése
        </a>
        <a href="#ai-advisor" className="bg-slate-800 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-700 border border-slate-700 transition-all">
          Kérdezd az AI-t
        </a>
      </div>
    </div>
  </div>
);

const Footer: React.FC = () => (
  <footer className="bg-slate-50 border-t border-slate-200 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500">
      <p className="font-medium">© 2024 Database Evolution Hub. Készült oktatási céllal.</p>
      <p className="text-sm mt-2">Relációs és NoSQL összehasonlító elemzés fejlesztőknek.</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HistoryTimeline />
      <PerformanceEvolution />
      <PopularityCharts />
      <Comparison />
      <NoSqlComparison />
      <JsonExplanation />
      <LampGuide />
      <GeminiAdvisor />
      <Footer />
    </div>
  );
};

export default App;
