// ============================================================
// HomèVo — Moteur d'analyse dynamique v2
// ============================================================
// Améliorations v2 :
//   - Correction bug critique : Set.size au lieu de Set.length
//   - Profils matériaux bilingues (advantagesEn, limitsEn, noteEn)
//   - Limites contextuelles par climat (fini le texte statique)
//   - Observations dynamiques basées sur les scores calculés
//   - Détection élargie : acier, brique, fibre de palmier, CLT
//   - Indicateur `water` (autonomie hydrique)
//   - analysisActionPhrase enrichie (climat + matériau + méthode)
//   - Aucun changement d'API publique
// ============================================================

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const normalize = (text) =>
  String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9\s]/g, "")
    .trim();

// ============================================================
// PROFILS CLIMATIQUES
// ============================================================

const climateProfiles = {
  tropical: {
    labelFr: "Tropical humide",
    labelEn: "Tropical humid",
    base: 82,
    strength: "ombre, ventilation naturelle et inertie légère",
    strengthEn: "shade, natural ventilation and lightweight thermal mass",
    risk: "humidité et corrosion",
    riskEn: "humidity and corrosion",
    recommended: "terre, bambou et bois",
    recommendedEn: "earth, bamboo and timber",
    advantage: "Ventilation passive et ombrage bien dimensionné",
    advantageEn: "Passive ventilation and well-proportioned shading",
    observation:
      "Les enveloppes respirantes protègent du climat tout en maintenant le confort.",
    observationEn:
      "Breathable envelopes protect against the climate while maintaining comfort."
  },
  arid: {
    labelFr: "Aride chaud",
    labelEn: "Arid hot",
    base: 80,
    strength: "inertie thermique, protections solaires et stockage de l'eau",
    strengthEn: "thermal mass, solar shading and water storage",
    risk: "dessiccation et surchauffe diurne",
    riskEn: "desiccation and daytime overheating",
    recommended: "terre, chamotte et pierre",
    recommendedEn: "earth, fireclay and stone",
    advantage: "Les murs massifs stabilisent les fluctuations de température.",
    advantageEn: "Massive walls stabilize temperature fluctuations.",
    observation:
      "La conception doit limiter les apports solaires directs et favoriser la ventilation nocturne.",
    observationEn:
      "Design must limit direct solar gains and promote night-time ventilation."
  },
  temperate: {
    labelFr: "Tempéré océanique",
    labelEn: "Temperate oceanic",
    base: 84,
    strength: "confort passif, toitures végétalisées et inertie modérée",
    strengthEn: "passive comfort, green roofs and moderate thermal mass",
    risk: "humidité ambiante et modes de ventilation mal adaptés",
    riskEn: "ambient humidity and poorly adapted ventilation",
    recommended: "bois, pierre et chaux",
    recommendedEn: "timber, stone and lime",
    advantage: "L'orientation solaire et l'isolation hygroscopique améliorent les performances.",
    advantageEn: "Solar orientation and hygroscopic insulation improve performance.",
    observation:
      "Les systèmes mixtes offrent de bonnes réponses en saison chaude et froide.",
    observationEn:
      "Mixed systems respond well to both warm and cold seasons."
  },
  mountain: {
    labelFr: "Montagne froide",
    labelEn: "Mountain cold",
    base: 86,
    strength: "résistance au froid, inertie thermique et protection neige",
    strengthEn: "cold resistance, thermal mass and snow protection",
    risk: "charges de neige et infiltration d'eau",
    riskEn: "snow loads and water infiltration",
    recommended: "pierre, bois et isolants naturels",
    recommendedEn: "stone, timber and natural insulation",
    advantage: "La pierre garantit durabilité et protection au pied des pentes.",
    advantageEn: "Stone ensures durability and protection at slope base.",
    observation:
      "L'enveloppe doit limiter les déperditions et offrir une inertie stable.",
    observationEn:
      "The envelope must limit heat loss and provide stable thermal mass."
  },
  coastal: {
    labelFr: "Côtier venteux",
    labelEn: "Coastal windy",
    base: 81,
    strength: "ventilation, drainage et matériaux résistants à la corrosion",
    strengthEn: "ventilation, drainage and corrosion-resistant materials",
    risk: "salinité et humidité marine",
    riskEn: "salinity and marine humidity",
    recommended: "bois traité, acier recyclé et membranes durables",
    recommendedEn: "treated timber, recycled steel and durable membranes",
    advantage: "Les façades aérées et les toitures protectrices prolongent la durée de vie.",
    advantageEn: "Ventilated facades and protective roofing extend service life.",
    observation:
      "Il faut limiter l'exposition directe et favoriser des systèmes de maintenance faciles.",
    observationEn:
      "Limit direct exposure and favor easy-maintenance systems."
  }
};

