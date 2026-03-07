# Product Requirements Document (PRD)
## Nexus HPC: Plataforma de Dropshipping Automatizado de Supercómputo

**Fecha:** 4 de Febrero de 2026
**Objetivo:** Lanzamiento y Facturación en < 4 Semanas.
**Modelo:** Dropshipping de Valor Agregado (VAD) - Totalmente Transaccional.

---

## 1. Resumen Ejecutivo
Construcción de una plataforma de e-commerce integrada en el sitio actual (`ir-productions-nexus`) que permite a usuarios configurar y comprar Workstations de IA y Clusters HPC sin intervención humana. El sistema utiliza agentes de IA en segundo plano para asegurar precios actualizados y márgenes de ganancia, mientras que el frontend ofrece una experiencia de "Ingeniería Visual".

**Meta Financiera:** Percibir ingresos directos a través de pasarela de pagos en la Semana 4.

---

## 2. Arquitectura del Sistema (El "Cómo")

Utilizaremos una arquitectura **Híbrida Desacoplada** para máxima velocidad de desarrollo y seguridad.

### 2.1 Frontend (La Tienda)
*   **Tecnología:** React + Vite + TypeScript + Tailwind/Shadcn (Ya existente).
*   **Responsabilidad:** UI/UX, Lógica de Configuración, Validación Visual, Cierre de Venta.
*   **Estado:** `Zustand` para manejo del carrito y configuración de la PC.

### 2.2 Backend "Shadow" (La Inteligencia)
*   **Tecnología:** Python (Local/Serverless).
*   **Responsabilidad:** Ejecución de los Agentes definidos previamente.
    *   **Agente Scout:** Scrapea precios y stock (Amazon/Newegg).
    *   **Agente Accountant:** Aplica margen (x1.7) y convierte moneda.
    *   **Output:** Genera un archivo maestro `catalog_live.json` que el frontend consume.

---

## 3. Experiencia de Usuario (User Journey) - "Click to Revenue"

### Paso 1: Selección de Arquitectura (Landing HPC)
El usuario elige entre 3 caminos pre-definidos:
1.  **Génesis (Workstation):** AMD Threadripper / Ryzen 9 (Enfoque: Edición, IA Local).
2.  **Hive (Cluster):** ARM / Raspberry Pi / Jetson (Enfoque: Aprendizaje Paralelo, Nodos).
3.  **Titan (Servidor):** AMD EPYC / Dual Socket (Enfoque: Inferencia Pesada, Empresas).

### Paso 2: El "HPC Builder" (Configurador Visual)
No es una lista de productos. Es un diagrama interactivo del sistema.
*   **Visual:** Un "Rack" o "Gabinete" central.
*   **Interacción:** El usuario hace clic en el slot de "GPU". Se abre un panel lateral con opciones compatibles (validadas previamente por los agentes).
*   **Feedback Inmediato:**
    *   **Precio:** Se actualiza al instante.
    *   **Potencia:** Medidor de "Teraflops Estimados" (Gamificación).
    *   **Energía:** Medidor de "Consumo Watts".

### Paso 3: Checkout y Pago
*   Botón: "Procesar Orden de Infraestructura".
*   Pasarela: Integración directa con **Stripe** o **MercadoPago**.
*   Acción: El usuario ingresa tarjeta -> El dinero llega a tu cuenta.
*   Post-Venta Automática: El sistema envía un correo de confirmación y te alerta a ti ("Nueva Orden Pagada: Compra estos componentes").

---

## 4. Requisitos Funcionales y Técnicos

### 4.1 Frontend (React)
*   **Componente `HPCBuilder`:** Debe manejar la lógica de incompatibilidades (ej. Si elige Threadripper, ocultar placas AM5).
*   **Gestión de Precios:** Leer `catalog_live.json`. Si el archivo no carga, mostrar "Mantenimiento" o precios cacheados seguros.
*   **Pasarela:** Integración de SDK de pagos. Webhook para confirmar transacción exitosa.

### 4.2 Automatización de Datos (Python - Reutilización)
*   Reutilizar la lógica de "Scout" y "Architect" discutida anteriormente.
*   **Frecuencia:** Ejecución cada 6 horas para actualizar `catalog_live.json`.
*   **Seguridad:** Las URLs reales de los proveedores (AliExpress/Amazon) quedan ocultas en el servidor, nunca viajan al navegador del cliente.

---

## 5. Cronograma de Ejecución (4 Semanas)

### Semana 1: Estructura y "Look & Feel" (AHORA)
*   [ ] Implementar Rutas en React (`/services/hpc-builder`).
*   [ ] Crear estructura de datos JSON (Mockup) para simular el catálogo.
*   [ ] **Codificar el Componente `HPCBuilder` (Interfaz Visual).**
*   [ ] Integrar componentes UI (Cards, Sliders, Badges) de Shadcn.

### Semana 2: Conexión y Pagos
*   [ ] Programar script básico en Python para llenar el JSON con precios reales (MVP Scraper).
*   [ ] Integrar botón de pago (Stripe/MercadoPago) en modo Test.
*   [ ] Validar flujo completo: Selección -> Carrito -> Pago Simulado.

### Semana 3: Marketing y Pulido
*   [ ] Crear assets gráficos (Renders de las Workstations).
*   [ ] Configurar campañas de ads / SEO orgánico.
*   [ ] Pasar pasarela de pagos a Producción.

### Semana 4: Go Live
*   [ ] Lanzamiento Público.
*   [ ] Recepción de primeros ingresos.
*   [ ] Ejecución manual de órdenes (Dropshipping) con capital del cliente.

---

## 6. Siguientes Pasos Inmediatos
1.  Crear la estructura de carpetas para el módulo HPC.
2.  Definir el archivo `hpc_catalog_mock.json` para empezar a programar la UI hoy mismo.
3.  Escribir el componente `HPCBuilder.tsx`.
