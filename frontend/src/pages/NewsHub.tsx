import { useState } from 'react';
import Header from '@/components/Header';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';

const NewsHub = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header language={language} toggleLanguage={toggleLanguage} />
      <div className="pt-20">
        {/* We reuse the BlogSection here. We added pt-20 to push it below the fixed header */}
        <BlogSection language={language} />
      </div>
      <ContactSection language={language} />
    </div>
  );
};

export default NewsHub;
