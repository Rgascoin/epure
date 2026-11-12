import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "soupe-de-legumes",
  title: "Soupe de légumes",
  seoTitle: "Soupe de légumes maison, mixée ou en morceaux",
  tagline: "L’eau juste à hauteur, pas plus.",
  description:
    "Soupe de légumes pour 6 : 1,2 kg de carottes, poireaux, pommes de terre, navet et céleri épluchés, 1,5 l d’eau à hauteur, 25 min de cuisson, mixée ou non.",
  summary:
    "Pour 6 personnes (environ 2,4 l), épluchez 1,2 kg de légumes (carottes, poireaux, pommes de terre, navet, céleri-rave, oignon), couvrez-les tout juste de 1,5 l d’eau froide avec 1 cac de sel et un bouquet garni, puis laissez frémir 25 minutes à couvert. Mixez 2 minutes, ou gardez les légumes en dés de 1 cm avec 50 cl d’eau en plus. Ne finissez de saler qu’après avoir goûté. Comptez 55 minutes en tout, dont 20 minutes d’épluchage.",
  intro: [
    "La soupe de légumes de tous les jours ne demande ni bouillon ni technique : des carottes, des poireaux, des pommes de terre, un navet, un morceau de céleri, de l’eau et du sel. Tout part ensemble dans la marmite, à froid, sans passer par la poêle.",
    "Quand elle rate, c’est presque toujours à cause de l’eau. Trop, et on sert un liquide pâle où les légumes ont dilué leur goût. Trop peu, et on mange une purée. Le sel joue aussi : versé d’un coup à la fin, il reste dans le bouillon, et les légumes, eux, sont fades.",
    "La règle tient en deux gestes : mouiller juste à hauteur, et saler en deux fois, un peu au départ, le reste après avoir goûté. Pour la version en morceaux, seule la coupe change, avec un demi-litre d’eau en plus.",
  ],
  category: "Entrée",
  cuisine: "Française",
  keywords: [
    "soupe de légumes",
    "soupe de légumes maison",
    "soupe de légumes mixée",
    "soupe de légumes en morceaux",
    "quantité d’eau soupe de légumes",
    "temps de cuisson soupe de légumes",
    "soupe de légumes d’hiver",
    "potage de légumes",
  ],
  diet: ["vegetarian", "glutenFree"],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 20, cook: 35 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["hiver", "automne"],
  equipment: [
    "marmite ou faitout de 5 l avec couvercle",
    "mixeur plongeant (pour la version mixée)",
    "économe",
    "ficelle de cuisine pour le bouquet garni",
  ],
  ingredients: [
    {
      title: "Les légumes",
      items: [
        { qty: 400, unit: "g", name: "carotte", plural: "carottes", note: "4 moyennes", step: 50 },
        {
          qty: 2,
          name: "poireau",
          plural: "poireaux",
          note: "environ 300 g, le blanc et le vert tendre",
          step: 1,
        },
        {
          qty: 300,
          unit: "g",
          name: "pomme de terre",
          plural: "pommes de terre",
          note: "bintje pour la soupe mixée, chair ferme pour les morceaux",
          step: 50,
        },
        { qty: 150, unit: "g", name: "navet", plural: "navets", note: "1 navet moyen", step: 50 },
        { qty: 150, unit: "g", name: "céleri-rave", note: "ou 2 branches de céleri", step: 50 },
        { qty: 1, name: "oignon", plural: "oignons", step: 1 },
      ],
    },
    {
      title: "La cuisson",
      items: [
        { qty: 1.5, unit: "l", name: "eau froide", note: "2 l pour la soupe en morceaux", step: 0.25 },
        { qty: 2, unit: "cac", name: "sel fin", note: "1 au départ, le reste au goût", step: 0.5 },
        { qty: 1, name: "bouquet garni", plural: "bouquets garnis", note: "thym, laurier, queues de persil", step: 1 },
        { name: "poivre du moulin" },
      ],
    },
    {
      title: "Pour servir",
      items: [
        { qty: 30, unit: "g", name: "beurre", note: "ou 6 cas de crème fraîche", step: 5 },
        { qty: 10, unit: "g", name: "persil plat ou cerfeuil", note: "ciselé", step: 5, optional: true },
      ],
    },
  ],
  method: [
    {
      title: "Préparer les légumes",
      steps: [
        {
          title: "Éplucher et laver",
          text: "Pelez les carottes, les pommes de terre, le navet, le céleri-rave et l’oignon. Fendez les poireaux en deux dans la longueur et rincez-les sous l’eau froide en écartant les feuilles, là où la terre se cache.",
          tip: "Un poireau mal lavé suffit à faire crisser toute la marmite sous la dent. Rincez jusqu’à ce que l’eau qui coule entre les feuilles soit claire.",
        },
        {
          title: "Couper selon la soupe",
          text: "Pour une soupe mixée, taillez tout en morceaux de 3 cm, le poireau en tronçons. Pour une soupe en morceaux, taillez des dés réguliers de 1 cm et émincez le poireau en fines rondelles : ils doivent tenir dans une cuillère.",
        },
        {
          title: "Mouiller à hauteur",
          text: "Mettez les légumes dans la marmite avec le bouquet garni et 1 cac de sel, puis versez l’eau froide : 1,5 l pour la soupe mixée, de quoi couvrir tout juste les légumes, ou 2 l pour la soupe en morceaux, qui a besoin de bouillon.",
          tip: "Mettez plutôt un peu moins d’eau que trop. Une soupe épaisse s’allonge en dix secondes ; une soupe trop claire doit réduire longtemps, et les légumes y perdent leur fraîcheur.",
        },
      ],
    },
    {
      title: "Cuire et finir",
      steps: [
        {
          title: "Cuire à frémissement",
          text: "Portez à ébullition sur feu vif, puis baissez pour un simple frémissement et couvrez en laissant un petit espace. Comptez 25 minutes pour les morceaux de 3 cm, 15 minutes pour les dés. C’est cuit quand un morceau de carotte s’écrase sans résistance contre la paroi.",
          timer: { minutes: 25, label: "Soupe" },
        },
        {
          title: "Mixer ou laisser en morceaux",
          text: "Retirez le bouquet garni. Pour la version mixée, plongez le mixeur au fond de la marmite, inclinée, et mixez 2 minutes jusqu’à ce que la soupe soit lisse. Pour la version en morceaux, écrasez simplement quelques dés de pomme de terre contre la paroi pour lier un peu le bouillon.",
          timer: { minutes: 2, label: "Mixage" },
        },
        {
          title: "Goûter, puis saler",
          text: "Goûtez maintenant seulement, et ajoutez le reste du sel par demi-cuillère, en goûtant entre chaque ajout, puis poivrez. Si la soupe mixée est trop épaisse, allongez-la d’eau chaude, 10 cl à la fois, et resalez légèrement.",
          tip: "La cuisson a fait évaporer un peu d’eau et concentré le sel du départ : c’est pour cela qu’on n’a mis qu’une cuillère au début.",
        },
        {
          title: "Servir",
          text: "Servez bien chaud dans des bols, avec une noisette de beurre qui fond à la surface, ou une cuillère de crème fraîche, et un peu de persil ou de cerfeuil.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Le sel du départ assaisonne le cœur",
      text: "Pendant la cuisson, les parois des cellules végétales se ramollissent et laissent le sel de l’eau pénétrer dans les légumes. Salé seulement à la fin, le bouillon est assaisonné mais les morceaux restent fades : on le sent surtout dans la version non mixée.",
    },
    {
      title: "La pomme de terre lie la soupe",
      text: "Une pomme de terre farineuse comme la bintje libère beaucoup d’amidon en cuisant et en passant au mixeur : c’est elle qui donne du corps à la soupe mixée. Une pomme de terre à chair ferme, plus pauvre en amidon et plus tenue, garde sa forme dans la version en morceaux.",
    },
    {
      title: "Ce que la cuisson concentre",
      text: "En 25 minutes de frémissement, couvercle entrouvert, une partie de l’eau s’évapore et le sel reste. Saler entièrement au départ, c’est saler une soupe qui sera plus concentrée à la fin.",
    },
  ],
  tips: [
    "Pesez une fois vos légumes épluchés : vous saurez ensuite qu’il faut environ 1,25 l d’eau par kilo pour une soupe mixée, et vous n’aurez plus besoin de recette.",
    "Gardez la carotte comme base et dosez le reste : au-delà de 150 g chacun pour cette quantité, le navet et le céleri prennent toute la place.",
    "Videz le bac à légumes si vous voulez : une courgette, un morceau de potiron ou une branche de blette remplacent volontiers le navet, à poids égal.",
    "Pour mixer dans la marmite sans éclabousser, inclinez-la et gardez la lame bien immergée avant de mettre en marche.",
  ],
  mistakes: [
    "Noyer les légumes sous l’eau : la soupe est claire et fade. Si c’est fait, laissez-la réduire à découvert 10 à 15 minutes avant de mixer.",
    "Saler entièrement au départ : avec l’évaporation, la soupe finit trop salée. Le seul rattrapage est de l’allonger d’eau non salée, et d’en avoir davantage.",
    "Tout saler à la fin dans la version en morceaux : le bouillon est salé, les légumes insipides. Mettez 1 cac de sel dès le départ.",
    "Laisser cuire une heure : les légumes ternissent et prennent un goût de cantine. 25 minutes suffisent pour des morceaux de 3 cm.",
    "Mixer avec le bouquet garni : le laurier part en miettes et donne de l’amertume. Retirez-le avant de mixer.",
  ],
  variations: [
    {
      title: "Plus ronde, légumes revenus",
      text: "Faites suer le poireau et l’oignon 10 minutes dans 30 g de beurre avant d’ajouter les autres légumes et l’eau. La soupe devient plus douce et plus ronde ; supprimez alors le beurre au service.",
    },
    {
      title: "Avec des vermicelles",
      text: "Pour la version en morceaux, ajoutez 60 g de vermicelles 5 minutes avant la fin de la cuisson, avec 25 cl d’eau bouillante en plus : ils boivent le bouillon. La soupe n’est alors plus sans gluten.",
    },
    {
      title: "À l’autocuiseur",
      text: "Mêmes légumes, même eau. Fermez, et comptez 10 minutes à partir du moment où la soupape chuchote pour des morceaux de 3 cm, puis laissez la pression retomber avant d’ouvrir.",
    },
  ],
  storage:
    "La soupe se garde 3 jours au réfrigérateur, dans une boîte fermée, mise au frais dans les 2 heures après la cuisson. Elle se congèle 3 mois en portions ; la version mixée supporte mieux le congélateur que celle en morceaux. Décongelez au réfrigérateur, réchauffez jusqu’à frémissement et ne recongelez pas.",
  pairing:
    "Une tartine de pain de campagne grillé et un morceau de comté ou de tomme : avec un bol de soupe, c’est un dîner.",
  faq: [
    {
      q: "Quelle quantité d’eau pour une soupe de légumes ?",
      a: "Juste de quoi couvrir les légumes à hauteur : environ 1,25 l par kilo de légumes épluchés pour une soupe mixée, un demi-litre de plus pour une soupe en morceaux. Mieux vaut en mettre un peu moins au départ, on allonge facilement à la fin avec de l’eau chaude.",
    },
    {
      q: "Quand saler une soupe de légumes ?",
      a: "En deux fois : 1 cac au départ, dans l’eau froide, pour que les légumes s’assaisonnent en cuisant, puis le reste à la fin, après avoir goûté. La cuisson concentre le sel, et une soupe trop salée ne se rattrape qu’en l’allongeant.",
    },
    {
      q: "Combien de temps faire cuire une soupe de légumes ?",
      a: "25 minutes à frémissement pour des morceaux de 3 cm, 15 minutes pour des dés de 1 cm, à compter de l’ébullition. Les légumes sont prêts quand une carotte s’écrase sans résistance. Au-delà de 40 minutes, ils perdent leur couleur et leur goût frais.",
    },
    {
      q: "Faut-il faire revenir les légumes avant de faire une soupe ?",
      a: "Non, pas pour celle-ci : tout part à froid dans l’eau et le goût reste net, celui des légumes. Faire suer le poireau et l’oignon 10 minutes dans du beurre donne une soupe plus ronde et plus douce. C’est une autre soupe, pas forcément une meilleure.",
    },
    {
      q: "Combien de temps se conserve une soupe de légumes au réfrigérateur ?",
      a: "3 jours, dans une boîte fermée, mise au réfrigérateur dans les 2 heures après la cuisson. Ne réchauffez que la quantité à servir, jusqu’à frémissement.",
    },
    {
      q: "Peut-on congeler une soupe de légumes ?",
      a: "Oui, 3 mois, en portions, une fois refroidie. La version mixée se congèle le mieux ; dans la version en morceaux, les dés de pomme de terre deviennent un peu granuleux. Décongelez au réfrigérateur et ne recongelez pas.",
    },
  ],
  nutrition: {
    calories: 110,
    protein: 3,
    fat: 4.5,
    saturatedFat: 2.7,
    carbs: 14,
    sugar: 5.5,
    fiber: 4.3,
    sodium: 650,
  },
  annotations: { hero: "une cuillère de crème, au dernier moment", detail: "en dés, un demi-litre d’eau en plus" },
  images: {
    heroAlt:
      "Soupe de légumes mixée dans un bol blanc, d’un orange doux moucheté de vert, avec une spirale de crème au centre",
    detailAlt:
      "Bol de soupe de légumes en morceaux, petits dés de légumes dans un bouillon clair, servi avec des tranches de pain de seigle",
    credits: {
      hero: {
        photographer: "Katrin Gilger",
        url: "https://commons.wikimedia.org/wiki/File:Vegetable_Soup_(4424028697).jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 2.0",
      },
      detail: {
        photographer: "Katrin Gilger",
        url: "https://commons.wikimedia.org/wiki/File:Vegetable_Soup_(4421671649).jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 2.0",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#D9822B",
    onAccent: "#1B1712",
    ink: "#8F4F10",
    tint: "#FBF1E6",
    deep: "#1C1008",
    focus: "50% 50%",
  },
});
