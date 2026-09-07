import React from 'react';
import { ArrowRight, Play, Star, Plus, CheckCircle2, TrendingUp, DollarSign } from 'lucide-react';

interface HeroSectionProps {
  onOpenQuote: () => void;
  onOpenVideo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote, onOpenVideo }) => {
  return (
    <section 
      id="hero" 
      className="relative pt-12 pb-24 lg:pt-16 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#091122] via-[#0B152A] to-[#0A1224]"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-7 text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#132242] border border-blue-500/30 text-xs font-semibold text-blue-300 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Bienvenue chez GLIRE
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight text-white leading-[1.08]">
              Là Où L'Expertise <br />
              <span className="text-white">Crée L'Excellence</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-xl font-normal leading-relaxed">
              Conseil stratégique et ingénierie financière sur mesure. Nous guidons les dirigeants d'entreprise pour accélérer leur croissance, optimiser leur rentabilité et pérenniser leurs actifs.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary Pill Button (Cobalt Blue replacing the lime) */}
              <button
                onClick={onOpenQuote}
                className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 active:scale-98 text-white px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-600/30"
                id="hero-start-cta"
              >
                <span>Démarrer</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </button>

              {/* Video Play Button */}
              <button
                onClick={onOpenVideo}
                className="group flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                id="hero-play-btn"
                aria-label="Regarder la vidéo de présentation"
              >
                <span className="w-12 h-12 rounded-full bg-slate-800/80 hover:bg-blue-600/30 border border-slate-600/60 hover:border-blue-400 flex items-center justify-center transition-all duration-200 group-hover:scale-105 shadow-md">
                  <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                </span>
                <span className="text-xs font-medium text-slate-300 group-hover:text-blue-300">
                  Découvrir la méthode
                </span>
              </button>
            </div>

            {/* Social Proof & Team Row */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center border-t border-slate-800/80">
              {/* Reviews */}
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-slate-400 font-medium ml-1.5">(4.5/5)</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-white tracking-tight">4.5</span>
                  <span className="text-xs text-slate-400 leading-tight">
                    Avis Positifs de nos Clients
                  </span>
                </div>
              </div>

              {/* Team Stack */}
              <div>
                <p className="text-xs text-slate-400 mb-2 font-medium">Rejoignez Notre Équipe :</p>
                <div className="flex items-center -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt="Consultante"
                    className="w-9 h-9 rounded-full border-2 border-[#0B152A] object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="Consultant"
                    className="w-9 h-9 rounded-full border-2 border-[#0B152A] object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                    alt="Analyste"
                    className="w-9 h-9 rounded-full border-2 border-[#0B152A] object-cover"
                  />
                  <button 
                    onClick={onOpenQuote}
                    className="w-9 h-9 rounded-full bg-blue-600/90 hover:bg-blue-500 border-2 border-[#0B152A] text-white flex items-center justify-center text-xs font-bold transition-transform hover:scale-105"
                    title="Nous contacter"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D-styled Angled Mobile Mockups with Blue Financial UI */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end">
            
            {/* Top Floating Badge with Checkmark */}
            <div className="absolute -top-6 right-8 sm:right-16 z-30 bg-[#0F1D38]/95 backdrop-blur-md border border-blue-500/40 text-xs font-medium text-slate-200 px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 max-w-xs animate-bounce-slow">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Guider votre parcours financier pour élever la destinée de votre entreprise</span>
            </div>

            {/* Mobile Devices Mockup Container */}
            <div className="relative w-full max-w-[480px] h-[520px] sm:h-[580px]">
              
              {/* Back Phone (Angled) */}
              <div className="absolute right-0 top-12 w-[240px] sm:w-[270px] h-[460px] sm:h-[500px] rounded-[38px] bg-[#0c162c] p-2.5 border-[5px] border-slate-700/80 shadow-2xl rotate-12 -z-0 opacity-80 backdrop-blur-sm hidden sm:block">
                <div className="w-full h-full bg-[#081020] rounded-[30px] p-3 text-slate-300 flex flex-col justify-between overflow-hidden">
                  <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-slate-800 pb-2">
                    <span>Performance</span>
                    <span className="text-blue-400 font-semibold">+24.8%</span>
                  </div>
                  <div className="space-y-2 my-auto">
                    <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/50">
                      <div className="text-[10px] text-slate-400">Trésorerie Active</div>
                      <div className="text-sm font-bold text-white">$412,850</div>
                    </div>
                    <div className="bg-blue-900/30 p-2.5 rounded-xl border border-blue-500/30">
                      <div className="text-[10px] text-blue-300">Rendement Annuel</div>
                      <div className="text-sm font-bold text-blue-200">+14.2%</div>
                    </div>
                  </div>
                  <div className="h-2 w-20 bg-slate-700 rounded-full mx-auto" />
                </div>
              </div>

              {/* Main Front Phone (Angled & Detailed) */}
              <div className="absolute left-2 sm:left-6 top-0 w-[270px] sm:w-[310px] h-[510px] sm:h-[560px] rounded-[42px] bg-slate-900 p-2.5 sm:p-3 border-[6px] border-slate-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] rotate-[-6deg] z-10 transition-transform hover:rotate-[-4deg] duration-300">
                {/* Phone screen */}
                <div className="w-full h-full bg-white text-slate-900 rounded-[34px] p-4 flex flex-col justify-between overflow-hidden relative font-sans shadow-inner">
                  
                  {/* Dynamic Island / Speaker Notch */}
                  <div className="w-20 h-4 bg-slate-900 rounded-full mx-auto -mt-1 mb-3 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-600 ml-auto mr-2" />
                  </div>

                  {/* App Header */}
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                        G
                      </div>
                      <span className="text-xs font-bold text-slate-800">GLIRE App</span>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600">
                      <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                  </div>

                  {/* Revenue Card (Converted to Blue Palette & Dollars) */}
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-3.5 shadow-md shadow-blue-500/20">
                    <div className="flex justify-between items-start">
                      <span className="text-[11px] font-medium text-blue-100">Revenu Prévisionnel</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white font-semibold">
                        +18.4%
                      </span>
                    </div>
                    <div className="text-2xl font-extrabold tracking-tight mt-1">
                      $1,543.00
                    </div>
                    <div className="text-[10px] text-blue-200 mt-1 flex items-center gap-1">
                      <span>Objectif mensuel atteint à 92%</span>
                    </div>
                  </div>

                  {/* Mini Financial Curve / Chart */}
                  <div className="my-2 bg-slate-50 border border-slate-100 rounded-2xl p-2.5">
                    <div className="flex justify-between items-center text-[10px] text-slate-500 mb-1 font-medium">
                      <span>Indicateurs Projet</span>
                      <span className="text-blue-600 font-bold">2026</span>
                    </div>

                    {/* SVG Curve Chart */}
                    <div className="h-16 w-full relative flex items-end">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                        <defs>
                          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 0 35 Q 20 28, 40 18 T 75 14 T 100 6 L 100 40 L 0 40 Z"
                          fill="url(#chartGrad)"
                        />
                        <path
                          d="M 0 35 Q 20 28, 40 18 T 75 14 T 100 6"
                          fill="none"
                          stroke="#2563eb"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <circle cx="40" cy="18" r="2.5" fill="#2563eb" className="animate-ping" />
                        <circle cx="40" cy="18" r="2.5" fill="#2563eb" />
                        <circle cx="100" cy="6" r="3" fill="#1d4ed8" />
                      </svg>
                    </div>

                    <div className="mt-1 flex justify-between items-center text-[11px] font-semibold text-slate-800 border-t border-slate-200/60 pt-1">
                      <span className="text-slate-500 text-[10px]">VAN (Valeur Actuelle Nette)</span>
                      <span className="text-blue-700">$89,320.05</span>
                    </div>
                  </div>

                  {/* Two Quick Stat Pills */}
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="bg-slate-100/80 p-1.5 rounded-xl">
                      <div className="text-[9px] text-slate-500">Marge Brute</div>
                      <div className="text-xs font-bold text-slate-800">42.5%</div>
                    </div>
                    <div className="bg-slate-100/80 p-1.5 rounded-xl">
                      <div className="text-[9px] text-slate-500">EBITDA</div>
                      <div className="text-xs font-bold text-blue-600">+$310K</div>
                    </div>
                  </div>

                  {/* Phone Bottom Nav Bar */}
                  <div className="pt-2 border-t border-slate-100 flex justify-around text-slate-400 text-xs">
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                    <div className="w-2 h-2 rounded-full bg-slate-300" />
                    <div className="w-2 h-2 rounded-full bg-slate-300" />
                  </div>

                </div>
              </div>

              {/* Floating "25+ Années d'Expérience" Badge (Bottom-Right, in BLUE accent) */}
              <div 
                className="absolute bottom-6 right-2 sm:-right-2 z-30 bg-blue-600 text-white px-5 py-3.5 rounded-2xl shadow-xl shadow-blue-700/40 border border-blue-400/40 transform hover:scale-105 transition-transform"
                id="hero-experience-badge"
              >
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-none">
                  25+
                </div>
                <div className="text-[11px] font-semibold text-blue-100 mt-1 uppercase tracking-wider">
                  Années d'Expérience
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
