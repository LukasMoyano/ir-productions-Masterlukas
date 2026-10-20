import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Boxes,
  CheckCircle2,
  CircleHelp,
  Code2,
  Coins,
  Cpu,
  FileCheck2,
  Fingerprint,
  GraduationCap,
  Landmark,
  Layers,
  Leaf,
  Link as LinkIcon,
  Lock,
  MessageSquare,
  Network,
  Radio,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  Truck,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import { DiagnosticForm } from "@/components/blockchain/DiagnosticForm";
import {
  CertificateSeal,
  TraceabilityMap,
} from "@/components/blockchain/BlockchainDiagrams";
import { usePageMeta } from "@/hooks/usePageMeta";
import blockchainImage from "@/assets/portfolio/blockchain-andino.jpg";
import hpcWorkstationImage from "@/assets/hpc-workstation.jpg";
import iotRobotImage from "@/assets/iot-robot.jpg";

type Language = "es" | "en";
type Accent = "indigo" | "tech" | "gold" | "violet" | "green" | "red";

interface IconItem {
  icon: LucideIcon;
  title: string;
}

interface ServiceItem extends IconItem {
  what: string;
  deliverable: string;
  ideal: string;
  note?: string;
  accent: Accent;
}

interface UseCaseItem extends IconItem {
  sector: string;
  records: string;
  outcome: string;
  accent: Accent;
}

interface ProcessStep {
  title: string;
  description: string;
  deliverable: string;
}

interface EvidenceItem extends IconItem {
  description: string;
  tags: string[];
}

interface CredentialItem {
  title: string;
  institution: string;
  hours: string;
  date: string;
  grade: string;
  code: string;
}

