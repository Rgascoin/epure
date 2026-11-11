import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "soupe-poireaux-pommes-de-terre",
  title: "Soupe poireaux pommes de terre",
  seoTitle: "Soupe poireaux pommes de terre, veloutée et pas collante",
  tagline: "Celle de tous les soirs d’hiver.",
  description:
    "La soupe poireaux pommes de terre de tous les jours : 3 poireaux, 500 g de pommes de terre, 25 minutes de cuisson, lisse ou en morceaux, jamais collante.",
  summary:
    "Pour 4 personnes (environ 1,6 l), faites suer 3 poireaux émincés 10 minutes dans 30 g de beurre, ajoutez 500 g de pommes de terre en cubes et 1,2 l d’eau, puis laissez frémir 20 à 25 minutes. Mixez brièvement par impulsions pour une soupe lisse, ou écrasez au presse-purée pour une version en morceaux, et finissez avec ou sans 10 cl de crème. 50 minutes en tout.",
  intro: [
    "C’est la soupe que tout le monde a mangée enfant et qu’on refait sans recette : des poireaux fondus au beurre, des pommes de terre, de l’eau, du sel. Lisse et veloutée, ou écrasée avec des morceaux, elle tient au corps sans peser.",
    "Le seul vrai piège, c’est la texture. Une soupe de pommes de terre passée longtemps au blender devient collante, presque élastique, et ça ne se rattrape pas. Quelques impulsions de mixeur plongeant suffisent ; le moulin à légumes, lui, ne la fait jamais tourner.",
    "L’autre détail qui compte : les poireaux fondent doucement, sans dorer. Ils gardent leur douceur, et la soupe sa couleur vert pâle.",
  ],
  category: "Entrée",
  cuisine: "Française",
  keywords: [
    "soupe poireaux pommes de terre",
    "recette soupe poireaux pommes de terre",
    "soupe de poireaux",
    "velouté poireaux pommes de terre",
    "potage poireaux pommes de terre",
    "soupe poireaux pommes de terre collante",
    "soupe poireaux sans crème",
    "soupe poireaux pommes de terre mixeur",
  ],
  diet: ["vegetarian", "glutenFree"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 15, cook: 35 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: [
    "faitout de 4 l avec couvercle",
    "mixeur plongeant, moulin à légumes ou presse-purée",
    "planche et couteau de chef",
    "louche",
  ],
  ingredients: [
    {
      items: [
        { qty: 3, name: "poireau", plural: "poireaux", note: "environ 600 g, avec leur vert tendre", step: 1 },
        { qty: 30, unit: "g", name: "beurre", step: 5 },
        { qty: 1, unit: "cac", name: "sel fin", step: 0.5 },
        {
          qty: 500,
          unit: "g",
          name: "pommes de terre",
          note: "farineuses ou tout usage, type bintje ou monalisa",
          step: 50,
        },
        { qty: 120, unit: "cl", name: "eau", step: 10 },
        { qty: 10, unit: "cl", name: "crème fraîche épaisse", step: 5, optional: true },
        { name: "poivre", note: "du moulin" },
      ],
    },
  ],
  method: [
    {
      title: "La soupe",
      steps: [
        {
          title: "Nettoyer les poireaux",
          text: "Coupez la racine et le vert foncé le plus dur, gardez le blanc et le vert tendre. Fendez chaque poireau en deux dans la longueur et rincez-le sous l’eau froide en écartant les feuilles, là où la terre se cache. Émincez-les en tronçons de 1 cm.",
        },
        {
          title: "Faire suer les poireaux",
          text: "Faites fondre le beurre dans le faitout à feu moyen-doux. Ajoutez les poireaux et une pincée de sel, couvrez et laissez suer 10 minutes en remuant de temps en temps. Ils doivent être souples et brillants, sans la moindre trace de doré.",
          timer: { minutes: 10, label: "Poireaux qui suent" },
          tip: "S’ils commencent à attacher, ajoutez 2 cuillères à soupe d’eau plutôt que de monter le feu.",
        },
        {
          title: "Ajouter les pommes de terre",
          text: "Épluchez les pommes de terre et coupez-les en cubes de 2 cm. Ajoutez-les dans le faitout avec l’eau et le reste du sel, puis portez à ébullition à feu vif.",
        },
        {
          title: "Laisser frémir",
          text: "Baissez le feu, couvrez à moitié et laissez frémir 20 à 25 minutes. C’est cuit quand un cube de pomme de terre s’écrase sans résistance contre la paroi, du dos de la cuillère.",
          timer: { minutes: 25, label: "Soupe qui frémit" },
        },
        {
          title: "Mixer ou écraser",
          text: "Hors du feu. Pour une soupe lisse, donnez une dizaine d’impulsions brèves au mixeur plongeant, juste jusqu’à disparition des morceaux, ou passez-la au moulin à légumes, grille fine. Pour une version rustique, écrasez directement dans le faitout au presse-purée en gardant des morceaux.",
          tip: "Au blender, ne remplissez le bol qu’à moitié et retirez le bouchon du couvercle en le couvrant d’un torchon : la vapeur peut faire sauter le couvercle.",
        },
        {
          title: "Finir et servir",
          text: "Incorporez la crème si vous en mettez. Si la soupe est trop épaisse, détendez-la avec un peu d’eau chaude jusqu’à ce qu’elle nappe la louche. Rectifiez le sel, poivrez, réchauffez jusqu’aux premiers frémissements et servez bien chaud.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi une soupe devient collante",
      text: "Dans une pomme de terre cuite, l’amidon a gonflé à l’intérieur des cellules. Écrasées doucement, elles restent entières et la soupe est veloutée. Une lame qui tourne vite les déchire : l’amidon libéré forme une colle épaisse et élastique, comme une purée trop travaillée.",
    },
    {
      title: "Suer sans colorer",
      text: "À feu doux et à couvert, les poireaux cuisent dans leur propre vapeur : les fibres s’attendrissent et leur goût s’adoucit. Plus chaud, leurs sucres caramélisent et brunissent, ce qui donne une soupe grisâtre au goût légèrement amer.",
    },
    {
      title: "Elle épaissit en refroidissant",
      text: "En refroidissant, l’amidon dissous dans le liquide se réorganise et forme un gel. La soupe du lendemain est donc plus épaisse qu’à la sortie du feu : il suffit de la détendre avec un peu d’eau en la réchauffant.",
    },
  ],
  tips: [
    "Gardez le vert tendre des poireaux : il donne du goût et cette couleur vert pâle. Le vert foncé et dur peut partir dans un bouillon.",
    "Coupez les pommes de terre en cubes réguliers : elles cuisent toutes en même temps et aucune ne reste ferme au mixage.",
    "Si vous utilisez un bouillon cube à la place de l’eau, ne salez pas avant d’avoir goûté la soupe finie.",
    "Le moulin à légumes donne la texture la plus soyeuse sans aucun risque de soupe collante. C’est l’outil de nos grands-mères pour une bonne raison.",
  ],
  mistakes: [
    "Mixer longuement au blender : la soupe devient collante et élastique. On peut seulement la détendre avec de l’eau chaude ou du lait, la texture ne reviendra pas.",
    "Faire dorer les poireaux à feu vif : la soupe prend une couleur grise et un goût amer. Feu moyen-doux et couvercle.",
    "Rincer les poireaux entiers sans les fendre : la terre reste entre les feuilles et crisse sous la dent.",
    "Mettre trop de pommes de terre : au-delà de 600 g pour 3 poireaux, on obtient une purée liquide qui masque le poireau.",
  ],
  variations: [
    {
      title: "Façon vichyssoise, servie froide",
      text: "N’utilisez que le blanc de 4 poireaux, remplacez l’eau par un bouillon de volaille et la crème épaisse par 20 cl de crème liquide. Mixez très finement, passez au chinois et laissez 3 heures au réfrigérateur. Servez glacée, avec de la ciboulette ciselée.",
    },
    {
      title: "Aux lardons grillés",
      text: "Faites rissoler 100 g de lardons fumés 6 à 8 minutes à sec dans une poêle, jusqu’à ce qu’ils soient croustillants, et parsemez-en chaque bol. Salez la soupe un peu moins.",
    },
    {
      title: "Sans crème, à l’huile d’olive",
      text: "Remplacez le beurre par 3 cuillères à soupe d’huile d’olive et la crème par un filet d’huile versé dans chaque bol. La soupe est plus légère et convient à un régime végétalien.",
    },
  ],
  storage:
    "Refroidie et mise au frigo dans les 2 heures, elle se garde 3 jours dans une boîte fermée. Elle se congèle 3 mois, de préférence sans la crème ; la pomme de terre peut devenir un peu granuleuse, fouettez-la vivement en la réchauffant. Ne la recongelez jamais.",
  pairing: "Avec du pain de campagne grillé frotté d’ail et un morceau de comté ou de cantal, c’est un dîner complet.",
  faq: [
    {
      q: "Pourquoi ma soupe poireaux pommes de terre est-elle collante ?",
      a: "Parce qu’elle a été trop mixée. La lame du blender déchire les cellules des pommes de terre et libère leur amidon, qui forme une colle. Mixez par impulsions brèves, une minute au plus, ou utilisez un moulin à légumes. Une soupe déjà collante peut seulement être détendue avec de l’eau chaude.",
    },
    {
      q: "Quelles pommes de terre choisir pour une soupe aux poireaux ?",
      a: "Des pommes de terre farineuses comme la bintje, ou tout usage comme la monalisa : elles se défont à la cuisson et épaississent la soupe. Les variétés à chair ferme, comme la charlotte, donnent une soupe plus fluide et conviennent bien à la version en morceaux.",
    },
    {
      q: "Combien de temps se garde la soupe poireaux pommes de terre ?",
      a: "3 jours au réfrigérateur dans une boîte fermée, à condition de l’y mettre dans les 2 heures après cuisson. Au congélateur, 3 mois. Elle épaissit en refroidissant : ajoutez un peu d’eau en la réchauffant.",
    },
    {
      q: "Peut-on utiliser le vert des poireaux dans la soupe ?",
      a: "Oui, le vert tendre, juste au-dessus du blanc : il apporte du goût et colore la soupe en vert pâle. Le vert foncé et fibreux du haut reste dur même après cuisson ; gardez-le pour un bouillon.",
    },
    {
      q: "Faut-il mettre de la crème dans la soupe poireaux pommes de terre ?",
      a: "Non, elle est facultative. Les pommes de terre suffisent à rendre la soupe veloutée. 10 cl de crème fraîche épaisse pour 4 personnes l’arrondissent ; un filet d’huile d’olive dans chaque bol fonctionne aussi.",
    },
    {
      q: "Combien d’eau mettre pour une soupe poireaux pommes de terre ?",
      a: "1,2 l pour 3 poireaux et 500 g de pommes de terre, soit juste de quoi couvrir largement les légumes. La soupe obtenue nappe la louche ; allongez-la d’un peu d’eau chaude si vous l’aimez plus fluide.",
    },
  ],
  nutrition: {
    calories: 255,
    protein: 5,
    fat: 14,
    saturatedFat: 9,
    carbs: 26,
    sugar: 5,
    fiber: 4,
    sodium: 620,
  },
  annotations: { hero: "le vert tendre aussi", detail: "mixée par impulsions, jamais longtemps" },
  images: {
    heroAlt:
      "Bol blanc de soupe poireaux pommes de terre veloutée, avec une feuille de persil et un trait de crème, à côté d’une baguette rompue",
    detailAlt:
      "Trois petits bols de soupe poireaux pommes de terre veloutée, garnis de persil, sur une table en bois clair",
    credits: {
      hero: {
        photographer: "Karolina Grabowska",
        url: "https://www.pexels.com/photo/leek-and-potato-soup-with-bread-5789/",
        source: "Pexels",
      },
      detail: {
        photographer: "www.Pixel.la Free Stock Photos",
        url: "https://commons.wikimedia.org/wiki/File:Food-healthy-soup-leek_(24243815251).jpg",
        source: "Wikimedia Commons",
        license: "CC0",
      },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#A8A33A",
    onAccent: "#1B1712",
    ink: "#5E5A12",
    tint: "#F6F4DE",
    deep: "#16150A",
    focus: "62% 47%",
  },
});
