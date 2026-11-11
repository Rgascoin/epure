import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "poulet-roti",
  title: "Poulet rôti au four",
  seoTitle: "Poulet rôti au four : peau dorée et jus maison",
  tagline: "Celui du dimanche, cuit au degré près.",
  description:
    "Le poulet rôti au four, peau dorée et chair juteuse : 1 h 10 à 210 °C, 74 °C à cœur, 15 minutes de repos et un jus fait avec les sucs du plat.",
  summary:
    "Pour un poulet rôti de 4 personnes, épongez un poulet fermier de 1,7 kg, garnissez-le d’un citron, d’ail et de thym, puis massez-le avec 40 g de beurre et salez. Rôtissez-le 65 à 80 minutes à 210 °C en l’arrosant deux fois, jusqu’à 74 °C au plus épais de la cuisse. Laissez-le reposer 15 minutes et déglacez le plat avec 150 ml d’eau pour faire le jus.",
  intro: [
    "Un poulet rôti réussi, c’est une peau dorée qui craque, une chair qui reste juteuse jusque dans les filets, et un jus court fait avec ce qui a attaché au fond du plat. Pas besoin de technique compliquée : il faut surtout un four bien chaud et un thermomètre.",
    "Ce qui change tout : une peau bien sèche avant d’enfourner, un plat à peine plus grand que la volaille, et une cuisson vérifiée au thermomètre plutôt qu’à la montre. À 74 °C au plus épais de la cuisse, le poulet est cuit et sans risque ; au-delà, les filets sèchent.",
    "Ce qui peut rater : une peau molle si le poulet est humide, une chair sèche si on le découpe à la sortie du four. Comptez 20 minutes de préparation, 1 h 20 de cuisson jus compris, et 15 minutes de repos.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "poulet rôti",
    "poulet rôti au four",
    "recette poulet rôti",
    "temps de cuisson poulet rôti",
    "poulet rôti température à cœur",
    "poulet rôti peau croustillante",
    "jus de poulet rôti",
    "poulet fermier rôti",
    "poulet rôti du dimanche",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 20, cook: 80, rest: 15 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Toute l’année"],
  tags: ["fete-des-peres"],
  equipment: [
    "plat à rôtir à peine plus grand que le poulet",
    "thermomètre de cuisson à sonde (sinon, la pointe d’un couteau)",
    "papier absorbant et papier aluminium",
    "planche à découper à rigole",
    "petite passoire",
  ],
  ingredients: [
    {
      title: "Le poulet",
      items: [
        {
          qty: 1,
          name: "poulet fermier",
          plural: "poulets fermiers",
          note: "de 1,6 à 1,8 kg, prêt à cuire",
          step: 1,
        },
        { qty: 2, unit: "cac", name: "sel fin", step: 0.5 },
        { name: "poivre du moulin" },
        { qty: 1, name: "citron", plural: "citrons", note: "non traité, coupé en deux", step: 1 },
        { qty: 6, unit: "gousse", name: "ail", note: "en chemise, non épluchées", step: 1 },
        { qty: 4, unit: "brin", name: "thym frais", step: 1 },
        { qty: 1, unit: "feuille", name: "laurier", step: 1 },
        { qty: 40, unit: "g", name: "beurre doux", note: "mou", step: 5 },
        { qty: 1, name: "oignon jaune", plural: "oignons jaunes", note: "coupé en quartiers", step: 1 },
        { qty: 100, unit: "ml", name: "eau", step: 10 },
      ],
    },
    {
      title: "Le jus",
      items: [{ qty: 150, unit: "ml", name: "eau chaude", note: "ou bouillon de volaille", step: 10 }],
    },
  ],
  method: [
    {
      title: "Préparer le poulet",
      steps: [
        {
          title: "Préchauffer le four",
          text: "Allumez le four à 210 °C en chaleur statique (200 °C en chaleur tournante) et laissez-le chauffer 20 minutes. Pendant ce temps, sortez le poulet du réfrigérateur et retirez l’emballage et l’éventuelle ficelle.",
          timer: { minutes: 20, label: "Préchauffage du four" },
        },
        {
          title: "Sécher le poulet",
          text: "Épongez le poulet partout avec du papier absorbant, dessus, dessous et à l’intérieur. Ne le passez pas sous l’eau : ça ne retire pas les bactéries, ça les projette dans l’évier et sur le plan de travail.",
          tip: "Prenez votre temps sur cette étape. Une peau humide cuit à la vapeur et reste pâle ; une peau sèche dore et devient croustillante.",
        },
        {
          title: "Garnir l’intérieur",
          text: "Salez l’intérieur avec une demi-cuillerée à café de sel et poivrez. Glissez-y les deux moitiés de citron, 2 gousses d’ail écrasées du plat de la main, 2 brins de thym et la feuille de laurier.",
        },
        {
          title: "Beurrer et assaisonner",
          text: "Massez toute la peau avec le beurre mou, sans oublier les cuisses et le dessous des ailes. Salez avec le reste du sel (une cuillerée et demie à café), poivrez, et effeuillez les 2 derniers brins de thym par-dessus.",
        },
        {
          title: "Installer dans le plat",
          text: "Répartissez les quartiers d’oignon et les 4 gousses d’ail restantes au fond du plat. Posez le poulet dessus, sur le dos, et versez 100 ml d’eau au fond. L’oignon surélève un peu la volaille et parfume le jus.",
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Rôtir en arrosant",
          text: "Enfournez à mi-hauteur. Arrosez le poulet avec le jus du plat au bout de 20 minutes, puis 20 minutes plus tard, et laissez ensuite la peau sécher et dorer. Comptez 65 à 80 minutes au total pour un poulet de 1,6 à 1,8 kg : la peau est dorée et tendue, et la cuisse bouge facilement.",
          timer: { minutes: 70, label: "Cuisson du poulet" },
          tip: "Si le fond du plat attache et commence à noircir, ajoutez un peu d’eau. On veut des sucs bruns, pas brûlés.",
        },
        {
          title: "Vérifier à cœur",
          text: "Piquez le thermomètre au plus épais de la cuisse, près de l’articulation, sans toucher l’os : il doit indiquer 74 °C. Contrôlez aussi le haut du filet. Sans thermomètre, piquez au même endroit avec un couteau : le jus doit couler clair, sans aucune trace rosée. Sinon, remettez le poulet au four et vérifiez de nouveau.",
          tip: "S’il manque quelques degrés, une dizaine de minutes de plus suffit en général.",
        },
        {
          title: "Laisser reposer",
          text: "Posez le poulet sur la planche, couvrez-le d’une feuille d’aluminium sans serrer et laissez-le reposer 15 minutes. Sa température monte encore de quelques degrés et la chair perdra moins de jus à la découpe.",
          timer: { minutes: 15, label: "Repos du poulet" },
        },
      ],
    },
    {
      title: "Le jus",
      steps: [
        {
          title: "Dégraisser le plat",
          text: "Pendant le repos, inclinez le plat et retirez à la cuillère la plus grande partie de la graisse qui flotte à la surface. Gardez le jus brun du fond et les sucs collés : c’est la base du jus.",
        },
        {
          title: "Déglacer et réduire",
          text: "Posez le plat sur feu moyen s’il le supporte (sinon, versez son contenu dans une casserole). Ajoutez 150 ml d’eau chaude, grattez les sucs à la spatule et écrasez l’ail et l’oignon. Laissez frémir 3 à 4 minutes, jusqu’à ce que le jus prenne une couleur ambrée. Ajoutez le jus rendu sur la planche, filtrez, goûtez et salez si besoin.",
          timer: { minutes: 4, label: "Réduction du jus" },
        },
        {
          title: "Découper le poulet",
          text: "Détachez les cuisses en coupant la peau qui les relie au corps, puis écartez-les jusqu’à ce que l’articulation cède. Levez les filets de chaque côté du bréchet. Servez aussitôt, avec le jus chaud à part.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi 74 °C à cœur",
      text: "La volaille crue peut porter des salmonelles et des campylobacters. À 74 °C, ils sont détruits presque instantanément. On mesure là où la chaleur arrive en dernier, au plus épais de la cuisse près de l’os : si c’est cuit là, c’est cuit partout.",
    },
    {
      title: "Une peau sèche pour dorer",
      text: "La réaction de Maillard, qui donne à la peau sa couleur et son goût de rôti, ne démarre vraiment qu’au-delà de 140 °C. Tant que la surface est mouillée, elle reste bloquée vers 100 °C, le temps que l’eau s’évapore. Une peau épongée commence donc à dorer bien plus tôt.",
    },
    {
      title: "Le repos fait partie de la cuisson",
      text: "À la sortie du four, la chaleur des couches extérieures continue de gagner le centre, et la température à cœur monte encore de 2 à 5 °C. En tiédissant un peu, les jus s’épaississent légèrement et s’échappent moins quand on découpe.",
    },
    {
      title: "Les sucs font le jus",
      text: "Le brun collé au fond du plat, ce sont des jus de viande caramélisés et des produits de la réaction de Maillard. L’eau chaude les dissout : c’est tout le goût du jus, sans fond ni bouillon cube.",
    },
  ],
  tips: [
    "Achetez un poulet fermier label rouge ou bio : élevé plus longtemps, il a une chair plus ferme et plus de goût. C’est l’ingrédient principal, il mérite qu’on y mette le prix.",
    "Si vous y pensez la veille, salez le poulet et laissez-le à découvert au réfrigérateur, sur une grille. La peau sèche toute seule et le sel a le temps d’assaisonner la chair. Le lendemain, ne resalez pas.",
    "Un thermomètre à sonde coûte moins cher qu’un bon poulet et vous évite de deviner. Il servira ensuite pour les rôtis, le pain ou le caramel.",
    "Gardez la carcasse : avec un oignon, une carotte et 1,5 litre d’eau, elle donne un bouillon après 2 heures de frémissement.",
  ],
  mistakes: [
    "Enfourner le poulet humide, juste sorti de l’emballage : la peau cuit à la vapeur et reste molle.",
    "Se fier uniquement au temps de cuisson : selon le four et la taille du poulet, il peut manquer 10 minutes, ou y en avoir 10 de trop.",
    "Le découper dès la sortie du four : le jus inonde la planche et la chair s’assèche.",
    "Prendre un plat trop grand : le jus s’étale, brûle, et il ne reste rien pour la sauce.",
  ],
  variations: [
    {
      title: "Avec des pommes de terre",
      text: "Au bout de 20 minutes de cuisson, ajoutez autour du poulet 800 g de grenailles coupées en deux et 100 ml d’eau en plus, dans un plat un peu plus grand. Elles cuisent dans la graisse et le jus ; retournez-les une fois.",
    },
    {
      title: "Beurre d’herbes sous la peau",
      text: "Mélangez le beurre avec 2 cuillerées à soupe d’estragon ou de persil haché et le zeste du citron. Décollez la peau des filets du bout des doigts, glissez-y la moitié du beurre et massez l’extérieur avec le reste.",
    },
    {
      title: "En crapaudine",
      text: "Retirez la colonne vertébrale aux ciseaux de cuisine et aplatissez le poulet, peau vers le haut. Il cuit plus vite et plus régulièrement : 40 à 50 minutes à 220 °C, toujours jusqu’à 74 °C dans la cuisse.",
    },
  ],
  storage:
    "Découpé et mis en boîte fermée dans les 2 heures qui suivent la cuisson, il se garde 2 à 3 jours au réfrigérateur, jus à part. Mangez-le froid, ou réchauffez-le à cœur, 15 minutes à 160 °C avec un peu de jus.",
  pairing: "Un rouge léger servi un peu frais, un morgon ou un fleurie, ou bien un mâcon blanc.",
  faq: [
    {
      q: "À quelle température à cœur un poulet rôti est-il cuit ?",
      a: "À 74 °C, mesurés au plus épais de la cuisse, près de l’articulation, sans toucher l’os. À cette température, salmonelles et campylobacters sont détruits. Sans thermomètre, piquez au même endroit : le jus doit être clair, sans trace rosée, et la cuisse doit bouger facilement.",
    },
    {
      q: "Combien de temps faire cuire un poulet rôti au four ?",
      a: "Comptez environ 40 minutes par kilo à 210 °C, plus 5 minutes : 1 h 05 pour 1,5 kg, environ 1 h 15 pour 1,8 kg. Ce n’est qu’un repère, car les fours varient : le poulet est cuit quand il atteint 74 °C au plus épais de la cuisse.",
    },
    {
      q: "Faut-il couvrir le poulet pendant la cuisson ?",
      a: "Non. À découvert, la peau sèche et dore. Si elle colore trop vite alors que la cuisse n’est pas encore à température, posez une feuille d’aluminium sur le dessus pour la fin de la cuisson, sans l’enfermer.",
    },
    {
      q: "Faut-il ficeler un poulet avant de le rôtir ?",
      a: "Ce n’est pas indispensable. Ficelé, il a une jolie forme et se découpe proprement, mais ses cuisses, serrées contre le corps, cuisent un peu plus lentement. Sans ficelle, l’air chaud circule mieux autour, ce qui arrange plutôt la cuisson.",
    },
    {
      q: "Pourquoi la peau de mon poulet n’est pas croustillante ?",
      a: "Elle était humide, le four n’était pas assez chaud, ou le poulet a été arrosé jusqu’au bout. Épongez-le bien, enfournez dans un four préchauffé à 210 °C et arrêtez d’arroser pour la dernière demi-heure. Le salage la veille, à découvert au réfrigérateur, aide beaucoup.",
    },
    {
      q: "Combien de temps se conserve un poulet rôti ?",
      a: "2 à 3 jours au réfrigérateur, découpé et en boîte fermée, à condition de l’y mettre dans les 2 heures qui suivent la cuisson. Ne le laissez pas tiédir tout l’après-midi sur la table. Mangez-le froid, ou réchauffez-le à cœur, une seule fois.",
    },
  ],
  nutrition: {
    calories: 430,
    protein: 46,
    fat: 26,
    saturatedFat: 9,
    carbs: 3,
    sugar: 2,
    fiber: 0.5,
    sodium: 750,
  },
  annotations: {
    hero: "une peau sèche, puis le beurre",
    detail: "15 minutes de repos avant de couper",
  },
  images: {
    heroAlt: "Poulet rôti doré dans un plat ovale blanc, entouré de haricots verts et de pommes de terre rôties",
    detailAlt: "Découpe d’un poulet rôti encore fumant, à la fourchette, la peau bien dorée",
    credits: {
      hero: { photographer: "furkanfdemir", url: "https://www.pexels.com/photo/10821324/", source: "Pexels" },
      detail: { photographer: "G N", url: "https://www.pexels.com/photo/13897888/", source: "Pexels" },
    },
  },
  datePublished: "2026-11-02",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#A0622F",
    onAccent: "#ffffff",
    ink: "#8A4E1E",
    tint: "#F8EFE5",
    deep: "#1A120C",
    focus: "45% 50%",
  },
});
