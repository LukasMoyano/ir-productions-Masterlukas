/**
 * @file CultivatechPresentation.tsx
 * @description Presentación interactiva del proyecto Cultivatech.
 * Enfocada en Economía Circular, E-Waste y Agricultura de Precisión.
 * Estilo: Cyberpunk Andino / AgroTech Soberano
 */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  Sprout,
  Layers,
  Gem,
  BarChart as BarChartIcon,
  Users,
  PieChart as PieChartIcon,
  TrendingUp,
  Bot,
  DollarSign,
  Mail,
  Activity,
  User,
  Briefcase,
  Flame,
  ArrowRight
} from "lucide-react";

import Header from "@/components/Header";

// Importación de Activos (Imágenes)
import educationImage from "@/assets/agro-tech-farmers.jpg";
import businessModel from "@/assets/e-waste-assets/720x450_SCYCLE_article_image_0.jpg";
import agriculturaEficienteImage from "@/assets/E-Waste_y_la_Necesidad_de_una_Agricultura_Eficiente.png";
import residuosAltaTecnologiaImage from "@/assets/De_Residuos_a_Componentes_de_Alta_Tecnologia.png";
import robotImage from "@/assets/iot-robot.jpg";
import laMinaUrbana from "@/assets/La_-MinaUrbana-_.png";
import bannerPresentacion001 from "@/assets/banner_presentacion001.png";

