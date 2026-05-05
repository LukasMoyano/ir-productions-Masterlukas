import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Cpu, Database, Zap, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  specs: Record<string, string>;
  description: string;
}

interface Catalog {
  products: Product[];
  last_updated: string | null;
}

const HPCBuilder = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [catalog, setCatalog] = useState<Catalog | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    fetch('/api/hpc/catalog')
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
              ? 'Diseña tu estación de trabajo de alto rendimiento personalizada para IA, ciencia de datos y renderizado pesado.' 
              : 'Design your custom high-performance workstation for AI, data science, and heavy rendering.'}
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Activity className="w-10 h-10 text-primary animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Catalog List */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'es' ? 'Componentes Disponibles' : 'Available Components'}
              </h2>
              
              {catalog?.products && catalog.products.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {catalog.products.map((product) => (
                    <Card key={product.id} className="tech-border bg-card/50">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <Badge variant="outline">{product.category}</Badge>
                          <span className="font-bold text-primary">${product.price.toLocaleString()}</span>
                        </div>
                        <CardTitle className="text-lg mt-2">{product.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                        <div className="space-y-1">
                          {Object.entries(product.specs).map(([key, value]) => (
                            <div key={key} className="flex justify-between text-xs">
                              <span className="text-muted-foreground capitalize">{key}:</span>
                              <span className="font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="p-12 text-center tech-border">
                  <p className="text-muted-foreground">
                    {language === 'es' 
                      ? 'El catálogo en vivo se está actualizando. Por favor contacta con nosotros para una cotización personalizada.' 
                      : 'Live catalog is being updated. Please contact us for a custom quote.'}
                  </p>
                  <Button className="mt-6" onClick={() => document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'})}>
                    {language === 'es' ? 'Contactar Soporte Técnico' : 'Contact Technical Support'}
                  </Button>
                </Card>
              )}
            </div>

            {/* Builder Sidebar (Placeholder) */}
            <div className="space-y-6">
              <Card className="tech-border bg-primary/5 sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="mr-2 w-5 h-5 text-accent" />
                    Resumen de Configuración
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 bg-background/50 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                      {language === 'es' 
                        ? 'Esta herramienta te permitirá ensamblar visualmente tu equipo y ver el rendimiento estimado.' 
                        : 'This tool will allow you to visually assemble your equipment and see the estimated performance.'}
                    </p>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="flex items-center"><Cpu className="w-4 h-4 mr-2" /> CPU</span>
                      <span className="text-muted-foreground italic">No seleccionado</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="flex items-center"><Database className="w-4 h-4 mr-2" /> GPU</span>
                      <span className="text-muted-foreground italic">No seleccionado</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-end mb-6">
                      <span className="text-muted-foreground">Total Estimado</span>
                      <span className="text-2xl font-bold">$0.00</span>
                    </div>
                    <Button className="w-full cta-primary" disabled>
                      {language === 'es' ? 'Próximamente' : 'Coming Soon'}
                    </Button>
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
