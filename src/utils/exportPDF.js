// ============================================================
// HomèVo — Utilitaire d'export PDF
// ============================================================
// Génère un brief professionnel A4 à partir des résultats
// de generateDynamicAnalysis() et des paramètres du formulaire.
//
// Dépendance : jsPDF  →  npm install jspdf
// Usage      : exportAnalysisPDF(analysis, form, language)
// ============================================================

import jsPDF from "jspdf";

// ── Palette HomèVo (RGB) ──────────────────────────────────
const C = {
  basalt:  [30,  30,  28],
  canopy:  [52,  78,  60],
  moss:    [89,  120, 85],
  sand:    [190, 155, 110],
  chalk:   [248, 244, 236],
  white:   [255, 255, 255],
  warm:    [245, 241, 232],
  border:  [220, 215, 205],
  dimText: [130, 130, 120],
  copper:  [180, 100, 60],
  blue:    [80,  100, 140],
};

const W      = 210;  // A4 largeur mm
const MARGIN = 14;
const CW     = W - MARGIN * 2; // largeur de contenu

// ── Helpers ───────────────────────────────────────────────

/** Applique la couleur de texte et la taille de police. */
function setFont(doc, size, style = "normal", color = C.basalt) {
  doc.setFontSize(size);
  doc.setFont("helvetica", style);
  doc.setTextColor(...color);
}

/** Dessine un rectangle plein. */
function fill(doc, x, y, w, h, color) {
  doc.setFillColor(...color);
  doc.rect(x, y, w, h, "F");
}

/** Dessine une ligne horizontale fine. */
function divider(doc, y, color = C.border) {
  doc.setDrawColor(...color);
  doc.setLineWidth(0.4);
  doc.line(MARGIN, y, W - MARGIN, y);
}

/** Écrit du texte avec retour à la ligne automatique et retourne la hauteur consommée. */
function writeText(doc, text, x, y, maxW, size = 9, style = "normal", color = C.basalt) {
  setFont(doc, size, style, color);
  const lines = doc.splitTextToSize(String(text ?? ""), maxW);
  doc.text(lines, x, y);
  return lines.length * (size * 0.36 + 1.4);
}

/** Dessine une barre de progression (valeur 0–100). */
function progressBar(doc, x, y, totalW, value, color = C.moss) {
  fill(doc, x, y, totalW, 2.5, C.border);
  fill(doc, x, y, Math.max(totalW * (Math.min(value, 100) / 100), 1), 2.5, color);
}

// ── Sections ─────────────────────────────────────────────

function drawHeader(doc, lang, dateStr) {
  fill(doc, 0, 0, W, 30, C.basalt);

  // Carré logo
  fill(doc, MARGIN, 7, 16, 16, C.sand);
  setFont(doc, 9, "bold", C.basalt);
  doc.text("HV", MARGIN + 4.8, 17);

  // Nom de marque
  setFont(doc, 16, "bold", C.white);
  doc.text("HomèVo", MARGIN + 21, 14);
  setFont(doc, 7, "normal", C.sand);
  doc.text(
    lang === "fr" ? "LABORATOIRE ÉCO-DESIGN" : "ECO-DESIGN LABORATORY",
    MARGIN + 21,
    20
  );

  // Date en haut à droite
  setFont(doc, 7.5, "normal", C.sand);
  doc.text(dateStr, W - MARGIN, 20, { align: "right" });
}

function drawTitleBlock(doc, analysis, lang, y) {
  // Eyebrow
  setFont(doc, 6.5, "bold", C.moss);
  doc.text(
    lang === "fr" ? "ANALYSE ENVIRONNEMENTALE" : "ENVIRONMENTAL ANALYSIS",
    MARGIN,
    y
  );
  y += 5;

  // Titre
  setFont(doc, 17, "bold", C.basalt);
  const titleLines = doc.splitTextToSize(analysis.title, CW - 38);
  doc.text(titleLines, MARGIN, y);
  y += titleLines.length * 7 + 2;

  // Sous-titre
  setFont(doc, 8.5, "normal", C.dimText);
  const subLines = doc.splitTextToSize(analysis.subtitle, CW - 38);
  doc.text(subLines, MARGIN, y);
  y += subLines.length * 5 + 4;

  return y;
}

