import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Leaf, Brain, Coins } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import agroTechImage from "@/assets/agro-tech-farmers.jpg";
import smartMonitoringImage from "@/assets/smart-monitoring.jpg";
import smartIrrigationImage from "@/assets/smart-irrigation.jpg";
import smartAlarmImage from "@/assets/smart-alarm.jpg";
import weatherStationImage from "@/assets/weather-station.jpg";

const AgroInnovationWorkshops = () => {
  const [language, setLanguage] = useState<"es" | "en">("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    es: {
      breadcrumb: "Volver a Servicios",
      badge: "Educación & Tecnología",
      title: "Talleres Agro-Innovación Integral",
      subtitle: "Transformando el Campo con Tecnología y Conocimiento",
      location:
        "Impulsando el Desarrollo Sostenible en Cundinamarca, Fusagasugá y la Zona del Sumapaz",
      intro: {
        title: "",
        text: (
          <>
            <span className="font-bold text-agro-green text-xl">
              "Agro-Innovación Integral"
            </span>{" "}
            <span className="font-bold text-muted-foreground">
              es un espacio académico diseñado para conectar a las comunidades
              rurales, organizaciones, empresas y ONGs con las últimas
              tendencias en tecnología aplicada a la agricultura. Nuestro
              objetivo es fortalecer la cadena productiva agropecuaria a través
              de la innovación, la capacitación y la apropiación social del
              conocimiento, alineados con las políticas públicas nacionales y
              departamentales.
            </span>
          </>
        ),
      },
      alignment: {
        title: "Alineación con Políticas Públicas",
        text1:
          'Nuestro proyecto se encuentra estratégicamente alineado con el Plan Nacional de Desarrollo (PND) 2022-2026, en particular con la transformación "Derecho Humano a la Alimentación", que promueve el uso intensivo de datos y la adopción de tecnologías digitales para la reconversión productiva. Además, estamos en sintonía con el Sistema Nacional de Innovación Agropecuaria (SNIA), integrando saberes locales con tecnología de punta.',
        text2:
          'A nivel departamental, nuestro enfoque se ajusta perfectamente a las líneas estratégicas del Plan de Desarrollo de Cundinamarca 2024-2028, especialmente en la apuesta por la "Competitividad Compartida" y el "Campo = Productividad Eficiente". Trabajamos para incorporar Ciencia, Tecnología e Innovación (CTeI) en los sistemas de producción agropecuaria, fomentando la apropiación social del conocimiento y fortaleciendo las capacidades tecnológicas de las comunidades rurales.',
      },
      methodology: {
        title: "Metodología",
        text: "Nuestra metodología se basa en el Aprendizaje Basado en Proyectos (ABP) y la filosofía STEAM (Ciencia, Tecnología, Ingeniería, Artes y Matemáticas), promoviendo la participación activa de los estudiantes en la resolución de problemas reales. A través de talleres prácticos, los participantes aprenderán a construir y programar nodos IoT para el monitoreo de cultivos, sistemas de riego automáticos, alarmas inteligentes y medidores ambientales, entre otros.",
      },
      modules: {
        title: "Contenidos y Temáticas",
        items: [
          {
            title: "Monitoreo Agrícola Inteligente",
            desc: "Aprenda a utilizar sensores IoT para monitorear variables críticas como humedad, temperatura y luz, optimizando la producción y reduciendo pérdidas.",
            image: smartMonitoringImage,
          },
          {
            title: "Sistemas de Riego Automáticos",
            desc: "Diseñe e implemente sistemas de riego que respondan a las necesidades específicas de sus cultivos, utilizando tecnología de bajo costo y alta eficiencia.",
            image: smartIrrigationImage,
          },
          {
            title: "Alarmas Inteligentes",
            desc: "Construya alarmas que le avisen de posibles amenazas, como intrusos o condiciones climáticas adversas, protegiendo su inversión.",
            image: smartAlarmImage,
          },
          {
            title: "Medidores Ambientales",
            desc: "Instale estaciones meteorológicas escolares o campesinas que le proporcionen datos precisos para la toma de decisiones informadas.",
            image: weatherStationImage,
          },
        ],
      },
      benefits: {
        title: "Beneficios para las Comunidades Rurales",
        items: [
          "Aumento de la Productividad: Mejore la eficiencia de sus cultivos a través del monitoreo preciso.",
          "Reducción de Costos: Minimice el uso de recursos como agua y fertilizantes.",
          "Fortalecimiento Técnico: Adquiera habilidades tecnológicas para mantener sus propias soluciones.",
          "Promoción de la Economía Popular: Fomente la autonomía técnica y económica de su comunidad.",
        ],
      },
      budget: {
        title: "Presupuestos y Financiamiento",
        text: "Ofrecemos un modelo de negocio sostenible y transparente. Contamos con diferentes niveles de precios escalonados para adaptarnos a las necesidades y capacidades de pago de nuestros clientes, desde ONGs y gremios rurales hasta empresas privadas y entidades gubernamentales.",
        paymentTitle: "Métodos de Pago",
        paymentText:
          "Aceptamos pagos anticipados del 70% al firmar el contrato, con el 15% restante al inicio del primer módulo y el último 15% al finalizar y entregar certificados. Además, ofrecemos financiamiento en especie a través de alianzas estratégicas, como respaldo institucional, acceso a redes y uso de espacios.",
      },
      cta: "Solicitar Información",
      conclusion:
        "En Talleres Agro-Innovación Integral, estamos comprometidos con el desarrollo sostenible de las comunidades rurales. Únase a nosotros y sea parte de esta revolución tecnológica agrícola.",
    },
    en: {
      breadcrumb: "Back to Services",
      badge: "Education & Technology",
      title: "Agro-Innovation Workshops",
      subtitle: "Transforming the Field with Technology and Knowledge",
      location:
        "Driving Sustainable Development in Cundinamarca, Fusagasugá and the Sumapaz Zone",
      intro: {
        title: "",
        text: (
          <>
            <span className="font-bold text-agro-green text-xl">
              "The Agro-Innovation Workshops"
            </span>{" "}
            <span className="font-bold text-muted-foreground">
              is an academic space designed to connect rural communities,
              organizations, companies, and NGOs with the latest trends in
              technology applied to agriculture. Our goal is to strengthen the
              agricultural production chain through innovation, training, and
              social appropriation of knowledge, aligned with national and
              departmental public policies of Colombia.
            </span>
          </>
        ),
      },
      alignment: {
        title: "Public Policy Alignment",
        text1:
          'Our project is strategically aligned with the National Development Plan (PND) 2022-2026, particularly with the "Human Right to Food" transformation, which promotes the intensive use of data and the adoption of digital technologies for productive reconversion. Furthermore, we are in tune with the National System of Agricultural Innovation (SNIA), integrating local knowledge with cutting-edge technology.',
        text2:
          'At the departmental level, our approach fits perfectly with the strategic lines of the Development Plan of Cundinamarca 2024-2028, especially in the commitment to "Shared Competitiveness" and "Countryside = Efficient Productivity". We work to incorporate Science, Technology and Innovation (STi) in agricultural production systems, fostering social appropriation of knowledge and strengthening the technological capabilities of rural communities.',
      },
      methodology: {
        title: "Methodology",
        text: "Our methodology is based on Project-Based Learning (PBL) and the STEAM philosophy (Science, Technology, Engineering, Arts, and Mathematics), promoting the active participation of students in solving real problems. Through practical workshops, participants will learn to build and program IoT nodes for crop monitoring, automatic irrigation systems, smart alarms, and environmental meters, among others.",
      },
      modules: {
        title: "Contents and Themes",
        items: [
          {
            title: "Smart Agricultural Monitoring",
            desc: "Learn to use IoT sensors to monitor critical variables such as humidity, temperature, and light, optimizing production and reducing losses.",
            image: smartMonitoringImage,
          },
          {
            title: "Automatic Irrigation Systems",
            desc: "Design and implement irrigation systems that respond to the specific needs of your crops, using low-cost and high-efficiency technology.",
            image: smartIrrigationImage,
          },
          {
            title: "Smart Alarms",
            desc: "Build alarms that warn you of possible threats, such as intruders or adverse weather conditions, protecting your investment.",
            image: smartAlarmImage,
          },
          {
            title: "Environmental Meters",
            desc: "Install school or peasant weather stations that provide precise data for informed decision-making.",
            image: weatherStationImage,
          },
        ],
      },
      benefits: {
        title: "Benefits for Rural Communities",
        items: [
          "Increased Productivity: Improve crop efficiency through precise monitoring.",
          "Cost Reduction: Minimize the use of resources such as water and fertilizers.",
          "Technical Strengthening: Acquire technological skills to maintain your own solutions.",
          "Promotion of Popular Economy: Foster the technical and economic autonomy of your community.",
        ],
      },
      budget: {
        title: "Budgets and Financing",
        text: "We offer a transparent cost structure and a sustainable business model, with a 70% profit margin over base operating costs. We have tiered pricing levels to adapt to the needs and payment capacities of our clients, from NGOs and rural unions to private companies and government entities.",
        paymentTitle: "Payment Methods",
        paymentText:
          "We accept 70% advance payments upon signing the contract, with the remaining 15% at the start of the first module and the final 15% upon completion and certificate delivery. In addition, we offer in-kind financing through strategic alliances, such as institutional support, network access, and use of spaces.",
      },
      cta: "Request Information",
      conclusion:
        "At Agro-Innovation Comprehensive Workshops, we are committed to the sustainable development of rural communities. Join us and be part of this agricultural technological revolution.",
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} toggleLanguage={toggleLanguage} />
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative h-[400px] w-full mb-12 overflow-hidden">
          <img
            src={agroTechImage}
            alt="Agro Tech Workshops"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-16 flex flex-col items-center text-center">
            <Link
              to="/"
              className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.breadcrumb}
            </Link>
            <Badge className="mb-6 bg-agro-green text-white hover:bg-agro-green/90">
              {t.badge}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 py-4 gradient-text-primary max-w-4xl mx-auto">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
              {t.subtitle}
            </p>
            <p className="text-sm md:text-base text-primary/80 mt-4 font-medium">
              {t.location}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <section className="prose dark:prose-invert max-w-none">
                <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Leaf className="h-6 w-6 text-agro-green" />
                  {t.intro.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.intro.text}
                </p>
              </section>

              {/* Public Policy Alignment */}
              <section className="bg-secondary/10 p-8 rounded-2xl border border-secondary/20">
                <h3 className="text-2xl font-bold mb-4">{t.alignment.title}</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>{t.alignment.text1}</p>
                  <p>{t.alignment.text2}</p>
                </div>
              </section>

              {/* Methodology */}
              <section>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Brain className="h-6 w-6 text-primary" />
                  {t.methodology.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  {t.methodology.text}
                </p>

                <div className="grid sm:grid-cols-2 gap-6 text-center">
                  {t.modules.items.map((item, idx) => (
                    <Card
                      key={idx}
                      className="tech-border hover-lift overflow-hidden group"
                    >
                      <div className="h-48 overflow-hidden relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-primary">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {item.desc}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Benefits (Moved to main content) */}
              <section className="bg-agro-green/5 p-8 rounded-2xl border border-agro-green/10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-agro-green" />
                  {t.benefits.title}
                </h3>
                <ul className="space-y-4">
                  {t.benefits.items.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-foreground/80">
                      <CheckCircle className="h-5 w-5 text-agro-green flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Budget & Financing */}
              <section className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                <div className="flex items-start gap-4">
                  <Coins className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      {t.budget.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {t.budget.text}
                    </p>

                    <h4 className="text-xl font-semibold mb-2">
                      {t.budget.paymentTitle}
                    </h4>
                    <p className="text-muted-foreground">
                      {t.budget.paymentText}
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <Card className="sticky top-24 border-agro-green/50 shadow-lg shadow-agro-green/10">
                <CardContent className="pt-6">
                  <Button
                    className="w-full bg-agro-green hover:bg-agro-green/90 text-white"
                    size="lg"
                    onClick={() =>
                      document
                        .getElementById(
                          language === "es" ? "contacto" : "contact"
                        )
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    {t.cta}
                  </Button>
                </CardContent>
              </Card>

              <div className="p-6 bg-accent/20 rounded-xl border border-accent/30 text-center">
                <p className="text-sm font-medium italic">"{t.conclusion}"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgroInnovationWorkshops;
