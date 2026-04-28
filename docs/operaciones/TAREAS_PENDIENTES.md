# 📋 Bitácora de Control Nexus - Estado Actual

## 📝 Resumen de la Situación (Abril 2026)
Se identificó un conflicto de despliegue en el hosting CarrierZone. El sitio web está sirviendo archivos obsoletos desde la raíz (`/`) mientras que los archivos actualizados están confinados en la subcarpeta `/public`. Esto causa un renderizado "crudo" porque el `index.html` de la raíz apunta a activos inexistentes o versiones inconsistentes.

## ✅ Hallazgos Técnicos (Auditoría de Directorios)
- **Directorio Raíz (`/`):** Contiene un `index.html` residual de un despliegue fallido. El servidor web prioriza este archivo.
- **Directorio `/public`:** Contiene el build moderno de React, pero es inaccesible desde el dominio principal.
- **Error 404/403:** Conflictos de permisos y rutas de activos (ODS).

## 🚀 Plan de Acción Inmediato
1.  **Limpieza Profunda:** Eliminar el `index.html` y la carpeta `assets` de la raíz del FTP.
2.  **Redirección de Despliegue:** Configurar el script para que entregue los archivos directamente en la raíz (`.`), sobreescribiendo el contenido viejo.
3.  **Eliminación de Residuos:** Borrar la carpeta `/public` creada por error para evitar confusiones futuras.

## 🛠️ Informe para Especialista Externo
Si un desarrollador senior revisa esto, debe saber que:
- El proyecto usa **Vite + Tailwind**.
- El hosting no soporta `public_html`, usa la raíz como document root.
- Se ha corregido la interpretación de caracteres especiales ($) en los scripts de bash mediante comillas simples.
- El servidor Flask local está sincronizado con la carpeta `dist/`.
