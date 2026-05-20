import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Building2,
  Check,
  ChevronDown,
  Compass,
  Database,
  Factory,
  Filter,
  FlaskConical,
  Gauge,
  Globe2,
  Layers3,
  Leaf,
  LineChart,
  Mail,
  Map,
  MapPin,
  Phone,
  Recycle,
  Ruler,
  ScanSearch,
  Search,
  SlidersHorizontal,
  Sparkles,
  Sun,
  ThermometerSun,
  TreePine,
  UserRound,
  Wind
} from "lucide-react";
import { en } from "./locales/en";
import { fr } from "./locales/fr";
import { createPrototypeData } from "./prototypeData";
import "./styles.css";

const locales = { fr, en };

function App() {
  // Beginner-friendly i18n: one state value chooses one plain JavaScript text file.
  const [language, setLanguage] = useState("fr");
  const [page, setPage] = useState("home");
  const copy = locales[language];
  const data = useMemo(() => createPrototypeData(copy), [copy]);
  const Page = {
    home: HomePage,
    analysis: EnvironmentalAnalysisPage,
    library: HousingLibraryPage,
    materials: MaterialsDatabasePage,
    methods: ConstructionMethodsPage,
    dashboard: DashboardPage
  }[page];

  return (
    <div className="min-h-screen bg-chalk text-basalt">
      <TopNav copy={copy} language={language} setLanguage={setLanguage} page={page} setPage={setPage} />
      <main>
        <Page key={language} copy={copy} data={data} setPage={setPage} />
      </main>
      <Footer copy={copy} setPage={setPage} />
    </div>
  );
}

