import type { Ingredient, UnitKey } from "./types";

/* -------------------------------------------------------------------------- */
/*  French typography                                                          */
/* -------------------------------------------------------------------------- */

const NNBSP = " "; // espace fine insécable
const NBSP = " ";

/**
 * Applies French typographic rules: narrow no-break spaces before high
 * punctuation, inside guillemets, and no-break spaces between numbers and
 * units. Idempotent.
 */
export function fr(text: string): string {
  return text
    .replace(/[  ]([;:!?»])/g, `${NNBSP}$1`)
    .replace(/«[  ]?/g, `«${NNBSP}`)
    .replace(/(\d) (?=(?:%|°C|°|g\b|kg\b|ml\b|cl\b|l\b|cm\b|mm\b|min\b|h\b|kcal\b|mg\b|€))/g, `$1${NBSP}`)
    .replace(/(\d) (\d{3})\b/g, `$1${NNBSP}$2`)
    .replace(/'/g, "’");
}

/* -------------------------------------------------------------------------- */
/*  Durations                                                                  */
/* -------------------------------------------------------------------------- */

/** 95 → "1 h 35", 45 → "45 min", 120 → "2 h", 1440 → "24 h" */
export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes}${NBSP}min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m === 0 ? `${h}${NBSP}h` : `${h}${NBSP}h${NBSP}${String(m).padStart(2, "0")}`;
}

/** Short split for big-number display: { value: "1 h 35", unit: "" } or { value: "45", unit: "min" } */
export function durationParts(minutes: number): { value: string; unit: string } {
  if (minutes < 60) return { value: String(minutes), unit: "min" };
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m === 0
    ? { value: String(h), unit: "h" }
    : { value: `${h}${NBSP}h${NBSP}${String(m).padStart(2, "0")}`, unit: "" };
}

/** ISO 8601 duration for schema.org: 95 → "PT1H35M" */
export function isoDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `PT${h ? `${h}H` : ""}${m || !h ? `${m}M` : ""}`;
}

/* -------------------------------------------------------------------------- */
/*  Quantities                                                                 */
/* -------------------------------------------------------------------------- */

const UNITS: Record<UnitKey, { one: string; other: string; elide?: boolean }> = {
  g: { one: "g", other: "g" },
  kg: { one: "kg", other: "kg" },
  ml: { one: "ml", other: "ml" },
  cl: { one: "cl", other: "cl" },
  l: { one: "l", other: "l" },
  cas: { one: "c. à soupe", other: "c. à soupe" },
  cac: { one: "c. à café", other: "c. à café" },
  pincee: { one: "pincée", other: "pincées" },
  gousse: { one: "gousse", other: "gousses" },
  brin: { one: "brin", other: "brins" },
  feuille: { one: "feuille", other: "feuilles" },
  tranche: { one: "tranche", other: "tranches" },
  botte: { one: "botte", other: "bottes" },
  branche: { one: "branche", other: "branches" },
  bouteille: { one: "bouteille", other: "bouteilles" },
  rouleau: { one: "rouleau", other: "rouleaux" },
  sachet: { one: "sachet", other: "sachets" },
  noix: { one: "noix", other: "noix" },
  tour: { one: "tour de moulin", other: "tours de moulin" },
};

const FRACTIONS: Array<[number, string]> = [
  [0.25, "¼"],
  [0.333, "⅓"],
  [0.5, "½"],
  [0.666, "⅔"],
  [0.75, "¾"],
];

function defaultStep(ing: Ingredient): number {
  if (ing.step) return ing.step;
  switch (ing.unit) {
    case "g":
    case "ml":
      return (ing.qty ?? 0) >= 100 ? 10 : (ing.qty ?? 0) >= 30 ? 5 : 1;
    case "kg":
    case "l":
      return 0.05;
    case "cl":
      return 1;
    case undefined:
      return 1;
    default:
      return 0.5;
  }
}

/** Scales and rounds a quantity to a sensible granularity. */
export function scaleQty(ing: Ingredient, factor: number): number | undefined {
  if (ing.qty === undefined) return undefined;
  if (ing.fixed) return ing.qty;
  const step = defaultStep(ing);
  const raw = ing.qty * factor;
  const rounded = Math.round(raw / step) * step;
  // Never round a present ingredient down to zero.
  return rounded <= 0 ? step : Number(rounded.toFixed(3));
}

/** 1.5 → "1 ½", 0.25 → "¼", 250 → "250", 1.25 kg stays decimal "1,25" */
export function formatNumber(n: number, unit?: UnitKey): string {
  const decimalUnits: Array<UnitKey | undefined> = ["kg", "l"];
  if (decimalUnits.includes(unit)) return n.toLocaleString("fr-FR", { maximumFractionDigits: 2 });
  const whole = Math.floor(n);
  const frac = n - whole;
  if (frac < 0.01) return String(whole);
  const match = FRACTIONS.find(([v]) => Math.abs(v - frac) < 0.04);
  if (match) return whole ? `${whole}${NNBSP}${match[1]}` : match[1];
  return n.toLocaleString("fr-FR", { maximumFractionDigits: 1 });
}

/**
 * Display-ready quantity: converts 1 500 g → 1,5 kg and 1 200 ml → 1,2 l
 * once scaled, so the numbers always read like a cook would write them.
 */
export function displayQty(ing: Ingredient, qty: number): { num: string; unit?: string } {
  if (ing.unit === "g" && qty >= 1000) return { num: formatNumber(qty / 1000, "kg"), unit: "kg" };
  if (ing.unit === "ml" && qty >= 1000) return { num: formatNumber(qty / 1000, "l"), unit: "l" };
  if (ing.unit === "cl" && qty >= 100) return { num: formatNumber(qty / 100, "l"), unit: "l" };
  return { num: formatNumber(qty, ing.unit), unit: ing.unit ? unitLabel(ing.unit, qty) : undefined };
}

export function unitLabel(unit: UnitKey, qty: number): string {
  const u = UNITS[unit];
  return qty > 1 ? u.other : u.one;
}

export function ingredientName(ing: Ingredient, qty: number | undefined): string {
  if (!ing.unit && qty !== undefined && qty > 1 && ing.plural) return ing.plural;
  return ing.name;
}

const ELISION = /^[aeiouyàâäéèêëîïôöùûüœh]/i;
const H_ASPIRE = /^(haricot|hachis|homard|houblon|hareng)/i;

/** "200 g de guanciale", "4 jaunes d’œufs", "1 c. à soupe d’huile d’olive", "sel" */
export function ingredientPhrase(ing: Ingredient, factor = 1): string {
  const qty = scaleQty(ing, factor);
  const name = ingredientName(ing, qty);
  if (qty === undefined) return capitalize(name);
  const { num, unit } = displayQty(ing, qty);
  if (!unit) return `${num} ${name}`;
  const de = ELISION.test(name) && !H_ASPIRE.test(name) ? "d’" : "de ";
  return `${num} ${unit} ${de}${name}`;
}

export function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function plural(n: number, forms: { one: string; other: string }): string {
  return n > 1 ? forms.other : forms.one;
}

export function formatDateFr(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}
