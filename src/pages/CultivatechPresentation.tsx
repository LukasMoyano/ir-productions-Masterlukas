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
  Scale,
  Bot,
  DollarSign,
  Mail,
} from "lucide-react";
import Header from "@/components/Header";

// --- IMAGE IMPORTS ---
import heroImage from "@/assets/hero-background.jpg";
import educationImage from "@/assets/agro-tech-farmers.jpg";
import businessModel from "@/assets/e-waste-assets/720x450 SCYCLE article image_0.jpg";
import agriculturaEficienteImage from "../assets/E-Waste_y_la_Necesidad_de_una_Agricultura_Eficiente.png";
import residuosAltaTecnologiaImage from "../assets/De_Residuos_aComponentes_de_Alta_Tecnología.png";
import robotImage from "@/assets/iot-robot.jpg";
import laMinaUrbana from "../assets/La_-MinaUrbana-_.png";
import bannerPresentacion001 from "../assets/banner_presentacion001.png";

// --- DATA STRUCTURE ---
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
          {
            name: "No Recolectado Formalmente en Colombia (%)",
            value: 99,
            fill: "#dc2626",
          },
          {
            name: "Recolectado Formalmente en Colombia (%)",
            value: 1,
            fill: "#16a34a",
          },
        ],
        source: "Datos Colombia (2022) & Global E-waste Monitor 2024",
      },
      image: agriculturaEficienteImage,
    },
    {
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
      icon: Gem,
      title: "La 'Mina Urbana' que Impulsa Nuestra Soberanía",
      content: [
        "**Supra-Reciclaje:** Cada residuo electrónico que procesamos es una mina que no necesitamos cavar. Al recuperar metales como Oro (Au), Plata (Ag), y Cobre (Cu), reducimos la dependencia de la minería extractiva y su impacto ambiental.",
      ],
      materials: [
        {
          name: "Oro",
          symbol: "Au",
          atomicNumber: 79,
          atomicMass: "196.97",
          color: "#D4AF37",
        },
        {
          name: "Plata",
          symbol: "Ag",
          atomicNumber: 47,
          atomicMass: "107.87",
          color: "#C0C0C0",
        },
        {
          name: "Paladio",
          symbol: "Pd",
          atomicNumber: 46,
          atomicMass: "106.42",
          color: "#B1B1B1",
        },
        {
          name: "Cobre",
          symbol: "Cu",
          atomicNumber: 29,
          atomicMass: "63.55",
          color: "#B87333",
        },
      ],
      image: laMinaUrbana,
    },
    {
      icon: Bot,
      title:
        "Cultivatech ColombIA: La Inteligencia Agrícola Nace del Reciclaje",
      content: [
        "Con la materia prima que rescatamos, construimos el Kit Agro-IoT 'Cultivatech ColombIA'.",
        "**Hechos en Colombia:** Robots autónomos de bajo costo, con chasis de aluminio reciclado y piezas impresas en 3D con nuestro filamento.",
        "**Soberanía Tecnológica:** Fomentamos la independencia comercial de Colombia, haciéndonos menos vulnerables a las fluctuaciones del mercado global.",
      ],
      image: robotImage,
    },
    {
      icon: DollarSign,
      title: "Impacto Real en el Campo: Más Productividad, Más Ingresos",
      content: [
        "Nuestra plataforma de monitoreo 24/7 ofrece beneficios cuantificables para diversos cultivos:",
        "**Resultados (Alpha Testing):** Prototipos validados por SENA Tecnoparque muestran un potencial de aumento en la productividad del **15% al 25%** y una reducción de pérdidas de hasta el **30%**.",
      ],
      chartData: {
        type: "bar",
        data: [
          { name: "Reducción Pérdidas", value: 30, fill: "#16a34a" },
          { name: "Aumento Productividad", value: 25, fill: "#3b82f6" },
        ],
        source: "Estimaciones de Proyectos Piloto y Alpha Testing",
      },
    },
    {
      icon: Users,
      title: "Empoderando al Campo: Conocimiento, Tecnología y Comunidades",
      content: [
        "**Talleres Tecnológicos Accesibles:** Llevamos formación práctica y adaptada a las comunidades agrícolas.",
        "**Integración de Experiencia:** Creamos puentes generacionales de aprendizaje con mentores expertos como pensionados del SENA.",
        "**Desarrollo de Capacidades:** Empoderamos a los agricultores para que se conviertan en líderes de la agricultura digital.",
      ],
      image: educationImage,
    },
    {
      icon: PieChartIcon,
      title: "Un Modelo de Negocio Sólido y Rentable",
      content: [
        "**Sostenible (Ambiental):** Valorizamos residuos y evitamos la minería extractiva.",
        "**Sustentable (Social):** Generamos empleo digno para familias recuperadoras.",
        "**Rentable (Económico):** Múltiples flujos de ingreso con costos optimizados gracias al upcycling.",
      ],
      image: businessModel,
    },
    {
      icon: TrendingUp,
      title: "Invierta en el Futuro: Un Rendimiento que Cultiva Valor",
      content: [
        "**Tracción Validada:** Plataforma Alpha certificada por SENA Tecnoparque y prototipos funcionales.",
        "**Oportunidad de Escalamiento:** Buscamos capital semilla para escalar nuestra operación y llevar Cultivatech a 1,000 agricultores en 2 años.",
        "**¿Por qué Invertir?** Participe en un negocio con triple retorno medible: económico, social y ambiental.",
      ],
      chartData: {
        type: "bar",
        data: [
          { name: "Año 1", value: 250, fill: "#3b82f6" },
          { name: "Año 2", value: 1000, fill: "#16a34a" },
        ],
        source: "Proyección de Agricultores Impactados",
      },
    },
    {
      icon: Mail,
      title: "Juntos, Sembremos el Cambio",
      content: [
        "Gracias por su tiempo. Contáctenos para transformar un desafío en una oportunidad sin precedentes para Colombia.",
        "**Lukas Moyano M. | CEO, CTO, Founder**",
        "+57 3197919742 | lukasmoyanomorales@gmail.com",
      ],
    },
  ],
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: { name: string; value: string | number }[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-background/80 border rounded-lg shadow-lg">
        <p className="label font-bold">{`${label}`}</p>
        <p className="intro text-primary">{`${payload[0].name}: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const CultivatechPresentation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header language={"es"} toggleLanguage={() => {}} />
      <main>
        {presentationData.sections.map((slide, index) => (
          <section key={slide.id} className="py-20 circuit-pattern">
            <div className="container mx-auto px-4 lg:px-8">
              <Card className="tech-border hover-lift group overflow-hidden relative flex flex-col">
                {slide.image && (
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.imageAlt || slide.title}
                      className={cn(
                        "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      )}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <div className="flex items-center justify-center mb-4">
                    {slide.icon && (
                      <slide.icon className="h-12 w-12 mr-4 text-primary" />
                    )}
                    <CardTitle className="text-4xl md:text-5xl font-bold gradient-text-primary">
                      {slide.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 md:p-8 flex-grow">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="space-y-5 text-lg text-muted-foreground max-w-prose mx-auto lg:mx-0">
                      {Array.isArray(slide.content)
                        ? slide.content.map((item, i) => (
                            <p
                              key={i}
                              dangerouslySetInnerHTML={{
                                __html: item.replace(
                                  /\*\*(.*?)\*\*/g,
                                  "<strong>$1</strong>"
                                ),
                              }}
                            />
                          ))
                        : slide.content && (
                            <p
                              dangerouslySetInnerHTML={{
                                __html: slide.content.replace(
                                  /\*\*(.*?)\*\*/g,
                                  "<strong>$1</strong>"
                                ),
                              }}
                            />
                          )}
                    </div>

                    <div className="not-prose space-y-8 flex flex-col items-center">
                      {slide.chartData && (
                        <div className="w-full max-w-md h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            {slide.chartData.type === "bar" ? (
                              <BarChart data={slide.chartData.data}>
                                <XAxis
                                  dataKey="name"
                                  stroke="hsl(var(--muted-foreground))"
                                  fontSize={12}
                                  tickLine={false}
                                  axisLine={false}
                                />
                                <YAxis
                                  stroke="hsl(var(--muted-foreground))"
                                  fontSize={12}
                                  tickLine={false}
                                  axisLine={false}
                                />
                                <Tooltip
                                  content={<CustomTooltip />}
                                  cursor={{
                                    fill: "hsla(var(--primary) / 0.1)",
                                  }}
                                />
                                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                                  {slide.chartData.data.map((entry, idx) => (
                                    <Cell
                                      key={`cell-${idx}`}
                                      fill={entry.fill}
                                    />
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
                                  outerRadius={100}
                                  label
                                >
                                  {slide.chartData.data.map((entry, idx) => (
                                    <Cell
                                      key={`cell-${idx}`}
                                      fill={entry.fill}
                                    />
                                  ))}
                                </Pie>
                                <Tooltip content={<CustomTooltip />} />
                                <Legend />
                              </PieChart>
                            )}
                          </ResponsiveContainer>
                        </div>
                      )}
                      {slide.materials && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-lg">
                          {slide.materials.map((material) => (
                            <div
                              key={material.name}
                              className="p-3 rounded-lg border-2 border-black/10 dark:border-white/10 flex flex-col justify-between aspect-square"
                              style={{
                                backgroundColor: material.color,
                                boxShadow: `0 0 25px -5px ${material.color}`,
                              }}
                            >
                              <span className="text-2xl font-bold text-black/80">
                                {material.atomicNumber}
                              </span>
                              <h3
                                className="text-6xl font-black text-center text-black/90"
                                style={{
                                  textShadow:
                                    "1px 1px 2px rgba(255,255,255,0.2)",
                                }}
                              >
                                {material.symbol}
                              </h3>
                              <div className="text-center text-black/80">
                                <p className="font-bold text-md uppercase">
                                  {material.name}
                                </p>
                                <p className="text-sm opacity-80">
                                  {material.atomicMass}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  {slide.chartData?.source && (
                    <p className="text-xs text-muted-foreground/70 italic text-center mt-8 pt-4 border-t border-border/50">
                      {slide.chartData.source}
                    </p>
                  )}
                </CardContent>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-lg transition-all duration-300 pointer-events-none" />
              </Card>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default CultivatechPresentation;
