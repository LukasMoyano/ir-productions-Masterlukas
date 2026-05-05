# Plan de Restauración y Consolidación Nexus

Este plan tiene como objetivo resolver la "desconexión" de archivos y servicios en el proyecto masterlukasmoyano.com, consolidando la arquitectura y restaurando la funcionalidad del catálogo HPC y las rutas del sitio.

## 1. Consolidación de Arquitectura y Build
*   **Problema:** El build se genera en `frontend/dist`, se copia manualmente a la raíz `dist/`, y el backend lo busca allí. Hay una carpeta `backend/static` obsoleta.
*   **Acción:** Configurar Vite para que construya directamente en la raíz `dist/` y unificar el origen de datos.
    *   Modificar `frontend/vite.config.ts` para establecer `build.outDir` en `../dist`.
    *   Eliminar el paso de copia manual en el `package.json` de la raíz.

## 2. Restauración del Servicio HPC (Catálogo)
*   **Problema:** `backend/app.py` busca el catálogo en `dist/data/hpc_catalog_mock.json`, pero ese archivo no se incluye en el build porque está en `frontend/src/data/`.
*   **Acción:** 
    *   Mover `frontend/src/data/hpc_catalog_mock.json` a `frontend/public/data/hpc_catalog_mock.json`. Esto asegura que Vite lo incluya en la carpeta `dist/data/`.
    *   Verificar que `backend/app.py` cargue correctamente el archivo desde esa ubicación.

## 3. Conexión del Servicio de Workstations HPC
*   **Problema:** La tarjeta de "Workstations HPC/IA" en `ServicesSection.tsx` no tiene enlace, dejando el servicio inaccesible.
*   **Acción:**
    *   Crear una página básica `HPCBuilder.tsx` en `frontend/src/pages/`.
    *   Registrar la ruta `/servicios/hpc-builder` en `frontend/src/App.tsx`.
    *   Añadir el enlace (`link: "/servicios/hpc-builder"`) en `frontend/src/components/ServicesSection.tsx`.

## 4. Limpieza y Sincronización de Assets
*   **Problema:** Existen activos duplicados y versiones inconsistentes de `index.html`.
*   **Acción:**
    *   Eliminar `backend/static` y `backend/templates` (si no se usan para rutas específicas de Flask) para evitar confusiones.
    *   Asegurar que todas las imágenes en los componentes utilicen rutas relativas consistentes o importaciones de assets de Vite.

## 5. Corrección del Despliegue (Hosting)
*   **Problema:** Los scripts de despliegue están subiendo los archivos a `/public` o `/public_html` mientras que el hosting parece usar la raíz como document root, causando que el sitio no cargue los estilos o archivos correctos.
*   **Acción:**
    *   Actualizar `scripts/deploy-lftp.sh` y `scripts/deploy-total.sh` para limpiar y subir directamente a la raíz (`/`) del servidor FTP, según las notas de `TAREAS_PENDIENTES.md`.

## Pasos de Verificación
1.  Ejecutar `bun run build` desde la raíz y verificar que `dist/data/hpc_catalog_mock.json` exista.
2.  Iniciar el servidor con `python backend/app.py` y probar la API `/api/hpc/catalog`.
3.  Navegar por el sitio localmente y verificar que el enlace de HPC funcione y lleve a la nueva página.
4.  Realizar un despliegue de prueba y verificar la carga de activos en el dominio principal.
