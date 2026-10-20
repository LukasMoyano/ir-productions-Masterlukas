import { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Copy,
  Download,
  Mail,
  MessageSquare,
  Pencil,
  QrCode,
  Send,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Language = "es" | "en";
type Interest = "proyecto" | "formacion" | "ambos";

const PAYMENT_ALIAS = "@bflm1899954925";
const QR_SRC = "/pagos/qr-bre-b-250k-2026-10.png";

interface DiagnosticFormProps {
  language: Language;
}

interface FormState {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  segment: string;
  sector: string;
  need: string;
  stage: string;
  interest: Interest;
  message: string;
  consent: boolean;
}

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  whatsapp: "",
  segment: "",
  sector: "",
  need: "",
  stage: "",
  interest: "proyecto",
  message: "",
  consent: false,
};

const copy = {
  es: {
    eyebrow: "Diagnóstico inicial",
    title: "Cuéntanos qué necesitas. Te decimos si blockchain es la respuesta.",
    description:
      "Completa el formulario y prepararemos una solicitud con tu contexto. El diagnóstico inicial tiene un valor de reserva que verás al finalizar; primero entendemos tu caso y luego activamos el proceso.",
    bullets: [
      "Respuesta en 24–48 horas hábiles.",
      "Diagnóstico técnico honesto: si no necesitas blockchain, te lo decimos.",
      "Gremios agrícolas, ONG y entidades públicas: condiciones especiales.",
      "El valor de la reserva se muestra solo al finalizar el formulario.",
    ],
    directTitle: "¿Prefieres hablar directamente?",
    directText:
      "También puedes escribirnos por WhatsApp o correo. Cuéntanos el sector, la necesidad y la etapa de tu proyecto.",
    whatsapp: "WhatsApp",
    email: "Correo",
    fields: {
      name: "Nombre",
      company: "Empresa o institución",
      email: "Correo electrónico",
      whatsapp: "WhatsApp",
      segment: "Tipo de organización",
      sector: "Sector",
      need: "¿Qué necesitas?",
      stage: "Etapa del proyecto",
      interest: "¿Qué buscas?",
      message: "¿Qué quieres saber o resolver?",
      consent:
        "Autorizo el tratamiento de mis datos para responder esta solicitud.",
    },
    placeholders: {
      name: "Tu nombre",
      company: "Nombre de la organización (opcional)",
      email: "tucorreo@empresa.com",
      whatsapp: "+57 ...",
      message:
        "Describe el proceso, el dato crítico o la necesidad. Si ya tienes un caso de uso, inclúyelo.",
    },
    sectors: [
      ["agro", "Agro y agroindustria"],
      ["publico", "Sector público"],
      ["industria", "Industria y logística"],
      ["finanzas", "Finanzas e inversión"],
      ["educacion", "Educación"],
      ["otro", "Otro"],
    ],
    segments: [
      ["general", "Público general"],
      ["empresa", "Empresa o emprendimiento"],
      ["gremio_agricola", "Gremio agrícola / asociación campesina"],
      ["ong", "ONG / fundación"],
      ["gobierno", "Entidad pública / gobierno"],
    ],
    needs: [
      ["diagnostico", "Diagnóstico de viabilidad"],
      ["contratos", "Smart contracts"],
      ["trazabilidad", "Trazabilidad / notarización"],
      ["tokenizacion", "Tokenización de activos"],
      ["iot", "Integración IoT"],
      ["formacion", "Formación para mi equipo"],
      ["otro", "Otra necesidad"],
    ],
    stages: [
      ["idea", "Idea o exploración"],
      ["piloto", "Piloto en marcha"],
      ["operacion", "Operación en producción"],
      ["noaplica", "No aplica"],
    ],
    interests: [
      ["proyecto", "Quiero un proyecto"],
      ["formacion", "Quiero formación"],
      ["ambos", "Ambos"],
    ],
    required: "Este campo es obligatorio.",
    invalidEmail: "Escribe un correo válido.",
    consentRequired: "Necesitamos tu autorización para responder.",
    submit: "Preparar solicitud",
    sending: "Preparando...",
    successTitle: "Tu solicitud está lista",
    successText:
      "Revisa el resumen, realiza la reserva si aplica y envía tu solicitud. No se ha enviado nada todavía.",
    successSummary: "Resumen de la solicitud",
    recordIdLabel: "ID de solicitud",
    paymentTitle: "Reserva del diagnóstico",
    paymentText:
      "Para agendar el diagnóstico, realiza la reserva y envía el comprobante por WhatsApp o correo.",
    paymentAmountLabel: "Valor de la reserva",
    paymentAmount: "$250.000 COP",
    paymentAliasLabel: "Llave Bre-B",
    paymentBeneficiaryLabel: "Beneficiario",
    paymentBeneficiary: "Lukas Moyano",
    paymentQrAlt:
      "QR Bre-B para pagar la reserva de diagnóstico de $250.000 a Lukas Moyano",
    paymentDownload: "Descargar QR",
    paymentNote:
      "Si tu entidad no lee el QR, transfiere el monto exacto a la llave Bre-B.",
    paymentCheckbox: "Ya realicé el pago y adjuntaré el comprobante.",
    paymentDone: "Pago realizado, comprobante adjunto",
    paymentPending: "Pago pendiente",
    paymentSummaryLabel: "Estado de la reserva",
    specialTitle: "Evaluación especial",
    specialText:
      "Tu perfil requiere evaluación especial. No realices ningún pago en este paso. Envía tu solicitud y te contactaremos para validar condiciones.",
    specialSummaryLabel: "Condición: evaluación especial, sin pago inicial",
    copyAlias: "Copiar llave",
    copied: "Copiada",
    sendWhatsappPayment: "Enviar comprobante",
    sendEmailPayment: "Enviar por correo",
    sendWhatsappSpecial: "Enviar solicitud",
    sendEmailSpecial: "Enviar por correo",
    sendWhatsapp: "Enviar por WhatsApp",
    sendEmail: "Enviar por correo",
    edit: "Editar solicitud",
    privacy:
      "Tus datos se usan únicamente para responder esta solicitud. No compartimos información con terceros.",
    summaryTitle: "Solicitud de diagnóstico — Blockchain Soberano",
  },
  en: {
    eyebrow: "Initial assessment",
    title: "Tell us what you need. We will tell you if blockchain is the answer.",
    description:
      "Fill in the form and we will prepare a request with your context. The initial assessment has a reservation fee that you will see at the end; first we understand your case, then we activate the process.",
    bullets: [
      "Response within 24–48 business hours.",
      "Honest technical assessment: if you do not need blockchain, we will tell you.",
      "Agricultural guilds, NGOs and public entities: special conditions.",
      "The reservation fee is shown only after you complete the form.",
    ],
    directTitle: "Prefer to talk directly?",
    directText:
      "You can also write to us on WhatsApp or email. Tell us your sector, your need and your project stage.",
    whatsapp: "WhatsApp",
    email: "Email",
    fields: {
      name: "Name",
      company: "Company or institution",
      email: "Email address",
      whatsapp: "WhatsApp",
      segment: "Organisation type",
      sector: "Sector",
      need: "What do you need?",
      stage: "Project stage",
      interest: "What are you looking for?",
      message: "What do you want to know or solve?",
      consent: "I authorise the processing of my data to answer this request.",
    },
    placeholders: {
      name: "Your name",
      company: "Organisation name (optional)",
      email: "you@company.com",
      whatsapp: "+57 ...",
      message:
        "Describe the process, the critical data or the need. If you already have a use case, include it.",
    },
    sectors: [
      ["agro", "Agro & agribusiness"],
      ["publico", "Public sector"],
      ["industria", "Industry & logistics"],
      ["finanzas", "Finance & investment"],
      ["educacion", "Education"],
      ["otro", "Other"],
    ],
    segments: [
      ["general", "General public"],
      ["empresa", "Company or venture"],
      ["gremio_agricola", "Agricultural guild / farmers' association"],
      ["ong", "NGO / foundation"],
      ["gobierno", "Public entity / government"],
    ],
    needs: [
      ["diagnostico", "Feasibility assessment"],
      ["contratos", "Smart contracts"],
      ["trazabilidad", "Traceability / notarisation"],
      ["tokenizacion", "Asset tokenisation"],
      ["iot", "IoT integration"],
      ["formacion", "Team training"],
      ["otro", "Other need"],
    ],
    stages: [
      ["idea", "Idea or exploration"],
      ["piloto", "Pilot in progress"],
      ["operacion", "Live operation"],
      ["noaplica", "Not applicable"],
    ],
    interests: [
      ["proyecto", "I want a project"],
      ["formacion", "I want training"],
      ["ambos", "Both"],
    ],
    required: "This field is required.",
    invalidEmail: "Enter a valid email address.",
    consentRequired: "We need your authorisation to reply.",
    submit: "Prepare request",
    sending: "Preparing...",
    successTitle: "Your request is ready",
    successText:
      "Review the summary, make the reservation if applicable and send your request. Nothing has been sent yet.",
    successSummary: "Request summary",
    recordIdLabel: "Request ID",
    paymentTitle: "Assessment reservation",
    paymentText:
      "To schedule the assessment, make the reservation and send the receipt via WhatsApp or email.",
    paymentAmountLabel: "Reservation amount",
    paymentAmount: "$250,000 COP",
    paymentAliasLabel: "Bre-B key",
    paymentBeneficiaryLabel: "Beneficiary",
    paymentBeneficiary: "Lukas Moyano",
    paymentQrAlt:
      "Bre-B QR code to pay the $250,000 assessment reservation to Lukas Moyano",
    paymentDownload: "Download QR",
    paymentNote:
      "If your bank cannot read the QR, transfer the exact amount to the Bre-B key.",
    paymentCheckbox: "I have made the payment and will attach the receipt.",
    paymentDone: "Payment made, receipt attached",
    paymentPending: "Payment pending",
    paymentSummaryLabel: "Reservation status",
    specialTitle: "Special assessment",
    specialText:
      "Your profile requires a special assessment. Do not make any payment at this stage. Send your request and we will contact you to validate conditions.",
    specialSummaryLabel: "Condition: special assessment, no initial payment",
    copyAlias: "Copy key",
    copied: "Copied",
    sendWhatsappPayment: "Send receipt",
    sendEmailPayment: "Send by email",
    sendWhatsappSpecial: "Send request",
    sendEmailSpecial: "Send by email",
    sendWhatsapp: "Send via WhatsApp",
    sendEmail: "Send via email",
    edit: "Edit request",
    privacy:
      "Your data is used only to answer this request. We do not share information with third parties.",
    summaryTitle: "Assessment request — Sovereign Blockchain",
  },
} as const;

