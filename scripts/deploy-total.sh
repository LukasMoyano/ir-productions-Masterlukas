#!/bin/bash
# =============================================================================
# IR Productions Nexus - DESPLIEGUE EN CARPETA /PUBLIC (CORRECCIÓN CFN)
# =============================================================================

set -e

# Colores
BLUE='\033[0;34m'
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}🚀 Iniciando Despliegue en /public...${NC}"

# Credenciales
FTP_HOST='masterlukasmoyano.com'
FTP_USER='masterlukasmoyano.com'
FTP_PASS='mASTER@60748$6020'

# Rutas locales
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BUILD_DIR="$PROJECT_ROOT/dist"

echo -e "[1/3] Construyendo proyecto con rutas relativas..."
cd "$PROJECT_ROOT"
bun run build

if [ ! -d "$BUILD_DIR" ]; then
    echo -e "${RED}❌ Error: No se encontró la carpeta de construcción en $BUILD_DIR${NC}"
    exit 1
fi

echo -e "[2/3] Sincronizando con la RAÍZ del servidor..."

lftp -u "$FTP_USER","$FTP_PASS" ftp://$FTP_HOST <<EOF
set ftp:ssl-allow no
set ftp:passive-mode yes
set net:timeout 60

# 1. LIMPIEZA DE LA RAÍZ
echo "Limpiando archivos en la RAÍZ..."
set cmd:fail-exit no
rm -rf assets
rm -rf ODSs
rm -rf favicon_io
rm -rf public
rm index.html
rm favicon.ico
rm placeholder.svg
rm robots.txt
rm _redirects
rm .htaccess
set cmd:fail-exit yes

# 2. SUBIDA A LA RAÍZ
echo "Subiendo archivos nuevos..."
mirror --reverse --verbose --overwrite --delete \
    --exclude-glob=".git*" \
    --exclude-glob="node_modules" \
    "$BUILD_DIR/" ./

echo "Aplicando permisos..."
chmod -R 755 .

bye
EOF

echo -e "[3/3] ${GREEN}🎉 ¡DESPLIEGUE EN /PUBLIC COMPLETADO!${NC}"
echo -e "Verifica ahora en: http://masterlukasmoyano.com/"
