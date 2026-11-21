import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "pad-thai",
  title: "Pad thaï",
  seoTitle: "Pad thaï maison aux crevettes, sauce au tamarin",
  tagline: "Tout est prêt avant d’allumer le feu.",
  description:
    "Pad thaï pour 4 : 250 g de nouilles de riz trempées à l’eau tiède, sauce tamarin, sucre de palme et nuoc-mâm, crevettes, tofu, œuf et cacahuètes, au wok.",
  summary:
    "Pour 4 personnes, faites tremper 250 g de nouilles de riz plates 30 minutes dans l’eau tiède, sans les cuire. Mélangez 60 g de pâte de tamarin, 60 g de sucre de palme et 5 cl de sauce poisson. Au wok très chaud, en deux fournées, saisissez 300 g de crevettes, ajoutez nouilles et sauce, brouillez les œufs, finissez avec tofu doré, pousses de soja, oignons nouveaux et cacahuètes. Comptez 1 h 15, dont 30 minutes de trempage.",
  intro: [
    "Le pad thaï, ce sont des nouilles de riz plates sautées au wok dans une sauce aigre-douce au tamarin, avec de l’œuf, du tofu, des crevettes ou du poulet. Des pousses de soja encore croquantes, des cacahuètes concassées et un quartier de citron vert finissent l’assiette.",
    "Ce qui le fait rater, ce sont presque toujours les nouilles. Bouillies comme des pâtes, elles se cassent et collent en paquet. Trempées dans l’eau tiède, elles restent souples et finissent de cuire dans la sauce, qu’elles boivent au lieu de nager dedans.",
    "L’autre règle : tout est coupé, pesé et rangé près du feu avant d’allumer, et on ne fait jamais plus de deux portions à la fois. Un wok trop chargé refroidit, et les nouilles cuisent à l’étouffée.",
  ],
  category: "Plat",
  cuisine: "Thaïlandaise",
  keywords: [
    "pad thaï",
    "recette pad thaï",
    "pad thaï crevettes",
    "pad thaï poulet",
    "pad thaï maison",
    "sauce pad thaï",
    "pad thaï au tamarin",
    "nouilles de riz sautées",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 20, cook: 25, rest: 30 },
  difficulty: "Intermédiaire",
  cost: "€€",
  season: ["Toute l’année"],
  tags: [],
  equipment: ["wok de 32 cm ou grande poêle en acier", "spatule de wok", "petite casserole", "saladier"],
  ingredients: [
    {
      title: "Les nouilles",
      items: [{ qty: 250, unit: "g", name: "nouilles de riz plates", note: "larges de 3 à 5 mm", step: 25 }],
    },
    {
      title: "La sauce",
      items: [
        { qty: 60, unit: "g", name: "pâte de tamarin", note: "pulpe sans graines, en pot", step: 5 },
        { qty: 60, unit: "g", name: "sucre de palme", note: "râpé, ou sucre roux", step: 5 },
        { qty: 5, unit: "cl", name: "sauce poisson", note: "nuoc-mâm", step: 1 },
      ],
    },
    {
      title: "La garniture",
      items: [
        { qty: 200, unit: "g", name: "tofu ferme", note: "nature", step: 25 },
        {
          qty: 300,
          unit: "g",
          name: "crevettes crues",
          note: "décortiquées, ou 350 g de blanc de poulet",
          step: 25,
        },
        { qty: 2, unit: "gousse", name: "ail", step: 1 },
        { qty: 1, name: "échalote", plural: "échalotes", step: 1 },
        { qty: 4, name: "oignon nouveau", plural: "oignons nouveaux", step: 1 },
        { qty: 5, unit: "cas", name: "huile neutre", note: "arachide ou tournesol", step: 1 },
        { qty: 4, name: "œuf", plural: "œufs", step: 1 },
        { qty: 200, unit: "g", name: "pousses de soja", note: "fraîches", step: 25 },
        { qty: 60, unit: "g", name: "cacahuètes grillées", note: "non salées", step: 10 },
        { qty: 2, name: "citron vert", plural: "citrons verts", step: 1 },
        { qty: 1, unit: "cac", name: "piment en flocons", step: 1, optional: true },
      ],
    },
  ],
  method: [
    {
      title: "La mise en place",
      steps: [
        {
          title: "Tremper les nouilles",
          text: "Couvrez les nouilles d’eau tiède, autour de 40 °C (chaude au robinet, pas bouillante), et laissez-les 30 minutes. Elles sont prêtes quand elles se plient sans casser tout en restant blanches et fermes au centre. Égouttez-les et laissez-les dans la passoire.",
          timer: { minutes: 30, label: "Trempage des nouilles" },
          tip: "Ne les faites jamais bouillir : elles finissent de cuire dans le wok.",
        },
        {
          title: "Préparer la sauce",
          text: "Dans la petite casserole, chauffez à feu doux la pâte de tamarin, le sucre de palme et la sauce poisson pendant 2 à 3 minutes en remuant, juste jusqu’à ce que le sucre ait fondu. Goûtez : c’est acide d’abord, puis sucré et salé, et assez fort, car la sauce assaisonne toutes les nouilles.",
          timer: { minutes: 3, label: "Sucre fondu" },
        },
        {
          title: "Tout couper d’avance",
          text: "Coupez le tofu en cubes de 1,5 cm et épongez-le, épongez aussi les crevettes. Hachez l’ail et l’échalote. Coupez les oignons nouveaux en tronçons de 4 cm, blancs d’un côté, verts de l’autre. Concassez les cacahuètes, coupez les citrons verts en quartiers. Partagez tout en deux tas, un par fournée, à côté du feu.",
          tip: "Une fois le wok chaud, une fournée prend 6 minutes : il n’y a plus le temps de couper.",
        },
        {
          title: "Dorer le tofu",
          text: "Faites chauffer le wok à feu vif jusqu’à ce qu’il fume légèrement, ajoutez 1 cuillerée à soupe d’huile et le tofu. Laissez-le dorer 4 à 5 minutes en le retournant de temps en temps, jusqu’à ce qu’il soit blond et ferme sur toutes ses faces. Réservez-le sur une assiette.",
          timer: { minutes: 5, label: "Tofu doré" },
        },
      ],
    },
    {
      title: "Au wok, en deux fournées",
      steps: [
        {
          title: "Saisir les crevettes",
          text: "Remettez le wok à feu vif avec 2 cuillerées à soupe d’huile. Jetez-y la moitié de l’ail, de l’échalote et des blancs d’oignon, remuez 30 secondes, puis la moitié des crevettes. Faites-les sauter 1 à 2 minutes, jusqu’à ce qu’elles soient roses et opaques.",
          timer: { minutes: 2, label: "Crevettes roses" },
        },
        {
          title: "Ajouter nouilles et sauce",
          text: "Ajoutez la moitié des nouilles et la moitié de la sauce. Remuez sans arrêt avec la spatule pendant 2 à 3 minutes : les nouilles boivent la sauce, deviennent souples et brillantes. Si elles restent raides, versez 2 cuillerées à soupe d’eau et continuez.",
          timer: { minutes: 3, label: "Nouilles dans la sauce" },
          tip: "Soulevez et retournez par le fond plutôt que de tourner en rond : les nouilles cassent moins.",
        },
        {
          title: "Brouiller les œufs",
          text: "Poussez les nouilles sur un côté du wok. Cassez 2 œufs dans l’espace libre, laissez-les prendre 20 secondes, puis brouillez-les grossièrement à la spatule et mélangez-les aux nouilles dès qu’ils ne coulent plus.",
        },
        {
          title: "Finir et servir",
          text: "Ajoutez la moitié du tofu, des pousses de soja et des verts d’oignon. Mélangez 30 secondes à peine : les pousses doivent rester croquantes. Servez aussitôt avec les cacahuètes, le citron vert et le piment à part. Essuyez le wok et recommencez pour la seconde fournée.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Des nouilles déjà cuites",
      text: "Les nouilles de riz sèches sont faites d’une pâte de riz cuite à la vapeur puis séchée : il suffit de les réhydrater. Trempées à l’eau tiède, elles prennent juste assez d’eau pour s’assouplir et gardent de la place pour la sauce. Bouillies, elles se gorgent d’eau, ramollissent en surface et se cassent.",
    },
    {
      title: "Pourquoi deux fournées",
      text: "Des ingrédients froids et humides font chuter la température du wok. Trop chargé, il n’évapore plus l’eau assez vite : tout mijote dans son jus au lieu de saisir. Avec la moitié des ingrédients, le métal reste brûlant et les nouilles prennent ce léger goût grillé.",
    },
    {
      title: "L’équilibre de la sauce",
      text: "Le tamarin apporte l’acidité, surtout de l’acide tartrique, avec un goût fruité. Le sucre la tempère. La sauce poisson, faite d’anchois fermentés, apporte le sel et le glutamate qui donne de la longueur en bouche. Retirer l’un des trois déséquilibre tout le plat.",
    },
  ],
  tips: [
    "Goûtez la sauce avant de commencer : selon les marques, la pâte de tamarin va du doux au très acide. Rattrapez avec un peu de sucre ou de sauce poisson.",
    "Épongez bien tofu et crevettes. Mouillés, ils éclaboussent et refroidissent le wok.",
    "Prenez une huile qui supporte la chaleur, arachide ou tournesol. Le beurre et l’huile d’olive brûlent au feu vif du wok.",
    "Préparez les deux fournées dans des bols identiques : on reproduit la première sans réfléchir.",
  ],
  mistakes: [
    "Faire bouillir les nouilles : elles se cassent et collent. Si c’est fait, rincez-les à l’eau froide, égouttez-les longuement et ajoutez-les en dernier, juste le temps de les réchauffer.",
    "Tout cuire en une seule fois : le wok refroidit, les nouilles baignent dans un jus pâle. Deux fournées, wok essuyé et remis à chauffer entre les deux.",
    "Ajouter les pousses de soja trop tôt : elles rendent leur eau et deviennent molles. Elles n’ont besoin que de 30 secondes à la fin.",
    "Servir un poulet rosé : en lamelles de 5 mm, il lui faut 3 à 4 minutes de cuisson par fournée, jusqu’à 74 °C à cœur.",
  ],
  variations: [
    {
      title: "Au poulet",
      text: "Remplacez les crevettes par 350 g de blanc de poulet en lamelles de 5 mm. Faites-le sauter 3 à 4 minutes par fournée, jusqu’à ce qu’il soit blanc à cœur et atteigne 74 °C, avant d’ajouter les nouilles.",
    },
    {
      title: "Végétarien",
      text: "Doublez le tofu (400 g) et supprimez les crevettes. Remplacez la sauce poisson par 4 cuillerées à soupe de sauce soja claire. Gardez les œufs, ou supprimez-les pour une version végétalienne.",
    },
    {
      title: "Avec crevettes séchées et radis salé",
      text: "Ajoutez avec l’ail 2 cuillerées à soupe de petites crevettes séchées et 2 cuillerées à soupe de radis salé sucré haché, qu’on trouve en épicerie asiatique. Le goût devient plus profond, plus salé : réduisez la sauce poisson d’une cuillerée.",
    },
  ],
  storage:
    "Le pad thaï se mange à la sortie du wok. Les restes se mettent au réfrigérateur dans les 2 heures, dans une boîte fermée, et se gardent 24 heures au plus ; réchauffez-les au wok avec une cuillerée d’eau jusqu’à ce que tout soit brûlant. Ne le congelez pas, les nouilles se brisent. La sauce seule se garde une semaine au réfrigérateur, en bocal.",
  pairing: "Une bière blonde bien fraîche, ou un riesling sec dont l’acidité répond à celle du tamarin.",
  faq: [
    {
      q: "Faut-il faire cuire les nouilles de riz pour un pad thaï ?",
      a: "Non. Faites-les tremper 30 minutes dans de l’eau tiède, autour de 40 °C, jusqu’à ce qu’elles se plient sans casser en restant fermes au centre. Elles finissent de cuire dans le wok avec la sauce. Bouillies, elles se cassent et collent.",
    },
    {
      q: "Peut-on remplacer la pâte de tamarin par du citron vert ?",
      a: "Oui, en dépannage : 3 cuillerées à soupe de jus de citron vert à la place des 60 g de tamarin, avec une cuillerée à soupe de sucre en plus. L’acidité y est, mais le goût fruité et brun du tamarin manque, et la sauce est plus claire.",
    },
    {
      q: "Peut-on faire un pad thaï sans cacahuètes ?",
      a: "Oui. Les cacahuètes sont un allergène majeur : servez-les à part, ou remplacez-les par des graines de sésame grillées. Pour une personne allergique, prenez aussi une huile de tournesol, puisque l’huile d’arachide vient de la cacahuète, et vérifiez l’étiquette de la sauce poisson.",
    },
    {
      q: "Comment savoir si le poulet est cuit dans un pad thaï ?",
      a: "74 °C à cœur, mesurés au thermomètre sur la plus épaisse des lamelles. Sans thermomètre, coupez-en une : la chair doit être blanche jusqu’au centre, sans trace rosée, et le jus clair. En lamelles de 5 mm, comptez 3 à 4 minutes au wok très chaud.",
    },
    {
      q: "Peut-on faire un pad thaï sans wok ?",
      a: "Oui, dans une grande poêle en acier ou en fonte bien chaude. Elle garde moins la chaleur sur les bords : faites quatre fournées d’une portion au lieu de deux, en partageant ingrédients et sauce en quatre.",
    },
    {
      q: "Peut-on remplacer le sucre de palme par du sucre roux ?",
      a: "Oui, au même poids. La cassonade ou la vergeoise brune donnent un goût un peu plus caramélisé ; le sucre blanc marche aussi, la sauce est juste moins ronde.",
    },
  ],
  nutrition: {
    calories: 710,
    protein: 36,
    fat: 26,
    saturatedFat: 5,
    carbs: 82,
    sugar: 22,
    fiber: 4,
    sodium: 1350,
  },
  annotations: { hero: "le citron se presse à table", detail: "cacahuètes à part, pour les allergiques" },
  images: {
    heroAlt:
      "Assiette de pad thaï aux crevettes avec pousses de soja, oignons nouveaux, cacahuètes concassées, piment et citron vert",
    detailAlt:
      "Gros plan sur un pad thaï au tofu et à l’œuf brouillé, avec cacahuètes concassées, pousses de soja et citron vert",
    credits: {
      hero: {
        photographer: "Takeaway",
        url: "https://commons.wikimedia.org/wiki/File:Phat_Thai_kung_Chang_Khien_street_stall.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
      },
      detail: {
        photographer: "Iudexvivorum",
        url: "https://commons.wikimedia.org/wiki/File:Phat_thai_-_Chiang_Mai_-_2017-07-08_(002).jpg",
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
    accent: "#D9822B",
    onAccent: "#1B1712",
    ink: "#8A4A0F",
    tint: "#FBF0E4",
    deep: "#1A0F06",
    focus: "52% 52%",
  },
});
