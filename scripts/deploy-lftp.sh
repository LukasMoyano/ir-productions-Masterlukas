#!/bin/bash
# =============================================================================
# IR Productions Nexus - FTP Deployment Script using lftp
# =============================================================================
# Este script sincroniza el build del proyecto con el servidor FTP
# usando lftp para una transferencia eficiente y confiable.
#
# Uso: ./deploy-lftp.sh
# =============================================================================

set -e  # Salir en caso de error

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# =============================================================================
# CONFIGURACIÓN
# =============================================================================

# Cargar variables de entorno desde .env si existe
if [ -f .env ]; then
    echo -e "${BLUE}Loading environment variables from .env...${NC}"
    export $(cat .env | grep -v '^#' | xargs)
fi

# Configuración FTP (prioriza variables de entorno, luego valores por defecto)
FTP_HOST="${FTP_HOST:-${FTP_SERVER:-ftp.tu-dominio.com}}"
FTP_USER="${FTP_USER:-${FTP_USERNAME:-tu-usuario}}"
FTP_PASS="${FTP_PASS:-${FTP_PASSWORD:-tu-password}}"
FTP_PORT="${FTP_PORT:-21}"
FTP_REMOTE_PATH="${FTP_REMOTE_PATH:-/public_html}"

# Directorios del proyecto
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BUILD_DIR="$PROJECT_ROOT/dist"

# =============================================================================
# FUNCIONES
# =============================================================================

log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

check_dependencies() {
    log_info "Checking dependencies..."
    
    # Intentar encontrar bun
    if command -v bun &> /dev/null; then
        BUN_CMD="bun"
    elif [ -f "$HOME/.bun/bin/bun" ]; then
        BUN_CMD="$HOME/.bun/bin/bun"
    else
        log_error "bun is not installed. Please install bun first."
        exit 1
    fi
    
    if ! command -v lftp &> /dev/null; then
        log_error "lftp is not installed. Please install lftp first."
        exit 1
    fi
    
    log_success "All dependencies are available"
}

check_env() {
    log_info "Checking FTP configuration..."
    
    if [ "$FTP_HOST" = "ftp.tu-dominio.com" ] || [ "$FTP_USER" = "tu-usuario" ] || [ "$FTP_PASS" = "tu-password" ]; then
        log_error "FTP credentials not configured!"
        log_warning "Please create a .env file with your FTP credentials:"
        echo ""
        echo "  FTP_HOST=ftp.tu-dominio.com"
        echo "  FTP_USER=tu-usuario"
        echo "  FTP_PASSWORD=tu-password"
        echo "  FTP_PORT=21"
        echo "  FTP_REMOTE_PATH=/public_html"
        echo ""
        exit 1
    fi
    
    log_success "FTP configuration loaded"
}

build_project() {
    log_info "Building project..."
    
    cd "$PROJECT_ROOT"
    
    # Limpiar build anterior
    if [ -d "$BUILD_DIR" ]; then
        log_info "Cleaning previous build..."
        rm -rf "$BUILD_DIR"
    fi
    
    # Ejecutar build
    if $BUN_CMD run build; then
        log_success "Build completed successfully"
    else
        log_error "Build failed!"
        exit 1
    fi
    
    # Verificar que se creó el build
    if [ ! -d "$BUILD_DIR" ]; then
        log_error "Build directory not created!"
        exit 1
    fi
    
    log_success "Build directory ready: $BUILD_DIR"
}

deploy_via_lftp() {
    log_info "Deploying to FTP server using lftp..."
    log_info "Host: $FTP_HOST:$FTP_PORT"
    log_info "User: $FTP_USER"
    log_info "Remote path: $FTP_REMOTE_PATH"
    
    cd "$PROJECT_ROOT"
    
    # Crear archivo de script lftp para mayor control
    LFTP_SCRIPT=$(mktemp)
    
    cat > "$LFTP_SCRIPT" << EOF
# Configurar lftp para máxima confiabilidad
set ftp:ssl-allow no
set ftp:passive-mode yes
set net:timeout 60
set net:reconnect-interval-base 5
set net:reconnect-interval-max 30
set cmd:fail-exit yes

# Conectar al servidor
open -u "$FTP_USER","$FTP_PASS" ftp://$FTP_HOST:$FTP_PORT

# Cambiar al directorio remoto
cd "$FTP_REMOTE_PATH"

# Sincronizar archivos (espejar directorio local al remoto)
# --reverse: de local a remoto
# --delete: eliminar archivos en remoto que no existen en local
# --exclude: excluir archivos específicos
mirror \
    --reverse \
    --delete \
    --overwrite \
    --exclude-glob=".git*" \
    --exclude-glob="node_modules" \
    --exclude-glob=".env*" \
    --exclude-glob="*.log" \
    --exclude-glob=".DS_Store" \
    "$BUILD_DIR/" \
    ./

# Establecer permisos correctos
chmod -R 755 ./
chmod -R 644 *.html *.css *.js *.json *.png *.jpg *.jpeg *.gif *.svg *.ico *.woff *.woff2 *.ttf *.eot

# Cerrar conexión
bye
EOF

    log_info "Running lftp script..."
    
    # Ejecutar lftp con el script
    if lftp -f "$LFTP_SCRIPT"; then
        log_success "Files uploaded successfully via lftp"
    else
        log_error "lftp upload failed!"
        rm -f "$LFTP_SCRIPT"
        exit 1
    fi
    
    # Limpiar script temporal
    rm -f "$LFTP_SCRIPT"
    
    log_success "Deployment completed!"
}

verify_deployment() {
    log_info "Verifying deployment..."
    
    # Construir URL base
    PROTOCOL="http"
    if [ "$FTP_PORT" = "990" ] || [ "$FTP_PORT" = "443" ]; then
        PROTOCOL="https"
    fi
    
    log_success "You can verify your deployment at: ${PROTOCOL}://${FTP_HOST}/"
}

# =============================================================================
# EJECUCIÓN PRINCIPAL
# =============================================================================

main() {
    echo ""
    echo "============================================================================="
    echo "  IR Productions Nexus - FTP Deployment (lftp)"
    echo "============================================================================="
    echo ""
    
    check_dependencies
    check_env
    build_project
    deploy_via_lftp
    verify_deployment
    
    echo ""
    log_success "🎉 Deployment completed successfully!"
    echo ""
}

# Ejecutar función main
main
