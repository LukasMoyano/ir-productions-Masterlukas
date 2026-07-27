/**
 * @file ServicesSection.tsx
 * @description Componente de presentación de servicios y líneas de solución.
 * Funciona como un hub de navegación hacia las páginas de detalle de servicios.
 *
 * Estrategia SEO:
 * 1. Estructura de enlaces internos (Internal Linking) para distribuir autoridad.
 * 2. Uso de palabras clave de "cola larga" en descripciones (ej. "Robot móvil autónomo", "Workstations HPC").
 * 3. Etiquetas ALT en imágenes para búsqueda visual.
 */

// Importaciones de Navegación y UI
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Server, Bot, Presentation } from "lucide-react";
import agroTechImage from "@/assets/agro-tech-farmers.jpg";
import hpcWorkstationImage from "@/assets/hpc-workstation.jpg";
import iotRobotImage from "@/assets/iot-robot.jpg";
import circularEconomyImage from "@/assets/De_Residuos_a_Componentes_de_Alta_Tecnologia.png";

const benefitColorMap: { [key: string]: string } = {
  // Agricultura - Verde
  "Capacitación institucional": "bg-agro-green/20 border-agro-green/30 text-agro-green",
  "Impacto social rural": "bg-agro-green/20 border-agro-green/30 text-agro-green",
  "Alineación políticas públicas": "bg-emerald-500/20 border-emerald-500/30 text-emerald-400",
  "Soberanía alimentaria": "bg-emerald-500/20 border-emerald-500/30 text-emerald-400",
  "Practical training": "bg-agro-green/20 border-agro-green/30 text-agro-green",
  "Accessible technology": "bg-emerald-500/20 border-emerald-500/30 text-emerald-400",
  "Social impact": "bg-emerald-500/20 border-emerald-500/30 text-emerald-400",
  
  // Tech/IoT - Turquesa/Cyan
  "Monitoreo 24/7": "bg-cyan-500/20 border-cyan-500/30 text-cyan-400",
  "IA local": "bg-tech-green/20 border-tech-green/30 text-tech-green",
  "Plataforma web": "bg-cyan-500/20 border-cyan-500/30 text-cyan-400",
  "Open Source Linux": "bg-cyan-500/20 border-cyan-500/30 text-cyan-400",
  "24/7 monitoring": "bg-cyan-500/20 border-cyan-500/30 text-cyan-400",
  "Advanced AI": "bg-tech-green/20 border-tech-green/30 text-tech-green",
  "Integrated IoT": "bg-cyan-500/20 border-cyan-500/30 text-cyan-400",
  
  // Soberanía tecnológica - Púrpura/Violeta
  "Soberanía tecnológica": "bg-violet-500/20 border-violet-500/30 text-violet-400",
  "Tech Sovereignty": "bg-violet-500/20 border-violet-500/30 text-violet-400",
  
  // RAEE/Circular - Rojo/Naranja
  "Upcycling RAEE": "bg-primary/20 border-primary/30 text-primary",
  "IA Avanzada": "bg-orange-500/20 border-orange-500/30 text-orange-400",
  "Robótica": "bg-red-500/20 border-red-500/30 text-red-400",
  "Circularidad": "bg-rose-500/20 border-rose-500/30 text-rose-400",
  "Upcycling": "bg-primary/20 border-primary/30 text-primary",
  "AI Advanced": "bg-orange-500/20 border-orange-500/30 text-orange-400",
  "Robotics": "bg-red-500/20 border-red-500/30 text-red-400",
  "Circularity": "bg-rose-500/20 border-rose-500/30 text-rose-400",
  
  // HPC - Dorado/Amarillo
  "AMD/ARM Premium": "bg-accent/20 border-accent/30 text-accent",
  "Consultoría técnica": "bg-amber-500/20 border-amber-500/30 text-amber-400",
  "Open Source": "bg-yellow-500/20 border-yellow-500/30 text-yellow-400",
  "Linux Native": "bg-accent/20 border-accent/30 text-accent",
  "Premium hardware": "bg-amber-500/20 border-amber-500/30 text-amber-400",
  "AI optimisation": "bg-yellow-500/20 border-yellow-500/30 text-yellow-400",
  "Technical support": "bg-accent/20 border-accent/30 text-accent",
  
  // Default
  default: "bg-blue-500/20 border-blue-500/30 text-blue-400",
};

const getBenefitColor = (benefit: string): string => {
  return benefitColorMap[benefit] || benefitColorMap.default;
};

// Definición de tipos para los servicios
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
  external?: boolean;
}

interface ServicesSectionProps {
  language: "es" | "en";
}

