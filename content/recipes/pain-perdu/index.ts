import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "pain-perdu",
  title: "Pain perdu",
  seoTitle: "Pain perdu maison au pain rassis, doré au beurre",
  tagline: "Le pain dur a enfin un avenir.",
  description:
    "Le pain perdu à la française : du pain rassis trempé dans le lait, les œufs et la vanille, doré au beurre à la poêle. 15 minutes de travail, 20 de cuisson.",
  summary:
    "Pour un pain perdu pour 4 personnes, fouettez 3 œufs avec 40 g de sucre, la vanille et 300 ml de lait entier. Trempez 8 tranches de pain rassis de 2 cm, 20 à 40 secondes par face, puis faites-les dorer dans du beurre moussant à feu moyen, 2 à 3 minutes par face, en les saupoudrant de sucre avant de les retourner. Servez aussitôt, tiède.",
  intro: [
    "Le pain perdu porte bien son nom : c’est le pain qu’on aurait jeté, et c’est avec lui qu’il est le meilleur. Une baguette ou un pain de campagne de 2 ou 3 jours boit le mélange de lait, d’œufs et de vanille sans se défaire, puis dore au beurre : croustillant et caramélisé dehors, moelleux comme un flan dedans.",
    "Deux choses comptent. Le trempage, assez long pour que le mélange atteigne le cœur de la tranche. Et le feu, assez doux pour que ce cœur prenne avant que la croûte ne brûle. Un peu de sucre sur chaque tranche, juste avant de la retourner, fait une fine croûte caramélisée.",
    "Comptez 15 minutes de préparation et 20 minutes à la poêle pour 8 tranches. La version à la brioche, plus riche, est dans les variantes.",
  ],
  category: "Goûter",
  cuisine: "Française",
  keywords: [
    "pain perdu",
    "recette pain perdu",
    "pain perdu facile",
    "pain perdu brioche",
    "pain perdu pain rassis",
    "pain perdu à la poêle",
    "pain perdu moelleux",
    "comment faire du pain perdu",
    "pain perdu baguette",
  ],
  diet: ["vegetarian"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 15, cook: 20 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  equipment: [
    "plat creux assez large pour deux tranches",
    "fouet",
    "grande poêle antiadhésive",
    "spatule large",
    "grille",
  ],
  ingredients: [
    {
      title: "Le mélange au lait",
      items: [
        { qty: 3, name: "œuf", plural: "œufs", step: 1 },
        { qty: 40, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 1, unit: "cac", name: "extrait de vanille", note: "ou les graines d’une demi-gousse", step: 0.5 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 300, unit: "ml", name: "lait entier", step: 10 },
      ],
    },
    {
      title: "La cuisson",
      items: [
        {
          qty: 8,
          unit: "tranche",
          name: "pain rassis",
          note: "baguette ou pain de campagne de 2 ou 3 jours, coupé en tranches de 2 cm",
          step: 1,
        },
        { qty: 40, unit: "g", name: "beurre doux ou demi-sel", note: "10 g par fournée", step: 5 },
        { qty: 2, unit: "cas", name: "sucre en poudre", note: "pour caraméliser", step: 0.5 },
        { name: "sucre glace", note: "pour servir", optional: true },
      ],
    },
  ],
  method: [
    {
      title: "Préparation",
      steps: [
        {
          title: "Battre le mélange",
          text: "Dans le plat creux, fouettez les œufs avec le sucre, la vanille et le sel jusqu’à ce que le mélange soit homogène et mousse légèrement. Versez le lait et fouettez encore : il ne doit plus rester de filaments de blanc.",
        },
        {
          title: "Couper le pain",
          text: "Coupez le pain en 8 tranches de 2 cm d’épaisseur, en biais si c’est une baguette, pour qu’elles soient plus larges. Le pain doit être ferme et sec au toucher, mais pas dur comme du bois.",
        },
        {
          title: "Tremper les tranches",
          text: "Trempez les tranches deux par deux dans le mélange, 20 à 40 secondes par face selon la densité du pain. Elles doivent être imbibées jusqu’au cœur, mais se tenir quand vous les soulevez à la spatule. Posez-les sur une grille pour qu’elles s’égouttent.",
          tip: "Appuyez du doigt au centre d’une tranche : si c’est encore sec et dur dessous, retrempez-la quelques secondes.",
        },
      ],
    },
    {
      title: "Cuisson",
      steps: [
        {
          title: "Chauffer le beurre",
          text: "Allumez le four à 90 °C pour garder les tranches au chaud. Faites fondre 10 g de beurre dans la poêle à feu moyen, jusqu’à ce qu’il mousse et que la mousse commence à retomber, sans brunir.",
        },
        {
          title: "Dorer la première face",
          text: "Posez 2 à 4 tranches dans le beurre moussant, sans les serrer. Laissez cuire 2 à 3 minutes sans y toucher, jusqu’à ce que le dessous soit bien doré et légèrement croustillant. Saupoudrez alors le dessus d’un peu de sucre.",
          timer: { minutes: 3, label: "Première face" },
          tip: "Si le beurre noircit avant que le pain soit doré, baissez le feu : le centre a besoin de ce temps pour prendre.",
        },
        {
          title: "Caraméliser l’autre face",
          text: "Retournez les tranches et faites cuire l’autre face 2 à 3 minutes : le sucre fond et caramélise contre la poêle. Le pain perdu est prêt quand il est doré des deux côtés et ferme au centre sous le doigt. Gardez-le au four, posé sur une grille.",
          timer: { minutes: 3, label: "Deuxième face" },
        },
        {
          title: "Enchaîner les fournées",
          text: "Essuyez la poêle avec du papier absorbant si du sucre y a brûlé, remettez 10 g de beurre et cuisez les tranches suivantes de la même façon, jusqu’à épuisement du beurre et du sucre.",
        },
        {
          title: "Servir",
          text: "Servez aussitôt, tiède, avec un voile de sucre glace si vous en mettez. Le pain perdu n’attend pas : en refroidissant, sa croûte ramollit.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi du pain rassis",
      text: "En rassissant, le pain perd de l’eau et son amidon se recristallise : c’est la rétrogradation. La mie devient plus ferme et plus sèche, et elle absorbe le liquide comme une éponge sans se défaire. Un pain frais, déjà humide et tendre, se gorge de lait et s’effondre en bouillie.",
    },
    {
      title: "Un flan dans le pain",
      text: "Le mélange de lait et d’œufs qui imbibe la mie est une crème prise, comme un flan. En chauffant, les protéines de l’œuf coagulent et figent le lait autour d’elles, entre 70 et 80 °C environ pour un mélange dilué et sucré comme celui-ci. D’où le centre moelleux, pris mais pas sec.",
    },
    {
      title: "La croûte caramélisée",
      text: "Au contact de la poêle, le sucre saupoudré fond puis caramélise, et les protéines du pain, du lait et des œufs brunissent avec les sucres (réaction de Maillard). Le beurre, lui, contient des protéines et du lactose qui brunissent vite puis brûlent : c’est pour cela qu’on reste à feu moyen et qu’on remet du beurre frais à chaque fournée.",
    },
  ],
  tips: [
    "Le meilleur pain a 2 ou 3 jours. Plus vieux et très dur, il demande un trempage plus long ; trop frais, faites-le sécher 10 minutes au four à 120 °C avant de le tremper.",
    "Cuisez au beurre demi-sel : le contraste avec la croûte caramélisée est ce qu’on préfère.",
    "Laissez bien égoutter les tranches avant de les poser dans la poêle. Le mélange qui coule autour du pain fait une omelette sucrée qui brûle.",
    "Pour le goûter, servez-le avec une compote, des fruits rouges ou une cuillerée de crème fraîche épaisse.",
  ],
  mistakes: [
    "Prendre du pain frais. Il boit le mélange, s’effondre, et reste pâteux au centre.",
    "Laisser tremper trop longtemps. La tranche se déchire en la sortant et reste crue au milieu.",
    "Cuire à feu vif. Le sucre et le beurre brûlent avant que le centre ait pris.",
    "Empiler les tranches cuites sur une assiette. Elles cuisent à la vapeur les unes sur les autres et perdent leur croûte.",
  ],
  variations: [
    {
      title: "À la brioche",
      text: "Remplacez le pain par 8 tranches de brioche rassise de 2,5 cm, et le sucre du mélange par 20 g seulement. La brioche boit très vite : 10 à 15 secondes par face suffisent. Cuisez à feu moyen-doux, car elle dore plus vite que le pain. Le résultat est plus riche, presque un dessert.",
    },
    {
      title: "Plus crémeux",
      text: "Remplacez 100 ml de lait par 100 ml de crème liquide entière. Le cœur devient plus riche et plus fondant, proche d’une crème brûlée chaude.",
    },
    {
      title: "Au four, pour beaucoup de monde",
      text: "Posez les tranches trempées sur une plaque couverte de papier sulfurisé beurré, saupoudrez-les de sucre et enfournez 15 à 20 minutes à 200 °C, en les retournant à mi-cuisson. La croûte est moins caramélisée qu’à la poêle, mais tout est prêt en même temps.",
    },
  ],
  storage:
    "Le pain perdu se mange tout de suite. Les restes se gardent jusqu’au lendemain au réfrigérateur, filmés, et se réchauffent à la poêle, à feu doux, 3 à 4 minutes par face.",
  pairing: "Un chocolat chaud ou un verre de lait froid, et un café pour les grands.",
  faq: [
    {
      q: "Quel pain utiliser pour faire du pain perdu ?",
      a: "Un pain rassis de 2 ou 3 jours : baguette, pain de campagne, pain de mie ou brioche. Il doit être sec et ferme, pour absorber le mélange sans se défaire. Plus il est dense, plus il doit tremper longtemps.",
    },
    {
      q: "Peut-on faire du pain perdu avec du pain frais ?",
      a: "Oui, mais faites-le sécher d’abord : 10 minutes au four à 120 °C, tranches posées sur la grille, ou quelques heures à l’air libre. Trempé frais, il se gorge de liquide et reste pâteux.",
    },
    {
      q: "Combien de temps faire tremper le pain perdu ?",
      a: "20 à 40 secondes par face pour une baguette ou un pain de campagne rassis, 10 à 15 secondes pour de la brioche. La tranche doit être imbibée jusqu’au cœur, mais se tenir quand on la soulève.",
    },
    {
      q: "Pourquoi mon pain perdu est-il mou au centre ?",
      a: "Soit le pain était trop frais ou trop trempé, soit le feu était trop fort : l’extérieur a doré avant que le centre ait pris. Restez à feu moyen et comptez 2 à 3 minutes par face. Le centre doit être ferme sous le doigt.",
    },
    {
      q: "Lait ou crème pour le pain perdu ?",
      a: "Du lait entier pour la version classique. Remplacez-en un tiers par de la crème liquide pour un cœur plus riche et plus fondant, presque comme une crème brûlée.",
    },
    {
      q: "Peut-on préparer le pain perdu à l’avance ?",
      a: "Le mélange, oui : il se garde 24 heures au réfrigérateur, couvert. Le pain perdu cuit se réchauffe à la poêle, mais il n’est jamais aussi bon qu’à la sortie du feu, quand la croûte croque encore.",
    },
  ],
  nutrition: {
    calories: 420,
    protein: 14,
    fat: 13,
    saturatedFat: 7,
    carbs: 62,
    sugar: 22,
    fiber: 2,
    sodium: 430,
  },
  annotations: {
    hero: "feu moyen, sinon le sucre brûle",
    detail: "le pain d’avant-hier, idéalement",
  },
  images: {
    heroAlt: "Tranches épaisses de pain perdu dorées et caramélisées sur une assiette, une tasse de café derrière",
    detailAlt:
      "Deux tranches de pain perdu au sucre glace, avec des fraises et deux coupelles de confiture et de sirop",
    credits: {
      hero: {
        photographer: "Anderson Martins",
        url: "https://www.pexels.com/photo/extreme-close-up-of-french-toast-and-coffee-24343228/",
      },
      detail: {
        photographer: "Ivan Dražić",
        url: "https://www.pexels.com/photo/sweet-french-toasts-14613467/",
      },
    },
  },
  datePublished: "2026-11-08",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#B9582A",
    onAccent: "#ffffff",
    ink: "#94401A",
    tint: "#FAEDE4",
    deep: "#1A0F09",
    focus: "50% 62%",
  },
});
