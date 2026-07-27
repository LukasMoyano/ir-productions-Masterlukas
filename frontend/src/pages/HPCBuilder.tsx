import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Cpu, Database, Zap, Activity, MemoryStick, Server, MessageCircle } from 'lucide-react';
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

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    // Cambiado de /api/hpc/catalog a /data/hpc_catalog_mock.json (generado estáticamente por los agentes)
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
  };

  const handleSelectPlatform = (plat: Platform) => {
    setSelectedPlatform(plat);
    // Resetear CPU si el socket no es compatible (Lógica básica de 'The Architect')
    if (selectedCpu && !plat.compatible_sockets.includes(selectedCpu.specs.socket as string)) {
      setSelectedCpu(null);
    }
  };

  // Cálculos de The Accountant y The Architect (Frontend side)
  const totalPrice = (selectedPlatform?.base_price || 0) + 
                     (selectedCpu?.price || 0) + 
                     (selectedGpu?.price || 0) + 
                     (selectedRam?.price || 0);

  const totalPower = ((selectedCpu?.specs.tdp as number) || 0) + 
                     ((selectedGpu?.specs.power as number) || 0);

  const totalTeraflops = ((selectedGpu?.specs.teraflops as number) || 0);

  const handleWhatsAppCheckout = () => {
    const message = `Hola IR Productions! Me interesa cotizar este equipo HPC:
    
Plataforma: ${selectedPlatform ? selectedPlatform.name : 'Ninguna'}
CPU: ${selectedCpu ? selectedCpu.name : 'Ninguna'}
GPU: ${selectedGpu ? selectedGpu.name : 'Ninguna'}
RAM: ${selectedRam ? selectedRam.name : 'Ninguna'}

*Total Estimado: $${totalPrice.toLocaleString()}*`;
    
    const whatsappUrl = `https://wa.me/573197919742?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const cpus = catalog?.components.filter(c => c.category === 'CPU') || [];
  const gpus = catalog?.components.filter(c => c.category === 'GPU') || [];
  const rams = catalog?.components.filter(c => c.category === 'RAM') || [];

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

        <div className="mb-12">
          <Badge className="mb-4 bg-primary text-primary-foreground">
            HPC & AI Infrastructure
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text-primary">
            {language === 'es' ? 'Configurador de Workstations HPC' : 'HPC Workstation Builder'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {language === 'es' 
              ? 'Diseña tu estación de trabajo de alto rendimiento conectada a nuestra red de proveedores internacionales en tiempo real.' 
              : 'Design your custom high-performance workstation connected to our international supplier network in real-time.'}
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Activity className="w-10 h-10 text-primary animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            
            {/* Builder Left Column - Component Selection */}
            <div className="xl:col-span-2 space-y-10">
              
              {/* Plataformas */}
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Server className="mr-2 w-6 h-6 text-primary" />
                  {language === 'es' ? '1. Elige tu Plataforma Base' : '1. Choose Base Platform'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {catalog?.platforms.map((plat) => (
                    <Card 
                      key={plat.id} 
                      className={`tech-border cursor-pointer transition-all ${selectedPlatform?.id === plat.id ? 'ring-2 ring-primary bg-primary/10' : 'bg-card/50 hover:bg-card'}`}
                      onClick={() => handleSelectPlatform(plat)}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{plat.name}</CardTitle>
                          <span className="font-bold text-primary">${plat.base_price.toLocaleString()}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{plat.description}</p>
                        <p className="text-xs text-muted-foreground mt-2">Sockets: {plat.compatible_sockets.join(', ')}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* CPUs */}
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Cpu className="mr-2 w-6 h-6 text-primary" />
                  {language === 'es' ? '2. Procesador (CPU)' : '2. Processor (CPU)'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cpus.map((comp) => {
                    const isCompatible = !selectedPlatform || selectedPlatform.compatible_sockets.includes(comp.specs.socket as string);
                    return (
                      <Card 
                        key={comp.id} 
                        className={`tech-border transition-all ${!isCompatible ? 'opacity-50 grayscale cursor-not-allowed' : 'cursor-pointer hover:bg-card'} ${selectedCpu?.id === comp.id ? 'ring-2 ring-primary bg-primary/10' : 'bg-card/50'}`}
                        onClick={() => isCompatible && handleSelectComponent(comp)}
                      >
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-md leading-tight">{comp.name}</CardTitle>
                            <span className="font-bold text-primary ml-2">${comp.price.toLocaleString()}</span>
                          </div>
                          {!isCompatible && <Badge variant="destructive" className="mt-1 w-fit text-[10px]">Incompatible con plataforma</Badge>}
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs">
                            <span className="text-muted-foreground">Cores: <span className="text-foreground">{comp.specs.cores}</span></span>
                            <span className="text-muted-foreground">Socket: <span className="text-foreground">{comp.specs.socket}</span></span>
                            <span className="text-muted-foreground">TDP: <span className="text-foreground">{comp.specs.tdp}W</span></span>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </section>

              {/* GPUs */}
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Database className="mr-2 w-6 h-6 text-primary" />
                  {language === 'es' ? '3. Acelerador Gráfico (GPU)' : '3. Graphic Accelerator (GPU)'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {gpus.map((comp) => (
                    <Card 
                      key={comp.id} 
                      className={`tech-border cursor-pointer transition-all ${selectedGpu?.id === comp.id ? 'ring-2 ring-primary bg-primary/10' : 'bg-card/50 hover:bg-card'}`}
                      onClick={() => handleSelectComponent(comp)}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-md leading-tight">{comp.name}</CardTitle>
                          <span className="font-bold text-primary ml-2">${comp.price.toLocaleString()}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs">
                          <span className="text-muted-foreground">VRAM: <span className="text-foreground">{comp.specs.vram}</span></span>
                          <span className="text-muted-foreground">TFLOPS: <span className="text-foreground">{comp.specs.teraflops}</span></span>
                          <span className="text-muted-foreground">TDP: <span className="text-foreground">{comp.specs.power}W</span></span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* RAMs */}
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <MemoryStick className="mr-2 w-6 h-6 text-primary" />
                  {language === 'es' ? '4. Memoria RAM' : '4. Memory (RAM)'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {rams.map((comp) => (
                    <Card 
                      key={comp.id} 
                      className={`tech-border cursor-pointer transition-all ${selectedRam?.id === comp.id ? 'ring-2 ring-primary bg-primary/10' : 'bg-card/50 hover:bg-card'}`}
                      onClick={() => handleSelectComponent(comp)}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-md leading-tight">{comp.name}</CardTitle>
                          <span className="font-bold text-primary ml-2">${comp.price.toLocaleString()}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs">
                          <span className="text-muted-foreground">Capacidad: <span className="text-foreground">{comp.specs.capacity}</span></span>
                          <span className="text-muted-foreground">Tipo: <span className="text-foreground">{comp.specs.type}</span></span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

            </div>

            {/* Builder Sidebar - Summary & Checkout */}
            <div className="space-y-6">
              <Card className="tech-border bg-primary/5 sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Zap className="mr-2 w-5 h-5 text-accent" />
                    {language === 'es' ? 'Resumen de Workstation' : 'Workstation Summary'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  {/* Selected Components List */}
                  <div className="p-4 bg-background/80 rounded-lg border border-border space-y-4">
                    <div className="flex justify-between items-start text-sm">
                      <span className="flex items-center text-muted-foreground"><Server className="w-4 h-4 mr-2" /> Base:</span>
                      <span className="font-medium text-right max-w-[60%]">{selectedPlatform ? selectedPlatform.name : <span className="text-muted-foreground italic">Vacío</span>}</span>
                    </div>
                    <div className="flex justify-between items-start text-sm">
                      <span className="flex items-center text-muted-foreground"><Cpu className="w-4 h-4 mr-2" /> CPU:</span>
                      <span className="font-medium text-right max-w-[60%]">{selectedCpu ? selectedCpu.name : <span className="text-muted-foreground italic">Vacío</span>}</span>
                    </div>
                    <div className="flex justify-between items-start text-sm">
                      <span className="flex items-center text-muted-foreground"><Database className="w-4 h-4 mr-2" /> GPU:</span>
                      <span className="font-medium text-right max-w-[60%]">{selectedGpu ? selectedGpu.name : <span className="text-muted-foreground italic">Vacío</span>}</span>
                    </div>
                    <div className="flex justify-between items-start text-sm">
                      <span className="flex items-center text-muted-foreground"><MemoryStick className="w-4 h-4 mr-2" /> RAM:</span>
                      <span className="font-medium text-right max-w-[60%]">{selectedRam ? selectedRam.name : <span className="text-muted-foreground italic">Vacío</span>}</span>
                    </div>
                  </div>

                  {/* Performance Metrics (Calculated by the frontend architect agent rules) */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-background/50 border border-border rounded-md text-center">
                      <p className="text-xs text-muted-foreground mb-1">Poder Estimado</p>
                      <p className="text-lg font-bold text-accent">{totalPower > 0 ? `${totalPower}W` : '--'}</p>
                    </div>
                    <div className="p-3 bg-background/50 border border-border rounded-md text-center">
                      <p className="text-xs text-muted-foreground mb-1">Rendimiento IA</p>
                      <p className="text-lg font-bold text-primary">{totalTeraflops > 0 ? `${totalTeraflops} TFLOPS` : '--'}</p>
                    </div>
                  </div>
                  
                  {/* Total & Checkout */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-end mb-6">
                      <span className="text-muted-foreground">Total Inversión</span>
                      <span className="text-3xl font-bold">${totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                    <Button 
                      className="w-full cta-primary flex items-center justify-center py-6 text-lg"
                      onClick={handleWhatsAppCheckout}
                      disabled={totalPrice === 0}
                    >
                      <MessageCircle className="mr-2 w-5 h-5" />
                      {language === 'es' ? 'Cotizar por WhatsApp' : 'Quote via WhatsApp'}
                    </Button>
                    <p className="text-xs text-center text-muted-foreground mt-3">
                      *Precios dinámicos alimentados por agentes IA en tiempo real.
                    </p>
                  </div>
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
