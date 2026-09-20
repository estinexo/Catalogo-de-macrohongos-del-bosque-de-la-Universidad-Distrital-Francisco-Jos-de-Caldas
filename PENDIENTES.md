# Auditoría completa — Catálogo de macrohongos (bosque Macarena y Vivero, UD)

Fecha: 2026-09-20 · Repo: `estinexo/Catalogo-de-macrohongos-del-bosque-de-la-Universidad-Distrital-Francisco-Jos-de-Caldas` · Rama `main` · Sitio: GitHub Pages (`.nojekyll` + `index.html` presentes).
Stack: HTML/CSS/JS puro. Sin dependencias que instalar: se edita en VS Code y se previsualiza con la extensión **Live Server**.

> **Verificado hoy (2026-09-20) por lectura directa del repo + `git status/log` + `grep` de enlaces/imágenes.** Correcciones aplicadas a este archivo donde decía “sin subir” cuando ya estaba subido.

---

## 1. Resumen en 30 segundos

| Tema | Estado (verificado 2026-09-20) |
|---|---|
| Estructura y navegación | ✅ 0 enlaces rotos (verificado: `grep href` en 12+20 HTML → 0 faltantes) |
| Imágenes (peso y carga) | ✅ 63 JPG → 14.0 MB total (antes ~262 MB) + `loading="lazy"` en 91/91 `<img>` |
| Header y logo en móvil | ✅ Compactado + logo circular fijo 80 px / 50 px móvil + `aspect-ratio:1/1` + `object-fit:cover` — **ya subido** (commit `f31b6ec` 2026-09-13) |
| Títulos de pestañas | ✅ `Auriculariales` y `Polyporales` corregidos — **ya subidos** (`f31b6ec`) |
| Página Polyporales | ✅ Dejó de ser clon de Boletales; texto propio + carrusel `Trametes/Irpex` + tabla 3 familias — **ya subido** (`f31b6ec`) |
| Ortografía general (commit `a891a88`) | ✅ `Honhembuhellia→Hohenbuehelia`, `Ressupinatus→Resupinatus`, `Parassola→Parasola`, `Coprinellus_micaceae→micaceus`, `laccaria→Laccaria` corregidos y renombrados en disco + JS |
| Contenido real de órdenes | ⚠️ 4 páginas con `Aqui ira...` (Agaricales, Boletales, Russulales, Tremellares) + 11 stubs “en construcción” (3 órdenes + 8 familias) |
| SEO y acabado | ❌ Sin `meta description`, favicon, Open Graph ni `404.html` (verificado: `grep` en `index/Agaricales/buscador.html` → 0) |
| Móvil (carrusel) | ⚠️ Alturas fijas 400 px (`.slide`) / 380 px (`.imagen-principal` / `.carrusel-slides`) — falta ajuste en `@media (max-width:767px)` |
| Datos del buscador | ⚠️ Typos residuales + 1 inconsistencia de orden (ver §4 P1) |

**Cambios sin subir al momento de escribir esto (2026-09-20):** solo `buscador.js:457` — `Scleroderma` `TIPO.SAPROFITO → TIPO.MICORRIZICO`. Todo lo demás está `up-to-date` con `origin/main` (`git status` limpio salvo ese diff; `git log` 2ce27db en HEAD). El bloque “sin subir” del §5/§6 anterior quedó obsoleto.

---

## 2. Lo que ya se hizo (historial verificado por `git log`)

1. **Clonado y configuración.** `git clone` en `~/Documentos/mi-web`, `user.name/email` + `credential.helper store`. Flujo entre portátil y este PC: `pull` al empezar, `push` al terminar.
2. **Buscador.**
   - `buscador.js`: coma faltante tras `Geastreales` (línea ~590) que rompía todo el script.
   - `renderizarIndice()`: los órdenes sin tab propio se perdían en silencio; ahora los de pocas familias se agrupan en el tab **"Otros órdenes"**.
   - Destacados: `Honhembuhelia` (typo, 0 resultados) → `Coprinellus` (2 especies reales).
   - Placeholder del input: `Pleurotus ostreatus` (especie inexistente) → `Coprinellus disseminatus, Auricularia auricula`.
