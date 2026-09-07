import React from 'react';
import { Target, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenQuote: () => void;
  onNavigateToServices: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote, onNavigateToServices }) => {
  return (
    <section id="a-propos" className="pt-24 pb-16 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Photo + Vision Block */}
          <div className="lg:col-span-6 space-y-8">
            {/* Main Photography */}
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
                alt="Consultants financiers en analyse stratégique"
                className="w-full h-[320px] sm:h-[380px] object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>

            {/* Vision Feature Block (Bottom-Left) */}
            <div className="flex items-start gap-4 pr-2">
              <div className="w-12 h-12 rounded-full bg-blue-100 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                <Compass className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  Vision de l'Entreprise
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Bâtir un écosystème d'ingénierie financière où chaque décision d'investissement est étayée par la rigueur de données prédictives et une vision stratégique à long terme.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Tag, Headline, Mission Block & Dark Callout Bar */}
          <div className="lg:col-span-6 space-y-7 text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-xs font-semibold text-blue-700 tracking-wide">
              À Propos de Nous
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Le Meilleur Cabinet de Conseil Financier
            </h2>

            {/* Mission Feature Block */}
            <div className="flex items-start gap-4 pt-1">
              <div className="w-12 h-12 rounded-full bg-blue-100 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                <Target className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  Mission de l'Entreprise
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Offrir aux dirigeants et institutions des solutions de conseil sur mesure alliant conformité fiscale, allocation d'actifs optimale et structuration de haut niveau.
                </p>
              </div>
            </div>

            {/* Dark Callout Banner with Blue Action Button */}
            <div 
              className="mt-8 bg-[#0B152A] rounded-3xl p-5 sm:p-6 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5 border border-slate-800"
              id="about-callout-banner"
            >
              <div className="flex items-center gap-3 text-left">
                <div className="w-8 h-8 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                </div>
                <p className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                  Rejoignez-nous pour atteindre une croissance durable et vos objectifs financiers.
                </p>
              </div>

              {/* Cobalt Blue Pill Button replacing the lime */}
              <button
                onClick={onOpenQuote}
                className="group shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-blue-600/30 active:scale-95"
                id="about-cta-btn"
              >
                <span>En savoir plus</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
