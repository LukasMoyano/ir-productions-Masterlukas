#!/bin/bash
# =============================================================================
# IR Productions Nexus - DESBLOQUEO DE PERMISOS Y LIMPIEZA
# =============================================================================

set -e

echo "🔓 Iniciando Desbloqueo de Servidor..."

# Credenciales literales
FTP_HOST='masterlukasmoyano.com'
FTP_USER='masterlukasmoyano.com'
FTP_PASS='mASTER@60748$6020'

lftp <<EOF
set ftp:ssl-allow no
set ftp:passive-mode yes
set cmd:fail-exit no

open -u "$FTP_USER","$FTP_PASS" ftp://$FTP_HOST

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
