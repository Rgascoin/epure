import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "burger-maison",
  title: "Burger maison",
  seoTitle: "Burger maison : pains briochés et steak juteux cuit à cœur",
  tagline: "Même le pain sort de votre four.",
  description:
    "4 burgers maison : pains briochés au sésame, steaks de 150 g cuits à 70 °C à cœur, cheddar fondu et sauce maison. 3 h 25, dont 2 h 15 de pousse.",
  summary:
    "Pour 4 burgers, pétrissez une pâte briochée avec 250 g de farine, laissez-la pousser 1 h 30 puis 45 minutes en petits pains, et faites-les cuire 15 minutes à 190 °C. Les 600 g de bœuf haché à 15 ou 20 % de matières grasses forment 4 steaks de 150 g, saisis 7 à 8 minutes à la poêle ou au barbecue jusqu’à 70 °C à cœur, sous une tranche de cheddar fondu. Comptez 3 h 25 en tout, dont 45 minutes de travail. Avec des pains achetés, 35 minutes suffisent.",
  intro: [
    "Un burger maison tient à trois choses : un pain brioché assez solide pour ne pas s’effondrer sous la sauce, un steak juteux, du fromage qui coule sur les bords. Ici on fait tout, pain compris, et c’est lui qui change le plus le résultat.",
    "Le piège, c’est le steak. Trop pétri, il devient élastique comme une saucisse ; trop maigre, il sèche, d’autant qu’un steak haché se cuit à cœur. Il faut une viande à 15 ou 20 % de gras, à peine tassée, salée au dernier moment.",
    "Achetez un thermomètre à sonde si vous n’en avez pas. À 70 °C au centre, le steak est sûr pour toute la famille, enfants compris, et il reste juteux si vous l’avez laissé tranquille dans la poêle.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "burger maison",
    "recette burger maison",
    "hamburger maison",
    "cheeseburger maison",
    "pain burger maison",
    "steak haché pour burger",
    "sauce burger maison",
    "burger au barbecue",
    "cuisson steak haché burger",
  ],
  servings: 4,
  servingsLabel: { one: "burger", other: "burgers" },
  times: { prep: 45, cook: 25, rest: 135 },
  difficulty: "Intermédiaire",
  cost: "€€",
  season: ["Été"],
  tags: ["barbecue", "ete"],
  equipment: [
    "saladier",
    "plaque de cuisson et papier cuisson",
    "grande poêle en fonte ou barbecue",
    "thermomètre à sonde",
    "pinceau",
  ],
  ingredients: [
    {
      title: "Les pains",
      items: [
        { qty: 250, unit: "g", name: "farine T45", note: "ou farine de gruau", step: 10 },
        { qty: 4, unit: "g", name: "levure sèche de boulanger", note: "ou 10 g de levure fraîche", step: 1 },
        { qty: 10, unit: "g", name: "sucre", step: 5 },
        { qty: 5, unit: "g", name: "sel fin", step: 1 },
        { qty: 125, unit: "ml", name: "lait entier", note: "tiède, à 30 °C environ", step: 5 },
        { qty: 1, name: "œuf", plural: "œufs", note: "battu, 1 cas gardée pour la dorure", step: 1 },
        { qty: 25, unit: "g", name: "beurre", note: "mou", step: 5 },
        { qty: 1, unit: "cas", name: "graines de sésame", step: 1 },
      ],
    },
    {
      title: "La sauce",
      items: [
        { qty: 4, unit: "cas", name: "mayonnaise", step: 1 },
        { qty: 1, unit: "cas", name: "ketchup", step: 1 },
        { qty: 1, unit: "cac", name: "moutarde", step: 1 },
        { qty: 2, name: "cornichon", plural: "cornichons", note: "hachés finement", step: 1 },
      ],
    },
    {
      title: "Les steaks",
      items: [
        {
          qty: 600,
          unit: "g",
          name: "bœuf haché",
          note: "15 à 20 % de matières grasses, paleron ou macreuse",
          step: 50,
        },
        { qty: 1, unit: "cac", name: "huile neutre", step: 1 },
        { name: "sel", note: "au moment de cuire" },
        { name: "poivre noir", note: "du moulin" },
        { qty: 4, unit: "tranche", name: "cheddar", step: 1 },
      ],
    },
    {
      title: "La garniture",
      items: [
        { qty: 4, unit: "feuille", name: "laitue", note: "sucrine ou iceberg", step: 1 },
        { qty: 1, name: "tomate", plural: "tomates", note: "bien mûre", step: 1 },
        { qty: 0.5, name: "oignon rouge", plural: "oignons rouges", step: 0.5 },
      ],
    },
  ],
  method: [
    {
      title: "Les pains",
      steps: [
        {
          title: "Pétrir la pâte",
          text: "Dans un saladier, mélangez la farine, la levure et le sucre, puis le sel. Versez le lait tiède et l’œuf battu, sans la cuillerée réservée pour la dorure. Pétrissez 10 minutes sur le plan de travail, puis ajoutez le beurre mou et pétrissez encore 5 minutes. La pâte est prête quand elle est lisse, souple et ne colle plus aux doigts.",
          timer: { minutes: 15, label: "Pétrissage" },
          tip: "Au robot, crochet à vitesse moyenne : comptez à peu près la moitié du temps.",
        },
        {
          title: "Laisser pousser",
          text: "Couvrez le saladier d’un torchon et laissez lever 1 h 30 dans un endroit tiède, à l’abri des courants d’air. La pâte doit doubler de volume.",
          timer: { minutes: 90, label: "Première pousse" },
        },
        {
          title: "Façonner les pains",
          text: "Dégazez la pâte d’une pression de la main et divisez-la en 4 pâtons d’environ 115 g. Boulez-les en ramenant les bords dessous pour tendre la surface, puis posez-les sur la plaque couverte de papier cuisson, bien espacés. Aplatissez-les de la paume jusqu’à 9 cm de diamètre.",
        },
        {
          title: "Seconde pousse",
          text: "Couvrez et laissez gonfler 45 minutes. Préchauffez le four à 190 °C pendant la dernière demi-heure. Les pains sont prêts quand une pression du doigt laisse une marque qui remonte lentement.",
          timer: { minutes: 45, label: "Seconde pousse" },
        },
        {
          title: "Cuire les pains",
          text: "Badigeonnez les pains de l’œuf réservé, parsemez de sésame et enfournez 15 minutes, jusqu’à ce qu’ils soient bien dorés et sonnent creux quand on tape dessous. Laissez-les refroidir sur une grille au moins 30 minutes avant de les couper.",
          timer: { minutes: 15, label: "Cuisson des pains" },
        },
      ],
    },
    {
      title: "Les burgers",
      steps: [
        {
          title: "Préparer sauce et garniture",
          text: "Mélangez la mayonnaise, le ketchup, la moutarde et les cornichons hachés. Lavez et séchez la laitue. Coupez la tomate en 4 tranches et l’oignon en rondelles très fines.",
        },
        {
          title: "Former les steaks",
          text: "Divisez la viande en 4 portions de 150 g. Formez des galettes de 1,5 cm d’épaisseur, 1 cm plus larges que les pains, en tassant juste assez pour qu’elles se tiennent. Creusez le centre du pouce sur 5 mm. Gardez-les au réfrigérateur jusqu’à la cuisson, puis salez et poivrez les deux faces au dernier moment.",
          tip: "Moins on manipule la viande, plus le steak reste tendre. Travaillez avec les mains froides, sans pétrir.",
        },
        {
          title: "Toaster les pains",
          text: "Coupez les pains en deux. Faites chauffer la poêle à sec sur feu moyen et posez-y les pains côté mie pendant 1 minute, jusqu’à ce qu’ils soient dorés. Réservez.",
          timer: { minutes: 1, label: "Pains toastés" },
        },
        {
          title: "Cuire les steaks",
          text: "Ajoutez l’huile dans la poêle et montez à feu moyen-vif. Quand l’huile frémit, posez les steaks et n’y touchez plus pendant 4 minutes : une croûte brune se forme. Retournez-les et comptez 3 à 4 minutes de plus. Ils sont cuits quand le thermomètre indique 70 °C au centre et qu’il ne reste plus de rose.",
          timer: { minutes: 8, label: "Cuisson des steaks" },
          tip: "N’écrasez jamais le steak avec la spatule : chaque pression chasse du jus dans la poêle.",
        },
        {
          title: "Faire fondre le cheddar",
          text: "Pendant la dernière minute de cuisson, posez une tranche de cheddar sur chaque steak, versez 1 cuillère à soupe d’eau dans la poêle, à côté de la viande, et couvrez. La vapeur fait fondre le fromage, qui doit couler sur les bords.",
        },
        {
          title: "Monter les burgers",
          text: "Tartinez de sauce les deux moitiés de chaque pain. Sur la base, posez la laitue, le steak et son cheddar, la tomate et l’oignon, puis refermez. Servez tout de suite, avant que la vapeur du steak ne ramollisse le pain.",
        },
      ],
    },
  ],
  science: [
    {
      title: "La croûte du steak",
      text: "Au contact d’une poêle très chaude, les sucres et les acides aminés de la viande réagissent entre eux au-delà de 140 °C environ : c’est la réaction de Maillard, qui donne la croûte brune et les arômes grillés. Un steak qu’on déplace sans cesse, ou posé dans une poêle tiède, cuit dans son jus et reste gris.",
    },
    {
      title: "Pourquoi le haché se cuit à cœur",
      text: "Sur un morceau entier, les bactéries restent en surface et la saisie les détruit. Le hachage les répartit dans toute la masse, y compris certaines souches d’E. coli dangereuses pour les jeunes enfants. Une température de 70 °C au centre les élimine : c’est la cuisson recommandée pour la viande hachée.",
    },
    {
      title: "Le sel au dernier moment",
      text: "Mélangé à la viande crue, le sel dissout une partie de ses protéines, qui se lient alors entre elles comme dans une chair à saucisse. Le steak devient compact et élastique. Salé en surface juste avant la cuisson, il garde une texture lâche et tendre.",
    },
    {
      title: "Le creux au centre",
      text: "En cuisant, les fibres de la viande se contractent et les bords se resserrent, ce qui fait bomber le centre. Le petit creux fait au pouce compense ce gonflement : le steak reste plat et cuit de façon égale.",
    },
  ],
  tips: [
    "Demandez au boucher de hacher le paleron devant vous et cuisinez-le le jour même.",
    "Prenez une viande à 15 ou 20 % de matières grasses : à 5 %, un steak cuit à cœur devient sec.",
    "Piquez le thermomètre par le côté du steak, jusqu’au centre : pas besoin de le couper pour vérifier la cuisson.",
    "Pour les enfants, faites des steaks de 100 g un peu plus fins : ils atteignent 70 °C plus vite, sans brûler dehors.",
    "Les pains se font la veille : enveloppés dans un torchon, ils restent moelleux jusqu’au lendemain.",
  ],
  mistakes: [
    "Pétrir le steak comme une boulette : la viande se resserre et devient caoutchouteuse. Façonnez-le en quelques gestes, sans écraser.",
    "Former des steaks à la taille exacte du pain : ils rétrécissent à la cuisson et finissent perdus au milieu. Faites-les 1 cm plus larges.",
    "Couper les pains encore chauds : la mie colle au couteau et devient pâteuse. Attendez au moins 30 minutes.",
    "Choisir un haché à 5 % de matières grasses : cuit à cœur, il sèche. Gardez le maigre pour une bolognaise.",
    "Monter les burgers trop tôt : le pain boit le jus et s’affaisse. Assemblez au moment de servir.",
  ],
  variations: [
    {
      title: "Au barbecue",
      text: "Attendez des braises couvertes de cendre blanche et huilez la grille. Comptez 4 minutes par face, couvercle fermé si vous en avez un, et vérifiez 70 °C à cœur. Posez le cheddar pour la dernière minute et toastez les pains 30 secondes côté mie, au bord de la grille.",
    },
    {
      title: "Smash burger",
      text: "Faites 8 boules de 75 g. Posez-les dans la poêle brûlante et écrasez-les aussitôt en galettes de 5 mm avec une spatule rigide, une seule fois, avant que le jus ne se forme. Comptez 2 minutes par face et empilez-les par deux avec le cheddar.",
    },
    {
      title: "Autre fromage",
      text: "Remplacez le cheddar par du comté ou de la tomme en tranches de 3 mm, ou par 80 g de bleu émietté. Le comté fond moins vite : couvrez la poêle 2 minutes au lieu d’une.",
    },
    {
      title: "Oignons confits",
      text: "Faites fondre 2 oignons émincés dans 20 g de beurre, 20 minutes à feu doux avec une pincée de sel, jusqu’à ce qu’ils soient bruns et sucrés. Ils remplacent l’oignon cru.",
    },
  ],
  storage:
    "Les pains se gardent 2 jours dans un torchon ou un sac fermé, 2 mois au congélateur. La viande hachée crue se cuisine le jour de l’achat. Les steaks cuits se gardent 2 jours au réfrigérateur et se réchauffent à la poêle, couverts, jusqu’à 70 °C à cœur.",
  pairing:
    "Des frites maison ou des pommes de terre rôties, une salade de chou cru. À boire, une bière blonde ou un rouge léger servi frais, comme un gamay.",
  easy: {
    shortcut: "pains à burger briochés du commerce",
    note: "Prenez des pains briochés de boulangerie plutôt que ceux en sachet, plus mous, qui s’affaissent sous la sauce. On perd le goût de beurre et la mie serrée des pains maison, on gagne plus de 2 h : les burgers sont prêts en 35 minutes.",
    times: { prep: 25, cook: 10 },
    ingredients: [
      {
        title: "Les pains",
        items: [{ qty: 4, name: "pain à burger brioché", plural: "pains à burger briochés", step: 1 }],
      },
      {
        title: "La sauce",
        items: [
          { qty: 4, unit: "cas", name: "mayonnaise", step: 1 },
          { qty: 1, unit: "cas", name: "ketchup", step: 1 },
          { qty: 1, unit: "cac", name: "moutarde", step: 1 },
          { qty: 2, name: "cornichon", plural: "cornichons", note: "hachés finement", step: 1 },
        ],
      },
      {
        title: "Les steaks",
        items: [
          {
            qty: 600,
            unit: "g",
            name: "bœuf haché",
            note: "15 à 20 % de matières grasses, paleron ou macreuse",
            step: 50,
          },
          { qty: 1, unit: "cac", name: "huile neutre", step: 1 },
          { name: "sel", note: "au moment de cuire" },
          { name: "poivre noir", note: "du moulin" },
          { qty: 4, unit: "tranche", name: "cheddar", step: 1 },
        ],
      },
      {
        title: "La garniture",
        items: [
          { qty: 4, unit: "feuille", name: "laitue", note: "sucrine ou iceberg", step: 1 },
          { qty: 1, name: "tomate", plural: "tomates", note: "bien mûre", step: 1 },
          { qty: 0.5, name: "oignon rouge", plural: "oignons rouges", step: 0.5 },
        ],
      },
    ],
    method: [
      {
        title: "Les burgers",
        steps: [
          {
            title: "Préparer sauce et garniture",
            text: "Mélangez la mayonnaise, le ketchup, la moutarde et les cornichons. Lavez la laitue, coupez la tomate en 4 tranches et l’oignon en rondelles très fines.",
          },
          {
            title: "Former les steaks",
            text: "Divisez la viande en 4 galettes de 150 g et 1,5 cm d’épaisseur, 1 cm plus larges que les pains, sans pétrir. Creusez le centre du pouce. Salez et poivrez les deux faces juste avant la cuisson.",
          },
          {
            title: "Toaster les pains",
            text: "Coupez les pains en deux et faites-les dorer côté mie 1 minute dans la poêle chaude, à sec. Réservez.",
            timer: { minutes: 1, label: "Pains toastés" },
          },
          {
            title: "Cuire les steaks",
            text: "Ajoutez l’huile, montez à feu moyen-vif et posez les steaks. Laissez-les 4 minutes sans y toucher, retournez-les et comptez 3 à 4 minutes de plus, jusqu’à 70 °C au centre, sans trace de rose.",
            timer: { minutes: 8, label: "Cuisson des steaks" },
          },
          {
            title: "Fondre et monter",
            text: "Pendant la dernière minute de cuisson, posez le cheddar sur les steaks, versez 1 cuillère à soupe d’eau à côté et couvrez. Tartinez les pains de sauce, montez laitue, steak, tomate et oignon, et servez aussitôt.",
          },
        ],
      },
    ],
  },
  faq: [
    {
      q: "Quelle viande choisir pour un burger maison ?",
      a: "15 à 20 % de matières grasses, c’est la règle. Du paleron ou de la macreuse, haché par le boucher le jour même. En dessous de 15 %, le steak cuit à cœur devient sec.",
    },
    {
      q: "Peut-on manger un burger saignant ?",
      a: "Non, pas avec de la viande hachée. Le hachage fait passer à l’intérieur les bactéries de la surface, dont certaines souches d’E. coli. Les autorités sanitaires recommandent une cuisson à cœur, à 70 °C, indispensable pour les jeunes enfants, les femmes enceintes, les personnes âgées ou immunodéprimées.",
    },
    {
      q: "Combien de temps cuire un steak de burger à la poêle ?",
      a: "7 à 8 minutes pour un steak de 150 g et 1,5 cm d’épaisseur : 4 minutes sur la première face sans y toucher, 3 à 4 minutes sur la seconde. Vérifiez au thermomètre : 70 °C au centre.",
    },
    {
      q: "Peut-on préparer les pains à burger la veille ?",
      a: "Oui. Une fois refroidis, enveloppez-les dans un torchon ou un sac fermé : ils restent moelleux jusqu’au lendemain. Toastés côté mie au moment de servir, ils retrouvent du croustillant.",
    },
    {
      q: "Peut-on congeler des pains à burger maison ?",
      a: "Oui, 2 mois, dans un sac congélation bien fermé. Laissez-les décongeler 2 heures à température ambiante, puis toastez-les côté mie avant de monter les burgers.",
    },
    {
      q: "Quel fromage mettre dans un burger ?",
      a: "Le cheddar, qui fond vite et nappe le steak. Le comté, la tomme ou la raclette marchent aussi, en tranches fines de 3 mm ; couvrez la poêle pour qu’ils fondent à temps.",
    },
  ],
  nutrition: { calories: 805, protein: 42, fat: 47, saturatedFat: 17, carbs: 53, sugar: 7, fiber: 3, sodium: 1100 },
  annotations: { hero: "un pain brioché qui tient la sauce", detail: "braises blanches, 4 minutes par face" },
  images: {
    heroAlt:
      "Burger maison sur une planche en bois : pain brioché au sésame, steak haché, cheddar fondu, laitue et tranche de tomate",
    detailAlt: "Steaks hachés pour burgers en train de griller sur la grille d’un barbecue, au-dessus des braises",
    credits: {
      hero: { photographer: "Engin Akyurt", url: "https://www.pexels.com/photo/hamburger-on-wooden-board-2271099/" },
      detail: {
        photographer: "Dan Galvani Sommavilla",
        url: "https://www.pexels.com/photo/tasty-meat-cutlets-on-grill-grid-4618030/",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#D9822B",
    onAccent: "#1B1712",
    ink: "#8A4A12",
    tint: "#FBF0E4",
    deep: "#1A0F08",
    focus: "50% 50%",
  },
});
