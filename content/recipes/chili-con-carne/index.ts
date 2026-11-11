import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "chili-con-carne",
  title: "Chili con carne",
  seoTitle: "Chili con carne maison, mijoté 1 h 30 et bien épicé",
  tagline: "Le piment, c’est vous qui décidez.",
  description:
    "Un chili con carne maison pour 6 : bœuf haché bien saisi, épices revenues dans l’huile, haricots rouges et 1 h 30 de mijotage pour une sauce épaisse.",
  summary:
    "Pour faire un chili con carne pour 6 personnes, saisissez 800 g de bœuf haché en deux fois dans une cocotte, puis faites revenir 2 oignons et 1 poivron. Ajoutez l’ail, le cumin, le paprika fumé et le concentré de tomate, puis 800 g de tomates concassées et 250 ml de bouillon. Laissez mijoter 1 heure à couvert, ajoutez 500 g de haricots rouges et poursuivez 30 minutes à découvert. Comptez 2 h 25 en tout.",
  intro: [
    "Le chili con carne est un plat tex-mex : du bœuf, des tomates, des haricots rouges et des épices, mijotés jusqu’à ce que la sauce épaississe et colle à la cuillère. Celui-ci prend son temps, 1 h 30 sur le feu, et ça se sent.",
    "Deux gestes font la différence. On saisit la viande en deux fois, dans une cocotte très chaude, pour qu’elle dore au lieu de bouillir. Et on fait revenir les épices une minute dans le gras avant d’ajouter les tomates : c’est là que leur parfum se libère.",
    "Ce qui peut rater : des épices brûlées, donc amères, ou des haricots ajoutés trop tôt qui finissent en purée. Côté piquant, on reste sage avec une demi-cuillère de Cayenne, et chacun corse son bol à table.",
  ],
  category: "Plat",
  cuisine: "Tex-Mex",
  keywords: [
    "chili con carne",
    "recette chili con carne",
    "chili con carne maison",
    "chili con carne facile",
    "chili con carne haricots rouges",
    "chili con carne bœuf haché",
    "épices chili con carne",
    "chili con carne pas trop piquant",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 20, cook: 115, rest: 10 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Toute l’année"],
  equipment: [
    "grande cocotte à fond épais (5 l environ)",
    "spatule en bois à bord plat",
    "planche et couteau de chef",
    "passoire",
    "saladier",
  ],
  ingredients: [
    {
      title: "Le chili",
      items: [
        { qty: 2, unit: "cas", name: "huile de tournesol", note: "ou une autre huile neutre", step: 1 },
        { qty: 800, unit: "g", name: "bœuf haché", note: "à 15 % de matières grasses", step: 50 },
        { qty: 2, name: "oignon jaune", plural: "oignons jaunes", note: "émincés finement", step: 0.5 },
        { qty: 1, name: "poivron rouge", plural: "poivrons rouges", note: "en dés de 1 cm", step: 0.5 },
        { qty: 3, unit: "gousse", name: "ail", note: "haché", step: 1 },
        { qty: 2, unit: "cac", name: "cumin moulu", step: 0.5 },
        { qty: 2, unit: "cac", name: "paprika fumé", note: "pimentón doux", step: 0.5 },
        { qty: 1, unit: "cac", name: "origan séché", step: 0.5 },
        { qty: 0.5, unit: "cac", name: "piment de Cayenne", note: "à ajuster selon votre goût", step: 0.25 },
        { qty: 2, unit: "cas", name: "concentré de tomate", step: 1 },
        { qty: 800, unit: "g", name: "tomates concassées en conserve", note: "2 boîtes de 400 g", step: 50 },
        { qty: 250, unit: "ml", name: "bouillon de bœuf", note: "ou de l’eau", step: 10 },
        { qty: 1, unit: "feuille", name: "laurier", step: 1 },
        { qty: 1, unit: "cac", name: "sel fin", step: 0.5 },
        {
          qty: 500,
          unit: "g",
          name: "haricots rouges cuits",
          note: "égouttés et rincés (2 boîtes de 400 g)",
          step: 50,
        },
        { qty: 140, unit: "g", name: "maïs doux", note: "en conserve, égoutté", step: 10, optional: true },
        {
          qty: 1,
          name: "citron vert",
          plural: "citrons verts",
          note: "le jus d’une moitié, l’autre en quartiers",
          step: 0.5,
        },
        { name: "poivre noir", note: "du moulin" },
      ],
    },
    {
      title: "Pour servir",
      items: [
        { qty: 150, unit: "g", name: "crème aigre", note: "ou crème fraîche épaisse", step: 10 },
        { qty: 2, name: "oignon nouveau", plural: "oignons nouveaux", note: "avec leur vert, ciselés", step: 1 },
        { qty: 0.5, unit: "botte", name: "coriandre fraîche", step: 0.5 },
        { name: "riz blanc, tortillas ou chips de maïs", note: "pour accompagner", optional: true },
      ],
    },
  ],
  method: [
    {
      title: "La base",
      steps: [
        {
          title: "Préparer les légumes",
          text: "Pelez et émincez finement les oignons. Coupez le poivron en dés de 1 cm, sans les pépins ni les membranes blanches. Pelez et hachez l’ail. Mesurez le cumin, le paprika, l’origan et la Cayenne dans un petit bol : ils iront dans la cocotte en même temps.",
        },
        {
          title: "Saisir la viande",
          text: "Faites chauffer 1 c. à soupe d’huile dans la cocotte à feu vif. Émiettez la moitié du bœuf en gros morceaux et laissez-le 2 minutes sans y toucher, puis retournez-le et émiettez-le à la spatule. Comptez 5 à 6 minutes en tout : la viande est brune, grillée par endroits, et le fond attache un peu. Réservez dans un saladier et recommencez avec le reste.",
          timer: { minutes: 6, label: "Viande, par fournée" },
          tip: "Ne remuez pas sans arrêt : la viande doit rester au contact du fond pour dorer. Si elle rend de l’eau et grisonne, la cocotte est trop pleine ou pas assez chaude.",
        },
        {
          title: "Fondre oignons et poivron",
          text: "Baissez à feu moyen, ajoutez la deuxième cuillerée d’huile, les oignons, le poivron et une pincée du sel. Faites revenir 8 à 10 minutes en grattant le fond avec la spatule : les oignons sont tendres, dorés sur les bords, et les sucs bruns se sont décollés.",
          timer: { minutes: 9, label: "Oignons et poivron" },
        },
        {
          title: "Torréfier les épices",
          text: "Ajoutez l’ail, le bol d’épices et le concentré de tomate. Remuez sans cesse pendant 1 minute : les épices embaument, le concentré fonce et accroche légèrement au fond. Si ça fume, baissez le feu tout de suite.",
          timer: { minutes: 1, label: "Épices et concentré" },
          tip: "Le paprika brûle vite et devient amer. Une minute suffit pour libérer son parfum dans l’huile.",
        },
      ],
    },
    {
      title: "Le mijotage",
      steps: [
        {
          title: "Mijoter à couvert",
          text: "Remettez la viande et son jus dans la cocotte. Ajoutez les tomates concassées, le bouillon, le laurier et le reste du sel. Portez à frémissement, couvrez en laissant un petit espace et laissez cuire 1 heure à feu doux, en remuant de temps en temps. De petites bulles doivent crever la surface, sans gros bouillons.",
          timer: { minutes: 60, label: "Mijotage à couvert" },
        },
        {
          title: "Ajouter les haricots",
          text: "Ajoutez les haricots égouttés (et le maïs, si vous en mettez) et poursuivez 30 minutes à découvert, toujours à feu doux. Le chili est prêt quand la sauce est épaisse, qu’un sillon tracé à la cuillère au fond de la cocotte se referme lentement, et que de petites perles de gras rouge brillent en surface.",
          timer: { minutes: 30, label: "Mijotage avec haricots" },
        },
        {
          title: "Rectifier l’assaisonnement",
          text: "Retirez le laurier, ajoutez le jus d’un demi-citron vert et goûtez. Poivrez, salez si besoin, et ajoutez une pointe de Cayenne si vous l’aimez plus piquant. Couvrez et laissez reposer 10 minutes hors du feu.",
          timer: { minutes: 10, label: "Repos du chili" },
        },
        {
          title: "Servir",
          text: "Servez dans des bols chauds, avec une cuillerée de crème aigre, les oignons nouveaux, quelques feuilles de coriandre et un quartier de citron vert. À côté : du riz blanc, des tortillas ou des chips de maïs pour piocher.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi saisir en deux fois",
      text: "La réaction de Maillard, qui donne le brun et le goût de grillé, ne devient rapide qu’au-dessus de 140 °C environ. Si on met 800 g de viande froide d’un coup, la cocotte refroidit, la viande rend son eau et cuit dans ce jus, autour de 100 °C : elle reste grise.",
    },
    {
      title: "Les épices dans le gras",
      text: "Une bonne partie des arômes du cumin et du paprika sont solubles dans les graisses. Une minute dans l’huile chaude les libère et les répartit dans toute la sauce. Les ajouter directement dans les tomates donne un goût plus plat, un peu poussiéreux.",
    },
    {
      title: "Le concentré qui fonce",
      text: "En chauffant dans le gras, les sucres et les protéines du concentré de tomate brunissent. Son goût passe de l’acide au rond et profond, et c’est ce qui donne de la longueur à la sauce.",
    },
    {
      title: "Des haricots ajoutés tard",
      text: "Les haricots en conserve sont déjà cuits. Leur amidon est gélatinisé et leur peau, fragile : une heure et demie de mijotage les fait éclater. Trente minutes suffisent pour qu’ils prennent le goût de la sauce et l’épaississent légèrement.",
    },
  ],
  tips: [
    "Demandez à votre boucher du bœuf haché à 15 % de matières grasses, ou du paleron haché gros. À 5 %, la viande sèche et devient granuleuse pendant le mijotage.",
    "Si vous trouvez du piment ancho ou chipotle en poudre, remplacez-en la moitié du paprika fumé : le goût est plus fruité, plus proche du Texas.",
    "Faites-le la veille si vous pouvez. Réchauffé, on le trouve plus épais et mieux équilibré.",
    "Si vous recevez des enfants, mettez la Cayenne de côté : chacun pimente son bol à table, avec une sauce piquante.",
    "Une cocotte en fonte garde la chaleur quand on y jette la viande : elle saisit mieux qu’une casserole fine.",
  ],
  mistakes: [
    "Mettre toute la viande d’un coup. Elle rend son eau, bout et reste grise, sans goût de grillé.",
    "Faire revenir les épices à feu vif trop longtemps. Le paprika brûle en quelques secondes et toute la sauce devient amère.",
    "Ajouter les haricots dès le début. Ils éclatent et la sauce tourne à la purée.",
    "Servir une sauce trop liquide. Si elle ne nappe pas la cuillère, laissez réduire à découvert 10 minutes de plus.",
  ],
  variations: [
    {
      title: "Avec des haricots secs",
      text: "Faites tremper 250 g de haricots rouges secs pendant 12 heures, puis faites-les bouillir à gros bouillons 10 minutes dans de l’eau neuve avant de les laisser cuire 1 heure à 1 h 30 à petit feu. Ils remplacent les 500 g de haricots en conserve. Les 10 minutes d’ébullition franche ne sont pas facultatives : elles détruisent une protéine toxique des haricots rouges crus.",
    },
    {
      title: "Sans haricots, à la texane",
      text: "Le chili texan traditionnel se fait sans haricots, souvent avec du bœuf en morceaux. Remplacez le bœuf haché par 1 kg de paleron en cubes de 2 cm, supprimez les haricots et laissez mijoter 2 h 30 à 3 heures, jusqu’à ce que la viande se défasse à la fourchette.",
    },
    {
      title: "Sin carne",
      text: "Remplacez la viande par 250 g de lentilles vertes crues et une boîte de haricots noirs en plus, et le bouillon de bœuf par 500 ml de bouillon de légumes. Ajoutez tout après les épices : les lentilles cuisent en 40 à 45 minutes dans la sauce. Ce n’est plus un chili con carne, mais c’est très bon.",
    },
    {
      title: "Au chocolat",
      text: "Faites fondre 20 g de chocolat noir à 70 % dans la sauce pendant les 10 dernières minutes. Il ne donne pas un goût de dessert : il arrondit l’acidité de la tomate et assombrit la sauce.",
    },
  ],
  storage:
    "Laissez-le refroidir moins de 2 heures, puis gardez-le 3 jours au réfrigérateur en boîte fermée, ou 3 mois au congélateur. Réchauffez à feu doux jusqu’à ce qu’il frémisse, avec un trait d’eau, et ne le recongelez pas.",
  pairing:
    "Une bière blonde bien fraîche, ou un rouge fruité et peu tannique, comme un côtes-du-rhône servi un peu frais.",
  faq: [
    {
      q: "Le chili con carne convient-il aux enfants ?",
      a: "Oui, si vous gardez la Cayenne pour le bol des adultes : le paprika fumé donne du goût sans piquer. La viande hachée doit être cuite à cœur, sans trace rosée, ce qui est largement le cas après 1 h 30 de mijotage. Réchauffez les restes jusqu’à ce qu’ils frémissent.",
    },
    {
      q: "Comment rendre un chili con carne moins piquant ?",
      a: "Supprimez la Cayenne : le cumin et le paprika fumé suffisent pour le goût. S’il est déjà trop fort, ajoutez une boîte de tomates ou de haricots, et servez-le avec de la crème aigre et du riz, qui adoucissent chaque bouchée.",
    },
    {
      q: "Faut-il mettre des haricots rouges dans un chili con carne ?",
      a: "Dans la version tex-mex, oui, et c’est celle-ci. Au Texas, le chili traditionnel se fait souvent sans haricots, avec du bœuf en morceaux : c’est la variante « Sans haricots, à la texane ».",
    },
    {
      q: "Pourquoi mon chili con carne est-il trop liquide ?",
      a: "Il n’a pas assez réduit. Laissez-le mijoter à découvert, à feu doux, 10 à 15 minutes de plus, en remuant pour qu’il n’attache pas : la sauce doit napper la cuillère.",
    },
    {
      q: "Peut-on congeler le chili con carne ?",
      a: "Oui, 3 mois, dans une boîte fermée, une fois bien refroidi. Décongelez-le une nuit au réfrigérateur, puis réchauffez-le à feu doux jusqu’à ce qu’il frémisse. Ne le recongelez pas après.",
    },
    {
      q: "Avec quoi servir un chili con carne ?",
      a: "Du riz blanc, des tortillas de maïs ou des chips de maïs, avec de la crème aigre, de la coriandre et du citron vert. Un avocat en dés ou du cheddar râpé vont bien aussi.",
    },
  ],
  nutrition: {
    calories: 530,
    protein: 35,
    fat: 30,
    saturatedFat: 12,
    carbs: 28,
    sugar: 10,
    fiber: 10,
    sodium: 920,
  },
  annotations: {
    hero: "saisir la viande en deux fois",
    detail: "des chips de maïs pour piocher",
  },
  images: {
    heroAlt:
      "Chili con carne au bœuf haché, haricots rouges et maïs dans un bol gris, avec crème aigre et oignon nouveau",
    detailAlt: "Bol de chili con carne garni de coriandre et de chips de tortilla, tenu à la main",
    credits: {
      hero: {
        photographer: "Julias Torten und Törtchen",
        url: "https://www.pexels.com/photo/chili-con-carne-stew-15881322/",
      },
      detail: {
        photographer: "Nadin Sh",
        url: "https://www.pexels.com/photo/hand-holding-a-bowl-with-chilli-con-carne-14866629/",
      },
    },
  },
  datePublished: "2026-11-03",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#B5521E",
    onAccent: "#ffffff",
    ink: "#8A3A12",
    tint: "#F8ECE4",
    deep: "#1E0F09",
    focus: "50% 50%",
  },
});
