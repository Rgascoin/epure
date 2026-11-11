import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "brochettes-de-poulet",
  title: "Brochettes de poulet marinées",
  seoTitle: "Brochettes de poulet marinées au yaourt, au barbecue",
  tagline: "Le yaourt fait presque tout le travail.",
  description:
    "Brochettes de poulet marinées au yaourt et au citron pour 6 : 2 heures de marinade, 10 à 12 minutes au barbecue ou à la poêle-gril, 74 °C à cœur.",
  summary:
    "Pour 6 personnes, coupez 1,2 kg de hauts de cuisse de poulet en cubes de 3 à 4 cm et faites-les mariner au moins 2 heures dans 250 g de yaourt avec citron, ail, paprika et cumin. Grillez ensuite les brochettes 10 à 12 minutes sur les braises, ou 12 à 15 minutes à la poêle-gril, jusqu’à 74 °C à cœur. Comptez 2 h 45 en tout, dont 2 heures de marinade et 30 minutes de préparation.",
  intro: [
    "Des cubes de poulet enfilés sur une pique, quelques minutes sur les braises : rien de plus simple en apparence. Sauf que le poulet passe vite de cru à sec, et que la marge entre les deux tient à quelques minutes.",
    "On prend donc des hauts de cuisse plutôt que des blancs, plus gras et plus tolérants. Et on les fait mariner au moins deux heures dans du yaourt au citron : il attendrit la surface et dore vite sur la grille, grâce aux protéines et aux sucres du lait.",
    "Le reste se joue au thermomètre : 74 °C au cœur du plus gros morceau, et on passe les assiettes.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "brochettes de poulet",
    "brochettes de poulet marinées",
    "marinade brochettes de poulet",
    "brochettes de poulet au yaourt",
    "brochettes de poulet barbecue",
    "brochettes de poulet à la poêle",
    "marinade poulet citron ail",
    "temps de cuisson brochettes de poulet",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 30, cook: 15, rest: 120 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Printemps", "Été"],
  tags: ["barbecue", "pique-nique", "fete-des-peres"],
  equipment: [
    "12 piques à brochettes de 25 cm, en métal ou en bois",
    "barbecue ou poêle-gril en fonte",
    "grand saladier",
    "thermomètre à sonde",
    "pinceau de cuisine",
  ],
  ingredients: [
    {
      title: "Le poulet et sa marinade",
      items: [
        { qty: 1.2, unit: "kg", name: "hauts de cuisse de poulet désossés", note: "sans la peau", step: 0.1 },
        { qty: 250, unit: "g", name: "yaourt nature", note: "au lait entier ou à la grecque", step: 10 },
        { qty: 1, name: "citron non traité", plural: "citrons non traités", note: "zeste et jus", step: 1 },
        { qty: 2, unit: "gousse", name: "ail", note: "râpées", step: 1 },
        { qty: 2, unit: "cas", name: "huile d’olive", step: 1 },
        { qty: 1, unit: "cac", name: "paprika", step: 0.5 },
        { qty: 1, unit: "cac", name: "cumin moulu", step: 0.5 },
        { qty: 1, unit: "cac", name: "sel fin", step: 0.5 },
        { name: "poivre du moulin" },
      ],
    },
    {
      title: "Le montage et la cuisson",
      items: [
        { qty: 2, name: "oignon rouge", plural: "oignons rouges", note: "en quartiers", step: 1 },
        { qty: 1, name: "poivron rouge", plural: "poivrons rouges", note: "en carrés de 3 cm", step: 1 },
        { qty: 1, unit: "cas", name: "huile neutre", note: "pour la grille", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "Mariner",
      steps: [
        {
          title: "Tailler le poulet",
          text: "Coupez les hauts de cuisse en cubes de 3 à 4 cm, aussi réguliers que possible, en retirant les plus gros morceaux de gras.",
        },
        {
          title: "Préparer la marinade",
          text: "Dans le saladier, mélangez le yaourt, le zeste et le jus du citron, l’ail, l’huile d’olive, le paprika, le cumin, le sel et un bon tour de poivre. La marinade doit être lisse et napper la cuillère.",
        },
        {
          title: "Mariner au frais",
          text: "Ajoutez le poulet et mélangez pour bien l’enrober. Couvrez et laissez au frigo au moins 2 heures, et jusqu’au lendemain.",
          timer: { minutes: 120, label: "Marinade au frigo" },
          tip: "Ne dépassez pas 24 heures : l’acidité finit par rendre la surface du poulet pâteuse.",
        },
      ],
    },
    {
      title: "Griller au barbecue",
      steps: [
        {
          title: "Allumer le barbecue",
          text: "Allumez le barbecue 30 à 40 minutes avant la cuisson. Les braises sont prêtes quand elles sont couvertes d’une fine cendre grise et qu’on ne peut pas garder la main à 10 cm au-dessus plus de 3 ou 4 secondes.",
          timer: { minutes: 40, label: "Braises" },
        },
        {
          title: "Monter les brochettes",
          text: "Égouttez le poulet et enfilez les cubes sur les piques, en intercalant un morceau d’oignon rouge et de poivron tous les deux ou trois cubes. Ne les serrez pas : laissez un petit jour entre chaque morceau. Jetez la marinade restante.",
          tip: "La marinade a touché le poulet cru : elle ne sert ni de sauce ni à badigeonner en fin de cuisson.",
        },
        {
          title: "Griller les brochettes",
          text: "Huilez la grille au pinceau et posez les brochettes au-dessus des braises. Faites-les cuire 10 à 12 minutes en les tournant d’un quart de tour toutes les 3 minutes, jusqu’à ce qu’elles soient dorées, marquées et noircies par endroits sur les arêtes.",
          timer: { minutes: 12, label: "Brochettes au barbecue" },
          tip: "Gardez un coin de grille sans braises dessous. Si une brochette noircit trop vite, elle y finit sa cuisson.",
        },
        {
          title: "Vérifier et servir",
          text: "Piquez le thermomètre au centre du plus gros morceau : il doit afficher 74 °C. La chair est alors blanche à cœur et le jus qui perle est clair. Servez aussitôt.",
        },
      ],
    },
    {
      title: "Sans barbecue",
      steps: [
        {
          title: "Cuire à la poêle-gril",
          text: "Chauffez la poêle-gril 5 minutes à feu vif, huilez-la au pinceau et posez les brochettes sans les serrer. Comptez 12 à 15 minutes en les tournant toutes les 3 minutes, jusqu’à ce qu’elles soient bien marquées et à 74 °C à cœur. Ouvrez la fenêtre : le yaourt fume en grillant.",
          timer: { minutes: 15, label: "Brochettes à la poêle-gril" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Le yaourt attendrit en douceur",
      text: "L’acide lactique du yaourt est bien moins agressif que le jus de citron pur. Il attendrit la surface de la viande sans la rendre farineuse, même après une nuit, alors qu’une marinade au citron seul abîme la surface en quelques heures.",
    },
    {
      title: "Une marinade qui dore",
      text: "Le yaourt apporte des protéines et du lactose, qui participent à la réaction de Maillard. Les brochettes marinées dorent et marquent plus vite qu’un poulet nature, avant que le centre ait le temps de sécher.",
    },
    {
      title: "Cuisse contre blanc",
      text: "Le haut de cuisse contient plus de gras et de tissu conjonctif que le blanc. Il reste juteux à 74 °C et même un peu au-delà, quand le blanc, très maigre, commence déjà à sécher.",
    },
  ],
  tips: [
    "Coupez des cubes de taille égale. Un gros morceau au milieu de petits sera encore cru quand les autres seront secs.",
    "Avec des piques en bois, faites-les tremper 30 minutes dans l’eau froide avant le montage : elles brûlent moins vite.",
    "Préparez la sauce à part : un yaourt nature, du concombre râpé et pressé, de la menthe ciselée, du sel.",
    "Pour le pique-nique, laissez refroidir les brochettes, puis gardez-les au frais dans une glacière jusqu’au moment de les manger.",
  ],
  mistakes: [
    "Réutiliser la marinade comme sauce. Elle a touché le poulet cru et se jette ; préparez un yaourt à part.",
    "Griller sur des flammes vives. L’extérieur brûle et le centre reste cru ; attendez que les braises soient couvertes de cendre grise.",
    "Tasser les morceaux sur la pique. Le cœur de la brochette cuit mal ; laissez un petit jour entre chaque cube.",
    "Couper un morceau pour vérifier la cuisson. Le jus s’échappe et le doute reste ; le thermomètre répond en quelques secondes.",
  ],
  variations: [
    {
      title: "Marinade citron et ail",
      text: "Sans yaourt : mélangez le jus de 2 citrons, 6 cuillerées à soupe d’huile d’olive, 3 gousses d’ail râpées, 1 cuillère à café d’origan séché, du sel et du poivre. Faites mariner 2 à 4 heures, pas plus.",
    },
    {
      title: "Avec des blancs",
      text: "Remplacez les hauts de cuisse par la même quantité de blancs. Ils cuisent en 8 à 10 minutes ; sortez-les dès 74 °C, ils sèchent vite au-delà.",
    },
  ],
  storage:
    "Les brochettes cuites se gardent 2 jours au frigo dans une boîte fermée. Mangez-les froides en salade ou en sandwich, ou réchauffez-les à la poêle jusqu’à ce qu’elles soient chaudes à cœur. Le poulet cru mariné attend 24 heures au plus au frigo.",
  pairing:
    "Une sauce au yaourt et au concombre, du pain pita ou un taboulé, une salade de tomates. Côté verre, un rosé de Provence bien frais.",
  faq: [
    {
      q: "Combien de temps faire mariner des brochettes de poulet ?",
      a: "2 heures au minimum, et jusqu’à 24 heures pour une marinade au yaourt. Avec une marinade au citron pur, ne dépassez pas 4 heures : la surface devient farineuse.",
    },
    {
      q: "Combien de temps cuire des brochettes de poulet au barbecue ?",
      a: "10 à 12 minutes sur des braises bien chaudes pour des cubes de 3 à 4 cm, en les tournant toutes les 3 minutes. Elles sont cuites à 74 °C au centre du plus gros morceau.",
    },
    {
      q: "Blanc ou cuisse pour des brochettes de poulet ?",
      a: "Le haut de cuisse, plus juteux et plus tolérant. Le blanc fonctionne aussi, mais il sèche vite : sortez-le dès 74 °C à cœur.",
    },
    {
      q: "Peut-on faire des brochettes de poulet à la poêle ?",
      a: "Oui, dans une poêle-gril en fonte bien chaude et huilée : 12 à 15 minutes en les tournant toutes les 3 minutes. Une poêle ordinaire marche aussi, sans les marques.",
    },
    {
      q: "Faut-il faire tremper les piques en bois ?",
      a: "Oui, 30 minutes dans l’eau froide avant de monter les brochettes. Elles brûlent moins vite sur la grille, surtout aux extrémités.",
    },
    {
      q: "Comment emporter des brochettes de poulet en pique-nique ?",
      a: "Cuites et refroidies, dans une boîte fermée, au fond d’une glacière avec des pains de glace. Hors du froid, ne les laissez pas plus de 2 heures avant de les manger.",
    },
  ],
  nutrition: { calories: 310, protein: 39, fat: 14, saturatedFat: 4, carbs: 7, sugar: 5, fiber: 2, sodium: 450 },
  annotations: { hero: "la marinade au yaourt dore vite", detail: "un légume tous les deux cubes" },
  images: {
    heroAlt: "Brochettes de poulet marinées au yaourt, dorées et marquées, alignées sur la grille d’un barbecue",
    detailAlt: "Brochettes de poulet, légumes et tomates cerises sur la grille d’un barbecue, à côté de saucisses",
    credits: {
      hero: {
        photographer: "Benoît Prieur",
        url: "https://commons.wikimedia.org/w/index.php?curid=89108485",
        source: "Wikimedia Commons",
        license: "CC0",
      },
      detail: {
        photographer: "Benoît Prieur",
        url: "https://commons.wikimedia.org/w/index.php?curid=104283117",
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
    accent: "#E0A526",
    onAccent: "#1B1712",
    ink: "#7F5A0B",
    tint: "#FBF4E2",
    deep: "#1C1505",
    focus: "50% 50%",
  },
});
