# Plan de Restauración y Consolidación

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

## 6. Soberanía Tecnológica y Dockerización (Mayo 2026)
*   **Estado:** Completado. El proyecto ya no depende de configuraciones locales de Python/Bun, sino que está totalmente encapsulado.
*   **Acción:** 
    *   Implementación de `Dockerfile` multietapa (Frontend Builder + Runtime Python).
    *   Orquestación con `docker-compose.yml` para persistencia y reinicio automático.
    *   Aislamiento de red mediante `ir_productions_nexus_nexus_network`.
*   **Exposición:** El servicio se sirve en `http://192.168.0.7:5055` y se administra mediante Nginx Proxy Manager en la IP `192.168.0.7:81`.

## Pasos de Verificación Finalizados
1.  Construcción de imagen sin errores (Base Debian Bookworm).
2.  Arranque del contenedor `nexus_productions_v2` verificado con `docker ps`.
3.  Acceso local exitoso al puerto 5055.
4.  Configuración de Proxy Host en NPM lista para tráfico externo.
