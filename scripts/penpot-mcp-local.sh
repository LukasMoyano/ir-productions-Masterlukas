#!/bin/bash
# =============================================================================
# Penpot MCP - Modo LOCAL (respaldo)
# Inicia el servidor MCP y el servidor del plugin de Penpot en localhost.
#
# Requisitos: Node.js v22+ (npx). PENPOT_MCP_SERVER_PORT=4401 (MCP),
# PENPOT_MCP_WEBSOCKET_PORT=4402 (plugin), plugin web en :4400.
#
# Uso:
#   1) Ejecuta:  ./scripts/penpot-mcp-local.sh
#      (deja la terminal abierta)
#   2) Abre https://design.penpot.app -> cualquier archivo de diseño
#   3) Plugins -> Load from URL -> http://localhost:4400/manifest.json
#   4) Ejecuta el plugin y pulsa "Connect to MCP server"
#   5) Conecta tu cliente a http://localhost:4401/mcp
#
# Detener: Ctrl+C (o cierra la terminal). Si algo queda colgado:
#     pkill -f "@penpot/mcp" ; pkill -f "penpot"
# =============================================================================

set -e

BLUE='\033[0;34m'
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}🚀 Penpot MCP (modo local)${NC}"
echo "  • Endpoint MCP:  http://localhost:4401/mcp"
echo "  • Plugin URL:    http://localhost:4400/manifest.json"
echo "  • WebSocket:     :4402  |  REPL: :4403"
echo ""
echo "Deja esta terminal abierta mientras uses el MCP."
echo "Para detener: Ctrl+C"
echo ""

if ! command -v npx >/dev/null 2>&1; then
    echo -e "${RED}❌ npx no encontrado. Instala Node.js v22+.${NC}"
    exit 1
fi

# Inicia servidores del MCP + plugin en un solo proceso
exec npx -y @penpot/mcp@stable