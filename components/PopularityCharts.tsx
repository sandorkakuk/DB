
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, Cell
} from 'recharts';
import { CURRENT_POPULARITY, HISTORICAL_TRENDS } from '../constants';

const PopularityCharts: React.FC = () => {
  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#64748b'];

  return (
    <section id="popularity" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Népszerűségi Mutatók
          </h2>
          <p className="mt-4 text-xl text-slate-500">
            Mely rendszereket használják a fejlesztők napjainkban?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Current Popularity Bar Chart */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 text-center">Jelenlegi Rangsor (2024)</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={CURRENT_POPULARITY}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                    {CURRENT_POPULARITY.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Historical Trends Line Chart */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 text-center">Időbeli Trendek</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={HISTORICAL_TRENDS}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="oracle" stroke="#3b82f6" strokeWidth={3} dot={{ r: 6 }} />
                  <Line type="monotone" dataKey="mysql" stroke="#10b981" strokeWidth={3} dot={{ r: 6 }} />
                  <Line type="monotone" dataKey="postgres" stroke="#f59e0b" strokeWidth={3} dot={{ r: 6 }} />
                  <Line type="monotone" dataKey="mongodb" stroke="#ef4444" strokeWidth={3} dot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularityCharts;
