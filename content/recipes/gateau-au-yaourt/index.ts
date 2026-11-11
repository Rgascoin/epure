import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "gateau-au-yaourt",
  title: "Gâteau au yaourt",
  seoTitle: "Gâteau au yaourt moelleux, en grammes et en pots",
  tagline: "Le pot sert de verre doseur.",
  description:
    "Le gâteau au yaourt moelleux : 1 yaourt, 3 œufs, 200 g de sucre, 210 g de farine et 60 ml d’huile, 30 à 35 minutes à 180 °C. Avec l’équivalence en pots.",
  summary:
    "Pour faire un gâteau au yaourt de 8 parts, fouettez 3 œufs avec 200 g de sucre, ajoutez 1 yaourt nature de 125 g et 60 ml d’huile neutre, puis 210 g de farine et 1 sachet de levure chimique. Versez dans un moule de 22 cm et faites cuire 30 à 35 minutes à 180 °C. Sans balance, le pot vide sert de mesure : 2 pots de sucre, 3 pots de farine et un demi-pot d’huile.",
  intro: [
    "Le gâteau au yaourt, c’est celui qu’on fait avec les enfants, parce qu’il se mesure avec le pot : un yaourt, deux pots de sucre, trois de farine, trois œufs, un demi-pot d’huile et un sachet de levure. On vous donne aussi les grammes, plus fiables : un pot de farine varie beaucoup selon qu’on la tasse ou non.",
    "Bien fait, il est moelleux et léger, sous une croûte fine et dorée. L’huile le garde tendre plusieurs jours, et le yaourt lui donne une mie fine, un peu acidulée.",
    "Ce qui peut rater : une pâte trop mélangée après la farine, qui donne un gâteau compact, ou une porte de four ouverte trop tôt, qui le fait retomber.",
  ],
  category: "Goûter",
  cuisine: "Française",
  keywords: [
    "gâteau au yaourt",
    "recette gâteau au yaourt",
    "gâteau au yaourt moelleux",
    "gâteau au yaourt facile",
    "gâteau au yaourt en grammes",
    "gâteau au yaourt pot",
    "gâteau yaourt huile",
    "gâteau au yaourt citron",
  ],
  diet: ["vegetarian"],
  servings: 8,
  servingsLabel: { one: "part", other: "parts" },
  times: { prep: 15, cook: 35, rest: 40 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  equipment: [
    "moule à manqué de 22 cm (ou moule à cake de 25 cm)",
    "papier sulfurisé",
    "saladier",
    "fouet",
    "tamis ou passoire fine",
    "couteau à lame fine",
    "grille",
  ],
  ingredients: [
    {
      items: [
        { qty: 10, unit: "g", name: "beurre doux", note: "mou, pour le moule", fixed: true },
        { qty: 3, name: "œuf", plural: "œufs", note: "à température ambiante", step: 1 },
        { qty: 200, unit: "g", name: "sucre en poudre", note: "environ 2 pots de yaourt", step: 10 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        {
          qty: 1,
          name: "citron jaune non traité",
          plural: "citrons jaunes non traités",
          note: "pour le zeste",
          step: 1,
          optional: true,
        },
        {
          qty: 125,
          unit: "g",
          name: "yaourt nature au lait entier",
          note: "1 pot, à température ambiante",
          step: 5,
        },
        {
          qty: 60,
          unit: "ml",
          name: "huile neutre",
          note: "tournesol ou colza, environ un demi-pot",
          step: 5,
        },
        { qty: 210, unit: "g", name: "farine T55", note: "environ 3 pots, sans tasser", step: 5 },
        { qty: 1, unit: "sachet", name: "levure chimique", note: "11 g", step: 0.5 },
        { name: "sucre glace", note: "pour servir", optional: true },
      ],
    },
  ],
  method: [
    {
      title: "Préparation",
      steps: [
        {
          title: "Préparer le moule",
          text: "Préchauffez le four à 180 °C, chaleur statique, grille au milieu. Beurrez le moule au pinceau ou avec un papier et posez un disque de papier sulfurisé au fond.",
        },
        {
          title: "Fouetter œufs et sucre",
          text: "Dans un saladier, fouettez les œufs avec le sucre, le sel et le zeste du citron râpé (si vous en mettez) pendant 2 minutes. Le mélange doit pâlir et devenir mousseux.",
          timer: { minutes: 2, label: "Œufs et sucre" },
        },
        {
          title: "Ajouter yaourt et huile",
          text: "Videz le yaourt dans le saladier et fouettez. Versez l’huile en filet sans cesser de fouetter, jusqu’à ce que la pâte soit lisse et brillante.",
          tip: "Gardez le pot vide : rincé et séché, il remplace la balance. Comptez 2 pots de sucre, 3 pots de farine sans tasser et un demi-pot d’huile, mais la farine varie vite d’un pot à l’autre.",
        },
        {
          title: "Incorporer la farine",
          text: "Tamisez la farine et la levure au-dessus du saladier. Mélangez au fouet, sans insister, juste jusqu’à ce qu’il ne reste plus de grumeaux : une vingtaine de tours suffit.",
          tip: "Plus on mélange après la farine, plus le gâteau devient compact et élastique. Quelques petits grumeaux disparaîtront à la cuisson.",
        },
        {
          title: "Cuire le gâteau",
          text: "Versez la pâte dans le moule et enfournez 30 à 35 minutes, sans ouvrir la porte pendant les 20 premières minutes. Il est cuit quand il est bien doré, que le dessus reprend sa forme sous le doigt et que la lame d’un couteau plantée au centre ressort sèche.",
          timer: { minutes: 32, label: "Cuisson du gâteau" },
        },
        {
          title: "Démouler le gâteau",
          text: "Laissez reposer le gâteau 10 minutes dans le moule, puis passez une lame fine sur le pourtour et retournez-le sur une grille. Retirez le papier et remettez-le à l’endroit.",
          timer: { minutes: 10, label: "Repos avant démoulage" },
        },
        {
          title: "Laisser refroidir",
          text: "Laissez-le refroidir au moins 30 minutes sur la grille avant de le couper en 8 parts. Juste avant de servir, saupoudrez-le de sucre glace si vous en mettez.",
          timer: { minutes: 30, label: "Refroidissement" },
        },
      ],
    },
  ],
  science: [
    {
      title: "La levure chimique",
      text: "Elle associe du bicarbonate et un acide. Au contact de l’humidité, puis surtout à la chaleur du four, ils réagissent et dégagent du gaz carbonique, qui fait gonfler la pâte. Ouvrir le four avant que la mie ait pris laisse ces bulles s’affaisser.",
    },
    {
      title: "Pourquoi de l’huile",
      text: "L’huile reste liquide à température ambiante, alors que le beurre durcit en refroidissant. Le gâteau reste donc moelleux même froid, et plusieurs jours après. En enrobant la farine, elle limite aussi la formation du gluten.",
    },
    {
      title: "Ce qu’apporte le yaourt",
      text: "Il apporte de l’eau, un peu de matière grasse et de l’acide lactique. Cette acidité affaiblit légèrement le réseau de gluten, ce qui donne une mie plus tendre, et elle aide la levure à réagir.",
    },
  ],
  tips: [
    "Sortez les œufs et le yaourt du réfrigérateur une demi-heure avant : la pâte est plus homogène et le gâteau gonfle plus régulièrement.",
    "Pour un gâteau moins sucré, descendez à 160 g de sucre. Il sera un peu moins doré et un peu moins moelleux, mais très bon avec de la confiture.",
    "Mesurez la farine à la cuillère, en la versant dans le pot sans tasser, si vous n’avez pas de balance.",
    "Il se garde mieux enveloppé dans un torchon propre ou sous cloche : à l’air libre, la croûte sèche vite.",
  ],
  mistakes: [
    "Mélanger longtemps après la farine. Le gâteau devient compact et se creuse de petits tunnels.",
    "Ouvrir le four pendant les 20 premières minutes. Le gâteau, pas encore pris, retombe.",
    "Tasser la farine dans le pot. On en met trop, et le gâteau devient sec et serré.",
    "Le démouler brûlant. Encore fragile, il se casse en deux.",
  ],
  variations: [
    {
      title: "En moule à cake",
      text: "Versez la pâte dans un moule à cake de 25 cm et comptez 40 à 45 minutes à 180 °C. S’il colore trop vite, posez une feuille d’aluminium dessus à mi-cuisson.",
    },
    {
      title: "Marbré au chocolat",
      text: "Partagez la pâte en deux et ajoutez 20 g de cacao en poudre non sucré et 1 c. à soupe de lait dans une moitié. Versez-les en alternant les cuillerées dans le moule, puis tracez quelques zigzags au couteau. La cuisson ne change pas.",
    },
    {
      title: "Aux pommes",
      text: "Coupez 2 pommes en fines lamelles et posez-les sur la pâte avant d’enfourner. Ajoutez 5 minutes de cuisson : les pommes rendent de l’eau.",
    },
  ],
  storage:
    "Enveloppé dans un torchon ou sous cloche, 3 jours à température ambiante. Il se congèle bien, en parts filmées, 2 mois : laissez-les revenir 2 heures à température ambiante.",
  pairing: "Un chocolat chaud ou un verre de lait pour les enfants, un thé noir pour les grands.",
  faq: [
    {
      q: "Combien de grammes de farine dans un pot de yaourt ?",
      a: "Environ 70 g de farine, sans tasser, dans un pot standard de 125 g. Pour le sucre, comptez 100 g par pot, et pour l’huile, un peu plus de 120 ml. Ce sont des moyennes : avec la farine, l’écart d’un pot à l’autre peut être important, d’où les grammes dans la liste.",
    },
    {
      q: "Quelle huile mettre dans un gâteau au yaourt ?",
      a: "Une huile neutre, tournesol ou colza. L’huile d’olive marche aussi, mais son goût se sent : prenez-la douce, et pensez-y plutôt pour la version au citron.",
    },
    {
      q: "Peut-on remplacer l’huile par du beurre dans un gâteau au yaourt ?",
      a: "Oui, avec 60 g de beurre fondu et tiédi. Le gâteau est plus parfumé, mais un peu plus ferme une fois froid, car le beurre durcit en refroidissant.",
    },
    {
      q: "Pourquoi mon gâteau au yaourt est-il retombé ?",
      a: "Le plus souvent, la porte du four a été ouverte trop tôt, ou le gâteau n’était pas assez cuit au centre. Trop de levure peut aussi le faire gonfler très vite, puis retomber.",
    },
    {
      q: "Peut-on utiliser un yaourt grec ou un yaourt aux fruits ?",
      a: "Oui. Un yaourt grec, plus gras, donne un gâteau un peu plus riche. Un yaourt sucré ou aux fruits marche aussi : retirez alors 20 g de sucre.",
    },
    {
      q: "Combien de temps se conserve un gâteau au yaourt ?",
      a: "Trois jours à température ambiante, enveloppé dans un torchon ou sous cloche. Il se congèle aussi en parts filmées, 2 mois.",
    },
  ],
  nutrition: {
    calories: 300,
    protein: 6,
    fat: 11,
    saturatedFat: 2,
    carbs: 45,
    sugar: 26,
    fiber: 1,
    sodium: 170,
  },
  annotations: {
    hero: "trois pots de farine, sans tasser",
    detail: "aussi bon en moule à cake",
  },
  images: {
    heroAlt:
      "Gâteau au yaourt rond saupoudré de sucre glace, deux parts coupées montrant une mie jaune et aérée",
    detailAlt: "Tranche de gâteau au yaourt cuit en moule à cake, servie avec de la crème fouettée",
    credits: {
      hero: {
        photographer: "Konstantin Klimov",
        url: "https://www.pexels.com/photo/delicious-freshly-baked-homemade-cake-37043950/",
      },
      detail: {
        photographer: "Gu Ko",
        url: "https://www.pexels.com/photo/homemade-loaf-cake-with-cream-on-a-plate-36590625/",
      },
    },
  },
  datePublished: "2026-11-10",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#D49A3A",
    onAccent: "#1b1712",
    ink: "#855417",
    tint: "#FBF4E4",
    deep: "#1a120c",
    focus: "50% 55%",
  },
});
