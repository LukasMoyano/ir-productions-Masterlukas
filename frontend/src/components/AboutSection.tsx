import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Cpu, FlaskConical, Sprout, GraduationCap } from "lucide-react";
import lukasPortrait from "@/assets/ProfilePic2025_0001_original.png";

interface AboutSectionProps {
  language: "es" | "en";
}

const AboutSection = ({ language }: AboutSectionProps) => {
  const content = {
    es: {
      title: "Quiénes Somos",
      subtitle: "Consultor en Transformación Digital • Maestro en Artes Visuales",
      description:
        "Lukas Moyano y _-IR-_ Productions lideramos la adopción de soberanía tecnológica en el Agro y las Organizaciones. Fusionamos Arte, Ciencia y Web3 para crear infraestructuras inmutables y resilientes.",
      bioTitle: "Perfil del Fundador",
      bio: "En la intersección donde el Silicio encuentra al Carbono, opero como un arquitecto de realidades híbridas. Mi origen en las Artes Visuales me enseñó a ver lo invisible, pero fue la ingeniería de software y la adopción de IA soberana lo que me permitió codificar soluciones reales para el mundo físico.\n\nDesde Fusagasugá, lidero el movimiento de 'Soberanía Tecnológica'. Implemento redes VPN Mesh privadas, modelos de IA locales (sin dependencia de la nube) y registros inmutables mediante Smart Contracts. En _-IR-_ Productions, no vendemos 'Software as a Service'; forjamos 'Freedom as a Service'. Mi misión es hackear la brecha digital, empoderando al agricultor y al empresario con herramientas de 'Cyberpunk Andino' que garantizan la propiedad absoluta de sus datos y procesos.",
      expertiseTitle: "Áreas de Expertiza",
      expertise: [
        {
          icon: Cpu,
          title: "Soberanía Tecnológica",
          items: ["IA Local (Ollama/GGUF)", "Infraestructura On-Premise", "Redes VPN Mesh Privadas", "Linux CLI & Bash Experto", "Privacidad de Datos"]
        },
        {
          icon: FlaskConical,
          title: "Web3 & Blockchain",
          items: ["Smart Contracts (Solidity)", "Auditoría Inmutable de Datos", "Integración IoT/Blockchain", "Ethereum Network", "Optimización de Gas"]
        },
        {
          icon: Sprout,
          title: "AgroTech & IoT",
          items: ["CultivaTech ColombIA", "Nodos de Monitoreo ESP32", "Automatización de Cultivos", "Sensores de Alta Precisión", "Resiliencia Climática"]
        },
        {
          icon: Palette,
          title: "Arte & Estrategia",
          items: ["Cyberpunk Andino Estética", "Consultoría Transformación", "Diseño de Sistemas Complejos", "Narrativa de Marca Soberana", "Full Stack (React/Django)"]
        },
      ],
      educationTitle: "Educación y Certificaciones",
      education: [
        "Pontificia Universidad Javeriana – Maestro en Artes Visuales, Expresión Audiovisual (2019)",
        "Universidad Nacional de Colombia – Diplomado en Desarrollo Web y Apps (2023)",
        "MinTICs & UNAL – IA Avanzada, HPC y Desarrollo Full Stack (2023–2024)",
        "Consultoría en Transformación Digital & Adopción de IA (Desde 2024)",
        "IELTS B2 – Inglés Técnico Profesional – British Council (2024)",
        "SENA – Desarrollador de Smart Contracts / Solidity (Certificación 2026)",
      ],
      slogan:
        "Infraestructura Soberana para un Futuro Inmutable. Funk with us!",
    },
    en: {
      title: "Who We Are",
      subtitle: "Digital Transformation Consultant • Master in Visual Arts",
      description: "Lukas Moyano and _-IR-_ Productions lead the adoption of technological sovereignty in Agriculture and Organizations. We merge Art, Science, and Web3 to create immutable and resilient infrastructures.",
      bioTitle: "Founder Profile",
      bio: "At the intersection where Silicon meets Carbon, I operate as an architect of hybrid realities. My background in Visual Arts taught me to see the invisible, but it was software engineering and sovereign AI adoption that allowed me to code real solutions for the physical world.\n\nFrom Fusagasugá, I lead the 'Technological Sovereignty' movement. I implement private Mesh VPN networks, local AI models (cloud-independent), and immutable records through Smart Contracts. At _-IR-_ Productions, we don't sell 'Software as a Service'; we forge 'Freedom as a Service'. My mission is to hack the digital divide, empowering farmers and entrepreneurs with 'Andean Cyberpunk' tools that guarantee absolute ownership of their data and processes.",
      expertiseTitle: "Areas of Expertise",
      expertise: [
        {
          icon: Cpu,
          title: "Tech Sovereignty",
          items: ["Local AI (Ollama/GGUF)", "On-Premise Infrastructure", "Private Mesh VPNs", "Linux CLI & Bash Expert", "Data Privacy"]
        },
        {
          icon: FlaskConical,
          title: "Web3 & Blockchain",
          items: ["Smart Contracts (Solidity)", "Immutable Data Auditing", "IoT/Blockchain Integration", "Ethereum Network", "Gas Optimization"]
        },
        {
          icon: Sprout,
          title: "AgroTech & IoT",
          items: ["CultivaTech ColombIA", "ESP32 Monitoring Nodes", "Crop Automation", "High Precision Sensors", "Climate Resilience"]
        },
        {
          icon: Palette,
          title: "Art & Strategy",
          items: ["Andean Cyberpunk Aesthetic", "Transformation Consulting", "Complex Systems Design", "Sovereign Brand Narrative", "Full Stack (React/Django)"]
        },
      ],
      educationTitle: "Education and Certifications",
      education: [
        "Pontificia Universidad Javeriana – Master in Visual Arts (2019)",
        "National University of Colombia – Diploma in Web & Apps Development (2023)",
        "MinTIC – Advanced Artificial Intelligence (2023–2024)",
        "Digital Transformation & AI Adoption Consulting (Since 2024)",
        "IELTS B2 – Professional Technical English – British Council (2024)",
        "SENA – Smart Contract Developer / Solidity (2026 Certification)",
      ],
      slogan: "Sovereign Infrastructure for an Immutable Future. Funk with us!",
    },
  };

  const text = content[language];

  return (
    <section
      id={language === 'es' ? 'equipo' : 'team'}
      className="py-20 bg-card scroll-mt-16"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            _-IR-_ Productions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary">
            {text.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
            <div className="relative overflow-hidden rounded-2xl glow-red">
              <img
                src={lukasPortrait}
                alt="Lukas Moyano"
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Lukas Moyano
                </h3>
                <p className="text-accent font-medium">{text.subtitle}</p>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {text.description}
            </p>
            
            <div className="p-6 bg-muted/50 rounded-xl border border-accent/20">
              <blockquote className="text-xl text-accent italic font-medium text-center">
                "{text.slogan}"
              </blockquote>
            </div>
          </div>
        </div>

        {/* Founder Profile (Bio) */}
        <div className="mb-20 animate-fade-in">
          <h3 className="text-3xl font-bold mb-8 text-center">{text.bioTitle}</h3>
          <div className="bg-card p-8 rounded-2xl shadow-lg border border-border/50">
            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
              {text.bio}
            </p>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center">{text.expertiseTitle}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {text.expertise.map((area, index) => (
              <Card key={index} className="tech-border hover-lift group h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <area.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-foreground">
                    {area.title}
                  </h4>
                  <ul className="space-y-2">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-accent font-bold mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-3">
              <GraduationCap className="w-6 h-6 text-accent" />
              {text.educationTitle}
            </h3>
            <div className="bg-secondary/5 rounded-2xl p-6 border border-secondary/10">
              <ul className="space-y-4">
                {text.education.map((edu, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="mt-1 min-w-[6px] h-1.5 rounded-full bg-accent" />
                    <span className="text-muted-foreground">{edu}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
