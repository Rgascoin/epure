import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "moules-marinieres",
  title: "Moules marinières",
  seoTitle: "Moules marinières au vin blanc, prêtes en 40 minutes",
  tagline: "Le plus long, c’est de les gratter.",
  description:
    "Moules marinières pour 4 : 2 kg de moules de bouchot, échalotes, vin blanc et persil, 6 minutes de cuisson à couvert. Le tri et le nettoyage expliqués.",
  summary:
    "Pour 4 personnes, triez et nettoyez 2 kg de moules de bouchot, faites suer 3 échalotes dans 30 g de beurre, ajoutez 20 cl de vin blanc, puis cuisez les moules 5 à 6 minutes à couvert sur feu vif, jusqu’à ce qu’elles s’ouvrent. Jetez celles qui restent fermées, ajoutez le persil au jus et servez aussitôt. Comptez 40 minutes en tout, dont 25 de nettoyage.",
  intro: [
    "Des moules, du vin blanc, des échalotes, du persil : les moules marinières cuisent en six minutes et se mangent avec les doigts, une coquille vide servant de pince pour attraper les suivantes.",
    "Tout se joue avant la cuisson. Il faut trier les moules une à une, jeter les coquilles cassées et celles qui restent ouvertes, puis les gratter et les ébarber. Un quart d’heure de travail un peu fastidieux, à faire juste avant de passer à table.",
    "Après la cuisson, même rigueur : celles qui ne se sont pas ouvertes vont à la poubelle. Pour le reste, des frites, du pain, et une cuillère pour le jus.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "moules marinières",
    "recette moules marinières",
    "moules marinières au vin blanc",
    "moules de bouchot",
    "comment nettoyer les moules",
    "temps de cuisson des moules",
    "moules frites",
    "combien de moules par personne",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 25, cook: 15 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Été", "Automne", "Hiver"],
  tags: ["automne"],
  equipment: ["grand faitout de 8 l avec couvercle", "grande passoire", "écumoire", "petit couteau"],
  ingredients: [
    {
      items: [
        { qty: 2, unit: "kg", name: "moules de bouchot", step: 0.25 },
        { qty: 3, name: "échalote", plural: "échalotes", note: "finement ciselées", step: 1 },
        { qty: 30, unit: "g", name: "beurre", step: 5 },
        { qty: 20, unit: "cl", name: "vin blanc sec", note: "muscadet ou gros-plant", step: 5 },
        { qty: 2, unit: "brin", name: "thym", step: 1 },
        { qty: 1, unit: "feuille", name: "laurier", step: 1 },
        { name: "poivre du moulin" },
        { qty: 4, unit: "cas", name: "persil plat", note: "ciselé", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "Nettoyer les moules",
      steps: [
        {
          title: "Trier les moules",
          text: "Rincez les moules dans une passoire sous l’eau froide et triez-les une à une. Jetez celles dont la coquille est cassée, et celles qui restent ouvertes quand on les tapote sur le bord de l’évier : une moule vivante se referme en quelques secondes.",
          tip: "Une moule ouverte qui ne réagit pas est morte, et une moule morte avant cuisson ne se mange pas. Dans le doute, on jette.",
        },
        {
          title: "Gratter et ébarber",
          text: "Grattez les coquilles avec le dos du couteau pour enlever les petits coquillages accrochés. Tirez ensuite le byssus, la touffe de filaments qui dépasse, d’un coup sec vers la pointe. Rincez à grande eau, sans laisser tremper.",
          tip: "Ébarbez au dernier moment : une moule dont on a arraché le byssus s’abîme vite.",
        },
      ],
    },
    {
      title: "Cuire",
      steps: [
        {
          title: "Faire suer les échalotes",
          text: "Dans le faitout, faites fondre le beurre sur feu moyen et ajoutez les échalotes. Laissez-les 3 minutes en remuant : elles deviennent translucides sans colorer.",
          timer: { minutes: 3, label: "Échalotes" },
        },
        {
          title: "Ajouter vin et aromates",
          text: "Versez le vin blanc, ajoutez le thym, le laurier et un bon tour de poivre, puis laissez bouillir 2 minutes.",
          timer: { minutes: 2, label: "Vin blanc" },
        },
        {
          title: "Cuire à couvert",
          text: "Montez le feu au maximum, versez les moules et couvrez. Laissez cuire 5 à 6 minutes en secouant le faitout deux ou trois fois, couvercle maintenu, pour faire remonter celles du fond. Elles sont cuites quand presque toutes les coquilles sont grandes ouvertes.",
          timer: { minutes: 6, label: "Moules à couvert" },
          tip: "N’attendez pas les retardataires : une moule trop cuite rétrécit dans sa coquille et devient caoutchouteuse.",
        },
        {
          title: "Écarter les fermées",
          text: "Répartissez les moules à l’écumoire dans des assiettes creuses chaudes. Jetez celles qui sont restées fermées, sans chercher à les ouvrir.",
        },
        {
          title: "Finir le jus",
          text: "Jetez le persil dans le jus de cuisson, laissez reprendre l’ébullition et versez sur les moules en laissant le dernier centimètre au fond du faitout : c’est là que se dépose le sable. Servez tout de suite.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi elles s’ouvrent",
      text: "Une moule vivante tient sa coquille fermée grâce à un muscle, l’adducteur. La chaleur dénature ses protéines, il lâche, et le ligament de la charnière écarte les deux valves. Une moule qui reste fermée était peut-être morte avant la cuisson ; on ne prend pas le risque.",
    },
    {
      title: "Un jus déjà salé",
      text: "En s’ouvrant, chaque moule libère l’eau de mer qu’elle contenait. Le jus de cuisson est donc naturellement salé, d’où l’absence de sel dans la recette.",
    },
    {
      title: "Feu vif et couvercle",
      text: "Sous le couvercle, la vapeur du vin chauffe toutes les moules en même temps, y compris celles du dessus qui ne touchent pas le liquide. À feu doux, celles du fond surcuisent pendant que celles du haut attendent.",
    },
  ],
  tips: [
    "Achetez les moules le jour même et gardez-les au frigo dans un saladier, couvertes d’un torchon humide, jamais dans un sac fermé ni dans l’eau. Cuisez-les au plus tard le lendemain.",
    "Prenez un faitout assez grand : les moules ne doivent pas dépasser la moitié de sa hauteur. Au-delà de 2 kg, faites deux fournées.",
    "Une gousse d’ail hachée avec les échalotes n’est pas très orthodoxe, mais personne ne s’en est jamais plaint.",
    "Filtrez le jus qui reste à travers un linge fin : il fait une base de soupe ou de sauce pour un poisson, à utiliser dans les 24 heures.",
  ],
  mistakes: [
    "Laisser tremper les moules dans l’eau du robinet pour les dessabler. Elles meurent dans l’eau douce ; un rinçage rapide sous l’eau courante suffit.",
    "Les ébarber la veille. Elles s’abîment en quelques heures : le byssus s’enlève juste avant la cuisson.",
    "Prolonger la cuisson pour attendre les dernières. Les autres rétrécissent et durcissent ; au bout de 6 minutes on sert, et les fermées vont à la poubelle.",
    "Saler le jus. L’eau de mer des moules suffit largement : goûtez à la fin, vous n’ajouterez sans doute rien.",
  ],
  variations: [
    {
      title: "À la normande",
      text: "Remplacez le vin par 25 cl de cidre brut. Une fois les moules servies, ajoutez 15 cl de crème fraîche au jus et faites bouillir 2 minutes avant le persil.",
    },
    {
      title: "Au curry",
      text: "Ajoutez 1 cuillère à café de curry en poudre aux échalotes, puis 10 cl de crème au jus en fin de cuisson.",
    },
  ],
  storage:
    "Les moules se mangent tout de suite. Les restes, décortiqués et couverts de leur jus, se gardent 24 heures au frigo, à manger froids en salade ou à peine réchauffés dans une sauce.",
  pairing:
    "Des frites, bien sûr, ou du pain de campagne pour le jus. Dans le verre, le même vin blanc que dans le faitout, un muscadet par exemple.",
  faq: [
    {
      q: "Combien de moules prévoir par personne ?",
      a: "500 g en plat principal, soit 2 kg pour 4 personnes. En entrée, 250 à 300 g par personne suffisent.",
    },
    {
      q: "Quelle est la saison des moules de bouchot ?",
      a: "De juillet à février en France. Le reste de l’année, on trouve surtout des moules d’importation.",
    },
    {
      q: "Comment savoir si une moule est encore bonne ?",
      a: "Avant cuisson, elle doit être fermée ou se refermer quand on la tapote. Jetez les moules ouvertes qui ne réagissent pas et les coquilles cassées. Après cuisson, jetez celles qui sont restées fermées.",
    },
    {
      q: "Faut-il saler les moules marinières ?",
      a: "Non. Les moules libèrent leur eau de mer en s’ouvrant et le jus est déjà salé. Goûtez à la fin, avant de servir.",
    },
    {
      q: "Combien de temps faut-il cuire les moules marinières ?",
      a: "5 à 6 minutes à couvert sur feu vif, en secouant le faitout deux ou trois fois. Elles sont prêtes dès que les coquilles sont grandes ouvertes.",
    },
    {
      q: "Peut-on nettoyer les moules à l’avance ?",
      a: "Oui pour le tri et le grattage, quelques heures avant, au frigo sous un torchon humide. L’ébarbage se fait juste avant la cuisson, et la cuisson au dernier moment.",
    },
  ],
  nutrition: { calories: 275, protein: 26, fat: 13, saturatedFat: 6, carbs: 12, sugar: 2, fiber: 1, sodium: 650 },
  annotations: { hero: "six minutes, couvercle fermé", detail: "avec des frites, évidemment" },
  images: {
    heroAlt: "Moules marinières en gros plan dans une cocotte noire, coquilles ouvertes sur la chair orangée",
    detailAlt: "Moules marinières servies dans un plat creux avec une portion de frites, sur une nappe rouge",
    credits: {
      hero: {
        photographer: "Benoît Prieur",
        url: "https://commons.wikimedia.org/wiki/File:Moules_marini%C3%A8res_%C3%A0_La_Rose_Blanche_(Bruxelles).jpg",
        source: "Wikimedia Commons",
        license: "CC0",
      },
      detail: {
        photographer: "Archangel12",
        url: "https://commons.wikimedia.org/wiki/File:Normandy_%2710-_Grandcamp_Maisy_La_Belle_Mariniere_(4824784230).jpg",
        source: "Wikimedia Commons",
        license: "CC BY 2.0",
      },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#D9822B",
    onAccent: "#1B1712",
    ink: "#8A4A10",
    tint: "#FBF1E6",
    deep: "#0E1218",
    focus: "50% 50%",
  },
});
