
import React from 'react';
import { DATABASE_HISTORY } from '../constants';

const HistoryTimeline: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=60&w=1200'; // Modern server/tech fallback
    target.className = target.className + " opacity-50 grayscale";
  };

  return (
    <section id="history" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-6xl mb-6">
            Az Adatbázisok Evolúciója
          </h2>
          <p className="mt-4 text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Hogyan jutottunk el a lyukkártyás rendszerektől a modern, mesterséges intelligenciát kiszolgáló elosztott hálózatokig? Ismerje meg a DBMS történetének mérföldköveit.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Center Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-200"></div>

          <div className="space-y-24">
            {DATABASE_HISTORY.map((event, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2 px-4 md:px-12">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-slate-100 aspect-video md:aspect-[4/3]">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        onError={handleImageError}
                        className="w-full h-full object-cover transform transition group-hover:scale-110 duration-700"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-lg items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 px-4 md:px-12 text-center md:text-left">
                  <div className={`${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                    <span className="inline-block px-4 py-1 text-sm font-bold text-blue-600 bg-blue-50 rounded-full mb-4 shadow-sm">
                      {event.year}
                    </span>
                    <h3 className="text-3xl font-black text-slate-800 mb-4 tracking-tight leading-tight">
                      {event.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed font-normal">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;