const labelFor = (
  options: readonly (readonly [string, string])[],
  value: string
) => options.find(([optionValue]) => optionValue === value)?.[1] ?? value;

export const DiagnosticForm = ({ language }: DiagnosticFormProps) => {
  const text = copy[language];
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);
  const [copied, setCopied] = useState(false);
  const [recordId] = useState(() => {
    const uuid = globalThis.crypto?.randomUUID?.();
    if (uuid) return uuid;
    return `IR-${Date.now().toString(36).toUpperCase()}-${Math.random()
      .toString(36)
      .slice(2, 8)
      .toUpperCase()}`;
  });

  const requiresPayment =
    form.segment === "general" || form.segment === "empresa";

  const copyAlias = async () => {
    try {
      await navigator.clipboard.writeText(PAYMENT_ALIAS);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
    if (key === "segment") setPaymentDone(false);
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  };

  const summary = useMemo(
    () =>
      [
        text.summaryTitle,
        `${text.recordIdLabel}: ${recordId}`,
        `${text.fields.name}: ${form.name}`,
        form.company ? `${text.fields.company}: ${form.company}` : "",
        `${text.fields.email}: ${form.email}`,
        form.whatsapp ? `${text.fields.whatsapp}: ${form.whatsapp}` : "",
        `${text.fields.segment}: ${labelFor(text.segments, form.segment)}`,
        `${text.fields.sector}: ${labelFor(text.sectors, form.sector)}`,
        `${text.fields.need}: ${labelFor(text.needs, form.need)}`,
        `${text.fields.stage}: ${labelFor(text.stages, form.stage)}`,
        `${text.fields.interest}: ${labelFor(text.interests, form.interest)}`,
        `${text.fields.message}: ${form.message}`,
      ]
        .filter(Boolean)
        .join("\n"),
    [form, recordId, text]
  );

  const finalSummary = useMemo(
    () =>
      `${summary}\n\n${
        requiresPayment
          ? `${text.paymentSummaryLabel}: ${
              paymentDone ? text.paymentDone : text.paymentPending
            }`
          : text.specialSummaryLabel
      }`,
    [summary, requiresPayment, paymentDone, text]
  );

  const whatsappLink = `https://wa.me/573197919742?text=${encodeURIComponent(
    finalSummary
  )}`;
  const emailLink = `mailto:managementandplanning@masterlukasmoyano.com?subject=${encodeURIComponent(
    `${text.summaryTitle} — ${recordId}`
  )}&body=${encodeURIComponent(finalSummary)}`;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (!form.name.trim()) nextErrors.name = text.required;
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = text.invalidEmail;
    if (!form.segment) nextErrors.segment = text.required;
    if (!form.sector) nextErrors.sector = text.required;
    if (!form.need) nextErrors.need = text.required;
    if (!form.stage) nextErrors.stage = text.required;
    if (!form.message.trim()) nextErrors.message = text.required;
    if (!form.consent) nextErrors.consent = text.consentRequired;

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setSubmitted(true);
    window.setTimeout(() => {
      document
        .getElementById("solicitud-lista")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  if (submitted) {
    return (
      <section id="diagnostico-blockchain" className="mb-20 scroll-mt-24">
        <Card
          id="solicitud-lista"
          className="tech-border scroll-mt-24 overflow-hidden border-indigo-500/30 bg-indigo-500/5"
        >
          <CardContent className="p-6 md:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                {text.successTitle}
              </h2>
              <p className="mb-8 text-muted-foreground">{text.successText}</p>

              <div className="mb-6 rounded-xl border border-border bg-background/70 p-5 text-left">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
                  {text.successSummary}
                </p>
                <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-relaxed text-muted-foreground">
                  {finalSummary}
                </pre>
              </div>

              {requiresPayment ? (
                <div className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5 text-left">
                  <div className="flex items-start gap-3">
                    <QrCode className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-400" />
                    <div>
                      <h3 className="font-semibold">{text.paymentTitle}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {text.paymentText}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-5 sm:grid-cols-[320px_1fr] sm:items-center">
                    <img
                      src={QR_SRC}
                      alt={text.paymentQrAlt}
                      width={320}
                      height={320}
                      decoding="async"
                      className="mx-auto w-full max-w-[320px] rounded-lg bg-white p-2"
                    />
                    <div className="space-y-3 text-sm">
                      <p>
                        <span className="text-muted-foreground">
                          {text.paymentAmountLabel}:
                        </span>{" "}
                        <strong>{text.paymentAmount}</strong>
                      </p>
                      <p>
                        <span className="text-muted-foreground">
                          {text.paymentBeneficiaryLabel}:
                        </span>{" "}
                        {text.paymentBeneficiary}
                      </p>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-muted-foreground">
                          {text.paymentAliasLabel}:
                        </span>
                        <code className="rounded bg-background px-2 py-1 font-mono text-sm text-emerald-300">
                          {PAYMENT_ALIAS}
                        </code>
                        <Button
                          type="button"
                          size="sm"
                          variant="outline"
                          onClick={copyAlias}
                        >
                          {copied ? (
                            <Check className="mr-1 h-3 w-3" />
                          ) : (
                            <Copy className="mr-1 h-3 w-3" />
                          )}
                          {copied ? text.copied : text.copyAlias}
                        </Button>
                      </div>
                      <Button asChild size="sm" variant="outline">
                        <a
                          href={QR_SRC}
                          download="qr-bre-b-250k-2026-10.png"
                        >
                          <Download className="mr-1 h-4 w-4" />
                          {text.paymentDownload}
                        </a>
                      </Button>
                      <p className="text-xs text-muted-foreground">
                        {text.paymentNote}
                      </p>
                    </div>
                  </div>

                  <label className="mt-4 flex cursor-pointer items-start gap-3 text-sm">
                    <input
                      type="checkbox"
                      checked={paymentDone}
                      onChange={(event) => setPaymentDone(event.target.checked)}
                      className="mt-1 h-4 w-4 accent-primary"
                    />
                    <span>{text.paymentCheckbox}</span>
                  </label>
                </div>
              ) : (
                <div className="mb-6 rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 text-left">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-1 h-5 w-5 flex-shrink-0 text-amber-400" />
                    <div>
                      <h3 className="font-semibold">{text.specialTitle}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {text.specialText}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="cta-primary">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    {requiresPayment
                      ? text.sendWhatsappPayment
                      : text.sendWhatsappSpecial}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={emailLink}>
                    <Mail className="mr-2 h-5 w-5" />
                    {requiresPayment
                      ? text.sendEmailPayment
                      : text.sendEmailSpecial}
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  onClick={() => setSubmitted(false)}
                >
                  <Pencil className="mr-2 h-4 w-4" />
                  {text.edit}
                </Button>
              </div>

              <p className="mt-6 text-xs text-muted-foreground">{text.privacy}</p>
            </div>
          </CardContent>
        </Card>
      </section>
    );
  }

  return (
    <section id="diagnostico-blockchain" className="mb-20 scroll-mt-24">
      <div className="circuit-pattern rounded-2xl border border-indigo-500/25 bg-indigo-500/5 p-6 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Badge
              variant="outline"
              className="mb-4 border-indigo-500/40 text-indigo-300"
            >
              {text.eyebrow}
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">{text.title}</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              {text.description}
            </p>

            <ul className="mb-8 space-y-3">
              {text.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start text-muted-foreground">
                  <ShieldCheck className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-tech-green" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-xl border border-border bg-background/60 p-5">
              <h3 className="mb-1 font-semibold">{text.directTitle}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{text.directText}</p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button asChild variant="outline" className="justify-start">
                  <a href="https://wa.me/573197919742" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2 h-4 w-4 text-green-400" />
                    {text.whatsapp}
                  </a>
                </Button>
                <Button asChild variant="outline" className="justify-start">
                  <a href="mailto:managementandplanning@masterlukasmoyano.com">
                    <Mail className="mr-2 h-4 w-4 text-primary" />
                    {text.email}
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <Card className="tech-border bg-background/80">
            <CardContent className="p-5 md:p-7">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="bc-name">{text.fields.name} *</Label>
                    <Input
                      id="bc-name"
                      value={form.name}
                      onChange={(event) => update("name", event.target.value)}
                      placeholder={text.placeholders.name}
                      className="mt-2"
                      autoComplete="name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-destructive">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="bc-company">{text.fields.company}</Label>
                    <Input
                      id="bc-company"
                      value={form.company}
                      onChange={(event) => update("company", event.target.value)}
                      placeholder={text.placeholders.company}
                      className="mt-2"
                      autoComplete="organization"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="bc-email">{text.fields.email} *</Label>
                    <Input
                      id="bc-email"
                      type="email"
                      value={form.email}
                      onChange={(event) => update("email", event.target.value)}
                      placeholder={text.placeholders.email}
                      className="mt-2"
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="bc-whatsapp">{text.fields.whatsapp}</Label>
                    <Input
                      id="bc-whatsapp"
                      value={form.whatsapp}
                      onChange={(event) => update("whatsapp", event.target.value)}
                      placeholder={text.placeholders.whatsapp}
                      className="mt-2"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="bc-segment">{text.fields.segment} *</Label>
                    <select
                      id="bc-segment"
                      value={form.segment}
                      onChange={(event) => update("segment", event.target.value)}
                      className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">—</option>
                      {text.segments.map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                    {errors.segment && (
                      <p className="mt-1 text-xs text-destructive">{errors.segment}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="bc-sector">{text.fields.sector} *</Label>
                    <select
                      id="bc-sector"
                      value={form.sector}
                      onChange={(event) => update("sector", event.target.value)}
                      className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">—</option>
                      {text.sectors.map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                    {errors.sector && (
                      <p className="mt-1 text-xs text-destructive">{errors.sector}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="bc-need">{text.fields.need} *</Label>
                    <select
                      id="bc-need"
                      value={form.need}
                      onChange={(event) => update("need", event.target.value)}
                      className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">—</option>
                      {text.needs.map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                    {errors.need && (
                      <p className="mt-1 text-xs text-destructive">{errors.need}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="bc-stage">{text.fields.stage} *</Label>
                    <select
                      id="bc-stage"
                      value={form.stage}
                      onChange={(event) => update("stage", event.target.value)}
                      className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">—</option>
                      {text.stages.map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                    {errors.stage && (
                      <p className="mt-1 text-xs text-destructive">{errors.stage}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label>{text.fields.interest}</Label>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {text.interests.map(([value, label]) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => update("interest", value as Interest)}
                        className={`rounded-lg border px-2 py-2 text-xs font-medium transition-colors ${
                          form.interest === value
                            ? "border-indigo-500/60 bg-indigo-500/20 text-indigo-200"
                            : "border-border bg-background text-muted-foreground hover:text-foreground"
                        }`}
                        aria-pressed={form.interest === value}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="bc-message">{text.fields.message} *</Label>
                  <Textarea
                    id="bc-message"
                    value={form.message}
                    onChange={(event) => update("message", event.target.value)}
                    placeholder={text.placeholders.message}
                    className="mt-2 min-h-[120px]"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                  )}
                </div>

                <label className="flex cursor-pointer items-start gap-3 text-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(event) => update("consent", event.target.checked)}
                    className="mt-1 h-4 w-4 accent-primary"
                  />
                  <span>{text.fields.consent}</span>
                </label>
                {errors.consent && (
                  <p className="-mt-3 text-xs text-destructive">{errors.consent}</p>
                )}

                <Button type="submit" size="lg" className="cta-primary w-full">
                  <Send className="mr-2 h-5 w-5" />
                  {text.submit}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  {text.privacy}
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
