import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "frites-maison",
  title: "Frites maison",
  seoTitle: "Frites maison croustillantes, en double cuisson",
  tagline: "Deux bains d’huile, pas un de moins.",
  description:
    "Frites maison pour 4 : 1 kg de pommes de terre farineuses, un trempage de 30 minutes, puis deux bains d’huile, à 150 °C et à 180 °C. Prêtes en 2 heures environ.",
  summary:
    "Pour 4 personnes, taillez 1 kg de pommes de terre farineuses en bâtonnets de 1 cm, faites-les tremper 30 minutes et séchez-les bien. Faites-les cuire une première fois 6 à 7 minutes dans l’huile à 150 °C, laissez reposer 15 minutes, puis plongez-les 2 à 3 minutes à 180 °C pour la croûte. Comptez 1 h 55 en tout, dont 20 minutes d’épluchage et de découpe.",
  intro: [
    "Une frite maison réussie a une croûte fine qui craque et un cœur tendre comme une purée. Il faut pour ça des pommes de terre farineuses, un thermomètre et deux passages dans l’huile, à deux températures différentes.",
    "La plupart des frites ratées le sont pour une seule raison : elles ont cuit d’un coup, trop chaud ou pas assez. Le premier bain, à 150 °C, cuit l’intérieur sans colorer. Le second, à 180 °C, fait la croûte en trois minutes.",
    "Un mot sur l’huile chaude, avant de commencer : jamais plus d’un tiers de la casserole, jamais d’eau à proximité, et jamais le dos tourné.",
  ],
  category: "Accompagnement",
  cuisine: "Française",
  keywords: [
    "frites maison",
    "recette frites maison",
    "frites double cuisson",
    "frites croustillantes",
    "quelle pomme de terre pour les frites",
    "température huile frites",
    "frites sans friteuse",
    "frites maison au four",
  ],
  diet: ["vegan", "vegetarian", "glutenFree"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 20, cook: 50, rest: 45 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Toute l’année"],
  tags: [],
  equipment: [
    "friteuse, ou cocotte à fond épais de 5 l",
    "thermomètre de cuisson jusqu’à 200 °C",
    "écumoire ou panier à friture",
    "torchon propre",
  ],
  ingredients: [
    {
      items: [
        { qty: 1000, unit: "g", name: "pommes de terre farineuses", note: "bintje ou agria", step: 100 },
        { qty: 2, unit: "l", name: "huile de friture", note: "tournesol oléique ou arachide", step: 1, fixed: true },
        { name: "sel fin" },
      ],
    },
  ],
  method: [
    {
      title: "Les frites",
      steps: [
        {
          title: "Éplucher et tailler",
          text: "Épluchez les pommes de terre. Coupez-les en tranches de 1 cm d’épaisseur, puis chaque tranche en bâtonnets de 1 cm. Mettez-les au fur et à mesure dans un saladier d’eau froide.",
          tip: "Des bâtonnets de la même taille cuisent au même rythme : prenez le temps d’être régulier.",
        },
        {
          title: "Faire tremper",
          text: "Laissez tremper 30 minutes dans l’eau froide. Égouttez, puis rincez sous le robinet jusqu’à ce que l’eau qui coule soit claire et non plus laiteuse.",
          timer: { minutes: 30, label: "Trempage" },
        },
        {
          title: "Sécher les frites",
          text: "Étalez les frites sur un torchon propre, couvrez d’un second torchon et tamponnez. Elles doivent être sèches au toucher : la moindre goutte d’eau fait crépiter et monter l’huile.",
        },
        {
          title: "Chauffer l’huile",
          text: "Versez l’huile dans la friteuse ou la cocotte, sans dépasser le tiers de sa hauteur. Chauffez à feu moyen jusqu’à 150 °C au thermomètre, en 10 minutes environ. Ne quittez plus la cuisine tant que l’huile est sur le feu.",
          timer: { minutes: 10, label: "Huile à 150 °C" },
        },
        {
          title: "Premier bain à 150 °C",
          text: "Plongez 250 g de frites à la fois et laissez cuire 6 à 7 minutes. Elles restent pâles mais s’écrasent quand on en pince une entre deux doigts. Égouttez sur une grille ou du papier absorbant, et attendez que l’huile revienne à 150 °C avant la fournée suivante.",
          timer: { minutes: 7, label: "Premier bain" },
          tip: "Petites fournées : trop de frites d’un coup font chuter la température et les frites boivent l’huile.",
        },
        {
          title: "Laisser reposer",
          text: "Laissez reposer les frites au moins 15 minutes à l’air, étalées. Pendant les 5 dernières minutes, remettez l’huile à chauffer jusqu’à 180 °C.",
          timer: { minutes: 15, label: "Repos entre les bains" },
        },
        {
          title: "Second bain à 180 °C",
          text: "Plongez de nouveau 250 g de frites à la fois, 2 à 3 minutes, jusqu’à ce qu’elles soient dorées et qu’elles sonnent creux quand on secoue le panier. Visez un doré clair : trop brunes, elles sont plus amères.",
          timer: { minutes: 3, label: "Second bain" },
          tip: "Laissez l’huile remonter à 180 °C entre deux fournées, sinon la croûte ne prend pas.",
        },
        {
          title: "Saler et servir",
          text: "Égouttez sur du papier absorbant, versez dans un saladier, salez aussitôt et faites sauter pour bien répartir. Servez tout de suite. Coupez le feu et laissez l’huile refroidir complètement sur place avant de la filtrer ou de la déplacer.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Deux bains, deux rôles",
      text: "À 150 °C, l’amidon de la pomme de terre gonfle et l’intérieur cuit sans que la surface ait le temps de colorer. À 180 °C, la surface perd son eau en quelques minutes et forme une croûte, avant que l’intérieur, déjà cuit, ne se dessèche.",
    },
    {
      title: "Ce que fait le trempage",
      text: "L’eau froide emporte l’amidon libéré par la découpe et une partie des sucres de surface. Les frites collent moins entre elles, dorent plus régulièrement et forment moins d’acrylamide, un composé qui apparaît quand les aliments riches en amidon brunissent à haute température.",
    },
    {
      title: "Pourquoi une variété farineuse",
      text: "Les pommes de terre farineuses contiennent plus de matière sèche et moins d’eau que les variétés à chair ferme. Leur chair devient sèche et légère à la cuisson, et la croûte se forme mieux. Une chair ferme donne une frite molle et grasse.",
    },
  ],
  tips: [
    "Sans thermomètre, on cuisine à l’aveugle : un thermomètre de cuisson coûte peu et rend les deux bains fiables.",
    "La première cuisson peut se faire jusqu’à 2 heures avant le repas. Le second bain se fait au moment de servir.",
    "Salez dans le saladier, juste à la sortie de l’huile : le sel accroche sur la surface encore grasse.",
    "Après refroidissement complet, filtrez l’huile dans une passoire fine et gardez-la à l’abri de la lumière pour une prochaine fois.",
  ],
  mistakes: [
    "Plonger des frites mal séchées : l’huile crépite, projette et peut déborder. Séchez-les au torchon jusqu’à ce qu’elles soient sèches au toucher.",
    "Remplir la casserole à moitié d’huile ou plus : à l’arrivée des frites, l’huile mousse et monte. Un tiers de la hauteur, pas plus.",
    "Cuire en une seule fois à 180 °C : dehors brunes, dedans crues. À 150 °C seulement : pâles et molles.",
    "Choisir une pomme de terre à chair ferme, comme la charlotte : les frites restent molles et grasses.",
    "Saler avant de frire : le sel fait sortir l’eau des pommes de terre, qui crépitent dans l’huile.",
  ],
  variations: [
    {
      title: "Frites au four",
      text: "Taillez, trempez 30 minutes et séchez comme ci-dessus. Mélangez avec 2 cuillerées à soupe d’huile et 1 cuillerée à café de sel, étalez en une couche sur une plaque couverte de papier cuisson et enfournez 35 à 40 minutes à 220 °C, en retournant à mi-cuisson.",
    },
    {
      title: "Pommes allumettes",
      text: "Taillez des bâtonnets de 5 mm. Premier bain : 3 à 4 minutes à 150 °C ; second bain : 1 à 2 minutes à 180 °C.",
    },
    {
      title: "Grosses frites",
      text: "Taillez des bâtonnets de 1,5 cm. Premier bain : 9 à 10 minutes à 150 °C, jusqu’à ce qu’elles s’écrasent sous les doigts ; second bain inchangé.",
    },
  ],
  storage:
    "Les frites se mangent à la sortie de l’huile. Les restes se gardent 1 jour au réfrigérateur et se réchauffent 8 minutes au four à 220 °C, étalés sur une plaque. Les frites précuites au premier bain se gardent 24 heures au réfrigérateur, couvertes, avant le second bain.",
  pairing: "Un steak poêlé, des moules marinières, un poulet rôti, ou simplement un œuf au plat.",
  faq: [
    {
      q: "Quelle pomme de terre choisir pour des frites maison ?",
      a: "Une pomme de terre farineuse : bintje, agria, ou un sac marqué « pour frites ». Leur chair sèche donne une croûte qui craque et un cœur léger. Les variétés à chair ferme, comme la charlotte ou l’amandine, donnent des frites molles et grasses.",
    },
    {
      q: "Pourquoi cuire les frites deux fois ?",
      a: "Parce qu’une seule température ne fait pas les deux choses. À 150 °C, l’intérieur cuit sans colorer ; à 180 °C, la croûte se forme en 2 à 3 minutes. En une seule cuisson, les frites sont soit brunes et crues au centre, soit pâles et molles.",
    },
    {
      q: "Faut-il faire tremper les frites avant de les cuire ?",
      a: "Oui, 30 minutes dans l’eau froide. Le trempage enlève l’amidon de surface : les frites collent moins et dorent plus régulièrement. Rincez jusqu’à ce que l’eau soit claire, puis séchez-les très soigneusement.",
    },
    {
      q: "Peut-on faire des frites sans friteuse ?",
      a: "Oui, dans une cocotte en fonte ou une grande casserole à fond épais, remplie d’huile au tiers de sa hauteur, avec un thermomètre de cuisson. Ne la laissez jamais sans surveillance et gardez son couvercle à portée de main.",
    },
    {
      q: "Que faire si l’huile de friture prend feu ?",
      a: "Coupez le feu et couvrez la casserole avec son couvercle ou un linge humide bien essoré, sans la déplacer. Ne jetez jamais d’eau : elle se vaporise d’un coup et projette l’huile enflammée. Si le feu ne s’éteint pas, sortez et appelez le 18 ou le 112.",
    },
    {
      q: "L’huile d’arachide pose-t-elle un problème d’allergie ?",
      a: "Oui, elle peut. L’arachide est un allergène majeur, et une huile d’arachide non raffinée en contient des traces. S’il y a un doute à table, prenez une huile de tournesol oléique, qui supporte aussi bien les 180 °C.",
    },
    {
      q: "Combien de fois peut-on réutiliser l’huile de friture ?",
      a: "Plusieurs fois, si vous la filtrez après chaque usage et ne faites frire que des pommes de terre. Jetez-la dès qu’elle fonce, mousse, sent le rance ou fume avant 180 °C. Jamais dans l’évier : rapportez-la en déchetterie dans une bouteille fermée.",
    },
  ],
  nutrition: {
    calories: 350,
    protein: 5,
    fat: 17.5,
    saturatedFat: 2,
    carbs: 42,
    sugar: 1,
    fiber: 4,
    sodium: 250,
  },
  annotations: { hero: "salées à la sortie de l’huile", detail: "le second bain, à 180 °C" },
  images: {
    heroAlt: "Frites maison dorées dans un petit panier en métal noir, posé sur une planche parsemée de gros sel",
    detailAlt: "Frites maison en train de dorer dans l’huile qui bouillonne, au fond du panier d’une friteuse",
    credits: {
      hero: {
        photographer: "FRANCIANO PUHALES [FF8]",
        url: "https://www.pexels.com/photo/fries-in-the-basket-13187610/",
      },
      detail: {
        photographer: "Mediha Ekici",
        url: "https://www.pexels.com/photo/crispy-french-fries-deep-fried-in-oil-31701973/",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#E0A526",
    onAccent: "#1B1712",
    ink: "#805806",
    tint: "#FCF5E1",
    deep: "#1A1406",
    focus: "45% 45%",
  },
});
