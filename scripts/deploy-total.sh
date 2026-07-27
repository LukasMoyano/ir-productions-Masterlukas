#!/bin/bash
# =============================================================================
# IR Productions - DESPLIEGUE EN CARPETA /PUBLIC (CORRECCIÓN CFN)
# =============================================================================

set -e

# Colores
BLUE='\033[0;34m'
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}🚀 Iniciando Despliegue en /public...${NC}"

# Cargar variables de entorno
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

if [ -f "$PROJECT_ROOT/.env" ]; then
    set -a
    source "$PROJECT_ROOT/.env"
    set +a
else
    echo -e "${RED}❌ Error: No se encontró el archivo .env en $PROJECT_ROOT${NC}"
    exit 1
fi

# Validar que las variables necesarias existan
if [ -z "$FTP_HOST" ] || [ -z "$FTP_USER" ] || [ -z "$FTP_PASSWORD" ]; then
    echo -e "${RED}❌ Error: Faltan variables FTP en el archivo .env${NC}"
    exit 1
fi

BUILD_DIR="$PROJECT_ROOT/dist"

echo -e "[1/3] Construyendo proyecto con rutas relativas..."
cd "$PROJECT_ROOT"
bun run build

if [ ! -d "$BUILD_DIR" ]; then
    echo -e "${RED}❌ Error: No se encontró la carpeta de construcción en $BUILD_DIR${NC}"
    exit 1
fi

echo -e "[2/3] Sincronizando con la RAÍZ del servidor..."

lftp -u "$FTP_USER","$FTP_PASSWORD" ftp://$FTP_HOST <<EOF
set ftp:ssl-allow no
set ftp:passive-mode yes
set net:timeout 60

# IR A LA CARPETA public/ (web root en CarrierZone)
echo "Cambiando a la carpeta public/..."
cd public 2>/dev/null || (mkdir public && cd public)

# 1. LIMPIEZA SELECTIVA
echo "Limpiando archivos antiguos en public/..."
set cmd:fail-exit no
rm -rf assets
rm -rf ODSs
rm -rf favicon_io
rm -rf data
rm -rf .well-known
rm -f index.html
rm -f favicon.ico
rm -f placeholder.svg
rm -f robots.txt
rm -f _redirects
rm -f .htaccess
rm -f portfolio-download.html
set cmd:fail-exit yes

# 2. DESPLIEGUE EN public/
echo "Subiendo archivos nuevos a public/..."
mirror --reverse --verbose --overwrite --delete \
    --exclude-glob=".git*" \
    --exclude-glob="node_modules" \
    "$BUILD_DIR/" ./

echo "Aplicando permisos..."
chmod -R 755 .

bye
EOF

echo -e "[3/3] ${GREEN}🎉 ¡DESPLIEGUE EN /public/ COMPLETADO!${NC}"
echo -e "Verifica ahora en: https://masterlukasmoyano.com/"
