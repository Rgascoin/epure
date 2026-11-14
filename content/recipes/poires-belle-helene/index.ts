import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "poires-belle-helene",
  title: "Poires Belle-Hélène",
  seoTitle: "Poires Belle-Hélène pochées à la vanille, sauce chocolat",
  tagline: "Chaud dessus, froid à côté.",
  description:
    "Poires Belle-Hélène pour 4 : poires entières pochées 25 min dans un sirop vanillé, glace vanille et sauce chaude faite avec 100 g de chocolat noir.",
  summary:
    "Pour 4 personnes, pochez 4 poires épluchées 20 à 30 minutes à petit frémissement dans 1 l d’eau, 200 g de sucre et une gousse de vanille, puis laissez-les refroidir au moins 1 heure dans le sirop. Au moment de servir, versez 12 cl de crème bouillante sur 100 g de chocolat noir et nappez chaque poire de cette sauce chaude, à côté d’une boule de glace à la vanille. Comptez 1 h 55, dont 1 heure de refroidissement.",
  intro: [
    "La poire Belle-Hélène, c’est une poire entière pochée dans un sirop à la vanille, une boule de glace vanille, et une sauce au chocolat noir versée bien chaude par-dessus. Un dessert de brasserie qui se fait très bien à la maison, en grande partie la veille.",
    "Il rate surtout à cause de la poire. Trop mûre, elle se défait dans le sirop ; trop verte, elle reste dure au centre. L’autre écueil, c’est une sauce tiède, qui fige au contact de la glace au lieu de couler.",
    "Prenez des poires fermes de même taille, pochez-les sans faire bouillir, et ne faites la sauce qu’au moment de passer à table.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "poire belle hélène",
    "poires belle hélène",
    "recette poire belle hélène",
    "poires pochées à la vanille",
    "poire pochée sauce chocolat",
    "sauce chocolat maison",
    "comment pocher des poires",
    "dessert poire chocolat",
  ],
  diet: ["vegetarian"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 20, cook: 35, rest: 60 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Automne", "Hiver"],
  tags: ["automne", "hiver"],
  equipment: [
    "une casserole de 20 cm assez haute pour couvrir les poires",
    "un économe",
    "une cuillère parisienne ou un vide-pomme",
    "une feuille de papier cuisson",
    "une petite poêle pour les amandes",
  ],
  ingredients: [
    {
      title: "Les poires pochées",
      items: [
        { qty: 1, unit: "l", name: "eau", step: 0.25 },
        { qty: 200, unit: "g", name: "sucre en poudre", step: 10 },
        { qty: 1, unit: "gousse", name: "vanille", step: 1 },
        { qty: 1, name: "citron jaune", plural: "citrons jaunes", note: "pour le jus", step: 1 },
        {
          qty: 4,
          name: "poire",
          plural: "poires",
          note: "conférence ou williams, fermes et juste mûres, de même taille",
          step: 1,
        },
      ],
    },
    {
      title: "La sauce et le service",
      items: [
        { qty: 20, unit: "g", name: "amandes effilées", step: 5, optional: true },
        { qty: 100, unit: "g", name: "chocolat noir", note: "60 à 70 % de cacao", step: 10 },
        { qty: 12, unit: "cl", name: "crème liquide entière", step: 1 },
        { qty: 4, name: "boule de glace à la vanille", plural: "boules de glace à la vanille", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "Les poires pochées",
      steps: [
        {
          title: "Préparer le sirop",
          text: "Dans la casserole, versez l’eau et le sucre. Fendez la gousse de vanille en deux, grattez les graines dans l’eau et ajoutez la gousse. Pressez le citron et versez la moitié du jus. Portez à ébullition en remuant jusqu’à ce que le sucre soit dissous, puis baissez à feu doux.",
        },
        {
          title: "Éplucher les poires",
          text: "Épluchez les poires à l’économe, de la queue vers la base, en gardant la queue. Coupez une fine tranche dessous pour qu’elles tiennent debout, puis retirez le cœur par la base avec la cuillère parisienne. Badigeonnez-les aussitôt du reste de jus de citron.",
          tip: "Évidez par-dessous, sur 3 à 4 cm : la poire reste entière à l’œil et ne cache plus de pépins.",
        },
        {
          title: "Pocher à frémissement",
          text: "Plongez les poires dans le sirop frémissant et couvrez-les d’un disque de papier cuisson posé à même le liquide. Laissez pocher 20 à 30 minutes, sans jamais faire bouillir. Elles sont cuites quand la pointe d’un couteau entre jusqu’au cœur sans résistance et que la chair devient légèrement translucide.",
          timer: { minutes: 25, label: "Pochage des poires" },
          tip: "Testez au plus épais, près du cœur : c’est la dernière partie à cuire.",
        },
        {
          title: "Refroidir dans le sirop",
          text: "Retirez la casserole du feu et laissez les poires refroidir au moins 1 heure dans le sirop, toujours sous leur papier. Elles finissent de s’imprégner de vanille. Vous pouvez ensuite les garder au réfrigérateur dans leur sirop jusqu’au service.",
          timer: { minutes: 60, label: "Refroidissement" },
        },
      ],
    },
    {
      title: "La sauce et le service",
      steps: [
        {
          title: "Griller les amandes",
          text: "Faites dorer les amandes effilées à sec dans la petite poêle, à feu moyen, 3 à 4 minutes en remuant souvent. Arrêtez dès qu’elles sont blondes et sentent la noisette : elles brunissent très vite ensuite.",
          timer: { minutes: 4, label: "Amandes grillées" },
        },
        {
          title: "Faire la sauce chocolat",
          text: "Hachez le chocolat et mettez-le dans un bol. Portez la crème à ébullition et versez-la sur le chocolat. Laissez fondre un instant sans toucher, puis mélangez à la spatule en partant du centre, en petits cercles, jusqu’à une sauce lisse et brillante. Détendez-la avec 3 cas de sirop de pochage chaud.",
          tip: "Elle doit couler en nappe de la cuillère. Trop épaisse, ajoutez une cuillerée de sirop chaud.",
        },
        {
          title: "Dresser et servir",
          text: "Égouttez les poires et posez-en une dans chaque coupe, avec une boule de glace à la vanille à côté. Versez la sauce chocolat bien chaude sur le haut de la poire, qu’elle coule le long des flancs, et parsemez d’amandes. Servez tout de suite.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi des poires fermes",
      text: "La chair tient grâce à la pectine qui soude les cellules entre elles. À la cuisson, cette pectine se dissout peu à peu. Une poire très mûre en a déjà perdu une partie avant d’entrer dans la casserole : elle s’effondre. Juste mûre, elle a encore de quoi tenir 30 minutes de pochage.",
    },
    {
      title: "Ce que fait le refroidissement",
      text: "Tant que la poire baigne dans le sirop, le sucre et les arômes de vanille continuent de pénétrer dans la chair. Sortie trop tôt, elle sèche en surface et reste fade au centre. Laissée dans son sirop, elle devient translucide et parfumée jusqu’au cœur.",
    },
    {
      title: "Une sauce qui reste lisse",
      text: "La crème bouillante fait fondre le chocolat en douceur, sans le brûler. En mélangeant depuis le centre, on disperse le beurre de cacao dans l’eau de la crème, comme une émulsion. Le chocolat chauffé directement sur le feu, lui, peut brûler et devenir granuleux.",
    },
  ],
  tips: [
    "Prenez des poires de même taille et de même maturité : elles cuisent en même temps, et vous n’aurez pas à repêcher la première pendant que la dernière est encore dure.",
    "Le disque de papier cuisson garde les poires immergées : sans lui, la partie qui dépasse brunit et cuit moins.",
    "Pochez les poires la veille : une nuit au réfrigérateur dans leur sirop les rend plus parfumées.",
    "Gardez le sirop vanillé : réduit de moitié, il arrose une salade de fruits ou imbibe un gâteau.",
    "Sortez la glace 5 minutes avant de servir : les boules sont plus nettes et la glace moins dure sous la cuillère.",
  ],
  mistakes: [
    "Prendre des poires trop mûres : elles se défont dans le sirop. Si l’une commence à se fendre, sortez-la tout de suite, elle finira de cuire en refroidissant.",
    "Laisser le sirop bouillir : les poires s’entrechoquent, s’abîment, et l’extérieur devient pâteux avant que le cœur soit cuit. Un frémissement suffit.",
    "Arrêter la cuisson au jugé : le centre reste dur et granuleux. Fiez-vous à la pointe du couteau, jusqu’au cœur.",
    "Préparer la sauce à l’avance et la servir tiède : elle fige sur la glace et ne coule plus. Réchauffez-la au bain-marie juste avant de servir.",
  ],
  variations: [
    {
      title: "Avec des poires au sirop",
      text: "Remplacez les poires pochées par 8 demi-poires au sirop en conserve, bien égouttées, deux par coupe. On saute le pochage et le refroidissement : le dessert est prêt en 15 minutes, avec moins de vanille et de tenue.",
    },
    {
      title: "Sirop épicé",
      text: "Ajoutez au sirop 1 bâton de cannelle, 2 étoiles de badiane et 2 clous de girofle avec la vanille. Le temps de pochage ne change pas ; retirez les épices avant de servir.",
    },
    {
      title: "En coupe, avec chantilly",
      text: "Coupez les poires pochées en quartiers, superposez-les dans des verres avec la glace, nappez de sauce et ajoutez une cuillerée de crème fouettée. Plus facile à manger, moins spectaculaire.",
    },
  ],
  storage:
    "Les poires pochées se gardent 3 jours au réfrigérateur, immergées dans leur sirop, en boîte fermée. La sauce chocolat se garde 3 jours au frais ; réchauffez-la doucement au bain-marie. Une fois dressé, le dessert ne se garde pas.",
  pairing:
    "Un verre de banyuls ou de maury, dont les notes de cacao accompagnent le chocolat, ou simplement un café serré.",
  faq: [
    {
      q: "Quelles poires choisir pour une poire Belle-Hélène ?",
      a: "Des poires fermes et juste mûres, conférence ou williams. Elles doivent céder à peine sous le pouce près de la queue. Trop mûres, elles se défont dans le sirop ; trop vertes, elles restent dures et sans goût même après 30 minutes de pochage.",
    },
    {
      q: "Combien de temps pocher des poires entières ?",
      a: "20 à 30 minutes à petit frémissement pour des poires de taille moyenne. Le temps dépend surtout de leur maturité : seule la pointe du couteau, qui doit entrer jusqu’au cœur sans résistance, dit vraiment quand c’est prêt.",
    },
    {
      q: "Peut-on préparer les poires Belle-Hélène la veille ?",
      a: "Oui, et les poires y gagnent. Pochées la veille et gardées dans leur sirop au réfrigérateur, elles sont plus parfumées. Faites la sauce au chocolat au moment de servir, ou réchauffez-la au bain-marie.",
    },
    {
      q: "Peut-on utiliser des poires au sirop en conserve ?",
      a: "Oui, comptez 8 demi-poires bien égouttées pour 4. Vous gagnez le pochage et l’heure de refroidissement, mais les poires ont moins de tenue et peu de goût de vanille. Gardez la sauce chocolat maison, c’est elle qui fait le dessert.",
    },
    {
      q: "Pourquoi ma sauce au chocolat est granuleuse ?",
      a: "Le plus souvent parce que le chocolat a trop chauffé. Versez la crème bouillante dessus hors du feu plutôt que de chauffer le chocolat directement. Pour rattraper une sauce granuleuse, ajoutez 2 cas de crème chaude et mélangez vivement depuis le centre.",
    },
    {
      q: "Les amandes sont-elles obligatoires ?",
      a: "Non, elles sont facultatives. Supprimez-les en cas d’allergie aux fruits à coque, et vérifiez aussi l’étiquette de la glace et du chocolat, qui peuvent en contenir des traces.",
    },
  ],
  nutrition: {
    calories: 550,
    protein: 6,
    fat: 29,
    saturatedFat: 17,
    carbs: 63,
    sugar: 56,
    fiber: 8,
    sodium: 50,
  },
  annotations: { hero: "la sauce versée bien chaude", detail: "refroidies dans leur sirop vanillé" },
  images: {
    heroAlt:
      "Poire Belle-Hélène entière nappée de sauce au chocolat noir et d’amandes effilées, sur une assiette blanche avec de la menthe",
    detailAlt: "Trois poires pochées entières, pelées avec leur queue, posées debout sur un plat blanc",
    credits: {
      hero: {
        photographer: "JMStaehle",
        url: "https://pixabay.com/photos/dessert-pear-chocolate-fruit-4377124/",
        source: "Pixabay",
      },
      detail: { photographer: "figen kokol", url: "https://www.pexels.com/photo/poached-pears-on-plate-11572738/" },
    },
  },
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  hero,
  detail,
  theme: {
    accent: "#8A5530",
    onAccent: "#FFFFFF",
    ink: "#6A3E24",
    tint: "#F6EDE5",
    deep: "#170D07",
    focus: "58% 50%",
  },
});
