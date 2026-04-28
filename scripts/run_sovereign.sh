#!/bin/bash

# IR Productions - Nexus Sovereign V3
# Limpieza profunda + Anulación de configuración de sistema

PROJECT_ROOT="/mnt/Proyectos4TB/backup_masterlukas/Documents/_-IR_Productions_2025/WwW_EndesarrolloWEB/ir-productions-nexus-main"
cd "$PROJECT_ROOT"

echo "🧹 Limpiando procesos antiguos y bloqueos..."
# Matar ngrok y python de forma agresiva
sudo pkill -9 ngrok
sudo pkill -9 python3
sleep 2

echo "📂 Iniciando Nexus Backend (Flask) en puerto 5000..."
./venv/bin/python3 backend/app.py > nexus_server.log 2>&1 &
SERVER_PID=$!

run_ngrok() {
    while true; do
        echo "🌐 Iniciando túnel ngrok limpio..."
        # Usamos --config /dev/null para ignorar cualquier archivo que esté redirigiendo a plataforma-ir
        ngrok http 5000 --host-header="localhost:5000" --config /dev/null --log=stdout > ngrok.log 2>&1
        echo "⚠️ ngrok se cerró. Reiniciando en 5 segundos..."
        sleep 5
    done
}

run_ngrok &
NGROK_LOOP_PID=$!

echo "⏳ Esperando a que el túnel se establezca..."
sleep 8

# Intentar obtener la URL de los puertos comunes de la API de ngrok
URL=$(curl -s http://localhost:4040/api/tunnels | python3 -c "import sys, json; print(json.load(sys.stdin)['tunnels'][0]['public_url'])" 2>/dev/null)
if [ -z "$URL" ]; then
    URL=$(curl -s http://localhost:4041/api/tunnels | python3 -c "import sys, json; print(json.load(sys.stdin)['tunnels'][0]['public_url'])" 2>/dev/null)
fi

echo ""
echo "================================================================"
echo "🚀 INFRAESTRUCTURA SOBERANA ACTIVA"
echo "================================================================"
echo "🌎 ACCESO PÚBLICO: $URL"
echo "💻 ACCESO LOCAL:   http://localhost:5000"
echo "================================================================"
echo "Presiona CTRL+C para detener."

wait