function drawScoreCircle(doc, score, label, cx, cy) {
  // Anneau extérieur
  doc.setFillColor(...C.sand);
  doc.circle(cx, cy, 15, "F");
  // Disque intérieur
  doc.setFillColor(...C.basalt);
  doc.circle(cx, cy, 10.5, "F");
  // Score
  setFont(doc, 14, "bold", C.white);
  doc.text(String(score), cx, cy + 5, { align: "center" });
  // Label
  setFont(doc, 5.5, "bold", C.dimText);
  doc.text(label.toUpperCase(), cx, cy + 19, { align: "center" });
}

function drawParams(doc, form, lang, y) {
  const labels = lang === "fr"
    ? ["Climat", "Région", "Terrain", "Culture", "Matériaux", "Méthode"]
    : ["Climate", "Region", "Terrain", "Culture", "Materials", "Method"];
  const values = [form.climate, form.region, form.terrain, form.culture, form.materials, form.method];
  const colW = (CW - 6) / 3;

  labels.forEach((label, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const px = MARGIN + col * (colW + 3);
    const py = y + row * 13;

    fill(doc, px, py - 3, colW, 12, C.warm);
    setFont(doc, 6, "bold", C.dimText);
    doc.text(label.toUpperCase(), px + 3, py + 2);
    setFont(doc, 8, "normal", C.basalt);
    const valLines = doc.splitTextToSize(String(values[i] ?? ""), colW - 6);
    doc.text(valLines[0], px + 3, py + 8);
  });

  return y + Math.ceil(labels.length / 3) * 13 + 4;
}

function drawAnalysisBlocks(doc, blocks, y) {
  const blockW = (CW - 4) / 2;
  let rowStart = y;

  blocks.forEach((block, i) => {
    const col = i % 2;
    const bx = MARGIN + col * (blockW + 4);

    fill(doc, bx, rowStart - 2, blockW, 17, C.warm);
    setFont(doc, 6, "bold", C.dimText);
    doc.text((block.title ?? "").toUpperCase(), bx + 3, rowStart + 4);
    setFont(doc, 8, "normal", C.basalt);
    const valLines = doc.splitTextToSize(String(block.value ?? ""), blockW - 6);
    doc.text(valLines[0], bx + 3, rowStart + 10.5);

    if (col === 1) rowStart += 20;
  });

  if (blocks.length % 2 !== 0) rowStart += 20;
  return rowStart + 2;
}

function drawDetailBox(doc, detail, lang, y) {
  const boxH = 20;
  fill(doc, MARGIN, y, CW, boxH, [248, 240, 220]);

  // Bandeau gauche
  fill(doc, MARGIN, y, 3, boxH, C.sand);

  setFont(doc, 6.5, "bold", C.copper);
  doc.text(
    lang === "fr" ? "RECOMMANDATION IA — SYNTHÈSE CONTEXTUELLE" : "AI RECOMMENDATION — CONTEXTUAL BRIEF",
    MARGIN + 6,
    y + 5
  );
  setFont(doc, 7.5, "normal", C.basalt);
  const lines = doc.splitTextToSize(String(detail ?? ""), CW - 10);
  doc.text(lines.slice(0, 3), MARGIN + 6, y + 10.5);
  return y + boxH + 4;
}

