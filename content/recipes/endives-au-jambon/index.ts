import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "endives-au-jambon",
  title: "Endives au jambon",
  seoTitle: "Endives au jambon gratinées, béchamel au comté",
  tagline: "On presse les endives, vraiment.",
  description:
    "Endives au jambon pour 4 : 8 endives braisées puis bien pressées, roulées dans du jambon blanc, nappées de béchamel au comté et gratinées 20 minutes à 200 °C.",
  summary:
    "Pour 4 personnes, braisez 8 endives 25 à 30 minutes à couvert avec 20 g de beurre, laissez-les égoutter 10 minutes et pressez-les une à une. Roulez chacune dans une tranche de jambon blanc, nappez d’une béchamel faite avec 50 g de beurre, 50 g de farine et 60 cl de lait, couvrez de comté râpé et gratinez 20 minutes à 200 °C. Comptez 1 h 25, dont 20 minutes de travail.",
  intro: [
    "Les endives au jambon, qu’on appelle chicons au gratin dans le Nord et en Belgique : des endives fondantes, chacune roulée dans une tranche de jambon blanc, sous une béchamel au fromage qui dore au four. Un plat de famille pour les soirs d’hiver, qui se prépare la veille sans rien perdre.",
    "Le raté classique, c’est le plat qui baigne. Une endive cuite reste gorgée d’eau et la relâche au four : la béchamel se dilue, et on sert une sauce laiteuse qui coule partout dans l’assiette.",
    "Alors on ne saute pas l’égouttage. Dix minutes dans une passoire, puis chaque endive pressée entre les mains, assez fort pour qu’il en coule un jus clair. Elles s’aplatissent un peu, et la béchamel reste nappante jusqu’au fond du plat.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "endives au jambon",
    "endives au jambon béchamel",
    "chicons au gratin",
    "gratin d’endives au jambon",
    "endives au jambon comté",
    "endives au jambon pas d’eau",
    "recette endives au jambon",
    "endives au jambon à l’avance",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 20, cook: 50, rest: 15 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: [
    "grande sauteuse de 28 cm avec couvercle",
    "passoire",
    "casserole de 2 l et un fouet",
    "plat à gratin de 30 × 20 cm",
  ],
  ingredients: [
    {
      title: "Les endives",
      items: [
        { qty: 8, name: "endive", plural: "endives", note: "moyennes et de même taille (1 kg)", step: 1 },
        { qty: 20, unit: "g", name: "beurre", step: 5 },
        { qty: 1, unit: "pincee", name: "sel fin", fixed: true },
        { qty: 1, unit: "cac", name: "sucre", step: 0.5 },
        { qty: 1, unit: "cas", name: "jus de citron", note: "un demi-citron", step: 0.5 },
      ],
    },
    {
      title: "La béchamel",
      items: [
        { qty: 50, unit: "g", name: "beurre", step: 5 },
        { qty: 50, unit: "g", name: "farine", note: "type 45 ou 55", step: 5 },
        { qty: 60, unit: "cl", name: "lait entier", note: "froid", step: 5 },
        { qty: 120, unit: "g", name: "comté râpé", note: "60 g dans la sauce, 60 g dessus", step: 10 },
        { qty: 1, unit: "pincee", name: "noix de muscade râpée", fixed: true },
        { name: "poivre du moulin" },
      ],
    },
    {
      title: "Le montage",
      items: [
        { qty: 10, unit: "g", name: "beurre", note: "pour le plat", step: 5 },
        { qty: 8, unit: "tranche", name: "jambon blanc", note: "fines (320 g environ)", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "Les endives",
      steps: [
        {
          title: "Parer les endives",
          text: "Retirez les feuilles abîmées et essuyez les endives sans les passer sous l’eau. Avec la pointe d’un couteau, creusez à la base un petit cône de 1 à 2 cm, la partie la plus amère. Gardez-les entières : elles doivent tenir une fois roulées.",
        },
        {
          title: "Braiser à couvert",
          text: "Faites fondre le beurre dans la sauteuse sur feu moyen, couchez les endives côte à côte, salez, sucrez et arrosez du jus de citron. Couvrez, baissez à feu doux et laissez cuire 25 à 30 minutes en les retournant à mi-cuisson. Elles sont prêtes quand la pointe d’un couteau entre dans la base sans résistance.",
          timer: { minutes: 30, label: "Endives à couvert" },
          tip: "C’est la méthode des endives braisées, sans l’étape où elles caramélisent.",
        },
        {
          title: "Égoutter et presser",
          text: "Posez les endives dans la passoire, pointe en haut, et laissez-les égoutter 10 minutes. Prenez-les ensuite une à une et pressez-les fermement entre vos mains, ou roulées dans un torchon propre, jusqu’à ce qu’il ne coule presque plus de jus. Allumez le four à 200 °C.",
          timer: { minutes: 10, label: "Égouttage des endives" },
          tip: "Pressez franchement : l’endive s’aplatit un peu, c’est le signe que l’eau est partie.",
        },
      ],
    },
    {
      title: "La béchamel et le gratin",
      steps: [
        {
          title: "Cuire le roux",
          text: "Pendant l’égouttage, faites fondre 50 g de beurre dans la casserole sur feu moyen. Ajoutez la farine d’un coup et remuez au fouet 1 à 2 minutes, jusqu’à ce que le mélange mousse et sente le biscuit, sans prendre de couleur.",
          timer: { minutes: 2, label: "Roux blanc" },
        },
        {
          title: "Épaissir la béchamel",
          text: "Versez le lait froid en une fois en fouettant vivement, puis remuez sans arrêt jusqu’à l’ébullition. Laissez ensuite épaissir 3 minutes à petit feu, toujours en remuant : la sauce nappe épais le dos d’une cuillère. Hors du feu, ajoutez 60 g de comté, la muscade, du poivre, et goûtez avant de saler.",
          timer: { minutes: 3, label: "Béchamel qui épaissit" },
          tip: "Lait froid sur roux chaud, en une fois : c’est ce qui évite les grumeaux.",
        },
        {
          title: "Rouler dans le jambon",
          text: "Beurrez le plat. Enroulez chaque endive dans une tranche de jambon, la jointure en dessous, et serrez les rouleaux côte à côte dans le plat. Une tranche trop courte se complète avec un morceau d’une autre.",
        },
        {
          title: "Napper et gratiner",
          text: "Versez la béchamel sur les rouleaux en couvrant bien les extrémités, puis parsemez du reste de comté. Enfournez 20 minutes à 200 °C, jusqu’à ce que la sauce bouillonne sur les bords et que le dessus soit doré par plaques.",
          timer: { minutes: 20, label: "Gratin au four" },
        },
        {
          title: "Laisser reposer",
          text: "Sortez le plat et attendez 5 minutes avant de servir : la sauce se pose et se tient à la cuillère au lieu de couler.",
          timer: { minutes: 5, label: "Repos du gratin" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi presser les endives",
      text: "L’endive contient plus de 90 % d’eau, et la cuisson abîme les parois de ses cellules, qui la retenaient. Au four, cette eau s’échappe et dilue la béchamel. Pressée avant le montage, l’endive n’a presque plus rien à rendre.",
    },
    {
      title: "Comment la béchamel épaissit",
      text: "Dans le lait chaud, les grains d’amidon de la farine gonflent et la sauce prend vraiment près de l’ébullition. Cuits d’abord dans le beurre, ces grains sont enrobés de gras et se dispersent sans former de grumeaux quand le lait arrive.",
    },
    {
      title: "Un dessus qui dore",
      text: "À 200 °C, les protéines et le lactose du fromage et du lait brunissent par réaction de Maillard. Un fromage affiné et sec comme le comté dore mieux qu’un fromage frais, plus humide, qui reste pâle et rend de l’eau.",
    },
  ],
  tips: [
    "Choisissez des endives moyennes et de même taille : elles cuisent ensemble, et une tranche de jambon en fait le tour.",
    "Un jambon blanc en tranches fines s’enroule sans casser au pli, contrairement à une tranche épaisse.",
    "Prévoyez une béchamel plus épaisse que pour des lasagnes : 50 g de farine pour 60 cl de lait encaissent le peu d’eau que les endives rendent encore.",
    "Pour un dessus plus doré, passez le plat 2 à 3 minutes sous le gril à la fin, en restant devant.",
  ],
  mistakes: [
    "Rouler des endives à peine égouttées : le gratin baigne dans une sauce claire. Pour rattraper, inclinez le plat, retirez le jus à la cuillère et remettez 5 minutes au four.",
    "Verser le lait petit à petit sans fouetter : la béchamel fait des grumeaux. Un coup de mixeur plongeant ou un passage au chinois la rend lisse.",
    "Saler la béchamel comme une sauce seule : avec le jambon et le comté, le plat devient trop salé. Goûtez avec le fromage avant d’ajouter du sel.",
    "Braiser à feu vif : le beurre brûle, les endives noircissent dehors et restent dures au cœur. Feu doux et couvercle, du début à la fin.",
  ],
  variations: [
    {
      title: "Au maroilles",
      text: "Remplacez les 60 g de comté du dessus par 150 g de maroilles en tranches fines. Beaucoup plus puissant, il fond en nappe : c’est la version qu’on croise dans le Nord.",
    },
    {
      title: "À l’emmental",
      text: "Même poids d’emmental râpé à la place du comté, dans la sauce et dessus. Plus doux, il file davantage et dore un peu moins.",
    },
    {
      title: "Au jambon de dinde",
      text: "8 tranches fines de jambon de dinde au lieu du jambon blanc, pour ceux qui ne mangent pas de porc. Le reste ne change pas.",
    },
  ],
  storage:
    "Les endives au jambon se gardent 2 à 3 jours au réfrigérateur, dans le plat couvert ou en boîte fermée. Réchauffez-les au four à 180 °C, couvertes d’une feuille d’aluminium, 20 minutes environ, jusqu’à ce que le centre soit bien chaud. Elles se congèlent 2 mois une fois cuites. Ne recongelez jamais un plat décongelé.",
  pairing:
    "Un blanc sec du Jura, chardonnay ou savagnin ouillé, qui s’accorde avec le comté, ou une bière blonde. Une salade verte à côté suffit.",
  faq: [
    {
      q: "Pourquoi mes endives au jambon rendent de l’eau ?",
      a: "Parce qu’elles n’ont pas été assez égouttées. Une endive cuite reste gorgée d’eau et la rend au four, ce qui dilue la béchamel. Laissez-les égoutter 10 minutes, pressez-les une à une, fermement, et faites une béchamel épaisse : 50 g de farine pour 60 cl de lait.",
    },
    {
      q: "Faut-il cuire les endives avant de faire le gratin ?",
      a: "Oui. Crues, elles n’ont pas le temps de cuire en 20 minutes de four : elles restent fermes et amères, et rendent toute leur eau dans le plat. Braisez-les 25 à 30 minutes à couvert avant de les rouler.",
    },
    {
      q: "Peut-on préparer les endives au jambon la veille ?",
      a: "Oui. Montez le plat complet, laissez refroidir, couvrez et gardez au réfrigérateur. Le lendemain, comptez 30 à 35 minutes à 180 °C au lieu de 20 minutes à 200 °C, jusqu’à ce que la sauce bouillonne aussi au centre.",
    },
    {
      q: "Peut-on congeler des endives au jambon ?",
      a: "Oui, 2 mois, une fois cuites et refroidies, en boîte hermétique ou dans le plat bien filmé. Décongelez une nuit au réfrigérateur et réchauffez à 180 °C. Les endives sortent un peu plus molles et la sauce peut légèrement grainer. Ne recongelez pas.",
    },
    {
      q: "Quel fromage mettre sur des endives au jambon ?",
      a: "Le comté, pour son goût de noisette et parce qu’il gratine bien. L’emmental donne une sauce plus douce et plus filante, le maroilles une version du Nord bien plus puissante. Évitez la mozzarella, trop humide.",
    },
    {
      q: "Combien d’endives par personne ?",
      a: "2 endives moyennes par personne en plat principal, soit environ 250 g, avec une salade à côté. Comptez une tranche de jambon par endive.",
    },
  ],
  nutrition: {
    calories: 540,
    protein: 34,
    fat: 34,
    saturatedFat: 21,
    carbs: 22,
    sugar: 10,
    fiber: 3,
    sodium: 960,
  },
  annotations: { hero: "chaque endive pressée avant d’être roulée", detail: "la sauce nappe, elle ne coule pas" },
  images: {
    heroAlt:
      "Plat d’endives au jambon gratinées, deux rangées de rouleaux dorés sous le fromage fondu, assiettes autour",
    detailAlt:
      "Portion d’endives au jambon dans un plat ovale individuel, béchamel gratinée dorée et frites à côté",
    credits: {
      hero: {
        photographer: "Vincent van Zeijst",
        url: "https://commons.wikimedia.org/wiki/File:Chicory_(witlof),_oven_dish_with_ham_and_cheese.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
      detail: {
        photographer: "Jiel Beaumadier",
        url: "https://commons.wikimedia.org/wiki/File:Jielbeaumadier_chicon_au_jambon_maroilles_2010.jpg",
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
    accent: "#C98A30",
    onAccent: "#1B1208",
    ink: "#7E5013",
    tint: "#FAF2E2",
    deep: "#1A1206",
    focus: "52% 55%",
  },
});
