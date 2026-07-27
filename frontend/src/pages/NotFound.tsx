import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguage] = useState<"es" | "en">("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const content = {
    es: {
      title: "404",
      subtitle: "Página no encontrada",
      description: "La ruta que buscas no existe o ha sido movida.",
      cta: "Volver al Inicio",
    },
    en: {
      title: "404",
      subtitle: "Page not found",
      description: "The route you are looking for does not exist or has been moved.",
      cta: "Return to Home",
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header language={language} toggleLanguage={toggleLanguage} />

      <main className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="text-center space-y-8 px-4">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <h1 className="relative text-8xl md:text-[12rem] font-black gradient-text-primary leading-none">
              {t.title}
            </h1>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground">
              {t.subtitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              {t.description}
            </p>
            <p className="text-sm text-muted-foreground/60 font-mono bg-muted/30 inline-block px-4 py-2 rounded-lg">
              {location.pathname}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="glow-red group"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              {t.cta}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
