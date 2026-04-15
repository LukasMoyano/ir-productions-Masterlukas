import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PhilosophySection from '@/components/PhilosophySection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import BusinessModelSection from '@/components/BusinessModelSection';
import ProcessSection from '@/components/ProcessSection';
import ImpactSection from '@/components/ImpactSection';
import ImpactODSSection from '@/components/ImpactODSSection';
import CollaborationSection from '@/components/CollaborationSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} toggleLanguage={toggleLanguage} />
      <HeroSection language={language} />
      <PhilosophySection language={language} />
      <AboutSection language={language} />
      <ServicesSection language={language} />
      <BusinessModelSection language={language} />
      <ProcessSection language={language} />
      <ImpactSection language={language} />
      <ImpactODSSection language={language} />
      <CollaborationSection language={language} />
      <BlogSection language={language} />
      <ContactSection language={language} />
    </div>
  );
};

export default Index;
