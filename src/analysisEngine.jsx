const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const normalize = (text) =>
  String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9\s]/g, "")
    .trim();

const climateProfiles = {
  tropical: {
    labelFr: "Tropical humide",
    labelEn: "Tropical humid",
    base: 82,
    strength: "ombre, ventilation naturelle et inertie légère",
    risk: "humidité et corrosion",
    recommended: "terre, bambou et bois",
    advantage: "Ventilation passive et ombrage bien dimensionné",
    observation: "Les enveloppes respirantes protègent du climat tout en maintenant le confort."
  },
  arid: {
    labelFr: "Aride chaud",
    labelEn: "Arid hot",
    base: 80,
    strength: "inertie thermique, protections solaires et stockage de l'eau",
    risk: "dessiccation et surchauffe diurne",
    recommended: "terre, chamotte et pierre",
    advantage: "Les murs massifs stabilisent les fluctuations de température.",
    observation: "La conception doit limiter les apports solaires directs et favoriser la ventilation nocturne."
  },
  temperate: {
    labelFr: "Tempéré océanique",
    labelEn: "Temperate oceanic",
    base: 84,
    strength: "confort passif, toitures végétalisées et inertie modérée",
    risk: "humidité ambiante et modes de ventilation mal adaptés",
    recommended: "bois, pierre et chaux",
    advantage: "L'orientation solaire et l'isolation hygroscopique améliorent les performances.",
    observation: "Les systèmes mixtes offrent de bonnes réponses en saison chaude et froide."
  },
  mountain: {
    labelFr: "Montagne froide",
    labelEn: "Mountain cold",
    base: 86,
    strength: "résistance au froid, inertie thermique et protection neige",
    risk: "charges de neige et infiltration d'eau",
    recommended: "pierre, bois et isolants naturels",
    advantage: "La pierre garantit durabilité et protection au pied des pentes.",
    observation: "L'enveloppe doit limiter les déperditions et offrir une inertie stable."
  },
  coastal: {
    labelFr: "Côtier venteux",
    labelEn: "Coastal windy",
    base: 81,
    strength: "ventilation, drainage et matériaux résistants à la corrosion",
    risk: "salinité et humidité marine",
    recommended: "bois traité, acier recyclé et membranes durables",
    advantage: "Les façades aérées et les toitures protectrices prolongent la durée de vie.",
    observation: "Il faut limiter l'exposition directe et favoriser des systèmes de maintenance faciles."
  }
};

const materialProfiles = {
  earth: {
    labelFr: "Terre",
    labelEn: "Earth",
    compat: { tropical: 76, arid: 96, temperate: 88, mountain: 58, coastal: 72 },
    advantages: "Inertie thermique élevée et empreinte carbone faible.",
    limits: "Nécessite une protection rigoureuse contre l'eau et l'humidité.",
    note: "Excellente solution en murs massifs, plinthes pierre et enduits respirants.",
    impact: 10
  },
  bamboo: {
    labelFr: "Bambou",
    labelEn: "Bamboo",
    compat: { tropical: 94, arid: 64, temperate: 74, mountain: 60, coastal: 70 },
    advantages: "Léger, renouvelable et très adapté aux enveloppes ventilées.",
    limits: "Sensibilité à l'humidité et aux insectes si non traité.",
    note: "Idéal en structures légères, brise-soleils et cloisons respirantes.",
    impact: 12
  },
  timber: {
    labelFr: "Bois",
    labelEn: "Timber",
    compat: { tropical: 68, arid: 75, temperate: 90, mountain: 82, coastal: 72 },
    advantages: "Bonne tenue structurelle et performance thermique modérée.",
    limits: "Demande une attention particulière au cycle humidité-séchage.",
    note: "Adapté aux ossatures, bardages et toitures végétalisées légères.",
    impact: 14
  },
  stone: {
    labelFr: "Pierre",
    labelEn: "Stone",
    compat: { tropical: 60, arid: 92, temperate: 88, mountain: 96, coastal: 76 },
    advantages: "Excellente résistance mécanique et masse thermique élevée.",
    limits: "Poids élevé et logistique plus complexe sur site isolé.",
    note: "Très performant en murs porteurs, socles et plinthes thermiquement actives.",
    impact: 20
  },
  lime: {
    labelFr: "Chaux",
    labelEn: "Lime",
    compat: { tropical: 72, arid: 90, temperate: 88, mountain: 84, coastal: 81 },
    advantages: "Perméabilité à la vapeur et compatibilité avec les assemblages terre.",
    limits: "Cure lente et besoin d'un applicateur qualifié.",
    note: "Excellente pour les enduits, mortiers et joints respirants.",
    impact: 8
  },
  laterite: {
    labelFr: "Latérite",
    labelEn: "Laterite",
    compat: { tropical: 90, arid: 82, temperate: 70, mountain: 58, coastal: 66 },
    advantages: "Identité locale forte et bonne durabilité sous protection.",
    limits: "Perméabilité et sensibilité aux détériorations si mal cernée.",
    note: "Bonne option pour soubassements et murs de cour épais.",
    impact: 16
  },
  recycled: {
    labelFr: "Matériaux recyclés",
    labelEn: "Recycled materials",
    compat: { tropical: 72, arid: 80, temperate: 84, mountain: 78, coastal: 77 },
    advantages: "Faible empreinte carbone et valeur circulaire élevée.",
    limits: "Qualité variable selon l'origine et le contrôle chantier.",
    note: "Intéressant pour remplissages, parements et infrastructures légères.",
    impact: 6
  }
};

