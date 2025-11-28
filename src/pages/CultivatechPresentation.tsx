import { Link } from "react-router-dom";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from 'recharts';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowLeft, Sprout, Layers, Gem, BarChart as BarChartIcon, Users, PieChart as PieChartIcon, TrendingUp, Scale, Bot, DollarSign, Mail, Phone } from "lucide-react";

// --- IMAGE IMPORTS ---
import heroImage from '@/assets/hero-background.jpg';
import educationImage from '@/assets/agro-tech-farmers.jpg';
import businessModel from '@/assets/e-waste-assets/720x450 SCYCLE article image_0.jpg';
import agriculturaEficienteImage from '../assets/E-Waste_y_la_Necesidad_de_una_Agricultura_Eficiente.png';
import residuosAltaTecnologiaImage from '../assets/De_Residuos_aComponentes_de_Alta_Tecnología.png';
import robotImage from '@/assets/iot-robot.jpg';
import laMinaUrbana from '../assets/La_-MinaUrbana-_.png';


// --- FINAL UNIFIED PRESENTATION DATA STRUCTURE ---
import bannerPresentacion001 from '../assets/banner_presentacion001.png';

const presentationData = {
  title: "PRESENTACIÓN DE CULTIVATECH",
  sections: [
    {
      id: "cultivatech-vision",
      title: "Sembrando el Futuro de la Agricultura Sostenible",
      content: `Cultivatech es una iniciativa de IR Productions que fusiona la innovación tecnológica con la agricultura sostenible. Nuestro objetivo es transformar los desechos electrónicos (e-waste) en recursos valiosos para el campo, creando un ecosistema donde la tecnología y la naturaleza prosperan en armonía.`,
      image: bannerPresentacion001,
      imageAlt: "Visión de Cultivatech: Fusión de tecnología y agricultura",
      imagePosition: 'top'
    },
    {
      id: "problem-statement",
      title: "El E-Waste y la Necesidad de una Agricultura Eficiente",
        content: [
            "**Problema Global:** Cada año, el mundo genera una montaña de **62 mil millones de kg** de e-waste, el equivalente a 1.55 millones de camiones de 40 toneladas en una fila que daría la vuelta al ecuador.",
            "**Desafío Nacional (Colombia 2022):** Colombia generó **388,000 toneladas** de e-waste, pero solo un alarmante **1%** fue recolectado y gestionado formalmente.",
            "**Impacto Negativo:** Esta gestión deficiente libera **58,000 kg de mercurio** y **45 millones de kg de plásticos tóxicos** al ambiente CADA AÑO, afectando nuestra salud y ecosistemas.",
            "**Nuestra Visión:** Vemos cada residuo como una **mina urbana**, una oportunidad para formalizar, dignificar y tecnificar la labor de los recuperadores."
        ],
        chartData: {
            type: 'pie',
            data: [
                { name: 'No Recolectado Formalmente en Colombia (%)', value: 99, fill: '#dc2626' },
                { name: 'Recolectado Formalmente en Colombia (%)', value: 1, fill: '#16a34a' },
            ],
            source: "Datos Colombia (2022) & Global E-waste Monitor 2024"
        },
        image: agriculturaEficienteImage,
        imageFit: 'contain',
        visualSuggestion: "/* SUGERENCIA VISUAL: Gráfico circular prominente mostrando el 1% vs 99%. Íconos de mercurio y plásticos al lado del texto de 'Impacto Negativo'. Imágenes sutiles de la gráfica 'RAEE: Tesoro oculto y peligro ambiental'. */"
    },
    // Tarjeta 3: Nuestra Solución
    {
		icon: Layers,
		title: "De Residuos a Componentes de Alta Tecnología",
		content: [
            "Nuestra propuesta es un ecosistema circular que transforma el problema en un motor de desarrollo en 3 fases clave:",
            "**1. Recuperación Estratégica:** Creamos alianzas y certificamos a familias recuperadoras para la recolección formal, digna y tecnificada de residuos.",
            "**2. Preparación y Clasificación:** Procesamos y clasificamos los materiales recuperados bajo estándares de calidad para asegurar su trazabilidad y pureza.",
            "**3. Transformación (Upcycling de Alto Valor):** Convertimos los residuos en materia prima de alto valor. De los **17 mil millones de kg de plásticos** en e-waste global, creamos filamento 3D. De los **31 mil millones de kg de metales**, forjamos los chasis de nuestros robots.",
        ],
        		image: residuosAltaTecnologiaImage,
                imageFit: 'contain',
                visualSuggestion: "/* SUGERENCIA VISUAL: Diagrama de flujo circular simple que ilustre las 3 fases. Dentro de la fase 3, pequeños íconos de una bobina de filamento 3D y el chasis de un robot. */"	},
    // Tarjeta 4: La Mina Urbana
    {
		icon: Gem,
		title: "La 'Mina Urbana' que Impulsa Nuestra Soberanía",
        content: [
            "**Supra-Reciclaje:** Cada residuo electrónico que procesamos es una mina que no necesitamos cavar. Al recuperar metales preciosos como **Oro (Au), Plata (Ag), Paladio (Pd) y Cobre (Cu)**, reducimos la dependencia de la minería extractiva, disminuyendo su enorme impacto ambiental y huella de carbono.",
            "El valor económico real está en la composición. Cada tonelada procesada es una fuente de ingresos y de materiales estratégicos."
        ],
        materials: [
            { name: "Oro", symbol: "Au", atomicNumber: 79, atomicMass: "196.97", color: "#D4AF37" },
            { name: "Plata", symbol: "Ag", atomicNumber: 47, atomicMass: "107.87", color: "#C0C0C0" },
            { name: "Paladio", symbol: "Pd", atomicNumber: 46, atomicMass: "106.42", color: "#B1B1B1" },
            { name: "Cobre", symbol: "Cu", atomicNumber: 29, atomicMass: "63.55", color: "#B87333" },
        ],

        image: laMinaUrbana,
        imageFit: 'contain'
	},
    // Tarjeta 5: El Producto
    {
        icon: Bot,
        title: "Cultivatech ColombIA: La Inteligencia Agrícola Nace del Reciclaje",
        content: [
            "Con la materia prima que rescatamos, construimos el Kit Agro-IoT 'Cultivatech ColombIA'.",
            "**Hechos en Colombia:** Robots autónomos, robustos y de bajo costo. Sus chasis provienen del aluminio reciclado y sus piezas son impresas en 3D con nuestro propio filamento.",
            "**Tecnología Integrada:** Equipados con sensores de precisión, cámaras IA y conectividad LoRaWAN para monitoreo 24/7.",
            "**Soberanía Tecnológica:** Fomentamos la independencia comercial de Colombia, haciéndonos menos vulnerables a las fluctuaciones del mercado global de componentes.",
        ],
        image: robotImage,
        imageFit: 'contain',
        visualSuggestion: "/* SUGERENCIA VISUAL: Ilustración atractiva del robot, destacando sus componentes reciclados. Una infografía simple (flechas) desde íconos de 'plástico reciclado' y 'aluminio reciclado' apuntando a partes del robot. */"
    },
    // Tarjeta 6: El Beneficio
    {
        icon: DollarSign,
        title: "Impacto Real en el Campo: Más Productividad, Más Ingresos",
        content: [
            "Nuestra plataforma de monitoreo 24/7 ofrece beneficios cuantificables para diversos cultivos (tradicionales, hongos, apicultura):",
            "**Resultados (Alpha Testing):** Nuestros prototipos, validados por SENA Tecnoparque, muestran un potencial de aumento en la productividad del **15% al 25%** y una reducción de pérdidas de hasta el **30%**.",
        ],
        chartData: {
            type: 'bar',
            data: [
                { name: 'Reducción Pérdidas', value: 30, fill: '#16a34a' },
                { name: 'Ahorro Insumos', value: 25, fill: '#f97316' },
                { name: 'Aumento Productividad', value: 25, fill: '#3b82f6' },
            ],
            source: "Estimaciones de Proyectos Piloto y Alpha Testing"
        },
        visualSuggestion: "/* SUGERENCIA VISUAL: Gráfico de barras claro con los 3 beneficios. Pequeños íconos para cada tipo de cultivo (maíz, champiñones, colmena). Un símbolo de dólar resaltando la 'Mejora de Ingresos'. */"
    },
    // Tarjeta 7: Educación
    {
        icon: Users,
        title: "Empoderando al Campo: Conocimiento, Tecnología y Comunidades",
        content: [
            "**Talleres Tecnológicos Accesibles:** Llevamos formación práctica y adaptada a las comunidades agrícolas sobre el uso de la plataforma y el mantenimiento de los equipos.",
            "**Integración de Experiencia:** Creamos puentes generacionales de aprendizaje con mentores expertos del sector, como pensionados del SENA.",
            "**Desarrollo de Capacidades:** Empoderamos a los agricultores para que se conviertan en líderes de la agricultura digital, promoviendo la soberanía alimentaria.",
        ],
        image: educationImage,
        imageFit: 'contain',
        visualSuggestion: "/* SUGERENCIA VISUAL: Imagen de personas (jóvenes, mayores) interactuando con tecnología en un entorno rural. Íconos de 'conocimiento', 'tecnología' y 'comunidad'. */"
    },
    // Tarjeta 8: Modelo de Negocio
    {
		icon: PieChartIcon,
		title: "El Ecosistema _-IR-_Productions: Un Negocio Sólido, Un Futuro Verde",
		content: [
            "**Sostenible (Ambiental):** Valorizamos toneladas de residuos y evitamos la minería extractiva, promoviendo una economía circular real.",
            "**Sustentable (Social):** Generamos empleo digno y formal para familias recuperadoras e impulsamos el desarrollo de tecnólogos locales.",
            "**Rentable (Económico):** Múltiples flujos de ingreso (venta/arriendo de kits, servicios de datos, venta de filamento 3D) con costos optimizados gracias al upcycling.",
        ],
        image: businessModel,
        imageFit: 'contain',
        visualSuggestion: "/* SUGERENCIA VISUAL: Infografía del ciclo virtuoso conectando 'Recuperadores', 'Agricultores', '_-IR-_Productions' y 'Sociedad'. Tres íconos grandes para los pilares con gráficos simples debajo. */"
	},
    // Tarjeta 9: Inversión
    {
        icon: TrendingUp,
        title: "Invierta en el Futuro: Un Rendimiento que Cultiva Valor",
        content: [
            "**Tracción Validada:** Contamos con una plataforma Alpha certificada por SENA Tecnoparque y prototipos funcionales.",
            "**Oportunidad de Escalamiento:** Buscamos capital semilla para escalar nuestra operación y llevar Cultivatech ColombIA a **1,000 agricultores** en los próximos 2 años.",
            "**¿Por qué Invertir?** Participe en un negocio con un triple retorno medible: económico, social (empleo, soberanía alimentaria) y ambiental (reducción de e-waste).",
        ],
        chartData: {
            type: 'bar',
            data: [
                { name: 'Año 1', value: 250, fill: '#3b82f6' },
                { name: 'Año 2', value: 1000, fill: '#16a34a' },
            ],
            source: "Proyección de Agricultores Impactados"
        },
        visualSuggestion: "/* SUGERENCIA VISUAL: Gráfico de proyección de crecimiento mostrando el número de agricultores impactados. Íconos para 'Mercado', 'Innovación', 'Impacto'. */"
    },
    // Tarjeta 10: Contacto
    {
        icon: Mail,
        title: "Juntos, Sembremos el Cambio y Cosechemos el Éxito",
        content: [
            "Gracias por su tiempo. Contáctenos para transformar un desafío en una oportunidad sin precedentes para Colombia.",
            "**Lukas Moyano M. | CEO, CTO, Founder**",
            "+57 3197919742 | lukasmoyanomorales@gmail.com",
            "Web: ir-productions-online.netlify.app",
        ],
        visualSuggestion: "/* SUGERENCIA VISUAL: Imagen final inspiradora. Diseño limpio para los datos de contacto. Códigos QR para la web y GitHub para fácil acceso. */"
    }
  ]
};

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
					{presentationData.sections.map((slide, index) => (
						<section key={index}>
							<Card className="overflow-hidden tech-border bg-card/80 backdrop-blur-sm">
								{slide.image && (
                                    <div className="relative h-[60vh] overflow-hidden">
                                        <img src={slide.image} alt={slide.imageAlt || slide.title} className={cn("w-full h-full", `object-${slide.imageFit || 'contain'}`, slide.imagePosition && `object-${slide.imagePosition}`)} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/50 to-transparent" />
                                    </div>
                                )}
                                <CardHeader className="text-center">
                                    <div className="flex items-center justify-center mb-4">
										{slide.icon && <slide.icon className="h-10 w-10 mr-4 text-primary" />}
										<CardTitle className="text-3xl md:text-4xl">{slide.title}</CardTitle>
									</div>
									{slide.subtitle && (
										<p className="text-xl text-muted-foreground -mt-2">{slide.subtitle}</p>
									)}
                                </CardHeader>
								<CardContent className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                    <div className="space-y-4">
                                        {Array.isArray(slide.content)
                                            ? slide.content.map((item, i) => (
                                                <p key={i} className="text-lg text-muted-foreground md:text-left text-center" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/- /g, '&bull; ') }} />
                                            ))
                                            : slide.content && (
                                                <p className="text-lg text-muted-foreground md:text-left text-center" dangerouslySetInnerHTML={{ __html: slide.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/- /g, '&bull; ') }} />
                                            )
                                        }
                                    </div>
                                    
                                    <div className="not-prose">
                                        {slide.chartData && slide.chartData.type === 'bar' && (
                                            <ResponsiveContainer width="100%" height={250}>
                                                <BarChart data={slide.chartData.data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                                                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false}/>
                                                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
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
                                                    <Tooltip content={<CustomTooltip />} />
                                                    <Legend />
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
                                                <ul className="text-sm text-center space-y-1 text-muted-foreground">
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

