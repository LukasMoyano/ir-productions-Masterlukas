import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Palette, Cpu, Lightbulb, Users } from 'lucide-react';
import lukasPortrait from '@/assets/lukas-portrait.jpg';

interface AboutSectionProps {
  language: 'es' | 'en';
}

const AboutSection = ({ language }: AboutSectionProps) => {
  const content = {
    es: {
      title: "Quiénes Somos",
      subtitle: "Artista Visual • Pedagogo • Tecnólogo",
      description: "Lukas Moyano y -IR- Productions transformamos el agro y las organizaciones a través de la fusión Arte+Ciencia+Tecnología, con un enfoque en innovación accesible, sostenibilidad y la sabiduría ancestral aplicada al mundo moderno.",
      mission: "Nuestra misión es democratizar la tecnología con alma creativa, respetando el conocimiento ancestral mientras construimos el futuro digital que Colombia necesita.",
      pillars: [
        {
          icon: Palette,
          title: "Arte",
          description: "Diseño impecable que conecta emocionalmente"
        },
        {
          icon: Lightbulb,
          title: "Ciencia",
          description: "Metodología rigurosa y pedagógica"
        },
        {
          icon: Cpu,
          title: "Tecnología",
          description: "Innovación vanguardista y Open Source"
        },
        {
          icon: Users,
          title: "Independent Republic",
          description: "Libertad creativa y disrupción constructiva"
        }
      ],
      slogan: "Hacemos lo que queremos, porque amamos lo que hacemos, Funk with us!"
    },
    en: {
      title: "Who We Are",
      subtitle: "Visual Artist • Educator • Technologist",
      description: "Lukas Moyano and -IR- Productions transform agriculture and organizations through the fusion of Art+Science+Technology, focusing on accessible innovation, sustainability, and ancestral wisdom applied to the modern world.",
      mission: "Our mission is to democratise technology with creative soul, respecting ancestral knowledge whilst building the digital future Colombia needs.",
      pillars: [
        {
          icon: Palette,
          title: "Art",
          description: "Impeccable design that connects emotionally"
        },
        {
          icon: Lightbulb,
          title: "Science",
          description: "Rigorous and pedagogical methodology"
        },
        {
          icon: Cpu,
          title: "Technology",
          description: "Cutting-edge and Open Source innovation"
        },
        {
          icon: Users,
          title: "Independent Republic",
          description: "Creative freedom and constructive disruption"
        }
      ],
      slogan: "We do what we want, because we love what we do, Funk with us!"
    }
  };

  const text = content[language];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            -IR- Productions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary">
            {text.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
            <div className="relative overflow-hidden rounded-2xl glow-red">
              <img 
                src={lukasPortrait}
                alt="Lukas Moyano"
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Lukas Moyano
                </h3>
                <p className="text-accent font-medium">
                  {text.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {text.description}
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {text.mission}
            </p>

            <div className="p-6 bg-muted/50 rounded-xl border border-accent/20">
              <blockquote className="text-xl text-accent italic font-medium text-center">
                "{text.slogan}"
              </blockquote>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {text.pillars.map((pillar, index) => (
            <Card key={index} className="tech-border hover-lift group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <pillar.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;