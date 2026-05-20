export const en = {
  brand: {
    name: "HomèVo",
    subtitle: "Eco design lab"
  },
  nav: [
    { id: "home", label: "Home" },
    { id: "analysis", label: "Analysis" },
    { id: "library", label: "Models" },
    { id: "materials", label: "Materials" },
    { id: "methods", label: "Methods" },
    { id: "dashboard", label: "Dashboard" }
  ],
  actions: {
    openAnalysis: "Open analysis",
    openWorkspace: "Open workspace",
    toggleMenu: "Toggle menu",
    languageSwitch: "Change language",
    analyze: "Analyze",
    viewLibrary: "View library"
  },
  home: {
    badge: "Climate-adapted housing intelligence",
    title: "Design buildings that belong to their climate, ground and culture.",
    intro:
      "HomèVo helps architecture and engineering teams evaluate local geomaterials, passive systems, social context and environmental risk before a building concept becomes expensive to change.",
    start: "Start environmental analysis",
    browse: "Browse models",
    heroDiagram: "Bioclimatic section",
    metrics: [
      { label: "Embodied carbon", value: "-42%" },
      { label: "Comfort hours", value: "91%" },
      { label: "Local material", value: "78%" }
    ],
    searchPlaceholder: "Find housing models adapted to your environment",
    searchClimateLabel: "Climate",
    searchClimateValue: "Tropical humid",
    searchRegionLabel: "Region",
    searchRegionValue: "Coastal delta",
    missionBadge: "Platform mission",
    missionTitle: "A research workspace for architecture that responds to place.",
    missionText:
      "The prototype links climate typologies, terrain dynamics, local craft, geomaterial behavior and low-carbon construction systems. It is designed for professionals making practical decisions.",
    featureCards: [
      { title: "Ecological engineering", text: "Evaluate water cycles, passive comfort, material flows and carbon exposure." },
      { title: "Local societies", text: "Connect building logic to cultural patterns, skills, maintenance and settlement forms." },
      { title: "Urban resilience", text: "Compare density, heat-island impact, public space, mobility and long-term durability." }
    ],
    featuredEyebrow: "Featured models",
    featuredTitle: "Housing systems tuned for climate, craft and structural logic.",
    intelligence: [
      { title: "Local materials", text: "Earth, laterite, bamboo, stone, timber and lime compared by climate fit and structural role." },
      { title: "Climate adaptation", text: "Orientation, shading, ventilation, thermal mass and roof systems mapped to microclimates." },
      { title: "Ecological engineering", text: "Water harvesting, low-carbon assemblies and durability strategies for long service life." }
    ],
    casesEyebrow: "Global case studies",
    casesTitle: "Ecological housing lessons from different environments."
  },
  analysis: {
    eyebrow: "Environmental analysis",
    title: "Translate local conditions into buildable ecological recommendations.",
    intro:
      "Select climate, terrain, culture and available materials to generate a professional design brief for early concept work.",
    siteInputs: "Site inputs",
    generatedBrief: "Generated brief",
    adaptation: "Adaptation",
    aiLabel: "AI recommendation",
    climateMap: "Interactive climate map",
    fields: {
      climate: "Climate type",
      region: "Geographic region",
      terrain: "Terrain type",
      culture: "Local culture",
      materials: "Available local materials"
    }
  },
  library: {
    eyebrow: "Housing models library",
    title: "Compare climate-ready housing models by material, complexity and performance.",
    intro:
      "Cards are structured for early-stage feasibility discussions between designers, engineers and local construction partners.",
    filters: ["All", "Tropical climate", "Arid climate", "Temperate climate", "Mountain environment", "Coastal environment", "Urban/rural context"],
    stats: {
      durability: "Durability",
      complexity: "Complexity",
      efficiency: "Efficiency"
    }
  },
  materials: {
    eyebrow: "Materials database",
    title: "Ecological materials evaluated as environmental and structural systems.",
    intro:
      "Explore advantages, weaknesses, thermal behavior, impact and recommended uses for local construction palettes.",
    impactSuffix: "impact",
    labels: {
      advantages: "Advantages",
      weaknesses: "Weaknesses",
      thermal: "Thermal performance",
      structural: "Structural behavior",
      uses: "Recommended uses",
      comparisonEyebrow: "Material comparison tool",
      comparisonTitle: "Compare environmental fit and construction behavior.",
      lowCarbon: "Low carbon"
    }
  },
  methods: {
    eyebrow: "Sustainable construction methods",
    title: "Passive systems and low-carbon methods for resilient buildings.",
    intro:
      "Each method is framed as a practical design lever: comfort, water, energy, maintenance and construction logistics.",
    resilience: "Resilience value"
  },
  dashboard: {
    eyebrow: "Professional dashboard",
    title: "Workspace prototype for architects, engineers and environmental designers.",
    intro:
      "A dense but calm dashboard for saving projects, comparing systems and generating ecological recommendations.",
    saved: "Saved projects",
    projectFilters: "Project filters",
    indicators: "Sustainability indicators",
    stats: ["Carbon", "Comfort", "Water"],
    rings: ["Adaptation", "Low carbon", "Passive comfort", "Water autonomy"],
    tools: [
      { title: "Compare materials", text: "Rank earth, bamboo, lime and recycled assemblies by local availability and maintenance risk." },
      { title: "Analyze adaptation", text: "Score the project against heat, humidity, wind, flood, drought and urban heat-island exposure." },
      { title: "Generate recommendations", text: "Produce a design memo with roof, envelope, ventilation, water and geomaterial guidance." }
    ]
  },
  footer: {
    text: "A prototype platform for ecological, durable and locally adapted housing design.",
    resources: "Resources",
    links: ["Material atlas", "Climate library", "Construction methods"],
    contact: "Contact",
    contactText: "For collaborations, professional questions or research partnerships around HomèVo.",
    workspaceLink: "Professional workspace access",
    contactDetails: {
      nameLabel: "Name",
      name: "Enock O. Sèmèvo",
      emailLabel: "Email",
      email: "henocsmvo@gmail.com",
      phoneLabel: "Phone",
      phone: "+33 605 609 687",
      locationLabel: "Location",
      location: "2 rue Gérard Philipe, 51100, Reims, France"
    }
  },
  data: {
    climateOptions: ["Tropical humid", "Arid hot", "Temperate oceanic", "Mountain cold", "Coastal windy"],
    defaultForm: {
      climate: "Tropical humid",
      region: "Coastal West Africa",
      terrain: "Lowland delta",
      culture: "Courtyard living",
      materials: "Earth, bamboo, timber"
    },
    formOptions: {
      regions: ["Coastal West Africa", "Andean valley", "Mediterranean basin", "Southeast Asian floodplain"],
      terrains: ["Lowland delta", "Rocky slope", "Urban infill", "Dry plateau"],
      cultures: ["Courtyard living", "Compact mountain villages", "Extended family compound", "Dense urban blocks"],
      materials: ["Earth, bamboo, timber", "Stone, lime, wood", "Laterite, earth, recycled steel", "Rammed earth, palm fiber, lime"]
    },
    mapPoints: ["Tropical humid", "Arid plateau", "Mountain cold", "Coastal wind"],
    houseModels: [
      {
        name: "Raised Ventilated Courtyard House",
        climate: "Tropical humid",
        tags: ["Tropical climate", "Coastal environment", "Urban/rural context"],
        materials: ["Bamboo", "Timber", "Compressed earth"],
        score: 92,
        durability: "45y",
        complexity: "Medium",
        energy: "A",
        visual: "visual-tropical",
        description: "Elevated floor, shaded veranda and cross-ventilated rooms organized around a social courtyard."
      },
      {
        name: "Rammed Earth Thermal Mass Dwelling",
        climate: "Arid climate",
        tags: ["Arid climate", "Urban/rural context"],
        materials: ["Rammed earth", "Lime", "Stone"],
        score: 88,
        durability: "70y",
        complexity: "Low",
        energy: "A-",
        visual: "visual-arid",
        description: "Thick earth walls, compact plan and protected openings stabilize daily temperature swings."
      },
      {
        name: "Alpine Timber-Stone Cluster",
        climate: "Mountain environment",
        tags: ["Mountain environment", "Temperate climate"],
        materials: ["Stone", "Wood", "Lime plaster"],
        score: 84,
        durability: "80y",
        complexity: "High",
        energy: "B+",
        visual: "visual-mountain",
        description: "Steep roof, compact envelope and local stone plinth resist snow load and retain winter warmth."
      },
      {
        name: "Coastal Wind-Buffer Row House",
        climate: "Coastal windy",
        tags: ["Coastal environment", "Temperate climate", "Urban/rural context"],
        materials: ["Recycled steel", "Timber", "Lime"],
        score: 81,
        durability: "55y",
        complexity: "Medium",
        energy: "B+",
        visual: "visual-coastal",
        description: "Aerodynamic roofline, screened patios and corrosion-conscious detailing for salt-rich air."
      },
      {
        name: "Urban Low-Carbon Infill Module",
        climate: "Temperate climate",
        tags: ["Temperate climate", "Urban/rural context"],
        materials: ["CLT", "Recycled brick", "Green roof"],
        score: 86,
        durability: "60y",
        complexity: "Medium",
        energy: "A",
        visual: "visual-urban",
        description: "Compact modular housing using prefabricated timber, shared water systems and planted roofs."
      },
      {
        name: "Laterite Courtyard Compound",
        climate: "Tropical dry",
        tags: ["Tropical climate", "Arid climate", "Urban/rural context"],
        materials: ["Laterite", "Palm fiber", "Earth plaster"],
        score: 89,
        durability: "50y",
        complexity: "Low",
        energy: "A-",
        visual: "visual-laterite",
        description: "Load-bearing laterite walls and shaded outdoor rooms support family compounds in hot climates."
      }
    ],
    materials: [
      {
        name: "Earth",
        category: "Geomaterial",
        impact: "Very low",
        advantages: ["High thermal inertia", "Widely available", "Repairable with local skills"],
        weaknesses: ["Needs moisture protection", "Quality varies by soil mix"],
        thermal: "Excellent heat storage and humidity regulation when protected from driving rain.",
        structural: "Strong in compression; best with stabilized mixes, plinths and careful detailing.",
        uses: "Rammed earth walls, compressed blocks, plasters, floors and thermal mass cores.",
        scores: { thermal: 92, structural: 68, carbon: 96 }
      },
      {
        name: "Bamboo",
        category: "Bio-based structure",
        impact: "Low",
        advantages: ["Fast renewable growth", "High tensile strength", "Light and easy to transport"],
        weaknesses: ["Requires treatment", "Connection detailing is critical"],
        thermal: "Low thermal mass but excellent for shaded lightweight envelopes and ventilated assemblies.",
        structural: "Strong in tension and bending; requires dry detailing and protected joints.",
        uses: "Frames, screens, roof trusses, shading systems and raised floor structures.",
        scores: { thermal: 62, structural: 78, carbon: 90 }
      },
      {
        name: "Laterite",
        category: "Regional stone/soil",
        impact: "Low",
        advantages: ["Local identity", "Good compressive capacity", "Durable when well cured"],
        weaknesses: ["Extraction scars landscapes", "Porosity needs water management"],
        thermal: "Good thermal lag in thick masonry walls for hot day and cooler night cycles.",
        structural: "Effective for load-bearing walls with lime or stabilized earth mortars.",
        uses: "Blocks, plinths, courtyard walls, landscape retaining elements and facades.",
        scores: { thermal: 80, structural: 74, carbon: 84 }
      },
      {
        name: "Stone",
        category: "Mineral structure",
        impact: "Medium",
        advantages: ["Very durable", "Excellent weathering", "High thermal mass"],
        weaknesses: ["Heavy logistics", "Can be labor-intensive"],
        thermal: "Strong thermal mass suited to climates with temperature variation.",
        structural: "Excellent compression and longevity; seismic detailing requires reinforcement strategy.",
        uses: "Foundations, walls, retaining systems, floors and mountain or coastal envelopes.",
        scores: { thermal: 86, structural: 91, carbon: 64 }
      },
      {
        name: "Wood",
        category: "Bio-based structure",
        impact: "Low",
        advantages: ["Renewable when certified", "Prefabrication friendly", "Warm interior quality"],
        weaknesses: ["Fire and moisture detailing required", "Supply chain must be verified"],
        thermal: "Moderate insulation value and low embodied energy when sourced responsibly.",
        structural: "Excellent strength-to-weight ratio in frames, panels and hybrid structures.",
        uses: "Frames, CLT panels, roof systems, facades, interiors and modular construction.",
        scores: { thermal: 72, structural: 84, carbon: 88 }
      },
      {
        name: "Lime",
        category: "Binder and finish",
        impact: "Medium-low",
        advantages: ["Vapor permeable", "Compatible with heritage materials", "Self-healing microcracks"],
        weaknesses: ["Slow curing", "Needs skilled application"],
        thermal: "Improves hygrothermal behavior and protects breathable wall assemblies.",
        structural: "Useful in mortars and plasters; lower strength than cement but more flexible.",
        uses: "Mortars, renders, plasters, limewash and stabilized earth mixes.",
        scores: { thermal: 70, structural: 58, carbon: 72 }
      },
      {
        name: "Recycled materials",
        category: "Circular construction",
        impact: "Variable low",
        advantages: ["Reduces waste", "Can lower embodied carbon", "Supports local circular economies"],
        weaknesses: ["Certification can be complex", "Quality and dimensions vary"],
        thermal: "Performance depends on source material and assembly design.",
        structural: "Best with testing, grading and clear responsibility for reuse conditions.",
        uses: "Reused brick, recycled steel, insulation, paving, interior panels and modular components.",
        scores: { thermal: 66, structural: 76, carbon: 82 }
      }
    ],
    recommendations: {
      tropical: {
        model: "Raised ventilated courtyard house",
        score: 91,
        ai: "Prioritize deep shade, lifted floors, ventilated roof voids and washable earthen surfaces. Use bamboo screens and timber frames where supply chains can provide treatment and replacement parts.",
        blocks: [
          { title: "Suitable house models", value: "Courtyard compound, raised veranda house, porous row house" },
          { title: "Construction systems", value: "Bamboo/timber frame with compressed earth infill" },
          { title: "Roof types", value: "Oversized pitched roof with ventilated attic and rain chain" },
          { title: "Ventilation strategies", value: "Cross-flow rooms, stack vents and shaded external corridors" },
          { title: "Thermal comfort", value: "High roof, breathable envelope, ceiling fans and night purge" },
          { title: "Water management", value: "Rainwater harvesting, raised plinth and bioswales" }
        ]
      },
      arid: {
        model: "Rammed earth thermal mass dwelling",
        score: 88,
        ai: "Use compact planning, thick earth walls and protected courtyards. Openings should be recessed and oriented for controlled night ventilation rather than daytime heat gain.",
        blocks: [
          { title: "Suitable house models", value: "Rammed earth courtyard house, windcatcher dwelling" },
          { title: "Construction systems", value: "Stabilized earth walls with lime plaster and stone plinth" },
          { title: "Roof types", value: "Flat insulated roof with shaded service terrace" },
          { title: "Ventilation strategies", value: "Night purge, windcatchers and compact shaded openings" },
          { title: "Thermal comfort", value: "Thermal inertia, bright exterior surfaces and evaporative patios" },
          { title: "Water management", value: "Cisterns, greywater gardens and low-loss distribution" }
        ]
      },
      mountain: {
        model: "Alpine timber-stone cluster",
        score: 84,
        ai: "Reduce exposed envelope area, use stone for base durability and timber for lightweight upper levels. Protect entries from snow drift and orient living spaces toward winter sun.",
        blocks: [
          { title: "Suitable house models", value: "Compact cluster, stone plinth chalet, terraced slope house" },
          { title: "Construction systems", value: "Stone base, timber frame, lime render and insulated roof" },
          { title: "Roof types", value: "Steep snow-shedding roof with deep eaves" },
          { title: "Ventilation strategies", value: "Controlled heat recovery and solar chimney in shoulder seasons" },
          { title: "Thermal comfort", value: "Compact massing, airtight envelope and solar gain" },
          { title: "Water management", value: "Snowmelt capture, erosion control and terraced drainage" }
        ]
      }
    },
    constructionMethods: [
      { title: "Passive cooling", icon: "passiveCooling", principle: "Limits heat gain before mechanical systems are required.", application: "Deep shade, cool roofs, courtyards and night ventilation.", score: 88 },
      { title: "Natural ventilation", icon: "naturalVentilation", principle: "Moves air through pressure differences and stack effects.", application: "Opposing openings, roof vents, shaded breezeways and porous facades.", score: 91 },
      { title: "Rainwater harvesting", icon: "rainwater", principle: "Turns roof area into a local water infrastructure.", application: "Cistern sizing, first-flush filters, overflow gardens and reuse loops.", score: 82 },
      { title: "Solar orientation", icon: "solar", principle: "Aligns form and openings with seasonal solar exposure.", application: "Winter gain, summer shade and service zones on harsh exposures.", score: 85 },
      { title: "Thermal inertia", icon: "inertia", principle: "Uses mass to delay and flatten temperature peaks.", application: "Rammed earth, stone floors, shaded masonry and night purge cycles.", score: 86 },
      { title: "Green roofs", icon: "greenRoofs", principle: "Adds evapotranspiration, insulation and habitat.", application: "Lightweight substrate, native plants and monitored water retention.", score: 74 },
      { title: "Modular construction", icon: "modular", principle: "Reduces waste and improves quality control.", application: "Timber modules, repeatable wet cores and reversible connections.", score: 79 },
      { title: "Low-carbon construction", icon: "lowCarbon", principle: "Cuts embodied emissions across materials and logistics.", application: "Local materials, reused components and cement reduction strategies.", score: 90 }
    ],
    dashboardProjects: [
      { name: "Delta School Housing Cluster", context: "Humid coastal site, raised bamboo-earth hybrid system", carbon: "-38%", comfort: "91%", water: "72%" },
      { name: "Sahel Courtyard Prototype", context: "Dry plateau settlement using rammed earth and lime", carbon: "-44%", comfort: "86%", water: "64%" },
      { name: "Andean Terraced Homes", context: "Mountain slope with stone plinths and compact timber envelopes", carbon: "-29%", comfort: "88%", water: "79%" }
    ],
    caseStudies: [
      { place: "Mekong floodplain dwellings", climate: "Humid floodplain", lesson: "Raised structures, shaded decks and lightweight repairable frames support seasonal water dynamics.", visual: "case-mekong" },
      { place: "Atlas earth villages", climate: "Arid mountain", lesson: "Massive earthen walls, compact streets and collective maintenance produce thermal stability.", visual: "case-atlas" },
      { place: "Nordic timber infill", climate: "Cold urban", lesson: "Prefabricated wood systems lower carbon while compact envelopes conserve winter energy.", visual: "case-nordic" }
    ]
  }
};
