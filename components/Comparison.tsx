
import React from 'react';
import { COMPARISON_DATA } from '../constants';

const Comparison: React.FC = () => {
  return (
    <section id="comparison" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            MariaDB vs MySQL
          </h2>
          <p className="mt-4 text-xl text-slate-500 max-w-3xl mx-auto">
            Bár közös tőről fakadnak, a két rendszer jelentősen eltávolodott egymástól. Nézzük a technikai különbségeket!
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50">
                <th className="p-6 font-bold text-slate-700 border-b">Jellemző</th>
                <th className="p-6 font-bold text-blue-600 border-b">MySQL</th>
                <th className="p-6 font-bold text-teal-600 border-b">MariaDB</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((item, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-medium text-slate-800 border-b">{item.feature}</td>
                  <td className={`p-6 border-b ${item.winner === 'mysql' ? 'bg-blue-50/50' : ''}`}>
                    {item.mysql}
                    {item.winner === 'mysql' && (
                      <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                        Winner
                      </span>
                    )}
                  </td>
                  <td className={`p-6 border-b ${item.winner === 'mariadb' ? 'bg-teal-50/50' : ''}`}>
                    {item.mariadb}
                    {item.winner === 'mariadb' && (
                      <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-teal-100 text-teal-800">
                        Winner
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-600 p-8 rounded-2xl text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Mikor válaszd a MySQL-t?</h3>
            <ul className="space-y-3 opacity-90">
              <li className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                Ha felhő-natív managed szolgáltatásokat használsz (AWS RDS, Google Cloud SQL).
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                Erős JSON támogatásra és hatékony indexelésre van szükséged.
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                Vállalati szintű 0-24 supportot igényelsz az Oracle-től.
              </li>
            </ul>
          </div>
          <div className="bg-teal-600 p-8 rounded-2xl text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Mikor válaszd a MariaDB-t?</h3>
            <ul className="space-y-3 opacity-90">
              <li className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                A nyílt forráskódú ökoszisztémát és a közösségi kontrollt preferálod.
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                Komplex lekérdezések és nagy teljesítményű thread-kezelés kell.
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                Speciális tároló motorokra (pl. ColumnStore) van szükséged analytics-hez.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
