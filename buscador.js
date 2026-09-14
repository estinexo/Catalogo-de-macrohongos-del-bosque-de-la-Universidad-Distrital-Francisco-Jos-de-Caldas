// ============================================================================
// CONFIGURACIÓN GENERAL DEL BUSCADOR
// ============================================================================
const CONFIG = {
    MIN_CHARS_FOR_SEARCH: 2,
    MAX_SUGGESTIONS: 8,
    AUTO_SLIDE_INTERVAL: 5000,
    IMG_FALLBACK: "Agaricales/Agarical_1.jpg",
};

// ============================================================================
// TIPOS DE HONGOS (constantes reutilizables)
// ============================================================================
const TIPO = Object.freeze({
    MICORRIZICO: "micorrizico",
    SAPROFITO: "saprofito",
    PARASITO: "parásito",
});

const BADGE = Object.freeze({
    COMESTIBLE: "comestible",
    TOXICO: "toxico",
    NEUTRAL: "neutral",
});

// ============================================================================
// BASE DE DATOS DE ESPECIES
// ============================================================================
const ESPECIES = [
    // --- Amanitaceae ---
    {
        nombre: "Amanita muscaria",
        nombreComun: "Amanita muscaria",
        familia: "Amanitaceae",
        orden: "Agaricales",
        tipo: TIPO.MICORRIZICO,
        comestible: false,
        toxico: true,
        imagen: "Amanitas/muscaria/muscaria_1.jpg",
        descripcion: "Sombrero rojo con verrugas blancas, anillo blanco, volva bulbosa. Micorrícica con Quercus humboldtii. Tóxica por contenido de muscimol y ácido iboténico.",
    },
    {
        nombre: "Amanita gemmata",
        nombreComun: "Amanita gemmata",
        familia: "Amanitaceae",
        orden: "Agaricales",
        tipo: TIPO.MICORRIZICO,
        comestible: false,
        toxico: true,
        imagen: "Amanitas/gemnata/gemnata_1.jpg",
        descripcion: "Sombrero amarillo-marrón con verrugas, anillo fibroso, volva saciforme. Tóxica, causa alteraciones neurológicas.",
    },
    {
        nombre: "Amanita sp",
        nombreComun: "Amanitas",
        familia: "Amanitaceae",
        orden: "Agaricales",
        tipo: TIPO.MICORRIZICO,
        comestible: false,
        toxico: true,
        imagen: "Amanitas/validae/validae_4.jpg",
        descripcion: "Sombrero parduzco con verrugas grisáceas, anillo persistente, volva saciforme. Potencialmente tóxica.",
    },
    {
        nombre: "Trametes",
        nombreComun: "Hongos cola de pavo",
        familia: "Polyporaceae",
        orden: "Polyporales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: false,
        imagen: "Polyporales/Trametes.jpg",
        descripcion: "Hongo de repisa con bandas concéntricas de colores (cola de pavo). Saprófito sobre madera en descomposición.",
    },
    

    // --- Agaricaceae ---
    {
        nombre: "Agaricus",
        nombreComun: "Champiñones o callampas",
        familia: "Agaricaceae",
        orden: "Agaricales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: true,
        imagen: "Agaricales/Agaricus.jpg",
        descripcion: "Sombrero carnoso con láminas libres y anillo en el pie. Saprófito en suelos ricos en materia orgánica.",
    },
    {
        nombre: "Lepiota sp.",
        nombreComun: "Desconocido",
        familia: "Agaricaceae",
        orden: "Agaricales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: true,
        imagen: "Agaricales/Lepiota.jpg",
        descripcion: "Sombrero con escamas, láminas libres y anillo en el pie. Saprófita en suelos y bordes de bosque.",
    },
    {
        nombre: "Calvatia aff",
        nombreComun: "Desconocido",
        familia: "Agaricaceae",
        orden: "Agaricales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: true,
        imagen: "Agaricales/Calvatia.jpg",
        descripcion: "Cuerpo fructífero globoso (pedo de lobo). Saprófito en pastizales y suelos abiertos.",
    },
    {
        nombre: "Lepista nuda",
        nombreComun: "Seta azulada",
        familia: "Tricholomataceae",
        orden: "Agaricales",
        tipo: TIPO.SAPROFITO,
        comestible: true,
        toxico: false,
        imagen: "Agaricales/Lepista.jpg",
        descripcion: "Sombrero violeta-azulado, pie con tonos azulados. Comestible, muy apreciada en cocina. Crece en anillos de hadas.",
    },
    {
        nombre: "Leotia",
        nombreComun: "Desconocido",
        familia: "Leotiaceae",
        orden: "Leotiales",
        tipo: TIPO.MICORRIZICO,
        comestible: false,
        toxico: true,
        imagen: "Ascomicetos/Leotia.jpg",
        descripcion: "Hongo gelatinoso de color amarillo verdoso, con sombrero viscoso. Saprófito en suelo húmedo y musgo.",
    },
    {
        nombre: "Xerocomus",
        nombreComun: "Hongo boleto",
        familia: "Boletaceae",
        orden: "Boletales",
        tipo: TIPO.MICORRIZICO,
        comestible: false,
        toxico: false,
        imagen: "Boletales/Xerocomus.jpg",
        descripcion: "Boleto de poros amarillos que azulean al tacto, pie sin retículo. Micorrícico.",
    },
    {
        nombre: "Cortinarius sp",
        nombreComun: "Desconocido",
        familia: "Cortinariaceae",
        orden: "Agaricales",
        tipo: TIPO.MICORRIZICO,
        comestible: false,
        toxico: false,
        imagen: "Agaricales/Cortinarius.jpg",
        descripcion: "Sombrero con cortina (velo aracnoideo) en ejemplares jóvenes, esporada ferruginosa. Micorrícico.",
    },

    {
        nombre: "Neocampanella",
        nombreComun: "Desconocido",
        familia: "Marasmiaceae",
        orden: "Agaricales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: false,
        imagen: "Agaricales/Neocampanella.jpg",
        descripcion: "Honguito diminuto en forma de campana sobre madera en descomposición.",
    },
    
    // --- Boletaceae ---
    {
        nombre: "Chalciporus piperatus",
        nombreComun: "Boleto picante",
        familia: "Boletaceae",
        orden: "Boletales",
        tipo: TIPO.MICORRIZICO,
        comestible: false,
        toxico: true,
        imagen: "Boletales/Boletal_1.jpg",
        descripcion: "Sombrero marrón, poro amarillo inmutable, pie liso. Se caracteriza por su sabor picante, micorrícico con Quercus sp.",
    },
    // --- Russulaceae ---
    {
        nombre: "Russula sp",
        nombreComun: "Rusúlas",
        familia: "Russulaceae",
        orden: "Russulales",
        tipo: TIPO.MICORRIZICO,
        comestible: false,
        toxico: true,
        imagen: "Russulales/Russula.jpg",
        descripcion: "Sombrero rojo brillante, láminas blancas, pie blanco. Causa vómitos al consumirse. Micorrícica con árboles.",
    },
    {
        nombre: "Lactarius sp",
        nombreComun: "Hongo de latex",
        familia: "Russulaceae",
        orden: "Russulales",
        tipo: TIPO.MICORRIZICO,
        comestible: false,
        toxico: false   ,
        imagen: "Russulales/Lactarius.jpg",
        descripcion: "Sombrero de color café tomentoso y deprimido centralmente, láminas blancas, pie blanco. Comestible, se distingue por su carne que se rompe en forma de hilo (test de la fibra).",
    },
    {
        nombre: "Stereum sp",
        nombreComun: "Hongo de costra zonada",
        familia: "Stereaceae",
        orden: "Russulales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: false,
        imagen: "Russulales/Stereum.jpg",
        descripcion: "Hongo en forma de abanico delgado o costra sobre madera, con bandas concéntricas ocres y marrones. Saprófito sobre madera en descomposición.",
    },

    // --- Auriculariaceae ---
    {
        nombre: "Auricularia auricula",
        nombreComun: "Oreja de Judas",
        familia: "Auriculariaceae",
        orden: "Auriculariales",
        tipo: TIPO.SAPROFITO,
        comestible: true,
        toxico: false,
        imagen: "Auriculariales/Auricularia_1.jpg",
        descripcion: "Cuerpo fructífero gelatinoso, forma de oreja, color marrón oscuro. Comestible, muy usada en cocina asiática. Saprófita sobre madera.",
    },

    // --- Schizophyllaceae ---
    {
        nombre: "Schizophyllum commune",
        nombreComun: "Seta de los pliegues",
        familia: "Schizophyllaceae",
        orden: "Agaricales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: false,
        imagen: "Agaricales/schizophyllum.jpg",
        descripcion: "Pequeño, con himenio de pliegues largos y bifurcados, color blanco a gris. Saprófito sobre madera muerta. Cosmopolita.",
    },

    // --- Marasmiaceae ---
    {
        nombre: "Marasmius",
        nombreComun: "Hongos paracaidas y afines",
        familia: "Marasmiaceae",
        orden: "Agaricales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: false,
        imagen: "Agaricales/Marasmius.jpg",
        descripcion: "Pequeña, sombrero marrón con fibras pálidas, láminas blancas, pie delgado. Reviviscente (se rehidrata con lluvia). Comestible.",
    },

    // ---  crepidotaceae---
    {
        nombre: "Crepidotus",
        nombreComun: "Desconocido",
        familia: "Crepidotaceae",
        orden: "Agaricales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: false,
        imagen: "Agaricales/Crepidotus.jpg",
        descripcion: "Sombrero en forma de abanico u ostra, blanco a gris, láminas decurrentes, pie lateral o ausente. Saprófito sobre madera de roble.",
    },

    // --- Psathyrellaceae ---
    {
        nombre: "Psathyrella candolleana",
        nombreComun: "Psathyrella de Candolle",
        familia: "Psathyrellaceae",
        orden: "Agaricales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: false,
        imagen: "Agaricales/Agarical_4.jpg",
        descripcion: "Sombrero higrófano que cambia de color al secarse, láminas negruzcas, pie delgado y frágil. Saprófita en suelo húmedo.",
    },
    // --- Inocybaceae ---
    {
        nombre: "Inocybe sp",
        nombreComun: "Desconocido",
        familia: "Inocybaceae",
        orden: "Agaricales",
        tipo: TIPO.MICORRIZICO,
        comestible: false,
        toxico: false,
        imagen: "Agaricales/Inocybe.jpg",
        descripcion: "Sombrero blanco con fibras pálidas, láminas blancas, pie corto. Contiene muscarina. Micorrícica con Quercus.",
    },

    // --- Bolbitaceae ---
    {
        nombre: "Conocybe apala",
        nombreComun: "Conocybe blanca",
        familia: "Bolbitaceae",
        orden: "Agaricales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: false,
        imagen: "Agaricales/Agarical_4.jpg",
        descripcion: "Muy pequeña, sombrero cónico a campanulado, blanco a crema, láminas libres. Saprófita en césped y suelo húmedo.",
    },
    {
        nombre: "Bolbitius titubans",
        nombreComun: "Bolbitio tembloroso",
        familia: "Bolbitaceae",
        orden: "Agaricales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: false,
        imagen: "Agaricales/Agarical_1.jpg",
        descripcion: "Sombrero viscoso amarillo a marrón, láminas libres, pie frágil. Saprófito en estiércol y suelo rico en nitrógeno.",
    },

    // --- Hydnangiaceae ---
     {
        nombre: "Laccaria sp",
        nombreComun: "Desconocido",
        familia: "Hydnangiaceae",
        orden: "Agaricales",
        tipo: TIPO.MICORRIZICO,
        comestible: false,
        toxico: true,
        imagen: "Agaricales/Laccaria.jpg",
        descripcion: "Himenio en forma de láminas distantes separadas de coloración roja, esporada blanca, de tamaño pequeño y en asociación con acacias.",
    },
    //-- Irpicaceae ---

    {
        nombre: "Irpex rossetiformes",
        nombreComun: "Desconocido",
        familia: "Irpicaceae",
        orden: "Agaricales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: true,
        imagen: "Polyporales/Irpex.jpg",
        descripcion: "Himenoforo de dientes (hidnoides) en lugar de láminas, sombrero convexo, color crema a ocre. Micorrícico, comestible.",
    },

    // --- Marasmiaceae (extra) ---
    {
        nombre: "Gymnopus dryophilus",
        nombreComun: "Gimnopilo del roble",
        familia: "Marasmiaceae",
        orden: "Agaricales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: false,
        imagen: "Agaricales/Agarical_3.jpg",
        descripcion: "Pequeño, sombrero marrón con centro más oscuro, pie cartilaginoso. Saprófito en hojarasca de robles.",
    },

    // --- Psathyrellaceae (extra) ---
    {
        nombre: "Parasola plicatilis",
        nombreComun: "Parasola plicado",
        familia: "Psathyrellaceae",
        orden: "Agaricales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: false,
        imagen: "Agaricales/Parasola.jpg",
        descripcion: "Sombrero plisado como abanico, deliquescente, negro al madurar. Saprófito en césped y suelo descubierto.",
    },
    {
        nombre: "Coprinellus disseminatus",
        nombreComun: "Coprinelo disperso",
        familia: "Psathyrellaceae",
        orden: "Agaricales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: false,
        imagen: "Agaricales/Coprinellus_disseminatus.jpg",
        descripcion: "Crece en enjambres sobre tocones y madera. Sombrero pequeño gris, láminas negras que se liquefacen. Deliquescente.",
    },
     {
        nombre: "Coprinellus micaceus",
        nombreComun: "Desconocido",
        familia: "Psathyrellaceae",
        orden: "Agaricales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: false,
        imagen: "Agaricales/Coprinellus_micaceus.jpg",
        descripcion: "Gregario entre materia orgánica en descomposición. Sombrero mediano naranja, láminas negras que se liquefacen. Deliquescente.",
    },
     {
        nombre: "Psathyrella longipes",
        nombreComun: "Desconocido",
        familia: "Psathyrellaceae",
        orden: "Agaricales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: false,
        imagen: "Agaricales/Psathyrella_longipes.jpg",
        descripcion: "Sombrero acampanado de color marrón que palidece al secarse, pie largo y delgado, láminas oscuras. Saprófita en suelos con restos de madera.",
    },


    // --- Strophariaceae (extra) ---
    {
        nombre: "Gymnopilus luteofolius",
        nombreComun: "Desconocido",
        familia: "Strophariaceae",
        orden: "Agaricales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: true,
        imagen: "Agaricales/Agarical_4.jpg",
        descripcion: "Sombrero viscoso y pegajoso de color morado, anillo membranoso, láminas ferruginosas. Saprófita sobre madera de roble.",
    },
    {
    nombre: "Leratiomyces ceres",
        nombreComun: "Tapita roja",
        familia: "Strophariaceae",
        orden: "Agaricales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: true,
        imagen: "Agaricales/Leratiomyces.jpg",
        descripcion: "Sombrero convexo de color rojo con presencia de escamas en el margen, no presenta anillo, láminas de color gris. Saprófito.",
    },


    // --- Pleurotaceae (extra) ---
    {
        nombre: "Hohenbuehelia petaloides",
        nombreComun: "Hohenbuehelia pétalo",
        familia: "Pleurotaceae",
        orden: "Agaricales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: false,
        imagen: "Agaricales/Hohenbuehelia.jpg",
        descripcion: "Forma de pétalo o abanico, cuerpo fructífero gelatinoso. Saprófita sobre madera, nematófaga.",
    },
    {
        nombre: "Resupinatus applicatus",
        nombreComun: "Resupinado aplicado",
        familia: "Pleurotaceae",
        orden: "Agaricales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: false,
        imagen: "Agaricales/Resupinatus.jpg",
        descripcion: "Hongo muy pequeño, aplanado, adherido a la madera, color gris a marrón. Saprófito sobre madera en descomposición.",
    },

    // --- Sclerodermataceae ---
    {
        nombre: "Scleroderma sp",
        nombreComun: "Escleroderma",
        familia: "Sclerodermataceae",
        orden: "Boletales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: true,
        imagen: "Boletales/Scleroderma.jpg",
        descripcion: "Cuerpo fructífero subgloboso, peridio liso que se abre en estrellas. Micorrícico, tóxico.",
    },

    // --- Auriculariaceae (extra) ---
    {
        nombre: "Auricularia auricula-judae",
        nombreComun: "Oreja de Judas",
        familia: "Auriculariaceae",
        orden: "Auriculariales",
        tipo: TIPO.SAPROFITO,
        comestible: true,
        toxico: false,
        imagen: "Auriculariales/Auricularia_2.jpg",
        descripcion: "Cuerpo fructífero gelatinoso en forma de oreja, color marrón oscuro. Saprófita sobre madera de sauce y otros árboles.",
    },

    // --- Tremellaceae (extra) ---
    {
        nombre: "Tremella mesenterica",
        nombreComun: "Tremela amarilla",
        familia: "Tremellaceae",
        orden: "Tremellares",
        tipo: TIPO.PARASITO,
        comestible: true,
        toxico: false,
        imagen: "Ascomicetos/Tremella.jpg",
        descripcion: "Cuerpo fructífero gelatinoso, color amarillo anaranjado, forma irregular. Parásito de otros hongos corticiáceos.",
    },
    // --- Stereaceae ---
    {
        nombre: "Stereum hirsutum",
        nombreComun: "Estereum peludo",
        familia: "Stereaceae",
        orden: "Russulales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: false,
        imagen: "Russulales/Stereum.jpg",
        descripcion: "Hongo corticiáceo, costras semicirculares, superficie peluda, color marrón. Saprófito sobre madera muerta.",
    },

    // --- Auriscalpiaceae ---
    {
        nombre: "Artomyces pyxidatus",
        nombreComun: "Desconocido",
        familia: "Auriscalpiaceae",
        orden: "Russulales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: false,
        imagen: "Russulales/Artomyces.jpg",
        descripcion: "Pequeño hongo con sombrero convexo cubierto de escamas, pie lateral, himenio de dientes. Saprófito sobre conos de Pinus.",
    },
    // --- Geastreaceae---
    {
        nombre: "Geastrum sp",
        nombreComun: "Desconocido",
        familia: "Geastreaceae",
        orden: "Geastreales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: false,
        imagen: "Geastreales/Geastrum.jpg",
        descripcion: "Hongo en forma de estrella, esporada café a negra. Saprófito en suelo.",
    },
    // ---- Ascomicetos --
     {
        nombre: "Cordierites sp",
        nombreComun: "Desconocido",
        familia: "Cordieritidaceae",
        orden: "Cyttariales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: false,
        imagen: "Ascomicetos/Cordierites.jpg",
        descripcion: "Ascomiceto en forma de copa sobre madera en descomposición.",
    },
    //-- Himenochateales --
    {
        nombre: "Rickenella",
        nombreComun: "Desconocido",
        familia: "Rickenellaceae",
        orden: "Himenochaetales",
        tipo: TIPO.SAPROFITO,
        comestible: false,
        toxico: false,
        imagen: "Himenochaetales/Rickenella.jpg",
        descripcion: "Honguito asociado a musgos, de sombrero pequeño. Saprófito.",
    },
];

