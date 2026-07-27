# Diagnóstico Funcional Completo — _-IR-_ Productions Nexus

## 1. Resumen del Proyecto

| Aspecto | Detalle |
|---|---|
| **Stack Frontend** | React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui |
| **Stack Backend** | Python/Flask (Sirve build estático de React) |
| **Hosting** | Servidor VPS propio con Docker + Nginx Proxy Manager |
| **Estado Live** | https://masterlukasmoyano.com — Funcional, sirve SPA |
| **Último Commit** | `8d2ebe7` — "feat: add Diplomado UNAL a formación, orden cronológico, y mejora tipográfica en PDF" (17 Jun 2026) |

---

## 2. Últimos Cambios Antes del Push (Commit `8d2ebe7` vs `b0c16e2`)

### Archivos modificados (39 archivos, +50428 / -299 líneas):

| Archivo | Cambio |
|---|---|
| `frontend/src/pages/Portfolio.tsx` | **NUEVA** Página de portafolio profesional completa (433 líneas) |
| `portfolio-download.html` | **NUEVO** Brochure PDF descargable (764 líneas) |
| `docs/arquitectura/SESION_ACTUAL.md` | **NUEVO** Documento de sesión actual (162 líneas) |
| `backend/static/assets/index-x_NgyI7P.js` | **NUEVO** JS compilado build (83 líneas) |
| `backend/static/assets/index-DGGfWth_.css` | **NUEVO** CSS compilado build |
| `frontend/src/components/ServicesSection.tsx` | Refactor completo: nuevo mapeo de colores por beneficio, imagen de RAEE, enlaces actualizados |
| `frontend/src/components/Header.tsx` | Se añadió "Portafolio" al nav + soporte para rutas absolutas (`/portfolio`) |
| `frontend/src/components/AboutSection.tsx` | Se añadió "Diplomado UNAL" a educación, orden cronológico corregido |
| `frontend/src/components/ContactSection.tsx` | Se añadió `onClick` al brochure download card |
| `frontend/src/components/ImpactSection.tsx` | Mejora visual: imágenes ODS más visibles, cards centradas |
| `frontend/src/App.tsx` | Se añadió ruta `/portfolio` |
| `frontend/src/pages/Index.tsx` | Se añadió `PortfolioPreview` component |
| `frontend/src/pages/HPCBuilder.tsx` | Refactor extenso del configurador de workstations |
| `frontend/tailwind.config.ts` | Ajuste menor |
| `scripts/deploy-lftp.sh` + `deploy-total.sh` + `unlock-server.sh` | Actualización scripts de despliegue |

---

## 3. Árbol de Navegación Completo (Mapa de Vínculos)

