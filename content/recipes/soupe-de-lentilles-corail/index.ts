import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "soupe-de-lentilles-corail",
  title: "Soupe de lentilles corail",
  seoTitle: "Soupe de lentilles corail au cumin, prête en 50 minutes",
  tagline: "Le citron se met à la fin.",
  description:
    "Une soupe de lentilles corail sans trempage : 250 g de lentilles, cumin, gingembre et tomate, mixées puis relevées au citron. Pour 4, en 50 minutes.",
  summary:
    "Pour 4 personnes, faites fondre un oignon et une carotte, ajoutez l’ail, le gingembre, 2 cuillerées à café de cumin et 2 cuillerées à soupe de concentré de tomate, puis 250 g de lentilles corail rincées et 1,2 l d’eau. Après 20 minutes de cuisson, mixez, ajoutez le lait de coco si vous le souhaitez, puis le jus d’un demi-citron hors du feu. Comptez 50 minutes en tout, sans trempage. La soupe est entièrement végétale.",
  intro: [
    "La lentille corail est la plus pressée des légumineuses. Vendue décortiquée et cassée, elle se passe de trempage et se défait toute seule en 20 minutes. C’est une soupe de mardi soir, faite avec ce qui traîne souvent au placard.",
    "Elle devient fade quand on jette les épices dans l’eau. Le cumin et le gingembre doivent d’abord chauffer une minute dans l’huile avec l’oignon, puis le concentré de tomate cuire jusqu’à prendre une couleur brique. Ces trois minutes-là donnent son goût à toute la casserole.",
    "Le citron arrive en dernier, hors du feu. Sans lui, la soupe reste un peu lourde, même bien épicée.",
  ],
  category: "Entrée",
  cuisine: "Française",
  keywords: [
    "soupe de lentilles corail",
    "recette soupe lentilles corail",
    "soupe lentilles corail lait de coco",
    "soupe de lentilles corail vegan",
    "velouté de lentilles corail",
    "soupe lentilles corail cumin",
    "soupe lentilles corail tomate",
    "soupe de lentilles corail sans trempage",
  ],
  diet: ["vegetarian", "vegan", "glutenFree", "lowLactose"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 15, cook: 35 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: ["passoire fine", "casserole à fond épais de 3 l", "mixeur plongeant", "petite casserole pour l’huile"],
  ingredients: [
    {
      title: "La soupe",
      items: [
        { qty: 250, unit: "g", name: "lentilles corail", step: 25 },
        { qty: 2, unit: "cas", name: "huile d’olive", step: 1 },
        { qty: 1, name: "oignon", plural: "oignons", note: "150 g environ, émincé", step: 1 },
        { qty: 1, name: "carotte", plural: "carottes", note: "en rondelles fines", step: 1 },
        { qty: 2, unit: "gousse", name: "ail", note: "hachées", step: 1 },
        { qty: 20, unit: "g", name: "gingembre frais", note: "râpé", step: 5 },
        { qty: 2, unit: "cac", name: "cumin en poudre", step: 0.5 },
        { qty: 2, unit: "cas", name: "concentré de tomate", step: 1 },
        { qty: 120, unit: "cl", name: "eau", note: "ou bouillon de légumes", step: 10 },
        { qty: 1, unit: "cac", name: "sel fin", note: "moitié moins avec du bouillon", step: 0.5 },
        { qty: 20, unit: "cl", name: "lait de coco", optional: true, step: 5 },
        { qty: 0.5, name: "citron", plural: "citrons", note: "le jus, plus des quartiers pour servir", step: 0.5 },
      ],
    },
    {
      title: "L’huile au paprika",
      items: [
        { qty: 2, unit: "cas", name: "huile d’olive", step: 1 },
        { qty: 1, unit: "cac", name: "paprika doux", step: 0.5 },
        { qty: 1, unit: "pincee", name: "piment d’Espelette", note: "ou piment de Cayenne", optional: true, step: 1 },
        { qty: 4, unit: "brin", name: "coriandre fraîche", optional: true, step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "La soupe",
      steps: [
        {
          title: "Rincer les lentilles",
          text: "Versez les lentilles dans la passoire et rincez-les sous l’eau froide en les remuant avec la main, jusqu’à ce que l’eau qui s’écoule soit presque claire. Inutile de les faire tremper.",
          tip: "Le rinçage enlève la poussière d’amidon qui fait mousser la soupe à l’ébullition.",
        },
        {
          title: "Faire fondre l’oignon",
          text: "Chauffez 2 cuillerées d’huile dans la casserole à feu moyen. Ajoutez l’oignon et la carotte avec une pincée de sel et laissez cuire 8 minutes en remuant de temps en temps, jusqu’à ce que l’oignon soit tendre et commence à blondir sur les bords.",
          timer: { minutes: 8, label: "Oignon et carotte" },
        },
        {
          title: "Chauffer les épices",
          text: "Ajoutez l’ail, le gingembre et le cumin, et remuez 1 minute, le temps que ça sente fort le cumin. Ajoutez le concentré de tomate et faites-le cuire 2 minutes en l’écrasant contre le fond, jusqu’à ce qu’il fonce et prenne une couleur brique.",
          timer: { minutes: 3, label: "Épices et tomate" },
          tip: "Si les épices attachent, ajoutez une cuillerée d’eau et grattez.",
        },
        {
          title: "Cuire les lentilles",
          text: "Ajoutez les lentilles, l’eau et le sel, et portez à ébullition. Retirez la mousse blanche avec une cuillère, puis baissez le feu et laissez frémir 20 minutes à demi couvert, en remuant le fond toutes les 5 minutes. Les lentilles doivent avoir perdu leur forme et la carotte s’écraser sous la cuillère.",
          timer: { minutes: 20, label: "Cuisson des lentilles" },
          tip: "Les lentilles corail tombent au fond et attachent vite : raclez bien en remuant.",
        },
        {
          title: "Mixer",
          text: "Hors du feu, ajoutez le lait de coco si vous en mettez, et mixez 1 à 2 minutes jusqu’à obtenir une soupe lisse. Elle doit couler de la louche comme une crème épaisse ; allongez avec un peu d’eau chaude si besoin.",
          timer: { minutes: 2, label: "Mixage" },
        },
      ],
    },
    {
      title: "La finition",
      steps: [
        {
          title: "Préparer l’huile au paprika",
          text: "Dans la petite casserole, faites chauffer 2 cuillerées d’huile à feu doux, sans la laisser fumer. Hors du feu, ajoutez le paprika et le piment, et remuez : ils doivent à peine grésiller, et l’huile devient rouge orangé en quelques secondes.",
        },
        {
          title: "Finir au citron",
          text: "Ajoutez le jus du demi-citron dans la soupe, goûtez, puis salez ou ajoutez du citron selon votre goût. Servez dans des bols chauds, avec un filet d’huile au paprika, quelques feuilles de coriandre et un quartier de citron.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi pas de trempage",
      text: "Les lentilles corail sont vendues décortiquées et cassées en deux. Sans peau, l’eau pénètre tout de suite dans la graine, l’amidon gonfle et elles se défont en 15 à 20 minutes. Le trempage, utile pour les légumineuses entières, n’apporte rien ici.",
    },
    {
      title: "D’où vient la mousse",
      text: "Les légumineuses contiennent des saponines et des protéines qui stabilisent des bulles quand l’eau bout, comme un savon. Le rinçage en élimine une partie, l’écumage fait le reste. La mousse n’a rien de dangereux, elle déborde surtout de la casserole.",
    },
    {
      title: "Les épices dans le gras",
      text: "Une grande partie des arômes du cumin et du paprika se dissout dans les matières grasses bien mieux que dans l’eau. Chauffées une minute dans l’huile, les épices libèrent ces composés, qui se répartissent ensuite dans toute la soupe.",
    },
    {
      title: "Le citron hors du feu",
      text: "Les arômes du citron sont très volatils et s’évaporent à la cuisson. Ajouté à la fin, son jus garde son acidité nette et son parfum, qui allègent le goût terreux des lentilles.",
    },
  ],
  tips: [
    "Épluchez le gingembre en grattant la peau avec le bord d’une petite cuillère, puis râpez-le finement : il fond dans la soupe.",
    "Avec du cumin en graines, faites-le griller 1 minute à sec dans une poêle avant de le moudre. Le parfum n’a rien à voir.",
    "Gardez une louche de soupe non mixée et remettez-la à la fin si vous aimez sentir quelques lentilles sous la dent.",
    "Préparez plus de soupe que nécessaire : elle se réchauffe très bien, il suffit de la détendre avec un peu d’eau.",
  ],
  mistakes: [
    "Oublier de rincer les lentilles : la mousse déborde à l’ébullition. Écumez à la cuillère et baissez le feu un instant.",
    "Ne pas remuer pendant la cuisson : les lentilles accrochent au fond et donnent un goût de brûlé. Si ça attache, versez la soupe dans une autre casserole sans racler le fond.",
    "Mettre le citron au début : il cuit, perd son parfum et la soupe paraît plate. Il va hors du feu, au moment de servir.",
    "Chauffer le paprika dans une huile trop chaude : il noircit en quelques secondes et devient amer. Retirez toujours la casserole du feu avant de l’ajouter.",
  ],
  variations: [
    {
      title: "À la turque",
      text: "Supprimez le gingembre et le lait de coco. Dans l’huile au paprika, ajoutez 1 cuillerée à café de menthe séchée, et servez avec deux quartiers de citron par bol.",
    },
    {
      title: "Aux épinards",
      text: "Après le mixage, ajoutez 100 g de pousses d’épinards et laissez-les tomber 2 minutes à feu doux, sans mixer. La soupe garde des feuilles entières et un goût plus vert.",
    },
    {
      title: "En plat complet",
      text: "Réduisez l’eau à 80 cl et ne mixez pas : vous obtenez une purée épaisse, proche d’un dal, à servir avec 250 g de riz basmati cuit pour 4.",
    },
  ],
  storage:
    "La soupe se garde 2 à 3 jours au réfrigérateur dans une boîte fermée, et 3 mois au congélateur. Elle épaissit en refroidissant : ajoutez un peu d’eau au moment de la réchauffer. Ne la recongelez pas. L’huile au paprika se prépare au moment de servir.",
  pairing:
    "Un pain pita ou une galette chaude pour saucer, et un yaourt grec en plus pour ceux qui ne sont pas végétaliens. Avec du riz, elle devient un plat complet.",
  faq: [
    {
      q: "Faut-il faire tremper les lentilles corail ?",
      a: "Non. Elles sont décortiquées et cassées, l’eau y pénètre tout de suite. Un simple rinçage sous l’eau froide suffit, pour enlever la poussière d’amidon qui fait mousser la soupe.",
    },
    {
      q: "Combien de temps cuisent les lentilles corail ?",
      a: "15 à 20 minutes à frémissement. Pour une soupe, on va jusqu’à 20 minutes : elles doivent avoir perdu leur forme et s’écraser d’elles-mêmes. Pour une salade, ne dépassez pas 8 à 10 minutes, elles se défont très vite.",
    },
    {
      q: "Peut-on faire cette soupe sans lait de coco ?",
      a: "Oui, la recette fonctionne sans. Le lait de coco rend la soupe plus douce et plus ronde, ce qui calme le gingembre et le piment. Sans lui, elle est plus franche et plus légère, et le citron ressort davantage.",
    },
    {
      q: "Peut-on congeler la soupe de lentilles corail ?",
      a: "Oui, elle se congèle très bien, 3 mois en boîte hermétique. Décongelez-la une nuit au réfrigérateur, réchauffez-la en ajoutant un peu d’eau, et ajoutez le citron au dernier moment. Ne la recongelez pas.",
    },
    {
      q: "Pourquoi ma soupe de lentilles épaissit-elle autant ?",
      a: "Parce que l’amidon des lentilles continue d’absorber l’eau en refroidissant. Le lendemain, elle peut avoir la consistance d’une purée. Allongez-la avec de l’eau chaude, une louche à la fois, en la réchauffant.",
    },
    {
      q: "La soupe de lentilles corail est-elle vegan ?",
      a: "Oui, telle qu’elle est écrite : huile d’olive, légumes, épices, lentilles et eau. Si vous utilisez un bouillon en cube, vérifiez sa composition, certains contiennent de la graisse ou de l’extrait de viande.",
    },
  ],
  nutrition: {
    calories: 300,
    protein: 16,
    fat: 10,
    saturatedFat: 1.5,
    carbs: 36,
    sugar: 6,
    fiber: 8,
    sodium: 600,
  },
  annotations: { hero: "huile au paprika, hors du feu", detail: "une spirale de lait de coco" },
  images: {
    heroAlt:
      "Soupe de lentilles corail dans un bol en grès gris bleuté, avec un filet d’huile au paprika et du poivre noir",
    detailAlt:
      "Assiette creuse de soupe de lentilles corail, spirale de lait de coco et coriandre, avec du pain à côté",
    credits: {
      hero: { photographer: "Alex Bayev", url: "https://www.pexels.com/photo/turkish-creamy-soup-12077978/" },
      detail: {
        photographer: "Justin Thompson",
        url: "https://www.pexels.com/photo/delicious-indian-lentil-soup-with-bread-35375003/",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#D9692B",
    onAccent: "#1B1712",
    ink: "#9A4314",
    tint: "#FBEEE4",
    deep: "#1C0F08",
    focus: "62% 72%",
  },
});
