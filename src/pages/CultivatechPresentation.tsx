import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const slides = [
	{
		title: "Cultivatech ColombIA: Sembrando el Futuro con Tecnología y Propósito",
		subtitle:
			"Una Propuesta Integral de _-IR-_Productions para la Agricultura Sostenible, Circular y Digital.",
		content: [
			"En alianza con SENA Tecnoparque",
		],
		bgColor: "bg-gray-900",
		textColor: "text-white",
	},
	{
		title: "El Campo de Hoy: Retos, Residuos y la Necesidad de Reinventar",
		content: [
			"La agricultura colombiana, pilar de nuestra nación, enfrenta desafíos crecientes: optimización de recursos, impacto ambiental, acceso a tecnología y la gestión de residuos que a menudo terminan su ciclo sin un valor adicional.",
			"Datos Clave (ejemplos a investigar):",
			"- X toneladas de residuos plásticos agrícolas generadas anualmente en Colombia.",
			"- Y% de los agricultores colombianos aún carecen de acceso a tecnologías avanzadas de monitoreo.",
			"- Z% de agua se desperdicia en cultivos por falta de riego de precisión.",
			"El Problema del Desecho Tecnológico/Plástico: Subrayar la cantidad de 'basura' que se genera y su potencial desaprovechado.",
		],
		bgColor: "bg-gray-100",
		textColor: "text-gray-800",
	},
	{
		title: 'Upcycling Extremo: De "Basura" a Robots y Soberanía Tecnológica',
		content: [
			"En _-IR-_Productions creemos que la solución reside en la innovación circular. Presentamos Cultivatech ColombIA, una plataforma integral que combina IA, Robótica y un modelo pionero de Upcycling de Alto Valor.",
			"El Corazón de la Innovación:",
			'- Plástico (PVC, PLA, PET, etc.): Transformamos residuos en filamento de alta calidad para impresión 3D.',
			'- Aluminio (Latas): Recuperamos latas para fabricar los chasis de nuestros robots agrícolas.',
			'- Cartón y Papel: Diseñamos empaquetaduras innovadoras y material de merchandising.',
			"Beneficio: Reducir la huella ecológica, generar nuevas cadenas de valor e impulsar la independencia comercial y tecnológica.",
		],
		bgColor: "bg-green-100",
		textColor: "text-green-900",
	},
	{
		title: "Inteligencia Artificial y Robótica: Tus Aliados en el Campo",
		content: [
			"Los Robots 'Hechos en Colombia':",
			"- Con chasis de aluminio reciclado y componentes impresos en 3D, equipados con ESP32 y conectados por Wi-Fi, Bluetooth y LoRaWAN.",
			"- Funcionalidad: Monitoreo constante y en tiempo real de cultivos.",
			"- Sensores Inteligentes: Recolectan datos de humedad, temperatura, nutrientes y plagas.",
			"La Plataforma Web Alpha (Validada por SENA Tecnoparque):",
			"- Interfaz intuitiva para visualizar datos de cultivos en tiempo real.",
			"- Análisis Predictivo con IA: Recomendaciones precisas sobre riego, fertilizantes, cosecha y alertas tempranas.",
			"- Ventaja: Decisiones informadas, optimización de insumos y aumento de productividad.",
			"Nuestros HPCs Locales: Construimos nuestros propios Computadores de Alto Performance para garantizar la soberanía de los datos y un procesamiento eficiente.",
		],
bgColor: "bg-blue-100",
textColor: "text-blue-900",
	},
	{
		title: "Sembrando Conocimiento: La Dimensión Pedagógica de Cultivatech",
		content: [
			"Reconocemos que la tecnología es poderosa solo si se sabe usar.",
			"Talleres Tecnológicos en el Campo:",
			"- Llevamos talleres prácticos y accesibles directamente a las comunidades agrícolas.",
			"- Temas: Uso de plataformas, interpretación de datos de IA, mantenimiento de robots, upcycling.",
			"Empoderamiento del Agricultor: Capacitamos para que sean dueenos de su tecnología.",
			"Colaboración con Pensionados SENA: Buscamos integrar a pensionados como facilitadores y mentores, combinando su sabiduría agrícola con nuestra visión tecnológica.",
		],
		bgColor: "bg-yellow-100",
		textColor: "text-yellow-900",
	},
	{
		title: "Un Ecosistema Completo: Soberanía Alimentaria, Comercio Justo y Nuevas Oportunidades",
		content: [
			"Soberanía Alimentaria: Al optimizar la producción local, fortalecemos la capacidad de Colombia para alimentarse a sí misma.",
			"Independencia Comercial y Económica:",
			"- Fomentamos mercados de intercambio directo de productos agrícolas.",
			"- Reducimos la dependencia de insumos externos al producir localmente nuestros componentes (upcycling).",
			"- Creamos nuevas fuentes de empleo y emprendimiento.",
			"Modelo de Negocio Sostenible: Venta/arriendo de tecnología, servicios de análisis, venta de filamento, talleres y plataforma de comercio justo.",
			"Un Ciclo Virtuoso: Residuos -> Componentes -> Robots -> Mejor Producción -> Sostenibilidad -> Conocimiento -> Oportunidades.",
		],
		bgColor: "bg-purple-100",
		textColor: "text-purple-900",
	},
	{
		title: "Construyendo el Futuro: Hitos y Colaboración",
		content: [
			"Hitos Clave:",
			"- Plataforma Cultivatech ColombIA en fase Alpha, validada por SENA Tecnoparque.",
			"- Primeros prototipos de robots funcionales con componentes reciclados.",
			"- I+D avanzados en upcycling de plásticos y metales.",
			"Invitación a la Colaboración:",
			"- Buscamos aliados estratégicos: productores, asociaciones, inversionistas, instituciones educativas y sector público.",
			"- ¿Cómo podemos colaborar? Únete a la construcción de un futuro agrícola más inteligente y sostenible.",
		],
		bgColor: "bg-indigo-100",
		textColor: "text-indigo-900",
	},
	{
		title: "Juntos, Sembremos el Cambio.",
		content: [
			"Gracias por su tiempo e interés en el futuro de la agricultura colombiana.",
			"Contacto:",
			"Lukas Moyano M.",
			"CEO, CTO, Founder",
			"[Mi Número de Contacto]",
			"[Mi Correo Electrónico]",
			"Web: https://ir-productions-online.netlify.app/",
			"GitHub: https://github.com/LukasMoyano/ir-productions-Masterlukas",
		],
		bgColor: "bg-gray-800",
		textColor: "text-white",
	},
];

