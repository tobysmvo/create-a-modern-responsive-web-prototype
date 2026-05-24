// ============================================================
// PATCH main.jsx — Export PDF
// ============================================================
// Deux modifications seulement dans main.jsx :
//   1. Ajouter FileDown aux imports lucide-react (ligne ~7)
//   2. Ajouter l'import exportAnalysisPDF (après les autres imports)
//   3. Remplacer EnvironmentalAnalysisPage par la version ci-dessous
// ============================================================


// ── MODIFICATION 1 ───────────────────────────────────────
// Dans la liste des imports lucide-react, ajouter FileDown :
//
//   import {
//     ...
//     FileDown,   // ← AJOUTER
//     ...
//   } from "lucide-react";


// ── MODIFICATION 2 ───────────────────────────────────────
// Après la ligne : import { generateDynamicAnalysis } from "./analysisEngine";
// Ajouter :
//
//   import { exportAnalysisPDF } from "./utils/exportPDF";


// ── MODIFICATION 3 ───────────────────────────────────────
// Remplacer toute la fonction EnvironmentalAnalysisPage
// par la version ci-dessous (le seul changement visible est
// le bouton "Exporter PDF" dans le panneau résultats).

function EnvironmentalAnalysisPage({ copy, data, language }) {
  const [form, setForm] = useState({
    ...data.defaultForm,
    method: data.constructionMethods[0]?.title || "",
  });

  const analysis = useMemo(
    () => generateDynamicAnalysis(form, data, copy === fr ? "fr" : "en"),
    [form, data, copy]
  );

  // Label du bouton selon la langue
  const exportLabel = language === "fr" ? "Exporter PDF" : "Export PDF";

  return (
    <PageShell
      icon={ScanSearch}
      eyebrow={copy.analysis.eyebrow}
      title={copy.analysis.title}
      intro={copy.analysis.intro}
    >
      <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
        {/* ── Formulaire ── */}
        <div className="rounded bg-white p-5 shadow-line">
          <h3 className="font-display text-2xl font-semibold">{copy.analysis.siteInputs}</h3>
          <div className="mt-5 grid gap-4">
            <Field label={copy.analysis.fields.climate}   value={form.climate}   options={data.climateOptions}                              onChange={(climate)   => setForm({ ...form, climate })}   />
            <Field label={copy.analysis.fields.region}    value={form.region}    options={data.formOptions.regions}                          onChange={(region)    => setForm({ ...form, region })}    />
            <Field label={copy.analysis.fields.terrain}   value={form.terrain}   options={data.formOptions.terrains}                         onChange={(terrain)   => setForm({ ...form, terrain })}   />
            <Field label={copy.analysis.fields.culture}   value={form.culture}   options={data.formOptions.cultures}                         onChange={(culture)   => setForm({ ...form, culture })}   />
            <Field label={copy.analysis.fields.materials} value={form.materials} options={data.formOptions.materials}                        onChange={(materials) => setForm({ ...form, materials })} />
            <Field label={copy.analysis.fields.method}    value={form.method}    options={data.constructionMethods.map((m) => m.title)}      onChange={(method)    => setForm({ ...form, method })}    />
          </div>
        </div>

        {/* ── Résultats ── */}
        <div className="rounded bg-basalt p-5 text-chalk shadow-panel">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sand">
                {copy.analysis.generatedBrief}
              </p>
              <h3 className="mt-2 font-display text-3xl font-semibold">{analysis.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-sand/80">{analysis.subtitle}</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <ScoreRing score={analysis.score} label={copy.analysis.adaptation} />

              {/* ── Bouton Export PDF ── */}
              <button
                onClick={() => exportAnalysisPDF(analysis, form, language)}
                className="flex items-center gap-2 rounded border border-sand/30 bg-sand/10 px-4 py-2 text-sm font-semibold text-sand transition hover:bg-sand/20 hover:border-sand/60"
              >
                <FileDown size={16} />
                {exportLabel}
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {analysis.blocks.map((block) => (
              <div key={block.title} className="rounded border border-chalk/12 bg-chalk/7 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-chalk/50">{block.title}</p>
                <p className="mt-2 font-medium leading-6">{block.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded bg-sand/12 p-4">
            <div className="flex items-center gap-2 text-sand">
              <Sparkles size={18} />
              <span className="text-sm font-semibold">{copy.analysis.aiLabel}</span>
            </div>
            <p className="mt-2 text-sm leading-6 text-chalk/78">{analysis.detail}</p>
          </div>
        </div>
      </div>

      {/* ── Observations / Matériaux ── */}
      <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded bg-white p-5 shadow-line">
          <h3 className="font-display text-2xl font-semibold">{copy.analysis.insightsTitle}</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <InfoBlock title={copy.analysis.advantagesTitle}   items={analysis.advantages}   positive />
            <InfoBlock title={copy.analysis.limitsTitle}        items={analysis.limits}                />
            <InfoBlock title={copy.analysis.observationsTitle}  items={analysis.observations}          />
          </div>
        </div>

        <div className="rounded bg-white p-5 shadow-line">
          <h3 className="font-display text-2xl font-semibold">{copy.analysis.materialComparisonTitle}</h3>
          <p className="mt-3 text-sm leading-6 text-canopy/72">{copy.analysis.materialComparisonText}</p>
          <div className="mt-6 grid gap-4">
            {analysis.materialInsights.map((material) => (
              <div key={material.title} className="rounded border border-canopy/10 bg-chalk/10 p-4">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="font-semibold">{material.title}</h4>
                  <span className="rounded-full bg-sand/15 px-3 py-1 text-xs font-semibold text-sand">
                    {material.rating}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-canopy/75">{material.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ClimateMap copy={copy} data={data} language={language} />
    </PageShell>
  );
}