// ============================================================================
// CONFIGURACIÓN DE ÓRDENES Y FAMILIAS
// ============================================================================
const ORDENES = Object.freeze({
    Agaricales: {
        familias: [
            "Amanitaceae", "Agaricaceae", "Bolbitaceae", "Cortinariaceae",
            "Hydnangiaceae", "Inocybaceae", "Marasmiaceae", "Schizophyllaceae",
            "Strophariaceae", "Pleurotaceae", "Psathyrellaceae", "Tricholomataceae",
            "Crepidotaceae",
        ],
        color: "#556b2f",
    },
    Boletales: {
        familias: ["Boletaceae", "Sclerodermataceae"],
        color: "#bda387",
    },  
    Russulales: {
        familias: ["Russulaceae", "Stereaceae", "Auriscalpiaceae"],
        color: "#4a3e3d",
    },
    Auriculariales: {
        familias: ["Auriculariaceae"],
        color: "#8b6f5e",
    },
    Tremellares: {
        familias: ["Tremellaceae"],
        color: "#c9a87c",
    },
    Polyporales: {
        familias: ["Polyporaceae", "Fomitopsidaceae", "Irpicaceae"

        ],
        color: "#7a6b5d",
    },
    Geastreales: {
        familias: ["Geastraceae"],
        color: "#504494",
    },
    Cyttariales: {
        familias: ["Cordieritidaceae"],
        color: "#945244",
    },
    Himenochaetales: {
        familias: ["Rickenellaceae"],
        color: "#F08A0C",
    }
});

