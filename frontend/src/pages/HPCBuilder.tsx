import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowLeft,
  Cpu,
  Database,
  Zap,
  Activity,
  MemoryStick,
  Server,
  MessageCircle,
  Wind,
  HardDrive,
  Power,
  User,
  Briefcase
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';

interface Spec {
  [key: string]: string | number | boolean;
}

interface Component {
  id: string;
  category: string;
  name: string;
  specs: Spec;
  price: number;
  stock: boolean;
  image: string;
}

interface Platform {
  id: string;
  name: string;
  description: string;
  base_price: number;
  compatible_sockets: string[];
}

interface Catalog {
  components: Component[];
  platforms: Platform[];
  last_updated: string | null;
}

const EXCHANGE_RATE_COP = 4100; // Tasa de cambio de referencia para cotizaciones locales

const HPCBuilder = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [catalog, setCatalog] = useState<Catalog | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Builder State
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [selectedCpu, setSelectedCpu] = useState<Component | null>(null);
  const [selectedGpu, setSelectedGpu] = useState<Component | null>(null);
  const [selectedRam, setSelectedRam] = useState<Component | null>(null);
  const [selectedCooling, setSelectedCooling] = useState<Component | null>(null);
  const [selectedStorage, setSelectedStorage] = useState<Component | null>(null);
  const [selectedPsu, setSelectedPsu] = useState<Component | null>(null);

  // Proactive Form State
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    uso: "Inteligencia Artificial Local"
  });

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    fetch('/data/hpc_catalog_mock.json')
      .then(res => res.json())
      .then(data => {
        setCatalog(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading HPC catalog:", err);
        setLoading(false);
      });
  }, []);

  const handleSelectComponent = (comp: Component) => {
    if (comp.category === 'CPU') setSelectedCpu(comp);
    if (comp.category === 'GPU') setSelectedGpu(comp);
    if (comp.category === 'RAM') setSelectedRam(comp);
    if (comp.category === 'COOLING') setSelectedCooling(comp);
    if (comp.category === 'STORAGE') setSelectedStorage(comp);
    if (comp.category === 'PSU') setSelectedPsu(comp);
  };

  const handleSelectPlatform = (plat: Platform) => {
    setSelectedPlatform(plat);
    if (selectedCpu && !plat.compatible_sockets.includes(selectedCpu.specs.socket as string)) {
      setSelectedCpu(null);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatPrice = (usdPrice: number) => {
    if (language === 'es') {
      const copPrice = usdPrice * EXCHANGE_RATE_COP;
      return `$${copPrice.toLocaleString('es-CO')} COP`;
    }
    return `$${usdPrice.toLocaleString('en-US')} USD`;
  };

  const totalPriceUsd = (selectedPlatform?.base_price || 0) + 
                        (selectedCpu?.price || 0) + 
                        (selectedGpu?.price || 0) + 
                        (selectedRam?.price || 0) +
                        (selectedCooling?.price || 0) +
                        (selectedStorage?.price || 0) +
                        (selectedPsu?.price || 0);

  const totalPower = ((selectedCpu?.specs.tdp as number) || 0) + 
                     ((selectedGpu?.specs.power as number) || 0) + 
                     100; // Overhead placa base, discos, ventiladores

  const totalTeraflops = ((selectedGpu?.specs.teraflops as number) || 0);

  const psuWarning = selectedPsu && (selectedPsu.specs.wattage as number) < totalPower;

  const handleWhatsAppCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    const precioFinal = formatPrice(totalPriceUsd);
    
    const message = `*SOLICITUD ENSAMBLE HPC SOBERANO*\n\n` +
      `*👤 Cliente:* ${formData.nombre}\n` +
      `*🏢 Proyecto/Empresa:* ${formData.empresa}\n` +
      `*🎯 Uso Previsto:* ${formData.uso}\n\n` +
      `*💻 CONFIGURACIÓN SOLICITADA (AMD):*\n` +
      `• Base: ${selectedPlatform ? selectedPlatform.name : 'Ninguna'}\n` +
      `• CPU: ${selectedCpu ? selectedCpu.name : 'Ninguna'}\n` +
      `• GPU: ${selectedGpu ? selectedGpu.name : 'Ninguna'}\n` +
      `• RAM: ${selectedRam ? selectedRam.name : 'Ninguna'}\n` +
      `• Ref: ${selectedCooling ? selectedCooling.name : 'Ninguna'}\n` +
      `• Alm: ${selectedStorage ? selectedStorage.name : 'Ninguna'}\n` +
      `• PSU: ${selectedPsu ? selectedPsu.name : 'Ninguna'}\n\n` +
      `*⚡ Consumo Máx:* ${totalPower}W\n` +
      `*💰 Total Estimado:* ${precioFinal}`;
    
    const whatsappUrl = `https://wa.me/573197919742?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const cpus = catalog?.components.filter(c => c.category === 'CPU') || [];
  const gpus = catalog?.components.filter(c => c.category === 'GPU') || [];
  const rams = catalog?.components.filter(c => c.category === 'RAM') || [];
  const coolings = catalog?.components.filter(c => c.category === 'COOLING') || [];
  const storages = catalog?.components.filter(c => c.category === 'STORAGE') || [];
  const psus = catalog?.components.filter(c => c.category === 'PSU') || [];

  return (
    <div className="min-h-screen bg-background circuit-pattern relative selection:bg-primary/50 text-white">
      <Header language={language} toggleLanguage={toggleLanguage} />
      
      <main className="container-ir pt-24 pb-20 relative z-10">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')} 
          className="mb-8 group font-mono uppercase tracking-widest text-xs"
        >
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {language === 'es' ? '< Volver_Al_HUB' : '< Back_To_HUB'}
        </Button>

        <div className="mb-12 text-center md:text-left">
          <Badge className="mb-4 bg-primary/20 text-primary border border-primary/50 text-xs font-mono tracking-[0.3em] py-2 px-6 shadow-[0_0_15px_rgba(255,122,0,0.4)]">
             <Server className="w-4 h-4 mr-2 inline animate-pulse" />
             AI / HPC Infrastructure
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-tech-green drop-shadow-[0_0_15px_rgba(255,122,0,0.5)]">
            {language === 'es' ? 'Protocolo de Ensamble AMD' : 'AMD Assembly Protocol'}
          </h1>
          <p className="text-xl text-muted-foreground font-mono max-w-3xl">
            {language === 'es' 
              ? 'Arquitectura computacional soberana. Sistema configurado exclusivamente con componentes AMD RADEON / RYZEN para inferencia local extrema y escalabilidad.' 
              : 'Sovereign computing architecture. Exclusively configured with AMD RADEON / RYZEN hardware for extreme local inference and scalability.'}
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-32">
            <Activity className="w-16 h-16 text-primary animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
            
            {/* Builder Left Column - Component Selection */}
            <div className="xl:col-span-2 space-y-12 font-mono">
              
              {/* Plataformas */}
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center text-primary uppercase tracking-widest">
                  <Server className="mr-3 w-6 h-6" />
                  {language === 'es' ? 'SYS.01 &gt; Chasis & Placa Base' : 'SYS.01 &gt; Chassis & Motherboard'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {catalog?.platforms.map((plat) => (
                    <Card 
                      key={plat.id} 
                      className={`tech-border cursor-pointer transition-all duration-300 ${selectedPlatform?.id === plat.id ? 'ring-2 ring-primary bg-primary/10 shadow-[0_0_30px_rgba(255,122,0,0.2)]' : 'bg-black/60 hover:bg-black/80 backdrop-blur-md border-white/10'}`}
                      onClick={() => handleSelectPlatform(plat)}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg font-black uppercase text-white">{plat.name}</CardTitle>
                          <span className="font-bold text-primary">{formatPrice(plat.base_price)}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">{plat.description}</p>
                        <p className="text-xs text-primary/70 border border-primary/20 bg-primary/5 p-1 rounded inline-block">SOCKET: {plat.compatible_sockets.join(', ')}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* CPUs */}
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center text-accent uppercase tracking-widest">
                  <Cpu className="mr-3 w-6 h-6" />
                  {language === 'es' ? 'SYS.02 &gt; Unidad de Proceso (CPU)' : 'SYS.02 &gt; Processing Unit (CPU)'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cpus.map((comp) => {
                    const isCompatible = !selectedPlatform || selectedPlatform.compatible_sockets.includes(comp.specs.socket as string);
                    return (
                      <Card 
                        key={comp.id} 
                        className={`tech-border transition-all duration-300 ${!isCompatible ? 'opacity-40 grayscale cursor-not-allowed border-red-500/30' : 'cursor-pointer hover:bg-black/80'} ${selectedCpu?.id === comp.id ? 'ring-2 ring-accent bg-accent/10 shadow-[0_0_30px_rgba(var(--accent),0.2)]' : 'bg-black/60 backdrop-blur-md border-white/10'}`}
                        onClick={() => isCompatible && handleSelectComponent(comp)}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-md font-bold text-white leading-tight">{comp.name}</CardTitle>
                            <span className="font-bold text-accent ml-2 whitespace-nowrap">{formatPrice(comp.price)}</span>
                          </div>
                          {!isCompatible && <Badge className="mt-2 bg-red-900 text-red-100 uppercase text-[10px]">Incompatible</Badge>}
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="bg-white/5 p-2 rounded border border-white/5"><span className="text-muted-foreground block">Cores</span><span className="text-accent font-bold">{comp.specs.cores}</span></div>
                            <div className="bg-white/5 p-2 rounded border border-white/5"><span className="text-muted-foreground block">Socket</span><span className="text-white">{comp.specs.socket}</span></div>
                            <div className="bg-white/5 p-2 rounded border border-white/5 col-span-2"><span className="text-muted-foreground block">Consumo (TDP)</span><span className="text-red-400 font-bold">{comp.specs.tdp}W</span></div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </section>

              {/* GPUs */}
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center text-tech-green uppercase tracking-widest">
                  <Database className="mr-3 w-6 h-6" />
                  {language === 'es' ? 'SYS.03 &gt; Acelerador IA (GPU)' : 'SYS.03 &gt; AI Accelerator (GPU)'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {gpus.map((comp) => (
                    <Card 
                      key={comp.id} 
                      className={`tech-border cursor-pointer transition-all duration-300 ${selectedGpu?.id === comp.id ? 'ring-2 ring-tech-green bg-tech-green/10 shadow-[0_0_30px_rgba(var(--tech-green),0.2)]' : 'bg-black/60 hover:bg-black/80 backdrop-blur-md border-white/10'}`}
                      onClick={() => handleSelectComponent(comp)}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-md font-bold text-white leading-tight">{comp.name}</CardTitle>
                          <span className="font-bold text-tech-green ml-2 whitespace-nowrap">{formatPrice(comp.price)}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="bg-white/5 p-2 rounded border border-white/5"><span className="text-muted-foreground block">VRAM</span><span className="text-tech-green font-bold">{comp.specs.vram}</span></div>
                          <div className="bg-white/5 p-2 rounded border border-white/5"><span className="text-muted-foreground block">TFLOPS</span><span className="text-white font-bold">{comp.specs.teraflops}</span></div>
                          <div className="bg-white/5 p-2 rounded border border-white/5 col-span-2"><span className="text-muted-foreground block">Pico (TDP)</span><span className="text-red-400 font-bold">{comp.specs.power}W</span></div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* RAM & Cooling (2 cols layout) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* RAM */}
                  <section>
                    <h2 className="text-xl font-bold mb-4 flex items-center text-primary uppercase tracking-widest">
                      <MemoryStick className="mr-3 w-5 h-5" />
                      SYS.04 &gt; RAM
                    </h2>
                    <div className="space-y-4">
                      {rams.map((comp) => (
                        <Card 
                          key={comp.id} 
                          className={`tech-border cursor-pointer transition-all ${selectedRam?.id === comp.id ? 'ring-1 ring-primary bg-primary/10' : 'bg-black/60 hover:bg-black/80 border-white/10'}`}
                          onClick={() => handleSelectComponent(comp)}
                        >
                          <CardHeader className="p-4 pb-2">
                            <div className="flex justify-between items-center">
                              <CardTitle className="text-sm font-bold text-white">{comp.name}</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent className="p-4 pt-0 flex justify-between items-end">
                            <span className="text-xs text-muted-foreground bg-white/5 px-2 py-1 rounded">{comp.specs.type}</span>
                            <span className="font-bold text-primary text-sm">{formatPrice(comp.price)}</span>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>
                  
                  {/* COOLING */}
                  <section>
                    <h2 className="text-xl font-bold mb-4 flex items-center text-cyan-400 uppercase tracking-widest">
                      <Wind className="mr-3 w-5 h-5" />
                      SYS.05 &gt; Thermal
                    </h2>
                    <div className="space-y-4">
                      {coolings.map((comp) => (
                        <Card 
                          key={comp.id} 
                          className={`tech-border cursor-pointer transition-all ${selectedCooling?.id === comp.id ? 'ring-1 ring-cyan-400 bg-cyan-400/10' : 'bg-black/60 hover:bg-black/80 border-white/10'}`}
                          onClick={() => handleSelectComponent(comp)}
                        >
                          <CardHeader className="p-4 pb-2">
                            <div className="flex justify-between items-center">
                              <CardTitle className="text-sm font-bold text-white">{comp.name}</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent className="p-4 pt-0 flex justify-between items-end">
                            <span className="text-xs text-muted-foreground bg-white/5 px-2 py-1 rounded">{comp.specs.type} ({comp.specs.size})</span>
                            <span className="font-bold text-cyan-400 text-sm">{formatPrice(comp.price)}</span>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>
              </div>

              {/* STORAGE & PSU (2 cols layout) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* STORAGE */}
                  <section>
                    <h2 className="text-xl font-bold mb-4 flex items-center text-purple-400 uppercase tracking-widest">
                      <HardDrive className="mr-3 w-5 h-5" />
                      SYS.06 &gt; Storage
                    </h2>
                    <div className="space-y-4">
                      {storages.map((comp) => (
                        <Card 
                          key={comp.id} 
                          className={`tech-border cursor-pointer transition-all ${selectedStorage?.id === comp.id ? 'ring-1 ring-purple-400 bg-purple-400/10' : 'bg-black/60 hover:bg-black/80 border-white/10'}`}
                          onClick={() => handleSelectComponent(comp)}
                        >
                          <CardHeader className="p-4 pb-2">
                            <div className="flex justify-between items-center">
                              <CardTitle className="text-sm font-bold text-white">{comp.name}</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent className="p-4 pt-0 flex justify-between items-end">
                            <span className="text-xs text-muted-foreground bg-white/5 px-2 py-1 rounded">{comp.specs.type}</span>
                            <span className="font-bold text-purple-400 text-sm">{formatPrice(comp.price)}</span>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>

                  {/* PSU */}
                  <section>
                    <h2 className="text-xl font-bold mb-4 flex items-center text-yellow-500 uppercase tracking-widest">
                      <Power className="mr-3 w-5 h-5" />
                      SYS.07 &gt; Power (PSU)
                    </h2>
                    <div className="space-y-4">
                      {psus.map((comp) => {
                          const isWarning = (comp.specs.wattage as number) < totalPower;
                          return (
                            <Card 
                            key={comp.id} 
                            className={`tech-border cursor-pointer transition-all ${selectedPsu?.id === comp.id ? 'ring-1 ring-yellow-500 bg-yellow-500/10' : 'bg-black/60 hover:bg-black/80 border-white/10'}`}
                            onClick={() => handleSelectComponent(comp)}
                            >
                            <CardHeader className="p-4 pb-2">
                                <div className="flex justify-between items-center">
                                <CardTitle className="text-sm font-bold text-white flex items-center">
                                    {comp.name} 
                                    {isWarning && <span className="ml-2 w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>}
                                </CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-4 pt-0 flex justify-between items-end">
                                <span className="text-xs text-muted-foreground bg-white/5 px-2 py-1 rounded">{comp.specs.wattage}W {comp.specs.cert}</span>
                                <span className="font-bold text-yellow-500 text-sm">{formatPrice(comp.price)}</span>
                            </CardContent>
                            </Card>
                          )
                      })}
                    </div>
                  </section>
              </div>

            </div>

            {/* Builder Sidebar - Summary & Checkout Funnel */}
            <div className="space-y-6">
              <Card className="tech-border bg-black/90 backdrop-blur-xl sticky top-24 border-tech-green/40 shadow-[0_0_40px_rgba(var(--tech-green),0.1)]">
                <div className="absolute top-0 right-0 w-2 h-full bg-tech-green shadow-[0_0_15px_rgba(var(--tech-green),1)]"></div>
                <CardHeader className="border-b border-white/10 pb-4">
                  <CardTitle className="flex items-center text-xl font-mono uppercase tracking-widest text-tech-green">
                    <Activity className="mr-3 w-5 h-5 animate-pulse" />
                    {language === 'es' ? 'Terminal de Compilación' : 'Compilation Terminal'}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6 pt-6 font-mono">
                  
                  {/* Selected Components List */}
                  <div className="p-4 bg-black/50 rounded-lg border border-white/10 space-y-3">
                    <div className="flex justify-between items-start text-xs border-b border-white/5 pb-2">
                      <span className="text-muted-foreground">SYS.01</span>
                      <span className="font-medium text-right text-primary truncate ml-4">{selectedPlatform ? selectedPlatform.name : '---'}</span>
                    </div>
                    <div className="flex justify-between items-start text-xs border-b border-white/5 pb-2">
                      <span className="text-muted-foreground">SYS.02</span>
                      <span className="font-medium text-right text-accent truncate ml-4">{selectedCpu ? selectedCpu.name : '---'}</span>
                    </div>
                    <div className="flex justify-between items-start text-xs border-b border-white/5 pb-2">
                      <span className="text-muted-foreground">SYS.03</span>
                      <span className="font-medium text-right text-tech-green truncate ml-4">{selectedGpu ? selectedGpu.name : '---'}</span>
                    </div>
                    <div className="flex justify-between items-start text-xs border-b border-white/5 pb-2">
                      <span className="text-muted-foreground">SYS.04</span>
                      <span className="font-medium text-right text-primary truncate ml-4">{selectedRam ? selectedRam.name : '---'}</span>
                    </div>
                    <div className="flex justify-between items-start text-xs border-b border-white/5 pb-2">
                      <span className="text-muted-foreground">SYS.05</span>
                      <span className="font-medium text-right text-cyan-400 truncate ml-4">{selectedCooling ? selectedCooling.name : '---'}</span>
                    </div>
                    <div className="flex justify-between items-start text-xs border-b border-white/5 pb-2">
                      <span className="text-muted-foreground">SYS.06</span>
                      <span className="font-medium text-right text-purple-400 truncate ml-4">{selectedStorage ? selectedStorage.name : '---'}</span>
                    </div>
                    <div className="flex justify-between items-start text-xs">
                      <span className="text-muted-foreground">SYS.07</span>
                      <span className="font-medium text-right text-yellow-500 truncate ml-4">{selectedPsu ? selectedPsu.name : '---'}</span>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`p-3 bg-black/50 border rounded-md text-center ${psuWarning ? 'border-red-500 shadow-[0_0_10px_rgba(255,0,0,0.3)]' : 'border-white/10'}`}>
                      <p className="text-[10px] text-muted-foreground uppercase mb-1">Consumo Max.</p>
                      <p className={`text-sm font-bold ${psuWarning ? 'text-red-500' : 'text-accent'}`}>{totalPower > 100 ? `${totalPower}W` : '---'}</p>
                      {psuWarning && <p className="text-[9px] text-red-500 mt-1 uppercase">¡PSU INSUFICIENTE!</p>}
                    </div>
                    <div className="p-3 bg-black/50 border border-white/10 rounded-md text-center">
                      <p className="text-[10px] text-muted-foreground uppercase mb-1">Poder IA Bruto</p>
                      <p className="text-sm font-bold text-tech-green">{totalTeraflops > 0 ? `${totalTeraflops} TFLOPs` : '---'}</p>
                    </div>
                  </div>

                  {/* Pipeline Form (Embudo Proactivo) */}
                  <form onSubmit={handleWhatsAppCheckout} className="space-y-4 pt-4 border-t border-white/10">
                    <h3 className="text-xs uppercase text-primary font-bold mb-2 tracking-widest"> &gt; Identificación de Cliente</h3>
                    
                    <div className="space-y-2">
                        <div className="flex bg-black/50 border border-white/20 rounded-md overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                            <span className="flex items-center px-3 bg-white/5 border-r border-white/10 text-muted-foreground"><User className="w-4 h-4" /></span>
                            <input type="text" name="nombre" required value={formData.nombre} onChange={handleInputChange} placeholder="Nombre / Razón Social" className="w-full bg-transparent p-2 text-xs text-white outline-none placeholder:text-white/30" />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <div className="flex bg-black/50 border border-white/20 rounded-md overflow-hidden focus-within:border-accent focus-within:ring-1 focus-within:ring-accent transition-all">
                            <span className="flex items-center px-3 bg-white/5 border-r border-white/10 text-muted-foreground"><Briefcase className="w-4 h-4" /></span>
                            <input type="text" name="empresa" required value={formData.empresa} onChange={handleInputChange} placeholder="Empresa o Proyecto" className="w-full bg-transparent p-2 text-xs text-white outline-none placeholder:text-white/30" />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <select name="uso" value={formData.uso} onChange={handleInputChange} className="w-full bg-black/50 border border-white/20 rounded-md p-2 text-xs text-white outline-none focus:border-tech-green focus:ring-1 focus:ring-tech-green [&>option]:bg-background">
                            <option value="Inteligencia Artificial Local">Inteligencia Artificial Local (LLMs)</option>
                            <option value="Renderizado 3D y VFX">Renderizado 3D y VFX</option>
                            <option value="Procesamiento de Datos (Big Data)">Procesamiento de Datos (Big Data)</option>
                            <option value="Servidor Web / Host Local">Servidor Web / Host Local</option>
                        </select>
                    </div>

                    <div className="pt-4 mt-6 border-t border-white/10">
                        <div className="flex flex-col items-center mb-6">
                        <span className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Total Inversión (Est.)</span>
                        <span className="text-3xl font-black text-white">{formatPrice(totalPriceUsd)}</span>
                        {language === 'es' && <span className="text-[10px] text-muted-foreground mt-2 text-center">*Tasado referencial (USD base). La transacción final se liquida según la TRM del día.</span>}
                        {language === 'en' && <span className="text-[10px] text-muted-foreground mt-2 text-center">*Base USD pricing. International shipping and taxes apply based on destination.</span>}
                        </div>
                        
                        <button 
                            type="submit" 
                            disabled={totalPriceUsd === 0 || psuWarning}
                            className="w-full group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-tech-green px-6 font-mono font-bold text-black uppercase tracking-widest transition-all hover:bg-tech-green/90 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-10"></span>
                        <span className="relative flex items-center text-xs">
                            {language === 'es' ? 'Solicitar Ensamble' : 'Request Assembly'}
                            <MessageCircle className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                        </span>
                        </button>
                    </div>
                  </form>

                </CardContent>
              </Card>
            </div>

          </div>
        )}
      </main>
    </div>
  );
};

export default HPCBuilder;
