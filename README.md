# josedanielrodriguez.com

Sitio personal y portafolio de José Daniel Rodríguez. Es un sitio **estático**: HTML,
CSS y JavaScript sin dependencias, sin paso de compilación y sin `node_modules`. Se
publica copiando el contenido del repositorio a la raíz del servidor web.

## Estructura

```
.
├── index.html              Página completa (una sola vista con anclas)
├── assets/
│   ├── css/main.css        Sistema de diseño: tokens, temas, componentes, responsive
│   ├── js/i18n.js          Diccionario ES/EN y cambio de idioma
│   ├── js/main.js          Tema, menú, scroll spy, animaciones y contadores
│   └── img/
│       ├── favicon.svg     Monograma JD
│       └── og.png          Imagen de previsualización 1200×630 para redes
├── docs/                   CV en PDF — NO se publica (ver «Privacidad»)
├── robots.txt
├── sitemap.xml
└── site.webmanifest
```

## Idiomas

El HTML se sirve en **español**, que es el idioma por defecto. El inglés se aplica
desde `assets/js/i18n.js`, que sustituye los textos marcados con `data-i18n`,
`data-i18n-content` y `data-i18n-aria-label`.

- Se puede forzar el idioma con `?lang=en` o `?lang=es`.
- La elección se guarda en `localStorage` con la clave `lang`.
- Sin JavaScript, la página se ve completa en español.

**Para añadir o cambiar un texto traducible:** pon la clave en el atributo `data-i18n`
del elemento en `index.html`, escribe el texto español directamente dentro del
elemento, y añade la misma clave con su valor en los dos bloques (`es` y `en`) de
`assets/js/i18n.js`. Si el valor contiene `<`, se inserta como HTML; si no, como texto
plano.

## Temas

El tema **oscuro es el predeterminado**. El claro es una elección explícita que se
guarda en `localStorage` bajo la clave `theme`. Un script en línea dentro de `<head>`
aplica el tema antes del primer pintado para que no haya parpadeo.

Todos los colores son variables CSS declaradas en `:root` y redefinidas en
`:root[data-theme="light"]` (`assets/css/main.css`). Para recolorear el sitio entero
basta con cambiar `--accent` y `--accent-2` en ambos bloques.

## Privacidad

`docs/` contiene los CV en PDF con número de DPI, dirección particular y teléfonos de
terceros (referencias personales y profesionales). Por eso:

- La carpeta está en `.gitignore` y **no se versiona**.
- Está excluida en `robots.txt`.
- **No se enlaza desde la página.**

Si algún día quieres ofrecer el CV para descarga, publica antes una versión depurada
sin DPI, sin dirección y sin los teléfonos de las referencias.

## Versionado de assets (importante al desplegar)

Las hojas de estilo, los scripts y las imágenes se enlazan con un parámetro
`?v=AAAAMMDD`. Sin él, el navegador y las cachés intermedias del hosting pueden
servir un `main.css` o un `i18n.js` antiguos junto al `index.html` nuevo: la
página se ve rota o con textos desactualizados a partir de la segunda visita.

**Cada vez que cambies un archivo de `assets/`, sube la fecha del parámetro** en
`index.html` (y en `site.webmanifest` si tocas el favicon). Están todas juntas,
así que basta con un reemplazo:

```sh
sed -i 's/?v=[0-9]\{8\}/?v='"$(date +%Y%m%d)"'/g' index.html site.webmanifest
```

## Logos de las tecnologías

Las píldoras de tecnología llevan su logo. Los símbolos viven en un sprite SVG
en línea al final de `index.html`, y cada píldora lo referencia con
`<use href="#ti-...">`. Las marcas provienen de [Simple Icons](https://simpleicons.org)
(SVG bajo CC0; las marcas pertenecen a sus dueños) y las tecnologías sin logo
propio —Oracle, AWS, SQL Server, Payara, Hapi, Amazon Connect— usan iconos
genéricos dibujados a mano en ese mismo sprite.

Para añadir una tecnología nueva: mete su `<symbol id="ti-loquesea">` en el
sprite y referencia ese id desde la píldora.

## Desarrollo

No hace falta instalar nada. Para previsualizar en local:

```sh
python3 -m http.server 8899
# http://127.0.0.1:8899/
```

## Analítica

Google Analytics (`G-QE9730XX5P`) se carga desde `index.html`.
