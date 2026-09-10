import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  Clock,
  TrendingUp,
  MapPin,
  Laptop,
  Database,
  BarChart4,
  CheckCircle2,
  CalendarCheck,
  Zap,
  ShieldAlert,
  Cpu,
  TerminalSquare,
  Send,
  User,
  Briefcase,
  Users,
  Target
} from "lucide-react";
import Header from "@/components/Header";

// Importar Imágenes para estética Cyberpunk
import heroImage from "@/assets/hero-background.jpg";
import roiImage from "@/assets/portfolio/monitoreo-industrial.png";
import nivel1Image from "@/assets/portfolio/nivel1_ofimatica_cyberpunk.jpg";
import nivel2Image from "@/assets/portfolio/agentes-mqtt.png";
import nivel3Image from "@/assets/portfolio/metabuscador.png";
import paso0Image from "@/assets/portfolio/red-mesh.png";
import diagnosticImage from "@/assets/portfolio/diagnostic_cyberpunk_step.jpg";
import { CheckoutWeb3 } from "@/components/CheckoutWeb3";

const presentationData = {
  title: "Transformación Digital y Productividad",
  subtitle: "De la Ofimática a la Inteligencia de Negocios",
  sections: [
    {
      id: "el-recurso-mas-valioso",
      icon: Clock,
      title: "El Recurso Más Valioso",
      content: [
        "**El activo más importante de su empresa es el TIEMPO.**",
        "Un empleado promedio pierde **30% de su semana** en tareas repetitivas (copiar/pegar, formatear reportes).",
        "Nuestro programa no es un 'curso', es una **ESTRATEGIA** de optimización operativa."
      ],
      image: null,
      align: "center",
      accent: "primary"
    },
    {
      id: "roi",
      icon: TrendingUp,
      title: "El ROI del Conocimiento",
      content: [
        "**TIEMPO RECUPERADO:** Dominar Office 365 y la automatización reduce tareas de 4 horas a 15 minutos.",
        "**EL MODELO UTA:** 1 Unidad de Trabajo Activa = 100 minutos (casi el doble de una clase tradicional).",
        "**VENTAJA TRIBUTARIA:** Somos exentos de IVA (19%). Un ahorro financiero directo frente a la competencia."
      ],
      image: roiImage,
      align: "right",
      accent: "tech-green"
    },
    {
      id: "paso-0",
      icon: MapPin,
      title: "Nuestro Derrotero: Paso 0",
      subtitle: "Diagnóstico Estratégico",
      content: [
        "Identificamos cuellos de botella en su flujo de trabajo.",
        "Costo **100% amortizable** al adquirir su primer paquete de UTAs."
      ],
      image: paso0Image,
      align: "left",
      accent: "accent"
    },
    {
      id: "nivel-1",
      icon: Laptop,
      title: "Nuestro Derrotero: Nivel 1",
      subtitle: "Ofimática Productiva (El Inicio)",
      content: [
        "Dominio práctico de **Word, Excel y PowerPoint** con enfoque en bases de datos relacionales.",
        "Creación ágil de informes, fórmulas avanzadas y arquitectura de datos limpia."
      ],
      image: nivel1Image,
      align: "right",
      accent: "primary"
    },
    {
      id: "nivel-2",
      icon: Database,
      title: "Nuestro Derrotero: Nivel 2",
      subtitle: "La Transición (Automatización)",
      content: [
        "Excel Avanzado y preparación de **bases de datos**.",
        "Conexión de tablas y eliminación de ingreso manual de datos."
      ],
      image: nivel2Image,
      align: "left",
      accent: "tech-green"
    },
    {
      id: "nivel-3",
      icon: BarChart4,
      title: "Nuestro Derrotero: Nivel 3",
      subtitle: "Inteligencia de Negocios (La Meta)",
      content: [
        "**Dashboards en tiempo real** (PowerBI o alternativas Open Source).",
        "Decisiones gerenciales en segundos basadas en datos reales."
      ],
      image: nivel3Image,
      align: "right",
      accent: "accent"
    },
    {
      id: "inversion",
      icon: CheckCircle2,
      title: "Estructura de Inversión",
      content: [
        "**Modalidad:** 1 a 1 (Totalmente personalizado con sus datos).",
        "**Valor por UTA (100 min):** $200.000 COP por persona.",
        "**Sin cobro de IVA** (Ahorro del 19%).",
        "**Retorno:** La inversión se paga sola con las primeras horas de trabajo automatizado."
      ],
      image: null,
      align: "center",
      accent: "primary"
    },
    {
      id: "siguiente-paso",
      icon: TerminalSquare,
      title: "INICIALIZAR DIAGNÓSTICO",
      subtitle: "Secuencia de Integración Operativa",
      content: [
        "**[ INICIAR SESIÓN DE DIAGNÓSTICO ESTRATÉGICO ]**",
        "Calibramos el consumo exacto de UTAs necesarias para procesar el Nivel 1.",
        "**Transformación operativa inminente.** Su entorno de trabajo está listo para la actualización."
      ],
      image: diagnosticImage,
      align: "left",
      accent: "tech-green"
    }
  ]
};

