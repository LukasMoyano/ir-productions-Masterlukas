import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Cog, TrendingUp } from 'lucide-react';

interface ProcessSectionProps {
  language: 'es' | 'en';
}

const ProcessSection = ({ language }: ProcessSectionProps) => {
  const content = {
    es: {
      title: "Nuestro Proceso",
      subtitle: "Metodología probada para la innovación exitosa",
      steps: [
        {
          icon: Search,
          number: "01",
          title: "Diagnóstico y Diseño Personalizado",
          description: "Entendemos profundamente tu necesidad específica y co-creamos la solución ideal fusionando Arte, Ciencia y Tecnología.",
          features: ["Análisis detallado", "Co-creación", "Diseño a medida"]
        },
        {
          icon: Cog,
          number: "02",
          title: "Implementación y Entrega",
          description: "Desarrollamos y entregamos la solución completa (Taller, Workstation o Kit IoT) lista para usar con toda la documentación.",
          features: ["Desarrollo ágil", "Testing riguroso", "Entrega completa"]
        },
        {
          icon: TrendingUp,
          number: "03",
          title: "Impulso y Escalabilidad",
          description: "Acompañamos tu crecimiento con soporte continuo, educación permanente y evolución del sistema según tus nuevas necesidades.",
          features: ["Soporte 24/7", "Capacitación continua", "Escalabilidad"]
        }
      ]
    },
    en: {
      title: "Our Process",
      subtitle: "Proven methodology for successful innovation",
      steps: [
        {
          icon: Search,
          number: "01",
          title: "Diagnosis and Custom Design",
          description: "We deeply understand your specific needs and co-create the ideal solution by fusing Art, Science and Technology.",
          features: ["Detailed analysis", "Co-creation", "Bespoke design"]
        },
        {
          icon: Cog,
          number: "02",
          title: "Implementation and Delivery",
          description: "We develop and deliver the complete solution (Workshop, Workstation or IoT Kit) ready to use with full documentation.",
          features: ["Agile development", "Rigorous testing", "Complete delivery"]
        },
        {
          icon: TrendingUp,
          number: "03",
          title: "Growth and Scalability",
          description: "We support your growth with continuous support, ongoing education and system evolution according to your new needs.",
          features: ["24/7 support", "Continuous training", "Scalability"]
        }
      ]
    }
  };

  const text = content[language];

  return (
    <section id={language === 'es' ? 'proceso' : 'process'} className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            {language === 'es' ? 'Metodología' : 'Methodology'}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary">
            {text.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {text.subtitle}
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-tech-green transform -translate-y-1/2 z-0" />
          
          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {text.steps.map((step, index) => (
              <Card 
                key={index} 
                className="tech-border hover-lift group relative"
              >
                {/* Step Number Circle */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-bold border-4 border-background">
                  {step.number}
                </div>

                <CardContent className="p-8 pt-12 text-center space-y-6">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {step.features.map((feature, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 via-accent/5 to-tech-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16 p-8 bg-muted/50 rounded-2xl border border-accent/20">
          <h3 className="text-2xl font-bold mb-4 gradient-text-gold">
            {language === 'es' 
              ? 'Arte + Ciencia + Tecnología = Innovación Sostenible' 
              : 'Art + Science + Technology = Sustainable Innovation'
            }
          </h3>
          <p className="text-muted-foreground text-lg">
            {language === 'es'
              ? 'Cada proyecto es único, cada solución es personalizada, cada resultado trasciende expectativas.'
              : 'Every project is unique, every solution is personalised, every result transcends expectations.'
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;