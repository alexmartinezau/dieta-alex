# Dieta Alex PWA

Aplicación web progresiva en español para crear un menú semanal únicamente con los ingredientes marcados como comprados, registrar ejercicio y seguir tendencias de peso, cintura y métricas RENPHO.

## Privacidad

El perfil, las compras, el progreso y los respaldos permanecen en el almacenamiento local del dispositivo. El repositorio no contiene información personal ni médica precargada.

## Sitio publicado

<https://alexmartinezau.github.io/dieta-alex/>

GitHub Pages publica directamente la rama `main` desde la carpeta raíz. Cada `push` a `main` inicia una nueva compilación.

## Instalación

En Android, abre el sitio en Chrome y selecciona **Menú de tres puntos → Instalar aplicación** o **Añadir a pantalla de inicio**. En computadoras compatibles, usa el icono de instalación de la barra de direcciones.

## Desarrollo y validación

La aplicación no necesita dependencias ni proceso de compilación. Sirve la carpeta con cualquier servidor HTTP local y valida la sintaxis con:

```sh
node --check data.js
node --check app.js
node --check sw.js
```

El service worker conserva el núcleo de la aplicación para abrirla sin conexión después de la primera visita.
