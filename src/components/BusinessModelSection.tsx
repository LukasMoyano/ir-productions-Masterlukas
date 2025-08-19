import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Coins, Users, Bot, Server, GraduationCap } from 'lucide-react';

interface BusinessModelSectionProps {
  language: 'es' | 'en';
}

const BusinessModelSection = ({ language }: BusinessModelSectionProps) => {
  const content = {
    es: {
      title: "Nuestro Modelo de Negocio y Escalabilidad",
      subtitle: "Visión Financiera Sostenible",
      models: [
        {
          icon: GraduationCap,
          title: "Talleres Agro-Tech",
          model: "B2G/B2B + Alianzas Institucionales",
          pricing: "Modelo de precios por ciclo/grupo",
          scalability: "Formador de Formadores + Contenido e-learning",
          color: "agro-green"
        },
        {
          icon: Server,
          title: "Workstations HPC/IA",
          model: "Consultoría + Venta Directa",
          pricing: "Anticipo 70% + Personalización",
          scalability: "Alianzas con distribuidores + Expansión nichos (salud, finanzas)",
          color: "primary"
        },
        {
          icon: Bot,
          title: "CultivaTech ColombIA",
          model: "Venta de Kit + Suscripción SaaS",
          pricing: "Hardware + Plataforma mensual",
          scalability: "Expansión cultivos/regiones + IA mejorada + Analítica avanzada",
          color: "tech-green"
        }
      ]
    },
    en: {
      title: "Our Business Model and Scalability",
      subtitle: "Sustainable Financial Vision",
      models: [
        {
          icon: GraduationCap,
          title: "Agro-Tech Workshops",
          model: "B2G/B2B + Institutional Partnerships",
          pricing: "Pricing model per cycle/group",
          scalability: "Train the Trainers + E-learning Content",
          color: "agro-green"
        },
        {
          icon: Server,
          title: "HPC/AI Workstations",
          model: "Consulting + Direct Sales",
          pricing: "70% Advance + Customisation",
          scalability: "Distributor partnerships + Niche expansion (health, finance)",
          color: "primary"
        },
        {
          icon: Bot,
          title: "CultivaTech ColombIA",
          model: "Kit Sales + SaaS Subscription",
          pricing: "Hardware + Monthly Platform",
          scalability: "Crop/region expansion + Enhanced AI + Advanced Analytics",
          color: "tech-green"
        }
      ]
    }
  };

  const text = content[language];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            {language === 'es' ? 'Modelo de Negocio' : 'Business Model'}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary">
            {text.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {text.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {text.models.map((model, index) => (
            <Card key={index} className="tech-border hover-lift group">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-${model.color}/20 to-${model.color}/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <model.icon className={`w-8 h-8 text-${model.color}`} />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {model.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Coins className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-foreground mb-1">
                        {language === 'es' ? 'Modelo:' : 'Model:'}
                      </p>
                      <p className="text-sm text-muted-foreground">{model.model}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-foreground mb-1">
                        {language === 'es' ? 'Precios:' : 'Pricing:'}
                      </p>
                      <p className="text-sm text-muted-foreground">{model.pricing}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-foreground mb-1">
                        {language === 'es' ? 'Escalabilidad:' : 'Scalability:'}
                      </p>
                      <p className="text-sm text-muted-foreground">{model.scalability}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Growth Visualization */}
        <div className="text-center">
          <div className="relative max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-8">
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-agro-green/20 to-agro-green/40 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <div className="w-6 h-6 bg-agro-green rounded-full" />
                </div>
                <p className="text-sm text-muted-foreground">
                  {language === 'es' ? 'Inicio' : 'Startup'}
                </p>
              </div>

              <div className="flex-1 h-1 bg-gradient-to-r from-agro-green via-primary to-tech-green rounded-full" />

              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  {language === 'es' ? 'Crecimiento' : 'Growth'}
                </p>
              </div>

              <div className="flex-1 h-1 bg-gradient-to-r from-primary via-tech-green to-accent rounded-full" />

              <div className="flex flex-col items-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-tech-green/20 to-accent/40 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="w-3 h-3 bg-tech-green rounded-full" />
                    <div className="w-3 h-3 bg-accent rounded-full" />
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <div className="w-3 h-3 bg-agro-green rounded-full" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {language === 'es' ? 'Red Escalable' : 'Scalable Network'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSection;