import React, { useState } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

interface FooterProps {
  onOpenQuote: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote, onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer id="contact" className="bg-[#080e1d] text-slate-400 pt-16 pb-12 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA Banner */}
        <div className="bg-gradient-to-r from-blue-900/40 via-[#0B152A] to-blue-950/40 border border-blue-500/20 rounded-3xl p-8 sm:p-10 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Prêt à propulser vos performances financières ?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Prenez rendez-vous avec un directeur associé pour un premier diagnostic offert et sans engagement.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="group shrink-0 inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all active:scale-95"
          >
            <span>Obtenir un devis immédiat</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Footer Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-base shadow-md shadow-blue-500/30">
                <span className="font-black">G</span>
              </div>
              <span className="text-2xl font-extrabold tracking-wider text-white">
                GLIRE
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Cabinet d'excellence dédié au conseil en stratégie d'entreprise, ingénierie financière et restructuration opérationnelle pour dirigeants visionnaires.
            </p>
            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>28 Place Vendôme, 75001 Paris, France</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>+33 (0)1 84 25 90 00</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>contact@glire-finance.com</span>
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-blue-400 transition-colors">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('a-propos')} className="hover:text-blue-400 transition-colors">
                  À Propos de Nous
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-blue-400 transition-colors">
                  Nos Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('stats')} className="hover:text-blue-400 transition-colors">
                  Chiffres Clés
                </button>
              </li>
              <li>
                <button onClick={onOpenQuote} className="hover:text-blue-400 transition-colors">
                  Devis Personnalisé
                </button>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Domaines d'Expertise
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-blue-400 transition-colors">
                  Conseil Stratégique
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-blue-400 transition-colors">
                  Conseil Opérationnel
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-blue-400 transition-colors">
                  Fiscalité & Audit
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-blue-400 transition-colors">
                  Planification Financière
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-blue-400 transition-colors">
                  Fusions & Acquisitions
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Lettre Stratégique
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Recevez nos analyses macro-économiques et synthèses fiscales exclusives chaque mois.
            </p>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="votre@email.fr"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 text-xs text-white rounded-xl placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold transition-colors"
                >
                  S'abonner
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-xs text-blue-400 bg-blue-900/20 p-2.5 rounded-xl border border-blue-500/30">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Merci, inscription confirmée !</span>
              </div>
            )}
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} GLIRE Finance Inc. Tous droits réservés.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Mentions Légales</span>
            <span className="hover:text-slate-400 cursor-pointer">Confidentialité</span>
            <span className="hover:text-slate-400 cursor-pointer">RGPD</span>
            <span className="hover:text-slate-400 cursor-pointer">Gestion des Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
