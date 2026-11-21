import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "shakshuka",
  title: "Shakshuka",
  seoTitle: "Shakshuka : œufs cuits dans une sauce tomate épicée",
  tagline: "Les œufs cuisent dans la sauce.",
  description:
    "Shakshuka pour 4 : poivrons, oignon et tomates réduits au cumin et au paprika, puis 8 œufs cuits 6 à 8 minutes à couvert, jaunes coulants. 55 minutes.",
  summary:
    "Pour 4 personnes, faites fondre 1 oignon et 2 poivrons dans l’huile d’olive, parfumez d’ail, de cumin, de paprika et de piment, puis laissez réduire 800 g de tomates concassées 15 à 20 minutes jusqu’à obtenir une sauce épaisse. Creusez 8 puits, cassez-y les œufs et laissez cuire 6 à 8 minutes à couvert et à feu doux : les blancs sont pris, les jaunes encore coulants. Comptez 55 minutes en tout, avec du pain pour saucer.",
  intro: [
    "La shakshuka, ou chakchouka, ce sont des œufs qu’on fait cuire directement dans une sauce de tomates et de poivrons relevée au cumin et au paprika. On la pose au milieu de la table dans sa poêle, avec du pain, et chacun se sert.",
    "Elle rate quand on va trop vite sur la sauce. Encore liquide, elle noie les œufs : les blancs s’étalent dans un bouillon rouge, et le temps que le dessus prenne, les jaunes ont durci.",
    "Laissez donc réduire jusqu’à ce qu’une cuillère trace un sillon au fond, puis passez à feu doux et couvrez. Le couvercle fait prendre le dessus des blancs sans toucher aux jaunes.",
  ],
  category: "Plat",
  cuisine: "Maghrébine",
  keywords: [
    "shakshuka",
    "chakchouka",
    "recette shakshuka",
    "recette chakchouka",
    "œufs à la sauce tomate",
    "œufs pochés sauce tomate poivrons",
    "shakshuka feta",
    "temps de cuisson œufs shakshuka",
  ],
  diet: ["vegetarian"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 15, cook: 40 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Toute l’année"],
  tags: [],
  equipment: [
    "sauteuse ou grande poêle de 28 cm avec couvercle",
    "petite tasse pour casser les œufs",
    "cuillère à soupe",
  ],
  ingredients: [
    {
      title: "La sauce",
      items: [
        { qty: 3, unit: "cas", name: "huile d’olive", step: 1 },
        { qty: 1, name: "oignon jaune", plural: "oignons jaunes", note: "environ 150 g, émincé", step: 1 },
        { qty: 2, name: "poivron rouge", plural: "poivrons rouges", note: "en lanières de 1 cm", step: 1 },
        { qty: 3, unit: "gousse", name: "ail", note: "haché", step: 1 },
        { qty: 1, unit: "cac", name: "cumin moulu", step: 0.5 },
        { qty: 2, unit: "cac", name: "paprika doux", step: 0.5 },
        {
          qty: 0.5,
          unit: "cac",
          name: "piment en poudre",
          note: "cayenne, ou piment d’Espelette pour moins de force",
          step: 0.25,
        },
        {
          qty: 800,
          unit: "g",
          name: "tomates concassées en conserve",
          note: "ou 1 kg de tomates fraîches très mûres, pelées",
          step: 50,
        },
        { qty: 1, unit: "cac", name: "sel fin", note: "rase", step: 0.5 },
        { qty: 4, unit: "tour", name: "poivre", step: 1 },
        { qty: 1, unit: "cac", name: "sucre", note: "si les tomates sont acides", optional: true, step: 0.5 },
      ],
    },
    {
      title: "Les œufs et le service",
      items: [
        { qty: 8, name: "œuf", plural: "œufs", note: "frais", step: 1 },
        { qty: 100, unit: "g", name: "feta", optional: true, step: 10 },
        { qty: 0.5, unit: "botte", name: "coriandre ou persil plat", optional: true, step: 0.5 },
        { qty: 8, unit: "tranche", name: "pain de campagne", note: "ou des pitas", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "La sauce",
      steps: [
        {
          title: "Préparer les légumes",
          text: "Pelez et émincez l’oignon. Épépinez les poivrons, retirez les parties blanches et taillez-les en lanières de 1 cm. Hachez l’ail.",
        },
        {
          title: "Fondre oignon et poivrons",
          text: "Faites chauffer l’huile d’olive dans la sauteuse à feu moyen. Ajoutez l’oignon, les poivrons et une pincée du sel, et laissez fondre 10 à 12 minutes en remuant souvent. Les poivrons doivent plier sans résister et l’oignon devenir blond, sans brunir.",
          timer: { minutes: 12, label: "Oignon et poivrons" },
        },
        {
          title: "Réveiller les épices",
          text: "Ajoutez l’ail, le cumin, le paprika et le piment. Remuez sans arrêt une petite minute, jusqu’à ce que la cuisine sente fort le cumin et que l’huile se teinte de rouge.",
          tip: "Le paprika brûle vite et devient amer. S’il commence à attacher, versez aussitôt les tomates.",
        },
        {
          title: "Réduire la sauce",
          text: "Versez les tomates, salez, poivrez et laissez frémir 15 à 20 minutes à découvert, feu moyen-doux, en remuant de temps en temps. La sauce est prête quand une cuillère tirée au fond laisse un sillon qui se referme lentement. Goûtez : si elle est acide, ajoutez le sucre.",
          timer: { minutes: 20, label: "Réduction de la sauce" },
          tip: "Prenez le temps de bien réduire. Une sauce épaisse porte les œufs ; une sauce liquide les noie et allonge leur cuisson.",
        },
      ],
    },
    {
      title: "Les œufs",
      steps: [
        {
          title: "Creuser les puits",
          text: "Rectifiez l’assaisonnement de la sauce maintenant, après ce sera trop tard. Baissez sur feu doux. Avec le dos de la cuillère, creusez 8 puits bien espacés. Cassez chaque œuf dans la tasse, puis faites-le glisser dans un puits. Salez légèrement les blancs.",
          tip: "Passer par une tasse évite les éclats de coquille dans la sauce, et si un jaune crève, l’œuf part pour une autre recette.",
        },
        {
          title: "Cuire à couvert",
          text: "Couvrez et laissez cuire 6 à 8 minutes à feu doux, la sauce doit juste frémir autour des œufs. Regardez dès 6 minutes : les blancs sont prêts quand ils sont opaques jusqu’au bord du jaune, et les jaunes restent brillants et tremblent quand on secoue la poêle.",
          timer: { minutes: 7, label: "Œufs à couvert" },
        },
        {
          title: "Garnir et servir",
          text: "Émiettez la feta sur la sauce, parsemez d’herbes ciselées et donnez un tour de poivre. Servez dans la sauteuse, au milieu de la table, avec le pain grillé pour saucer.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Blancs pris, jaunes coulants",
      text: "Le blanc commence à prendre vers 62 °C, le jaune épaissit vers 65 °C et se fige vers 70 °C. Si le jaune reste coulant alors que le blanc est cuit, c’est une question de position : le blanc touche la sauce brûlante, le jaune est au-dessus et ne reçoit que la vapeur du couvercle. À feu doux, cet écart dure quelques minutes ; à feu vif, quelques secondes.",
    },
    {
      title: "Pourquoi réduire la sauce",
      text: "En frémissant à découvert, la sauce perd une partie de son eau : les sucres et les acides de la tomate se concentrent, et les fibres de la pulpe forment une texture épaisse qui tient les œufs en place au lieu de les laisser s’étaler.",
    },
    {
      title: "Les épices dans l’huile",
      text: "Une bonne part des arômes du cumin et du paprika se dissout dans la matière grasse, pas dans l’eau. Une minute dans l’huile chaude avant les tomates les libère et les répartit dans toute la sauce. Le paprika contient des sucres qui caramélisent puis brûlent vite, d’où la minute, pas plus.",
    },
  ],
  tips: [
    "Avec des tomates fraîches, pelez-les (incisées, 30 secondes dans l’eau bouillante) et comptez 10 minutes de réduction en plus : elles contiennent plus d’eau.",
    "Si vous ajoutez la feta, salez la sauce un peu moins. Elle apporte son sel au moment de servir.",
    "La sauce se prépare la veille. Réchauffez-la jusqu’au frémissement dans la sauteuse, puis creusez les puits : le dîner est prêt en 10 minutes.",
    "Pas de couvercle à la bonne taille ? Une plaque de four ou une grande assiette posée sur la sauteuse fait le même travail.",
  ],
  mistakes: [
    "Une sauce trop liquide : les blancs s’étalent et les jaunes durcissent avant que le dessus prenne. Faites-la réduire avant d’y mettre les œufs, jamais après.",
    "Garder un feu vif après avoir ajouté les œufs : le fond attache et les jaunes cuisent trop vite. Feu doux et couvercle, rien d’autre.",
    "Des épices qui brûlent : la sauce devient âcre et le reste. Ajoutez-les sur feu moyen, avec l’ail, et ne les laissez qu’une minute.",
    "Oublier de goûter avant les œufs : une fois qu’ils sont en place, on ne peut plus remuer pour rectifier sans crever les jaunes.",
  ],
  variations: [
    {
      title: "Aux merguez",
      text: "Faites dorer 4 merguez coupées en tronçons au début, retirez-les, puis faites fondre l’oignon et les poivrons dans leur graisse. Remettez-les avec les tomates : elles cuisent 20 minutes dans la sauce.",
    },
    {
      title: "Aux pois chiches",
      text: "Ajoutez 240 g de pois chiches cuits et égouttés en même temps que les tomates. La sauce devient un vrai plat complet, il faut un peu moins de pain.",
    },
    {
      title: "Verte",
      text: "Remplacez poivrons et tomates par 2 courgettes en dés et 300 g d’épinards, fondus 10 minutes avec l’oignon, puis 10 cl de crème. Gardez le cumin, oubliez le paprika. La cuisson des œufs ne change pas.",
    },
  ],
  storage:
    "Avec ses œufs, elle se mange tout de suite : les jaunes durcissent en refroidissant et au réchauffage. Les restes se gardent 24 h au frigo au maximum. La sauce seule se garde 3 jours au frigo ou 3 mois au congélateur.",
  pairing:
    "Du pain pour saucer, une salade de concombre au yaourt et à la menthe, et un rosé bien frais ou un thé à la menthe.",
  faq: [
    {
      q: "Combien de temps cuire les œufs dans une shakshuka ?",
      a: "6 à 8 minutes à feu doux, couvercle posé, dans une sauce qui frémit à peine. Les blancs doivent être pris jusqu’au bord du jaune, les jaunes encore brillants. Pour des jaunes mi-cuits, comptez 10 minutes.",
    },
    {
      q: "Une shakshuka aux jaunes coulants est-elle sans risque ?",
      a: "Oui pour un adulte en bonne santé, avec des œufs frais et dans leur date. Pour une femme enceinte, un jeune enfant, une personne âgée ou immunodéprimée, cuisez les œufs jusqu’à ce que blancs et jaunes soient entièrement pris : environ 12 minutes à couvert, à feu doux.",
    },
    {
      q: "Peut-on faire une shakshuka avec des tomates fraîches ?",
      a: "Oui, avec 1 kg de tomates bien mûres, pelées et concassées. Comptez 10 minutes de réduction en plus, car elles rendent plus d’eau que la conserve. Hors saison, les tomates en conserve ont plus de goût.",
    },
    {
      q: "Peut-on préparer la shakshuka à l’avance ?",
      a: "Oui pour la sauce, qui se garde 3 jours au frigo. Au moment de servir, réchauffez-la jusqu’au frémissement, creusez les puits et faites cuire les œufs. Les œufs, eux, se cuisent toujours à la dernière minute.",
    },
    {
      q: "La shakshuka est-elle piquante ?",
      a: "Un peu, avec 1/2 cuillère à café de piment, et c’est réglable. Pour des enfants, supprimez le piment et gardez le paprika doux. Pour plus de feu, ajoutez 1 cuillère à café de harissa avec les tomates.",
    },
    {
      q: "Avec quoi servir une shakshuka ?",
      a: "Du pain avant tout, pour saucer : pain de campagne grillé, pita ou pain plat. Une salade verte ou une salade de concombre suffit à compléter le repas.",
    },
  ],
  nutrition: {
    calories: 520,
    protein: 26,
    fat: 24,
    saturatedFat: 8,
    carbs: 50,
    sugar: 11,
    fiber: 7,
    sodium: 1200,
  },
  annotations: {
    hero: "on la sert dans la poêle",
    detail: "blanc pris, jaune qui tremble",
  },
  images: {
    heroAlt:
      "Shakshuka vue de dessus dans une poêle noire : quatre œufs aux jaunes brillants dans la sauce tomate, du basilic et du pain",
    detailAlt:
      "Gros plan sur deux œufs cuits dans la sauce tomate d’une shakshuka, avec des morceaux de tomate et de piment vert",
    credits: {
      hero: {
        photographer: "Jarosław Ceborski jarson",
        url: "https://commons.wikimedia.org/wiki/File:Shakshuka_(Unsplash).jpg",
        source: "Wikimedia Commons",
        license: "CC0",
      },
      detail: {
        photographer: "Jeremy Keith from Brighton & Hove, United Kingdom",
        url: "https://commons.wikimedia.org/wiki/File:Shakshuka_(12149680454).jpg",
        source: "Wikimedia Commons",
        license: "CC BY 2.0",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#C8432B",
    onAccent: "#FFFFFF",
    ink: "#9E2F1C",
    tint: "#FBEDE8",
    deep: "#1D0C08",
    focus: "48% 75%",
  },
});