```
masterlukasmoyano.com
│
├── / (Index - Landing Page)
│   ├── Header
│   │   ├── #inicio / #home (ancla Hero)
│   │   ├── #servicios / #services (ancla Servicios)
│   │   ├── /portfolio (Portafolio)
│   │   ├── #proceso / #process (ancla Proceso)
│   │   ├── #equipo / #team (ancla About/Equipo)
│   │   ├── #contacto / #contact (ancla Contacto)
│   │   └── Toggle ES/EN
│   │
│   ├── HeroSection
│   │   ├── Btn "Talleres Agro" → scroll a #servicios ✓
│   │   └── Btn "Workstations IA" → scroll a #servicios ✓
│   │
│   ├── PhilosophySection (solo info, sin links)
│   │
│   ├── AboutSection (solo info, sin links)
│   │
│   ├── ServicesSection
│   │   ├── Card "Talleres Agro-Innovación" → Link interno /talleres-agro-innovacion ✓
│   │   ├── Card "Kit Agro-IoT CultivaTech" → Link interno /presentacion-cultivatech ✓
│   │   ├── Card "Proyecto RAEE & Agricultura Circular" → /presentacion-cultivatech ✓
│   │   ├── Card "Workstations HPC/IA" → Link interno /servicios/hpc-builder ✓
│   │   └── Btn "Solicita Consulta Gratuita" → scroll a #contacto ✓
│   │
│   ├── PortfolioPreview
│   │   ├── Btn "Descargar Brochure PDF" → /portfolio-download.html ✓
│   │   └── Btn "Ver Portafolio Completo" → /portfolio ✓
│   │
│   ├── BusinessModelSection (solo info, sin links)
│   │
│   ├── ProcessSection (solo info, sin links)
│   │
│   ├── ImpactSection (solo info, sin links)
│   │
│   ├── ImpactODSSection (solo info, sin links)
│   │
│   ├── CollaborationSection
│   │   ├── Btn "Solicitar una Reunión" → ❌ SIN ACCIÓN (no tiene onClick ni Link)
│   │   └── Btn "Descargar Propuesta" → ❌ SIN ACCIÓN (no tiene onClick ni Link)
│   │
│   ├── BlogSection
│   │   └── Btn "Suscríbete para Actualizaciones" → ❌ SIN ACCIÓN (sin onClick ni Link)
│   │
│   └── ContactSection
│       ├── Card WhatsApp → https://wa.me/573197919742 ✓
│       ├── Card Email → mailto:managementandplanning@masterlukasmoyano.com ✓
│       ├── Card LinkedIn → https://linkedin.com/in/masterlukasmoyano/ ✓
│       ├── Card GitHub → https://github.com/LukasMoyano/ir-productions-nexus/blob/main/README.md ✓
│       ├── Card Brochure → /portfolio-download.html ✓
│       ├── Btn "Iniciar Conversación" → https://wa.me/573197919742 ✓
│       └── Footer Social: LinkedIn | GitHub | Mail ✓
│
├── /portfolio (Portfolio Page)
│   ├── Header (mismo que Index)
│   ├── Btn ← "Regresar" → / ✓
│   ├── Btn "Descargar Brochure PDF" → /portfolio-download.html ✓
│   ├── Btn "Conexión Estratégica" → scroll a #contacto ✓
│   ├── Section Proyectos (7 cards informativos, sin links) ⚠️
│   ├── Section Contacto
│   │   ├── Btn "Enviar Correo" → mailto:managementandplanning@masterlukasmoyano.com ✓
│   │   └── Btn "LinkedIn" → https://linkedin.com/in/lukasmoyano ✓
│   └── Footer
│       ├── Link Github → https://github.com/LukasMoyano ✓
│       ├── Link Legal → # (placeholder) ❌
│       └── Link Privacy → # (placeholder) ❌
│
├── /presentacion-cultivatech (Cultivatech Presentation)
│   ├── Header (sin toggle de idioma funcional - toggleLanguage es vacío)
│   ├── 10 secciones informativas con gráficos
│   └── ❌ Sin botón de regreso al home (solo Header que no tiene "Home")
│
├── /talleres-agro-innovacion (Agro Workshops)
│   ├── Header normal
│   ├── Btn "Volver a Servicios" → ❌ Renderizado como <Link> pero hay que verificar
│   └── Sidebar CTA → scroll a #contacto ✓
│
├── /servicios/hpc-builder (HPC Builder)
│   ├── Header normal
│   ├── Btn "Volver al Inicio" → / ✓
│   ├── Configurador interactivo (Plataforma, CPU, GPU, RAM) ✓
│   ├── Btn "Cotizar por WhatsApp" → ❌ NÚMERO ERRÓNEO: wa.me/573000000000 (placeholder)
│   └── Componentes desde /data/hpc_catalog_mock.json ✓
│
└── 404 (NotFound)
    └── Link "Return to Home" → / ✓
```

---

## 4. Diagnóstico de Funcionalidad — Botones y Vínculos