// ============================================================================
// GÉNEROS DESTACADOS PARA ACCESO RÁPIDO
// ============================================================================
const GENEROS_DESTACADOS = Object.freeze([
    { nombre: "Amanita", color: "#d44" },
    { nombre: "Agaricus", color: "#4a7" },
    { nombre: "Cortinarius", color: "#74a" },
    { nombre: "Chalciporus", color: "#c84" },
    { nombre: "Russula", color: "#48c" },
    { nombre: "Coprinellus", color: "#4aa" },
    { nombre: "Tremella", color: "#e8c" },
    { nombre: "Auricularia", color: "#a8a" },
]);

// ============================================================================
// CACHE DE ELEMENTOS DEL DOM
// ============================================================================
const DOM = {
    input: document.getElementById("buscador-input"),
    sugerencias: document.getElementById("buscador-sugerencias"),
    resultados: document.getElementById("buscador-resultados"),
    limpiar: document.getElementById("buscador-limpiar"),
    filtros: {
        comestibles: document.getElementById("filtro-comestibles"),
        toxicos: document.getElementById("filtro-toxicos"),
        micorrizicos: document.getElementById("filtro-micorrizicos"),
        saprofitos: document.getElementById("filtro-saprofitos"),
    },
    generosGrid: document.getElementById("generos-grid"),
};

