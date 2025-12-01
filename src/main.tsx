// Importa la función `createRoot` de la librería 'react-dom/client'.
// `createRoot` es la API introducida en React 18 para renderizar la aplicación.
// Proporciona un manejo más moderno y concurrente del renderizado.
import { createRoot } from "react-dom/client";

// Importa el componente principal de la aplicación, llamado 'App', desde el archivo './App.tsx'.
// Este componente es el punto de partida de la interfaz de usuario de React.
import App from "./App.tsx";

// Importa el archivo de estilos CSS global.
// Estos estilos se aplicarán a toda la aplicación.
import "./index.css";

// 1. `document.getElementById("root")`: Busca en el archivo HTML (generalmente `index.html`) un elemento con el `id="root"`.
//    Este elemento actúa como el contenedor principal para toda la aplicación de React.
// 2. `!`: Es un operador de aserción no nula de TypeScript. Le dice al compilador que estamos seguros de que `getElementById("root")` no devolverá `null`.
// 3. `createRoot(...)`: Utiliza el elemento del DOM encontrado para crear una "raíz" de renderizado de React.
// 4. `.render(<App />)`: Renderiza el componente `App` (y todos sus componentes hijos) dentro de la raíz de React.
//    Esto inicia la aplicación y la hace visible en el navegador.
createRoot(document.getElementById("root")!).render(<App />);
