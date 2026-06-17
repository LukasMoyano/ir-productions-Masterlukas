# IR Productions - Sesión de Trabajo Actual

**Fecha:** 17 Junio 2026  
**Herramienta:** Opencode (asistente de ingeniería de software)  
**Repositorio:** `ir-productions-nexus-main`  
**Ruta raíz:** `/mnt/Proyectos4TB/backup_masterlukas/Documents/_-IR_Productions_2025/WwW_EndesarrolloWEB/ir-productions-nexus-main`

---

## 1. PROPÓSITO DEL PROYECTO

IR Productions es la plataforma web oficial de **IR Productions**, empresa colombiana (Fusagasugá, Cundinamarca) que fusiona **Arte, Ciencia y Tecnología** para crear soluciones digitales integrales con enfoque en:

- Desarrollo rural y agrícola (CultivaTech ColombIA)
- Democratización tecnológica
- Economía circular y supra-reciclaje de e-waste
- Educación STEAM
- Innovación abierta (Open Source)
- Cómputo de alto rendimiento (HPC) con impacto social

---

## 2. ARQUITECTURA GENERAL (Dual Stack)

El proyecto tiene **dos frentes principales** que coexisten:

### 2.1 Backend Flask (Python) - `backend/`

| Aspecto | Detalle |
|---|---|
| Framework | Flask 3.0.0 |
| Servidor | Werkzeug (dev) / Gunicorn (prod) |
| Templates | Jinja2 + Tailwind CSS |
| Traducciones | JSON (es/en) |
| Archivo principal | `backend/app.py` |

### 2.2 Frontend React/Vite (TypeScript) - `frontend/`

| Aspecto | Detalle |
|---|---|
| Framework | React + TypeScript |
| Bundler | Vite |
| Estilos | Tailwind CSS + Shadcn UI |
| Archivo principal | `frontend/src/App.tsx` |

### 2.3 Capas del Proyecto

```
ir-productions-nexus-main/
├── backend/              # Aplicación Flask (Python, Jinja2)
│   ├── app.py
│   ├── templates/
│   ├── static/
│   ├── requirements.txt
│   └── package-flask.json
├── frontend/             # Aplicación React (TypeScript, Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── design-system/
│   │   └── App.tsx
│   └── package.json
├── backend_agents/       # Agentes Python (scraping, HPC)
├── conductor/            # Documentos de reorganización y restauración
├── config/               # Configuraciones generales
├── docs/                 # Documentación
│   ├── arquitectura/     # Documentos de arquitectura
│   ├── guias/            # Guías de desarrollo
│   ├── mcp/              # Configuración MCP
│   ├── operaciones/      # Operaciones y tareas
│   └── ssl/              # Guías SSL
├── one-pager/            # Portafolio PDF (ES/EN)
├── scripts/              # Scripts de utilidad
├── docker-compose.yml
├── Dockerfile
└── package.json
```

---

## 3. ESTADO ACTUAL DE LA SESIÓN

### 3.1 Lo que estamos haciendo aquí y ahora

Estamos trabajando con **Opencode** como asistente de ingeniería de software para:

- **Documentar** el proyecto de manera estructurada y completa
- **Mantener** y hacer evolucionar la plataforma IR Productions
- **Organizar** la documentación existente y crear nueva donde haga falta
- **Planificar** los siguientes pasos del desarrollo

### 3.2 Stack técnico confirmado

| Tecnología | Uso |
|---|---|
| Python 3 + Flask | Backend principal |
| React + TypeScript + Vite | Frontend moderno |
| Tailwind CSS + Shadcn UI | Sistema de diseño UI |
| Bun | Runtime y package manager para frontend |
| Docker | Contenedores (docker-compose) |
| OpenCode | Asistente de ingeniería de software |
| PostgreSQL (planeado) | Base de datos |
| Playwright + BeautifulSoup | Web scraping (agentes) |

### 3.3 Documentos clave existentes

| Documento | Ruta |
|---|---|
| Resumen del proyecto | `docs/arquitectura/PROYECTO_RESUMEN.md` |
| PRD (Product Requirements) | `docs/arquitectura/PRD.md` |
| E-commerce / Dropshipping | `docs/arquitectura/dropshipingAndEcommerce.md` |
| WhatsApp RAG Bot | `docs/arquitectura/WHATSAPP_RAG_BOT.md` |
| Alineación estratégica | `docs/arquitectura/AlineaciónEstratégicaNormativa_-GuardiándelCultivo-_.md` |
| Guía de desarrollo | `docs/guias/GUIA_DESARROLLO.md` |
| Guía de despliegue | `docs/guias/GUIA_DESARROLLO_Y_DESPLIEGUE.md` |
| Guía FTP | `docs/operaciones/DEPLOYMENT.md` + `DEPLOY_FTP.md` |
| Guía SSL | `docs/ssl/SSL_GUIDE.md` |
| Setup MCP Render | `docs/mcp/MCP_RENDER_SETUP.md` |
| Tareas pendientes | `docs/operaciones/TAREAS_PENDIENTES.md` |
| One-pager resumen | `one-pager/RESUMEN_PROYECTO.md` |
| Conductor: restauración | `conductor/restauracion_nexus.md` |
| Conductor: reorganización | `conductor/reorganization.md` |

---

## 4. PRÓXIMOS PASOS (Plan de Trabajo)

### Prioridad Alta
- [ ] Configurar API de Google Sheets para formulario de contacto
- [ ] Unificar frontend (decidir si renderizar React desde Flask o mantener separado)
- [ ] Despliegue a producción con Gunicorn + Nginx o similar

### Prioridad Media
- [ ] Implementar HPC Builder (configurador visual de workstations)
- [ ] Agentes Python de scraping (Scout, Architect, Accountant)
- [ ] Pasarela de pagos (Stripe/MercadoPago)

### Prioridad Baja
- [ ] Sistema de blog
- [ ] Panel de administración
- [ ] App móvil

---

## 5. CONTACTO Y RECURSOS

| Recurso | Detalle |
|---|---|
| Empresa | IR Productions |
| Ubicación | Fusagasugá, Cundinamarca, Colombia |
| Email | info@ir-productions.com |
| WhatsApp | +57 319 791 9742 |
| LinkedIn | MasterLukasMoyano |
| GitHub | LukasMoyano/ir-productions-nexus |
| Web | masterlukasmoyano.com |

---

*Documento generado el 17 Junio 2026 durante sesión con Opencode.*  
*Mantener actualizado conforme avance el proyecto.*