// ============================================================================
// FUNCIONES DE FILTRADO
// ============================================================================
function obtenerEspeciesFiltradas() {
    const consulta = DOM.input.value.toLowerCase().trim();
    let resultados = ESPECIES;

    if (consulta.length >= CONFIG.MIN_CHARS_FOR_SEARCH) {
        resultados = resultados.filter((especie) =>
            especie.nombre.toLowerCase().includes(consulta) ||
            especie.nombreComun.toLowerCase().includes(consulta) ||
            especie.familia.toLowerCase().includes(consulta) ||
            especie.orden.toLowerCase().includes(consulta)
        );
    }

    if (DOM.filtros.comestibles.checked) resultados = resultados.filter((e) => e.comestible);
    if (DOM.filtros.toxicos.checked) resultados = resultados.filter((e) => e.toxico);
    if (DOM.filtros.micorrizicos.checked) resultados = resultados.filter((e) => e.tipo === TIPO.MICORRIZICO);
    if (DOM.filtros.saprofitos.checked) resultados = resultados.filter((e) => e.tipo === TIPO.SAPROFITO);

    return resultados;
}

// ============================================================================
// FUNCIONES DE RENDERIZADO
// ============================================================================
function renderizarSugerencias() {
    const consulta = DOM.input.value.toLowerCase().trim();

    if (consulta.length < CONFIG.MIN_CHARS_FOR_SEARCH) {
        DOM.sugerencias.innerHTML = "";
        DOM.sugerencias.classList.remove("activo");
        return;
    }

    const sugerencias = ESPECIES.filter(
        (e) =>
            e.nombre.toLowerCase().includes(consulta) ||
            e.nombreComun.toLowerCase().includes(consulta)
    ).slice(0, CONFIG.MAX_SUGGESTIONS);

    if (sugerencias.length === 0) {
        DOM.sugerencias.innerHTML = '<div class="sugerencia-vacia">No se encontraron coincidencias</div>';
    } else {
        DOM.sugerencias.innerHTML = sugerencias
            .map(
                (e) => `
            <div class="sugerencia-item" role="option" data-nombre="${e.nombre}">
                <span class="sugerencia-nombre">${e.nombre}</span>
                <span class="sugerencia-familia">${e.familia}</span>
            </div>
        `
            )
            .join("");
    }

    DOM.sugerencias.classList.add("activo");
}

