import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "blinis",
  title: "Blinis maison",
  seoTitle: "Blinis maison à la levure, moelleux et faciles à congeler",
  tagline: "On les fait la veille, sans regret.",
  description:
    "Une trentaine de blinis maison à la levure de boulanger, avec un peu de sarrasin : 1 h de levée, 3 minutes de poêle par fournée, et ils se congèlent très bien.",
  summary:
    "Pour 30 blinis de 6 cm, délayez 7 g de levure sèche dans 30 cl de lait tiède, mélangez avec 200 g de farine, 50 g de sarrasin, 2 jaunes d’œufs et 30 g de beurre fondu, laissez lever 1 h, puis incorporez les blancs montés. Une cuillère à soupe de pâte par blini, 3 minutes à la poêle sur feu moyen. Garnis de crème citronnée, de saumon fumé et d’œufs de lump. Comptez 1 h 55, dont 1 h de levée.",
  intro: [
    "Un blini, ici, c’est la petite crêpe épaisse de l’apéritif, 6 cm de diamètre environ, moelleuse dedans et dorée sur les deux faces. Notre version est à la levure de boulanger, avec un quart de farine de sarrasin pour le petit goût de noisette.",
    "Les blinis ratés sont presque toujours plats. Soit la pâte n’a pas assez levé, soit les blancs ont été mélangés comme une pâte à gâteau, et tout l’air est parti.",
    "Le conseil qui change tout : une poêle sur feu moyen, pas plus. Trop chaude, elle brunit le dessous avant que les bulles aient eu le temps de monter et de percer la surface.",
  ],
  category: "Entrée",
  cuisine: "Française",
  keywords: [
    "blinis maison",
    "recette blinis",
    "blinis à la levure de boulanger",
    "blinis au sarrasin",
    "blinis saumon fumé",
    "blinis apéritif",
    "congeler des blinis",
    "blinis sans levure de boulanger",
  ],
  servings: 30,
  servingsLabel: { one: "blini", other: "blinis" },
  times: { prep: 30, cook: 25, rest: 60 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  tags: ["apero", "noel", "nouvel-an"],
  equipment: [
    "grande poêle antiadhésive de 28 cm, ou une poêle à blinis",
    "un grand saladier et un petit saladier",
    "fouet et batteur électrique",
    "spatule souple et spatule plate pour retourner",
  ],
  ingredients: [
    {
      title: "La pâte",
      items: [
        { qty: 300, unit: "ml", name: "lait entier", note: "tiède, vers 35 °C", step: 10 },
        { qty: 7, unit: "g", name: "levure de boulanger sèche", note: "1 sachet", step: 1 },
        { qty: 1, unit: "cac", name: "sucre", step: 0.5 },
        { qty: 200, unit: "g", name: "farine de blé", note: "type 55", step: 10 },
        { qty: 50, unit: "g", name: "farine de sarrasin", step: 5 },
        { qty: 0.5, unit: "cac", name: "sel fin", step: 0.25 },
        { qty: 2, name: "œuf", plural: "œufs", note: "blancs et jaunes séparés, à température ambiante", step: 1 },
        { qty: 30, unit: "g", name: "beurre", note: "fondu et tiédi", step: 5 },
        { qty: 10, unit: "g", name: "beurre pour la poêle", note: "fondu", step: 5 },
      ],
    },
    {
      title: "La garniture",
      items: [
        { qty: 200, unit: "g", name: "crème fraîche épaisse", note: "bien froide", step: 10 },
        { qty: 0.5, name: "citron", plural: "citrons", note: "non traité", step: 0.5 },
        { name: "poivre du moulin" },
        { qty: 200, unit: "g", name: "saumon fumé", note: "en tranches", step: 10 },
        { qty: 50, unit: "g", name: "œufs de lump", note: "rouges ou noirs", step: 10 },
        { qty: 6, unit: "brin", name: "aneth", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "La pâte",
      steps: [
        {
          title: "Réveiller la levure",
          text: "Faites tiédir le lait à 35 °C environ : au doigt, il doit sembler à peine tiède. Hors du feu, délayez-y la levure et le sucre, puis attendez 5 minutes, jusqu’à ce qu’une fine mousse beige se forme en surface.",
          timer: { minutes: 5, label: "Levure dans le lait" },
          tip: "Au-delà de 45 °C, le lait abîme la levure et la pâte ne lève presque plus. Dans le doute, plutôt trop froid que trop chaud.",
        },
        {
          title: "Mélanger la pâte",
          text: "Dans le grand saladier, mélangez les deux farines et le sel. Creusez un puits, déposez les jaunes, puis versez le lait peu à peu en fouettant du centre vers les bords. Finissez avec le beurre fondu tiédi. La pâte est lisse et épaisse, un peu plus lourde qu’une pâte à crêpes. Gardez les blancs à côté, dans le petit saladier.",
        },
        {
          title: "Laisser lever",
          text: "Couvrez d’un torchon et laissez lever 1 h à température ambiante, loin des courants d’air. La pâte a presque doublé et sa surface est criblée de petites bulles.",
          timer: { minutes: 60, label: "Levée de la pâte" },
          tip: "Cuisine froide : posez le saladier dans le four éteint, lumière allumée. Il y fait juste assez doux.",
        },
        {
          title: "Incorporer les blancs",
          text: "Montez les blancs au batteur en neige souple : quand on soulève le fouet, la pointe retombe légèrement. Incorporez-les à la spatule en deux fois, en soulevant la pâte du fond vers le haut, sans chercher à lisser chaque trace blanche.",
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Chauffer la poêle",
          text: "Faites chauffer la poêle sur feu moyen et graissez-la avec un papier absorbant trempé dans le beurre fondu. Elle est prête quand une goutte de pâte grésille doucement, sans fumée.",
        },
        {
          title: "Cuire par fournées",
          text: "Déposez une cuillerée à soupe de pâte par blini, en laissant de la place autour : elle s’étale seule sur 6 cm environ. Laissez cuire 2 minutes, jusqu’à ce que des bulles crèvent la surface et que les bords deviennent mats, retournez, puis comptez 1 minute de plus. Soit 3 minutes par fournée.",
          timer: { minutes: 3, label: "Une fournée de blinis" },
          tip: "N’appuyez pas sur les blinis avec la spatule : on chasse les bulles et ils retombent, plats et serrés.",
        },
        {
          title: "Empiler au chaud",
          text: "Glissez les blinis cuits dans un torchon propre, les uns sur les autres : la vapeur les garde souples. Graissez de nouveau la poêle toutes les deux fournées et continuez jusqu’à la fin de la pâte.",
        },
      ],
    },
    {
      title: "La garniture",
      steps: [
        {
          title: "Parfumer la crème",
          text: "Mélangez la crème fraîche avec le zeste fin du demi-citron, une cuillère à café de son jus et deux tours de poivre. Gardez au réfrigérateur jusqu’au service.",
        },
        {
          title: "Garnir au dernier moment",
          text: "Sur chaque blini tiède ou froid, posez une petite cuillère de crème, un pli de saumon fumé, quelques œufs de lump et une pointe d’aneth. Servez dans le quart d’heure.",
          tip: "Les œufs de lump sont teintés et déteignent sur la crème en quelques minutes. Ajoutez-les en tout dernier.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi la pâte se couvre de bulles",
      text: "Pendant la levée, la levure consomme les sucres de la farine et rejette du gaz carbonique. Le réseau de gluten retient ce gaz en petites bulles, qui éclatent à la surface pendant la cuisson et donnent aux blinis leur dessus criblé de trous.",
    },
    {
      title: "Le rôle des blancs montés",
      text: "Les blancs battus emprisonnent de l’air dans un réseau de protéines. Incorporés à la fin, ils ajoutent une seconde source de légèreté qui ne dépend pas de la levure, et la chaleur de la poêle fige ces bulles en quelques secondes.",
    },
    {
      title: "Ce que change le sarrasin",
      text: "Le sarrasin ne contient pas de gluten. Remplacer un quart de la farine de blé par du sarrasin affaiblit un peu le réseau élastique de la pâte : le blini est plus tendre, moins caoutchouteux, et prend une couleur grise piquetée.",
    },
  ],
  tips: [
    "Faites un premier blini d’essai. S’il colle, la poêle n’est pas assez chaude ; s’il brunit avant que les bulles ne percent, elle l’est trop.",
    "Une cuillère à soupe bien pleine donne des blinis de 6 cm, la bonne taille pour une bouchée. Pour des blinis réguliers, utilisez toujours la même cuillère.",
    "Gardez la pâte levée au frais si vous cuisez en plusieurs fois : elle tient 2 heures au réfrigérateur, mais n’incorporez les blancs qu’au moment de cuire.",
    "Servez les blinis tièdes plutôt que brûlants : la crème fraîche fond au contact d’un blini qui sort de la poêle.",
  ],
  mistakes: [
    "Verser le lait chaud sur la levure : au-delà de 45 °C, elle ne fait plus lever la pâte. Si rien n’a bougé au bout d’une heure, recommencez avec une levure neuve.",
    "Tourner les blancs comme une pâte à gâteau : l’air s’échappe et les blinis sortent plats. Soulevez, ne remuez pas.",
    "Cuire à feu vif : le dessous noircit, le cœur reste cru et pâteux. Baissez le feu et attendez que la poêle se stabilise.",
    "Garnir une heure à l’avance : la crème détrempe le blini et les œufs de lump déteignent. Préparez tout, assemblez au dernier moment.",
  ],
  variations: [
    {
      title: "À la levure chimique",
      text: "Remplacez la levure de boulanger par 1 sachet de levure chimique (11 g), mélangé à la farine. Utilisez du lait froid, sautez la levée et laissez juste reposer la pâte 15 minutes avant d’ajouter les blancs. Les blinis sont prêts en 45 minutes, plus proches du pancake : moelleux, mais sans la légère acidité de la fermentation.",
    },
    {
      title: "Tout froment",
      text: "Remplacez les 50 g de sarrasin par 50 g de farine de blé type 55. Les blinis sont plus clairs, plus doux et un peu plus élastiques.",
    },
    {
      title: "Aux herbes",
      text: "Ajoutez 2 cuillères à soupe d’aneth ou de ciboulette ciselés dans la pâte, juste avant les blancs. Ils se marient bien avec une garniture de truite fumée et de radis.",
    },
  ],
  storage:
    "Nature, les blinis se gardent 2 jours au réfrigérateur dans une boîte hermétique, et 3 mois au congélateur, à plat dans un sac. Réchauffez-les sans les décongeler, 8 minutes au four à 160 °C sous une feuille d’aluminium. Une fois garnis, ils se mangent dans l’heure.",
  pairing: "Un champagne brut, ou un crémant de Loire si l’on reçoit beaucoup de monde.",
  faq: [
    {
      q: "Peut-on préparer les blinis la veille ?",
      a: "Oui. Cuisez-les la veille, laissez-les refroidir et gardez-les au réfrigérateur dans une boîte hermétique. Le jour même, réchauffez-les 8 minutes au four à 160 °C sous une feuille d’aluminium, puis garnissez-les une fois tièdes.",
    },
    {
      q: "Comment congeler des blinis maison ?",
      a: "3 mois au congélateur, à condition de les congeler nature et bien refroidis. Étalez-les d’abord à plat sur une plaque 1 heure au congélateur pour qu’ils ne collent pas, puis rangez-les en sac. Ils se réchauffent sans décongélation, 8 minutes à 160 °C.",
    },
    {
      q: "Peut-on faire des blinis sans levure de boulanger ?",
      a: "Oui, avec 11 g de levure chimique mêlée à la farine et du lait froid. On supprime l’heure de levée et on laisse simplement reposer la pâte 15 minutes. Les blinis sont un peu plus denses et n’ont pas le goût légèrement acidulé de la version à la levure de boulanger.",
    },
    {
      q: "Peut-on faire des blinis sans farine de sarrasin ?",
      a: "Oui. Remplacez-la par la même quantité de farine de blé. Les blinis seront plus pâles et plus doux, avec une texture un peu plus élastique.",
    },
    {
      q: "Combien de blinis prévoir par personne à l’apéritif ?",
      a: "4 à 5 blinis par personne s’il y a d’autres bouchées, 8 à 10 si les blinis font l’essentiel de l’apéritif. Cette recette en donne une trentaine.",
    },
    {
      q: "Quelle garniture mettre sur des blinis ?",
      a: "La crème fraîche citronnée avec du saumon fumé et des œufs de lump reste la plus courante. On peut aussi y mettre de la truite fumée, du tarama, du fromage frais aux herbes avec du concombre, ou du magret fumé avec une pointe de confiture de figues.",
    },
  ],
  nutrition: {
    calories: 84,
    protein: 3.5,
    fat: 4.6,
    saturatedFat: 2.5,
    carbs: 6.8,
    sugar: 0.8,
    fiber: 0.4,
    sodium: 157,
  },
  annotations: { hero: "garnis au dernier moment", detail: "dessus criblé de bulles" },
  images: {
    heroAlt:
      "Blinis garnis de crème à l’aneth, d’un pli de saumon fumé et de jeunes pousses pourpres, alignés sur un plat en grès gris",
    detailAlt: "Petits blinis dorés disposés en couronne sur un plateau doré, autour d’une boîte de caviar",
    credits: {
      hero: {
        photographer: "Sebastian Coman Photography",
        url: "https://www.pexels.com/photo/salmon-with-bread-and-flower-3504874/",
      },
      detail: {
        photographer: "Sergej *****",
        url: "https://www.pexels.com/photo/elegant-caviar-platter-with-blinis-on-gold-tray-29928570/",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#E8875F",
    onAccent: "#1B1712",
    ink: "#9C4424",
    tint: "#FBEFE8",
    deep: "#1A0E09",
    focus: "50% 55%",
  },
});
