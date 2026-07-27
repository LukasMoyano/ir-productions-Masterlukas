import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cpu, Sprout, Network, Lock, FileDown, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PortfolioPreviewProps {
  language: 'es' | 'en';
}

const PortfolioPreview = ({ language }: PortfolioPreviewProps) => {
  const navigate = useNavigate();

  const content = {
    es: {
      badge: "Evidencia de Capacidades",
      title: "Investigación & Infraestructura Crítica",
      subtitle: "Consultoría en Transformación Digital & Adopción de IA",
      description: "Nuestra trayectoria se fundamenta en la construcción de sistemas soberanos y el análisis avanzado de datos (HPC) para sectores científicos y agrícolas.",
      cta: "Ver Portafolio Completo",
      download: "Descargar Brochure PDF",
      projects: [
        {
          title: "CultivaTech ColombIA",
          desc: "Ecosistema AgriTech TRL6. Monitoreo IoT con registros inmutables vía Blockchain (Solidity) para certificación de calidad ambiental en tiempo real.",
          icon: <Sprout className="w-6 h-6 text-agro-green" />,
          image: "/assets/agro-tech-farmers-BsDX3AmC.jpg"
        },
        {
          title: "MetaBuscador de Conocimiento",
          desc: "Arquitectura agéntica para el descubrimiento de activos intelectuales mediante grafos de relaciones sintácticas sobre +220k registros locales.",
          icon: <Network className="w-6 h-6 text-primary" />,
          image: "/assets/La_-MinaUrbana-_-BWBEMwjP.png"
        },
        {
          title: "Infraestructura HPC Soberana",
          desc: "Orquestación de nodos de alto desempeño optimizados para procesos biotecnológicos (R/SPSS) y protección absoluta de propiedad intelectual.",
          icon: <Cpu className="w-6 h-6 text-accent" />,
          image: "/assets/hpc-workstation-Bm44DVLH.jpg"
        }
      ]
    },
    en: {
      badge: "Capability Evidence",
      title: "Research & Critical Infrastructure",
      subtitle: "Digital Transformation & AI Adoption Consultancy",
      description: "Our track record is built on constructing sovereign systems and advanced data analysis (HPC) for scientific and agricultural sectors.",
      cta: "View Full Portfolio",
      download: "Download PDF Brochure",
      projects: [
        {
          title: "CultivaTech ColombIA",
          desc: "TRL6 AgriTech ecosystem. IoT monitoring with immutable records via Blockchain (Solidity) for real-time environmental quality certification.",
          icon: <Sprout className="w-6 h-6 text-agro-green" />,
          image: "/assets/agro-tech-farmers-BsDX3AmC.jpg"
        },
        {
          title: "Knowledge MetaSearcher",
          desc: "Agentic architecture for intellectual asset discovery through syntactic relationship graphs over 220k+ local records.",
          icon: <Network className="w-6 h-6 text-primary" />,
          image: "/assets/La_-MinaUrbana-_-BWBEMwjP.png"
        },
        {
          title: "Sovereign HPC Infrastructure",
          desc: "High-performance node orchestration optimized for biotechnological processes (R/SPSS) and absolute protection of intellectual property.",
          icon: <Cpu className="w-6 h-6 text-accent" />,
          image: "/assets/hpc-workstation-Bm44DVLH.jpg"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="portafolio-preview" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <Badge variant="outline" className="border-accent text-accent uppercase tracking-widest text-[10px]">
              {t.badge}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
              {t.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t.subtitle}
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="border-primary/20 hover:bg-primary/10" onClick={() => window.open('/portfolio-download.html', '_blank')}>
              <FileDown className="mr-2 w-4 h-4" /> {t.download}
            </Button>
            <Button className="cta-primary shadow-lg shadow-primary/20" onClick={() => navigate('/portfolio')}>
              {t.cta} <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.projects.map((project, idx) => (
            <div key={idx} className="group relative tech-border bg-background/50 rounded-2xl overflow-hidden hover-lift transition-all duration-500">
              <div className="h-48 relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                   <div className="p-2 bg-background/80 backdrop-blur-md rounded-lg border border-white/10">
                     {project.icon}
                   </div>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-muted/30 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <Lock className="w-6 h-6 text-accent" />
             </div>
             <div>
                <h4 className="font-bold text-foreground uppercase tracking-tight">Soberanía de Datos Garantizada</h4>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Infraestructura local / Sin dependencias de terceros</p>
             </div>
          </div>
          <div className="text-center md:text-right">
             <p className="text-sm italic text-muted-foreground">"Transformando la complejidad computacional en autonomía científica."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
