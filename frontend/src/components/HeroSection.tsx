/**
 * @file HeroSection.tsx
 * @description Componente Hero (Pantalla Principal).
 * Punto de entrada visual y semántico del sitio.
 *
 * SEO Note:
 * - Contiene el H1 principal, la etiqueta más importante para el SEO on-page.
 * - Define la propuesta de valor inmediata con palabras clave de alto impacto.
 */

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-background.jpg';

interface HeroSectionProps {
  language: 'es' | 'en';
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const navigate = useNavigate();
  // ============================================================================
  // CONTENIDO HERO (Propuesta de Valor)
  // ============================================================================
  const content = {
    es: {
      title: "_-IR-_",
      title2: "Productions",
      subtitle: "Fusionando Arte, Ciencia y Tecnología",
      description: "Transformamos el Agro y las Empresas del Futuro con soluciones digitales integrales que conectan sabiduría ancestral con innovación de vanguardia.",
      cta1: "Talleres Agro",
      cta2: "Workstations IA",
      slogan: "Hacemos lo que queremos, porque amamos lo que hacemos. Funk with us!",
      impact: "Alineados con PDM de Cundinamarca • PDD Cundinamarca • ODS",
      funnel: [
        {
          title: "Empresas & Gobierno",
          subtitle: "Soberanía Tecnológica & Cómputo",
          description: "Elimina OPEX en licencias SaaS y fuga de datos con IA Local On-Premise, estaciones HPC y Smart Contracts auditables.",
          links: [
            { label: "Workstations HPC/IA", href: "/servicios/hpc-builder", external: false },
            { label: "Blockchain Soberano", href: "/servicios/blockchain", external: false },
          ],
        },
        {
          title: "Rescate Fénix & Digitalización",
          subtitle: "Memoria Análoga & Hardware Soberano",
          description: "Digitalización profesional de cintas VHS/Beta y recuperación de equipos de cómputo antiguos mediante GNU/Linux.",
          links: [
            { label: "Visitar Rescate Fénix", href: "https://fusacompufenix.netlify.app", external: true },
          ],
        },
        {
          title: "Agro-Tech & Arte Digital",
          subtitle: "Nodos IoT & Experiencias Vivas",
          description: "Democratización tecnológica en el campo con CultivaTech (ESP32) y experiencias interactivas gamificadas de alto impacto.",
          links: [
            { label: "Talleres Agro-Innovación", href: "/talleres-agro-innovacion", external: false },
            { label: "Experiencias BTL/ATL", href: "/experiencias-btl-atl", external: false },
          ],
        },
      ]
    },
    en: {
      title: "_-IR-_ ",
      title2: "Productions",
      subtitle: "Fusing Art, Science and Technology",
      description: "We transform Agriculture and Future Businesses with integral digital solutions that connect ancestral wisdom with cutting-edge innovation.",
      cta1: "Explore Agro Workshops",
      cta2: "Discover AI Workstations",
      slogan: "We do what we want, because we love what we do. Funk with us!",
      impact: "Aligned with PDM of Cundinamarca • PDD Cundinamarca • SDGs",
      funnel: [
        {
          title: "Businesses & Government",
          subtitle: "Tech Sovereignty & Compute",
          description: "Cut SaaS license OPEX and data leakage with on-premise local AI, HPC workstations and auditable Smart Contracts.",
          links: [
            { label: "HPC/AI Workstations", href: "/servicios/hpc-builder", external: false },
            { label: "Sovereign Blockchain", href: "/servicios/blockchain", external: false },
          ],
        },
        {
          title: "Rescue Fénix & Digitization",
          subtitle: "Analog Memory & Sovereign Hardware",
          description: "Professional digitization of VHS/Beta tapes and recovery of old computers through GNU/Linux.",
          links: [
            { label: "Visit Rescue Fénix", href: "https://fusacompufenix.netlify.app", external: true },
          ],
        },
        {
          title: "Agro-Tech & Digital Art",
          subtitle: "IoT Nodes & Living Experiences",
          description: "Technological democratization in the field with CultivaTech (ESP32) and high-impact gamified interactive experiences.",
          links: [
            { label: "Agro-Innovation Workshops", href: "/talleres-agro-innovacion", external: false },
            { label: "BTL/ATL Experiences", href: "/experiencias-btl-atl", external: false },
          ],
        },
      ]
    }
  };

