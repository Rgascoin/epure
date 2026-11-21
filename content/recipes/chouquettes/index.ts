import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "chouquettes",
  title: "Chouquettes",
  seoTitle: "Chouquettes maison au sucre perlé, croustillantes et légères",
  tagline: "Du sucre perlé, sans compter.",
  description:
    "Environ 40 chouquettes : pâte à choux à l’eau, pochée en petites boules, dorée, couverte de sucre perlé et cuite 20 minutes à 190 °C. Prêtes en 1 h 05.",
  summary:
    "Pour 8 personnes, soit environ 40 chouquettes, faites une pâte à choux avec 20 cl d’eau, 80 g de beurre, 110 g de farine et 3 œufs, pochez-la en boules de 2,5 cm, dorez-les à l’œuf et couvrez-les de 100 g de sucre perlé. Elles cuisent 20 minutes à 190 °C, chaleur tournante, sans ouvrir la porte, puis sèchent 5 minutes dans le four éteint. Comptez 1 h 05 en tout, et mangez-les le jour même.",
  intro: [
    "Les chouquettes sont de petits choux vides, sans crème ni glaçage, couverts de sucre perlé. À la boulangerie, on les achète au poids, et le sachet est souvent fini avant d’arriver à la maison.",
    "Comme il n’y a rien dedans, tout repose sur la coque. Une chouquette trop peu cuite ramollit en dix minutes, et une pâte trop liquide donne des galettes dorées au lieu de petites boules.",
    "Le sucre, lui, ne demande que de l’aplomb : on en met bien plus qu’on ne croit, sur une dorure encore humide, puis on récupère le surplus. Les grains qui ont accroché restent blancs et croquants à la sortie du four.",
  ],
  category: "Goûter",
  cuisine: "Française",
  keywords: [
    "chouquettes",
    "recette chouquettes",
    "chouquettes maison",
    "chouquettes au sucre perlé",
    "pâte à choux chouquettes",
    "où trouver du sucre perlé",
    "cuisson chouquettes",
  ],
  servings: 8,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 25, cook: 30, rest: 10 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Toute l’année"],
  tags: [],
  equipment: [
    "poche à douille et douille unie de 10 mm",
    "2 plaques de cuisson et papier cuisson",
    "casserole moyenne",
    "pinceau de cuisine",
    "grille",
  ],
  ingredients: [
    {
      title: "La pâte à choux",
      items: [
        { qty: 20, unit: "cl", name: "eau", step: 1 },
        { qty: 80, unit: "g", name: "beurre doux", note: "en dés", step: 5 },
        { qty: 1, unit: "cac", name: "sucre en poudre", step: 0.5 },
        { qty: 2, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 110, unit: "g", name: "farine", note: "T45 ou T55, tamisée", step: 5 },
        { qty: 3, name: "œuf", plural: "œufs", note: "environ 165 g, battus", step: 1 },
      ],
    },
    {
      title: "La finition",
      items: [
        { qty: 1, name: "œuf", plural: "œufs", note: "battu, pour la dorure", step: 1 },
        { qty: 100, unit: "g", name: "sucre perlé", note: "ou sucre en grains, calibre moyen", step: 10 },
      ],
    },
  ],
  method: [
    {
      title: "La pâte",
      steps: [
        {
          title: "Préchauffer le four",
          text: "Préchauffez le four à 190 °C, chaleur tournante. Tapissez deux plaques de papier cuisson et versez le sucre perlé dans un bol, près du plan de travail.",
        },
        {
          title: "Faire la panade",
          text: "Dans la casserole, chauffez l’eau, le beurre, le sucre et le sel à feu moyen. Dès que le beurre a fondu et que l’eau bout, coupez le feu, versez la farine d’un coup et mélangez énergiquement. Remettez 1 minute sur feu doux en écrasant la pâte : elle se rassemble en boule lisse et laisse un léger dépôt au fond.",
          timer: { minutes: 1, label: "Dessèchement de la pâte" },
        },
        {
          title: "Ajouter les œufs",
          text: "Hors du feu, incorporez les œufs battus en trois fois, en attendant que la pâte ait tout absorbé avant d’ajouter le suivant. Elle est prête quand elle brille et qu’un peu de pâte prise au bout de la spatule forme une pointe qui se courbe sans tomber, comme un bec d’oiseau.",
          tip: "Si la pointe tient droite, ajoutez un peu d’œuf ; si elle coule, il est trop tard, d’où l’intérêt d’y aller par petites doses.",
        },
        {
          title: "Pocher petit",
          text: "Remplissez la poche. Tenez-la bien droite, douille à 1 cm de la plaque, et pochez des boules de 2,5 cm, à peu près la taille d’une noix, en quinconce et à 3 cm l’une de l’autre. Pressez sans bouger, arrêtez de presser, puis décrochez d’un petit mouvement tournant.",
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Dorer et sucrer",
          text: "Badigeonnez chaque chouquette d’œuf battu, d’un geste léger, sans en laisser couler sur le papier. Couvrez-les aussitôt de sucre perlé, généreusement, puis soulevez la feuille par deux coins et inclinez-la au-dessus du bol pour récupérer les grains qui n’ont pas accroché.",
          tip: "Le sucre ne colle que sur une dorure encore humide : sucrez chaque plaque dès qu’elle est dorée.",
        },
        {
          title: "Cuire porte fermée",
          text: "Enfournez les deux plaques pour 20 minutes, sans ouvrir la porte. Les chouquettes doublent de volume, puis colorent. Elles sont cuites quand elles sont d’un blond soutenu, fissures comprises, et légères quand on en soulève une.",
          timer: { minutes: 20, label: "Cuisson des chouquettes" },
          tip: "Ouverte trop tôt, la porte laisse sortir la vapeur : les chouquettes retombent et restent plates.",
        },
        {
          title: "Sécher dans le four",
          text: "Éteignez le four, entrouvrez la porte de deux doigts et laissez les chouquettes 5 minutes à l’intérieur, le temps que la croûte finisse de sécher.",
          timer: { minutes: 5, label: "Séchage, four éteint" },
        },
        {
          title: "Laisser tiédir",
          text: "Faites glisser les feuilles sur une grille et laissez tiédir 10 minutes. Elles sont à leur meilleur dans les heures qui suivent, quand la croûte craque encore sous la dent.",
          timer: { minutes: 10, label: "Chouquettes sur la grille" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi le sucre perlé ne fond pas",
      text: "Le saccharose ne fond qu’au-delà de 180 °C. Or, tant que la pâte rend de la vapeur, la surface d’une chouquette reste bien plus froide que l’air du four. Les grains de sucre perlé sont gros et compacts : la chaleur y pénètre lentement, et ils ressortent blancs et croquants, tout au plus blonds sur les arêtes.",
    },
    {
      title: "La dorure sert de colle",
      text: "L’œuf battu est collant tant qu’il est humide, puis ses protéines coagulent dans le four et figent autour des grains de sucre. Ses sucres et ses protéines brunissent aussi par réaction de Maillard, d’où la couleur dorée et brillante.",
    },
    {
      title: "Petits choux, croûte croustillante",
      text: "Plus un chou est petit, plus sa surface est grande par rapport à son volume. Une chouquette sèche donc vite, et sa croûte représente presque tout ce qu’on mange : c’est pour cela qu’elle croque là où un gros chou reste moelleux.",
    },
  ],
  tips: [
    "Le sucre perlé se trouve au rayon pâtisserie des supermarchés, près du sucre glace, sous le nom de sucre perlé ou sucre en grains. Le sucre cristal ne le remplace pas : il fond en partie et colle.",
    "Restez sur une douille de 10 mm : avec une plus grosse, vos chouquettes deviennent des choux.",
    "Aplatissez du bout d’un doigt mouillé les petites pointes laissées par la poche avant de dorer, sinon elles brûlent.",
    "Les chouquettes crues se congèlent sur la plaque, puis en sac : dorez, sucrez et enfournez-les sans les décongeler, en comptant 5 minutes de plus.",
  ],
  mistakes: [
    "Mettre trop de dorure : elle coule au pied des chouquettes, les soude au papier et les empêche de gonfler régulièrement.",
    "Attendre avant de sucrer : la dorure sèche et le sucre roule sans accrocher.",
    "Sortir les chouquettes trop blondes : elles ramollissent en quelques minutes. Remettez-les 5 minutes au four si besoin.",
    "Les enfermer encore tièdes dans une boîte : leur propre vapeur les ramollit.",
  ],
  variations: [
    {
      title: "Aux pépites de chocolat",
      text: "Sur la moitié des chouquettes, remplacez le sucre perlé par 40 g de pépites de chocolat noir qui tiennent à la cuisson, posées sur la dorure. La cuisson ne change pas.",
    },
    {
      title: "À la fleur d’oranger",
      text: "Remplacez 1 cas d’eau du départ par 1 cas d’eau de fleur d’oranger, ou ajoutez le zeste fin d’une orange avec le dernier œuf.",
    },
    {
      title: "Fourrées",
      text: "Une fois froides, garnissez-les par-dessous de crème pâtissière ou de chantilly, avec une douille de 6 mm. Comptez 300 g de crème pour 40 chouquettes, et servez dans l’heure.",
    },
  ],
  storage:
    "Les chouquettes se mangent idéalement le jour même, dans les heures qui suivent la cuisson. Elles se gardent 2 jours au plus dans une boîte en métal, à température ambiante, mais ramollissent : 5 minutes au four à 160 °C leur rendent du croquant. Fourrées, elles se gardent au réfrigérateur et se mangent dans la journée.",
  pairing: "Un bol de chocolat chaud, ou un café au lait pour les grands.",
  faq: [
    {
      q: "Où trouver du sucre perlé pour les chouquettes ?",
      a: "Au rayon pâtisserie des supermarchés, à côté du sucre glace et de la levure, sous le nom de sucre perlé ou sucre en grains. Les épiceries fines et les boutiques de matériel de pâtisserie en vendent aussi, parfois en plusieurs grosseurs : un grain moyen convient aux chouquettes.",
    },
    {
      q: "Pourquoi le sucre perlé ne fond-il pas à la cuisson ?",
      a: "Parce que ses grains sont gros et compacts, et que la surface des chouquettes reste bien plus froide que le four tant que la pâte rend de la vapeur. Le saccharose ne fond qu’au-delà de 180 °C : en 20 minutes, les grains restent blancs et croquants.",
    },
    {
      q: "Par quoi remplacer le sucre perlé ?",
      a: "Par des morceaux de sucre concassés. Enfermez-les dans un sac, tapez au rouleau à pâtisserie et gardez les éclats de 3 à 4 mm, sans la poudre. Le sucre cristal, lui, fond en partie et forme une croûte collante.",
    },
    {
      q: "Pourquoi mes chouquettes sont-elles plates ?",
      a: "Le plus souvent, la pâte était trop liquide ou la porte du four a été ouverte. Une pâte trop riche en œuf s’étale avant de gonfler. Arrêtez les œufs dès que la pâte forme un bec d’oiseau sur la spatule, et laissez la porte fermée pendant les 20 minutes.",
    },
    {
      q: "Combien de temps se gardent les chouquettes ?",
      a: "Quelques heures pour rester croustillantes, 2 jours au plus dans une boîte en métal. Elles reprennent l’humidité de l’air et ramollissent ; 5 minutes au four à 160 °C les raffermissent.",
    },
    {
      q: "Peut-on congeler les chouquettes ?",
      a: "Oui, crues de préférence. Pochez-les, congelez la plaque 2 heures, puis gardez-les en sac jusqu’à 1 mois. Dorez, sucrez et enfournez-les sans décongeler, avec 5 minutes de cuisson en plus. Cuites, elles se congèlent aussi mais perdent un peu de croquant.",
    },
  ],
  nutrition: {
    calories: 200,
    protein: 5,
    fat: 11,
    saturatedFat: 6.5,
    carbs: 20,
    sugar: 10,
    fiber: 0.5,
    sodium: 75,
  },
  annotations: { hero: "le sucre perlé ne fond pas", detail: "blond soutenu, fissures comprises" },
  images: {
    heroAlt: "Saladier en verre rempli de chouquettes dorées, parsemées de gros grains de sucre perlé blancs.",
    detailAlt: "Gros plan sur une chouquette dorée couverte de sucre perlé, encore posée sur sa plaque de cuisson.",
    credits: {
      hero: {
        photographer: "Aerith (Wikipédia en français)",
        url: "https://commons.wikimedia.org/w/index.php?curid=19357597",
        source: "Wikimedia Commons",
        license: "CC0",
      },
      detail: {
        photographer: "Begimai Nurmametova",
        url: "https://www.pexels.com/photo/close-up-of-golden-brown-pastry-with-sugar-crystals-38946207/",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#C98A2E",
    onAccent: "#1B1712",
    ink: "#7F5314",
    tint: "#FAF1E3",
    deep: "#1A1208",
    focus: "50% 50%",
  },
});
