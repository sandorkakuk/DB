
import React from 'react';

const LampGuide: React.FC = () => {
  const stacks = [
    {
      name: 'LAMP',
      full: 'Linux, Apache, MySQL, PHP',
      desc: 'A klasszikus szerveroldali stack. Leginkább éles (production) környezetben, Linux szervereken használatos.',
      color: 'bg-orange-600',
      os: 'Linux'
    },
    {
      name: 'WAMP',
      full: 'Windows, Apache, MySQL, PHP',
      desc: 'Kifejezetten Windows-ra optimalizált szoftvercsomag helyi fejlesztéshez. Egyszerű vezérlőpultot biztosít.',
      color: 'bg-blue-600',
      os: 'Windows'
    },
    {
      name: 'XAMPP',
      full: 'Cross-Platform, Apache, MariaDB, PHP, Perl',
      desc: 'A legnépszerűbb keresztplatformos csomag. Az "X" jelentése bármely operációs rendszer, és MariaDB-t használ MySQL helyett.',
      color: 'bg-teal-600',
      os: 'Windows, Linux, Mac'
    },
    {
      name: 'MAMP',
      full: 'Mac, Apache, MySQL, PHP',
      desc: 'Eredetileg macOS-re készült, de már Windows-ra is elérhető. Nagyon tiszta felületet és könnyű verzióváltást kínál.',
      color: 'bg-slate-700',
      os: 'Mac, Windows'
    }
  ];

  const steps = [
    {
      title: '1. Rendszer frissítése (Linux)',
      command: 'sudo apt update && sudo apt upgrade -y',
      description: 'Mielőtt bármit telepítenénk, fontos, hogy a csomaglista és a meglévő csomagok naprakészek legyenek.'
    },
    {
      title: '2. Apache Webszerver telepítése',
      command: 'sudo apt install apache2 -y',
      description: 'Az Apache a világ egyik legnépszerűbb webszervere. Telepítés után a szerver IP címét beírva a böngészőbe az Apache alapértelmezett oldalát kell látnod.'
    },
    {
      title: '3. MySQL / MariaDB telepítése',
      command: 'sudo apt install mariadb-server mariadb-client -y',
      description: 'Választhatod a MySQL-t is, de a MariaDB gyakran javasolt modern Ubuntu rendszereken. Telepítés után futtasd a biztonsági szkriptet: sudo mysql_secure_installation'
    },
    {
      title: '4. PHP telepítése',
      command: 'sudo apt install php libapache2-mod-php php-mysql -y',
      description: 'A PHP a szerveroldali szkriptnyelv. Szükség van a MySQL modulra és az Apache integrációra is.'
    }
  ];

  return (
    <section id="lamp-guide" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Webes Szerver-Stackek
          </h2>
          <p className="mt-4 text-xl text-slate-500">
            LAMP, WAMP, XAMPP – Mi a különbség és melyiket válaszd?
          </p>
        </div>

        {/* Stacks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stacks.map((stack, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className={`${stack.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-black mb-6 shadow-lg`}>
                {stack.name}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{stack.name}</h4>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">{stack.os}</p>
              <p className="text-sm text-slate-500 font-medium mb-4 italic">{stack.full}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{stack.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-200 mb-20">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Összehasonlító Táblázat</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="py-4 px-4 text-slate-500 font-bold uppercase text-xs">Szempont</th>
                  <th className="py-4 px-4 font-bold text-orange-600">LAMP</th>
                  <th className="py-4 px-4 font-bold text-teal-600">XAMPP</th>
                  <th className="py-4 px-4 font-bold text-blue-600">WAMP</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-50">
                  <td className="py-4 px-4 font-bold text-slate-700">Elsődleges cél</td>
                  <td className="py-4 px-4">Éles szerverek</td>
                  <td className="py-4 px-4">Helyi fejlesztés</td>
                  <td className="py-4 px-4">Helyi fejlesztés</td>
                </tr>
                <tr className="border-b border-slate-50">
                  <td className="py-4 px-4 font-bold text-slate-700">Adatbázis</td>
                  <td className="py-4 px-4">MySQL / MariaDB</td>
                  <td className="py-4 px-4">MariaDB (alapért.)</td>
                  <td className="py-4 px-4">MySQL</td>
                </tr>
                <tr className="border-b border-slate-50">
                  <td className="py-4 px-4 font-bold text-slate-700">Telepítés</td>
                  <td className="py-4 px-4">Manuális (parancssor)</td>
                  <td className="py-4 px-4">Telepítő varázsló</td>
                  <td className="py-4 px-4">Telepítő varázsló</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-slate-700">Konfiguráció</td>
                  <td className="py-4 px-4">Konf. fájlok (.conf)</td>
                  <td className="py-4 px-4">Vezérlőpult (GUI)</td>
                  <td className="py-4 px-4">Tálca ikon (GUI)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-800">Telepítési Útmutató (Linux / LAMP)</h3>
          <p className="text-slate-500 mt-2">A professzionális alapok elsajátításához</p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
              <p className="text-slate-600 mb-4">{step.description}</p>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-slate-900 rounded-lg p-4 font-mono text-sm text-blue-400 overflow-x-auto border border-slate-800">
                  <span className="text-slate-500 mr-2">$</span>
                  {step.command}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-amber-50 rounded-3xl border border-amber-200 text-amber-800 max-w-4xl mx-auto">
          <div className="flex gap-4">
            <svg className="w-8 h-8 flex-shrink-0 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-bold text-lg mb-1">Melyiket válasszam?</p>
              <p className="text-sm leading-relaxed">
                Ha <strong>Windows</strong>-on vagy és most tanulsz, a <strong>XAMPP</strong> vagy a <strong>Laragon</strong> a legjobb választás a könnyű kezelhetőség miatt. Ha <strong>Mac</strong>-et használsz, a <strong>MAMP</strong> vagy a <strong>Herd</strong> javasolt. Azonban ha igazi fejlesztővé akarsz válni, érdemes megtanulni a <strong>LAMP</strong> manuális beállítását Linuxon, mert az éles szerverek 90%-a így működik!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LampGuide;
