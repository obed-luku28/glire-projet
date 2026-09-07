import React from 'react';
import { ArrowUpRight, Cpu, Compass, Banknote, Lightbulb } from 'lucide-react';

interface FeatureCardsProps {
  onSelectService: (serviceName: string) => void;
  onOpenVideo: () => void;
}

export const FeatureCards: React.FC<FeatureCardsProps> = ({ onSelectService, onOpenVideo }) => {
  return (
    <section className="relative z-20 -mt-12 sm:-mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        
        {/* Card 1: Interactive photo card "Comment ça fonctionne ?" */}
        <div 
          onClick={onOpenVideo}
          className="group relative h-64 lg:h-auto min-h-[220px] rounded-3xl overflow-hidden cursor-pointer shadow-xl border border-slate-700/50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50"
          id="how-it-works-card"
        >
          {/* Background Image of Consulting Meeting */}
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
            alt="Équipe en réunion de travail"
            className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-500"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#091122] via-[#091122]/60 to-transparent" />

          {/* Card Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end text-left">
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
              Comment ça fonctionne ?
            </div>
            <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
              <span>En savoir plus</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>

        {/* Card 2: Conseil Opérationnel */}
        <div 
          onClick={() => onSelectService("Conseil Opérationnel")}
          className="group bg-[#0e1a33]/90 hover:bg-[#11203f] backdrop-blur-md border border-slate-700/60 hover:border-blue-500/50 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-xl"
          id="card-operational-consulting"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <Cpu className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight mb-2.5">
              Conseil Opérationnel
            </h2>
            <p className="text-xs text-slate-300/80 leading-relaxed">
              Optimisation de vos processus internes, digitalisation des flux et amélioration continue pour décupler votre efficacité.
            </p>
          </div>

          <div className="mt-6 flex items-center text-xs font-semibold text-blue-400 group-hover:text-blue-300">
            <span>Découvrir l'offre</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Card 3: Conseil Stratégique */}
        <div 
          onClick={() => onSelectService("Conseil Stratégique")}
          className="group bg-[#0e1a33]/90 hover:bg-[#11203f] backdrop-blur-md border border-slate-700/60 hover:border-blue-500/50 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-xl"
          id="card-strategy-consulting"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight mb-2.5">
              Conseil Stratégique
            </h2>
            <p className="text-xs text-slate-300/80 leading-relaxed">
              Analyse concurrentielle, fusions & acquisitions et feuilles de route à fort impact pour consolider votre avantage sur le marché.
            </p>
          </div>

          <div className="mt-6 flex items-center text-xs font-semibold text-blue-400 group-hover:text-blue-300">
            <span>Découvrir l'offre</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Card 4: Conseil Financier */}
        <div 
          onClick={() => onSelectService("Conseil Financier")}
          className="group bg-[#0e1a33]/90 hover:bg-[#11203f] backdrop-blur-md border border-slate-700/60 hover:border-blue-500/50 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-xl"
          id="card-financial-consulting"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <Banknote className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight mb-2.5">
              Conseil Financier
            </h2>
            <p className="text-xs text-slate-300/80 leading-relaxed">
              Restructuration de dette, gestion proactive de trésorerie et modélisation budgétaire pour sécuriser vos marges et votre rendement.
            </p>
          </div>

          <div className="mt-6 flex items-center text-xs font-semibold text-blue-400 group-hover:text-blue-300">
            <span>Découvrir l'offre</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

      </div>
    </section>
  );
};