const methodProfiles = {
  passiveCooling: {
    labelFr: "Refroidissement passif",
    labelEn: "Passive cooling",
    compat: { tropical: 94, arid: 70, temperate: 82, mountain: 68, coastal: 80 },
    benefit: "Réduit les besoins mécaniques en utilisant ombre et inertia."
  },
  naturalVentilation: {
    labelFr: "Ventilation naturelle",
    labelEn: "Natural ventilation",
    compat: { tropical: 96, arid: 78, temperate: 88, mountain: 72, coastal: 90 },
    benefit: "Améliore le confort passif sans énergie, particulièrement en climat humide."
  },
  rainwater: {
    labelFr: "Collecte d'eau de pluie",
    labelEn: "Rainwater harvesting",
    compat: { tropical: 86, arid: 90, temperate: 84, mountain: 78, coastal: 88 },
    benefit: "Rend l'approvisionnement hydrique plus autonome et résilient."
  },
  solar: {
    labelFr: "Orientation solaire",
    labelEn: "Solar orientation",
    compat: { tropical: 84, arid: 94, temperate: 94, mountain: 92, coastal: 80 },
    benefit: "Optimise les gains solaires d'hiver et limite les apports d'été."
  },
  inertia: {
    labelFr: "Inertie thermique",
    labelEn: "Thermal inertia",
    compat: { tropical: 82, arid: 92, temperate: 90, mountain: 88, coastal: 76 },
    benefit: "Lisse les variations thermiques et augmente le confort nocturne."
  },
  greenRoofs: {
    labelFr: "Toitures végétalisées",
    labelEn: "Green roofs",
    compat: { tropical: 78, arid: 66, temperate: 92, mountain: 74, coastal: 84 },
    benefit: "Améliore l'isolation et la gestion de l'eau de pluie."
  },
  modular: {
    labelFr: "Construction modulaire",
    labelEn: "Modular construction",
    compat: { tropical: 78, arid: 80, temperate: 86, mountain: 82, coastal: 79 },
    benefit: "Réduit les déchets tout en améliorant la qualité d'exécution."
  },
  lowCarbon: {
    labelFr: "Construction bas carbone",
    labelEn: "Low-carbon construction",
    compat: { tropical: 90, arid: 90, temperate: 92, mountain: 90, coastal: 90 },
    benefit: "Minimise l'empreinte carbone des matériaux et de la logistique."
  }
};

const materialKeyMap = [
  { key: "earth", patterns: ["terre", "pissee", "compressed earth", "rammed earth", "earth"] },
  { key: "bamboo", patterns: ["bambou", "bamboo"] },
  { key: "timber", patterns: ["bois", "timber", "clt"] },
  { key: "stone", patterns: ["pierre", "stone", "brick", "brique"] },
  { key: "lime", patterns: ["chaux", "lime"] },
  { key: "laterite", patterns: ["laterite", "latérite"] },
  { key: "recycled", patterns: ["recycle", "recycl"] }
];

const detectClimateKey = (climate) => {
  const normalized = normalize(climate);
  if (normalized.includes("arid") || normalized.includes("aride")) return "arid";
  if (normalized.includes("montagne") || normalized.includes("mountain")) return "mountain";
  if (normalized.includes("cotier") || normalized.includes("coastal") || normalized.includes("cote")) return "coastal";
  if (normalized.includes("tempere") || normalized.includes("temperate") || normalized.includes("ocean")) return "temperate";
  return "tropical";
};

