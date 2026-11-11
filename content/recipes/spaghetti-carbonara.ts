import type { RecipeContent } from "@/lib/types";

export const content: RecipeContent = {
  slug: "spaghetti-carbonara",
  title: "Spaghetti alla carbonara",
  seoTitle: "Spaghetti carbonara : la vraie recette italienne",
  tagline: "Cinq ingrédients. Zéro crème.",
  description:
    "La vraie carbonara romaine en 25 minutes : guanciale, pecorino, jaunes d’œufs et poivre, sans crème. La technique pas à pas pour une sauce lisse et brillante.",
  summary:
    "Pour une vraie carbonara (4 personnes), faites rendre 150 g de guanciale à la poêle, cuisez 400 g de spaghetti al dente, puis mélangez-les hors du feu avec 4 jaunes, 1 œuf entier, 80 g de pecorino et du poivre, en ajoutant l’eau de cuisson jusqu’à obtenir une sauce nappante. Comptez 25 minutes et aucune crème : l’onctuosité vient de l’amidon de l’eau de cuisson et du gras du guanciale.",
  intro: [
    "La carbonara est un plat de mécanique plus que d’ingrédients. Cinq éléments seulement — guanciale, œufs, pecorino, poivre, pâtes — et aucune place pour l’approximation : c’est la température qui décide entre une sauce soyeuse et une omelette.",
    "Ici, pas de crème, pas d’ail, pas d’oignon. L’onctuosité naît d’une émulsion : le gras fondu du guanciale, l’amidon de l’eau de cuisson et les jaunes d’œufs, liés hors du feu, au dernier moment.",
    "Une fois le geste compris, la recette se fait en vingt-cinq minutes et ne se rate plus.",
  ],
  category: "Plat",
  cuisine: "Italienne",
  keywords: [
    "spaghetti carbonara",
    "vraie recette carbonara",
    "carbonara sans crème",
    "carbonara traditionnelle italienne",
    "carbonara guanciale pecorino",
    "comment réussir une carbonara",
    "carbonara jaunes d’œufs",
    "carbonara romaine",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 10, cook: 15 },
  difficulty: "Intermédiaire",
  cost: "€€",
  season: ["Toute l’année"],
  equipment: [
    "Grande casserole",
    "Grande poêle ou sauteuse",
    "Saladier",
    "Pince à pâtes",
    "Râpe fine (type Microplane)",
  ],
  ingredients: [
    {
      items: [
        { qty: 400, unit: "g", name: "spaghetti", note: "idéalement tréfilés au bronze", step: 10 },
        { qty: 150, unit: "g", name: "guanciale", note: "en bâtonnets de 1 cm", step: 10 },
        { qty: 4, name: "jaune d’œuf", plural: "jaunes d’œufs", note: "œufs extra-frais", step: 1 },
        { qty: 1, name: "œuf entier", plural: "œufs entiers", step: 1 },
        { qty: 80, unit: "g", name: "pecorino romano", note: "râpé très finement", step: 5 },
        { qty: 20, unit: "g", name: "parmigiano reggiano", note: "râpé, pour adoucir", step: 5, optional: true },
        { qty: 2, unit: "cac", name: "poivre noir", note: "fraîchement concassé", step: 0.5 },
        { qty: 20, unit: "g", name: "gros sel", note: "pour 3 l d’eau, moins que d’habitude", fixed: true },
      ],
    },
  ],
  method: [
    {
      title: "Préparation",
      steps: [
        {
          title: "Lancer l’eau",
          text: "Portez 3 l d’eau à ébullition dans une grande casserole, puis salez avec le gros sel. Le guanciale et le pecorino sont déjà salés : l’eau doit l’être moins que pour des pâtes classiques.",
          timer: { minutes: 10, label: "Ébullition de l’eau" },
        },
        {
          title: "Préparer la crème d’œufs",
          text: "Dans un saladier, fouettez les jaunes, l’œuf entier, 60 g de pecorino, le parmigiano et les trois quarts du poivre jusqu’à obtenir une pâte épaisse et homogène. Réservez le reste du fromage pour le service.",
          tip: "Râpez le fromage le plus finement possible : il fondra instantanément dans la sauce au lieu de former des grumeaux.",
        },
        {
          title: "Rendre le guanciale",
          text: "Déposez le guanciale dans une grande poêle froide, sans matière grasse, puis chauffez à feu moyen-doux. Laissez fondre 8 à 10 minutes, jusqu’à ce que le gras soit translucide et les bords dorés et croustillants.",
          timer: { minutes: 9, label: "Guanciale" },
          tip: "Démarrer à froid laisse au gras le temps de fondre avant que la viande ne colore : vous obtenez plus de graisse parfumée pour la sauce.",
        },
        {
          title: "Cuire les pâtes",
          text: "Plongez les spaghetti dans l’eau bouillante et faites-les cuire 2 minutes de moins que le temps indiqué sur le paquet. Ils finiront de cuire dans la poêle.",
          timer: { minutes: 9, label: "Cuisson des pâtes" },
        },
        {
          title: "Torréfier le poivre",
          text: "Coupez le feu sous la poêle, retirez quelques morceaux de guanciale croustillant pour le dressage, puis ajoutez le reste du poivre dans le gras chaud. Versez une louche d’eau de cuisson pour décoller les sucs.",
        },
        {
          title: "Enrober les pâtes",
          text: "Prélevez 250 ml d’eau de cuisson, puis égouttez les pâtes et transférez-les dans la poêle. Remettez sur feu moyen 1 minute en remuant à la pince : les spaghetti s’enrobent de gras et d’amidon.",
          timer: { minutes: 1, label: "Enrobage" },
        },
        {
          title: "Émulsionner hors du feu",
          text: "Retirez la poêle du feu et attendez 30 secondes. Détendez la crème d’œufs avec 2 cuillerées d’eau de cuisson, versez-la sur les pâtes et mélangez vivement à la pince, en ajoutant de l’eau de cuisson cuillerée par cuillerée jusqu’à une sauce brillante qui nappe les spaghetti.",
          tip: "Sauce trop épaisse : un trait d’eau de cuisson. Trop liquide : quelques secondes sur feu très doux, sans cesser de remuer.",
        },
        {
          title: "Servir aussitôt",
          text: "Dressez dans des assiettes chaudes, parsemez du pecorino restant, d’un tour de poivre et des morceaux de guanciale réservés. La carbonara n’attend pas : servez immédiatement.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Une émulsion, pas une omelette",
      text: "Les protéines du jaune d’œuf commencent à épaissir vers 65 °C et figent au-delà d’environ 70 °C. Hors du feu, la chaleur résiduelle des pâtes suffit à épaissir la sauce sans la faire grainer ; sur le feu, elle tourne en œufs brouillés en quelques secondes.",
    },
    {
      title: "L’amidon, liant naturel",
      text: "L’eau de cuisson est chargée d’amidon libéré par les pâtes. Il stabilise l’émulsion entre le gras du guanciale et l’eau, et la dilution des œufs repousse leur température de coagulation : la sauce devient plus tolérante.",
    },
    {
      title: "Pourquoi le guanciale",
      text: "Le guanciale est de la joue de porc salée et séchée. Plus gras que la pancetta, il fond à basse température et libère une graisse très parfumée, qui forme la base de la sauce avec les jaunes.",
    },
  ],
  tips: [
    "Choisissez des pâtes tréfilées au bronze : leur surface rugueuse accroche mieux la sauce et libère plus d’amidon.",
    "Cuisez les pâtes dans moins d’eau que d’habitude (3 l pour 400 g) : l’eau de cuisson sera plus riche en amidon.",
    "Sortez les œufs du réfrigérateur 30 minutes avant : une crème d’œufs tempérée émulsionne plus régulièrement.",
    "Réchauffez les assiettes : la sauce reste nappante plus longtemps.",
    "Concassez le poivre au mortier plutôt qu’au moulin, pour des éclats francs et parfumés.",
  ],
  mistakes: [
    "Ajouter de la crème : elle masque le goût du guanciale et du pecorino, et n’apporte rien à une émulsion réussie.",
    "Mélanger les œufs sur le feu : ils coagulent en grumeaux au lieu de former une sauce lisse.",
    "Égoutter les pâtes sans garder d’eau de cuisson : c’est elle qui permet d’ajuster la texture.",
    "Utiliser un fromage râpé grossièrement ou en sachet : il fond mal et forme des fils.",
  ],
  variations: [
    {
      title: "Avec de la pancetta",
      text: "À défaut de guanciale, utilisez de la pancetta en morceau, coupée en bâtonnets. Le goût est plus doux, la graisse moins abondante : ajoutez une cuillerée d’huile d’olive si nécessaire.",
    },
    {
      title: "Avec des rigatoni",
      text: "Les rigatoni ou les mezze maniche sont aussi traditionnels à Rome que les spaghetti. Leurs cannelures retiennent la sauce et les morceaux de guanciale.",
    },
    {
      title: "Plus douce",
      text: "Remplacez la moitié du pecorino par du parmigiano reggiano pour une sauce moins salée et moins piquante.",
    },
  ],
  storage:
    "La carbonara se déguste immédiatement : la sauce fige en refroidissant. Les restes se gardent 24 heures au réfrigérateur et se réchauffent à la poêle avec un trait d’eau, au prix d’une texture moins soyeuse.",
  pairing: "Un blanc sec et vif du Latium comme un Frascati, ou un rouge léger servi un peu frais.",
  faq: [
    {
      q: "Faut-il mettre de la crème dans la carbonara ?",
      a: "Non. La carbonara romaine ne contient pas de crème : son onctuosité vient de l’émulsion entre les jaunes d’œufs, le pecorino, le gras du guanciale et l’eau de cuisson des pâtes.",
    },
    {
      q: "Comment éviter que les œufs cuisent en omelette ?",
      a: "Mélangez toujours hors du feu, après 30 secondes de repos de la poêle, et détendez la crème d’œufs avec un peu d’eau de cuisson. Ajoutez ensuite l’eau progressivement en remuant sans arrêt.",
    },
    {
      q: "Par quoi remplacer le guanciale ?",
      a: "La pancetta en morceau est le meilleur substitut. Des lardons fumés de qualité fonctionnent aussi, mais leur goût fumé s’éloigne de la recette d’origine.",
    },
    {
      q: "Faut-il des jaunes seuls ou des œufs entiers ?",
      a: "Un mélange des deux : les jaunes apportent onctuosité et couleur, l’œuf entier fluidifie la sauce. Comptez un jaune par personne plus un œuf entier pour quatre.",
    },
    {
      q: "Pecorino ou parmesan pour la carbonara ?",
      a: "Le pecorino romano est le fromage traditionnel, plus salé et plus piquant. Vous pouvez le couper avec un quart de parmigiano reggiano pour une sauce plus douce.",
    },
    {
      q: "Peut-on préparer la carbonara à l’avance ?",
      a: "Non, elle se fait à la minute. Vous pouvez en revanche couper le guanciale et préparer la crème d’œufs une heure à l’avance, filmée au réfrigérateur.",
    },
  ],
  nutrition: {
    calories: 770,
    protein: 27,
    fat: 40,
    saturatedFat: 17,
    carbs: 72,
    sugar: 3,
    fiber: 3,
    sodium: 1350,
  },
  images: {
    heroAlt:
      "Spaghetti carbonara à la sauce jaune d’œuf, poivre noir et guanciale croustillant dans une assiette grise",
    detailAlt: "Fourchette enroulant des spaghetti carbonara à la sauce crémeuse, en gros plan",
    credits: {
      hero: {
        photographer: "Paolo Sbalzer",
        url: "https://www.pexels.com/photo/delicious-italian-carbonara-pasta-close-up-30628819/",
      },
      detail: {
        photographer: "Nadin Sh",
        url: "https://www.pexels.com/photo/creamy-carbonara-pasta-twirl-close-up-33455847/",
      },
    },
  },
  datePublished: "2026-10-02",
  dateModified: "2026-11-10",
};
