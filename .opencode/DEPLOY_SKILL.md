# Skill: Despliegue Seguro IR Productions

## Propósito
Automatizar verificaciones previa al despliegue FTP para garantizar cargas exitosas sin errores de runtime.

## Flujo de Trabajo

### 1. Verificación Pre-Build (REQUIRED)
```bash
# En directorio frontend/
cd frontend

# 1. Verificar tipos TypeScript
bunx tsc --noEmit

# 2. Verificar que no hay imports faltantes
bunx tsc --noEmit --isolatedModules

# 3. Build de producción
bun run build
```

### 2. Verificación Post-Build
```bash
# Verificar que el build generó archivos válidos
ls -la ../dist/

# Verificar que index.html existe
test -f ../dist/index.html || { echo "ERROR: index.html no encontrado"; exit 1; }

# Verificar que hay JS y CSS
ls ../dist/assets/*.js || { echo "ERROR: No hay archivos JS"; exit 1; }
ls ../dist/assets/*.css || { echo "ERROR: No hay archivos CSS"; exit 1; }
```

### 3. Checklist de Sincronización FTP

#### Problema: Badge not defined
**Solución:** Siempre verificar imports antes de hacer build.

#### Problema: mirror --reverse --delete deja archivos híbridos
**Solución:** 
- Usar `--parallel=1` para conexiones inestables
- Agregar timeout extendido
- Verificar después de subir

#### Script lftp recomendado:
```lftp
set net:timeout 30
set net:max-retries 3
set ftp:ssl-allow no

open -u $FTP_USER,$FTP_PASS $FTP_HOST

# Sincronizar con opciones seguras
mirror --reverse --verbose --parallel=1 --delete \
  --exclude-glob cgi-bin/\* \
  --exclude-glob .well-known/\* \
  --exclude-glob .htaccess \
  --overwrite \
  ./dist/ /

# Verificar.upload
ls /index.html
bye
```

### 4. Lista de Verificación Manual

- [ ] `bunx tsc --noEmit` sin errores
- [ ] Build completado sin warnings críticos
- [ ] Archivos en /dist generados
- [ ] PDFs en dist/assets/docs/ presentes
- [ ] Conexión FTP estable
- [ ] Verificación post-upload completada

## Errores Comunes y Soluciones

| Error | Causa | Solución |
|-------|-------|----------|
| `ReferenceError: X is not defined` | Import faltante | Ejecutar `tsc --noEmit` antes del build |
| `TypeError: undefined` | Import circular | Revisar imports en el componente |
| 404 en archivos JS | Hash changed | Verificar que index.html apunta al JS correcto |
| Carga incompleta | Connection timeout | Usar `--parallel=1` y `--verbose` |
| Página caído | mirror --delete conflict | Revisar arquitectura de carpetas en host |

## Commands Útiles

```bash
# Verificar tipos (recomendado antes de cada build)
cd frontend && bunx tsc --noEmit

# Build producción
cd frontend && bun run build

# Verificar build resultante
ls -laR ../dist/assets/

# Contar archivos a subir
find ../dist -type f | wc -l
```

## Activación
Para usar esta skill, ejecutar en cada despliegue:
1. `cd frontend`
2. `bunx tsc --noEmit` (debe pasar sin errores)
3. `bun run build`
4. Verificar `/dist` generado
5. Ejecutar script lftp