function TopNav({ copy, language, setLanguage, page, setPage }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-canopy/10 bg-chalk/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <button onClick={() => setPage("home")} className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded bg-canopy text-chalk shadow-panel">
            <Layers3 size={21} />
          </span>
          <span className="text-left">
            <span className="block font-display text-lg font-semibold tracking-tight">{copy.brand.name}</span>
            <span className="block text-xs uppercase tracking-[0.22em] text-moss">{copy.brand.subtitle}</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {copy.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`rounded px-4 py-2 text-sm font-medium transition ${
                page === item.id ? "bg-canopy text-chalk" : "text-canopy/72 hover:bg-canopy/8 hover:text-canopy"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitch label={copy.actions.languageSwitch} language={language} setLanguage={setLanguage} />
          <button onClick={() => setPage("analysis")} className="icon-button" aria-label={copy.actions.openAnalysis}>
            <ScanSearch size={18} />
          </button>
          <button onClick={() => setPage("dashboard")} className="primary-button">
            {copy.actions.openWorkspace} <ArrowRight size={17} />
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitch label={copy.actions.languageSwitch} language={language} setLanguage={setLanguage} compact />
          <button className="icon-button" onClick={() => setOpen(!open)} aria-label={copy.actions.toggleMenu}>
            <ChevronDown className={open ? "rotate-180 transition" : "transition"} size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-canopy/10 bg-chalk px-4 py-3 lg:hidden">
          <div className="grid gap-2">
            {copy.nav.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setPage(item.id);
                  setOpen(false);
                }}
                className={`rounded px-4 py-3 text-left text-sm font-medium ${
                  page === item.id ? "bg-canopy text-chalk" : "bg-white/55 text-canopy"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function LanguageSwitch({ label, language, setLanguage, compact = false }) {
  return (
    <div className={`language-switch ${compact ? "language-switch-compact" : ""}`} aria-label={label}>
      {["fr", "en"].map((code) => (
        <button
          key={code}
          onClick={() => setLanguage(code)}
          className={language === code ? "language-active" : ""}
          aria-pressed={language === code}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function HomePage({ copy, data, setPage }) {
  return (
    <>
      <section className="relative overflow-hidden bg-basalt text-chalk">
        <div className="absolute inset-0 architectural-grid opacity-40" />
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-chalk/10 to-transparent" />
        <div className="mx-auto grid min-h-[86vh] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="animate-rise">
            <Badge icon={Leaf} label={copy.home.badge} dark />
            <h1 className="mt-7 max-w-4xl font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              {copy.home.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-chalk/74">{copy.home.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => setPage("analysis")} className="light-button">
                {copy.home.start} <Compass size={18} />
              </button>
              <button onClick={() => setPage("library")} className="ghost-button">
                {copy.home.browse} <BookOpen size={18} />
              </button>
            </div>
          </div>
          <HeroBuilding copy={copy} />
        </div>
      </section>

      <SearchPanel copy={copy} setPage={setPage} />
      <MissionSection copy={copy} />
      <FeaturedModels copy={copy} data={data} setPage={setPage} />
      <IntelligenceSections copy={copy} />
      <CaseStudies copy={copy} data={data} />
    </>
  );
}

function HeroBuilding({ copy }) {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute inset-4 rotate-2 rounded border border-sand/20" />
      <div className="relative overflow-hidden rounded bg-chalk p-4 text-basalt shadow-panel">
        <div className="grid gap-3 sm:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded bg-sand/55 p-4">
            <div className="h-36 rounded roof-sketch" />
            <div className="mt-4 space-y-2">
              <div className="h-2 w-3/4 rounded bg-canopy/25" />
              <div className="h-2 w-1/2 rounded bg-canopy/15" />
            </div>
          </div>
          <div className="rounded bg-white p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">{copy.home.heroDiagram}</span>
              <Wind size={18} className="text-lagoon" />
            </div>
            <div className="mt-6 grid h-52 grid-cols-6 items-end gap-2">
              {[38, 82, 58, 92, 68, 48].map((height, index) => (
                <div
                  key={height}
                  className="rounded-t bg-gradient-to-t from-canopy to-moss"
                  style={{ height: `${height}%`, animationDelay: `${index * 0.08}s` }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {copy.home.metrics.map((metric) => (
            <Metric key={metric.label} label={metric.label} value={metric.value} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SearchPanel({ copy, setPage }) {
  return (
    <section className="relative z-10 -mt-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded bg-white p-4 shadow-panel ring-1 ring-canopy/10">
        <div className="grid gap-3 lg:grid-cols-[1fr_180px_180px_auto]">
          <label className="flex items-center gap-3 rounded bg-chalk px-4 py-3">
            <Search size={19} className="text-moss" />
            <input className="w-full bg-transparent text-sm outline-none placeholder:text-canopy/45" placeholder={copy.home.searchPlaceholder} />
          </label>
          <SelectLike icon={ThermometerSun} label={copy.home.searchClimateLabel} value={copy.home.searchClimateValue} />
          <SelectLike icon={Map} label={copy.home.searchRegionLabel} value={copy.home.searchRegionValue} />
          <button onClick={() => setPage("analysis")} className="primary-button justify-center">
            {copy.actions.analyze} <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}

function MissionSection({ copy }) {
  const icons = [Factory, TreePine, LineChart];
  return (
    <section className="section">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <div>
          <Badge icon={Globe2} label={copy.home.missionBadge} />
          <h2 className="section-title">{copy.home.missionTitle}</h2>
        </div>
        <p className="text-lg leading-8 text-canopy/72">{copy.home.missionText}</p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {copy.home.featureCards.map((card, index) => (
          <FeatureCard key={card.title} icon={icons[index]} title={card.title} text={card.text} />
        ))}
      </div>
    </section>
  );
}

function FeaturedModels({ copy, data, setPage }) {
  return (
    <section className="section pt-4">
      <SectionHeader
        eyebrow={copy.home.featuredEyebrow}
        title={copy.home.featuredTitle}
        action={() => setPage("library")}
        actionLabel={copy.actions.viewLibrary}
      />
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {data.houseModels.slice(0, 3).map((model) => (
          <ModelCard key={model.name} model={model} copy={copy} />
        ))}
      </div>
    </section>
  );
}

function IntelligenceSections({ copy }) {
  const icons = [Database, Sun, FlaskConical];
  return (
    <section className="bg-canopy py-20 text-chalk">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {copy.home.intelligence.map((item, index) => {
            const Icon = icons[index];
            return (
              <div key={item.title} className="rounded border border-chalk/12 bg-chalk/7 p-6">
                <Icon className="text-sand" size={28} />
                <h3 className="mt-6 font-display text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-chalk/72">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CaseStudies({ copy, data }) {
  return (
    <section className="section">
      <SectionHeader eyebrow={copy.home.casesEyebrow} title={copy.home.casesTitle} />
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {data.caseStudies.map((study) => (
          <div key={study.place} className="overflow-hidden rounded bg-white shadow-line">
            <div className={`h-44 ${study.visual}`} />
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moss">{study.climate}</p>
              <h3 className="mt-2 font-display text-xl font-semibold">{study.place}</h3>
              <p className="mt-3 text-sm leading-6 text-canopy/70">{study.lesson}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EnvironmentalAnalysisPage({ copy, data }) {
  const [form, setForm] = useState(data.defaultForm);
  const recommendation = useMemo(() => {
    const climate = form.climate.toLowerCase();
    const key = climate.includes("arid") || climate.includes("aride") ? "arid" : climate.includes("mountain") || climate.includes("montagne") ? "mountain" : "tropical";
    return data.recommendations[key];
  }, [data.recommendations, form.climate]);

  return (
    <PageShell icon={ScanSearch} eyebrow={copy.analysis.eyebrow} title={copy.analysis.title} intro={copy.analysis.intro}>
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded bg-white p-5 shadow-line">
          <h3 className="font-display text-2xl font-semibold">{copy.analysis.siteInputs}</h3>
          <div className="mt-5 grid gap-4">
            <Field label={copy.analysis.fields.climate} value={form.climate} options={data.climateOptions} onChange={(climate) => setForm({ ...form, climate })} />
            <Field label={copy.analysis.fields.region} value={form.region} options={data.formOptions.regions} onChange={(region) => setForm({ ...form, region })} />
            <Field label={copy.analysis.fields.terrain} value={form.terrain} options={data.formOptions.terrains} onChange={(terrain) => setForm({ ...form, terrain })} />
            <Field label={copy.analysis.fields.culture} value={form.culture} options={data.formOptions.cultures} onChange={(culture) => setForm({ ...form, culture })} />
            <Field label={copy.analysis.fields.materials} value={form.materials} options={data.formOptions.materials} onChange={(materials) => setForm({ ...form, materials })} />
          </div>
        </div>

        <div className="rounded bg-basalt p-5 text-chalk shadow-panel">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sand">{copy.analysis.generatedBrief}</p>
              <h3 className="mt-2 font-display text-3xl font-semibold">{recommendation.model}</h3>
            </div>
            <ScoreRing score={recommendation.score} label={copy.analysis.adaptation} />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {recommendation.blocks.map(({ title, value, icon: Icon }) => (
              <div key={title} className="rounded border border-chalk/12 bg-chalk/7 p-4">
                <Icon size={20} className="text-sand" />
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-chalk/50">{title}</p>
                <p className="mt-1 font-medium leading-6">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded bg-sand/12 p-4">
            <div className="flex items-center gap-2 text-sand">
              <Sparkles size={18} />
              <span className="text-sm font-semibold">{copy.analysis.aiLabel}</span>
            </div>
            <p className="mt-2 text-sm leading-6 text-chalk/78">{recommendation.ai}</p>
          </div>
        </div>
      </div>
      <ClimateMap copy={copy} points={data.mapPoints} />
    </PageShell>
  );
}

function HousingLibraryPage({ copy, data }) {
  const [filter, setFilter] = useState(copy.library.filters[0]);
  const models = filter === copy.library.filters[0] ? data.houseModels : data.houseModels.filter((model) => model.tags.includes(filter));
  return (
    <PageShell icon={Building2} eyebrow={copy.library.eyebrow} title={copy.library.title} intro={copy.library.intro}>
      <div className="flex flex-wrap gap-2">
        {copy.library.filters.map((item) => (
          <button key={item} onClick={() => setFilter(item)} className={`filter-chip ${filter === item ? "filter-chip-active" : ""}`}>
            <Filter size={14} /> {item}
          </button>
        ))}
      </div>
      <div className="mt-7 grid gap-5 lg:grid-cols-3">
        {models.map((model) => (
          <ModelCard key={model.name} model={model} copy={copy} detailed />
        ))}
      </div>
    </PageShell>
  );
}

function MaterialsDatabasePage({ copy, data }) {
  const [selected, setSelected] = useState(data.materials[0]);
  const [compare, setCompare] = useState([data.materials[0].name, data.materials[1].name]);
  const comparison = data.materials.filter((item) => compare.includes(item.name));

  return (
    <PageShell icon={Database} eyebrow={copy.materials.eyebrow} title={copy.materials.title} intro={copy.materials.intro}>
      <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="rounded bg-white p-4 shadow-line">
          <div className="grid gap-2">
            {data.materials.map((material) => (
              <button
                key={material.name}
                onClick={() => setSelected(material)}
                className={`flex items-center justify-between rounded px-4 py-3 text-left transition ${
                  selected.name === material.name ? "bg-canopy text-chalk" : "bg-chalk text-canopy hover:bg-sand/35"
                }`}
              >
                <span className="font-medium">{material.name}</span>
                <span className="text-xs opacity-70">{material.impact}</span>
              </button>
            ))}
          </div>
        </div>
        <MaterialProfile copy={copy} material={selected} />
      </div>
      <div className="mt-8 rounded bg-white p-5 shadow-line">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moss">{copy.materials.labels.comparisonEyebrow}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold">{copy.materials.labels.comparisonTitle}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.materials.slice(0, 5).map((material) => (
              <button
                key={material.name}
                onClick={() => setCompare((current) => (current.includes(material.name) ? current.filter((name) => name !== material.name) : [...current.slice(-1), material.name]))}
                className={`filter-chip ${compare.includes(material.name) ? "filter-chip-active" : ""}`}
              >
                {material.name}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {comparison.map((material) => (
            <div key={material.name} className="rounded bg-chalk p-4">
              <h4 className="font-display text-xl font-semibold">{material.name}</h4>
              <Bar label={copy.materials.labels.thermal} value={material.scores.thermal} />
              <Bar label={copy.materials.labels.structural} value={material.scores.structural} />
              <Bar label={copy.materials.labels.lowCarbon} value={material.scores.carbon} />
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

function ConstructionMethodsPage({ copy, data }) {
  return (
    <PageShell icon={Ruler} eyebrow={copy.methods.eyebrow} title={copy.methods.title} intro={copy.methods.intro}>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {data.constructionMethods.map(({ title, icon: Icon, principle, application, score }) => (
          <div key={title} className="rounded bg-white p-5 shadow-line">
            <Icon className="text-moss" size={26} />
            <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-canopy/70">{principle}</p>
            <div className="mt-5 rounded bg-chalk p-3 text-sm text-canopy/75">{application}</div>
            <Bar label={copy.methods.resilience} value={score} />
          </div>
        ))}
      </div>
    </PageShell>
  );
}

function DashboardPage({ copy, data }) {
  return (
    <PageShell icon={Gauge} eyebrow={copy.dashboard.eyebrow} title={copy.dashboard.title} intro={copy.dashboard.intro}>
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded bg-white p-5 shadow-line">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-2xl font-semibold">{copy.dashboard.saved}</h3>
            <button className="icon-button" aria-label={copy.dashboard.projectFilters}>
              <SlidersHorizontal size={18} />
            </button>
          </div>
          <div className="mt-5 grid gap-3">
            {data.dashboardProjects.map((project) => (
              <div key={project.name} className="grid gap-4 rounded bg-chalk p-4 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="font-semibold">{project.name}</p>
                  <p className="mt-1 text-sm text-canopy/65">{project.context}</p>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <MiniStat label={copy.dashboard.stats[0]} value={project.carbon} />
                  <MiniStat label={copy.dashboard.stats[1]} value={project.comfort} />
                  <MiniStat label={copy.dashboard.stats[2]} value={project.water} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded bg-basalt p-5 text-chalk shadow-panel">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand">{copy.dashboard.indicators}</p>
          <div className="mt-5 grid grid-cols-2 gap-4">
            {[88, 74, 91, 67].map((score, index) => (
              <ScoreRing key={copy.dashboard.rings[index]} score={score} label={copy.dashboard.rings[index]} />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {[Recycle, Activity, Sparkles].map((Icon, index) => (
          <DashboardTool key={copy.dashboard.tools[index].title} icon={Icon} title={copy.dashboard.tools[index].title} text={copy.dashboard.tools[index].text} />
        ))}
      </div>
    </PageShell>
  );
}

function ClimateMap({ copy, points }) {
  const positions = ["left-[18%] top-[58%]", "left-[47%] top-[46%]", "left-[66%] top-[34%]", "left-[78%] top-[62%]"];
  const colors = ["bg-lagoon", "bg-copper", "bg-moss", "bg-sand"];
  return (
    <div className="mt-8 rounded bg-white p-5 shadow-line">
      <div className="flex items-center gap-3">
        <Map className="text-moss" />
        <h3 className="font-display text-2xl font-semibold">{copy.analysis.climateMap}</h3>
      </div>
      <div className="relative mt-5 h-80 overflow-hidden rounded bg-map">
        <div className="absolute inset-0 map-lines" />
        {points.map((label, index) => (
          <div key={label} className={`absolute ${positions[index]}`}>
            <div className={`h-4 w-4 rounded-full ${colors[index]} ring-4 ring-white/80`} />
            <span className="mt-2 block rounded bg-white/90 px-3 py-1 text-xs font-semibold text-canopy shadow-line">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MaterialProfile({ copy, material }) {
  return (
    <div className="rounded bg-white p-5 shadow-line">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moss">{material.category}</p>
          <h3 className="mt-2 font-display text-3xl font-semibold">{material.name}</h3>
        </div>
        <span className="rounded bg-moss/10 px-3 py-2 text-sm font-semibold text-moss">
          {material.impact} {copy.materials.impactSuffix}
        </span>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <InfoBlock title={copy.materials.labels.advantages} items={material.advantages} positive />
        <InfoBlock title={copy.materials.labels.weaknesses} items={material.weaknesses} />
        <InfoBlock title={copy.materials.labels.thermal} items={[material.thermal]} />
        <InfoBlock title={copy.materials.labels.structural} items={[material.structural]} />
      </div>
      <div className="mt-5 rounded bg-chalk p-4">
        <p className="text-sm font-semibold text-canopy">{copy.materials.labels.uses}</p>
        <p className="mt-2 text-sm leading-6 text-canopy/70">{material.uses}</p>
      </div>
    </div>
  );
}

function ModelCard({ model, copy, detailed = false }) {
  return (
    <article className="group overflow-hidden rounded bg-white shadow-line transition hover:-translate-y-1 hover:shadow-panel">
      <div className={`relative h-52 ${model.visual}`}>
        <div className="absolute left-4 top-4 rounded bg-white/90 px-3 py-1 text-xs font-semibold text-canopy">{model.climate}</div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-semibold">{model.name}</h3>
          <ScorePill score={model.score} />
        </div>
        <p className="mt-3 text-sm leading-6 text-canopy/70">{model.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {model.materials.map((material) => (
            <span key={material} className="rounded bg-chalk px-3 py-1 text-xs font-medium text-canopy/72">
              {material}
            </span>
          ))}
        </div>
        {detailed && (
          <div className="mt-5 grid grid-cols-3 gap-3">
            <MiniStat label={copy.library.stats.durability} value={model.durability} />
            <MiniStat label={copy.library.stats.complexity} value={model.complexity} />
            <MiniStat label={copy.library.stats.efficiency} value={model.energy} />
          </div>
        )}
      </div>
    </article>
  );
}

function PageShell({ icon: Icon, eyebrow, title, intro, children }) {
  return (
    <section className="section">
      <div className="mb-9 max-w-4xl">
        <Badge icon={Icon} label={eyebrow} />
        <h1 className="section-title">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-canopy/72">{intro}</p>
      </div>
      {children}
    </section>
  );
}

function SectionHeader({ eyebrow, title, action, actionLabel }) {
  return (
    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-moss">{eyebrow}</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-basalt">{title}</h2>
      </div>
      {action && (
        <button onClick={action} className="secondary-button">
          {actionLabel} <ArrowRight size={17} />
        </button>
      )}
    </div>
  );
}

function FeatureCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded bg-white p-6 shadow-line">
      <Icon className="text-moss" size={28} />
      <h3 className="mt-6 font-display text-2xl font-semibold">{title}</h3>
      <p className="mt-3 leading-7 text-canopy/70">{text}</p>
    </div>
  );
}

function Field({ label, value, options, onChange }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-canopy/70">{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)} className="mt-2 w-full rounded border border-canopy/10 bg-chalk px-4 py-3 text-sm font-medium outline-none">
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function InfoBlock({ title, items, positive = false }) {
  return (
    <div className="rounded bg-chalk p-4">
      <p className="text-sm font-semibold">{title}</p>
      <div className="mt-3 space-y-2">
        {items.map((item) => (
          <p key={item} className="flex gap-2 text-sm leading-6 text-canopy/70">
            {positive ? <Check size={16} className="mt-1 shrink-0 text-moss" /> : <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />}
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

function DashboardTool({ icon: Icon, title, text }) {
  return (
    <div className="rounded bg-white p-5 shadow-line">
      <Icon className="text-moss" size={25} />
      <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-canopy/70">{text}</p>
    </div>
  );
}

function SelectLike({ icon: Icon, label, value }) {
  return (
    <div className="rounded bg-chalk px-4 py-3">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-moss">
        <Icon size={15} /> {label}
      </div>
      <p className="mt-1 text-sm font-semibold text-canopy">{value}</p>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded bg-white p-4 shadow-line">
      <p className="text-xs uppercase tracking-[0.16em] text-canopy/50">{label}</p>
      <p className="mt-1 font-display text-2xl font-semibold text-canopy">{value}</p>
    </div>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded bg-white/70 px-3 py-2 shadow-line">
      <p className="text-[11px] uppercase tracking-[0.14em] text-canopy/45">{label}</p>
      <p className="mt-1 text-sm font-bold text-canopy">{value}</p>
    </div>
  );
}

function ScorePill({ score }) {
  return <span className="rounded bg-moss/10 px-3 py-1 text-sm font-bold text-moss">{score}</span>;
}

function ScoreRing({ score, label }) {
  return (
    <div className="grid place-items-center">
      <div className="grid h-28 w-28 place-items-center rounded-full" style={{ background: `conic-gradient(#d8c3a5 ${score * 3.6}deg, rgba(244,239,228,0.14) 0deg)` }}>
        <div className="grid h-20 w-20 place-items-center rounded-full bg-basalt">
          <span className="font-display text-2xl font-semibold">{score}</span>
        </div>
      </div>
      <p className="mt-2 text-center text-xs uppercase tracking-[0.16em] text-chalk/60">{label}</p>
    </div>
  );
}

function Bar({ label, value }) {
  return (
    <div className="mt-4">
      <div className="flex justify-between text-xs font-semibold uppercase tracking-[0.12em] text-canopy/55">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="mt-2 h-2 rounded bg-canopy/10">
        <div className="h-2 rounded bg-moss" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function Badge({ icon: Icon, label, dark = false }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] ${dark ? "bg-chalk/10 text-sand" : "bg-moss/10 text-moss"}`}>
      <Icon size={15} /> {label}
    </span>
  );
}

function Footer({ copy, setPage }) {
  return (
    <footer className="bg-basalt px-4 py-12 text-chalk sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded bg-sand text-basalt">
              <Layers3 size={20} />
            </span>
            <span className="font-display text-xl font-semibold">{copy.brand.name}</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-chalk/65">{copy.footer.text}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-sand">{copy.footer.resources}</p>
          <div className="mt-3 grid gap-2 text-sm text-chalk/65">
            {copy.footer.links.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-sand">{copy.footer.contact}</p>
          <p className="mt-3 text-sm leading-6 text-chalk/65">{copy.footer.contactText}</p>
          <div className="mt-4 grid gap-3 text-sm text-chalk/75">
            <ContactLine icon={UserRound} label={copy.footer.contactDetails.nameLabel} value={copy.footer.contactDetails.name} />
            <ContactLine icon={Mail} label={copy.footer.contactDetails.emailLabel} value={copy.footer.contactDetails.email} href={`mailto:${copy.footer.contactDetails.email}`} />
            <ContactLine icon={Phone} label={copy.footer.contactDetails.phoneLabel} value={copy.footer.contactDetails.phone} href="tel:+33605609687" />
            <ContactLine icon={MapPin} label={copy.footer.contactDetails.locationLabel} value={copy.footer.contactDetails.location} />
          </div>
          <button onClick={() => setPage("dashboard")} className="mt-5 text-left text-xs font-semibold uppercase tracking-[0.16em] text-sand transition hover:text-chalk">
            {copy.footer.workspaceLink}
          </button>
        </div>
      </div>
    </footer>
  );
}

function ContactLine({ icon: Icon, label, value, href }) {
  const content = (
    <>
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded bg-chalk/8 text-sand">
        <Icon size={16} />
      </span>
      <span className="min-w-0">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-chalk/40">{label}</span>
        <span className="mt-0.5 block break-words leading-6">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex items-start gap-3 rounded p-2 transition hover:bg-chalk/10 hover:text-chalk">
        {content}
      </a>
    );
  }

  return <div className="flex items-start gap-3 rounded p-2">{content}</div>;
}

createRoot(document.getElementById("root")).render(<App />);