const CultivatechPresentation = () => {
	return (
		<div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
			<div className="w-full max-w-5xl mx-auto">
				<Link to="/" className="mb-4 inline-block">
					<Button variant="outline">
						<ArrowLeft className="mr-2 h-4 w-4" />
						Volver a Inicio
					</Button>
				</Link>
				<Carousel className="w-full">
					<CarouselContent>
						{slides.map((slide, index) => (
							<CarouselItem key={index}>
								<div className="p-1">
									<Card>
										<CardContent
											className={`flex flex-col items-center justify-center p-6 md:p-12 min-h-[70vh] ${slide.bgColor} ${slide.textColor} rounded-lg`}
										>
											<h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
												{slide.title}
											</h2>
											{slide.subtitle && (
												<p className="text-lg md:text-xl text-center mb-6">
													{slide.subtitle}
												</p>
											)}
											<div className="text-left space-y-4 max-w-3xl">
												{slide.content.map((item, i) =>
													item.startsWith("-") ? (
														<ul key={i} className="list-disc list-inside pl-4">
															<li>{item.substring(1).trim()}</li>
														</ul>
													) : (
														<p key={i} className="text-base md:text-lg">
															{item}
														</p>
													)
												)}
											</div>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="hidden sm:flex" />
					<CarouselNext className="hidden sm:flex" />
				</Carousel>
			</div>
		</div>
	);
};

export default CultivatechPresentation;
