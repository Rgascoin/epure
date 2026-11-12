import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "tarte-au-potiron",
  title: "Tarte au potiron",
  seoTitle: "Tarte au potiron épicée, avec un potiron rôti au four",
  tagline: "On la sort quand le centre tremble.",
  description:
    "Tarte au potiron rôti, crème aux œufs, cannelle, gingembre et muscade sur une pâte brisée précuite. Pour 8 parts, 40 minutes de travail.",
  summary:
    "Pour 8 parts, faites rôtir 1 kg de potiron 45 minutes à 200 °C, mixez-en 450 g avec 3 œufs, 100 g de cassonade, 200 ml de crème, de la cannelle, du gingembre et de la muscade. Versez sur une pâte brisée de 24 cm précuite 28 minutes, puis enfournez 45 minutes à 170 °C. Comptez 5 h 20 en tout, dont 40 minutes de travail et 2 h 45 de repos et de refroidissement.",
  intro: [
    "C’est une crème cuite, comme un flan, qui a pris la couleur et le goût du potiron. Les épices la tirent vers l’automne : cannelle, gingembre, un peu de muscade. Rien de plus.",
    "Elle rate pour deux raisons. Une purée trop aqueuse, et la crème ne prend jamais vraiment, la pâte se détrempe. Une cuisson trop longue, et le centre se fend en refroidissant, avec une texture granuleuse.",
    "Faites donc rôtir le potiron au lieu de le cuire à l’eau : il perd de l’eau au lieu d’en prendre. Et sortez la tarte quand le centre tremble encore, la chaleur résiduelle finit le travail.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "tarte au potiron",
    "recette tarte au potiron",
    "tarte au potiron sucrée",
    "tarte à la citrouille",
    "pumpkin pie maison",
    "tarte au potiron épicée",
    "purée de potiron pour tarte",
    "tarte au potiron facile",
  ],
  diet: ["vegetarian"],
  servings: 8,
  servingsLabel: { one: "part", other: "parts" },
  times: { prep: 40, cook: 115, rest: 165 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Automne"],
  tags: ["halloween", "automne"],
  equipment: [
    "moule à tarte de 24 cm",
    "plaque de cuisson et papier cuisson",
    "billes de cuisson ou haricots secs",
    "mixeur plongeant",
    "grille à pâtisserie",
  ],
  ingredients: [
    {
      title: "La purée de potiron",
      items: [
        {
          qty: 1000,
          unit: "g",
          name: "potiron",
          note: "une tranche avec la peau, pour obtenir 450 g de purée",
          step: 50,
        },
      ],
    },
    {
      title: "La pâte brisée",
      items: [
        { qty: 200, unit: "g", name: "farine", note: "type 55", step: 10 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 20, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 100, unit: "g", name: "beurre doux", note: "très froid, en dés", step: 5 },
        { qty: 50, unit: "ml", name: "eau", note: "glacée", step: 5 },
        { qty: 10, unit: "g", name: "beurre pour le moule", note: "mou", step: 5, fixed: true },
      ],
    },
    {
      title: "La garniture",
      items: [
        { qty: 3, name: "œuf", plural: "œufs", note: "à température ambiante", step: 1 },
        { qty: 100, unit: "g", name: "cassonade", step: 5 },
        { qty: 1.5, unit: "cac", name: "cannelle moulue", step: 0.5 },
        { qty: 1, unit: "cac", name: "gingembre moulu", step: 0.25 },
        { qty: 0.25, unit: "cac", name: "noix de muscade râpée", step: 0.25 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 200, unit: "ml", name: "crème liquide entière", note: "30 % de matière grasse", step: 10 },
      ],
    },
  ],
  method: [
    {
      title: "La purée de potiron",
      steps: [
        {
          title: "Rôtir le potiron",
          text: "Préchauffez le four à 200 °C. Coupez le potiron en morceaux de 6 cm sans l’éplucher, retirez graines et filaments. Posez-les peau dessous sur la plaque couverte de papier cuisson et rôtissez 45 minutes, jusqu’à ce que la pointe d’un couteau entre sans résistance et que les bords brunissent.",
          timer: { minutes: 45, label: "Potiron au four" },
          tip: "Inutile d’éplucher la courge crue : une fois rôtie, la chair se détache de la peau à la cuillère.",
        },
        {
          title: "Mixer la purée",
          text: "Laissez tiédir les morceaux 10 minutes, puis raclez la chair à la cuillère et jetez la peau. Mixez jusqu’à obtenir une purée parfaitement lisse, sans filament, et pesez-en 450 g.",
          timer: { minutes: 10, label: "Potiron tiédi" },
        },
        {
          title: "Dessécher si besoin",
          text: "Si la purée brille et laisse couler de l’eau quand on la soulève, faites-la sécher dans une poêle à feu moyen pendant 5 minutes en remuant, jusqu’à ce qu’elle se tienne en tas sur la cuillère. Laissez refroidir.",
          timer: { minutes: 5, label: "Purée desséchée" },
        },
      ],
    },
    {
      title: "La pâte",
      steps: [
        {
          title: "Sabler la pâte",
          text: "Pendant que le potiron rôtit, mélangez farine, sel et sucre, ajoutez le beurre froid et frottez entre vos doigts jusqu’à obtenir un sable grossier. Versez l’eau glacée, rassemblez sans pétrir, aplatissez en disque, filmez et laissez reposer 30 minutes au réfrigérateur.",
          timer: { minutes: 30, label: "Repos de la pâte" },
        },
        {
          title: "Foncer le moule",
          text: "Beurrez le moule. Étalez la pâte sur 3 mm, foncez le moule en pressant bien dans les angles, coupez l’excédent et piquez le fond à la fourchette. Placez 15 minutes au réfrigérateur, et baissez le four à 180 °C.",
          timer: { minutes: 15, label: "Fond au froid" },
        },
        {
          title: "Cuire à blanc",
          text: "Couvrez le fond de papier cuisson, remplissez de billes ou de haricots secs et enfournez 20 minutes. Retirez papier et poids, puis poursuivez 8 minutes, jusqu’à ce que le fond soit sec et à peine doré. Baissez le four à 170 °C.",
          timer: { minutes: 28, label: "Cuisson à blanc" },
          tip: "Ne sautez pas cette étape : sur une pâte crue, une garniture aussi humide donne un fond mou.",
        },
      ],
    },
    {
      title: "La garniture",
      steps: [
        {
          title: "Mélanger l’appareil",
          text: "Fouettez les œufs avec la cassonade, les épices et le sel juste pour les lier. Ajoutez la purée, puis la crème, et mélangez sans chercher à faire mousser : l’appareil doit être lisse, couleur orange brûlé.",
          tip: "Goûtez la purée sucrée et épicée avant d’y mettre les œufs, et ajustez la cannelle à ce moment-là.",
        },
        {
          title: "Cuire la tarte",
          text: "Posez le fond de tarte sur la grille du four à moitié sortie, versez l’appareil, puis glissez la grille. Faites cuire 40 à 45 minutes à 170 °C. La tarte est prête quand les bords sont figés et mats et que le centre tremble encore sur 5 cm quand on secoue doucement le moule.",
          timer: { minutes: 45, label: "Cuisson de la tarte" },
        },
        {
          title: "Laisser prendre",
          text: "Sortez la tarte et laissez-la refroidir 2 heures sur une grille. Le centre finit de prendre à la chaleur résiduelle. Servez-la tiède ou fraîche, jamais à la sortie du four.",
          timer: { minutes: 120, label: "Refroidissement" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Une crème qui coagule",
      text: "Les protéines du blanc commencent à coaguler vers 62 °C, celles du jaune vers 65 à 70 °C. Diluées dans la crème et la purée, elles ne figent l’ensemble qu’autour de 80 °C. Au-delà, elles se resserrent, expulsent l’eau et la crème se fend ou devient granuleuse.",
    },
    {
      title: "Rôtir plutôt que bouillir",
      text: "Dans l’eau, la chair du potiron s’en gorge. Au four, elle en perd : la surface sèche, ses sucres caramélisent et brunissent. La purée est plus dense et plus parfumée, et l’appareil prend sans rendre de liquide.",
    },
    {
      title: "Pourquoi cuire à blanc",
      text: "L’amidon de la farine a besoin de chaleur sèche pour cuire et se rigidifier. Sous une garniture liquide, la pâte crue reste vers 100 °C et cuit à la vapeur. Précuite, elle est déjà ferme et sèche quand la crème arrive.",
    },
  ],
  tips: [
    "Rôtissez le potiron la veille : la purée se garde 2 jours au réfrigérateur dans une boîte fermée, et la tarte se monte en 30 minutes.",
    "Sortez les œufs une heure avant. Froids, ils allongent la cuisson et le centre reste liquide alors que les bords sont déjà cuits.",
    "La cassonade donne une note de caramel. Le sucre blanc marche aussi, la tarte est seulement plus claire.",
    "Pour des parts nettes, coupez la tarte bien froide avec un couteau trempé dans l’eau chaude et essuyé entre chaque part.",
  ],
  mistakes: [
    "Utiliser une purée de potiron bouilli sans la dessécher : la crème ne prend pas au centre et le fond se détrempe. Faites-la sécher à la poêle jusqu’à ce qu’elle se tienne en tas.",
    "Attendre que le centre soit ferme pour sortir la tarte : elle est trop cuite et se fendra en refroidissant. Une fissure ne change pas le goût, une cuillerée de crème la cache.",
    "Fouetter l’appareil comme une mousse : les bulles montent et laissent une surface piquée de trous. Mélangez au fouet, sans battre.",
    "Couper la tarte chaude : la crème n’a pas fini de prendre et coule dans le plat. Attendez les 2 heures.",
  ],
  variations: [
    {
      title: "Avec une butternut",
      text: "Remplacez le potiron par le même poids de butternut. Sa chair plus dense et plus sucrée n’a presque jamais besoin d’être desséchée, et la tarte est plus orangée. Gardez les mêmes temps de cuisson.",
    },
    {
      title: "Au quatre-épices",
      text: "Remplacez cannelle, gingembre et muscade par 2 cuillères à café de quatre-épices. Le clou de girofle et le poivre qu’il contient donnent une tarte plus sombre, plus proche du pain d’épices.",
    },
    {
      title: "Sans pâte, en flan",
      text: "Versez l’appareil dans un plat beurré de 22 cm et faites cuire au bain-marie, à 160 °C, 45 à 50 minutes, jusqu’à ce que le centre tremble à peine. Laissez refroidir 2 heures et servez à la cuillère.",
    },
  ],
  storage:
    "Couverte d’un film, elle se garde 3 jours au réfrigérateur, la pâte ramollit un peu dès le deuxième jour. Sortez-la 30 minutes avant de servir. Elle se congèle mal : la crème rend de l’eau en décongelant.",
  pairing: "Une cuillerée de crème fraîche épaisse ou de crème fouettée peu sucrée, et un thé noir ou un café.",
  easy: {
    shortcut: "pâte brisée pur beurre du commerce",
    note: "Le rouleau fait gagner le sablage et 30 minutes de repos, et le reste ne change pas. La pâte achetée est plus fine et colore plus vite : surveillez la cuisson à blanc. Prenez-la pur beurre, une pâte à l’huile paraît fade sous la crème épicée.",
    times: { prep: 25, cook: 113, rest: 135 },
    ingredients: [
      {
        title: "Le fond et la purée",
        items: [
          { qty: 1, unit: "rouleau", name: "pâte brisée pur beurre", note: "environ 230 g", step: 1, fixed: true },
          {
            qty: 1000,
            unit: "g",
            name: "potiron",
            note: "une tranche avec la peau, pour obtenir 450 g de purée",
            step: 50,
          },
        ],
      },
      {
        title: "La garniture",
        items: [
          { qty: 3, name: "œuf", plural: "œufs", note: "à température ambiante", step: 1 },
          { qty: 100, unit: "g", name: "cassonade", step: 5 },
          { qty: 1.5, unit: "cac", name: "cannelle moulue", step: 0.5 },
          { qty: 1, unit: "cac", name: "gingembre moulu", step: 0.25 },
          { qty: 0.25, unit: "cac", name: "noix de muscade râpée", step: 0.25 },
          { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
          { qty: 200, unit: "ml", name: "crème liquide entière", note: "30 % de matière grasse", step: 10 },
        ],
      },
    ],
    method: [
      {
        title: "La tarte",
        steps: [
          {
            title: "Rôtir le potiron",
            text: "Préchauffez le four à 200 °C. Coupez le potiron en morceaux de 6 cm avec la peau, sans graines ni filaments, et rôtissez-les peau dessous sur une plaque couverte de papier cuisson pendant 45 minutes, jusqu’à ce que le couteau entre sans résistance.",
            timer: { minutes: 45, label: "Potiron au four" },
          },
          {
            title: "Préparer la purée",
            text: "Laissez tiédir 10 minutes, raclez la chair, mixez-la finement et pesez 450 g. Si elle laisse couler de l’eau, séchez-la quelques minutes à la poêle en remuant.",
            timer: { minutes: 10, label: "Potiron tiédi" },
          },
          {
            title: "Foncer le moule",
            text: "Déroulez la pâte dans le moule de 24 cm avec son papier, pressez-la dans les angles, coupez l’excédent et piquez le fond. Placez 15 minutes au réfrigérateur et baissez le four à 180 °C.",
            timer: { minutes: 15, label: "Fond au froid" },
          },
          {
            title: "Cuire à blanc",
            text: "Couvrez de papier cuisson et de billes, enfournez 15 minutes, retirez les poids et poursuivez 8 minutes, jusqu’à ce que le fond soit sec et blond. Baissez le four à 170 °C.",
            timer: { minutes: 23, label: "Cuisson à blanc" },
          },
          {
            title: "Garnir et cuire",
            text: "Fouettez œufs, cassonade, épices et sel sans faire mousser, ajoutez la purée puis la crème. Versez sur le fond posé sur la grille à moitié sortie, enfournez et faites cuire 40 à 45 minutes, jusqu’à ce que le centre tremble encore sur 5 cm.",
            timer: { minutes: 45, label: "Cuisson de la tarte" },
          },
          {
            title: "Laisser prendre",
            text: "Laissez refroidir 2 heures sur une grille avant de couper : le centre finit de prendre en refroidissant.",
            timer: { minutes: 120, label: "Refroidissement" },
          },
        ],
      },
    ],
  },
  faq: [
    {
      q: "Peut-on utiliser de la purée de potiron en conserve ?",
      a: "Oui, 450 g, à condition qu’elle soit nature, sans sucre ni épices. Elle est souvent plus dense qu’une purée maison, il n’y a donc rien à dessécher. Vous sautez ainsi les 55 minutes de rôtissage et de refroidissement du potiron.",
    },
    {
      q: "Faut-il précuire la pâte d’une tarte au potiron ?",
      a: "Oui, 20 minutes avec des poids puis 8 minutes à nu, à 180 °C. La garniture est très humide : sur une pâte crue, le fond cuirait à la vapeur et resterait mou.",
    },
    {
      q: "Comment savoir si la tarte au potiron est cuite ?",
      a: "Les bords sont figés et mats, le centre tremble encore sur environ 5 cm quand on secoue doucement le moule. Une lame plantée à 3 cm du bord ressort propre. Le centre finit de prendre pendant les 2 heures de refroidissement.",
    },
    {
      q: "Pourquoi ma tarte au potiron s’est-elle fendue ?",
      a: "Parce qu’elle a trop cuit, ou trop chaud. La crème se resserre en refroidissant et se fend au centre. La prochaine fois, sortez-la plus tôt, quand le centre tremble encore, et gardez le four à 170 °C.",
    },
    {
      q: "La tarte au potiron se mange-t-elle chaude ou froide ?",
      a: "Tiède ou froide. À la sortie du four, la crème n’a pas fini de prendre et coule à la découpe. Après 2 heures elle se tient, et froide elle se coupe le plus nettement.",
    },
    {
      q: "Combien de temps se conserve une tarte au potiron ?",
      a: "3 jours au réfrigérateur, couverte d’un film. C’est une crème aux œufs : ne la laissez pas plus de 2 heures à température ambiante une fois refroidie.",
    },
  ],
  nutrition: {
    calories: 365,
    protein: 6,
    fat: 21,
    saturatedFat: 13,
    carbs: 38,
    sugar: 18,
    fiber: 2,
    sodium: 110,
  },
  annotations: {
    hero: "le centre tremble encore",
    detail: "coupée froide, la part se tient",
  },
  images: {
    heroAlt:
      "Tarte au potiron entière en gros plan, garniture orange brun lisse et brillante dans une pâte au bord ondulé",
    detailAlt:
      "Tarte au potiron entamée sur fond blanc, avec une part posée à côté qui montre la crème orange bien prise",
    credits: {
      hero: {
        photographer: "Patricia (Brownies for Dinner)",
        url: "https://commons.wikimedia.org/wiki/File:Pumpkin_Pie_from_a_*real*_pumpkin,_November_2007.jpg",
        source: "Wikimedia Commons",
        license: "CC BY 2.0",
      },
      detail: {
        photographer: "Evan-Amos",
        url: "https://commons.wikimedia.org/wiki/File:Pumpkin-Pie-Whole-Slice.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#C9661C",
    onAccent: "#1B1712",
    ink: "#8A3F0E",
    tint: "#FAEEE4",
    deep: "#1F1009",
    focus: "50% 45%",
  },
});