// ============================================================
// PROFILS MATÉRIAUX (bilingues)
// ============================================================

const materialProfiles = {
  earth: {
    labelFr: "Terre",
    labelEn: "Earth",
    compat: { tropical: 76, arid: 96, temperate: 88, mountain: 58, coastal: 72 },
    advantages: "Inertie thermique élevée et empreinte carbone faible.",
    advantagesEn: "High thermal mass and low carbon footprint.",
    limits: "Nécessite une protection rigoureuse contre l'eau et l'humidité.",
    limitsEn: "Requires strict protection from water and moisture.",
    note: "Excellente solution en murs massifs, plinthes pierre et enduits respirants.",
    noteEn: "Excellent in massive walls, stone plinths and breathable renders.",
    impact: 10
  },
  bamboo: {
    labelFr: "Bambou",
    labelEn: "Bamboo",
    compat: { tropical: 94, arid: 64, temperate: 74, mountain: 60, coastal: 70 },
    advantages: "Léger, renouvelable et très adapté aux enveloppes ventilées.",
    advantagesEn: "Lightweight, renewable and well-suited to ventilated envelopes.",
    limits: "Sensibilité à l'humidité et aux insectes si non traité.",
    limitsEn: "Susceptible to moisture and insects if untreated.",
    note: "Idéal en structures légères, brise-soleils et cloisons respirantes.",
    noteEn: "Ideal for lightweight structures, sun screens and breathable partitions.",
    impact: 12
  },
  timber: {
    labelFr: "Bois",
    labelEn: "Timber",
    compat: { tropical: 68, arid: 75, temperate: 90, mountain: 82, coastal: 72 },
    advantages: "Bonne tenue structurelle et performance thermique modérée.",
    advantagesEn: "Good structural performance and moderate thermal properties.",
    limits: "Demande une attention particulière au cycle humidité-séchage.",
    limitsEn: "Requires careful attention to moisture-drying cycles.",
    note: "Adapté aux ossatures, bardages et toitures végétalisées légères.",
    noteEn: "Suited to frames, cladding and lightweight green roofs.",
    impact: 14
  },
  stone: {
    labelFr: "Pierre",
    labelEn: "Stone",
    compat: { tropical: 60, arid: 92, temperate: 88, mountain: 96, coastal: 76 },
    advantages: "Excellente résistance mécanique et masse thermique élevée.",
    advantagesEn: "Excellent mechanical strength and high thermal mass.",
    limits: "Poids élevé et logistique plus complexe sur site isolé.",
    limitsEn: "High weight and complex logistics on remote sites.",
    note: "Très performant en murs porteurs, socles et plinthes thermiquement actives.",
    noteEn: "Excellent in load-bearing walls, bases and thermally active plinths.",
    impact: 20
  },
  lime: {
    labelFr: "Chaux",
    labelEn: "Lime",
    compat: { tropical: 72, arid: 90, temperate: 88, mountain: 84, coastal: 81 },
    advantages: "Perméabilité à la vapeur et compatibilité avec les assemblages terre.",
    advantagesEn: "Vapour permeability and compatibility with earth assemblies.",
    limits: "Cure lente et besoin d'un applicateur qualifié.",
    limitsEn: "Slow cure and need for a skilled applicator.",
    note: "Excellente pour les enduits, mortiers et joints respirants.",
    noteEn: "Excellent for renders, mortars and breathable joints.",
    impact: 8
  },
  laterite: {
    labelFr: "Latérite",
    labelEn: "Laterite",
    compat: { tropical: 90, arid: 82, temperate: 70, mountain: 58, coastal: 66 },
    advantages: "Identité locale forte et bonne durabilité sous protection.",
    advantagesEn: "Strong local identity and good durability when protected.",
    limits: "Perméabilité et sensibilité aux détériorations si mal cernée.",
    limitsEn: "Porosity and vulnerability to deterioration if poorly detailed.",
    note: "Bonne option pour soubassements et murs de cour épais.",
    noteEn: "Good option for foundations and thick courtyard walls.",
    impact: 16
  },
  recycled: {
    labelFr: "Matériaux recyclés",
    labelEn: "Recycled materials",
    compat: { tropical: 72, arid: 80, temperate: 84, mountain: 78, coastal: 77 },
    advantages: "Faible empreinte carbone et valeur circulaire élevée.",
    advantagesEn: "Low carbon footprint and high circular value.",
    limits: "Qualité variable selon l'origine et le contrôle chantier.",
    limitsEn: "Variable quality depending on source and site quality control.",
    note: "Intéressant pour remplissages, parements et infrastructures légères.",
    noteEn: "Useful for infill, cladding and lightweight infrastructure.",
    impact: 6
  }
};

