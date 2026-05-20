export const fr = {
  brand: {
    name: "HomèVo",
    subtitle: "Laboratoire eco-design"
  },
  nav: [
    { id: "home", label: "Accueil" },
    { id: "analysis", label: "Analyse" },
    { id: "library", label: "Modeles" },
    { id: "materials", label: "Materiaux" },
    { id: "methods", label: "Methodes" },
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
      "HomèVo aide les equipes d'architecture et d'ingenierie a evaluer les geomateriaux locaux, les systemes passifs, le contexte social et les risques environnementaux avant que le concept ne devienne couteux a modifier.",
    start: "Lancer l'analyse environnementale",
    browse: "Explorer les modeles",
    heroDiagram: "Coupe bioclimatique",
    metrics: [
      { label: "Carbone incorpore", value: "-42%" },
      { label: "Heures de confort", value: "91%" },
      { label: "Materiaux locaux", value: "78%" }
    ],
    searchPlaceholder: "Trouver des modeles d'habitat adaptes a votre environnement",
    searchClimateLabel: "Climat",
    searchClimateValue: "Tropical humide",
    searchRegionLabel: "Region",
    searchRegionValue: "Delta cotier",
    missionBadge: "Mission de la plateforme",
    missionTitle: "Un espace de recherche pour une architecture qui repond au lieu.",
    missionText:
      "Le prototype relie typologies climatiques, dynamiques du terrain, savoir-faire locaux, comportement des geomateriaux et systemes bas carbone. Il est pense pour des professionnels qui prennent des decisions concretes.",
    featureCards: [
      { title: "Ingenierie ecologique", text: "Evaluer cycles de l'eau, confort passif, flux de materiaux et exposition carbone." },
      { title: "Societes locales", text: "Relier la logique constructive aux usages, competences, formes d'habitat et pratiques d'entretien." },
      { title: "Urbanisme resilient", text: "Comparer densite, ilots de chaleur, espace public, mobilite et durabilite a long terme." }
    ],
    featuredEyebrow: "Modeles en avant",
    featuredTitle: "Systemes d'habitat ajustes au climat, aux savoir-faire et a la logique structurelle.",
    intelligence: [
      { title: "Materiaux locaux", text: "Terre, laterite, bambou, pierre, bois et chaux compares selon le climat et le role structurel." },
      { title: "Adaptation climatique", text: "Orientation, ombrage, ventilation, inertie thermique et toitures relies aux microclimats." },
      { title: "Ingenierie ecologique", text: "Collecte d'eau, assemblages bas carbone et strategies de durabilite pour une longue vie utile." }
    ],
    casesEyebrow: "Etudes de cas",
    casesTitle: "Lecons d'habitat ecologique dans differents environnements."
  },
  analysis: {
    eyebrow: "Analyse environnementale",
    title: "Transformer les conditions locales en recommandations ecologiques constructibles.",
    intro:
      "Selectionnez climat, terrain, culture et materiaux disponibles pour generer une note de conception professionnelle en phase amont.",
    siteInputs: "Donnees du site",
    generatedBrief: "Note generee",
    adaptation: "Adaptation",
    aiLabel: "Recommandation IA",
    climateMap: "Carte climatique interactive",
    fields: {
      climate: "Type de climat",
      region: "Region geographique",
      terrain: "Type de terrain",
      culture: "Culture locale",
      materials: "Materiaux locaux disponibles"
    }
  },
  library: {
    eyebrow: "Bibliotheque de modeles",
    title: "Comparer les modeles d'habitat par materiaux, complexite et performance.",
    intro:
      "Les cartes sont structurees pour les discussions de faisabilite entre concepteurs, ingenieurs et partenaires de construction locaux.",
    filters: ["Tous", "Climat tropical", "Climat aride", "Climat tempere", "Environnement montagneux", "Environnement cotier", "Contexte urbain/rural"],
    stats: {
      durability: "Durabilite",
      complexity: "Complexite",
      efficiency: "Efficacite"
    }
  },
  materials: {
    eyebrow: "Base de materiaux",
    title: "Materiaux ecologiques evalues comme systemes environnementaux et structurels.",
    intro:
      "Explorez avantages, faiblesses, comportement thermique, impact et usages recommandes pour des palettes constructives locales.",
    impactSuffix: "impact",
    labels: {
      advantages: "Avantages",
      weaknesses: "Faiblesses",
      thermal: "Performance thermique",
      structural: "Comportement structurel",
      uses: "Usages recommandes",
      comparisonEyebrow: "Outil de comparaison des materiaux",
      comparisonTitle: "Comparer l'adaptation environnementale et le comportement constructif.",
      lowCarbon: "Bas carbone"
    }
  },
  methods: {
    eyebrow: "Methodes de construction durable",
    title: "Systemes passifs et methodes bas carbone pour des batiments resilients.",
    intro:
      "Chaque methode est presentee comme un levier de conception: confort, eau, energie, entretien et logistique de chantier.",
    resilience: "Valeur de resilience"
  },
  dashboard: {
    eyebrow: "Tableau de bord professionnel",
    title: "Prototype d'espace de travail pour architectes, ingenieurs et designers environnementaux.",
    intro:
      "Un tableau de bord dense mais calme pour sauvegarder les projets, comparer les systemes et generer des recommandations ecologiques.",
    saved: "Projets sauvegardes",
    projectFilters: "Filtres de projets",
    indicators: "Indicateurs de durabilite",
    stats: ["Carbone", "Confort", "Eau"],
    rings: ["Adaptation", "Bas carbone", "Confort passif", "Autonomie en eau"],
    tools: [
      { title: "Comparer les materiaux", text: "Classer terre, bambou, chaux et assemblages recycles selon disponibilite locale et risque d'entretien." },
      { title: "Analyser l'adaptation", text: "Evaluer le projet face a chaleur, humidite, vent, crue, secheresse et ilot de chaleur urbain." },
      { title: "Generer des recommandations", text: "Produire une note avec conseils de toiture, enveloppe, ventilation, eau et geomateriaux." }
    ]
  },
  footer: {
    text: "Une plateforme prototype pour l'habitat ecologique, durable et adapte aux contextes locaux.",
    resources: "Ressources",
    links: ["Atlas des materiaux", "Bibliotheque climatique", "Methodes constructives"],
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
    climateOptions: ["Tropical humide", "Aride chaud", "Tempere oceanique", "Montagne froide", "Cotier venteux"],
    defaultForm: {
      climate: "Tropical humide",
      region: "Afrique de l'Ouest cotiere",
      terrain: "Delta de basse altitude",
      culture: "Habitat a cour",
      materials: "Terre, bambou, bois"
    },
    formOptions: {
      regions: ["Afrique de l'Ouest cotiere", "Vallee andine", "Bassin mediterraneen", "Plaine inondable d'Asie du Sud-Est"],
      terrains: ["Delta de basse altitude", "Pente rocheuse", "Dent creuse urbaine", "Plateau sec"],
      cultures: ["Habitat a cour", "Villages compacts de montagne", "Concession familiale", "Ilots urbains denses"],
      materials: ["Terre, bambou, bois", "Pierre, chaux, bois", "Laterite, terre, acier recycle", "Terre pissee, fibre de palmier, chaux"]
    },
    mapPoints: ["Tropical humide", "Plateau aride", "Montagne froide", "Vent cotier"],
    houseModels: [
      {
        name: "Maison a cour surelevee et ventilee",
        climate: "Tropical humide",
        tags: ["Climat tropical", "Environnement cotier", "Contexte urbain/rural"],
        materials: ["Bambou", "Bois", "Terre comprimee"],
        score: 92,
        durability: "45 ans",
        complexity: "Moyenne",
        energy: "A",
        visual: "visual-tropical",
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
        description: "Murs epais, plan compact et ouvertures protegees stabilisent les ecarts de temperature."
      },
      {
        name: "Ensemble alpin bois-pierre",
        climate: "Environnement montagneux",
        tags: ["Environnement montagneux", "Climat tempere"],
        materials: ["Pierre", "Bois", "Enduit chaux"],
        score: 84,
        durability: "80 ans",
        complexity: "Elevee",
        energy: "B+",
        visual: "visual-mountain",
        description: "Toit pentu, enveloppe compacte et soubassement pierre contre la neige et le froid."
      },
      {
        name: "Maison cotiere a tampon de vent",
        climate: "Cotier venteux",
        tags: ["Environnement cotier", "Climat tempere", "Contexte urbain/rural"],
        materials: ["Acier recycle", "Bois", "Chaux"],
        score: 81,
        durability: "55 ans",
        complexity: "Moyenne",
        energy: "B+",
        visual: "visual-coastal",
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
        description: "Habitat compact en bois prefabrique, gestion d'eau partagee et toiture plantee."
      },
      {
        name: "Concession a cour en laterite",
        climate: "Tropical sec",
        tags: ["Climat tropical", "Climat aride", "Contexte urbain/rural"],
        materials: ["Laterite", "Fibre de palmier", "Enduit terre"],
        score: 89,
        durability: "50 ans",
        complexity: "Faible",
        energy: "A-",
        visual: "visual-laterite",
        description: "Murs porteurs en laterite et espaces exterieurs ombrages pour les climats chauds."
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
        uses: "Fondations, murs, soutenements, sols et enveloppes de montagne ou de cote.",
        scores: { thermal: 86, structural: 91, carbon: 64 }
      },
      {
        name: "Bois",
        category: "Structure biosourcee",
        impact: "Faible",
        advantages: ["Renouvelable si certifie", "Compatible prefabrique", "Qualite interieure chaleureuse"],
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
        name: "Materiaux recycles",
        category: "Construction circulaire",
        impact: "Variable faible",
        advantages: ["Reduit les dechets", "Peut baisser le carbone incorpore", "Soutient les filieres circulaires locales"],
        weaknesses: ["Certification complexe", "Qualite et dimensions variables"],
        thermal: "Performance dependante de la matiere source et de l'assemblage.",
        structural: "A utiliser avec tests, classement et responsabilites claires.",
        uses: "Brique reutilisee, acier recycle, isolants, pavages, panneaux interieurs et modules.",
        scores: { thermal: 66, structural: 76, carbon: 82 }
      }
    ],
    recommendations: {
      tropical: {
        model: "Maison a cour surelevee et ventilee",
        score: 91,
        ai: "Prioriser l'ombre profonde, les planchers sureleves, les vides de toiture ventiles et les surfaces en terre lavables. Utiliser des ecrans bambou et ossatures bois lorsque la filiere assure traitement et remplacement.",
        blocks: [
          { title: "Modeles adaptes", value: "Concession a cour, maison a veranda surelevee, maison poreuse" },
          { title: "Systemes constructifs", value: "Ossature bambou/bois avec remplissage en terre comprimee" },
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
          { title: "Modeles adaptes", value: "Maison a cour en terre pissee, habitat a capteur de vent" },
          { title: "Systemes constructifs", value: "Murs en terre stabilisee, enduit chaux et soubassement pierre" },
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
          { title: "Modeles adaptes", value: "Groupe compact, chalet sur socle pierre, maison de pente" },
          { title: "Systemes constructifs", value: "Base pierre, ossature bois, enduit chaux et toiture isolee" },
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
      { title: "Construction modulaire", icon: "modular", principle: "Reduire les dechets et ameliorer la qualite.", application: "Modules bois, noyaux humides repetables et assemblages reversibles.", score: 79 },
      { title: "Construction bas carbone", icon: "lowCarbon", principle: "Reduire les emissions des materiaux et de la logistique.", application: "Materiaux locaux, composants reutilises et reduction du ciment.", score: 90 }
    ],
    dashboardProjects: [
      { name: "Cluster scolaire du delta", context: "Site cotier humide, systeme hybride bambou-terre sureleve", carbon: "-38%", comfort: "91%", water: "72%" },
      { name: "Prototype de cour au Sahel", context: "Plateau sec en terre pissee et chaux", carbon: "-44%", comfort: "86%", water: "64%" },
      { name: "Maisons andines en terrasses", context: "Pente de montagne avec socles pierre et enveloppes bois compactes", carbon: "-29%", comfort: "88%", water: "79%" }
    ],
    caseStudies: [
      { place: "Habitats du delta du Mekong", climate: "Plaine humide", lesson: "Structures surelevees, terrasses ombragees et cadres legers reparables accompagnent les cycles d'eau.", visual: "case-mekong" },
      { place: "Villages de terre de l'Atlas", climate: "Montagne aride", lesson: "Murs massifs en terre, rues compactes et entretien collectif creent une stabilite thermique.", visual: "case-atlas" },
      { place: "Infill bois nordique", climate: "Urbain froid", lesson: "Systemes prefabriques en bois reduisent le carbone avec des enveloppes compactes et efficaces.", visual: "case-nordic" }
    ]
  }
};
