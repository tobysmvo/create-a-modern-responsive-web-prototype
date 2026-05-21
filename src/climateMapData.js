export const climateZones = [
  {
    id: "tropicalHumid",
    coords: [0.0, 110.0],
    label: {
      fr: "Tropical humide",
      en: "Tropical humid"
    },
    tagLabel: {
      fr: "Climat tropical",
      en: "Tropical climate"
    },
    summary: {
      fr: "Chaleurs intenses et pluies abondantes demandent des stratégies passives respirantes.",
      en: "High heat and heavy rains demand breathable passive strategies."
    },
    humidity: "82%",
    temperature: "28°C",
    materials: {
      fr: ["Bambou", "Bois", "Terre comprimée"],
      en: ["Bamboo", "Timber", "Compressed earth"]
    },
    methods: {
      fr: ["Ventilation naturelle", "Refroidissement passif", "Toitures ventilées"],
      en: ["Natural ventilation", "Passive cooling", "Ventilated roofs"]
    },
    resilience: 91,
    color: "#2f7274"
  },
  {
    id: "arid",
    coords: [20.0, 15.0],
    label: {
      fr: "Climat aride",
      en: "Arid climate"
    },
    tagLabel: {
      fr: "Climat aride",
      en: "Arid climate"
    },
    summary: {
      fr: "Soleil fort et nuits fraîches nécessitent des murs inertiels et une ombre ciblée.",
      en: "Strong sun and cool nights demand thermal mass walls and targeted shading."
    },
    humidity: "18%",
    temperature: "24°C",
    materials: {
      fr: ["Terre pisée", "Pierre", "Chaux"],
      en: ["Rammed earth", "Stone", "Lime"]
    },
    methods: {
      fr: ["Inertie thermique", "Murs épais", "Ombres profondes"],
      en: ["Thermal inertia", "Thick walls", "Deep shading"]
    },
    resilience: 88,
    color: "#b97854"
  },
  {
    id: "temperate",
    coords: [46.0, 10.0],
    label: {
      fr: "Climat tempéré",
      en: "Temperate climate"
    },
    tagLabel: {
      fr: "Climat tempéré",
      en: "Temperate climate"
    },
    summary: {
      fr: "Saisons équilibrées et confort varié appellent des systèmes hybrides adaptatifs.",
      en: "Balanced seasons call for adaptive hybrid systems."
    },
    humidity: "64%",
    temperature: "16°C",
    materials: {
      fr: ["Bois", "Brique réutilisée", "Toit végétalisé"],
      en: ["Timber", "Recycled brick", "Green roof"]
    },
    methods: {
      fr: ["Toitures végétalisées", "Modules préfabriqués", "Gestion d'eau"],
      en: ["Green roofs", "Prefabricated modules", "Water management"]
    },
    resilience: 86,
    color: "#7a5a3a"
  },
  {
    id: "mountain",
    coords: [47.0, 9.0],
    label: {
      fr: "Montagne froide",
      en: "Mountain cold"
    },
    tagLabel: {
      fr: "Environnement montagneux",
      en: "Mountain environment"
    },
    summary: {
      fr: "Neige et froid exigent des toitures raides, des plinthes pierre et des masses compactes.",
      en: "Snow and cold require steep roofs, stone plinths and compact massing."
    },
    humidity: "42%",
    temperature: "4°C",
    materials: {
      fr: ["Pierre", "Bois", "Chaux"],
      en: ["Stone", "Wood", "Lime plaster"]
    },
    methods: {
      fr: ["Toits pentus", "Murs isolés", "Enveloppe étanche"],
      en: ["Steep roofs", "Insulated walls", "Tight envelope"]
    },
    resilience: 84,
    color: "#556a4f"
  },
  {
    id: "coastal",
    coords: [14.0, -75.0],
    label: {
      fr: "Climat côtier",
      en: "Coastal climate"
    },
    tagLabel: {
      fr: "Environnement côtier",
      en: "Coastal environment"
    },
    summary: {
      fr: "Vents salins et humidité demandent des détails résistants à la corrosion et des écrans filtrants.",
      en: "Salt wind and humidity demand corrosion-resistant details and screened buffers."
    },
    humidity: "76%",
    temperature: "22°C",
    materials: {
      fr: ["Acier recyclé", "Bois", "Chaux"],
      en: ["Recycled steel", "Timber", "Lime"]
    },
    methods: {
      fr: ["Barrières ventilées", "Enveloppe résistante", "Toitures aérodynamiques"],
      en: ["Ventilated barriers", "Resilient envelopes", "Aerodynamic roofs"]
    },
    resilience: 81,
    color: "#4c8f8a"
  },
  {
    id: "sahel",
    coords: [15.0, 10.0],
    label: {
      fr: "Zone sahélienne",
      en: "Sahel zone"
    },
    tagLabel: {
      fr: "Climat aride",
      en: "Arid climate"
    },
    summary: {
      fr: "Sècheresse et températures élevées favorisent les filières biosourcées à forte inertie.",
      en: "Drought and high heat favor bio-based systems with strong thermal mass."
    },
    humidity: "23%",
    temperature: "30°C",
    materials: {
      fr: ["Latérite", "Fibre de palmier", "Terre"],
      en: ["Laterite", "Palm fiber", "Earth plaster"]
    },
    methods: {
      fr: ["Murs massifs", "Cours ombragées", "Matériaux locaux"],
      en: ["Massive walls", "Shaded courtyards", "Local materials"]
    },
    resilience: 89,
    color: "#a05a38"
  },
  {
    id: "mediterranean",
    coords: [35.0, 18.0],
    label: {
      fr: "Climat méditerranéen",
      en: "Mediterranean climate"
    },
    tagLabel: {
      fr: "Climat tempéré",
      en: "Temperate climate"
    },
    summary: {
      fr: "Étés chauds et hivers doux nécessitent ombrage, inertie et ventilations ciblées.",
      en: "Hot summers and mild winters require shade, thermal mass, and targeted ventilation."
    },
    humidity: "58%",
    temperature: "20°C",
    materials: {
      fr: ["Bois", "Pierre", "Chaux"],
      en: ["Timber", "Stone", "Lime"]
    },
    methods: {
      fr: ["Ombres projetées", "Murs en pierre", "Ventilation croisée"],
      en: ["Projected shading", "Stone walls", "Cross ventilation"]
    },
    resilience: 87,
    color: "#557b7a"
  }
];