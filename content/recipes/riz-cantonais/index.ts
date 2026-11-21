import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "riz-cantonais",
  title: "Riz cantonais",
  seoTitle: "Riz cantonais maison au wok, avec du riz de la veille",
  tagline: "Le riz se cuit la veille.",
  description:
    "Riz cantonais pour 4 : 300 g de riz cuit la veille, sauté au wok très chaud avec omelette en lanières, jambon, petits pois et oignon nouveau. 25 min le jour J.",
  summary:
    "Pour 4 personnes, cuisez 300 g de riz jasmin la veille, étalez-le et mettez-le au réfrigérateur dans les 2 heures. Le lendemain, faites une omelette fine avec 3 œufs, coupez-la en lanières, puis faites sauter le riz égrené au wok très chaud avec 150 g de jambon en dés, 150 g de petits pois, une carotte, des oignons nouveaux et des crevettes si vous voulez. 2 cuillerées de sauce soja à la fin. Comptez 1 heure de travail et de cuisson, plus 6 heures de froid au moins.",
  intro: [
    "Le riz cantonais, c’est du riz blanc sauté au wok avec des lanières d’omelette, des dés de jambon, des petits pois et de l’oignon nouveau, plus quelques crevettes quand on en a. Rien de compliqué, à une condition : le riz a été cuit la veille.",
    "Du riz tout juste cuit, encore humide et collant, tourne à la bouillie dans le wok. Refroidi une nuit au réfrigérateur, il s’est raffermi, ses grains se séparent sous les doigts et sautent au lieu de s’agglutiner.",
    "Ce riz cuit demande un peu de rigueur : au frais dans les 2 heures, utilisé dans les 24 heures, réchauffé jusqu’à être brûlant. La sauce soja arrive à la toute fin, et en petite quantité.",
  ],
  category: "Plat",
  cuisine: "Chinoise",
  keywords: [
    "riz cantonais",
    "recette riz cantonais",
    "riz cantonais maison",
    "riz cantonais au wok",
    "riz cantonais crevettes",
    "riz cantonais jambon",
    "riz sauté aux œufs",
    "riz de la veille",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 25, cook: 35, rest: 380 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  tags: [],
  equipment: [
    "casserole de 2 l avec couvercle",
    "grand plat ou plaque",
    "poêle antiadhésive de 26 cm",
    "wok de 32 cm ou grande sauteuse",
  ],
  ingredients: [
    {
      title: "Le riz, la veille",
      items: [
        { qty: 300, unit: "g", name: "riz jasmin", note: "ou autre riz long", step: 25 },
        { qty: 400, unit: "ml", name: "eau", step: 25 },
      ],
    },
    {
      title: "L’omelette",
      items: [
        { qty: 3, name: "œuf", plural: "œufs", step: 1 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 1, unit: "cac", name: "huile neutre", step: 1 },
      ],
    },
    {
      title: "Le riz sauté",
      items: [
        { qty: 1, name: "carotte", plural: "carottes", note: "environ 80 g", step: 1 },
        { qty: 4, name: "oignon nouveau", plural: "oignons nouveaux", step: 1 },
        { qty: 150, unit: "g", name: "jambon cuit", note: "en une tranche épaisse", step: 10 },
        { qty: 3, unit: "cas", name: "huile neutre", note: "arachide ou tournesol", step: 1 },
        {
          qty: 150,
          unit: "g",
          name: "crevettes crues",
          note: "décortiquées",
          step: 25,
          optional: true,
        },
        { qty: 150, unit: "g", name: "petits pois", note: "surgelés", step: 10 },
        { qty: 2, unit: "cas", name: "sauce soja claire", step: 1 },
        { qty: 1, unit: "pincee", name: "poivre blanc", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "La veille",
      steps: [
        {
          title: "Cuire le riz",
          text: "Rincez le riz dans plusieurs eaux, jusqu’à ce qu’elle soit presque claire. Mettez-le dans la casserole avec 400 ml d’eau, portez à ébullition, couvrez et laissez 12 minutes à feu très doux. Coupez le feu et laissez 10 minutes sans soulever le couvercle : 22 minutes en tout. L’eau est absorbée, le grain tendre.",
          timer: { minutes: 22, label: "Cuisson et repos du riz" },
        },
        {
          title: "Refroidir vite",
          text: "Étalez le riz sur le grand plat en couche de 2 à 3 cm et laissez-le perdre sa vapeur 20 minutes, pas plus. Il doit être au réfrigérateur au plus tard 2 heures après la fin de la cuisson.",
          timer: { minutes: 20, label: "Le riz tiédit" },
          tip: "Étalé finement, le riz refroidit vite et sèche en surface : c’est ce qu’on veut.",
        },
        {
          title: "Réfrigérer",
          text: "Couvrez le plat et mettez-le au réfrigérateur au moins 6 heures, idéalement la nuit. Utilisez ce riz dans les 24 heures qui suivent sa cuisson.",
          timer: { minutes: 360, label: "Riz au froid" },
        },
      ],
    },
    {
      title: "Le jour même",
      steps: [
        {
          title: "Égrener et couper",
          text: "Sortez le riz et séparez les grains du bout des doigts légèrement huilés, jusqu’à ce qu’il ne reste plus de paquets. Coupez la carotte et le jambon en dés de 5 à 7 mm. Émincez les oignons nouveaux, blancs d’un côté, verts de l’autre. Épongez les crevettes. Rangez tout près du feu.",
          tip: "Un paquet de riz qui arrive entier dans le wok ne se défait qu’en écrasant les grains.",
        },
        {
          title: "Faire l’omelette fine",
          text: "Battez les œufs avec le sel. Huilez la poêle, chauffez-la à feu moyen et versez les œufs en inclinant la poêle pour couvrir tout le fond. Laissez prendre 1 à 2 minutes, jusqu’à ce que le dessus ne brille plus, sans coloration. Faites glisser l’omelette sur une planche, roulez-la et coupez-la en lanières de 5 mm.",
          timer: { minutes: 2, label: "Omelette prise" },
        },
        {
          title: "Saisir carotte et crevettes",
          text: "Chauffez le wok à feu vif jusqu’à ce qu’il fume légèrement. Ajoutez 1 cuillerée à soupe d’huile, la carotte et les blancs d’oignon : 2 minutes en remuant. Ajoutez les crevettes, 2 minutes encore, jusqu’à ce qu’elles soient roses et opaques. Soit 4 minutes en tout. Réservez sur une assiette.",
          timer: { minutes: 4, label: "Carotte et crevettes" },
        },
        {
          title: "Faire sauter le riz",
          text: "Remettez le wok à feu vif avec 2 cuillerées à soupe d’huile et le riz. Plaquez-le contre la paroi, laissez-le 30 secondes sans y toucher, puis retournez-le. Recommencez pendant 4 à 5 minutes : les grains se séparent, crépitent et sautent quand on secoue le wok.",
          timer: { minutes: 5, label: "Riz sauté" },
          tip: "Dans une sauteuse plus petite qu’un wok, faites le riz en deux fois.",
        },
        {
          title: "Réunir la garniture",
          text: "Ajoutez le jambon, les petits pois encore surgelés, la carotte et les crevettes. Mélangez 2 à 3 minutes à feu vif, jusqu’à ce que les petits pois soient tendres et que le riz fume de partout, brûlant jusqu’au fond du wok.",
          timer: { minutes: 3, label: "Tout est brûlant" },
        },
        {
          title: "Assaisonner et servir",
          text: "Ajoutez les lanières d’omelette et les verts d’oignon. Versez la sauce soja en filet sur la paroi chaude du wok, pas sur le riz, et mélangez 30 secondes. Goûtez, poivrez, salez si besoin. Servez tout de suite.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi le riz de la veille",
      text: "Au froid, l’amidon du riz cuit se réorganise et durcit un peu : c’est la rétrogradation. La surface des grains sèche aussi. Dans le wok, ces grains fermes et secs se séparent et grillent légèrement, quand du riz chaud et humide colle et se tasse.",
    },
    {
      title: "La règle du riz cuit",
      text: "Le riz cru peut porter des spores de Bacillus cereus qui résistent à la cuisson. À température ambiante, elles se réveillent et produisent une toxine que la chaleur ne détruit pas. D’où le froid dans les 2 heures, 24 heures au plus, et un riz réchauffé une seule fois, à cœur.",
    },
    {
      title: "La sauce soja sur la paroi",
      text: "Versée sur le métal brûlant, la sauce soja perd une partie de son eau tout de suite et prend un goût légèrement grillé. Versée sur le riz, elle le mouille, le colore en brun et le fait coller.",
    },
  ],
  tips: [
    "Huilez légèrement vos doigts pour égrener le riz froid : les grains glissent au lieu de coller à la peau.",
    "Attendez que le wok fume avant de mettre l’huile. Un wok tiède fait bouillir le riz au lieu de le saisir.",
    "Ne remuez pas sans arrêt : le riz a besoin de quelques secondes contre le métal pour prendre un peu de couleur.",
    "Gardez la main légère sur la sauce soja. Le riz cantonais reste clair, avec seulement un goût de soja en arrière-plan.",
  ],
  mistakes: [
    "Utiliser du riz cuit le jour même : il colle et tourne à la bouillie. En dépannage, étalez-le finement et passez-le 1 heure au réfrigérateur à découvert.",
    "Laisser le riz cuit toute la nuit sur le plan de travail : il est à jeter, la toxine qui a pu se former résiste au réchauffage.",
    "Verser trop de sauce soja : le riz brunit, se détrempe et devient trop salé. 2 cuillerées à soupe suffisent pour 4.",
    "Cuire l’omelette avec le riz : les œufs enrobent les grains et les collent entre eux. L’omelette à part, en lanières, garde le riz bien égrené.",
  ],
  variations: [
    {
      title: "Au poulet",
      text: "Remplacez les crevettes par 200 g de blanc de poulet en dés de 1 cm, saisis 4 à 5 minutes avec la carotte, jusqu’à ce qu’ils soient blancs au centre et à 74 °C à cœur.",
    },
    {
      title: "À la saucisse chinoise",
      text: "Remplacez le jambon par 2 saucisses chinoises (lap cheong) en rondelles fines, dorées 2 minutes dans le wok avant la carotte. Elles sont sucrées et salées : une seule cuillerée de sauce soja suffit.",
    },
    {
      title: "Végétarien",
      text: "Sans jambon ni crevettes, faites sauter 200 g de champignons de Paris en dés 4 minutes avec la carotte, et ajoutez 100 g de maïs avec les petits pois.",
    },
  ],
  storage:
    "Le riz cuit se garde 24 heures au plus au réfrigérateur, mis au frais dans les 2 heures après la cuisson. Le riz cantonais, lui, se mange à la sortie du wok : le riz a déjà été réchauffé une fois, ne le réchauffez pas une seconde. Préparez la bonne quantité et jetez les restes.",
  pairing:
    "Il fait un plat complet à lui seul, ou accompagne un porc au caramel ou des brochettes de poulet.",
  faq: [
    {
      q: "Pourquoi faut-il du riz de la veille pour le riz cantonais ?",
      a: "Parce qu’en refroidissant au réfrigérateur, le riz cuit se raffermit et sèche en surface. Ses grains se séparent et sautent dans le wok. Du riz tout juste cuit est humide et collant : il se tasse et tourne à la bouillie.",
    },
    {
      q: "Combien de temps peut-on garder du riz cuit au réfrigérateur ?",
      a: "24 heures au plus, à condition de l’y avoir mis dans les 2 heures après la cuisson, étalé pour qu’il refroidisse vite. Un riz cuit oublié à température ambiante se jette : la toxine qui a pu s’y former résiste à la cuisson.",
    },
    {
      q: "Peut-on faire un riz cantonais avec du riz cuit le jour même ?",
      a: "Oui, en dépannage. Cuisez le riz avec un peu moins d’eau, 350 ml pour 300 g, étalez-le en couche fine et passez-le 1 heure au réfrigérateur à découvert. Il sera un peu plus tendre et collera davantage que du riz de la veille.",
    },
    {
      q: "Peut-on réchauffer des restes de riz cantonais ?",
      a: "Non, mieux vaut pas. Le riz a été cuit la veille puis réchauffé une fois dans le wok ; on ne réchauffe pas le riz cuit deux fois. Préparez la quantité nécessaire et jetez ce qui reste dans les assiettes.",
    },
    {
      q: "Quel riz utiliser pour un riz cantonais ?",
      a: "Un riz long : le jasmin est le plus courant, le basmati marche aussi et reste plus sec. Évitez les riz ronds, à risotto ou à dessert, qui collent même froids, et le riz étuvé, trop ferme pour bien prendre le goût.",
    },
    {
      q: "Peut-on utiliser des petits pois en conserve ?",
      a: "Oui, bien égouttés. Ils sont déjà cuits et fragiles : ajoutez-les avec les lanières d’omelette, juste le temps de les réchauffer, sinon ils s’écrasent.",
    },
  ],
  nutrition: {
    calories: 510,
    protein: 27,
    fat: 15,
    saturatedFat: 3,
    carbs: 66,
    sugar: 3,
    fiber: 3,
    sodium: 850,
  },
  annotations: { hero: "grains séparés, pas de paquets", detail: "jambon en dés, pas en lanières" },
  images: {
    heroAlt:
      "Bol de riz cantonais aux grains bien séparés, avec petits pois, dés de carotte et morceaux d’omelette",
    detailAlt:
      "Assiette de riz cantonais avec dés de jambon, petits pois, carotte et œuf brouillé mêlés au riz blanc",
    credits: {
      hero: {
        photographer: "Guilhem Vellut",
        url: "https://commons.wikimedia.org/wiki/File:Cantonese_Rice_@_Porte_du_Bonheur_@_Montparnasse_@_Paris_(33894665242).jpg",
        source: "Wikimedia Commons",
        license: "CC BY 2.0",
      },
      detail: {
        photographer: "Arnaud 25",
        url: "https://commons.wikimedia.org/w/index.php?curid=145172960",
        source: "Wikimedia Commons",
        license: "CC0",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#E0A526",
    onAccent: "#1B1712",
    ink: "#855A06",
    tint: "#FBF4E2",
    deep: "#171006",
    focus: "50% 55%",
  },
});
