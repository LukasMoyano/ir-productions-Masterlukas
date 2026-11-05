/**
 * @file ExperienciasGamificadasSection.tsx
 * @description Sección de Experiencias Gamificadas BTL/ATL (Lluvia de Basura + ConSu-Man).
 * Unifica la oferta comercial de gamificación: activaciones BTL externas de marca y
 * endomarketing ATL interno, con telemetría ESG en vivo y operación 100% offline.
 * Estilo: Cyberpunk Andino (tokens del design system: --primary rojo, --accent dorado,
 * --tech-green turquesa, circuit-pattern).
 */

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Gamepad2,
  Trash2,
  BarChart3,
  WifiOff,
  Users,
  Building2,
  Recycle,
  ArrowRight,
} from "lucide-react";

interface ExperienciasGamificadasSectionProps {
  language: 'es' | 'en';
}

const ExperienciasGamificadasSection = ({ language }: ExperienciasGamificadasSectionProps) => {
  const content = {
    es: {
      badge: "Gamificación BTL · ATL",
      title: "Experiencias Gamificadas",
      subtitle: "Lluvia de Basura + ConSu-Man",
      description:
        "Kioscos interactivos por visión por computador y arcade táctil para capturar leads, activar marcas y capacitar equipos. Operación 100% offline, hardware upcycled y métricas ESG en vivo.",
      games: [
        {
          icon: Trash2,
          name: "Lluvia de Basura",
          tag: "Kiosco BTL · OpenCV Zero-Touch",
          desc: "Juego educativo-sostenible controlado con la mano (sin contacto): caneca inteligente, 36 residuos, scoreboard en vivo y telemetría ESG con curva de impacto ambiental.",
          bullets: ["Captación de leads", "Perfilación conductual", "Reporte ESG exportable", "100% Offline"],
        },
        {
          icon: Gamepad2,
          name: "ConSu-Man",
          tag: "Arcade Táctil · Swipe + Cruceta",
          desc: "Juego tipo arcade híbrido (swipe libre o cruceta desplegable en móvil) para ferias, plazas y stands. Capacitación interna gamificada con integración de cultura organizacional.",
          bullets: ["RTL híbrido táctil", "A/B testing", "Endomarketing ATL", "Multiplataforma"],
        },
      ],
      segments: [
        {
          icon: Building2,
          title: "BTL Externo",
          desc: "Activación de marca en eventos y plazas: captación de leads, perfilación conductual y estudios de mercado defendibles.",
          icon_color: "text-primary",
        },
        {
          icon: Users,
          title: "ATL · Endomarketing",
          desc: "Capacitaciones corporativas gamificadas y cultura organizacional: educación interna con métricas de participación certificables.",
          icon_color: "text-tech-green",
        },
      ],
      metrics: [
        { label: "Operación Offline", value: "100%" },
        { label: "Residuos Jugables", value: "36" },
        { label: "Licitaciones Diferenciadas", value: "Anti-SaaS" },
      ],
      cta: "Pedir Demo BTL/ATL",
      cta_secondary: "Ver Carnet Fénix",
    },
    en: {
      badge: "BTL · ATL Gamification",
      title: "Gamified Experiences",
      subtitle: "Lluvia de Basura + ConSu-Man",
      description:
        "Computer-vision kiosks and touch arcade experiences to capture leads, activate brands and train teams. 100% offline operation, upcycled hardware and live ESG metrics.",
      games: [
        {
          icon: Trash2,
          name: "Lluvia de Basura",
          tag: "BTL Kiosk · OpenCV Zero-Touch",
          desc: "Sustainability driven educational game controlled with the hand (touchless): smart bin, 36 debris items, live scoreboard and ESG telemetry with environmental impact curve.",
          bullets: ["Lead capture", "Behavioral profiling", "Exportable ESG report", "100% Offline"],
        },
        {
          icon: Gamepad2,
          name: "ConSu-Man",
          tag: "Touch Arcade · Swipe + D-Pad",
          desc: "Hybrid arcade game (free swipe or deployable d-pad on mobile) for fairs, plazas and stands. Gamified internal training with organizational culture integration.",
          bullets: ["Hybrid touch", "A/B testing", "LTL Endomarketing", "Multiplatform"],
        },
      ],
      segments: [
        {
          icon: Building2,
          title: "External BTL",
          desc: "Brand activation at events and plazas: lead capture, behavioral profiling and defensible market research.",
          icon_color: "text-primary",
        },
        {
          icon: Users,
          title: "ATL · Endomarketing",
          desc: "Gamified corporate training and organizational culture: internal education with certifiable participation metrics.",
          icon_color: "text-tech-green",
        },
      ],
      metrics: [
        { label: "Offline Operation", value: "100%" },
        { label: "Playable Debris", value: "36" },
        { label: "Bidding Differentiator", value: "Anti-SaaS" },
      ],
      cta: "Request BTL/ATL Demo",
      cta_secondary: "Check Fénix",
    },
  };

  const text = content[language];
  const whatsappUrl = "https://wa.me/573197919742?text=" + encodeURIComponent(
    language === 'es'
      ? "Hola Lukas 👋 Quiero una demo de las Experiencias Gamificadas BTL/ATL (Lluvia de Basura / ConSu-Man) para mi marca o equipo."
      : "Hi Lukas 👋 I'd like a BTL/ATL Gamified Experiences demo (Lluvia de Basura / ConSu-Man) for my brand or team."
  );

  return (
    <section
      id={language === 'es' ? 'experiencias' : 'experiences'}
      className="py-20 circuit-pattern"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Encabezado de Sección */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            {text.badge}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-3">
            {text.title}
          </h2>
          <p className="text-lg text-tech-green font-medium mb-4">{text.subtitle}</p>
          <p className="text-muted-foreground max-w-3xl mx-auto">{text.description}</p>
        </div>

        {/* Tarjetas de Videojuegos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {text.games.map((game) => (
            <Card
              key={game.name}
              className="group bg-card border-primary/20 hover:border-primary/50 hover-lift transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center glow-red">
                    <game.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{game.name}</h3>
                    <Badge className="mt-1 bg-tech-green/10 text-tech-green border-tech-green/30 font-semibold">
                      {game.tag}
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">{game.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {game.bullets.map((b) => (
                    <div
                      key={b}
                      className="flex items-center gap-2 text-sm text-foreground/80 bg-secondary/5 rounded-lg px-3 py-2 border border-border/60"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {b}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Segmentos BTL / ATL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {text.segments.map((seg) => (
            <div
              key={seg.title}
              className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl hover:border-secondary/50 transition-colors"
            >
              <seg.icon className={`w-8 h-8 shrink-0 mt-1 ${seg.icon_color}`} />
              <div>
                <h3 className="text-lg font-bold mb-1">{seg.title}</h3>
                <p className="text-sm text-muted-foreground">{seg.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Métricas en vivo */}
        <div className="grid grid-cols-3 gap-4 mb-12 text-center">
          {text.metrics.map((m) => (
            <div key={m.label} className="p-4 bg-card/60 border border-border rounded-lg">
              <div className="text-2xl md:text-3xl font-black text-accent">{m.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{m.label}</div>
            </div>
            ))}
          </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="cta-primary hover-lift group" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {text.cta}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/experiencias-btl-atl">
              <BarChart3 className="mr-2 w-5 h-5" />
              {text.cta_secondary}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperienciasGamificadasSection;
