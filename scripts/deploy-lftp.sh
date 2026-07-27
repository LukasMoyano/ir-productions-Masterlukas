#!/bin/bash
# =============================================================================
# IR Productions - RESTAURACIÓN FINAL EN /PUBLIC
# =============================================================================

set -e

# Colores
BLUE='\033[0;34m'
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}🚀 Iniciando Restauración en Carpeta 'public'...${NC}"

# 1. Cargar variables de entorno
SCRIPTS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPTS_DIR/.." && pwd)"

if [ -f "$PROJECT_ROOT/.env" ]; then
    # Cargar variables correctamente (source preserva las comillas y caracteres especiales como $)
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

echo -e "[1/3] Construyendo proyecto..."
cd "$PROJECT_ROOT"
bun run build

# 2. Sincronización con la RAÍZ del servidor...

# Crear archivo de credenciales temporal para evitar problemas de shell
cat <<LNETRC > ~/.lftp_nexus
set ftp:ssl-allow no
set ftp:passive-mode yes
set net:timeout 60
set cmd:fail-exit yes
open -u "$FTP_USER","$FTP_PASSWORD" ftp://$FTP_HOST
LNETRC

lftp -f ~/.lftp_nexus <<EOF
# IR A LA CARPETA public/ (web root en CarrierZone)
echo "Cambiando a la carpeta public/..."
cd public 2>/dev/null || (mkdir public && cd public)

# LIMPIEZA SELECTIVA
echo "Limpiando archivos anteriores en public/..."
rm -f index.html placeholder.svg robots.txt _redirects .htaccess portfolio-download.html favicon.ico
rm -rf assets ODSs favicon_io data .well-known

# SUBIDA A PUBLIC/
echo "Subiendo archivos a public/..."
mirror \
    --reverse \
    --verbose \
    --overwrite \
    --delete \
    --exclude-glob=".git*" \
    --exclude-glob="node_modules" \
    --exclude-glob="public/*" \
    "$BUILD_DIR/" \
    ./

echo "Aplicando permisos..."
chmod -R 755 .
echo "Contenido final:"
ls -la
bye
EOF

# Limpiar credenciales
rm ~/.lftp_nexus

echo -e "[3/3] ${GREEN}🎉 ¡PÁGINA DESPLEGADA EN /public/ !${NC}"
echo -e "Por favor, verifica ahora: https://masterlukasmoyano.com/"