function drawIndicators(doc, indicators, lang, y) {
  const labels = {
    thermal:    lang === "fr" ? "Thermique"     : "Thermal",
    carbon:     lang === "fr" ? "Carbone"       : "Carbon",
    resilience: lang === "fr" ? "Résilience"    : "Resilience",
    adaptation: lang === "fr" ? "Adaptation"    : "Adaptation",
    water:      lang === "fr" ? "Autonomie eau" : "Water autonomy",
  };

  const keys = Object.keys(labels);
  const indW = (CW - (keys.length - 1) * 3) / keys.length;

  keys.forEach((key, i) => {
    const ix = MARGIN + i * (indW + 3);
    const val = indicators[key] ?? 0;

    fill(doc, ix, y, indW, 24, C.warm);

    // Valeur numérique
    setFont(doc, 11, "bold", C.basalt);
    doc.text(String(val), ix + indW / 2, y + 9, { align: "center" });

    // Barre
    progressBar(doc, ix + 3, y + 12, indW - 6, val);

    // Label
    setFont(doc, 5.5, "normal", C.dimText);
    const lbl = doc.splitTextToSize(labels[key], indW - 4);
    doc.text(lbl[0], ix + indW / 2, y + 19, { align: "center" });
  });

  return y + 30;
}

function drawThreeColumns(doc, analysis, lang, y) {
  const colW = (CW - 8) / 3;
  const maxH = 52;

  const sections = [
    {
      title:  lang === "fr" ? "AVANTAGES TECHNIQUES" : "TECHNICAL ADVANTAGES",
      items:  analysis.advantages,
      color:  C.moss,
      bullet: "✓",
    },
    {
      title:  lang === "fr" ? "LIMITES À SURVEILLER" : "KEY RISKS",
      items:  analysis.limits,
      color:  C.copper,
      bullet: "•",
    },
    {
      title:  lang === "fr" ? "OBSERVATIONS" : "OBSERVATIONS",
      items:  analysis.observations,
      color:  C.blue,
      bullet: "→",
    },
  ];

  sections.forEach((section, i) => {
    const sx = MARGIN + i * (colW + 4);
    fill(doc, sx, y, colW, maxH, C.warm);

    // Bandeau titre coloré
    fill(doc, sx, y, colW, 8, [...section.color.map(v => Math.min(v + 170, 255))]);
    setFont(doc, 6, "bold", section.color);
    doc.text(section.title, sx + 3, y + 5.5);

    let itemY = y + 12;
    (section.items ?? []).filter(Boolean).slice(0, 3).forEach((item) => {
      setFont(doc, 7, "normal", C.basalt);
      const lines = doc.splitTextToSize(`${section.bullet} ${item}`, colW - 6);
      doc.text(lines.slice(0, 2), sx + 3, itemY);
      itemY += lines.slice(0, 2).length * 4.2 + 1.5;
    });
  });

  return y + maxH + 5;
}

function drawMaterialInsights(doc, insights, lang, y) {
  if (!insights?.length) return y;

  setFont(doc, 6.5, "bold", C.moss);
  doc.text(
    (lang === "fr" ? "COMPATIBILITÉ MATÉRIAUX" : "MATERIAL COMPATIBILITY").toUpperCase(),
    MARGIN,
    y
  );
  y += 5;

  insights.forEach((mat) => {
    const barW = CW - 65;
    fill(doc, MARGIN, y - 2, CW, 10, C.warm);

    setFont(doc, 8, "bold", C.basalt);
    doc.text(mat.title, MARGIN + 3, y + 4);

    setFont(doc, 7, "normal", C.moss);
    doc.text(mat.rating, MARGIN + 42, y + 4);

    progressBar(doc, MARGIN + 68, y + 2, barW, mat.compat ?? 0);

    setFont(doc, 7, "bold", C.basalt);
    doc.text(`${mat.compat ?? 0}%`, W - MARGIN - 2, y + 4, { align: "right" });

    y += 12;
  });

  return y;
}

