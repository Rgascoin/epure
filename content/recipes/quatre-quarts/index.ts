import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "quatre-quarts",
  title: "Quatre-quarts",
  seoTitle: "Quatre-quarts breton au beurre demi-sel, sans levure",
  tagline: "Une balance, et aucun calcul.",
  description:
    "Le quatre-quarts breton : le même poids d’œufs, de sucre, de farine et de beurre demi-sel, des blancs montés en neige et 50 min de cuisson à 170 °C.",
  summary:
    "Pour 10 parts, pesez 4 œufs dans leur coquille, environ 240 g, et prenez le même poids de beurre demi-sel, de sucre et de farine. Fouettez les jaunes avec le sucre, ajoutez le beurre fondu tiède puis la farine, et incorporez les blancs montés en neige. Faites cuire 50 à 55 minutes à 170 °C dans un moule à cake de 26 cm. Comptez 2 h 30 avec le refroidissement, dont 25 minutes de travail.",
  intro: [
    "Le quatre-quarts tient dans son nom : quatre ingrédients, chacun pour un quart du poids de la pâte. Des œufs, du sucre, de la farine et du beurre, demi-sel en Bretagne. Ni lait ni levure : c’est un gâteau qu’on refait de mémoire, avec une balance.",
    "Ce qui l’alourdit, c’est un beurre versé trop chaud, une pâte trop travaillée après la farine, ou un four trop fort qui brunit la croûte avant que le centre soit cuit.",
    "Ici, on sépare les œufs et on monte les blancs en neige : ce sont eux qui font lever le gâteau. Ensuite, il faut surtout de la patience, parce qu’il est encore meilleur le lendemain.",
  ],
  category: "Goûter",
  cuisine: "Française",
  keywords: [
    "quatre-quarts",
    "recette quatre-quarts",
    "quatre-quarts breton",
    "quatre-quarts beurre salé",
    "quatre-quarts moelleux",
    "quatre-quarts sans levure",
    "quatre-quarts grand-mère",
    "gâteau breton au beurre",
  ],
  diet: ["vegetarian"],
  servings: 10,
  servingsLabel: { one: "part", other: "parts" },
  times: { prep: 25, cook: 55, rest: 70 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  tags: ["fete-des-grands-meres"],
  equipment: [
    "moule à cake de 26 cm",
    "papier cuisson",
    "balance de cuisine",
    "batteur électrique",
    "deux grands saladiers",
    "spatule souple",
    "grille",
  ],
  ingredients: [
    {
      items: [
        {
          qty: 4,
          name: "œuf",
          plural: "œufs",
          note: "à température ambiante, environ 240 g avec la coquille",
          step: 1,
        },
        { qty: 240, unit: "g", name: "beurre demi-sel", note: "le poids des œufs", step: 10 },
        { qty: 240, unit: "g", name: "sucre en poudre", note: "le poids des œufs", step: 10 },
        { qty: 240, unit: "g", name: "farine de blé", note: "type 45 ou 55, le poids des œufs", step: 10 },
      ],
    },
  ],
  method: [
    {
      title: "La pâte",
      steps: [
        {
          title: "Préchauffer et chemiser",
          text: "Allumez le four à 170 °C, chaleur statique. Tapissez le moule de papier cuisson, en laissant dépasser le papier sur les deux longueurs : il servira de poignées pour démouler.",
        },
        {
          title: "Peser les œufs",
          text: "Posez les 4 œufs, dans leur coquille, sur la balance. Notez le poids, autour de 240 g, et pesez exactement la même quantité de beurre, de sucre et de farine. Cassez les œufs en séparant les blancs des jaunes, dans deux grands saladiers bien propres.",
          tip: "Pas une trace de jaune dans les blancs : la moindre goutte de gras les empêche de monter.",
        },
        {
          title: "Fondre le beurre",
          text: "Faites fondre le beurre à feu très doux, ou au micro-ondes par courtes séries, puis laissez-le tiédir pendant que vous travaillez les jaunes. Il doit être liquide et tiède au doigt, pas chaud.",
        },
        {
          title: "Blanchir les jaunes",
          text: "Fouettez les jaunes avec le sucre au batteur pendant 3 minutes, jusqu’à ce que le mélange pâlisse, gagne en volume et tombe du fouet en un ruban épais qui se pose sur la surface.",
          timer: { minutes: 3, label: "Jaunes et sucre" },
        },
        {
          title: "Ajouter beurre et farine",
          text: "Versez le beurre tiède en filet, en fouettant à vitesse lente. Tamisez la farine au-dessus du saladier et incorporez-la à la spatule, juste jusqu’à ce qu’il ne reste plus de traces blanches. La pâte est épaisse et brillante : c’est normal.",
          tip: "Dès que la farine est entrée, on arrête de mélanger. Travaillée davantage, la pâte devient élastique et le gâteau serré.",
        },
        {
          title: "Monter les blancs",
          text: "Lavez et séchez les fouets. Montez les blancs en neige, d’abord à vitesse moyenne puis rapide, jusqu’à ce qu’ils soient fermes et brillants : soulevés au fouet, ils forment une pointe qui tient en se courbant à peine.",
        },
        {
          title: "Incorporer les blancs",
          text: "Ajoutez un tiers des blancs à la pâte et mélangez franchement pour l’assouplir. Ajoutez le reste en deux fois, en soulevant la pâte du fond vers le haut avec la spatule tout en tournant le saladier. Arrêtez dès que les traînées blanches ont disparu.",
          tip: "Le premier tiers peut être maltraité, il sert à détendre la pâte. Les deux suivants se mélangent avec douceur : ce sont leurs bulles qui font lever le gâteau.",
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Cuire à 170 °C",
          text: "Versez la pâte dans le moule et lissez le dessus. Enfournez à mi-hauteur pour 50 à 55 minutes, sans ouvrir la porte avant de vérifier la cuisson. Le quatre-quarts est prêt quand il est bien doré, fendu sur le dessus, et qu’une lame plantée au centre ressort sèche.",
          timer: { minutes: 50, label: "Cuisson du quatre-quarts" },
          tip: "Si le dessus brunit trop vite, posez une feuille d’aluminium dessus, sans la serrer.",
        },
        {
          title: "Démouler tiède",
          text: "Laissez reposer le gâteau 10 minutes dans le moule, puis soulevez-le par le papier et posez-le sur une grille.",
          timer: { minutes: 10, label: "Repos dans le moule" },
        },
        {
          title: "Laisser refroidir",
          text: "Laissez-le refroidir complètement sur la grille, au moins 1 heure, avant de le couper. Encore chaude, la mie est fragile et se tasse sous le couteau.",
          timer: { minutes: 60, label: "Refroidissement" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Le poids des œufs",
      text: "Il n’y a ni lait ni eau dans la pâte : toute l’humidité vient des œufs, qui contiennent environ trois quarts d’eau. En calant le reste sur leur poids, on garde le même équilibre entre ce qui structure, la farine et les protéines de l’œuf, et ce qui attendrit, le sucre et le beurre, quelle que soit la taille des œufs.",
    },
    {
      title: "Les blancs font lever",
      text: "Battus, les blancs emprisonnent des millions de bulles d’air. Au four, l’air chauffé se dilate et l’eau qui s’évapore les gonfle encore, jusqu’à ce que les protéines de l’œuf coagulent et figent la mie autour. C’est pourquoi on les incorpore avec douceur : chaque bulle perdue est un peu de volume en moins.",
    },
    {
      title: "Pourquoi un four modéré",
      text: "Une pâte dense et riche en beurre conduit lentement la chaleur. À 170 °C, le centre a le temps de cuire avant que la croûte ne brunisse trop. Le dessus se fige avant que le cœur ait fini de gonfler, d’où la fente caractéristique au milieu.",
    },
  ],
  tips: [
    "Sortez les œufs du réfrigérateur une heure avant de commencer : à température ambiante, les blancs montent plus haut et le beurre tiède ne fige pas au contact des jaunes.",
    "Pesez à la balance, pas au verre doseur. Avec seulement quatre ingrédients, un écart de 30 g se sent tout de suite.",
    "Emballez-le dans du film alimentaire dès qu’il est froid et attendez le lendemain : le beurre se répartit dans la mie et il devient plus fondant.",
    "Avec du beurre doux, ajoutez 2 pincées de sel fin avec la farine. Sans sel, le quatre-quarts paraît plat.",
  ],
  mistakes: [
    "Verser le beurre encore chaud sur les jaunes : ils commencent à cuire et la pâte devient grasse et lourde. Attendez qu’il soit tiède au doigt.",
    "Monter les blancs jusqu’à ce qu’ils deviennent granuleux : ils se mélangent mal et laissent des grumeaux blancs dans la mie. Arrêtez dès qu’ils sont fermes et brillants.",
    "Ouvrir le four en cours de cuisson pour regarder : l’air froid fait retomber la pâte encore fragile, qui se creuse au centre.",
    "Couper le gâteau à peine sorti du four : la mie se tasse et paraît pâteuse. Il doit avoir refroidi complètement.",
  ],
  variations: [
    {
      title: "Méthode crémée, sans séparer les œufs",
      text: "Fouettez le beurre mou, pas fondu, avec le sucre pendant 5 minutes jusqu’à ce qu’il blanchisse. Ajoutez les œufs entiers un par un, puis la farine mélangée à 1 cac de levure chimique. Même cuisson. La mie est plus serrée et plus régulière.",
    },
    {
      title: "Au citron",
      text: "Ajoutez le zeste râpé de 2 citrons non traités au sucre avant de le fouetter avec les jaunes. À la sortie du four, nappez le gâteau tiède de 3 cas de jus de citron mélangées à 3 cas de sucre.",
    },
    {
      title: "Aux pommes",
      text: "Épluchez 2 pommes acidulées, coupez-les en dés de 1 cm et roulez-les dans 1 cas de farine. Incorporez-les à la pâte avec le dernier tiers des blancs et prolongez la cuisson de 10 minutes.",
    },
  ],
  storage:
    "Il se garde 4 jours à température ambiante, bien emballé dans du film alimentaire ou dans une boîte hermétique. Il se congèle 3 mois, entier ou en tranches : décongelez-le à température ambiante, encore emballé, et ne le recongelez pas.",
  pairing: "Avec un thé, un café, une compote de pommes, des fraises au printemps ou un caramel au beurre salé.",
  faq: [
    {
      q: "Pourquoi le quatre-quarts s’appelle-t-il ainsi ?",
      a: "Parce qu’il est fait de quatre ingrédients en poids égaux : œufs, sucre, farine et beurre. Chacun représente donc un quart du poids de la pâte.",
    },
    {
      q: "Faut-il mettre de la levure dans un quatre-quarts ?",
      a: "Non, pas dans la recette traditionnelle. Les blancs montés en neige suffisent à le faire lever. Si vous faites la version crémée, avec les œufs entiers, ajoutez 1 cac de levure chimique à la farine.",
    },
    {
      q: "Beurre doux ou demi-sel pour un quatre-quarts ?",
      a: "Demi-sel pour la version bretonne : le sel relève le goût du beurre et du sucre. Avec du beurre doux, ajoutez 2 pincées de sel fin à la farine, sinon le gâteau paraît fade.",
    },
    {
      q: "Pourquoi mon quatre-quarts est sec ?",
      a: "Il a sans doute trop cuit, ou le four était trop chaud. Vérifiez la cuisson dès 50 minutes avec une lame : elle doit ressortir sèche, sans plus. Un thermomètre de four aide : l’affichage n’est pas toujours fidèle.",
    },
    {
      q: "Combien de temps se conserve un quatre-quarts ?",
      a: "4 jours à température ambiante, bien emballé. Il est souvent meilleur le deuxième jour. Au congélateur, il se garde 3 mois.",
    },
    {
      q: "Quel moule pour un quatre-quarts ?",
      a: "Un moule à cake de 26 cm pour 4 œufs. En Bretagne, on le fait aussi dans un moule rond de 24 cm : la cuisson descend alors à 40 à 45 minutes, car la pâte est moins épaisse.",
    },
  ],
  nutrition: {
    calories: 375,
    protein: 5,
    fat: 21,
    saturatedFat: 13,
    carbs: 41,
    sugar: 24,
    fiber: 1,
    sodium: 220,
  },
  annotations: {
    hero: "fendu au milieu, comme il faut",
    detail: "une mie serrée et dorée",
  },
  images: {
    heroAlt: "Quatre-quarts doré tranché sur une planche en bois, une main tenant une part à la mie jaune et serrée",
    detailAlt: "Tranches de quatre-quarts à la mie jaune pâle et à la croûte dorée, servies avec des fraises entières",
    credits: {
      hero: {
        photographer: "Gu Ko",
        url: "https://www.pexels.com/photo/freshly-baked-pound-cake-being-sliced-36590626/",
        source: "Pexels",
      },
      detail: {
        photographer: "Lindsey Turner",
        url: "https://commons.wikimedia.org/wiki/File:Strawberries_and_pound_cake,_September_2007.jpg",
        source: "Wikimedia Commons",
        license: "CC BY 2.0",
      },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#D4952F",
    onAccent: "#1B1712",
    ink: "#7D5212",
    tint: "#FBF2E2",
    deep: "#1E1408",
    focus: "42% 55%",
  },
});
