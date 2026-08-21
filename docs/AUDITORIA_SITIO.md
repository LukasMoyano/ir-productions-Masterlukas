# Auditoría del Sitio — IR Productions (masterlukasmoyano.com)

> Fecha: 2026-08-12 · Proyecto: `ir-productions-nexus` · Stack: Vite + React 18 + Tailwind + shadcn/ui (dark, circuito)
> Objetivo: mapa completo del sitio, detección de desconexiones y base para el rediseño UI/UX en Penpot.

## 1. Arquitectura y enrutado

| Ruta | Página | Archivo | Estado |
|------|--------|---------|--------|
| `/` | Home (landing) | `frontend/src/pages/Index.tsx` | Activo |
| `/portfolio` | Portafolio profesional | `frontend/src/pages/Portfolio.tsx` | Activo |
| `/inversionistas` | Deck de inversión | `frontend/src/pages/InvestorDeck.tsx` | Activo |
| `/servicios/hpc-builder` | Landing Workstations HPC/IA | `frontend/src/pages/HPCBuilder.tsx` | Activo |
| `/presentacion-cultivatech` | Landing CultivaTech / RAEE | `frontend/src/pages/CultivatechPresentation.tsx` | Activo |
| `/talleres-agro-innovacion` | Landing Talleres Agro-Innovación | `frontend/src/pages/AgroInnovationWorkshops.tsx` | Activo |
| `*` | 404 | `frontend/src/pages/NotFound.tsx` | Activo |

Fuente: `frontend/src/App.tsx`.

## 2. Mapa del Home (`/`) — 13 secciones en orden

| # | Sección | Componente | Anchor (es/en) |
|---|---------|-----------|----------------|
| 1 | Header / menú | `Header.tsx` | — (fijo) |
| 2 | Hero | `HeroSection.tsx` | `#inicio` / `#home` |
| 3 | Filosofía | `PhilosophySection.tsx` | — |
| 4 | Acerca / Equipo | `AboutSection.tsx` | `#equipo` **faltante** |
| 5 | Servicios (líneas de solución) | `ServicesSection.tsx` | `#servicios` / `#services` |
| 6 | Portafolio (preview) | `PortfolioPreview.tsx` | `#portafolio-preview` |
| 7 | Modelo de negocio | `BusinessModelSection.tsx` | — |
| 8 | Proceso | `ProcessSection.tsx` | `#proceso` / `#process` |
| 9 | Impacto | `ImpactSection.tsx` | — |
| 10 | ODS / Impacto | `ImpactODSSection.tsx` | — |
| 11 | Colaboración | `CollaborationSection.tsx` | — |
| 12 | Blog | `BlogSection.tsx` | — |
| 13 | Contacto | `ContactSection.tsx` | `#contacto` / `#contact` |

Fuente: `frontend/src/pages/Index.tsx` + grep de anchors en `components/`.

## 3. Menú de navegación (es/en)

Actual (`Header.tsx:16-35`): Inicio · Servicios · **Portafolio** · **Inversionistas** · Proceso · Equipo · Contacto.

## 4. GAPS y DESCONEXIONES detectadas

### G-1 — "Investigación & Infraestructura" (HPC) fuera del menú ⚠️ ALTA
- Existe la landing `/servicios/hpc-builder` (HPCBuilder.tsx) y la tarjeta de servicio "Workstations HPC/IA Personalizadas" en Servicios.
- El menú NO la lista. Los usuarios no pueden llegar a la página de Investigación & Infraestructura desde la navegación principal.
- La única vía es el enlace de la tarjeta de servicio en `ServicesSection.tsx:163`.

### G-2 — Anchor `#equipo` roto en Home ⚠️ ALTA
- El menú apunta a `#equipo`, pero **ningún componente del Home define `id="equipo"`** (verificado por grep).
- Al hacer clic en "Equipo" desde Home, `document.getElementById("equipo")` retorna `null` → no ocurre nada.
- Nota: `InvestorDeck.tsx:826` sí tiene `id="equipo"`, pero es en `/inversionistas`, no en Home.
- La sección About/Equipo existe (`AboutSection.tsx`) pero sin anchor asignable.

### G-3 — Servicios con destinos inconsistentes ⚠️ MEDIA
- "Kit Agro-IoT CultivaTech" → enlaza **externo** a `https://cultivatech-colombia-frontend.netlify.app` (`ServicesSection.tsx:136`), mientras la app tiene landing propia de CultivaTech en `/presentacion-cultivatech`.
- CTA del Hero "Workstations IA" desplaza a `#servicios` en vez de ir a la landing HPC (`HeroSection.tsx:103`), generando fricción.

