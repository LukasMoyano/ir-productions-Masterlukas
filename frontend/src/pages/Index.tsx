import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PhilosophySection from '@/components/PhilosophySection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioPreview from '@/components/PortfolioPreview';
import ExperienciasGamificadasSection from '@/components/ExperienciasGamificadasSection';
import BusinessModelSection from '@/components/BusinessModelSection';
import ProcessSection from '@/components/ProcessSection';
import ImpactSection from '@/components/ImpactSection';
import CollaborationSection from '@/components/CollaborationSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header language={language} toggleLanguage={toggleLanguage} />
      <main id="main-content">
        <HeroSection language={language} />
        <PhilosophySection language={language} />
        <AboutSection language={language} />
        <ServicesSection language={language} />
        <PortfolioPreview language={language} />
        <ExperienciasGamificadasSection language={language} />
        <BusinessModelSection language={language} />
        <ProcessSection language={language} />
        <ImpactSection language={language} />
        <CollaborationSection language={language} />
        <ContactSection language={language} />
      </main>
    </div>
  );
};

export default Index;
