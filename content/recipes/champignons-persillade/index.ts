import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "champignons-persillade",
  title: "Champignons en persillade",
  seoTitle: "Champignons en persillade, bien dorés à la poêle",
  tagline: "Deux fournées, et rien ne baigne.",
  description:
    "600 g de champignons de Paris saisis en deux fournées dans une poêle très chaude, salés en fin de cuisson, puis ail et persil la dernière minute. 30 minutes.",
  summary:
    "Pour 4 personnes, nettoyez 600 g de champignons de Paris sans les faire tremper, puis faites-les dorer en deux fournées de 7 minutes dans une grande poêle très chaude avec 30 g de graisse de canard. Salez en fin de coloration, remettez tout dans la poêle avec 15 g de beurre, 2 gousses d’ail et 15 g de persil hachés, et remuez 1 minute. Comptez 30 minutes en tout.",
  intro: [
    "Des champignons en persillade, ce sont des champignons poêlés qui finissent avec de l’ail et du persil hachés ensemble. Rien de compliqué, et pourtant ils sortent souvent gris, mous, dans une flaque d’eau.",
    "C’est presque toujours la poêle qui est trop pleine. Les champignons sont gorgés d’eau : serrés, ils la rendent et cuisent dedans. En deux fournées, dans une grande poêle bien chaude, cette eau s’évapore à mesure et ils dorent.",
    "Le sel attend la fin de la coloration, et l’ail n’arrive que dans la dernière minute, pour qu’il parfume sans brûler.",
  ],
  category: "Accompagnement",
  cuisine: "Française",
  keywords: [
    "champignons en persillade",
    "champignons persillade",
    "champignons de paris poêlés",
    "champignons ail et persil",
    "recette champignons poêlés",
    "cèpes en persillade",
    "comment faire dorer des champignons",
  ],
  diet: ["glutenFree"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 15, cook: 15 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne"],
  tags: ["automne"],
  equipment: ["grande poêle de 28 cm", "planche et couteau de chef", "linge propre ou papier absorbant"],
  ingredients: [
    {
      items: [
        { qty: 600, unit: "g", name: "champignons de Paris", note: "petits, blancs ou rosés", step: 50 },
        { qty: 30, unit: "g", name: "graisse de canard", note: "ou beurre clarifié", step: 5 },
        { qty: 2, name: "gousse d’ail", plural: "gousses d’ail", step: 1 },
        { qty: 15, unit: "g", name: "persil plat", note: "un demi-bouquet", step: 5 },
        { qty: 15, unit: "g", name: "beurre", step: 5 },
        { name: "sel fin" },
        { name: "poivre du moulin" },
      ],
    },
  ],
  method: [
    {
      title: "Champignons en persillade",
      steps: [
        {
          title: "Nettoyer sans tremper",
          text: "Coupez le bout terreux des pieds. Frottez les chapeaux avec un papier humide ; s’ils sont très sales, passez-les rapidement sous l’eau dans une passoire et séchez-les aussitôt dans un linge. Coupez les plus gros en deux ou en quatre pour avoir des morceaux de taille égale, autour de 3 cm.",
          tip: "Jamais de bain d’eau : un champignon mouillé commence par bouillir avant de dorer.",
        },
        {
          title: "Hacher la persillade",
          text: "Effeuillez le persil et séchez-le bien. Pelez l’ail, retirez le germe s’il y en a un, puis hachez finement l’ail et le persil ensemble sur la planche. Gardez ce hachis à portée de main : à la fin, tout va très vite.",
        },
        {
          title: "Saisir la première fournée",
          text: "Chauffez la poêle à feu vif avec la moitié de la graisse de canard, jusqu’à ce qu’elle soit très chaude. Ajoutez la moitié des champignons en une seule couche et laissez-les 3 minutes sans y toucher. Faites-les sauter encore 4 minutes, jusqu’à ce qu’ils soient dorés de partout. Salez seulement à ce moment-là et réservez-les dans un plat.",
          timer: { minutes: 7, label: "Première fournée" },
          tip: "S’ils rendent un peu d’eau au début, gardez le feu vif : elle s’évapore et la coloration repart.",
        },
        {
          title: "Saisir la seconde fournée",
          text: "Sans laver la poêle, remettez-la à feu vif avec le reste de la graisse et faites cuire le reste des champignons de la même façon : 3 minutes sans remuer, puis 4 minutes en faisant sauter, jusqu’à ce qu’ils soient bien dorés. Salez en fin de cuisson.",
          timer: { minutes: 7, label: "Seconde fournée" },
        },
        {
          title: "Finir à la persillade",
          text: "Remettez la première fournée dans la poêle, baissez à feu moyen et ajoutez le beurre. Quand il mousse, jetez la persillade et faites sauter 1 minute, juste le temps que l’ail sente bon sans prendre de couleur. Poivrez, goûtez, et servez aussitôt.",
          timer: { minutes: 1, label: "Persillade" },
          tip: "L’ail qui roussit devient amer en quelques secondes : retirez la poêle du feu dès qu’il blondit.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi la poêle trop pleine fait bouillir",
      text: "Un champignon de Paris contient environ 90 % d’eau. Trop nombreux dans la poêle, ils font chuter la température et libèrent plus d’eau qu’elle n’en évapore : ils cuisent autour de 100 °C, dans leur jus. La réaction de Maillard, qui donne la couleur et le goût grillé, demande une surface sèche et beaucoup plus chaude, ce qu’on obtient en cuisant moins de champignons à la fois.",
    },
    {
      title: "Le sel à la fin de la coloration",
      text: "Le sel attire l’eau hors des cellules par osmose. Salés dès le début, les champignons rendent leur jus avant d’avoir doré et finissent par mijoter dedans. Salés une fois colorés, ils gardent leur surface sèche et leur mâche.",
    },
    {
      title: "L’ail en dernier",
      text: "Haché fin, l’ail a beaucoup de surface et peu d’eau : dans une matière grasse très chaude, il brunit en moins d’une minute et devient âcre. Ajouté sur feu moyen, avec du beurre, il a juste le temps de libérer son parfum. Le persil, lui, perd sa couleur et son goût frais s’il cuit plus longtemps.",
    },
  ],
  tips: [
    "Testez la poêle avec une goutte d’eau : elle doit grésiller et disparaître aussitôt. Sinon, attendez encore.",
    "Prenez des champignons fermes, bien blancs ou rosés, aux lamelles encore cachées sous le chapeau : ils rendent moins d’eau que ceux qui sont ouverts.",
    "Séchez le persil après l’avoir lavé, sinon il crache dans le beurre et détrempe les champignons.",
    "La graisse de canard va bien avec un magret ou une viande rôtie ; avec un poisson ou des œufs, préférez le beurre clarifié.",
  ],
  mistakes: [
    "Tout mettre d’un coup dans la poêle : les champignons rendent leur eau et deviennent gris. Si c’est fait, gardez le feu au maximum jusqu’à ce que le jus s’évapore, ils finiront par dorer, un peu moins tendres.",
    "Saler au début : même effet, ils baignent. Attendez qu’ils soient dorés.",
    "Mettre l’ail avec les champignons : au bout de 7 minutes à feu vif, il est noir et amer. Refaites un peu de persillade et ajoutez-la à la fin.",
    "Remuer sans arrêt : les champignons n’ont jamais le temps de colorer. Les 3 premières minutes, on n’y touche pas.",
  ],
  variations: [
    {
      title: "Aux cèpes",
      text: "Remplacez les champignons de Paris par 600 g de cèpes. Brossez-les, grattez le pied au couteau et retirez la mousse sous le chapeau si elle est verte et molle. Coupez-les en tranches de 1 cm et faites-les dorer en deux fournées de 5 à 6 minutes.",
    },
    {
      title: "Avec une échalote",
      text: "Ajoutez 1 échalote finement ciselée avec le beurre et laissez-la fondre 2 minutes à feu moyen avant d’ajouter la persillade.",
    },
    {
      title: "À l’huile d’olive",
      text: "Pour une version végétale, remplacez la graisse de canard par 2 cas d’huile d’olive et le beurre par 1 cas de plus. Le goût est plus léger.",
    },
  ],
  storage:
    "Ils se gardent 2 jours au réfrigérateur en boîte fermée, rangés dans les 2 heures après la cuisson. Réchauffez-les quelques minutes à la poêle à feu vif, sans couvercle. On ne les congèle pas : au dégel, ils rendent leur eau et deviennent spongieux.",
  pairing:
    "Avec un magret, une côte de bœuf ou un poulet rôti, sur une omelette baveuse, ou simplement sur une tranche de pain de campagne grillée.",
  faq: [
    {
      q: "Faut-il laver les champignons de Paris ?",
      a: "Oui s’ils sont sales, mais sans les faire tremper. Passez-les vite sous l’eau dans une passoire et séchez-les tout de suite dans un linge. S’ils sont presque propres, un papier humide suffit. Le problème n’est pas l’eau qu’ils absorbent, c’est celle qui reste en surface et les empêche de dorer.",
    },
    {
      q: "Pourquoi mes champignons rendent-ils de l’eau à la cuisson ?",
      a: "Parce que la poêle est trop pleine, pas assez chaude, ou qu’ils ont été salés trop tôt. Cuisez-les en deux fournées, à feu vif, en une seule couche, et ne salez qu’une fois qu’ils sont dorés.",
    },
    {
      q: "Quand faut-il saler les champignons ?",
      a: "À la fin de la coloration. Le sel fait sortir l’eau des champignons : mis au début, il les fait cuire dans leur jus au lieu de dorer.",
    },
    {
      q: "Peut-on faire la recette avec des champignons cueillis ?",
      a: "Oui, à condition qu’ils aient été identifiés avec certitude, par un pharmacien ou une association de mycologie. Ne mangez jamais un champignon cueilli sur un simple doute, ni à l’aide d’une application. Les champignons sauvages se mangent toujours cuits, jamais crus. En cas de malaise après un repas de champignons, appelez le 15 ou un centre antipoison.",
    },
    {
      q: "Combien de champignons prévoir par personne ?",
      a: "150 g crus par personne en accompagnement. Ils réduisent beaucoup en perdant leur eau : 600 g remplissent la poêle crus, et tiennent dans un petit plat une fois dorés.",
    },
    {
      q: "Peut-on préparer la persillade à l’avance ?",
      a: "Oui, quelques heures au réfrigérateur, dans un bol couvert. Au-delà, le persil noircit et l’ail prend un goût fort. Hachez-les ensemble juste avant si vous pouvez.",
    },
  ],
  nutrition: { calories: 130, protein: 5, fat: 11, saturatedFat: 5, carbs: 3, sugar: 2, fiber: 2, sodium: 300 },
  annotations: { hero: "petits, entiers, dorés de partout", detail: "3 minutes sans y toucher" },
  images: {
    heroAlt:
      "Petits champignons de Paris dorés en persillade dans une assiette blanche, avec du persil haché et une cuillère dorée",
    detailAlt: "Champignons de Paris émincés en train de dorer dans une grande poêle noire, encore en cours de cuisson",
    credits: {
      hero: {
        photographer: "Kaboompics.com",
        url: "https://www.pexels.com/photo/close-up-of-mushrooms-on-a-white-plate-5718129/",
      },
      detail: { photographer: "Mateusz Feliksik", url: "https://www.pexels.com/photo/cooking-of-mushrooms-on-a-pan-13422401/" },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#9E6128",
    onAccent: "#FFFFFF",
    ink: "#744716",
    tint: "#F6EEE4",
    deep: "#1A120B",
    focus: "45% 38%",
  },
});
