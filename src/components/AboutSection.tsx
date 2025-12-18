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
      subtitle: "Artista Visual • Pedagogo • Tecnólogo",
      description:
        "Lukas Moyano y _-IR-_ Productions transformamos el Agro y las Organizaciones a través de la fusión Arte+Ciencia+Tecnología, con un enfoque en innovación accesible, sostenibilidad y la sabiduría ancestral aplicada al mundo moderno.",
      bioTitle: "Perfil del Fundador",
      bio: "En la intersección donde el Silicio encuentra al Carbono, opero como un arquitecto de realidades híbridas. Mi origen en las Artes Visuales me enseñó a ver lo invisible, pero fue con los principios de la Ingeniería de Software, el entender el funcionamiento de la Inteligencia Artificial y la Filosofía de Código Abierto que me dieron las herramientas para poder codificar y decodificar el lenguaje con las maquinas y la sabiduría pragmática de pensar en soluciones reales para el campo usando tecnologia actual.\n\nDesde mi base en Fusagasugá, lidero una 'rebelión tecnológica' constructiva. Utilizo sensores IoT como extensiones nerviosas de la tierra y modelos de IA como oráculos climáticos, todo bajo una filosofía de código abierto y soberanía. En _-IR-_ Productions, perseguimos la idea de no vendemos cajas negras; forjamos llaves maestras. Mi misión es hackear la brecha digital, empoderando al agricultor con herramientas de ciencia ficción que funcionan hoy, asegurando que la tecnología sirva a la vida y no al revés.",
      expertiseTitle: "Áreas de Expertiza",
      expertise: [
        {
          icon: Palette,
          title: "Arte & Diseño",
          items: ["Dirección de Arte", "Narrativa Visual", "Diseño UX/UI", "Producción Audiovisual", "3D Mapping"]
        },
        {
          icon: FlaskConical,
          title: "Ciencia & Pedagogía",
          items: ["Diseño Curricular", "Transferencia de Conocimiento", "Investigación Aplicada", "Resolución de Problemas", "Ética en IA"]
        },
        {
          icon: Cpu,
          title: "Tecnología & Desarrollo",
          items: ["IA/ML (TensorFlow, PyTorch)", "React, .NET Core", "IoT & Sensores de Campo", "HPC/GPUs", "OpenCV, NLP, Hugging Face"]
        },
        {
          icon: Sprout,
          title: "Impacto Social",
          items: ["Alfabetización Digital", "Desarrollo Rural", "AgroTech", "Inclusión Tecnológica", "Sostenibilidad"]
        },
      ],
      educationTitle: "Educación y Certificaciones",
      education: [
        "Pontificia Universidad Javeriana – Maestría en Artes Visuales, Expresión Audiovisual (2019)",
        "MinTICs & Atenea-UNAL – IA Avanzada, HPC, Desarrollo Web y Apps (2023–2024)",
        "Uniminuto – Pedagogía para Profesionales no Licenciados (2021)",
        "AcademLo – Desarrollo Web con React JS (2023)",
        "Colsubsidio CET – Big Data y Análisis de Datos (2022)",
      ],
      slogan:
        "Hacemos lo que queremos, porque amamos lo que hacemos, Funk with us!",
    },
    en: {
      title: "Who We Are",
      subtitle: "Visual Artist • Educator • Technologist",
      description: "Lukas Moyano and _-IR-_ Productions transform agriculture and organizations through the fusion of Art+Science+Technology, focusing on accessible innovation, sustainability, and ancestral wisdom applied to the modern world.",
      bioTitle: "Founder Profile",
      bio: "At the intersection where silicon meets carbon, I operate as an architect of hybrid realities. My background in Visual Arts taught me to see the invisible, but it was software engineering and Artificial Intelligence that gave me the tools to build it. I am not just a developer; I am a translator between the complexity of algorithms (Deep Learning, Computer Vision) and the pragmatic wisdom of the countryside.\n\nFrom my base in Fusagasugá, I lead a constructive 'technological rebellion'. I use IoT sensors as nervous extensions of the earth and AI models as climatic oracles, all under a philosophy of open source and sovereignty. At _-IR-_ Productions, we don't sell black boxes; we forge master keys. My mission is to hack the digital divide, empowering farmers with science fiction tools that work today, ensuring that technology serves life and not the other way around.",
      expertiseTitle: "Areas of Expertise",
      expertise: [
        {
          icon: Palette,
          title: "Art & Design",
          items: ["Art Direction", "Visual Storytelling", "UX/UI Design", "Audiovisual Production", "3D Mapping"]
        },
        {
          icon: FlaskConical,
          title: "Science & Pedagogy",
          items: ["Curriculum Design", "Knowledge Transfer", "Applied Research", "Problem Solving", "AI Ethics"]
        },
        {
          icon: Cpu,
          title: "Technology & Development",
          items: ["AI/ML (TensorFlow, PyTorch)", "React, .NET Core", "IoT & Field Sensors", "HPC/GPUs", "OpenCV, NLP, Hugging Face"]
        },
        {
          icon: Sprout,
          title: "Social Impact",
          items: ["Digital Literacy", "Rural Development", "AgroTech", "Tech Inclusion", "Sustainability"]
        },
      ],
      educationTitle: "Education and Certifications",
      education: [
        "Pontificia Universidad Javeriana – Master in Visual Arts, Audiovisual Expression (2019)",
        "Uniminuto – Pedagogy for Non-Licensed Professionals (2021)",
        "AcademLo – Web Development with React JS (2023)",
        "Colsubsidio CET – Big Data and Data Analysis (2022)",
        "MinTICs & Atenea-UNAL – Advanced AI, HPC, Web Development (2023–2024)"
      ],
      slogan: "We do what we want, because we love what we do, Funk with us!",
    },
  };

  const text = content[language];

  return (
    <section className="py-20 bg-card">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
