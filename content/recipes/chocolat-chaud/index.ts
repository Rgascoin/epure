import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "chocolat-chaud",
  title: "Chocolat chaud",
  seoTitle: "Chocolat chaud maison au vrai chocolat noir, bien mousseux",
  tagline: "Surtout, ne le laissez pas bouillir.",
  description:
    "Chocolat chaud maison pour 2 tasses : 80 g de chocolat noir à 70 % fondu dans 50 cl de lait entier, fouetté jusqu’à mousser, sans bouillir. Prêt en 20 minutes.",
  summary:
    "Pour 2 tasses, portez 50 cl de lait entier à frémissement, retirez du feu et faites-y fondre 80 g de chocolat noir à 64 à 70 % de cacao, haché fin, avec 1 cuillerée de cacao en poudre et 10 g de sucre si vous le souhaitez. Remettez sur feu doux et fouettez 2 à 3 minutes, sans laisser bouillir, jusqu’à ce qu’il mousse. Servez avec une chantilly légère. Comptez moins de 20 minutes en tout.",
  intro: [
    "Un vrai chocolat chaud se fait avec du chocolat, pas avec une poudre sucrée. Du lait entier, une tablette de noir hachée fin et un fouet suffisent : en un quart d’heure, on obtient une boisson épaisse et brillante, couverte d’une mousse fine.",
    "Ce qui le gâche, c’est l’ébullition. Le lait qui bout fort fait une peau, accroche au fond et donne un goût de cuit, parfois un grain sur la langue. On chauffe jusqu’au frémissement, on fait fondre le chocolat hors du feu, puis on fouette sur feu doux.",
    "Pour la dose, on part de 80 g de chocolat à 70 % pour 50 cl de lait, et on goûte avant de sucrer : le chocolat apporte déjà son sucre.",
  ],
  category: "Goûter",
  cuisine: "Française",
  keywords: [
    "chocolat chaud",
    "chocolat chaud maison",
    "recette chocolat chaud",
    "chocolat chaud au chocolat noir",
    "chocolat chaud à l’ancienne",
    "chocolat chaud épais",
    "chocolat chaud lait végétal",
    "combien de chocolat pour un chocolat chaud",
  ],
  diet: ["vegetarian"],
  servings: 2,
  servingsLabel: { one: "tasse", other: "tasses" },
  times: { prep: 10, cook: 8 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: [
    "petite casserole à fond épais",
    "fouet",
    "planche et couteau-scie",
    "batteur électrique pour la chantilly",
  ],
  ingredients: [
    {
      title: "Le chocolat chaud",
      items: [
        { qty: 80, unit: "g", name: "chocolat noir", note: "64 à 70 % de cacao, haché fin", step: 10 },
        { qty: 1, unit: "cas", name: "cacao en poudre non sucré", note: "facultatif", step: 0.5 },
        { qty: 10, unit: "g", name: "sucre en poudre", note: "selon votre goût", step: 5 },
        { qty: 50, unit: "cl", name: "lait entier", step: 5 },
      ],
    },
    {
      title: "La chantilly",
      items: [
        { qty: 10, unit: "cl", name: "crème liquide entière", note: "30 % de matière grasse, bien froide", step: 5 },
        { qty: 1, unit: "cac", name: "sucre glace", step: 0.5 },
      ],
    },
  ],
  method: [
    {
      title: "Le chocolat chaud",
      steps: [
        {
          title: "Monter la chantilly",
          text: "Commencez par la chantilly, pour qu’elle attende au frais. Fouettez la crème bien froide avec le sucre glace au batteur, à vitesse moyenne puis rapide, 2 à 3 minutes. Arrêtez quand elle forme des pointes souples qui se courbent au bout du fouet. Réservez au réfrigérateur.",
          timer: { minutes: 3, label: "Chantilly au batteur" },
        },
        {
          title: "Hacher le chocolat",
          text: "Hachez le chocolat en petits éclats de 5 mm au plus avec le couteau-scie. Dans un bol, mélangez le cacao en poudre et le sucre : ainsi mêlé au sucre, le cacao ne fera pas de grumeaux.",
        },
        {
          title: "Chauffer le lait",
          text: "Versez le lait dans la casserole et chauffez-le sur feu moyen 4 à 5 minutes, jusqu’au frémissement : de petites bulles se forment sur les bords et la surface commence à trembler. Il ne doit pas bouillir.",
          timer: { minutes: 5, label: "Lait jusqu’au frémissement" },
        },
        {
          title: "Fondre hors du feu",
          text: "Retirez la casserole du feu. Ajoutez le chocolat haché et le mélange cacao-sucre, laissez reposer le temps de compter jusqu’à trente, puis fouettez jusqu’à ce qu’il ne reste plus aucun éclat de chocolat au fond. Le liquide doit être lisse et d’un brun uniforme.",
          tip: "Hors du feu, le chocolat fond dans la chaleur du lait sans risquer d’accrocher au fond.",
        },
        {
          title: "Fouetter jusqu’à mousser",
          text: "Remettez sur feu doux et fouettez vivement, d’un mouvement de poignet, pendant 2 à 3 minutes. Le chocolat épaissit légèrement, devient brillant et se couvre d’une mousse fine. Il peut frissonner, mais jamais bouillonner.",
          timer: { minutes: 3, label: "Chocolat au fouet" },
          tip: "S’il commence à monter, retirez aussitôt la casserole : une ébullition forte fait une peau et peut donner un grain.",
        },
        {
          title: "Servir tout de suite",
          text: "Goûtez et ajoutez un peu de sucre si besoin. Versez dans des tasses chaudes, avec la mousse, et posez une belle cuillerée de chantilly sur chaque tasse au moment de servir.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Ce que dit le pourcentage",
      text: "Le pourcentage indique la part de produits du cacao (pâte et beurre de cacao) dans la tablette. Le reste est surtout du sucre : un chocolat à 70 % en contient environ 30 %, un chocolat à 55 % autour de 45 %. C’est pourquoi on goûte avant de sucrer, et qu’on supprime le sucre avec un chocolat plus doux.",
    },
    {
      title: "La peau du lait",
      text: "Quand le lait chauffe fort, l’eau s’évapore en surface et les protéines du lait, dénaturées par la chaleur, s’y concentrent avec un peu de matière grasse. Elles forment une pellicule qui s’épaissit à mesure que la température monte. Un feu doux et un coup de fouet régulier l’empêchent de se former.",
    },
    {
      title: "Pourquoi le fouet fait mousser",
      text: "Le fouet emprisonne de l’air dans le liquide. Les protéines du lait se placent autour de ces petites bulles et les stabilisent, comme dans la mousse d’un cappuccino. Le chocolat fondu épaissit le liquide, ce qui ralentit l’éclatement des bulles et garde la mousse plus longtemps.",
    },
  ],
  tips: [
    "Prenez du lait entier : le chocolat chaud est plus rond et sa mousse plus crémeuse. Avec du demi-écrémé, ajoutez 10 g de chocolat.",
    "Choisissez un chocolat noir à pâtisser ou à croquer, sans arôme ajouté. C’est lui qui fait tout le goût, et un chocolat que vous aimez manger nature fera un bon chocolat chaud.",
    "Pour une mousse plus épaisse, passez quelques secondes au mixeur plongeant directement dans la casserole inclinée, juste avant de servir.",
    "Ébouillantez les tasses avant de servir : dans une tasse froide, le chocolat tiédit et la mousse retombe plus vite.",
  ],
  mistakes: [
    "Faire bouillir le lait à gros bouillons : il fait une peau, attache au fond et donne un goût de cuit. Retirez la casserole dès le premier frémissement.",
    "Jeter le chocolat dans le lait sur feu vif : il accroche au fond avant d’avoir fondu. Faites-le fondre hors du feu, dans la chaleur du lait.",
    "Verser le cacao en poudre seul dans le lait : il forme des grumeaux qui flottent. Mélangez-le d’abord au sucre, ou délayez-le dans un peu de lait chaud.",
    "Sucrer avant de goûter : un chocolat à 70 % apporte déjà son sucre, et un chocolat chaud trop sucré masque le goût du cacao.",
  ],
  variations: [
    {
      title: "À l’ancienne, plus épais",
      text: "Montez le chocolat à 100 g et délayez 2 cac rases de fécule de maïs (environ 6 g) dans 3 cas de lait froid. Versez-les dans le chocolat chaud à l’étape du fouet et laissez frémir 2 minutes en fouettant sans arrêt, jusqu’à ce qu’il nappe la cuillère. Il épaissit encore un peu dans la tasse.",
    },
    {
      title: "Au lait végétal",
      text: "Remplacez le lait par la même quantité de boisson végétale non sucrée. Le soja mousse bien et donne le résultat le plus proche ; l’avoine, naturellement sucrée, demande moins de sucre ; l’amande, plus fluide, gagne à recevoir 20 g de chocolat en plus. Pour une version sans lait, vérifiez que votre chocolat n’en contient pas et remplacez la chantilly par une crème végétale à fouetter.",
    },
    {
      title: "Épicé",
      text: "Faites infuser un bâton de cannelle et une lanière de zeste d’orange dans le lait pendant qu’il chauffe, puis retirez-les avant d’ajouter le chocolat.",
    },
  ],
  storage:
    "Il se garde 2 jours au réfrigérateur dans une bouteille ou un bocal fermé. Il épaissit en refroidissant : réchauffez-le à feu doux en fouettant, jusqu’à ce qu’il fume, sans le faire bouillir. La chantilly se garde quelques heures au frais, couverte, et se refouette un instant avant de servir.",
  pairing: "Des madeleines, des sablés bretons ou simplement une tartine de pain beurré.",
  faq: [
    {
      q: "Combien de chocolat pour 50 cl de lait ?",
      a: "80 g de chocolat noir à 64 à 70 % de cacao pour 50 cl de lait entier, soit deux grandes tasses. Montez à 100 g pour un chocolat plus intense, descendez à 60 g pour une boisson plus légère.",
    },
    {
      q: "Quel chocolat choisir pour un chocolat chaud ?",
      a: "Un chocolat noir à pâtisser ou à croquer, entre 60 et 70 % de cacao. Au-dessus, il devient vite amer ; en dessous, il est plus sucré et vous pouvez supprimer le sucre ajouté. Évitez les tablettes aromatisées ou fourrées.",
    },
    {
      q: "Comment faire un chocolat chaud épais ?",
      a: "Ajoutez un peu de fécule de maïs : 2 cac rases délayées dans 3 cas de lait froid, versées dans le chocolat chaud, puis 2 minutes de frémissement en fouettant. Vous pouvez aussi augmenter le chocolat à 100 ou 120 g pour 50 cl de lait.",
    },
    {
      q: "Peut-on faire un chocolat chaud avec du lait végétal ?",
      a: "Oui. La boisson au soja mousse bien et donne le résultat le plus proche du lait. L’avoine est naturellement sucrée, réduisez le sucre ; l’amande, plus fluide, demande 20 g de chocolat en plus. Prenez des boissons non sucrées et un chocolat sans lait pour une version végétale.",
    },
    {
      q: "Pourquoi une peau se forme sur le chocolat chaud ?",
      a: "Parce qu’il a trop chauffé, ou attendu sans être remué : les protéines du lait se concentrent et coagulent à la surface. Ne le laissez pas bouillir, fouettez-le juste avant de servir, et retirez la peau à la cuillère si elle s’est formée.",
    },
    {
      q: "Peut-on préparer le chocolat chaud à l’avance ?",
      a: "Oui, jusqu’à 2 jours au réfrigérateur, dans une bouteille fermée. Il épaissit en refroidissant. Réchauffez-le à feu doux en fouettant, sans le faire bouillir, et refaites mousser au fouet juste avant de servir.",
    },
  ],
  nutrition: {
    calories: 565,
    protein: 12.5,
    fat: 41,
    saturatedFat: 26.5,
    carbs: 34,
    sugar: 32,
    fiber: 5,
    sodium: 135,
  },
  annotations: { hero: "la mousse, c’est le fouet", detail: "chantilly montée juste avant" },
  images: {
    heroAlt:
      "Tasse de chocolat chaud mousseux sur sa soucoupe, avec une petite cuillère dorée, entourée de fleurs de coton",
    detailAlt: "Chocolat chaud servi dans une tasse en verre, surmonté de chantilly parsemée de chocolat",
    credits: {
      hero: {
        photographer: "Ioana Motoc",
        url: "https://www.pexels.com/photo/a-cotton-flower-beside-a-delicious-cup-of-drink-11043663/",
      },
      detail: {
        photographer: "Doğu Tuncer",
        url: "https://www.pexels.com/photo/chocolate-drink-with-whipped-cream-15149193/",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#BC7845",
    onAccent: "#1B1712",
    ink: "#7A4420",
    tint: "#F8EEE6",
    deep: "#1A0E08",
    focus: "45% 58%",
  },
});