// Componente Principal
const ServicesSection = ({ language }: ServicesSectionProps) => {
  // ============================================================================
  // CONTENIDO Y PALABRAS CLAVE (SEO)
  // ============================================================================
  const content: {
    [key: string]: {
      title: string;
      subtitle: string;
      services: Service[];
      cta: string;
    };
  } = {
    es: {
      // Títulos optimizados para búsqueda de servicios tecnológicos
      title: "Nuestras Líneas de Solución",
      subtitle: "Tres pilares tecnológicos para transformar tu futuro",
      services: [
        {
          icon: Users,
          title: "Talleres Agro-Innovación Integral",
          description:
            "Capacitación B2G/B2B que democratiza la tecnología agrícola, fusionando sabiduría ancestral con herramientas digitales modernas para la soberanía alimentaria.",
          benefits: [
            "Capacitación institucional",
            "Impacto social rural",
            "Alineación políticas públicas",
            "Soberanía alimentaria",
          ],
          image: agroTechImage,
          badge: "B2G/B2B",
          color: "agro-green",
          target: "Instituciones • Agricultores • Comunidades",
          link: "/talleres-agro-innovacion",
        },
        {
          icon: Bot,
          title: "Kit Agro-IoT 'CultivaTech ColombIA'",
          description:
            "Robot móvil autónomo con sensores, cámara IA y plataforma web/móvil local para monitoreo agrícola y apícola en tiempo real. Arquitectura soberana open-source.",
          benefits: ["Monitoreo 24/7", "IA local", "Plataforma web", "Open Source Linux", "Soberanía tecnológica"],
          image: iotRobotImage,
          badge: "MVP",
          color: "tech-green",
          target: "Agricultores • Apicultores • Investigadores",
           link: "https://cultivatech-colombia-frontend.netlify.app",
          external: true,
        },

        {
          icon: Presentation,
          title: "Proyecto Integral RAEE & Agricultura Circular",
          description:
            "Visión integral que une Upcycling, IA y Robótica para transformar el futuro del agro. Integración de residuos electrónicos en sistemas productivos circulares.",
          benefits: ["Upcycling RAEE", "IA Avanzada", "Robótica", "Soberanía tecnológica", "Circularidad"],
          image: circularEconomyImage,
          badge: "RAEE + Circular",
          color: "primary",
          target: "Productores • Inversionistas • Aliados",
          link: "/presentacion-cultivatech#urban-mine",
        },

        {
          icon: Server,
          title: "Workstations HPC/IA Personalizadas",
          description:
            "Consultoría, ensamblaje y soporte de estaciones AMD/ARM de alto rendimiento para empresas, academia y salud. Linux native, drivers optimizados.",
          benefits: ["AMD/ARM Premium", "Consultoría técnica", "Open Source", "Linux Native", "Soberanía tecnológica"],
          image: hpcWorkstationImage,
          badge: "Hardware",
          color: "primary",
          target: "Empresas • Academia • Salud • Biotecnología",
          link: "/servicios/hpc-builder",
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
          link: "https://cultivatech-colombia-frontend.netlify.app",
          external: true,
        },
        {
          icon: Presentation,
          title: "Future Vision: Circular Agriculture",
          description:
          "Discover our integral vision that unites Upcycling, AI, and Robotics to transform the future of agriculture and technological sovereignty.",
          benefits: ["Upcycling RAEE", "AI Advanced", "Robotics", "Tech Sovereignty", "Circularity"],
          image: circularEconomyImage,
          badge: "RAEE + Circular",
          color: "primary",
          target: "Producers • Investors • Partners",
          link: "/presentacion-cultivatech#urban-mine",
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
          target: "Companies • Academia • Health",
          link: "/servicios/hpc-builder",
        }
      ],
      cta: "Learn More",
    },
  };

  const text = content[language];

  return (
    // Sección con ID semántico para anclaje y navegación
    <section
      id={language === "es" ? "servicios" : "services"}
      className="py-20 circuit-pattern"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Encabezado de Sección: H2 para jerarquía SEO */}
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
          {/* Iteración de tarjetas de servicio */}
          {text.services.map((service, index) => (
            <Card
              key={index}
              className="tech-border hover-lift group overflow-hidden relative flex flex-col text-center items-center"
            >
              <div className="relative h-56 w-full overflow-hidden">
                {/* Imagen del servicio con atributo ALT dinámico */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                <Badge
                  className={`absolute top-4 left-4 bg-${service.color} text-${service.color}-foreground shadow-lg`}
                >
                  {service.badge}
                </Badge>

                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-background border border-white/10 shadow-xl rounded-2xl flex items-center justify-center z-20 group-hover:scale-110 transition-transform duration-500">
                  <service.icon className={`w-7 h-7 text-${service.color}`} />
                </div>
              </div>

              <CardHeader className="pt-10 pb-4">
                {/* Título del servicio (Keywords principales) */}
                <CardTitle className="text-xl md:text-2xl font-black uppercase tracking-tighter group-hover:text-primary transition-colors leading-tight min-h-[3.5rem] flex items-center justify-center">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6 flex-grow flex flex-col items-center w-full px-6 md:px-8">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {service.target && (
                  <div className="w-full py-3 px-4 border-y border-primary/20 bg-primary/5 rounded-lg shadow-inner">
                    <p className="text-[10px] md:text-xs text-primary font-bold uppercase tracking-[0.2em]">
                      {service.target}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap justify-center gap-2">
                  {service.benefits.map((benefit, idx) => (
                    <Badge 
                      key={idx} 
                      className={`text-[9px] md:text-[10px] uppercase tracking-widest font-semibold ${getBenefitColor(benefit)}`}
                    >
                      {benefit}
                    </Badge>
                  ))}
                </div>

                <div className="flex-grow" />

                <div className="mt-auto w-full pt-6">
                  {service.external ? (
                    <a href={service.link} target="_blank" rel="noopener noreferrer" className="w-full block">
                      <Button className="w-full group/btn cta-primary h-12">
                        {text.cta}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  ) : service.link ? (
                    <Link to={service.link} className="w-full">
                      <Button className="w-full group/btn cta-primary h-12" variant="outline">
                        {text.cta}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  ) : (
                    <Button className="w-full group/btn cta-primary h-12" variant="outline">
                      {text.cta}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  )}
                </div>
              </CardContent>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-lg transition-all duration-500 pointer-events-none" />
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
