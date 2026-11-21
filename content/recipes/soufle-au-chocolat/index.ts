import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "soufle-au-chocolat",
  title: "Soufflé au chocolat",
  seoTitle: "Soufflé au chocolat noir, cœur coulant en 10 minutes de four",
  tagline: "Les invités attendent, pas le soufflé.",
  description:
    "Soufflé au chocolat en 4 ramequins : chocolat noir fondu, 3 jaunes, 5 blancs montés, 10 minutes à 200 °C pour un centre encore coulant. Prêt en 40 minutes.",
  summary:
    "Pour 4 personnes, faites fondre 120 g de chocolat noir avec 6 cl de lait, ajoutez 3 jaunes, puis incorporez en deux temps 5 blancs montés avec 40 g de sucre. Versez dans des ramequins de 20 cl beurrés et sucrés, creusez un sillon au pouce et faites cuire 10 minutes à 200 °C. Le soufflé gonfle de 3 à 4 cm, garde un centre coulant et se sert aussitôt. Comptez 40 minutes en tout.",
  intro: [
    "Un soufflé au chocolat, c’est du chocolat fondu allégé de blancs en neige, qui gonfle au four au-dessus de son ramequin et garde un centre presque liquide. Ni farine ni crème : quelques gestes précis, et des convives déjà assis.",
    "On le rate surtout au moment du mélange. Des blancs trop fermes, ou brassés trop longtemps, et l’air s’en va : le soufflé monte à peine et devient un petit gâteau dense.",
    "La bonne nouvelle, c’est qu’on peut tout préparer quelques heures avant et garder les ramequins au réfrigérateur. Il ne reste qu’à enfourner au moment du dessert, et à servir dans la minute.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "soufflé au chocolat",
    "recette soufflé au chocolat",
    "soufflé au chocolat facile",
    "soufflé au chocolat individuel",
    "soufflé au chocolat coulant",
    "temps de cuisson soufflé au chocolat",
    "soufflé au chocolat à l’avance",
    "dessert saint-valentin chocolat",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 25, cook: 15 },
  difficulty: "Exigeant",
  cost: "€",
  season: ["Toute l’année"],
  tags: ["saint-valentin"],
  equipment: [
    "4 ramequins de 9 cm et 20 cl, à bords droits",
    "pinceau de cuisine",
    "batteur électrique",
    "maryse",
    "plaque de cuisson",
  ],
  ingredients: [
    {
      title: "Les ramequins",
      items: [
        { qty: 15, unit: "g", name: "beurre doux", note: "bien mou", step: 5 },
        { qty: 30, unit: "g", name: "sucre en poudre", step: 5 },
      ],
    },
    {
      title: "Le soufflé",
      items: [
        { qty: 120, unit: "g", name: "chocolat noir", note: "64 à 70 % de cacao, haché", step: 10 },
        { qty: 6, unit: "cl", name: "lait entier", step: 1 },
        { qty: 3, name: "jaune d’œuf", plural: "jaunes d’œufs", step: 1 },
        { qty: 5, name: "blanc d’œuf", plural: "blancs d’œufs", note: "à température ambiante", step: 1 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 40, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 1, unit: "cas", name: "sucre glace", step: 0.5, optional: true },
      ],
    },
  ],
  method: [
    {
      title: "Préparer",
      steps: [
        {
          title: "Chemiser les ramequins",
          text: "Badigeonnez l’intérieur des ramequins de beurre mou au pinceau, en remontant du fond vers le bord par traits verticaux, sans oublier le rebord. Mettez-les 5 minutes au réfrigérateur, beurrez une seconde fois, puis versez le sucre dans le premier, tournez-le pour enrober les parois et faites passer l’excédent dans le suivant.",
          timer: { minutes: 5, label: "Première couche au froid" },
          tip: "Le moindre manque de beurre accroche l’appareil : le soufflé monte alors de travers.",
        },
        {
          title: "Préchauffer le four",
          text: "Préchauffez le four à 200 °C, chaleur traditionnelle, avec une plaque posée sur la grille placée au tiers inférieur. Le soufflé doit partir sur une plaque déjà chaude.",
        },
        {
          title: "Fondre le chocolat",
          text: "Faites fondre le chocolat avec le lait au bain-marie, en remuant, jusqu’à ce que le mélange soit lisse et brillant. Retirez du feu et laissez tiédir 5 minutes : il doit être chaud au doigt, sans brûler.",
          timer: { minutes: 5, label: "Chocolat qui tiédit" },
        },
        {
          title: "Ajouter les jaunes",
          text: "Incorporez les jaunes un à un au fouet. Le mélange épaissit, devient brillant et presque élastique. S’il paraît granuleux, ajoutez 1 cas de lait chaud et fouettez jusqu’à ce qu’il redevienne lisse.",
        },
        {
          title: "Monter les blancs",
          text: "Dans un saladier propre, fouettez les blancs avec le sel à vitesse moyenne. Quand ils sont mousseux et blancs, versez le sucre en trois fois et continuez jusqu’à ce qu’ils soient brillants et forment au bout du fouet un bec qui se courbe. Arrêtez avant qu’ils ne deviennent fermes et grumeleux.",
          tip: "Des blancs trop fermes se mélangent mal au chocolat : il reste des flocons blancs et le soufflé perd son air.",
        },
        {
          title: "Incorporer en deux temps",
          text: "Mélangez un quart des blancs au chocolat au fouet, franchement, pour l’assouplir. Versez ce mélange sur le reste des blancs et incorporez à la maryse : coupez au centre, raclez le fond, remontez en tournant le saladier d’un quart de tour. Arrêtez dès qu’il n’y a plus de traînées blanches.",
        },
      ],
    },
    {
      title: "Cuire et servir",
      steps: [
        {
          title: "Remplir et dégager",
          text: "Remplissez les ramequins à ras bord et lissez le dessus d’un coup de spatule. Passez la pointe du pouce tout autour, à l’intérieur du bord, pour creuser un sillon de 5 mm. Enfournez tout de suite, ou gardez les ramequins couverts au réfrigérateur jusqu’au dessert.",
          tip: "Le sillon du pouce détache l’appareil du rebord : le soufflé monte droit, en chapeau.",
        },
        {
          title: "Cuire sans ouvrir",
          text: "Posez les ramequins sur la plaque chaude et faites cuire 10 minutes sans ouvrir la porte, 12 minutes s’ils sortent du réfrigérateur. Le soufflé est prêt quand il dépasse le bord de 3 à 4 cm, que le dessus est sec et qu’il tremble encore légèrement au centre quand on bouge la plaque.",
          timer: { minutes: 10, label: "Cuisson du soufflé" },
        },
        {
          title: "Servir aussitôt",
          text: "Saupoudrez de sucre glace si vous le souhaitez et servez dans la minute, ramequin sur une petite assiette. Le soufflé commence à retomber dès sa sortie du four : à table, on plante la cuillère au centre, encore coulant.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi il monte, puis retombe",
      text: "Dans le four, l’air emprisonné dans les blancs se dilate et l’eau de l’appareil se change en vapeur dans les bulles. Les protéines de l’œuf coagulent autour, d’abord sur les bords, puis vers le centre. À la sortie, l’air refroidit et se contracte : le soufflé retombe, quoi qu’on fasse.",
    },
    {
      title: "Le sucre tient les blancs",
      text: "Ajouté pendant le fouettage, le sucre se dissout dans l’eau des blancs et la rend plus visqueuse. Les bulles se vident moins vite, et la mousse supporte mieux d’être mélangée au chocolat sans s’effondrer.",
    },
    {
      title: "Pourquoi beurre et sucre",
      text: "Le beurre empêche l’appareil de coller aux parois du ramequin. Le sucre, par-dessus, forme une surface rugueuse et légèrement croustillante sur laquelle le soufflé glisse vers le haut en cuisant.",
    },
  ],
  tips: [
    "Cassez les œufs un par un au-dessus d’un bol avant de les séparer : une trace de jaune dans les blancs et ils montent mal.",
    "Faites asseoir tout le monde avant d’enfourner. Les dix minutes de cuisson passent vite, l’attente du soufflé beaucoup moins.",
    "Gardez les 2 jaunes restants : ils feront une crème anglaise ou une crème brûlée le lendemain.",
    "Si vous préparez les ramequins à l’avance, laissez-les au réfrigérateur et non sur le plan de travail : l’appareil y garde mieux son air.",
  ],
  mistakes: [
    "Ouvrir la porte pour regarder : l’air froid fait retomber le soufflé d’un coup, et il ne remonte pas.",
    "Brasser les blancs comme une pâte à gâteau : l’air s’échappe, le soufflé monte à peine et devient dense.",
    "Verser les jaunes dans un chocolat brûlant : ils cuisent en grumeaux. Laissez-le tiédir 5 minutes.",
    "Remplir les ramequins aux trois quarts : le soufflé ne dépasse pas le bord et paraît tassé.",
  ],
  variations: [
    {
      title: "À l’orange",
      text: "Ajoutez le zeste fin d’une orange non traitée au chocolat fondu, avec les jaunes. Le temps de cuisson ne change pas.",
    },
    {
      title: "Chemisé au cacao",
      text: "Remplacez les 30 g de sucre des ramequins par 2 cas de cacao en poudre non sucré : la croûte est plus amère et plus sombre.",
    },
    {
      title: "Plus pris à cœur",
      text: "Prolongez la cuisson jusqu’à 13 à 14 minutes : le centre est alors entièrement pris, le soufflé plus ferme et un peu moins haut.",
    },
  ],
  storage:
    "Le soufflé ne se garde pas : il se sert à la sortie du four. Crus, les ramequins garnis attendent jusqu’à 3 heures au réfrigérateur, couverts. Un reste de soufflé cuit se garde 24 heures au plus au réfrigérateur, filmé, à cause des œufs peu cuits ; il se mange froid, comme un petit fondant.",
  pairing: "Un banyuls ou un maury, deux vins doux qui tiennent tête au chocolat.",
  faq: [
    {
      q: "Le soufflé au chocolat est-il déconseillé aux femmes enceintes ?",
      a: "Oui, tel quel. Après 10 minutes, le centre reste coulant et les œufs y sont à peine cuits. Pour une femme enceinte, un jeune enfant, une personne âgée ou immunodéprimée, prolongez la cuisson à 13 ou 14 minutes, jusqu’à ce que le centre soit pris, ou utilisez des œufs pasteurisés.",
    },
    {
      q: "Combien de temps cuire un soufflé au chocolat ?",
      a: "10 minutes à 200 °C pour des ramequins de 20 cl, avec un centre coulant. Comptez 13 à 14 minutes pour un centre pris, et 2 minutes de plus si les ramequins sortent du réfrigérateur. De plus grands moules demandent davantage.",
    },
    {
      q: "Pourquoi mon soufflé au chocolat ne monte pas ?",
      a: "Le plus souvent, l’air s’est perdu au mélange. Des blancs trop fermes forment des flocons qu’on brasse longtemps pour les faire disparaître. Montez-les jusqu’au bec souple, détendez le chocolat avec un quart des blancs, puis incorporez le reste à la maryse, sans insister.",
    },
    {
      q: "Peut-on préparer un soufflé au chocolat à l’avance ?",
      a: "Oui, jusqu’à 3 heures. Remplissez les ramequins, creusez le sillon du pouce, couvrez et gardez-les au réfrigérateur. Enfournez-les directement en sortant du froid, en ajoutant 2 minutes de cuisson.",
    },
    {
      q: "Pourquoi le soufflé retombe-t-il à la sortie du four ?",
      a: "Parce que l’air qui le gonfle refroidit et se contracte. Il perd de la hauteur en quelques minutes, quoi qu’on fasse. Servez-le dans la minute, et évitez d’ouvrir la porte pendant la cuisson, ce qui le ferait retomber avant l’heure.",
    },
    {
      q: "Quelle taille de ramequin pour un soufflé ?",
      a: "Des ramequins de 9 cm de diamètre et 20 cl environ, à bords bien droits. Avec un grand moule de 1 l pour quatre, comptez 20 à 25 minutes de cuisson, avec un centre moins coulant.",
    },
  ],
  nutrition: {
    calories: 305,
    protein: 9,
    fat: 18.5,
    saturatedFat: 11,
    carbs: 25,
    sugar: 22,
    fiber: 3,
    sodium: 120,
  },
  annotations: { hero: "servi dans la minute", detail: "3 à 4 cm au-dessus du bord" },
  images: {
    heroAlt:
      "Soufflé au chocolat dans un ramequin blanc cannelé, bien monté au-dessus du bord et saupoudré de sucre glace.",
    detailAlt:
      "Soufflés au chocolat dans le four, gonflés au-dessus de leurs ramequins blancs, juste avant la fin de la cuisson.",
    credits: {
      hero: {
        photographer: "stu_spivack",
        url: "https://commons.wikimedia.org/wiki/File:Chocolate_souffle.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 2.0",
      },
      detail: {
        photographer: "Sebastian Coman Photography",
        url: "https://www.pexels.com/photo/souffles-in-the-oven-3599974/",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#7A3F2A",
    onAccent: "#FFFFFF",
    ink: "#5C2F1F",
    tint: "#F5EBE6",
    deep: "#170D09",
    focus: "50% 50%",
  },
});
