# 🛡️ Guía de Configuración SSL - masterlukasmoyano.com

## Estado Actual
- **Proveedor:** Let's Encrypt (vía CarrierZone SSL Manager)
- **Estado:** En proceso de instalación desde el panel
- **Dominio:** masterlukasmoyano.com

---

## Tipos de Certificados SSL

### 1. SSL Gratis (Let's Encrypt) - Recomendado ✅
- **Costo:** Gratis
- **Validez:** 90 días (renovable automáticamente)
- **Nivel de seguridad:** Alto (igual que los de pago)
- **Instalación:** Desde el panel del hosting (CarrierZone)

### 2. SSL Premium (Comodo/PositiveSSL)
- **Costo:** $10-50/año
- **Validez:** 1-2 años
- **Nivel de seguridad:** Alto
- **Instalación:** Manual (subir archivos .crt, .key, .ca-bundle)

### 3. SSL wildcard (*.midominio.com)
- Cubre todos los subdominios
- Solo necesario si tienes muchos subdominios

---

## Proceso de Activación (CarrierZone Panel)

### Paso 1: Completar información de empresa
- Dominio: masterlukasmoyano.com
- Empresa: _-IR-_ Productions
- País: Colombia
- Ciudad: Fusagasugá

### Paso 2: Configurar redirección
- ✅ Activar "Redirect HTTP to HTTPS"

### Paso 3: Generación automática
- El sistema genera el certificado

### Paso 4: Verificación
- Puede tomar 5-30 minutos

### Paso 5: Instalación completa
- El SSL se activa automáticamente

---

## Archivos del Certificado (Histórico)

### Certificados Existentes (ubicación y estado)
```
/config/ssl_2026/certificado-publico.crt      (Expirado: 29-Abr-2026)
/config/ssl_2026/cadena-intermedia.crt       (CA Bundle - sirve para nuevo cert)
/config/ssl_2026/masterlukasmoyano.com.key    (Clave privada - vigente)
/config/ssl_2026/masterlukasmoyano_2026.csr   (CSR - Solicitud anterior)
```

### Para instalación manual (si se necesita)
1. **Certificate (.crt):** El certificado público
2. **Private Key (.key):** La clave privada (NUNCA compartir)
3. **CA Bundle (.ca-bundle):** Certificados intermedios

---

## Verificación Post-Instalación

Después de instalar el SSL, verificar con:
```bash
curl -I https://masterlukasmoyano.com
```

Debería mostrar:
- HTTP/1.1 200 OK
- Content-Type: text/html

---

## Notas Importantes

1. **Renovación automática:** Let's Encrypt se renueva cada 90 días automáticamente si está configurado en el panel.

2. **Redirect HTTP → HTTPS:** Al activar esta opción, cualquier访问 a `http://masterlukasmoyano.com` redirigirá automáticamente a `https://masterlukasmoyano.com`.

3. **Subdirectorios:** El SSL cubre todo el dominio, incluyendo `/fenix`, `/educacion-tecnologica`, etc.

---

## Problemas Comunes

| Error | Solución |
|-------|----------|
| 403 Forbidden | Verificar Document Root en panel |
| SSL no válido | Limpiar caché del navegador |
| Certificado expirado | Renew desde el panel |
| Mixture content | Actualizar URLs de recursos a HTTPS |