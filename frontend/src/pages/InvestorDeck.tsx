/**
 * @file InvestorDeck.tsx
 * @description Componente de Pitch Deck para inversores de IR Productions.
 * Presenta la visión, solución, mercado, tracción, inversión y equipo, con un enfoque en empresas BIC y tecnología de doble impacto.
 * Optimizado para SEO con palabras clave como "IA", "Agro-IoT", "Soberanía Tecnológica", "STEAM", "Empresas BIC", "Capital Semilla", "Cundinamarca", "Fusagasugá", "Colombia", "Doble Impacto", "Tecnología ética", "On-premise", "Edge computing".
 */

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  Bot,
  Cpu,
  Download,
  GraduationCap,
  Handshake,
  Heart,
  Landmark,
  Lightbulb,
  Mail,
  ShieldCheck,
  Sprout,
  TrendingUp,
  Users,
  Leaf,
  Globe,
  CheckCircle2,
  Coins,
  Rocket,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
// Imágenes ilustrativas para las cápsulas de Problema (el deck de inversión).
// Son placeholders SVG con la identidad visual del deck; se pueden reemplazar
// por fotografías reales generadas con IA sin modificar esta estructura.
import imgIAInaccesible from "@/assets/deck/problema-ia-inaccesible.svg";
import imgBrechaTalento from "@/assets/deck/problema-brecha-talento.svg";
import imgDobleImpacto from "@/assets/deck/problema-doble-impacto.svg";

// Email de contacto para inversores, clave para la interacción.
const CONTACT_EMAIL = "managementandplanning@masterlukasmoyano.com";

