import React, { useState } from 'react';
import { X, Play, BarChart3, Shield, LineChart, Award } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onOpenQuote }) => {
  const [activeStep, setActiveStep] = useState(0);

  if (!isOpen) return null;

  const steps = [
    {
      title: "1. Diagnostic & Audit",
      desc: "Cartographie complète de vos postes de dépenses, ratios d'endettement, BFR et leviers de marge inexploités.",
      metric: "72h pour le bilan initial"
    },
    {
      title: "2. Modélisation Prédictive",
      desc: "Création de simulations financières sur mesure avec analyse de sensibilité sous différents scénarios de marché.",
      metric: "+15% à 25% de marge visée"
    },
    {
      title: "3. Déploiement Opérationnel",
      desc: "Mise en place de processus de gestion rigoureux, restructuration éventuelle et sécurisation fiscale.",
      metric: "Alignement managérial complet"
    },
    {
      title: "4. Pilotage & Croissance",
      desc: "Tableaux de bord dynamiques et revues trimestrielles avec nos associés seniors pour pérenniser vos acquis.",
      metric: "98% de satisfaction client"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div 
        className="bg-[#0B152A] border border-slate-700 text-white max-w-2xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
        id="video-modal-container"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video simulation preview box */}
        <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 mb-6 group">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
            alt="Présentation cabinet Optibiz"
            className="w-full h-full object-cover brightness-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B152A] via-transparent to-transparent" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <div className="w-16 h-16 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-lg shadow-blue-600/50 mb-3 group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 fill-white ml-0.5" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-300">
              Méthodologie GLIRE Finance
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white mt-1">
              Comment nous transformons votre rentabilité
            </h4>
          </div>
        </div>

        {/* 4 Interactive Process Steps */}
        <div className="space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Les 4 Piliers de notre Approche Stratégique
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {steps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                  activeStep === idx 
                    ? 'bg-blue-600/20 border-blue-500 text-white font-semibold' 
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="truncate">{step.title}</div>
              </button>
            ))}
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
            <div className="flex justify-between items-start mb-2">
              <h5 className="text-sm font-bold text-blue-400">
                {steps[activeStep].title}
              </h5>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/30">
                {steps[activeStep].metric}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {steps[activeStep].desc}
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white"
          >
            Fermer
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/25"
          >
            Démarrer mon projet
          </button>
        </div>

      </div>
    </div>
  );
};