interface EthicsItem extends IconItem {
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

const accents: Record<
  Accent,
  { icon: string; bg: string; border: string; badge: string }
> = {
  indigo: {
    icon: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    badge: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
  },
  tech: {
    icon: "text-tech-green",
    bg: "bg-tech-green/10",
    border: "border-tech-green/20",
    badge: "bg-tech-green/15 text-tech-green border-tech-green/30",
  },
  gold: {
    icon: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
    badge: "bg-accent/15 text-accent border-accent/30",
  },
  violet: {
    icon: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    badge: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  },
  green: {
    icon: "text-agro-green",
    bg: "bg-agro-green/10",
    border: "border-agro-green/20",
    badge: "bg-agro-green/15 text-agro-green border-agro-green/30",
  },
  red: {
    icon: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    badge: "bg-primary/15 text-primary border-primary/30",
  },
};

const content = {
  es: {
    meta: {
      title: "Blockchain Soberano y Contratos Inteligentes | Lukas Moyano",
      description:
        "Consultoría, smart contracts, trazabilidad inmutable, tokenización de activos y formación certificada. Blockchain soberano para agro, sector público, industria y finanzas.",
    },
    badge: "DLT · Web3 · Tokenización",
    title: "Blockchain Soberano y Contratos Inteligentes",
    subtitle:
      "Convertimos tus datos críticos en registros inmutables, auditables y verificables. Sin depender de la nube ni de terceros.",
    chips: ["Trazabilidad", "Smart Contracts", "Tokenización", "Formación certificada"],
    back: "Volver al Inicio",
    problem: {
      eyebrow: "El punto de partida",
      title: "El problema no es la tecnología. Es la confianza.",
      description:
        "Cuando un dato crítico puede editarse sin dejar rastro, toda la operación pierde valor: la auditoría se vuelve lenta, la certificación depende de intermediarios y el cliente no tiene cómo verificar.",
      items: [
        {
          icon: Fingerprint,
          title: "Datos que se pueden editar",
          description:
            "Un Excel, un PDF o una base de datos centralizada pueden cambiarse sin dejar rastro.",
        },
        {
          icon: Network,
          title: "Dependencia de la nube",
          description:
            "Tu información vive en servidores de terceros, bajo sus reglas, costos y jurisdicción.",
        },
        {
          icon: Search,
          title: "Auditorías lentas y manuales",
          description:
            "Conciliar información entre áreas, proveedores y entes de control consume semanas.",
        },
        {
          icon: Lock,
          title: "Intermediarios que encarecen",
          description:
            "Certificaciones, pagos y contratos pasan por varios actores que agregan costo y fricción.",
        },
      ],
      closing:
        "Blockchain no reemplaza tu operación: añade una capa de confianza verificable sobre ella.",
    },
    architecture: {
      eyebrow: "La solución",
      title: "Una arquitectura de 3 capas, de la captura al sello inmutable",
      description:
        "No se trata de subir todo a una cadena. Se trata de capturar el dato correcto, procesarlo bajo tu control y anclar solo la evidencia necesaria.",
      layers: [
        {
          icon: Leaf,
          title: "1. Captura",
          description:
            "Sensores IoT, formularios, ERP o documentos. El dato se firma y se hashea desde el origen.",
          tag: "Origen verificado",
          accent: "green" as Accent,
        },
        {
          icon: Cpu,
          title: "2. Procesamiento",
          description:
            "HPC e IA local validan, cifran y preparan la evidencia. Nada sale de tu infraestructura.",
          tag: "IA local",
          accent: "tech" as Accent,
        },
        {
          icon: LinkIcon,
          title: "3. Validación",
          description:
            "Un smart contract ancla el hash en la red. El registro queda inmutable y verificable.",
          tag: "Registro inmutable",
          accent: "indigo" as Accent,
        },
      ],
      resultLabel: "Resultado",
      result:
        "Un certificado digital que tu cliente, auditor o regulador puede verificar sin confiar en tu palabra.",
      flowTitle: "Del dato al certificado",
      flow: [
        { icon: Radio, label: "Captura", hint: "Sensor / formulario" },
        { icon: Fingerprint, label: "Hash SHA-256", hint: "Huella digital" },
        { icon: Lock, label: "Firma ECDSA", hint: "Identidad del emisor" },
        { icon: Boxes, label: "Bloque", hint: "Registro inmutable" },
        { icon: BadgeCheck, label: "Certificado", hint: "Verificación externa" },
      ],
      imageLeft: {
        title: "Captura en campo",
        caption: "Sensores y hardware propio, no dependencia de terceros.",
      },
      imageRight: {
        title: "Procesamiento local",
        caption: "HPC e IA en tu infraestructura, con cifrado y control de acceso.",
      },
    },
    services: {
      eyebrow: "Servicios",
      title: "¿Qué puedes contratar?",
      description:
        "Cada servicio parte de una necesidad de negocio. La tecnología es el medio, no el punto de partida.",
      items: [
        {
          icon: Search,
          title: "Diagnóstico de viabilidad Web3",
          what: "Antes de invertir, sabrás si blockchain es la solución o si una base de datos segura basta.",
          deliverable: "Informe de decisión + arquitectura recomendada.",
          ideal: "Empresas que quieren innovar sin sobrecostos.",
          accent: "tech",
        },
        {
          icon: Code2,
          title: "Diseño y desarrollo de Smart Contracts",
          what: "Automatizamos reglas, pagos, permisos y certificaciones con lógica verificable.",
          deliverable:
            "Contrato en Solidity, pruebas, ABI, documentación y despliegue en testnet o red privada.",
          ideal: "Agro, financiero e institucional.",
          accent: "indigo",
        },
        {
          icon: FileCheck2,
          title: "Trazabilidad y notarización digital",
          what: "Registramos el historial completo de un producto, lote o documento.",
          deliverable:
            "Modelo de datos, anclaje de hashes, panel de consulta y certificado verificable.",
          ideal: "Exportadores, logística y sector público.",
          accent: "gold",
        },
        {
          icon: Coins,
          title: "Tokenización de activos reales",
          what: "Representamos derechos sobre activos físicos o financieros de forma programable.",
          deliverable:
            "Diseño técnico, estándar de token, reglas de emisión y transferencia, análisis de viabilidad.",
          ideal: "Proyectos de inversión, agro e infraestructura.",
          note: "No es asesoría financiera ni legal: se trabaja con el marco legal aplicable.",
          accent: "violet",
        },
        {
          icon: Radio,
          title: "Integración IoT-to-Chain y nodos soberanos",
          what: "Conectamos hardware y datos del mundo real a un registro inmutable.",
          deliverable:
            "Integración ESP32/MQTT/oráculos, nodo local, dashboard y monitoreo.",
          ideal: "Agro-tech, industria y sensores ambientales.",
          accent: "green",
        },
        {
          icon: GraduationCap,
          title: "Formación y capacitación",
          what: "Entrenamos a tu equipo en fundamentos, smart contracts, trazabilidad y tokenización.",
          deliverable: "Taller a medida, material, ejercicios y caso aplicado.",
          ideal: "Empresas, instituciones, universidades y gremios.",
          note: "La certificación SENA se obtiene a través de los programas del SENA; nosotros diseñamos la capacitación.",
          accent: "red",
        },
      ] as ServiceItem[],
    },
    useCases: {
      eyebrow: "Aplicación real",
      title: "Soluciones aplicadas a la realidad local",
      description:
        "La misma capa de confianza sirve para certificar un cultivo, auditar un recurso público o demostrar la cadena de custodia de un producto.",
      items: [
        {
          icon: Leaf,
          sector: "Agro y agroindustria",
          title: "Certificación de origen y calidad",
          records: "Temperatura, humedad, lote, transporte y certificaciones.",
          outcome: "Confianza para exportar y acceso a precios premium.",
          accent: "green",
        },
        {
          icon: Landmark,
          sector: "Sector público",
          title: "Transparencia y control",
          records: "Licitaciones, entregas, subsidios y firmas.",
          outcome: "Auditoría ciudadana y menor riesgo de fraude.",
          accent: "tech",
        },
        {
          icon: Truck,
          sector: "Industria y logística",
          title: "Cadena de custodia",
          records: "Cada mano, mantenimiento, devoluciones y recalls.",
          outcome: "Trazabilidad completa y respuesta rápida.",
          accent: "gold",
        },
        {
          icon: Wallet,
          sector: "Finanzas e inversión",
          title: "Tokenización y crowdfunding",
          records: "Aportes, hitos, pagos y derechos tokenizados.",
          outcome:
            "Acceso a capital y seguimiento automático, con cumplimiento y sin promesas de rentabilidad.",
          accent: "violet",
        },
      ] as UseCaseItem[],
      mapTitle: "Mapa de trazabilidad",
      mapLabels: ["Origen", "Sensor", "Bloque", "Certificado"] as [
        string,
        string,
        string,
        string,
      ],
    },
    process: {
      eyebrow: "Método",
      title: "Una ruta clara, sin cajas negras",
      description:
        "No prometemos fechas antes de entender el alcance. Primero diagnosticamos, luego construimos.",
      steps: [
        {
          title: "Diagnóstico",
          description:
            "Entendemos el proceso, los datos y el riesgo. Decidimos si blockchain aplica.",
          deliverable: "Informe de decisión",
        },
        {
          title: "Arquitectura",
          description:
            "Diseñamos el modelo de datos, la red, los roles y las reglas del contrato.",
          deliverable: "Diagrama y especificación",
        },
        {
          title: "Construcción y pruebas",
          description:
            "Desarrollamos en Solidity, probamos casos felices y ataques, optimizamos gas.",
          deliverable: "Código + pruebas",
        },
        {
          title: "Despliegue e integración",
          description:
            "Testnet o red privada, APIs, dashboard y conexión con tus sistemas.",
          deliverable: "Piloto funcionando",
        },
        {
          title: "Transferencia",
          description:
            "Documentación, capacitación y soporte. Tu equipo queda con el control.",
          deliverable: "Documentación y handover",
        },
      ] as ProcessStep[],
    },
    evidence: {
      eyebrow: "Evidencias",
      title: "Lo que ya construimos y podemos demostrar",
      description:
        "No vendemos teoría. Estas son evidencias de laboratorio y proyectos propios, presentadas con transparencia.",
      codeTitle: "TrazabilidadAgricola_IR.sol",
      codeCaption: "Solidity 0.8.19 · Remix · Ganache",
      code: `function registrarLectura(
  int256 _temp,
  uint256 _hum,
  bytes32 _hash
) public onlyAuthorizedSensor {
  historial.push(Lectura({
    timestamp: block.timestamp,
    temperatura: _temp,
    humedad: _hum,
    hashDato: _hash
  }));
  emit NuevaLectura(
    block.timestamp, _temp, _hum, _hash
  );
}`,
      items: [
        {
          icon: Radio,
          title: "CultivaTech ColombIA",
          description:
            "Contrato de trazabilidad agrícola con control de acceso, hash SHA-256 y eventos para auditoría.",
          tags: ["IoT", "Solidity", "SHA-256"],
        },
        {
          icon: ShieldCheck,
          title: "Pruebas de seguridad",
          description:
            "Despliegue exitoso, registro autorizado y revert de una wallet no autorizada.",
          tags: ["Control de acceso", "Revert", "Gas"],
        },
        {
          icon: GraduationCap,
          title: "Formación aplicada",
          description:
            "Criptografía, estructura de bloques, estudio de caso y esquema de inversión tokenizado.",
          tags: ["Criptografía", "Bloques", "Tokenización"],
        },
      ] as EvidenceItem[],
      disclaimer:
        "Son evidencias de laboratorio y proyectos propios, no despliegues comerciales en mainnet ni auditorías certificadas. Las presentamos como prueba de capacidad técnica, no como casos de clientes.",
      imageBadge: "Laboratorio propio",
    },
    credentials: {
      eyebrow: "Credenciales",
      title: "Formación certificada, aplicada a proyectos reales",
      description:
        "Dos programas del SENA, 96 horas de formación y evaluación Apto (A) 4.5. Los certificados son verificables con su código.",
      items: [
        {
          title: "Blockchain: Contratos Inteligentes",
          institution:
            "SENA · Centro Industrial y de Desarrollo Empresarial de Soacha",
          hours: "48 horas",
          date: "8 de abril de 2026",
          grade: "Apto (A) · 4.5",
          code: "9232003429543CC1014189995C",
        },
        {
          title: "Blockchain en Criptomonedas",
          institution: "SENA · Centro Agropecuario La Granja",
          hours: "48 horas",
          date: "14 de septiembre de 2026",
          grade: "Apto (A) · 4.5",
          code: "9123003580559CC1014189995C",
        },
      ] as CredentialItem[],
      verify: "Verificar en certificados.sena.edu.co",
      note: "No usamos logos de las entidades sin autorización. Mostramos nombre, código y enlace de verificación.",
    },
    ethics: {
      eyebrow: "Límites claros",
      title: "Confianza también es decir lo que no hacemos",
      description:
        "La tecnología puede resolver mucho, pero no todo. Estos son nuestros límites y compromisos.",
      items: [
        {
          icon: ShieldCheck,
          title: "No custodiamos fondos",
          description: "No administramos dinero de terceros ni prometemos rentabilidad.",
        },
        {
          icon: Coins,
          title: "No emitimos criptomonedas especulativas",
          description: "Trabajamos con activos reales y casos de uso verificables.",
        },
        {
          icon: Search,
          title: "Si blockchain no es necesario, lo decimos",
          description: "Preferimos una base de datos segura antes que vender tecnología innecesaria.",
        },
        {
          icon: Lock,
          title: "Probamos antes de mainnet",
          description: "Aplicamos control de acceso, mínimo privilegio y pruebas de fallo.",
        },
        {
          icon: Fingerprint,
          title: "Los datos personales no van a la cadena",
          description: "Se anclan hashes y se mantiene la información sensible fuera de la red.",
        },
        {
          icon: Scale,
          title: "La tokenización requiere revisión legal",
          description: "Trabajamos con el marco aplicable y aliados legales y contables.",
        },
      ] as EthicsItem[],
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Lo que suelen preguntarnos",
      items: [
        {
          question: "¿Blockchain es solo criptomonedas?",
          answer:
            "No. Aquí lo usamos para trazabilidad, notarización y automatización de procesos. La criptomoneda es una aplicación posible, no el punto de partida.",
        },
        {
          question: "¿Tengo que reemplazar mi sistema actual?",
          answer:
            "No. Blockchain se integra como una capa sobre lo que ya tienes: ERP, formularios, sensores o documentos.",
        },
        {
          question: "¿Mis datos quedan públicos?",
          answer:
            "No necesariamente. Se puede registrar solo el hash y mantener la información sensible fuera de la cadena.",
        },
        {
          question: "¿Puedo empezar con un piloto?",
          answer:
            "Sí. Es la forma recomendada: bajo riesgo, alcance acotado y resultados medibles antes de escalar.",
        },
        {
          question: "¿Trabajan con AWS, Google o Azure?",
          answer:
            "Podemos integrarnos, pero priorizamos infraestructura propia o soberana cuando el proyecto lo permite.",
        },
        {
          question: "¿Ofrecen clases?",
          answer:
            "Sí. Diseñamos talleres para equipos, instituciones y gremios. La certificación SENA se obtiene a través de los programas del SENA.",
        },
        {
          question: "¿Cómo se cobra?",
          answer:
            "Primero hacemos un diagnóstico y luego una propuesta según el alcance. El valor de la reserva del diagnóstico se muestra al finalizar el formulario.",
        },
        {
          question: "¿Qué pasa si no necesito blockchain?",
          answer:
            "Te lo decimos. Preferimos una solución honesta antes que vender tecnología innecesaria.",
        },
      ] as FaqItem[],
    },
    closing: {
      title: "¿Hablamos de tu caso?",
      description:
        "Cuéntanos qué dato necesitas proteger, qué proceso quieres automatizar o qué equipo necesita formación.",
      cta: "Solicitar diagnóstico",
      secondary: "Ver portafolio",
      links: [
        { label: "Workstations HPC", to: "/servicios/hpc-builder" },
        { label: "Talleres agro-innovación", to: "/talleres-agro-innovacion" },
        { label: "Inversionistas", to: "/inversionistas" },
      ],
    },
  },
  en: {
    meta: {
      title: "Sovereign Blockchain & Smart Contracts | Lukas Moyano",
      description:
        "Consulting, smart contracts, immutable traceability, asset tokenisation and certified training. Sovereign blockchain for agribusiness, public sector, industry and finance.",
    },
    badge: "DLT · Web3 · Tokenisation",
    title: "Sovereign Blockchain & Smart Contracts",
    subtitle:
      "We turn your critical data into immutable, auditable and verifiable records — without depending on the cloud or third parties.",
    chips: ["Traceability", "Smart Contracts", "Tokenisation", "Certified training"],
    back: "Back to Home",
    problem: {
      eyebrow: "The starting point",
      title: "The problem is not technology. It is trust.",
      description:
        "When critical data can be edited without leaving a trace, the whole operation loses value: audits slow down, certification depends on intermediaries and customers have no way to verify.",
      items: [
        {
          icon: Fingerprint,
          title: "Data that can be edited",
          description:
            "A spreadsheet, a PDF or a centralised database can be changed without leaving a trace.",
        },
        {
          icon: Network,
          title: "Cloud dependency",
          description:
            "Your information lives on third-party servers, under their rules, costs and jurisdiction.",
        },
        {
          icon: Search,
          title: "Slow, manual audits",
          description:
            "Reconciling information across teams, suppliers and regulators takes weeks.",
        },
        {
          icon: Lock,
          title: "Intermediaries that add cost",
          description:
            "Certifications, payments and contracts pass through several actors, adding cost and friction.",
        },
      ],
      closing:
        "Blockchain does not replace your operation: it adds a verifiable trust layer on top of it.",
    },
    architecture: {
      eyebrow: "The solution",
      title: "A 3-layer architecture, from capture to immutable seal",
      description:
        "It is not about putting everything on-chain. It is about capturing the right data, processing it under your control and anchoring only the necessary evidence.",
      layers: [
        {
          icon: Leaf,
          title: "1. Capture",
          description:
            "IoT sensors, forms, ERP or documents. Data is signed and hashed at the source.",
          tag: "Verified origin",
          accent: "green" as Accent,
        },
        {
          icon: Cpu,
          title: "2. Processing",
          description:
            "Local HPC and AI validate, encrypt and prepare the evidence. Nothing leaves your infrastructure.",
          tag: "Local AI",
          accent: "tech" as Accent,
        },
        {
          icon: LinkIcon,
          title: "3. Validation",
          description:
            "A smart contract anchors the hash on-chain. The record becomes immutable and verifiable.",
          tag: "Immutable record",
          accent: "indigo" as Accent,
        },
      ],
      resultLabel: "Result",
      result:
        "A digital certificate that your customer, auditor or regulator can verify without trusting your word.",
      flowTitle: "From data to certificate",
      flow: [
        { icon: Radio, label: "Capture", hint: "Sensor / form" },
        { icon: Fingerprint, label: "SHA-256 hash", hint: "Digital fingerprint" },
        { icon: Lock, label: "ECDSA signature", hint: "Sender identity" },
        { icon: Boxes, label: "Block", hint: "Immutable record" },
        { icon: BadgeCheck, label: "Certificate", hint: "External verification" },
      ],
      imageLeft: {
        title: "Field capture",
        caption: "Own sensors and hardware, not third-party dependency.",
      },
      imageRight: {
        title: "Local processing",
        caption: "HPC and AI on your infrastructure, with encryption and access control.",
      },
    },
    services: {
      eyebrow: "Services",
      title: "What can you hire?",
      description:
        "Every service starts from a business need. Technology is the means, not the starting point.",
      items: [
        {
          icon: Search,
          title: "Web3 feasibility assessment",
          what: "Before investing, you will know whether blockchain is the answer or whether a secure database is enough.",
          deliverable: "Decision report + recommended architecture.",
          ideal: "Companies that want to innovate without overspending.",
          accent: "tech",
        },
        {
          icon: Code2,
          title: "Smart contract design & development",
          what: "We automate rules, payments, permissions and certifications with verifiable logic.",
          deliverable:
            "Solidity contract, tests, ABI, documentation and deployment on testnet or a private network.",
          ideal: "Agribusiness, finance and institutions.",
          accent: "indigo",
        },
        {
          icon: FileCheck2,
          title: "Traceability & digital notarisation",
          what: "We record the full history of a product, batch or document.",
          deliverable:
            "Data model, hash anchoring, query dashboard and verifiable certificate.",
          ideal: "Exporters, logistics and public sector.",
          accent: "gold",
        },
        {
          icon: Coins,
          title: "Real-world asset tokenisation",
          what: "We represent rights over physical or financial assets in a programmable way.",
          deliverable:
            "Technical design, token standard, issuance and transfer rules, feasibility analysis.",
          ideal: "Investment projects, agribusiness and infrastructure.",
          note: "This is not financial or legal advice: work is done within the applicable legal framework.",
          accent: "violet",
        },
        {
          icon: Radio,
          title: "IoT-to-Chain integration & sovereign nodes",
          what: "We connect hardware and real-world data to an immutable record.",
          deliverable:
            "ESP32/MQTT/oracle integration, local node, dashboard and monitoring.",
          ideal: "Agri-tech, industry and environmental sensors.",
          accent: "green",
        },
        {
          icon: GraduationCap,
          title: "Training & capacity building",
          what: "We train your team in fundamentals, smart contracts, traceability and tokenisation.",
          deliverable: "Tailored workshop, materials, exercises and applied case.",
          ideal: "Companies, institutions, universities and guilds.",
          note: "SENA certification is obtained through SENA programmes; we design the training.",
          accent: "red",
        },
      ] as ServiceItem[],
    },
    useCases: {
      eyebrow: "Real application",
      title: "Solutions applied to local reality",
      description:
        "The same trust layer can certify a crop, audit a public resource or prove the chain of custody of a product.",
      items: [
        {
          icon: Leaf,
          sector: "Agro & agribusiness",
          title: "Origin and quality certification",
          records: "Temperature, humidity, batch, transport and certifications.",
          outcome: "Export confidence and access to premium prices.",
          accent: "green",
        },
        {
          icon: Landmark,
          sector: "Public sector",
          title: "Transparency and control",
          records: "Tenders, deliveries, subsidies and signatures.",
          outcome: "Citizen audit and lower fraud risk.",
          accent: "tech",
        },
        {
          icon: Truck,
          sector: "Industry & logistics",
          title: "Chain of custody",
          records: "Every hand, maintenance, returns and recalls.",
          outcome: "Full traceability and fast response.",
          accent: "gold",
        },
        {
          icon: Wallet,
          sector: "Finance & investment",
          title: "Tokenisation and crowdfunding",
          records: "Contributions, milestones, payments and tokenised rights.",
          outcome:
            "Access to capital and automated tracking, with compliance and no return promises.",
          accent: "violet",
        },
      ] as UseCaseItem[],
      mapTitle: "Traceability map",
      mapLabels: ["Origin", "Sensor", "Block", "Certificate"] as [
        string,
        string,
        string,
        string,
      ],
    },
    process: {
      eyebrow: "Method",
      title: "A clear route, no black boxes",
      description:
        "We do not promise dates before understanding the scope. First we diagnose, then we build.",
      steps: [
        {
          title: "Assessment",
          description:
            "We understand the process, the data and the risk. We decide whether blockchain applies.",
          deliverable: "Decision report",
        },
        {
          title: "Architecture",
          description:
            "We design the data model, network, roles and contract rules.",
          deliverable: "Diagram and specification",
        },
        {
          title: "Build & test",
          description:
            "We develop in Solidity, test happy paths and attacks, and optimise gas.",
          deliverable: "Code + tests",
        },
        {
          title: "Deploy & integrate",
          description:
            "Testnet or private network, APIs, dashboard and connection to your systems.",
          deliverable: "Working pilot",
        },
        {
          title: "Handover",
          description:
            "Documentation, training and support. Your team keeps control.",
          deliverable: "Documentation and handover",
        },
      ] as ProcessStep[],
    },
    evidence: {
      eyebrow: "Evidence",
      title: "What we have already built and can demonstrate",
      description:
        "We do not sell theory. These are lab evidence and our own projects, presented transparently.",
      codeTitle: "TrazabilidadAgricola_IR.sol",
      codeCaption: "Solidity 0.8.19 · Remix · Ganache",
      code: `function registrarLectura(
  int256 _temp,
  uint256 _hum,
  bytes32 _hash
) public onlyAuthorizedSensor {
  historial.push(Lectura({
    timestamp: block.timestamp,
    temperatura: _temp,
    humedad: _hum,
    hashDato: _hash
  }));
  emit NuevaLectura(
    block.timestamp, _temp, _hum, _hash
  );
}`,
      items: [
        {
          icon: Radio,
          title: "CultivaTech ColombIA",
          description:
            "Agricultural traceability contract with access control, SHA-256 hashing and audit events.",
          tags: ["IoT", "Solidity", "SHA-256"],
        },
        {
          icon: ShieldCheck,
          title: "Security tests",
          description:
            "Successful deployment, authorised recording and revert from an unauthorised wallet.",
          tags: ["Access control", "Revert", "Gas"],
        },
        {
          icon: GraduationCap,
          title: "Applied training",
          description:
            "Cryptography, block structure, case study and tokenised investment scheme.",
          tags: ["Cryptography", "Blocks", "Tokenisation"],
        },
      ] as EvidenceItem[],
      disclaimer:
        "These are lab evidence and our own projects, not commercial mainnet deployments or certified audits. We present them as proof of technical capability, not as client case studies.",
      imageBadge: "Own lab",
    },
    credentials: {
      eyebrow: "Credentials",
      title: "Certified training, applied to real projects",
      description:
        "Two SENA programmes, 96 training hours and an Apto (A) 4.5 grade. Certificates are verifiable with their code.",
      items: [
        {
          title: "Blockchain: Smart Contracts",
          institution:
            "SENA · Centro Industrial y de Desarrollo Empresarial de Soacha",
          hours: "48 hours",
          date: "8 April 2026",
          grade: "Apto (A) · 4.5",
          code: "9232003429543CC1014189995C",
        },
        {
          title: "Blockchain in Cryptocurrencies",
          institution: "SENA · Centro Agropecuario La Granja",
          hours: "48 hours",
          date: "14 September 2026",
          grade: "Apto (A) · 4.5",
          code: "9123003580559CC1014189995C",
        },
      ] as CredentialItem[],
      verify: "Verify at certificados.sena.edu.co",
      note: "We do not use entity logos without permission. We show name, code and verification link.",
    },
    ethics: {
      eyebrow: "Clear boundaries",
      title: "Trust also means saying what we do not do",
      description:
        "Technology can solve a lot, but not everything. These are our limits and commitments.",
      items: [
        {
          icon: ShieldCheck,
          title: "We do not custody funds",
          description: "We do not manage third-party money or promise returns.",
        },
        {
          icon: Coins,
          title: "We do not issue speculative cryptocurrencies",
          description: "We work with real assets and verifiable use cases.",
        },
        {
          icon: Search,
          title: "If blockchain is not needed, we say so",
          description: "We prefer a secure database over selling unnecessary technology.",
        },
        {
          icon: Lock,
          title: "We test before mainnet",
          description: "We apply access control, least privilege and failure testing.",
        },
        {
          icon: Fingerprint,
          title: "Personal data does not go on-chain",
          description: "We anchor hashes and keep sensitive information off the network.",
        },
        {
          icon: Scale,
          title: "Tokenisation requires legal review",
          description: "We work within the applicable framework and with legal and accounting partners.",
        },
      ] as EthicsItem[],
    },
    faq: {
      eyebrow: "FAQ",
      title: "What people usually ask us",
      items: [
        {
          question: "Is blockchain only about cryptocurrencies?",
          answer:
            "No. Here we use it for traceability, notarisation and process automation. Cryptocurrency is one possible application, not the starting point.",
        },
        {
          question: "Do I have to replace my current system?",
          answer:
            "No. Blockchain integrates as a layer on top of what you already have: ERP, forms, sensors or documents.",
        },
        {
          question: "Does my data become public?",
          answer:
            "Not necessarily. You can record only the hash and keep sensitive information off-chain.",
        },
        {
          question: "Can I start with a pilot?",
          answer:
            "Yes. It is the recommended path: low risk, limited scope and measurable results before scaling.",
        },
        {
          question: "Do you work with AWS, Google or Azure?",
          answer:
            "We can integrate, but we prioritise own or sovereign infrastructure when the project allows it.",
        },
        {
          question: "Do you offer classes?",
          answer:
            "Yes. We design workshops for teams, institutions and guilds. SENA certification is obtained through SENA programmes.",
        },
        {
          question: "How do you charge?",
          answer:
            "First we run an assessment, then we propose based on scope. The assessment reservation fee is shown after you complete the form.",
        },
        {
          question: "What if I do not need blockchain?",
          answer:
            "We tell you. We prefer an honest solution over selling unnecessary technology.",
        },
      ] as FaqItem[],
    },
    closing: {
      title: "Shall we talk about your case?",
      description:
        "Tell us what data you need to protect, what process you want to automate or what training your team needs.",
      cta: "Request an assessment",
      secondary: "View portfolio",
      links: [
        { label: "HPC workstations", to: "/servicios/hpc-builder" },
        { label: "Agro-innovation workshops", to: "/talleres-agro-innovacion" },
        { label: "Investors", to: "/inversionistas" },
      ],
    },
  },
} as const;

const SectionHeading = ({
  eyebrow,
  title,
  description,
  centered = true,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}) => (
  <div
    className={
      centered
        ? "mx-auto mb-10 max-w-3xl text-center"
        : "mb-8 max-w-3xl"
    }
  >
    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300">
      {eyebrow}
    </p>
    <h2 className="mb-3 text-3xl font-bold md:text-4xl">{title}</h2>
    {description && (
      <p className="text-lg leading-relaxed text-muted-foreground">
        {description}
      </p>
    )}
  </div>
);

const BlockchainServices = () => {
  const [language, setLanguage] = useState<Language>("es");
  const navigate = useNavigate();
  const t = content[language];

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const scrollToForm = () => {
    document
      .getElementById("diagnostico-blockchain")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const jsonLd = useMemo(
    () => [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: t.title,
        description: t.meta.description,
        serviceType: [
          "Blockchain consulting",
          "Smart contract development",
          "Immutable traceability",
          "Asset tokenisation",
          "IoT-to-chain integration",
          "Blockchain training",
        ],
        provider: {
          "@type": "Organization",
          name: "_-IR-_ Productions",
          url: "https://masterlukasmoyano.com",
        },
        areaServed: {
          "@type": "Country",
          name: "Colombia",
        },
        url: "https://masterlukasmoyano.com/servicios/blockchain",
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: t.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
    [t]
  );

  usePageMeta({
    title: t.meta.title,
    description: t.meta.description,
    canonical: "https://masterlukasmoyano.com/servicios/blockchain",
    jsonLd,
  });

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} toggleLanguage={toggleLanguage} />

      <main className="container mx-auto px-4 pb-20 pt-24">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="group mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          {t.back}
        </Button>

        {/* Título de servicio: compacto, sin hero, sin foto, sin CTA. */}
        <header className="mb-16 max-w-4xl">
          <Badge className="mb-4 bg-primary text-primary-foreground">
            {t.badge}
          </Badge>
          <h1 className="mb-5 text-4xl font-bold leading-tight gradient-text-primary md:text-6xl">
            {t.title}
          </h1>
          <p className="max-w-3xl text-xl font-light leading-relaxed text-muted-foreground md:text-2xl">
            {t.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {t.chips.map((chip) => (
              <Badge
                key={chip}
                variant="outline"
                className="border-indigo-500/30 bg-indigo-500/10 text-indigo-200"
              >
                {chip}
              </Badge>
            ))}
          </div>
        </header>

        {/* El problema */}
        <section className="mb-20">
          <SectionHeading
            eyebrow={t.problem.eyebrow}
            title={t.problem.title}
            description={t.problem.description}
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {t.problem.items.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="tech-border bg-card/50 transition-colors hover:bg-card"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-lg font-medium text-foreground">
            {t.problem.closing}
          </p>
        </section>

        {/* Arquitectura de 3 capas */}
        <section className="mb-20">
          <div className="circuit-pattern rounded-2xl border border-border bg-card/50 p-6 tech-border md:p-10">
            <SectionHeading
              eyebrow={t.architecture.eyebrow}
              title={t.architecture.title}
              description={t.architecture.description}
            />

            <div className="relative grid gap-6 md:grid-cols-3">
              <div className="absolute left-1/4 right-1/4 top-1/2 z-0 hidden h-0.5 -translate-y-1/2 bg-gradient-to-r from-tech-green via-accent to-indigo-500 opacity-30 md:block" />
              {t.architecture.layers.map((layer) => {
                const Icon = layer.icon;
                const accent = accents[layer.accent];
                return (
                  <Card
                    key={layer.title}
                    className={`relative z-10 border ${accent.border} bg-background/90 hover-lift`}
                  >
                    <CardHeader className="text-center">
                      <div
                        className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${accent.bg}`}
                      >
                        <Icon className={`h-8 w-8 ${accent.icon}`} />
                      </div>
                      <CardTitle>{layer.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {layer.description}
                      </p>
                      <Badge
                        variant="outline"
                        className={`mt-4 ${accent.badge}`}
                      >
                        {layer.tag}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mt-8 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
                {t.architecture.resultLabel}
              </span>
              <p className="mt-1 text-sm text-muted-foreground md:text-base">
                {t.architecture.result}
              </p>
            </div>

            <div className="mt-10">
              <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {t.architecture.flowTitle}
              </h3>
              <div className="grid gap-3 sm:grid-cols-5">
                {t.architecture.flow.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.label} className="relative">
                      <div className="flex h-full flex-col items-center rounded-xl border border-border bg-background/70 p-4 text-center">
                        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/10">
                          <Icon className="h-5 w-5 text-indigo-400" />
                        </div>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          0{index + 1}
                        </span>
                        <p className="mt-1 text-sm font-semibold">{step.label}</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {step.hint}
                        </p>
                      </div>
                      {index < t.architecture.flow.length - 1 && (
                        <ArrowRight className="absolute -right-3 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-indigo-400/60 sm:block" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <figure className="overflow-hidden rounded-xl border border-border bg-background/70">
                <img
                  src={iotRobotImage}
                  alt={t.architecture.imageLeft.title}
                  className="h-48 w-full object-cover opacity-80"
                  loading="lazy"
                />
                <figcaption className="p-3 text-xs text-muted-foreground">
                  <strong className="text-foreground">
                    {t.architecture.imageLeft.title}.
                  </strong>{" "}
                  {t.architecture.imageLeft.caption}
                </figcaption>
              </figure>
              <figure className="overflow-hidden rounded-xl border border-border bg-background/70">
                <img
                  src={hpcWorkstationImage}
                  alt={t.architecture.imageRight.title}
                  className="h-48 w-full object-cover opacity-80"
                  loading="lazy"
                />
                <figcaption className="p-3 text-xs text-muted-foreground">
                  <strong className="text-foreground">
                    {t.architecture.imageRight.title}.
                  </strong>{" "}
                  {t.architecture.imageRight.caption}
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="mb-20">
          <SectionHeading
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            description={t.services.description}
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {t.services.items.map((service) => {
              const Icon = service.icon;
              const accent = accents[service.accent];
              return (
                <Card
                  key={service.title}
                  className={`tech-border border ${accent.border} bg-card/50 transition-colors hover:bg-card`}
                >
                  <CardHeader>
                    <div
                      className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${accent.bg}`}
                    >
                      <Icon className={`h-6 w-6 ${accent.icon}`} />
                    </div>
                    <CardTitle className="text-xl leading-snug">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <p className="leading-relaxed text-muted-foreground">
                      {service.what}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        {language === "es" ? "Entregable: " : "Deliverable: "}
                      </span>
                      {service.deliverable}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        {language === "es" ? "Ideal para: " : "Ideal for: "}
                      </span>
                      {service.ideal}
                    </p>
                    {service.note && (
                      <p className={`rounded-lg border p-3 text-xs ${accent.badge}`}>
                        {service.note}
                      </p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Casos de uso */}
        <section className="mb-20">
          <SectionHeading
            eyebrow={t.useCases.eyebrow}
            title={t.useCases.title}
            description={t.useCases.description}
          />
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="grid gap-5 sm:grid-cols-2">
              {t.useCases.items.map((item) => {
                const Icon = item.icon;
                const accent = accents[item.accent];
                return (
                  <Card
                    key={item.title}
                    className={`tech-border border ${accent.border} bg-card/50`}
                  >
                    <CardContent className="p-6">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <Badge variant="outline" className={accent.badge}>
                          {item.sector}
                        </Badge>
                        <Icon className={`h-6 w-6 ${accent.icon}`} />
                      </div>
                      <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
                      <p className="mb-3 text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">
                          {language === "es" ? "Registra: " : "Records: "}
                        </span>
                        {item.records}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">
                          {language === "es" ? "Obtiene: " : "Outcome: "}
                        </span>
                        {item.outcome}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="tech-border flex flex-col justify-center bg-indigo-500/5 p-6">
              <h3 className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
                {t.useCases.mapTitle}
              </h3>
              <TraceabilityMap
                labels={t.useCases.mapLabels}
                className="w-full"
              />
              <p className="mt-2 text-center text-xs text-muted-foreground">
                {language === "es"
                  ? "Cada eslabón deja una huella verificable."
                  : "Every link leaves a verifiable fingerprint."}
              </p>
            </Card>
          </div>
        </section>

        {/* Cómo trabajamos */}
        <section className="mb-20">
          <SectionHeading
            eyebrow={t.process.eyebrow}
            title={t.process.title}
            description={t.process.description}
          />
          <div className="relative grid gap-6 md:grid-cols-5">
            <div className="absolute left-[10%] right-[10%] top-7 z-0 hidden h-0.5 bg-gradient-to-r from-tech-green via-accent to-indigo-500 opacity-30 md:block" />
            {t.process.steps.map((step, index) => (
              <div key={step.title} className="relative z-10">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-indigo-500/30 bg-background text-lg font-bold text-indigo-300">
                  0{index + 1}
                </div>
                <h3 className="mb-2 font-semibold">{step.title}</h3>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
                <Badge
                  variant="outline"
                  className="border-border bg-background text-xs text-muted-foreground"
                >
                  {step.deliverable}
                </Badge>
              </div>
            ))}
          </div>
        </section>

        {/* Evidencias */}
        <section className="mb-20">
          <SectionHeading
            eyebrow={t.evidence.eyebrow}
            title={t.evidence.title}
            description={t.evidence.description}
          />
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="overflow-hidden rounded-2xl border border-border bg-slate-950">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-tech-green/80" />
                </div>
                <span className="text-xs text-slate-400">
                  {t.evidence.codeCaption}
                </span>
              </div>
              <div className="p-4">
                <p className="mb-3 font-mono text-xs text-indigo-300">
                  {t.evidence.codeTitle}
                </p>
                <pre className="overflow-x-auto text-xs leading-relaxed text-slate-300">
                  <code>{t.evidence.code}</code>
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              {t.evidence.items.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="tech-border bg-card/50">
                    <CardContent className="flex gap-4 p-5">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-500/10">
                        <Icon className="h-5 w-5 text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="mb-2 text-sm text-muted-foreground">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="border-border text-[10px] text-muted-foreground"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-[0.9fr_1.1fr] md:items-stretch">
            <figure className="relative overflow-hidden rounded-xl border border-border">
              <img
                src={blockchainImage}
                alt={t.evidence.imageBadge}
                className="h-52 w-full object-cover opacity-70"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <Badge className="absolute left-4 top-4 border-indigo-500/40 bg-indigo-500/20 text-indigo-200">
                <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                {t.evidence.imageBadge}
              </Badge>
            </figure>
            <div className="flex items-start gap-3 rounded-xl border border-accent/20 bg-accent/5 p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t.evidence.disclaimer}
              </p>
            </div>
          </div>
        </section>

        {/* Certificaciones */}
        <section className="mb-20">
          <SectionHeading
            eyebrow={t.credentials.eyebrow}
            title={t.credentials.title}
            description={t.credentials.description}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {t.credentials.items.map((credential) => (
              <Card
                key={credential.code}
                className="tech-border bg-card/50 transition-colors hover:bg-card"
              >
                <CardContent className="p-6">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <Badge className="mb-3 border-emerald-500/30 bg-emerald-500/15 text-emerald-300">
                        <BadgeCheck className="mr-1.5 h-3.5 w-3.5" />
                        {language === "es" ? "Certificado" : "Certified"}
                      </Badge>
                      <h3 className="text-xl font-semibold leading-snug">
                        {credential.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {credential.institution}
                      </p>
                    </div>
                    <CertificateSeal className="h-16 w-16 flex-shrink-0" />
                  </div>

                  <dl className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                        {language === "es" ? "Duración" : "Duration"}
                      </dt>
                      <dd className="font-medium">{credential.hours}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                        {language === "es" ? "Fecha" : "Date"}
                      </dt>
                      <dd className="font-medium">{credential.date}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                        {language === "es" ? "Evaluación" : "Grade"}
                      </dt>
                      <dd className="font-medium">{credential.grade}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                        {language === "es" ? "Código" : "Code"}
                      </dt>
                      <dd className="break-all font-mono text-xs">
                        {credential.code}
                      </dd>
                    </div>
                  </dl>

                  <Button asChild variant="outline" size="sm" className="mt-5">
                    <a
                      href="https://certificados.sena.edu.co"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ShieldCheck className="mr-2 h-4 w-4 text-emerald-400" />
                      {t.credentials.verify}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-muted-foreground">
            {t.credentials.note}
          </p>
        </section>

        {/* Ética y límites */}
        <section className="mb-20">
          <SectionHeading
            eyebrow={t.ethics.eyebrow}
            title={t.ethics.title}
            description={t.ethics.description}
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {t.ethics.items.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card/40 p-5"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                    <Icon className="h-5 w-5 text-emerald-400" />
                  </div>
                  <h3 className="mb-1 font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <SectionHeading
            eyebrow={t.faq.eyebrow}
            title={t.faq.title}
          />
          <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card/40 px-5 md:px-8">
            <Accordion type="single" collapsible className="w-full">
              {t.faq.items.map((item, index) => (
                <AccordionItem key={item.question} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    <span className="flex items-start gap-3">
                      <CircleHelp className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-400" />
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-7 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Formulario */}
        <DiagnosticForm language={language} />

        {/* Cierre y enlaces internos */}
        <section className="mb-8 text-center">
          <h2 className="mb-3 text-2xl font-bold md:text-3xl">
            {t.closing.title}
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            {t.closing.description}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="cta-primary" onClick={scrollToForm}>
              {t.closing.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://wa.me/573197919742" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-5 w-5 text-green-400" />
                WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              onClick={() => navigate("/portfolio")}
            >
              {t.closing.secondary}
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            {t.closing.links.map((link) => (
              <button
                key={link.to}
                type="button"
                onClick={() => navigate(link.to)}
                className="text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
              >
                {link.label}
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlockchainServices;
