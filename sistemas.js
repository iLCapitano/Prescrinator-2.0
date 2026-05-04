const SISTEMAS = [
   {
    id: "AWS 60",
    nombre: "AWS 60",
    descripcionCorta: "Sistema batiente con RPT",

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
    id: "AWS 60BS",
    nombre: "AWS 60 bs",
    descripcionCorta: "Sistema de hoja oculta",

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
    id: "cusho_80_hi",
    nombre: "CUSHO 80 HI",
    descripcionCorta: "Sistema batiente de altas prestaciones térmicas",

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

    descripcion: "Sistema de aluminio de altas prestaciones para proyectos con exigencias térmicas, acústicas y de seguridad elevadas.",

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