// ============================================================
// PROFILS MÉTHODES CONSTRUCTIVES
// ============================================================

const methodProfiles = {
  passiveCooling: {
    labelFr: "Refroidissement passif",
    labelEn: "Passive cooling",
    compat: { tropical: 94, arid: 70, temperate: 82, mountain: 68, coastal: 80 },
    benefit:
      "Réduit les besoins mécaniques en utilisant ombre et inertie.",
    benefitEn: "Reduces mechanical needs through shade and thermal mass."
  },
  naturalVentilation: {
    labelFr: "Ventilation naturelle",
    labelEn: "Natural ventilation",
    compat: { tropical: 96, arid: 78, temperate: 88, mountain: 72, coastal: 90 },
    benefit:
      "Améliore le confort passif sans énergie, particulièrement en climat humide.",
    benefitEn: "Improves passive comfort without energy use, especially in humid climates."
  },
  rainwater: {
    labelFr: "Collecte d'eau de pluie",
    labelEn: "Rainwater harvesting",
    compat: { tropical: 86, arid: 90, temperate: 84, mountain: 78, coastal: 88 },
    benefit:
      "Rend l'approvisionnement hydrique plus autonome et résilient.",
    benefitEn: "Makes water supply more autonomous and resilient."
  },
  solar: {
    labelFr: "Orientation solaire",
    labelEn: "Solar orientation",
    compat: { tropical: 84, arid: 94, temperate: 94, mountain: 92, coastal: 80 },
    benefit:
      "Optimise les gains solaires d'hiver et limite les apports d'été.",
    benefitEn: "Optimizes winter solar gains and limits summer heat intake."
  },
  inertia: {
    labelFr: "Inertie thermique",
    labelEn: "Thermal inertia",
    compat: { tropical: 82, arid: 92, temperate: 90, mountain: 88, coastal: 76 },
    benefit:
      "Lisse les variations thermiques et augmente le confort nocturne.",
    benefitEn: "Smooths thermal variations and increases night comfort."
  },
  greenRoofs: {
    labelFr: "Toitures végétalisées",
    labelEn: "Green roofs",
    compat: { tropical: 78, arid: 66, temperate: 92, mountain: 74, coastal: 84 },
    benefit:
      "Améliore l'isolation et la gestion de l'eau de pluie.",
    benefitEn: "Improves insulation and stormwater management."
  },
  modular: {
    labelFr: "Construction modulaire",
    labelEn: "Modular construction",
    compat: { tropical: 78, arid: 80, temperate: 86, mountain: 82, coastal: 79 },
    benefit:
      "Réduit les déchets tout en améliorant la qualité d'exécution.",
    benefitEn: "Reduces waste while improving construction quality."
  },
  lowCarbon: {
    labelFr: "Construction bas carbone",
    labelEn: "Low-carbon construction",
    compat: { tropical: 90, arid: 90, temperate: 92, mountain: 90, coastal: 90 },
    benefit:
      "Minimise l'empreinte carbone des matériaux et de la logistique.",
    benefitEn: "Minimizes the carbon footprint of materials and logistics."
  }
};