### ✅ Funcionan Correctamente:
| Botón/Vínculo | Ruta/URL |
|---|---|
| Nav → Inicio/Home | `#inicio` / `#home` (scroll) |
| Nav → Servicios/Services | `#servicios` / `#services` (scroll) |
| Nav → Portafolio | `/portfolio` |
| Nav → Proceso | `#proceso` (scroll) |
| Nav → Contacto | `#contacto` (scroll) |
| Hero CTAs | scroll a `#servicios` |
| Services → Talleres | `/talleres-agro-innovacion` |
| Services → CultivaTech | `/presentacion-cultivatech` |
| Services → RAEE | `/presentacion-cultivatech` |
| Services → HPC | `/servicios/hpc-builder` |
| Services → Consulta Gratis | scroll a `#contacto` |
| PortfolioPreview → Brochure | `/portfolio-download.html` |
| PortfolioPreview → Portafolio | `/portfolio` |
| Contact → WhatsApp | `https://wa.me/573197919742` |
| Contact → Email (card) | `mailto:managementandplanning@masterlukasmoyano.com` |
| Contact → LinkedIn | `https://linkedin.com/in/masterlukasmoyano/` |
| Contact → GitHub | `https://github.com/LukasMoyano/ir-productions-nexus/blob/main/README.md` |
| Contact → Brochure Card | `/portfolio-download.html` |
| Contact → "Iniciar Conversación" | `https://wa.me/573197919742` |
| Portfolio → Regresar | `/` |
| Portfolio → Brochure | `/portfolio-download.html` |
| Portfolio → Correo | `mailto:managementandplanning@masterlukasmoyano.com` |
| Portfolio → LinkedIn | `https://linkedin.com/in/lukasmoyano` |
| Portfolio Footer → GitHub | `https://github.com/LukasMoyano` |
| 404 → Home | `/` |
| HPC → Volver | `/` |
| Language Toggle | ES ↔ EN (en Index y Portfolio) |

### ❌ NO Funcionan / Rotos:
| Botón/Vínculo | Problema | Archivo: Línea |
|---|---|---|
| **CollaborationSection → "Solicitar una Reunión"** | Botón sin `onClick` ni `to` — no hace nada | `CollaborationSection.tsx:114-120` |
| **CollaborationSection → "Descargar Propuesta"** | Botón sin `onClick` ni `to` — no hace nada | `CollaborationSection.tsx:122-129` |
| **BlogSection → "Suscríbete para Actualizaciones"** | Botón sin `onClick` ni `to` — no hace nada | `BlogSection.tsx:150-153` |
| **HPC → "Cotizar por WhatsApp"** | Número placeholder `573000000000` (debería ser `573197919742`) | `HPCBuilder.tsx:102` |
| **Portfolio Footer → "Legal"** | `href="#"` — placeholder, no lleva a ninguna política | `Portfolio.tsx:423` |
| **Portfolio Footer → "Privacy"** | `href="#"` — placeholder, no lleva a ninguna política | `Portfolio.tsx:424` |
| **Services CultivaTech Inglés** | En versión EN, el botón CultivaTech tiene `external: true` y apunta a Netlify, pero en español `external: false` apunta a `/presentacion-cultivatech` — inconsistencia | `ServicesSection.tsx:196 vs 136-137` |
| **CultivatechPresentation → Header** | El toggle de idioma pasa función vacía `() => {}` — no se puede cambiar idioma | `CultivatechPresentation.tsx:266` |
| **CultivatechPresentation → Sin botón Home** | No hay forma de volver al inicio desde esta página | `CultivatechPresentation.tsx` |
| **AgroInnovationWorkshops → "Volver a Servicios"** | Usa `<Link>` pero la línea 18 y el renderizado deberían verificarse | `AgroInnovationWorkshops.tsx:18, 50` |

### ⚠️ Problemas de Imágenes / Assets:
| Imagen | Problema |
|---|---|
| `imgOrquestacionGpu` | TODO comentado: "Cambiar a orquestacion-gpu.png cuando subas el archivo" — actualmente usa `nexus-hpc.png` como fallback | `Portfolio.tsx:18` |
| Las imágenes en `PortfolioPreview.tsx` usan rutas absolutas `/assets/...` (backend static) mientras las demás importaciones usan imports relativos | `PortfolioPreview.tsx:26-39` |
| Las imágenes ODS en `ImpactSection.tsx` usan ruta `/ODSs/...` que está en `frontend/public/ODSs/` (accesible) | ✓ |

### 📌 Inconsistencias Detectadas:
1. **ServicesSection EN → CultivaTech link externo a Netlify**: Mientras en ES apunta a presentación interna, en EN va a Netlify. Confuso para usuarios inglés.
2. **ContactSection → Email en card vs email en link**: Card muestra `MasterLukasMoyano@MasterLukasMoyano.com` pero enlaza a `managementandplanning@masterlukasmoyano.com` — inconsistencia de display vs acción.
3. **Dos LinkedIn URLs diferentes**: ContactSection usa `/in/masterlukasmoyano/` mientras Portfolio usa `/in/lukasmoyano` — ¿cuál es la correcta?
4. **AgroInnovation taller usa ID `contacto`** para el scroll pero está en su propia page, no en Index.

