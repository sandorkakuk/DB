
import React from 'react';
import { NOSQL_COMPARISON } from '../constants';

const NoSqlComparison: React.FC = () => {
  return (
    <section id="nosql" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            NoSQL Alternatívák
          </h2>
          <p className="mt-4 text-xl text-slate-500 max-w-3xl mx-auto">
            Amikor a relációs modellek (MySQL/MariaDB) elérik korlátaikat: Dokumentumtárak és oszlop-orientált rendszerek.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-md border-l-8 border-green-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-green-100 rounded-lg text-green-600">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800">MongoDB</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              A legnépszerűbb dokumentum-alapú NoSQL adatbázis. Adatainkat rugalmas, JSON-szerű dokumentumokban tárolja. Ideális választás, ha az adatszerkezet gyakran változik, vagy ha gyors iterációra van szükség a fejlesztés során.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border-l-8 border-blue-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M21 16.5c0 .38-.21.71-.53.88l-7.97 4.44c-.31.17-.69.17-1 0l-7.97-4.44c-.32-.17-.53-.5-.53-.88v-9c0-.38.21-.71.53-.88l7.97-4.44c.31-.17.69-.17 1 0l7.97 4.44c.32.17.53.5.53.88v9z"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Apache Cassandra</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Elosztott, széles oszlop-orientált adatbázis. A Google Bigtable koncepcióján alapul. Kiemelkedő teljesítményt nyújt írási műveletek során és garantálja a magas rendelkezésre állást egyetlen hibaforrás nélkül (masterless).
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-lg bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50">
                <th className="p-6 font-bold text-slate-700 border-b">Jellemző</th>
                <th className="p-6 font-bold text-green-600 border-b">MongoDB</th>
                <th className="p-6 font-bold text-blue-600 border-b">Cassandra</th>
              </tr>
            </thead>
            <tbody>
              {NOSQL_COMPARISON.map((item, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-medium text-slate-800 border-b">{item.feature}</td>
                  <td className="p-6 border-b text-slate-600">{item.mongodb}</td>
                  <td className="p-6 border-b text-slate-600">{item.cassandra}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 p-6 bg-white rounded-2xl shadow-inner border border-slate-200">
          <h4 className="text-lg font-bold text-slate-800 mb-2">Összegezve: NoSQL vs SQL</h4>
          <p className="text-slate-600">
            Míg a <strong>MySQL/MariaDB</strong> a strukturált adatok és a komplex relációk bajnoka, addig a <strong>NoSQL</strong> megoldások a méretbeli skálázhatóságban és a rugalmasságban jeleskednek. Programozói szempontból a MongoDB a legkönnyebben integrálható (különösen JavaScript/Node.js környezetben), míg a Cassandra komolyabb tervezést igényel a lekérdezési minták mentén.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NoSqlComparison;
