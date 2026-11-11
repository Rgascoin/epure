import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "ratatouille",
  title: "Ratatouille",
  seoTitle: "Ratatouille provençale, chaque légume cuit à part",
  tagline: "Chaque légume a son tour de poêle.",
  description:
    "La ratatouille provençale : aubergines, courgettes et poivrons dorés à part, puis mijotés 25 minutes dans une sauce tomate à l’ail. Végane et sans gluten.",
  summary:
    "Pour 6 personnes, une ratatouille se fait en dorant séparément à l’huile d’olive 2 aubergines, 3 courgettes et 2 poivrons coupés en cubes de 2 cm, pendant qu’une sauce de 2 oignons, 4 gousses d’ail et 800 g de tomates mijote 20 minutes. Réunissez le tout et laissez mijoter 25 minutes à feu très doux avec thym et laurier. Comptez 1 h 45, repos compris.",
  intro: [
    "La ratatouille est un ragoût de légumes d’été : aubergines, courgettes, poivrons, oignons et tomates, coupés en morceaux et mijotés ensemble dans l’huile d’olive. Chaque légume est d’abord doré à part, à la poêle. C’est plus long, mais c’est ce qui leur garde du goût et de la tenue.",
    "Ne la confondez pas avec le tian provençal, que vous trouverez aussi sur Épure. Le tian range des rondelles crues, serrées dans un plat, et les confit au four sans sauce. La ratatouille, elle, se fait à la poêle et en cocotte, et se mange à la cuillère.",
    "Ce qui peut rater : des légumes entassés qui bouillent au lieu de dorer, et une ratatouille qui finit en compote grise. Comptez 30 minutes de découpe, 1 heure de cuisson et un quart d’heure de repos. Elle est encore meilleure le lendemain.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "ratatouille",
    "recette ratatouille",
    "ratatouille provençale",
    "ratatouille maison",
    "vraie recette ratatouille",
    "ratatouille légumes cuits séparément",
    "ratatouille à la poêle",
    "ratatouille végétarienne",
    "ratatouille facile",
  ],
  diet: ["vegetarian", "vegan", "glutenFree", "lowLactose"],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 30, cook: 60, rest: 15 },
  difficulty: "Facile",
  cost: "€",
  season: ["Été", "Début d’automne"],
  equipment: [
    "grande cocotte en fonte ou faitout de 4 litres",
    "grande poêle ou sauteuse de 28 cm",
    "râpe à gros trous",
    "planche et grand couteau",
    "papier absorbant",
  ],
  ingredients: [
    {
      title: "La sauce tomate",
      items: [
        { qty: 2, name: "oignon jaune", plural: "oignons jaunes", note: "émincés", step: 1 },
        { qty: 2, unit: "cas", name: "huile d’olive vierge extra", step: 1 },
        { qty: 4, unit: "gousse", name: "ail", note: "dégermées et hachées", step: 1 },
        {
          qty: 800,
          unit: "g",
          name: "tomates bien mûres",
          note: "ou une boîte de 800 g de tomates pelées hors saison",
          step: 50,
        },
        { qty: 4, unit: "brin", name: "thym frais", step: 1 },
        { qty: 1, unit: "feuille", name: "laurier", step: 1 },
      ],
    },
    {
      title: "Les légumes",
      items: [
        { qty: 2, name: "aubergine", plural: "aubergines", note: "environ 600 g", step: 1 },
        { qty: 3, name: "courgette", plural: "courgettes", note: "fines et fermes, environ 600 g", step: 1 },
        { qty: 2, name: "poivron", plural: "poivrons", note: "un rouge et un jaune", step: 1 },
        {
          qty: 7,
          unit: "cas",
          name: "huile d’olive vierge extra",
          note: "3 pour les aubergines, 2 pour les courgettes, 2 pour les poivrons",
          step: 1,
        },
        { name: "sel fin et poivre du moulin" },
      ],
    },
    {
      title: "Pour finir",
      items: [
        { qty: 12, unit: "feuille", name: "basilic", step: 2 },
        { qty: 1, unit: "cas", name: "huile d’olive vierge extra", note: "crue", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "La découpe",
      steps: [
        {
          title: "Couper les légumes",
          text: "Lavez les légumes. Coupez les aubergines et les courgettes en cubes de 2 cm, sans les éplucher. Épépinez les poivrons et taillez-les en carrés de 2 cm. Coupez les tomates en deux et râpez-les côté chair sur une râpe à gros trous, au-dessus d’un saladier : la peau reste dans votre main.",
          tip: "Gardez chaque légume en tas séparé sur la planche. Ils vont passer à la poêle l’un après l’autre, pas ensemble.",
        },
      ],
    },
    {
      title: "La sauce tomate",
      steps: [
        {
          title: "Fondre les oignons",
          text: "Dans la cocotte, faites chauffer 2 cuillerées à soupe d’huile à feu moyen-doux. Ajoutez les oignons et une pincée de sel, et laissez-les fondre 10 minutes en remuant de temps en temps : ils deviennent translucides et tendres, à peine blonds.",
          timer: { minutes: 10, label: "Oignons fondus" },
        },
        {
          title: "Mijoter la sauce",
          text: "Ajoutez l’ail et remuez quelques secondes, jusqu’à ce qu’il sente bon sans colorer. Versez la pulpe de tomate, ajoutez le thym et le laurier, salez légèrement et laissez mijoter à feu doux, à découvert, au moins 20 minutes, pendant que vous dorez les autres légumes. La sauce réduit et épaissit.",
          timer: { minutes: 20, label: "Sauce tomate" },
        },
      ],
    },
    {
      title: "Les légumes, un par un",
      steps: [
        {
          title: "Dorer les aubergines",
          text: "Faites chauffer 3 cuillerées à soupe d’huile dans la poêle à feu moyen-vif. Ajoutez les aubergines en une seule couche (en deux fois si besoin) et faites-les dorer 10 minutes en les retournant souvent : elles doivent être dorées sur plusieurs faces et fondantes à cœur. Égouttez-les sur du papier absorbant et salez-les.",
          timer: { minutes: 10, label: "Aubergines" },
          tip: "Elles boivent d’abord toute l’huile et semblent sèches. N’en rajoutez pas : en cuisant, elles vont la rendre.",
        },
        {
          title: "Saisir les courgettes",
          text: "Dans la même poêle, faites chauffer 2 cuillerées à soupe d’huile et saisissez les courgettes à feu vif 6 à 8 minutes : elles dorent sur les bords mais restent légèrement fermes. Réservez-les avec les aubergines et salez-les.",
          timer: { minutes: 7, label: "Courgettes" },
        },
        {
          title: "Cuire les poivrons",
          text: "Faites chauffer les 2 dernières cuillerées à soupe d’huile et faites cuire les poivrons 8 à 10 minutes à feu moyen, en remuant : ils s’assouplissent et leurs bords caramélisent légèrement. Salez-les.",
          timer: { minutes: 9, label: "Poivrons" },
        },
      ],
    },
    {
      title: "L’assemblage",
      steps: [
        {
          title: "Mijoter ensemble",
          text: "Versez tous les légumes dorés dans la sauce tomate et mélangez délicatement. Couvrez et laissez mijoter 25 minutes à feu très doux, en remuant une ou deux fois sans écraser les morceaux. S’il reste trop de jus à la fin, retirez le couvercle pour les dernières minutes.",
          timer: { minutes: 25, label: "Mijotage" },
          tip: "Remuez avec une cuillère en bois, en soulevant par le fond. Les cubes d’aubergine, très tendres, se cassent facilement.",
        },
        {
          title: "Assaisonner et reposer",
          text: "Retirez le thym et le laurier, goûtez, puis salez et poivrez. Hors du feu, ajoutez les feuilles de basilic ciselées et 1 cuillerée à soupe d’huile d’olive crue. Laissez reposer 15 minutes avant de servir : la ratatouille est meilleure tiède que brûlante.",
          timer: { minutes: 15, label: "Repos de la ratatouille" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi cuire chaque légume à part",
      text: "Aubergine, courgette et poivron n’ont ni la même quantité d’eau ni le même temps de cuisson. Ensemble dans une cocotte, ils rendent leur eau et bouillent : impossible de dorer. Saisis séparément, en une couche, leur surface sèche vite et la réaction de Maillard leur donne un goût grillé que la sauce ne leur apporterait pas.",
    },
    {
      title: "L’aubergine boit l’huile, puis la rend",
      text: "La chair de l’aubergine est pleine de petites poches d’air, qui absorbent l’huile comme une éponge. Quand la chaleur fait s’effondrer sa structure, elle en relâche une partie. D’où le conseil de ne pas rajouter d’huile quand elle semble sèche au début.",
    },
    {
      title: "La tomate tient les morceaux",
      text: "L’acidité de la sauce tomate ralentit la dégradation des pectines, qui soudent entre elles les cellules des légumes. Des légumes déjà cuits peuvent donc mijoter 25 minutes dans la tomate sans tomber en purée, alors qu’ils s’effondreraient plus vite dans de l’eau.",
    },
  ],
  tips: [
    "Coupez tous les légumes à la même taille, 2 cm : ils mijotent au même rythme et chaque cuillerée a un peu de tout.",
    "Ne surchargez pas la poêle. Une seule couche de cubes, quitte à cuire en deux fois : entassés, ils rendent leur eau et bouillent au lieu de dorer.",
    "Râper les tomates évite de les monder : la pulpe tombe dans le saladier, la peau reste dans la main.",
    "Ajoutez le basilic hors du feu, au dernier moment. Cuit, il perd presque tout son parfum.",
    "Faites-la la veille si vous pouvez : elle se tient mieux, et se mange aussi bien tiède que froide.",
  ],
  mistakes: [
    "Tout mettre dans la cocotte dès le départ : les légumes bouillent dans leur eau et finissent en compote grise.",
    "Cuire les aubergines à feu trop doux : elles boivent l’huile sans dorer et restent spongieuses.",
    "Rajouter de l’huile dès que les aubergines semblent sèches : elles la rendent ensuite et la ratatouille baigne dans le gras.",
    "Remuer trop souvent pendant le mijotage : les cubes se cassent et tout se mélange en purée.",
  ],
  variations: [
    {
      title: "Finie au four",
      text: "Une fois les légumes dorés, mélangez-les à la sauce dans un plat à gratin et enfournez 40 minutes à 160 °C, à découvert, au lieu du mijotage en cocotte. Le dessus confit légèrement et la sauce réduit davantage.",
    },
    {
      title: "Avec des œufs",
      text: "Creusez 6 petits puits dans la ratatouille chaude, cassez un œuf dans chacun, couvrez et laissez cuire 6 à 8 minutes à feu doux, jusqu’à ce que les blancs soient pris. Elle n’est alors plus végane.",
    },
    {
      title: "En hiver",
      text: "Remplacez les tomates fraîches par une boîte de 800 g de tomates pelées, écrasées à la main, et laissez mijoter la sauce 10 minutes de plus. Le reste ne change pas ; choisissez des courgettes et des aubergines bien fermes.",
    },
  ],
  storage:
    "Elle se garde 3 jours au réfrigérateur en boîte fermée, et 3 mois au congélateur. Réchauffez-la doucement à la casserole, ou servez-la froide avec un filet d’huile d’olive.",
  pairing: "Un rouge du Sud léger, servi frais : un côtes-du-luberon ou un coteaux-d’aix-en-provence.",
  faq: [
    {
      q: "Ratatouille ou tian provençal : quelle différence ?",
      a: "Les légumes sont presque les mêmes, c’est la cuisson qui change. La ratatouille est un ragoût : légumes en cubes, dorés un par un à la poêle, puis mijotés ensemble dans une sauce tomate. Le tian est un gratin sans sauce : rondelles crues rangées serrées dans un plat et confites au four. La ratatouille en spirale, popularisée par un film d’animation, ressemble d’ailleurs davantage à un tian.",
    },
    {
      q: "Faut-il cuire les légumes de la ratatouille séparément ?",
      a: "Oui, si vous voulez des légumes qui gardent leur forme et leur goût. L’aubergine doit dorer longtemps, la courgette cuit vite, le poivron entre les deux. Tous ensemble, ils rendent leur eau et bouillent. Ça demande 25 minutes de plus devant la poêle, et ça se voit dans l’assiette.",
    },
    {
      q: "Faut-il éplucher les aubergines et les courgettes ?",
      a: "Non. La peau aide les cubes à se tenir et donne de la couleur au plat. Lavez-les et coupez les extrémités, c’est tout. Si la peau des poivrons vous gêne, retirez-la à l’économe avant de les couper.",
    },
    {
      q: "Peut-on faire une ratatouille en hiver ?",
      a: "Oui, avec une boîte de 800 g de tomates pelées à la place des fraîches, et 10 minutes de mijotage en plus pour la sauce. Les courgettes et aubergines d’hiver ont moins de goût : choisissez-les fermes et brillantes, et forcez un peu sur le thym et l’ail.",
    },
    {
      q: "Comment éviter une ratatouille trop liquide ?",
      a: "Faites bien réduire la sauce tomate avant d’y mettre les légumes, et dorez ceux-ci à feu vif sans les entasser. S’il reste beaucoup de jus en fin de cuisson, retirez le couvercle et laissez mijoter 10 minutes de plus.",
    },
    {
      q: "Peut-on congeler une ratatouille ?",
      a: "Oui, jusqu’à 3 mois, en boîte bien fermée. Décongelez-la une nuit au réfrigérateur et réchauffez-la doucement à la casserole. Les légumes seront un peu plus fondants qu’au premier jour, ce qui ne gêne pas du tout.",
    },
    {
      q: "Avec quoi servir une ratatouille ?",
      a: "En plat, avec du riz, de la semoule, des pâtes ou du bon pain. En accompagnement, avec un poisson grillé, un poulet rôti ou des côtelettes d’agneau. Froide, elle se tartine sur du pain grillé.",
    },
  ],
  nutrition: {
    calories: 290,
    protein: 4,
    fat: 23,
    saturatedFat: 3.5,
    carbs: 15,
    sugar: 10,
    fiber: 7,
    sodium: 350,
  },
  annotations: {
    hero: "chaque légume doré à part",
    detail: "mijotée doucement, sans écraser",
  },
  images: {
    heroAlt:
      "Ratatouille vue de dessus dans une poêle noire : courgettes, aubergines, poivron rouge, oignon et laurier",
    detailAlt: "Ratatouille mijotée dans un plat en terre : morceaux d’aubergine, de courgette, de poivron et de tomate",
    credits: {
      hero: {
        photographer: "Schnobby",
        url: "https://commons.wikimedia.org/wiki/File:Ratatouille_2.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
      detail: {
        photographer: "Arnaud 25",
        url: "https://commons.wikimedia.org/wiki/File:Ratatouille_004.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
    },
  },
  datePublished: "2026-11-05",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#C2461F",
    onAccent: "#ffffff",
    ink: "#A63A16",
    tint: "#FBEEE7",
    deep: "#1C0E08",
    focus: "50% 52%",
  },
});
