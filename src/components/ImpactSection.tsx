import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Users, Leaf, Zap, Globe, HandHeart } from 'lucide-react';

interface ImpactSectionProps {
  language: 'es' | 'en';
}

const ImpactSection = ({ language }: ImpactSectionProps) => {
  const content = {
    es: {
      title: "Impacto y Alineación",
      subtitle: "Contribuyendo a los Objetivos de Desarrollo Sostenible",
      description: "-IR- Productions, a través de nuestras soluciones tecnológicas, contribuye activamente a los ODS clave, apoyando las metas de innovación, sostenibilidad, desarrollo económico y cierre de brecha digital de los planes de desarrollo municipal y departamental, especialmente en Arbeláez, Cundinamarca.",
      sdgs: [
        {
          icon: Users,
          number: "4",
          title: "Educación de Calidad",
          description: "Talleres prácticos que democratizan el conocimiento tecnológico"
        },
        {
          icon: Zap,
          number: "8",
          title: "Trabajo Decente",
          description: "Generamos oportunidades laborales dignas en el sector agro-tech"
        },
        {
          icon: Target,
          number: "9",
          title: "Industria e Innovación",
          description: "Impulsamos la innovación tecnológica en el sector rural"
        },
        {
          icon: Leaf,
          number: "12",
          title: "Producción Responsable",
          description: "Promovemos prácticas agrícolas sostenibles con tecnología"
        },
        {
          icon: Globe,
          number: "13",
          title: "Acción Climática",
          description: "Monitoreo ambiental y optimización de recursos naturales"
        },
        {
          icon: HandHeart,
          number: "17",
          title: "Alianzas para los Objetivos",
          description: "Colaboramos con instituciones locales y globales"
        }
      ]
    },
    en: {
      title: "Impact and Alignment",
      subtitle: "Contributing to the Sustainable Development Goals",
      description: "-IR- Productions, through our technological solutions, actively contributes to key SDGs, supporting innovation, sustainability, economic development and digital gap closure goals of municipal and departmental development plans, especially in Arbeláez, Cundinamarca.",
      sdgs: [
        {
          icon: Users,
          number: "4",
          title: "Quality Education",
          description: "Practical workshops that democratise technological knowledge"
        },
        {
          icon: Zap,
          number: "8", 
          title: "Decent Work",
          description: "We generate decent employment opportunities in the agro-tech sector"
        },
        {
          icon: Target,
          number: "9",
          title: "Industry & Innovation",
          description: "We drive technological innovation in the rural sector"
        },
        {
          icon: Leaf,
          number: "12",
          title: "Responsible Production",
          description: "We promote sustainable agricultural practices with technology"
        },
        {
          icon: Globe,
          number: "13",
          title: "Climate Action", 
          description: "Environmental monitoring and natural resource optimisation"
        },
        {
          icon: HandHeart,
          number: "17",
          title: "Partnerships for Goals",
          description: "We collaborate with local and global institutions"
        }
      ]
    }
  };

  const text = content[language];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            {language === 'es' ? 'Impacto Social' : 'Social Impact'}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary">
            {text.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {text.subtitle}
          </p>
        </div>

        {/* Description */}
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            {text.description}
          </p>
        </div>

        {/* SDGs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {text.sdgs.map((sdg, index) => (
            <Card 
              key={index} 
              className="tech-border hover-lift group relative overflow-hidden"
            >
              <CardContent className="p-6">
                {/* SDG Number Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {sdg.number}
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <sdg.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {sdg.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {sdg.description}
                </p>

                {/* Hover effect gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 p-6 bg-card rounded-2xl border border-accent/20">
            <div className="w-16 h-16 bg-gradient-to-br from-agro-green/20 to-tech-green/20 rounded-xl flex items-center justify-center">
              <Leaf className="w-8 h-8 text-agro-green" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-foreground mb-1">
                {language === 'es' ? 'Arbeláez, Cundinamarca' : 'Arbeláez, Cundinamarca'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'es' 
                  ? 'Epicentro de innovación agro-tecnológica sostenible'
                  : 'Epicentre of sustainable agro-technological innovation'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;