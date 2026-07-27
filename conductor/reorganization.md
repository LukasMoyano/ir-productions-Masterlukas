# Plan de Reorganización y Estructuración Visual (IR Productions)

## 1. Análisis de la Situación Actual
El proyecto presenta una arquitectura híbrida en transición (Vite/React + Python/Flask) con responsabilidades mezcladas:
- **Documentación dispersa:** Varios `.md` en la raíz.
- **Assets duplicados:** En `src/assets/`, `static/assets/` y `public/`.
- **Lógica mezclada:** Configuraciones de React conviven con Flask en la raíz.
- **Scripts sueltos:** `build.sh`, `deploy-lftp.sh`, etc.

## 2. Propuesta de Arquitectura (Modelo de Árbol)

```text
ir-productions-nexus-main/
├── docs/                      # 📚 Documentación consolidada
│   ├── arquitectura/          
│   ├── guias/                 
│   └── operaciones/           
├── frontend/                  # 🎨 Interfaz de Usuario (React + Vite)
│   ├── public/                # Assets estáticos puros
│   ├── src/
│   │   ├── core/              # Config global, utilidades
│   │   ├── design-system/     # (El "Stitch") Componentes UI base y tema global
│   │   ├── projects/          # 🌟 Sub-proyectos con identidades visuales
│   │   │   ├── cultivatech/   # Estilos/componentes de CultivaTech (Verde/Tierra)
│   │   │   ├── hpc/           # Estilos/componentes de HPC (Cyberpunk)
│   │   │   └── agro-tech/     
│   │   ├── pages/             # Vistas de la página principal
│   │   └── assets/            # Assets unificados y optimizados
│   ├── package.json           
│   └── vite.config.ts
├── backend/                   # ⚙️ Servidor Flask
│   ├── api/                   # Rutas REST
│   ├── templates/             # Plantillas Jinja2
│   ├── translations/          # i18n
│   ├── static/                # Archivos generados por React build
│   ├── app.py                 
│   └── requirements.txt
├── scripts/                   # 🛠️ Automatización
│   ├── build.sh
│   ├── deploy-lftp.sh
│   └── deploy.js
├── config/                    # ⚙️ Configuraciones generales
│   ├── eslint.config.js
│   ├── postcss.config.js
│   ├── tailwind.config.ts
│   └── tsconfig.json
├── .env.example
└── .gitignore
```

## 3. Estrategia de Estilos e Identidades Visuales ("Stitch")

1. **Tokens de Diseño Globales:**
   - Ubicados en `frontend/src/design-system/`.
   - Paleta corporativa de *IR Productions* (`#1A1C20`, `#00E5FF`, `#FFAB00`).
   - Componentes UI base que heredan estos tokens.

2. **Sobrescritura por Proyecto (`frontend/src/projects/*/`):**
   - **CultivaTech:** Tema que sobrescribe variables con paletas orgánicas (`#388E3C`, `#5D4037`).
   - **Workstations HPC:** Tema industrial y Cyberpunk Andino.
   - Aislamiento total de estilos, animaciones y assets por carpeta de proyecto.

## 4. Fases de Implementación
1. **Limpieza:** Mover `.md` a `docs/`. Deduplicar assets dejando una única fuente de verdad.
2. **Reestructuración:** Crear `frontend/`, `backend/`, `scripts/`, `config/` y mover los archivos correspondientes. Actualizar paths de importación.
3. **Aislamiento Visual:** Configurar la base en `design-system/` e inicializar los temas en las carpetas de `projects/`.
4. **Build y Enlace:** Ajustar `vite.config.ts` para que compile dentro de `backend/static/` de modo que Flask sirva el frontend correctamente.