// ============================================================
// DÉTECTION — CORRESPONDANCES MATÉRIAUX
// Patterns enrichis : acier, brique, fibre de palmier, clt
// ============================================================

const materialKeyMap = [
  {
    key: "earth",
    patterns: [
      "terre", "pissee", "compressed earth", "rammed earth", "earth", "pisee", "adobe"
    ]
  },
  {
    key: "bamboo",
    patterns: [
      "bambou", "bamboo", "palmier", "palm", "fibre"
    ]
  },
  {
    key: "timber",
    patterns: [
      "bois", "timber", "clt", "bois massif", "wood"
    ]
  },
  {
    key: "stone",
    patterns: [
      "pierre", "stone", "brick", "brique"
    ]
  },
  {
    key: "lime",
    patterns: [
      "chaux", "lime"
    ]
  },
  {
    key: "laterite",
    patterns: [
      "laterite", "laterite"
    ]
  },
  {
    key: "recycled",
    patterns: [
      "recycle", "recycl", "acier", "steel", "reutilis", "reutil"
    ]
  }
];

// ============================================================
// DÉTECTION — FONCTIONS UTILITAIRES
// ============================================================

export const detectClimateKey = (climate) => {
  const normalized = normalize(climate);
  if (normalized.includes("arid") || normalized.includes("aride")) return "arid";
  if (normalized.includes("montagne") || normalized.includes("mountain") || normalized.includes("alpin")) return "mountain";
  if (
    normalized.includes("cotier") ||
    normalized.includes("coastal") ||
    normalized.includes("cote") ||
    normalized.includes("littoral")
  )
    return "coastal";
  if (
    normalized.includes("tempere") ||
    normalized.includes("temperate") ||
    normalized.includes("ocean") ||
    normalized.includes("mediterranee")
  )
    return "temperate";
  return "tropical";
};

export const detectMaterialKeys = (materialString) => {
  const tokens = materialString.split(/[,;&]/).map((item) => normalize(item));
  const detected = new Set();

  tokens.forEach((token) => {
    materialKeyMap.forEach(({ key, patterns }) => {
      if (patterns.some((pattern) => token.includes(pattern))) {
        detected.add(key);
      }
    });
  });

  // CORRECTION BUG v1 : Set.length est toujours undefined (falsy).
  // Il faut utiliser Set.size pour vérifier si la détection a retourné des résultats.
  return Array.from(detected.size ? detected : new Set(["earth"]));
};

export const detectMethodKey = (methodTitle) => {
  const normalized = normalize(methodTitle);
  if (normalized.includes("passif") || normalized.includes("cooling")) return "passiveCooling";
  if (normalized.includes("ventilation")) return "naturalVentilation";
  if (normalized.includes("pluie") || normalized.includes("rain")) return "rainwater";
  if (normalized.includes("solaire") || normalized.includes("solar")) return "solar";
  if (normalized.includes("inertie") || normalized.includes("inertia")) return "inertia";
  if (normalized.includes("veget") || normalized.includes("toit")) return "greenRoofs";
  if (normalized.includes("modulaire") || normalized.includes("modular")) return "modular";
  if (normalized.includes("carbone") || normalized.includes("carbon")) return "lowCarbon";
  return "passiveCooling";
};

