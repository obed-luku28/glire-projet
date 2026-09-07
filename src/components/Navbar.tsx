import React, { useState } from 'react';
import { ArrowUpRight, Menu, X, ChevronDown, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setPagesDropdownOpen(false);
  };

  return (
    <header className="relative z-50 w-full pt-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('hero')} 
          className="flex items-center gap-2.5 cursor-pointer group"
          id="brand-logo"
        >
          <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30 transition-transform group-hover:scale-105">
            <span className="font-black tracking-tighter">G</span>
          </div>
          <span className="text-2xl font-extrabold tracking-wider text-white">
            GLIRE
          </span>
        </div>

        {/* Center Pill Navigation (Desktop) */}
        <nav 
          className="hidden md:flex items-center gap-1 bg-[#101b33]/90 backdrop-blur-md border border-slate-700/60 py-1.5 px-6 rounded-full shadow-xl shadow-black/20"
          id="desktop-navigation"
        >
          <button
            onClick={() => handleNavClick('hero')}
            className="px-4 py-1.5 text-sm font-medium text-white hover:text-blue-400 transition-colors rounded-full"
          >
            Accueil
          </button>
          <button
            onClick={() => handleNavClick('a-propos')}
            className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors rounded-full"
          >
            À Propos
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors rounded-full"
          >
            Services
          </button>

          {/* Pages dropdown */}
          <div className="relative">
            <button
              onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
              className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1.5 rounded-full"
            >
              Pages
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${pagesDropdownOpen ? 'rotate-180 text-blue-400' : ''}`} />
            </button>

            {pagesDropdownOpen && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-48 bg-[#0d162a] border border-slate-700/80 rounded-2xl p-2 shadow-2xl z-50 backdrop-blur-xl">
                <button
                  onClick={() => handleNavClick('stats')}
                  className="w-full text-left px-3 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-blue-600/20 rounded-xl transition-colors"
                >
                  Indicateurs Clés
                </button>
                <button
                  onClick={() => handleNavClick('processus')}
                  className="w-full text-left px-3 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-blue-600/20 rounded-xl transition-colors"
                >
                  Notre Méthodologie
                </button>
                <button
                  onClick={() => {
                    setPagesDropdownOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full text-left px-3 py-2 text-xs font-medium text-blue-400 hover:bg-blue-600/20 rounded-xl transition-colors flex items-center justify-between"
                >
                  Simulateur Devis
                  <Sparkles className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('contact')}
            className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors rounded-full"
          >
            Contact
          </button>
        </nav>

        {/* Right CTA Button (Blue scheme) */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenQuote}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-slate-900 bg-white hover:bg-blue-50 transition-all duration-200 shadow-md hover:shadow-blue-500/20 active:scale-95"
            id="quote-cta-header"
          >
            <span>Obtenir un Devis</span>
            <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-white"
          aria-label="Menu"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 bg-[#0d162a]/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <button
            onClick={() => handleNavClick('hero')}
            className="text-left px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-600/10 rounded-xl"
          >
            Accueil
          </button>
          <button
            onClick={() => handleNavClick('a-propos')}
            className="text-left px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-blue-600/10 rounded-xl"
          >
            À Propos
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className="text-left px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-blue-600/10 rounded-xl"
          >
            Services
          </button>
          <button
            onClick={() => handleNavClick('stats')}
            className="text-left px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-blue-600/10 rounded-xl"
          >
            Indicateurs Clés
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="text-left px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-blue-600/10 rounded-xl"
          >
            Contact
          </button>
          <div className="pt-2 border-t border-slate-700/60">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2"
            >
              <span>Obtenir un Devis Gratuit</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
