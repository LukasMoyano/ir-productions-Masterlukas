# 🌍 Guía de Estructura de Hosting Multi-Proyecto

Esta guía detalla cómo organizar y desplegar múltiples proyectos (React, Vite, Estáticos) dentro del mismo dominio `masterlukasmoyano.com` utilizando subdirectorios.

## 📂 Estructura del Servidor (FTP)

Para mantener el orden y evitar conflictos, la estructura en la raíz del servidor debe ser la siguiente:

```text
/ (Raíz del Servidor)
├── index.html                # Proyecto Principal
├── assets/                   # Assets del Proyecto Principal
├── .htaccess                 # Configuración Global
│
├── /proyecto-2/              # SUBDIRECTORIO para Proyecto 2
│   ├── index.html
│   ├── assets/
│   └── .htaccess             # Configuración específica de Proyecto 2
│
└── /proyecto-3/              # SUBDIRECTORIO para Proyecto 3
    ├── index.html
    └── assets/
```

---

## 🛠️ Configuración de Proyectos (Vite / React)

Cuando despliegas una aplicación en un subdirectorio, debes informar a la aplicación sobre su nueva "casa".

### 1. Cambiar la Base en Vite
En el archivo `vite.config.ts` del proyecto que irá al subdirectorio:

```typescript
export default defineConfig({
  base: '/nombre-del-subdirectorio/', // Ejemplo: '/proyecto-2/'
  plugins: [react()],
  // ... resto de la configuración
})
```

### 2. Configurar el Router (React Router)
Si usas `react-router-dom`, debes definir el `basename`:

```tsx
<BrowserRouter basename="/nombre-del-subdirectorio">
  <Routes>
    {/* ... tus rutas */}
  </Routes>
</BrowserRouter>
```

---

## 🔗 Configuración del Servidor (.htaccess)

El archivo `.htaccess` es vital para que las rutas de React funcionen (evitar errores 404 al recargar).

### Para el Proyecto Principal (en la Raíz)
Crea un `.htaccess` en la raíz con:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Si el archivo o carpeta existe, úsalo directamente
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # De lo contrario, redirige todo al index.html
  RewriteRule ^ index.html [L]
</IfModule>
```

### Para Proyectos en Subdirectorios
Cada subdirectorio **DEBE** tener su propio `.htaccess` interno:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /nombre-del-subdirectorio/
  
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]
  
  RewriteRule ^ index.html [L]
</IfModule>
```

---

## 🚀 Pasos para Desplegar un Nuevo Proyecto

1. **Preparar:** Modifica `vite.config.ts` con el `base` correspondiente.
2. **Construir:** Ejecuta `npm run build` o `bun run build`.
3. **Subir:**
   - Crea la carpeta `/nombre-del-subdirectorio/` en el FTP.
   - Sube el contenido de la carpeta `dist/` local a esa carpeta remota.
4. **Verificar:** Accede a `masterlukasmoyano.com/nombre-del-subdirectorio/`.

---

## ⚠️ Notas Importantes
- **Mayúsculas/Minúsculas:** El servidor Linux es sensible. `/Proyecto` no es lo mismo que `/proyecto`. Usa siempre minúsculas.
- **Limpieza:** Antes de un nuevo despliegue en un subdirectorio, borra los archivos viejos de esa carpeta específica para evitar archivos "huérfanos".
- **Permisos:** Asegúrate de que las carpetas tengan permisos `755` y los archivos `644`.
