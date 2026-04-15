# Guía de Conexión FTP con LFTP

`lftp` es un cliente FTP potente y versátil para la terminal. Ya lo tienes instalado en tu sistema.

## 1. Comando de Conexión Rápida

La forma más directa de conectar es:

```bash
lftp -u USUARIO,CONTRASEÑA HOST
```

**Ejemplo:**

```bash
lftp -u usuario123,miClaveSecreta ftp.masterlukasmoyano.com
```

> **Nota:** Si la contraseña tiene caracteres especiales, es mejor no ponerla en el comando. Usa solo `-u USUARIO` y `lftp` te pedirá la contraseña.

## 2. Conexión Interactiva (Recomendado)

1.  Abre `lftp`:
    ```bash
    lftp ftp.masterlukasmoyano.com
    ```
2.  Loguéate:
    ```bash
    login usuario123
    ```
    (Te pedirá el password).

## 3. Comandos Útiles una vez conectado

Dentro de `lftp`, puedes usar estos comandos:

| Acción                 | Comando     | Ejemplo                                                    |
| :--------------------- | :---------- | :--------------------------------------------------------- |
| **Listar archivos**    | `ls`        | `ls`                                                       |
| **Cambiar directorio** | `cd`        | `cd public_html`                                           |
| **Directorio local**   | `lcd`       | `lcd /ruta/en/mi/pc`                                       |
| **Subir archivo**      | `put`       | `put archivo.txt`                                          |
| **Subir carpeta**      | `mirror -R` | `mirror -R dist/` (Sube la carpeta dist local al servidor) |
| **Bajar carpeta**      | `mirror`    | `mirror carpeta_remota/` (Descarga al PC)                  |
| **Salir**              | `exit`      | `exit`                                                     |

## 4. Solución de Problemas SSL

Si tienes problemas con certificados SSL (error `Fatal error: Certificate verification...`), puedes desactivar la verificación estricta **temporalmente** para probar (dentro de lftp):

```bash
set ssl:verify-certificate no
```

O para hacerlo permanente en esa sesión antes de conectar:

```bash
lftp -c "set ssl:verify-certificate no; connect -u USUARIO,PASSWORD HOST"
```
