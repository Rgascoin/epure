import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "bugnes",
  title: "Bugnes lyonnaises",
  seoTitle: "Bugnes lyonnaises fines et croustillantes",
  tagline: "Fines au point de voir à travers.",
  description:
    "Une quarantaine de bugnes fines et croustillantes : une pâte au citron étalée à 1 ou 2 mm, frite 1 à 2 minutes dans une huile à 170–180 °C.",
  summary:
    "Pour 8 personnes, soit une quarantaine de bugnes, pétrissez 300 g de farine avec 3 œufs, 60 g de beurre, 40 g de sucre, le zeste d’un citron et la fleur d’oranger, puis laissez reposer la pâte 2 heures au froid. Étalez-la à 1 ou 2 mm, découpez des rectangles noués et faites-les frire 1 à 2 minutes dans une huile à 170–180 °C. Comptez 3 h 20 en tout, dont 2 heures de repos.",
  intro: [
    "À Lyon, les bugnes sont les beignets du carnaval : une pâte aux œufs parfumée au citron et à la fleur d’oranger, étalée, découpée, frite, puis couverte de sucre glace. Il y a les moelleuses, épaisses et gonflées, et les fines, qui cassent sous la dent. On fait ici les fines.",
    "Tout tient à deux réglages : l’épaisseur et la température. La pâte doit être assez fine pour qu’on voie presque le plan de travail à travers, et l’huile rester entre 170 et 180 °C. Plus froide, les bugnes boivent le gras ; plus chaude, elles brunissent avant d’avoir gonflé.",
    "Un thermomètre de cuisson aide beaucoup. Et la friture demande d’être là du début à la fin : on ne laisse jamais une casserole d’huile chaude sans surveillance.",
  ],
  category: "Goûter",
  cuisine: "Française",
  keywords: [
    "bugnes",
    "bugnes lyonnaises",
    "recette bugnes",
    "bugnes fines et croustillantes",
    "bugnes mardi gras",
    "beignets de carnaval",
    "température huile bugnes",
    "bugnes merveilles oreillettes",
  ],
  diet: ["vegetarian"],
  servings: 8,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 45, cook: 35, rest: 120 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Hiver"],
  tags: ["mardi-gras"],
  equipment: [
    "casserole profonde ou sauteuse à bords hauts",
    "thermomètre de cuisson",
    "rouleau à pâtisserie ou laminoir à pâtes",
    "roulette cannelée",
    "écumoire ou araignée",
    "grille et papier absorbant",
  ],
  ingredients: [
    {
      title: "Pâte",
      items: [
        { qty: 300, unit: "g", name: "farine T45", step: 10 },
        { qty: 40, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 1, unit: "cac", name: "levure chimique", step: 0.5 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 1, name: "citron non traité", plural: "citrons non traités", note: "pour le zeste", step: 1 },
        { qty: 3, name: "œuf", plural: "œufs", note: "à température ambiante", step: 1 },
        { qty: 2, unit: "cas", name: "eau de fleur d’oranger", step: 1 },
        { qty: 60, unit: "g", name: "beurre doux", note: "mou, en morceaux", step: 5 },
        { name: "farine", note: "pour le plan de travail" },
      ],
    },
    {
      title: "Friture et finition",
      items: [
        { qty: 1.5, unit: "l", name: "huile de tournesol", note: "ou d’arachide", fixed: true },
        { qty: 40, unit: "g", name: "sucre glace", step: 5 },
      ],
    },
  ],
  method: [
    {
      title: "La pâte",
      steps: [
        {
          title: "Mélanger les ingrédients secs",
          text: "Dans un saladier ou la cuve du robot, mélangez la farine, le sucre, la levure et le sel. Râpez finement le zeste du citron par-dessus, sans la peau blanche, qui est amère.",
        },
        {
          title: "Pétrir la pâte",
          text: "Ajoutez les œufs et la fleur d’oranger, mélangez, puis incorporez le beurre mou. Pétrissez 5 minutes au robot avec le crochet, ou 10 minutes à la main, jusqu’à ce que la pâte soit lisse, souple et ne colle plus aux doigts.",
          timer: { minutes: 10, label: "Pétrissage" },
        },
        {
          title: "Laisser reposer",
          text: "Formez une boule, filmez-la et laissez-la au moins 2 heures au réfrigérateur, ou jusqu’au lendemain.",
          timer: { minutes: 120, label: "Repos de la pâte" },
        },
      ],
    },
    {
      title: "Le façonnage",
      steps: [
        {
          title: "Étaler très finement",
          text: "Coupez la pâte en quatre et gardez au froid les morceaux qui attendent. Sur un plan de travail fariné, étalez le premier le plus finement possible, à 1 ou 2 mm : on doit presque voir le plan de travail à travers. Si la pâte se rétracte, laissez-la se détendre un instant et reprenez.",
          tip: "Au laminoir à pâtes, passez la pâte cran par cran jusqu’à l’avant-dernier : c’est plus rapide et l’épaisseur est régulière.",
        },
        {
          title: "Découper et nouer",
          text: "À la roulette cannelée, taillez des rectangles d’environ 4 × 10 cm. Faites une fente de 3 cm au centre de chacun et passez-y une extrémité pour former un nœud lâche. Posez les bugnes sur un plateau fariné, sans les superposer.",
        },
      ],
    },
    {
      title: "La friture",
      steps: [
        {
          title: "Chauffer l’huile",
          text: "Versez l’huile dans la casserole, sans dépasser la moitié de sa hauteur, et chauffez-la à 170–180 °C, ce qui prend environ 10 minutes. Sans thermomètre, jetez-y un morceau de pâte : il doit remonter aussitôt, entouré de petites bulles.",
          timer: { minutes: 10, label: "Chauffe de l’huile" },
          tip: "Pas d’eau à côté de l’huile, le manche tourné vers l’intérieur et les enfants à distance. Si l’huile fume, coupez le feu et laissez-la redescendre.",
        },
        {
          title: "Frire par petites fournées",
          text: "Plongez 3 ou 4 bugnes à la fois. Elles gonflent en cloques et blondissent en 1 à 2 minutes en tout : retournez-les à mi-cuisson avec l’écumoire. Sortez-les dorées, avant qu’elles ne brunissent, et égouttez-les sur la grille couverte de papier absorbant. Vérifiez la température entre deux fournées.",
          timer: { minutes: 2, label: "Friture d’une fournée" },
          tip: "Glissez les bugnes dans l’huile en les tenant près de la surface, sans les lâcher de haut : l’huile ne doit pas éclabousser.",
        },
        {
          title: "Sucrer au dernier moment",
          text: "Quand les bugnes ont tiédi, saupoudrez-les de sucre glace à travers une petite passoire. Sur des bugnes brûlantes, il fond et colle. Laissez l’huile refroidir complètement dans la casserole avant de la déplacer.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Le repos rend la pâte docile",
      text: "Le pétrissage forme un réseau de gluten élastique. Au froid, ce réseau se détend et le beurre raffermit la pâte : elle s’étale alors très finement sans se rétracter dès qu’on lâche le rouleau.",
    },
    {
      title: "Fine, donc croustillante",
      text: "Dans l’huile, l’eau de la pâte se vaporise et la gonfle en cloques. À 1 ou 2 mm d’épaisseur, la pâte sèche entièrement en une à deux minutes et devient cassante. Plus épaisse, elle garde un cœur humide : c’est le principe des bugnes moelleuses.",
    },
    {
      title: "Entre 170 et 180 °C",
      text: "À cette température, la vapeur qui s’échappe de la pâte limite l’entrée de l’huile, et la surface dore vite. Plus froide, la vapeur sort mollement et la pâte boit le gras. Au-delà de 190 °C, elle brunit avant d’avoir gonflé, et l’huile commence à se dégrader.",
    },
  ],
  tips: [
    "Faites la pâte la veille : après une nuit au froid, elle s’étale encore plus facilement.",
    "Ne mettez jamais plus de 3 ou 4 bugnes à la fois. Chaque fournée fait baisser la température de l’huile, d’autant plus qu’elle est chargée.",
    "Gardez le feu moyen et ajustez-le entre les fournées en surveillant le thermomètre, plutôt que de chauffer fort puis d’attendre.",
    "Une fois froide, l’huile filtrée se garde à l’abri de la lumière et peut resservir pour une autre friture sucrée.",
  ],
  mistakes: [
    "Une pâte trop épaisse : les bugnes restent molles au centre et grasses. Étalez à 1 ou 2 mm.",
    "Une huile pas assez chaude : les bugnes pâlissent, boivent l’huile et deviennent lourdes. Attendez qu’elle remonte à 170 °C avant chaque fournée.",
    "Une huile trop chaude : les bugnes brunissent avant de gonfler et prennent un goût amer. Baissez le feu dès que le thermomètre dépasse 185 °C.",
    "Le sucre glace sur des bugnes brûlantes : il fond et forme une pellicule collante. Attendez qu’elles soient tièdes.",
  ],
  variations: [
    {
      title: "Bugnes moelleuses",
      text: "Étalez la pâte à 4 ou 5 mm au lieu de 1 ou 2, et faites frire les bugnes 3 à 4 minutes à 170 °C, en les retournant une fois. Elles gonflent davantage et gardent un cœur tendre.",
    },
    {
      title: "Au rhum",
      text: "Remplacez la fleur d’oranger par 2 cuillères à soupe de rhum ambré. La friture en évapore une grande partie, mais pas tout : évitez cette version pour les enfants et les femmes enceintes.",
    },
    {
      title: "À l’orange",
      text: "Remplacez le zeste de citron par celui d’une orange non traitée, et gardez la fleur d’oranger. Le parfum est plus doux, moins vif.",
    },
  ],
  storage:
    "Les bugnes fines se gardent 3 jours dans une boîte en métal fermée, à température ambiante, de préférence sans sucre glace. Saupoudrez-les au moment de servir. Évitez le réfrigérateur : l’humidité les ramollit.",
  pairing: "Un chocolat chaud épais, ou un cidre doux pour les grands.",
  faq: [
    {
      q: "Quelle température d’huile pour frire des bugnes ?",
      a: "Entre 170 et 180 °C. En dessous, les bugnes absorbent l’huile et deviennent grasses ; au-dessus de 190 °C, elles brunissent avant d’avoir gonflé et l’huile se dégrade. La température baisse à chaque fournée : contrôlez-la entre deux.",
    },
    {
      q: "Comment savoir si l’huile est chaude sans thermomètre ?",
      a: "Jetez-y un petit morceau de pâte. S’il remonte aussitôt, entouré de petites bulles, et dore en une minute environ, l’huile est prête. S’il reste au fond, elle est trop froide ; s’il brunit en quelques secondes, elle est trop chaude.",
    },
    {
      q: "Quelle huile utiliser pour les bugnes ?",
      a: "Une huile neutre qui supporte la chaleur : tournesol ou arachide. Si vous servez des invités, prévenez-les en cas d’huile d’arachide, à cause des allergies. Évitez les huiles fragiles comme celle de noix, et le beurre, qui brûle bien avant 170 °C.",
    },
    {
      q: "Que faire si l’huile prend feu ?",
      a: "Coupez le feu, couvrez la casserole avec un couvercle ou une couverture anti-feu, et ne la déplacez pas. Ne jetez jamais d’eau dessus : elle se vaporise d’un coup et projette l’huile enflammée. Si le feu ne s’éteint pas, sortez et appelez le 18 ou le 112.",
    },
    {
      q: "Bugnes, merveilles, oreillettes : quelle différence ?",
      a: "Ce sont des cousines : des beignets de pâte aux œufs, frits et sucrés, préparés pour le carnaval. On dit bugnes à Lyon et dans sa région, merveilles dans le Sud-Ouest, oreillettes en Provence et en Languedoc. Les parfums et l’épaisseur varient d’une recette à l’autre.",
    },
    {
      q: "Comment garder les bugnes croustillantes ?",
      a: "Dans une boîte en métal bien fermée, à température ambiante, jusqu’à 3 jours. Sucrez-les seulement au moment de servir, car le sucre glace capte l’humidité. Si elles ont ramolli, 3 minutes au four à 150 °C leur rendent du croquant.",
    },
  ],
  nutrition: {
    calories: 355,
    protein: 6,
    fat: 20,
    saturatedFat: 6,
    carbs: 38,
    sugar: 10,
    fiber: 1,
    sodium: 100,
  },
  annotations: {
    hero: "étalée à 1 mm, pas plus",
    detail: "sucrées tièdes, jamais brûlantes",
  },
  images: {
    heroAlt: "Gros plan sur des bugnes lyonnaises dorées et cloquées, généreusement saupoudrées de sucre glace",
    detailAlt: "Bugnes fines et croustillantes empilées sur un plateau, couvertes de sucre glace",
    credits: {
      hero: {
        photographer: "Benoît Prieur",
        url: "https://commons.wikimedia.org/w/index.php?curid=101616304",
        source: "Wikimedia Commons",
        license: "CC0",
      },
      detail: {
        photographer: "Ji-Elle",
        url: "https://commons.wikimedia.org/w/index.php?curid=47161526",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#D69A3C",
    onAccent: "#1B1712",
    ink: "#85570F",
    tint: "#FAF0DE",
    deep: "#1E1407",
    focus: "50% 50%",
  },
});
