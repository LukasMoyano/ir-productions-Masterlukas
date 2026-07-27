# IR Productions - Resumen del Proyecto

**Fecha:** Febrero 2026  
**Estado:** ✅ En Producción (Flask)  
**Ubicación:** `/mnt/Proyectos4TB/backup_masterlukas/Documents/_-IR_Productions_2025/WwW_EndesarrolloWEB/ir-productions-nexus-main`

---

## 🎯 VISIÓN GENERAL

IR Productions es la plataforma web oficial de **IR Productions**, empresa dedicada a fusionar **Arte 🎨, Ciencia 🔬 y Tecnología 💻** para crear soluciones digitales integrales con enfoque en:

- Desarrollo rural y agrícola
- Democratización tecnológica
- Economía circular y e-waste
- Educación STEAM
- Innovación abierta (Open Source)

---

## 🏗️ ARQUITECTURA ACTUAL

### **Backend: Flask (Python)**
```
✅ Framework: Flask 3.0.0
✅ Servidor: Werkzeug (desarrollo) / Gunicorn (producción)
✅ Idiomas: Español / Inglés (sistema de traducciones JSON)
✅ Templates: Jinja2 (HTML + Tailwind CSS)
```

### **Frontend: HTML + Tailwind CSS**
```
✅ Diseño: Tailwind CSS 3.4 (standalone)
✅ Componentes: Estilo Shadcn/UI
✅ Animaciones: CSS custom + Tailwind
✅ Responsive: Mobile-first
```

### **Estructura del Proyecto**
```
ir-productions-nexus-main/
├── app.py                          # Aplicación Flask principal
├── requirements.txt                # Dependencias Python
├── templates/
│   ├── base.html                  # Layout base
│   ├── index.html                 # Página de inicio
│   ├── cultivatech_presentation.html  # Presentación CultivaTech
│   ├── agro_workshops.html        # Talleres Agro-Innovación
│   ├── 404.html                   # Error 404
│   └── 500.html                   # Error 500
├── static/
│   ├── css/
│   │   ├── input.css              # Tailwind source
│   │   └── styles.css             # Tailwind compilado
│   ├── js/
│   │   └── app.js                 # JavaScript global
│   ├── assets/                    # Imágenes y recursos
│   │   ├── hero-background.jpg
│   │   ├── agro-tech-farmers.jpg
│   │   ├── iot-robot.jpg
│   │   ├── hpc-workstation.jpg
│   │   ├── ProfilePic2025_*.png
│   │   ├── ODSs/                  # Imágenes ODS
│   │   └── e-waste-assets/        # Imágenes E-Waste
│   └── translations/
│       ├── es.json                # Traducciones Español
│       └── en.json                # Traducciones Inglés
└── backend_agents/                # (Pendiente - Ver más abajo)
```

---

## 📄 PÁGINAS IMPLEMENTADAS

### **1. Página de Inicio (`/`)**
**Secciones:**
- ✅ Hero Section (H1 principal + CTAs)
- ✅ Filosofía (Arte + Ciencia + Tecnología)
- ✅ Quiénes Somos (Perfil Lukas Moyano + Bio + Expertiza)
- ✅ Servicios (4 tarjetas: Talleres, IoT, E-Waste, HPC)
- ✅ Modelo de Negocio (3 modelos)
- ✅ Proceso (3 pasos: Diagnóstico, Implementación, Escalamiento)
- ✅ Impacto y ODS (6 objetivos con imágenes)
- ✅ Colaboración (Solicitud de alianzas)
- ✅ Blog (Próximamente)
- ✅ Contacto (Formulario + Información)

**Características:**
- ✅ Bilingüe (ES/EN)
- ✅ Animaciones hover-lift, tech-border
- ✅ Navegación smooth scroll
- ✅ Formulario de contacto (pendiente conectar Google Sheets)

### **2. Presentación CultivaTech (`/presentacion-cultivatech`)**
**Secciones (10 slides):**
1. ✅ Sembrando el Futuro de la Agricultura Sostenible
2. ✅ El E-Waste y la Necesidad de una Agricultura Eficiente
3. ✅ De Residuos a Componentes de Alta Tecnología
4. ✅ La 'Mina Urbana' que Impulsa Nuestra Soberanía
5. ✅ La Inteligencia Agrícola Nace del Reciclaje: Cultivatech ColombIA
6. ✅ Impacto Real en el Campo: Más Productividad, Más Ingresos
7. ✅ Empoderando al Campo: Conocimiento, Tecnología y Comunidades
8. ✅ Un Modelo de Negocio Sólido y Rentable
9. ✅ Invierta en el Futuro: Un Rendimiento que Cultiva Valor
10. ✅ Juntos, Sembremos el Cambio (Contacto)

