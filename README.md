# Dieta Alex PWA

Aplicación instalable para Android con:

- Menú semanal generado únicamente con los ingredientes marcados como comprados.
- Licuados filtrados según disponibilidad.
- Seguimiento de peso, cintura y métricas RENPHO.
- Funcionamiento sin conexión.
- Actualizaciones automáticas mediante GitHub Pages.
- Perfil, compras y mediciones guardados localmente en el dispositivo; no están incluidos en el repositorio público.

## Publicación en GitHub Pages

1. En GitHub, abre **Settings → Pages**.
2. En **Build and deployment → Source**, selecciona **GitHub Actions**.
3. Abre la pestaña **Actions** y espera a que finalice `Deploy Dieta Alex to GitHub Pages`.
4. La dirección será normalmente:
   `https://alexmartinezau.github.io/dieta-alex/`

## Instalación en Android

1. Abre la dirección publicada en Chrome.
2. Pulsa el menú `⋮`.
3. Selecciona **Instalar aplicación** o **Añadir a pantalla principal**.
4. Las versiones nuevas se detectan al abrir la aplicación con conexión.

## Actualización

Al modificar archivos y hacer `push` a `main`, GitHub Pages publica la nueva versión. Para forzar que todos los dispositivos detecten una versión nueva:

- Cambia `APP_VERSION` en `app.js`.
- Cambia el nombre de `CACHE` en `sw.js` al mismo número de versión.

## Privacidad

Las compras, mediciones y progreso se guardan en `localStorage` del dispositivo. Usa **Progreso → Exportar respaldo** antes de borrar datos del navegador o cambiar de teléfono.

## Carga inicial privada

Después de instalar la app, usa **Progreso → Importar respaldo** y selecciona el archivo privado `dieta-alex-datos-iniciales.json`. No subas ese archivo al repositorio.
