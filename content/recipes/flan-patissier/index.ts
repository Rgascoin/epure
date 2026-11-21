import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "flan-patissier",
  title: "Flan pâtissier",
  seoTitle: "Flan pâtissier maison, haut et vanillé, sur pâte brisée",
  tagline: "Quatre heures de froid, au moins.",
  description:
    "Flan pâtissier de 22 cm pour 8 : crème vanillée cuite avec 1 l de lait et de crème, versée sur une pâte brisée crue, puis 1 h au four à 180 °C.",
  summary:
    "Pour 8 parts, foncez un moule de 22 cm avec une pâte brisée maison et congelez-la 30 minutes, sans cuisson à blanc. Épaississez sur le feu 75 cl de lait, 25 cl de crème, 4 œufs, 180 g de sucre, 90 g de fécule de maïs et une gousse de vanille, avec 1 minute d’ébullition. Versez sur la pâte, cuisez 55 minutes à 1 heure à 180 °C, laissez refroidir puis réfrigérez au moins 4 heures. 1 h 50 de travail et de cuisson.",
  intro: [
    "Le flan pâtissier, ou flan parisien, c’est une crème vanillée épaisse cuite dans une pâte, haute de quatre à cinq centimètres, avec un dessus brun foncé par plaques. On le coupe en parts nettes qui tiennent debout dans l’assiette.",
    "La crème cuit deux fois. D’abord dans la casserole, comme une crème pâtissière, jusqu’à bouillir une bonne minute : c’est là qu’on rate la plupart des flans, arrêtés trop tôt, qui rendent du liquide en refroidissant. Puis au four, où elle prend sa couleur.",
    "Pas de cuisson à blanc : on congèle le fond garni et on le pose sur une plaque brûlante, en bas du four. Ensuite, de la patience, car il faut quatre heures de froid avant de le couper.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "flan pâtissier",
    "recette flan pâtissier",
    "flan parisien",
    "flan pâtissier maison",
    "flan pâtissier pâte brisée",
    "flan pâtissier sans pâte",
    "flan pâtissier maïzena",
    "flan à la vanille",
  ],
  diet: ["vegetarian"],
  servings: 8,
  servingsLabel: { one: "part", other: "parts" },
  times: { prep: 40, cook: 70, rest: 360 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Toute l’année"],
  tags: [],
  equipment: [
    "moule à charnière de 22 cm",
    "rouleau à pâtisserie",
    "casserole de 3 l à fond épais",
    "fouet",
    "plaque de cuisson",
  ],
  ingredients: [
    {
      title: "La pâte brisée",
      items: [
        { qty: 250, unit: "g", name: "farine", note: "T55", step: 10 },
        { qty: 25, unit: "g", name: "sucre", step: 5 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 125, unit: "g", name: "beurre", note: "froid, en dés", step: 5 },
        { qty: 1, name: "œuf", plural: "œufs", step: 1 },
        { qty: 2, unit: "cas", name: "eau froide", step: 1 },
        { qty: 10, unit: "g", name: "beurre", note: "mou, pour le moule", step: 5 },
      ],
    },
    {
      title: "La crème",
      items: [
        { qty: 75, unit: "cl", name: "lait entier", step: 5 },
        { qty: 25, unit: "cl", name: "crème liquide entière", note: "30 % de matière grasse", step: 5 },
        { qty: 1, unit: "gousse", name: "vanille", step: 1 },
        { qty: 180, unit: "g", name: "sucre", step: 10 },
        { qty: 4, name: "œuf", plural: "œufs", step: 1 },
        { qty: 90, unit: "g", name: "fécule de maïs", step: 5 },
      ],
    },
  ],
  method: [
    {
      title: "La pâte",
      steps: [
        {
          title: "Sabler la pâte",
          text: "Mélangez la farine, le sucre et le sel. Ajoutez le beurre froid et frottez-le entre vos doigts jusqu’à obtenir un sable grossier, sans gros morceaux. Ajoutez l’œuf et l’eau, rassemblez la pâte sans la pétrir, aplatissez-la en disque, filmez-la et laissez-la 30 minutes au réfrigérateur.",
          timer: { minutes: 30, label: "Pâte au froid" },
        },
        {
          title: "Foncer le moule",
          text: "Beurrez le moule. Étalez la pâte sur 3 mm d’épaisseur, en un disque d’environ 34 cm. Posez-la dans le moule, faites-la descendre dans l’angle sans l’étirer, puis remontez-la jusqu’en haut des bords. Coupez ce qui dépasse. Ne piquez pas le fond.",
          tip: "Une pâte étirée pour atteindre le haut du moule se rétracte à la cuisson : soulevez-la plutôt pour la faire descendre.",
        },
        {
          title: "Congeler le fond",
          text: "Mettez le moule garni 30 minutes au congélateur. Pendant ce temps, glissez une plaque au niveau le plus bas du four et préchauffez à 180 °C, chaleur de voûte et de sole.",
          timer: { minutes: 30, label: "Fond au congélateur" },
        },
      ],
    },
    {
      title: "La crème",
      steps: [
        {
          title: "Chauffer le lait vanillé",
          text: "Fendez la gousse de vanille en deux et grattez les graines. Mettez-les dans la casserole avec la gousse, le lait, la crème et la moitié du sucre, 90 g. Portez à frémissement à feu moyen, environ 5 minutes, puis retirez la gousse.",
          timer: { minutes: 5, label: "Lait au frémissement" },
        },
        {
          title: "Fouetter œufs et fécule",
          text: "Dans un saladier, fouettez les œufs avec le reste du sucre et la fécule de maïs, jusqu’à ce que le mélange soit lisse, sans un grumeau.",
        },
        {
          title: "Épaissir la crème",
          text: "Versez un tiers du lait chaud sur les œufs en fouettant, puis reversez le tout dans la casserole. À feu moyen, fouettez sans arrêt en raclant les bords : la crème épaissit d’un coup. Dès les premiers bouillons, continuez de fouetter 1 minute à ébullition, soit 3 à 4 minutes en tout. Elle est épaisse et brillante.",
          timer: { minutes: 4, label: "Crème épaissie" },
          tip: "La minute d’ébullition n’est pas négociable : sans elle, le flan rend de l’eau en refroidissant.",
        },
      ],
    },
    {
      title: "Cuisson et repos",
      steps: [
        {
          title: "Garnir",
          text: "Sortez le moule du congélateur et versez-y aussitôt la crème bouillante. Lissez le dessus à la spatule, sans chercher la perfection : les petites bosses donneront les plaques brunes.",
        },
        {
          title: "Cuire",
          text: "Posez le moule sur la plaque chaude, en bas du four, et faites cuire 55 minutes à 1 heure à 180 °C. Le flan est prêt quand le dessus est brun foncé par plaques, la pâte dorée sur les bords, et que le centre tremble d’un bloc quand on secoue le moule.",
          timer: { minutes: 60, label: "Cuisson du flan" },
          tip: "Dessus encore pâle à la fin : passez-le sous le gril en surveillant, il colore très vite.",
        },
        {
          title: "Laisser refroidir",
          text: "Posez le flan sur une grille, dans son moule, et laissez-le refroidir 1 heure à température ambiante. Il retombe un peu, c’est normal.",
          timer: { minutes: 60, label: "Refroidissement" },
        },
        {
          title: "Réfrigérer",
          text: "Mettez-le au réfrigérateur au moins 4 heures, idéalement une nuit, avant de retirer le cercle du moule et de le couper au couteau trempé dans l’eau chaude.",
          timer: { minutes: 240, label: "Flan au froid" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi faire bouillir",
      text: "La fécule épaissit dès 70 °C environ, mais n’atteint sa pleine tenue qu’à l’ébullition. Le jaune d’œuf contient aussi une enzyme, l’amylase, qui découpe l’amidon et fait retomber la crème en liquide. Une minute à ébullition la détruit.",
    },
    {
      title: "Pas de cuisson à blanc",
      text: "La crème arrive déjà épaisse sur la pâte et la mouille peu. Congelé, le fond tient sa forme au début de la cuisson, et la plaque brûlante lui envoie de la chaleur par-dessous pendant une heure entière : il cuit en même temps que la crème, sans que les bords ne sèchent.",
    },
    {
      title: "Le dessus brun",
      text: "En surface, la crème sèche et chauffe bien au-delà de 100 °C : le sucre caramélise et les protéines du lait brunissent avec lui (réaction de Maillard). Les parties bombées, plus près de la voûte, brunissent les premières.",
    },
    {
      title: "Le froid qui raffermit",
      text: "En refroidissant, l’amidon cuit se réorganise et forme un gel ferme. Tiède, le flan s’affaisse sous le couteau ; après 4 heures au froid, les parts sont nettes et tiennent debout.",
    },
  ],
  tips: [
    "Raclez bien le fond et les angles de la casserole en fouettant : la crème y accroche en premier et ferait des grumeaux.",
    "Si la crème a quelques grumeaux, passez-la 10 secondes au mixeur plongeant avant de la verser.",
    "Rincez et séchez la gousse de vanille utilisée, puis glissez-la dans un bocal de sucre : il sera parfumé en quelques jours.",
    "Coupez le flan bien froid avec un grand couteau passé sous l’eau chaude et essuyé entre chaque part.",
  ],
  mistakes: [
    "Retirer la crème du feu dès qu’elle épaissit : sans la minute d’ébullition, le flan rend du liquide et se ramollit au froid. Une fois cuit, ça ne se rattrape plus.",
    "Ne pas congeler le fond : les bords glissent dans le moule pendant la cuisson et la crème déborde sur la pâte.",
    "Le couper tiède : la crème coule et les parts s’écrasent. Quatre heures de froid au minimum.",
    "Sortir un flan au dessus pâle : il a le goût d’une crème pâtissière. Un passage de 2 à 3 minutes sous le gril, en surveillant, lui donne sa couleur.",
  ],
  variations: [
    {
      title: "Sur pâte feuilletée",
      text: "Remplacez la brisée par 350 g de pâte feuilletée, étalée sur 3 mm et congelée 30 minutes dans le moule. Les bords gonflent et feuillettent, le fond reste plus tendre.",
    },
    {
      title: "Sans pâte",
      text: "Beurrez généreusement le moule, versez la crème directement et cuisez 45 à 50 minutes à 180 °C. On perd le croustillant, on gagne une heure, et le flan se démoule froid.",
    },
    {
      title: "À la poudre à flan",
      text: "Remplacez la fécule de maïs et la vanille par de la poudre à flan, dosée selon le sachet pour 1 litre de liquide. Le flan est plus jaune et a un goût de vanille plus marqué, moins fin.",
    },
    {
      title: "À la noix de coco",
      text: "Remplacez la crème par 25 cl de lait de coco et ajoutez 50 g de noix de coco râpée à la crème cuite. Gardez la vanille, ou non.",
    },
  ],
  storage:
    "Le flan se garde 3 jours au réfrigérateur, couvert de film. Il ne se congèle pas : la crème rend de l’eau et devient granuleuse en décongelant.",
  pairing:
    "Il se mange froid, seul, ou avec un café. Un coulis de fruits rouges acidulé contraste bien avec la vanille.",
  easy: {
    shortcut: "pâte brisée pur beurre en rouleau",
    note: "On saute la pâte et sa demi-heure de repos ; on perd l’épaisseur et un peu de goût de beurre. Choisissez une pâte pur beurre, sans huile de palme, et étalez-la un peu au rouleau pour qu’elle couvre les bords du moule.",
    times: { prep: 20, cook: 70, rest: 330 },
    ingredients: [
      {
        title: "Le fond",
        items: [
          { qty: 1, unit: "rouleau", name: "pâte brisée pur beurre", note: "230 g environ", step: 1 },
          { qty: 10, unit: "g", name: "beurre", note: "mou, pour le moule", step: 5 },
        ],
      },
      {
        title: "La crème",
        items: [
          { qty: 75, unit: "cl", name: "lait entier", step: 5 },
          { qty: 25, unit: "cl", name: "crème liquide entière", step: 5 },
          { qty: 2, unit: "cac", name: "extrait de vanille", step: 1 },
          { qty: 180, unit: "g", name: "sucre", step: 10 },
          { qty: 4, name: "œuf", plural: "œufs", step: 1 },
          { qty: 90, unit: "g", name: "fécule de maïs", step: 5 },
        ],
      },
    ],
    method: [
      {
        title: "Le flan",
        steps: [
          {
            title: "Foncer et congeler",
            text: "Beurrez le moule. Déroulez la pâte, étalez-la au rouleau jusqu’à 32 cm environ, puis foncez le moule jusqu’en haut des bords sans l’étirer. Mettez-le 30 minutes au congélateur, et préchauffez le four à 180 °C avec une plaque au niveau le plus bas.",
            timer: { minutes: 30, label: "Fond au congélateur" },
          },
          {
            title: "Cuire la crème",
            text: "Chauffez le lait, la crème, la vanille et 90 g de sucre. Fouettez les œufs, le reste du sucre et la fécule, versez-y un tiers du lait chaud, puis remettez tout dans la casserole. Fouettez à feu moyen jusqu’à ce que la crème épaississe et bouille 1 minute, soit 3 à 4 minutes.",
            timer: { minutes: 4, label: "Crème épaissie" },
          },
          {
            title: "Garnir et cuire",
            text: "Versez la crème bouillante dans le fond congelé et lissez. Posez le moule sur la plaque chaude et cuisez 55 minutes à 1 heure à 180 °C, jusqu’à ce que le dessus soit brun foncé par plaques.",
            timer: { minutes: 60, label: "Cuisson du flan" },
          },
          {
            title: "Refroidir",
            text: "Laissez refroidir 1 heure sur une grille, dans le moule.",
            timer: { minutes: 60, label: "Refroidissement" },
          },
          {
            title: "Réfrigérer",
            text: "Réfrigérez au moins 4 heures avant de démouler et de couper.",
            timer: { minutes: 240, label: "Flan au froid" },
          },
        ],
      },
    ],
  },
  faq: [
    {
      q: "Faut-il cuire la pâte à blanc pour un flan pâtissier ?",
      a: "Non. Congelez plutôt le fond garni 30 minutes et posez le moule sur une plaque préchauffée en bas du four. La pâte cuit pendant l’heure de cuisson de la crème, sans que les bords ne dessèchent.",
    },
    {
      q: "Pourquoi mon flan pâtissier est-il liquide ?",
      a: "Le plus souvent, la crème n’a pas bouilli assez longtemps sur le feu. Sans une minute d’ébullition, la fécule ne prend pas toute sa tenue et une enzyme du jaune d’œuf la défait. L’autre cause : un flan coupé avant 4 heures de froid.",
    },
    {
      q: "Combien de temps laisser refroidir un flan pâtissier ?",
      a: "5 heures au moins : 1 heure à température ambiante, puis 4 heures au réfrigérateur. L’idéal est de le préparer la veille. Coupé plus tôt, il s’affaisse et coule.",
    },
    {
      q: "Peut-on remplacer la fécule de maïs par de la farine ?",
      a: "Oui, mais il en faut plus : 110 à 120 g de farine pour 90 g de fécule. La crème est un peu moins fine et a un léger goût de farine ; laissez-la bouillir 2 minutes au lieu d’une.",
    },
    {
      q: "Peut-on faire un flan pâtissier sans pâte ?",
      a: "Oui. Beurrez bien le moule, versez la crème cuite directement et faites cuire 45 à 50 minutes à 180 °C. Laissez-le refroidir et prendre au froid de la même façon, puis démoulez-le froid.",
    },
    {
      q: "Une femme enceinte peut-elle manger du flan pâtissier ?",
      a: "Oui. Les œufs sont entièrement cuits : la crème bout sur le feu, puis cuit encore une heure au four. Comme pour tout dessert aux œufs et au lait, gardez-le au réfrigérateur et mangez-le dans les 3 jours.",
    },
  ],
  nutrition: {
    calories: 570,
    protein: 11,
    fat: 30,
    saturatedFat: 18,
    carbs: 63,
    sugar: 31,
    fiber: 1,
    sodium: 140,
  },
  annotations: { hero: "brun foncé par plaques, pas brûlé", detail: "coupé froid, au couteau chaud" },
  images: {
    heroAlt:
      "Flan pâtissier entier dans sa pâte brisée dorée, le dessus brun foncé et brillant, posé sur une table en bois",
    detailAlt:
      "Part de flan pâtissier au dessus caramélisé, la crème vanillée piquée de graines de vanille, sur une assiette mouchetée",
    credits: {
      hero: {
        photographer: "Strovichky",
        url: "https://commons.wikimedia.org/w/index.php?curid=124468735",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
      detail: {
        photographer: "AragonChristopherR17Z",
        url: "https://commons.wikimedia.org/w/index.php?curid=168553065",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#B8742E",
    onAccent: "#1B1712",
    ink: "#7A4318",
    tint: "#F8EEE2",
    deep: "#1A0F07",
    focus: "50% 55%",
  },
});
