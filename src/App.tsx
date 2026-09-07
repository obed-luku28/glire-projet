import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeatureCards } from './components/FeatureCards';
import { AboutSection } from './components/AboutSection';
import { StatsCounter } from './components/StatsCounter';
import { ServicesSection } from './components/ServicesSection';
import { QuoteModal } from './components/QuoteModal';
import { VideoModal } from './components/VideoModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const handleOpenQuote = (serviceName?: string) => {
    setPreselectedService(serviceName);
    setIsQuoteOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#091122] text-slate-100 selection:bg-blue-600 selection:text-white flex flex-col font-sans">
      {/* Top Floating Navbar */}
      <Navbar 
        onOpenQuote={() => handleOpenQuote()} 
        onNavigate={handleNavigate} 
      />

      <main className="flex-grow">
        {/* Hero Section with Dual Angled Phone Mockups in Blue Palette */}
        <HeroSection 
          onOpenQuote={() => handleOpenQuote()} 
          onOpenVideo={() => setIsVideoOpen(true)} 
        />

        {/* 4 Feature Cards overlapping the lower Hero */}
        <FeatureCards 
          onSelectService={(service) => handleOpenQuote(service)} 
          onOpenVideo={() => setIsVideoOpen(true)} 
        />

        {/* About Section: Mission, Vision, Team Photography & Dark Callout */}
        <AboutSection 
          onOpenQuote={() => handleOpenQuote()} 
          onNavigateToServices={() => handleNavigate('services')} 
        />

        {/* 4 Key Statistics Metrics with Blue Accent Bars */}
        <StatsCounter />

        {/* Services Section: 3 Comprehensive Cards with Blue Accent Badges */}
        <ServicesSection 
          onOpenQuote={() => handleOpenQuote()} 
        />
      </main>

      {/* Corporate Footer with Newsletter & Contacts */}
      <Footer 
        onOpenQuote={() => handleOpenQuote()} 
        onNavigate={handleNavigate} 
      />

      {/* Interactive Modals */}
      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)} 
        initialService={preselectedService} 
      />

      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
        onOpenQuote={() => handleOpenQuote()} 
      />
    </div>
  );
}