function obtenerClaseBadge(especie) {
    if (especie.comestible) return BADGE.COMESTIBLE;
    if (especie.toxico) return BADGE.TOXICO;
    return BADGE.NEUTRAL;
}

function obtenerEtiquetaBadge(especie) {
    if (especie.comestible) return "Comestible";
    if (especie.toxico) return "Tóxico";
    return "No clasificado";
}

function renderizarResultados() {
    const resultados = obtenerEspeciesFiltradas();

    if (resultados.length === 0) {
        DOM.resultados.innerHTML = `
            <div class="resultado-vacio">
                <i class="fas fa-search"></i>
                <p>No se encontraron especies que coincidan con tu búsqueda.</p>
                <p>Intenta con otros términos o desactiva los filtros.</p>
            </div>
        `;
        return;
    }

    DOM.resultados.innerHTML = `
        <p class="resultado-contador">${resultados.length} especie${resultados.length > 1 ? "s" : ""} encontrada${resultados.length > 1 ? "s" : ""}</p>
        <div class="resultados-grid">
            ${resultados
                .map(
                    (e) => `
                <div class="resultado-card">
                    <img src="${e.imagen}" alt="${e.nombre}" class="resultado-img" loading="lazy" onerror="this.src='${CONFIG.IMG_FALLBACK}'">
                    <div class="resultado-info">
                        <h3>${e.nombre}</h3>
                        <p class="resultado-comun">${e.nombreComun}</p>
                        <span class="resultado-badge ${obtenerClaseBadge(e)}">${obtenerEtiquetaBadge(e)}</span>
                        <span class="resultado-badge tipo-${e.tipo}">${e.tipo}</span>
                        <p class="resultado-desc">${e.descripcion}</p>
                        <p class="resultado-meta"><strong>Familia:</strong> ${e.familia} | <strong>Orden:</strong> ${e.orden}</p>
                    </div>
                </div>
            `
                )
                .join("")}
        </div>
    `;
}

