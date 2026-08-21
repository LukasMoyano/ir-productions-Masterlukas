# Penpot MCP — Guía de conexión para IR Productions

> Guía operativa del servidor MCP oficial de Penpot conectado a opencode.
> Docs oficiales: https://help.penpot.app/mcp/ · Repo: https://github.com/penpot/penpot/tree/develop/mcp

## Arquitectura (3 piezas)

1. **Servidor MCP** — expone las tools (`high_level_overview`, `execute_code`, `penpot_api_info`, `export_shape`…) a tu agente.
2. **Plugin en Penpot** — corre dentro del navegador y conecta tu archivo abierto al servidor.
3. **Cliente** — opencode, que tú usas. Se conecta con la URL del servidor.

El MCP actúa **siempre sobre la página enfocada** en la pestaña de Penpot. Mantén la pestaña y el plugin conectados mientras trabajas.

## Modo REMOTE (activo — usa la key de tu cuenta)

- URL en config: `https://design.penpot.app/mcp/stream?userToken=TU_KEY`
- Config global: `~/.config/opencode/opencode.json` → `mcp.penpot`
- **Sin acceso al sistema de archivos local** (no puede leer/escribir assets de tu PC).

### Uso diario (Remote)
1. Abre `design.penpot.app` con tu archivo de diseño del proyecto.
2. En el archivo: **File → MCP Server → Connect** (conecta el plugin).
3. En opencode: verifica que tengas las tools `penpot_*` (deben cargar tras reiniciar opencode con la config nueva).
4. Empieza con prompts de solo lectura (listar páginas/componentes/estilos) y luego pide cambios pequeños y reversibles.

## Modo LOCAL (respaldo — acceso al filesystem)

1. Ejecuta el script del repo:
   ```bash
   ./scripts/penpot-mcp-local.sh
   ```
2. En `design.penpot.app` (ya abierto), carga el plugin con **Plugins → Load from URL** y pega:
   ```
   http://localhost:4400/manifest.json
   ```
3. Abre el plugin y pulsa **Connect to MCP server** (debe quedar "Connected").
4. Conecta opencode a `http://localhost:4401/mcp`.
   - Si tienes configurado el modo remote, crea una entrada extra, p. ej. `penpot-local`, o deshabilita/desactiva `penpot` al usar local.

> Navegadores: Chrome/Chromium ≥142 hace preguntar permiso de red local (apruébalo). Brave: desactiva el "Shield". Firefox funciona sin restricciones.

## Verificación rápida (lista el archivo actual)

```bash
# Probar que el endpoint responde (handshake MCP)
curl -s -X POST "http://localhost:4401/mcp" \
  -H 'Accept: application/json, text/event-stream' \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"check","version":"1"}}}'
```

## Seguridad

- La MCP key **se muestra una sola vez** en Penpot (Cuenta → Integraciones → MCP Server). Si se pierde o expira, **Regenerate MCP key** (invalida la anterior).
- No compartas la key en logs, capturas ni repositorios. El archivo de config global está fuera del repo y no se commitea.
- Con el plugin conectado, el agente puede **modificar** el archivo de diseño. Prefiere pasos reversibles y revisa antes de aceptar.

## Variables de entorno (local)

| Variable | Default | Descripción |
|----------|---------|-------------|
| `PENPOT_MCP_SERVER_PORT` | `4401` | Endpoint HTTP/SSE del MCP |
| `PENPOT_MCP_WEBSOCKET_PORT` | `4402` | WebSocket del plugin |
| `PENPOT_MCP_REPL_PORT` | `4403` | REPL de depuración |
| `PENPOT_MCP_LOG_LEVEL` | `info` | Logging |

## Troubleshooting

- **No aparecen tools `penpot_*`**: reinicia opencode por completo (cierra y reabre en la carpeta del proyecto). La config se lee al arrancar.
- **401 / key no válida**: regenera la key en Integraciones y actualiza `userToken` en `~/.config/opencode/opencode.json`.
- **Conexión cae a mitad de tarea**: reconecta el plugin en Penpot (File → MCP Server → Connect) y mantén la pestaña activa.
- **El plugin se vuelve lento en tareas largas**: en Chrome activa **Settings → Performance → Always keep these sites active** para `design.penpot.app`, o fija la pestaña.