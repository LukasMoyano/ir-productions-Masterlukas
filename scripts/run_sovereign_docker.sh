#!/bin/bash

# Script para arrancar IR Productions v2 con Docker
# Autor: Gemini CLI
# Fecha: Mayo 2026

echo "🚀 Iniciando despliegue de IR Productions v2..."

# 1. Asegurarse de estar en el directorio correcto
cd "$(dirname "$0")"

# 2. Verificar si la red existe
if ! docker network inspect ir_productions_nexus_nexus_network >/dev/null 2>&1; then
    echo "🌐 Creando red ir_productions_nexus_nexus_network..."
    docker network create ir_productions_nexus_nexus_network
fi

# 3. Construir y levantar contenedores
echo "📦 Construyendo y arrancando contenedores..."
if docker compose version >/dev/null 2>&1; then
    docker compose up -d --build
elif docker-compose version >/dev/null 2>&1; then
    docker-compose up -d --build
else
    echo "❌ Error: No se encontró 'docker compose' ni 'docker-compose'. Por favor, instálalo."
    exit 1
fi

# 4. Verificar estado
echo "🔍 Verificando estado de los servicios..."
docker ps --filter "name=nexus_productions_v2"

echo "✅ ¡Proyecto arriba!"
echo "📍 Acceso local: http://localhost:5055"
echo "🌐 Configuración NPM recomendada: nexus_app:5000 (dentro de la red Docker)"
