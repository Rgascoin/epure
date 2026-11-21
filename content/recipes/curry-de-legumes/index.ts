import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "curry-de-legumes",
  title: "Curry de légumes au lait de coco",
  seoTitle: "Curry de légumes au lait de coco, vegan, prêt en 1 heure",
  tagline: "Chaque légume entre à son heure.",
  description:
    "Curry de légumes vegan pour 4 : patate douce, chou-fleur et pois chiches mijotés 25 minutes dans 400 ml de lait de coco épicé, avec du riz basmati.",
  summary:
    "Pour 4 personnes, faites fondre 2 oignons 10 minutes, ajoutez ail, gingembre et épices moulues, puis mouillez avec 400 ml de lait de coco. 500 g de patate douce cuisent 10 minutes avant le chou-fleur et les pois chiches, qui mijotent encore 15 minutes. 100 g d’épinards, du citron vert et de la coriandre finissent le plat, servi avec 250 g de riz basmati. Comptez 1 heure, dont 20 minutes de découpe.",
  intro: [
    "Un curry de légumes au lait de coco, sans viande ni produit laitier, qui se fait un soir de semaine. Il ne prétend venir d’aucune région précise : on reprend la manière indienne de chauffer les épices dans l’huile, et on y met des légumes d’automne, patate douce, chou-fleur, pois chiches et une poignée d’épinards.",
    "Le piège, c’est la cocotte où tout cuit le même temps. La patate douce s’écrase, le chou-fleur part en bouillie, les épinards virent au gris. Ici chaque légume entre à son tour, du plus long au plus court, et les épinards deux minutes avant de servir.",
    "Le reste se joue au début : les épices grillent une minute dans l’huile avant que le lait de coco arrive. Sans ça, la sauce garde un goût de poudre.",
  ],
  category: "Plat",
  cuisine: "Indienne",
  keywords: [
    "curry de légumes",
    "curry de légumes au lait de coco",
    "curry de légumes vegan",
    "curry patate douce chou-fleur",
    "curry de pois chiches au lait de coco",
    "curry végétarien facile",
    "curry butternut lait de coco",
    "recette curry de légumes",
  ],
  diet: ["vegetarian", "vegan", "glutenFree"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 20, cook: 40 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Automne", "Hiver"],
  tags: ["automne"],
  equipment: [
    "cocotte ou sauteuse de 4 l avec couvercle",
    "casserole de 3 l pour le riz",
    "passoire fine",
    "râpe fine pour le gingembre",
  ],
  ingredients: [
    {
      title: "Le curry",
      items: [
        { qty: 2, unit: "cas", name: "huile de colza", note: "ou huile de coco", step: 0.5 },
        { qty: 1, unit: "cac", name: "graines de cumin", step: 0.5 },
        { qty: 2, name: "oignon", plural: "oignons", note: "émincés (300 g)", step: 1 },
        { qty: 3, unit: "gousse", name: "ail", note: "hachées", step: 1 },
        { qty: 20, unit: "g", name: "gingembre frais", note: "râpé", step: 5 },
        { qty: 2, unit: "cac", name: "coriandre moulue", step: 0.5 },
        { qty: 1, unit: "cac", name: "curcuma", step: 0.5 },
        { qty: 0.5, unit: "cac", name: "piment de Cayenne", note: "ou moins, selon votre goût", step: 0.25 },
        { qty: 1, unit: "cas", name: "concentré de tomate", step: 0.5 },
        { qty: 400, unit: "ml", name: "lait de coco", note: "entier", step: 50 },
        { qty: 200, unit: "ml", name: "eau", step: 50 },
        { qty: 1, unit: "cac", name: "sel fin", step: 0.5 },
        { qty: 500, unit: "g", name: "patate douce", note: "en cubes de 2,5 cm", step: 50 },
        { qty: 500, unit: "g", name: "chou-fleur", note: "en bouquets (1 petit chou)", step: 50 },
        { qty: 240, unit: "g", name: "pois chiches cuits", note: "égouttés et rincés (1 boîte de 400 g)", step: 10 },
      ],
    },
    {
      title: "Le riz",
      items: [
        { qty: 250, unit: "g", name: "riz basmati", step: 10 },
        { qty: 1.5, unit: "l", name: "eau", note: "salée, pour le riz", step: 0.5 },
      ],
    },
    {
      title: "La finition",
      items: [
        { qty: 100, unit: "g", name: "pousses d’épinards", step: 10 },
        { qty: 1, unit: "cac", name: "garam masala", step: 0.5 },
        { qty: 1, name: "citron vert", plural: "citrons verts", step: 1 },
        { qty: 0.5, unit: "botte", name: "coriandre fraîche", step: 0.5 },
      ],
    },
  ],
  method: [
    {
      title: "Préparation",
      steps: [
        {
          title: "Préparer les légumes",
          text: "Épluchez la patate douce et coupez-la en cubes de 2,5 cm. Détaillez le chou-fleur en bouquets de la taille d’une noix, émincez les oignons, hachez l’ail et râpez le gingembre. Égouttez et rincez les pois chiches. Mélangez coriandre moulue, curcuma et piment dans un bol posé près du feu : ensuite, tout va vite.",
          tip: "Pas de cubes plus petits : la patate douce se déferait dans la sauce.",
        },
        {
          title: "Faire fondre les oignons",
          text: "Chauffez l’huile dans la cocotte sur feu moyen et jetez-y les graines de cumin : elles grésillent et foncent d’un ton en 30 secondes. Ajoutez les oignons avec une pincée du sel et laissez-les fondre 10 minutes en remuant de temps en temps, jusqu’à ce qu’ils soient tendres et dorés sur les bords.",
          timer: { minutes: 10, label: "Oignons qui fondent" },
        },
        {
          title: "Griller les épices",
          text: "Ajoutez l’ail et le gingembre, remuez 1 minute. Versez le bol d’épices et le concentré de tomate, puis remuez encore 1 minute : l’huile se teinte d’orange et la cuisine sent le grillé. Si le fond attache, une cuillère d’eau suffit.",
          timer: { minutes: 2, label: "Ail, gingembre, épices" },
          tip: "Deux minutes en tout, pas plus : au-delà, le curcuma devient amer.",
        },
        {
          title: "Mijoter la patate douce",
          text: "Versez le lait de coco et les 200 ml d’eau, ajoutez le reste du sel et grattez le fond pour décoller les épices. Portez à petits frémissements, ajoutez la patate douce, couvrez et laissez cuire 10 minutes à feu doux.",
          timer: { minutes: 10, label: "Patate douce" },
        },
        {
          title: "Cuire le riz",
          text: "Pendant ce temps, rincez le riz dans la passoire jusqu’à ce que l’eau coule presque claire. Plongez-le dans 1,5 l d’eau bouillante salée et comptez 10 à 11 minutes : le grain doit être tendre, sans point blanc au centre. Égouttez, remettez dans la casserole et couvrez.",
          timer: { minutes: 11, label: "Riz basmati" },
        },
        {
          title: "Ajouter chou-fleur et pois chiches",
          text: "Mettez le chou-fleur et les pois chiches dans la cocotte, mélangez et laissez mijoter 12 à 15 minutes à couvert, en remuant une ou deux fois. C’est prêt quand la pointe d’un couteau traverse patate douce et chou-fleur sans forcer et que la sauce nappe la cuillère.",
          timer: { minutes: 15, label: "Chou-fleur et pois chiches" },
          tip: "Sauce trop épaisse, un peu d’eau. Trop liquide, 5 minutes sans couvercle.",
        },
        {
          title: "Finir aux épinards",
          text: "Ajoutez les épinards par poignées et remuez 2 minutes, juste le temps qu’ils tombent en restant vert vif. Saupoudrez de garam masala, pressez la moitié du citron vert, goûtez et rectifiez le sel.",
          timer: { minutes: 2, label: "Épinards" },
        },
        {
          title: "Servir",
          text: "Parsemez de coriandre grossièrement ciselée et servez aussitôt avec le riz et le reste du citron vert coupé en quartiers.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Des épices chauffées dans l’huile",
      text: "Une bonne part des arômes des épices sont solubles dans les graisses : ils passent dans l’huile chaude bien mieux que dans un liquide. Une fois le lait de coco versé, la température plafonne autour de 100 °C et il est trop tard pour obtenir ce goût grillé.",
    },
    {
      title: "Pourquoi chaque légume à son tour",
      text: "La chaleur dissout peu à peu les pectines qui tiennent les parois des cellules. La patate douce, dense, met plus longtemps à s’attendrir que le chou-fleur, plus aéré. Mis ensemble au départ, le second s’effondrerait avant que la première soit cuite.",
    },
    {
      title: "Un lait de coco qui reste lisse",
      text: "Le lait de coco est une émulsion de matière grasse dans de l’eau. Un gros bouillon la casse et le gras remonte en flaques huileuses. À petits frémissements, la sauce reste lisse et nappante.",
    },
  ],
  tips: [
    "Prenez un lait de coco entier, pas la version allégée : la sauce resterait liquide et pâle en goût.",
    "Tout se coupe avant d’allumer le feu. Une fois les épices dans l’huile, il n’y a plus le temps d’éplucher.",
    "Pour le préparer la veille, arrêtez-vous avant les épinards et le citron : ils s’ajoutent au moment de réchauffer.",
    "Le citron vert va à la fin, hors du gros de la cuisson : chauffé longtemps, son jus perd sa fraîcheur.",
  ],
  mistakes: [
    "Verser le lait de coco sur des épices crues : la sauce garde un goût de poudre. Pour rattraper, faites grésiller 1 cuillère à café de cumin et la garam masala 30 secondes dans 1 cuillère à soupe d’huile, et versez sur le curry.",
    "Tout mettre dans la cocotte en même temps : le chou-fleur part en bouillie et la patate douce s’effondre. Respectez l’ordre, du plus long au plus court.",
    "Laisser bouillir fort : le lait de coco se sépare et la sauce devient huileuse. Baissez le feu, ajoutez un peu d’eau et remuez vivement, elle se ressoude en partie.",
    "Laisser le riz cuit sur le plan de travail toute la soirée : ses spores de Bacillus cereus survivent à la cuisson et se réveillent à température ambiante. Au réfrigérateur dans les 2 heures.",
  ],
  variations: [
    {
      title: "Au butternut",
      text: "Même poids de butternut épluché, en cubes de 2,5 cm, dans les mêmes temps. Moins sucré que la patate douce, il garde mieux sa forme.",
    },
    {
      title: "Avec une pâte de curry",
      text: "Remplacez cumin, coriandre, curcuma, piment et garam masala par 2 cuillères à soupe de pâte de curry rouge thaïe, frite 2 minutes dans l’huile après l’ail. Lisez l’étiquette : beaucoup contiennent de la pâte de crevette ou de la sauce poisson, et le plat n’est alors plus vegan.",
    },
    {
      title: "Avec du tofu",
      text: "Ajoutez 200 g de tofu ferme en cubes de 2 cm en même temps que le chou-fleur. Il prend le goût de la sauce et apporte une dizaine de grammes de protéines par part.",
    },
  ],
  storage:
    "Le curry se garde 2 à 3 jours au réfrigérateur en boîte fermée et 3 mois au congélateur, sans le riz. Réchauffez-le à feu doux, avec un peu d’eau, jusqu’à ce qu’il frémisse. Le riz cuit va au frais moins de 2 heures après la cuisson, se mange sous 24 heures et ne se réchauffe qu’une fois, bien chaud à cœur. Ne recongelez jamais un curry décongelé.",
  pairing:
    "Un blanc d’Alsace aromatique et sec, pinot gris ou gewurztraminer, ou une bière blonde bien fraîche. Des chapatis remplacent le riz sans sortir de la version vegan.",
  faq: [
    {
      q: "Le curry de légumes au lait de coco est-il vegan ?",
      a: "Oui, tel qu’il est écrit : légumes, épices et lait de coco, sans beurre clarifié ni yaourt. Seule la variante à la pâte de curry demande de lire l’étiquette, car beaucoup de pâtes thaïes contiennent de la pâte de crevette ou de la sauce poisson.",
    },
    {
      q: "Peut-on congeler un curry de légumes ?",
      a: "Oui, 3 mois en boîte hermétique, sans le riz. Le chou-fleur et la patate douce en sortent plus fondants, et la sauce peut se séparer un peu : un bon coup de cuillère en réchauffant suffit. Décongelez au réfrigérateur et ne recongelez pas.",
    },
    {
      q: "Combien de temps se garde le riz cuit ?",
      a: "24 heures au réfrigérateur, à condition de l’y mettre dans les 2 heures qui suivent la cuisson. Le riz peut porter des spores de Bacillus cereus, qui résistent à la cuisson et produisent des toxines à température ambiante. Réchauffez-le une seule fois, jusqu’à ce qu’il fume bien.",
    },
    {
      q: "Peut-on faire un curry de légumes sans piment ?",
      a: "Oui. Supprimez le piment de Cayenne : cumin, coriandre et curcuma parfument sans piquer. Si c’est déjà trop fort, ajoutez un peu de lait de coco ou servez plus de riz, le gras calme la brûlure.",
    },
    {
      q: "Quels légumes mettre dans un curry de légumes ?",
      a: "Tous ceux qui tiennent à la cuisson : courges, carottes, pommes de terre, chou-fleur, haricots verts, poivrons. Classez-les par temps de cuisson, les racines d’abord, les légumes tendres ensuite, les feuilles tout à la fin.",
    },
    {
      q: "Peut-on remplacer le lait de coco par de la crème ?",
      a: "Oui, avec 20 cl de crème liquide entière et 20 cl d’eau, mais le curry n’est plus vegan et perd son goût de coco. Ajoutez la crème avec le chou-fleur plutôt qu’au début, et gardez un frémissement très doux.",
    },
  ],
  nutrition: {
    calories: 710,
    protein: 17,
    fat: 27,
    saturatedFat: 17,
    carbs: 97,
    sugar: 13,
    fiber: 13,
    sodium: 750,
  },
  annotations: { hero: "les épinards, deux minutes avant", detail: "le riz à grande eau" },
  images: {
    heroAlt:
      "Bol de curry de légumes au lait de coco avec pois chiches, morceaux de légumes, feuilles vertes et coriandre fraîche",
    detailAlt:
      "Vue de dessus d’une casserole de curry de légumes, d’un bol servi, d’un bol de riz blanc et d’herbes fraîches",
    credits: {
      hero: {
        photographer: "Filipp Romanovski",
        url: "https://www.pexels.com/photo/delicious-soup-in-bowl-17902963/",
        source: "Pexels",
      },
      detail: {
        photographer: "Filipp Romanovski",
        url: "https://www.pexels.com/photo/soup-among-salads-and-rice-in-bowls-17902965/",
        source: "Pexels",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#DD8A2E",
    onAccent: "#1B1208",
    ink: "#8A4A0C",
    tint: "#FBF1E3",
    deep: "#1A1007",
    focus: "50% 50%",
  },
});
