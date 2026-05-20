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
    openAnalysis: "Ouvrir l'analyse",
    openWorkspace: "Ouvrir l'espace pro",
    toggleMenu: "Ouvrir le menu",
    languageSwitch: "Changer de langue",
    analyze: "Analyser",
    viewLibrary: "Voir la bibliotheque"
  },
  home: {
    badge: "Intelligence pour l'habitat adapte au climat",
    title: "Concevoir des batiments qui appartiennent a leur climat, leur sol et leur culture.",
    intro:
      "HomèVo aide les équipes d'architecture et d'ingénierie à évaluer les géomatériaux locaux, les systèmes passifs, le contexte social et les risques environnementaux avant que le concept ne devienne coûteux à modifier.",
    start: "Lancer l'analyse environnementale",
    browse: "Explorer les modèles",
    heroDiagram: "Coupe bioclimatique",
    metrics: [
      { label: "Carbone incorpore", value: "-42%" },
      { label: "Heures de confort", value: "91%" },
      { label: "Matériaux locaux", value: "78%" }
    ],
    searchPlaceholder: "Trouver des modèles d'habitat adaptés à votre environnement",
    searchClimateLabel: "Climat",
    searchClimateValue: "Tropical humide",
    searchRegionLabel: "Région",
    searchRegionValue: "Delta côtier",
    missionBadge: "Mission de la plateforme",
    missionTitle: "Un espace de recherche pour une architecture qui répond au lieu.",
    missionText:
      "Le prototype relie typologies climatiques, dynamiques du terrain, savoir-faire locaux, comportement des géomatériaux et systèmes bas carbone. Il est pensé pour des professionnels qui prennent des décisions concrètes.",
    featureCards: [
      { title: "Ingénierie écologique", text: "Évaluer cycles de l'eau, confort passif, flux de matériaux et exposition carbone." },
      { title: "Sociétés locales", text: "Relier la logique constructive aux usages, compétences, formes d'habitat et pratiques d'entretien." },
      { title: "Urbanisme résilient", text: "Comparer densité, îlots de chaleur, espace public, mobilité et durabilité à long terme." }
    ],
    featuredEyebrow: "Modèles en avant",
    featuredTitle: "Systèmes d'habitat ajustés au climat, aux savoir-faire et à la logique structurelle.",
    intelligence: [
      { title: "Matériaux locaux", text: "Terre, latérite, bambou, pierre, bois et chaux comparés selon le climat et le rôle structurel." },
      { title: "Adaptation climatique", text: "Orientation, ombrage, ventilation, inertie thermique et toitures reliés aux microclimats." },
      { title: "Ingénierie écologique", text: "Collecte d'eau, assemblages bas carbone et stratégies de durabilité pour une longue vie utile." }
    ],
    casesEyebrow: "Etudes de cas",
    casesTitle: "Leçons d'habitat écologique dans différents environnements."
  },
  analysis: {
    eyebrow: "Analyse environnementale",
    title: "Transformer les conditions locales en recommandations ecologiques constructibles.",
    intro:
      "Sélectionnez climat, terrain, culture et matériaux disponibles pour générer une note de conception professionnelle en phase amont.",
    siteInputs: "Données du site",
    generatedBrief: "Note générée",
    adaptation: "Adaptation",
    aiLabel: "Recommandation IA",
    climateMap: "Carte climatique interactive",
    insightsTitle: "Observations clés",
    advantagesTitle: "Avantages techniques",
    limitsTitle: "Limites à surveiller",
    observationsTitle: "Observations de conception",
    materialComparisonTitle: "Comparaison matériaux",
    materialComparisonText: "Notes de compatibilité et pertinence par matériau selon le climat choisi.",
    indicatorLabels: { thermal: "Thermique", carbon: "Carbone", resilience: "Résilience", adaptation: "Adaptation" },
    fields: {
      climate: "Type de climat",
      region: "Région géographique",
      terrain: "Type de terrain",
      culture: "Culture locale",
      materials: "Matériaux locaux disponibles",
      method: "Méthode constructive prioritaire"
    }
  },
  library: {
    eyebrow: "Bibliothèque de modèles",
    title: "Comparer les modèles d'habitat par matériaux, complexité et performance.",
    intro:
      "Les cartes sont structurées pour les discussions de faisabilité entre concepteurs, ingénieurs et partenaires de construction locaux.",
    filters: ["Tous", "Climat tropical", "Climat aride", "Climat tempéré", "Environnement montagneux", "Environnement côtier", "Contexte urbain/rural"],
    stats: {
      durability: "Durabilité",
      complexity: "Complexité",
      efficiency: "Efficacité"
    },
    technicalLabel: "Description technique"
  },
  materials: {
    eyebrow: "Base de matériaux",
    title: "Matériaux écologiques évalués comme systèmes environnementaux et structurels.",
    intro:
      "Explorez avantages, faiblesses, comportement thermique, impact et usages recommandés pour des palettes constructives locales.",
    impactSuffix: "impact",
    labels: {
      advantages: "Avantages",
      weaknesses: "Faiblesses",
      thermal: "Performance thermique",
      structural: "Comportement structurel",
      uses: "Usages recommandes",
      comparisonEyebrow: "Outil de comparaison des matériaux",
      comparisonTitle: "Comparer l'adaptation environnementale et le comportement constructif.",
      lowCarbon: "Bas carbone"
    }
  },
  methods: {
    eyebrow: "Méthodes de construction durable",
    title: "Systèmes passifs et méthodes bas carbone pour des bâtiments résilients.",
    intro:
      "Chaque méthode est présentée comme un levier de conception : confort, eau, énergie, entretien et logistique de chantier.",
    resilience: "Valeur de resilience"
  },
  dashboard: {
    eyebrow: "Tableau de bord professionnel",
    title: "Prototype d'espace de travail pour architectes, ingénieurs et designers environnementaux.",
    intro:
      "Un tableau de bord dense mais calme pour sauvegarder les projets, comparer les systèmes et générer des recommandations écologiques.",
    saved: "Projets sauvegardes",
    projectFilters: "Filtres de projets",
    indicators: "Indicateurs de durabilité",
    stats: ["Carbone", "Confort", "Eau"],
    rings: ["Adaptation", "Bas carbone", "Confort passif", "Autonomie en eau"],
    tools: [
      { title: "Comparer les matériaux", text: "Classer terre, bambou, chaux et assemblages recyclés selon disponibilité locale et risque d'entretien." },
      { title: "Analyser l'adaptation", text: "Évaluer le projet face à chaleur, humidité, vent, crue, sécheresse et îlot de chaleur urbain." },
      { title: "Générer des recommandations", text: "Produire une note avec conseils de toiture, enveloppe, ventilation, eau et géomatériaux." }
    ]
  },
  footer: {
    text: "Une plateforme prototype pour l'habitat écologique, durable et adapté aux contextes locaux.",
    resources: "Ressources",
    links: ["Atlas des matériaux", "Bibliothèque climatique", "Méthodes constructives"],
    contact: "Contact",
    contactText: "Pour toute collaboration, question professionnelle ou partenariat autour de HomèVo.",
    workspaceLink: "Acces a l'espace professionnel",
    contactDetails: {
      nameLabel: "Nom",
      name: "Enock O. Sèmèvo",
      emailLabel: "E-mail",
      email: "henocsmvo@gmail.com",
      phoneLabel: "Telephone",
      phone: "+33 605 609 687",
      locationLabel: "Localisation",
      location: "2 rue Gérard Philipe, 51100, Reims, France"
    }
  },
  data: {
    climateOptions: ["Tropical humide", "Aride chaud", "Tempéré océanique", "Montagne froide", "Côtier venteux"],
    defaultForm: {
      climate: "Tropical humide",
      region: "Afrique de l'Ouest côtière",
      terrain: "Delta de basse altitude",
      culture: "Habitat à cour",
      materials: "Terre, bambou, bois",
      method: "Refroidissement passif"
    },
    formOptions: {
      regions: ["Afrique de l'Ouest côtière", "Vallée andine", "Bassin méditerranéen", "Plaine inondable d'Asie du Sud-Est"],
      terrains: ["Delta de basse altitude", "Pente rocheuse", "Dent creuse urbaine", "Plateau sec"],
      cultures: ["Habitat à cour", "Villages compacts de montagne", "Concession familiale", "Îlots urbains denses"],
      materials: ["Terre, bambou, bois", "Pierre, chaux, bois", "Latérite, terre, acier recyclé", "Terre pissée, fibre de palmier, chaux"]
    },
    mapPoints: ["Tropical humide", "Plateau aride", "Montagne froide", "Vent côtier"],
    houseModels: [
      {
        name: "Maison a cour surelevee et ventilee",
        climate: "Tropical humide",
        tags: ["Climat tropical", "Environnement côtier", "Contexte urbain/rural"],
        materials: ["Bambou", "Bois", "Terre comprimee"],
        score: 92,
        durability: "45 ans",
        complexity: "Moyenne",
        energy: "A",
        visual: "visual-tropical",
        image: "/assets/models/raised-ventilated-courtyard-house.jpg",
        media: [
          { type: "image", src: "/assets/models/raised-ventilated-courtyard-house.jpg", alt: "Maison à cour surelevée et ventilée" }
        ],
        technical: [
          "Dalle surélevée pour limiter l'humidité et le risque d'inondation.",
          "Cour ombragée favorisant le rafraîchissement passif et la vie sociale.",
          "Bambou et terre locaux réduisent le carbone incorporé."
        ],
        description: "Plancher sureleve, veranda ombragee et pieces ventilees autour d'une cour sociale."
      },
      {
        name: "Habitat en terre pissee a inertie thermique",
        climate: "Climat aride",
        tags: ["Climat aride", "Contexte urbain/rural"],
        materials: ["Terre pissee", "Chaux", "Pierre"],
        score: 88,
        durability: "70 ans",
        complexity: "Faible",
        energy: "A-",
        visual: "visual-arid",
        image: "/assets/models/rammed-earth-thermal-mass-dwelling.jpg",
       media: [
          { type: "image", src: "/assets/models/rammed-earth-thermal-mass-dwelling.jpg", alt: "Habitat en terre pisée à inertie thermique" }
        ],
        technical: [
          "Murs épais en terre réduisent les besoins de refroidissement.",
          "Ouvertures protégées limitent les apports solaires en journée.",
          "Forme compacte améliore la durabilité dans les climats arides."
        ],
        description: "Murs epais, plan compact et ouvertures protegees stabilisent les ecarts de temperature."
      },
      {
        name: "Ensemble alpin bois-pierre",
        climate: "Environnement montagneux",
        tags: ["Environnement montagneux", "Climat tempéré"],
        materials: ["Pierre", "Bois", "Enduit chaux"],
        score: 84,
        durability: "80 ans",
        complexity: "Elevee",
        energy: "B+",
        visual: "visual-mountain",
        image: "/assets/models/alpine-timber-stone-cluster.jpg",
       media: [
          { type: "image", src: "/assets/models/alpine-timber-stone-cluster.jpg", alt: "Ensemble alpin bois-pierre" }
        ],
        technical: [
          "Toit pentu protège contre l'accumulation de neige.",
          "Soubassement pierre et ossature bois gèrent l'humidité et les ponts thermiques.",
          "Massing groupé crée des espaces extérieurs abrités."
        ],
        description: "Toit pentu, enveloppe compacte et soubassement pierre contre la neige et le froid."
      },
      {
        name: "Maison côtière à tampon de vent",
        climate: "Côtier venteux",
        tags: ["Environnement côtier", "Climat tempéré", "Contexte urbain/rural"],
        materials: ["Acier recycle", "Bois", "Chaux"],
        score: 81,
        durability: "55 ans",
        complexity: "Moyenne",
        energy: "B+",
        visual: "visual-coastal",
        image: "/assets/models/coastal-wind-buffer-row-house.jpg",
       media: [
          { type: "image", src: "/assets/models/coastal-wind-buffer-row-house.jpg", alt: "Maison côtière à tampon de vent" }
        ],
        technical: [
          "Patios filtrant le vent salin et le soleil direct.",
          "Toit aérodynamique réduit les pressions de soulèvement.",
          "Détails en acier recyclé limitent la corrosion en milieu humide."
        ],
        description: "Ligne de toit aerodynamique, patios filtres et details adaptes a l'air salin."
      },
      {
        name: "Module urbain bas carbone",
        climate: "Climat tempere",
        tags: ["Climat tempere", "Contexte urbain/rural"],
        materials: ["CLT", "Brique reutilisee", "Toit vegetalise"],
        score: 86,
        durability: "60 ans",
        complexity: "Moyenne",
        energy: "A",
        visual: "visual-urban",
        image: "/assets/models/urban-low-carbon-infill-module.jpg",
       media: [
          { type: "image", src: "/assets/models/urban-low-carbon-infill-module.jpg", alt: "Module urbain bas carbone" }
        ],
        technical: [
          "Bois préfabriqué réduit les déchets et le temps de chantier.",
          "Toit végétalisé participe à la gestion des eaux pluviales.",
          "Services partagés rendent le module efficace en milieu dense."
        ],
        description: "Habitat compact en bois préfabriqué, gestion d'eau partagée et toiture plantée."
      },
      {
        name: "Concession à cour en latérite",
        climate: "Tropical sec",
        tags: ["Climat tropical", "Climat aride", "Contexte urbain/rural"],
        materials: ["Latérite", "Fibre de palmier", "Enduit terre"],
        score: 89,
        durability: "50 ans",
        complexity: "Faible",
        energy: "A-",
        visual: "visual-laterite",
        image: "/assets/models/laterite-courtyard-compound.jpg",
        media: [
          { type: "image", src: "/assets/models/laterite-courtyard-compound.jpg", alt: "Concession à cour en latérite" }
        ],
        technical: [
          "Murs porteurs en latérite apportent masse thermique et durabilité.",
          "Espaces ombragés prolongent les pièces de vie tout en limitant les gains solaires.",
          "Fibre de palmier et enduit terre améliorent la perméabilité des parois."
        ],
        description: "Murs porteurs en latérite et espaces extérieurs ombragés pour les climats chauds."
      }
    ],
    materials: [
      {
        name: "Terre",
        category: "Geomateriau",
        impact: "Tres faible",
        advantages: ["Forte inertie thermique", "Disponible localement", "Reparable avec des savoir-faire locaux"],
        weaknesses: ["Protection contre l'eau necessaire", "Qualite variable selon le sol"],
        thermal: "Excellente regulation thermique et hygrometrique si elle est protegee de la pluie battante.",
        structural: "Forte en compression; meilleure avec melanges stabilises, soubassements et bons details.",
        uses: "Murs en pisé, blocs comprimes, enduits, sols et noyaux d'inertie.",
        scores: { thermal: 92, structural: 68, carbon: 96 }
      },
      {
        name: "Bambou",
        category: "Structure biosourcee",
        impact: "Faible",
        advantages: ["Croissance rapide", "Haute resistance en traction", "Leger et facile a transporter"],
        weaknesses: ["Traitement necessaire", "Assemblages critiques"],
        thermal: "Faible inertie mais excellent pour enveloppes legeres, ombragees et ventilees.",
        structural: "Fort en traction et flexion; demande des assemblages secs et proteges.",
        uses: "Ossatures, claustras, fermes de toit, protections solaires et planchers sureleves.",
        scores: { thermal: 62, structural: 78, carbon: 90 }
      },
      {
        name: "Laterite",
        category: "Sol/pierre regional",
        impact: "Faible",
        advantages: ["Identite locale", "Bonne compression", "Durable si bien curee"],
        weaknesses: ["Extraction a controler", "Porosite demandant une gestion de l'eau"],
        thermal: "Bon dephasage thermique en murs epais pour jour chaud et nuit plus fraiche.",
        structural: "Efficace en murs porteurs avec mortiers de chaux ou terre stabilisee.",
        uses: "Blocs, soubassements, murs de cour, soutenements paysagers et facades.",
        scores: { thermal: 80, structural: 74, carbon: 84 }
      },
      {
        name: "Pierre",
        category: "Structure minerale",
        impact: "Moyen",
        advantages: ["Tres durable", "Excellent vieillissement", "Forte inertie thermique"],
        weaknesses: ["Logistique lourde", "Mise en oeuvre exigeante"],
        thermal: "Forte masse thermique adaptee aux climats avec variations de temperature.",
        structural: "Excellente compression et longevite; details sismiques a renforcer.",
        uses: "Fondations, murs, soutènements, sols et enveloppes de montagne ou de côte.",
        scores: { thermal: 86, structural: 91, carbon: 64 }
      },
      {
        name: "Bois",
        category: "Structure biosourcee",
        impact: "Faible",
        advantages: ["Renouvelable si certifié", "Compatible préfabriqué", "Qualité intérieure chaleureuse"],
        weaknesses: ["Details feu et humidite requis", "Filiere a verifier"],
        thermal: "Isolation moderee et faible energie grise avec approvisionnement responsable.",
        structural: "Excellent rapport resistance/poids en ossatures, panneaux et structures hybrides.",
        uses: "Ossatures, panneaux CLT, toitures, facades, interieurs et modules.",
        scores: { thermal: 72, structural: 84, carbon: 88 }
      },
      {
        name: "Chaux",
        category: "Liant et finition",
        impact: "Moyen-faible",
        advantages: ["Permet la vapeur", "Compatible patrimoine", "Microfissures auto-reparables"],
        weaknesses: ["Cure lente", "Application qualifiee necessaire"],
        thermal: "Ameliore le comportement hygrothermique et protege les murs respirants.",
        structural: "Utile en mortiers et enduits; moins forte que le ciment mais plus souple.",
        uses: "Mortiers, enduits, badigeons et stabilisation de terre.",
        scores: { thermal: 70, structural: 58, carbon: 72 }
      },
      {
        name: "Matériaux recyclés",
        category: "Construction circulaire",
        impact: "Variable faible",
        advantages: ["Reduit les dechets", "Peut baisser le carbone incorpore", "Soutient les filieres circulaires locales"],
        weaknesses: ["Certification complexe", "Qualite et dimensions variables"],
        thermal: "Performance dependante de la matiere source et de l'assemblage.",
        structural: "A utiliser avec tests, classement et responsabilites claires.",
        uses: "Brique réutilisée, acier recyclé, isolants, pavages, panneaux intérieurs et modules.",
        scores: { thermal: 66, structural: 76, carbon: 82 }
      }
    ],
    recommendations: {
      tropical: {
        model: "Maison a cour surelevee et ventilee",
        score: 91,
        ai: "Prioriser l'ombre profonde, les planchers sureleves, les vides de toiture ventiles et les surfaces en terre lavables. Utiliser des ecrans bambou et ossatures bois lorsque la filiere assure traitement et remplacement.",
        blocks: [
          { title: "Modèles adaptés", value: "Concession à cour, maison à véranda surélevée, maison poreuse" },
          { title: "Systèmes constructifs", value: "Ossature bambou/bois avec remplissage en terre comprimée" },
          { title: "Types de toiture", value: "Grand toit incline avec comble ventile et chaine de pluie" },
          { title: "Ventilation", value: "Pieces traversantes, tirage thermique et coursives ombragees" },
          { title: "Confort thermique", value: "Toit haut, enveloppe respirante, brasseurs d'air et purge nocturne" },
          { title: "Gestion de l'eau", value: "Collecte pluviale, plinthe surelevee et noues vegetales" }
        ]
      },
      arid: {
        model: "Habitat en terre pissee a inertie thermique",
        score: 88,
        ai: "Utiliser un plan compact, des murs epais en terre et des cours protegees. Les ouvertures doivent etre en retrait et orientees pour la ventilation nocturne controlee.",
        blocks: [
          { title: "Modèles adaptés", value: "Maison à cour en terre maçonnée, habitat à capteur de vent" },
          { title: "Systèmes constructifs", value: "Murs en terre stabilisée, enduit chaux et soubassement pierre" },
          { title: "Types de toiture", value: "Toit terrasse isole avec espace de service ombrage" },
          { title: "Ventilation", value: "Purge nocturne, capteurs de vent et ouvertures compactes" },
          { title: "Confort thermique", value: "Inertie, surfaces claires et patios evaporatifs" },
          { title: "Gestion de l'eau", value: "Citernes, jardins d'eaux grises et distribution sobre" }
        ]
      },
      mountain: {
        model: "Ensemble alpin bois-pierre",
        score: 84,
        ai: "Reduire les surfaces exposees, utiliser la pierre pour la base durable et le bois pour les niveaux legers. Proteger les entrees de la neige et orienter les pieces de vie vers le soleil d'hiver.",
        blocks: [
          { title: "Modèles adaptés", value: "Groupe compact, chalet sur socle pierre, maison de pente" },
          { title: "Systèmes constructifs", value: "Base pierre, ossature bois, enduit chaux et toiture isolée" },
          { title: "Types de toiture", value: "Toit pentu evacuant la neige avec debords profonds" },
          { title: "Ventilation", value: "Ventilation controlee et cheminee solaire en mi-saison" },
          { title: "Confort thermique", value: "Masse compacte, enveloppe etanche et gains solaires" },
          { title: "Gestion de l'eau", value: "Captage de fonte, erosion controlee et drainage en terrasses" }
        ]
      }
    },
    constructionMethods: [
      { title: "Refroidissement passif", icon: "passiveCooling", principle: "Limiter les gains de chaleur avant tout recours mecanique.", application: "Ombre profonde, toits frais, cours et ventilation nocturne.", score: 88 },
      { title: "Ventilation naturelle", icon: "naturalVentilation", principle: "Faire circuler l'air par pression et effet cheminee.", application: "Ouvertures opposees, vents de toit, coursives ombragees et facades poreuses.", score: 91 },
      { title: "Collecte d'eau de pluie", icon: "rainwater", principle: "Transformer la toiture en infrastructure hydrique locale.", application: "Citernes, filtres de premiere eau, jardins de trop-plein et reutilisation.", score: 82 },
      { title: "Orientation solaire", icon: "solar", principle: "Aligner forme et ouvertures avec les saisons solaires.", application: "Gains d'hiver, ombre d'ete et zones de service sur les expositions dures.", score: 85 },
      { title: "Inertie thermique", icon: "inertia", principle: "Utiliser la masse pour retarder et lisser les pics de temperature.", application: "Terre pissee, sols pierre, maconneries ombragees et purge nocturne.", score: 86 },
      { title: "Toitures vegetalisees", icon: "greenRoofs", principle: "Ajouter evapotranspiration, isolation et habitat.", application: "Substrat leger, plantes locales et retention d'eau surveillee.", score: 74 },
      { title: "Construction modulaire", icon: "modular", principle: "Réduire les déchets et améliorer la qualité.", application: "Modules bois, noyaux humides répétables et assemblages réversibles.", score: 79 },
      { title: "Construction bas carbone", icon: "lowCarbon", principle: "Réduire les émissions des matériaux et de la logistique.", application: "Matériaux locaux, composants réutilisés et réduction du ciment.", score: 90 }
    ],
    dashboardProjects: [
      { name: "Cluster scolaire du delta", context: "Site côtier humide, système hybride bambou-terre surélevé", carbon: "-38%", comfort: "91%", water: "72%" },
      { name: "Prototype de cour au Sahel", context: "Plateau sec en terre pissée et chaux", carbon: "-44%", comfort: "86%", water: "64%" },
      { name: "Maisons andines en terrasses", context: "Pente de montagne avec socles pierre et enveloppes bois compactes", carbon: "-29%", comfort: "88%", water: "79%" }
    ],
    caseStudies: [
      { place: "Habitats du delta du Mekong", climate: "Plaine humide", lesson: "Structures surelevees, terrasses ombragees et cadres legers reparables accompagnent les cycles d'eau.", visual: "case-mekong" },
      { place: "Villages de terre de l'Atlas", climate: "Montagne aride", lesson: "Murs massifs en terre, rues compactes et entretien collectif creent une stabilite thermique.", visual: "case-atlas" },
      { place: "Infill bois nordique", climate: "Urbain froid", lesson: "Systèmes préfabriqués en bois réduisent le carbone avec des enveloppes compactes et efficaces.", visual: "case-nordic" }
    ]
  }
};