### G-4 — Portafolio duplicado / formato ℹ️ MEDIA
- Existen tres superficies de portafolio: preview en Home (`PortfolioPreview.tsx`), página `/portfolio` (Portfolio.tsx) y descargable `portfolio-download.html` (estático, en raíz y copiado a dist).
- Las tarjetas del preview NO enlazan a proyectos (solo a `/portfolio` genérico) → estructura visual sin conexión a detalle.

### G-5 — `#inicio` solo funciona desde Home MEDIA
- "Inicio" desde otra ruta navega a `/` y busca `#inicio` tras 100 ms (`Header.tsx:57-65`); funciona solo si `HeroSection` montó a tiempo. Riesgo intermitente en navegación cruzada.

### G-6 — Rutas internas sin sitemap/robots (a validar) BAJA
- `/_redirects` presente; verificar `public/robots.txt` y `sitemap.xml` en hosting para las 6 rutas canónicas.

### G-7 — Contenido ES/EN incompleto ℹ️ INFO
- En `ServicesSection.tsx` la versión EN omite campos `target` de algunas tarjetas; en Hero el CTA EN "Explore Agro Workshops" yuxtapone idiomas mixtos.

## 5. Design System actual (tokens → para replicar en Penpot)

Fuente: `frontend/src/index.css` (`:root`) + `tailwind.config.ts`.

| Token | Valor HSL | Uso |
|-------|-----------|-----|
| `--background` | `0 0% 8%` | Fondo negro profundo |
| `--card` | `0 0% 12%` | Tarjetas |
| `--primary` | `0 85% 45%` | Rojo profesional (CTA) |
| `--secondary` | `0 0% 82%` | Plata/metálico |
| `--accent` | `42 95% 55%` | Dorado (destacados) |
| `--tech-green` | `175 60% 45%` | Turquesa tech (IoT/HPC) |
| `--agro-green` | `120 45% 40%` | Verde agro |
| `--agro-earth` | `25 35% 45%` | Marrón tierra |
| `--muted` | `0 0% 20%` | Superficies secundarias |
| `--muted-foreground` | `0 0% 65%` | Texto atenuado |
| `--border` | `0 0% 25%` | Bordes |
| `--radius` | `0.75rem` | Radios |
| — | `gradient-primary` (rojo→naranja), `gradient-gold` (dorado), `gradient-tech` (turquesa→azul), `gradient-agro` (verde→marrón) | `text-gradient` / fondos |
| — | `circuit-pattern`, `hero-gradient`, `glow-red` | Texturas decorativas |

Grid: container `max-w 1400px`, paddings 1–3rem; tipografía display `font-black uppercase tracking-tighter`; secciones `py-20/24`.

## 6. Sugerencias UI/UX priorizadas

### P0 (estructural, antes de rediseñar)
1. Añadir **"Investigación & Infraestructura"** al menú (es/en) → `/servicios/hpc-builder`.
2. Crear anchor `id="equipo"` en `AboutSection.tsx` para sanear el enlace del menú.
3. Unificar la jerarquía de portafolio: preview → `/portfolio` → detalle de proyecto (definir ruta de detalle).

### P1 (experiencia)
4. CTA Hero "Workstations IA" → enlazar a `/servicios/hpc-builder` (no a `#servicios`).
5. Decidir destino único del Kit CultivaTech (landing interna vs externo Netlify) y alinear ES/EN.
6. Estados hover/focus accesibles (ratio `--accent` dorado sobre negro OK) y `scroll-mt` en anchors fijos.

### P2 (rendimiento/SEO)
7. `robots.txt` + `sitemap.xml` con las 6 rutas.
8. Auditar imágenes (`assets/*`): `hpc-workstation`, `agro-tech-farmers`, `iot-robot` — conversión WebP/AVIF y lazy-load.

## 7. Próximo paso — Boards en Penpot

Crear archivo de diseño **"IR Productions — Mapa del Sitio"** con:
- Board por página (Home ×13 secciones, Portafolio, Inversionistas ×7, HPC, CultivaTech, Talleres).
- Tokens de color/tipografía del §5 como estilos de referencia.
- Aplicar correcciones P0 en los boards ANTES de implementar, validando el flujo robusto Home→Servicios→Portafolio→Inversionistas→Contacto.

---
Estado: documento vivo — se actualiza tras cada fase de rediseño.