import { isTag } from "./tags";
import type { Recipe } from "./types";

/**
 * Machine-checkable rules from docs/guide-redaction-recettes.md.
 *
 * - errors   → mandatory rules. `next build` refuses to ship, `pnpm recipes:check` fails.
 * - warnings → strong recommendations, printed by `pnpm recipes:check`.
 *
 * Everything that needs judgement (taste, accuracy, tone) is in the guide's
 * human checklist; this file only covers what a machine can verify reliably.
 */

export const BANNED_EXPRESSIONS = [
  "sublime",
  "incontournable",
  "le secret",
  "magique",
  "un régal",
  "explosion de saveurs",
  "en un rien de temps",
  // « plonger » et « découvrir » restent permis au sens culinaire
  // (plongez les pâtes, découvrez la cocotte) : seul l’emploi publicitaire est banni.
  "plongez au cœur",
  "plongez dans l’univers",
  "laissez-vous tenter",
  "découvrez notre",
  "découvrez nos",
  "découvrez la recette",
  "découvrez comment",
  "à découvrir",
  "le tour est joué",
  "à coup sûr",
  "ne se rate plus",
  "sans jargon",
  "tout simplement",
  "succomber",
  "réconfortant",
  "un véritable",
  "une véritable",
  "à tomber",
  "fondre de plaisir",
  "et voilà",
  "délicieusement",
  "irrésistible",
  "savoureux mélange",
];

const PAPER = "#F2EDE4";

/* ----------------------------- colour helpers ---------------------------- */

function luminance(hex: string): number {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.replace(/./g, (c) => c + c) : h;
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16) / 255);
  const f = (c: number) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

