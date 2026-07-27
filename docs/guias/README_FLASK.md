# IR Productions - Flask

**Migración de Vite/React a Flask** para simplificar la arquitectura y el despliegue.

---

## 🚀 Vista Rápida

### Estructura del Proyecto
```
ir-productions-nexus-flask/
├── app.py                      # Aplicación Flask principal
├── requirements.txt            # Dependencias Python
├── templates/                  # Templates Jinja2
│   ├── base.html              # Layout base
│   ├── index.html             # Página de inicio
│   ├── cultivatech_presentation.html
│   ├── agro_workshops.html
│   ├── hpc_builder.html       # E-commerce HPC (nuevo)
│   └── partials/              # Componentes reutilizables
│       ├── _header.html
│       └── _footer.html
├── static/                     # Archivos estáticos
│   ├── css/
│   │   ├── input.css          # Tailwind source
│   │   └── styles.css         # Tailwind compilado
│   ├── js/
│   │   └── app.js             # JavaScript principal
│   ├── assets/                # Imágenes
│   ├── translations/          # i18n JSON
│   │   ├── es.json
│   │   └── en.json
│   └── data/                  # Datos dinámicos
│       └── hpc_catalog.json   # Catálogo HPC
└── backend_agents/             # Agentes de scraping
    ├── scout_agent.py
    ├── architect_agent.py
    └── accountant_agent.py
```

---

## ⚙️ Instalación

### 1. Instalar Python (3.8+)
```bash
# Verificar versión
python --version
```

### 2. Crear entorno virtual
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
# o
.\venv\Scripts\activate  # Windows
```

### 3. Instalar dependencias
```bash
pip install -r requirements.txt
```

### 4. Configurar variables de entorno
```bash
cp .env.example .env
# Editar .env con tus configuraciones
```

### 5. Instalar Node.js (para Tailwind CSS)
```bash
# Instalar Tailwind CSS CLI
npm install -g tailwindcss
```

---

## 🏃 Ejecución

### Modo Desarrollo
```bash
# Opción 1: Flask directamente
export FLASK_ENV=development
export FLASK_DEBUG=True
python app.py

# Opción 2: Flask CLI
export FLASK_APP=app.py
flask run --debug
```

El sitio estará disponible en: `http://localhost:5000`

### Build de CSS
```bash
# Compilar CSS una vez
./build.sh

# O usar npm
npm run build:css

# Watch mode (auto-reload)
npm run watch:css
```

---

## 🌐 Rutas Disponibles

| Ruta | Descripción |
|------|-------------|
| `/` | Página de inicio |
| `/presentacion-cultivatech` | Presentación CultivaTech |
| `/talleres-agro-innovacion` | Talleres Agro-Innovación |
| `/hpc-builder` | Configurador HPC (nuevo) |
| `/api/hpc/catalog` | API Catálogo HPC |
| `/api/contact` | API Formulario contacto |

---

## 🔄 Sistema de Idiomas

El sitio soporta **Español** e **Inglés**. Para cambiar de idioma:

- URL: `?lang=en` o `?lang=es`
- Header: Botón de idioma en la navegación

Las traducciones están en `static/translations/`.

---

## 🛒 HPC Builder (E-commerce)

### Características
- Configurador visual de workstations HPC
- Catálogo actualizado por agentes de scraping
- Validación de compatibilidad automática
- Integración con WhatsApp para pedidos

### Flujo de Datos
```
Agentes Python → Scraping proveedores
       ↓
Validación compatibilidad
       ↓
Cálculo precios (70% margen)
       ↓
hpc_catalog.json
       ↓
Frontend HPC Builder
       ↓
Pedido por WhatsApp
```

---

## 🤖 Agentes de Scraping

### Ubicación
`backend_agents/`

### Ejecución Manual
```bash
cd backend_agents
python main_controller.py
```

### Ejecución Automática (Cron)
```bash
# Editar crontab
crontab -e

# Ejecutar cada 6 horas
0 */6 * * * cd /path/to/project && /path/to/venv/bin/python backend_agents/main_controller.py
```

---

## 📦 Despliegue

### FTP (GitHub Actions)
El despliegue automático se configura en `.github/workflows/deploy-ftp.yml`.

### Build para Producción
```bash
# 1. Compilar CSS
npm run build:css

# 2. Ejecutar agentes para actualizar catálogo
python backend_agents/main_controller.py

# 3. Subir vía FTP
# Usar script deploy.js o GitHub Actions
```

### Gunicorn (Producción)
```bash
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

---

## 🧪 Testing

```bash
# Instalar pytest
pip install pytest

# Ejecutar tests
pytest
```

---

## 📝 Notas de Migración

### De Vite/React a Flask
- **Templates**: JSX → Jinja2 HTML
- **Estado React**: → Variables Jinja2 + JSON
- **Enrutamiento**: React Router → Flask routes
- **CSS**: Tailwind CDN → Tailwind CLI build
- **i18n**: React state → Flask-Babel + JSON

### Ventajas de Flask
- ✅ 1 solo servidor (sin Vite + Django separados)
- ✅ Integración nativa con Python/agentes
- ✅ Despliegue FTP simplificado
- ✅ Menos complejidad

---

## 🔧 Desarrollo

### Agregar Nueva Página
1. Crear template en `templates/`
2. Agregar ruta en `app.py`
3. Agregar traducciones en `static/translations/`

### Agregar Nuevo Componente
1. Crear partial en `templates/partials/`
2. Incluir con `{% include 'partials/_component.html' %}`

### Modificar Estilos
1. Editar `static/css/input.css`
2. Ejecutar `npm run watch:css`
3. Los cambios se aplican automáticamente

---

## 📞 Soporte

**IR Productions**  
Fusagasugá, Cundinamarca, Colombia  
📧 info@ir-productions.com  
📱 +57 319 7919742

---

## 📄 Licencia

MIT License - IR Productions 2026
