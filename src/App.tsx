// Importaciones de componentes y librerías necesarias.

// Componentes de UI para mostrar notificaciones (toasts).
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner"; // Otro estilo de Toaster, renombrado a "Sonner" para evitar conflictos de nombres.

// Proveedor de contexto para habilitar tooltips (mensajes emergentes) en toda la aplicación.
import { TooltipProvider } from "@/components/ui/tooltip";

// Librerías para la gestión del estado del servidor y el enrutamiento.
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importación de las páginas (componentes que se renderizarán según la ruta).
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CultivatechPresentation from "./pages/CultivatechPresentation";

// Creación de una instancia de QueryClient.
// Este cliente se encargará de gestionar el caché de las consultas a la API.
const queryClient = new QueryClient();

// Definición del componente principal de la aplicación, llamado "App".
// Es un componente funcional de React escrito en sintaxis de flecha.
const App = () => (
  // QueryClientProvider envuelve la aplicación para que todos los componentes hijos
  // puedan acceder al cliente de React Query y sus funcionalidades (fetching, caching, etc.).
  <QueryClientProvider client={queryClient}>
    {/* TooltipProvider envuelve la aplicación para habilitar el uso de tooltips 
        en cualquier parte del árbol de componentes. */}
    <TooltipProvider>
      {/* Componentes para mostrar notificaciones (toasts) en la interfaz. */}
      <Toaster />
      <Sonner />
      {/* BrowserRouter habilita el enrutamiento basado en el historial del navegador (HTML5 History API).
          Permite tener URLs limpias como "mi-sitio.com/pagina" en lugar de "mi-sitio.com/#/pagina". */}
      <BrowserRouter>
        {/* El componente Routes es un contenedor para todas las definiciones de rutas individuales. */}
        <Routes>
          {/* Cada componente Route define una ruta y el componente que se debe renderizar cuando esa ruta coincide. */}
          <Route path="/" element={<Index />} />
          <Route
            path="/presentacion-cultivatech"
            element={<CultivatechPresentation />}
          />
          {/* COMENTARIO PARA DESARROLLADORES: Asegurarse de que las nuevas rutas se añadan antes de la ruta comodín. */}
          {/* La ruta con path="*" es una ruta "comodín" o "catch-all".
              Si ninguna de las rutas anteriores coincide con la URL actual, esta ruta se activará,
              renderizando el componente NotFound (una página de error 404). */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Se exporta el componente "App" para que pueda ser utilizado en otros archivos,
// típicamente en el punto de entrada de la aplicación (como `main.tsx` o `index.tsx`).
export default App;
