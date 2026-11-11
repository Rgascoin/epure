import type { RecipeContent } from "@/lib/types";

export const content: RecipeContent = {
  slug: "mousse-au-chocolat",
  title: "Mousse au chocolat",
  seoTitle: "Mousse au chocolat : la recette aérienne et facile",
  tagline: "Du chocolat. De l’air.",
  description:
    "La mousse au chocolat maison : 200 g de chocolat noir 70 %, 6 œufs, une pincée de sel et un peu de sucre. 25 min de préparation, 6 h au frais. Pas à pas.",
  summary:
    "Pour une mousse au chocolat pour 6, faites fondre 200 g de chocolat noir à 70 % au bain-marie, incorporez 6 jaunes, puis les 6 blancs montés en neige souple avec une pincée de sel et 30 g de sucre. Mélangez délicatement à la maryse et laissez prendre au moins 6 heures au réfrigérateur.",
  intro: [
    "Il existe mille mousses au chocolat ; celle-ci revient à l’essentiel. Du chocolat noir, des œufs, une pincée de sel et à peine de sucre. Pas de crème, pas de gélatine : la tenue vient du beurre de cacao qui fige au froid, la légèreté de l’air emprisonné dans les blancs.",
    "La réussite tient à deux gestes : un chocolat à la bonne température au moment du mélange, et des blancs incorporés avec douceur pour ne pas casser les bulles.",
    "Préparez-la le matin pour le soir, ou la veille pour le lendemain.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "mousse au chocolat",
    "recette mousse au chocolat",
    "mousse au chocolat facile",
    "mousse au chocolat maison",
    "mousse au chocolat noir",
    "mousse au chocolat sans crème",
    "mousse au chocolat aérienne",
    "mousse au chocolat inratable",
  ],
  diet: ["vegetarian", "glutenFree"],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 25, cook: 5, rest: 360 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  equipment: [
    "Casserole et bol résistant à la chaleur (bain-marie)",
    "Batteur électrique",
    "Maryse",
    "Grand saladier propre et sec",
    "6 verrines ou un plat de service",
  ],
  ingredients: [
    {
      items: [
        { qty: 200, unit: "g", name: "chocolat noir 70 %", note: "pâtissier ou de couverture, haché", step: 10 },
        { qty: 6, name: "œuf", plural: "œufs", note: "très frais, à température ambiante", step: 1 },
        { qty: 30, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 20, unit: "g", name: "beurre doux", note: "pour plus de rondeur", step: 5, optional: true },
        { name: "fleur de sel ou éclats de cacao", note: "pour servir", optional: true },
      ],
    },
  ],
  method: [
    {
      title: "Préparation",
      steps: [
        {
          title: "Fondre le chocolat",
          text: "Faites fondre le chocolat haché et le beurre au bain-marie, sur une eau à peine frémissante, sans que le bol touche l’eau. Remuez jusqu’à ce que le mélange soit lisse, puis retirez du feu.",
          timer: { minutes: 5, label: "Fonte du chocolat" },
          tip: "Pas une goutte d’eau ni de vapeur dans le chocolat : il deviendrait épais et granuleux.",
        },
        {
          title: "Séparer les œufs",
          text: "Clarifiez les œufs : les jaunes dans un bol, les blancs dans un grand saladier parfaitement propre et sec. La moindre trace de jaune empêcherait les blancs de monter.",
        },
        {
          title: "Incorporer les jaunes",
          text: "Laissez tiédir le chocolat jusqu’à ce qu’il soit à peine tiède au toucher, autour de 35 à 40 °C. Incorporez les jaunes un à un en fouettant : le mélange doit être lisse et brillant.",
        },
        {
          title: "Monter les blancs",
          text: "Fouettez les blancs avec le sel à vitesse moyenne. Quand ils sont mousseux, ajoutez le sucre en pluie et continuez jusqu’à obtenir une neige brillante qui forme un bec d’oiseau souple au bout du fouet.",
          tip: "Arrêtez-vous au bec d’oiseau : des blancs trop fermes deviennent granuleux et se mélangent mal au chocolat.",
        },
        {
          title: "Détendre le chocolat",
          text: "Incorporez énergiquement un quart des blancs au chocolat avec un fouet. Ce premier ajout allège la masse et facilite la suite.",
        },
        {
          title: "Incorporer délicatement",
          text: "Ajoutez le reste des blancs en deux fois et mélangez à la maryse en soulevant la masse du fond vers le haut, tout en tournant le saladier. Arrêtez dès qu’il ne reste plus de traces blanches.",
          tip: "Chaque geste en trop casse des bulles : mieux vaut une trace blanche qu’une mousse retombée.",
        },
        {
          title: "Laisser prendre",
          text: "Répartissez la mousse dans les verrines ou un plat, filmez et réservez au réfrigérateur au moins 6 heures, idéalement une nuit.",
          timer: { minutes: 360, label: "Prise au froid" },
        },
        {
          title: "Servir",
          text: "Sortez la mousse 10 minutes avant de servir. Parsemez d’une pointe de fleur de sel ou d’éclats de cacao.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Une mousse, c’est de l’air piégé",
      text: "En fouettant les blancs, on déplie leurs protéines, qui se réorganisent en un film élastique autour de millions de bulles d’air. Le sucre, ajouté une fois les blancs mousseux, renforce ce film et rend la neige plus stable.",
    },
    {
      title: "Le beurre de cacao fige la structure",
      text: "Au froid, le beurre de cacao du chocolat se solidifie et emprisonne les bulles dans leur position. C’est pour cela que la mousse a besoin de plusieurs heures au réfrigérateur pour se tenir.",
    },
    {
      title: "La bonne température",
      text: "Trop chaud, le chocolat fait éclater les bulles et la mousse retombe. Trop froid, il fige au contact des blancs et forme des grains. Autour de 35 à 40 °C, avec des œufs à température ambiante, le mélange reste souple et lisse.",
    },
  ],
  tips: [
    "Choisissez un chocolat noir entre 64 et 70 % de cacao, de qualité pâtissière : il fait tout le goût.",
    "Sortez les œufs du réfrigérateur une heure avant : les blancs montent mieux et le chocolat ne fige pas.",
    "Essuyez le saladier et le fouet avec un peu de vinaigre : la moindre trace de gras empêche les blancs de monter.",
    "Une pointe de fleur de sel au service exalte l’amertume du chocolat.",
    "Une cuillerée d’espresso serré ou un zeste d’orange dans le chocolat fondu changent tout.",
  ],
  mistakes: [
    "Battre les blancs trop fermes : ils forment des grumeaux blancs dans la mousse.",
    "Mélanger en tournant comme une pâte : les bulles éclatent et la mousse devient dense.",
    "Incorporer un chocolat trop chaud ou trop froid : la mousse retombe ou devient granuleuse.",
    "Servir trop tôt : sans ses heures de froid, la mousse n’a pas de tenue.",
  ],
  variations: [
    {
      title: "Au café",
      text: "Ajoutez 2 cuillerées à soupe d’espresso serré au chocolat fondu, avant les jaunes.",
    },
    {
      title: "À l’orange",
      text: "Râpez le zeste d’une orange non traitée dans le chocolat fondu et parsemez quelques zestes au service.",
    },
    {
      title: "Végane, à l’aquafaba",
      text: "Remplacez les œufs par 150 ml de jus de cuisson de pois chiches monté en neige avec le sucre, incorporé au chocolat fondu tiède. La texture est un peu plus légère et fragile.",
    },
  ],
  storage:
    "Préparée avec des œufs crus, la mousse se conserve 24 heures au réfrigérateur, filmée, et 48 heures au maximum. Ne la laissez pas à température ambiante.",
  pairing:
    "Un vin doux naturel du Roussillon, banyuls ou maury, dont les notes de cacao et de fruits secs prolongent le chocolat.",
  faq: [
    {
      q: "La mousse au chocolat est-elle déconseillée aux femmes enceintes ?",
      a: "La mousse classique contient des œufs crus : elle est déconseillée aux femmes enceintes, aux jeunes enfants, aux personnes âgées et aux personnes immunodéprimées, en raison du risque de salmonellose. Pour eux, utilisez des œufs pasteurisés (blancs et jaunes vendus en brique au rayon frais) : la recette fonctionne à l’identique.",
    },
    {
      q: "Combien de temps faut-il laisser prendre une mousse au chocolat ?",
      a: "Au moins 6 heures au réfrigérateur, idéalement une nuit. C’est le temps nécessaire pour que le beurre de cacao fige et stabilise la mousse.",
    },
    {
      q: "Pourquoi ma mousse au chocolat est-elle granuleuse ?",
      a: "Le plus souvent, le chocolat était trop froid au moment du mélange et a figé au contact des blancs, ou les blancs étaient trop fermes. Visez un chocolat à 35–40 °C et une neige souple.",
    },
    {
      q: "Pourquoi ma mousse au chocolat est-elle restée liquide ?",
      a: "Les blancs n’étaient pas assez montés ou ont été mélangés trop énergiquement, ce qui a cassé les bulles. Un temps de repos trop court au froid peut aussi l’expliquer.",
    },
    {
      q: "Quel chocolat choisir pour une mousse au chocolat ?",
      a: "Un chocolat noir de qualité pâtissière, entre 64 et 70 % de cacao. Plus riche en beurre de cacao qu’un chocolat ordinaire, il donne une mousse plus intense et mieux tenue.",
    },
    {
      q: "Peut-on faire une mousse au chocolat sans sucre ?",
      a: "Oui. Le sucre sert surtout à stabiliser les blancs : sans lui, la mousse est un peu plus fragile mais tout à fait réussie avec un chocolat à 70 %.",
    },
  ],
  nutrition: {
    calories: 310,
    protein: 9,
    fat: 21,
    saturatedFat: 12,
    carbs: 16,
    sugar: 15,
    fiber: 4,
    sodium: 100,
  },
  images: {
    heroAlt: "Mousse au chocolat dans un verre à pied sur fond noir, entourée d’éclats de cacao et de truffes",
    detailAlt: "Mousses au chocolat en verrines, garnies de graines de grenade",
    credits: {
      hero: {
        photographer: "Eva Bronzini",
        url: "https://www.pexels.com/photo/chocolate-mousse-in-tall-glass-6261274/",
      },
      detail: {
        photographer: "Ella Olsson",
        url: "https://www.pexels.com/photo/close-up-photo-of-chocolate-mousse-3026810/",
      },
    },
  },
  datePublished: "2026-11-02",
  dateModified: "2026-11-10",
};
