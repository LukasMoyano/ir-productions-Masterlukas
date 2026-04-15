import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Palette, Atom, Cpu } from 'lucide-react';

interface PhilosophySectionProps {
  language: 'es' | 'en';
}

const PhilosophySection = ({ language }: PhilosophySectionProps) => {
  const content = {
    es: {
      title: "Nuestra Filosofía",
      subtitle: "Arte + Ciencia + Tecnología",
      pillars: [
        {
          icon: Palette,
          title: "ARTE",
          description: "Diseñamos experiencias digitales que inspiran y conectan.",
          detail: "Estética, UX y diseño que trasciende"
        },
        {
          icon: Atom,
          title: "CIENCIA", 
          description: "Impulsamos el conocimiento y la innovación desde la pedagogía.",
          detail: "Investigación, educación y saberes ancestrales"
        },
        {
          icon: Cpu,
          title: "TECNOLOGÍA",
          description: "Creamos soluciones tangibles y escalables, desde IoT hasta IA, con enfoque AMD/Open Source.",
          detail: "Hardware/Software, DIY y desarrollo sostenible"
        }
      ]
    },
    en: {
      title: "Our Philosophy",
      subtitle: "Art + Science + Technology",
      pillars: [
        {
          icon: Palette,
          title: "ART",
          description: "We design digital experiences that inspire and connect.",
          detail: "Aesthetics, UX and design that transcends"
        },
        {
          icon: Atom,
          title: "SCIENCE",
          description: "We drive knowledge and innovation through pedagogy.",
          detail: "Research, education and ancestral wisdom"
        },
        {
          icon: Cpu,
          title: "TECHNOLOGY", 
          description: "We create tangible and scalable solutions, from IoT to AI, with an AMD/Open Source approach.",
          detail: "Hardware/Software, DIY and sustainable development"
        }
      ]
    }
  };

  const text = content[language];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            {language === 'es' ? 'Filosofía' : 'Philosophy'}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary">
            {text.title}
          </h2>
          <p className="text-2xl text-accent font-semibold">
            {text.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {text.pillars.map((pillar, index) => (
            <Card key={index} className="tech-border hover-lift group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardContent className="p-8 text-center relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {pillar.title}
                </h3>
                
                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  {pillar.description}
                </p>
                
                <p className="text-sm text-accent italic">
                  {pillar.detail}
                </p>
              </CardContent>

              {/* Decorative elements with pre-Columbian inspired patterns */}
              <div className="absolute top-4 right-4 w-8 h-8 border border-accent/20 rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-500" />
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-tech-green/20 rounded-full group-hover:scale-125 transition-transform duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;