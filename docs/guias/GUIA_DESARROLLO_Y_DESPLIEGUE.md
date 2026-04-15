# 🚀 Guía de Desarrollo y Despliegue - IR Productions Nexus

Este documento resume las últimas actualizaciones y proporciona las instrucciones necesarias para continuar con el desarrollo y despliegue del proyecto **masterlukasmoyano.com** de forma local.

---

## 🛠️ 1. Cambios Recientes (Marzo 2026)

### **Seguridad y Git**
- **Protección de Credenciales**: El archivo `.gitignore` ha sido configurado para excluir archivos sensibles (`.key`, `.crt`, `.pem`, `.env`). **NO** los elimines de esa lista.
- **Sincronización**: Todo el código actual ha sido subido a GitHub (`origin/main`).
- **Estructura Flask**: Se integró un backend base en Python/Flask (`app.py`) con sus respectivas rutas y carpetas de plantillas.

### **Frontend**
- **Contacto**: Se actualizaron los emails a `managementandplanning@masterlukasmoyano.com`.
- **Integración CultivaTech**: El botón del Kit Agro-IoT ahora apunta correctamente a la versión desplegada en Netlify.

---

## 📦 2. Requisitos de Sistema (Instalación Local)

Para ejecutar el despliegue por FTP desde tu terminal, asegúrate de tener instaladas estas herramientas:

### **A. Instalar LFTP (Sincronizador FTP)**
```bash
sudo apt update && sudo apt install lftp -y
```

### **B. Instalar Bun (Runtime de JS/Build)**
```bash
curl -fsSL https://bun.sh/install | bash
# Después de instalar, recarga tu terminal:
source ~/.bashrc
```

---

## 🌐 3. Configuración de Despliegue (FTP Claro Cloud)

El script `deploy-lftp.sh` requiere un archivo de configuración secreto llamado `.env`.

### **Paso 1: Crear el archivo .env**
En la raíz del proyecto, ejecuta este comando reemplazando los valores en **MAYÚSCULAS** con tus datos de Claro Cloud:

```bash
cat > .env << EOF
FTP_HOST=ftp.masterlukasmoyano.com
FTP_USER=TU_USUARIO_FTP
FTP_PASS=TU_CONTRASEÑA_FTP
FTP_PORT=21
FTP_REMOTE_PATH=/public_html
EOF
```

### **Paso 2: Ejecutar el Despliegue**
Una vez configurado el `.env`, simplemente corre el script:

```bash
./deploy-lftp.sh
```

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
