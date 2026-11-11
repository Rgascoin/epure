import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "gaufres",
  title: "Gaufres",
  seoTitle: "Gaufres maison : pâte légère, gaufres croustillantes",
  tagline: "Sorties du gaufrier, jamais empilées.",
  description:
    "Des gaufres maison croustillantes dehors et légères dedans : une pâte au beurre, des blancs en neige, 3 à 4 minutes au gaufrier. 12 gaufres en 50 minutes.",
  summary:
    "Pour 12 gaufres, mélangez 250 g de farine, 1 sachet de levure chimique, 30 g de sucre et une pincée de sel, puis ajoutez 3 jaunes d’œufs, 40 cl de lait et 100 g de beurre fondu. Incorporez les 3 blancs montés en neige ferme et faites cuire chaque gaufre 3 à 4 minutes dans un gaufrier bien chaud. Posez-les sur une grille, jamais en pile, pour qu’elles restent croustillantes.",
  intro: [
    "Une bonne gaufre maison est croustillante dehors, légère et un peu moelleuse dedans. Pour y arriver, la pâte contient assez de beurre pour dorer contre les plaques, et des blancs montés en neige pour l’alléger. C’est la version du goûter, à manger avec du sucre glace, de la confiture ou de la chantilly.",
    "Le reste dépend du gaufrier : bien chaud, graissé pour les premières gaufres, et qu’on n’ouvre pas avant la fin. La première sert souvent de réglage, ce n’est pas grave.",
    "Ce qui peut rater : des gaufres molles, presque toujours parce qu’on les a empilées en sortant de l’appareil. Comptez 20 minutes de préparation et une demi-heure de cuisson pour 12 gaufres.",
  ],
  category: "Goûter",
  cuisine: "Française",
  keywords: [
    "gaufres",
    "recette gaufres",
    "pâte à gaufres",
    "gaufres maison",
    "gaufres croustillantes",
    "pâte à gaufres facile",
    "gaufres légères",
    "gaufres au gaufrier",
    "gaufres moelleuses",
  ],
  diet: ["vegetarian"],
  servings: 12,
  servingsLabel: { one: "gaufre", other: "gaufres" },
  times: { prep: 20, cook: 30 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Toute l’année"],
  equipment: [
    "gaufrier électrique",
    "2 saladiers",
    "fouet et batteur électrique",
    "spatule souple",
    "louche",
    "grille à pâtisserie",
    "pinceau",
  ],
  ingredients: [
    {
      title: "La pâte",
      items: [
        { qty: 250, unit: "g", name: "farine T45", note: "ou T55", step: 10 },
        { qty: 1, unit: "sachet", name: "levure chimique", note: "11 g", step: 0.5 },
        { qty: 30, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 3, name: "œuf", plural: "œufs", note: "blancs et jaunes séparés", step: 1 },
        { qty: 40, unit: "cl", name: "lait entier", note: "à température ambiante", step: 5 },
        { qty: 100, unit: "g", name: "beurre doux", note: "fondu et tiédi", step: 10 },
        { qty: 1, unit: "cac", name: "extrait de vanille", step: 1, optional: true },
      ],
    },
    {
      title: "La cuisson et le service",
      items: [
        { qty: 1, unit: "cas", name: "huile neutre", note: "pour graisser le gaufrier", step: 1, fixed: true },
        { qty: 30, unit: "g", name: "sucre glace", note: "ou de la confiture, de la chantilly", step: 5 },
      ],
    },
  ],
  method: [
    {
      title: "La pâte",
      steps: [
        {
          title: "Mélanger les poudres",
          text: "Dans un grand saladier, mélangez la farine, la levure, le sucre et le sel. Creusez un puits au centre.",
        },
        {
          title: "Ajouter jaunes et lait",
          text: "Séparez les blancs des jaunes ; gardez les blancs dans un saladier propre. Versez les jaunes et la moitié du lait dans le puits et fouettez en partant du centre, en ramenant la farine peu à peu, jusqu’à obtenir une pâte épaisse et lisse. Ajoutez alors le reste du lait, le beurre fondu tiède et la vanille, si vous en mettez.",
          tip: "Commencer avec la moitié du lait évite les grumeaux : une pâte épaisse se lisse au fouet, une pâte liquide garde ses grumeaux.",
        },
        {
          title: "Préchauffer le gaufrier",
          text: "Branchez le gaufrier et laissez-le chauffer 10 minutes, ou jusqu’à ce que son voyant indique qu’il est prêt. Allumez aussi le four à 100 °C et glissez-y une grille, pour garder les gaufres au chaud.",
          timer: { minutes: 10, label: "Préchauffage du gaufrier" },
        },
        {
          title: "Monter les blancs",
          text: "Montez les blancs en neige ferme au batteur électrique, en commençant à vitesse moyenne puis en accélérant. Ils sont prêts quand ils forment un bec qui se tient droit au bout du fouet.",
        },
        {
          title: "Incorporer les blancs",
          text: "Mélangez un tiers des blancs à la pâte au fouet, franchement, pour l’assouplir. Ajoutez le reste et incorporez-le à la spatule, en soulevant la pâte du fond vers le dessus et en tournant le saladier, jusqu’à ce qu’il ne reste plus de traces blanches. La pâte est mousseuse et nappe la spatule.",
          tip: "Ne cherchez pas une pâte parfaitement homogène : quelques petits flocons de blanc valent mieux qu’une pâte retombée à force de mélanger.",
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Cuire les gaufres",
          text: "Graissez les plaques au pinceau avec un peu d’huile. Versez une louche de pâte (100 à 120 ml) au centre de la plaque, étalez-la vers les bords avec le dos de la louche, fermez et laissez cuire 3 à 4 minutes sans ouvrir. La gaufre est prête quand la vapeur ne s’échappe presque plus et qu’elle est bien dorée.",
          timer: { minutes: 4, label: "Cuisson d’une gaufre" },
          tip: "La première gaufre sert de test : elle vous dit s’il faut plus ou moins de pâte, et si l’appareil est assez chaud. Regraissez les plaques pour la deuxième ; ensuite, le beurre de la pâte suffit.",
        },
        {
          title: "Garder au chaud",
          text: "Posez chaque gaufre cuite sur la grille du four, en une seule couche, le temps de cuire les suivantes : elles restent croustillantes. Servez-les saupoudrées de sucre glace, ou avec de la confiture ou de la chantilly.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Les blancs font la légèreté",
      text: "Les blancs montés emprisonnent une multitude de petites bulles d’air, stabilisées par leurs protéines. Dans le gaufrier, cet air se dilate et l’eau de la pâte se change en vapeur : la gaufre gonfle et garde un intérieur alvéolé et léger.",
    },
    {
      title: "Le beurre fait le croustillant",
      text: "Au contact des plaques très chaudes, le beurre contenu dans la pâte fait frire sa surface. Le sucre et les protéines du lait et des œufs y brunissent, par caramélisation et réaction de Maillard. Sans assez de gras, la gaufre sèche sans croustiller.",
    },
    {
      title: "La vapeur sert de minuteur",
      text: "Pendant la cuisson, l’eau de la pâte s’échappe en vapeur par les bords de l’appareil. Tant qu’il en sort beaucoup, la surface est encore humide et ne peut pas vraiment dorer. Quand le panache faiblit, la croûte s’est formée : c’est le moment d’ouvrir.",
    },
  ],
  tips: [
    "N’ouvrez pas le gaufrier avant la fin : une gaufre qui n’est pas prise se déchire en deux, une moitié collée à chaque plaque.",
    "Dosez la pâte avec la même louche à chaque fois : vous trouverez vite la bonne quantité pour votre appareil.",
    "Pour gagner du temps, préparez la pâte sans les blancs jusqu’à 1 heure à l’avance, et incorporez les blancs juste avant de cuire.",
    "Mangez-les dans la demi-heure. Sinon, un passage au grille-pain leur rend leur croustillant.",
  ],
  mistakes: [
    "Ouvrir le gaufrier trop tôt : la gaufre se déchire et colle aux deux plaques.",
    "Empiler les gaufres chaudes : leur vapeur les ramollit en quelques minutes.",
    "Mélanger les blancs vigoureusement : ils retombent et les gaufres deviennent denses.",
    "Cuire dans un gaufrier pas assez chaud : la gaufre reste pâle, molle, et accroche aux plaques.",
    "Verser trop de pâte : elle déborde et brûle sur les bords de l’appareil.",
  ],
  variations: [
    {
      title: "Plus croustillantes",
      text: "Remplacez 50 g de farine par 50 g de fécule de maïs. Les gaufres sont plus fines sous la dent et restent croustillantes un peu plus longtemps.",
    },
    {
      title: "À la levure de boulanger",
      text: "Remplacez la levure chimique par 10 g de levure de boulanger fraîche délayée dans le lait tiède, et laissez lever la pâte 1 heure à couvert avant d’ajouter les blancs. Les gaufres ont un goût plus profond, proche de celles de Bruxelles.",
    },
    {
      title: "Salées",
      text: "Supprimez le sucre et la vanille, et ajoutez à la pâte 60 g de comté râpé et quelques tours de poivre. À servir avec du jambon, une salade et une cuillerée de crème épaisse.",
    },
  ],
  storage:
    "Elles se gardent 2 jours en boîte fermée à température ambiante, et 2 mois au congélateur. Repassez-les au grille-pain ou 5 minutes au four à 180 °C. La pâte crue se garde 24 heures au réfrigérateur, mais les blancs retombent.",
  pairing: "Un chocolat chaud ou un grand verre de lait froid ; pour les adultes, un cidre doux.",
  faq: [
    {
      q: "Pourquoi mes gaufres sont molles ?",
      a: "Le plus souvent, parce qu’elles ont été empilées en sortant du gaufrier : leur vapeur les ramollit. Posez-les sur une grille, dans le four à 100 °C. Autres causes possibles : un gaufrier pas assez chaud, une gaufre ouverte trop tôt, ou une pâte trop pauvre en beurre.",
    },
    {
      q: "Faut-il laisser reposer la pâte à gaufres ?",
      a: "Pas avec de la levure chimique : elle commence à agir dès qu’elle est mouillée, et les blancs en neige retombent avec le temps. Cuisez la pâte dans l’heure. Avec de la levure de boulanger, en revanche, il faut 1 heure de pousse avant d’ajouter les blancs.",
    },
    {
      q: "Combien de temps cuire une gaufre ?",
      a: "3 à 4 minutes dans un gaufrier bien chaud, pour une louche de 100 à 120 ml de pâte. Le meilleur repère, c’est la vapeur : quand elle ne s’échappe presque plus, la gaufre est cuite. Chaque appareil est différent, la première gaufre sert à régler.",
    },
    {
      q: "Comment empêcher les gaufres de coller au gaufrier ?",
      a: "Préchauffez bien l’appareil et graissez les plaques au pinceau pour les deux premières gaufres, même si elles sont antiadhésives. Le beurre de la pâte prend ensuite le relais. Et n’ouvrez pas avant la fin : une gaufre pas encore prise colle et se déchire.",
    },
    {
      q: "Quelle différence entre gaufre de Liège et gaufre de Bruxelles ?",
      a: "La gaufre de Liège est faite d’une pâte levée épaisse, proche d’une brioche, avec du sucre perlé qui caramélise dans le gaufrier ; elle se mange nature. Celle de Bruxelles est rectangulaire, légère et croustillante, et se garnit. Les gaufres de cette recette sont proches de la seconde.",
    },
    {
      q: "Peut-on congeler des gaufres ?",
      a: "Oui, jusqu’à 2 mois, une fois refroidies et bien emballées. Passez-les directement du congélateur au grille-pain, ou quelques minutes au four à 180 °C : elles redeviennent croustillantes.",
    },
  ],
  nutrition: {
    calories: 200,
    protein: 5,
    fat: 10,
    saturatedFat: 5.5,
    carbs: 22,
    sugar: 7,
    fiber: 0.6,
    sodium: 110,
  },
  annotations: {
    hero: "on n’ouvre pas avant la fin",
    detail: "une grille, jamais une pile",
  },
  images: {
    heroAlt: "Gaufres rectangulaires dorées et croustillantes posées debout sur un petit support doré, fond blanc",
    detailAlt: "Sucre glace saupoudré sur deux gaufres dorées, sur fond noir",
    credits: {
      hero: { photographer: "Pexels", url: "https://www.pexels.com/photo/4963802/" },
      detail: { photographer: "Pexels", url: "https://www.pexels.com/photo/28919124/" },
    },
  },
  datePublished: "2026-11-09",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#D18A3A",
    onAccent: "#1b1712",
    ink: "#8A5316",
    tint: "#FAF1E5",
    deep: "#1B130A",
    focus: "50% 64%",
  },
});
