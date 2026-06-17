import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileDown, Cpu, Sprout, Network, ShieldCheck, Github, Linkedin, Mail, MapPin,
  Search, Lock, Zap, Award, Microscope, Terminal, Layers, Database, MessageSquare, ArrowLeft, ExternalLink
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Importación de las nuevas imágenes fotorealistas
import imgCultivatech from '@/assets/portfolio/cultivatech-colombia.png';
import imgNexusHpc from '@/assets/portfolio/nexus-hpc.png';
import imgMetabuscador from '@/assets/portfolio/metabuscador.png';
import imgAgentesMqtt from '@/assets/portfolio/agentes-mqtt.png';
import imgSoberaniaFusa from '@/assets/portfolio/soberania-fusa.png';
import imgOrquestacionGpu from '@/assets/portfolio/nexus-hpc.png'; // TODO: Cambiar a orquestacion-gpu.png cuando subas el archivo
import imgGemmaLocal from '@/assets/portfolio/gemma-local.png';
import imgEstacionAgro from '@/assets/portfolio/estacion-agrometeorologica.png';
import imgSistemaRaee from '@/assets/portfolio/sistema-raee.png';
import imgMonitoreoIot from '@/assets/portfolio/monitoreo-industrial.png';
import imgRedMesh from '@/assets/portfolio/red-mesh.png';

