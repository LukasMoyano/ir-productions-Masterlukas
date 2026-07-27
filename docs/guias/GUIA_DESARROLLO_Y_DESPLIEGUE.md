# 🚀 Guía de Desarrollo y Despliegue - IR Productions

Este documento resume las últimas actualizaciones y proporciona las instrucciones necesarias para continuar con el desarrollo y despliegue del proyecto **masterlukasmoyano.com** de forma local.

---

## 🛠️ 1. Infraestructura Soberana (Mayo 2026)

### **Docker & Orquestación**
- **Arquitectura**: El proyecto se ha migrado a contenedores. Frontend y Backend conviven en una imagen unificada basada en Debian Bookworm.
- **Red**: Se utiliza la red `ir_productions_nexus_nexus_network` para comunicación interna.
- **Servidor de Producción**: Gunicorn gestiona las peticiones Flask en el puerto 5000 (mapeado al 5055).

---

## 📦 2. Requisitos de Sistema (Instalación Local)

### **A. Docker y Docker Compose**
Es la única dependencia necesaria en el host para poner el proyecto al aire con un solo clic.

### **B. Script de Lanzamiento Rápido**
Ejecuta el siguiente comando para construir e iniciar todo el stack:
```bash
./scripts/run_sovereign_docker.sh
```

---

## 🌐 3. Configuración de Salida (Nginx Proxy Manager)

Para exponer el proyecto al exterior de forma segura:

1.  **Host Proxy**: Apuntar el dominio a la IP del host y el puerto `5055`.
2.  **SSL**: Generar certificado Let's Encrypt mediante el panel de NPM (`http://192.168.0.7:81`).
3.  **Seguridad**: Activar "Block Common Exploits" y "Force SSL".

**¿Qué hace este script?**
1. Limpia builds anteriores.
2. Compila el proyecto React con `bun run build`.
3. Sincroniza la carpeta `dist/` con tu servidor FTP (solo sube lo que cambió).
4. Ajusta permisos de archivos en el servidor automáticamente (755 para carpetas, 644 para archivos).

---

## 📂 4. Estructura de Archivos Clave

| Archivo | Propósito |
| :--- | :--- |
| `deploy-lftp.sh` | Script automatizado de despliegue (Usar este). |
| `app.py` | Servidor Flask (Backend). |
| `src/components/` | Componentes de la interfaz React. |
| `TAREAS_PENDIENTES.md` | Hoja de ruta para el E-commerce y Scrapers. |
| `.gitignore` | Lista de archivos protegidos. |

---

## 💡 Notas Adicionales
- Si el FTP falla por tiempo de espera (timeout), el script está configurado para reintentar automáticamente.
- El servidor FTP de Claro Cloud puede requerir que `FTP_REMOTE_PATH` sea `/` o `/www` en lugar de `/public_html`. Verifica esto en tu panel de control si los archivos no aparecen en la web.

---
**Documentado por:** Gemini CLI
**Fecha:** 12 de Marzo, 2026
