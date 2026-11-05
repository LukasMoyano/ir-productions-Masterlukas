/**
 * @file ExperienciasBTLATL.tsx
 * @description Landing dedicada de Experiencias Gamificadas BTL/ATL.
 * Une Lluvia de Basura (Kiosco BTL OpenCV) + ConSu-Man (Arcade táctil) con Fénix
 * dentro del ecosistema comercial de IR Nexus, con métricas ESG y CTA por segmento.
 * Incluye el bloque de posicionamiento B2B (soberanía/anti-SaaS/on-premise) y
 * B2G (STEAM, trazabilidad Web3, gran formato).
 * Estilo: Cyberpunk Andino.
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import ExperienciasGamificadasSection from '@/components/ExperienciasGamificadasSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ShieldCheck,
  Server,
  Network,
  BrainCircuit,
  Sprout,
  Factory,
  Landmark,
  Recycle,
  ArrowLeft,
  ArrowRight,
  MonitorPlay,
} from 'lucide-react';

const ExperienciasBTLATL = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const toggleLanguage = () => setLanguage(prev => (prev === 'es' ? 'en' : 'es'));

  const content = {
    es: {
      back: 'Volver al inicio',
      badge: 'Soluciones a la Medida · Corp & Gov',
      title: 'Seguridad y eficiencia que se miden',
      subtitle: 'Estrategias probadas para maximizar el retorno de inversión y la eficiencia territorial',
      b2b: {
        title: 'Sector Corporativo (B2B)',
        subtitle: 'Blindaje, Soberanía y Reducción de OPEX',
        items: [
          {
            icon: Server,
            title: 'Auditoría & Migración On-Premise',
            desc: 'Eliminación de suscripciones redundantes SaaS; retorno de inversión amortizable a 12 meses.',
            link: '/servicios/hpc-builder',
          },
          {
            icon: BrainCircuit,
            title: 'IA Locales (RAG Privado)',
            desc: 'Inferencia y RAG privado sobre hardware propio sin exponer secretos de negocio.',
            link: '/servicios/hpc-builder',
          },
          {
            icon: Network,
            title: 'Redes Privadas VPN Mesh',
            desc: 'Interconexión de sedes y plantas con cifrado autónomo, independiente de operadores externos.',
            link: '/experiencias-btl-atl',
          },
          {
            icon: MonitorPlay,
            title: 'Gamificación & A/B Neuro-interactivo',
            desc: 'Validación de productos y campañas con motores Canvas de alta velocidad (Lluvia de Basura + ConSu-Man).',
            link: '#experiencias',
          },
        ],
      },
      b2g: {
        title: 'Sector Institucional (B2G)',
        subtitle: 'Desarrollo Territorial, STEAM y Eventos Masivos',
        items: [
          {
            icon: Sprout,
            title: 'Programa "Construye el Guardián de tu Cultivo"',
            desc: 'Talleres STEAM de microcontroladores e IoT para soberanía alimentaria comunitaria.',
            link: '/talleres-agro-innovacion',
          },
          {
            icon: Factory,
            title: 'Producción Cultural de Gran Formato',
            desc: 'Capacidad operativa demostrada para eventos de más de 5,500 asistentes con red de proveedores ATL/BTL.',
            link: '#experiencias',
          },
          {
            icon: Landmark,
            title: 'Estructuración Técnica bajo Normativa',
            desc: 'Rigor administrativo en convocatorias (MinTIC, MinCultura, Resolución 654 y regalías).',
            link: '/experiencias-btl-atl',
          },
          {
            icon: Recycle,
            title: 'Datos Abiertos y Trazabilidad Web3',
            desc: 'Certificación inmutable de variables ambientales y cadenas productivas agrícolas.',
            link: '/servicios/blockchain',
          },
        ],
      },
      fenix_cta: 'Resurrección de Hardware · Operación Fénix (RAEE + Memoria AV)',
      header_manual: true,
    },
    en: {
      back: 'Back to home',
      badge: 'Tailored Solutions · Corp & Gov',
      title: 'Security and measurable efficiency',
      subtitle: "Proven strategies to maximise ROI and territorial efficiency",
      b2b: {
        title: 'Corporate Sector (B2B)',
        subtitle: 'Hardening, Sovereignty & OPEX Reduction',
        items: [
          {
            icon: Server,
            title: 'Audit & On-Premise Migration',
            desc: 'Redundant SaaS subscription elimination; amortisable ROI within 12 months.',
            link: '/servicios/hpc-builder',
          },
          {
            icon: BrainCircuit,
            title: 'Local AI (Private RAG)',
            desc: 'On-premises inference and private RAG without exposing business secrets.',
            link: '/servicios/hpc-builder',
          },
          {
            icon: Network,
            title: 'Private VPN Mesh Networks',
            desc: 'Site and plant interconnection with sovereign encryption, independent from external carriers.',
            link: '/experiencias-btl-atl',
          },
          {
            icon: MonitorPlay,
            title: 'Gamification & Neuro-interactive A/B',
            desc: 'Product and campaign validation with high-speed Canvas engines (Lluvia de Basura + ConSu-Man).',
            link: '#experiencias',
          },
        ],
      },
      b2g: {
        title: 'Institutional Sector (B2G)',
        subtitle: 'Territorial Development, STEAM & Large Events',
        items: [
          {
            icon: Sprout,
            title: '"Build your Field Guardian" Program',
            desc: 'Microcontroller and IoT STEAM workshops for community food sovereignty.',
            link: '/talleres-agro-innovacion',
          },
          {
            icon: Factory,
            title: 'Large-Scale Cultural Production',
            desc: 'Demonstrated operational capacity for events with over 5,500 attendees with ATL/BTL vendor network.',
            link: '#experiencias',
          },
          {
            icon: Landmark,
            title: 'Compliant Technical Structuring',
            desc: 'Administrative rigour for public calls (MinTIC, MinCultura, Resolution 654 and royalties).',
            link: '/experiencias-btl-atl',
          },
          {
            icon: Recycle,
            title: 'Open Data & Web3 Traceability',
            desc: 'Immutable certification of environmental variables and agricultural value chains.',
            link: '/servicios/blockchain',
          },
        ],
      },
      fenix_cta: 'Hardware Resurrection · Operación Fénix (E-waste + AV Memory)',
      header_manual: true,
    },
  };

  const text = content[language];

  const renderBlock = (block: typeof text.b2b) => (
    <div className="mb-16">
      <div className="text-center mb-10">
        <Badge variant="outline" className="mb-3 text-tech-green border-tech-green">
          {block.subtitle}
        </Badge>
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">{block.title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {block.items.map((item) => (
          <Card
            key={item.title}
            className="bg-card border-border hover:border-primary/40 transition-colors"
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-base mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
                  {item.link.startsWith('#') ? (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={item.link}>
                        {language === 'es' ? 'Ver más' : 'View more'}
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    </Button>
                  ) : (
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={item.link}>
                        {language === 'es' ? 'Ver más' : 'View more'}
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} toggleLanguage={toggleLanguage} />

      <section className="pt-24 pb-16 hero-gradient circuit-pattern">
        <div className="container mx-auto px-4 lg:px-8">
          <Button variant="ghost" size="sm" asChild className="mb-8 text-muted-foreground">
            <Link to="/">
              <ArrowLeft className="mr-2 w-4 h-4" />
              {text.back}
            </Link>
          </Button>
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 text-accent border-accent">
              {text.badge}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
              {text.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-10">{text.subtitle}</p>
            <div className="flex items-center justify-center gap-2 text-tech-green">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm font-medium tracking-wide uppercase">
                {language === 'es' ? 'Cero dependencia de SaaS extranjero' : 'Zero foreign SaaS dependency'}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {renderBlock(text.b2b)}
          {renderBlock(text.b2g)}

          {/* Puente al ecosistema Fénix */}
          <Card className="bg-card border-primary/30">
            <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Recycle className="w-6 h-6 text-tech-green shrink-0" />
                <p className="text-sm md:text-base">{text.fenix_cta}</p>
              </div>
              <Button size="sm" variant="outline" asChild>
                <Link to="/">Operación Fénix</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <ExperienciasGamificadasSection language={language} />
    </div>
  );
};

export default ExperienciasBTLATL;