function renderizarGeneros() {
    DOM.generosGrid.innerHTML = GENEROS_DESTACADOS
        .map(
            (g) => `
            <div class="genero-card" style="border-left-color: ${g.color}">
                <h3>${g.nombre}</h3>
                <p>${ESPECIES.filter((e) => e.nombre.startsWith(g.nombre)).length} especie${ESPECIES.filter((e) => e.nombre.startsWith(g.nombre)).length > 1 ? "s" : ""} registrada${ESPECIES.filter((e) => e.nombre.startsWith(g.nombre)).length > 1 ? "s" : ""}</p>
            </div>
        `
        )
        .join("");
}

function renderizarIndice() {
    const tabsPrincipales = ["agaricales", "boletales", "russulales"];

    Object.entries(ORDENES).forEach(([orden, datos]) => {
        const tabId = orden.toLowerCase();
        // Los 3 principales van a su propio tab
        if (tabsPrincipales.includes(tabId)) {
            const tabContent = document.getElementById(`tab-${tabId}`);
            if (!tabContent) return;

            tabContent.innerHTML = `
            <h3>${orden}</h3>
            <div class="familias-grid">
                ${datos.familias
                    .map((familia) => {
                        const cantidad = ESPECIES.filter((e) => e.familia === familia).length;
                        return `
                            <div class="familia-card">
                                <h4><a href="agaricales-familias/${familia}.html">${familia}</a></h4>
                                <p>${cantidad} especie${cantidad > 1 ? "s" : ""}</p>
                            </div>
                        `;
                    })
                    .join("")}
            </div>
        `;
        }
    });

    // Todo lo demás (los de menos familias) va a "Otros órdenes"
    const otros = Object.entries(ORDENES).filter(
        ([orden]) => !tabsPrincipales.includes(orden.toLowerCase())
    );
    const tabOtros = document.getElementById("tab-otros");
    if (tabOtros) {
        tabOtros.innerHTML = otros
            .map(
                ([orden, datos]) => `
            <h3>${orden}</h3>
            <div class="familias-grid">
                ${datos.familias
                    .map((familia) => {
                        const cantidad = ESPECIES.filter((e) => e.familia === familia).length;
                        return `
                            <div class="familia-card">
                                <h4><a href="agaricales-familias/${familia}.html">${familia}</a></h4>
                                <p>${cantidad} especie${cantidad > 1 ? "s" : ""}</p>
                            </div>
                        `;
                    })
                    .join("")}
            </div>
        `
            )
            .join("");
    }
}

