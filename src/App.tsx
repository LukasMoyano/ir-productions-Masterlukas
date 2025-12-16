/**
 * @file App.tsx
 * @description Componente raíz de la aplicación.
 * Configura los proveedores de contexto globales y el sistema de enrutamiento.
 *
 * SEO Note: La definición de rutas aquí establece la estructura de URLs del sitio,
 * fundamental para la indexación y la navegación del usuario.
 */

// ============================================================================
// 1. IMPORTACIONES Y DEPENDENCIAS
// ============================================================================

// Componentes de UI (Notificaciones y Feedback)
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

// Proveedores de Contexto (UI)
import { TooltipProvider } from "@/components/ui/tooltip";

// Gestión de Estado y Enrutamiento
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas de la Aplicación (Rutas)
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CultivatechPresentation from "./pages/CultivatechPresentation";
import AgroInnovationWorkshops from "./pages/AgroInnovationWorkshops";

// ============================================================================
// 2. CONFIGURACIÓN DEL CLIENTE DE DATOS
// ============================================================================
const queryClient = new QueryClient();

// ============================================================================
// 3. COMPONENTE PRINCIPAL (APP)
// ============================================================================
const App = () => (
  // Proveedor de React Query para gestión de estado asíncrono
  <QueryClientProvider client={queryClient}>
    {/* Proveedor de Tooltips para componentes de UI */}
    <TooltipProvider>
      {/* Sistemas de Notificación (Toasts) */}
      <Toaster />
      <Sonner />
      
      {/* Enrutador Principal: Gestiona la navegación y las URLs canónicas */}
      <BrowserRouter>
        <Routes>
          {/* Ruta Principal (Home) */}
          <Route path="/" element={<Index />} />
          
          {/* Rutas de Presentaciones y Servicios (Landing Pages) */}
          <Route
            path="/presentacion-cultivatech"
            element={<CultivatechPresentation />}
          />
          <Route
            path="/talleres-agro-innovacion"
            element={<AgroInnovationWorkshops />}
          />
          
          {/* Ruta de Error 404 (Catch-all) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Se exporta el componente "App" para que pueda ser utilizado en otros archivos,
// típicamente en el punto de entrada de la aplicación (como `main.tsx` o `index.tsx`).
export default App;
