import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "soupe-de-potiron",
  title: "Soupe de potiron",
  seoTitle: "Soupe de potiron maison, épaisse sans crème",
  tagline: "Une pomme de terre suffit à l’épaissir.",
  description:
    "Soupe de potiron épluché, oignon et une pomme de terre, cuite dans peu de bouillon puis mixée. Sans crème, pour 6 personnes, prête en 55 minutes.",
  summary:
    "Pour 6 personnes, épluchez 1,3 kg de chair de potiron, faites suer un oignon dans 25 g de beurre, ajoutez le potiron et une pomme de terre de 200 g, puis 700 ml de bouillon seulement : la courge rend son eau en cuisant. Laissez frémir 25 minutes à couvert, mixez 2 minutes et ajustez la texture. Comptez 55 minutes en tout, dont 20 minutes d’épluchage et de découpe. La crème reste facultative.",
  intro: [
    "Le potiron n’est pas le potimarron. Sa peau est épaisse et dure, il faut l’enlever. Sa chair est plus claire, plus aqueuse, plus douce aussi, et elle donne une soupe légère qui a tendance à virer au bouillon si on ne la surveille pas.",
    "Le piège, c’est donc le liquide. On met moins de bouillon qu’on ne le croit, juste aux trois quarts des légumes, parce que le potiron va rendre son eau. Une pomme de terre farineuse apporte le corps que la crème donne d’habitude.",
    "Et si vous avez le four allumé, faites rôtir les cubes avant : la soupe prend un goût plus profond, presque caramélisé. C’est dans les variantes.",
  ],
  category: "Entrée",
  cuisine: "Française",
  keywords: [
    "soupe de potiron",
    "recette soupe de potiron",
    "soupe de potiron sans crème",
    "soupe potiron pomme de terre",
    "soupe de potiron facile",
    "soupe de citrouille",
    "faut-il éplucher le potiron",
    "soupe de potiron rôti",
  ],
  diet: ["vegetarian"],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 20, cook: 35 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["halloween", "automne", "hiver"],
  equipment: [
    "grand couteau de chef",
    "faitout de 4 l avec couvercle",
    "mixeur plongeant ou blender",
  ],
  ingredients: [
    {
      title: "La soupe",
      items: [
        {
          qty: 1300,
          unit: "g",
          name: "potiron",
          note: "chair épluchée et épépinée, soit une tranche d’environ 1,8 kg",
          step: 50,
        },
        { qty: 1, name: "oignon jaune", plural: "oignons jaunes", note: "environ 150 g", step: 1 },
        {
          qty: 1,
          name: "pomme de terre farineuse",
          plural: "pommes de terre farineuses",
          note: "environ 200 g, type bintje",
          step: 1,
        },
        { qty: 25, unit: "g", name: "beurre", step: 5 },
        { qty: 0.5, unit: "cac", name: "sel fin", step: 0.5 },
        {
          qty: 700,
          unit: "ml",
          name: "bouillon de légumes",
          note: "chaud, plus un peu d’eau chaude pour ajuster",
          step: 50,
        },
        { qty: 1, unit: "pincee", name: "noix de muscade râpée", step: 1 },
        { name: "poivre noir" },
      ],
    },
    {
      title: "Pour servir",
      items: [
        { qty: 100, unit: "g", name: "crème fraîche épaisse", optional: true, step: 10 },
        { qty: 0.5, unit: "botte", name: "ciboulette", optional: true, step: 0.5 },
      ],
    },
  ],
  method: [
    {
      title: "Préparation",
      steps: [
        {
          title: "Éplucher le potiron",
          text: "Coupez la tranche en quartiers de 5 cm de large. Posez chaque quartier sur le flanc et retirez la peau au grand couteau, en suivant la courbe de haut en bas. Grattez les graines et les filaments à la cuillère, puis taillez la chair en cubes de 3 cm.",
          tip: "L’économe glisse sur cette peau épaisse. Un couteau de chef et un quartier bien stable sont plus sûrs.",
        },
        {
          title: "Couper le reste",
          text: "Émincez l’oignon. Épluchez la pomme de terre et coupez-la en cubes de 2 cm, un peu plus petits que le potiron, pour qu’elle soit cuite en même temps.",
        },
        {
          title: "Faire suer l’oignon",
          text: "Faites fondre le beurre dans le faitout à feu moyen-doux. Ajoutez l’oignon et laissez-le suer 8 minutes en remuant de temps en temps, jusqu’à ce qu’il soit translucide et tendre, sans aucune coloration.",
          timer: { minutes: 8, label: "Oignon translucide" },
        },
        {
          title: "Enrober les légumes",
          text: "Ajoutez le potiron, la pomme de terre et le sel. Remuez 3 minutes à feu moyen : les cubes se couvrent de beurre et commencent à rendre un peu de jus au fond du faitout.",
          timer: { minutes: 3, label: "Légumes enrobés" },
        },
        {
          title: "Mouiller sans noyer",
          text: "Versez le bouillon chaud : il doit arriver aux trois quarts des légumes, pas au-dessus. Portez à frémissement, couvrez et laissez cuire 25 minutes, jusqu’à ce qu’un cube de potiron s’écrase sans effort contre la paroi avec le dos d’une cuillère.",
          timer: { minutes: 25, label: "Cuisson du potiron" },
          tip: "Au bout de 10 minutes, le potiron a rendu son eau et baigne dans le liquide. N’ajoutez rien avant d’avoir mixé.",
        },
        {
          title: "Mixer",
          text: "Hors du feu, mixez au mixeur plongeant pendant 2 minutes, jusqu’à ce qu’il ne reste ni morceau ni filament. Au blender, ne remplissez le bol qu’à moitié et tenez le couvercle avec un torchon : la vapeur pousse.",
          timer: { minutes: 2, label: "Mixage" },
        },
        {
          title: "Ajuster la texture",
          text: "La soupe doit napper le dos d’une cuillère. Trop épaisse, allongez-la d’eau chaude, 50 ml à la fois. Trop liquide, laissez-la réduire à découvert et à feu moyen 5 à 10 minutes en remuant. Goûtez, puis poivrez, salez si besoin et ajoutez la muscade.",
          timer: { minutes: 10, label: "Réduction si trop liquide" },
        },
        {
          title: "Servir chaud",
          text: "Servez dans des bols chauds. Si vous voulez de la crème, posez-en une cuillerée au centre de chaque bol plutôt que dans la casserole, et parsemez de ciboulette ciselée.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi on épluche celui-ci",
      text: "La peau du potiron est épaisse, dure et fibreuse. Même après une longue cuisson, elle ne se mixe pas finement et laisse des paillettes vertes qui accrochent en bouche. Celle du potimarron, fine et tendre, se fond dans la soupe : c’est toute la différence entre les deux courges.",
    },
    {
      title: "La pomme de terre épaissit",
      text: "L’amidon de la pomme de terre gonfle et se gélifie dans le liquide chaud. Une fois mixé, il lie la soupe et lui donne une texture veloutée sans matière grasse ajoutée, là où la chair aqueuse du potiron seule donnerait un liquide qui se sépare dans l’assiette.",
    },
    {
      title: "Le sel fait sortir l’eau",
      text: "Saler les cubes avant de mouiller attire l’eau hors des cellules par osmose. Le potiron commence à cuire dans son propre jus, ce qui concentre son goût et explique pourquoi un bouillon à mi-hauteur suffit.",
    },
  ],
  tips: [
    "Au marché, choisissez une tranche à chair orange vif, serrée et brillante. Une chair pâle et filandreuse donne une soupe fade.",
    "Gardez les chutes de chair autour des graines : grattées à la cuillère, elles vont dans la soupe, seuls les filaments partent.",
    "Salez peu au départ et rectifiez à la fin. Si vous devez faire réduire, le sel se concentre.",
    "Pour une soupe plus douce encore, remplacez le bouillon par de l’eau et 1 cuillère à café de sel : le goût du potiron ressort davantage.",
  ],
  mistakes: [
    "Couvrir les légumes de bouillon : le potiron rend son eau et la soupe devient pâle et liquide. Laissez réduire à découvert ou ajoutez une petite pomme de terre cuite avant de remixer.",
    "Laisser des morceaux de peau verte : ils ne se mixent pas et restent en paillettes dures. Repassez le couteau sur les quartiers avant de couper les cubes.",
    "Faire colorer l’oignon : il donne une note brûlée qui couvre la douceur du potiron. Restez à feu moyen-doux, quitte à attendre deux minutes de plus.",
    "Mixer trop vite : les fibres du potiron restent en filaments. Deux minutes pleines au mixeur plongeant, en balayant tout le fond.",
  ],
  variations: [
    {
      title: "Potiron rôti",
      text: "Mélangez les cubes de potiron avec 2 cuillères à soupe d’huile d’olive et le sel, étalez-les sur une plaque et rôtissez-les 35 à 40 minutes à 200 °C, jusqu’à ce que les bords brunissent. Faites ensuite suer l’oignon, ajoutez potiron rôti, pomme de terre et 600 ml de bouillon, et ne laissez frémir que 15 minutes avant de mixer.",
    },
    {
      title: "Au lait, à l’ancienne",
      text: "Cuisez les légumes dans 400 ml d’eau seulement, mixez, puis ajoutez 300 ml de lait entier et réchauffez 5 minutes sans faire bouillir. La soupe est plus pâle, plus douce, avec un goût de lait qui va bien aux enfants.",
    },
    {
      title: "Avec des lardons",
      text: "Faites dorer 150 g de lardons fumés à sec dans une poêle pendant 6 à 8 minutes, égouttez-les sur du papier et parsemez-en les bols au moment de servir. Diminuez alors le sel de la soupe.",
    },
  ],
  storage:
    "Laissez-la tiédir, puis mettez-la au réfrigérateur dans une boîte fermée dans les 2 heures : elle se garde 3 jours. Elle se congèle 3 mois, sans la crème. Réchauffez-la à feu doux en remuant jusqu’à frémissement, et ne recongelez pas une soupe décongelée.",
  pairing:
    "Des croûtons frottés à l’ail, ou une tartine de pain de campagne grillée avec un peu de comté fondu dessus.",
  faq: [
    {
      q: "Faut-il éplucher le potiron pour faire une soupe ?",
      a: "Oui. Sa peau est épaisse et fibreuse, elle ne se mixe pas et laisse des paillettes dures. Coupez la courge en quartiers et retirez la peau au grand couteau, quartier posé sur le flanc. Seul le potimarron, dont la peau est fine, se cuisine sans épluchage.",
    },
    {
      q: "Quelle quantité de potiron pour 6 personnes ?",
      a: "1,3 kg de chair, soit une tranche d’environ 1,8 kg avant épluchage. La peau, les graines et les filaments représentent à peu près un quart du poids. Avec une pomme de terre et un oignon, cela donne six bols généreux.",
    },
    {
      q: "Peut-on faire une soupe de potiron sans crème ?",
      a: "Oui, et c’est la version de cette recette. La pomme de terre apporte l’amidon qui lie la soupe. La crème se rajoute dans le bol, pour ceux qui en veulent, sans changer le reste.",
    },
    {
      q: "Pourquoi ma soupe de potiron est-elle trop liquide ?",
      a: "Parce que le potiron rend beaucoup d’eau en cuisant. Si elle est déjà mixée, laissez-la réduire à découvert 5 à 10 minutes à feu moyen en remuant. La prochaine fois, versez le bouillon aux trois quarts des légumes seulement.",
    },
    {
      q: "Peut-on utiliser une citrouille d’Halloween ?",
      a: "Oui, si elle n’a pas été sculptée. Une citrouille creusée et restée plusieurs heures à température ambiante ne se mange plus. Les citrouilles vendues pour être sculptées ont souvent une chair plus filandreuse et plus fade : prévoyez de mixer plus longtemps et d’assaisonner davantage.",
    },
    {
      q: "Peut-on congeler la soupe de potiron ?",
      a: "Oui, 3 mois, de préférence sans crème. Faites-la décongeler une nuit au réfrigérateur, puis réchauffez-la à feu doux en remuant. Un coup de mixeur rattrape la texture si elle s’est un peu séparée.",
    },
  ],
  nutrition: {
    calories: 125,
    protein: 3,
    fat: 4,
    saturatedFat: 2,
    carbs: 18,
    sugar: 7,
    fiber: 4,
    sodium: 600,
  },
  annotations: {
    hero: "le bouillon aux trois quarts",
    detail: "la crème, dans le bol",
  },
  images: {
    heroAlt:
      "Soupe de potiron orange et lisse dans une assiette creuse blanche, avec un peu de persil au centre et une tranche de pain grillé",
    detailAlt:
      "Soupe de potiron en gros plan avec une cuillerée de crème et quelques gouttes de sauce verte, une cuillère sur le côté",
    credits: {
      hero: {
        photographer: "Harikrishnan N",
        url: "https://commons.wikimedia.org/wiki/File:Moroccan_Roasted_Pumpkin_Soup_-_The_Fat_Chef,_Bangalore_-_Karnataka_-_PXL7762.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
      detail: {
        photographer: "Emnamizouni",
        url: "https://commons.wikimedia.org/wiki/File:Pumpkin_soup_.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#E8890C",
    onAccent: "#1B1712",
    ink: "#8A4A00",
    tint: "#FBF1E4",
    deep: "#1E1208",
    focus: "50% 50%",
  },
});
