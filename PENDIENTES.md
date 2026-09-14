# Pendientes para pulir y terminar el Catálogo

Generado: 2026-09-14. Fuente: auditoría de `~/Documentos/mi-web`.

## 1. Crítico (rompe navegación o carga)
- [ ] **Imágenes gigantes (517 MB total).** Ej: `bosque_macarena/macarena.jpg` 23 MB, `Amanitas/muscaria/*.jpg` 7-14 MB. GitHub Pages se vuelve lento en celular. Comprimir a <300 KB y max 1600px de ancho (ej: `ffmpeg`, Squoosh, TinyJPG). Agregar `loading="lazy"` a `<img>` del carrusel y resultados.
- [ ] **10 enlaces rotos.** Faltan: `Ascomicetos.html`, `Himenochaetales.html` / `Himenochateales.html` (hay inconsistencia de nombre), `Boletaceae.html`, `Sclerodermataceae.html`, `Russulaceae.html`, `Stereaceae.html`, `Auriscalpiaceae.html`, `Sebacinales.html`, `sileat.html`. Decidir: crear las páginas o quitar los links del `nav` y de `buscador.js:769`.
- [ ] **`IMG_FALLBACK` roto en `buscador.js:8`.** Dice `../Agaricales/Agarical_1.jpg` (con `../` no existe desde la raíz). Cambiar a `Agaricales/Agarical_1.jpg`.
- [ ] **Duplicado `index.html` vs `pagina principal.html`.** Son idénticos y los links usan `"pagina principal.html"` con espacio (falla en URLs). Unificar todo a `index.html`.
- [ ] **Links de familias rotos.** `renderizarIndice()` apunta todo a `agaricales-familias/${familia}.html`, pero solo existen 12 de Agaricales. Las de Boletales/Russulales/Otros (Boletaceae, Russulaceae, etc.) dan 404.

## 2. Contenido placeholder
- [ ] Quitar `Aqui ira la informacion...` en: `Boletales.html:39`, `Agaricales.html:38`, `Russulales.html:38`, `Tremellares.html:38`, `Polyporales.html:38` (este último además dice "Boletales").
- [ ] Revisar descripciones en `buscador.js` (ESPECIES): hay `Descripicion`, `Descripcion corta trametes`, `Neocampanella`, `Honhembuhellia`, `Ressupinatus`, `Parassola`, `schizophyllum .jpg` con espacio en el nombre.
- [ ] Títulos mal: `Auriculariales.html` dice `Auricularialesl`, `Polyporales.html` dice `Boletales` en `<title>`.
- [ ] Instagram truncado en `Boletales.html:101` (`micosapiens_sileat...`).

## 3. Móvil + diseño
- [x] Header compactado en `@media (max-width: 767px)` en `estilos.css`.
- [ ] Revisar `.slide { height: 400px }` y `.imagen-principal { height: 380px }`: muy altos en celular. Bajar a 220-250px en móvil.
- [ ] `resultados-grid minmax(280px,1fr)` queda a 1 columna en 360px: ok, pero verificar `filtros` y `tabs` con scroll horizontal.
- [ ] Nombres de archivo con espacios/mayúsculas: `Agaricales/schizophyllum .jpg`, `pagina principal.html`. Renombrar a minúsculas-con-guiones.

## 4. SEO / acabado profesional
- [ ] Agregar en cada `<head>`: `<meta name="description">`, favicon, Open Graph (`og:title`, `og:image`).
- [ ] `alt` descriptivos en cada foto (ahora son `Boletal_1`, etc.).
- [ ] Un solo `h1` por página, footer con año dinámico o 2026 consistente.
- [ ] Crear `404.html` para GitHub Pages.

## 5. QA final
- [ ] Probar en PC + celular: buscador (2 letras), filtros, tabs (Agaricales/Boletales/Russulales/Otros), carrusel GSAP, links.
- [ ] Pasar Lighthouse en Chrome y corregir performance/accesibilidad.
- [ ] `git add -A && git commit -m "..." && git push` + `git pull` en el portátil.

## Orden sugerido
1. Imágenes (performance) + fallback + duplicado index.
2. Enlaces rotos (crear o quitar).
3. Placeholders + títulos.
4. Móvil (slider) + SEO.
5. QA + push final.
