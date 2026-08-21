import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Link as LinkIcon, Lock, Layers, Database, ShieldCheck, Cpu, Leaf, Network, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import hpcWorkstationImage from '@/assets/hpc-workstation.jpg';
import iotRobotImage from '@/assets/iot-robot.jpg';

const BlockchainServices = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const navigate = useNavigate();

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const handleContactScroll = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById(language === 'es' ? 'contacto' : 'contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} toggleLanguage={toggleLanguage} />
      
      <main className="container mx-auto px-4 pt-24 pb-20">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')} 
          className="mb-8 group"
        >
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {language === 'es' ? 'Volver al Inicio' : 'Back to Home'}
        </Button>

        {/* Hero Section */}
        <div className="mb-16 text-center">
          <Badge className="mb-4 bg-primary text-primary-foreground">
            DLT & Web3
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text-primary">
            {language === 'es' 
              ? 'Blockchain Soberano' 
              : 'Sovereign Blockchain'}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-light">
            {language === 'es'
              ? 'La capa de confianza entre tus datos y tu infraestructura.'
              : 'The trust layer between your data and your infrastructure.'}
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            {language === 'es'
              ? 'Despliegues en redes propias, sin depender de la nube ni de terceros. Seguridad criptográfica total.'
              : 'Deployments on your own networks, with no cloud or third-party dependency. Total cryptographic security.'}
          </p>
        </div>

        {/* Visión de 3 capas */}
        <section className="mb-20 circuit-pattern p-8 rounded-2xl tech-border bg-card/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <Layers className="mr-3 w-8 h-8 text-primary" />
              {language === 'es' ? 'Arquitectura de 3 Capas Integradas' : 'Integrated 3-Layer Architecture'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-tech-green via-accent to-indigo-500 transform -translate-y-1/2 opacity-30 z-0"></div>
            
            <Card className="tech-border relative z-10 bg-background/90 hover-lift">
              <CardHeader className="text-center">
                <div className="mx-auto bg-tech-green/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="w-8 h-8 text-tech-green" />
                </div>
                <CardTitle>{language === 'es' ? '1. Captura (Agro-IoT)' : '1. Capture (Agro-IoT)'}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                {language === 'es' 
                  ? 'Kits y sensores (CultivaTech) recopilan datos ambientales en tiempo real desde el campo.'
                  : 'Kits and sensors (CultivaTech) collect environmental data in real-time from the field.'}
              </CardContent>
            </Card>

            <Card className="tech-border relative z-10 bg-background/90 hover-lift">
              <CardHeader className="text-center">
                <div className="mx-auto bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Cpu className="w-8 h-8 text-accent" />
                </div>
                <CardTitle>{language === 'es' ? '2. Procesamiento (HPC)' : '2. Processing (HPC)'}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                {language === 'es' 
                  ? 'Workstations locales procesan y cifran la información mediante modelos de IA on-premise.'
                  : 'Local workstations process and encrypt information via on-premise AI models.'}
              </CardContent>
            </Card>

            <Card className="tech-border relative z-10 bg-background/90 hover-lift ring-2 ring-indigo-500/50">
              <CardHeader className="text-center">
                <div className="mx-auto bg-indigo-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <LinkIcon className="w-8 h-8 text-indigo-400" />
                </div>
                <CardTitle>{language === 'es' ? '3. Validación (Blockchain)' : '3. Validation (Blockchain)'}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                {language === 'es' 
                  ? 'Firma, valida y sella los datos de forma inmutable mediante Smart Contracts en tu red soberana.'
                  : 'Signs, validates and seals data immutably via Smart Contracts on your sovereign network.'}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Servicios */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">
            {language === 'es' ? 'Nuestros Servicios Web3' : 'Our Web3 Services'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: LinkIcon,
                title: language === 'es' ? 'Smart Contracts' : 'Smart Contracts',
                desc: language === 'es' ? 'Lógica de negocio automatizada y transparente desplegada en EVM o redes propias.' : 'Automated and transparent business logic deployed on EVM or custom networks.'
              },
              {
                icon: Database,
                title: language === 'es' ? 'Trazabilidad Inmutable' : 'Immutable Traceability',
                desc: language === 'es' ? 'Registro auditable de cadenas de suministro, procesos y datos críticos sin posibilidad de alteración.' : 'Auditable record of supply chains, processes and critical data without possibility of alteration.'
              },
              {
                icon: Activity,
                title: language === 'es' ? 'Tokenización de Activos' : 'Asset Tokenisation',
                desc: language === 'es' ? 'Representación digital de activos físicos (cosechas, energía, hardware) para facilitar su gestión y transferencia.' : 'Digital representation of physical assets (crops, energy, hardware) to facilitate management and transfer.'
              },
              {
                icon: Lock,
                title: language === 'es' ? 'Cifrado Soberano & Identidad' : 'Sovereign Encryption & Identity',
                desc: language === 'es' ? 'Sistemas KYC descentralizados, firmas ECDSA, AES/ChaCha20 y preparación para resistencia postcuántica.' : 'Decentralized KYC systems, ECDSA signatures, AES/ChaCha20 and preparation for post-quantum resistance.'
              }
            ].map((srv, idx) => (
              <Card key={idx} className="tech-border bg-card/50 hover:bg-card transition-colors">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <srv.icon className="w-8 h-8 text-indigo-400 mr-4" />
                  <CardTitle className="text-xl">{srv.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{srv.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Caso Real */}
        <section className="mb-20">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20 flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2">
              <Badge className="mb-4 bg-agro-green text-agro-green-foreground border-none">
                {language === 'es' ? 'Caso de Uso Real' : 'Real Use Case'}
              </Badge>
              <h3 className="text-3xl font-bold mb-4">
                CultivaTech ColombIA
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                {language === 'es' 
                  ? 'Aplicamos blockchain para certificar la calidad de cultivos (como hongos y proyectos de apicultura). Los datos ambientales (temperatura, humedad) capturados por sensores IoT (ESP32) son registrados inmutablemente en Smart Contracts (Solidity) desplegados en redes de prueba locales (Ganache/Remix).'
                  : 'We apply blockchain to certify crop quality (like mushrooms and beekeeping projects). Environmental data (temperature, humidity) captured by IoT sensors (ESP32) are immutably recorded in Smart Contracts (Solidity) deployed on local test networks (Ganache/Remix).'}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-muted-foreground">
                  <ShieldCheck className="w-5 h-5 text-primary mr-2" />
                  {language === 'es' ? 'Auditoría Inmutable de datos ambientales' : 'Immutable Audit of environmental data'}
                </li>
                <li className="flex items-center text-muted-foreground">
                  <ShieldCheck className="w-5 h-5 text-primary mr-2" />
                  {language === 'es' ? 'Integración directa IoT a Blockchain' : 'Direct IoT to Blockchain integration'}
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
               <img src={iotRobotImage} alt="IoT Capture" className="rounded-xl border border-white/10 opacity-80" />
               <img src={hpcWorkstationImage} alt="HPC Processing" className="rounded-xl border border-white/10 opacity-80 mt-8" />
            </div>
          </div>
        </section>

        {/* Verticales y Soberanía */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="tech-border">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Network className="mr-3 w-6 h-6 text-accent" />
                {language === 'es' ? 'Sectores Verticales' : 'Vertical Sectors'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <strong className="text-foreground">Finanzas:</strong> <span className="text-muted-foreground">{language === 'es' ? 'Auditoría transparente y transacciones seguras.' : 'Transparent auditing and secure transactions.'}</span>
                </li>
                <li>
                  <strong className="text-foreground">{language === 'es' ? 'Sector Público:' : 'Public Sector:'}</strong> <span className="text-muted-foreground">{language === 'es' ? 'Gobernanza de datos, compliance y AML.' : 'Data governance, compliance and AML.'}</span>
                </li>
                <li>
                  <strong className="text-foreground">Agro:</strong> <span className="text-muted-foreground">{language === 'es' ? 'Certificación de origen y calidad.' : 'Certification of origin and quality.'}</span>
                </li>
                <li>
                  <strong className="text-foreground">Industria:</strong> <span className="text-muted-foreground">{language === 'es' ? 'Trazabilidad de la cadena de suministro.' : 'Supply chain traceability.'}</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="tech-border bg-violet-500/5 border-violet-500/20">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-violet-400">
                <Lock className="mr-3 w-6 h-6" />
                {language === 'es' ? 'Soberanía Tecnológica' : 'Tech Sovereignty'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {language === 'es'
                  ? 'No dependemos de AWS, Google Cloud o Azure para validar tus transacciones. Desplegamos la infraestructura DLT en tus propios nodos.'
                  : 'We do not depend on AWS, Google Cloud or Azure to validate your transactions. We deploy DLT infrastructure on your own nodes.'}
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                <Badge className="bg-violet-500/20 text-violet-400 border-violet-500/30">{language === 'es' ? 'Sin Nube' : 'No Cloud'}</Badge>
                <Badge className="bg-violet-500/20 text-violet-400 border-violet-500/30">{language === 'es' ? 'Sin Terceros' : 'No Third Parties'}</Badge>
                <Badge className="bg-violet-500/20 text-violet-400 border-violet-500/30">{language === 'es' ? 'Infraestructura Propia' : 'Own Infrastructure'}</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {language === 'es' ? '¿Listo para auditar tus datos con Blockchain?' : 'Ready to audit your data with Blockchain?'}
          </h2>
          <Button 
            size="lg" 
            className="cta-primary h-14 text-lg px-8"
            onClick={handleContactScroll}
          >
            {language === 'es' ? 'Contacta a un Experto' : 'Contact an Expert'}
          </Button>
        </div>

      </main>
    </div>
  );
};

export default BlockchainServices;
