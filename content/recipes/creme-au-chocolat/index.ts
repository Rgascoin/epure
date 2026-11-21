import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "creme-au-chocolat",
  title: "Crème dessert au chocolat",
  seoTitle: "Crème dessert au chocolat maison, sans œuf, en petits pots",
  tagline: "Elle bout une minute, pas moins.",
  description:
    "Crème dessert au chocolat sans œuf pour 6 pots : lait, crème, 100 g de chocolat noir et 30 g de fécule, cuits 1 minute à ébullition, puis 3 h au frais.",
  summary:
    "Pour 6 petits pots, faites chauffer 40 cl de lait, 20 cl de crème et 60 g de sucre, faites-y fondre 100 g de chocolat noir, puis ajoutez 30 g de fécule de maïs délayée dans 10 cl de lait froid. Portez à ébullition en fouettant et laissez cuire 1 minute. Versez dans les pots, filmez au contact et laissez prendre au moins 3 heures au réfrigérateur. Comptez 3 h 40 en tout, dont 20 minutes devant la casserole.",
  intro: [
    "La crème dessert au chocolat, celle des petits pots du goûter, se fait à la casserole en dix minutes. Ni mousse ni crème cuite au four : du lait, un peu de crème, du chocolat noir, et de la fécule de maïs qui la fait prendre. Pas d’œuf du tout.",
    "Elle rate presque toujours au même endroit, sur le feu. Retirée avant l’ébullition, elle reste liquide et garde un goût de farine. Laissée trente secondes sans fouet, elle attache au fond et fait des grumeaux.",
    "Donc on ne quitte pas la casserole. On fouette jusqu’aux premiers gros bouillons, on compte une minute, et on verse aussitôt dans les pots. Le froid fait le reste en trois heures.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "crème dessert au chocolat",
    "crème au chocolat maison",
    "crème au chocolat sans œuf",
    "crème dessert chocolat maïzena",
    "petits pots de crème au chocolat",
    "crème au chocolat facile",
    "crème chocolat fécule de maïs",
    "dessert au chocolat sans four",
  ],
  diet: ["vegetarian", "glutenFree"],
  servings: 6,
  servingsLabel: { one: "petit pot", other: "petits pots" },
  times: { prep: 10, cook: 10, rest: 200 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  tags: [],
  equipment: ["casserole à fond épais de 2 l", "fouet", "6 ramequins ou petits pots de 150 ml", "film alimentaire"],
  ingredients: [
    {
      items: [
        { qty: 100, unit: "g", name: "chocolat noir", note: "60 à 70 % de cacao, haché finement", step: 10 },
        { qty: 30, unit: "g", name: "fécule de maïs", step: 5 },
        { qty: 50, unit: "cl", name: "lait entier", note: "10 cl froid pour la fécule, 40 cl à chauffer", step: 5 },
        { qty: 20, unit: "cl", name: "crème liquide entière", note: "30 % de matière grasse", step: 5 },
        { qty: 60, unit: "g", name: "sucre", step: 5 },
        { qty: 1, unit: "pincee", name: "sel fin", fixed: true },
      ],
    },
  ],
  method: [
    {
      title: "Préparation",
      steps: [
        {
          title: "Délayer la fécule",
          text: "Hachez finement le chocolat. Dans un bol, délayez la fécule dans 10 cl de lait froid à la fourchette, jusqu’à ce qu’il ne reste aucun grumeau. Posez les pots près de la casserole : il faudra les remplir vite.",
          tip: "Toujours dans du lait froid : dans du lait chaud, la fécule fait des grumeaux.",
        },
        {
          title: "Chauffer lait et crème",
          text: "Dans la casserole, faites chauffer les 40 cl de lait restants, la crème, le sucre et le sel sur feu moyen, en remuant, jusqu’aux premiers frémissements sur les bords.",
        },
        {
          title: "Fondre le chocolat",
          text: "Hors du feu, ajoutez le chocolat haché, attendez 1 minute sans toucher, puis fouettez jusqu’à ce que le mélange soit lisse et d’un brun uniforme.",
          timer: { minutes: 1, label: "Le chocolat fond" },
        },
        {
          title: "Lier à la fécule",
          text: "Fouettez de nouveau la fécule délayée, qui retombe toujours au fond du bol, et versez-la dans la casserole en fouettant. Remettez sur feu moyen.",
        },
        {
          title: "Cuire une minute",
          text: "Fouettez sans arrêt en raclant le fond et les angles : la crème épaissit d’un coup juste avant l’ébullition. Dès que de gros bouillons crèvent la surface, comptez encore 1 minute en fouettant. Elle nappe épais le fouet et laisse un sillon au fond de la casserole.",
          timer: { minutes: 1, label: "Une minute à gros bouillons" },
          tip: "C’est quand elle épaissit qu’elle attache : ne lâchez pas le fouet à ce moment-là.",
        },
        {
          title: "Remplir les pots",
          text: "Versez aussitôt la crème dans les pots, tant qu’elle coule encore. Tapotez chaque pot sur le plan de travail pour lisser la surface, puis posez un film alimentaire directement sur la crème.",
          tip: "Le film doit toucher la crème : avec de l’air entre les deux, une peau se forme.",
        },
        {
          title: "Laisser tiédir",
          text: "Laissez les pots tiédir 20 minutes à température ambiante, pas plus longtemps.",
          timer: { minutes: 20, label: "Les pots tiédissent" },
        },
        {
          title: "Laisser prendre au frais",
          text: "Placez les pots au réfrigérateur pour au moins 3 heures. La crème est prise quand elle se tient à la cuillère et ne bouge plus si l’on penche le pot.",
          timer: { minutes: 180, label: "Prise au réfrigérateur" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi elle doit bouillir",
      text: "Les grains d’amidon de maïs absorbent l’eau du lait et commencent à gonfler vers 65 °C, mais la crème n’atteint sa vraie épaisseur qu’à l’ébullition. Une minute à gros bouillons termine le gonflement et efface le goût farineux de l’amidon cru.",
    },
    {
      title: "Le chocolat qui fige",
      text: "Le beurre de cacao est solide à la température du réfrigérateur et fond vers 34 °C, c’est-à-dire dans la bouche. En refroidissant, il ajoute sa tenue à celle de l’amidon, d’où une crème ferme au frais et fondante en bouche.",
    },
    {
      title: "Le film au contact",
      text: "En refroidissant, l’eau s’évapore à la surface, où l’amidon et les protéines du lait sèchent en une peau. Un film posé directement sur la crème empêche cette évaporation.",
    },
  ],
  tips: [
    "Hachez le chocolat finement : il fond en une minute dans le lait chaud, sans qu’il faille remettre la casserole sur le feu.",
    "Versez la crème tout de suite : elle épaissit en refroidissant et, au bout de quelques minutes, elle tombe en paquets au lieu de se lisser.",
    "Servez chaque pot avec sa propre cuillère. Une cuillère passée en bouche puis replongée dans un pot entamé apporte de l’amylase, une enzyme de la salive qui liquéfie peu à peu la crème.",
    "Pour des pots de fête, ajoutez au moment de servir une cuillère de crème fouettée et quelques framboises.",
  ],
  mistakes: [
    "Retirer la casserole avant l’ébullition : la crème reste liquide et sent la farine. Tant qu’elle n’est pas dans les pots, remettez-la sur le feu jusqu’aux gros bouillons.",
    "Arrêter de fouetter : le fond attache, des grumeaux se forment et un goût de brûlé apparaît. Pour les grumeaux, un coup de mixeur plongeant avant de remplir les pots les fait disparaître.",
    "Oublier le film ou le poser sur le bord du pot : une peau épaisse se forme. On peut la retirer, mais la surface n’est plus lisse.",
    "Fouetter la crème une fois prise : le gel d’amidon se casse et elle redevient coulante. On la sert telle quelle, à la cuillère.",
  ],
  variations: [
    {
      title: "Avec des jaunes d’œufs",
      text: "Gardez 15 g de fécule seulement et fouettez-la avec 3 jaunes et le sucre. Versez la moitié du lait chocolaté chaud dessus en fouettant, remettez tout dans la casserole et cuisez à feu doux, sans bouillir, jusqu’à 82 à 85 °C au thermomètre. Plus riche, plus souple, elle se garde 2 jours.",
    },
    {
      title: "Au chocolat au lait",
      text: "150 g de chocolat au lait à la place du noir, 30 g de sucre au lieu de 60 g et 35 g de fécule : le chocolat au lait fige moins. Plus douce, elle plaît aux enfants.",
    },
    {
      title: "À la cannelle ou à l’orange",
      text: "Faites infuser 1 bâton de cannelle ou le zeste d’une orange non traitée dans le lait chaud 10 minutes à couvert, puis retirez-le avant d’ajouter le chocolat.",
    },
  ],
  storage:
    "La crème au chocolat se garde 3 jours au réfrigérateur, chaque pot couvert de film. Ne la laissez pas plus de 2 heures à température ambiante. Elle ne se congèle pas : à la décongélation, l’amidon rend de l’eau et la texture devient granuleuse.",
  pairing:
    "Des sablés bretons ou des langues de chat pour tremper dedans, ou quelques framboises. Un café serré à côté, pour les adultes.",
  faq: [
    {
      q: "La crème dessert au chocolat contient-elle des œufs ?",
      a: "Non, la recette de base n’en a pas : c’est la fécule de maïs qui la fait prendre, aidée par le chocolat en refroidissant. Dans la variante aux jaunes, ils cuisent jusqu’à 82 à 85 °C, comme pour une crème anglaise, et ne sont plus crus.",
    },
    {
      q: "Pourquoi ma crème au chocolat est restée liquide ?",
      a: "Parce qu’elle n’a pas bouilli, le plus souvent. La fécule n’épaissit vraiment qu’à ébullition, et il faut 1 minute à gros bouillons en fouettant. Une crème fouettée après avoir pris, ou entamée avec une cuillère passée en bouche, peut aussi redevenir liquide.",
    },
    {
      q: "Combien de temps se garde une crème au chocolat maison ?",
      a: "3 jours au réfrigérateur, dans les pots couverts de film. La version aux jaunes d’œufs se garde 2 jours. Ne laissez pas les pots plus de 2 heures hors du froid.",
    },
    {
      q: "Peut-on remplacer la fécule de maïs par de la farine ?",
      a: "Oui, avec 40 g de farine au lieu de 30 g de fécule. La crème est un peu moins lisse et moins brillante, et il faut la cuire 2 minutes après l’ébullition pour effacer le goût de farine.",
    },
    {
      q: "Peut-on congeler la crème au chocolat ?",
      a: "Non. À la décongélation, le gel d’amidon rend de l’eau et la crème devient granuleuse. Elle se garde en revanche 3 jours au réfrigérateur.",
    },
    {
      q: "Quel chocolat choisir pour une crème au chocolat ?",
      a: "Un chocolat noir pâtissier à 60 ou 70 % de cacao. En dessous, la crème manque de goût. Au-dessus, elle devient plus amère et plus ferme : ajoutez alors 10 g de sucre et 5 cl de lait.",
    },
  ],
  nutrition: {
    calories: 305,
    protein: 5,
    fat: 20,
    saturatedFat: 13,
    carbs: 25,
    sugar: 20,
    fiber: 2,
    sodium: 70,
  },
  annotations: { hero: "elle se tient, elle ne coule pas", detail: "brillante, sans un grain" },
  images: {
    heroAlt:
      "Crème dessert au chocolat lisse et brillante dans un bol carré blanc, une cuillère noire en train d’en prendre",
    detailAlt: "Gros plan sur la crème au chocolat qui se tient en vagues brillantes autour de la cuillère",
    credits: {
      hero: {
        photographer: "Bethany Hicks",
        url: "https://www.pexels.com/photo/close-up-of-getting-chocolate-14459543/",
        source: "Pexels",
      },
      detail: {
        photographer: "Bethany Hicks",
        url: "https://www.pexels.com/photo/close-up-of-getting-chocolate-14459543/",
        source: "Pexels",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#8C5235",
    onAccent: "#FFFFFF",
    ink: "#6B3A22",
    tint: "#F7EEE8",
    deep: "#1A0E08",
    focus: "50% 62%",
  },
});