**Características:**
- ✅ Gráficos de datos (E-Waste statistics)
- ✅ Tabla periódica de materiales (Au, Ag, Pd, Cu)
- ✅ Imágenes de soporte para cada sección
- ✅ Diseño tipo presentación (scroll vertical)

### **3. Talleres Agro-Innovación (`/talleres-agro-innovacion`)**
**Secciones:**
- ✅ Hero Section (H1 + Breadcrumb)
- ✅ Introducción y Propuesta de Valor
- ✅ Alineación con Políticas Públicas (PND, PDD Cundinamarca)
- ✅ Metodología (ABP + STEAM)
- ✅ Módulos (4 tarjetas con imágenes):
  - Monitoreo Agrícola Inteligente
  - Sistemas de Riego Automáticos
  - Alarmas Inteligentes
  - Medidores Ambientales
- ✅ Beneficios para Comunidades Rurales
- ✅ Presupuestos y Financiamiento (70% anticipo, 15% inicio, 15% final)
- ✅ Sidebar con CTA sticky

**Características:**
- ✅ Bilingüe (ES/EN)
- ✅ Enfoque gubernamental (B2G)
- ✅ Información de precios y métodos de pago

### **4. Páginas de Error**
- ✅ 404 (Página no encontrada)
- ✅ 500 (Error del servidor)

---

## 🔌 FUNCIONALIDADES IMPLEMENTADAS

### **1. Sistema de Idiomas**
- ✅ Toggle ES/EN en header
- ✅ Traducciones en JSON (`static/translations/`)
- ✅ URLs con parámetro `?lang=es` o `?lang=en`

### **2. Formulario de Contacto**
- ✅ Campos completos (nombre, email, teléfono, organización, servicio, mensaje)
- ✅ Validación HTML5
- ✅ Checkbox de privacidad
- ✅ JavaScript para envío a Google Sheets (pendiente configurar API)

### **3. Correos de Contacto**
- ✅ `info@ir-productions.com` (Info General)
- ✅ `gerenciasocial@masterlukasmoyano.com` (Gerencia Social)
- ✅ WhatsApp: +57 319 791 9742
- ✅ LinkedIn: MasterLukasMoyano
- ✅ GitHub: LukasMoyano/ir-productions-nexus

### **4. Diseño Visual**
- ✅ Tema oscuro (dark mode por defecto)
- ✅ Gradientes personalizados (primary, tech, agro, gold)
- ✅ Animaciones (fade-in, slide-in, scale-in, float, pulse)
- ✅ Efectos hover (hover-lift, tech-border)
- ✅ Pattern de circuito impreso (circuit-pattern)

---

## ⏳ TAREAS PENDIENTES (Documentadas para Futuro)

### **🚀 PENDIENTE 1: HPC Builder (E-commerce Dropshipping)**

**Descripción:**
Configurador visual de workstations HPC y clusters ARM/AMD con integración de dropshipping automatizado.

**Características Planificadas:**
- **Frontend:**
  - Configurador visual interactivo (tipo "Rack")
  - Selección de arquitectura (Génesis, Hive, Titan)
  - Métricas en tiempo real (precio, teraflops, watts)
  - Carrito de compras / cotización
  - Integración con WhatsApp para pedidos

- **Backend:**
  - Catálogo de productos en JSON
  - Validación de compatibilidad (sockets, TDP, RAM)
  - Cálculo de precios con 70% de margen
  - API REST para consultas

**Archivos a Crear:**
```
templates/hpc_builder.html          # Template del configurador
static/js/hpc_builder.js            # Lógica del configurador
static/data/hpc_catalog.json        # Catálogo de productos
backend_agents/
  ├── scout_agent.py                # Scraper de precios
  ├── architect_agent.py            # Validador de compatibilidad
  ├── accountant_agent.py           # Calculadora de precios
  └── main_controller.py            # Orquestador
```

**Estado:** 📋 Documentado, pendiente de implementación

**Prioridad:** Media (se puede hacer más adelante)

---

### **🤖 PENDIENTE 2: Agentes de Scraping Python**

**Descripción:**
Sistema de agentes de IA para scraping automático de precios de proveedores (Amazon, MercadoLibre, Newegg) y generación de catálogo actualizado.

**Agentes Planificados:**

1. **Scout Agent (Scraper)**
   - Scraping de precios y stock
   - Rotación de user-agents (anti-bloqueo)
   - Extracción de especificaciones técnicas
   - Tecnologías: Playwright + BeautifulSoup

2. **Architect Agent (Validador)**
   - Validación de compatibilidad de componentes
   - Reglas: sockets, TDP, RAM, PSU
   - Base de datos de referencia

