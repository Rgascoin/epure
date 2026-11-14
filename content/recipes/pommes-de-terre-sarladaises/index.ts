import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "pommes-de-terre-sarladaises",
  title: "Pommes de terre sarladaises",
  seoTitle: "Pommes de terre sarladaises à la graisse de canard",
  tagline: "Le couvercle d’abord, l’ail en dernier.",
  description:
    "Pommes de terre sarladaises pour 4 : 1 kg de rondelles sautées dans 80 g de graisse de canard, 30 minutes à la poêle, ail et persil à la dernière minute.",
  summary:
    "Pour 4 personnes, coupez 1 kg de pommes de terre à chair ferme en rondelles de 3 mm, rincez-les et séchez-les, puis faites-les sauter dans 80 g de graisse de canard : 5 minutes à feu vif, 15 minutes à couvert pour les cuire, 10 minutes à découvert pour les dorer. L’ail et le persil hachés n’arrivent que pour les 2 dernières minutes. Comptez 50 minutes en tout.",
  intro: [
    "Les pommes de terre sarladaises viennent du Périgord et de ses canards : des rondelles sautées longuement dans la graisse, dorées sur les bords, fondantes au milieu, avec une persillade jetée au dernier moment. On les sert avec un confit ou un magret, et on finit en général par racler la poêle.",
    "Elles ratent de deux façons. Des tranches mal séchées collent entre elles et cuisent à la vapeur sans jamais dorer. Un ail mis trop tôt noircit et rend tout amer.",
    "On procède donc en deux temps : sous le couvercle, elles cuisent à cœur dans leur propre vapeur ; poêle ouverte, elles dorent. L’ail et le persil n’arrivent que deux minutes avant la fin.",
  ],
  category: "Accompagnement",
  cuisine: "Française",
  keywords: [
    "pommes de terre sarladaises",
    "recette pommes de terre sarladaises",
    "pommes sarladaises",
    "pommes de terre à la graisse de canard",
    "pommes de terre sautées ail persil",
    "pommes de terre à la poêle",
    "accompagnement confit de canard",
    "accompagnement magret de canard",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 18, cook: 32 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["automne"],
  equipment: [
    "une grande poêle de 28 à 30 cm avec couvercle",
    "une mandoline ou un couteau bien aiguisé",
    "une large spatule",
    "un torchon propre",
  ],
  ingredients: [
    {
      items: [
        {
          qty: 1,
          unit: "kg",
          name: "pommes de terre à chair ferme",
          note: "charlotte, amandine ou belle de fontenay",
          step: 0.25,
        },
        { qty: 3, unit: "gousse", name: "ail", step: 1 },
        { qty: 20, unit: "g", name: "persil plat", note: "une petite botte", step: 5 },
        { qty: 80, unit: "g", name: "graisse de canard", note: "environ 5 cas", step: 10 },
        { name: "sel fin" },
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
          text: "Épluchez les pommes de terre et coupez-les en rondelles de 3 mm, à la mandoline ou au couteau. Visez une épaisseur régulière : les tranches fines brûlent pendant que les épaisses restent crues.",
        },
        {
          title: "Rincer et sécher",
          text: "Rincez les rondelles dans une grande bassine d’eau froide en les brassant, changez l’eau et recommencez jusqu’à ce qu’elle reste claire. Étalez-les sur un torchon propre et séchez-les soigneusement, dessus et dessous.",
          tip: "Plus elles sont sèches, moins la graisse crache et plus vite elles dorent. Prenez le temps de les tamponner une à une s’il le faut.",
        },
        {
          title: "Préparer la persillade",
          text: "Pelez l’ail, retirez le germe s’il y en a un et hachez-le finement. Effeuillez et hachez le persil. Gardez les deux à côté de la poêle.",
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Saisir dans la graisse",
          text: "Faites chauffer la graisse de canard dans la poêle à feu vif, jusqu’à ce qu’une rondelle posée dedans grésille aussitôt. Ajoutez toutes les pommes de terre, retournez-les à la spatule pour les enrober, et laissez-les saisir 5 minutes en les retournant une ou deux fois.",
          timer: { minutes: 5, label: "Saisir les pommes de terre" },
        },
        {
          title: "Cuire à couvert",
          text: "Baissez à feu moyen-doux, couvrez et laissez cuire 15 minutes. Toutes les 5 minutes, soulevez le couvercle et retournez délicatement les rondelles par grosses pelletées. Elles sont cuites quand la pointe d’un couteau traverse une tranche sans résistance.",
          timer: { minutes: 15, label: "Cuisson à couvert" },
          tip: "Retournez à la spatule, pas à la fourchette : à ce stade, les tranches tendres se cassent facilement.",
        },
        {
          title: "Dorer à découvert",
          text: "Retirez le couvercle, remontez à feu moyen et laissez dorer 10 minutes. Ne remuez que toutes les 2 à 3 minutes pour laisser une croûte se former. Elles sont prêtes quand les bords sont brun doré et frisent, et que le fond de la poêle chante. Salez.",
          timer: { minutes: 10, label: "Dorer à découvert" },
        },
        {
          title: "Ajouter la persillade",
          text: "Parsemez l’ail et le persil, mélangez et laissez cuire 2 minutes en remuant, juste le temps que l’ail embaume sans prendre de couleur. Poivrez et servez aussitôt, bien chaud.",
          timer: { minutes: 2, label: "Persillade" },
          tip: "Si l’ail commence à blondir, retirez la poêle du feu : la chaleur des pommes de terre suffit à finir.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi rincer les tranches",
      text: "En coupant la pomme de terre, on ouvre des cellules qui libèrent de l’amidon. Cette pellicule collante soude les tranches entre elles et au fond de la poêle, où elle brûle. Rincées, les rondelles restent séparées et dorent chacune de leur côté.",
    },
    {
      title: "Le couvercle, puis la poêle ouverte",
      text: "Sous le couvercle, l’eau des pommes de terre reste dans la poêle et les cuit à cœur à la vapeur, à une centaine de degrés. Une fois le couvercle retiré, cette eau s’évapore, la surface monte bien au-dessus de 100 °C dans la graisse et brunit grâce aux réactions de Maillard.",
    },
    {
      title: "Pourquoi l’ail brûle si vite",
      text: "Haché fin, l’ail offre beaucoup de surface et contient des sucres qui caramélisent vite dans une graisse chaude. En quelques secondes de trop, il passe du blond au brun et devient amer. Ajouté en fin de cuisson, il parfume sans brûler.",
    },
    {
      title: "Chair ferme contre chair farineuse",
      text: "Les variétés à chair ferme contiennent moins d’amidon que les farineuses, et leurs cellules restent soudées à la cuisson. Les tranches gardent leur forme pendant 30 minutes de poêle, là où une bintje s’effrite.",
    },
  ],
  tips: [
    "Si vous venez de cuire un magret, utilisez la graisse que vous avez récupérée, complétée si besoin par de la graisse en bocal pour arriver à 80 g.",
    "Prenez une poêle assez grande pour que les rondelles ne fassent pas plus de trois ou quatre épaisseurs. Au-delà, celles du dessus restent pâles ; mieux vaut deux poêles.",
    "Ne salez qu’au moment de dorer : du sel dès le départ fait sortir l’eau des tranches et retarde la coloration.",
    "Un couvercle en verre permet de surveiller la cuisson sans laisser s’échapper la vapeur à chaque coup d’œil.",
  ],
  mistakes: [
    "Mettre des tranches encore humides dans la graisse : elle crache, les pommes de terre collent et cuisent à la vapeur. Séchez-les toujours au torchon.",
    "Ajouter l’ail avec les pommes de terre : il noircit bien avant la fin et donne un goût amer qu’on ne rattrape pas. S’il a brûlé, mieux vaut repartir d’une nouvelle persillade à part.",
    "Laisser le feu trop fort sous le couvercle : le dessous brûle avant que le cœur soit cuit. Feu moyen-doux, et on retourne toutes les 5 minutes.",
    "Remuer sans arrêt à découvert : aucune croûte n’a le temps de se former et les tranches se cassent. Laissez-les tranquilles 2 à 3 minutes entre deux passages de spatule.",
  ],
  variations: [
    {
      title: "Aux cèpes",
      text: "Faites sauter 300 g de cèpes en lamelles 5 minutes dans 1 cas de graisse de canard, à part, à feu vif. Ajoutez-les aux pommes de terre en même temps que la persillade.",
    },
    {
      title: "À la graisse d’oie",
      text: "Remplacez la graisse de canard par le même poids de graisse d’oie. Le goût est un peu plus doux, la cuisson ne change pas.",
    },
    {
      title: "Sans graisse animale",
      text: "Remplacez la graisse de canard par 6 cas d’huile de tournesol et ajoutez 20 g de beurre avec la persillade. Les pommes de terre dorent aussi bien, avec un goût moins rond.",
    },
  ],
  storage:
    "Les pommes de terre sarladaises se gardent 2 jours au réfrigérateur, en boîte fermée. Réchauffez-les à la poêle, à feu moyen et sans couvercle, 8 à 10 minutes : elles recroustillent un peu. Au micro-ondes, elles ramollissent.",
  pairing:
    "Un confit de canard ou un magret, et une salade de mâche bien vinaigrée pour couper le gras. Dans le verre, un bergerac ou un cahors.",
  faq: [
    {
      q: "Quelle pomme de terre pour des pommes de terre sarladaises ?",
      a: "Une variété à chair ferme : charlotte, amandine ou belle de fontenay. Elle garde sa forme pendant les 30 minutes de poêle. Les variétés farineuses comme la bintje s’effritent et finissent en purée dorée.",
    },
    {
      q: "Combien de graisse de canard pour 1 kg de pommes de terre ?",
      a: "80 g, soit environ 5 cuillères à soupe. C’est assez pour enrober chaque tranche et faire friser les bords, sans qu’elles baignent. Si la poêle paraît sèche pendant la cuisson à découvert, ajoutez une cuillère.",
    },
    {
      q: "Faut-il précuire les pommes de terre sarladaises ?",
      a: "Non, pas avec cette méthode. Les rondelles crues cuisent 15 minutes à couvert dans leur vapeur, puis dorent à découvert. Précuites à l’eau, elles deviendraient fragiles et se casseraient à chaque coup de spatule.",
    },
    {
      q: "Pourquoi mes pommes de terre collent à la poêle ?",
      a: "À cause de l’amidon de surface ou d’une graisse pas assez chaude. Rincez les tranches jusqu’à ce que l’eau reste claire, séchez-les bien et attendez que la graisse grésille avant de les mettre. Les premières minutes, laissez-les se décoller seules en dorant.",
    },
    {
      q: "Peut-on préparer les pommes de terre sarladaises à l’avance ?",
      a: "Oui, jusqu’à la fin de la cuisson à couvert. Laissez-les dans la poêle hors du feu, 1 heure au plus. Au moment de servir, faites-les dorer 10 minutes à découvert et ajoutez la persillade.",
    },
    {
      q: "Peut-on remplacer la graisse de canard ?",
      a: "Oui, par de la graisse d’oie, la plus proche, ou par 6 cuillères à soupe d’huile de tournesol avec 20 g de beurre ajoutés à la fin. Le résultat reste croustillant, mais il perd ce goût rond du Sud-Ouest.",
    },
  ],
  nutrition: {
    calories: 330,
    protein: 5,
    fat: 15,
    saturatedFat: 5,
    carbs: 42,
    sugar: 1,
    fiber: 4,
    sodium: 350,
  },
  annotations: { hero: "chair ferme, les tranches se tiennent", detail: "bords dorés, cœur fondant" },
  images: {
    heroAlt:
      "Pommes de terre sarladaises en rondelles brillantes de graisse de canard, dorées par endroits, avec des éclats bien rissolés",
    detailAlt:
      "Rondelles de pommes de terre dorées et croustillantes sur les bords, posées dans un plat à motifs bleus",
    credits: {
      hero: {
        photographer: "Arnaud 25",
        url: "https://commons.wikimedia.org/wiki/File:Pommes_de_terre_sarladaises_02.jpg",
        source: "Wikimedia Commons",
        license: "CC0",
      },
      detail: {
        photographer: "MemorySlashVision",
        url: "https://www.pexels.com/photo/fried-potato-slices-on-food-tray-6844667/",
      },
    },
  },
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  hero,
  detail,
  theme: {
    accent: "#D9A21B",
    onAccent: "#1B1712",
    ink: "#7A5500",
    tint: "#FAF2DC",
    deep: "#1A1306",
    focus: "45% 50%",
  },
});
