import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "raclette",
  title: "Raclette",
  seoTitle: "Raclette : les quantités par personne et le bon déroulé",
  tagline: "Le fromage sort du frigo en premier.",
  description:
    "La raclette pour 6 : 200 g de fromage, 300 g de pommes de terre et 100 g de charcuterie par personne, prête en 45 minutes, avec ou sans appareil.",
  summary:
    "Pour 6 personnes, comptez 1,2 kg de fromage à raclette (200 g chacun), 1,8 kg de pommes de terre à chair ferme et 600 g de charcuterie. Sortez le fromage du réfrigérateur 30 minutes à 1 heure avant, cuisez les pommes de terre dans leur peau 20 à 25 minutes à l’eau salée, gardez-les chaudes sous un torchon, puis faites fondre chaque tranche 3 à 4 minutes dans sa coupelle. Il faut 45 minutes avant de passer à table, dont 15 minutes de travail.",
  intro: [
    "La raclette tient moins de la recette que de l’organisation : du fromage qui fond, des pommes de terre, de la charcuterie, et chacun cuisine sa coupelle au milieu de la table. Le nom vient du geste d’origine, quand on raclait la face fondue d’une demi-meule.",
    "Elle rate pour des raisons très terre à terre. Un fromage sorti du réfrigérateur au dernier moment, qui rend son gras avant d’avoir fondu. Des pommes de terre épluchées qui se gorgent d’eau. Ou une table qui manque de fromage au bout d’une demi-heure.",
    "Tout se joue donc avant le repas : les bonnes quantités, des pommes de terre cuites dans leur peau et tenues au chaud, un fromage à température. Ensuite, il n’y a plus qu’à surveiller sa coupelle.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "raclette",
    "raclette quantité par personne",
    "fromage à raclette par personne",
    "pommes de terre raclette",
    "raclette sans appareil",
    "raclette au four",
    "accompagnement raclette",
    "charcuterie raclette",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 15, cook: 30 },
  difficulty: "Facile",
  cost: "€€€",
  season: ["Hiver"],
  tags: ["hiver", "montagne"],
  equipment: [
    "appareil à raclette avec une coupelle par personne (ou un four avec gril)",
    "grande casserole de 5 l",
    "torchon propre",
    "planche et couteau à fromage",
  ],
  ingredients: [
    {
      title: "Le fromage",
      items: [
        {
          qty: 1200,
          unit: "g",
          name: "fromage à raclette",
          note: "au lait cru ou pasteurisé, en tranches de 3 à 4 mm",
          step: 50,
        },
      ],
    },
    {
      title: "Les pommes de terre",
      items: [
        {
          qty: 1800,
          unit: "g",
          name: "pomme de terre à chair ferme",
          plural: "pommes de terre à chair ferme",
          note: "charlotte, amandine ou belle de Fontenay, de même taille",
          step: 100,
        },
        { qty: 1, unit: "cas", name: "gros sel", fixed: true },
      ],
    },
    {
      title: "La charcuterie",
      items: [
        {
          qty: 600,
          unit: "g",
          name: "charcuterie",
          note: "jambon cru, jambon blanc, coppa, rosette ou viande des Grisons",
          step: 50,
        },
      ],
    },
    {
      title: "Pour accompagner",
      items: [
        { qty: 200, unit: "g", name: "cornichon", plural: "cornichons", step: 10 },
        { qty: 150, unit: "g", name: "petit oignon au vinaigre", plural: "petits oignons au vinaigre", step: 10 },
        { qty: 1, name: "salade verte", plural: "salades vertes", note: "frisée, scarole ou mâche", step: 1 },
        { qty: 1, unit: "cac", name: "moutarde de Dijon", step: 0.5 },
        { qty: 1, unit: "cas", name: "vinaigre de vin", step: 0.5 },
        { qty: 3, unit: "cas", name: "huile de tournesol ou de noix", step: 1 },
        { name: "poivre du moulin" },
      ],
    },
  ],
  method: [
    {
      title: "Avant de passer à table",
      steps: [
        {
          title: "Sortir le fromage",
          text: "Sortez le fromage du réfrigérateur entre 30 minutes et 1 heure avant le repas. Si vous le coupez vous-même, taillez des tranches de 3 à 4 mm, à la taille d’une coupelle, en gardant la croûte. Couvrez le plat d’un film pour que les tranches ne sèchent pas.",
          timer: { minutes: 30, label: "Fromage à température" },
          tip: "Un fromage froid fond d’abord sur les bords, qui grillent et rendent leur gras pendant que le centre reste ferme. À température, la tranche fond d’un bloc.",
        },
        {
          title: "Cuire les pommes de terre",
          text: "Lavez les pommes de terre sans les éplucher et mettez-les dans la casserole avec le gros sel et de l’eau froide qui les dépasse de 2 cm. Portez à ébullition, puis laissez frémir 20 à 25 minutes : la pointe d’un couteau doit entrer sans forcer, sans que la peau éclate.",
          timer: { minutes: 20, label: "Pommes de terre" },
          tip: "Le départ à l’eau froide laisse le cœur cuire en même temps que l’extérieur. Dans l’eau bouillante, le dessus s’effrite avant que le centre soit tendre.",
        },
        {
          title: "Dresser la table",
          text: "Pendant la cuisson, disposez la charcuterie sur un grand plat, les cornichons et les oignons dans des coupelles. Lavez et essorez la salade, et préparez la vinaigrette dans le saladier : moutarde et vinaigre, puis l’huile en fouettant. N’y mélangez la salade qu’au moment de servir.",
        },
        {
          title: "Garder au chaud",
          text: "Égouttez les pommes de terre et remettez-les dans la casserole chaude, hors du feu. Couvrez-les d’un torchon propre plié en deux, puis du couvercle. Le torchon boit la vapeur : elles restent chaudes sans ramollir. Si votre appareil a une plaque sur le dessus, posez-y la casserole ou un panier couvert.",
        },
      ],
    },
    {
      title: "À table",
      steps: [
        {
          title: "Préchauffer l’appareil",
          text: "Branchez l’appareil au milieu de la table 10 minutes avant de commencer, coupelles vides glissées dessous. Une coupelle chaude fait fondre le fromage plus vite et il n’accroche pas.",
          timer: { minutes: 10, label: "Préchauffage" },
        },
        {
          title: "Faire fondre",
          text: "Posez une tranche par coupelle, sans la plier, et glissez-la sous la résistance 3 à 4 minutes. Le fromage est prêt quand il bouillonne sur toute sa surface et commence à dorer sur les bords. Au-delà, il durcit et se met à huiler.",
          timer: { minutes: 4, label: "Coupelle" },
          tip: "Une seule tranche à la fois, fine : deux tranches empilées dorent dessus et restent fermes dessous.",
        },
        {
          title: "Napper et recommencer",
          text: "Ouvrez une pomme de terre en deux dans l’assiette, faites glisser le fromage dessus avec la spatule en bois et donnez un tour de poivre. Glissez aussitôt une nouvelle tranche sous l’appareil : chacun en mangera 5 ou 6 au fil du repas, avec la charcuterie, les cornichons et la salade.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Un fromage fait pour couler",
      text: "Le fromage à raclette est une pâte pressée non cuite, assez humide et riche en matière grasse. Chauffé, son réseau de protéines se relâche et la pâte s’étale en nappe au lieu de filer. Trop chauffé, ce même réseau se resserre et chasse la graisse : c’est l’huile qui perle au fond d’une coupelle oubliée.",
    },
    {
      title: "La peau garde la pomme de terre ferme",
      text: "Cuite dans sa peau, la pomme de terre absorbe beaucoup moins d’eau. Sa chair reste dense et sèche, elle boit le fromage fondu au lieu de le diluer. Épluchée, elle se gorge d’eau et se délite à la première fourchette.",
    },
    {
      title: "Le doré sur les bords",
      text: "Sous la résistance, les protéines et le peu de lactose du fromage brunissent par réaction de Maillard. C’est ce bord doré, un peu croustillant, qui donne le goût grillé. Il demande une coupelle chaude, d’où le préchauffage.",
    },
  ],
  tips: [
    "Achetez le fromage à la coupe et faites-le trancher à 3 ou 4 mm : les barquettes prédécoupées sont souvent plus fines et sèchent vite une fois ouvertes.",
    "Mélangez les fromages pour varier les coupelles : deux tiers de raclette nature, un tiers de fumée ou au poivre.",
    "Choisissez des pommes de terre de même calibre, de la taille d’un œuf : elles cuisent ensemble et se coupent en deux d’un geste.",
    "Ne salez rien d’autre que l’eau de cuisson : entre le fromage et la charcuterie, l’assiette l’est déjà largement.",
    "Une vinaigrette bien vinaigrée et des cornichons sur la table, ce n’est pas du décor : l’acidité rince la bouche entre deux coupelles.",
  ],
  mistakes: [
    "Faire fondre un fromage sortant du réfrigérateur : il suinte son gras, colle à la coupelle et met deux fois plus de temps. Sortez-le au moins 30 minutes avant.",
    "Éplucher et couper les pommes de terre avant cuisson : elles boivent l’eau et s’écrasent. Cuisez-les entières, dans leur peau, et ouvrez-les dans l’assiette.",
    "Oublier sa coupelle sous la résistance : au-delà de 5 minutes, le fromage durcit, brunit et baigne dans son huile. Sortez-la dès que toute la surface bouillonne.",
    "Couper des tranches trop épaisses : au-delà de 5 mm, le dessus grille avant que le dessous ait fondu. Restez entre 3 et 4 mm.",
  ],
  variations: [
    {
      title: "Sans appareil, au four",
      text: "Préchauffez le gril du four. Ouvrez les pommes de terre cuites en deux dans un grand plat, face coupée vers le haut, et couvrez chaque moitié d’un morceau de fromage. Enfournez à 10 cm de la résistance 5 à 7 minutes, jusqu’à ce que tout bouillonne. Procédez par petites fournées pour servir le fromage coulant.",
    },
    {
      title: "Avec des légumes",
      text: "Remplacez la charcuterie par 100 g par personne de champignons de Paris poêlés, d’oignons rouges en quartiers et de poivrons grillés. Ils se réchauffent dans la coupelle 2 minutes avant d’être couverts de fromage.",
    },
    {
      title: "Fromage fumé ou aux épices",
      text: "Remplacez 400 g de fromage nature par de la raclette fumée, au poivre ou au cumin. Gardez au moins la moitié de nature : le fumé lasse vite sur tout un repas.",
    },
  ],
  storage:
    "Le fromage entamé se garde une semaine au réfrigérateur, emballé dans du papier sulfurisé puis un sac. Les pommes de terre cuites se gardent 2 à 3 jours au frais, dans une boîte fermée : coupées en rondelles et dorées à la poêle avec un reste de fromage, elles font le dîner du lendemain. Ne gardez pas le fromage déjà fondu.",
  pairing:
    "Un blanc sec de Savoie, une jacquère d’Apremont ou de Chignin, ou un fendant du Valais. Sans alcool, une infusion chaude ou un jus de pomme un peu acide.",
  faq: [
    {
      q: "Quelle quantité de fromage à raclette par personne ?",
      a: "200 g par personne pour un repas complet, avec 300 g de pommes de terre et 100 g de charcuterie. Descendez à 150 g pour de petits appétits ou des enfants, montez à 250 g pour une tablée de skieurs affamés. Cela représente 5 à 6 tranches chacun.",
    },
    {
      q: "Combien de pommes de terre par personne pour une raclette ?",
      a: "300 g, soit 4 à 5 pommes de terre de la taille d’un œuf. Il en reste souvent un peu, ce qui n’est pas un problème : elles se réchauffent très bien à la poêle le lendemain.",
    },
    {
      q: "Faut-il enlever la croûte du fromage à raclette ?",
      a: "Non, la croûte se mange. Elle a un goût plus marqué et devient un peu croustillante sous la résistance. Si vous préférez une raclette plus douce, retirez-la au couteau avant de trancher.",
    },
    {
      q: "Peut-on faire une raclette sans appareil ?",
      a: "Oui, au four. Couvrez des moitiés de pommes de terre cuites d’un morceau de fromage et passez-les sous le gril 5 à 7 minutes, à 10 cm de la résistance. Faites plusieurs petites fournées plutôt qu’une grande, pour que le fromage reste coulant dans l’assiette.",
    },
    {
      q: "Quelles pommes de terre choisir pour une raclette ?",
      a: "Des pommes de terre à chair ferme : charlotte, amandine, belle de Fontenay ou ratte. Elles se tiennent à la cuisson et se coupent net. Les variétés farineuses comme la bintje s’effritent dans l’eau.",
    },
    {
      q: "Peut-on manger une raclette enceinte ?",
      a: "Oui, en l’adaptant. Prenez un fromage au lait pasteurisé, c’est écrit sur l’étiquette, ou faites fondre un fromage au lait cru jusqu’à ce qu’il bouillonne entièrement. Remplacez la charcuterie crue (jambon cru, coppa, rosette, viande des Grisons) par du jambon blanc cuit, comme on le recommande pendant la grossesse.",
    },
  ],
  nutrition: {
    calories: 1270,
    protein: 78,
    fat: 80,
    saturatedFat: 44,
    carbs: 60,
    sugar: 4,
    fiber: 7,
    sodium: 3300,
  },
  annotations: { hero: "la croûte se mange, on la garde", detail: "une tranche fine par coupelle" },
  images: {
    heroAlt:
      "Raclette dans l’assiette : fromage fondu et doré sur les bords, pommes de terre en robe des champs, cornichons et petits oignons",
    detailAlt:
      "Tranche de fromage à raclette fondue sur du jambon cru, avec des tranches de saucisson et de la salade verte",
    credits: {
      hero: {
        photographer: "Ka23 13",
        url: "https://commons.wikimedia.org/w/index.php?curid=106541820",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
      detail: {
        photographer: "Arnaud 25",
        url: "https://commons.wikimedia.org/wiki/File:Raclette_005.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#E3B341",
    onAccent: "#1B1712",
    ink: "#7A5A0E",
    tint: "#FBF4E2",
    deep: "#1A1407",
    focus: "45% 55%",
  },
});
