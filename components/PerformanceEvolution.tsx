
import React from 'react';
import { PERFORMANCE_COMPARISON } from '../constants';

const PerformanceEvolution: React.FC = () => {
  return (
    <section id="performance" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Teljesítmény Evolúció
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Hogyan gyorsult fel az adatkezelés az évtizedek során? Összehasonlítjuk a Mainframe korszakot a modern felhő-alapú rendszerekkel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PERFORMANCE_COMPARISON.map((item, index) => (
            <div key={index} className="relative group p-8 rounded-3xl bg-slate-800 border border-slate-700 hover:border-blue-500 transition-all duration-300">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
                {index + 1}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-blue-400">{item.era}</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Válaszidő</p>
                  <p className="text-lg font-medium">{item.throughput}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Kapacitás</p>
                  <p className="text-lg font-medium">{item.capacity}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Rendelkezésre állás</p>
                  <p className="text-lg font-medium">{item.availability}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Skálázhatóság</p>
                  <p className="text-lg font-medium">{item.scale}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600/10 border border-blue-500/30 rounded-2xl p-8 text-center">
          <h4 className="text-2xl font-bold mb-2">Mi a különbség lényege?</h4>
          <p className="text-lg text-slate-300">
            Míg 1970-ben egyetlen lekérdezés perceket vett igénybe és manuális papírmunkát igényelt, ma a <strong>Google Spanner</strong> vagy az <strong>Amazon Aurora</strong> képes több millió írási műveletet végrehajtani másodpercenként, miközben az adatok globálisan replikálódnak, garantálva a 99.999%-os üzemidőt.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PerformanceEvolution;