  const text = content[language];

  return (
    // Sección principal con ID para navegación
    <section
      id={language === 'es' ? 'inicio' : 'home'}
      className="relative min-h-screen flex items-center justify-center circuit-pattern hero-gradient overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-transparent to-background/60" />

      {/* Animated Circuit Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 border border-primary/30 rounded-lg animate-pulse-slow" />
      <div className="absolute bottom-32 right-16 w-12 h-12 bg-accent/20 rounded-full animate-float" />
      <div className="absolute top-1/3 right-1/4 w-8 h-8 border-2 border-tech-green/40 rotate-45 animate-circuit-glow" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 lg:px-8">
        {/* Título Principal (H1): Jerarquía máxima de SEO.
            Debe contener el nombre de la marca o la palabra clave principal. */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in break-words">
          <span className="gradient-text-primary block">
            {text.title}
          </span>
          <span className="gradient-text-primary block">
            {text.title2}
          </span>
          <span className="gradient-text-gold text-4xl md:text-5xl lg:text-6xl block mt-2">
            {text.subtitle}
          </span>
        </h1>

        {/* Descripción: Resumen semántico para snippets de búsqueda */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-in-right">
          {text.description}
        </p>

        {/* Botones de Llamada a la Acción (CTA) - Navegación interna */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-scale-in">
          <Button
            size="lg"
            className="cta-primary hover-lift group"
            onClick={() => navigate('/talleres-agro-innovacion')}
          >
            {text.cta1}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="hover-lift group"
            onClick={() => navigate('/servicios/hpc-builder')}
          >
            {text.cta2}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Funnel de 3 segundos: segmentación DIPN (1 línea = 1 cliente + 1 problema + 1 promesa) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mt-12 text-left">
          {text.funnel.map((card) => (
            <div
              key={card.title}
              className="bg-card/60 backdrop-blur-md border border-border hover:border-primary/50 transition-all rounded-lg p-5 text-left hover-lift"
            >
              <h3 className="text-lg font-bold text-foreground mb-1">{card.title}</h3>
              <p className="text-xs uppercase tracking-widest text-accent mb-3">{card.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{card.description}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {card.links.map((l) =>
                  l.external ? (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-tech-green hover:text-primary font-medium inline-flex items-center gap-1 transition-colors"
                    >
                      {l.label} <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <Link
                      key={l.href}
                      to={l.href}
                      className="text-sm text-tech-green hover:text-primary font-medium inline-flex items-center gap-1 transition-colors"
                    >
                      {l.label} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Impact Alignment */}
        <div className="mb-8 animate-fade-in">
          <p className="text-sm text-tech-green/80 font-medium tracking-wider uppercase">
            {text.impact}
          </p>
        </div>

        {/* Slogan */}
        <div className="animate-fade-in">
          <p className="text-lg text-accent italic font-medium">
            "{text.slogan}"
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-secondary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute top-1/4 left-8 hidden lg:block">
        <div className="w-32 h-32 border border-primary/20 rounded-lg transform rotate-12 animate-float">
          <div className="w-full h-full border border-accent/30 rounded-lg transform -rotate-6" />
        </div>
      </div>

      <div className="absolute bottom-1/4 right-8 hidden lg:block">
        <div className="w-24 h-24 bg-tech-green/10 rounded-full animate-pulse-slow flex items-center justify-center">
          <div className="w-12 h-12 border-2 border-tech-green/40 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;