import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "endives-braisees",
  title: "Endives braisées",
  seoTitle: "Endives braisées au beurre, fondantes et caramélisées",
  tagline: "On les sort quand elles sont ambrées.",
  description:
    "Endives braisées au beurre : 8 chicons cuits 35 minutes à couvert avec sucre et citron, puis dorés 15 minutes à découvert. Fondants, peu amers.",
  summary:
    "Pour 4 personnes, retirez le cône amer à la base de 8 endives, roulez-les dans 40 g de beurre, ajoutez 1 cac de sucre, le jus d’un demi-citron et 10 cl d’eau, puis braisez-les 30 à 35 minutes à couvert, à feu doux. Retirez le couvercle et laissez-les dorer 10 à 15 minutes en les retournant, jusqu’à une couleur ambrée. Comptez 1 h 05 en tout, dont 10 minutes de travail.",
  intro: [
    "Les endives braisées, des chicons dans le Nord et en Belgique, cuisent doucement dans du beurre jusqu’à devenir fondantes, puis dorent à découvert. L’amertume ne disparaît pas, elle s’arrondit, avec un goût de caramel au beurre sur les bords.",
    "Elles ratent quand on va trop vite. À feu vif, le beurre brûle avant que le cœur soit cuit, et on obtient des endives noires dehors, âpres et croquantes dedans. Avec trop d’eau, elles ne dorent jamais.",
    "On les cuit donc en deux temps : à couvert d’abord, sur feu doux, puis sans couvercle pour évaporer le jus. Et on retire le petit cône dur à la base, là où se loge le plus d’amertume.",
  ],
  category: "Accompagnement",
  cuisine: "Française",
  keywords: [
    "endives braisées",
    "recette endives braisées",
    "endives braisées au beurre",
    "endives caramélisées",
    "chicons braisés",
    "endives à la poêle",
    "endives braisées au citron",
    "enlever l’amertume des endives",
  ],
  diet: ["vegetarian", "glutenFree"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 10, cook: 55 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: [
    "sauteuse de 28 cm avec couvercle",
    "petit couteau d’office",
    "feuille de papier cuisson",
    "pince ou spatule",
  ],
  ingredients: [
    {
      items: [
        { qty: 8, name: "endive", plural: "endives", note: "environ 1 kg, de taille égale", step: 1 },
        { qty: 40, unit: "g", name: "beurre", note: "doux", step: 5 },
        { qty: 1, unit: "cac", name: "sucre en poudre", step: 0.5 },
        { qty: 0.5, unit: "cac", name: "sel fin", step: 0.25 },
        { qty: 0.5, name: "citron", plural: "citrons", note: "le jus, environ 2 cas", step: 0.5 },
        { qty: 10, unit: "cl", name: "eau", step: 1 },
        { name: "poivre noir", note: "du moulin" },
      ],
    },
  ],
  method: [
    {
      title: "À couvert puis à découvert",
      steps: [
        {
          title: "Parer les endives",
          text: "Essuyez les endives avec un torchon humide et retirez les feuilles abîmées, sans les passer sous l’eau. Coupez une fine tranche à la base, puis enfoncez la pointe du couteau sur 2 cm en tournant pour retirer le petit cône dur du trognon. Les feuilles doivent rester attachées.",
          tip: "Ne creusez pas plus de 2 cm : au-delà, l’endive s’ouvre en cuisant.",
        },
        {
          title: "Rouler dans le beurre",
          text: "Faites fondre le beurre dans la sauteuse à feu moyen jusqu’à ce qu’il mousse. Couchez les endives en une seule couche et roulez-les 2 minutes dans le beurre, sans les laisser colorer.",
          timer: { minutes: 2, label: "Endives au beurre" },
        },
        {
          title: "Assaisonner et mouiller",
          text: "Saupoudrez le sucre et le sel, arrosez avec le jus de citron, puis versez les 10 cl d’eau. Le liquide doit couvrir à peine le fond de la sauteuse.",
        },
        {
          title: "Braiser à couvert",
          text: "Posez sur les endives un disque de papier cuisson, puis le couvercle, et laissez cuire 30 à 35 minutes à feu doux, en les retournant à mi-cuisson. Elles sont prêtes quand la pointe d’un couteau entre dans la base sans résistance et qu’elles sont devenues translucides.",
          timer: { minutes: 35, label: "Braisage à couvert" },
        },
        {
          title: "Caraméliser",
          text: "Retirez le papier et le couvercle, passez à feu moyen et laissez le jus s’évaporer. Retournez les endives toutes les 3 ou 4 minutes pendant 10 à 15 minutes, jusqu’à ce qu’elles soient dorées de tous les côtés, d’un brun ambré, et que le beurre sente la noisette.",
          timer: { minutes: 15, label: "Caramélisation" },
          tip: "Si le beurre fonce avant que les endives aient pris couleur, baissez le feu et ajoutez 1 cas d’eau.",
        },
        {
          title: "Servir",
          text: "Donnez un tour de moulin à poivre, goûtez et rectifiez le sel. Servez aussitôt, arrosées du beurre blond resté dans la sauteuse.",
        },
      ],
    },
  ],
  science: [
    {
      title: "D’où vient l’amertume",
      text: "L’amertume de l’endive vient surtout de lactones comme la lactucine, plus concentrées vers la base et dans le cône dur du trognon. Le retirer enlève une bonne part de l’amertume sans toucher aux feuilles.",
    },
    {
      title: "Le sucre et le citron",
      text: "Le sucre adoucit la perception de l’amertume et aide les endives à dorer à la fin. Le citron, lui, freine le brunissement des parties coupées, qui noircissent au contact de l’air, et son acidité équilibre le beurre.",
    },
    {
      title: "Deux temps, deux températures",
      text: "Tant qu’il reste de l’eau dans la sauteuse, la température plafonne autour de 100 °C : les endives cuisent à cœur sans colorer. Une fois le jus évaporé, le beurre et les sucres chauffent bien au-delà, ce qui permet la caramélisation et la réaction de Maillard.",
    },
  ],
  tips: [
    "Choisissez des endives fermes et serrées, aux pointes jaune pâle : des pointes vertes signalent des endives plus amères.",
    "Prenez-les de la même taille, elles seront prêtes en même temps.",
    "Le disque de papier cuisson posé directement sur les endives garde la vapeur autour d’elles et les empêche de sécher sur le dessus.",
    "Pour aller plus vite, coupez-les en deux dans la longueur : 20 minutes à couvert suffisent, puis faites dorer 5 à 6 minutes face coupée contre la sauteuse.",
    "Si vous recevez, faites la cuisson à couvert à l’avance et gardez seulement la caramélisation pour le dernier moment.",
  ],
  mistakes: [
    "Laisser tremper les endives dans l’eau : elles s’en gorgent, rendent du jus à la cuisson et dorent mal. Un torchon humide suffit.",
    "Commencer à feu vif : le beurre brûle avant que le cœur soit cuit, et les endives restent dures et âpres sous une peau noire.",
    "Mettre trop d’eau : le jus ne s’évapore pas et les endives bouillent au lieu de dorer. Retirez le couvercle plus tôt et laissez réduire.",
    "Oublier de les retourner pendant la caramélisation : un côté brûle pendant que l’autre reste pâle.",
  ],
  variations: [
    {
      title: "En gratin, au jambon et à la béchamel",
      text: "Égouttez bien les endives braisées, sans les caraméliser, et roulez chacune dans une tranche de jambon blanc. Couchez-les dans un plat beurré, nappez de 50 cl de béchamel muscadée, parsemez de 80 g de comté râpé et enfournez 25 minutes à 200 °C, jusqu’à ce que le dessus soit doré et bouillonne.",
    },
    {
      title: "À l’orange",
      text: "Remplacez le jus de citron et l’eau par 10 cl de jus d’orange pressée. Les endives sont plus douces et caramélisent un peu plus vite : surveillez-les dès 8 minutes à découvert.",
    },
    {
      title: "Coupées en deux",
      text: "Fendez les endives dans la longueur et retirez le cône. Braisez-les 20 minutes à couvert, face coupée vers le haut, puis retournez-les et faites dorer la face coupée 5 à 6 minutes à feu moyen.",
    },
  ],
  storage:
    "2 jours au réfrigérateur, en boîte fermée, une fois refroidies en moins de 2 h. Réchauffez-les à la poêle avec 10 g de beurre, 5 minutes à feu moyen, pour qu’elles redorent. Elles supportent mal la congélation : elles rendent leur eau et deviennent filandreuses.",
  pairing:
    "Une volaille rôtie, un rôti de porc, un jambon braisé, un poisson blanc poêlé ou des noix de Saint-Jacques.",
  faq: [
    {
      q: "Faut-il enlever le cœur des endives ?",
      a: "Oui, le petit cône dur à la base, sur 2 cm environ. C’est la partie la plus amère. Ne creusez pas plus profond : les feuilles ne tiendraient plus ensemble à la cuisson.",
    },
    {
      q: "Faut-il laver les endives avant de les braiser ?",
      a: "Non, pas à grande eau. Retirez les feuilles abîmées et essuyez-les avec un torchon humide. Trempées, elles se gorgent d’eau, rendent du jus à la cuisson et dorent mal.",
    },
    {
      q: "Peut-on enlever toute l’amertume des endives ?",
      a: "Non, et ce n’est pas souhaitable : c’est leur goût. On l’adoucit en retirant le cône à la base, en ajoutant 1 cuillère à café de sucre et un peu de citron, et en les faisant bien dorer. Des endives aux pointes jaune pâle sont aussi moins amères que celles aux pointes vertes.",
    },
    {
      q: "Peut-on préparer les endives braisées à l’avance ?",
      a: "Oui. Faites la cuisson à couvert la veille, refroidissez-les en moins de 2 h et gardez-les au réfrigérateur dans leur jus. Il reste à les caraméliser 10 à 15 minutes avant de servir.",
    },
    {
      q: "Combien de temps se gardent les endives braisées ?",
      a: "2 jours au réfrigérateur, en boîte fermée. Réchauffez-les 5 minutes à la poêle avec 10 g de beurre, à feu moyen, pour qu’elles redorent. Elles se congèlent mal : elles rendent leur eau et deviennent filandreuses.",
    },
    {
      q: "Les endives braisées vont-elles avec le poisson ?",
      a: "Oui, surtout avec un poisson blanc poêlé ou des Saint-Jacques : leur amertume douce et le citron tiennent bien face au beurre. Elles accompagnent aussi une volaille rôtie, un rôti de porc ou un jambon braisé.",
    },
  ],
  nutrition: { calories: 115, protein: 2.5, fat: 8.5, saturatedFat: 5.5, carbs: 7, sugar: 3, fiber: 3, sodium: 300 },
  annotations: { hero: "fondantes jusqu’au trognon", detail: "des pointes jaune pâle, pas vertes" },
  images: {
    heroAlt:
      "Trois endives braisées entières, brillantes de beurre, dans une assiette avec des rondelles de carotte et de courgette.",
    detailAlt: "Trois endives crues, blanches et serrées, aux pointes jaune pâle, posées dans une assiette blanche.",
    credits: {
      hero: {
        photographer: "jpduretz",
        url: "https://pixabay.com/photos/accompaniement-endives-chicory-1829673/",
        source: "Pixabay",
      },
      detail: {
        photographer: "wortschaum",
        url: "https://pixabay.com/photos/chicory-vegetables-food-healthy-4045212/",
        source: "Pixabay",
      },
    },
  },
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  hero,
  detail,
  theme: {
    accent: "#C9A227",
    onAccent: "#1B1712",
    ink: "#76600C",
    tint: "#FAF4DE",
    deep: "#16130A",
    focus: "45% 72%",
  },
});
