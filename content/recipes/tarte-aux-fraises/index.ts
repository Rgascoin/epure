import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "tarte-aux-fraises",
  title: "Tarte aux fraises",
  seoTitle: "Tarte aux fraises, pâte sablée et crème pâtissière",
  tagline: "Quand les gariguettes arrivent au marché.",
  description:
    "Une tarte aux fraises pour 8 : une pâte sablée cuite à blanc, une crème pâtissière à la vanille et 600 g de fraises fraîches rangées en cercles.",
  summary:
    "Pour 8 parts, préparez une pâte sablée avec 200 g de farine, 100 g de beurre, 70 g de sucre glace et 1 œuf, laissez-la reposer 1 heure et faites-la cuire à blanc 30 minutes à 170 °C dans un moule de 24 cm. Garnissez-la d’une crème pâtissière à la vanille refroidie 2 heures, puis de 600 g de fraises coupées en deux. Comptez 3 heures en tout, dont 50 minutes de travail.",
  intro: [
    "La tarte aux fraises, c’est un fond sablé qui croque, une couche de crème pâtissière à la vanille, et des fraises crues rangées serré, juste coupées. Rien ne cuit avec les fruits : tout repose sur leur goût.",
    "D’où le premier conseil : attendez la saison. Une fraise ne mûrit plus après la cueillette, et celles de l’hiver, belles et fermes, n’ont presque pas de parfum. Au printemps, prenez-les rouges jusqu’à la queue.",
    "Le second tient au fond. Il doit être cuit jusqu’à être bien doré, puis garni au dernier moment, sinon la crème le détrempe en quelques heures.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "tarte aux fraises",
    "recette tarte aux fraises",
    "tarte aux fraises crème pâtissière",
    "tarte aux fraises pâte sablée",
    "tarte aux fraises maison",
    "crème pâtissière",
    "nappage tarte aux fraises",
    "quelles fraises pour une tarte",
  ],
  diet: ["vegetarian"],
  servings: 8,
  servingsLabel: { one: "part", other: "parts" },
  times: { prep: 50, cook: 40, rest: 90 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Printemps", "Été"],
  tags: ["printemps", "fete-des-meres"],
  equipment: [
    "moule à tarte de 24 cm, idéalement à fond amovible",
    "rouleau à pâtisserie",
    "papier sulfurisé et billes de cuisson",
    "casserole et fouet",
    "pinceau, pour le nappage",
  ],
  ingredients: [
    {
      title: "Pâte sablée",
      items: [
        { qty: 200, unit: "g", name: "farine T55", step: 5 },
        { qty: 70, unit: "g", name: "sucre glace", step: 5 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 100, unit: "g", name: "beurre doux", note: "froid, en dés", step: 5 },
        { qty: 1, name: "œuf", plural: "œufs", note: "battu", step: 1 },
        { qty: 10, unit: "g", name: "beurre mou", note: "pour le moule", step: 5, fixed: true },
      ],
    },
    {
      title: "Crème pâtissière",
      items: [
        { qty: 400, unit: "ml", name: "lait entier", step: 10 },
        { qty: 1, unit: "gousse", name: "vanille", note: "fendue et grattée", step: 1 },
        { qty: 4, name: "jaune d’œuf", plural: "jaunes d’œufs", step: 1 },
        { qty: 80, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 35, unit: "g", name: "fécule de maïs", step: 5 },
        { qty: 20, unit: "g", name: "beurre doux", step: 5 },
      ],
    },
    {
      title: "Garniture",
      items: [
        { qty: 600, unit: "g", name: "fraises", note: "gariguette, ciflorette ou mara des bois", step: 50 },
        { qty: 3, unit: "cas", name: "gelée de groseille", step: 1, optional: true },
        { qty: 1, unit: "cas", name: "eau", step: 1, optional: true },
      ],
    },
  ],
  method: [
    {
      title: "La pâte sablée",
      steps: [
        {
          title: "Sabler la pâte",
          text: "Dans un saladier, mélangez la farine, le sucre glace et le sel. Ajoutez le beurre froid et frottez-le entre vos doigts jusqu’à obtenir un sable fin, sans morceaux de beurre visibles.",
        },
        {
          title: "Lier et laisser reposer",
          text: "Ajoutez l’œuf battu et rassemblez la pâte à la spatule, puis à la main, juste jusqu’à ce qu’elle se tienne. Ne la pétrissez pas. Aplatissez-la en disque de 2 cm, filmez-la et laissez-la 1 heure au réfrigérateur.",
          timer: { minutes: 60, label: "Repos de la pâte" },
        },
      ],
    },
    {
      title: "La crème pâtissière",
      steps: [
        {
          title: "Chauffer le lait",
          text: "Pendant que la pâte repose, mettez le lait, les graines de vanille et la gousse grattée dans une casserole et portez à frémissement.",
        },
        {
          title: "Fouetter les jaunes",
          text: "Dans un saladier, fouettez les jaunes avec le sucre, puis ajoutez la fécule et fouettez jusqu’à ce que le mélange soit lisse. Retirez la gousse et versez le lait chaud en filet, sans cesser de fouetter. Reversez le tout dans la casserole.",
        },
        {
          title: "Cuire la crème",
          text: "Sur feu moyen, fouettez sans arrêt en raclant le fond et les bords. La crème épaissit d’un coup : continuez de fouetter et laissez-la bouillonner 1 minute. Hors du feu, incorporez le beurre.",
          timer: { minutes: 1, label: "Ébullition de la crème" },
          tip: "Cette minute de bouillon est indispensable : elle finit de gonfler l’amidon et détruit une enzyme du jaune qui, sinon, liquéfie la crème au réfrigérateur.",
        },
        {
          title: "Refroidir la crème",
          text: "Versez la crème dans un plat large et filmez-la au contact, pour qu’elle ne croûte pas. Dès qu’elle a tiédi, mettez-la au moins 2 heures au réfrigérateur.",
          timer: { minutes: 120, label: "Crème au réfrigérateur" },
        },
      ],
    },
    {
      title: "Le fond de tarte",
      steps: [
        {
          title: "Foncer le moule",
          text: "Beurrez le moule. Étalez la pâte sur 3 mm entre deux feuilles de papier sulfurisé et foncez le moule en appuyant bien dans les angles. Coupez l’excédent et piquez le fond à la fourchette. Mettez le moule 15 minutes au congélateur et préchauffez le four à 170 °C, chaleur tournante.",
          timer: { minutes: 15, label: "Pâte au congélateur" },
        },
        {
          title: "Cuire à blanc",
          text: "Couvrez la pâte de papier sulfurisé, remplissez de billes de cuisson et enfournez 20 minutes. Retirez papier et billes, puis prolongez de 8 à 10 minutes, jusqu’à ce que le fond soit sec et doré de façon uniforme. Laissez-le refroidir complètement sur une grille.",
          timer: { minutes: 30, label: "Cuisson à blanc" },
          tip: "Visez un fond doré, pas blond : sous la crème, une pâte pâle ramollit vite.",
        },
      ],
    },
    {
      title: "Le montage",
      steps: [
        {
          title: "Préparer les fraises",
          text: "Rincez rapidement les fraises entières, avec leur queue, et séchez-les sur un torchon. Équeutez-les ensuite et coupez-les en deux dans la hauteur.",
        },
        {
          title: "Garnir la tarte",
          text: "Fouettez la crème froide quelques secondes pour la lisser. Étalez-la dans le fond refroidi, ou dressez-la à la poche à douille. Rangez les fraises en cercles serrés en partant du bord, la face coupée vers l’extérieur, et finissez par une fraise entière au centre.",
        },
        {
          title: "Napper, si vous voulez",
          text: "Faites fondre la gelée de groseille avec l’eau à feu doux, jusqu’à ce qu’elle soit fluide, et passez-la au pinceau sur les fraises. Servez sans trop attendre, tant que la pâte croque.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Sabler avant de mouiller",
      text: "En frottant d’abord le beurre dans la farine, on enrobe ses particules de gras. Quand l’œuf arrive, l’eau qu’il apporte n’atteint plus qu’une partie des protéines de la farine : le gluten se forme à peine, et la pâte reste friable au lieu de devenir élastique.",
    },
    {
      title: "Pourquoi la crème doit bouillir",
      text: "L’amidon de la fécule ne gonfle complètement qu’en approchant de l’ébullition. Le jaune d’œuf contient en plus une amylase, une enzyme qui découpe l’amidon. Si elle n’est pas détruite par la chaleur, elle refluidifie la crème en quelques heures.",
    },
    {
      title: "Une fraise ne mûrit plus",
      text: "Contrairement à la banane ou à la poire, la fraise ne continue pas de mûrir une fois cueillie : elle se ramollit, mais ne gagne ni sucre ni parfum. Ce que vous achetez est ce que vous aurez dans la tarte.",
    },
  ],
  tips: [
    "Choisissez des fraises rouges jusqu’à la queue, qui sentent la fraise à travers la barquette. Des fruits moyens se rangent plus facilement que des gros.",
    "Sortez les fraises du réfrigérateur une demi-heure avant de garnir : froides, elles ont beaucoup moins de goût.",
    "Pour protéger le fond, badigeonnez-le au pinceau d’une fine couche de chocolat blanc fondu dès sa sortie du four, et laissez-la figer avant de garnir.",
    "Garnissez au plus près du service. Le fond cuit et la crème se préparent la veille, l’assemblage prend dix minutes.",
  ],
  mistakes: [
    "Un fond trop pâle : il ramollit sous la crème et colle aux dents. Prolongez la cuisson à blanc jusqu’à une couleur dorée uniforme.",
    "Une crème qui n’a pas bouilli : elle reste coulante ou se liquéfie au réfrigérateur. Laissez-la bouillonner une minute en fouettant.",
    "Des fraises lavées après avoir été équeutées : elles boivent l’eau, deviennent molles et perdent du goût. Rincez-les entières, puis équeutez.",
    "Une pâte trop travaillée : elle se rétracte à la cuisson et devient dure. Rassemblez-la juste assez pour qu’elle se tienne.",
  ],
  variations: [
    {
      title: "Crème légère",
      text: "Fouettez 15 cl de crème liquide entière bien froide en chantilly ferme et incorporez-la à la maryse dans la crème pâtissière froide et lissée. La garniture est plus aérienne, un peu moins sucrée.",
    },
    {
      title: "En tartelettes",
      text: "La même pâte garnit 8 moules à tartelettes de 9 cm. Cuisez-les à blanc 15 minutes avec les billes, puis 5 minutes sans, et partagez crème et fraises de la même façon.",
    },
    {
      title: "Fond sablé aux amandes",
      text: "Remplacez 30 g de farine par 30 g de poudre d’amande. Le fond est plus friable et plus parfumé, mais contient des fruits à coque.",
    },
  ],
  storage:
    "La tarte se mange de préférence le jour même ; au réfrigérateur, elle tient jusqu’au lendemain, mais la pâte ramollit. Séparément, le fond cuit se garde 2 jours dans une boîte hermétique et la crème pâtissière 24 heures au frais, filmée au contact. Ne congelez pas la tarte garnie.",
  pairing: "Un crémant de Loire ou un thé vert jasmin, servi léger.",
  easy: {
    shortcut: "pâte sablée pur beurre du commerce",
    note: "Une pâte sablée en rouleau, et une crème pâtissière refroidie en couche fine au congélateur plutôt que 2 heures au frigo : la tarte est prête en 1 h 30 au lieu de 3 heures. La pâte est plus fine et moins friable que la maison ; prenez-la pur beurre. La crème, elle, ne change pas.",
    times: { prep: 30, cook: 30, rest: 30 },
    ingredients: [
      {
        title: "Fond de tarte",
        items: [
          {
            qty: 1,
            unit: "rouleau",
            name: "pâte sablée pur beurre",
            note: "ronde, du commerce, environ 230 g",
            step: 1,
          },
          { qty: 10, unit: "g", name: "beurre mou", note: "pour le moule", step: 5, fixed: true },
        ],
      },
      {
        title: "Crème pâtissière",
        items: [
          { qty: 400, unit: "ml", name: "lait entier", step: 10 },
          { qty: 1, unit: "gousse", name: "vanille", note: "fendue et grattée", step: 1 },
          { qty: 4, name: "jaune d’œuf", plural: "jaunes d’œufs", step: 1 },
          { qty: 80, unit: "g", name: "sucre en poudre", step: 5 },
          { qty: 35, unit: "g", name: "fécule de maïs", step: 5 },
          { qty: 20, unit: "g", name: "beurre doux", step: 5 },
        ],
      },
      {
        title: "Garniture",
        items: [
          { qty: 600, unit: "g", name: "fraises", note: "gariguette, ciflorette ou mara des bois", step: 50 },
          { qty: 3, unit: "cas", name: "gelée de groseille", step: 1, optional: true },
          { qty: 1, unit: "cas", name: "eau", step: 1, optional: true },
        ],
      },
    ],
    method: [
      {
        title: "La crème pâtissière",
        steps: [
          {
            title: "Chauffer le lait",
            text: "Préchauffez le four à 170 °C, chaleur tournante. Mettez le lait, les graines de vanille et la gousse grattée dans une casserole et portez à frémissement.",
          },
          {
            title: "Fouetter les jaunes",
            text: "Dans un saladier, fouettez les jaunes avec le sucre, puis ajoutez la fécule et fouettez jusqu’à ce que le mélange soit lisse. Retirez la gousse et versez le lait chaud en filet, sans cesser de fouetter. Reversez le tout dans la casserole.",
          },
          {
            title: "Cuire la crème",
            text: "Sur feu moyen, fouettez sans arrêt en raclant le fond et les bords. La crème épaissit d’un coup : continuez de fouetter et laissez-la bouillonner 1 minute. Hors du feu, incorporez le beurre.",
            timer: { minutes: 1, label: "Ébullition de la crème" },
            tip: "Cette minute de bouillon est indispensable : elle finit de gonfler l’amidon et détruit une enzyme du jaune qui, sinon, liquéfie la crème au réfrigérateur.",
          },
          {
            title: "Refroidir vite",
            text: "Étalez la crème sur 1 à 2 cm d’épaisseur dans un grand plat froid et filmez-la au contact. Mettez-la 30 minutes au congélateur, puis au réfrigérateur jusqu’au montage. En couche fine, elle refroidit bien plus vite qu’en saladier ; au moment de garnir, elle doit être froide au toucher.",
            timer: { minutes: 30, label: "Crème au congélateur" },
          },
        ],
      },
      {
        title: "Le fond de tarte",
        steps: [
          {
            title: "Foncer le moule",
            text: "Pendant ce temps, beurrez le moule. Déroulez la pâte et foncez le moule en appuyant bien dans les angles. Coupez l’excédent et piquez le fond à la fourchette. Mettez le moule 15 minutes au congélateur.",
            timer: { minutes: 15, label: "Pâte au congélateur" },
          },
          {
            title: "Cuire à blanc",
            text: "Couvrez la pâte de papier sulfurisé, remplissez de billes de cuisson et enfournez 15 minutes. Retirez papier et billes, puis prolongez de 5 à 8 minutes, jusqu’à ce que le fond soit sec et doré de façon uniforme. Plus fine que la pâte maison, elle colore vite : surveillez la fin. Laissez-le refroidir complètement sur une grille.",
            timer: { minutes: 20, label: "Cuisson à blanc" },
            tip: "Visez un fond doré, pas blond : sous la crème, une pâte pâle ramollit vite.",
          },
        ],
      },
      {
        title: "Le montage",
        steps: [
          {
            title: "Préparer les fraises",
            text: "Rincez rapidement les fraises entières, avec leur queue, et séchez-les sur un torchon. Équeutez-les ensuite et coupez-les en deux dans la hauteur.",
          },
          {
            title: "Garnir la tarte",
            text: "Fouettez la crème froide quelques secondes pour la lisser. Étalez-la dans le fond refroidi, ou dressez-la à la poche à douille. Rangez les fraises en cercles serrés en partant du bord, la face coupée vers l’extérieur, et finissez par une fraise entière au centre.",
          },
          {
            title: "Napper, si vous voulez",
            text: "Faites fondre la gelée de groseille avec l’eau à feu doux, jusqu’à ce qu’elle soit fluide, et passez-la au pinceau sur les fraises. Servez sans trop attendre, tant que la pâte croque.",
          },
        ],
      },
    ],
  },
  faq: [
    {
      q: "Quelle est la saison des fraises pour une tarte ?",
      a: "Le printemps. Les fraises françaises arrivent en avril, la gariguette parmi les premières, et la pleine saison court jusqu’en juin. Les variétés remontantes, comme la mara des bois, produisent ensuite jusqu’à l’automne. En hiver, les fraises importées ont peu de goût.",
    },
    {
      q: "Quelles fraises choisir pour une tarte aux fraises ?",
      a: "Des fraises de taille moyenne, fermes et parfumées. La gariguette, allongée et acidulée, se range bien en cercles. La ciflorette est plus sucrée, et la mara des bois a un goût de fraise des bois. Évitez les très grosses, qui se coupent mal et rendent du jus.",
    },
    {
      q: "Comment éviter que le fond de tarte ramollisse ?",
      a: "En le cuisant jusqu’à ce qu’il soit bien doré, puis en le garnissant le plus tard possible. Une fine couche de chocolat blanc fondu au pinceau, figée avant d’ajouter la crème, fait une barrière efficace contre l’humidité.",
    },
    {
      q: "Le nappage est-il indispensable ?",
      a: "Non. Il fait briller les fraises et les empêche de sécher en surface, mais une tarte servie aussitôt s’en passe très bien. Si vous en mettez, prenez de la gelée de groseille fondue, ou de la confiture d’abricot passée au tamis.",
    },
    {
      q: "Peut-on préparer une tarte aux fraises la veille ?",
      a: "Les éléments, oui ; la tarte assemblée, mieux vaut éviter. Cuisez le fond et faites la crème la veille, puis garnissez le jour même. Montée la veille, la tarte reste bonne, mais le fond a perdu son croquant.",
    },
    {
      q: "Combien de temps se garde une tarte aux fraises ?",
      a: "24 heures au réfrigérateur, à cause de la crème pâtissière, qui contient des œufs et du lait et se garde toujours au froid. Sortez-la 15 minutes avant de servir pour que les fraises retrouvent leur parfum.",
    },
  ],
  nutrition: {
    calories: 405,
    protein: 7,
    fat: 18,
    saturatedFat: 11,
    carbs: 53,
    sugar: 30,
    fiber: 2,
    sodium: 60,
  },
  annotations: {
    hero: "rangées serré, en partant du bord",
    detail: "nappage facultatif, mais ça brille",
  },
  images: {
    heroAlt:
      "Tarte aux fraises vue de dessus : fraises coupées en deux en cercles sur la crème pâtissière, fond sablé cannelé",
    detailAlt: "Gros plan sur une tarte aux fraises nappée : fraises brillantes posées sur la crème et le fond sablé",
    credits: {
      hero: {
        photographer: "Ayşe Nur",
        url: "https://www.pexels.com/photo/cake-with-strawberries-11441242/",
      },
      detail: {
        photographer: "Nano Erdozain",
        url: "https://www.pexels.com/photo/delicious-strawberry-tart-close-up-with-glaze-32590842/",
      },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#D9343A",
    onAccent: "#FFFFFF",
    ink: "#A8222A",
    tint: "#FBECEC",
    deep: "#200A0C",
    focus: "50% 50%",
  },
});
