import React from 'react';

export const StatsCounter: React.FC = () => {
  const stats = [
    {
      id: 'stat-experience',
      value: '25',
      suffix: '+',
      description: "Un héritage d'expertise de plus de 24 ans à vos côtés.",
    },
    {
      id: 'stat-projects',
      value: '150K',
      suffix: '+',
      description: 'Où les idées fleurissent et les projets prospèrent.',
    },
    {
      id: 'stat-satisfaction',
      value: '98',
      suffix: '%',
      description: 'La satisfaction client est notre priorité absolue.',
    },
    {
      id: 'stat-benefit',
      value: '$40M',
      suffix: '+',
      description: 'Bénéfice net généré et sécurisé pour nos clients.',
    },
  ];

  return (
    <section id="stats" className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {stats.map((item) => (
            <div key={item.id} className="space-y-3 text-left group">
              {/* Blue accent top bar indicator (replacing lime yellow) */}
              <div className="w-12 h-1 bg-blue-600 rounded-full group-hover:w-16 transition-all duration-300" />
              
              {/* Stat number */}
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight flex items-baseline">
                <span>{item.value}</span>
                <span className="text-blue-600 text-2xl sm:text-3xl lg:text-4xl ml-0.5 font-bold">
                  {item.suffix}
                </span>
              </div>

              {/* Stat description */}
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
