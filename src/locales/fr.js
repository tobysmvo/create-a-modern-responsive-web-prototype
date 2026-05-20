export const fr = {
  brand: {
    name: "HomèVo",
    subtitle: "Laboratoire éco-design"
  },

  nav: [
    { id: "home", label: "Accueil" },
    { id: "analysis", label: "Analyse" },
    { id: "library", label: "Modèles" },
    { id: "materials", label: "Matériaux" },
    { id: "methods", label: "Méthodes" },
    { id: "dashboard", label: "Tableau" }
  ],

  actions: {
    openAnalysis: "Ouvrir l’analyse",
    openWorkspace: "Ouvrir l’espace pro",
    toggleMenu: "Afficher le menu",
    languageSwitch: "Changer de langue",
    analyze: "Analyser",
    viewLibrary: "Voir les modèles"
  },

  library: {
    eyebrow: "Bibliothèque de modèles",
    title: "Comparer des modèles architecturaux adaptés aux climats.",
    intro:
      "Explorer des systèmes constructifs écologiques selon leurs matériaux, leurs performances et leur adaptation environnementale.",

    filters: [
      "Tous",
      "Climat tropical",
      "Climat aride",
      "Climat tempéré",
      "Environnement montagneux",
      "Environnement côtier",
      "Contexte urbain/rural"
    ],

    stats: {
      durability: "Durabilité",
      complexity: "Complexité",
      efficiency: "Efficacité"
    },

    technicalLabel: "Description technique"
  },

  data: {
    houseModels: [
      {
        name: "Maison à cour surélevée et ventilée",
        climate: "Tropical humide",

        tags: [
          "Climat tropical",
          "Environnement côtier",
          "Contexte urbain/rural"
        ],

        materials: ["Bambou", "Bois", "Terre comprimée"],

        score: 92,

        durability: "45 ans",

        complexity: "Moyenne",

        energy: "A",

        image:
          "/assets/models/raised-ventilated-courtyard-house.jpg",

        media: [
          {
            type: "image",
            src: "/assets/models/raised-ventilated-courtyard-house.jpg",
            alt: "Maison tropicale ventilée"
          }
        ],

        technical: [
          "Plancher surélevé contre l’humidité et les inondations.",
          "Ventilation traversante naturelle.",
          "Cour sociale ombragée favorisant le confort thermique."
        ],

        description:
          "Plancher surélevé, véranda ombragée et pièces ventilées autour d’une cour sociale."
      },

      {
        name: "Habitat en terre pisée à inertie thermique",

        climate: "Climat aride",

        tags: [
          "Climat aride",
          "Contexte urbain/rural"
        ],

        materials: ["Terre pisée", "Chaux", "Pierre"],

        score: 88,

        durability: "70 ans",

        complexity: "Faible",

        energy: "A-",

        image:
          "/assets/models/rammed-earth-thermal-mass-dwelling.jpg",

        media: [
          {
            type: "image",
            src: "/assets/models/rammed-earth-thermal-mass-dwelling.jpg",
            alt: "Habitat en terre pisée"
          }
        ],

        technical: [
          "Murs épais à forte inertie thermique.",
          "Ouvertures protégées contre le soleil direct.",
          "Plan compact limitant les gains thermiques."
        ],

        description:
          "Murs épais, plan compact et ouvertures protégées stabilisent les écarts de température."
      },

      {
        name: "Ensemble alpin bois-pierre",

        climate: "Environnement montagneux",

        tags: [
          "Environnement montagneux",
          "Climat tempéré"
        ],

        materials: ["Pierre", "Bois", "Enduit chaux"],

        score: 84,

        durability: "80 ans",

        complexity: "Élevée",

        energy: "B+",

        image:
          "/assets/models/alpine-timber-stone-cluster.jpg",

        media: [
          {
            type: "image",
            src: "/assets/models/alpine-timber-stone-cluster.jpg",
            alt: "Architecture alpine bois pierre"
          }
        ],

        technical: [
          "Toiture pentue contre la neige.",
          "Socle en pierre pour la durabilité.",
          "Structure bois limitant les ponts thermiques."
        ],

        description:
          "Toit pentu, enveloppe compacte et soubassement pierre contre la neige et le froid."
      },

      {
        name: "Maison côtière à tampon de vent",

        climate: "Côtier venteux",

        tags: [
          "Environnement côtier",
          "Contexte urbain/rural"
        ],

        materials: ["Acier recyclé", "Bois", "Chaux"],

        score: 81,

        durability: "55 ans",

        complexity: "Moyenne",

        energy: "B+",

        image:
          "/assets/models/coastal-wind-buffer-row-house.jpg",

        media: [
          {
            type: "image",
            src: "/assets/models/coastal-wind-buffer-row-house.jpg",
            alt: "Maison côtière écologique"
          }
        ],

        technical: [
          "Patios filtrants contre l’air salin.",
          "Toiture aérodynamique résistante au vent.",
          "Protection renforcée contre la corrosion."
        ],

        description:
          "Ligne de toit aérodynamique, patios filtrés et détails adaptés à l’air salin."
      },

      {
        name: "Module urbain bas carbone",

        climate: "Climat tempéré",

        tags: [
          "Climat tempéré",
          "Contexte urbain/rural"
        ],

        materials: ["CLT", "Brique réutilisée", "Toit végétalisé"],

        score: 86,

        durability: "60 ans",

        complexity: "Moyenne",

        energy: "A",

        image:
          "/assets/models/urban-low-carbon-infill-module.jpg",

        media: [
          {
            type: "image",
            src: "/assets/models/urban-low-carbon-infill-module.jpg",
            alt: "Habitat urbain bas carbone"
          }
        ],

        technical: [
          "Modules préfabriqués à faible empreinte carbone.",
          "Gestion d’eau mutualisée.",
          "Toiture végétalisée améliorant le confort thermique."
        ],

        description:
          "Habitat compact en bois préfabriqué, gestion d’eau partagée et toiture plantée."
      },

      {
        name: "Concession à cour en latérite",

        climate: "Tropical sec",

        tags: [
          "Climat tropical",
          "Climat aride",
          "Contexte urbain/rural"
        ],

        materials: ["Latérite", "Fibre de palmier", "Enduit terre"],

        score: 89,

        durability: "50 ans",

        complexity: "Faible",

        energy: "A-",

        image:
          "/assets/models/laterite-courtyard-compound.jpg",

        media: [
          {
            type: "image",
            src: "/assets/models/laterite-courtyard-compound.jpg",
            alt: "Concession en latérite"
          }
        ],

        technical: [
          "Murs porteurs en latérite.",
          "Espaces ombragés adaptés aux climats chauds.",
          "Matériaux biosourcés et respirants."
        ],

        description:
          "Murs porteurs en latérite et espaces extérieurs ombragés pour les climats chauds."
      }
    ]
  }
};