# 🔧 Configuración MCP de Render.com

## API Key Configurada
```
rnd_vRiFCpjA8LeTPD850GVNHp0jqjCm
```

## Para Claude Desktop (Windows/Mac/Linux)

1. Edita el archivo de configuración:
   - **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
   - **Mac:** `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Linux:** `~/.config/Claude/claude_desktop_config.json`

2. Agrega esta configuración:
```json
{
  "mcpServers": {
    "render": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://mcp.render.com/mcp",
        "--header",
        "Authorization: Bearer rnd_vRiFCpjA8LeTPD850GVNHp0jqjCm"
      ],
      "env": {
        "RENDER_API_KEY": "rnd_vRiFCpjA8LeTPD850GVNHp0jqjCm"
      }
    }
  }
}
```

## Para Cursor

Edita `~/.cursor/mcp.json`:
```json
{
  "mcpServers": {
    "render": {
      "url": "https://mcp.render.com/mcp",
      "headers": {
        "Authorization": "Bearer rnd_vRiFCpjA8LeTPD850GVNHp0jqjCm"
      }
    }
  }
}
```

## Comandos útiles con MCP

Una vez configurado, puedes usar prompts como:
- "List my Render services" - Ver todos los servicios
- "What is the status of cultivatech-backend?"
- "Show metrics for my services"
- "Pull recent error logs for cultivatech-backend"

## ⚠️ IMPORTANTE
Esta API key da acceso completo a tu cuenta de Render. Guárdala en un lugar seguro.