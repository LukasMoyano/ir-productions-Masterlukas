# Tareas Pendientes - IR Productions Nexus

**Fecha:** Febrero 2026  
**Estado:** 📋 Documentado para implementación futura

---

## 🚀 TAREA PENDIENTE #1: HPC Builder (E-commerce)

### **Descripción**
Configurador visual de workstations HPC y clusters ARM/AMD con sistema de dropshipping automatizado.

### **Objetivo**
Permitir a los usuarios configurar y comprar workstations de IA y clusters sin intervención humana, con precios actualizados automáticamente mediante scraping.

### **Características Principales**

#### **Frontend (Configurador Visual)**
- [ ] Interfaz tipo "Rack" o "Gabinete" interactivo
- [ ] Selección de arquitectura:
  - **Génesis:** Workstation (AMD Threadripper / Ryzen 9)
  - **Hive:** Cluster ARM (Raspberry Pi / Jetson)
  - **Titan:** Servidor (AMD EPYC / Dual Socket)
- [ ] Configuración paso a paso de componentes:
  - CPU → GPU → Motherboard → RAM → Storage → PSU → Case → Cooling
- [ ] Feedback en tiempo real:
  - Precio total (actualización instantánea)
  - Teraflops estimados (gamificación)
  - Consumo de watts
  - Validación de compatibilidad
- [ ] Carrito / Cotización
- [ ] Botón de compra:
  - Opción A: WhatsApp API con detalle del pedido
  - Opción B: Pasarela de pagos (Stripe/MercadoPago)

#### **Backend (Agentes de IA)**
- [ ] **Scout Agent:** Scraping de precios (Amazon, MercadoLibre, Newegg)
- [ ] **Architect Agent:** Validación de compatibilidad (sockets, TDP, RAM)
- [ ] **Accountant Agent:** Cálculo de precios (costo + 70% margen)
- [ ] **Export Agent:** Generación de `hpc_catalog.json`

### **Archivos a Crear**

```
templates/
  └── hpc_builder.html           # Template del configurador
  
static/
  ├── js/
  │   └── hpc_builder.js         # Lógica del configurador
  └── data/
      └── hpc_catalog.json       # Catálogo generado por agentes
      
backend_agents/
  ├── __init__.py
  ├── scout_agent.py             # Scraper con Playwright
  ├── architect_agent.py         # Validador de compatibilidad
  ├── accountant_agent.py        # Calculadora de precios
  ├── exporter.py                # Generador de JSON
  └── main_controller.py         # Orquestador principal
```

### **Estructura del Catálogo (JSON)**

```json
{
  "products": [
    {
      "id": "cpu-001",
      "category": "cpu",
      "name": "AMD Ryzen 9 7950X3D",
      "specs": {
        "socket": "AM5",
        "cores": 16,
        "tdp": 120
      },
      "price_cost": 500,
      "price_sale": 850,
      "stock": true,
      "supplier_url": "https://..."
    }
  ],
  "compatibility_rules": {...},
  "last_updated": "2026-02-21T00:00:00Z"
}
```

### **Flujo de Trabajo**

```
1. Usuario entra a /hpc-builder
2. Selecciona arquitectura (Génesis/Hive/Titan)
3. Configura componentes (validación en tiempo real)
4. Ve métricas (precio, teraflops, watts)
5. Añade al carrito / solicita cotización
6. Pedido se envía por WhatsApp o API
7. Usuario recibe confirmación
```

### **Modelo de Negocio**
- **Margen:** 70% sobre costo de componentes
- **Dropshipping:** Se compran componentes solo cuando el cliente paga
- **Capital:** Se usa el pago del cliente para comprar los componentes

### **Prioridad:** 🟡 Media
**Tiempo estimado:** 2-3 semanas
**Dependencias:** Ninguna (se puede hacer independiente)

---

## 🤖 TAREA PENDIENTE #2: Agentes de Scraping

### **Descripción**
Sistema automatizado de scraping para obtener precios de proveedores y generar catálogo actualizado cada 6 horas.

### **Objetivo**
Mantener precios actualizados sin intervención manual, asegurando márgenes de ganancia consistentes.

### **Agentes**

