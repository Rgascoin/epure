import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "carottes-glacees",
  title: "Carottes glacées",
  seoTitle: "Carottes glacées au beurre, façon Vichy, en 40 minutes",
  tagline: "Elles cuisent dans leur futur glaçage.",
  description:
    "Carottes glacées façon Vichy : 800 g de rondelles cuites 15 à 20 min avec 40 g de beurre, du sucre et un fond d’eau qui finit en glaçage brillant.",
  summary:
    "Pour 4 personnes, coupez 800 g de carottes en rondelles de 5 mm et mettez-les dans une sauteuse avec 30 cl d’eau, 40 g de beurre, 1 cas de sucre et du sel. Couvrez d’un disque de papier cuisson et laissez frémir 15 à 20 minutes, jusqu’à ce que l’eau ait presque disparu. Faites-les sauter encore 2 à 3 minutes : le fond de cuisson devient un glaçage brillant. Comptez 40 minutes en tout.",
  intro: [
    "Les carottes glacées cuisent dans très peu d’eau, avec du beurre et un peu de sucre. L’eau s’évapore pendant que les carottes cuisent, et ce qui reste au fond de la sauteuse devient un sirop beurré qui les fait briller. On les appelle aussi carottes Vichy, du nom de l’eau minérale dans laquelle on les cuisait autrefois.",
    "Tout repose sur un calcul simple : l’eau doit finir de s’évaporer au moment où les carottes finissent de cuire. Trop d’eau, elles ramollissent et nagent. Pas assez, le beurre brûle avant qu’elles soient tendres.",
    "Pour tenir ce rythme, on coupe des rondelles régulières et on pose sur la sauteuse un disque de papier cuisson. Il retient la vapeur sans tout enfermer, comme le ferait un couvercle.",
  ],
  category: "Accompagnement",
  cuisine: "Française",
  keywords: [
    "carottes glacées",
    "recette carottes glacées",
    "carottes vichy",
    "carottes glacées au beurre",
    "carottes glacées au miel",
    "carottes nouvelles glacées",
    "carottes à la poêle",
    "accompagnement carottes",
  ],
  diet: ["vegetarian", "glutenFree"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 15, cook: 25 },
  difficulty: "Facile",
  cost: "€",
  season: ["Printemps"],
  tags: ["paques", "printemps"],
  equipment: ["sauteuse de 28 cm", "papier cuisson", "économe", "couteau de cuisine"],
  ingredients: [
    {
      items: [
        { qty: 800, unit: "g", name: "carottes", note: "nouvelles au printemps", step: 50 },
        { qty: 30, unit: "cl", name: "eau", step: 5 },
        { qty: 40, unit: "g", name: "beurre doux", step: 5 },
        { qty: 1, unit: "cas", name: "sucre en poudre", step: 0.5 },
        { qty: 0.5, unit: "cac", name: "sel fin", step: 0.5 },
        { name: "poivre du moulin" },
        { qty: 10, unit: "g", name: "persil plat", step: 5 },
      ],
    },
  ],
  method: [
    {
      title: "Les carottes",
      steps: [
        {
          title: "Trancher régulièrement",
          text: "Épluchez les carottes, ou brossez-les simplement si ce sont des carottes nouvelles. Coupez-les en rondelles de 5 mm, toutes à la même épaisseur. Si le haut d’une carotte est très large, fendez-le d’abord en deux dans la longueur, pour obtenir des demi-lunes de la taille des autres rondelles.",
          tip: "Une rondelle de 1 cm met bien plus que deux fois le temps d’une rondelle de 5 mm à cuire. La régularité compte plus que la vitesse.",
        },
        {
          title: "Découper une cartouche",
          text: "Découpez un disque de papier cuisson du diamètre de la sauteuse. Pliez-le en quatre et coupez la pointe pour faire un petit trou au centre : la vapeur s’échappera par là.",
        },
        {
          title: "Lancer la cuisson",
          text: "Mettez les carottes dans la sauteuse, ajoutez l’eau, le beurre en morceaux, le sucre et le sel. L’eau doit arriver juste à hauteur des carottes, sans les noyer. Posez la cartouche directement sur les carottes et portez à ébullition sur feu moyen-vif.",
        },
        {
          title: "Cuire sous la cartouche",
          text: "Laissez cuire 15 à 20 minutes à bon frémissement, en secouant la sauteuse de temps en temps. Elles sont prêtes quand il ne reste qu’un fond de liquide sirupeux et qu’une rondelle s’écrase sous la fourchette en gardant un léger croquant au centre.",
          timer: { minutes: 15, label: "Cuisson sous la cartouche" },
          tip: "Si l’eau a disparu avant que les carottes soient tendres, ajoutez 3 ou 4 cas d’eau. Si elles sont cuites et nagent encore, retirez la cartouche et montez le feu.",
        },
        {
          title: "Glacer",
          text: "Retirez la cartouche. Sur feu moyen, faites sauter les carottes 2 à 3 minutes en secouant la sauteuse, jusqu’à ce que le fond de cuisson devienne un sirop brillant qui les enrobe toutes. Arrêtez dès qu’il commence à blondir sur les bords.",
          timer: { minutes: 3, label: "Glaçage" },
          tip: "Restez devant la sauteuse. Une fois l’eau partie, le glaçage passe de brillant à brûlé en quelques secondes.",
        },
        {
          title: "Finir au persil",
          text: "Hachez le persil. Poivrez les carottes, parsemez-les de persil, remuez une dernière fois et servez aussitôt, avec le glaçage qui reste au fond de la sauteuse.",
        },
      ],
    },
  ],
  science: [
    {
      title: "D’où vient le glaçage",
      text: "En fin de cuisson, il ne reste plus que du beurre, un peu d’eau, le sucre ajouté et celui que les carottes ont libéré. Secoué dans la sauteuse, ce mélange forme une émulsion épaissie par le sucre : elle est assez visqueuse pour napper chaque rondelle d’une couche fine et brillante.",
    },
    {
      title: "À quoi sert la cartouche",
      text: "Le disque de papier ralentit l’évaporation sans la bloquer. Les carottes du dessus cuisent dans la vapeur au lieu de sécher, et le liquide réduit à un rythme qui laisse aux carottes le temps de cuire. Un couvercle garderait toute l’eau ; sans rien, elle partirait trop vite.",
    },
    {
      title: "L’épaisseur décide du temps",
      text: "La chaleur progresse vers le cœur par conduction : le temps nécessaire augmente avec le carré de l’épaisseur. Une rondelle deux fois plus épaisse demande environ quatre fois plus de temps pour cuire à cœur. D’où l’intérêt de rondelles identiques.",
    },
  ],
  tips: [
    "Prenez une sauteuse assez large pour que les carottes ne forment pas plus de trois couches : 28 cm pour 800 g. Dans une petite casserole, l’eau s’évapore trop lentement.",
    "Avec des carottes nouvelles, gardez la peau : brossées sous l’eau, elles ont plus de goût et le glaçage accroche aussi bien.",
    "Pour un repas de fête, arrêtez la cuisson avant le glaçage et laissez-les dans la sauteuse. Au moment de servir, ajoutez une noix de beurre et 2 cas d’eau, et glacez-les 3 minutes.",
    "Coupez-les en biseau plutôt qu’en rondelles droites si vous voulez une présentation plus élégante : même épaisseur, même temps.",
  ],
  mistakes: [
    "Noyer les carottes sous l’eau : elles sont cuites bien avant que le liquide réduise et finissent molles. Retirez-les à l’écumoire, faites réduire le liquide seul à feu vif, puis remettez-les pour les glacer.",
    "Mettre un couvercle : rien ne s’évapore et on obtient des carottes bouillies dans de l’eau sucrée.",
    "Laisser la sauteuse sur feu vif après l’évaporation : le sucre et le beurre brunissent puis brûlent, et le goût devient amer. S’ils commencent à colorer, retirez du feu et ajoutez 2 cas d’eau.",
    "Couper des rondelles d’épaisseurs différentes : les fines se défont pendant que les épaisses restent dures.",
  ],
  variations: [
    {
      title: "Carottes fanes entières",
      text: "Au printemps, prenez 2 bottes de carottes nouvelles, soit environ 800 g une fois les fanes coupées à 2 cm. Brossez-les, fendez les plus grosses en deux dans la longueur, et suivez la même méthode : comptez 12 à 15 minutes sous la cartouche.",
    },
    {
      title: "Au miel et au thym",
      text: "Remplacez le sucre par 1 cas de miel et ajoutez 2 brins de thym avec l’eau. Le miel colore plus vite : surveillez le glaçage dès que l’eau a presque disparu.",
    },
    {
      title: "À l’orange et au cumin",
      text: "Remplacez 15 cl d’eau par 15 cl de jus d’orange et ajoutez une demi-cac de cumin en poudre. Le glaçage est plus acidulé et un peu plus épais. Ajoutez un zeste d’orange avec le persil.",
    },
  ],
  storage:
    "Elles se gardent 3 jours au réfrigérateur dans une boîte fermée. Réchauffez-les à la sauteuse avec 1 cas d’eau et une noix de beurre, 3 à 4 minutes, en secouant : le glaçage se reforme. Elles supportent mal la congélation et ramollissent.",
  pairing: "Avec un gigot d’agneau de Pâques, un poulet rôti, un rôti de veau ou une blanquette.",
  faq: [
    {
      q: "Pourquoi dit-on carottes Vichy ?",
      a: "Parce qu’on les cuisait à l’origine dans l’eau minérale de Vichy. Aujourd’hui, on les prépare presque toujours à l’eau du robinet, avec du beurre et un peu de sucre, et on garde le nom pour cette façon de les cuire en rondelles jusqu’à ce qu’elles soient glacées.",
    },
    {
      q: "Combien de temps faut-il pour cuire des carottes en rondelles ?",
      a: "15 à 20 minutes à frémissement pour des rondelles de 5 mm, puis 2 à 3 minutes pour les glacer. Des carottes nouvelles cuisent plus vite, 12 à 15 minutes. Elles sont prêtes quand une fourchette les écrase en laissant un léger croquant au centre.",
    },
    {
      q: "Peut-on faire des carottes glacées sans sucre ?",
      a: "Oui. Le beurre et les sucres naturels des carottes suffisent à les faire briller, le glaçage est simplement plus fin et un peu moins nappant. Gardez la même quantité d’eau et de beurre.",
    },
    {
      q: "Faut-il éplucher les carottes nouvelles ?",
      a: "Non. Leur peau est fine : brossez-les sous l’eau froide et coupez le bout des fanes. Pour les carottes de garde, plus épaisses et plus terreuses, épluchez-les à l’économe.",
    },
    {
      q: "Peut-on préparer des carottes glacées à l’avance ?",
      a: "Oui. Faites-les cuire sous la cartouche jusqu’à ce que l’eau ait presque disparu, et gardez-les dans la sauteuse, jusqu’à 2 heures à température ambiante ou 3 jours au réfrigérateur. Glacez-les au dernier moment avec une noix de beurre et 2 cas d’eau.",
    },
  ],
  nutrition: {
    calories: 160,
    protein: 2,
    fat: 9,
    saturatedFat: 6,
    carbs: 19,
    sugar: 15,
    fiber: 5,
    sodium: 380,
  },
  annotations: {
    hero: "le fond de cuisson devient glaçage",
    detail: "même épaisseur, même cuisson",
  },
  images: {
    heroAlt:
      "Carottes glacées en rondelles épaisses, brillantes de leur glaçage, servies dans un plat en inox avec une cuillère",
    detailAlt: "Carottes cuites coupées en tronçons réguliers, posées sur une assiette noire et un set de table tressé",
    credits: {
      hero: {
        photographer: "Portal cypr24.eu",
        url: "https://www.pexels.com/photo/glazed-carrots-in-a-serving-tray-close-up-32894086/",
        source: "Pexels",
      },
      detail: {
        photographer: "Alesia Kozik",
        url: "https://www.pexels.com/photo/circular-cut-carrot-pieces-on-black-ceramic-plate-6065914/",
        source: "Pexels",
      },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#E07B24",
    onAccent: "#1B1712",
    ink: "#9A4A0E",
    tint: "#FCEEE2",
    deep: "#1E0F06",
    focus: "60% 70%",
  },
});
