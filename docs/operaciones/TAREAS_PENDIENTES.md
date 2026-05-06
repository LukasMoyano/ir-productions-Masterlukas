# 📋 Bitácora de Control Nexus - Estado Actual

## 📝 Resumen de la Situación (Abril 2026)
Se identificó un conflicto de despliegue en el hosting CarrierZone. El sitio web está sirviendo archivos obsoletos desde la raíz (`/`) mientras que los archivos actualizados están confinados en la subcarpeta `/public`. Esto causa un renderizado "crudo" porque el `index.html` de la raíz apunta a activos inexistentes o versiones inconsistentes.

## ✅ Hallazgos Técnicos (Auditoría de Directorios)
- **Infraestructura Soberana (Mayo 2026):** Se implementó Docker como capa de abstracción. El proyecto ahora corre en un contenedor aislado (`nexus_productions_v2`) integrado en la red `ir_productions_nexus_nexus_network`.
- **Salida vía Proxy:** Nginx Proxy Manager (NPM) gestiona la salida al aire en el puerto 5055, permitiendo certificados SSL automáticos y gestión de hosts múltiples.

## 🚀 Plan de Acción Completado (Mayo 2026)
1.  **Dockerización Multietapa:** Frontend (Bun) + Backend (Python/Flask/Playwright) unificados en una imagen.
2.  **Script de "Un Clic":** Creación de `scripts/run_sovereign_docker.sh` para despliegue automatizado.
3.  **Integración NPM:** Configuración de Host Proxy para enrutamiento inteligente.

## 🛠️ Informe para Especialista Externo
- **Arquitectura:** Docker + Docker Compose (Infraestructura Soberana).
- **Stack:** Vite (React) + Tailwind / Python (Flask) + Playwright.
- **Red:** Integrado en `ir_productions_nexus_nexus_network`.
- **Despliegue:** El servidor Flask sirve la carpeta `dist/`. La salida se gestiona mediante Nginx Proxy Manager en el puerto 5055.
