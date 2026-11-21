import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "oeufs-cocotte",
  title: "Œufs cocotte",
  seoTitle: "Œufs cocotte à la crème au four, jaune coulant",
  tagline: "Le jaune doit encore couler.",
  description:
    "Œufs cocotte à la crème cuits au bain-marie : 10 à 12 minutes à 180 °C, un blanc pris, un jaune qui coule et des mouillettes grillées pour saucer.",
  summary:
    "Pour 4 personnes, cassez 4 œufs dans des ramequins beurrés garnis de 120 g de crème fraîche épaisse, puis faites-les cuire au bain-marie 10 à 12 minutes dans un four à 180 °C. On les sort quand le blanc est pris et que le jaune tremble encore. Avec les mouillettes de pain grillé, il faut moins d’une demi-heure en tout, dont 12 minutes de four.",
  intro: [
    "Un œuf, deux cuillerées de crème, un ramequin et une douzaine de minutes de four. Les œufs cocotte tiennent en une phrase, et c’est souvent l’entrée qu’on improvise un soir avec ce qui traîne au réfrigérateur.",
    "La marge est mince : il faut un blanc pris et un jaune encore liquide, et une minute de trop suffit à tout figer. Le bain-marie l’élargit : l’eau ne dépasse pas 100 °C, le ramequin chauffe doucement et le blanc prend sans durcir sur les bords.",
    "Le repère se voit en secouant le plat : le blanc ne tremble plus qu’autour du jaune. Sortez-les à ce moment-là, ils finissent de cuire sur le chemin de la table.",
  ],
  category: "Entrée",
  cuisine: "Française",
  keywords: [
    "œufs cocotte",
    "recette œufs cocotte",
    "œuf cocotte à la crème",
    "œufs cocotte au four",
    "temps de cuisson œuf cocotte",
    "œufs cocotte au bain-marie",
    "œuf cocotte jambon",
    "œuf cocotte saumon fumé",
    "œuf cocotte foie gras",
  ],
  diet: ["vegetarian"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 15, cook: 12 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  tags: [],
  equipment: [
    "4 ramequins en porcelaine de 8 à 9 cm (150 ml)",
    "un plat à four à bords hauts",
    "une bouilloire",
    "un grille-pain",
  ],
  ingredients: [
    {
      title: "Les œufs",
      items: [
        { qty: 10, unit: "g", name: "beurre", note: "mou, pour les ramequins", step: 5 },
        { qty: 120, unit: "g", name: "crème fraîche épaisse", note: "entière, environ 30 % de matière grasse", step: 10 },
        { name: "sel fin" },
        { name: "poivre noir du moulin" },
        { qty: 4, name: "œuf", plural: "œufs", note: "extra-frais, à température ambiante", step: 1 },
        { qty: 8, unit: "brin", name: "ciboulette", step: 2 },
      ],
    },
    {
      title: "Les mouillettes",
      items: [
        { qty: 4, unit: "tranche", name: "pain de campagne", note: "épaisses de 1,5 cm", step: 1 },
        { qty: 20, unit: "g", name: "beurre demi-sel", step: 5 },
      ],
    },
  ],
  method: [
    {
      title: "Les œufs cocotte",
      steps: [
        {
          title: "Préchauffer le four",
          text: "Sortez les œufs du réfrigérateur. Préchauffez le four à 180 °C, chaleur statique, pendant 15 minutes, et faites chauffer 1 litre d’eau dans la bouilloire.",
          timer: { minutes: 15, label: "Préchauffage du four" },
        },
        {
          title: "Garnir les ramequins",
          text: "Beurrez le fond et les parois des ramequins avec le beurre mou. Déposez au fond de chacun 1 cuillerée à soupe de crème, soit la moitié en tout, avec une pincée de sel et un tour de poivre.",
        },
        {
          title: "Casser les œufs",
          text: "Cassez un œuf dans une tasse, vérifiez qu’il n’y a ni éclat de coquille ni jaune crevé, puis faites-le glisser dans un ramequin, sur la crème. Recommencez avec les autres. Répartissez le reste de la crème sur le blanc, autour du jaune, en laissant celui-ci à découvert. Salez légèrement le blanc.",
          tip: "Le sel posé sur le jaune y laisse de petits points blancs : salez la crème et le blanc, jamais le jaune.",
        },
        {
          title: "Monter le bain-marie",
          text: "Posez les ramequins dans le plat, puis le plat sur la grille au milieu du four. Versez l’eau frémissante dans le plat, directement dans le four, jusqu’à mi-hauteur des ramequins. Vous évitez ainsi de porter un plat plein d’eau brûlante.",
        },
        {
          title: "Cuire au four",
          text: "Refermez et laissez cuire 10 à 12 minutes. Secouez doucement le plat dès 9 minutes : c’est prêt quand le blanc est opaque partout et ne tremble plus qu’autour du jaune, et que le jaune, brillant, bouge encore d’un bloc.",
          timer: { minutes: 10, label: "Cuisson des œufs" },
          tip: "Avec des ramequins épais en grès ou des mini-cocottes en fonte, ajoutez 2 à 3 minutes : la paroi met plus longtemps à chauffer.",
        },
        {
          title: "Griller les mouillettes",
          text: "Pendant la cuisson, faites griller le pain jusqu’à ce qu’il soit doré et ferme sous le doigt. Beurrez-le aussitôt avec le beurre demi-sel et coupez-le en bâtonnets de 1,5 cm de large.",
        },
        {
          title: "Servir sans attendre",
          text: "Sortez les ramequins de l’eau avec une manique, essuyez-les et posez-les sur des assiettes. Parsemez de ciboulette ciselée, donnez un tour de poivre et servez avec les mouillettes. L’œuf continue de cuire dans le ramequin chaud : ne le laissez pas attendre.",
          tip: "Laissez le plat et son eau dans le four éteint et videz-le une fois refroidi, sans risque de vous brûler.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Le blanc avant le jaune",
      text: "Les protéines du blanc commencent à coaguler vers 62 °C et le blanc devient ferme vers 80 °C ; le jaune épaissit dès 65 °C et se fige vers 70 °C. Au four, la chaleur arrive par le fond et les parois, là où s’étale le blanc. Le jaune, au centre et en surface, chauffe en dernier : c’est cet écart qui laisse un blanc pris autour d’un jaune encore liquide.",
    },
    {
      title: "Un bain qui plafonne à 100 °C",
      text: "L’air du four est à 180 °C, mais l’eau du bain-marie ne peut pas dépasser 100 °C. Les parois du ramequin restent donc bien en dessous de la température du four, et le blanc qui les touche ne durcit pas avant que le centre ait pris. L’eau transmet aussi la chaleur plus régulièrement que l’air.",
    },
    {
      title: "Une crème qui tient",
      text: "Une crème fraîche entière, autour de 30 % de matière grasse, supporte la cuisson sans se séparer : ses protéines, peu nombreuses et entourées de gras, ne forment pas de grumeaux. Une crème allégée, plus riche en protéines par rapport au gras, peut graininer et rendre un peu d’eau au fond du ramequin.",
    },
  ],
  tips: [
    "Laissez le jaune à découvert. La crème posée dessus le cache, et c’est justement lui qu’il faut surveiller.",
    "Sortez les œufs du réfrigérateur dès que vous allumez le four. Froids, ils demandent 2 à 3 minutes de cuisson en plus.",
    "Versez de l’eau frémissante dans le bain-marie, pas de l’eau du robinet : la cuisson démarre tout de suite et le temps annoncé reste juste.",
    "Prenez du pain de campagne pour les mouillettes. Le pain de mie ramollit au premier passage dans la crème.",
  ],
  mistakes: [
    "Attendre que tout le blanc soit ferme : le jaune a pris entre-temps. Sortez les ramequins quand le blanc tremble encore un peu autour du jaune.",
    "Laisser les ramequins dans l’eau chaude une fois le four éteint : l’œuf continue de cuire et le jaune durcit en quelques minutes.",
    "Napper le jaune de crème : on ne voit plus s’il bouge encore, et on cuit à l’aveugle. Si c’est fait, secouez le plat et fiez-vous au blanc.",
    "Choisir une crème allégée : elle se sépare en petits grains et laisse un fond aqueux. Restez sur une crème entière.",
  ],
  variations: [
    {
      title: "Aux champignons",
      text: "Faites revenir 150 g de champignons de Paris en lamelles dans 10 g de beurre, 6 à 8 minutes à feu vif, jusqu’à ce que leur eau se soit évaporée. Salez, répartissez-les au fond des ramequins avant la crème et ajoutez 2 minutes de cuisson. Des morilles séchées (15 g, réhydratées) se cuisent au moins 10 minutes dans le beurre, jamais crues.",
    },
    {
      title: "Au jambon",
      text: "Coupez 2 tranches de jambon blanc en lanières et répartissez-les au fond des ramequins, sous la crème. Le jambon est déjà salé : salez à peine le blanc. La cuisson ne change pas.",
    },
    {
      title: "Au saumon fumé",
      text: "Remplacez la ciboulette par 4 brins d’aneth et ne salez pas la crème. Posez 80 g de saumon fumé en lanières sur les œufs à la sortie du four : cuit, il durcit et perd son côté fondant.",
    },
    {
      title: "Au foie gras, pour les fêtes",
      text: "Glissez au fond de chaque ramequin 15 g de foie gras mi-cuit en petits dés, soit 60 g en tout, puis la crème et l’œuf. Il fond à moitié pendant la cuisson et parfume la crème. Ne salez pas avant : une pincée de fleur de sel à table suffit.",
    },
  ],
  storage:
    "Les œufs cocotte se mangent à la sortie du four : en attendant, le jaune durcit. Vous pouvez beurrer les ramequins et y mettre la crème quelques heures à l’avance, au réfrigérateur, et ne casser les œufs qu’au moment de cuire. Un œuf cocotte cuit se garde 24 h au maximum au réfrigérateur, couvert, et se mange alors froid.",
  pairing:
    "Une salade de mâche à l’huile de noix en fait une entrée complète. Côté vin, un blanc sec et rond, comme un mâcon blanc, va bien avec la crème.",
  faq: [
    {
      q: "Combien de temps cuire des œufs cocotte au four ?",
      a: "10 à 12 minutes à 180 °C au bain-marie, pour des ramequins en porcelaine de 8 à 9 cm et des œufs à température ambiante. Ajoutez 2 à 3 minutes pour des œufs sortis du réfrigérateur ou des cocottes épaisses. Le blanc doit être opaque, le jaune brillant et encore mobile.",
    },
    {
      q: "Les œufs cocotte sont-ils déconseillés aux femmes enceintes ?",
      a: "Oui, tant que le jaune reste coulant. Pour les femmes enceintes, les jeunes enfants, les personnes âgées et les personnes immunodéprimées, prolongez la cuisson d’environ 5 minutes, jusqu’à ce que le jaune soit ferme et ne bouge plus quand on secoue le plat. Prenez des œufs extra-frais, dans leur date.",
    },
    {
      q: "Comment savoir si un œuf cocotte est cuit ?",
      a: "Secouez doucement le plat. Le blanc doit être opaque partout et ne trembler qu’autour du jaune, qui bouge encore d’un bloc. S’il reste une zone transparente et gluante près du jaune, remettez au four et vérifiez de minute en minute.",
    },
    {
      q: "Peut-on faire des œufs cocotte sans four ?",
      a: "Oui, dans une sauteuse. Posez les ramequins dans 2 cm d’eau frémissante, couvrez et laissez cuire à feu doux en surveillant dès 6 minutes : la vapeur cuit le dessus pendant que l’eau chauffe le fond. Le repère reste le même, un blanc pris et un jaune qui tremble.",
    },
    {
      q: "Quelle crème mettre dans des œufs cocotte ?",
      a: "De la crème fraîche épaisse entière, autour de 30 % de matière grasse : elle tient à la cuisson et nappe bien le blanc. Une crème liquide entière convient aussi. Évitez les crèmes allégées, qui ont tendance à se séparer en petits grains.",
    },
    {
      q: "Peut-on préparer des œufs cocotte à l’avance ?",
      a: "Oui, en partie. Beurrez les ramequins et mettez la crème au fond quelques heures avant, puis gardez-les au réfrigérateur. Cassez les œufs juste avant d’enfourner, et comptez 1 à 2 minutes de cuisson en plus si les ramequins sortent du froid.",
    },
  ],
  nutrition: {
    calories: 315,
    protein: 11,
    fat: 21,
    saturatedFat: 12,
    carbs: 21,
    sugar: 2,
    fiber: 1.5,
    sodium: 420,
  },
  annotations: { hero: "le jaune doit encore trembler", detail: "la mouillette fait le reste" },
  images: {
    heroAlt:
      "Œuf cocotte à la crème et aux morilles dans une mini-cocotte rouge, jaune coulant, pain de campagne à côté",
    detailAlt: "Mouillette de pain beurré trempée dans un œuf cocotte au jaune coulant, dans une mini-cocotte rouge",
    credits: {
      hero: {
        photographer: "Frédérique Voisin-Demery",
        url: "https://www.flickr.com/photos/8514720@N04/8058811599",
        source: "Flickr",
        license: "CC BY 2.0",
      },
      detail: {
        photographer: "Frédérique Voisin-Demery",
        url: "https://www.flickr.com/photos/8514720@N04/6931479585",
        source: "Flickr",
        license: "CC BY 2.0",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#E9A21C",
    onAccent: "#1B1712",
    ink: "#8A5800",
    tint: "#FBF3DF",
    deep: "#1C150A",
    focus: "40% 55%",
  },
});