const PropuestaBI = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    equipo: "1",
    desafio: ""
  });

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const textoMensaje = `*NUEVA SOLICITUD DE DIAGNÓSTICO (BI)*\n\n` +
      `*👤 Nombre:* ${formData.nombre}\n` +
      `*🏢 Empresa / Proyecto:* ${formData.empresa}\n` +
      `*👥 Personas a capacitar:* ${formData.equipo}\n` +
      `*⚠️ Principal Cuello de Botella:* ${formData.desafio}\n\n` +
      `_Iniciando protocolo de evaluación de UTAs..._`;

    const numeroBase = "573197919742";
    const url = `https://wa.me/${numeroBase}?text=${encodeURIComponent(textoMensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-background circuit-pattern relative selection:bg-primary/50 selection:text-white">
      <Header language={"es"} toggleLanguage={() => {}} />

      <main className="pt-24 pb-12 relative z-10">
        <div className="container-ir mb-8">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors font-mono uppercase tracking-widest text-xs">
            <ArrowLeft className="mr-2 w-4 h-4" />
            &lt; Abortar_Secuencia / Volver &gt;
          </Link>
        </div>
        
        {/* Portada Hero Cyberpunk */}
        <section className="py-24 relative overflow-hidden text-center tech-border bg-card/40 mx-4 md:mx-auto max-w-7xl rounded-3xl mb-20 group border-primary/30">
            <div className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-700 mix-blend-luminosity" style={{ backgroundImage: `url(${heroImage})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-0"></div>
            
            {/* Elementos flotantes tech */}
            <div className="absolute top-10 left-10 w-16 h-16 border-t-4 border-l-4 border-primary/60 rounded-tl-lg animate-pulse-slow"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 border-b-4 border-r-4 border-accent/60 rounded-br-lg animate-pulse-slow"></div>

            <div className="relative z-10 container-ir">
                <Badge className="mb-8 bg-primary/20 text-primary border border-primary/50 text-xs font-mono tracking-[0.3em] uppercase py-2 px-6 shadow-[0_0_15px_rgba(255,122,0,0.4)]">
                   <Cpu className="w-4 h-4 mr-2 inline animate-pulse" />
                   Protocolo Ejecutivo v2.0
                </Badge>
                
                <h1 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary via-accent to-tech-green drop-shadow-[0_0_20px_rgba(255,122,0,0.3)] mb-6 animate-slide-up tracking-tighter uppercase font-mono">
                    {presentationData.title}
                </h1>
                
                <h2 className="text-2xl md:text-4xl text-foreground/90 font-bold mb-10 animate-fade-in max-w-4xl mx-auto uppercase tracking-widest border-y border-white/10 py-4 font-mono">
                    {presentationData.subtitle}
                </h2>
                
                <div className="w-48 h-2 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full shadow-[0_0_20px_rgba(255,122,0,0.8)]"></div>
            </div>
        </section>

        {/* Iteración de Secciones con Layout Híbrido */}
        <div className="container-ir space-y-32">
            {presentationData.sections.map((Slide) => (
            <section key={Slide.id} id={Slide.id} className="scroll-mt-32">
                
                {/* Estilo 1: Sin Imagen (Centrado, estilo Terminal/Consola) */}
                {!Slide.image ? (
                   <Card className="tech-border hover-lift group relative overflow-hidden flex flex-col p-8 md:p-12 bg-background/90 backdrop-blur-xl shadow-2xl border-white/10">
                       <div className={`absolute top-0 left-0 w-2 h-full bg-${Slide.accent} shadow-[0_0_15px_rgba(var(--${Slide.accent}),1)]`}></div>
                       <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                           <Slide.icon className={`w-80 h-80 text-${Slide.accent}`} />
                       </div>
                       
                       <CardHeader className="p-0 mb-8 relative z-10 text-center flex flex-col items-center">
                           <div className={`h-20 w-20 rounded-2xl bg-${Slide.accent}/10 border border-${Slide.accent}/50 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(var(--${Slide.accent}),0.3)]`}>
                               <Slide.icon className={`h-10 w-10 text-${Slide.accent}`} />
                           </div>
                           <CardTitle className="text-4xl md:text-6xl font-black text-foreground uppercase tracking-tighter font-mono drop-shadow-md">
                               {Slide.title}
                           </CardTitle>
                           {Slide.subtitle && (
                               <h3 className={`text-2xl text-${Slide.accent} font-bold mt-4 tracking-widest font-mono uppercase`}>
                                   {Slide.subtitle}
                               </h3>
                           )}
                       </CardHeader>
                       
                       <CardContent className="p-0 relative z-10 max-w-4xl mx-auto text-center">
                           <div className="space-y-6 text-xl text-muted-foreground font-light font-mono">
                               {Slide.content.map((item, i) => (
                                   <p
                                     key={i}
                                     className="leading-relaxed bg-black/50 p-6 rounded-xl border border-white/10 backdrop-blur-sm"
                                     dangerouslySetInnerHTML={{
                                         __html: item.replace(
                                         /\*\*(.*?)\*\*/g,
                                         `<strong class='text-white font-bold tracking-wider'>$1</strong>`
                                         ),
                                     }}
                                   />
                               ))}
                           </div>
                       </CardContent>
                   </Card>
                ) : (
                /* Estilo 2: Con Imagen (2 Columnas Cyberpunk) */
                   <div className={`flex flex-col lg:flex-row gap-12 items-stretch ${Slide.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                       
                       {/* Columna de Texto */}
                       <Card className={`tech-border flex-1 group relative overflow-hidden flex flex-col p-8 md:p-12 bg-background/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-10 border-white/10`}>
                           <div className={`absolute top-0 ${Slide.align === 'right' ? 'right-0' : 'left-0'} w-2 h-full bg-${Slide.accent} shadow-[0_0_15px_rgba(var(--${Slide.accent}),1)]`}></div>
                           
                           <CardHeader className="p-0 mb-8 relative z-10">
                               <div className="flex items-center mb-6">
                                   <div className={`h-14 w-14 rounded-xl bg-${Slide.accent}/10 border border-${Slide.accent}/50 flex items-center justify-center mr-6 shadow-[0_0_20px_rgba(var(--${Slide.accent}),0.3)]`}>
                                      <Slide.icon className={`h-7 w-7 text-${Slide.accent}`} />
                                   </div>
                                   <CardTitle className="text-3xl md:text-5xl font-black text-foreground tracking-tighter uppercase font-mono">
                                      {Slide.title}
                                   </CardTitle>
                               </div>
                               {Slide.subtitle && (
                                   <h3 className={`text-xl md:text-2xl text-${Slide.accent} font-bold ml-20 uppercase tracking-widest font-mono`}>
                                       // {Slide.subtitle}
                                   </h3>
                               )}
                           </CardHeader>
                           
                           <CardContent className="p-0 ml-0 md:ml-20 relative z-10">
                               <div className="space-y-8 text-lg md:text-xl text-muted-foreground font-mono">
                                   {Slide.content.map((item, i) => (
                                       <div key={i} className="flex items-start bg-black/40 p-5 rounded-lg border border-white/5">
                                           <Zap className={`w-6 h-6 text-${Slide.accent} mr-4 flex-shrink-0 animate-pulse`} />
                                           <p
                                             className="leading-relaxed"
                                             dangerouslySetInnerHTML={{
                                                 __html: item.replace(
                                                 /\*\*(.*?)\*\*/g,
                                                 `<strong class='text-white font-bold tracking-wide'>$1</strong>`
                                                 ),
                                             }}
                                           />
                                       </div>
                                   ))}
                               </div>
                           </CardContent>
                       </Card>

                       {/* Columna de Imagen */}
                       <div className="flex-1 relative group overflow-hidden rounded-3xl border-2 border-white/10 min-h-[400px] shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                           <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10`}></div>
                           <div className={`absolute inset-0 bg-${Slide.accent}/20 mix-blend-color z-10`}></div>
                           
                           <img 
                              src={Slide.image} 
                              alt={Slide.title}
                              className="w-full h-full object-cover group-hover:scale-[1.15] transition-transform duration-[2000ms] opacity-80"
                           />
                           
                           {/* Adornos cyberpunk sobre la imagen */}
                           <div className="absolute top-6 left-6 z-20 flex gap-3">
                               <div className={`w-3 h-3 rounded-full bg-${Slide.accent} animate-pulse shadow-[0_0_10px_rgba(var(--${Slide.accent}),1)]`}></div>
                               <div className={`w-3 h-3 rounded-full bg-${Slide.accent} animate-pulse delay-100 shadow-[0_0_10px_rgba(var(--${Slide.accent}),1)]`}></div>
                           </div>
                           
                           {/* Cuadrícula decorativa overlay */}
                           <div className="absolute inset-0 z-10 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

                           <div className={`absolute bottom-6 ${Slide.align === 'right' ? 'left-6' : 'right-6'} z-20 text-xs font-mono text-${Slide.accent} font-bold uppercase tracking-[0.3em] bg-black/80 px-4 py-2 rounded-md border border-${Slide.accent}/50 backdrop-blur-md`}>
                               SYS.DATA.{Slide.id.replace('-', '.').toUpperCase()}
                           </div>
                       </div>
                       
                   </div>
                )}
            </section>
            ))}

            {/* CHECKOUT WEB3 (PAGO DESCENTRALIZADO) */}
            <section className="scroll-mt-32" id="checkout-section">
                <CheckoutWeb3 />
            </section>
        </div>
      </main>
    </div>
  );
};

export default PropuestaBI;
