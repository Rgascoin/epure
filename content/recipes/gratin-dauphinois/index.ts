import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "gratin-dauphinois",
  title: "Gratin dauphinois",
  seoTitle: "Gratin dauphinois : la vraie recette, sans fromage",
  tagline: "Pas de fromage, et personne ne réclame.",
  description:
    "La vraie recette du gratin dauphinois, sans fromage : des pommes de terre fines cuites dans le lait et la crème à l’ail, puis 1 heure au four à 170 °C.",
  summary:
    "Pour 6 personnes, le gratin dauphinois se fait sans fromage : coupez 1,2 kg de pommes de terre en rondelles de 3 mm, sans les rincer, et faites-les frémir 10 minutes dans 50 cl de lait et 30 cl de crème avec 2 gousses d’ail, du sel et de la muscade. Versez le tout dans un plat frotté d’ail et beurré, enfournez 1 heure à 170 °C et laissez reposer 15 minutes.",
  intro: [
    "Le gratin dauphinois tient en peu de choses : des pommes de terre, du lait, de la crème, de l’ail et un peu de muscade. Il n’y a pas de fromage dans la version traditionnelle. Le fondant vient de l’amidon des pommes de terre, qui épaissit la crème en cuisant.",
    "Pour le réussir, on coupe des rondelles fines et régulières, on ne les rince surtout pas, et on les fait d’abord frémir dans le lait. Cette précuisson garantit que tout sera cuit en même temps ; le four n’a plus qu’à dorer le dessus, doucement.",
    "Ce qui peut rater : des pommes de terre encore fermes au centre, ou une crème qui tranche si le four est trop chaud. Comptez 25 minutes de préparation, 1 h 15 de cuisson et un quart d’heure de repos.",
  ],
  category: "Accompagnement",
  cuisine: "Française",
  keywords: [
    "gratin dauphinois",
    "recette gratin dauphinois",
    "vrai gratin dauphinois",
    "gratin dauphinois sans fromage",
    "gratin dauphinois traditionnel",
    "gratin dauphinois lait et crème",
    "gratin de pommes de terre à la crème",
    "gratin dauphinois facile",
    "quelle pomme de terre pour gratin dauphinois",
  ],
  diet: ["vegetarian", "glutenFree"],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 25, cook: 75, rest: 15 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  equipment: [
    "plat à gratin d’environ 30 × 20 cm (2 litres)",
    "mandoline ou grand couteau bien aiguisé",
    "grande casserole à fond épais",
    "spatule souple",
  ],
  ingredients: [
    {
      items: [
        {
          qty: 1200,
          unit: "g",
          name: "pommes de terre",
          note: "à chair fondante ou polyvalentes (bintje, monalisa)",
          step: 50,
        },
        { qty: 3, unit: "gousse", name: "ail", note: "dont 1 pour frotter le plat", step: 1 },
        { qty: 15, unit: "g", name: "beurre doux", note: "mou, pour le plat", step: 5 },
        { qty: 50, unit: "cl", name: "lait entier", step: 5 },
        { qty: 30, unit: "cl", name: "crème liquide entière", note: "30 % de matière grasse", step: 5 },
        { qty: 2, unit: "cac", name: "sel fin", step: 0.5 },
        { qty: 2, unit: "pincee", name: "noix de muscade râpée", step: 1 },
        { name: "poivre du moulin" },
      ],
    },
  ],
  method: [
    {
      title: "La préparation",
      steps: [
        {
          title: "Trancher les pommes de terre",
          text: "Lavez puis épluchez les pommes de terre, et coupez-les en rondelles de 3 mm, à la mandoline ou au couteau. Ne les rincez pas et ne les laissez pas tremper : l’amidon resté à leur surface va épaissir la crème. Gardez-les dans un torchon propre.",
          tip: "Lavez les pommes de terre avant de les éplucher, jamais après les avoir tranchées. C’est ce geste qui fait la texture du gratin.",
        },
        {
          title: "Préparer le plat",
          text: "Allumez le four à 170 °C, chaleur statique. Coupez une gousse d’ail en deux et frottez-en tout l’intérieur du plat, puis beurrez-le généreusement avec les 15 g de beurre. Hachez finement les 2 autres gousses.",
        },
        {
          title: "Frémir dans le lait",
          text: "Dans la grande casserole, versez le lait et la crème, ajoutez l’ail haché, le sel, la muscade et quelques tours de poivre. Ajoutez les rondelles et portez à frémissement sur feu moyen en remuant délicatement à la spatule, pour que rien n’attache. Baissez le feu et laissez frémir 10 minutes : le liquide épaissit et les rondelles deviennent souples, encore fermes au centre.",
          timer: { minutes: 10, label: "Frémissement au lait" },
          tip: "Goûtez le liquide à ce stade : il doit être franchement salé, presque trop. Les pommes de terre vont en absorber une bonne partie.",
        },
        {
          title: "Remplir le plat",
          text: "Versez les pommes de terre et leur crème dans le plat. Égalisez à la spatule en tassant légèrement : la crème doit arriver juste au niveau de la dernière couche, sans la noyer.",
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Cuire au four",
          text: "Enfournez à mi-hauteur pour 1 heure. Le gratin est prêt quand le dessus est doré par endroits, que la crème bouillonne doucement sur les bords et qu’une pointe de couteau traverse toutes les couches sans résistance.",
          timer: { minutes: 60, label: "Cuisson du gratin" },
          tip: "Si le dessus dore trop vite, posez une feuille d’aluminium dessus pour la fin. S’il reste pâle, passez-le 3 ou 4 minutes sous le gril, en surveillant.",
        },
        {
          title: "Laisser reposer",
          text: "Sortez le gratin et laissez-le reposer 15 minutes avant de le servir : la crème finit d’épaissir et les parts se tiennent au lieu de s’étaler dans l’assiette.",
          timer: { minutes: 15, label: "Repos du gratin" },
        },
      ],
    },
  ],
  science: [
    {
      title: "L’amidon fait la sauce",
      text: "Chauffé dans un liquide, l’amidon des pommes de terre gonfle et se gélifie, à partir de 60 °C environ. Celui qui reste à la surface des rondelles passe dans le lait et l’épaissit. Rincées, elles n’en libèrent presque plus, et la crème reste liquide.",
    },
    {
      title: "Pourquoi précuire dans le lait",
      text: "Au four, un plat rempli de liquide froid met longtemps à chauffer, et le centre cuit bien après les bords. En partant d’un mélange déjà frémissant, tout le gratin cuit au même rythme, et l’amidon a déjà commencé à lier la crème.",
    },
    {
      title: "Pourquoi la crème ne tranche pas",
      text: "Quand le lait bout longtemps, ses protéines s’agglomèrent et forment des grains. La crème entière, beaucoup plus grasse et proportionnellement moins riche en protéines, supporte l’ébullition sans trancher. Le mélange des deux et un four modéré donnent une sauce lisse.",
    },
  ],
  tips: [
    "Coupez toutes les rondelles à la même épaisseur : à 3 mm partout, elles cuisent ensemble. La mandoline est faite pour ça ; utilisez son poussoir.",
    "Râpez la muscade au dernier moment. Moulue d’avance, elle perd vite son parfum.",
    "Prenez de la crème liquide entière, pas de crème allégée : moins grasse, elle tranche plus facilement à la cuisson.",
    "Pour un repas de fête, cuisez-le le matin et réchauffez-le 25 minutes à 160 °C, couvert d’aluminium les 15 premières minutes. Il se découpe même plus proprement.",
  ],
  mistakes: [
    "Rincer les rondelles après les avoir coupées : l’amidon part dans l’évier et la crème reste liquide.",
    "Couper des rondelles épaisses ou irrégulières : certaines restent fermes quand les autres sont déjà fondantes.",
    "Cuire dans un four trop chaud : le lait bout à gros bouillons, tranche, et le dessus brûle avant que le centre soit cuit.",
    "Servir à la sortie du four : le gratin est encore coulant et s’étale dans l’assiette.",
  ],
  variations: [
    {
      title: "Avec du fromage",
      text: "Parsemez 80 g de comté ou de gruyère râpé sur le dessus avant d’enfourner. Le dessus gratine davantage. Ce n’est plus un dauphinois au sens strict, mais c’est très bon.",
    },
    {
      title: "Façon savoyarde",
      text: "Remplacez le lait et la crème par 60 cl de bouillon de volaille, sans précuisson : alternez les rondelles crues avec 150 g de beaufort râpé et comptez 1 h 15 à 180 °C. C’est alors un gratin savoyard, et il n’est plus végétarien.",
    },
    {
      title: "Plus léger",
      text: "Remplacez la crème par du lait entier, soit 80 cl de lait en tout, et baissez le four à 160 °C. Le gratin est moins riche et un peu moins fondant ; veillez à ce qu’il ne bouille pas trop fort.",
    },
  ],
  storage:
    "Il se garde 3 jours au réfrigérateur, filmé. Réchauffez-le au four à 160 °C, couvert d’aluminium, 20 à 25 minutes, ou par portion au micro-ondes.",
  pairing: "Avec une viande rôtie, un rouge de la vallée du Rhône, un crozes-hermitage ou un saint-joseph.",
  faq: [
    {
      q: "Met-on du fromage dans un gratin dauphinois ?",
      a: "Non, pas dans la recette traditionnelle : des pommes de terre, du lait, de la crème, de l’ail, de la muscade, du sel et du poivre. La version au fromage est une variante, très bonne d’ailleurs. Avec du bouillon et du beaufort, on parle plutôt de gratin savoyard.",
    },
    {
      q: "Quelles pommes de terre pour un gratin dauphinois ?",
      a: "Des variétés riches en amidon, à chair fondante ou polyvalentes, comme la bintje ou la monalisa : elles lient la crème et fondent à la cuisson. Les variétés très fermes, comme la charlotte ou la ratte, se tiennent bien mais donnent un gratin moins crémeux.",
    },
    {
      q: "Faut-il rincer les pommes de terre pour un gratin dauphinois ?",
      a: "Non, surtout pas une fois coupées. L’amidon qui reste à la surface des rondelles épaissit la crème ; rincées, elles donnent un gratin liquide. Lavez les pommes de terre entières avant de les éplucher, puis tranchez-les et utilisez-les telles quelles.",
    },
    {
      q: "Pourquoi mon gratin dauphinois a tranché ?",
      a: "Le four était trop chaud, ou le liquide trop maigre. Le lait qui bout longtemps forme des grains ; avec de la crème entière et un four à 170 °C, le risque est faible. Un gratin tranché reste bon à manger, il est juste moins lisse.",
    },
    {
      q: "Peut-on préparer un gratin dauphinois la veille ?",
      a: "Oui. Faites-le cuire entièrement, laissez-le refroidir, filmez-le et gardez-le au réfrigérateur. Le lendemain, réchauffez-le 25 minutes à 160 °C, couvert d’aluminium les 15 premières minutes. Il se tient même mieux à la découpe.",
    },
    {
      q: "Avec quoi servir un gratin dauphinois ?",
      a: "Avec une viande rôtie ou grillée : gigot d’agneau, côte de bœuf, rôti de porc ou poulet rôti. Une salade verte bien vinaigrée à côté équilibre la richesse de la crème.",
    },
  ],
  nutrition: {
    calories: 380,
    protein: 8,
    fat: 20,
    saturatedFat: 13,
    carbs: 40,
    sugar: 6,
    fiber: 3,
    sodium: 700,
  },
  annotations: {
    hero: "l’amidon fait la sauce",
    detail: "on ne rince pas les rondelles",
  },
  images: {
    heroAlt: "Gratin dauphinois doré par endroits dans un plat émaillé à bord bleu, parsemé de brins de romarin",
    detailAlt: "Gratin dauphinois avant cuisson : rondelles de pommes de terre crues dans la crème, plat émaillé bleu",
    credits: {
      hero: { photographer: "Golboo Maghooli", url: "https://www.pexels.com/photo/34985106/", source: "Pexels" },
      detail: { photographer: "Golboo Maghooli", url: "https://www.pexels.com/photo/34985385/", source: "Pexels" },
    },
  },
  datePublished: "2026-11-03",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#D9A441",
    onAccent: "#1b1712",
    ink: "#82590F",
    tint: "#FAF3E3",
    deep: "#19130A",
    focus: "35% 50%",
  },
});
