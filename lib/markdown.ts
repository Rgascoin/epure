import type { Recipe } from "./types";
import { absoluteUrl, site } from "./site";
import { formatDuration, ingredientPhrase, plural } from "./format";

/**
 * Clean Markdown rendition of a recipe — served at /recettes/<slug>.md and
 * to clients sending `Accept: text/markdown`. LLMs and agents get the full
 * content without layout noise, with a canonical link back to the page.
 */
export function recipeToMarkdown(r: Recipe): string {
  const url = absoluteUrl(`/recettes/${r.slug}`);
  const lines: string[] = [];
  const push = (...l: string[]) => lines.push(...l);

  push(
    "---",
    `title: "${r.title}"`,
    `url: ${url}`,
    `category: ${r.category}`,
    `cuisine: ${r.cuisine}`,
    `servings: ${r.servings} ${plural(r.servings, r.servingsLabel)}`,
    `prep_time: ${formatDuration(r.times.prep)}`,
    `cook_time: ${formatDuration(r.times.cook)}`,
    ...(r.times.rest ? [`rest_time: ${formatDuration(r.times.rest)}`] : []),
    `total_time: ${formatDuration(r.totalMinutes)}`,
    `difficulty: ${r.difficulty}`,
    `cost: "${r.cost}"`,
    `date_published: ${r.datePublished}`,
    `date_modified: ${r.dateModified}`,
    `source: ${site.name}`,
    "---",
    "",
    `# ${r.title}`,
    "",
    `> ${r.tagline}`,
    "",
    "## L’essentiel",
    "",
    r.summary,
    "",
    ...r.intro.flatMap((p) => [p, ""]),
    `## Ingrédients (pour ${r.servings} ${plural(r.servings, r.servingsLabel)})`,
    "",
  );

  for (const g of r.ingredients) {
    if (g.title) push(`### ${g.title}`, "");
    for (const i of g.items) {
      push(`- ${ingredientPhrase(i)}${i.note ? ` — ${i.note}` : ""}${i.optional ? " (facultatif)" : ""}`);
    }
    push("");
  }

  if (r.equipment.length) push("## Ustensiles", "", ...r.equipment.map((e) => `- ${e}`), "");

  push("## Préparation", "");
  let n = 0;
  for (const section of r.method) {
    if (r.method.length > 1) push(`### ${section.title}`, "");
    for (const s of section.steps) {
      n += 1;
      push(`${n}. **${s.title}.** ${s.text}${s.timer ? ` _(${formatDuration(s.timer.minutes)})_` : ""}`);
      if (s.tip) push(`   - Astuce : ${s.tip}`);
    }
    push("");
  }

  push("## Pourquoi ça marche", "", ...r.science.flatMap((s) => [`### ${s.title}`, "", s.text, ""]));
  push("## Les secrets", "", ...r.tips.map((t) => `- ${t}`), "");
  push("## Les erreurs à éviter", "", ...r.mistakes.map((t) => `- ${t}`), "");
  push("## Variations", "", ...r.variations.flatMap((v) => [`### ${v.title}`, "", v.text, ""]));
  push("## Conservation", "", r.storage, "");
  if (r.pairing) push("## Accord", "", r.pairing, "");
  push(
    `## Valeurs nutritionnelles (par ${r.servingsLabel.one}, estimations)`,
    "",
    "| Énergie | Protéines | Lipides | dont saturés | Glucides | dont sucres | Fibres | Sodium |",
    "|---|---|---|---|---|---|---|---|",
    `| ${r.nutrition.calories} kcal | ${r.nutrition.protein} g | ${r.nutrition.fat} g | ${r.nutrition.saturatedFat} g | ${r.nutrition.carbs} g | ${r.nutrition.sugar} g | ${r.nutrition.fiber} g | ${r.nutrition.sodium} mg |`,
    "",
  );
  push("## Questions fréquentes", "", ...r.faq.flatMap((f) => [`### ${f.q}`, "", f.a, ""]));
  push("---", "", `Source : [${r.title} — ${site.name}](${url})`, "");

  return lines.join("\n");
}
