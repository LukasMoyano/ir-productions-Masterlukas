#!/bin/bash

# IR Productions - Sovereign V4
# Corrección de configuración ngrok + Persistencia

PROJECT_ROOT="/mnt/Proyectos4TB/backup_masterlukas/Documents/_-IR_Productions_2025/WwW_EndesarrolloWEB/ir-productions-nexus-main"
cd "$PROJECT_ROOT"

echo "🧹 Limpiando procesos antiguos..."
sudo pkill -9 ngrok
sudo pkill -9 python3
# Limpiar jobs en segundo plano del shell actual
kill $(jobs -p) 2>/dev/null
sleep 2

echo "📂 Iniciando Backend (Flask) en puerto 5000..."
./venv/bin/python3 backend/app.py > nexus_server.log 2>&1 &
SERVER_PID=$!

run_ngrok() {
    while true; do
        echo "🌐 Iniciando túnel ngrok..."
        # Eliminamos --config /dev/null para que use tu config real (~/.config/ngrok/ngrok.yml)
        # y mantenemos el host-header para los estilos (aunque sea deprecated, funciona mejor que nada)
        ngrok http 5000 --host-header="localhost:5000" --log=stdout > ngrok.log 2>&1
        echo "⚠️ ngrok se cerró. Reiniciando en 5 segundos..."
        sleep 5
    done
}

run_ngrok &
NGROK_LOOP_PID=$!

echo "⏳ Esperando a que el túnel se establezca..."
sleep 10

# Intentar obtener la URL de la API local de ngrok (puertos 4040 o 4041)
URL=$(curl -s http://localhost:4040/api/tunnels | python3 -c "import sys, json; try: print(json.load(sys.stdin)['tunnels'][0]['public_url']); except: pass" 2>/dev/null)
if [ -z "$URL" ]; then
    URL=$(curl -s http://localhost:4041/api/tunnels | python3 -c "import sys, json; try: print(json.load(sys.stdin)['tunnels'][0]['public_url']); except: pass" 2>/dev/null)
fi

echo ""
echo "================================================================"
echo "🚀 INFRAESTRUCTURA SOBERANA ACTIVA (V4)"
echo "================================================================"
if [ -z "$URL" ]; then
    echo "⚠️ No se pudo detectar la URL automáticamente."
    echo "Revisa ngrok.log para ver el error."
else
    echo "🌎 ACCESO PÚBLICO: $URL"
fi
echo "💻 ACCESO LOCAL:   http://localhost:5000"
echo "================================================================"
echo "Presiona CTRL+C para detener (NO USES CTRL+Z)."

wait
