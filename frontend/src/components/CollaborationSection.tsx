import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Handshake, Users, Target, Globe, ArrowRight } from 'lucide-react';

interface CollaborationSectionProps {
  language: 'es' | 'en';
}

const CollaborationSection = ({ language }: CollaborationSectionProps) => {
  const content = {
    es: {
      title: "Solicitud de Colaboración y Respaldo",
      subtitle: "Construyamos el Futuro Juntos",
      description: "Invitamos a instituciones, empresas y organizaciones a establecer alianzas estratégicas que generen impacto sostenible y transformación digital en el sector rural.",
      benefits: [
        {
          icon: Handshake,
          title: "Alianzas Estratégicas",
          description: "Difusión conjunta, espacios compartidos y co-branding para maximizar el alcance"
        },
        {
          icon: Target,
          title: "Impacto Medible",
          description: "Contribución directa a ODS y planes de desarrollo con métricas claras"
        },
        {
          icon: Users,
          title: "Beneficio Mutuo",
          description: "Fortalecimiento de la marca institucional a través de innovación social"
        },
        {
          icon: Globe,
          title: "Escalabilidad Regional",
          description: "Expansión del modelo a otros municipios y departamentos"
        }
      ],
      cta: "Solicitar una Reunión",
      secondary_cta: "Descargar Propuesta"
    },
    en: {
      title: "Collaboration and Support Request",
      subtitle: "Let's Build the Future Together",
      description: "We invite institutions, companies and organisations to establish strategic partnerships that generate sustainable impact and digital transformation in the rural sector.",
      benefits: [
        {
          icon: Handshake,
          title: "Strategic Partnerships",
          description: "Joint outreach, shared spaces and co-branding to maximise reach"
        },
        {
          icon: Target,
          title: "Measurable Impact",
          description: "Direct contribution to SDGs and development plans with clear metrics"
        },
        {
          icon: Users,
          title: "Mutual Benefit",
          description: "Strengthening institutional brand through social innovation"
        },
        {
          icon: Globe,
          title: "Regional Scalability",
          description: "Expansion of the model to other municipalities and departments"
        }
      ],
      cta: "Request a Meeting",
      secondary_cta: "Download Proposal"
    }
  };

  const text = content[language];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            {language === 'es' ? 'Colaboración' : 'Collaboration'}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary">
            {text.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {text.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {text.benefits.map((benefit, index) => (
            <Card key={index} className="tech-border hover-lift group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold gradient-text-gold">
            {text.subtitle}
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="glow-red hover-lift group bg-primary hover:bg-primary/90"
            >
              {text.cta}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent hover:bg-accent/10 group"
            >
              {text.secondary_cta}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Partnership Types */}
          <div className="mt-12 p-8 bg-muted/30 rounded-2xl border border-accent/20">
            <p className="text-lg text-muted-foreground mb-4">
              {language === 'es' 
                ? 'Tipos de colaboración que buscamos:' 
                : 'Types of collaboration we seek:'
              }
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {(language === 'es' 
                ? ['Instituciones Educativas', 'Alcaldías', 'Empresas Privadas', 'ONGs', 'Fundaciones', 'Cooperativas']
                : ['Educational Institutions', 'Local Governments', 'Private Companies', 'NGOs', 'Foundations', 'Cooperatives']
              ).map((type, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2">
                  {type}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;