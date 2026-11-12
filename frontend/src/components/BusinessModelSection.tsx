import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Coins, Banknote, ShieldCheck, Server, GraduationCap, Recycle, ArrowUpRight } from 'lucide-react';

interface BusinessModelSectionProps {
  language: 'es' | 'en';
}

const BusinessModelSection = ({ language }: BusinessModelSectionProps) => {
  const content = {
    es: {
      title: "Paquetes Productizados",
      subtitle: "Precios base, condiciones claras y margen neto sostenible",
      packages: [
        {
          icon: GraduationCap,
          title: "Talleres Agro-Innovación & CultivaTech",
          badge: "B2G / Institucional",
          model: "B2G / B2B Formador de Formadores.",
          investment: "Paquetes productizados por ciclo formativo (incluye kits IoT ESP32, guías STEAM y certificación).",
          terms: "Anticipo 50% para inicio de cohortes, saldo contra entrega de informe de impacto. Margen neto ≥ 75%.",
          link: "",
          color: "agro-green"
        },
        {
          icon: Server,
          title: "Estaciones HPC & IA Local",
          badge: "B2B",
          model: "Consultoría de arquitectura 'personal shopper' + ensamble soberano (Debian / AMD ROCm / LLMs locales).",
          investment: "Hardware al costo verificado + honorarios de integración y blindaje de infraestructura.",
          terms: "Anticipo 50% de honorarios para diseño y adquisición guiada. Margen neto ≥ 75%.",
          link: "",
          color: "primary"
        },
        {
          icon: Recycle,
          title: "Rescate Fénix & Digitalización",
          badge: "B2C / PyMEs",
          model: "Preservación de memoria histórica en cintas (VHS/Beta) y reacondicionamiento de PCs con GNU/Linux.",
          investment: "Tarifa clara por hora de cinta digitalizada en HD / Tarifa plana por revivir equipo antiguo.",
          terms: "Recepción con diagnóstico inicial, 50% de anticipo.",
          link: "https://fusacompufenix.netlify.app",
          color: "tech-green"
        }
      ]
    },
    en: {
      title: "Productised Packages",
      subtitle: "Base pricing, clear terms and a sustainable net margin",
      packages: [
        {
          icon: GraduationCap,
          title: "Agro-Innovation Workshops & CultivaTech",
          badge: "B2G / Institutional",
          model: "B2G / B2B Train-the-Trainer.",
          investment: "Productised packages per training cycle (includes ESP32 IoT kits, STEAM guides and certification).",
          terms: "50% advance to start cohorts, balance upon delivery of impact report. Net margin ≥ 75%.",
          link: "",
          color: "agro-green"
        },
        {
          icon: Server,
          title: "HPC & Local AI Workstations",
          badge: "B2B",
          model: "'Personal shopper' architecture consulting + sovereign assembly (Debian / AMD ROCm / local LLMs).",
          investment: "Hardware at verified cost + integration and infrastructure hardening fees.",
          terms: "50% advance on fees for design and guided procurement. Net margin ≥ 75%.",
          link: "",
          color: "primary"
        },
        {
          icon: Recycle,
          title: "Rescue Fénix & Digitization",
          badge: "B2C / SMEs",
          model: "Preservation of historical memory on tape (VHS/Beta) and refurbishment of PCs with GNU/Linux.",
          investment: "Clear rate per hour of digitised tape in HD / Flat rate to revive old equipment.",
          terms: "Reception with initial assessment, 50% advance.",
          link: "https://fusacompufenix.netlify.app",
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
            {language === 'es' ? 'Inversión' : 'Investment'}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary">
            {text.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {text.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {text.packages.map((pkg, index) => (
            <Card key={index} className="tech-border hover-lift group flex flex-col">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <pkg.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {pkg.title}
                </CardTitle>
                <Badge className="mx-auto mt-2" variant="secondary">{pkg.badge}</Badge>
              </CardHeader>

              <CardContent className="space-y-4 flex-grow">
                <div className="flex items-start gap-3">
                  <Coins className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-1">
                      {language === 'es' ? 'Modelo:' : 'Model:'}
                    </p>
                    <p className="text-sm text-muted-foreground">{pkg.model}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Banknote className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-1">
                      {language === 'es' ? 'Inversión Base:' : 'Base Investment:'}
                    </p>
                    <p className="text-sm text-muted-foreground">{pkg.investment}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-1">
                      {language === 'es' ? 'Condiciones comerciales:' : 'Commercial terms:'}
                    </p>
                    <p className="text-sm text-muted-foreground">{pkg.terms}</p>
                  </div>
                </div>

                {pkg.link && (
                  <a
                    href={pkg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-tech-green hover:text-primary font-medium transition-colors"
                  >
                    {language === 'es' ? 'Visitar Rescate Fénix' : 'Visit Rescue Fénix'}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSection;
