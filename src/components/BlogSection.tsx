import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Rss, Brain, Newspaper } from 'lucide-react';

interface BlogSectionProps {
  language: 'es' | 'en';
}

const BlogSection = ({ language }: BlogSectionProps) => {
  const content = {
    es: {
      title: "Explora el Futuro del Agro y la Tecnología",
      subtitle: "Blogg de Noticias sobre el Agro, tecnologia y sus aplicaciones",
      description: "Próximamente: artículos cuidadosamente seleccionados sobre tendencias en Agro-Tech, Innovación, IA y Arte Digital, curados para inspirar y mantenerte al día. ¡Mantente conectado!",
      features: [
        {
          icon: Brain,
          title: "IA Curativa",
          description: "Blogg NEWS"
        },
        {
          icon: Rss,
          title: "Tendencias Agro-Tech",
          description: "Lo último en tecnología agrícola sostenible"
        },
        {
          icon: Newspaper,
          title: "Innovación Digital",
          description: "Arte, ciencia y tecnología convergente"
        }
      ],
      cta: "Suscríbete para Actualizaciones",
      comingSoon: "Próximamente"
    },
    en: {
      title: "Explore the Future of Agriculture and Technology"
      subtitle: "News Blog about Agriculture, Technology, and its Applications",
      description: "Coming soon: Articles on trends in Agro-Tech, Innovation, AI, and Digital Art, curated to inspire and keep you up-to-date. Stay connected!",
      features: [
        {
          icon: Brain,
          title: "AI Curation",
          description: "Intelligent selection of relevant content"
        },
        {
          icon: Rss,
          title: "Agro-Tech Trends",
          description: "Latest in sustainable agricultural technology"
        },
        {
          icon: Newspaper,
          title: "Digital Innovation",
          description: "Convergent art, science and technology"
        }
      ],
      cta: "Subscribe for Updates",
      comingSoon: "Coming Soon"
    }
  };

  const text = content[language];

  return (
    <section className="py-20 circuit-pattern">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            {text.comingSoon}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary">
            {text.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {text.subtitle}
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {text.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {text.features.map((feature, index) => (
            <Card 
              key={index} 
              className="tech-border hover-lift group text-center"
            >
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Blog Placeholder */}
        <div className="max-w-4xl mx-auto">
          <Card className="tech-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-tech-green/5" />
            <CardContent className="p-12 text-center relative z-10">
              {/* Blog Icon */}
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center animate-pulse-slow">
                <Rss className="w-12 h-12 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold mb-6 gradient-text-gold">
                {language === 'es' 
                  ? 'Centro de Conocimiento -IR-' 
                  : '-IR- Knowledge Centre'
                }
              </h3>

              {/* Description */}
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {language === 'es'
                  ? 'Un espacio dedicado donde la inteligencia artificial selecciona y presenta los avances más relevantes en agricultura tecnológica, innovación sostenible y arte digital.'
                  : 'A dedicated space where artificial intelligence selects and presents the most relevant advances in technological agriculture, sustainable innovation and digital art.'
                }
              </p>

              {/* Topics Preview */}
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {[
                  'Agro-Tech', 'IA', 'IoT', 'Sostenibilidad', 
                  'Arte Digital', 'Innovación', 'Open Source'
                ].map((topic, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {topic}
                  </Badge>
                ))}
              </div>

              {/* CTA */}
              <Button size="lg" className="glow-tech group">
                {text.cta}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground italic">
            {language === 'es'
              ? '🚀 Actualmente en desarrollo. Sé el primero en acceder a contenido exclusivo.'
              : '🚀 Currently in development. Be the first to access exclusive content.'
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;