import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "gateau-au-fromage-blanc",
  title: "Gâteau au fromage blanc",
  seoTitle: "Gâteau au fromage blanc à l’alsacienne, haut et léger",
  tagline: "Il refroidit dans le four, porte entrouverte.",
  description:
    "Gâteau au fromage blanc alsacien pour 10 : pâte sucrée, 750 g de fromage blanc égoutté, blancs en neige, 70 minutes à 160 °C puis une nuit au frais.",
  summary:
    "Pour 10 parts, égouttez 750 g de fromage blanc entier pendant 2 h, précuisez une pâte sucrée dans un moule haut de 24 cm, puis garnissez-la d’un appareil au fromage blanc, jaunes, sucre, crème, fécule et zeste de citron, allégé de 4 blancs en neige. Le gâteau cuit 70 minutes à 160 °C, refroidit 1 h dans le four éteint, porte entrouverte, puis passe une nuit au réfrigérateur. Comptez 13 h en tout, dont 2 h de travail et de cuisson.",
  intro: [
    "Le gâteau au fromage blanc, la Käsküeche des Alsaciens, c’est une pâte sucrée garnie d’un appareil au fromage blanc allégé de blancs en neige, cuit lentement et mangé froid. Plus haut et plus léger qu’un cheesecake, il a une mie presque mousseuse et un goût frais, un peu acidulé.",
    "Il a deux façons de décevoir : gonfler au four comme un soufflé puis s’effondrer en cratère, ou se fendre en travers. Dans les deux cas, c’est presque toujours une affaire de température.",
    "D’où une cuisson douce, à 160 °C, et surtout une heure de refroidissement dans le four éteint, porte entrouverte. Le gâteau redescend doucement au niveau du moule, et une nuit au frais finit le travail.",
  ],
  category: "Goûter",
  cuisine: "Française",
  keywords: [
    "gâteau au fromage blanc",
    "recette gâteau au fromage blanc",
    "gâteau au fromage blanc alsacien",
    "käsküeche",
    "tarte au fromage blanc alsacienne",
    "gâteau au fromage blanc qui ne retombe pas",
    "gâteau au fromage blanc et pâte sablée",
    "käsekuchen",
  ],
  servings: 10,
  servingsLabel: { one: "part", other: "parts" },
  times: { prep: 35, cook: 85, rest: 660 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Toute l’année"],
  tags: [],
  equipment: [
    "moule à charnière de 24 cm et 6 cm de haut",
    "passoire fine et étamine ou torchon propre",
    "rouleau à pâtisserie",
    "papier cuisson et légumes secs pour la précuisson",
    "batteur électrique",
    "maryse",
  ],
  ingredients: [
    {
      title: "Le fromage blanc",
      items: [
        { qty: 750, unit: "g", name: "fromage blanc entier", note: "au lait entier, en faisselle ou lisse", step: 50 },
      ],
    },
    {
      title: "La pâte sucrée",
      items: [
        { qty: 200, unit: "g", name: "farine", note: "T55", step: 10 },
        { qty: 60, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 100, unit: "g", name: "beurre doux", note: "froid, en dés", step: 5 },
        { qty: 1, name: "œuf", plural: "œufs", note: "battu", step: 1 },
        { qty: 10, unit: "g", name: "beurre doux", note: "mou, pour le moule", fixed: true },
      ],
    },
    {
      title: "L’appareil",
      items: [
        { qty: 4, name: "œuf", plural: "œufs", note: "à température ambiante", step: 1 },
        { qty: 150, unit: "g", name: "sucre en poudre", note: "100 g pour les jaunes, 50 g pour les blancs", step: 10 },
        { qty: 50, unit: "g", name: "fécule de maïs", step: 5 },
        { qty: 200, unit: "g", name: "crème fraîche épaisse", note: "entière", step: 10 },
        { qty: 1, name: "citron non traité", plural: "citrons non traités", note: "le zeste finement râpé", step: 1 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "Le fond de pâte",
      steps: [
        {
          title: "Égoutter le fromage blanc",
          text: "Versez le fromage blanc dans une passoire fine tapissée d’une étamine ou d’un torchon propre, posée sur un saladier, et laissez-le égoutter 2 h au réfrigérateur. Il doit avoir rendu une bonne partie de son petit-lait et se tenir en bloc sur la cuillère.",
          timer: { minutes: 120, label: "Égouttage du fromage blanc" },
          tip: "Un fromage blanc trop humide donne un gâteau qui rend de l’eau et un fond de pâte détrempé.",
        },
        {
          title: "Sabler la pâte",
          text: "Pendant ce temps, mélangez la farine, le sucre et le sel, ajoutez le beurre froid et frottez entre vos doigts jusqu’à obtenir un sable fin. Ajoutez l’œuf battu, rassemblez la pâte sans la pétrir, aplatissez-la en disque, filmez-la et laissez-la 30 minutes au réfrigérateur.",
          timer: { minutes: 30, label: "Pâte au réfrigérateur" },
        },
        {
          title: "Foncer le moule",
          text: "Beurrez le moule. Étalez la pâte sur 3 mm d’épaisseur et garnissez-en le fond et les bords sur 5 cm de hauteur, en appuyant bien dans l’angle. Piquez le fond à la fourchette et remettez le moule au réfrigérateur pendant que le four chauffe à 180 °C, chaleur traditionnelle.",
        },
        {
          title: "Précuire le fond",
          text: "Couvrez la pâte de papier cuisson, remplissez de légumes secs et enfournez 15 minutes, jusqu’à ce que les bords soient secs et à peine blonds. Retirez papier et légumes secs, puis baissez le four à 160 °C.",
          timer: { minutes: 15, label: "Précuisson du fond" },
        },
      ],
    },
    {
      title: "L’appareil et la cuisson",
      steps: [
        {
          title: "Mélanger l’appareil",
          text: "Séparez les blancs des jaunes. Au fouet, mélangez le fromage blanc égoutté avec les jaunes, 100 g de sucre, la fécule, la crème et le zeste de citron, juste jusqu’à ce que ce soit lisse, sans grumeau de fécule. Inutile d’insister : on ne cherche pas à y faire entrer de l’air.",
        },
        {
          title: "Monter les blancs",
          text: "Fouettez les blancs avec le sel jusqu’à ce qu’ils soient mousseux, ajoutez les 50 g de sucre restants en deux fois et continuez jusqu’à des blancs brillants qui forment un bec souple au bout du fouet.",
        },
        {
          title: "Incorporer les blancs",
          text: "Mélangez un tiers des blancs à l’appareil au fouet pour le détendre, puis ajoutez le reste en soulevant délicatement à la maryse, jusqu’à ce qu’il ne reste plus de traces blanches. Versez dans le fond précuit : l’appareil doit s’arrêter 5 mm sous le bord de la pâte.",
          tip: "Des blancs trop fermes se mélangent mal et font monter le gâteau trop vite, avant de le laisser retomber d’autant.",
        },
        {
          title: "Cuire doucement",
          text: "Enfournez à 160 °C, grille au milieu, pour 70 minutes, sans ouvrir la porte. Le gâteau gonfle au-dessus du moule et dore. Il est cuit quand le dessus est blond doré, que les bords sont pris et que le centre ne tremble plus qu’un peu quand on bouge le moule.",
          timer: { minutes: 70, label: "Cuisson du gâteau" },
        },
        {
          title: "Refroidir porte entrouverte",
          text: "Éteignez le four, coincez le manche d’une cuillère en bois dans la porte et laissez le gâteau refroidir ainsi 1 h. Il redescend lentement au niveau du moule : un léger tassement est normal, un cratère au centre ne l’est pas.",
          timer: { minutes: 60, label: "Refroidissement au four" },
          tip: "C’est le passage brutal du four chaud à l’air de la cuisine qui fait tomber et craqueler le gâteau.",
        },
        {
          title: "Laisser prendre une nuit",
          text: "Sortez le gâteau, laissez-le finir de refroidir à température ambiante, puis couvrez-le et mettez-le au réfrigérateur 8 h au moins, idéalement une nuit. Démoulez-le froid et coupez-le avec un couteau trempé dans l’eau chaude, essuyé entre chaque part.",
          timer: { minutes: 480, label: "Nuit au réfrigérateur" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi égoutter",
      text: "Le fromage blanc contient environ les trois quarts de son poids en eau. Celle qui n’est pas retenue par les protéines ou l’amidon s’échappe à la cuisson : le gâteau rend du liquide et détrempe la pâte. Égoutté, il est plus concentré et l’appareil prend mieux.",
    },
    {
      title: "La fécule évite le grain",
      text: "L’amidon de la fécule gonfle à la chaleur et retient l’eau du fromage. Il s’intercale aussi entre les protéines de l’œuf et les empêche de se resserrer trop vite : la texture reste lisse au lieu de grainer, même après une longue cuisson.",
    },
    {
      title: "Pourquoi il retombe",
      text: "Les blancs en neige font gonfler le gâteau parce que leur air se dilate à la chaleur. En refroidissant, cet air se contracte. Si le refroidissement est lent, les protéines ont le temps de se figer et de soutenir la structure, qui se tasse un peu au lieu de s’effondrer.",
    },
  ],
  tips: [
    "Prenez un fromage blanc entier : les versions allégées rendent plus d’eau et donnent un gâteau plus sec et plus acide.",
    "Sortez les œufs et la crème 30 minutes avant de commencer : un appareil à température ambiante cuit plus régulièrement.",
    "Posez le moule à charnière sur une plaque : si l’appareil fuit par la charnière, c’est la plaque qui le reçoit, pas la sole du four.",
    "Le gâteau est meilleur le lendemain qu’à la sortie du four : le citron et le fromage s’y affirment au froid.",
  ],
  mistakes: [
    "Utiliser le fromage blanc sans l’égoutter : l’appareil est trop liquide, le gâteau rend de l’eau et la pâte reste molle.",
    "Cuire trop chaud : le gâteau monte très vite, se fend sur le dessus et retombe en cratère.",
    "Le sortir aussitôt du four : le choc de température le fait tomber d’un coup et craqueler.",
    "Le démouler tiède : il est encore fragile, se fend à la coupe et s’affaisse.",
  ],
  variations: [
    {
      title: "Aux raisins secs",
      text: "Faites gonfler 60 g de raisins secs 15 minutes dans de l’eau chaude, égouttez-les, roulez-les dans 1 cac de fécule et ajoutez-les à l’appareil avant les blancs. Ils restent ainsi répartis au lieu de tomber au fond.",
    },
    {
      title: "À la vanille",
      text: "Remplacez le zeste de citron par les graines d’une gousse de vanille, grattées dans la crème avant de la mélanger au fromage blanc.",
    },
    {
      title: "Sans pâte",
      text: "Beurrez et farinez le moule, versez l’appareil directement et faites cuire 60 minutes à 160 °C, puis suivez le même refroidissement. Le gâteau est plus fragile au démoulage : passez une lame fine le long du bord avant d’ouvrir la charnière.",
    },
  ],
  storage:
    "Couvert, au réfrigérateur, le gâteau se garde 3 jours. Sortez-le 15 minutes avant de servir. Il se congèle en parts emballées une à une, jusqu’à 1 mois : décongelez-les une nuit au réfrigérateur et ne les recongelez pas.",
  pairing: "Un thé noir à l’heure du goûter, et quelques fruits rouges ou une compote de quetsches à côté.",
  easy: {
    shortcut: "pâte sucrée prête à dérouler",
    note: "On gagne la pâte à sabler et son repos, mais un rouleau de 30 cm ne monte pas assez haut dans un moule de 24 cm : prenez un moule de 22 cm et un peu moins d’appareil. Choisissez une pâte pur beurre, sucrée ou brisée.",
    times: { prep: 20, cook: 75, rest: 660 },
    ingredients: [
      {
        title: "Le fond",
        items: [
          { qty: 1, unit: "rouleau", name: "pâte sucrée pur beurre", note: "environ 230 g", fixed: true },
          { qty: 10, unit: "g", name: "beurre doux", note: "mou, pour le moule", fixed: true },
        ],
      },
      {
        title: "L’appareil",
        items: [
          { qty: 600, unit: "g", name: "fromage blanc entier", step: 50 },
          { qty: 3, name: "œuf", plural: "œufs", note: "à température ambiante", step: 1 },
          {
            qty: 120,
            unit: "g",
            name: "sucre en poudre",
            note: "80 g pour les jaunes, 40 g pour les blancs",
            step: 10,
          },
          { qty: 40, unit: "g", name: "fécule de maïs", step: 5 },
          { qty: 150, unit: "g", name: "crème fraîche épaisse", note: "entière", step: 10 },
          { qty: 1, name: "citron non traité", plural: "citrons non traités", note: "le zeste finement râpé", step: 1 },
          { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        ],
      },
    ],
    method: [
      {
        title: "Le gâteau",
        steps: [
          {
            title: "Égoutter le fromage blanc",
            text: "Laissez égoutter le fromage blanc 2 h au réfrigérateur dans une passoire tapissée d’une étamine, au-dessus d’un saladier.",
            timer: { minutes: 120, label: "Égouttage du fromage blanc" },
          },
          {
            title: "Précuire le fond",
            text: "Préchauffez le four à 180 °C. Beurrez le moule de 22 cm, déroulez la pâte dedans, faites-la remonter sur les bords et piquez le fond. Couvrez de papier et de légumes secs, précuisez 15 minutes, retirez les poids et baissez le four à 160 °C.",
            timer: { minutes: 15, label: "Précuisson du fond" },
          },
          {
            title: "Préparer l’appareil",
            text: "Mélangez le fromage blanc égoutté, les jaunes, 80 g de sucre, la fécule, la crème et le zeste. Montez les blancs avec le sel et le reste du sucre jusqu’au bec souple, incorporez-les en deux fois à la maryse et versez dans le fond.",
          },
          {
            title: "Cuire doucement",
            text: "Faites cuire 60 minutes à 160 °C sans ouvrir la porte, jusqu’à ce que le dessus soit blond doré et que le centre tremble à peine.",
            timer: { minutes: 60, label: "Cuisson du gâteau" },
          },
          {
            title: "Refroidir porte entrouverte",
            text: "Éteignez le four, coincez une cuillère en bois dans la porte et laissez le gâteau refroidir ainsi 1 h.",
            timer: { minutes: 60, label: "Refroidissement au four" },
          },
          {
            title: "Laisser prendre une nuit",
            text: "Une fois à température ambiante, couvrez-le et mettez-le 8 h au moins au réfrigérateur avant de le démouler.",
            timer: { minutes: 480, label: "Nuit au réfrigérateur" },
          },
        ],
      },
    ],
  },
  faq: [
    {
      q: "Pourquoi mon gâteau au fromage blanc retombe-t-il ?",
      a: "Un peu, c’est normal : l’air des blancs se contracte en refroidissant. Pour limiter la chute, cuisez à 160 °C plutôt que plus chaud, et laissez-le refroidir 1 h dans le four éteint, porte entrouverte, avant de le sortir.",
    },
    {
      q: "Quelle différence entre gâteau au fromage blanc et cheesecake ?",
      a: "La texture. Le cheesecake new-yorkais est dense et crémeux, fait de fromage frais type cream cheese sur des biscuits écrasés. Le gâteau au fromage blanc alsacien est plus léger, presque mousseux, grâce aux blancs en neige, et cuit sur une pâte sucrée.",
    },
    {
      q: "Faut-il égoutter le fromage blanc pour un gâteau ?",
      a: "Oui. Égoutté 2 h dans une étamine, il perd une partie de son petit-lait : le gâteau tient mieux à la coupe et ne rend pas d’eau. Une faisselle égouttée de la même façon convient très bien.",
    },
    {
      q: "Quel fromage blanc choisir pour un gâteau au fromage blanc ?",
      a: "Un fromage blanc entier, au lait entier. Les versions allégées rendent plus d’eau et donnent un gâteau plus sec et plus acide. En faisselle, bien égoutté, il donne une texture un peu plus dense qu’un fromage blanc lisse.",
    },
    {
      q: "Comment éviter que le gâteau au fromage blanc se fende ?",
      a: "En évitant les écarts de température. Cuisez à 160 °C, sans ouvrir la porte, et laissez-le refroidir 1 h dans le four éteint, porte entrouverte. Ne battez pas l’appareil au fromage blanc : seuls les blancs doivent apporter de l’air.",
    },
    {
      q: "Peut-on congeler un gâteau au fromage blanc ?",
      a: "Oui, en parts emballées séparément, jusqu’à 1 mois. Décongelez-les une nuit au réfrigérateur ; la mie devient un peu plus humide et la pâte moins croustillante.",
    },
  ],
  nutrition: {
    calories: 430,
    protein: 12,
    fat: 23,
    saturatedFat: 14,
    carbs: 44,
    sugar: 25,
    fiber: 1,
    sodium: 95,
  },
  annotations: { hero: "haut, léger, à peine tassé", detail: "une nuit au frais avant de couper" },
  images: {
    heroAlt:
      "Gâteau au fromage blanc à l’alsacienne coupé en parts sur un présentoir en porcelaine, sur un fond de pâte sucrée dorée.",
    detailAlt: "Part de gâteau au fromage blanc sur une assiette blanche, avec sa mie pâle et son dessus doré.",
    credits: {
      hero: {
        photographer: "Gundula Vogel",
        url: "https://www.pexels.com/photo/delicious-rustic-cheesecake-on-floral-stand-34505466/",
      },
      detail: {
        photographer: "4028mdk09",
        url: "https://commons.wikimedia.org/w/index.php?curid=18030226",
        source: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#C9A227",
    onAccent: "#1B1712",
    ink: "#6F5A0E",
    tint: "#FAF5E1",
    deep: "#19150A",
    focus: "55% 25%",
  },
});
