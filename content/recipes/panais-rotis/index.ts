import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "panais-rotis",
  title: "Panais rôtis au four",
  seoTitle: "Panais rôtis au four, miel et thym, dorés en 35 minutes",
  tagline: "Le miel arrive en dernier.",
  description:
    "Panais rôtis pour 4 : 1 kg de panais en bâtonnets, huilés et rôtis 35 minutes à 200 °C, laqués au miel et au thym pendant les 5 dernières minutes.",
  summary:
    "Pour 4 personnes, épluchez 1 kg de panais, coupez-les en bâtonnets de 1,5 cm d’épaisseur en retirant le cœur des plus gros, enrobez-les de 3 cuillères à soupe d’huile et rôtissez-les 30 minutes à 200 °C en les retournant une fois. Laquez-les avec 2 cuillères à soupe de miel et du thym, puis remettez 5 minutes au four. Comptez 50 minutes en tout, dont 15 de préparation.",
  intro: [
    "Le panais ressemble à une grosse carotte blanche et se cuisine comme elle, avec un goût plus sucré qui tire vers la noisette. Rôti, il dore sur les faces et devient fondant dedans, presque crémeux. On le pose à côté d’un rôti, d’un poulet ou d’une volaille de fête.",
    "Il rate pour deux raisons. Des bâtonnets d’épaisseurs différentes, dont les fins brûlent pendant que les gros restent fermes. Et le cœur des gros panais, ligneux, qui reste dur quelle que soit la cuisson.",
    "Le miel, lui, n’entre qu’à la fin. Mis dès le départ, il noircit bien avant que le panais soit cuit et laisse un goût de caramel brûlé. Cinq minutes suffisent pour qu’il laque les bâtonnets.",
  ],
  category: "Accompagnement",
  cuisine: "Française",
  keywords: [
    "panais rôtis",
    "panais rôtis au four",
    "panais au miel",
    "panais rôtis miel thym",
    "cuisson panais au four",
    "comment cuisiner le panais",
    "frites de panais au four",
    "accompagnement volaille hiver",
  ],
  diet: ["vegetarian", "glutenFree"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 15, cook: 35 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: ["plaque de cuisson de 30 × 40 cm", "papier cuisson", "économe", "grand saladier", "spatule"],
  ingredients: [
    {
      items: [
        { qty: 1, unit: "kg", name: "panais", note: "moyens et fermes, 6 environ", step: 0.25 },
        { qty: 3, unit: "cas", name: "huile d’olive", step: 0.5 },
        { qty: 1, unit: "cac", name: "sel fin", step: 0.5 },
        { name: "poivre du moulin" },
        { qty: 2, unit: "cas", name: "miel liquide", step: 0.5 },
        { qty: 4, unit: "brin", name: "thym frais", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "Préparation",
      steps: [
        {
          title: "Éplucher les panais",
          text: "Préchauffez le four à 200 °C. Épluchez les panais à l’économe et coupez les deux extrémités. Taillez-les en tronçons de 7 à 8 cm de long.",
        },
        {
          title: "Couper des bâtonnets réguliers",
          text: "Recoupez chaque tronçon en bâtonnets de 1,5 cm d’épaisseur : la partie fine en deux, la partie large en quatre ou six. Sur les gros panais, si le centre est plus foncé ou résiste à la pointe du couteau, retirez-le d’une coupe en biais sur chaque quartier.",
          tip: "Même épaisseur partout : c’est ce qui fait qu’ils sont cuits en même temps.",
        },
        {
          title: "Huiler et étaler",
          text: "Dans le saladier, mélangez les bâtonnets avec l’huile, le sel et du poivre jusqu’à ce qu’ils brillent tous. Étalez-les sur la plaque couverte de papier cuisson, en une seule couche, sans qu’ils se touchent.",
          tip: "Trop serrés, ils cuisent à la vapeur : prenez deux plaques s’il le faut.",
        },
        {
          title: "Rôtir la première face",
          text: "Enfournez à mi-hauteur pour 20 minutes, jusqu’à ce que la face contre la plaque soit bien dorée. Retournez chaque bâtonnet à la spatule.",
          timer: { minutes: 20, label: "Première face" },
        },
        {
          title: "Rôtir la seconde face",
          text: "Remettez 10 minutes au four. Pendant ce temps, effeuillez le thym et mélangez-le au miel, tiédi quelques secondes s’il a cristallisé.",
          timer: { minutes: 10, label: "Seconde face" },
        },
        {
          title: "Laquer au miel",
          text: "Arrosez les panais du miel au thym, remuez-les sur la plaque pour les enrober et remettez 5 minutes au four, pas plus. C’est prêt quand le miel bulle et brunit sur les bords, et que la pointe d’un couteau entre sans forcer. Servez aussitôt.",
          timer: { minutes: 5, label: "Laque au miel" },
          tip: "Surveillez dès 4 minutes : le miel passe vite du doré au brûlé.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Une racine qui dore facilement",
      text: "Le panais contient plus de sucres que la pomme de terre, autour de 5 g pour 100 g. À 200 °C, ces sucres caramélisent et réagissent avec les protéines (réaction de Maillard) sur les faces en contact avec la plaque, d’où la croûte dorée et le goût de noisette.",
    },
    {
      title: "Pourquoi le miel à la fin",
      text: "Le miel est surtout fait de fructose et de glucose. Le fructose commence à caraméliser vers 110 °C, bien en dessous de la température du four : en une demi-heure, il brûlerait. Cinq minutes suffisent à le faire buller et brunir.",
    },
    {
      title: "Une seule couche",
      text: "Entassés, les bâtonnets baignent dans la vapeur de leur propre eau et ramollissent sans dorer. Espacés, cette eau s’évapore, la surface sèche, et la coloration peut commencer.",
    },
  ],
  tips: [
    "Choisissez des panais moyens, fermes et sans taches. Les très gros ont souvent un cœur fibreux à retirer, donc plus de perte.",
    "Les panais d’hiver, qui ont connu le froid, sont plus sucrés : une partie de leur amidon s’est changée en sucres.",
    "Tiédissez le miel s’il est épais ou cristallisé : liquide, il se répartit en fine couche au lieu de former des gouttes qui brûlent.",
    "Gardez la plaque à mi-hauteur : trop près du haut du four, le dessus brunit avant que le cœur soit fondant.",
  ],
  mistakes: [
    "Mettre le miel dès le début : il noircit et donne un goût de caramel brûlé. Pas de rattrapage possible, il se met dans les 5 dernières minutes.",
    "Couper des bâtonnets inégaux : les fins brûlent pendant que les gros restent fermes. Si c’est fait, sortez les fins de la plaque avant les autres.",
    "Tasser les panais sur une seule plaque : ils cuisent à l’étouffée et restent pâles. Étalez-les sur deux plaques.",
    "Garder le cœur fibreux des gros panais : il reste dur sous la dent même quand le reste fond.",
  ],
  variations: [
    {
      title: "Au beurre et à la moutarde",
      text: "Remplacez le miel par 30 g de beurre fondu avec 1 cuillère à café de graines de moutarde, versé dans les 5 dernières minutes. Parsemez de persil haché à la sortie du four.",
    },
    {
      title: "Au sirop d’érable",
      text: "2 cuillères à soupe de sirop d’érable à la place du miel, au même moment. Il brûle aussi vite, et la recette devient vegan.",
    },
    {
      title: "Avec des carottes",
      text: "500 g de panais et 500 g de carottes, taillés à la même épaisseur. Les temps de cuisson ne changent pas.",
    },
  ],
  storage:
    "Les panais rôtis se gardent 2 à 3 jours au réfrigérateur en boîte fermée. Réchauffez-les 8 à 10 minutes au four à 200 °C, étalés sur une plaque : ils retrouvent un peu de croustillant, ce que le micro-ondes ne permet pas.",
  pairing:
    "Avec un poulet rôti, une pintade, un rôti de porc ou un gigot. Leur côté sucré va aussi très bien avec un magret de canard.",
  faq: [
    {
      q: "Faut-il éplucher les panais ?",
      a: "Oui, pour des panais rôtis. La peau reste un peu coriace à la cuisson et garde un goût de terre. Un coup d’économe suffit. Les petits panais nouveaux, à peau très fine, peuvent se cuire simplement brossés.",
    },
    {
      q: "Combien de temps cuire des panais au four ?",
      a: "30 à 35 minutes à 200 °C pour des bâtonnets de 1,5 cm, retournés une fois au bout de 20 minutes. Ils sont cuits quand la pointe d’un couteau entre sans forcer et que les faces sont dorées. Plus épais, comptez 10 minutes de plus.",
    },
    {
      q: "Faut-il enlever le cœur du panais ?",
      a: "Oui, sur les gros panais. Leur cœur devient dur et fibreux et ne cuit pas comme le reste. Sur les panais fins et jeunes, il est tendre : on le garde.",
    },
    {
      q: "Peut-on faire des panais rôtis sans miel ?",
      a: "Oui. Rôtis seulement à l’huile, au sel et au thym, ils sont déjà sucrés. Le sirop d’érable remplace le miel pour une version vegan, dans les mêmes 5 dernières minutes.",
    },
    {
      q: "Peut-on préparer les panais à l’avance ?",
      a: "Oui, épluchés et coupés jusqu’à la veille, dans une boîte fermée au réfrigérateur. Ils brunissent un peu en surface à l’air, sans conséquence sur le goût. Rôtissez-les au dernier moment.",
    },
    {
      q: "Avec quoi servir des panais rôtis ?",
      a: "Avec une volaille rôtie, un rôti de porc, un gigot ou un magret. Ils vont aussi avec un plat de lentilles, et se mélangent bien à d’autres légumes rôtis, carottes ou betteraves.",
    },
  ],
  nutrition: {
    calories: 260,
    protein: 3,
    fat: 11,
    saturatedFat: 2,
    carbs: 33,
    sugar: 18,
    fiber: 9,
    sodium: 510,
  },
  annotations: { hero: "dorés sur deux faces, pas plus", detail: "le cœur des gros, on l’enlève" },
  images: {
    heroAlt:
      "Panais rôtis dorés dans un plat ovale en fonte, avec beurre mousseux, graines de moutarde, persil et pince de service",
    detailAlt: "Tronçons de panais coupés vus de face, chair crème et cœur plus foncé au centre de chacun",
    credits: {
      hero: {
        photographer: "L. Lum",
        url: "https://www.pexels.com/photo/close-up-view-of-freshly-cut-parsnips-36517116/",
        source: "Pexels",
      },
      detail: {
        photographer: "L. Lum",
        url: "https://www.pexels.com/photo/close-up-view-of-freshly-cut-parsnips-36517116/",
        source: "Pexels",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#D9A12B",
    onAccent: "#1B1406",
    ink: "#7A5508",
    tint: "#FBF5E3",
    deep: "#1A1405",
    focus: "55% 50%",
  },
});