// ============================================================================
// ESTRUCTURA DE DATOS
// ============================================================================
const presentationData = {
  title: "PRESENTACIÓN DE CULTIVATECH",
  sections: [
    {
      id: "cultivatech-vision",
      icon: Sprout,
      title: "Sembrando el Futuro de la Agricultura Sostenible",
      content: `Cultivatech es una iniciativa de IR Productions que fusiona la innovación tecnológica con la agricultura sostenible. Nuestro objetivo es transformar los desechos electrónicos (e-waste) en recursos valiosos para el campo, creando un ecosistema donde la tecnología y la naturaleza prosperan en armonía.`,
      image: bannerPresentacion001,
      imageAlt: "Visión de Cultivatech: Fusión de tecnología y agricultura",
    },
    {
      id: "problem-statement",
      icon: BarChartIcon,
      title: "El E-Waste y la Necesidad de una Agricultura Eficiente",
      content: [
        "**Problema Global:** Cada año, el mundo genera una montaña de **62 mil millones de kg** de e-waste.",
        "**Desafío Nacional (Colombia 2022):** Colombia generó **388,000 toneladas**, pero solo un alarmante **1%** fue gestionado formalmente.",
        "**Impacto Negativo:** Esta gestión deficiente libera **58,000 kg de mercurio** y **45 millones de kg de plásticos tóxicos** al ambiente CADA AÑO.",
        "**Nuestra Visión:** Vemos cada residuo como una **mina urbana**, una oportunidad para formalizar y tecnificar la labor de los recuperadores.",
      ],
      chartData: {
        type: "pie",
        data: [
          { name: "No Recolectado Formalmente", value: 99, fill: "#dc2626" }, // Red
          { name: "Recolectado Formalmente", value: 1, fill: "#00E5FF" }, // Cyan terminal
        ],
        source: "Datos Colombia (2022) & Global E-waste Monitor 2024",
      },
      image: agriculturaEficienteImage,
    },
    {
      id: "tech-components",
      icon: Layers,
      title: "De Residuos a Componentes de Alta Tecnología",
      content: [
        "Nuestra propuesta es un ecosistema circular que transforma el problema en un motor de desarrollo en 3 fases clave:",
        "**1. Recuperación Estratégica:** Alianzas y certificación de familias recuperadoras.",
        "**2. Preparación y Clasificación:** Trazabilidad y pureza de materiales bajo estándares de calidad.",
        "**3. Transformación (Upcycling):** Convertimos residuos en materia prima de alto valor: filamento 3D a partir de plásticos y chasis de robots a partir de metales.",
      ],
      image: residuosAltaTecnologiaImage,
    },
    {
      id: "urban-mine",
      icon: Gem,
      title: "La 'Mina Urbana' que Impulsa Nuestra Soberanía",
      content: [
        "**Supra-Reciclaje:** Cada residuo electrónico que procesamos es una mina que no necesitamos cavar. Al recuperar metales como Oro (Au), Plata (Ag), y Cobre (Cu), reducimos la dependencia de la minería extractiva y su impacto ambiental.",
      ],
      materials: [
        { name: "Oro", symbol: "Au", atomicNumber: 79, atomicMass: "196.97", color: "#D4AF37" },
        { name: "Plata", symbol: "Ag", atomicNumber: 47, atomicMass: "107.87", color: "#C0C0C0" },
        { name: "Paladio", symbol: "Pd", atomicNumber: 46, atomicMass: "106.42", color: "#B1B1B1" },
        { name: "Cobre", symbol: "Cu", atomicNumber: 29, atomicMass: "63.55", color: "#B87333" },
      ],
      image: laMinaUrbana,
    },
    {
      id: "agri-intelligence",
      icon: Bot,
      title: "La Inteligencia Agrícola Nace del Reciclaje",
      content: [
        "Con la materia prima que rescatamos, construimos el Kit Agro-IoT 'Cultivatech ColombIA'.",
        "**Hechos en Colombia:** Robots autónomos de bajo costo, con chasis de aluminio reciclado y piezas impresas en 3D con nuestro filamento.",
        "**Soberanía Tecnológica:** Fomentamos la independencia comercial de Colombia, haciéndonos menos vulnerables a las fluctuaciones del mercado global.",
      ],
      image: robotImage,
    },
    {
      id: "real-impact",
      icon: DollarSign,
      title: "Impacto Real: Productividad y Trazabilidad",
      content: [
        "Nuestra plataforma de monitoreo 24/7 ofrece beneficios cuantificables para diversos cultivos:",
        "**Resultados (Alpha Testing):** Prototipos validados por SENA Tecnoparque muestran un potencial de aumento en la productividad del **15% al 25%** y una reducción de pérdidas de hasta el **30%**.",
      ],
      chartData: {
        type: "bar",
        data: [
          { name: "Reducción Pérdidas", value: 30, fill: "#00E5FF" }, // Cyan
          { name: "Aumento Productividad", value: 25, fill: "#FF7A00" }, // Amber
        ],
        source: "Estimaciones de Proyectos Piloto y Alpha Testing",
      },
    },
    {
      id: "business-model",
      icon: PieChartIcon,
      title: "Un Modelo de Negocio Sólido y Rentable",
      content: [
        "**Sostenible (Ambiental):** Valorizamos residuos y evitamos la minería extractiva.",
        "**Sustentable (Social):** Generamos empleo digno para familias recuperadoras.",
        "**Rentable (Económico):** Múltiples flujos de ingreso con costos optimizados gracias al upcycling.",
      ],
      image: businessModel,
    }
  ],
};