const Portfolio = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const content = {
    es: {
      hero: {
        tagline: "Investigación, Infraestructura & Soberanía Tecnológica",
        title: "Lukas Moyano Morales",
        subtitle: "Consultor en Transformación Digital & Adopción de IA | Artista Visual",
        desc: "Experto en el diseño de ecosistemas tecnológicos soberanos para el sector agrícola y científico. Fundador de IR Productions, integrando computación de alto desempeño (HPC), arquitecturas agénticas de IA y trazabilidad inmutable (Web3)."
      },
      sections: {
        background: "Formación Académica & Certificaciones",
        research: "Proyectos de Investigación Aplicada",
        ai_sovereignty: "IA Local & Grafos de Conocimiento",
        infrastructure: "Infraestructura Crítica & HPC",
        contact: "Conexión Estratégica"
      },
      bio: "Maestro en Artes Visuales con énfasis en Expresión Audiovisual de la Pontificia Universidad Javeriana (2019). Diplomado en Desarrollo Web y Apps de la Universidad Nacional de Colombia (2023). Especialista en IA Avanzada y HPC con MinTIC y UNAL (2023–2024). Consultor Senior en Transformación Digital & Adopción de IA (Desde 2024). Desarrollador de Smart Contracts (Solidity/Ethereum) y Formulación de Proyectos de Base Tecnológica con SENA (2026). Dominio de inglés técnico profesional nivel IELTS B2 certificado por el British Council (2024).",
      pillars: [
        {
          title: "CultivaTech ColombIA (TRL6)",
          desc: "Ecosistema Agro-IoT soberano con nodos ESP32-S3 y protocolos LoRaWAN/MQTT. Trazabilidad inmutable de variables ambientales mediante Smart Contracts en Solidity (EVM) para micología y apicultura. Backend en Python/Flask con base de datos local SQLite cifrada.",
          image: imgCultivatech,
          badges: ["Agro-IoT / Edge", "Solidity / Web3", "On-Premise"],
          icon: <Sprout className="w-6 h-6" />
        },
        {
          title: "HPC: Sovereign Computing",
          desc: "Infraestructura de cómputo de alto desempeño con arquitectura AMD/ARM. Clusters optimizados para procesamiento paralelo en R (Bioconductor) y Python. Entornos 'On-Premise' con VPN Mesh cifrada, eliminando dependencia de nubes externas. Linux Native, drivers optimizados, privacidad absoluta.",
          image: imgNexusHpc,
          badges: ["AMD/ARM HPC", "Linux Native", "Data Sovereignty"],
          icon: <Cpu className="w-6 h-6" />
        },
        {
          title: "Metabuscador de Activos Intelectuales",
          desc: "Arquitectura agéntica de IA para análisis de +220,000 registros locales. Grafos de conocimiento sintácticos para descubrimiento de activos. Implementación RAG con Ollama/GGUF local, sin exposición a internet. Python + Node.js backend.",
          image: imgMetabuscador,
          badges: ["RAG/LLMs Local", "Graph DB", "Privacy First"],
          icon: <Search className="w-6 h-6" />
        },
        {
          title: "Agentes de Control MQTT/Telegram",
          desc: "Sistema de monitoreo y control remoto de infraestructuras críticas mediante bots de Telegram. Agentes de decisión con Python para control de sensores IoT industriales. Mensajería encriptada, logs inmutables, auditoría permanente.",
          image: imgAgentesMqtt,
          badges: ["Telegram Bots", "MQTT", "Encrypted"],
          icon: <MessageSquare className="w-6 h-6" />
        },
        {
          title: "Soberanía Tecnológica Fusagasugá 2026",
          desc: "Iniciativa de adopción tecnológica comunitaria bajo estética 'Cyberpunk Andino'. Integración de soluciones AgroTech, Linux y estrategias SEO/Social enfocadas en educación tecnológica rural.",
          image: imgSoberaniaFusa,
          badges: ["AgroTech", "Community", "Cyberpunk Andino"],
          icon: <ShieldCheck className="w-6 h-6" />
        },
        {
          title: "Orquestación GPU Híbrida & Servidores Self-Hosted",
          desc: "Despliegue y configuración de servidores híbridos en Debian (AMD para display, NVIDIA para cómputo de IA). Administración de proxies inversos (Nginx/Apache), túneles seguros y redes de computación distribuida (Mesh).",
          image: imgOrquestacionGpu,
          badges: ["Debian Server", "NVIDIA Compute", "VPN Mesh"],
          icon: <Layers className="w-6 h-6" />
        },
        {
          title: "Implementación Generativa Local (Gemma 3 & RAG)",
          desc: "Integración de modelos multimodales avanzados (como Gemma 3) usando el SDK google-genai en Python. Desarrollo de sistemas RAG locales que procesan contextos amplios de forma segura, privada e independiente de la nube.",
          image: imgGemmaLocal,
          badges: ["Gemma 3", "Python / SDK", "GenAI Local"],
          icon: <Zap className="w-6 h-6" />
        }
      ],
      ai_adv: [
        {
          title: "MetaBuscador: Grafos Sintácticos",
          desc: "Desarrollo de una arquitectura agéntica de IA para el análisis de +220,000 registros locales. Implementación de grafos de conocimiento sintácticos para el descubrimiento de activos intelectuales y optimización de flujos de conocimiento mediante RAG (Retrieval-Augmented Generation).",
          icon: <Network className="text-primary w-5 h-5" />
        },
        {
          title: "Telegram & MQTT Control Agents",
          desc: "Interfaces de comando remoto mediante bots de Telegram para el monitoreo y control en tiempo real de infraestructuras críticas y sensores IoT industriales, facilitando la gestión técnica soberana desde cualquier ubicación.",
          icon: <MessageSquare className="text-accent w-5 h-5" />
        },
        {
          title: "IA Local & Auditoría Inmutable",
          desc: "Implementación de modelos LLM (Ollama/GGUF) en hardware local para procesamiento de lenguaje natural y auditoría de datos sensibles, garantizando la privacidad absoluta y la soberanía de la información institucional.",
          icon: <Database className="text-success w-5 h-5" />
        }
      ],
      gallery: [
        { title: "Estación Agro-Meteorológica", img: imgEstacionAgro },
        { title: "Sistema RAEE", img: imgSistemaRaee },
        { title: "Monitoreo Industrial IoT", img: imgMonitoreoIot },
        { title: "Red Mesh Cifrada", img: imgRedMesh }
      ],
      download: "Descargar Brochure Ejecutivo (PDF)",
      back: "← Regresar",
      results: "Evidencias y Resultados Reales"
    },
    en: {
      hero: {
        tagline: "Research, Infrastructure & Tech Sovereignty",
        title: "Lukas Moyano Morales",
        subtitle: "Digital Transformation & AI Adoption Consultant | Visual Artist",
        desc: "Expert in designing sovereign technological ecosystems for the agricultural and scientific sectors. Founder of IR Productions, integrating high-performance computing (HPC), agentic AI architectures, and immutable traceability (Web3)."
      },
      sections: {
        background: "Academic Background & Certifications",
        research: "Applied Research Projects",
        ai_sovereignty: "Local AI & Knowledge Graphs",
        infrastructure: "Critical Infrastructure & HPC",
        contact: "Strategic Connection"
      },
      bio: "Visual Artist with emphasis in Audiovisual Expression from the Pontifical Xavierian University (Pontificia Universidad Javeriana, 2019). Diploma in Web & Apps Development from the National University of Colombia (2023). Specialist in Advanced AI and HPC with MinTIC and UNAL (2023–2024). Senior Consultant in Digital Transformation & AI Adoption (Since 2024). Smart Contract Developer (Solidity/Ethereum) and Technology Base Project Formulation with SENA (2026). Professional English level IELTS B2 certified by the British Council (2024). His work focuses on designing sovereign systems and scientific data integrity.",
      pillars: [
        {
          title: "CultivaTech ColombIA (TRL6)",
          desc: "Sovereign Agro-IoT ecosystem with ESP32-S3 nodes and LoRaWAN/MQTT protocols. Immutable traceability of environmental variables via Solidity Smart Contracts (EVM) for mycology and beekeeping. Python/Flask backend with encrypted local SQLite database.",
          image: imgCultivatech,
          badges: ["Agro-IoT / Edge", "Solidity / Web3", "On-Premise"],
          icon: <Sprout className="w-6 h-6" />
        },
        {
          title: "HPC: Sovereign Computing",
          desc: "High-performance computing infrastructure with AMD/ARM architecture. Clusters optimized for parallel processing in R (Bioconductor) and Python. 'On-Premise' environments with encrypted VPN Mesh, eliminating dependency on external clouds. Linux Native, optimized drivers, absolute privacy.",
          image: imgNexusHpc,
          badges: ["AMD/ARM HPC", "Linux Native", "Data Sovereignty"],
          icon: <Cpu className="w-6 h-6" />
        },
        {
          title: "Intellectual Assets MetaSearcher",
          desc: "Agentic AI architecture for analysis of 220,000+ local records. Syntactic knowledge graphs for asset discovery. RAG implementation with Ollama/GGUF local, no internet exposure. Python + Node.js backend.",
          image: imgMetabuscador,
          badges: ["RAG/LLMs Local", "Graph DB", "Privacy First"],
          icon: <Search className="w-6 h-6" />
        },
        {
          title: "MQTT/Telegram Control Agents",
          desc: "Remote monitoring and control system for critical infrastructures via Telegram bots. Decision agents with Python for industrial IoT sensor control. Encrypted messaging, immutable logs, permanent audit.",
          image: imgAgentesMqtt,
          badges: ["Telegram Bots", "MQTT", "Encrypted"],
          icon: <MessageSquare className="w-6 h-6" />
        },
        {
          title: "Technological Sovereignty Fusagasugá 2026",
          desc: "Community technological adoption initiative under 'Andean Cyberpunk' aesthetics. Integration of AgroTech solutions, Linux, and SEO/Social strategies focused on rural tech education.",
          image: imgSoberaniaFusa,
          badges: ["AgroTech", "Community", "Andean Cyberpunk"],
          icon: <ShieldCheck className="w-6 h-6" />
        },
        {
          title: "Hybrid GPU Orchestration & Self-Hosted Servers",
          desc: "Deployment and configuration of hybrid servers on Debian (AMD for display, NVIDIA for AI compute). Management of reverse proxies (Nginx/Apache), secure tunnels, and distributed computing networks (Mesh).",
          image: imgOrquestacionGpu,
          badges: ["Debian Server", "NVIDIA Compute", "VPN Mesh"],
          icon: <Layers className="w-6 h-6" />
        },
        {
          title: "Local Generative AI Implementation (Gemma 3 & RAG)",
          desc: "Integration of advanced multimodal models (like Gemma 3) using the google-genai SDK in Python. Development of local RAG systems that process broad contexts securely, privately, and cloud-independent.",
          image: imgGemmaLocal,
          badges: ["Gemma 3", "Python / SDK", "Local GenAI"],
          icon: <Zap className="w-6 h-6" />
        }
      ],
      ai_adv: [
        {
          title: "MetaSearcher: Syntactic Graphs",
          desc: "Development of an agentic AI architecture for the analysis of 220,000+ local records. Implementation of syntactic relationship graphs for intellectual asset discovery and business knowledge flow optimization.",
          icon: <Network className="text-primary w-5 h-5" />
        },
        {
          title: "Telegram Command Agents",
          desc: "Remote command interfaces via Telegram bots for real-time monitoring and control of critical infrastructures and IoT sensors, facilitating technical management from any location.",
          icon: <MessageSquare className="text-accent w-5 h-5" />
        },
        {
          title: "Local AI & Data Auditing",
          desc: "Implementation of LLM models (Ollama/GGUF) on local hardware for natural language processing and immutable auditing, ensuring absolute privacy of institutional information.",
          icon: <Database className="text-success w-5 h-5" />
        }
      ],
      gallery: [
        { title: "Agro-Meteorological Station", img: imgEstacionAgro },
        { title: "WEEE System", img: imgSistemaRaee },
        { title: "Industrial IoT Monitoring", img: imgMonitoreoIot },
        { title: "Encrypted Mesh Network", img: imgRedMesh }
      ],
      download: "Download Executive Brochure (PDF)",
      back: "← Back",
      results: "Real Evidence and Results"
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-foreground selection:bg-primary/30">
      <Header language={language} toggleLanguage={toggleLanguage} />

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]"></div>
      </div>

      <main id="portfolio-inicio" className="pt-24 pb-20 container mx-auto px-4 lg:px-8 relative z-10 scroll-mt-24">
        <Button 
          variant="ghost" 
          className="mb-8 text-muted-foreground hover:text-primary transition-colors"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> {t.back}
        </Button>

        {/* Hero Section - Immediately visible */}
        <section id="portfolio-hero" className="mb-24 animate-fade-in">
          <div className="max-w-4xl space-y-6">
            <Badge variant="outline" className="border-primary/30 text-primary uppercase tracking-[0.2em] px-4 py-1">
              {t.hero.tagline}
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-none">
              <span className="gradient-text-primary">{t.hero.title}</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-muted-foreground tracking-tight">
              {t.hero.subtitle}
            </p>
            <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-2xl">
              {t.hero.desc}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row flex-wrap gap-4">
              <Button className="cta-primary h-12 md:h-14 px-6 md:px-8 text-base md:text-lg w-full sm:w-auto" onClick={() => window.open('/portfolio-download.html', '_blank')}>
                <FileDown className="mr-2 w-5 h-5 md:w-6 md:h-6" /> {t.download}
              </Button>
              <Button variant="outline" className="h-12 md:h-14 px-6 md:px-8 text-base md:text-lg border-white/10 hover:bg-white/5 w-full sm:w-auto" onClick={() => {
                 const el = document.getElementById('contacto');
                 if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}>
                {t.sections.contact}
              </Button>
            </div>
          </div>
        </section>

        {/* Academic Profile */}
        <section className="mb-24">
          <div className="tech-border p-8 md:p-12 rounded-[2rem] bg-muted/20 backdrop-blur-md border-white/5 flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-4xl font-black mb-8 flex items-center gap-4 uppercase tracking-tighter">
              <Award className="text-accent w-8 h-8 md:w-10 md:h-10" /> {t.sections.background}
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed font-light">
                {t.bio}
              </p>
              
<div className="flex flex-wrap justify-center gap-3 md:gap-4 pt-4">
                  <Badge className="bg-violet-500/20 text-violet-400 border-violet-500/30 py-2 px-4 text-xs md:text-sm font-bold uppercase tracking-widest">SENA // Smart Contracts</Badge>
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 py-2 px-4 text-xs md:text-sm font-bold uppercase tracking-widest">SENA // Gestión Tech</Badge>
                  <Badge className="bg-primary/20 text-primary border-primary/30 py-2 px-4 text-xs md:text-sm font-bold uppercase tracking-widest">Consultoría Senior</Badge>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 py-2 px-4 text-xs md:text-sm font-bold uppercase tracking-widest">MinTIC // AI Bootcamp</Badge>
                  <Badge className="bg-success/20 text-success border-success/30 py-2 px-4 text-xs md:text-sm font-bold uppercase tracking-widest">UN // Full Stack</Badge>
                  <Badge className="bg-accent/20 text-accent border-accent/30 py-2 px-4 text-xs md:text-sm font-bold uppercase tracking-widest">PUJ // Maestro Artes</Badge>
                  <Badge className="bg-warning/20 text-warning border-warning/30 py-2 px-4 text-xs md:text-sm font-bold uppercase tracking-widest">British Council // IELTS B2</Badge>
               </div>

              <div className="grid sm:grid-cols-2 gap-6 pt-8 max-w-2xl mx-auto">
                 <div className="p-6 rounded-2xl bg-background/60 border border-white/10 shadow-xl">
                    <h4 className="font-black text-xs uppercase tracking-[0.3em] text-accent mb-3">Enfoque de Carrera</h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">Arquitectura de infraestructuras HPC para Biotecnología e investigación científica de alto nivel.</p>
                 </div>
                 <div className="p-6 rounded-2xl bg-background/60 border border-white/10 shadow-xl">
                    <h4 className="font-black text-xs uppercase tracking-[0.3em] text-primary mb-3">Soberanía Digital</h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">Implementación de mallas VPN Mesh e IA local para proteger el conocimiento institucional.</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applied Research Projects */}
        <section className="mb-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-4">
            <Microscope className="text-primary w-6 h-6 md:w-8 md:h-8" /> {t.sections.research}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {t.pillars.map((pillar, idx) => (
              <Card key={idx} className={`tech-border overflow-hidden group hover-lift transition-all duration-500 relative min-h-[450px] md:min-h-[500px] flex flex-col justify-end ${idx === t.pillars.length - 1 && t.pillars.length % 2 !== 0 ? 'md:col-span-2' : ''}`}>
                <div className="absolute inset-0 z-0 bg-black">
                  <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/90 to-transparent"></div>
                </div>
                
                <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-end">
                  <div className="p-2 md:p-3 bg-primary/20 backdrop-blur-md rounded-xl text-primary mb-4 w-fit border border-primary/30 shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl md:text-3xl font-black text-white mb-3 tracking-tighter">{pillar.title}</h3>
                  <p className="text-zinc-300 leading-relaxed text-sm md:text-base mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-500 font-light">
                    {pillar.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pillar.badges.map((b, i) => (
                      <Badge key={i} variant="secondary" className="bg-slate-200/90 text-slate-900 hover:bg-white text-[10px] md:text-xs font-bold uppercase tracking-widest border-none backdrop-blur-md transition-colors shadow-lg">
                        {b}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* AI & Sovereignty */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-4">
                <Terminal className="text-accent w-6 h-6 md:w-8 md:h-8" /> {t.sections.ai_sovereignty}
              </h2>
              <div className="space-y-4 md:space-y-6">
                {t.ai_adv.map((item, idx) => (
                  <div key={idx} className="flex gap-4 md:gap-6 p-5 md:p-6 rounded-2xl bg-muted/10 border border-white/5 hover:bg-muted/20 transition-all duration-300">
                    <div className="mt-1 flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
               <div className="tech-border rounded-3xl overflow-hidden aspect-square relative group max-w-md mx-auto">
                  <img src={imgMetabuscador} alt="Soberanía Tecnológica" className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                     <div className="text-center space-y-4">
                        <Network className="w-12 h-12 md:w-20 md:h-20 text-primary mx-auto animate-pulse" />
                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter">+220,000 Registros Procesados</h3>
                        <p className="text-[10px] md:text-sm text-muted-foreground uppercase tracking-widest">Base de Conocimiento Agéntica</p>
                     </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
               </div>
            </div>
          </div>
        </section>

        {/* Results Gallery */}
        <section className="mb-24">
           <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center uppercase tracking-widest">{t.results}</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {t.gallery.map((item, idx) => (
                <div key={idx} className="group relative aspect-video rounded-xl overflow-hidden border border-white/5">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                     <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white">{item.title}</span>
                  </div>
                </div>
              ))}
           </div>
        </section>

        {/* Contact CTA */}
        <section id="contacto" className="text-center py-12 md:py-20 bg-muted/10 rounded-[2rem] md:rounded-[3rem] border border-white/5 relative overflow-hidden">
           <div className="absolute inset-0 pointer-events-none opacity-10">
              <Network className="w-full h-full" />
           </div>
           <div className="relative z-10 space-y-6 md:space-y-8 max-w-2xl mx-auto px-6">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">{t.sections.contact}</h2>
              <p className="text-lg md:text-xl text-muted-foreground">¿Interesado en implementar infraestructura crítica o auditoría de datos en su organización?</p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                 <Button className="cta-primary h-14 px-10 text-lg w-full sm:w-auto" onClick={() => window.location.href='mailto:managementandplanning@masterlukasmoyano.com'}>
                    <Mail className="mr-2 w-5 h-5" /> Enviar Correo
                 </Button>
                 <Button variant="outline" className="h-14 px-10 text-lg border-white/10 w-full sm:w-auto" onClick={() => window.open('https://linkedin.com/in/lukasmoyano', '_blank')}>
                    <Linkedin className="mr-2 w-5 h-5" /> LinkedIn
                 </Button>
              </div>
           </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-tighter gradient-text-primary">_-IR-_</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Productions</span>
           </div>
           <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">
              <a href="https://github.com/LukasMoyano" className="hover:text-primary transition-colors">Github</a>
              <a href="#" className="hover:text-primary transition-colors">Legal</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
           </div>
           <p className="text-[10px] text-muted-foreground/50 uppercase tracking-widest text-center md:text-right">© 2026 Lukas Moyano Morales. Soberanía Tecnológica.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