---

## 5. Estado del Diseño y Apariencia (Look & Feel)

### Puntos Fuertes:
- ✅ **Estética Cyberpunk Andina**: Coherente, única, diferenciadora. Paleta rojo/negro/dorado/verde.
- ✅ **Gradientes y glow effects**: Bien implementados con Tailwind.
- ✅ **Animaciones suaves**: hover-lift, fade-in, slide-in, pulse — consistentes.
- ✅ **Responsive design**: Media queries en todas las secciones.
- ✅ **Modo oscuro nativo**: Tema dark-first (bg-background, text-foreground).
- ✅ **Badges y chips de colores**: Sistema de colores por categoría (verde agro, turquesa tech, violeta soberanía, etc.).
- ✅ **Tipografía**: Inter font, jerarquía clara con tracking y weight.
- ✅ **ODS y políticas públicas**: Visualmente bien integrados.

### Áreas de Mejora:
- ⚠️ **NotFound.tsx**: Página 404 básica con Tailwind pero usa `bg-gray-100` y `text-blue-500` — no sigue el theme oscuro del resto del sitio. No tiene Header ni diseño coherente.
- ⚠️ **CultivatechPresentation**: Sin opción de idioma real, sin navegación de regreso.
- ⚠️ **Portfolio Page**: No tiene navegación por anclas para secciones largas (solo scroll).
- ⚠️ **Imágenes**: Muchas imágenes tienen opacidad reducida (40-70%) por diseño, pero puede afectar legibilidad percibida.
- ⚠️ **Espaciado**: Algunas secciones usan `py-20`, otras `py-24` — inconsistencia menor.

---

## 6. Resumen de Hallazgos y Prioridades

| Prioridad | Hallazgo | Impacto | Acción Recomendada |
|---|---|---|---|
| 🔴 **ALTA** | 3 botones sin acción (Collaboration, Blog) | Usuarios intentan clickear y no pasa nada | Agregar `onClick` o `Link` a cada uno |
| 🔴 **ALTA** | Número WhatsApp HPC Builder incorrecto | Cotizaciones van a número equivocado | Cambiar a `573197919742` |
| 🟡 **MEDIA** | Cultivatech sin Home/back button | Usuarios en página de presentación no pueden regresar | Agregar botón de regreso |
| 🟡 **MEDIA** | Toggle idioma no funciona en Cultivatech | Presentación solo en español forzado | Implementar toggle real o redirigir a Index |
| 🟡 **MEDIA** | Portfolio footer "Legal" y "Privacy" son # | Enlaces rotos | Crear páginas o vincular a recursos reales |
| 🟡 **MEDIA** | NotFound.tsx fuera de tema visual | Mala experiencia en error 404 | Rediseñar con theme oscuro y Header |
| 🟢 **BAJA** | Inconsistencia LinkedIn URLs | Una de las dos URLs es incorrecta | Unificar a la correcta |
| 🟢 **BAJA** | Portfolio no tiene anclas de navegación | Usuarios deben scrollear manual | Agregar sticky nav lateral o top |
| 🟢 **BAJA** | Imagen orquestacion-gpu.png pendiente de subir | Usa placeholder de otra imagen | Subir asset y actualizar import |
| 🟢 **BAJA** | Email display vs email link difieren | Confusión menor | Unificar para consistencia |

---

## 7. Último Estado Git

```
HEAD → 8d2ebe7 feat: add Diplomado UNAL a formación, orden cronológico, y mejora tipográfica en PDF
Fecha: Wed Jun 17 13:57:14 2026 -0500

Archivos clave en el último commit:
  M  frontend/src/components/AboutSection.tsx  (educación + cronología)
  M  frontend/src/App.tsx                      (ruta /portfolio)
  M  frontend/src/components/Header.tsx        (nav + Portafolio)
  M  frontend/src/components/ServicesSection.tsx (refactor completo)
  A  frontend/src/pages/Portfolio.tsx          (nueva página)
  A  portfolio-download.html                   (brochure)
  A  docs/arquitectura/SESION_ACTUAL.md         (nuevo doc)
```

---

*Generado: 26 Jul 2026*