// Componente para Tooltips personalizados en los gráficos
interface CustomTooltipProps {
  active?: boolean;
  payload?: { name: string; value: string | number; color?: string; payload?: any }[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-3 bg-black/90 border border-white/20 rounded-md shadow-[0_0_15px_rgba(0,229,255,0.2)] font-mono text-xs text-white">
        <p className="font-bold text-muted-foreground uppercase mb-1 border-b border-white/10 pb-1">{`${label}`}</p>
        <p className="font-bold" style={{ color: payload[0].payload.fill }}>{`${payload[0].name}: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

// ============================================================================
// COMPONENTE PRINCIPAL
// ============================================================================
const CultivatechPresentation = () => {
  const [formData, setFormData] = useState({ nombre: "", correo: "", interes: "Aliado Fénix" });

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          // Compensar el header fijo
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          
          // Efecto visual temporal para destacar la sección
          element.classList.add("ring-4", "ring-tech-green", "ring-offset-8", "ring-offset-background");
          setTimeout(() => {
            element.classList.remove("ring-4", "ring-tech-green", "ring-offset-8", "ring-offset-background");
          }, 3000);
        }
      }, 500);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFenixCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*🔥 INICIATIVA FÉNIX (CultivaTech)*\n\n` +
      `*👤 Identificación:* ${formData.nombre}\n` +
      `*📧 Contacto:* ${formData.correo}\n` +
      `*🎯 Rol Estratégico:* ${formData.interes}\n\n` +
      `_Deseo conectar con el proyecto de Soberanía Tecnológica y RAEE._`;
    const whatsappUrl = `https://wa.me/573197919742?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background circuit-pattern text-white selection:bg-tech-green/50">
      <Header language={"es"} toggleLanguage={() => window.location.href = '/'} />

      <main className="pt-24 pb-20 relative z-10">
        <div className="container-ir mb-12">
          <Link to="/" className="inline-flex items-center font-mono uppercase tracking-widest text-xs text-muted-foreground hover:text-tech-green transition-colors bg-black/50 p-2 px-4 rounded border border-white/5 hover:border-tech-green/50">
            <ArrowLeft className="mr-2 w-4 h-4" />
            &lt; Regresar a IR Nexus
          </Link>
        </div>

        {/* Título Principal Cyberpunk */}
        <div className="container-ir text-center mb-16">
            <h1 className="text-4xl md:text-7xl font-black uppercase font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-tech-green via-primary to-accent drop-shadow-[0_0_20px_rgba(56,142,60,0.5)] mb-4">
                CULTIVATECH COLOMBIA
            </h1>
            <p className="text-xl md:text-2xl font-mono text-muted-foreground max-w-3xl mx-auto uppercase tracking-widest">
                Agrotech Soberano &amp; Minería Urbana
            </p>
        </div>

        {/* Iteración de Secciones */}
        {presentationData.sections.map((slide, index) => (
          <section key={slide.id} id={slide.id} className="py-16 scroll-mt-24 transition-all duration-1000">
            <div className="container-ir">
              <Card className="tech-border bg-black/60 backdrop-blur-xl hover-lift group overflow-hidden relative flex flex-col border-white/10 hover:border-tech-green/40 shadow-xl">
                
                {/* Deco lines */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tech-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {slide.image && (
                  <div className="relative h-64 md:h-96 overflow-hidden border-b border-white/10">
                    <img
                      src={slide.image}
                      alt={slide.imageAlt || slide.title}
                      className={cn(
                        "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
                      )}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    {/* Estampilla de índice */}
                    <div className="absolute bottom-4 left-6 bg-black/80 border border-white/20 text-white font-mono text-xs px-3 py-1 uppercase tracking-widest backdrop-blur-md">
                        SYS.DATA.{String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                )}
                
                <CardContent className="p-8 md:p-12 flex-grow">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* Contenido Textual */}
                    <div className="space-y-6 max-w-prose">
                      <div className="flex items-center mb-6">
                        {slide.icon && (
                          <div className="p-3 bg-white/5 border border-white/10 rounded-lg mr-4 group-hover:border-tech-green/50 transition-colors">
                              <slide.icon className="h-8 w-8 text-tech-green drop-shadow-[0_0_10px_rgba(56,142,60,0.8)]" />
                          </div>
                        )}
                        <h2 className="text-2xl md:text-4xl font-black uppercase font-mono tracking-tight text-white leading-none">
                          {slide.title}
                        </h2>
                      </div>

                      <div className="space-y-4 font-mono text-sm md:text-base text-muted-foreground/90">
                        {Array.isArray(slide.content)
                          ? slide.content.map((item, i) => (
                              <p
                                key={i}
                                className="leading-relaxed border-l-2 border-white/10 pl-4 group-hover:border-accent/40 transition-colors"
                                dangerouslySetInnerHTML={{
                                  __html: item.replace(/\*\*(.*?)\*\*/g, "<strong class='text-white'>$1</strong>"),
                                }}
                              />
                            ))
                          : slide.content && (
                              <p
                                className="leading-relaxed border-l-2 border-white/10 pl-4 group-hover:border-accent/40 transition-colors"
                                dangerouslySetInnerHTML={{
                                  __html: slide.content.replace(/\*\*(.*?)\*\*/g, "<strong class='text-white'>$1</strong>"),
                                }}
                              />
                            )}
                      </div>
                    </div>

                    <div className="space-y-8 flex flex-col items-center justify-center">
                      {/* Visualización de Datos (Gráficos Recharts en modo Cyberpunk) */}
                      {slide.chartData && (
                        <div className="w-full max-w-md h-72 bg-black/40 p-4 border border-white/10 rounded-xl relative">
                          {/* Glitch Overlay decorativo */}
                          <div className="absolute top-2 right-2 text-[8px] font-mono text-tech-green/40 uppercase tracking-widest">REALTIME_METRICS</div>
                          
                          <ResponsiveContainer width="100%" height="100%">
                            {slide.chartData.type === "bar" ? (
                              <BarChart data={slide.chartData.data} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                                <XAxis dataKey="name" stroke="#666" fontSize={10} tickLine={false} axisLine={false} fontFamily="monospace" />
                                <YAxis stroke="#666" fontSize={10} tickLine={false} axisLine={false} fontFamily="monospace" />
                                <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.05)" }} />
                                <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                                  {slide.chartData.data.map((entry, idx) => (
                                    <Cell key={`cell-${idx}`} fill={entry.fill} className="hover:opacity-80 transition-opacity" />
                                  ))}
                                </Bar>
                              </BarChart>
                            ) : (
                              <PieChart>
                                <Pie
                                  data={slide.chartData.data}
                                  dataKey="value"
                                  nameKey="name"
                                  cx="50%"
                                  cy="50%"
                                  innerRadius={60}
                                  outerRadius={90}
                                  paddingAngle={5}
                                  stroke="none"
                                >
                                  {slide.chartData.data.map((entry, idx) => (
                                    <Cell key={`cell-${idx}`} fill={entry.fill} />
                                  ))}
                                </Pie>
                                <Tooltip content={<CustomTooltip />} />
                                <Legend wrapperStyle={{ fontSize: '10px', fontFamily: 'monospace', color: '#888' }} />
                              </PieChart>
                            )}
                          </ResponsiveContainer>
                        </div>
                      )}
                      
                      {/* Visualización de Materiales (Tabla Periódica) */}
                      {slide.materials && (
                        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                          {slide.materials.map((material) => (
                            <div
                              key={material.name}
                              className="p-4 rounded-md border border-white/10 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-300 hover:scale-105"
                              style={{ backgroundColor: `${material.color}15` }}
                            >
                              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: `radial-gradient(circle at center, ${material.color} 0%, transparent 70%)` }}></div>
                              <span className="absolute top-2 left-2 text-xs font-mono text-white/50">{material.atomicNumber}</span>
                              <h3 className="text-5xl font-black font-mono mt-2" style={{ color: material.color, textShadow: `0 0 15px ${material.color}40` }}>
                                {material.symbol}
                              </h3>
                              <p className="font-bold text-sm uppercase tracking-widest mt-1 text-white">{material.name}</p>
                              <p className="text-[10px] font-mono text-white/40">{material.atomicMass}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Fuentes de Datos */}
                  {slide.chartData?.source && (
                    <p className="text-[10px] text-muted-foreground uppercase font-mono tracking-widest text-right mt-8 pt-4 border-t border-white/5">
                      FUENTE: {slide.chartData.source}
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </section>
        ))}

        {/* EMBUDO FINAL CONMEMORATIVO: PROYECTO FENIX */}
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-background to-background pointer-events-none"></div>
            
            <div className="container-ir relative z-10">
                <Card className="tech-border bg-black/80 backdrop-blur-2xl border-accent/50 shadow-[0_0_50px_rgba(255,122,0,0.15)] overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
                        
                        {/* Lado Izquierdo: Fenix Info */}
                        <div className="lg:col-span-2 p-10 md:p-14 border-r border-white/10 flex flex-col justify-center relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-[100px] pointer-events-none"></div>
                            
                            <Badge className="w-fit mb-6 bg-accent/10 text-accent border border-accent/50 font-mono text-xs uppercase tracking-[0.3em] py-2">
                                <Flame className="w-4 h-4 mr-2" />
                                Iniciativa Fénix
                            </Badge>
                            
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6 leading-tight">
                                Renaciendo de <br/><span className="text-accent">las Cenizas.</span>
                            </h2>
                            
                            <p className="font-mono text-muted-foreground text-sm leading-relaxed mb-8 border-l-2 border-accent pl-4">
                                Fénix es el clímax de nuestra visión de economía circular. No solo reparamos computadores, extraemos componentes vitales (RAEE) y les damos una nueva vida para comunidades rurales y robótica agrícola.
                            </p>

                            <a href="https://fusacompufenix.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-block w-full">
                                <Button className="w-full h-14 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-mono uppercase tracking-widest text-xs flex items-center justify-between group">
                                    Explorar Sitio de Fénix
                                    <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-2 transition-transform" />
                                </Button>
                            </a>
                        </div>

                        {/* Lado Derecho: Contact Form */}
                        <div className="lg:col-span-3 p-10 md:p-14 bg-gradient-to-br from-black to-black/90">
                            <div className="max-w-md mx-auto">
                                <div className="flex items-center mb-8">
                                    <Activity className="w-6 h-6 text-tech-green mr-3 animate-pulse" />
                                    <h3 className="text-xl font-bold font-mono uppercase tracking-widest text-white">Conexión Segura</h3>
                                </div>

                                <form onSubmit={handleFenixCheckout} className="space-y-5 font-mono">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase text-muted-foreground tracking-widest">Identificación</label>
                                        <div className="flex bg-white/5 border border-white/10 rounded-md overflow-hidden focus-within:border-accent focus-within:ring-1 focus-within:ring-accent transition-all">
                                            <span className="flex items-center px-4 bg-black/50 border-r border-white/10"><User className="w-4 h-4 text-accent" /></span>
                                            <input type="text" name="nombre" required value={formData.nombre} onChange={handleInputChange} placeholder="Tu Nombre o Empresa" className="w-full bg-transparent p-3 text-sm text-white outline-none placeholder:text-white/20" />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase text-muted-foreground tracking-widest">Comunicaciones</label>
                                        <div className="flex bg-white/5 border border-white/10 rounded-md overflow-hidden focus-within:border-tech-green focus-within:ring-1 focus-within:ring-tech-green transition-all">
                                            <span className="flex items-center px-4 bg-black/50 border-r border-white/10"><Mail className="w-4 h-4 text-tech-green" /></span>
                                            <input type="email" name="correo" required value={formData.correo} onChange={handleInputChange} placeholder="correo@electronico.com" className="w-full bg-transparent p-3 text-sm text-white outline-none placeholder:text-white/20" />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase text-muted-foreground tracking-widest">Rol de Conexión</label>
                                        <div className="flex bg-white/5 border border-white/10 rounded-md overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                                            <span className="flex items-center px-4 bg-black/50 border-r border-white/10"><Briefcase className="w-4 h-4 text-primary" /></span>
                                            <select name="interes" value={formData.interes} onChange={handleInputChange} className="w-full bg-transparent p-3 text-sm text-white outline-none [&>option]:bg-zinc-900 cursor-pointer">
                                                <option value="Aliado Fénix (Aportar Equipos)">Quiero donar/aportar equipos RAEE</option>
                                                <option value="Inversionista AgriTech">Soy inversionista AgriTech</option>
                                                <option value="Productor Agrícola">Soy productor y necesito tecnología</option>
                                                <option value="Prensa / Académico">Soy de academia o prensa</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="pt-6">
                                        <button 
                                            type="submit" 
                                            className="w-full h-14 bg-accent hover:bg-accent/90 text-black font-black font-mono uppercase tracking-[0.2em] rounded-md transition-all flex items-center justify-center group"
                                        >
                                            Iniciar Transmisión
                                            <Activity className="w-5 h-5 ml-3 group-hover:animate-pulse" />
                                        </button>
                                        <p className="text-[10px] text-center text-muted-foreground mt-4 uppercase tracking-widest">
                                            *La transmisión se encriptará y se enviará directamente vía WhatsApp Central.
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>

      </main>
    </div>
  );
};

export default CultivatechPresentation;