3. **Imágenes.** Compresión con PIL (máx. 1600 px, calidad 72, progresivo): 63 archivos, 0 fallos. Renombrado `Agaricales/schizophyllum .jpg` (espacio ilegal) → `schizophyllum.jpg` + referencia en `buscador.js:237`. Fallback `../Agaricales/...` → `Agaricales/...`. `loading="lazy"` en 91 `<img>` (verificado con `grep -r` en `**/*.html`).
4. **Enlaces.** 10 rotos → 0 (re-verificado hoy: 0 rotos). Stubs creados: `Ascomicetos.html`, `Himenochaetales.html`, `Sebacinales.html`, `sileat.html` + familias `Boletaceae, Sclerodermataceae, Russulaceae, Stereaceae, Auriscalpiaceae` (+ `Polyporaceae, Fomitopsidaceae, Irpicaceae` en `f31b6ec`). Typo `Himenochateales` → `Himenochaetales` (20 archivos). Duplicado `pagina principal.html` eliminado; todo apunta a `index.html`. Tablas de familias con prefijo `agaricales-familias/`.
5. **Móvil.** Bloque `@media (max-width: 767px)` solo-móvil en `estilos.css:864-914`: header compacto, nav en una línea con scroll horizontal, `h1` 1 rem, logo 50 px. Sin tocar escritorio.
6. **Logo ovalado.** `micosapiens.jpg` es vertical (1236×1600); con `width:auto` la caja no era cuadrada y `border-radius:50%` daba óvalo. Ahora caja fija 80 px (50 px móvil) + `aspect-ratio:1/1` + `object-fit:cover` (`estilos.css:108-114`). **Ya subido.**
7. **Polyporales clonada.** Era copia exacta de Boletales (carrusel, texto y familias). Ahora: texto propio, carrusel con `Trametes.jpg` e `Irpex.jpg`, tabla `Polyporaceae/Fomitopsidaceae/Irpicaceae`, footer Instagram corregido (también en Boletales). **Ya subido.**
8. **Corrección ortográfica general (`a891a88` 2026-09-13 21:50).** `Agaricales.html`, `Boletales.html`, `Russulales.html`, `Auriculariales.html`, `Tremellares.html`, `Ascomicetos.html`, 12 páginas de `agaricales-familias/`, `index.html`, `sileat.html` + renombrados `Hohenbuehelia.jpg`, `Parasola.jpg`, `Resupinatus.jpg`, `Coprinellus_micaceus.jpg` + 56 líneas de `buscador.js` (descripciones `Stereum`/`Psathyrella`). Verificado en `git show --stat`.
9. **Limpieza lock (`2ce27db` 2026-09-13 21:50).** Elimina `.~lock.PENDIENTES.md#` y añade `.~lock.*` a `.gitignore`.

---

## 3. Estructura actual del sitio (verificado 2026-09-20)

**Raíz (12 HTML):** `index.html`, `buscador.html`, `buscador.js`, `estilos.css`, `Agaricales.html`, `Auriculariales.html`, `Boletales.html`, `Polyporales.html`, `Russulales.html`, `Tremellares.html`, `Himenochaetales.html`, `Ascomicetos.html`, `Sebacinales.html`, `sileat.html`.
**Carpetas:** `agaricales-familias/` (20 páginas: 12 originales + 8 stubs — ver lista en §4), `Amanitas/` (`gemnata/`, `muscaria/`, `validae/`), `Agaricales/` (26 JPG), `Boletales/` (7 JPG), `Auriculariales/` (3 JPG), `Polyporales/` (2 JPG), `Russulales/` (4 JPG), `Geastreales/` (1 JPG), `Himenochaetales/`, `Ascomicetos/`, `bosque_macarena/`, `Pagina_principal/`.
**Buscador (contado en `buscador.js`):** 51 especies en `ESPECIES` (antes 43), 9 órdenes en `ORDENES`, 8 géneros destacados, 4 tabs (Agaricales/Boletales/Russulales/Otros). Verificado con `grep -c "nombre:"` y lectura de `ORDENES`.
**Imágenes:** 63 JPG = 14.0 MB (`find -name "*.jpg" -exec du -ch` → 15M total con subcarpetas, verificado). Top pesados: `bosque_macarena/macarena.jpg` 454 KB, `Agaricales/Coprinellus_micaceus.jpg` 393 KB.

---

## 4. Lo que falta (ordenado por prioridad)

### P1 — Contenido real (lo único que solo tú puedes escribir)
- [ ] `Agaricales.html:38`, `Boletales.html:39`, `Russulales.html:38`, `Tremellares.html:38`: reemplazar `Aqui ira...` por 1–2 párrafos de cada orden (como ya tiene `Auriculariales.html:39-43` y `Polyporales.html:38`).
- [ ] `Polyporales.html:38` ya corregido, pero amplíalo si quieres (ideal 2 párrafos + referencia a madera en descomposición).
- [ ] 11 stubs "en construcción" (verificado con `grep "en construcción"`): órdenes `Ascomicetos`, `Himenochaetales`, `Sebacinales` + 8 familias `Boletaceae, Sclerodermataceae, Russulaceae, Stereaceae, Auriscalpiaceae, Polyporaceae, Fomitopsidaceae, Irpicaceae`. Cada uno tiene links de vuelta listos; solo falta el texto y (opcional) un carrusel con tus fotos. Las 12 familias “completas” ya tienen tabla/información.
- [ ] `buscador.js` (51 entradas): pulir descripciones residuales — quedan por revisar:
  - `Irpex rossetiformes` (línea 331) → debería ser `Irpex rosettiformis` (u `Irpex lacteus` según tu determinación) y además `orden: "Agaricales"` es incorrecto → debe ser `Polyporales` (familia Irpicaceae). Inconsistencia verificada.
  - `Geastreaceae` vs `Geastraceae`: `ESPECIES:518` dice `Geastreaceae` pero `ORDENES:588` dice `Geastraceae` (falta la “r”). Unifica a `Geastraceae` (correcto para *Geastrum*) y corrige ambas. Causa que el índice “Otros órdenes” cuente 0 especies para esa familia.
  - Carpeta `Amanitas/gemnata/` y `buscador.js:50` `Amanitas/gemnata/gemnata_1.jpg` — typo por `gemmata` (doble m). Mantén coherencia o renombra carpeta+JS a `gemmata` (requiere `git mv` + actualizar `buscador.js:44,50`).
  - `Neocampanella` y `Laccaria sp` ahora están bien capitalizados (corregidos), pero revisa ortografía fina: `Neocampanella` existe, `Laccaria` ok.
  - Revisa mayúsculas `laccaria` ya corregido; no reintroducir.
  - Verifica que cada `imagen:` existe en disco: verificado hoy — 0 faltantes (`for im in re.findall(imagen)... not exists → []`).