const detectMaterialKeys = (materialString) => {
  const tokens = materialString.split(/[,;&]/).map((item) => normalize(item));
  const detected = new Set();

  tokens.forEach((token) => {
    materialKeyMap.forEach(({ key, patterns }) => {
      if (patterns.some((pattern) => token.includes(pattern))) {
        detected.add(key);
      }
    });
  });

  return Array.from(detected.length ? detected : ["earth"]);
};

const detectMethodKey = (methodTitle) => {
  const normalized = normalize(methodTitle);
  if (normalized.includes("passif")) return "passiveCooling";
  if (normalized.includes("ventilation")) return "naturalVentilation";
  if (normalized.includes("pluie") || normalized.includes("rain")) return "rainwater";
  if (normalized.includes("solaire") || normalized.includes("solar")) return "solar";
  if (normalized.includes("inertie")) return "inertia";
  if (normalized.includes("veget")) return "greenRoofs";
  if (normalized.includes("modulaire") || normalized.includes("modular")) return "modular";
  if (normalized.includes("carbone")) return "lowCarbon";
  return "passiveCooling";
};

const getTerrainComplexity = (terrain) => {
  const normalized = normalize(terrain);
  if (normalized.includes("pente") || normalized.includes("plateau") || normalized.includes("rocheuse") || normalized.includes("urbaine") || normalized.includes("sec")) {
    return 8;
  }
  if (normalized.includes("delta") || normalized.includes("cotiere") || normalized.includes("inondable")) {
    return 4;
  }
  return 5;
};

const getCultureAdaptation = (culture, climateKey) => {
  const normalized = normalize(culture);
  if (normalized.includes("cour") || normalized.includes("concession") || normalized.includes("famille")) return 5;
  if (normalized.includes("village") || normalized.includes("dense")) return 6;
  return climateKey === "arid" ? 7 : 5;
};

const getComplexityLabel = (value, lang) => {
  if (value >= 13) return lang === "fr" ? "Élevée" : "High";
  if (value >= 9) return lang === "fr" ? "Moyenne" : "Medium";
  return lang === "fr" ? "Faible" : "Low";
};

const getRatingLabel = (score, lang) => {
  if (score >= 85) return lang === "fr" ? "Très pertinent" : "Highly relevant";
  if (score >= 70) return lang === "fr" ? "Pertinent" : "Relevant";
  return lang === "fr" ? "Modéré" : "Moderate";
};

const materialCompatibilitySummary = (materialKeys, climateKey, lang) =>
  materialKeys.map((key) => {
    const profile = materialProfiles[key];
    const compatScore = profile.compat[climateKey] ?? 72;
    return {
      title: lang === "fr" ? profile.labelFr : profile.labelEn,
      rating: getRatingLabel(compatScore, lang),
      note: profile.note,
      compat: compatScore
    };
  });

const getMethodProfile = (methodTitle) => {
  const methodKey = detectMethodKey(methodTitle);
  return methodProfiles[methodKey] || methodProfiles.passiveCooling;
};

