
import React from 'react';

const JsonExplanation: React.FC = () => {
  const jsonExample = `{
  "felhasznalo": {
    "id": 101,
    "nev": "Kovács János",
    "aktiv": true,
    "szerepkorok": ["fejleszto", "admin"],
    "beallitasok": {
      "nyelv": "hu",
      "tema": "sotet"
    }
  }
}`;

  return (
    <section id="json-info" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
              Mi az a <span className="text-blue-600">JSON</span>?
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              A <strong>JSON</strong> (JavaScript Object Notation) egy könnyű, szöveges alapú adatcsere-formátum. Bár a JavaScriptből ered, mára nyelvfüggetlenné vált, és a modern webes kommunikáció, valamint a NoSQL adatbázisok alapkövévé nőtte ki magát.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-blue-100 text-blue-600 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Olvasható</h4>
                  <p className="text-slate-500 text-sm">Embereknak és gépeknek egyaránt könnyen értelmezhető.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-blue-100 text-blue-600 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Hierarchikus</h4>
                  <p className="text-slate-500 text-sm">Tömbökbe és objektumokba ágyazott adatokat kezel.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-blue-100 text-blue-600 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Adatbázis Kapcsolat</h4>
                  <p className="text-slate-500 text-sm">A MongoDB natívan (BSON formában), a MySQL és MariaDB pedig speciális oszloptípusként támogatja.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-800 overflow-hidden">
              <div className="flex gap-1.5 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs text-slate-500 mono">example.json</span>
              </div>
              <pre className="mono text-sm leading-relaxed overflow-x-auto">
                <code className="text-slate-300">
                  {jsonExample.split('\n').map((line, i) => (
                    <div key={i} className="flex">
                      <span className="w-8 text-slate-600 select-none text-right mr-4">{i + 1}</span>
                      <span dangerouslySetInnerHTML={{ 
                        __html: line
                          .replace(/"([^"]+)":/g, '<span class="text-blue-400">"$1"</span>:')
                          .replace(/: ("[^"]+")/g, ': <span class="text-green-400">$1</span>')
                          .replace(/: (true|false)/g, ': <span class="text-amber-400">$1</span>')
                          .replace(/: ([0-9]+)/g, ': <span class="text-purple-400">$1</span>')
                      }} />
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JsonExplanation;