// ============================================================
// COMPLEXITÉ TERRAIN & ADAPTATION CULTURELLE
// ============================================================

const getTerrainComplexity = (terrain) => {
  const normalized = normalize(terrain);
  // Terrains techniquement exigeants
  if (
    normalized.includes("pente") ||
    normalized.includes("plateau") ||
    normalized.includes("rocheuse") ||
    normalized.includes("urbaine") ||
    normalized.includes("sec") ||
    normalized.includes("dense")
  ) {
    return 8;
  }
  // Terrains à risque hydraulique
  if (
    normalized.includes("delta") ||
    normalized.includes("cotiere") ||
    normalized.includes("inondable") ||
    normalized.includes("humide")
  ) {
    return 5;
  }
  return 6;
};

const getCultureAdaptation = (culture, climateKey) => {
  const normalized = normalize(culture);
  if (normalized.includes("cour") || normalized.includes("concession")) return 5;
  if (normalized.includes("famille") || normalized.includes("village")) return 6;
  if (normalized.includes("dense") || normalized.includes("urbain")) return 7;
  return climateKey === "arid" ? 7 : 5;
};

// ============================================================
// LABELS
// ============================================================

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

// ============================================================
// LIMITES CONTEXTUELLES PAR CLIMAT
// Remplace le texte statique "air salin" présent pour tous les climates
// ============================================================

const getContextualLimit = (climateKey, lang) => {
  const limits = {
    tropical: {
      fr: "Protéger tous les composants structurels de l'humidité, des insectes et des cycles de séchage.",
      en: "Protect all structural components from moisture, insects and drying cycles."
    },
    arid: {
      fr: "Anticiper la dessiccation des joints et la dilatation des matériaux sous chaleur intense.",
      en: "Plan for joint desiccation and material expansion under intense heat."
    },
    temperate: {
      fr: "Gérer les cycles gel-dégel et les risques de condensation sur les ponts thermiques.",
      en: "Manage freeze-thaw cycles and condensation risks at thermal bridges."
    },
    mountain: {
      fr: "Dimensionner les structures pour les charges de neige et assurer l'étanchéité à l'air.",
      en: "Size structures for snow loads and ensure airtightness."
    },
    coastal: {
      fr: "Protéger toutes les métalleries de la corrosion saline et prévoir une maintenance régulière.",
      en: "Protect all metal components from salt corrosion with a regular maintenance schedule."
    }
  };
  return limits[climateKey]?.[lang] ?? limits.tropical[lang];
};

// ============================================================
// OBSERVATIONS DYNAMIQUES basées sur les scores calculés
// ============================================================

