import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "boeuf-bourguignon",
  title: "Bœuf bourguignon",
  seoTitle: "Bœuf bourguignon en cocotte, cuit doucement au four",
  tagline: "À lancer le dimanche matin.",
  description:
    "Le bœuf bourguignon comme on l’aime : du paleron qui mijote 3 h au four à 150 °C dans un pinot noir, puis lardons, champignons et petits oignons glacés.",
  summary:
    "Pour 6 personnes, faites dorer 1,5 kg de paleron en cubes, saupoudrez de farine, mouillez avec 75 cl de pinot noir et 30 cl de bouillon, puis laissez cuire 3 h au four à 150 °C, cocotte fermée. Les lardons, les champignons et les petits oignons glacés se préparent à part et rejoignent la cocotte à la fin. Il faut un peu plus de 4 h en tout, mais seulement 40 minutes de vrai travail.",
  intro: [
    "Le bourguignon demande surtout du temps. Trois heures dans un four doux, et un morceau ferme, plein de nerfs, finit par se défaire à la cuillère dans une sauce sombre qui brille.",
    "Il y a deux moments où il faut être là. Au début, pour faire dorer la viande sans se presser, morceau par morceau. À la fin, pour la garniture : lardons, champignons et petits oignons cuisent à part et n’arrivent qu’au dernier moment, sinon ils se délitent dans la sauce.",
    "Entre les deux, le four travaille et vous pouvez aller vous promener. Et s’il en reste, il sera encore meilleur le lendemain.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "bœuf bourguignon",
    "recette bœuf bourguignon",
    "bœuf bourguignon traditionnel",
    "bœuf bourguignon au four",
    "bœuf bourguignon en cocotte",
    "quel morceau pour bœuf bourguignon",
    "quel vin pour bœuf bourguignon",
    "temps de cuisson bœuf bourguignon",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 40, cook: 210 },
  difficulty: "Intermédiaire",
  cost: "€€",
  season: ["Automne", "Hiver"],
  tags: ["hiver", "automne"],
  equipment: [
    "cocotte en fonte de 5 à 6 l avec couvercle",
    "une sauteuse et une grande poêle",
    "papier absorbant",
    "papier sulfurisé",
    "saladier (pour la marinade)",
  ],
  ingredients: [
    {
      title: "La viande et ses aromates",
      items: [
        {
          qty: 1500,
          unit: "g",
          name: "bœuf à braiser",
          note: "paleron, joue ou macreuse, en cubes de 5 cm",
          step: 10,
        },
        { qty: 75, unit: "cl", name: "vin rouge de Bourgogne", note: "pinot noir, soit une bouteille", step: 5 },
        { qty: 1, name: "carotte", plural: "carottes", note: "en rondelles épaisses", step: 1 },
        { qty: 1, name: "oignon", plural: "oignons", note: "émincé", step: 1 },
        { qty: 2, unit: "gousse", name: "ail", note: "écrasées", step: 1 },
        { qty: 1, name: "bouquet garni", plural: "bouquets garnis", note: "thym, laurier, queues de persil", step: 1 },
      ],
    },
    {
      title: "La cuisson",
      items: [
        { qty: 3, unit: "cas", name: "huile neutre", note: "tournesol ou pépins de raisin", step: 1 },
        { qty: 30, unit: "g", name: "beurre", step: 5 },
        { qty: 30, unit: "g", name: "farine", step: 5 },
        { qty: 1, unit: "cas", name: "concentré de tomate", step: 0.5, optional: true },
        { qty: 30, unit: "cl", name: "bouillon de bœuf", note: "ou fond de veau, peu salé", step: 5 },
        { name: "sel et poivre du moulin" },
      ],
    },
    {
      title: "La garniture",
      items: [
        { qty: 200, unit: "g", name: "lardons fumés", note: "ou poitrine fumée en bâtonnets", step: 10 },
        { qty: 250, unit: "g", name: "champignons de Paris", note: "petits, entiers ou coupés en quatre", step: 10 },
        {
          qty: 18,
          name: "petit oignon grelot",
          plural: "petits oignons grelots",
          note: "épluchés",
          step: 1,
        },
        { qty: 20, unit: "g", name: "beurre", step: 5 },
        { qty: 1, unit: "cac", name: "sucre en poudre", step: 0.5 },
        { qty: 2, unit: "cas", name: "persil plat", note: "ciselé", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "La veille : la marinade (facultative)",
      steps: [
        {
          title: "Mariner la viande",
          text: "Mettez dans un saladier le bœuf, la carotte, l’oignon, l’ail et le bouquet garni, puis versez le vin par-dessus. Filmez et oubliez au frigo pendant 12 heures. Le lendemain, égouttez la viande en gardant d’un côté le vin, de l’autre les aromates.",
          tip: "Honnêtement, la marinade parfume surtout la surface de la viande. Elle aide à s’organiser la veille, mais c’est la longue cuisson qui fait le goût. Si vous n’avez pas le temps, sautez cette étape.",
        },
      ],
    },
    {
      title: "Saisir",
      steps: [
        {
          title: "Préchauffer et sécher",
          text: "Allumez le four à 150 °C. Épongez chaque morceau de viande au papier absorbant, vraiment bien, puis salez.",
          tip: "Une viande humide ne dore pas, elle bout dans son eau. Si elle sort de la marinade, prenez le temps de la sécher : c’est ce qui fera la croûte.",
        },
        {
          title: "Dorer la viande",
          text: "Faites chauffer l’huile à feu vif dans la cocotte. Saisissez la viande en trois ou quatre fournées, sans tasser les morceaux : 6 à 8 minutes par fournée, en les retournant pour colorer toutes les faces. Ça doit grésiller fort et prendre une croûte brun foncé. Réservez au fur et à mesure, et relancez le minuteur à chaque fournée.",
          timer: { minutes: 7, label: "Coloration (une fournée)" },
        },
        {
          title: "Faire suer les aromates",
          text: "Baissez le feu, ajoutez le beurre, la carotte et l’oignon, et laissez-les suer 5 minutes en grattant le fond avec une cuillère en bois. Ajoutez l’ail et le concentré de tomate, et comptez encore 1 minute.",
          timer: { minutes: 6, label: "Aromates" },
        },
        {
          title: "Fariner et déglacer",
          text: "Remettez la viande avec son jus, saupoudrez de farine et remuez 2 minutes pour que la farine torréfie un peu. Versez le vin, grattez bien les sucs collés au fond et laissez bouillir 2 minutes.",
          timer: { minutes: 4, label: "Farine et vin" },
        },
      ],
    },
    {
      title: "Mijoter",
      steps: [
        {
          title: "Mouiller et enfourner",
          text: "Ajoutez le bouillon jusqu’à presque couvrir la viande, puis le bouquet garni et un tour de poivre. Portez à frémissement, couvrez et enfournez pour 3 heures.",
          timer: { minutes: 180, label: "Cuisson au four" },
          tip: "Au four, la chaleur arrive de tous les côtés. La sauce frémit tranquillement et n’attache pas, vous n’avez pas besoin de la surveiller.",
        },
        {
          title: "Vérifier la cuisson",
          text: "La viande est prête quand elle cède sous le dos d’une cuillère. Si la sauce vous semble trop liquide, sortez la viande et faites réduire la sauce à découvert sur le feu, 10 minutes environ, jusqu’à ce qu’elle nappe la cuillère, puis remettez la viande.",
          timer: { minutes: 10, label: "Réduction de la sauce" },
        },
      ],
    },
    {
      title: "La garniture",
      steps: [
        {
          title: "Glacer les oignons",
          text: "Pendant la dernière heure, mettez les oignons grelots dans une sauteuse avec 10 g de beurre, le sucre, une pincée de sel et de l’eau à mi-hauteur. Couvrez d’un rond de papier sulfurisé et laissez cuire 20 minutes environ, jusqu’à ce que l’eau ait disparu, puis roulez-les dans le jus qui caramélise.",
          timer: { minutes: 20, label: "Oignons glacés" },
        },
        {
          title: "Dorer lardons et champignons",
          text: "Faites revenir les lardons à sec dans la grande poêle pendant 5 minutes. Ajoutez 10 g de beurre et les champignons, et faites-les sauter 6 à 7 minutes à feu vif, jusqu’à ce qu’ils soient bien dorés. S’ils rendent de l’eau, continuez : elle va s’évaporer.",
          timer: { minutes: 12, label: "Lardons et champignons" },
        },
        {
          title: "Assembler",
          text: "Retirez le bouquet garni, versez la garniture dans la cocotte et laissez mijoter le tout 10 minutes. Goûtez, rectifiez le sel et le poivre, et parsemez de persil au moment de servir.",
          timer: { minutes: 10, label: "Mijotage final" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi trois heures",
      text: "Le paleron et la joue sont pleins de tissu conjonctif, c’est ce qui les rend durs à la poêle. Maintenu longtemps au-delà de 70 °C environ dans un milieu humide, le collagène de ce tissu se transforme en gélatine. La viande devient fondante et la sauce prend du corps.",
    },
    {
      title: "La croûte, c’est du goût",
      text: "La couleur brune qui se forme à forte chaleur vient de la réaction de Maillard, entre les sucres et les acides aminés de la viande. Elle produit une foule d’arômes. Une viande mouillée reste bloquée autour de 100 °C et ne dore pas, d’où l’intérêt de la sécher et de ne pas surcharger la cocotte.",
    },
    {
      title: "Ça doit frémir, pas bouillir",
      text: "À 150 °C au four, le liquide frémit à peine. Une ébullition franche contracte les fibres de la viande, qui rejettent leur jus. On obtient alors des morceaux secs et filandreux, même s’ils baignent dans la sauce.",
    },
  ],
  tips: [
    "Demandez deux morceaux à votre boucher, du paleron et de la joue par exemple. L’un garde sa tenue, l’autre fond.",
    "Coupez de gros cubes, 5 cm environ. Plus petits, ils sèchent avant d’être tendres.",
    "Prenez un vin que vous auriez plaisir à boire. La cuisson concentre ses qualités, et ses défauts aussi.",
    "Faites-le la veille. Après une nuit au frigo, le gras fige en surface et s’enlève à la cuillère, et la sauce a plus de goût.",
    "Pour accompagner, des pommes vapeur, une purée ou des tagliatelles fraîches. Il faut quelque chose pour la sauce.",
  ],
  mistakes: [
    "Mettre toute la viande d’un coup dans la cocotte. La température chute, la viande rend son eau et bout au lieu de dorer.",
    "Laisser bouillir à gros bouillons. La viande sèche, même noyée dans la sauce.",
    "Ajouter les champignons et les oignons dès le début. Au bout de trois heures, il n’en reste pas grand-chose.",
    "Couper la viande en petits dés pour aller plus vite. Elle sèche avant d’avoir eu le temps de devenir tendre.",
  ],
  variations: [
    {
      title: "Tout en joue de bœuf",
      text: "La joue a encore plus de collagène et devient très fondante. Comptez 30 minutes de cuisson en plus.",
    },
    {
      title: "À l’autocuiseur",
      text: "Faites dorer et déglacer comme d’habitude, puis comptez environ 50 minutes sous pression. Si la sauce est trop liquide à l’ouverture, faites-la réduire quelques minutes à découvert.",
    },
    {
      title: "Avec plus de carottes",
      text: "Ajoutez trois carottes coupées en gros tronçons pour la dernière heure. Elles prennent le goût de la sauce sans tomber en purée.",
    },
  ],
  storage:
    "Il se garde 3 jours au frigo dans une boîte fermée, et 3 mois au congélateur. Réchauffez-le doucement, à couvert, sur feu doux ou au four à 140 °C.",
  pairing:
    "Le même vin que dans la sauce, ou un voisin : un bourgogne rouge, un hautes-côtes-de-nuits ou un givry par exemple.",
  faq: [
    {
      q: "Quel morceau de bœuf choisir pour un bœuf bourguignon ?",
      a: "Un morceau qui supporte les cuissons longues : paleron, joue, macreuse ou gîte. Mélanger deux morceaux donne une texture plus intéressante. Votre boucher saura vous conseiller.",
    },
    {
      q: "Quel vin utiliser pour un bœuf bourguignon ?",
      a: "Un pinot noir de Bourgogne fruité et pas trop tannique, d’une qualité correcte, comme un bourgogne rouge ou un vin de la Côte chalonnaise. Évitez les vins très boisés : leur amertume se concentre à la cuisson.",
    },
    {
      q: "Faut-il faire mariner le bœuf la veille ?",
      a: "Non, ce n’est pas indispensable. La marinade parfume surtout la surface de la viande, et c’est la longue cuisson dans le vin qui apporte le goût.",
    },
    {
      q: "Combien de temps faut-il cuire un bœuf bourguignon ?",
      a: "Comptez environ 3 heures au four à 150 °C en cocotte fermée, ou 2 h 30 à 3 h à petit frémissement sur le feu. Il est prêt quand la viande se défait à la cuillère.",
    },
    {
      q: "Peut-on préparer le bœuf bourguignon à l’avance ?",
      a: "Oui, et c’est même mieux. Une nuit au frigo lui donne plus de goût et une sauce plus liée. Il se garde 3 jours au frais.",
    },
    {
      q: "Comment épaissir la sauce du bœuf bourguignon ?",
      a: "Retirez la viande et faites réduire la sauce à découvert. Si vous êtes pressé, fouettez-y un beurre manié (10 g de beurre écrasé avec 10 g de farine) et laissez frémir 2 minutes.",
    },
  ],
  nutrition: {
    calories: 680,
    protein: 58,
    fat: 36,
    saturatedFat: 14,
    carbs: 16,
    sugar: 7,
    fiber: 3,
    sodium: 1100,
  },
  annotations: {
    hero: "trois heures de four doux",
    detail: "la viande cède à la cuillère",
  },
  images: {
    heroAlt: "Bœuf bourguignon dans une petite cocotte en fonte orange tenue à deux mains, avec un brin de romarin",
    detailAlt: "Morceaux de bœuf braisé nappés de sauce au vin, champignons et ciboulette sur une purée",
    credits: {
      hero: {
        photographer: "furkanfdemir",
        url: "https://www.pexels.com/photo/person-holding-orange-pot-with-cooked-food-7239431/",
      },
      detail: {
        photographer: "Shameel Mukkath",
        url: "https://www.pexels.com/photo/close-up-of-meat-dish-on-plate-5638533/",
      },
    },
  },
  datePublished: "2026-10-09",
  dateModified: "2026-11-10",
  featured: true,
  hero,
  detail,
  theme: {
    accent: "#8E1F2F",
    onAccent: "#ffffff",
    ink: "#8E1F2F",
    tint: "#F8ECEC",
    deep: "#1C090C",
    focus: "50% 46%",
  },
});
