# Pago del diagnóstico blockchain — $250.000 COP

## Datos de pago

- **Método:** Bre-B / Banco Falabella
- **Beneficiario:** Lukas Moyano
- **Llave Bre-B:** `@bflm1899954925`
- **Monto:** `$250.000 COP`
- **Red:** RBM

## Archivos

- Original recibido: `source/IMG-20261020-WA0002.jpg` (899×1599 px).
- Asset público: `../../frontend/public/pagos/qr-bre-b-250k-2026-10.png` (570×570 px), solo el QR con zona de silencio blanca.
- El asset se genera recortando el QR del original (aprox. `(314,399)–(586,671)`), escalando a 570×570 y eliminando metadatos EXIF. No incluye el texto del monto para evitar recortes.

## Verificación

El QR fue decodificado localmente con `libzbar`; el payload contiene la llave `@bflm1899954925` y el monto `250000.00`. El PNG recortado decodifica correctamente a 240, 280, 300 y 320 px.

El titular declara que el QR es reutilizable/estático. La verificación formal (comparar el `TRXID` de un segundo QR del mismo monto) queda agendada para el **21-oct-2026**.

## Cómo reemplazarlo

1. Guardar el nuevo original en `source/`.
2. Recortar el QR conservando al menos cuatro módulos de margen blanco.
3. Exportar como PNG sin metadatos.
4. Verificar la decodificación antes de publicar.
5. Actualizar el nombre versionado en `frontend/public/pagos/` y la referencia del componente.

No publicar el payload completo ni datos personales adicionales.