const getDynamicObservations = (
  { thermal, carbon, resilience, adaptation, water },
  climateProfile,
  methodLabel,
  materialListLabel,
  lang
) => {
  const obs = [];

  // Observation 1 : sur la méthode constructive
  obs.push(
    lang === "fr"
      ? `La méthode ${methodLabel} est particulièrement pertinente dans ce contexte ${climateProfile.labelFr.toLowerCase()}.`
      : `The ${methodLabel} approach is especially well-suited to this ${climateProfile.labelEn.toLowerCase()} context.`
  );

  // Observation 2 : sur la performance thermique ou carbone selon le score dominant
  if (thermal >= 80 && carbon >= 80) {
    obs.push(
      lang === "fr"
        ? `La combinaison ${materialListLabel} offre une double performance thermique et carbone au-dessus de la moyenne.`
        : `The ${materialListLabel} combination delivers above-average thermal and carbon performance.`
    );
  } else if (thermal >= 80) {
    obs.push(
      lang === "fr"
        ? `L'inertie et l'isolation des matériaux sélectionnés produisent un confort thermique solide.`
        : `The thermal mass and insulation of selected materials produce strong passive comfort.`
    );
  } else if (carbon >= 85) {
    obs.push(
      lang === "fr"
        ? `L'impact carbone est particulièrement maîtrisé grâce à l'usage de matériaux locaux et biosourcés.`
        : `Carbon impact is well-controlled through the use of local and bio-based materials.`
    );
  } else {
    obs.push(
      lang === "fr"
        ? `L'optimisation des apports solaires et de la ventilation est clé pour ce profil climatique.`
        : `Optimizing solar gains and ventilation is key for this climate profile.`
    );
  }

  // Observation 3 : sur la résilience ou l'eau selon les scores
  if (water >= 78) {
    obs.push(
      lang === "fr"
        ? `Le potentiel d'autonomie hydrique est élevé : la gestion des eaux pluviales mérite d'être intégrée dès la phase esquisse.`
        : `Water autonomy potential is high: stormwater management should be integrated from the earliest design phase.`
    );
  } else if (resilience >= 80) {
    obs.push(
      lang === "fr"
        ? `La résilience structurelle du projet est bonne, notamment face aux aléas climatiques caractéristiques du contexte.`
        : `The project's structural resilience is strong, particularly against climate hazards typical of this context.`
    );
  } else {
    obs.push(
      lang === "fr"
        ? `Les matériaux analysés offrent un compromis technique et environnemental adapté à ce contexte.`
        : `The selected materials offer a sound technical and environmental balance for this context.`
    );
  }

  return obs;
};

// ============================================================
// PHRASE D'ACTION CONTEXTUELLE (enrichie)
// ============================================================

const analysisActionPhrase = (lang, climateProfile, methodLabel, materialKeys) => {
  const hasMass = materialKeys.some((k) => ["earth", "stone", "laterite"].includes(k));
  const hasLight = materialKeys.some((k) => ["bamboo", "timber"].includes(k));

  if (lang === "fr") {
    if (hasMass && hasLight) {
      return `Combiner masse thermique (${
        materialKeys.includes("earth") ? "terre" : materialKeys.includes("stone") ? "pierre" : "latérite"
      }) et légèreté (${
        materialKeys.includes("bamboo") ? "bambou" : "bois"
      }) pour maximiser l'efficacité avec ${methodLabel}.`;
    }
    if (hasMass) {
      return `Exploiter la masse thermique disponible et optimiser la ventilation nocturne avec ${methodLabel}.`;
    }
    if (hasLight) {
      return `Privilégier l'ombrage profond et la ventilation traversante pour compenser la faible inertie avec ${methodLabel}.`;
    }
    return `Limiter la surchauffe et favoriser la maintenance facilitée avec ${methodLabel}.`;
  } else {
    if (hasMass && hasLight) {
      return `Combine thermal mass (${
        materialKeys.includes("earth") ? "earth" : materialKeys.includes("stone") ? "stone" : "laterite"
      }) and lightness (${
        materialKeys.includes("bamboo") ? "bamboo" : "timber"
      }) to maximize efficiency with ${methodLabel}.`;
    }
    if (hasMass) {
      return `Leverage available thermal mass and optimize night-time ventilation with ${methodLabel}.`;
    }
    if (hasLight) {
      return `Prioritize deep shading and cross-ventilation to compensate low thermal mass with ${methodLabel}.`;
    }
    return `Minimize overheating and favor maintainability with ${methodLabel}.`;
  }
};

// ============================================================
// RÉSUMÉ DE COMPATIBILITÉ MATÉRIAUX
// ============================================================

