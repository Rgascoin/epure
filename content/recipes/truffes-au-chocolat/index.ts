import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "truffes-au-chocolat",
  title: "Truffes au chocolat",
  seoTitle: "Truffes au chocolat maison : la ganache qui se roule bien",
  tagline: "Deux de chocolat pour un de crème.",
  description:
    "30 truffes au chocolat maison : 250 g de chocolat noir, 125 ml de crème, un peu de beurre, puis le cacao. 40 minutes de travail, 2 h 30 de prise.",
  summary:
    "Pour 30 truffes, versez 125 ml de crème entière frémissante sur 250 g de chocolat noir haché, mélangez jusqu’à obtenir une ganache brillante, puis ajoutez 25 g de beurre. Laissez prendre 30 minutes à température ambiante et 2 h au réfrigérateur, formez des boules de 13 g environ et roulez-les dans le cacao. Comptez 3 h 15 en tout, dont 40 minutes de travail. Elles se gardent une semaine au frais.",
  intro: [
    "Une truffe au chocolat, c’est une ganache assez ferme pour être roulée en boule, puis enrobée de cacao amer. Pas de tempérage, pas de moule : il faut un bon chocolat, de la crème et un peu de patience.",
    "Tout se joue sur la proportion. Avec deux fois plus de chocolat que de crème, la ganache se tient sous les doigts tout en restant fondante en bouche. Avec plus de crème, on obtient une sauce ; avec moins, des billes dures.",
    "L’autre point, c’est la température des mains. On roule vite, les mains froides, et on remet au frais dès que la ganache colle.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "truffes au chocolat",
    "recette truffes au chocolat",
    "truffes au chocolat maison",
    "truffes au cacao",
    "ganache pour truffes",
    "truffes au chocolat facile",
    "conservation truffes au chocolat",
    "truffes au chocolat à offrir",
  ],
  diet: ["vegetarian"],
  servings: 30,
  servingsLabel: { one: "truffe", other: "truffes" },
  times: { prep: 40, cook: 5, rest: 150 },
  difficulty: "Facile",
  cost: "€",
  season: ["Hiver"],
  tags: ["noel"],
  equipment: [
    "une petite casserole",
    "un saladier en verre ou en inox",
    "une spatule souple",
    "une cuillère à café ou une petite cuillère à glace",
    "une assiette creuse et une passoire fine",
  ],
  ingredients: [
    {
      title: "La ganache",
      items: [
        { qty: 250, unit: "g", name: "chocolat noir pâtissier", note: "55 à 70 % de cacao", step: 10 },
        { qty: 125, unit: "ml", name: "crème liquide entière", note: "30 % de matière grasse", step: 5 },
        { qty: 25, unit: "g", name: "beurre doux", note: "mou, en dés", step: 5 },
        { qty: 1, unit: "cas", name: "rhum ambré ou cognac", optional: true, step: 0.5 },
      ],
    },
    {
      title: "L’enrobage",
      items: [{ qty: 40, unit: "g", name: "cacao en poudre non sucré", step: 5 }],
    },
  ],
  method: [
    {
      title: "La ganache",
      steps: [
        {
          title: "Hacher le chocolat",
          text: "Hachez le chocolat au couteau en petits morceaux réguliers, de la taille d’une lentille, et mettez-le dans le saladier.",
          tip: "Des morceaux fins fondent tous ensemble au contact de la crème. Les gros éclats restent solides au centre et laissent des grains.",
        },
        {
          title: "Chauffer la crème",
          text: "Portez la crème à frémissement sur feu moyen : de petites bulles se forment sur les bords et la surface commence à trembler. Retirez du feu avant qu’elle ne bouille.",
        },
        {
          title: "Émulsionner",
          text: "Versez un tiers de la crème chaude sur le chocolat et mélangez à la spatule en petits cercles, en partant du centre. Ajoutez le reste en deux fois. La ganache devient lisse, brillante et un peu élastique.",
          tip: "Si la ganache paraît granuleuse ou graisseuse, ajoutez une cuillère à soupe de crème chaude et remuez vivement au centre : elle se reforme.",
        },
        {
          title: "Lier au beurre",
          text: "Quand la ganache est juste tiède, ajoutez le beurre mou et l’alcool si vous en mettez, et mélangez jusqu’à ce que le beurre disparaisse complètement.",
        },
      ],
    },
    {
      title: "La prise",
      steps: [
        {
          title: "Laisser tiédir",
          text: "Filmez au contact et laissez la ganache 30 minutes à température ambiante. Elle épaissit doucement en refroidissant.",
          timer: { minutes: 30, label: "Ganache à température" },
        },
        {
          title: "Faire prendre au frais",
          text: "Placez le saladier 2 h au réfrigérateur. La ganache est prête quand elle a la consistance d’une pâte à modeler souple : la cuillère y laisse une trace nette.",
          timer: { minutes: 120, label: "Ganache au réfrigérateur" },
        },
      ],
    },
    {
      title: "Le façonnage",
      steps: [
        {
          title: "Prélever les portions",
          text: "Prélevez des noix de ganache de 13 g environ à la cuillère à café, et posez-les sur une feuille de papier cuisson. Il en faut une trentaine.",
        },
        {
          title: "Rouler les truffes",
          text: "Passez vos mains sous l’eau froide et séchez-les. Roulez chaque portion entre les paumes, quelques secondes seulement, pour former une boule irrégulière. Si la ganache colle, remettez les portions 15 minutes au réfrigérateur.",
          timer: { minutes: 15, label: "Portions au frais" },
          tip: "Les truffes n’ont pas besoin d’être parfaitement rondes : leur nom vient justement de leur forme de champignon.",
        },
        {
          title: "Enrober de cacao",
          text: "Versez le cacao dans l’assiette creuse, roulez-y les truffes quelques-unes à la fois, puis secouez-les dans la passoire fine pour retirer l’excès. Gardez-les au frais et sortez-les 15 minutes avant de servir.",
          timer: { minutes: 15, label: "Truffes hors du frigo" },
        },
      ],
    },
  ],
  science: [
    {
      title: "La ganache est une émulsion",
      text: "La crème apporte de l’eau, le chocolat du beurre de cacao. En mélangeant du centre vers l’extérieur, on disperse les gouttelettes de matière grasse dans l’eau, comme pour une mayonnaise. Si elles se regroupent, la ganache tranche et devient granuleuse.",
    },
    {
      title: "Pourquoi deux pour un",
      text: "Plus il y a de chocolat par rapport à la crème, plus la ganache est ferme une fois froide, car le beurre de cacao se solidifie en refroidissant. Le rapport de deux parts de chocolat pour une part de crème donne une texture qu’on peut rouler sans qu’elle soit dure en bouche.",
    },
    {
      title: "Pourquoi laisser prendre d’abord à l’air",
      text: "Le beurre de cacao cristallise plus régulièrement quand il refroidit lentement. Une ganache passée directement au réfrigérateur encore chaude prend plus vite, mais sa texture est souvent moins lisse.",
    },
  ],
  tips: [
    "Prenez un chocolat que vous aimez manger tel quel : la truffe en garde tout le goût. Un chocolat à 55 % donne des truffes douces, un 70 % des truffes plus amères et plus fermes.",
    "Avec un chocolat à plus de 70 %, ajoutez 15 ml de crème : la ganache serait sinon trop ferme et cassante.",
    "Pesez une première truffe pour caler la taille, puis gardez la même cuillère : des truffes de même taille se tiennent mieux dans une boîte.",
    "Pour offrir, rangez les truffes dans une boîte en métal ou en carton tapissée de papier sulfurisé, une couche par niveau, et précisez de les garder au frais et de les manger dans la semaine.",
  ],
  mistakes: [
    "Verser toute la crème d’un coup et remuer en grands cercles : l’émulsion se forme mal et la ganache tranche. Rattrapage : une cuillère de crème tiède, et on remue vivement au centre.",
    "Fouetter la ganache : on y incorpore des bulles d’air et elle perd son brillant. On mélange à la spatule, sans précipitation.",
    "Rouler les truffes trop longtemps entre des mains chaudes : la ganache fond et devient luisante. Quelques secondes suffisent.",
    "Enrober les truffes la veille d’un repas : le cacao absorbe l’humidité et devient terne. Roulez-les de nouveau dans un peu de cacao avant de servir.",
  ],
  variations: [
    {
      title: "Au chocolat au lait",
      text: "Remplacez le chocolat noir par 300 g de chocolat au lait et réduisez la crème à 100 ml : le chocolat au lait contient moins de beurre de cacao et prend moins. Enrobez de cacao ou de noisettes concassées, qui sont des fruits à coque.",
    },
    {
      title: "Parfumées à l’orange",
      text: "Faites infuser le zeste d’une orange non traitée 10 minutes dans la crème chaude, puis filtrez et réchauffez-la avant de la verser sur le chocolat.",
    },
    {
      title: "Enrobages",
      text: "À la place du cacao, roulez les truffes dans de la noix de coco râpée, des pistaches concassées, des pralines roses écrasées ou des vermicelles de chocolat. Les pistaches sont des fruits à coque.",
    },
  ],
  storage:
    "Les truffes se gardent 1 semaine au réfrigérateur, dans une boîte hermétique, à l’écart des aliments odorants. Elles se congèlent 2 mois sans le cacao : décongelez-les une nuit au réfrigérateur, puis roulez-les dans le cacao. Servez-les après 15 minutes à température ambiante.",
  pairing: "Un café serré, un banyuls ou un vieux rhum.",
  faq: [
    {
      q: "Quelle proportion de chocolat et de crème pour des truffes ?",
      a: "2 pour 1 en poids : 250 g de chocolat noir pour 125 ml de crème entière. C’est assez ferme pour rouler les truffes et assez souple pour qu’elles fondent en bouche. Avec du chocolat au lait, plus mou, on monte à 3 pour 1.",
    },
    {
      q: "Combien de temps se conservent des truffes au chocolat maison ?",
      a: "1 semaine au réfrigérateur, dans une boîte hermétique. La ganache contient de la crème fraîche : à température ambiante, elles ne se gardent pas plus d’une journée, dans une pièce fraîche.",
    },
    {
      q: "Peut-on mettre de l’alcool dans des truffes au chocolat ?",
      a: "Oui, une cuillère à soupe de rhum, de cognac ou de liqueur d’orange, ajoutée à la ganache tiède. L’alcool n’est pas cuit et reste présent : ces truffes ne conviennent ni aux enfants ni aux femmes enceintes. Faites une partie sans alcool si besoin.",
    },
    {
      q: "Pourquoi ma ganache a tranché ?",
      a: "Le plus souvent, la crème a été versée d’un coup, ou le mélange a été battu trop vite. La ganache devient alors granuleuse avec une fine couche de gras. Ajoutez une cuillère à soupe de crème tiède et mélangez énergiquement au centre, en petits cercles : elle redevient lisse.",
    },
    {
      q: "Peut-on congeler des truffes au chocolat ?",
      a: "Oui, 2 mois, de préférence sans le cacao. Rangez-les dans une boîte hermétique, décongelez-les une nuit au réfrigérateur, puis roulez-les dans le cacao juste avant de servir.",
    },
    {
      q: "Combien de truffes avec 250 g de chocolat ?",
      a: "30 truffes environ, de 13 g chacune, avec 125 ml de crème et 25 g de beurre. Pour des bouchées plus petites, de 8 à 10 g, on en obtient une quarantaine.",
    },
  ],
  nutrition: { calories: 64, protein: 0.7, fat: 5.2, saturatedFat: 3.3, carbs: 3.1, sugar: 2.6, fiber: 1.1, sodium: 3 },
  annotations: { hero: "cacao amer, mains froides", detail: "rouler vite, ne pas lisser" },
  images: {
    heroAlt: "Truffes au chocolat roulées dans le cacao amer, posées sur une assiette blanche à rebord",
    detailAlt: "Un grand tas de truffes au chocolat couvertes de cacao en poudre, avec une pelle de service blanche",
    credits: {
      hero: {
        photographer: "Vladimir Gladkov",
        url: "https://www.pexels.com/photo/chocolate-balls-on-white-ceramic-plate-6213672/",
      },
      detail: {
        photographer: "Sukkoria",
        url: "https://commons.wikimedia.org/w/index.php?curid=63693784",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#8A5536",
    onAccent: "#FFFFFF",
    ink: "#6E3F22",
    tint: "#F6ECE5",
    deep: "#160C07",
    focus: "50% 45%",
  },
});
