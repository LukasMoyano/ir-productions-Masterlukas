#!/bin/bash
# =============================================================================
# IR Productions Nexus - RESTAURACIÓN FINAL EN /PUBLIC
# =============================================================================

set -e

# Colores
BLUE='\033[0;34m'
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}🚀 Iniciando Restauración en Carpeta 'public'...${NC}"

# 1. Credenciales literales
FTP_HOST='masterlukasmoyano.com'
FTP_USER='masterlukasmoyano.com'
FTP_PASS='mASTER@60748$6020'

# 2. Rutas locales
SCRIPTS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPTS_DIR/.." && pwd)"
BUILD_DIR="$PROJECT_ROOT/dist"

echo -e "[1/3] Construyendo proyecto..."
cd "$PROJECT_ROOT"
bun run build

echo -e "[2/3] Sincronizando con la RAÍZ del servidor..."

# Crear archivo de credenciales temporal para evitar problemas de shell
cat <<LNETRC > ~/.lftp_nexus
set ftp:ssl-allow no
set ftp:passive-mode yes
set net:timeout 60
set cmd:fail-exit yes
open -u "$FTP_USER","$FTP_PASS" ftp://$FTP_HOST
LNETRC

lftp -f ~/.lftp_nexus <<EOF
# LIMPIEZA DE RAÍZ
echo "Limpiando raíz del servidor..."
rm index.html || true
rm placeholder.svg || true
rm robots.txt || true
rm -rf assets || true

# SUBIDA A LA RAÍZ
echo "Subiendo archivos a la raíz (.)..."
cd /
mirror \
    --reverse \
    --verbose \
    --overwrite \
    --delete \
    --exclude-glob=".git*" \
    --exclude-glob="node_modules" \
    "$BUILD_DIR/" \
    ./

echo "Aplicando permisos..."
chmod -R 755 .
bye
EOF

# Limpiar credenciales
rm ~/.lftp_nexus

echo -e "[3/3] ${GREEN}🎉 ¡PÁGINA RESTAURADA EN LA RAÍZ!${NC}"
echo -e "Por favor, verifica ahora: http://masterlukasmoyano.com/"
