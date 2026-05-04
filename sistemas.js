const SISTEMAS = [
      {
    id: "AWS 50",
    nombre: "AWS 50",
    descripcionCorta: "Sistema estándar de ventanas con aislamiento térmico y una profundidad de construcción de 50 mm",

    usos: ["ventana", "balconera"],
    aperturas: ["batiente", "oscilobatiente", "fijo"],
    estilos: ["estandar"],

    uw_max: 1.6,
    rw_min: 36,
    agua_clase: 5,
    aire_clase: 4,
    viento_clase: "A3",

    rpt: true,
    passivhaus: false,
    rc2: false,
    rc3: false,

    descripcion: "El sistema estándar de ventanas con aislamiento térmico y una profundidad de construcción de 50 mm ofrece amplias posibilidades para satisfacer diferentes requisitos de forma integral. La base para ello son las propiedades funcionales y creativas del sistema de aluminio:
los componentes, que se complementan entre sí, combinan ventajas como caras vistas estrechas y herraje oculto para ventanas de apertura interior y exterior.",

    prestaciones: [
      ["Profundidad de marco", "50 mm"],
      ["RPT poliamida", "≥ 25 mm"],
      ["Transmitancia Uw", "Hasta 1.6 W/m²K"],
      ["Atenuación acústica", "Desde 36 dB"],
      ["Permeabilidad al aire", "Clase 4"],
      ["Estanqueidad al agua", "Clase 5"]
    ],

    barras: [72, 70, 75],

    docs: ["ficha", "detalles_cad", "bim", "dop", "marcadoCE", "pliego"]
  },
   {
    id: "AWS 60",
    nombre: "AWS 60",
    descripcionCorta: "Su versatilidad se basa en la funcionalidad y posibilidades creativas del sistema de aluminio: caras vistas y estrechas y herraje oculto, manual o electromecánico, para ventanas de apertura interior o exterior.",

    usos: ["ventana", "balconera"],
    aperturas: ["batiente", "oscilobatiente", "fijo"],
    estilos: ["estandar"],

    uw_max: 1.6,
    rw_min: 36,
    agua_clase: 5,
    aire_clase: 4,
    viento_clase: "A3",

    rpt: true,
    passivhaus: false,
    rc2: true,
    rc3: false,

    descripcion: "Carpintería de aluminio con rotura de puente térmico de 70 mm de espesor de hoja, adecuada para ventanas y balconeras batientes.",

    prestaciones: [
      ["Profundidad de marco", "60 mm"],
      ["RPT poliamida", "≥ 25 mm"],
      ["Transmitancia Uw", "Hasta 1.6 W/m²K"],
      ["Atenuación acústica", "Desde 36 dB"],
      ["Permeabilidad al aire", "Clase 4"],
      ["Estanqueidad al agua", "Clase 5"]
    ],

    barras: [72, 70, 75],

    docs: ["ficha", "detalles_cad", "bim", "dop", "marcadoCE", "pliego"]
  },
   {
    id: "AWS 60 BS",
    nombre: "AWS 60 BS",
    descripcionCorta: "versión AWS 60 BS (Block System) ofrece una excelente solución para construcciones en hoja oculta con una profundidad de construcción de 60 mm",

    usos: ["ventana", "balconera"],
    aperturas: ["batiente", "oscilobatiente", "fijo"],
    estilos: ["hoja oculta"],

    uw_max: 1.6,
    rw_min: 36,
    agua_clase: 5,
    aire_clase: 4,
    viento_clase: "A3",

    rpt: true,
    passivhaus: false,
    rc2: true,
    rc3: false,

    descripcion: "Carpintería de aluminio con rotura de puente térmico de 60 mm de espesor de hoja, con hoja oculta, adecuada para ventanas y balconeras batientes.",

    prestaciones: [
      ["Profundidad de marco", "60 mm"],
      ["RPT poliamida", "≥ 25 mm"],
      ["Transmitancia Uw", "Hasta 1.6 W/m²K"],
      ["Atenuación acústica", "Desde 36 dB"],
      ["Permeabilidad al aire", "Clase 4"],
      ["Estanqueidad al agua", "Clase 5"]
    ],

    barras: [72, 70, 75],

    docs: ["ficha", "detalles_cad", "bim", "dop", "marcadoCE", "pliego"]
  },
  
  {
    id: "AWS 70",
    nombre: "AWS 70",
    descripcionCorta: "Sistema batiente con RPT 25 mm",

    usos: ["ventana", "balconera"],
    aperturas: ["batiente", "oscilobatiente", "fijo"],
    estilos: ["estandar"],

    uw_max: 1.6,
    rw_min: 36,
    agua_clase: 5,
    aire_clase: 4,
    viento_clase: "A3",

    rpt: true,
    passivhaus: false,
    rc2: true,
    rc3: false,

    descripcion: "Carpintería de aluminio con rotura de puente térmico de 70 mm de espesor de hoja, adecuada para ventanas y balconeras batientes.",

    prestaciones: [
      ["Profundidad de marco", "70 mm"],
      ["RPT poliamida", "≥ 25 mm"],
      ["Transmitancia Uw", "Hasta 1.6 W/m²K"],
      ["Atenuación acústica", "Desde 36 dB"],
      ["Permeabilidad al aire", "Clase 4"],
      ["Estanqueidad al agua", "Clase 5"]
    ],

    barras: [72, 70, 75],

    docs: ["ficha", "detalles_cad", "bim", "dop", "marcadoCE", "pliego"]
  },

  {
    id: "AWS 75 PD",
    nombre: "AWS 75 PD",
    descripcionCorta: "Máxima transparencia con las mínimas caras vistas",

    usos: ["ventana", "balconera"],
    aperturas: ["batiente", "oscilobatiente", "fijo"],
    estilos: ["estandar"],

    uw_max: 1.2,
    rw_min: 40,
    agua_clase: 7,
    aire_clase: 4,
    viento_clase: "A4",

    rpt: true,
    passivhaus: true,
    rc2: true,
    rc3: true,

    descripcion: "Schüco ofrece por primera vez un elemento practicable que cumple de manera óptima dichos requisitos arquitectónicos, con las mínimas caras vistas interiores y exteriores y un excelente aislamiento térmico.",

    prestaciones: [
      ["Profundidad de marco", "80 mm"],
      ["RPT poliamida", "≥ 35 mm"],
      ["Transmitancia Uw", "Hasta 1.2 W/m²K"],
      ["Atenuación acústica", "Desde 40 dB"],
      ["Permeabilidad al aire", "Clase 4"],
      ["Estanqueidad al agua", "Clase 7"]
    ],

    barras: [90, 85, 88],

    docs: ["ficha", "detalles_cad", "bim", "dop", "marcadoCE", "pliego"]
  },

  {
    id: "corredera_minimal",
    nombre: "Corredera Minimal",
    descripcionCorta: "Sistema corredero de hoja minimalista",

    usos: ["corredera", "balconera"],
    aperturas: ["corredera"],
    estilos: ["minimalista"],

    uw_max: 1.8,
    rw_min: 34,
    agua_clase: 6,
    aire_clase: 3,
    viento_clase: "A3",

    rpt: true,
    passivhaus: false,
    rc2: false,
    rc3: false,

    descripcion: "Sistema corredero de estética minimalista para grandes huecos acristalados.",

    prestaciones: [
      ["Tipo de apertura", "Corredera"],
      ["Estética", "Minimalista"],
      ["Transmitancia Uw", "Hasta 1.8 W/m²K"],
      ["Atenuación acústica", "Desde 34 dB"],
      ["Permeabilidad al aire", "Clase 3"],
      ["Estanqueidad al agua", "Clase 6"]
    ],

    barras: [65, 60, 80],

    docs: ["ficha", "detalles_cad", "bim", "pliego"]
  }
];
