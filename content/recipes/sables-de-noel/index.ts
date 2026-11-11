import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

/*
 * Règles : docs/recette-brief.md (résumé) et docs/guide-redaction-recettes.md (référence).
 * Vérifier : pnpm recipes:check -t sables-de-noel
 * Typographie : apostrophe ’, guillemets « », pas de tiret cadratin, espaces fines gérées par le site.
 */
export default defineRecipe({
  slug: "sables-de-noel",
  title: "À ÉCRIRE", // ≤ 60 car., le nom que les gens cherchent
  seoTitle: "À ÉCRIRE", // 30–60 car., mot-clé principal en tête
  tagline: "À ÉCRIRE", // ≤ 7 mots, une phrase vivante, pas de slogan
  description: "À ÉCRIRE", // 120–160 car., répond tout de suite (quantités, temps)
  summary: "À ÉCRIRE", // 150–480 car., « Pour N … » + chiffres clés + temps total
  intro: ["À ÉCRIRE", "À ÉCRIRE"], // 2–3 paragraphes ≤ 90 mots : le plat, le point qui fait rater, le conseil
  category: "Goûter", // Entrée | Plat | Accompagnement | Dessert | Goûter
  cuisine: "Française",
  keywords: ["À ÉCRIRE"], // 5–12, minuscules, requêtes réelles
  // diet: ["vegetarian"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 0, cook: 0 }, // minutes ; rest: si repos
  difficulty: "Facile", // Facile | Intermédiaire | Exigeant
  cost: "€", // € | €€ | €€€
  season: ["Toute l’année"],
  tags: ["noel"], // lib/tags.ts : occasions et saisons où c’est un choix évident
  equipment: ["À ÉCRIRE", "À ÉCRIRE"], // ≥ 2, minuscules
  ingredients: [
    {
      // title: "La pâte", // obligatoire s’il y a plusieurs groupes
      items: [
        // { qty: 250, unit: "g", name: "farine", note: "type 55", step: 5 },
        // { qty: 3, name: "œuf", plural: "œufs", step: 1 },
        // { name: "sel" }, // sans quantité = au goût
        { qty: 1, unit: "g", name: "À ÉCRIRE", step: 1 },
        { qty: 1, unit: "g", name: "À ÉCRIRE", step: 1 },
        { qty: 1, unit: "g", name: "À ÉCRIRE", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "À ÉCRIRE",
      steps: [
        // 4–14 étapes, titre ≤ 5 mots, texte ≤ 85 mots. Un minuteur = la durée écrite dans le texte.
        { title: "À ÉCRIRE", text: "À ÉCRIRE" },
        { title: "À ÉCRIRE", text: "À ÉCRIRE" },
        { title: "À ÉCRIRE", text: "À ÉCRIRE" },
        { title: "À ÉCRIRE", text: "À ÉCRIRE", timer: { minutes: 10, label: "À ÉCRIRE" } },
      ],
    },
  ],
  science: [
    // 2–4 : pourquoi ça marche, concret
    { title: "À ÉCRIRE", text: "À ÉCRIRE" },
    { title: "À ÉCRIRE", text: "À ÉCRIRE" },
  ],
  tips: ["À ÉCRIRE", "À ÉCRIRE", "À ÉCRIRE"], // 3–6
  mistakes: ["À ÉCRIRE", "À ÉCRIRE", "À ÉCRIRE"], // 3–5 : le raté, puis comment l’éviter ou le rattraper
  variations: [
    // 2–4
    { title: "À ÉCRIRE", text: "À ÉCRIRE" },
    { title: "À ÉCRIRE", text: "À ÉCRIRE" },
  ],
  storage: "À ÉCRIRE", // durées précises, réfrigérateur / congélateur
  pairing: "À ÉCRIRE",
  faq: [
    // 4–8 vraies questions (« Peut-on… ? »), réponses ≤ 75 mots
    { q: "À ÉCRIRE ?", a: "À ÉCRIRE" },
    { q: "À ÉCRIRE ?", a: "À ÉCRIRE" },
    { q: "À ÉCRIRE ?", a: "À ÉCRIRE" },
    { q: "À ÉCRIRE ?", a: "À ÉCRIRE" },
  ],
  nutrition: { calories: 0, protein: 0, fat: 0, saturatedFat: 0, carbs: 0, sugar: 0, fiber: 0, sodium: 0 }, // par portion
  annotations: { hero: "À ÉCRIRE", detail: "À ÉCRIRE" }, // ≤ 7 mots, minuscules
  images: {
    heroAlt: "À ÉCRIRE", // 30–140 car., ce qu’on voit vraiment
    detailAlt: "À ÉCRIRE",
    credits: {
      // collés depuis la sortie de pnpm recipes:images --from …
      hero: { photographer: "À ÉCRIRE", url: "https://www.pexels.com/photo/0/" },
      detail: { photographer: "À ÉCRIRE", url: "https://www.pexels.com/photo/0/" },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
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
