import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "omelette",
  title: "Omelette baveuse",
  seoTitle: "Omelette baveuse : la recette roulée en 5 minutes",
  tagline: "Deux minutes de poêle, et on roule.",
  description:
    "Omelette baveuse à la française : 3 œufs battus juste assez, 15 g de beurre mousseux, 2 minutes en remuant, puis roulée encore crémeuse. 5 minutes.",
  summary:
    "Pour 1 personne, battez 3 œufs avec une pincée de sel et versez-les dans 15 g de beurre mousseux, dans une poêle antiadhésive de 20 à 22 cm à feu moyen. Remuez à la fourchette en secouant la poêle 30 à 45 secondes, arrêtez quand le dessus est encore crémeux, puis pliez et roulez l’omelette sur l’assiette. Comptez 5 minutes en tout, dont 2 de cuisson. Pour plusieurs personnes, faites-les une par une.",
  intro: [
    "L’omelette à la française est roulée, lisse, d’un jaune pâle presque sans coloration. Quand on l’ouvre à la fourchette, le cœur coule encore un peu : c’est ce qu’on appelle baveuse. Il faut trois œufs, du beurre et deux minutes d’attention.",
    "Elle rate de deux façons. Trop chaude, elle brunit dessous et devient caoutchouteuse. Trop attendue, elle sèche pendant qu’on hésite à la plier.",
    "Retirez-la donc du feu avant qu’elle ait l’air prête. Le pliage et la chaleur de l’œuf terminent la cuisson en quelques secondes, et le centre arrive crémeux dans l’assiette.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "omelette",
    "omelette baveuse",
    "recette omelette",
    "omelette roulée",
    "omelette à la française",
    "comment faire une omelette",
    "omelette nature",
    "omelette 3 œufs",
  ],
  diet: ["vegetarian", "glutenFree"],
  servings: 1,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 3, cook: 2 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Toute l’année"],
  tags: [],
  equipment: ["poêle antiadhésive de 20 à 22 cm", "bol et fourchette", "spatule souple en silicone", "assiette chaude"],
  ingredients: [
    {
      items: [
        { qty: 3, name: "œuf", plural: "œufs", note: "frais", step: 1 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 15, unit: "g", name: "beurre", note: "doux", step: 5 },
        { qty: 1, unit: "tour", name: "poivre", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "L’omelette",
      steps: [
        {
          title: "Battre sans faire mousser",
          text: "Cassez les œufs dans un bol, ajoutez la pincée de sel et battez à la fourchette pendant 30 secondes, juste assez pour mêler blancs et jaunes. Le mélange doit être uniforme, sans filaments de blanc, mais sans mousse en surface.",
        },
        {
          title: "Faire mousser le beurre",
          text: "Posez la poêle sur feu moyen et mettez-y 15 g de beurre. Il fond, chante, puis mousse. Quand la mousse commence à retomber, et avant qu’il ne prenne une couleur noisette, versez les œufs d’un coup.",
        },
        {
          title: "Remuer en secouant",
          text: "Aussitôt, remuez en petits cercles avec la spatule, à plat sur le fond, pendant que l’autre main secoue la poêle d’avant en arrière. Continuez 30 à 45 secondes : de petits caillots crémeux se forment partout, comme des œufs brouillés très tendres.",
          tip: "Le mouvement est plus important que la vitesse. Tant que les œufs bougent, aucun endroit ne cuit plus que les autres et le dessous ne colore pas.",
        },
        {
          title: "Lisser et arrêter",
          text: "Arrêtez de remuer, lissez la surface d’un geste pour boucher les trous et laissez prendre 10 à 20 secondes sans toucher. Le dessous se tient et glisse quand on secoue la poêle, le dessus brille encore et tremble : c’est le moment, même s’il vous semble trop tôt.",
          tip: "Une omelette continue de cuire pendant qu’on la plie. Si le dessus a l’air pris dans la poêle, elle sera sèche dans l’assiette.",
        },
        {
          title: "Plier et rouler",
          text: "Inclinez la poêle loin de vous et rabattez le tiers le plus proche vers le centre avec la spatule. Faites glisser l’omelette jusqu’au bord opposé, puis renversez la poêle au-dessus de l’assiette : elle se roule sur elle-même, la jointure dessous.",
          tip: "Tenez le manche par en dessous, paume vers le haut. Le poignet tourne alors naturellement au moment de renverser.",
        },
        {
          title: "Servir tout de suite",
          text: "Si elle s’est un peu ouverte, resserrez-la avec un torchon propre posé dessus. Un tour de poivre et mangez sans attendre : le centre continue de prendre dans l’assiette.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Entre 62 et 70 °C",
      text: "Les protéines du blanc commencent à coaguler vers 62 °C, celles du jaune vers 65 °C, et l’œuf battu est entièrement pris vers 70 °C. Au-delà, le réseau de protéines se resserre et chasse l’eau : l’omelette devient sèche et caoutchouteuse. Une omelette baveuse s’arrête juste avant ce point.",
    },
    {
      title: "Pourquoi on remue",
      text: "En remuant, on casse les premières plaques d’œuf pris dès leur formation. On obtient une multitude de petits caillots enrobés d’œuf encore liquide, ce qui donne cette texture fine et crémeuse au lieu d’une galette ferme cuite par le fond.",
    },
    {
      title: "Le sel dès le battage",
      text: "Dissous dans les œufs avant la cuisson, le sel modifie les charges électriques des protéines, qui se lient alors moins serré en coagulant. L’omelette rend moins d’eau et reste plus tendre que si on la sale à la fin.",
    },
  ],
  tips: [
    "Gardez une poêle pour les œufs et rien d’autre. Un revêtement intact fait plus pour le roulage que n’importe quel geste.",
    "La taille compte : 20 à 22 cm pour 3 œufs. Plus large, l’omelette est trop fine et cuit trop vite ; plus petite, elle est épaisse et le centre reste liquide.",
    "Sortez l’assiette et la garniture avant d’allumer le feu. Tout se joue en 2 minutes et il n’y a pas de temps pour chercher.",
    "Une garniture se cuit toujours avant, à part, et s’ajoute chaude juste avant de plier. Crue, elle rend son eau dans l’omelette.",
  ],
  mistakes: [
    "Feu trop vif : le dessous brunit et durcit alors que le dessus est encore cru. Si le beurre noircit avant d’y verser les œufs, essuyez la poêle et recommencez avec du beurre neuf.",
    "Battre au fouet jusqu’à faire mousser : l’air gonfle l’omelette, qui retombe et sèche. Une fourchette et 30 secondes suffisent.",
    "Attendre que le dessus soit pris pour plier : l’omelette se fend au roulage et arrive sèche. Arrêtez quand il brille encore.",
    "Cuire 6 œufs dans une poêle de 22 cm : trop épaisse, elle cuit dessous et reste crue au milieu. Faites deux omelettes de 3 œufs.",
  ],
  variations: [
    {
      title: "Aux fines herbes",
      text: "Ajoutez aux œufs battus 1 cas de ciboulette, de persil et de cerfeuil ciselés, avec quelques feuilles d’estragon si vous en avez. La cuisson ne change pas.",
    },
    {
      title: "Au fromage",
      text: "Parsemez 30 g de comté râpé sur la moitié de l’omelette juste avant de la plier. Il fond pendant le roulage, inutile de prolonger la cuisson.",
    },
    {
      title: "Aux champignons",
      text: "Faites sauter 100 g de champignons de Paris émincés dans 10 g de beurre, 5 minutes à feu vif, jusqu’à ce que leur eau soit évaporée et qu’ils dorent. Salez, puis déposez-les chauds au centre de l’omelette avant de plier.",
    },
    {
      title: "Aux tomates cerises",
      text: "Poêlez 6 tomates cerises coupées en deux 2 minutes dans 5 g de beurre, côté coupé en dessous. Glissez-les dans l’omelette au moment de la plier.",
    },
  ],
  storage:
    "Elle se mange dès qu’elle est roulée : une omelette baveuse ne se garde pas et ne se réchauffe pas. Une omelette cuite à cœur se conserve 24 h au frigo, dans une boîte fermée, et se mange froide.",
  pairing: "Une salade verte à la vinaigrette moutardée et une tranche de pain de campagne grillé.",
  faq: [
    {
      q: "Combien d’œufs faut-il pour une omelette ?",
      a: "Trois par personne, dans une poêle de 20 à 22 cm. Pour une petite faim, deux œufs dans une poêle de 18 cm donnent une omelette de la même épaisseur.",
    },
    {
      q: "Combien de temps faut-il cuire une omelette ?",
      a: "Environ 2 minutes à feu moyen, une fois le beurre mousseux : 30 à 45 secondes en remuant, puis 10 à 20 secondes sans toucher. Elle est prête quand le dessous se tient et que le dessus brille encore.",
    },
    {
      q: "Une omelette baveuse est-elle sans risque ?",
      a: "Oui pour un adulte en bonne santé, avec des œufs frais, bien conservés et dans leur date. Pour une femme enceinte, un jeune enfant, une personne âgée ou immunodéprimée, cuisez-la à cœur : après avoir remué, laissez-la 1 à 2 minutes à feu doux, couvercle posé, jusqu’à ce qu’il ne reste aucune partie coulante.",
    },
    {
      q: "Faut-il mettre du lait dans une omelette ?",
      a: "Non. Le lait dilue les œufs : l’omelette a moins de goût et rend du liquide dans l’assiette. Si vous l’aimez très tendre, une cuillère à soupe de crème convient mieux.",
    },
    {
      q: "Pourquoi mon omelette colle-t-elle à la poêle ?",
      a: "Le plus souvent, le revêtement est usé ou le beurre n’était pas assez chaud quand les œufs sont arrivés. Attendez que la mousse commence à retomber, et réservez une poêle en bon état aux œufs.",
    },
    {
      q: "Peut-on faire une omelette pour quatre dans une grande poêle ?",
      a: "Oui, avec 8 œufs dans une poêle de 28 cm et 30 g de beurre, en remuant de la même façon 3 à 4 minutes. Elle sera plus épaisse et moins facile à rouler : pliez-la simplement en deux. Pour des omelettes roulées, faites-les une par une, 2 minutes chacune.",
    },
  ],
  nutrition: {
    calories: 325,
    protein: 19,
    fat: 27,
    saturatedFat: 12,
    carbs: 1,
    sugar: 0.5,
    fiber: 0,
    sodium: 380,
  },
  annotations: {
    hero: "à peine dorée, jamais brune",
    detail: "le cœur reste crémeux",
  },
  images: {
    heroAlt:
      "Omelette pliée sur une assiette blanche, jaune pâle et souple, avec quelques tomates cerises poêlées glissées dedans",
    detailAlt:
      "Omelette roulée coupée en deux sur une assiette à motifs bleus, qui laisse voir sa garniture sombre aux truffes",
    credits: {
      hero: {
        photographer: "Paul Goyette",
        url: "https://commons.wikimedia.org/wiki/File:Omelette_with_butter_and_tomatoes.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 2.0",
      },
      detail: {
        photographer: "sgillies",
        url: "https://commons.wikimedia.org/wiki/File:Omelette_fourr%C3%A9e_de_truffes.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 2.0",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#E2B33C",
    onAccent: "#1B1712",
    ink: "#76570C",
    tint: "#FBF5E2",
    deep: "#17130A",
    focus: "45% 50%",
  },
});