### P2 — Móvil (5 minutos)
- [ ] `estilos.css:22` (`.imagen-principal`, 380 px), `:219` (`.slide`, 400 px), `:380` (`.carrusel-slides`, 380 px): muy altos en celular. Agregar dentro del `@media (max-width: 767px)` ya existente algo como `.slide{height:230px} .imagen-principal{height:230px} .carrusel-slides{height:230px}` y probar. Estado actual: media query solo ajusta header/nav/logo, no alturas de carrusel.
- [ ] Probar en tu celular: header compacto, 1 columna de resultados, tabs con scroll.

### P3 — SEO y acabado profesional
- [ ] `<meta name="description" content="...">` en cada `<head>` (hoy 0/12 páginas lo tienen).
- [ ] Favicon: guardar `favicon.ico` o `favicon.png` en raíz + `<link rel="icon" href="favicon.png">`.
- [ ] Open Graph para compartir en WhatsApp/Instagram: `og:title`, `og:description`, `og:image` (usa una foto liviana, ej. `bosque_macarena/macarena.jpg` 454 KB).
- [ ] `404.html` simple (GitHub Pages la usa automáticamente).
- [ ] `alt` descriptivos: hoy son `Boletal_1`, `Auricularia_1`, `Agarical_1` (verificado). Ej: `alt="Trametes, hongo cola de pavo en tronco"`.
- [ ] Un solo `h1` por página y footer con año consistente.

### P4 — Limpieza (opcional, no urgente)
- [ ] Nombres con mayúsculas/espacios (`Pagina_principal/`, `Agaricales/`, `Geastreales/`, `Himenochaetales/`): GitHub Pages en Linux distingue mayúsculas; funciona hoy, pero renombrar a minúsculas-con-guiones evita errores futuros. Si se hace, actualizar referencias en HTML/JS + `git mv`.
- [ ] Historial git pesado: el repo en GitHub aún guarda los ~500 MB viejos (este PC los tiene en `.git` — `du -sh` 283 MB total hoy). Un clon fresco descarga todo el historial. Limpiarlo requiere reescribir historial (`filter-repo` o `filter-branch`) **coordinando con tu portátil** — dejar para el final o pedir ayuda.
- [ ] Este archivo (`PENDIENTES.md`): se publica en Pages como texto. Si no lo quieres público, bórralo del repo o agrégalo a `.gitignore` al terminar.

---

## 5. Cómo previsualizar y sincronizar (portátil ↔ este PC)

```bash
# Ver en este PC (VS Code): abrir index.html → clic derecho → Open with Live Server
# Estado actual (2026-09-20):
git status  # → modified: buscador.js (1 línea Scleroderma)
git log --oneline -3  # 2ce27db, a891a88, f31b6ec ya en origin/main
# Subir el único pendiente:
git add buscador.js
git commit -m "corregir Scleroderma a micorrizico"
git push origin main
# Traer cambios en el portátil (y viceversa):
git pull origin main
```

Regla de oro: `pull` al empezar, `push` al terminar, en el equipo que sea.

---

## 6. Siguiente paso sugerido (actualizado)

1. ~~Subir lo pendiente de la sesión anterior (títulos + logo + Polyporales + 3 familias)~~ **Hecho** (`f31b6ec` + `a891a88` ya en `origin/main`).
2. **Ahora:** subir el único diff pendiente `buscador.js` (Scleroderma).
3. Escribir los 4 párrafos de órdenes (P1) — es lo que más se nota como "página sin terminar" + corregir 2 typos de `buscador.js` (`Irpex` orden y `Geastraceae` unificación).
4. Móvil (P2) + probar en tu celular.
5. SEO (P3) + QA final con la lista del §4.

> Nota de auditoría: este archivo fue reescrito el 2026-09-20 para corregir afirmaciones obsoletas (“sin subir”) y actualizar conteos (51 especies, 63 JPG 14.0 MB, 91 lazy, 0 enlaces rotos, 0 imágenes faltantes). Conserva la estructura original pero con datos verificados por comandos.