// ============================================================================
// EVENTOS
// ============================================================================
function initEventos() {
    DOM.input.addEventListener("input", () => {
        renderizarSugerencias();
        renderizarResultados();
    });

    DOM.input.addEventListener("focus", () => {
        if (DOM.input.value.length >= CONFIG.MIN_CHARS_FOR_SEARCH) {
            renderizarSugerencias();
        }
    });

    DOM.limpiar.addEventListener("click", () => {
        DOM.input.value = "";
        DOM.sugerencias.innerHTML = "";
        DOM.sugerencias.classList.remove("activo");
        renderizarResultados();
        DOM.input.focus();
    });

    document.addEventListener("click", (evento) => {
        if (!evento.target.closest(".buscador-contenedor")) {
            DOM.sugerencias.classList.remove("activo");
        }
    });

    DOM.sugerencias.addEventListener("click", (evento) => {
        const item = evento.target.closest(".sugerencia-item");
        if (item) {
            DOM.input.value = item.dataset.nombre;
            DOM.sugerencias.classList.remove("activo");
            renderizarResultados();
        }
    });

    Object.values(DOM.filtros).forEach((filtro) => {
        filtro.addEventListener("change", renderizarResultados);
    });

    document.querySelectorAll(".tab-btn").forEach((boton) => {
        boton.addEventListener("click", () => {
            document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
            document.querySelectorAll(".tab-content").forEach((c) => c.classList.remove("active"));
            boton.classList.add("active");
            const tabId = boton.dataset.tab;
            const tabContent = document.getElementById(`tab-${tabId}`);
            if (tabContent) tabContent.classList.add("active");
        });
    });
}

// ============================================================================
// INICIALIZACIÓN
// ============================================================================
function init() {
    renderizarGeneros();
    renderizarResultados();
    renderizarIndice();
    initEventos();
}

document.addEventListener("DOMContentLoaded", init);