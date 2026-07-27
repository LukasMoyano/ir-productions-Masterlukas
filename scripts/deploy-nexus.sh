#!/bin/bash
# Script de Despliegue Seguro - IR Productions
set -e

PROJECT_ROOT="/mnt/Proyectos4TB/backup_masterlukas/Documents/_-IR_Productions_2025/WwW_EndesarrolloWEB/ir-productions-nexus-main"
FRONTEND_DIR="$PROJECT_ROOT/frontend"
LFTP_SCRIPT="/home/masterlukasirproductions/deploy_nexus.lftp"

echo "=========================================="
echo "🚀 INICIANDO DESPLIEGUE SEGURO - IR Productions"
echo "=========================================="

echo "Step 1: 🔍 Verificando integridad de tipos TypeScript..."
cd "$FRONTEND_DIR"
bunx tsc --noEmit || { 
    echo "❌ ERROR: Errores de tipo detectados. Abortando despliegue."
    exit 1 
}
echo "✅ TypeScript verificado sin errores"

echo "Step 2: 📦 Generando build de producción..."
bun run build

echo "Step 3: ✅ Verificando archivos generados..."
if [ ! -f "$PROJECT_ROOT/dist/index.html" ]; then
    echo "❌ ERROR: index.html no encontrado en dist/"
    exit 1
fi

JS_COUNT=$(ls -1 "$PROJECT_ROOT/dist/assets/"*.js 2>/dev/null | wc -l)
CSS_COUNT=$(ls -1 "$PROJECT_ROOT/dist/assets/"*.css 2>/dev/null | wc -l)
PDF_COUNT=$(ls -1 "$PROJECT_ROOT/dist/assets/docs/"*.pdf 2>/dev/null | wc -l)

echo "   📄 Archivos JS: $JS_COUNT"
echo "   🎨 Archivos CSS: $CSS_COUNT"
echo "   📑 PDFs: $PDF_COUNT"

if [ "$JS_COUNT" -eq 0 ]; then
    echo "❌ ERROR: No se generaron archivos JS"
    exit 1
fi

echo "Step 4: 📋 Verificando referencia en index.html..."
REFERENCE=$(grep -o 'assets/index-[^"]*\.js' "$PROJECT_ROOT/dist/index.html" | head -1)
echo "   📌 Referencia JS: $REFERENCE"

if [ ! -f "$PROJECT_ROOT/dist/assets/$REFERENCE" ]; then
    echo "❌ ERROR: El archivo referenciado no existe"
    exit 1
fi

echo "Step 5: 🚀 Iniciando carga FTP..."
lftp -f "$LFTP_SCRIPT"

echo "=========================================="
echo "✅ DESPLIEGUE COMPLETADO CON ÉXITO"
echo "=========================================="