export function contrast(a: string, b: string): number {
  const [la, lb] = [luminance(a), luminance(b)];
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

const NUMBER_WORDS: Record<string, number> = {
  une: 1,
  un: 1,
  deux: 2,
  trois: 3,
  quatre: 4,
  cinq: 5,
  six: 6,
  dix: 10,
  douze: 12,
  quinze: 15,
  vingt: 20,
  trente: 30,
};

/** Durations cited in a text, as [min, max] in minutes: "8 à 10 minutes" → [8, 10], "1 h 30" → [90, 90]. */
export function durationsIn(text: string): Array<[number, number]> {
  const num = (x: string) => NUMBER_WORDS[x.toLowerCase()] ?? parseFloat(x.replace(",", "."));
  const n = "(\\d+(?:[.,]\\d+)?|une?|deux|trois|quatre|cinq|six|dix|douze|quinze|vingt|trente)";
  const re = new RegExp(
    `${n}(?:\\s*(?:à|-|ou)\\s*${n})?\\s*(minutes?|min\\b|heures?|h\\b)(?:\\s*(\\d{1,2})\\b)?`,
    "gi",
  );
  const out: Array<[number, number]> = [];
  for (const m of text.matchAll(re)) {
    const unit = /^h/i.test(m[3]) ? 60 : 1;
    const extra = m[4] ? parseInt(m[4], 10) : 0;
    const a = num(m[1]) * unit + extra;
    const b = (m[2] ? num(m[2]) : num(m[1])) * unit + extra;
    if (!Number.isNaN(a) && !Number.isNaN(b)) out.push([a, b]);
  }
  return out;
}

/** Every human-readable string of a recipe, with its location for messages. */
function proseFields(r: Recipe): Array<[string, string]> {
  const out: Array<[string, string]> = [
    ["title", r.title],
    ["seoTitle", r.seoTitle],
    ["tagline", r.tagline],
    ["description", r.description],
    ["summary", r.summary],
    ...r.intro.map((p, i) => [`intro[${i}]`, p] as [string, string]),
    ...r.equipment.map((e, i) => [`equipment[${i}]`, e] as [string, string]),
    ...r.ingredients.flatMap((g, gi) => [
      ...(g.title ? [[`ingredients[${gi}].title`, g.title] as [string, string]] : []),
      ...g.items.flatMap((it, ii) => [
        [`ingredients[${gi}][${ii}].name`, it.name] as [string, string],
        ...(it.note ? [[`ingredients[${gi}][${ii}].note`, it.note] as [string, string]] : []),
      ]),
    ]),
    ...r.method.flatMap((sec, si) => [
      [`method[${si}].title`, sec.title] as [string, string],
      ...sec.steps.flatMap((st, i) => [
        [`step ${si}.${i} title`, st.title] as [string, string],
        [`step ${si}.${i} text`, st.text] as [string, string],
        ...(st.tip ? [[`step ${si}.${i} tip`, st.tip] as [string, string]] : []),
        ...(st.timer ? [[`step ${si}.${i} timer`, st.timer.label] as [string, string]] : []),
      ]),
    ]),
    ...r.science.flatMap((s, i) => [[`science[${i}]`, `${s.title} ${s.text}`] as [string, string]]),
    ...r.tips.map((t, i) => [`tips[${i}]`, t] as [string, string]),
    ...r.mistakes.map((t, i) => [`mistakes[${i}]`, t] as [string, string]),
    ...r.variations.map((v, i) => [`variations[${i}]`, `${v.title} ${v.text}`] as [string, string]),
    ["storage", r.storage],
    ...(r.pairing ? [["pairing", r.pairing] as [string, string]] : []),
    ...r.faq.flatMap((f, i) => [[`faq[${i}]`, `${f.q} ${f.a}`] as [string, string]]),
    ["annotations.hero", r.annotations.hero],
    ["annotations.detail", r.annotations.detail],
    ["images.heroAlt", r.images.heroAlt],
    ["images.detailAlt", r.images.detailAlt],
  ];
  return out;
}

/* --------------------------------- audit --------------------------------- */

export function auditRecipe(r: Recipe): { errors: string[]; warnings: string[] } {
  const errors: string[] = [];
  const warnings: string[] = [];
  const err = (cond: boolean, msg: string) => cond || errors.push(msg);
  const warn = (cond: boolean, msg: string) => cond || warnings.push(msg);

  /* Identity & SEO */
  err(/^[a-z0-9]+(-[a-z0-9]+)*$/.test(r.slug), `slug "${r.slug}" : minuscules, chiffres et tirets uniquement`);
  err(r.title.length <= 60, `title trop long (${r.title.length} > 60)`);
  err(
    r.seoTitle.length >= 30 && r.seoTitle.length <= 60,
    `seoTitle : 30 à 60 caractères (actuel : ${r.seoTitle.length})`,
  );
  err(
    r.description.length >= 120 && r.description.length <= 160,
    `description : 120 à 160 caractères (actuel : ${r.description.length})`,
  );
  err(words(r.tagline) <= 7, `tagline : 7 mots maximum (actuel : ${words(r.tagline)})`);
  warn(
    !/^[^.]{1,30}\.\s[^.]{1,30}\.$/.test(r.tagline),
    "tagline en deux phrases courtes symétriques : effet slogan à éviter",
  );
  err(r.keywords.length >= 5 && r.keywords.length <= 12, `keywords : 5 à 12 requêtes (actuel : ${r.keywords.length})`);
  err(
    r.keywords.every((k) => k === k.toLowerCase()),
    "keywords : en minuscules, comme les gens les tapent",
  );

  /* Summary & intro */
  err(
    r.summary.length >= 150 && r.summary.length <= 480,
    `summary : 150 à 480 caractères (actuel : ${r.summary.length})`,
  );
  err(/\d/.test(r.summary), "summary : doit contenir des chiffres (quantités, temps, température)");
  err(
    new RegExp(`\\b${r.servings}\\b`).test(r.summary),
    `summary : doit rappeler le nombre de portions (${r.servings})`,
  );
  err(r.intro.length >= 2 && r.intro.length <= 3, `intro : 2 ou 3 paragraphes (actuel : ${r.intro.length})`);
  r.intro.forEach((p, i) => err(words(p) <= 90, `intro[${i}] : 90 mots maximum (actuel : ${words(p)})`));

  /* Times & servings */
  err(r.servings >= 1 && Number.isInteger(r.servings), "servings : entier positif");
  err(r.times.prep > 0 && Number.isInteger(r.times.prep), "times.prep : minutes entières > 0");
  err(Number.isInteger(r.times.cook) && r.times.cook >= 0, "times.cook : minutes entières ≥ 0");

  /* Ingredients */
  err(r.ingredients.length >= 1, "ingredients : au moins un groupe");
  const allItems = r.ingredients.flatMap((g) => g.items);
  err(allItems.length >= 3, "ingredients : au moins 3 ingrédients");
  if (r.ingredients.length > 1)
    err(
      r.ingredients.every((g) => !!g.title),
      "ingredients : avec plusieurs groupes, chaque groupe a un titre",
    );
  allItems.forEach((it) => {
    err(
      it.name.charAt(0) === it.name.charAt(0).toLowerCase(),
      `ingrédient « ${it.name} » : commence par une minuscule`,
    );
    if (it.qty !== undefined) err(it.qty > 0, `ingrédient « ${it.name} » : quantité > 0`);
    if (it.qty !== undefined && !it.unit && !it.fixed && it.qty > 0)
      warn(!!it.plural || it.qty <= 1 || /s$|x$/.test(it.name), `ingrédient compté « ${it.name} » : ajoutez plural`);
  });

  /* Method */
  const steps = r.method.flatMap((s) => s.steps);
  err(steps.length >= 4 && steps.length <= 14, `method : 4 à 14 étapes (actuel : ${steps.length})`);
  if (r.method.length > 1)
    err(
      r.method.every((s) => s.steps.length >= 1),
      "method : aucune section vide",
    );
  steps.forEach((st, i) => {
    err(words(st.title) <= 5, `étape ${i + 1} : titre de 5 mots maximum (« ${st.title} »)`);
    err(words(st.text) <= 85, `étape ${i + 1} : 85 mots maximum (actuel : ${words(st.text)})`);
    if (st.timer) {
      err(st.timer.minutes > 0, `étape ${i + 1} : minuteur > 0`);
      err(st.timer.label.length <= 32, `étape ${i + 1} : libellé de minuteur de 32 caractères maximum`);
      const ranges = durationsIn(st.text);
      const m = st.timer.minutes;
      const sumMax = ranges.reduce((t, [, b]) => t + b, 0);
      const sumMin = ranges.reduce((t, [a]) => t + a, 0);
      err(
        ranges.some(([a, b]) => m >= a && m <= b) || (ranges.length > 1 && m >= sumMin && m <= sumMax),
        `étape ${i + 1} : le texte doit annoncer la durée du minuteur (${m} min)`,
      );
    } else {
      warn(
        durationsIn(st.text).every(([, b]) => b < 1),
        `étape ${i + 1} : une durée est citée sans minuteur`,
      );
    }
  });

  /* Editorial blocks */
  err(r.science.length >= 2 && r.science.length <= 4, `science : 2 à 4 explications (actuel : ${r.science.length})`);
  err(r.tips.length >= 3 && r.tips.length <= 6, `tips : 3 à 6 (actuel : ${r.tips.length})`);
  err(r.mistakes.length >= 3 && r.mistakes.length <= 5, `mistakes : 3 à 5 (actuel : ${r.mistakes.length})`);
  err(r.variations.length >= 2 && r.variations.length <= 4, `variations : 2 à 4 (actuel : ${r.variations.length})`);
  err(r.faq.length >= 4 && r.faq.length <= 8, `faq : 4 à 8 questions (actuel : ${r.faq.length})`);
  r.faq.forEach((f, i) => {
    err(/\?$/.test(f.q.trim()), `faq[${i}] : la question finit par « ? »`);
    err(words(f.a) <= 75, `faq[${i}] : réponse de 75 mots maximum`);
  });
  err(r.equipment.length >= 2, "equipment : au moins 2 ustensiles");
  r.equipment.forEach((e) =>
    err(e.charAt(0) === e.charAt(0).toLowerCase(), `ustensile « ${e} » : en minuscules (affichés en phrase)`),
  );
  err(r.season.length >= 1, "season : au moins une saison");
  for (const t of r.tags ?? []) err(isTag(t), `tags : « ${t} » n’est pas dans le vocabulaire (lib/tags.ts)`);
  err(new Set(r.tags ?? []).size === (r.tags ?? []).length, "tags : doublon");

  /* Nutrition */
  const n = r.nutrition;
  err(n.calories >= 50 && n.calories <= 1600, "nutrition.calories : valeur plausible (50–1600 kcal par portion)");
  const kcal = n.protein * 4 + n.carbs * 4 + n.fat * 9;
  warn(
    Math.abs(kcal - n.calories) / n.calories < 0.2,
    `nutrition : macros (${Math.round(kcal)} kcal) incohérentes avec calories (${n.calories})`,
  );
  err(n.saturatedFat <= n.fat && n.sugar <= n.carbs, "nutrition : saturés ≤ lipides et sucres ≤ glucides");

  /* Images */
  err(r.images.heroAlt.length >= 30 && r.images.heroAlt.length <= 140, "images.heroAlt : 30 à 140 caractères");
  err(r.images.detailAlt.length >= 20 && r.images.detailAlt.length <= 140, "images.detailAlt : 20 à 140 caractères");
  for (const k of ["hero", "detail"] as const) {
    err(
      /^https:\/\/(www\.)?pexels\.com\/photo\//.test(r.images.credits[k].url) ||
        /^https:\/\//.test(r.images.credits[k].url),
      `images.credits.${k}.url : URL de la page source`,
    );
    err(r.images.credits[k].photographer.length > 0, `images.credits.${k}.photographer : requis`);
    {
      const c = r.images.credits[k];
      const host = c.url.replace(/^https:\/\/(www\.)?/, "").split("/")[0];
      const expected = {
        "pexels.com": "Pexels",
        "unsplash.com": "Unsplash",
        "pixabay.com": "Pixabay",
        "commons.wikimedia.org": "Wikimedia Commons",
        "flickr.com": "Flickr",
      }[host];
      err(
        (c.source ?? "Pexels") === expected,
        `images.credits.${k}.source : « ${c.source ?? "Pexels"} » ne correspond pas à l’URL (${host})`,
      );
      if (c.source === "Wikimedia Commons" || c.source === "Flickr")
        err(Boolean(c.license), `images.credits.${k}.license : licence requise pour ${c.source}`);
      warn(c.photographer !== "Pexels", `images.credits.${k}.photographer : nom du photographe à retrouver`);
    }
  }
  for (const k of ["hero", "detail"] as const) {
    const a = r.annotations[k];
    err(words(a) <= 7, `annotations.${k} : 7 mots maximum`);
    err(a.charAt(0) === a.charAt(0).toLowerCase(), `annotations.${k} : commence par une minuscule (note manuscrite)`);
  }

  /* Theme contrast (WCAG AA) */
  const t = r.theme;
  err(contrast(t.ink, PAPER) >= 4.5, `theme.ink sur papier : contraste ${contrast(t.ink, PAPER).toFixed(2)} < 4.5`);
  err(contrast(t.ink, t.tint) >= 4.5, `theme.ink sur tint : contraste ${contrast(t.ink, t.tint).toFixed(2)} < 4.5`);
  err(
    contrast(t.onAccent, t.accent) >= 4.5,
    `theme.onAccent sur accent : contraste ${contrast(t.onAccent, t.accent).toFixed(2)} < 4.5`,
  );
  err(
    contrast(PAPER, t.deep) >= 10,
    `theme.deep : trop clair pour du texte papier (${contrast(PAPER, t.deep).toFixed(2)} < 10)`,
  );

  /* Dates */
  err(
    /^\d{4}-\d{2}-\d{2}$/.test(r.datePublished) && /^\d{4}-\d{2}-\d{2}$/.test(r.dateModified),
    "dates au format AAAA-MM-JJ",
  );
  err(r.dateModified >= r.datePublished, "dateModified postérieure ou égale à datePublished");

  /* Typography & voice, on every human-readable string */
  for (const [where, text] of proseFields(r)) {
    err(!text.includes("—"), `${where} : tiret cadratin « — » interdit`);
    err(!/[A-Za-zÀ-ÿ]'[A-Za-zÀ-ÿ]/.test(text), `${where} : apostrophe droite ' → ’`);
    err(!/"/.test(text), `${where} : guillemets droits " → « »`);
    err(!/\.\.\./.test(text), `${where} : « ... » → « … »`);
    const lower = text.toLowerCase();
    for (const banned of BANNED_EXPRESSIONS) err(!lower.includes(banned), `${where} : expression bannie « ${banned} »`);
    warn(!/\boeuf|\bboeuf|\bcoeur|\bsoeur/i.test(text), `${where} : écrire œ (œuf, bœuf, cœur)`);
  }

  return { errors, warnings };
}
