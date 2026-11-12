import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "dinde-farcie",
  title: "Dinde farcie aux marrons",
  seoTitle: "Dinde farcie aux marrons : cuisson au four et farce à 74 °C",
  tagline: "La farce cuit aussi, sonde à l’appui.",
  description:
    "Dinde farcie aux marrons pour 8 : une dinde fermière de 4 kg, 3 h au four à 170 °C, 74 °C dans la cuisse et dans la farce, puis 30 minutes de repos.",
  summary:
    "Pour 8 personnes, farcissez sans tasser une dinde fermière de 4 kg avec environ 700 g de farce (chair à saucisse, marrons, pain trempé, herbes), puis rôtissez-la 3 h à 170 °C, soit 45 minutes par kilo, en l’arrosant toutes les 30 minutes. Elle est cuite quand la sonde affiche 74 °C dans la cuisse et au centre de la farce. Elle repose ensuite 30 minutes, le temps de faire le jus. Comptez 4 h 15 en tout, dont 45 minutes de travail.",
  intro: [
    "Une dinde farcie, ce sont deux cuissons en une. La volaille rôtit au four pendant que la farce cuit doucement à l’abri, au centre : chair à saucisse, marrons, pain trempé et herbes, qui boivent le jus de la bête pendant trois heures.",
    "C’est aussi là que ça se complique. Coincée au milieu, la farce chauffe en dernier, et elle contient du porc cru et du jus de volaille : elle doit atteindre 74 °C, comme la cuisse. Tassée, ou glissée dans la dinde la veille, elle reste tiède au cœur pendant que le blanc sèche.",
    "D’où les deux règles de cette recette : farcir sans tasser, au dernier moment, et laisser la sonde décider plutôt que la montre. Pour le reste, une cuillère pour arroser toutes les 30 minutes suffit.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "dinde farcie",
    "dinde farcie aux marrons",
    "recette dinde de noël",
    "temps de cuisson dinde farcie",
    "cuisson dinde 4 kg",
    "farce pour dinde",
    "dinde farcie au four",
    "température à cœur dinde",
  ],
  servings: 8,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 45, cook: 180, rest: 30 },
  difficulty: "Intermédiaire",
  cost: "€€€",
  season: ["Hiver"],
  tags: ["noel"],
  equipment: [
    "grand plat à rôtir d’au moins 35 cm",
    "thermomètre à sonde",
    "ficelle de cuisine",
    "papier aluminium",
    "petit plat à gratin pour le reste de farce",
    "passoire fine",
  ],
  ingredients: [
    {
      title: "La farce",
      items: [
        { qty: 100, unit: "g", name: "pain rassis", note: "la mie seule, en dés", step: 10 },
        { qty: 10, unit: "cl", name: "lait", note: "tiède", step: 1 },
        { qty: 20, unit: "g", name: "beurre", step: 5 },
        { qty: 2, name: "échalote", plural: "échalotes", note: "ciselées", step: 1 },
        { qty: 400, unit: "g", name: "chair à saucisse", step: 10 },
        { qty: 1, name: "œuf", plural: "œufs", step: 1 },
        { qty: 15, unit: "g", name: "persil plat", note: "ciselé", step: 5 },
        { qty: 2, unit: "brin", name: "thym", note: "effeuillé", step: 1 },
        { qty: 0.5, unit: "cac", name: "sel fin", step: 0.5 },
        { name: "poivre du moulin" },
        {
          qty: 300,
          unit: "g",
          name: "marron cuit",
          plural: "marrons cuits",
          note: "sous vide, grossièrement cassés",
          step: 10,
        },
      ],
    },
    {
      title: "La dinde",
      items: [
        {
          qty: 1,
          name: "dinde fermière",
          plural: "dindes fermières",
          note: "4 kg prête à cuire, avec le cou et le gésier",
          step: 1,
          fixed: true,
        },
        { qty: 2, unit: "cac", name: "sel fin", fixed: true },
        { qty: 10, unit: "g", name: "beurre", note: "pour le plat de farce", fixed: true },
        { qty: 1, name: "oignon", plural: "oignons", note: "en quartiers", step: 1, fixed: true },
        { qty: 50, unit: "g", name: "beurre mou", fixed: true },
        { qty: 20, unit: "cl", name: "eau", fixed: true },
      ],
    },
    {
      title: "Le jus",
      items: [
        { qty: 30, unit: "cl", name: "bouillon de volaille", note: "peu salé", step: 5 },
        { qty: 1, unit: "cac", name: "fécule de maïs", step: 0.5 },
        { qty: 2, unit: "cas", name: "eau froide", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "La farce",
      steps: [
        {
          title: "Tremper le pain",
          text: "Versez le lait tiède sur les dés de mie et laissez-les gonfler 10 minutes, puis pressez-les entre vos mains : la mie doit rester humide, pas détrempée. Sortez la dinde du réfrigérateur pendant que vous préparez la farce.",
          timer: { minutes: 10, label: "Pain au lait" },
        },
        {
          title: "Faire suer les échalotes",
          text: "Faites fondre le beurre dans une poêle sur feu moyen et faites-y suer les échalotes 5 minutes, en remuant, jusqu’à ce qu’elles soient translucides sans colorer. Étalez-les dans une assiette pour qu’elles tiédissent : chaudes, elles commenceraient à cuire la chair à saucisse.",
          timer: { minutes: 5, label: "Échalotes" },
        },
        {
          title: "Mélanger la farce",
          text: "Dans un saladier, mélangez à la main la chair à saucisse, la mie pressée, les échalotes, l’œuf, le persil, le thym, le sel et un bon tour de poivre. Ajoutez les marrons en dernier et remuez juste assez pour les répartir sans les écraser. Gardez la farce au réfrigérateur jusqu’au moment de farcir.",
          tip: "Pour vérifier l’assaisonnement, faites cuire une noisette de farce à la poêle et goûtez-la cuite, jamais crue : elle contient du porc.",
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Farcir sans tasser",
          text: "Préchauffez le four à 170 °C. Salez et poivrez l’intérieur de la dinde, puis remplissez-la de farce aux trois quarts, environ 700 g, sans la tasser. Mettez le reste dans le petit plat beurré et réservez-le au réfrigérateur. Farcissez au tout dernier moment, juste avant d’enfourner.",
          tip: "La farce gonfle en cuisant. Tassée, elle forme un bloc dense que la chaleur met très longtemps à traverser.",
        },
        {
          title: "Brider la dinde",
          text: "Bouchez l’ouverture avec un morceau de pain, ou cousez-la à la ficelle. Croisez les pilons et attachez-les ensemble, puis repliez les ailerons sous le dos. Bien ficelée, la dinde garde sa farce et cuit de façon plus régulière.",
        },
        {
          title: "Beurrer et enfourner",
          text: "Posez la dinde dans le plat, poitrine vers le haut, avec l’oignon, le cou et le gésier autour. Massez-la avec le beurre mou, salez, poivrez et versez l’eau au fond. Couvrez la poitrine d’une feuille d’aluminium, sans serrer, et enfournez pour 1 h 30 en arrosant toutes les 30 minutes avec le jus du plat.",
          timer: { minutes: 90, label: "Dinde sous aluminium" },
          tip: "L’aluminium renvoie une partie de la chaleur : le blanc, qui sèche vite, cuit plus lentement que les cuisses, qui demandent plus de temps.",
        },
        {
          title: "Dorer en arrosant",
          text: "Retirez l’aluminium et poursuivez la cuisson 1 h 30, en arrosant toujours toutes les 30 minutes ; ajoutez un peu d’eau si le fond commence à brûler. Glissez le plat de farce au four pour les 45 dernières minutes. La peau doit finir brun doré, tendue et brillante.",
          timer: { minutes: 90, label: "Dinde à découvert" },
        },
        {
          title: "Vérifier à 74 °C",
          text: "Piquez la sonde dans la partie la plus épaisse de la cuisse, sans toucher l’os : elle doit afficher 74 °C. Piquez-la ensuite au centre de la farce, puis dans le plat de farce : 74 °C aussi. Si l’un des trois n’y est pas, prolongez de 15 minutes et vérifiez à nouveau.",
          timer: { minutes: 15, label: "Cuisson prolongée" },
          tip: "Le jus qui coule de la cuisse piquée doit être clair, sans trace rosée. C’est un bon indice, mais seule la sonde dit si la farce est cuite.",
        },
        {
          title: "Laisser reposer",
          text: "Posez la dinde sur un plat chaud, farce à l’intérieur, couvrez-la d’aluminium sans serrer et laissez-la reposer 30 minutes avant de la découper. Elle reste brûlante à cœur et perdra beaucoup moins de jus sur la planche.",
          timer: { minutes: 30, label: "Repos de la dinde" },
        },
      ],
    },
    {
      title: "Le jus",
      steps: [
        {
          title: "Dégraisser le plat",
          text: "Pendant le repos, retirez le cou et le gésier, inclinez le plat et ôtez à la cuillère la graisse qui remonte en surface. Laissez au fond les sucs bruns et l’oignon : c’est tout le goût du jus.",
        },
        {
          title: "Déglacer",
          text: "Posez le plat sur feu moyen, ou versez le tout dans une casserole s’il ne va pas sur le feu. Ajoutez le bouillon, grattez les sucs à la cuillère en bois et laissez frémir 5 minutes, puis filtrez dans une petite casserole.",
          timer: { minutes: 5, label: "Jus" },
        },
        {
          title: "Lier le jus",
          text: "Délayez la fécule dans l’eau froide, versez-la dans le jus frémissant en fouettant et laissez bouillir 1 minute : il doit napper la cuillère. Ajoutez le jus rendu par la dinde pendant le repos, goûtez, puis rectifiez en sel et en poivre.",
          timer: { minutes: 1, label: "Liaison du jus" },
        },
        {
          title: "Découper et servir",
          text: "Retirez la ficelle, sortez la farce à la cuillère et réunissez-la avec celle du plat. Détachez les cuisses, puis tranchez les blancs dans la largeur, sur 1 cm d’épaisseur. Servez aussitôt, avec le jus bien chaud en saucière.",
        },
      ],
    },
  ],
  science: [
    {
      title: "La farce chauffe en dernier",
      text: "Au centre de la dinde, la farce est isolée par plusieurs centimètres de chair et d’os : c’est le dernier endroit à monter en température. Comme elle contient du porc cru et absorbe le jus cru de la volaille, elle doit atteindre 74 °C, le seuil retenu pour la volaille, et pas seulement être chaude.",
    },
    {
      title: "Blanc et cuisse ne veulent pas la même chaleur",
      text: "Le blanc, maigre, commence à sécher quand il dépasse largement 74 °C. La cuisse, riche en tissu conjonctif, a besoin de plus de temps pour que son collagène se transforme en gélatine. L’aluminium sur la poitrine pendant la première moitié de la cuisson réduit l’écart entre les deux.",
    },
    {
      title: "Ce que fait le repos",
      text: "À la sortie du four, la température s’égalise entre la surface et le cœur, et la chair, un peu moins brûlante, retient mieux son jus quand on la tranche. Une dinde de 4 kg couverte d’aluminium reste chaude bien au-delà de 30 minutes.",
    },
    {
      title: "La fécule épaissit à ébullition",
      text: "Les grains d’amidon de maïs gonflent et lient le liquide en approchant de l’ébullition. Une minute à gros bouillons suffit pour que le jus nappe la cuillère et perde le goût farineux de la fécule crue.",
    },
  ],
  tips: [
    "Commandez la dinde chez le volailler une à deux semaines avant Noël, et demandez-lui le cou et le gésier : ce sont eux qui font le jus.",
    "Vérifiez la veille que le plat, avec une dinde de 4 kg dedans, entre dans votre four porte fermée.",
    "Une sonde à alarme laissée dans la cuisse évite d’ouvrir le four pour rien : chaque ouverture fait perdre de la chaleur.",
    "Préparez la mie et les échalotes la veille, chacune de son côté au réfrigérateur : le jour même, la farce se monte en 5 minutes.",
    "Le plat de farce cuit à part dore en surface, ce que la farce dans la dinde ne fait jamais. Gardez-le pour ceux qui aiment la croûte.",
  ],
  mistakes: [
    "Décongeler la dinde sur le plan de travail : la surface reste des heures à température ambiante pendant que le cœur est encore gelé. Décongelez-la au réfrigérateur, environ 2 jours pour 4 kg.",
    "Farcir la veille, ou longtemps avant d’enfourner : la farce humide, au contact du jus cru, est un terrain idéal pour les bactéries. Farcissez juste avant la cuisson.",
    "Tasser la farce jusqu’à l’ouverture : elle gonfle, déborde, et son centre peine à atteindre 74 °C pendant que le blanc sèche. Remplissez aux trois quarts.",
    "Se fier au seul minutage : chaque four chauffe à sa façon. Si la farce n’est pas à 74 °C, remettez la dinde au four par tranches de 15 minutes.",
    "Découper dès la sortie du four : le jus file sur la planche et le blanc s’assèche. Trente minutes sous aluminium ne refroidissent pas une dinde de 4 kg.",
  ],
  variations: [
    {
      title: "Farce cuite à part",
      text: "Mettez toute la farce dans un plat beurré couvert d’aluminium et faites-la cuire 1 heure à 170 °C, dont les 20 dernières minutes à découvert, jusqu’à 74 °C au centre. La dinde, vide, cuit environ 30 minutes de moins : vérifiez la cuisse à la sonde dès 2 h.",
    },
    {
      title: "Farce aux pruneaux",
      text: "Remplacez 100 g de marrons par 100 g de pruneaux dénoyautés coupés en quatre, trempés 10 minutes dans 2 cas d’armagnac. L’alcool cuit avec la farce, mais il en reste un peu : pensez-y pour les enfants.",
    },
    {
      title: "Une dinde de 6 kg pour 12",
      text: "Gardez 170 °C et 45 minutes par kilo, soit 4 h 30 de cuisson, et multipliez la farce par 1,5. Retirez l’aluminium à mi-cuisson et commencez à vérifier à la sonde 30 minutes avant la fin.",
    },
  ],
  storage:
    "Mettez les restes au réfrigérateur dans les 2 heures qui suivent le repas, la farce dans une boîte, la viande détachée des os dans une autre : 2 à 3 jours au frais. La viande découpée, sans farce, se congèle 3 mois ; une fois décongelée, ne la recongelez pas. Réchauffez la farce jusqu’à ce qu’elle soit brûlante au centre.",
  pairing:
    "Un rouge souple, peu tannique : un bourgogne pinot noir, un saint-nicolas-de-bourgueil ou un chinon. Côté assiette, une purée de céleri ou des légumes racines rôtis, et quelques marrons poêlés.",
  faq: [
    {
      q: "Combien de temps cuire une dinde farcie de 4 kg ?",
      a: "Environ 3 h à 170 °C, soit 45 minutes par kilo de dinde pesée avant d’être farcie. Commencez à vérifier au bout de 2 h 30 : elle est cuite quand la cuisse et le centre de la farce affichent tous les deux 74 °C. Ajoutez 30 minutes de repos avant de découper.",
    },
    {
      q: "Comment décongeler une dinde surgelée ?",
      a: "Au réfrigérateur uniquement, dans son emballage, posée sur un plat qui recueille le jus. Comptez environ 24 heures par tranche de 2 kg, soit 2 jours pour une dinde de 4 kg. Jamais à température ambiante : la surface resterait des heures entre 4 et 63 °C, la zone où les bactéries se multiplient.",
    },
    {
      q: "Peut-on farcir la dinde la veille ?",
      a: "Non. Une volaille farcie à l’avance garde au cœur une farce humide, au contact du jus cru, qui refroidit lentement au réfrigérateur. Préparez la mie et les échalotes la veille si vous voulez, au frais, mais mélangez la farce et farcissez la dinde juste avant de l’enfourner.",
    },
    {
      q: "Quelle température à cœur pour une dinde farcie ?",
      a: "74 °C, à deux endroits : dans la partie la plus épaisse de la cuisse, sans toucher l’os, et au centre de la farce. La farce chauffe en dernier, donc une cuisse à 74 °C ne garantit pas une farce cuite.",
    },
    {
      q: "Faut-il arroser la dinde pendant la cuisson ?",
      a: "Oui, toutes les 30 minutes. L’arrosage dore et parfume la peau, mais il ne rend pas la chair plus juteuse : le jus ne pénètre pas. Ce qui garde le blanc moelleux, c’est de sortir la dinde dès qu’elle atteint 74 °C.",
    },
    {
      q: "Pour combien de personnes une dinde de 4 kg ?",
      a: "8 personnes, avec la farce et un accompagnement. On compte environ 500 g de dinde crue par convive, os compris. Pour 12, prenez une dinde de 6 kg et prévoyez 4 h 30 de cuisson.",
    },
  ],
  nutrition: {
    calories: 660,
    protein: 66,
    fat: 34,
    saturatedFat: 12,
    carbs: 23,
    sugar: 4,
    fiber: 2,
    sodium: 1000,
  },
  annotations: { hero: "on l’arrose toutes les 30 minutes", detail: "trente minutes de repos, sous alu" },
  images: {
    heroAlt:
      "Dinde rôtie à la peau dorée sur un plateau en bois, entourée de pommes de terre grenaille, de citron et de romarin",
    detailAlt: "Dinde entière rôtie, la peau dorée et brillante, posée sur une plaque garnie de papier cuisson",
    credits: {
      hero: {
        photographer: "Monstera Production",
        url: "https://www.pexels.com/photo/turkey-roasted-with-potatoes-and-lemon-5876662/",
        source: "Pexels",
      },
      detail: {
        photographer: "RDNE Stock project",
        url: "https://www.pexels.com/photo/roasted-chicken-on-blue-tray-5847876/",
        source: "Pexels",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#C0712B",
    onAccent: "#1B1712",
    ink: "#8A4A14",
    tint: "#FAF0E6",
    deep: "#1A0E07",
    focus: "55% 50%",
  },
});
