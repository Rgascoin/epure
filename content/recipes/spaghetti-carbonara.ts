import type { RecipeContent } from "@/lib/types";

export const content: RecipeContent = {
  slug: "spaghetti-carbonara",
  title: "Spaghetti alla carbonara",
  seoTitle: "Spaghetti carbonara à la romaine, sans crème",
  tagline: "Sans crème, et c’est tant mieux.",
  description:
    "Spaghetti carbonara comme à Rome, en 25 minutes, avec du guanciale, du pecorino, des jaunes d’œufs et beaucoup de poivre. Sans crème, et sans omelette.",
  summary:
    "Pour 4 personnes, faites fondre 150 g de guanciale à la poêle et cuisez 400 g de spaghetti 2 minutes de moins que sur le paquet. Hors du feu, mélangez les pâtes avec 4 jaunes, 1 œuf entier, 60 g de pecorino et du poivre (le reste du fromage sert au service), en ajoutant de l’eau de cuisson jusqu’à ce que la sauce nappe. Il faut 25 minutes en tout, et pas de crème : c’est le gras du guanciale et l’amidon de l’eau qui font la sauce.",
  intro: [
    "La carbonara tient en cinq ingrédients, et c’est justement pour ça qu’elle pardonne peu. Tout se joue sur la température : un peu trop chaud et les œufs prennent en omelette, trop froid et la sauce reste liquide au fond de la poêle.",
    "On n’y met ni crème, ni ail, ni oignon. La sauce vient du gras du guanciale, de l’eau de cuisson chargée d’amidon et des jaunes, mélangés hors du feu au tout dernier moment. Écrit comme ça, ça a l’air technique. À la poêle, c’est une minute de pince et un peu d’attention.",
    "Si votre première sauce graine un peu, ce n’est pas grave. On explique comment rattraper la sauce à l’étape « Émulsionner hors du feu », et ça marche presque toujours.",
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
    "grande casserole",
    "grande poêle ou sauteuse",
    "saladier",
    "pince à pâtes",
    "râpe fine (type Microplane)",
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
          text: "Faites bouillir 3 l d’eau dans une grande casserole et ajoutez le gros sel. C’est moins que d’habitude : le guanciale et le pecorino apportent déjà beaucoup de sel.",
          timer: { minutes: 10, label: "Ébullition de l’eau" },
        },
        {
          title: "Préparer la crème d’œufs",
          text: "Dans un saladier, fouettez les jaunes et l’œuf entier avec 60 g de pecorino, le parmigiano et les trois quarts du poivre. Vous devez obtenir une pâte épaisse, presque une crème. Gardez le reste du fromage pour la fin.",
          tip: "Râpez le fromage très fin, avec une râpe type Microplane. Râpé gros, il fait des grumeaux au lieu de fondre.",
        },
        {
          title: "Faire fondre le guanciale",
          text: "Mettez le guanciale dans la poêle encore froide, sans matière grasse, puis allumez à feu moyen-doux. Laissez-le fondre 8 à 10 minutes : le gras devient translucide, les bords dorent et croustillent, et la cuisine commence à sentir très bon. S’il est prêt avant les pâtes, baissez le feu au minimum.",
          timer: { minutes: 9, label: "Guanciale" },
          tip: "Partir à froid laisse le temps au gras de fondre avant que la viande ne colore. Vous récupérez plus de graisse dans la poêle, et c’est elle qui va parfumer la sauce.",
        },
        {
          title: "Cuire les pâtes",
          text: "Jetez les spaghetti dans l’eau bouillante et comptez 2 minutes de moins que ce qu’indique le paquet (le minuteur est réglé sur 9 minutes, pour un paquet à 11 minutes). Ils finiront de cuire dans la poêle.",
          timer: { minutes: 9, label: "Cuisson des pâtes" },
        },
        {
          title: "Torréfier le poivre",
          text: "Une minute avant la fin de cuisson des pâtes, coupez le feu sous la poêle. Mettez de côté quelques morceaux de guanciale bien croustillants pour le service, puis jetez le reste du poivre dans le gras chaud : il grésille et embaume. Ajoutez une louche d’eau de cuisson pour décoller les sucs.",
        },
        {
          title: "Enrober les pâtes",
          text: "Gardez 250 ml d’eau de cuisson dans un bol, égouttez les pâtes et versez-les dans la poêle. Remettez sur feu moyen 1 minute en remuant à la pince, le temps que les spaghetti se couvrent de gras et d’amidon.",
          timer: { minutes: 1, label: "Enrobage" },
        },
        {
          title: "Émulsionner hors du feu",
          text: "Retirez la poêle du feu et attendez 30 secondes. Détendez la crème d’œufs avec 2 cuillerées à soupe d’eau de cuisson, versez-la sur les pâtes et remuez vivement à la pince. Ajoutez ensuite de l’eau, cuillerée par cuillerée, jusqu’à ce que la sauce brille et accroche aux spaghetti.",
          tip: "Trop épaisse, la sauce ? Un trait d’eau de cuisson. Trop liquide ? Quelques secondes sur feu très doux sans arrêter de remuer. Si elle a un peu grainé, un trait d’eau de cuisson tiède et beaucoup d’huile de coude, hors du feu, la rattrapent souvent.",
        },
        {
          title: "Servir aussitôt",
          text: "Servez dans des assiettes chaudes, avec le pecorino restant, un tour de poivre et le guanciale croustillant que vous aviez gardé. Ne la faites pas attendre : une carbonara qui patiente sur la table fige.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi hors du feu",
      text: "Les jaunes commencent à épaissir vers 65 °C et figent au-delà de 70 °C environ. La chaleur qui reste dans les pâtes suffit à épaissir la sauce. Sur le feu, on dépasse ce seuil en quelques secondes, et on se retrouve avec des œufs brouillés.",
    },
    {
      title: "Ce que fait l’eau de cuisson",
      text: "Elle est trouble parce qu’elle est pleine d’amidon. Cet amidon aide le gras du guanciale et l’eau à rester liés. Et en diluant les œufs, elle retarde le moment où ils coagulent. La sauce devient beaucoup moins capricieuse.",
    },
    {
      title: "Guanciale plutôt que pancetta",
      text: "Le guanciale, c’est de la joue de porc salée et séchée. Il est plus gras que la pancetta, et ce gras fond à basse température. C’est lui qui donne son goût à la sauce, bien plus que la viande elle-même.",
    },
  ],
  tips: [
    "Prenez des pâtes tréfilées au bronze. On les reconnaît à leur aspect mat, un peu rugueux, et la sauce s’y accroche nettement mieux.",
    "Cuisez-les dans moins d’eau que d’habitude, 3 l pour 400 g. L’eau de cuisson sera plus chargée en amidon.",
    "Sortez les œufs du frigo une demi-heure avant. Froids, ils émulsionnent moins bien.",
    "Passez les assiettes quelques minutes au four tiède : la sauce reste nappante plus longtemps.",
    "Si vous avez un mortier, concassez-y le poivre. Les éclats ont plus de mordant qu’au moulin.",
  ],
  mistakes: [
    "Ajouter de la crème. On comprend l’envie, mais elle écrase le goût du guanciale et du pecorino, et une sauce bien liée n’en a pas besoin.",
    "Verser les œufs sur le feu. Ils prennent en grumeaux avant même d’avoir enrobé les pâtes.",
    "Tout égoutter sans garder d’eau de cuisson. Sans elle, impossible de rattraper une sauce trop épaisse.",
    "Prendre du fromage râpé en sachet. Il fond mal et fait des grumeaux.",
  ],
  variations: [
    {
      title: "Avec de la pancetta",
      text: "Si vous ne trouvez pas de guanciale, demandez de la pancetta en morceau chez un traiteur italien et taillez-la vous-même. Elle est plus douce et rend moins de gras ; une cuillerée d’huile d’olive peut aider.",
    },
    {
      title: "Avec des rigatoni",
      text: "À Rome, on la fait aussi souvent avec des rigatoni ou des mezze maniche. Les morceaux de guanciale se glissent dans les tubes, et personne ne s’en plaint.",
    },
    {
      title: "Plus douce",
      text: "Moitié pecorino, moitié parmigiano reggiano : la sauce est moins salée et moins piquante. Plus doux pour les palais sensibles.",
    },
  ],
  storage:
    "Elle se mange tout de suite : la sauce fige en refroidissant. S’il en reste, ça tient 24 heures au frigo ; réchauffez à la poêle avec un trait d’eau. Ce sera moins soyeux, mais ça fait un bon déjeuner.",
  pairing: "Un blanc sec du Latium, un frascati par exemple, ou un rouge léger qu’on sert un peu frais.",
  faq: [
    {
      q: "Faut-il mettre de la crème dans la carbonara ?",
      a: "Non, la carbonara romaine n’en contient pas. Le côté crémeux vient de l’émulsion entre les jaunes, le pecorino, le gras du guanciale et l’eau de cuisson des pâtes.",
    },
    {
      q: "Comment éviter que les œufs cuisent en omelette ?",
      a: "Mélangez hors du feu, après avoir laissé la poêle reposer 30 secondes, et détendez la crème d’œufs avec un peu d’eau de cuisson avant de la verser. Ensuite, ajoutez l’eau petit à petit sans arrêter de remuer.",
    },
    {
      q: "Par quoi remplacer le guanciale ?",
      a: "La pancetta en morceau, c’est le meilleur remplaçant. Des lardons fumés de bonne qualité font l’affaire, mais le goût fumé vous éloigne de la recette d’origine.",
    },
    {
      q: "Faut-il des jaunes seuls ou des œufs entiers ?",
      a: "Les deux. Les jaunes donnent la couleur et le côté crémeux, l’œuf entier rend la sauce un peu plus fluide. On compte un jaune par personne, plus un œuf entier pour quatre.",
    },
    {
      q: "Pecorino ou parmesan pour la carbonara ?",
      a: "Le pecorino romano est le fromage d’origine, plus salé et plus piquant. Si vous préférez plus doux, coupez-le avec un quart de parmigiano reggiano.",
    },
    {
      q: "Peut-on préparer la carbonara à l’avance ?",
      a: "Pas vraiment, elle se fait au dernier moment. Vous pouvez quand même couper le guanciale et préparer la crème d’œufs une heure avant : gardez-la filmée au frigo et sortez-la quand vous lancez l’eau.",
    },
    {
      q: "La carbonara convient-elle aux femmes enceintes ?",
      a: "Les œufs y restent peu cuits, sous 70 °C environ : elle est déconseillée aux femmes enceintes, aux jeunes enfants, aux personnes âgées et aux personnes immunodéprimées. Pour elles, prenez des œufs pasteurisés, vendus au rayon frais.",
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
  annotations: {
    hero: "le guanciale, pas des lardons !",
    detail: "hors du feu, toujours",
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