export function generateDynamicAnalysis(form, data, language) {
  const lang = language === "fr" ? "fr" : "en";
  const climateKey = detectClimateKey(form.climate);
  const climateProfile = climateProfiles[climateKey];
  const materialKeys = detectMaterialKeys(form.materials);
  const methodProfile = getMethodProfile(form.method || data.constructionMethods[0]?.title || "Refroidissement passif");
  const terrainComplexity = getTerrainComplexity(form.terrain);
  const cultureAdaptation = getCultureAdaptation(form.culture, climateKey);

  const materialCompatScores = materialKeys.map((key) => materialProfiles[key]?.compat[climateKey] ?? 72);
  const materialImpact = materialKeys.reduce((sum, key) => sum + (materialProfiles[key]?.impact ?? 12), 0) / materialKeys.length;
  const materialScore = materialCompatScores.reduce((sum, next) => sum + next, 0) / materialCompatScores.length;
  const methodBonus = methodProfile.compat[climateKey] ? (methodProfile.compat[climateKey] - 78) * 0.5 : 0;

  const complexityValue = materialKeys.length * 2 + terrainComplexity / 2 + cultureAdaptation / 2;
  const complexityLabel = getComplexityLabel(complexityValue, lang);

  const score = clamp(
    Math.round(climateProfile.base + (materialScore - 78) * 0.25 + methodBonus + 3 - terrainComplexity * 0.15),
    60,
    96
  );

  const thermal = clamp(Math.round(50 + (materialScore - 70) * 0.35 + (methodProfile.compat[climateKey] - 75) * 0.2), 55, 95);
  const carbon = clamp(Math.round(95 - materialImpact + (methodProfile.labelEn === "Low-carbon construction" ? 8 : 0)), 58, 96);
  const resilience = clamp(Math.round(52 + score * 0.22 - terrainComplexity * 0.18), 56, 96);
  const adaptation = clamp(Math.round((score + materialScore + methodProfile.compat[climateKey]) / 3), 60, 96);

  const selectedMaterials = materialKeys.map((key) => (lang === "fr" ? materialProfiles[key]?.labelFr : materialProfiles[key]?.labelEn));
  const materialListLabel = selectedMaterials.join(lang === "fr" ? ", " : ", ");
  const methodLabel = lang === "fr" ? methodProfile.labelFr : methodProfile.labelEn;

  const model = data.houseModels.find((house) => normalize(house.climate).includes(climateKey)) || data.houseModels[0];

  const blocks = [
    {
      title: lang === "fr" ? "Axes de performance" : "Performance focus",
      value: `${climateProfile.strength}`
    },
    {
      title: lang === "fr" ? "Gain principal" : "Primary gain",
      value: `${methodLabel} • ${climateProfile.recommended}`
    },
    {
      title: lang === "fr" ? "Compatibilité matériau" : "Material fit",
      value: materialListLabel
    },
    {
      title: lang === "fr" ? "Stratégie documentaire" : "Design strategy",
      value: `${analysisActionPhrase(lang, climateProfile, methodLabel)}`
    },
    {
      title: lang === "fr" ? "Complexité projet" : "Project complexity",
      value: `${complexityLabel}`
    },
    {
      title: lang === "fr" ? "Risques à surveiller" : "Key risks",
      value: `${climateProfile.risk}`
    }
  ];

  return {
    title: lang === "fr" ? `Analyse dynamique pour ${climateProfile.labelFr}` : `Dynamic analysis for ${climateProfile.labelEn}`,
    subtitle:
      lang === "fr"
        ? `Réponse adaptée à ${materialListLabel} et à la méthode ${methodLabel}.`
        : `Response tuned to ${materialListLabel} and the ${methodLabel} strategy.`,
    score,
    blocks,
    detail:
      lang === "fr"
        ? `La combinaison ${materialListLabel} / ${climateProfile.labelFr} est analysée pour optimiser le confort passif, réduire les émissions et limiter les risques liés à l'humidité ou à la chaleur. Le choix de ${methodLabel} renforce la pertinence technique du projet.`
        : `The ${materialListLabel} / ${climateProfile.labelEn} combination is analyzed to optimize passive comfort, lower emissions and manage humidity or heat risks. Choosing ${methodLabel} strengthens the technical relevance of the project.`,
    advantages: [
      lang === "fr" ? `Matériaux privilégiés : ${climateProfile.recommended}.` : `Preferred materials: ${climateProfile.recommended}.`,
      lang === "fr" ? materialProfiles[materialKeys[0]]?.advantages : materialProfiles[materialKeys[0]]?.advantages,
      lang === "fr" ? methodProfile.benefit : methodProfile.benefit
    ],
    limits: [
      lang === "fr" ? climateProfile.observation : climateProfile.observation,
      lang === "fr" ? materialProfiles[materialKeys[0]]?.limits : materialProfiles[materialKeys[0]]?.limits,
      lang === "fr" ? `Vigilance sur la durabilité des composants en contact avec l'eau et l'air salin.` : `Monitor moisture and saline exposure for wet components.`
    ],
    observations: [
      lang === "fr" ? `La méthode ${methodLabel} est particulièrement pertinente dans ce contexte.` : `The ${methodLabel} method is especially relevant in this context.`,
      lang === "fr" ? `L'optimisation des apports solaires et de la ventilation est clé.` : `Optimizing solar gains and ventilation is key.`,
      lang === "fr" ? `Les matériaux analysés offrent un compromis technique et environnemental solide.` : `The selected materials offer a solid technical and environmental compromise.`
    ],
    materialInsights: materialCompatibilitySummary(materialKeys, climateKey, lang),
    indicators: {
      thermal,
      carbon,
      resilience,
      adaptation
    },
    modelName: model?.name || (lang === "fr" ? "Modèle recommandé" : "Recommended model")
  };
}

const analysisActionPhrase = (lang, climateProfile, methodLabel) => {
  if (lang === "fr") {
    return `Limiter la surchauffe et privilégier la maintenance facilitée avec ${methodLabel}.`;
  }
  return `Minimize overheating and favor maintainability with ${methodLabel}.`;
};
