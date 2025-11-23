import { Link } from "react-router-dom";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from 'recharts';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Sprout, Layers, Gem, Bot, DollarSign, BarChart as BarChartIcon, Users, PieChart as PieChartIcon, TrendingUp, Scale } from "lucide-react";

// --- FINAL UNIFIED PRESENTATION DATA STRUCTURE ---
const presentationData = [
    {
		icon: Sprout,
		title: "Cultivatech ColombIA: De Residuos Digitales a Cosechas del Futuro.",
		subtitle: "_-IR-_Productions: Un Ecosistema Circular que Impulsa la Agricultura Sostenible y la Soberanía Tecnológica en Colombia.",
	},
    {
        icon: BarChartIcon,
        title: "El Desafío Global y la Oportunidad Colombiana",
        content: [
            "**Problema Global:** Se generan **62 mil millones de kg de e-waste** al año, el equivalente a 1.55 millones de camiones en una fila que daría la vuelta al mundo.",
            "**Impacto Negativo:** Esto libera anualmente 58 mil kg de mercurio y 45 millones de kg de plásticos peligrosos al ambiente.",
            "**Oportunidad Local:** En _-IR-_Productions, vemos cada residuo como una **mina urbana** para formalizar, dignificar y tecnificar la labor de las familias recuperadoras en Colombia.",
        ],
        chartData: {
            type: 'bar',
            data: [
                { name: 'Generado Globalmente', value: 62, fill: '#dc2626' },
                { name: 'Reciclado Formalmente', value: 13.8, fill: '#16a34a' },
            ],
            source: "Global E-waste Monitor 2024"
        }
    },
    {
		icon: Layers,
		title: "Nuestra Solución: Un Ecosistema Circular de Alto Valor",
		content: [
            "**1. Recuperación Estratégica:** Certificamos y tecnificamos a familias recuperadoras para la recolección formal de residuos.",
            "**2. Preparación y Clasificación:** Aseguramos la trazabilidad y pureza de los materiales con estándares de calidad.",
            "**3. Transformación (Upcycling):** Convertimos los residuos en materia prima de alto valor para nuestra propia producción tecnológica.",
        ],
	},
    {
		icon: Gem,
		title: "RAEE: La 'Mina Urbana' que Impulsa Nuestra Soberanía",
        content: ["La recuperación de metales preciosos y estratégicos reduce la dependencia de la minería extractiva y la importación."],
        materials: [
            { name: "Oro", symbol: "Au", atomicNumber: 79, atomicMass: "196.97", color: "#D4AF37" },
            { name: "Plata", symbol: "Ag", atomicNumber: 47, atomicMass: "107.87", color: "#C0C0C0" },
            { name: "Paladio", symbol: "Pd", atomicNumber: 46, atomicMass: "106.42", color: "#B1B1B1" },
            { name: "Cobre", symbol: "Cu", atomicNumber: 29, atomicMass: "63.55", color: "#B87333" },
        ],
	},
    {
        icon: Scale,
        title: "Desglose de 1 Tonelada de E-Waste de Computadoras",
        content: ["El valor económico real está en la composición. Cada tonelada procesada es una fuente de ingresos y de materiales estratégicos."],
        compositionData: {
            chart: [
                { name: 'Plásticos', kg: 300, fill: '#3b82f6' },
                { name: 'Cobre', kg: 80, fill: '#B87333' },
                { name: 'Hierro', kg: 32, fill: '#4b5563' },
                { name: 'Aluminio', kg: 8, fill: '#d1d5db' },
                { name: 'Plomo', kg: 8, fill: '#6b7280' },
                { name: 'Oro', kg: 0.4, fill: '#D4AF37' },
            ],
            prices: [
                { name: 'Oro', value: "~$491,323,000" },
                { name: 'Paladio', value: "~$166,670,000" },
                { name: 'Plata', value: "~$6,040,000" },
                { name: 'Cobre', value: "~$25,000" },
                { name: 'Aluminio', value: "~$4,000" },
                { name: 'Plomo', value: "~$4,000" },
                { name: 'Plástico (PET)', value: "~$2,000" },
            ],
            source: "ResearchGate & sondeos de mercado local (2025)"
        }
    },
    {
		icon: Bot,
		title: "El Producto: Kit Agro-IoT 'Cultivatech ColombIA'",
		content: [
            "**Hechos en Colombia:** Robots autónomos, robustos y de bajo costo, con chasis de aluminio y piezas impresas en 3D con nuestros materiales reciclados.",
            "**Tecnología Integrada:** Equipados con sensores de precisión, cámaras IA y conectividad LoRaWAN para monitoreo 24/7.",
            "**Soberanía Tecnológica:** Reducimos la dependencia de importaciones y controlamos nuestra cadena de producción."
        ],
	},
    {
		icon: DollarSign,
		title: "Impacto Real: Rentabilidad para el Agricultor",
		content: [
            "Nuestra tecnología permite:",
            "**Optimización:** Reducción de hasta un 30% en pérdidas de cultivos.",
            "**Precisión:** Control exacto de condiciones para cultivos de alto valor (ej. hongos).",
            "**Prevención:** Monitoreo de salud en colmenas para apicultura.",
        ],
        chartData: {
            type: 'pie',
            data: [
                { name: 'Reducción de Pérdidas', value: 30, fill: '#16a34a' },
                { name: 'Costo de Insumos', value: 20, fill: '#f97316' },
                { name: 'Aumento Productividad', value: 25, fill: '#3b82f6' },
            ],
            source: "Estimaciones basadas en proyectos piloto"
        }
	},
    {
        icon: Users,
        title: "Empoderando al Campo: Educación como Pilar",
        content: [
            "**Talleres Tecnológicos Accesibles:** Llevamos formación práctica y adaptada a las comunidades agrícolas y a nuestros socios recuperadores.",
            "**Integración de Experiencia:** Creamos puentes generacionales de aprendizaje con mentores expertos del sector, como pensionados del SENA.",
            "**Desarrollo de Capacidades:** Empoderamos a los agricultores para que se conviertan en líderes de la agricultura digital.",
        ],
    },
    {
		icon: PieChartIcon,
		title: "Un Modelo de Negocio Robusto: Sostenible, Sustentable y Rentable",
		content: [
            "**Sostenible (Ambiental):** Valorizamos toneladas de residuos y promovemos una Colombia más limpia.",
            "**Sustentable (Social):** Generamos empleo digno y formal para recuperadores y tecnólogos.",
            "**Rentable (Económico):** Múltiples flujos de ingreso con costos optimizados gracias al upcycling.",
        ],
	},
    {
        icon: TrendingUp,
        title: "Invierta en el Futuro: Un Rendimiento que Cultiva Valor",
        content: [
            "**Tracción:** Plataforma Alpha certificada por SENA Tecnoparque y prototipos funcionales.",
            "**Oportunidad:** Buscamos capital semilla para escalar nuestra operación y llegar a 500 agricultores en los próximos 2 años.",
            "**¿Por qué Invertir?** Mercado masivo, innovación disruptiva (Upcycling + IA + Robótica), impacto medible (económico, social, ambiental) y un equipo apasionado con validación externa.",
        ]
    },
    {
        icon: Sprout,
        title: "Juntos, Sembremos el Cambio y Cosechemos el Éxito",
        content: [
            "Gracias por su tiempo. Contáctenos para transformar un desafío en una oportunidad sin precedentes para Colombia.",
            "Lukas Moyano M. | CEO, CTO, Founder",
            "+57 3197919742 | lukasmoyanomorales@gmail.com",
        ],
    }
];

