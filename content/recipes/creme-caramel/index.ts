import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "creme-caramel",
  title: "Crème caramel",
  seoTitle: "Crème caramel maison, bien lisse et facile à démouler",
  tagline: "Elle tient debout, le caramel coule autour.",
  description:
    "Crème caramel pour 6 ramequins : un caramel ambré, 500 ml de lait à la vanille, 4 œufs entiers, 35 à 40 minutes au bain-marie à 150 °C et 4 h au frais.",
  summary:
    "Pour 6 ramequins, faites un caramel ambré avec 120 g de sucre et 3 cas d’eau et nappez-en le fond. Infusez une gousse de vanille dans 500 ml de lait entier, versez-le sur 4 œufs battus avec 80 g de sucre, filtrez, puis faites cuire 35 à 40 minutes au bain-marie dans un four à 150 °C. Après 4 heures au réfrigérateur, démoulez. Comptez 6 h en tout, dont 4 h au froid.",
  intro: [
    "La crème caramel, ou crème renversée, est une crème de lait et d’œufs entiers cuite sur un fond de caramel, puis retournée sur l’assiette. Les blancs d’œufs lui donnent assez de tenue pour rester debout une fois démoulée, et le caramel durci au fond des ramequins s’est changé en sauce pendant la nuit.",
    "Elle rate de deux façons : un caramel poussé trop loin, qui rend tout amer, et une cuisson trop chaude, qui troue la crème de petites bulles et la fait pleurer.",
    "La parade tient en un bain-marie dont l’eau ne bout jamais, et un four réglé à 150 °C.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "crème caramel",
    "recette crème caramel",
    "crème renversée",
    "crème caramel maison",
    "crème caramel au four",
    "crème caramel facile",
    "comment démouler une crème caramel",
    "crème caramel ramequin",
  ],
  diet: ["vegetarian", "glutenFree"],
  servings: 6,
  servingsLabel: { one: "ramequin", other: "ramequins" },
  times: { prep: 25, cook: 50, rest: 285 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Toute l’année"],
  tags: ["fete-des-grands-meres"],
  equipment: [
    "6 ramequins de 150 ml",
    "petite casserole à fond épais",
    "plat à four assez haut pour le bain-marie",
    "passoire fine",
    "fouet",
  ],
  ingredients: [
    {
      title: "Le caramel",
      items: [
        { qty: 120, unit: "g", name: "sucre en poudre", step: 10 },
        { qty: 3, unit: "cas", name: "eau" },
      ],
    },
    {
      title: "La crème",
      items: [
        { qty: 500, unit: "ml", name: "lait entier", step: 50 },
        { qty: 1, name: "gousse de vanille", plural: "gousses de vanille", step: 1 },
        { qty: 4, name: "œuf", plural: "œufs", note: "gros, à température ambiante", step: 1 },
        { qty: 80, unit: "g", name: "sucre en poudre", step: 5 },
      ],
    },
  ],
  method: [
    {
      title: "Le caramel",
      steps: [
        {
          title: "Cuire le caramel",
          text: "Mettez le sucre et l’eau dans la petite casserole et chauffez à feu moyen, sans remuer. Quand la couleur apparaît sur les bords, faites seulement tourner la casserole. Comptez 8 à 10 minutes. Arrêtez dès qu’il est ambré, couleur de thé fort : il fonce encore un peu hors du feu.",
          timer: { minutes: 10, label: "Caramel" },
          tip: "Brun acajou, il est déjà amer. S’il fume, il est brûlé : recommencez.",
        },
        {
          title: "Napper les ramequins",
          text: "Versez aussitôt le caramel dans les ramequins, environ 1 cas par ramequin, et faites-les tourner pour en couvrir le fond. Il durcit en quelques secondes, c’est normal : il redeviendra liquide au contact de la crème. Il est brûlant, tenez les ramequins avec un torchon.",
        },
      ],
    },
    {
      title: "La crème",
      steps: [
        {
          title: "Infuser le lait",
          text: "Fendez la gousse de vanille, grattez les graines et mettez le tout dans une casserole avec le lait. Portez à frémissement, retirez du feu, couvrez et laissez infuser 15 minutes. Pendant ce temps, allumez le four à 150 °C en chaleur statique et faites chauffer de l’eau pour le bain-marie.",
          timer: { minutes: 15, label: "Infusion de la vanille" },
        },
        {
          title: "Mélanger œufs et sucre",
          text: "Dans un saladier, mélangez les œufs et le sucre au fouet, juste assez pour casser les blancs, sans faire mousser. Retirez la gousse de vanille et versez le lait tiède petit à petit, en remuant doucement.",
        },
        {
          title: "Filtrer et remplir",
          text: "Passez la crème dans la passoire fine au-dessus d’un pichet. Retirez la mousse en surface avec une cuillère, puis répartissez la crème dans les ramequins, sur le caramel durci.",
          tip: "La passoire retient les filaments de blanc ; la mousse laissée en surface ferait des bulles sur le dessus.",
        },
        {
          title: "Cuire au bain-marie",
          text: "Posez un torchon plié au fond du plat, rangez les ramequins dessus et versez de l’eau très chaude, mais pas bouillante, jusqu’à mi-hauteur. Enfournez pour 35 à 40 minutes à 150 °C. L’eau ne doit jamais bouillir : si elle se met à frémir, versez-y un peu d’eau froide.",
          timer: { minutes: 35, label: "Bain-marie au four" },
          tip: "Le torchon évite que le fond des ramequins touche le plat brûlant.",
        },
        {
          title: "Vérifier la prise",
          text: "Secouez doucement un ramequin : les bords sont pris et le centre bouge légèrement, d’un seul bloc, sans vague liquide. Si le centre ondule encore comme un liquide, prolongez de 5 minutes et vérifiez de nouveau.",
          timer: { minutes: 5, label: "Cuisson supplémentaire" },
        },
        {
          title: "Laisser refroidir",
          text: "Sortez les ramequins du bain-marie et laissez-les refroidir 30 minutes à température ambiante, jusqu’à ce qu’ils soient tièdes au toucher.",
          timer: { minutes: 30, label: "Refroidissement" },
        },
        {
          title: "Réfrigérer",
          text: "Couvrez les ramequins et placez-les au moins 4 heures au réfrigérateur, idéalement une nuit. La crème se raffermit et le caramel du fond se liquéfie.",
          timer: { minutes: 240, label: "Au réfrigérateur" },
        },
        {
          title: "Démouler",
          text: "Passez la lame d’un couteau fin tout autour de la crème en l’appuyant contre la paroi. Posez une assiette creuse à l’envers sur le ramequin, retournez le tout d’un geste franc et soulevez : la crème glisse et le caramel coule autour. Si elle résiste, trempez le fond du ramequin 30 secondes dans l’eau chaude.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Couleur et amertume montent ensemble",
      text: "Quand l’eau s’est évaporée, le sucre fond puis se décompose au-delà de 160 °C environ, en produisant des centaines de composés aromatiques. Plus il fonce, plus il y a d’amertume. Un caramel ambré garde l’équilibre ; brun foncé, l’amertume domine, et elle se voit encore plus sur une crème pâle.",
    },
    {
      title: "Pourquoi l’eau ne doit pas bouillir",
      text: "Diluées dans le lait, les protéines de l’œuf prennent autour de 80 °C. Plus chaudes, elles se resserrent trop, chassent l’eau qu’elles retenaient et laissent de petits trous : la crème devient granuleuse et rend du liquide. Le bain-marie limite la température autour des ramequins à celle de l’eau, sous les 100 °C.",
    },
    {
      title: "Le caramel qui redevient sauce",
      text: "Le caramel durci est du sucre très concentré, qui attire l’humidité. Au contact de la crème, pendant la cuisson puis la nuit au frais, il en absorbe l’eau et se dissout en partie : on retrouve au démoulage une sauce fluide. Une fine couche reste souvent collée au fond, c’est normal.",
    },
  ],
  tips: [
    "Pour nettoyer la casserole du caramel, remplissez-la d’eau et portez à ébullition : il se dissout tout seul.",
    "Battez les œufs à la fourchette ou au fouet tenu mollement : toute bulle d’air finit en trou sur le dessus de la crème.",
    "Préparez-les la veille : après une nuit au froid, la crème est plus ferme et il y a davantage de sauce.",
    "Choisissez des ramequins en porcelaine ou en verre à bords droits, de 150 ml : la crème cuit de façon égale et se démoule nette.",
  ],
  mistakes: [
    "Un caramel trop foncé : il donne une sauce amère, et il n’y a pas de rattrapage. Recommencez, en l’arrêtant à l’ambré.",
    "Un caramel qui devient blanc et sableux : on l’a remué, ou un cristal de sucre est retombé dedans. Ajoutez 2 cas d’eau, laissez fondre à feu doux, puis reprenez la cuisson sans toucher.",
    "Une crème trouée et granuleuse : le four était trop chaud ou l’eau a bouilli. La prochaine fois, baissez à 140 °C et surveillez le bain-marie.",
    "Un démoulage trop tôt : la crème se fend et le caramel reste collé au fond. Comptez 4 heures de froid au minimum.",
  ],
  variations: [
    {
      title: "En grand moule",
      text: "Versez tout le caramel dans un moule à charlotte de 18 cm (1 l), puis la crème. Comptez 50 à 60 minutes à 150 °C au bain-marie, et 6 heures au réfrigérateur avant de démouler sur un plat creux.",
    },
    {
      title: "Au café",
      text: "Remplacez la vanille par 2 cac de café soluble dissous dans le lait chaud, sans infusion. Le café et le caramel se répondent bien.",
    },
    {
      title: "À l’orange",
      text: "Faites infuser le zeste d’une orange non traitée, prélevé en larges rubans, avec la vanille ou à sa place, 15 minutes comme dans la recette, puis filtrez.",
    },
  ],
  storage:
    "Les crèmes caramel se gardent 3 jours au réfrigérateur, filmées, dans leur ramequin : démoulez-les au moment de servir. Elles ne se congèlent pas, la crème rend son eau et devient granuleuse.",
  pairing: "Elle se suffit à elle-même. Quelques tuiles aux amandes ou des sablés à côté, et un café serré.",
  faq: [
    {
      q: "Quelle est la différence entre crème caramel et crème brûlée ?",
      a: "La crème caramel est faite de lait et d’œufs entiers, cuite sur un fond de caramel et démoulée : elle tient debout. La crème brûlée est faite de crème et de jaunes seulement, elle est plus riche et trop souple pour être démoulée : on la mange dans son plat, sous une fine couche de sucre caramélisé au chalumeau.",
    },
    {
      q: "Pourquoi ma crème caramel a-t-elle des trous ?",
      a: "Parce qu’elle a cuit trop chaud. Au-delà de 80 °C environ, les protéines de l’œuf se resserrent et chassent l’eau, ce qui laisse de petites bulles. Gardez le four à 150 °C, versez de l’eau chaude mais pas bouillante dans le bain-marie et ne la laissez jamais bouillir.",
    },
    {
      q: "Comment démouler une crème caramel sans la casser ?",
      a: "Attendez 4 heures de froid au minimum. Passez un couteau fin tout autour en l’appuyant contre la paroi, posez l’assiette à l’envers sur le ramequin et retournez d’un geste franc. Si elle ne vient pas, trempez le fond 30 secondes dans l’eau chaude.",
    },
    {
      q: "Pourquoi le caramel reste-t-il collé au fond du ramequin ?",
      a: "Le plus souvent parce que la crème n’a pas assez reposé au froid : il faut une nuit pour que le caramel se dissolve bien. Une fine pellicule reste toujours au fond. Pour la récupérer, mettez un peu d’eau chaude dans le ramequin vide, remuez et versez ce sirop sur la crème.",
    },
    {
      q: "Crème caramel et flan, c’est la même chose ?",
      a: "Oui et non. En Espagne et en Amérique latine, le flan désigne cette même crème renversée au caramel. En France, le flan pâtissier est autre chose : une crème épaissie à la fécule ou à la farine, souvent cuite sur une pâte et servie en parts.",
    },
    {
      q: "Combien de temps se conserve une crème caramel ?",
      a: "3 jours au réfrigérateur, couverte, dans son ramequin. Démoulez-la au dernier moment : à l’air, la sauce s’étale et la crème sèche en surface. Elle ne supporte pas la congélation.",
    },
  ],
  nutrition: { calories: 235, protein: 7, fat: 6, saturatedFat: 3, carbs: 37, sugar: 37, fiber: 0, sodium: 85 },
  annotations: { hero: "ambré, pas brun", detail: "ferme, mais tremblante à la cuillère" },
  images: {
    heroAlt:
      "Crème caramel démoulée sur une assiette blanche, nappée d’un caramel ambré qui s’étale autour, avec une feuille de menthe",
    detailAlt:
      "Une cuillère entame une crème caramel démoulée, entourée de sauce caramel, sur une assiette en céramique",
    credits: {
      hero: {
        photographer: "Võ Văn Tiến",
        url: "https://www.pexels.com/photo/delicious-vietnamese-flan-with-caramel-sauce-29819833/",
      },
      detail: {
        photographer: "Gu Ko",
        url: "https://www.pexels.com/photo/delicious-caramel-flan-with-spoon-in-cafe-31872297/",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#C9791C",
    onAccent: "#1B1712",
    ink: "#8A4E0C",
    tint: "#FBF1E3",
    deep: "#1C1208",
    focus: "50% 55%",
  },
});
