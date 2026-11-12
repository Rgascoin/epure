import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "pates-sauce-tomate",
  title: "Pâtes à la sauce tomate",
  seoTitle: "Pâtes sauce tomate maison, prêtes en 30 minutes",
  tagline: "Le dîner des soirs sans courses.",
  description:
    "Pâtes à la sauce tomate pour 4 : 800 g de tomates pelées, ail et huile d’olive mijotés 20 minutes, 400 g de spaghetti finis dans la sauce. Prêt en 30 minutes.",
  summary:
    "Pour 4 personnes, faites chauffer 3 gousses d’ail dans 4 cuillerées à soupe d’huile d’olive, ajoutez 800 g de tomates pelées entières écrasées à la main et laissez mijoter 20 minutes à découvert. Pendant ce temps, faites cuire 400 g de spaghetti dans 4 litres d’eau salée, 2 minutes de moins que le temps indiqué. Finissez-les 2 minutes dans la sauce avec un peu d’eau de cuisson, puis ajoutez le basilic hors du feu. Comptez 30 minutes en tout.",
  intro: [
    "Une sauce tomate de base demande de l’huile d’olive, de l’ail et de bonnes tomates en conserve. Elle mijote vingt minutes pendant que l’eau chauffe, et c’est le dîner des soirs où le frigo est vide mais pas le placard.",
    "Ce qui la rate, c’est la fin. Des pâtes égouttées à fond, une louche de sauce posée dessus, et tout glisse au fond de l’assiette. On termine plutôt la cuisson des pâtes dans la sauteuse, avec un peu de leur eau : l’amidon lie l’huile et le jus de tomate, et chaque spaghetti ressort enrobé.",
    "Le basilic arrive tout à la fin, hors du feu. Cuit vingt minutes, il ne sent plus grand-chose.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "pâtes sauce tomate",
    "recette pâtes sauce tomate",
    "sauce tomate maison",
    "sauce tomate pour pâtes",
    "sauce tomate tomates pelées",
    "spaghetti sauce tomate",
    "pâtes tomate basilic",
    "sauce tomate rapide",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 10, cook: 20 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  tags: [],
  equipment: ["grande casserole de 5 l", "sauteuse de 28 cm", "louche", "pince ou deux fourchettes"],
  ingredients: [
    {
      title: "La sauce",
      items: [
        {
          qty: 800,
          unit: "g",
          name: "tomates pelées entières en conserve",
          note: "2 boîtes de 400 g, avec leur jus",
          step: 50,
        },
        { qty: 4, unit: "cas", name: "huile d’olive vierge extra", step: 1 },
        { qty: 3, unit: "gousse", name: "ail", note: "en fines lamelles", step: 1 },
        { qty: 1, unit: "cac", name: "sel fin", step: 0.5 },
        { qty: 4, unit: "brin", name: "basilic", note: "feuilles et tiges séparées", step: 1 },
      ],
    },
    {
      title: "Les pâtes",
      items: [
        { qty: 4, unit: "l", name: "eau", step: 0.5 },
        { qty: 40, unit: "g", name: "gros sel", step: 5 },
        { qty: 400, unit: "g", name: "spaghetti", note: "ou penne, rigatoni", step: 50 },
        { qty: 1, unit: "cas", name: "huile d’olive vierge extra", note: "pour finir", step: 1 },
        { qty: 40, unit: "g", name: "parmesan", note: "râpé", step: 10, optional: true },
      ],
    },
  ],
  method: [
    {
      title: "Sauce et pâtes",
      steps: [
        {
          title: "Chauffer l’eau",
          text: "Versez 4 litres d’eau dans la grande casserole, couvrez et mettez à feu vif. Elle mettra 10 à 15 minutes à bouillir : c’est le temps de lancer la sauce.",
          timer: { minutes: 15, label: "Eau des pâtes" },
        },
        {
          title: "Écraser les tomates",
          text: "Videz les tomates et leur jus dans un saladier et écrasez-les entre vos doigts, en morceaux irréguliers. Retirez au passage les petits bouts durs du pédoncule et les éventuels morceaux de peau.",
        },
        {
          title: "Parfumer l’huile",
          text: "Mettez l’huile d’olive et l’ail dans la sauteuse froide, puis chauffez à feu moyen-doux 2 minutes environ. Arrêtez quand l’ail grésille et prend une teinte à peine blonde, avant qu’il ne brunisse.",
          timer: { minutes: 2, label: "Ail dans l’huile" },
          tip: "Partir à froid laisse le temps à l’ail de parfumer l’huile sans brûler. S’il brunit, recommencez : il rendrait toute la sauce amère.",
        },
        {
          title: "Mijoter la sauce",
          text: "Versez les tomates d’un coup, ce qui stoppe la cuisson de l’ail, salez et ajoutez les tiges du basilic, qui parfument sans noircir. Portez à frémissement puis laissez cuire 20 minutes à feu moyen-doux, à découvert, en remuant de temps en temps. La sauce est prête quand elle a réduit d’un tiers et qu’un filet d’huile rouge perle sur les bords.",
          timer: { minutes: 20, label: "Sauce tomate" },
        },
        {
          title: "Cuire les pâtes",
          text: "Quand l’eau bout à gros bouillons, salez-la avec le gros sel, ajoutez les pâtes et remuez pendant la première minute pour qu’elles ne collent pas. Faites-les cuire 2 minutes de moins que le temps indiqué sur le paquet, soit 8 à 9 minutes pour des spaghetti classiques : elles doivent encore résister sous la dent.",
          timer: { minutes: 9, label: "Pâtes, 2 min de moins" },
        },
        {
          title: "Garder l’eau de cuisson",
          text: "Juste avant d’égoutter, prélevez 25 cl d’eau de cuisson à la louche. Égouttez les pâtes sans les secouer longtemps : un peu d’eau qui reste accrochée est la bienvenue.",
        },
        {
          title: "Finir dans la sauteuse",
          text: "Retirez les tiges de basilic, puis mettez les pâtes dans la sauce, à feu moyen-vif, avec 10 cl d’eau de cuisson. Mélangez sans arrêt à la pince pendant 2 minutes, jusqu’à ce que la sauce épaississe, brille et accroche aux pâtes. Si elle sèche, ajoutez de l’eau de cuisson par petites quantités.",
          timer: { minutes: 2, label: "Pâtes dans la sauce" },
          tip: "Le mouvement compte : en remuant vite, l’amidon de l’eau émulsionne l’huile et le jus de tomate en une sauce crémeuse.",
        },
        {
          title: "Servir",
          text: "Hors du feu, déchirez les feuilles de basilic par-dessus et arrosez d’une cuillerée d’huile d’olive. Servez aussitôt dans des assiettes chaudes, avec le parmesan à part.",
        },
      ],
    },
  ],
  science: [
    {
      title: "L’eau de cuisson qui lie",
      text: "En cuisant, les pâtes libèrent de l’amidon dans l’eau. Ajouté à la sauce, cet amidon gonfle et entoure les gouttelettes d’huile : il les empêche de se regrouper et forme avec le jus de tomate une émulsion qui nappe au lieu de se séparer.",
    },
    {
      title: "Finir la cuisson dans la sauce",
      text: "Les pâtes retirées 2 minutes avant la fin ont encore un cœur qui absorbe du liquide. Dans la sauteuse, elles boivent de la sauce plutôt que de l’eau, et l’amidon de leur surface épaissit le tout.",
    },
    {
      title: "Réduire à découvert",
      text: "Sans couvercle, l’eau des tomates s’évapore et leurs sucres, leurs acides et leurs arômes se concentrent. En 20 minutes, la sauce perd environ un tiers de son volume et passe d’un jus à une sauce qui tient sur la cuillère.",
    },
  ],
  tips: [
    "Salez l’eau franchement, 10 g par litre : c’est le seul moment où le sel pénètre dans les pâtes.",
    "Prenez des tomates pelées entières plutôt que concassées : en les écrasant à la main, vous gardez des morceaux qui donnent du relief à la sauce.",
    "Pas d’huile dans l’eau des pâtes : elle reste en surface et n’empêche rien. Remuer pendant la première minute suffit.",
    "Choisissez une sauteuse assez large pour accueillir toutes les pâtes : c’est elle qui sert à les finir, pas la casserole.",
  ],
  mistakes: [
    "Égoutter les pâtes à fond et jeter toute l’eau : sans amidon, la sauce glisse et reste au fond de l’assiette. Gardez toujours 25 cl d’eau de cuisson.",
    "Faire dorer l’ail jusqu’au brun : la sauce entière devient amère. Il doit à peine blondir avant l’arrivée des tomates.",
    "Cuire les pâtes jusqu’au bout dans l’eau : elles deviennent molles en finissant dans la sauce. Retirez-les 2 minutes avant le temps indiqué.",
    "Couvrir la sauce pendant qu’elle mijote : elle ne réduit pas et reste aqueuse. Laissez la sauteuse ouverte.",
  ],
  variations: [
    {
      title: "Plus relevée",
      text: "Ajoutez 1 ou 2 piments séchés émiettés avec l’ail, et remplacez le basilic par 2 cuillerées à soupe de persil plat ciselé.",
    },
    {
      title: "Au beurre et à l’oignon",
      text: "Remplacez l’huile et l’ail par 70 g de beurre et 1 oignon pelé coupé en deux, laissé tel quel dans la sauce. Laissez mijoter 45 minutes et retirez l’oignon : la sauce est plus douce et plus ronde.",
    },
    {
      title: "Avec des tomates fraîches",
      text: "En août et septembre, remplacez les boîtes par 1 kg de tomates bien mûres, pelées et coupées en morceaux. Comptez 25 à 30 minutes de mijotage, elles rendent plus d’eau.",
    },
  ],
  storage:
    "La sauce seule se garde 3 jours au réfrigérateur dans une boîte fermée, ou 3 mois au congélateur ; décongelez-la une nuit au frais et ne la recongelez pas. Les pâtes déjà mélangées se gardent 2 jours au frais et se réchauffent à la poêle avec 2 cuillerées à soupe d’eau.",
  pairing: "Un rouge souple servi un peu frais, comme un côtes-du-rhône ou un sangiovese.",
  faq: [
    {
      q: "Combien de temps faut-il faire cuire une sauce tomate ?",
      a: "20 minutes à petits frémissements et à découvert suffisent avec des tomates en conserve : la sauce a réduit d’un tiers et l’huile perle sur les bords. Au-delà de 45 minutes, elle prend un goût plus confit et moins frais.",
    },
    {
      q: "Faut-il ajouter du sucre dans la sauce tomate ?",
      a: "Non, en général. De bonnes tomates en conserve n’en ont pas besoin. Si la sauce reste très acide après 20 minutes, une petite pincée de sucre l’arrondit sans la rendre sucrée.",
    },
    {
      q: "Pourquoi garder l’eau de cuisson des pâtes ?",
      a: "Parce qu’elle contient l’amidon libéré par les pâtes. Ajoutée à la sauce, elle lie l’huile et le jus de tomate, et la sauce nappe les pâtes au lieu de rester au fond de l’assiette. 25 cl suffisent largement pour 400 g de pâtes.",
    },
    {
      q: "Combien de pâtes faut-il prévoir par personne ?",
      a: "100 g de pâtes sèches par personne pour un plat, 60 à 70 g en entrée ou pour un jeune enfant. Comptez 1 litre d’eau et 10 g de gros sel pour 100 g de pâtes.",
    },
    {
      q: "Peut-on congeler la sauce tomate ?",
      a: "Oui, 3 mois au congélateur, dans une boîte hermétique et sans les pâtes. Décongelez-la une nuit au réfrigérateur, réchauffez-la à feu doux et ne la recongelez pas.",
    },
    {
      q: "Quelles pâtes choisir avec une sauce tomate ?",
      a: "Des spaghetti, des linguine, des penne ou des rigatoni. Les pâtes longues s’enrobent bien de cette sauce assez lisse ; les pâtes creuses retiennent les morceaux de tomate à l’intérieur.",
    },
  ],
  nutrition: {
    calories: 585,
    protein: 18,
    fat: 22,
    saturatedFat: 5,
    carbs: 78,
    sugar: 9,
    fiber: 5,
    sodium: 1000,
  },
  annotations: { hero: "la sauce accroche, elle ne glisse pas", detail: "le basilic, tout à la fin" },
  images: {
    heroAlt:
      "Assiette creuse de spaghetti à la sauce tomate, parmesan râpé et feuilles de basilic, couverts posés à côté",
    detailAlt: "Une main dépose des feuilles de basilic sur des spaghetti à la sauce tomate couverts de parmesan râpé",
    credits: {
      hero: {
        photographer: "Nadin Sh",
        url: "https://www.pexels.com/photo/spaghetti-with-tomato-sauce-sprinkled-with-parmesan-and-topped-with-a-basil-leaves-18411462/",
      },
      detail: {
        photographer: "cottonbro studio",
        url: "https://www.pexels.com/photo/food-hand-texture-pasta-4057738/",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#C8372D",
    onAccent: "#ffffff",
    ink: "#9A2A22",
    tint: "#FBEDEA",
    deep: "#1A0B09",
    focus: "50% 66%",
  },
});