3. **Accountant Agent (Calculadora)**
   - Cálculo de precios con margen (x1.7)
   - Conversión de moneda
   - Generación de `hpc_catalog.json`

**Flujo de Datos:**
```
Agentes Python → Scraping proveedores
       ↓
Validación de compatibilidad
       ↓
Cálculo precios (70% margen)
       ↓
hpc_catalog.json
       ↓
Frontend HPC Builder
       ↓
Pedido por WhatsApp/API
```

**Estado:** 📋 Documentado, pendiente de implementación

**Prioridad:** Media (depende del HPC Builder)

---

### **📊 PENDIENTE 3: Integración con Google Sheets API**

**Descripción:**
Conectar el formulario de contacto con Google Sheets para almacenamiento automático de leads.

**Pasos Pendientes:**
1. Crear Google Apps Script en el Google Sheet
2. Implementar como aplicación web
3. Obtener URL de la API
4. Reemplazar `GOOGLE_SCRIPT_URL` en `index.html`

**Código Listo:**
- ✅ JavaScript en `index.html` (línea ~1040)
- ✅ Función `submitToGoogleSheets(event)`
- ✅ Manejo de éxito/error
- ✅ Integración con WhatsApp (opcional)

**Estado:** ⏳ 90% completado (falta configurar Google Sheet)

**Prioridad:** Alta (mejora la captación de leads)

---

### **🛒 PENDIENTE 4: Pasarela de Pagos**

**Descripción:**
Integración con Stripe o MercadoPago para pagos en línea del HPC Builder.

**Características Planificadas:**
- Checkout en una página
- Webhooks para confirmación de pago
- Integración con sistema de órdenes

**Estado:** 📋 Documentado, pendiente de implementación

**Prioridad:** Baja (por ahora se usa WhatsApp)

---

## 📈 MÉTRICAS DEL PROYECTO

### **Archivos Creados:**
- **Templates:** 6 archivos HTML
- **Python:** 1 archivo (app.py)
- **JavaScript:** 1 archivo (app.js)
- **CSS:** 2 archivos (input.css, styles.css)
- **Traducciones:** 2 archivos JSON (es, en)
- **Configuración:** 5 archivos (requirements.txt, tailwind.config.js, etc.)

### **Líneas de Código:**
- **Python:** ~200 líneas
- **HTML/Jinja2:** ~3000 líneas
- **JavaScript:** ~150 líneas
- **CSS:** ~400 líneas
- **JSON:** ~1000 líneas

**Total:** ~4750 líneas de código

### **Imágenes:**
- **Assets principales:** 10+ imágenes
- **ODS:** 6 imágenes
- **E-Waste:** 5+ imágenes

---

## 🚀 DESPLIEGUE

### **Desarrollo (Actual)**
```bash
cd /mnt/Proyectos4TB/backup_masterlukas/Documents/_-IR_Productions_2025/WwW_EndesarrolloWEB/ir-productions-nexus-main
source venv/bin/activate
python app.py
```
**URL:** http://localhost:5000

### **Producción (Pendiente)**
```bash
# Build de CSS
npm run build:css

# Ejecutar con Gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

### **FTP (Configurado)**
- Script `deploy.js` pendiente de actualizar para Flask
- GitHub Actions pendiente de configurar

---

## 📞 CONTACTO DEL PROYECTO

**Empresa:** IR Productions  
**Ubicación:** Fusagasugá, Cundinamarca, Colombia  
**Email:** info@ir-productions.com  
**WhatsApp:** +57 319 791 9742  
**LinkedIn:** MasterLukasMoyano  
**GitHub:** LukasMoyano/ir-productions-nexus

---

## 📝 NOTAS ADICIONALES

### **Migración Completada:**
- ✅ De Vite/React a Flask
- ✅ Mismo diseño visual
- ✅ Mismo contenido
- ✅ Mismas animaciones
- ✅ Sistema de idiomas preservado

### **Decisiones de Diseño:**
- **Tema oscuro:** Por defecto (identidad de marca)
- **Tailwind CSS:** Standalone CLI (sin dependencias de Node complejas)
- **Traducciones:** JSON (fácil de mantener)
- **Formulario:** Google Sheets (gratis, fácil de usar)

### **Próximos Pasos Inmediatos:**
1. ✅ Verificar que las imágenes se vean correctamente
2. ⏳ Configurar API de Google Sheets
3. ⏳ Implementar HPC Builder (más adelante)
4. ⏳ Implementar agentes de scraping (más adelante)

---

**Documento creado:** Febrero 2026  
**Última actualización:** Febrero 2026  
**Versión:** 1.0
