# ==========================================
# ETAPA 1: Construcción del Frontend (React)
# ==========================================
FROM oven/bun:1.1 as frontend-builder

WORKDIR /app/frontend
COPY frontend/package.json frontend/bun.lock* ./
RUN bun install

COPY frontend/ .
RUN bun run build

# ==========================================
# ETAPA 2: Entorno de Ejecución (Flask)
# ==========================================
FROM python:3.11-slim-bookworm as runtime

# Evitar prompts de apt y configurar Python
ENV DEBIAN_FRONTEND=noninteractive \
    PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1

WORKDIR /app

# Instalar dependencias de sistema necesarias para Playwright y utilidades
# Instalamos fuentes estándar de Debian para evitar errores de Playwright
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    libnss3 \
    libnspr4 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libdrm2 \
    libxkbcommon0 \
    libxcomposite1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxrandr2 \
    libgbm1 \
    libpango-1.0-0 \
    libcairo2 \
    libasound2 \
    libxshmfence1 \
    libglu1-mesa \
    fonts-liberation \
    libvpx7 \
    libevent-2.1-7 \
    libopus0 \
    && rm -rf /var/lib/apt/lists/*

# Copiar requerimientos e instalar dependencias de Python
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Instalar navegadores de Playwright (solo el binario, las deps ya las pusimos arriba)
RUN playwright install chromium

# Copiar el build del frontend a la carpeta dist (como espera app.py)
COPY --from=frontend-builder /app/dist ./dist

# Copiar el código del backend
COPY backend/ ./backend

# Exponer el puerto de Flask
EXPOSE 5000

# Variables de entorno por defecto
ENV FLASK_DEBUG=False \
    PORT=5000

# Comando para iniciar con Gunicorn (Producción)
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "--chdir", "backend", "app:app", "--workers", "4", "--timeout", "120"]