const CustomTooltip = ({ active, payload, label }: any) => {
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
		<div className="min-h-screen bg-background text-foreground">
			<header className="p-4 sticky top-0 bg-background/80 backdrop-blur-sm z-10 border-b">
				<div className="container mx-auto">
					<Link to="/" className="inline-block">
						<Button variant="outline">
							<ArrowLeft className="mr-2 h-4 w-4" />
							Volver a Inicio
						</Button>
					</Link>
				</div>
			</header>
			<main className="container mx-auto p-4 md:p-8">
				<article className="space-y-16">
					{presentationData.map((slide, index) => (
						<section key={index}>
							<Card className="overflow-hidden tech-border bg-card/80 backdrop-blur-sm">
								<CardHeader>
                                    <div className="flex items-center mb-4">
										<slide.icon className="h-10 w-10 mr-4 text-primary" />
										<CardTitle className="text-3xl md:text-4xl">{slide.title}</CardTitle>
									</div>
									{slide.subtitle && (
										<p className="text-xl text-muted-foreground -mt-2">{slide.subtitle}</p>
									)}
                                </CardHeader>
								<CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                    <div className="space-y-4">
										{slide.content && slide.content.length > 0 && slide.content.map((item, i) =>
											<p key={i} className="text-lg text-muted-foreground" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/- /g, '&bull; ') }} />
										)}
                                    </div>
                                    
                                    <div className="not-prose">
                                        {slide.chartData && slide.chartData.type === 'bar' && (
                                            <ResponsiveContainer width="100%" height={250}>
                                                <BarChart data={slide.chartData.data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                                                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false}/>
                                                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} label={{ value: 'Billon kg', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))' }} />
                                                    <Tooltip content={<CustomTooltip />} cursor={{fill: 'hsla(var(--primary) / 0.1)'}}/>
                                                    <Bar dataKey="value" radius={[4, 4, 0, 0]} >
                                                        {slide.chartData.data.map((entry, idx) => <Cell key={`cell-${idx}`} fill={entry.fill} />)}
                                                    </Bar>
                                                </BarChart>
                                            </ResponsiveContainer>
                                        )}
                                        {slide.chartData && slide.chartData.type === 'pie' && (
                                            <ResponsiveContainer width="100%" height={250}>
                                                <PieChart>
                                                    <Pie data={slide.chartData.data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                                                        {slide.chartData.data.map((entry, idx) => <Cell key={`cell-${idx}`} fill={entry.fill} />)}
                                                    </Pie>
                                                    <Tooltip content={<CustomTooltip />}/>
                                                </PieChart>
                                            </ResponsiveContainer>
                                        )}
                                        {slide.materials && (
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white dark:text-black">
                                                {slide.materials.map((material) => (
                                                    <div key={material.name} className="p-3 rounded-lg border-2 border-black/10 dark:border-white/10 flex flex-col justify-between aspect-square" style={{ backgroundColor: material.color, boxShadow: `0 0 25px -5px ${material.color}` }}>
                                                        <span className="text-2xl font-bold">{material.atomicNumber}</span>
                                                        <h3 className="text-6xl font-black text-center" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.3)'}}>{material.symbol}</h3>
                                                        <div className="text-center">
                                                            <p className="font-bold text-md uppercase">{material.name}</p>
                                                            <p className="text-sm opacity-80">{material.atomicMass}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {slide.compositionData && (
                                            <>
                                                <h4 className="text-center font-bold mb-2">Composición por Tonelada (kg)</h4>
                                                <ResponsiveContainer width="100%" height={250}>
                                                    <BarChart data={slide.compositionData.chart} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                                                        <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false}/>
                                                        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false}/>
                                                        <Tooltip content={<CustomTooltip />} cursor={{fill: 'hsla(var(--primary) / 0.1)'}}/>
                                                        <Bar dataKey="kg" radius={[4, 4, 0, 0]} >
                                                            {slide.compositionData.chart.map((entry, idx) => <Cell key={`cell-${idx}`} fill={entry.fill} />)}
                                                        </Bar>
                                                    </BarChart>
                                                </ResponsiveContainer>
                                                <h4 className="text-center font-bold mt-6 mb-2">Valor Estimado por Kilo (COP)</h4>
                                                <ul className="text-sm text-center space-y-1">
                                                    {slide.compositionData.prices.map(price => <li key={price.name}><strong>{price.name}:</strong> {price.value}</li>)}
                                                </ul>
                                            </>
                                        )}
                                    </div>
                                    {slide.source && (
                                        <p className="text-xs text-muted-foreground/70 italic md:col-span-2 text-center mt-4">Fuente: {slide.source}</p>
                                    )}
								</CardContent>
							</Card>
						</section>
					))}
				</article>
			</main>
		</div>
	);
};

export default CultivatechPresentation;

