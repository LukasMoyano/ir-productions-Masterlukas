import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Leaf, Zap, Globe, BookOpen } from 'lucide-react';

interface ImpactODSSectionProps {
  language: 'es' | 'en';
}

const ImpactODSSection = ({ language }: ImpactODSSectionProps) => {
  const content = {
    es: {
      title: "Impacto y Alineación Estratégica",
      subtitle: "Comprometidos con el desarrollo sostenible y las políticas públicas",
      description: "Nuestros proyectos están alineados con los Objetivos de Desarrollo Sostenible (ODS) y las políticas públicas locales, regionales y nacionales.",
      impacts: [
        {
          icon: Users,
          title: "Impacto Social",
          description: "Capacitación a agricultores e instituciones",
          metrics: "500+ beneficiarios esperados",
          ods: ["ODS 4", "ODS 8"]
        },
        {
          icon: Leaf,
          title: "Sostenibilidad",
          description: "Tecnología verde y gestión de e-waste",
          metrics: "Reducción 30% residuos electrónicos",
          ods: ["ODS 12", "ODS 13"]
        },
        {
          icon: Zap,
          title: "Innovación Tecnológica",
          description: "Soluciones IoT y IA para el agro",
          metrics: "Aumento 25% productividad",
          ods: ["ODS 2", "ODS 9"]
        }
      ],
      alignment: {
        title: "Alineación con Políticas Públicas",
        policies: [
          "PDM Arbeláez 2024-2027",
          "PDD Cundinamarca 2024-2027", 
          "Plan Nacional de Desarrollo",
          "Estrategia Digital Nacional",
          "Política MinTIC"
        ]
      }
    },
    en: {
      title: "Impact and Strategic Alignment",
      subtitle: "Committed to sustainable development and public policies",
      description: "Our projects are aligned with the Sustainable Development Goals (SDGs) and local, regional and national public policies.",
      impacts: [
        {
          icon: Users,
          title: "Social Impact",
          description: "Training farmers and institutions",
          metrics: "500+ expected beneficiaries",
          ods: ["SDG 4", "SDG 8"]
        },
        {
          icon: Leaf,
          title: "Sustainability",
          description: "Green technology and e-waste management",
          metrics: "30% reduction electronic waste",
          ods: ["SDG 12", "SDG 13"]
        },
        {
          icon: Zap,
          title: "Technological Innovation",
          description: "IoT and AI solutions for agriculture",
          metrics: "25% productivity increase",
          ods: ["SDG 2", "SDG 9"]
        }
      ],
      alignment: {
        title: "Alignment with Public Policies",
        policies: [
          "PDM Arbeláez 2024-2027",
          "PDD Cundinamarca 2024-2027", 
          "National Development Plan",
          "National Digital Strategy",
          "MinTIC Policy"
        ]
      }
    }
  };

  const text = content[language];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-success border-success">
            {language === 'es' ? 'Impacto' : 'Impact'}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary">
            {text.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {text.subtitle}
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {text.impacts.map((impact, index) => (
            <Card key={index} className="tech-border hover-lift group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <impact.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {impact.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {impact.description}
                </p>
                <div className="text-sm font-medium text-success mb-4">
                  {impact.metrics}
                </div>
                <div className="flex justify-center gap-2">
                  {impact.ods.map((ods, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {ods}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Policy Alignment */}
        <div className="text-center">
          <Card className="tech-border max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-info/10 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-info" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {text.alignment.title}
                </h3>
              </div>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
                {text.alignment.policies.map((policy, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-xs p-2 border-info/30 text-info hover:bg-info/10 transition-colors"
                  >
                    {policy}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactODSSection;