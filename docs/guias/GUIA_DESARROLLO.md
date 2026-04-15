# Guía de Desarrollo y Estado del Proyecto

Este documento resume el estado actual del proyecto, los logros de la sesión y las instrucciones para continuar con el desarrollo.

## 1. Ubicación del Proyecto

La carpeta raíz del proyecto se encuentra en:
` /mnt/Proyectos4TB/backup_masterlukas/Documents/_-IR_Productions_2025/WwW_EndesarrolloWEB/ir-productions-nexus-main`

## 2. Cómo Ejecutar el Proyecto Localmente

Para trabajar en el proyecto en tu entorno local, sigue estos pasos desde una terminal en la carpeta raíz:

1.  **Instalar dependencias** (solo es necesario hacerlo la primera vez o si se añaden nuevas librerías):

    ```bash
    bun install
    ```

2.  **Iniciar el servidor de desarrollo:**

    ```bash
    bun run dev
    ```

3.  **Abrir en el navegador:**
    Abre la URL que aparece en la terminal (generalmente `http://localhost:5173`).

## 3. Resumen de Cambios y Estado Actual (25 de Noviembre de 2025)

- **Reestructuración de la Presentación (`/presentacion-cultivatech`):** Se reconstruyó por completo la página basándose en un guion detallado de 10 tarjetas, unificando la narrativa, los datos y el storytelling.

- **Integración de Datos Clave:** Se añadieron y verificaron datos cruciales sobre el e-waste en Colombia (tasa de recolección del 1%, 388kt generadas) y a nivel global. Se reintegró el desglose de materiales valiosos por tonelada (Oro, Plata, etc.) y su valor de mercado.

- **Unificación de Estilos Visuales:** Se aplicó el sistema de diseño de la página de inicio a la página de la presentación. Esto incluye:
  - Layout de secciones a ancho completo.
  - Fondo con el patrón `circuit-pattern`.
  - Efectos visuales en las tarjetas como `tech-border` (borde de cristal) y `hover-lift` (efecto de elevación).
  - Estructura interna de las tarjetas mejorada para mayor coherencia.

- **Solución de Errores Críticos:**
  - Se solucionó un error de enrutamiento en producción (Netlify) creando el archivo `public/_redirects`. Esto es vital para que las sub-páginas funcionen correctamente una vez desplegadas.
  - Se corrigieron múltiples errores de renderizado en React que impedían la visualización de la página durante el desarrollo.

- **Gestión del Repositorio:** Todos los cambios mencionados fueron consolidados en un `commit` descriptivo y **subidos al repositorio de GitHub**. El proyecto está actualizado.

## 4. Flujo de Trabajo para Continuar

1.  **Editar:** Realiza cambios en los archivos fuente, principalmente dentro de la carpeta `src/`.
2.  **Visualizar:** Con el servidor de desarrollo activo (`bun run dev`), los cambios se reflejarán automáticamente en el navegador.
3.  **Guardar y Subir:** Cuando estés listo para guardar un conjunto de cambios, usa el siguiente ciclo en la terminal:

    ```bash
    # 1. Añade todos los archivos modificados
    git add .

    # 2. Crea un punto de guardado con un mensaje descriptivo
    git commit -m "Un mensaje que describa tu cambio"

    # 3. Sube tus cambios a GitHub
    git push origin main
    ```

## 5. Despliegue Automático (Nuevo)

Se ha configurado un flujo de trabajo de GitHub Actions para desplegar automáticamente los cambios al servidor FTP.

- **Archivo de configuración:** `.github/workflows/deploy-ftp.yml`
- **Funcionamiento:** Cada vez que se hace un `git push origin main`, GitHub compila el proyecto (`bun run build`) y sube el contenido de la carpeta `dist/` al servidor FTP definido en los secretos del repositorio.
- **Requisitos:** Debes tener configurados los secretos `FTP_SERVER`, `FTP_USERNAME` y `FTP_PASSWORD` en la configuración del repositorio en GitHub.

## 6. Próximos Pasos Sugeridos

- Verificar que el certificado SSL se haya generado correctamente (archivo de validación en su lugar).
- Revisar el contenido y las imágenes de la nueva presentación.
