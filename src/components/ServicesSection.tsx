import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Briefcase, FileSpreadsheet, LineChart, DollarSign, Check, X } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenQuote: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'business-strategies',
      title: "Stratégies d'Entreprise",
      category: "Conseil Exécutif",
      description: "Analyse approfondie de votre modèle économique, positionnement concurrentiel et plans de croissance à forte valeur ajoutée.",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      features: [
        "Audit stratégique et diagnostic 360°",
        "Modélisation de croissance et fusions-acquisitions",
        "Optimisation de la chaîne de valeur",
        "Gouvernance et alignement des équipes dirigeantes"
      ]
    },
    {
      id: 'taxes-accounting',
      title: "Fiscalité & Comptabilité",
      category: "Conformité & Optimisation",
      description: "Optimisation de votre fiscalité d'entreprise, structuration des bilans et mise en conformité réglementaire internationale.",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      features: [
        "Audit fiscal préventif et sécurisation juridique",
        "Structuration holding et consolidation de bilans",
        "Crédit impôt recherche (CIR) & aides à l'innovation",
        "Déclarations comptables et reporting temps réel"
      ]
    },
    {
      id: 'financial-planning',
      title: "Planification Financière",
      category: "Gestion & Patrimoine",
      description: "Stratégies d'allocation de capital, modélisation de flux de trésorerie et constitution de réserves pour une rentabilité sécurisée.",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      features: [
        "Prévisions budgétaires & tableaux de bord prédictifs",
        "Gestion active du besoin en fonds de roulement (BFR)",
        "Stratégie de diversification et placement de trésorerie",
        "Préparation aux levées de fonds et financements bancaires"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          {/* Left: Tag + Title */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-600 tracking-wide">
              Nos Services
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight text-slate-900 leading-[1.18]">
              Des Services Financiers pour Développer et Sécuriser Votre Patrimoine
            </h2>
          </div>

          {/* Right: Subtitle paragraph + Blue CTA button */}
          <div className="lg:col-span-5 space-y-5 lg:text-right flex flex-col lg:items-end">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md lg:text-left">
              Des solutions sur mesure conçues pour pérenniser vos résultats financiers, protéger vos actifs et vous offrir une visibilité sereine sur l'avenir.
            </p>
            {/* Pill CTA Button in Blue */}
            <button
              onClick={onOpenQuote}
              className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-blue-600/30 active:scale-95"
              id="services-header-cta"
            >
              <span>En savoir plus</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative bg-[#0c162c] rounded-3xl overflow-hidden shadow-xl border border-slate-800 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-600/10 cursor-pointer flex flex-col"
              id={`service-card-${index}`}
            >
              {/* Image Container with Top-Left Icon */}
              <div className="relative h-60 sm:h-64 w-full overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                />
                
                {/* Floating Top-Left Badge (Blue accent replacing lime) */}
                <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/40">
                  {index === 0 && <DollarSign className="w-5 h-5 font-bold" />}
                  {index === 1 && <FileSpreadsheet className="w-5 h-5 font-bold" />}
                  {index === 2 && <LineChart className="w-5 h-5 font-bold" />}
                </div>
              </div>

              {/* Bottom Dark Action Row */}
              <div className="p-5 sm:p-6 bg-[#0B152A] flex items-center justify-between border-t border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {index === 0 && <Briefcase className="w-5 h-5" />}
                    {index === 1 && <FileSpreadsheet className="w-5 h-5" />}
                    {index === 2 && <LineChart className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[11px] text-slate-400">{service.category}</p>
                  </div>
                </div>

                <div className="w-9 h-9 rounded-full bg-slate-800/90 text-slate-300 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0B152A] border border-slate-700/80 text-white max-w-lg w-full rounded-3xl p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-blue-400">{selectedService.category}</span>
                <h3 className="text-xl font-bold">{selectedService.title}</h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              {selectedService.description}
            </p>

            <div className="space-y-3 mb-6">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Ce que comprend notre accompagnement :
              </div>
              {selectedService.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenQuote();
                }}
                className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-sm transition-colors shadow-lg shadow-blue-600/30 text-center"
              >
                Demander un devis pour ce service
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-sm"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
