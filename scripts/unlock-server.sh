#!/bin/bash
# =============================================================================
# IR Productions - DESBLOQUEO DE PERMISOS Y LIMPIEZA
# =============================================================================

set -e

echo "🔓 Iniciando Desbloqueo de Servidor..."

# Cargar variables de entorno
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

if [ -f "$PROJECT_ROOT/.env" ]; then
    export $(grep -v '^#' "$PROJECT_ROOT/.env" | xargs)
else
    echo "❌ Error: No se encontró el archivo .env en $PROJECT_ROOT"
    exit 1
fi

# Validar que las variables necesarias existan
if [ -z "$FTP_HOST" ] || [ -z "$FTP_USER" ] || [ -z "$FTP_PASSWORD" ]; then
    echo "❌ Error: Faltan variables FTP en el archivo .env"
    exit 1
fi

lftp <<EOF
set ftp:ssl-allow no
set ftp:passive-mode yes
set cmd:fail-exit no

open -u "$FTP_USER","$FTP_PASSWORD" ftp://$FTP_HOST

echo "1. Intentando vaciar y eliminar la carpeta conflictiva..."
cd public
rm -rf *
cd ..
rmdir public

echo "2. Forzando visibilidad total en la RAÍZ..."
chmod 755 index.html
chmod -R 755 assets
chmod -R 755 ODSs
chmod 755 favicon.ico
chmod 755 robots.txt

echo "3. Verificación de archivos..."
ls -l index.html

bye
EOF

echo "✅ Operación terminada. Por favor, prueba entrar a http://masterlukasmoyano.com/"
