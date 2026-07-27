#!/bin/bash
# IR Productions - Build Script
# ====================================
# Compila Tailwind CSS standalone para Flask

set -e

echo "🔨 IR Productions - Building CSS..."

# Verificar si tailwindcss CLI está instalado
if ! command -v tailwindcss &> /dev/null
then
    echo "⚠️  Tailwind CSS CLI no encontrado. Instalando..."
    npm install -g tailwindcss
fi

# Compilar CSS
echo "📦 Compilando Tailwind CSS..."
tailwindcss -i ./static/css/input.css -o ./static/css/styles.css --minify

echo "✅ Build completado exitosamente!"
echo "📁 CSS generado: static/css/styles.css"