#### **1. Scout Agent (Scraper)**
**Función:** Extraer precios, stock y especificaciones de proveedores.

**Tecnologías:**
- Playwright (navegador real, anti-bloqueo)
- BeautifulSoup (parsing de HTML)
- Rotación de User-Agents

**Proveedores:**
- Amazon (.com, .com.mx)
- MercadoLibre (Colombia, México)
- Newegg
- AliExpress

**Datos a extraer:**
- Nombre del producto
- Precio actual
- Stock (Sí/No)
- URL de imagen
- Especificaciones técnicas
- URL del proveedor

**Código Base:**
```python
# backend_agents/scout_agent.py
import asyncio
from playwright.async_api import async_playwright

async def scrape_amazon_product(url):
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(
            user_agent='Mozilla/5.0...'
        )
        await page.goto(url)
        
        # Extraer datos
        price = await page.text_content('.a-price-whole')
        stock = await page.is_visible('#availability')
        
        return {
            'price': float(price.replace(',', '')),
            'stock': stock,
            'url': url
        }
```

#### **2. Architect Agent (Validador)**
**Función:** Validar compatibilidad entre componentes.

**Reglas de Validación:**
- Socket de CPU = Socket de Motherboard
- Tipo de RAM (DDR4/DDR5) = Compatible con Motherboard
- TDP total < Capacidad de PSU
- Tamaño de GPU < Tamaño de Case
- Cooling compatible con Socket

**Código Base:**
```python
# backend_agents/architect_agent.py
def validate_compatibility(components):
    cpu = components['cpu']
    mobo = components['motherboard']
    
    # Validar socket
    if cpu['socket'] != mobo['socket']:
        return False, "Socket incompatible"
    
    # Validar RAM
    if cpu['ram_type'] != mobo['ram_type']:
        return False, "RAM type incompatible"
    
    # Validar TDP
    total_tdp = sum(c['tdp'] for c in components.values())
    if total_tdp > components['psu']['watts'] * 0.8:
        return False, "PSU insufficient"
    
    return True, "Compatible"
```

#### **3. Accountant Agent (Calculadora)**
**Función:** Calcular precios de venta con margen.

**Fórmula:**
```
precio_venta = (costo_proveedor + envio) * 1.7
```

**Consideraciones:**
- Costo de importación (si aplica)
- Envío estimado
- Margen fijo: 70%
- Conversión de moneda (USD → COP)

**Código Base:**
```python
# backend_agents/accountant_agent.py
def calculate_price(cost, shipping=0, margin=1.7):
    """Calcular precio de venta con margen"""
    total_cost = cost + shipping
    sale_price = total_cost * margin
    return round(sale_price, 2)
```

#### **4. Export Agent (Generador JSON)**
**Función:** Generar `hpc_catalog.json` para el frontend.

**Salida:**
```json
{
  "products": [...],
  "last_updated": "2026-02-21T12:00:00Z",
  "next_update": "2026-02-21T18:00:00Z"
}
```

### **Ejecución Automática**

#### **Opción A: Cron Job (Linux)**
```bash
# Editar crontab
crontab -e

# Ejecutar cada 6 horas
0 */6 * * * cd /path/to/project && /path/to/venv/bin/python backend_agents/main_controller.py
```

#### **Opción B: Script Manual**
```bash
cd /mnt/Proyectos4TB/backup_masterlukas/Documents/_-IR_Productions_2025/WwW_EndesarrolloWEB/ir-productions-nexus-main
source venv/bin/activate
python backend_agents/main_controller.py
```

### **Integración con Deploy**
```bash
# Antes de subir, actualizar catálogo
python backend_agents/main_controller.py
npm run build:css
node deploy.js
```

### **Prioridad:** 🟡 Media
**Tiempo estimado:** 1-2 semanas
**Dependencias:** HPC Builder (parcial)

---

## 📊 TAREA PENDIENTE #3: Google Sheets API

### **Descripción**
Conectar el formulario de contacto con Google Sheets para almacenamiento automático de leads.

### **Estado Actual**
- ✅ JavaScript creado en `index.html`
- ✅ Función `submitToGoogleSheets(event)` implementada
- ⏳ Falta: Crear Google Apps Script
- ⏳ Falta: Obtener URL de la API

