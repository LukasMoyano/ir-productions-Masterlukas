import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-background.jpg';

interface HeroSectionProps {
  language: 'es' | 'en';
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const content = {
    es: {
      title: "-IR- Productions",
      subtitle: "Fusionando Arte, Ciencia y Tecnología",
      description: "Transformamos el Agro y las Empresas del Futuro con soluciones digitales integrales que conectan sabiduría ancestral con innovación de vanguardia.",
      cta1: "Talleres Agro",
      cta2: "Workstations IA",
      slogan: "Hacemos lo que queremos, porque amamos lo que hacemos. Funk with us!",
      impact: "Alineados con PDM de Cundinamarca • PDD Cundinamarca • ODS"
    },
    en: {
      title: "-IR- Productions",
      subtitle: "Fusing Art, Science and Technology",  
      description: "We transform Agriculture and Future Businesses with integral digital solutions that connect ancestral wisdom with cutting-edge innovation.",
      cta1: "Explore Agro Workshops",
      cta2: "Discover AI Workstations",
      slogan: "We do what we want, because we love what we do. Funk with us!",
      impact: "Aligned with PDM Arbeláez • PDD Cundinamarca • SDGs"
    }
  };

  const text = content[language];

  return (
    <section 
      id={language === 'es' ? 'inicio' : 'home'}
      className="relative min-h-screen flex items-center justify-center circuit-pattern hero-gradient overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-transparent to-background/60" />
      
      {/* Animated Circuit Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 border border-primary/30 rounded-lg animate-pulse-slow" />
      <div className="absolute bottom-32 right-16 w-12 h-12 bg-accent/20 rounded-full animate-float" />
      <div className="absolute top-1/3 right-1/4 w-8 h-8 border-2 border-tech-green/40 rotate-45 animate-circuit-glow" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 lg:px-8">
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
          <span className="gradient-text-primary block">
            {text.title}
          </span>
          <span className="gradient-text-gold text-4xl md:text-5xl lg:text-6xl block mt-2">
            {text.subtitle}
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-in-right">
          {text.description}
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-scale-in">
          <Button 
            size="lg" 
            className="cta-primary hover-lift group"
            onClick={() => document.getElementById(language === 'es' ? 'servicios' : 'services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {text.cta1}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-accent hover:bg-accent/10 hover:border-accent/70 group"
            onClick={() => document.getElementById(language === 'es' ? 'servicios' : 'services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            {text.cta2}
          </Button>
        </div>

        {/* Impact Alignment */}
        <div className="mb-8 animate-fade-in">
          <p className="text-sm text-tech-green/80 font-medium tracking-wider uppercase">
            {text.impact}
          </p>
        </div>

        {/* Slogan */}
        <div className="animate-fade-in">
          <p className="text-lg text-accent italic font-medium">
            "{text.slogan}"
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-secondary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Floating Tech Elements */} di
      <div className="absolute top-1/4 left-8 hidden lg:block">
        <div className="w-32 h-32 border border-primary/20 rounded-lg transform rotate-12 animate-float">
          <div className="w-full h-full border border-accent/30 rounded-lg transform -rotate-6" />
        </div>
      </div>

      <div className="absolute bottom-1/4 right-8 hidden lg:block">
        <div className="w-24 h-24 bg-tech-green/10 rounded-full animate-pulse-slow flex items-center justify-center">
          <div className="w-12 h-12 border-2 border-tech-green/40 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;