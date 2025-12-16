import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Server, Bot, Presentation } from "lucide-react";
import agroTechImage from "@/assets/agro-tech-farmers.jpg";
import hpcWorkstationImage from "@/assets/hpc-workstation.jpg";
import iotRobotImage from "@/assets/iot-robot.jpg";
import presentationImage from "@/assets/hero-background.jpg"; // Using a placeholder image

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  benefits: string[];
  image: string;
  badge: string;
  color: string;
  target?: string;
  link?: string;
}

interface ServicesSectionProps {
  language: "es" | "en";
}

const ServicesSection = ({ language }: ServicesSectionProps) => {
  const content: {
    [key: string]: {
      title: string;
      subtitle: string;
      services: Service[];
      cta: string;
    };
  } = {
    es: {
      title: "Nuestras Líneas de Solución",
      subtitle: "Tres pilares tecnológicos para transformar tu futuro",
      services: [
        {
          icon: Users,
          title: "Talleres Agro-Innovación Integral",
          description:
            "Capacitación B2G/B2B que democratiza la tecnología agrícola, fusionando sabiduría ancestral con herramientas digitales modernas.",
          benefits: [
            "Capacitación institucional",
            "Impacto social rural",
            "Alineación políticas públicas",
          ],
          image: agroTechImage,
          badge: "B2G/B2B",
          color: "agro-green",
          target: "Instituciones • Agricultores",
          link: "/talleres-agro-innovacion",
        },

        {
          icon: Bot,
          title: "Kit Agro-IoT 'CultivaTech ColombIA'",
          description:
            "Robot móvil autónomo con sensores, cámara IA y plataforma web/móvil local para monitoreo agrícola y apícola en tiempo real.",
          benefits: ["Monitoreo 24/7", "IA local", "Plataforma web"],
          image: iotRobotImage,
          badge: "MVP",
          color: "tech-green",
          target: "Agricultores • Apicultores",
        },

        {
          icon: Presentation,
          title:
            "Proyecto Integral para el manejo de residuos de origen electronico y Agricultura Circular",
          description:
            "Descubre nuestra visión integral que une Upcycling, IA y Robótica para transformar el futuro del agro y la soberanía tecnológica.",
          benefits: ["Visión Integral", "Upcycling", "Soberanía Tecnológica"],
          image: presentationImage,
          badge: "Presentación",
          color: "blue-500",
          target: "Productores • Inversionistas • Aliados",
          link: "/presentacion-cultivatech",
        },

        {
          icon: Server,
          title: "Workstations HPC/IA Personalizadas",
          description:
            "Consultoría, ensamblaje y soporte de estaciones AMD/ARM de alto rendimiento para empresas, academia y salud.",
          benefits: ["AMD/ARM premium", "Consultoría técnica", "Open Source"],
          image: hpcWorkstationImage,
          badge: "Hardware",
          color: "primary",
          target: "Empresas • Academia • Salud",
        },
      ],
      cta: "Descubre Más",
    },
    en: {
      title: "Our Solution Lines",
      subtitle: "Three technological pillars to transform your future",
      services: [
        {
          icon: Users,
          title: "Agro-Tech Workshops",
          description:
            "We democratise agricultural technology with practical workshops that fuse ancestral wisdom and modern digital tools.",
          benefits: [
            "Practical training",
            "Accessible technology",
            "Social impact",
          ],
          image: agroTechImage,
          badge: "Education",
          color: "agro-green",
          link: "/talleres-agro-innovacion",
        },
        {
          icon: Bot,
          title: "Agro-IoT Kit 'CultivaTech ColombIA'",
          description:
          "Autonomous AI-powered robot for agricultural monitoring, crop optimisation and real-time environmental data collection.",
          benefits: ["24/7 monitoring", "Advanced AI", "Integrated IoT"],
          image: iotRobotImage,
          badge: "IoT + AI",
          color: "tech-green",
        },
        {
          icon: Presentation,
          title: "Future Vision: Circular Agriculture",
          description:
          "Discover our integral vision that unites Upcycling, AI, and Robotics to transform the future of agriculture and technological sovereignty.",
          benefits: ["Integral Vision", "Upcycling", "Tech Sovereignty"],
          image: presentationImage,
          badge: "Presentation",
          color: "blue-500",
          target: "Producers • Investors • Partners",
          link: "/presentacion-cultivatech",
        },
        {
          icon: Server,
          title: "HPC/AI Workstations",
          description:
            "Custom-built high-performance AMD workstations for artificial intelligence, rendering and scientific computing.",
          benefits: [
            "Premium hardware",
            "AI optimisation",
            "Technical support",
          ],
          image: hpcWorkstationImage,
          badge: "Hardware",
          color: "primary",
        }
      ],
      cta: "Learn More",
    },
  };

  const text = content[language];

  return (
    <section
      id={language === "es" ? "servicios" : "services"}
      className="py-20 circuit-pattern"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            {language === "es" ? "Soluciones" : "Solutions"}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary">
            {text.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {text.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {text.services.map((service, index) => (
            <Card
              key={index}
              className="tech-border hover-lift group overflow-hidden relative flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                <Badge
                  className={`absolute top-4 left-4 bg-${service.color} text-${service.color}-foreground`}
                >
                  {service.badge}
                </Badge>

                <div className="absolute bottom-4 right-4 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <service.icon className={`w-6 h-6 text-${service.color}`} />
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 flex-grow flex flex-col">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {service.target && (
                  <div className="mb-3">
                    <p className="text-sm text-muted-foreground/80 font-medium">
                      {service.target}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {service.benefits.map((benefit, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {benefit}
                    </Badge>
                  ))}
                </div>

                <div className="flex-grow" />

                <div className="mt-auto pt-4">
                  {service.link ? (
                    <Link to={service.link} className="w-full">
                      <Button className="w-full group/btn" variant="outline">
                        {text.cta}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  ) : (
                    <Button className="w-full group/btn" variant="outline">
                      {text.cta}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  )}
                </div>
              </CardContent>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-lg transition-all duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            {language === "es"
              ? "¿Listo para impulsar tu proyecto con tecnología de vanguardia?"
              : "Ready to boost your project with cutting-edge technology?"}
          </p>
          <Button
            size="lg"
            className="cta-primary glow-red"
            onClick={() =>
              document
                .getElementById(language === "es" ? "contacto" : "contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {language === "es"
              ? "Solicita una Consulta Gratuita"
              : "Request a Free Consultation"}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
