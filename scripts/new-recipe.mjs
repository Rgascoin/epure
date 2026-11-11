#!/usr/bin/env node
/**
 * Creates content/recipes/<slug>/index.ts from a template that lists every
 * field with its rule from the guide. Placeholders « À ÉCRIRE » fail
 * `pnpm recipes:check` on purpose, so nothing half-written can ship.
 *
 *   pnpm recipes:new <slug> [--category Plat] [--tags hiver,noel]
 *
 * Run `pnpm recipes:images` first (or right after) so hero.jpg and detail.jpg exist.
 */
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const [slug, ...rest] = process.argv.slice(2);
if (!slug || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
  console.error("Usage : pnpm recipes:new <slug-en-minuscules> [--category Plat] [--tags hiver,noel]");
  process.exit(1);
}
const opt = (name, fallback) => (rest.includes(name) ? rest[rest.indexOf(name) + 1] : fallback);
const category = opt("--category", "Plat");
const tags = (opt("--tags", "") || "").split(",").filter(Boolean);
const dir = join(process.cwd(), "content/recipes", slug);
const file = join(dir, "index.ts");
if (existsSync(file)) {
  console.error(`${file} existe déjà.`);
  process.exit(1);
}
mkdirSync(dir, { recursive: true });
const today = new Date().toISOString().slice(0, 10);
const TODO = "À ÉCRIRE";

const template = `import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

/*
 * Règles : docs/recette-brief.md (résumé) et docs/guide-redaction-recettes.md (référence).
 * Vérifier : pnpm recipes:check -t ${slug}
 * Typographie : apostrophe ’, guillemets « », pas de tiret cadratin, espaces fines gérées par le site.
 */
export default defineRecipe({
  slug: "${slug}",
  title: "${TODO}", // ≤ 60 car., le nom que les gens cherchent
  seoTitle: "${TODO}", // 30–60 car., mot-clé principal en tête
  tagline: "${TODO}", // ≤ 7 mots, une phrase vivante, pas de slogan
  description: "${TODO}", // 120–160 car., répond tout de suite (quantités, temps)
  summary: "${TODO}", // 150–480 car., « Pour N … » + chiffres clés + temps total
  intro: ["${TODO}", "${TODO}"], // 2–3 paragraphes ≤ 90 mots : le plat, le point qui fait rater, le conseil
  category: "${category}", // Entrée | Plat | Accompagnement | Dessert | Goûter
  cuisine: "Française",
  keywords: ["${TODO}"], // 5–12, minuscules, requêtes réelles
  // diet: ["vegetarian"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 0, cook: 0 }, // minutes ; rest: si repos
  difficulty: "Facile", // Facile | Intermédiaire | Exigeant
  cost: "€", // € | €€ | €€€
  season: ["Toute l’année"],
  tags: [${tags.map((t) => `"${t}"`).join(", ")}], // lib/tags.ts : occasions et saisons où c’est un choix évident
  equipment: ["${TODO}", "${TODO}"], // ≥ 2, minuscules
  ingredients: [
    {
      // title: "La pâte", // obligatoire s’il y a plusieurs groupes
      items: [
        // { qty: 250, unit: "g", name: "farine", note: "type 55", step: 5 },
        // { qty: 3, name: "œuf", plural: "œufs", step: 1 },
        // { name: "sel" }, // sans quantité = au goût
        { qty: 1, unit: "g", name: "${TODO}", step: 1 },
        { qty: 1, unit: "g", name: "${TODO}", step: 1 },
        { qty: 1, unit: "g", name: "${TODO}", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "${TODO}",
      steps: [
        // 4–14 étapes, titre ≤ 5 mots, texte ≤ 85 mots. Un minuteur = la durée écrite dans le texte.
        { title: "${TODO}", text: "${TODO}" },
        { title: "${TODO}", text: "${TODO}" },
        { title: "${TODO}", text: "${TODO}" },
        { title: "${TODO}", text: "${TODO}", timer: { minutes: 10, label: "${TODO}" } },
      ],
    },
  ],
  science: [
    // 2–4 : pourquoi ça marche, concret
    { title: "${TODO}", text: "${TODO}" },
    { title: "${TODO}", text: "${TODO}" },
  ],
  tips: ["${TODO}", "${TODO}", "${TODO}"], // 3–6
  mistakes: ["${TODO}", "${TODO}", "${TODO}"], // 3–5 : le raté, puis comment l’éviter ou le rattraper
  variations: [
    // 2–4
    { title: "${TODO}", text: "${TODO}" },
    { title: "${TODO}", text: "${TODO}" },
  ],
  storage: "${TODO}", // durées précises, réfrigérateur / congélateur
  pairing: "${TODO}",
  faq: [
    // 4–8 vraies questions (« Peut-on… ? »), réponses ≤ 75 mots
    { q: "${TODO} ?", a: "${TODO}" },
    { q: "${TODO} ?", a: "${TODO}" },
    { q: "${TODO} ?", a: "${TODO}" },
    { q: "${TODO} ?", a: "${TODO}" },
  ],
  nutrition: { calories: 0, protein: 0, fat: 0, saturatedFat: 0, carbs: 0, sugar: 0, fiber: 0, sodium: 0 }, // par portion
  annotations: { hero: "${TODO}", detail: "${TODO}" }, // ≤ 7 mots, minuscules
  images: {
    heroAlt: "${TODO}", // 30–140 car., ce qu’on voit vraiment
    detailAlt: "${TODO}",
    credits: {
      // collés depuis la sortie de pnpm recipes:images --from …
      hero: { photographer: "${TODO}", url: "https://www.pexels.com/photo/0/" },
      detail: { photographer: "${TODO}", url: "https://www.pexels.com/photo/0/" },
    },
  },
  datePublished: "${today}",
  dateModified: "${today}",
  hero,
  detail,
  theme: {
    // accent : couleur vive du plat ; ink : la même, assombrie (contraste ≥ 4,5 sur #F2EDE4 et sur tint)
    // tint : très pâle ; deep : très sombre (contraste ≥ 10 avec #F2EDE4) ; focus : point focal de la photo
    accent: "#C27A32",
    onAccent: "#1B1712",
    ink: "#8F5512",
    tint: "#F9F0E6",
    deep: "#130D09",
    focus: "50% 50%",
  },
});
`;
writeFileSync(file, template);
console.log(`Créé : ${file}`);
if (!existsSync(join(dir, "hero.jpg")))
  console.log(
    `Photos manquantes : pnpm recipes:photos "<plat>" puis pnpm recipes:images ${slug} <hero> <détail> --from …`,
  );
console.log(`Vérifier : pnpm recipes:check -t ${slug}`);