function drawFooter(doc, lang, dateStr) {
  fill(doc, 0, 286, W, 11, C.basalt);
  setFont(doc, 6.5, "normal", C.sand);
  doc.text("HomèVo — Laboratoire Éco-Design", MARGIN, 293);
  doc.text(
    lang === "fr"
      ? "Document généré automatiquement — usage professionnel"
      : "Auto-generated document — professional use",
    W / 2,
    293,
    { align: "center" }
  );
  doc.text(dateStr, W - MARGIN, 293, { align: "right" });
}

// ── Export principal ───────────────────────────────────────

/**
 * Génère et télécharge un PDF A4 depuis les résultats d'analyse.
 *
 * @param {object} analysis  - Résultat de generateDynamicAnalysis()
 * @param {object} form      - Valeurs du formulaire (climate, region, terrain, culture, materials, method)
 * @param {string} language  - "fr" | "en"
 */
export function exportAnalysisPDF(analysis, form, language) {
  const lang = language === "fr" ? "fr" : "en";
  const doc  = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

  const dateStr = new Date().toLocaleDateString(
    lang === "fr" ? "fr-FR" : "en-GB",
    { day: "2-digit", month: "long", year: "numeric" }
  );

  // ── En-tête ──────────────────────────────────────────────
  drawHeader(doc, lang, dateStr);

  let y = 38;

  // ── Titre + score ────────────────────────────────────────
  // Score circle en haut à droite (positionné avant le titre pour superposition correcte)
  drawScoreCircle(doc, analysis.score, lang === "fr" ? "Score" : "Score", W - MARGIN - 17, 54);

  y = drawTitleBlock(doc, analysis, lang, y);

  // ── Séparateur ───────────────────────────────────────────
  divider(doc, y);
  y += 5;

  // ── Paramètres du site ───────────────────────────────────
  setFont(doc, 6.5, "bold", C.moss);
  doc.text(
    (lang === "fr" ? "PARAMÈTRES DU SITE" : "SITE PARAMETERS").toUpperCase(),
    MARGIN,
    y
  );
  y += 4;
  y = drawParams(doc, form, lang, y);

  // ── Séparateur ───────────────────────────────────────────
  divider(doc, y);
  y += 5;

  // ── Blocs de synthèse ────────────────────────────────────
  setFont(doc, 6.5, "bold", C.moss);
  doc.text(
    (lang === "fr" ? "SYNTHÈSE D'ANALYSE" : "ANALYSIS SUMMARY").toUpperCase(),
    MARGIN,
    y
  );
  y += 4;
  y = drawAnalysisBlocks(doc, analysis.blocks ?? [], y);

  // ── Recommandation IA ────────────────────────────────────
  y = drawDetailBox(doc, analysis.detail, lang, y);

  // ── Indicateurs ──────────────────────────────────────────
  divider(doc, y);
  y += 5;
  setFont(doc, 6.5, "bold", C.moss);
  doc.text(
    (lang === "fr" ? "INDICATEURS DE PERFORMANCE" : "PERFORMANCE INDICATORS").toUpperCase(),
    MARGIN,
    y
  );
  y += 4;
  y = drawIndicators(doc, analysis.indicators ?? {}, lang, y);

  // ── Avantages / Limites / Observations ───────────────────
  divider(doc, y);
  y += 5;
  y = drawThreeColumns(doc, analysis, lang, y);

  // ── Compatibilité matériaux ──────────────────────────────
  if (y < 245) {
    divider(doc, y);
    y += 5;
    y = drawMaterialInsights(doc, analysis.materialInsights, lang, y);
  }

  // ── Pied de page ─────────────────────────────────────────
  drawFooter(doc, lang, dateStr);

  // ── Sauvegarde ───────────────────────────────────────────
  const slug   = (form.climate ?? "analyse").toLowerCase().replace(/\s+/g, "-");
  const today  = new Date().toISOString().slice(0, 10);
  const filename = `homevo-${slug}-${today}.pdf`;

  doc.save(filename);
}