export const materialCompatibilitySummary = (materialKeys, climateKey, lang) =>
  materialKeys.map((key) => {
    const profile = materialProfiles[key];
    const compatScore = profile.compat[climateKey] ?? 72;
    return {
      title: lang === "fr" ? profile.labelFr : profile.labelEn,
      rating: getRatingLabel(compatScore, lang),
      note: lang === "fr" ? profile.note : profile.noteEn,
      compat: compatScore
    };
  });

const getMethodProfile = (methodTitle) => {
  const methodKey = detectMethodKey(methodTitle);
  return methodProfiles[methodKey] || methodProfiles.passiveCooling;
};

// ============================================================
// FONCTION PRINCIPALE — generateDynamicAnalysis
// API publique inchangée : (form, data, language) => analysisResult
// ============================================================

export function generateDynamicAnalysis(form, data, language) {
  const lang = language === "fr" ? "fr" : "en";

  // — Détection des dimensions du contexte —
  const climateKey = detectClimateKey(form.climate);
  const climateProfile = climateProfiles[climateKey];
  const materialKeys = detectMaterialKeys(form.materials);
  const methodProfile = getMethodProfile(
    form.method || data.constructionMethods[0]?.title || "Refroidissement passif"
  );
  const terrainComplexity = getTerrainComplexity(form.terrain);
  const cultureAdaptation = getCultureAdaptation(form.culture, climateKey);

  // — Calcul des scores de base —
  const materialCompatScores = materialKeys.map(
    (key) => materialProfiles[key]?.compat[climateKey] ?? 72
  );
  const materialImpact =
    materialKeys.reduce((sum, key) => sum + (materialProfiles[key]?.impact ?? 12), 0) /
    materialKeys.length;
  const materialScore =
    materialCompatScores.reduce((sum, next) => sum + next, 0) /
    materialCompatScores.length;
  const methodBonus = methodProfile.compat[climateKey]
    ? (methodProfile.compat[climateKey] - 78) * 0.5
    : 0;

  const complexityValue =
    materialKeys.length * 2 + terrainComplexity / 2 + cultureAdaptation / 2;
  const complexityLabel = getComplexityLabel(complexityValue, lang);

  // — Score global —
  const score = clamp(
    Math.round(
      climateProfile.base +
        (materialScore - 78) * 0.25 +
        methodBonus +
        3 -
        terrainComplexity * 0.15
    ),
    60,
    96
  );

  // — Indicateurs détaillés —
  const thermal = clamp(
    Math.round(
      50 +
        (materialScore - 70) * 0.35 +
        (methodProfile.compat[climateKey] - 75) * 0.2
    ),
    55,
    95
  );

  const carbon = clamp(
    Math.round(
      95 -
        materialImpact +
        (methodProfile.labelEn === "Low-carbon construction" ? 8 : 0)
    ),
    58,
    96
  );

  const resilience = clamp(
    Math.round(52 + score * 0.22 - terrainComplexity * 0.18),
    56,
    96
  );

  const adaptation = clamp(
    Math.round(
      (score + materialScore + methodProfile.compat[climateKey]) / 3
    ),
    60,
    96
  );

  // — Indicateur eau (autonomie hydrique) —
  // Bonus si méthode = collecte d'eau, si climat humide, si terrain favorable
  const isRainwaterMethod = methodProfile.labelEn === "Rainwater harvesting";
  const climateWaterBonus =
    climateKey === "tropical" ? 10 : climateKey === "coastal" ? 7 : climateKey === "mountain" ? 5 : 2;
  const terrainWaterPenalty =
    normalize(form.terrain).includes("sec") || normalize(form.terrain).includes("arid") ? 8 : 0;

  const water = clamp(
    Math.round(
      55 +
        climateWaterBonus +
        (isRainwaterMethod ? 18 : 0) +
        (methodProfile.compat[climateKey] - 75) * 0.1 -
        terrainWaterPenalty
    ),
    45,
    96
  );

  // — Labels et listes —
  const selectedMaterials = materialKeys.map((key) =>
    lang === "fr" ? materialProfiles[key]?.labelFr : materialProfiles[key]?.labelEn
  );
  const materialListLabel = selectedMaterials.join(", ");
  const methodLabel =
    lang === "fr" ? methodProfile.labelFr : methodProfile.labelEn;

  // — Modèle recommandé —
  const model =
    data.houseModels.find((house) =>
      normalize(house.climate).includes(climateKey)
    ) || data.houseModels[0];

  // — Blocs de synthèse —
  const blocks = [
    {
      title: lang === "fr" ? "Axes de performance" : "Performance focus",
      value: lang === "fr" ? climateProfile.strength : climateProfile.strengthEn
    },
    {
      title: lang === "fr" ? "Gain principal" : "Primary gain",
      value: `${methodLabel} • ${
        lang === "fr" ? climateProfile.recommended : climateProfile.recommendedEn
      }`
    },
    {
      title: lang === "fr" ? "Compatibilité matériau" : "Material fit",
      value: materialListLabel
    },
    {
      title: lang === "fr" ? "Stratégie documentaire" : "Design strategy",
      value: analysisActionPhrase(lang, climateProfile, methodLabel, materialKeys)
    },
    {
      title: lang === "fr" ? "Complexité projet" : "Project complexity",
      value: complexityLabel
    },
    {
      title: lang === "fr" ? "Risques à surveiller" : "Key risks",
      value: lang === "fr" ? climateProfile.risk : climateProfile.riskEn
    }
  ];

  // — Avantages (bilingues) —
  const firstMaterial = materialProfiles[materialKeys[0]];
  const advantages = [
    lang === "fr"
      ? `Matériaux privilégiés : ${climateProfile.recommended}.`
      : `Preferred materials: ${climateProfile.recommendedEn}.`,
    lang === "fr" ? firstMaterial?.advantages : firstMaterial?.advantagesEn,
    lang === "fr" ? methodProfile.benefit : methodProfile.benefitEn
  ];

  // — Limites (contextuelles) —
  const limits = [
    lang === "fr" ? climateProfile.observation : climateProfile.observationEn,
    lang === "fr" ? firstMaterial?.limits : firstMaterial?.limitsEn,
    getContextualLimit(climateKey, lang) // ← Plus de texte statique "air salin"
  ];

  // — Observations dynamiques —
  const allScores = { thermal, carbon, resilience, adaptation, water };
  const observations = getDynamicObservations(
    allScores,
    climateProfile,
    methodLabel,
    materialListLabel,
    lang
  );

  return {
    title:
      lang === "fr"
        ? `Analyse dynamique pour ${climateProfile.labelFr}`
        : `Dynamic analysis for ${climateProfile.labelEn}`,
    subtitle:
      lang === "fr"
        ? `Réponse adaptée à ${materialListLabel} et à la méthode ${methodLabel}.`
        : `Response tuned to ${materialListLabel} and the ${methodLabel} strategy.`,
    score,
    blocks,
    detail:
      lang === "fr"
        ? `La combinaison ${materialListLabel} / ${climateProfile.labelFr} est analysée pour optimiser le confort passif, réduire les émissions et limiter les risques liés à ${climateProfile.risk}. Le choix de ${methodLabel} renforce la pertinence technique du projet.`
        : `The ${materialListLabel} / ${climateProfile.labelEn} combination is analyzed to optimize passive comfort, lower emissions and manage ${climateProfile.riskEn}. Choosing ${methodLabel} strengthens the technical relevance of the project.`,
    advantages,
    limits,
    observations,
    materialInsights: materialCompatibilitySummary(materialKeys, climateKey, lang),
    indicators: {
      thermal,
      carbon,
      resilience,
      adaptation,
      water // ← Nouvel indicateur
    },
    modelName:
      model?.name || (lang === "fr" ? "Modèle recommandé" : "Recommended model")
  };
}
