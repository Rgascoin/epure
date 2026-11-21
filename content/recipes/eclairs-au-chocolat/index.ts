import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "eclairs-au-chocolat",
  title: "Éclairs au chocolat",
  seoTitle: "Éclairs au chocolat maison, crème pâtissière et glaçage",
  tagline: "La crème d’abord, elle doit refroidir.",
  description:
    "12 éclairs au chocolat : pâte à choux pochée à la douille cannelée, crème pâtissière au chocolat noir et glaçage brillant. Prêts en 4 h, dont 2 h au froid.",
  summary:
    "Pour 12 éclairs, préparez d’abord une crème pâtissière avec 50 cl de lait, 4 jaunes et 120 g de chocolat noir, qui doit prendre 2 h au froid. La pâte à choux (90 g de beurre, 120 g de farine, 4 œufs) se poche en bâtons de 13 cm et cuit 35 minutes à 170 °C sans ouvrir le four, puis sèche 10 minutes à 150 °C. On garnit par en dessous et on trempe le dessus dans un glaçage au chocolat. Comptez 4 h en tout, dont 2 h 15 de froid.",
  intro: [
    "Un éclair, c’est un bâton de pâte à choux cuit jusqu’à être creux et sec, rempli de crème pâtissière par trois petits trous, puis trempé dans un glaçage qui brille. Trois préparations, donc, et un ordre à respecter : la crème la première, parce qu’elle a besoin de deux heures au froid.",
    "Ce qui rate un éclair, c’est presque toujours la cuisson. Sorti trop pâle, il paraît gonflé et doré, puis s’affaisse sur la grille et ramollit sous la crème.",
    "Laissez-le donc cuire plus longtemps que vous n’oseriez, jusqu’à ce que le fond des stries soit brun, et séchez-le ensuite à four plus doux. Une coque bien sèche tient la crème sans faiblir jusqu’au lendemain.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "éclair au chocolat",
    "recette éclair au chocolat",
    "éclairs au chocolat maison",
    "pâte à choux éclair",
    "crème pâtissière au chocolat",
    "glaçage éclair au chocolat",
    "comment garnir un éclair",
    "cuisson éclair au four",
  ],
  servings: 12,
  servingsLabel: { one: "éclair", other: "éclairs" },
  times: { prep: 45, cook: 60, rest: 135 },
  difficulty: "Exigeant",
  cost: "€",
  season: ["Toute l’année"],
  tags: [],
  equipment: [
    "poche à douille et douille cannelée de 14 à 16 mm",
    "petite douille unie de 6 mm pour garnir",
    "2 plaques de cuisson et papier cuisson",
    "casserole à fond épais",
    "fouet et maryse",
    "thermomètre de cuisine",
    "grille",
  ],
  ingredients: [
    {
      title: "La crème pâtissière au chocolat",
      items: [
        { qty: 50, unit: "cl", name: "lait entier", step: 5 },
        { qty: 4, name: "jaune d’œuf", plural: "jaunes d’œufs", step: 1 },
        { qty: 70, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 40, unit: "g", name: "fécule de maïs", step: 5 },
        { qty: 120, unit: "g", name: "chocolat noir", note: "64 à 70 % de cacao, haché", step: 10 },
        { qty: 25, unit: "g", name: "beurre doux", note: "froid, en dés", step: 5 },
      ],
    },
    {
      title: "La pâte à choux",
      items: [
        { qty: 10, unit: "cl", name: "eau", step: 1 },
        { qty: 10, unit: "cl", name: "lait entier", step: 1 },
        { qty: 90, unit: "g", name: "beurre doux", note: "en morceaux", step: 5 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 1, unit: "cac", name: "sucre en poudre", step: 0.5 },
        { qty: 120, unit: "g", name: "farine", note: "T55, tamisée", step: 5 },
        { qty: 4, name: "œuf", plural: "œufs", note: "environ 200 g, battus", step: 1 },
      ],
    },
    {
      title: "Le glaçage",
      items: [
        { qty: 100, unit: "g", name: "chocolat noir", note: "64 à 70 % de cacao, haché", step: 10 },
        { qty: 10, unit: "cl", name: "crème liquide entière", step: 1 },
        { qty: 1, unit: "cas", name: "miel liquide", step: 0.5 },
      ],
    },
  ],
  method: [
    {
      title: "La crème au chocolat",
      steps: [
        {
          title: "Cuire la crème",
          text: "Portez le lait à frémissement. Dans un saladier, fouettez les jaunes avec le sucre, puis la fécule. Versez un tiers du lait chaud dessus en fouettant, reversez le tout dans la casserole et chauffez à feu moyen sans cesser de fouetter. Quand la crème épaissit d’un coup et que de grosses bulles éclatent, comptez encore 1 minute d’ébullition franche en raclant les bords.",
          timer: { minutes: 1, label: "Ébullition de la crème" },
          tip: "Cette minute d’ébullition n’est pas négociable : sans elle, la crème épaisse ce soir coulera demain.",
        },
        {
          title: "Ajouter le chocolat",
          text: "Hors du feu, ajoutez le chocolat haché et le beurre. Laissez-les fondre un instant, puis fouettez jusqu’à ce que la crème soit lisse, brillante et d’un brun uniforme, sans traînée claire.",
        },
        {
          title: "Refroidir au contact",
          text: "Versez la crème dans un plat large et peu profond, pour qu’elle refroidisse vite. Couvrez-la d’un film alimentaire posé directement sur la surface, sans bulle d’air, et mettez-la au réfrigérateur dès qu’elle ne fume plus, pour 2 h au moins.",
          timer: { minutes: 120, label: "Crème au réfrigérateur" },
        },
      ],
    },
    {
      title: "Les coques",
      steps: [
        {
          title: "Préparer four et plaques",
          text: "Préchauffez le four à 170 °C, chaleur tournante. Tapissez deux plaques de papier cuisson et tracez au crayon, au dos de la feuille, des repères de 13 cm espacés de 4 cm. Équipez la poche de la douille cannelée.",
        },
        {
          title: "Dessécher la panade",
          text: "Dans la casserole, portez à ébullition l’eau, le lait, le beurre, le sel et le sucre. Au premier gros bouillon, le beurre fondu, retirez du feu et jetez la farine d’un seul coup. Mélangez, puis remettez sur feu doux en retournant la pâte à la spatule 1 à 2 minutes, jusqu’à ce qu’elle forme une boule souple qui ne colle plus aux parois.",
          timer: { minutes: 2, label: "Dessèchement de la panade" },
        },
        {
          title: "Incorporer les œufs",
          text: "Transvasez la pâte dans un saladier et remuez-la un moment pour la faire tiédir. Ajoutez les œufs battus en cinq fois, en travaillant vigoureusement jusqu’à ce que chaque ajout soit absorbé. Arrêtez-vous quand un sillon tracé du doigt dans la pâte se referme lentement et qu’elle tombe de la spatule en ruban épais.",
          tip: "S’il reste un peu d’œuf à ce moment-là, ne l’ajoutez pas : une pâte trop souple s’étale au lieu de monter.",
        },
        {
          title: "Pocher les éclairs",
          text: "Remplissez la poche. Tenez-la inclinée à 45°, douille à 1 cm de la plaque, et pochez 12 bâtons de 13 cm sur 2,5 cm de large, d’une pression régulière et sans vous arrêter. En bout de course, relâchez la pression et ramenez la douille vers l’arrière d’un petit coup sec pour couper la pâte.",
        },
        {
          title: "Cuire porte fermée",
          text: "Enfournez les deux plaques et laissez cuire 35 minutes sans ouvrir la porte. Les éclairs gonflent, puis prennent couleur. Ils sont prêts quand ils sont brun doré jusqu’au fond des stries et sonnent creux quand on tapote le dessous.",
          timer: { minutes: 35, label: "Cuisson des éclairs" },
          tip: "Ouvrir avant la fin laisse filer la vapeur qui les porte : ils retombent et ne remontent plus.",
        },
        {
          title: "Sécher à 150 °C",
          text: "Baissez le four à 150 °C, entrouvrez la porte quelques secondes pour laisser s’échapper la vapeur, refermez et laissez sécher 10 minutes. Posez ensuite les éclairs sur une grille et laissez-les refroidir complètement avant de les garnir.",
          timer: { minutes: 10, label: "Séchage des coques" },
        },
      ],
    },
    {
      title: "Garnir et glacer",
      steps: [
        {
          title: "Garnir par en dessous",
          text: "Fouettez la crème froide quelques secondes pour la rendre lisse, puis mettez-la dans une poche munie de la petite douille. Percez trois trous sous chaque éclair, aux deux bouts et au milieu. Poussez la crème par chaque trou jusqu’à ce qu’elle ressorte par le suivant : l’éclair doit être lourd dans la main.",
        },
        {
          title: "Préparer le glaçage",
          text: "Portez la crème et le miel à frémissement, versez sur le chocolat haché et remuez doucement à la maryse, sans fouetter pour ne pas faire de bulles, jusqu’à ce que ce soit lisse. Laissez reposer 10 minutes, jusqu’à 35 °C environ : le glaçage nappe la cuillère et paraît à peine tiède au doigt.",
          timer: { minutes: 10, label: "Glaçage à 35 °C" },
        },
        {
          title: "Glacer les éclairs",
          text: "Trempez le dessus de chaque éclair dans le glaçage, relevez-le et laissez couler l’excédent quelques secondes, puis lissez le bord d’un doigt pour une ligne nette. Posez-les sur la grille et laissez prendre 15 minutes au réfrigérateur.",
          timer: { minutes: 15, label: "Prise du glaçage" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi la crème doit bouillir",
      text: "Les jaunes d’œufs contiennent une amylase, une enzyme qui découpe l’amidon. Si la crème n’a fait qu’épaissir, elle survit et liquéfie la fécule pendant le repos. Une minute d’ébullition franche la détruit et finit de gonfler l’amidon, ce qui efface aussi le goût de farine crue.",
    },
    {
      title: "Une coque qui tient debout",
      text: "La pâte à choux ne contient aucune levure : elle monte parce que son eau se vaporise. Tant que la croûte n’est pas rigide, c’est cette vapeur qui la soutient, d’où la porte fermée. Le séchage à 150 °C chasse ensuite l’humidité restée dans la paroi, qui sinon la ferait ramollir au contact de la crème.",
    },
    {
      title: "Un glaçage brillant à 35 °C",
      text: "Le glaçage est une émulsion : le beurre de cacao est dispersé dans l’eau de la crème. Trop chaud, il est fluide, coule sur les flancs et laisse une couche mince qui fige terne. Vers 35 °C, il nappe en couche épaisse et garde son brillant en refroidissant.",
    },
  ],
  tips: [
    "Pesez les œufs battus plutôt que de les compter : pour cette pâte, il en faut environ 200 g, à ajouter selon la texture.",
    "Garnissez les éclairs le jour où vous les servez, quelques heures avant au plus : la coque reste ferme sous la crème.",
    "Si le glaçage a trop épaissi pendant que vous garnissiez, passez-le quelques secondes au bain-marie, sans dépasser 35 °C.",
    "Gardez les 4 blancs d’œufs : ils se congèlent sans problème et feront des financiers ou une île flottante.",
  ],
  mistakes: [
    "Sortir les éclairs trop pâles : ils retombent en refroidissant et ramollissent sous la crème. En cas de doute, prolongez la cuisson de 5 minutes.",
    "Verser les œufs d’un coup : la pâte devient trop liquide, s’étale sur la plaque et donne des éclairs plats. Elle ne se rattrape pas vraiment.",
    "Retirer la crème du feu dès qu’elle épaissit : elle garde un goût de farine et redevient liquide au réfrigérateur. Remettez-la à bouillir 1 minute.",
    "Glacer avec un glaçage trop chaud : il coule sur les côtés et laisse une couche fine et terne.",
    "Garnir des coques encore tièdes : la crème les détrempe et le glaçage glisse.",
  ],
  variations: [
    {
      title: "Au fondant pâtissier",
      text: "Remplacez le glaçage par 250 g de fondant blanc tiédi au bain-marie avec 50 g de chocolat noir fondu et 1 à 2 cas d’eau. Ne dépassez pas 37 °C : plus chaud, il sèche mat et craquelé.",
    },
    {
      title: "Au café",
      text: "Remplacez le chocolat de la crème par 3 cac de café soluble dissous dans 1 cas d’eau chaude, et ajoutez 10 g de sucre. Glacez au fondant blanc parfumé avec 1 cac de café soluble.",
    },
    {
      title: "Plus chocolatés",
      text: "Montez le chocolat de la crème à 160 g et retirez 10 g de fécule : la crème est plus dense et plus amère, sans être plus difficile à pocher.",
    },
  ],
  storage:
    "Une fois garnis, les éclairs se gardent 24 heures au réfrigérateur, dans une boîte fermée, à cause de la crème pâtissière. Les coques vides se gardent 2 jours dans une boîte en métal, ou 1 mois au congélateur ; 5 minutes au four à 160 °C les raffermissent avant de les garnir. Ne congelez pas les éclairs garnis.",
  pairing: "Un expresso bien serré, ou un thé noir pas trop infusé.",
  faq: [
    {
      q: "Pourquoi mes éclairs retombent-ils à la sortie du four ?",
      a: "Parce qu’ils ne sont pas assez cuits. Leur paroi encore humide ne tient pas sans la vapeur qui la gonflait. Laissez-les 35 minutes sans ouvrir la porte, jusqu’à ce qu’ils soient bruns au fond des stries, puis séchez-les 10 minutes à 150 °C.",
    },
    {
      q: "Pourquoi utiliser une douille cannelée pour les éclairs ?",
      a: "Pour qu’ils gonflent régulièrement. Les stries guident la pâte : l’éclair s’ouvre le long des cannelures au lieu de craquer au hasard, et le dessus reste assez plat pour être glacé. Avec une douille unie, passez une fourchette mouillée sur la longueur avant d’enfourner.",
    },
    {
      q: "Combien de temps se conservent les éclairs au chocolat ?",
      a: "24 heures au réfrigérateur une fois garnis, à cause de la crème pâtissière. Au-delà, la coque ramollit et la crème ne se garde plus. Les coques vides tiennent 2 jours dans une boîte en métal, ou 1 mois au congélateur.",
    },
    {
      q: "Ma crème pâtissière au chocolat est trop liquide, que faire ?",
      a: "La remettre sur le feu. Si elle coule, c’est presque toujours qu’elle n’a pas assez bouilli. Reversez-la dans la casserole et faites-la bouillir 1 minute en fouettant sans arrêt : elle épaissit de nouveau, et cette fois elle tiendra au froid.",
    },
    {
      q: "Peut-on préparer les éclairs la veille ?",
      a: "Oui, en partie. La crème se fait la veille et se garde au réfrigérateur, filmée au contact. Les coques peuvent aussi cuire la veille, puis passer 5 minutes à 160 °C le lendemain. Garnissez et glacez le jour du service.",
    },
    {
      q: "Comment garnir un éclair sans le casser ?",
      a: "Par en dessous, avec une douille de 6 mm. Percez trois trous sous l’éclair, aux deux bouts et au centre, et poussez la crème jusqu’à ce qu’elle ressorte par le trou voisin. Quand il devient lourd dans la main, il est plein.",
    },
    {
      q: "Peut-on congeler des éclairs garnis ?",
      a: "Non. La crème pâtissière rend de l’eau en décongelant et la coque devient spongieuse. Congelez plutôt les coques vides, jusqu’à 1 mois, et garnissez-les après 5 minutes au four à 160 °C.",
    },
  ],
  nutrition: {
    calories: 345,
    protein: 7,
    fat: 23,
    saturatedFat: 14,
    carbs: 27,
    sugar: 15,
    fiber: 2,
    sodium: 70,
  },
  annotations: { hero: "brun jusqu’au fond des stries", detail: "le glaçage, à 35 °C" },
  images: {
    heroAlt:
      "Éclairs au chocolat maison sur un plat blanc, couverts d’un glaçage brillant et d’un trait de sucre glace.",
    detailAlt: "Un éclair au chocolat seul, nappé d’un glaçage lisse et brillant parsemé d’éclats de fèves de cacao.",
    credits: {
      hero: {
        photographer: "Frank Schrader",
        url: "https://www.pexels.com/photo/delicious-chocolate-eclairs-with-cocoa-icing-30461317/",
      },
      detail: {
        photographer: "Max Griss",
        url: "https://www.pexels.com/photo/chocolate-eclair-on-minimalist-background-36673065/",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#8A4B2A",
    onAccent: "#FFFFFF",
    ink: "#6B3820",
    tint: "#F6ECE5",
    deep: "#1A0F0A",
    focus: "52% 55%",
  },
});