### **Pasos Pendientes**

1. **Abrir Google Sheet:**
   - URL: https://docs.google.com/spreadsheets/d/1_dCusKly7UBQpfTeQz7Dy2JbenIVYupJSocj-93yYlU/edit

2. **Crear Google Apps Script:**
   - Extensiones → Apps Script
   - Pegar código (ver abajo)
   - Guardar

3. **Implementar como Aplicación Web:**
   - Implementar → Nueva implementación
   - Tipo: Aplicación web
   - Ejecutar como: Yo
   - Quién tiene acceso: Cualquier persona
   - Implementar

4. **Copiar URL:**
   - Se ve así: `https://script.google.com/macros/s/AKfycbx.../exec`

5. **Actualizar `index.html`:**
   - Buscar línea: `const GOOGLE_SCRIPT_URL = '...'`
   - Reemplazar con URL real

### **Código de Google Apps Script**

```javascript
// Google Apps Script - IR Productions Contact Form

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    var timestamp = new Date();
    var row = [
      timestamp,
      data.name || '',
      data.email || '',
      data.phone || '',
      data.organization || '',
      data.service || '',
      data.message || '',
      data.privacy || 'false',
      data.source || '',
      data.user_agent || ''
    ];
    
    sheet.appendRow(row);
    
    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1, 1, 10)
      .setHorizontalAlignment('left')
      .setWrap(true);
    sheet.getRange(lastRow, 1, 1, 1)
      .setNumberFormat('yyyy-MM-dd HH:mm:ss');
    
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'success',
        'message': 'Datos guardados correctamente'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'error',
        'error': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### **Columnas del Google Sheet**

| A | B | C | D | E | F | G | H | I | J |
|---|---|---|---|---|---|---|---|---|---|
| timestamp | name | email | phone | organization | service | message | privacy | source | user_agent |

### **Prioridad:** 🟢 Alta
**Tiempo estimado:** 30 minutos
**Dependencias:** Ninguna

---

## 💳 TAREA PENDIENTE #4: Pasarela de Pagos

### **Descripción**
Integración con Stripe o MercadoPago para pagos en línea.

### **Características**
- [ ] Checkout en una página
- [ ] Webhooks para confirmación
- [ ] Integración con sistema de órdenes
- [ ] Emails automáticos de confirmación

### **Proveedores Sugeridos**
- **Stripe:** Internacional, fácil integración
- **MercadoPago:** Latinoamérica, ampliamente usado

### **Prioridad:** 🔴 Baja
**Tiempo estimado:** 1 semana
**Dependencias:** HPC Builder

---

## 📅 CRONOGRAMA SUGERIDO

### **Corto Plazo (1-2 semanas)**
- [ ] Configurar Google Sheets API (30 min)
- [ ] Verificar imágenes en Flask (15 min)

### **Mediano Plazo (1-2 meses)**
- [ ] Implementar HPC Builder (2-3 semanas)
- [ ] Implementar Agentes de Scraping (1-2 semanas)

### **Largo Plazo (3-6 meses)**
- [ ] Integrar Pasarela de Pagos (1 semana)
- [ ] Optimizar SEO (continuo)
- [ ] Analytics y métricas (continuo)

---

## 📌 NOTAS

### **Decisiones Técnicas**
- **Flask:** Elegido por simplicidad vs Django
- **Tailwind Standalone:** Sin dependencias complejas de Node
- **Google Sheets:** Gratis, fácil de mantener
- **WhatsApp API:** Más fácil que pasarela de pagos inicialmente

### **Consideraciones**
- Los agentes de scraping pueden requerir proxies para evitar bloqueos
- El HPC Builder puede empezar como MVP manual (WhatsApp)
- Google Sheets tiene límite de 5 millones de celdas (suficiente para empezar)

### **Recursos Necesarios**
- **HPC Builder:** 1 desarrollador frontend + 1 backend (2-3 semanas)
- **Agentes:** 1 desarrollador Python (1-2 semanas)
- **Google Sheets:** 30 minutos (cualquiera puede hacerlo)

---

**Documento creado:** Febrero 2026  
**Última actualización:** Febrero 2026  
**Versión:** 1.0