// Componente principal del Investor Deck.
const InvestorDeck = () => {
  // Estado para gestionar el idioma de la presentación (español por defecto).
  const [language, setLanguage] = useState<"es" | "en">("es");

  // Efecto para asegurar que la página se desplaza al inicio al cargar, mejorando la UX.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // Función para alternar entre español e inglés.
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  // Variables de conveniencia para el idioma.
  const t = language === "es";
  const isEs = t;

  // Datos de tracción del proyecto, destacando hitos y alianzas.
  // Incluye palabras clave como "CultivaTech ColombIA", "TRL6", "IA", "Soberanía Tecnológica", "STEAM", "Fusagasugá".
  const tractionData = {
    es: [
      {
        icon: Sprout,
        title: "CultivaTech ColombIA",
        status: "TRL6",
        statusColor: "text-tech-green",
        detail:
          "Sistema de monitoreo Agro-IoT (ESP32-S3, LoRaWAN, MQTT) con IA de detección de anomalías y plataforma propia. Prototipo funcional probado en entorno real en Fusagasugá.",
      },
      {
        icon: Landmark,
        title: "Cámara de Comercio de Bogotá — Fusagasugá",
        status: "Propuesta formal",
        statusColor: "text-accent",
        detail:
          "Propuesta de alianza estratégica: educación STEAM, monitoreo con IA y consultoría de transformación digital para la CCB y sus afiliados.",
      },
      {
        icon: FileIcon,
        title: "Convocatoria Viveros Fusagasugá 2026",
        status: "Propuesta formal",
        statusColor: "text-accent",
        detail:
          "Propuesta técnico-financiera completa presentada en la convocatoria de innovación (Resolución 102 de 2026) con documentación de soporte.",
      },
      {
        icon: Users,
        title: "The Aslan Group SAS — Ing. Ricardo Moyano",
        status: "Contacto / Aliado",
        statusColor: "text-info",
        detail:
          "Desarrollo de suite web corporativa (Django): constructora, inversiones, ingeniería y CRM de leads. Relación estratégica en curso.",
      },
      {
        icon: Heart,
        title: "Fundación Tenores (FUNDA-RUNTH) — ESAL",
        status: "Talleres realizados",
        statusColor: "text-success",
        detail:
          "Acciones de soberanía tecnológica: talleres para el grupo de validación de la fundación, brochure digital y modelos constitutivos ESAL.",
      },
      {
        icon: ShieldCheck,
        title: "Talleres de Soberanía Tecnológica Fusagasugá 2026",
        status: "En producción",
        statusColor: "text-success",
        detail:
          "Programa con plataforma propia (Django + Flask), dashboard de KPIs, ETL de encuestas y generación de leads calificados.",
      },
      {
        icon: Globe,
        title: "FLISoL Fusagasugá 2026",
        status: "Ponencia / Divulgación",
        statusColor: "text-info",
        detail:
          'Ponencia "Desenmascarando a ClawBot: la ruta hacia la Soberanía de Datos" sobre HPC local, modelos puros y soberanía de datos.',
      },
      {
        icon: Landmark,
        title: "Oficina TIC Fusagasugá",
        status: "Acercamiento estratégico",
        statusColor: "text-info",
        detail:
          "Conversaciones con la oficina de TIC del municipio para escalar la oferta de IA y soberanía tecnológica en la región.",
      },
    ],
    en: [
      {
        icon: Sprout,
        title: "CultivaTech ColombIA",
        status: "TRL6",
        statusColor: "text-tech-green",
        detail:
          "Agro-IoT monitoring system (ESP32-S3, LoRaWAN, MQTT) with AI anomaly detection and our own platform. Working prototype tested in a real environment in Fusagasugá.",
      },
      {
        icon: Landmark,
        title: "Chamber of Commerce Bogotá — Fusagasugá",
        status: "Formal proposal",
        statusColor: "text-accent",
        detail:
          "Strategic alliance proposal: STEAM education, AI monitoring and digital transformation consulting for the CCB and its members.",
      },
      {
        icon: FileIcon,
        title: "Viveros Fusagasugá Call 2026",
        status: "Formal proposal",
        statusColor: "text-accent",
        detail:
          "Full technical-financial proposal submitted to the innovation call (Resolution 102/2026) with supporting documentation.",
      },
      {
        icon: Users,
        title: "The Aslan Group SAS — Eng. Ricardo Moyano",
        status: "Contact / Ally",
        statusColor: "text-info",
        detail:
          "Corporate web suite development (Django): construction, investments, engineering and lead CRM. Ongoing strategic relationship.",
      },
      {
        icon: Heart,
        title: "Fundación Tenores (FUNDA-RUNTH) — ESAL",
        status: "Workshops delivered",
        statusColor: "text-success",
        detail:
          "Technological sovereignty actions: workshops for the foundation validation group, digital brochure and ESAL legal templates.",
      },
      {
        icon: ShieldCheck,
        title: "Technological Sovereignty Workshops Fusagasugá 2026",
        status: "In production",
        statusColor: "text-success",
        detail:
          "Program with own platform (Django + Flask), KPI dashboard, survey ETL and qualified lead generation.",
      },
      {
        icon: Globe,
        title: "FLISoL Fusagasugá 2026",
        status: "Talk / Outreach",
        statusColor: "text-info",
        detail:
          'Talk "Unmasking ClawBot: the road to Data Sovereignty" on local HPC, pure models and data sovereignty.',
      },
      {
        icon: Landmark,
        title: "Fusagasugá ICT Office",
        status: "Strategic approach",
        statusColor: "text-info",
        detail:
          "Conversations with the municipal ICT office to scale the AI and technological sovereignty offering in the region.",
      },
    ],
  };

  // Datos para el gráfico de proyección de impacto, mostrando el crecimiento esperado.
  // Relevante para "inversión", "escalabilidad", "impacto".
  const chartData = [
    { name: isEs ? "Hoy" : "Today", value: 8, fill: "#cc0000" },
    { name: "Año 1 / Year 1", value: 250, fill: "#d9a441" },
    { name: "Año 2 / Year 2", value: 1000, fill: "#2a9d8f" },
  ];

  // Estructura de navegación interna para el pitch deck, facilitando el acceso a secciones clave.
  const navigation = [
    { id: "problema", icon: AlertTriangle, es: "Problema", en: "Problem" },
    { id: "solucion", icon: Lightbulb, es: "Solución", en: "Solution" },
    { id: "mercado", icon: TrendingUp, es: "Mercado", en: "Market" },
    { id: "traccion", icon: Rocket, es: "Tracción", en: "Traction" },
    { id: "inversion", icon: Coins, es: "Inversión", en: "Investment" },
    { id: "equipo", icon: Users, es: "Equipo", en: "Team" },
    { id: "bic", icon: Leaf, es: "BIC", en: "BIC" },
  ];

  // Función para desplazar la vista a una sección específica.
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Encabezado global de la aplicación, permite cambiar el idioma. */}
      <Header language={language} toggleLanguage={toggleLanguage} />

      {/* ================= PORTADA ================= */}
      {/* Sección principal (Hero Section) con el título del proyecto y propuesta de valor. */}
      <section className="relative min-h-screen flex items-center justify-center circuit-pattern hero-gradient overflow-hidden pt-16">
        {/* Elementos decorativos para un estilo tecnológico y moderno. */}
        <div className="absolute top-24 left-10 w-20 h-20 border border-primary/30 rounded-lg animate-pulse-slow" />
        <div className="absolute bottom-32 right-16 w-14 h-14 bg-accent/20 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/4 w-10 h-10 border-2 border-tech-green/40 rotate-45 animate-circuit-glow" />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 lg:px-8">
          <div className="w-fit mx-auto mb-8 px-3 py-2 bg-gradient-to-br from-primary to-accent rounded-2xl flex flex-col items-center justify-center shadow-[0_0_40px_hsl(0_85%_45%/0.4)]">
            <span className="text-primary-foreground font-bold text-5xl md:text-6xl leading-none tracking-tight">
              _-IR-_
            </span>
            {/* Nombre de la empresa, "IR Productions", optimizado para reconocimiento de marca. */}
            <span className="text-primary-foreground font-bold uppercase text-xs md:text-sm tracking-[0.34em] mt-1 leading-none whitespace-nowrap">
              Productions
            </span>
          </div>

          {/* Badge indicando el tipo de presentación: "Pitch Deck · Capital Semilla", relevante para inversores. */}
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/30 px-4 py-1.5 text-sm">
            {isEs
              ? "Pitch Deck · Capital Semilla"
              : "Pitch Deck · Seed Capital"}
          </Badge>

          {/* Título principal del deck, "IR Productions", con estilo de gradiente. */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
            <span className="gradient-text-primary block">_-IR-_</span>
            <span className="gradient-text-primary block">Productions</span>
          </h1>

          {/* Subtítulo que destaca la propuesta de valor: "Agentes de IA in situ para Empresas de Beneficio e Interés Colectivo". */}
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 gradient-text-gold">
            {isEs
              ? "Agentes de IA in situ para Empresas de Beneficio e Interés Colectivo"
              : "On-site AI Agents for Benefit & Collective Interest Companies"}
          </p>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
            {/* Descripción detallada de la tecnología y su impacto, incluyendo palabras clave como "Tecnología ética", "doble impacto", "IA", "on-premise", "Agro monitoreo", "soberanía de datos", "formación STEAM". */}
            {isEs
              ? "Tecnología ética y de doble impacto, construida para quedarse contigo: agentes y modelos de IA que corren en tu propia infraestructura (edge / on-premise), monitoreo agro en tiempo real, soberanía de datos y formación STEAM al servicio del bien común."
              : "Ethical, double-impact technology built to stay with you: AI agents and models that run in your own infrastructure (edge / on-premise), real-time agro monitoring, data sovereignty and STEAM training for the common good."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              // Botón de llamada a la acción para contactar, con el email definido.
              size="lg"
              className="glow-red group w-full sm:w-auto"
              onClick={() => (window.location.href = `mailto:${CONTACT_EMAIL}`)}
            >
              {isEs ? "Hablemos" : "Let's Talk"}
              <Mail className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
            <Button
              // Botón para descargar el Pitch Deck en formato PDF.
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-accent/40 text-accent hover:bg-accent/10"
              onClick={() =>
                window.open("/deck-ir-productions-2026.pdf", "_blank")
              }
            >
              {isEs ? "Descargar Deck PDF" : "Download PDF Deck"}
              <Download className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Etiquetas de características clave: "Vertical: IA", "Empresa BIC", "Bogotá · Fusagasugá, Colombia". */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Bot className="w-4 h-4 text-tech-green" />
              {isEs ? "Vertical: IA" : "Vertical: AI"}
            </span>
            <span className="text-border">•</span>
            <span className="flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-agro-green" />
              {isEs ? "Empresa BIC" : "BIC Company"}
            </span>
            <span className="text-border">•</span>
            <span className="flex items-center gap-1.5">
              <MapPinIcon className="w-4 h-4 text-accent" />
              Bogotá · Fusagasugá, Colombia
            </span>
          </div>
        </div>
      </section>

      {/* ================= NAVEGACIÓN DE SLIDES ================= */}
      {/* Barra de navegación pegajosa para facilitar el acceso a las secciones del deck. */}
      <nav className="sticky top-16 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between overflow-x-auto py-3 space-x-2">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="flex items-center gap-2 whitespace-nowrap text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <item.icon className="w-4 h-4" />
                {isEs ? item.es : item.en}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ================= PROBLEMA ================= */}
      {/* Sección que describe los problemas que IR Productions busca resolver. */}
      <section id="problema" className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge={isEs ? "El Problema" : "The Problem"}
            title={
              isEs
                ? "Las empresas quieren doble impacto, pero no tienen acceso a IA"
                : "Companies want double impact, but lack access to AI"
            }
            subtitle={
              isEs
                ? "Las PYMES y las empresas de Beneficio e Interés Colectivo (BIC) de Colombia no cuentan con herramientas tecnológicas accesibles, éticas y soberanas."
                : "Colombian SMEs and Benefit & Collective Interest (BIC) companies lack accessible, ethical and sovereign technological tools."
            }
          />
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tarjeta de problema: "IA inaccesible", destacando costos y dependencia de la nube.
                Imagen ilustrativa en la parte superior, con zoom suave al hacer hover. */}
            <Card className="tech-border hover-lift group overflow-hidden">
              <div className="relative h-44 overflow-hidden border-b border-border">
                <img
                  src={imgIAInaccesible}
                  alt={isEs ? "IA inaccesible: nube cerrada que no respeta la soberanía de los datos" : "AI out of reach: a closed cloud that does not respect data sovereignty"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />
              </div>
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground text-base leading-relaxed">
                  {isEs
                    ? "Soluciones de IA caras, dependientes de la nube y de suscripciones corporativas que no respetan la soberanía de los datos."
                    : "Expensive AI solutions, cloud-dependent and tied to corporate subscriptions that do not respect data sovereignty."}
                </p>
              </CardContent>
            </Card>
            {/* Tarjeta de problema: "Brecha de talento", enfocándose en la falta de formación en IA y STEAM.
                Imagen ilustrativa + zoom al hover, conservando solo el texto. */}
            <Card className="tech-border hover-lift group overflow-hidden">
              <div className="relative h-44 overflow-hidden border-b border-border">
                <img
                  src={imgBrechaTalento}
                  alt={isEs ? "Brecha de talento: falta formación en IA, STEAM y transformación digital" : "Talent gap: lack of AI, STEAM and digital transformation training"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />
              </div>
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground text-base leading-relaxed">
                  {isEs
                    ? "Falta formación práctica y formación técnica en IA, STEAM y transformación digital para emprendedores y equipos."
                    : "Lack of hands-on and technical training in AI, STEAM and digital transformation for founders and teams."}
                </p>
              </CardContent>
            </Card>
            {/* Tarjeta de problema: "Doble impacto sin tecnología", resaltando la necesidad de tecnología para empresas BIC.
                Imagen ilustrativa + zoom al hover, conservando solo el texto. */}
            <Card className="tech-border hover-lift group overflow-hidden">
              <div className="relative h-44 overflow-hidden border-b border-border">
                <img
                  src={imgDobleImpacto}
                  alt={isEs ? "Doble impacto sin tecnología: empresas BIC que necesitan implementación tecnológica" : "Double impact without tech: BIC companies in need of technological implementation"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />
              </div>
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground text-base leading-relaxed">
                  {isEs
                    ? "Las empresas BIC quieren generar valor económico, social y ambiental, pero les falta quien implemente la tecnología que lo haga posible."
                    : "BIC companies want to generate economic, social and environmental value, but lack someone to implement the technology that makes it possible."}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ================= SOLUCIÓN ================= */}
      {/* Sección que presenta las cuatro líneas de solución de IR Productions. */}
      <section id="solucion" className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge={isEs ? "Nuestra Solución" : "Our Solution"}
            title={
              isEs
                ? "Cuatro líneas de IA con propósito"
                : "Four purpose-driven AI lines"
            }
            subtitle={
              isEs
                ? "Tecnología propia, abierta y soberana, diseñada para que las empresas BIC y PYMES crezcan con impacto."
                : "Own, open and sovereign technology, designed so BIC companies and SMEs grow with impact."
            }
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tarjeta de solución: "Monitoreo con IA (Agro)", destacando CultivaTech ColombIA y sensores. */}
            <SolutionCard
              icon={Sprout}
              color="text-agro-green"
              title={isEs ? "Monitoreo con IA (Agro)" : "AI Monitoring (Agro)"}
              desc={
                isEs
                  ? "Sistema CultivaTech ColombIA: sensores ESP32/Raspberry Pi, IA de detección de anomalías y alertas en tiempo real por Telegram."
                  : "CultivaTech ColombIA system: ESP32/Raspberry Pi sensors, AI anomaly detection and real-time alerts via Telegram."
              }
            />
            <SolutionCard
              // Tarjeta de solución: "Soberanía Tecnológica", enfocada en HPC local y control de datos.
              icon={Cpu}
              color="text-tech-green"
              title={
                isEs ? "Soberanía Tecnológica" : "Technological Sovereignty"
              }
              desc={
                isEs
                  ? "Infraestructura de cómputo local de alto desempeño (HPC) y self-hosting que devuelve el control de los datos a empresas y academia."
                  : "High-performance local computing (HPC) and self-hosting infrastructure that returns data control to companies and academia."
              }
            />
            <SolutionCard
              // Tarjeta de solución: "IA y Computación Cuántica", mencionando modelos puros y seguridad.
              icon={Bot}
              color="text-primary"
              title={
                isEs ? "IA y Computación Cuántica" : "AI & Quantum Computing"
              }
              desc={
                isEs
                  ? "Modelos puros locales (Qwen, scikit-learn), seguridad con criptografía y formación en computación cuántica para negocios."
                  : "Pure local models (Qwen, scikit-learn), cryptography-backed security and quantum computing training for business."
              }
            />
            <SolutionCard
              // Tarjeta de solución: "Formación STEAM", resaltando academias y certificaciones.
              icon={GraduationCap}
              color="text-accent"
              title={isEs ? "Formación STEAM" : "STEAM Training"}
              desc={
                isEs
                  ? "Academias digitales, talleres y certificaciones de IA y transformación digital para equipos, afiliados y emprendedores."
                  : "Digital academies, workshops and AI & digital transformation certifications for teams, members and founders."
              }
            />
          </div>
        </div>
      </section>

      {/* ================= MERCADO ================= */}
      {/* Sección que analiza el mercado y la oportunidad para IR Productions, con foco en empresas BIC. */}
      <section id="mercado" className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge={isEs ? "Mercado y Oportunidad" : "Market Opportunity"}
            title={
              isEs
                ? "Un ecosistema BIC en plena expansión"
                : "A BIC ecosystem in full expansion"
            }
            subtitle={
              isEs
                ? "El modelo de Sociedades BIC es la apuesta del país por el doble impacto — y Bogotá es su epicentro."
                : "The BIC company model is the country’s bet on double impact — and Bogotá is its epicenter."
            }
          />
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Tarjetas de estadísticas clave del mercado BIC en Colombia y Bogotá. */}
            <StatCard
              value="421"
              label={
                isEs ? "empresas BIC en Colombia" : "BIC companies in Colombia"
              }
              icon={Leaf}
            />
            {/* Icono de MapPinIcon para indicar ubicación geográfica. */}
            <StatCard
              value="43%"
              label={isEs ? "en Bogotá y la Región" : "in Bogotá & the Region"}
              icon={MapPinIcon}
            />
            {/* Icono de Building2Icon para indicar tipo de empresa. */}
            <StatCard
              value="65%"
              label={isEs ? "son microempresas" : "are micro-businesses"}
              icon={Building2Icon}
            />
            {/* Icono de BriefcaseIcon para indicar sector. */}
            <StatCard
              value="72%"
              label={
                isEs
                  ? "pertenecen al sector servicios"
                  : "belong to the services sector"
              }
              icon={BriefcaseIcon}
            />
          </div>
          <p className="text-center text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-10">
            {isEs
              ? "A esto se suma el festival de emprendimiento GOFEST 2026 de la Cámara de Comercio de Bogotá, con 40.000 asistentes y su plataforma de matchmaking GOMATCH, que conecta startups, inversionistas y corporativos en toda LATAM. Nuestra vertical de registro es IA, con foco en empresas BIC."
              : "Add to this the GOFEST 2026 entrepreneurship festival by the Chamber of Commerce of Bogotá, with 40,000 attendees and its GOMATCH matchmaking platform connecting startups, investors and corporates across LATAM. Our registration vertical is AI, with a BIC focus."}
          </p>

          <div className="max-w-3xl mx-auto">
            {/* Tarjeta con gráfico de proyección de impacto, visualizando el crecimiento. */}
            <Card className="tech-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-center gradient-text-gold">
                  {isEs
                    ? "Proyección de impacto (2 años)"
                    : "Impact projection (2 years)"}
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    {/* Gráfico de barras de Recharts, mostrando la proyección de impacto. */}
                    <BarChart data={chartData}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="hsl(0 0% 25%)"
                      />
                      <XAxis dataKey="name" stroke="hsl(0 0% 65%)" />
                      <YAxis stroke="hsl(0 0% 65%)" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(0 0% 10%)",
                          border: "1px solid hsl(0 0% 25%)",
                          borderRadius: "0.75rem",
                        }}
                      />
                      <Bar
                        dataKey="value"
                        fill="#cc0000"
                        radius={[8, 8, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  {isEs
                    ? "De 8 hitos de tracción actuales a 250 y 1.000 productores/empresas impactadas. [Cifra objetivo editable]."
                    : "From 8 current traction milestones to 250 and 1,000 impacted producers/companies. [Editable target]."}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ================= TRACCIÓN ================= */}
      {/* Sección que muestra la tracción y los logros actuales de IR Productions. */}
      <section id="traccion" className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge={isEs ? "Tracción" : "Traction"}
            title={
              isEs
                ? "Construyendo desde la acción, no desde la promesa"
                : "Building through action, not promise"
            }
            subtitle={
              isEs
                ? "Sin ingresos aún, pero con un camino demostrable: contactos, propuestas formales, prototipos y talleres reales. Esta es la evidencia de nuestro compromiso."
                : "No revenue yet, but with a provable path: contacts, formal proposals, prototypes and real workshops. This is the evidence of our commitment."
            }
          />
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mapeo de los datos de tracción para mostrar cada hito en una tarjeta. */}
            {tractionData[language].map((item, index) => (
              <Card key={index} className="tech-border hover-lift group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <span
                          className={`text-xs font-semibold uppercase tracking-wide ${item.statusColor}`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            {/* Badge para indicar que hay más evidencia en construcción. */}
            <Badge variant="outline" className="mb-4 text-accent border-accent">
              {isEs
                ? "Y más evidencia en construcción"
                : "And more evidence under construction"}
            </Badge>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {isEs
                ? "Acercamientos con la Oficina TIC de Fusagasugá, aliados del ecosistema GOFEST/CCB, talleres de soberanía tecnológica y una red de contactos que crece cada mes. [Aquí puedes sumar más logros.]"
                : "Approaches with the Fusagasugá ICT Office, allies of the GOFEST/CCB ecosystem, technological sovereignty workshops and a growing network every month. [Add more achievements here.]"}
            </p>
          </div>
        </div>
      </section>

      {/* ================= INVERSIÓN ================= */}
      {/* Sección dedicada a la solicitud de inversión y las oportunidades de alianza. */}
      <section id="inversion" className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge={isEs ? "La Inversión" : "The Investment"}
            title={
              isEs
                ? "Qué buscamos en este momento"
                : "What we are looking for right now"
            }
            subtitle={
              isEs
                ? "Una ronda inicial para convertir tracción en un negocio escalable — además de aliados que crezcan con nosotros."
                : "An early round to turn traction into a scalable business — plus allies who grow with us."
            }
          />

          {/* Tarjeta de Capital Semilla, detallando el monto objetivo y el uso de los fondos. */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="tech-border hover-lift glow-red">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Coins className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold gradient-text-primary">
                    {isEs ? "Capital Semilla" : "Seed Capital"}
                  </h3>
                </div>
                <p className="text-4xl font-bold mb-2 text-foreground">
                  {isEs ? "Ronda Pre-seed" : "Pre-seed Round"}
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  {isEs
                    ? "Monto objetivo: [US$ XX,000] editable en /frontend/src/pages/InvestorDeck.tsx — define el número real aquí."
                    : "Target amount: [US$ XX,000] editable in /frontend/src/pages/InvestorDeck.tsx — set the real number here."}
                </p>
                {/* Lista de usos de los fondos: producto, talento, operación. */}
                <ul className="space-y-4">
                  {[
                    {
                      icon: Bot,
                      label: isEs
                        ? "Producto: escalar CultivaTech y la plataforma de IA"
                        : "Product: scale CultivaTech and the AI platform",
                    },
                    {
                      icon: Users,
                      label: isEs
                        ? "Talento: equipo técnico y comercial"
                        : "Talent: technical and commercial team",
                    },
                    {
                      icon: TrendingUp,
                      label: isEs
                        ? "Operación: pilotos, marketing y expansión regional"
                        : "Operations: pilots, marketing and regional expansion",
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="tech-border hover-lift">
              {/* Tarjeta de Networking & Alianzas, destacando la importancia de las conexiones. */}
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Handshake className="w-8 h-8 text-tech-green" />
                  <h3 className="text-2xl font-bold gradient-text-gold">
                    {isEs ? "Networking & Alianzas" : "Networking & Alliances"}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  {isEs
                    ? "Tan importante como el capital: necesitamos el ecosistema para crecer de forma orgánica y ética."
                    : "As important as capital: we need the ecosystem to grow organically and ethically."}
                </p>
                {/* Grid de tipos de alianzas buscadas: estratégicos, clientes, mentorías, etc. */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      icon: Landmark,
                      label: isEs ? "Aliados estratégicos" : "Strategic allies",
                    },
                    {
                      icon: Users,
                      label: isEs ? "Clientes B2B / B2G" : "B2B / B2G clients",
                    },
                    {
                      icon: GraduationCap,
                      label: isEs ? "Mentorías" : "Mentorships",
                    },
                    { icon: Globe, label: isEs ? "Visibilidad" : "Visibility" },
                    {
                      icon: Building2Icon,
                      label: isEs
                        ? "Conexiones corporativas"
                        : "Corporate connections",
                    },
                    {
                      icon: Heart,
                      label: isEs ? "Red de impacto BIC" : "BIC impact network",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 rounded-lg bg-background border border-border"
                    >
                      <item.icon className="w-5 h-5 text-tech-green flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Tarjeta con el argumento de por qué invertir en IR Productions, resaltando el triple retorno y el equipo. */}
            <Card className="tech-border">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <ShieldCheck className="w-6 h-6 text-agro-green" />
                  <h3 className="text-xl font-semibold">
                    {isEs
                      ? "¿Por qué invertir en -IR- Productions?"
                      : "Why invest in -IR- Productions?"}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {isEs
                    ? "Un equipo multidisciplinario (arte + ciencia + tecnología), prototipo funcional TRL6, propuestas formales en curso, foco en un segmento en crecimiento (empresas BIC) y un modelo con triple retorno: económico, social y ambiental."
                    : "A multidisciplinary team (art + science + technology), a working TRL6 prototype, formal proposals in progress, focus on a growing segment (BIC companies) and a model with triple return: economic, social and environmental."}
                </p>
                {/* Badges de las ventajas competitivas: "Triple retorno", "IA soberana", "Mercado BIC", "Equipo STEAM". */}
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    isEs ? "Triple retorno" : "Triple return",
                    isEs ? "IA soberana" : "Sovereign AI",
                    isEs ? "Mercado BIC" : "BIC market",
                    isEs ? "Equipo STEAM" : "STEAM team",
                  ].map((label) => (
                    <Badge
                      key={label}
                      variant="outline"
                      className="text-accent border-accent"
                    >
                      {label}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ================= EQUIPO ================= */}
      {/* Sección que presenta al fundador y CEO, Lukas Moyano Morales. */}
      <section id="equipo" className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge={isEs ? "Equipo" : "Team"}
            title={isEs ? "Lukas Moyano Morales" : "Lukas Moyano Morales"}
            subtitle={
              isEs
                ? "Fundador, CEO y Lead Tecnológico de -IR- Productions."
                : "Founder, CEO and Tech Lead of -IR- Productions."
            }
          />
          <div className="max-w-4xl mx-auto">
            {/* Tarjeta con la biografía y credenciales del fundador. */}
            <Card className="tech-border hover-lift">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-28 h-28 bg-gradient-to-br from-primary/20 to-accent/40 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-4xl font-bold gradient-text-primary">
                      LM
                    </span>
                  </div>
                  <div className="space-y-4">
                    {/* Descripción de la experiencia y formación, incluyendo palabras clave como "Artista visual", "pedagogo", "IA", "desarrollo web", "Blockchain", "STEAM", "GNU/Linux", "HPC". */}
                    <p className="text-muted-foreground leading-relaxed">
                      {isEs
                        ? "Artista visual (MAV, Pontificia Universidad Javeriana), pedagogo (Uniminuto) y tecnólogo con formación en IA (MinTIC/UNAL), desarrollo web y móvil (UNAL), Blockchain y pedagogía STEAM (SENA). Consultor en soberanía tecnológica con más de 10 años de experiencia en el ecosistema GNU/Linux. Ha llevado la tecnología desde el arte y la pedagogía hasta la infraestructura HPC local."
                        : "Visual artist (MAV, Pontificia Universidad Javeriana), pedagogue (Uniminuto) and technologist trained in AI (MinTIC/UNAL), web & mobile development (UNAL), Blockchain and STEAM pedagogy (SENA). Technological sovereignty consultant with over 10 years in the GNU/Linux ecosystem. He has taken technology from art and pedagogy to local HPC infrastructure."}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        // Badges de las áreas de expertise y certificaciones.
                        {
                          icon: GraduationCap,
                          label: isEs
                            ? "IA · MinTIC / UNAL"
                            : "AI · MinTIC / UNAL",
                        },
                        { icon: Bot, label: "Blockchain / Solidity" },
                        { icon: Cpu, label: "HPC / GNU/Linux" },
                        {
                          icon: Sprout,
                          label: isEs ? "STEAM · SENA" : "STEAM · SENA",
                        },
                      ].map((item, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-border text-muted-foreground"
                        >
                          <item.icon className="w-3.5 h-3.5 mr-1.5" />
                          {item.label}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ================= BIC ================= */}
      {/* Sección que explica el compromiso de IR Productions como Empresa BIC. */}
      <section id="bic" className="py-20 bg-background circuit-pattern">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge={isEs ? "Empresa BIC" : "BIC Company"}
            title={
              isEs
                ? "Beneficio e Interés Colectivo en el ADN"
                : "Benefit & Collective Interest in the DNA"
            }
            subtitle={
              isEs
                ? "Como empresa BIC trabajamos en las cinco dimensiones que el país reconoce — y esa es la promesa que llevamos a nuestros clientes."
                : "As a BIC company we work on the five dimensions the country recognizes — and that is the promise we bring to our clients."
            }
          />
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                icon: BriefcaseIcon,
                es: "Modelo de negocio con proveedores locales y minorías",
                en: "Business model with local and minority suppliers",
              },
              {
                icon: Users,
                es: "Gobierno corporativo diverso e inclusivo",
                en: "Diverse and inclusive corporate governance",
              },
              {
                icon: GraduationCap,
                es: "Prácticas laborales justas con capacitación",
                en: "Fair labour practices with training",
              },
              {
                icon: Leaf,
                es: "Prácticas ambientales y economía circular",
                en: "Environmental practices and circular economy",
              },
              {
                icon: Heart,
                es: "Creación de oportunidades de empleo",
                en: "Creation of employment opportunities",
              },
            ].map((item, index) => (
              <Card key={index} className="tech-border hover-lift text-center">
                <CardContent className="p-6">
                  <item.icon className="w-8 h-8 text-accent mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">
                    {isEs ? item.es : item.en}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Texto que describe los beneficios de ser una empresa BIC para atraer talento e inversores. */}
          <p className="text-center text-muted-foreground mt-10 max-w-3xl mx-auto">
            {isEs
              ? "Esto atrae talento, facilita crédito diferencial, genera beneficios tributarios y, sobre todo, atrae a inversionistas de impacto que buscan rentabilidad con propósito."
              : "This attracts talent, facilitates preferential credit, generates tax benefits and, above all, attracts impact investors who seek profitability with purpose."}
          </p>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      {/* Sección de llamada a la acción final para contactar y descargar el deck. */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">
              IR
            </span>
          </div>
          {/* Título de la CTA: "Construyamos el futuro juntos". */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-primary">
            {isEs
              ? "Construyamos el futuro juntos"
              : "Let's build the future together"}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {isEs
              ? "Si buscas inversión, clientes o conexiones, hablemos. Tenemos el deck y la tracción para preparar los mejores matches."
              : "If you are looking for investment, clients or connections, let’s talk. We have the deck and the traction to prepare the best matches."}
          </p>
          {/* Botones de contacto y descarga del PDF. */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button
              size="lg"
              className="glow-red group w-full sm:w-auto"
              onClick={() => (window.location.href = `mailto:${CONTACT_EMAIL}`)}
            >
              {CONTACT_EMAIL}
              <Mail className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-accent/40 text-accent hover:bg-accent/10"
              onClick={() =>
                window.open("/deck-ir-productions-2026.pdf", "_blank")
              }
            >
              {isEs ? "Descargar Deck PDF" : "Download PDF Deck"}
              <Download className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Badges de los objetivos de la CTA: "GOMATCH", "Aliados y clientes", "Capital semilla". */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-tech-green" />
              {isEs ? "GOMATCH · GOFEST 2026" : "GOMATCH · GOFEST 2026"}
            </span>
            <span className="flex items-center gap-1.5">
              <Handshake className="w-4 h-4 text-accent" />
              {isEs ? "Aliados y clientes" : "Allies and clients"}
            </span>
            <span className="flex items-center gap-1.5">
              <Coins className="w-4 h-4 text-primary" />
              {isEs ? "Capital semilla" : "Seed capital"}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

// Componente auxiliar para el encabezado de cada sección, reutilizable y optimizado.
const SectionHeader = ({
  badge,
  title,
  subtitle,
}: {
  badge: string;
  title: string;
  // Subtítulo descriptivo para SEO.
  subtitle: string;
}) => (
  <div className="text-center mb-16">
    <Badge variant="outline" className="mb-4 text-accent border-accent">
      {badge}
    </Badge>
    <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary">
      {title}
    </h2>
    <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
      {subtitle}
    </p>
  </div>
);

// Componente auxiliar para las tarjetas de solución, mostrando icono, título y descripción.
const SolutionCard = ({
  icon: Icon,
  color,
  title,
  desc,
}: {
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  title: string;
  desc: string;
  // Descripción de la solución, con palabras clave.
}) => (
  <Card className="tech-border hover-lift group">
    <CardHeader className="text-center pb-4">
      <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
        <Icon className={`w-8 h-8 ${color}`} />
      </div>
      <CardTitle className="text-lg group-hover:text-primary transition-colors">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground text-center leading-relaxed">
        {desc}
      </p>
    </CardContent>
  </Card>
);

// Componente auxiliar para las tarjetas de estadísticas, mostrando valor, etiqueta e icono.
const StatCard = ({
  value,
  label,
  icon: Icon,
}: {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) => (
  // Tarjeta de estadística con valor numérico y etiqueta descriptiva.
  <Card className="tech-border hover-lift text-center">
    <CardContent className="p-8">
      <Icon className="w-8 h-8 text-accent mx-auto mb-4" />
      <p className="text-4xl font-bold gradient-text-gold mb-2">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </CardContent>
    {/* Etiqueta de la estadística, relevante para el contexto del mercado. */}
  </Card>
);

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
    {/* Icono de marcador de mapa, utilizado para indicar ubicaciones geográficas en el contexto de "Bogotá y la Región". */}
  </svg>
);

const Building2Icon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    <path d="M10 6h4" />
    <path d="M10 10h4" />
    <path d="M10 14h4" />
    {/* Icono de edificio, utilizado para representar microempresas en el contexto del mercado. */}
    <path d="M10 18h4" />
  </svg>
);

const BriefcaseIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <rect width="20" height="14" x="2" y="6" rx="2" />
    {/* Icono de maletín, utilizado para representar el sector servicios. */}
  </svg>
);

const FileIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    {/* Icono de archivo, utilizado para representar propuestas formales o documentación. */}
  </svg>
);

export default InvestorDeck;
