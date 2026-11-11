import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "hachis-parmentier",
  title: "Hachis parmentier",
  seoTitle: "Hachis parmentier maison, vraie purée et bœuf gratiné",
  tagline: "La purée fait la moitié du plat.",
  description:
    "Hachis parmentier pour 6 : 800 g de bœuf haché aux oignons sous une purée maison au beurre et au lait, gratinée 25 minutes à 200 °C. Prêt en 1 h 30.",
  summary:
    "Pour 6 personnes, faites revenir 800 g de bœuf haché avec 2 oignons, de l’ail et du concentré de tomate jusqu’à ce qu’il soit cuit à cœur. Couvrez d’une purée de 1,5 kg de pommes de terre farineuses écrasées au presse-purée avec 80 g de beurre et 30 cl de lait, parsemez de fromage et de chapelure, puis gratinez 25 minutes à 200 °C. Comptez 1 h 30 en tout, dont 35 minutes de travail.",
  intro: [
    "Le hachis parmentier, c’est une couche de viande hachée bien relevée, une couche de purée, et un dessus gratiné au four. Un plat familial, qu’on fait avec du bœuf haché frais ou avec les restes d’un pot-au-feu.",
    "On le rate souvent par la purée : collante parce qu’elle est passée au mixeur, ou fade parce qu’elle sort d’un sachet.",
    "Prenez des pommes de terre farineuses, écrasez-les au presse-purée ou au moulin à légumes, et mettez le beurre avant le lait. Elle reste légère et prend une croûte dorée au four.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "hachis parmentier",
    "recette hachis parmentier",
    "hachis parmentier maison",
    "hachis parmentier bœuf haché",
    "hachis parmentier avec restes de pot-au-feu",
    "purée pour hachis parmentier",
    "temps de cuisson hachis parmentier",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 35, cook: 50, rest: 5 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Automne", "Hiver"],
  tags: ["hiver", "automne"],
  equipment: [
    "grande casserole",
    "presse-purée ou moulin à légumes",
    "sauteuse de 28 cm",
    "plat à gratin de 30 × 22 cm environ",
  ],
  ingredients: [
    {
      title: "La purée",
      items: [
        {
          qty: 1500,
          unit: "g",
          name: "pomme de terre farineuse",
          plural: "pommes de terre farineuses",
          note: "bintje, agria ou manon",
          step: 100,
        },
        { qty: 1, unit: "cas", name: "gros sel", fixed: true },
        { qty: 30, unit: "cl", name: "lait entier", step: 1 },
        { qty: 80, unit: "g", name: "beurre", note: "froid, en morceaux", step: 5 },
        { name: "noix de muscade" },
      ],
    },
    {
      title: "La viande",
      items: [
        { qty: 2, unit: "cas", name: "huile d’olive", step: 1 },
        { qty: 2, name: "oignon", plural: "oignons", note: "environ 250 g, hachés finement", step: 1 },
        { qty: 2, name: "gousse d’ail", plural: "gousses d’ail", note: "hachées", step: 1 },
        { qty: 800, unit: "g", name: "bœuf haché", note: "15 % de matières grasses, frais", step: 50 },
        { qty: 1, unit: "cas", name: "concentré de tomate", step: 0.5 },
        { qty: 2, name: "branche de thym", plural: "branches de thym", fixed: true },
        { qty: 10, unit: "cl", name: "bouillon de bœuf", step: 1 },
        { qty: 3, unit: "cas", name: "persil plat", note: "haché", step: 1 },
        { name: "sel et poivre" },
      ],
    },
    {
      title: "Le gratin",
      items: [
        { qty: 60, unit: "g", name: "comté râpé", step: 5 },
        { qty: 2, unit: "cas", name: "chapelure", step: 1 },
        { qty: 20, unit: "g", name: "beurre", note: "plus un peu pour le plat", step: 5 },
      ],
    },
  ],
  method: [
    {
      title: "La purée et la viande",
      steps: [
        {
          title: "Cuire les pommes de terre",
          text: "Épluchez les pommes de terre, coupez-les en morceaux de taille égale et mettez-les dans une grande casserole d’eau froide avec le gros sel. Portez à ébullition, puis laissez cuire 20 à 25 minutes à petits bouillons, jusqu’à ce qu’elles s’effritent quand on les pique.",
          timer: { minutes: 25, label: "Pommes de terre" },
        },
        {
          title: "Fondre les oignons",
          text: "Pendant ce temps, chauffez l’huile dans la sauteuse à feu moyen et faites fondre les oignons 8 minutes, jusqu’à ce qu’ils soient tendres et blonds. Ajoutez l’ail pour la dernière minute.",
          timer: { minutes: 8, label: "Oignons" },
        },
        {
          title: "Cuire la viande",
          text: "Montez le feu, ajoutez le bœuf haché et émiettez-le à la spatule. Laissez cuire 10 minutes en remuant, jusqu’à ce qu’il ne reste plus aucune trace rosée, que l’eau rendue se soit évaporée et que la viande commence à dorer.",
          timer: { minutes: 10, label: "Bœuf haché" },
          tip: "Une viande hachée doit être cuite à cœur : ses bactéries de surface ont été réparties dans toute la masse au hachage. Pas de rosé, donc, même si le hachis repasse au four.",
        },
        {
          title: "Mijoter et assaisonner",
          text: "Ajoutez le concentré de tomate, le thym effeuillé et le bouillon, et laissez mijoter 5 minutes à feu doux. La viande doit rester moelleuse mais sans jus au fond. Salez, poivrez, ajoutez le persil et allumez le four à 200 °C.",
          timer: { minutes: 5, label: "Mijotage" },
        },
        {
          title: "Écraser la purée",
          text: "Égouttez les pommes de terre et remettez-les 2 minutes dans la casserole sur feu doux pour les sécher. Faites chauffer le lait. Passez-les au presse-purée, incorporez le beurre froid à la spatule, puis le lait chaud petit à petit. Salez et râpez un peu de muscade. Elle doit être souple et garder la trace de la spatule.",
          timer: { minutes: 2, label: "Sécher les pommes de terre" },
          tip: "Jamais de mixeur ni de robot : leurs lames cassent les cellules de la pomme de terre et la purée devient élastique comme de la colle. Le beurre avant le lait enrobe l’amidon et donne une texture plus fine.",
        },
      ],
    },
    {
      title: "Monter et gratiner",
      steps: [
        {
          title: "Monter le plat",
          text: "Beurrez le plat et étalez-y la viande en couche régulière. Couvrez de purée en commençant par les bords, pour bien enfermer la viande, puis lissez et tracez des sillons à la fourchette. Parsemez de comté râpé et de chapelure, et posez le beurre en petits morceaux.",
        },
        {
          title: "Gratiner",
          text: "Enfournez à mi-hauteur pour 25 minutes. Le dessus doit être doré, avec des sillons bien bruns, et la sauce de la viande doit bouillonner sur les bords.",
          timer: { minutes: 25, label: "Gratin au four" },
        },
        {
          title: "Laisser reposer",
          text: "Laissez reposer 5 minutes hors du four avant de servir : les couches se tiennent mieux à la découpe.",
          timer: { minutes: 5, label: "Repos" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi des pommes de terre farineuses",
      text: "Riches en amidon et pauvres en eau, elles se séparent en grains secs à la cuisson et absorbent le beurre et le lait. Les variétés à chair ferme se séparent mal, demandent à être plus travaillées et donnent une purée lourde.",
    },
    {
      title: "Pourquoi pas de mixeur",
      text: "Les lames déchirent les cellules gorgées d’amidon cuit, qui se libère en masse et forme un gel élastique. Le presse-purée écrase sans déchirer et laisse les cellules presque entières.",
    },
    {
      title: "D’où vient le goût de la viande",
      text: "Quand l’eau rendue par la viande s’est évaporée, sa surface dépasse 140 °C et la réaction de Maillard commence : les sucres et les acides aminés forment des composés bruns et savoureux. Une viande qui cuit dans son jus reste grise et fade.",
    },
  ],
  tips: [
    "Faites cuire la viande en deux fois si votre sauteuse est petite : trop tassée, elle bout dans son jus au lieu de dorer.",
    "Gardez la purée assez souple. Elle sèche un peu au four, et une purée trop ferme dès le départ devient plâtreuse.",
    "Tracez des sillons profonds à la fourchette : ce sont leurs crêtes qui dorent et croustillent.",
    "Le hachis se monte jusqu’à la veille. Gardez-le filmé au frais et comptez 35 à 40 minutes de four au lieu de 25.",
  ],
  mistakes: [
    "Passer la purée au mixeur : elle devient collante et élastique, et il n’y a pas de retour possible. Utilisez un presse-purée ou un moulin à légumes.",
    "Laisser du jus dans la viande : il remonte à travers la purée et détrempe le dessus. Faites-le réduire jusqu’à ce que le fond de la sauteuse soit presque sec.",
    "Verser du lait froid sur la purée : elle refroidit, devient compacte et absorbe mal. Chauffez-le avant.",
    "Arrêter la cuisson du haché tant qu’il est encore rosé : il doit être cuit à cœur avant d’aller au four.",
  ],
  variations: [
    {
      title: "Avec les restes de pot-au-feu",
      text: "Remplacez le bœuf haché par 700 g de viande de pot-au-feu effilochée ou hachée au couteau, et le bouillon de bœuf par 15 cl de bouillon du pot-au-feu. Comme elle est déjà cuite, réchauffez-la seulement 5 minutes avec les oignons, sans chercher à la dorer.",
    },
    {
      title: "Moitié céleri-rave",
      text: "Remplacez 500 g de pommes de terre par 500 g de céleri-rave en cubes, cuits dans la même eau. La purée est plus légère et plus parfumée, un peu moins ferme.",
    },
    {
      title: "Au canard",
      text: "Remplacez le bœuf par la chair effilochée de 4 cuisses de canard confites, revenue 5 minutes avec les oignons dans 1 cas de graisse de canard. Supprimez le concentré de tomate.",
    },
  ],
  storage:
    "Il se garde 3 jours au réfrigérateur, filmé ou en boîte fermée, une fois refroidi en moins de 2 heures. Il se congèle aussi, en parts, pendant 3 mois. Réchauffez-le au four à 180 °C, 20 à 30 minutes, jusqu’à ce qu’il soit brûlant au centre, et ne le recongelez pas.",
  pairing: "Une salade verte ou de la mâche, et un rouge souple : un côtes-du-rhône, un chinon ou un bourgueil.",
  faq: [
    {
      q: "Quelles pommes de terre pour un hachis parmentier ?",
      a: "Des pommes de terre farineuses, comme la bintje, l’agria ou la manon. Elles font une purée légère qui absorbe bien le beurre et le lait. Les variétés à chair ferme donnent une purée lourde et collante.",
    },
    {
      q: "Peut-on faire un hachis parmentier avec des restes de pot-au-feu ?",
      a: "Oui, c’est une très bonne façon de les finir. Effilochez 700 g de viande, humidifiez-la avec 15 cl de bouillon du pot-au-feu et réchauffez-la 5 minutes avec les oignons avant de la couvrir de purée.",
    },
    {
      q: "Combien de temps cuire un hachis parmentier au four ?",
      a: "25 minutes à 200 °C si la viande et la purée sont encore chaudes. S’il sort du réfrigérateur, comptez 35 à 40 minutes, jusqu’à ce qu’il soit brûlant au centre.",
    },
    {
      q: "Faut-il cuire la viande avant de monter le hachis parmentier ?",
      a: "Oui. Le bœuf haché doit être cuit à cœur à la poêle, sans trace rosée. Le passage au four sert à gratiner et à réchauffer, pas à cuire la viande.",
    },
    {
      q: "Pourquoi ma purée est-elle collante ?",
      a: "Parce qu’elle a été mixée ou trop travaillée, ou faite avec des pommes de terre à chair ferme. Le mixeur libère trop d’amidon. Utilisez un presse-purée et des variétés farineuses.",
    },
    {
      q: "Peut-on congeler un hachis parmentier ?",
      a: "Oui, 3 mois, en parts dans des boîtes fermées. Faites-le décongeler une nuit au réfrigérateur et réchauffez-le au four à 180 °C jusqu’à ce qu’il soit brûlant au centre. Ne le recongelez pas.",
    },
  ],
  nutrition: { calories: 725, protein: 34, fat: 43, saturatedFat: 19, carbs: 50, sugar: 5, fiber: 5, sodium: 700 },
  annotations: { hero: "les sillons dorés, la meilleure part", detail: "la purée enferme le bœuf" },
  images: {
    heroAlt:
      "Hachis parmentier dans un plat ovale en céramique, purée gratinée à la chapelure et au fromage, bien dorée sur les bords",
    detailAlt: "Hachis parmentier entamé, la purée gratinée au-dessus et le bœuf haché en dessous",
    credits: {
      hero: {
        photographer: "Bycro",
        url: "https://commons.wikimedia.org/w/index.php?curid=103288950",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
      detail: {
        photographer: "Bycro",
        url: "https://commons.wikimedia.org/w/index.php?curid=103288957",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#C9853B",
    onAccent: "#1B1712",
    ink: "#7D4A14",
    tint: "#F9F1E5",
    deep: "#1B120A",
    focus: "50% 50%",
  },
});
