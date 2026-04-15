# Guía de Implementación: Módulo de Dropshipping HPC & Agentes de IA

Este documento detalla la arquitectura, estructura de archivos y pasos necesarios para implementar el sistema de **Dropshipping de Valor Agregado (VAD)** para Workstations de Alto Rendimiento (HPC) dentro del proyecto actual.

---

## 1. Arquitectura del Sistema

El sistema funcionará con una arquitectura **Híbrida Desacoplada**:

1.  **Frontend (Existente):** React + Vite + Shadcn/UI. Se encarga de la visualización, el configurador "Drag & Drop" de clusters y la experiencia de usuario.
2.  **Backend & Agentes (Nuevo - Python):** Un subsistema en Python que corre de manera independiente (localmente o en un servidor de control).
    *   **Función:** Ejecuta los agentes de IA (Scraping, Precios, Compatibilidad).
    *   **Salida:** Genera una Base de Datos de Productos (`products_db.json` o SQLite) que el Frontend consume.
3.  **Sincronización (LFTP/FTP):** Dado que el despliegue es vía FTP, los agentes generarán archivos estáticos de datos (JSON) que se subirán al servidor junto con el frontend, o se consultarán vía API si se dispone de un VPS. **Asumiremos el modelo de generación estática para máxima compatibilidad con hosting FTP.**

---

## 2. Nueva Estructura de Directorios

No mezclaremos el código de Python con el de React dentro de `src`. Crearemos una carpeta dedicada en la raíz.

```text
/ir-productions-nexus-main
├── backend_agents/          <-- NUEVO: Aquí vive la inteligencia en Python
│   ├── venv/                (Entorno virtual de Python)
│   ├── data/                (Donde se guarda la DB local)
│   │   └── hpc_products.db  (SQLite para gestión interna)
│   ├── agents/
│   │   ├── __init__.py
│   │   ├── scout_agent.py   (Scraper: Amazon/MercadoLibre/Newegg)
│   │   ├── architect_agent.py (Validación de compatibilidad TDP/Socket)
│   │   └── accountant_agent.py (Cálculo de precios + Margen)
│   ├── main_controller.py   (Orquestador que ejecuta los agentes)
│   └── exporter.py          (Genera el JSON final para el frontend)
├── public/
│   └── data/                <-- NUEVO: Aquí el frontend lee los productos
│       └── hpc_catalog.json (Generado por los agentes)
├── src/
│   ├── components/
│   │   └── hpc-builder/     <-- NUEVO: Componentes React del Configurador
│   │       ├── ClusterBuilder.tsx
│   │       ├── ComponentCard.tsx
│   │       └── PerformanceMeter.tsx
└── ...
```

---

## 3. Detalle de los Agentes (Python)

Estos scripts se ejecutarán periódicamente (ej. cada 6 horas) para actualizar precios y stock.

### A. Agente "The Scout" (Scraper)
*   **Tecnología:** Python + Playwright (navegador real para evitar bloqueos) o BeautifulSoup.
*   **Misión:** Recorrer una lista de URLs de proveedores definidos.
*   **Datos a extraer:** Nombre, Precio Actual, Stock (Sí/No), URL de imagen.
*   **Anti-bloqueo:** Rotación de User-Agents y tiempos de espera aleatorios.

### B. Agente "The Architect" (Compatibilidad)
*   **Tecnología:** Python (Lógica Pura).
*   **Misión:** Validar que los componentes extraídos funcionan juntos.
*   **Reglas:**
    *   Si CPU es Threadripper 7000 -> Motherboard debe ser Socket sTR5.
    *   Si RAM es DDR5 -> No compatible con placas DDR4.
    *   Calcula el consumo total de Watts para sugerir la Fuente de Poder (PSU).

### C. Agente "The Accountant" (Precios)
*   **Misión:** Aplicar la fórmula de negocio.
*   **Fórmula:** `(Costo Proveedor + Envío Estimado) * 1.7 (Margen)` = Precio Final.
*   **Salida:** Escribe los datos finales en `public/data/hpc_catalog.json`.

---

## 4. El Configurador HPC (Frontend - React)

En la sección de servicios, implementaremos el **Constructor de Clusters**.

*   **Interfaz:**
    *   Columna Izquierda: Selección de componentes (filtrados por el JSON generado).
    *   Centro: Visualización del Rack/Workstation (Imagen dinámica).
    *   Columna Derecha: Métricas en tiempo real (Precio, Teraflops estimados, Consumo Watts).
*   **Lógica de Negocio en Frontend:**
    *   Leer `hpc_catalog.json`.
    *   Permitir añadir "Nodos" (ej. 4x Raspberry Pi o 1x Threadripper).
    *   Botón "Solicitar Cotización / Comprar": Envia un pedido a tu WhatsApp o Email con los IDs de los productos.

---

## 5. Base de Datos y Comunicación

### Almacenamiento
1.  **Desarrollo/Interno:** SQLite (`backend_agents/data/hpc_products.db`). Aquí guardamos todo, incluido historial de precios.
2.  **Producción/Frontend:** JSON (`public/data/hpc_catalog.json`). Una versión ligera y "saneada" (sin links de proveedores) que lee la web.

### Flujo de Datos
1.  Ejecutas `python main_controller.py` en tu máquina local.
2.  Los agentes escrapean -> validan -> calculan precios.
3.  El script actualiza `public/data/hpc_catalog.json`.
4.  Ejecutas `npm run build`.
5.  El sistema de despliegue (FTP/LFTP) sube el nuevo JSON y la web actualizada al servidor.

---

## 6. Plan de Implementación (Paso a Paso)

### Fase 1: Preparación del Entorno (Inmediato)
1.  Crear directorio `backend_agents` y entorno virtual Python.
2.  Instalar dependencias: `playwright`, `pandas`, `requests`.
3.  Crear archivo dummy `public/data/hpc_catalog.json` para probar el frontend mientras se hacen los agentes.

### Fase 2: Desarrollo del Frontend (Visual)
1.  Crear componente `HPCBuilder` en React.
2.  Diseñar las tarjetas de componentes con Shadcn/UI.
3.  Implementar la lógica de suma de precios y validación visual.

### Fase 3: Desarrollo de Agentes (Lógica)
1.  Programar el `scout_agent.py` para leer 1 producto de prueba (ej. Amazon).
2.  Programar el `accountant_agent.py` para transformar el precio.
3.  Conectar la salida al archivo JSON.

### Fase 4: Integración y Dropshipping
1.  Enlazar el botón de compra con WhatsApp API.
2.  El mensaje de WhatsApp debe decir: *"Nuevo Pedido: Cluster A1. Componentes IDs: [CPU-001, RAM-055]. Precio Venta: $$$"*.
3.  Tú recibes el mensaje, verificas el pago, y el Agente te da el Link del Proveedor para que compres (Manual o Semi-automático).

---

## 7. Instrucciones para el Despliegue FTP

En tu script actual de despliegue o flujo de trabajo, deberás asegurarte de que, antes de subir, los agentes hayan corrido para tener precios frescos.

**Comando sugerido:**
`python backend_agents/main_controller.py && npm run build && node deploy.js`

Esto asegura que cada vez que subes la web, los precios van actualizados.
