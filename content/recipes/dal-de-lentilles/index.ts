import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "dal-de-lentilles",
  title: "Dal de lentilles corail",
  seoTitle: "Dal de lentilles corail, avec tadka à l’ail et au cumin",
  tagline: "Tout se joue dans la petite poêle.",
  description:
    "Dal de lentilles corail : 250 g de lentilles fondues 25 minutes au curcuma, une tadka de moutarde, cumin et ail versée à la fin, et du riz basmati.",
  summary:
    "Pour 4 personnes, rincez 250 g de lentilles corail et faites-les cuire 20 à 25 minutes dans 1 l d’eau avec le curcuma et le gingembre, jusqu’à ce qu’elles se défassent. Pendant ce temps, cuisez 250 g de riz basmati. Faites crépiter moutarde, cumin, piments secs et ail dans 30 g de ghee, versez sur le dal, puis ajoutez citron et coriandre. Comptez 55 minutes, dont 15 de travail.",
  intro: [
    "Le dal est un des plats de tous les jours en Inde : des légumineuses cuites jusqu’à devenir crémeuses, mangées avec du riz ou du pain. Celui-ci est fait avec des lentilles corail, qui se défont toutes seules en une vingtaine de minutes dans de l’eau au curcuma. À ce stade, c’est encore une purée un peu plate.",
    "Le goût arrive à la fin, avec la tadka : moutarde, cumin, ail et piments secs jetés dans du ghee très chaud, puis versés d’un coup sur les lentilles. Ça grésille, ça embaume, et c’est là qu’on peut tout rater : une minute de trop, et l’ail brûle.",
    "Alors on prépare toutes les épices à côté du feu avant d’allumer la poêle. Le riz basmati cuit pendant que les lentilles mijotent, et le tout est sur la table en moins d’une heure.",
  ],
  category: "Plat",
  cuisine: "Indienne",
  keywords: [
    "dal",
    "dal de lentilles corail",
    "recette dal",
    "dal lentilles corail",
    "dal tadka",
    "dhal de lentilles",
    "dal végétarien",
    "dal au lait de coco",
    "masoor dal",
  ],
  diet: ["vegetarian", "glutenFree"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 15, cook: 40 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: [
    "casserole de 3 l",
    "casserole de 2 l avec couvercle pour le riz",
    "petite poêle pour la tadka",
    "fouet",
  ],
  ingredients: [
    {
      title: "Le dal",
      items: [
        { qty: 250, unit: "g", name: "lentille corail", step: 10 },
        { qty: 1, unit: "l", name: "eau", step: 0.25 },
        { qty: 0.5, unit: "cac", name: "curcuma en poudre", step: 0.25 },
        { qty: 10, unit: "g", name: "gingembre frais", note: "râpé", step: 5 },
        { qty: 1, unit: "cac", name: "sel fin", step: 0.25 },
      ],
    },
    {
      title: "Le riz",
      items: [
        { qty: 250, unit: "g", name: "riz basmati", step: 10 },
        { qty: 375, unit: "ml", name: "eau", step: 25 },
        { qty: 0.5, unit: "cac", name: "sel fin", step: 0.25 },
      ],
    },
    {
      title: "La tadka",
      items: [
        { qty: 30, unit: "g", name: "ghee", note: "ou 2 cas d’huile neutre pour une version végane", step: 5 },
        { qty: 1, unit: "cac", name: "graine de moutarde noire", plural: "graines de moutarde noire", step: 0.5 },
        { qty: 1, unit: "cac", name: "graine de cumin", plural: "graines de cumin", step: 0.5 },
        { qty: 2, name: "piment rouge séché", plural: "piments rouges séchés", note: "entiers", step: 1 },
        { qty: 3, name: "gousse d’ail", plural: "gousses d’ail", note: "émincées finement", step: 1 },
        { qty: 0.25, unit: "cac", name: "piment en poudre", note: "doux, type cachemire, ou paprika", step: 0.25 },
      ],
    },
    {
      title: "Pour finir",
      items: [
        { qty: 0.5, name: "citron", plural: "citrons", note: "le jus", step: 0.5 },
        { qty: 10, unit: "g", name: "coriandre fraîche", note: "ciselée", step: 5 },
      ],
    },
  ],
  method: [
    {
      title: "Les lentilles et le riz",
      steps: [
        {
          title: "Rincer les lentilles",
          text: "Mettez les lentilles dans un saladier, couvrez-les d’eau froide, frottez-les entre vos mains et videz l’eau trouble. Recommencez 3 ou 4 fois, jusqu’à ce que l’eau reste presque claire, puis égouttez.",
        },
        {
          title: "Lancer la cuisson",
          text: "Dans la casserole de 3 l, mettez les lentilles, 1 l d’eau, le curcuma et le gingembre râpé. Portez à ébullition à feu moyen et retirez à la cuillère l’écume blanche qui monte.",
        },
        {
          title: "Cuire jusqu’à défaire",
          text: "Baissez à feu doux, couvercle entrouvert, et laissez frémir 20 à 25 minutes en remuant de temps en temps, plus souvent vers la fin. C’est prêt quand les lentilles ont perdu leur forme et que le dal coule lentement de la cuillère. Salez, fouettez quelques secondes pour lisser, et allongez d’eau chaude s’il est trop épais.",
          timer: { minutes: 25, label: "Lentilles" },
          tip: "Le dal épaissit encore en refroidissant : arrêtez-le un peu plus fluide que vous ne le voulez dans l’assiette.",
        },
        {
          title: "Cuire le riz",
          text: "Pendant ce temps, rincez le riz à l’eau froide jusqu’à ce qu’elle soit presque claire. Mettez-le dans la petite casserole avec 375 ml d’eau et le sel, portez à ébullition, couvrez et laissez cuire 12 minutes à feu très doux, sans soulever le couvercle.",
          timer: { minutes: 12, label: "Riz" },
        },
        {
          title: "Laisser gonfler le riz",
          text: "Coupez le feu et laissez reposer 10 minutes, toujours couvert. Égrainez à la fourchette : les grains doivent être tendres, bien séparés, sans eau au fond de la casserole.",
          timer: { minutes: 10, label: "Repos du riz" },
        },
      ],
    },
    {
      title: "La tadka",
      steps: [
        {
          title: "Faire crépiter la moutarde",
          text: "Préparez toutes les épices et l’ail à côté du feu : la suite va très vite. Dans la petite poêle, chauffez le ghee à feu moyen-vif jusqu’à ce qu’il frémisse. Jetez les graines de moutarde ; quand elles crépitent et sautent, au bout d’une trentaine de secondes, ajoutez le cumin et les piments secs.",
          tip: "Gardez un couvercle à portée de main : les graines de moutarde sautent hors de la poêle.",
        },
        {
          title: "Blondir l’ail",
          text: "Ajoutez l’ail et remuez 1 minute, jusqu’à ce qu’il soit tout juste blond et que le cumin sente le grillé. Retirez la poêle du feu et ajoutez le piment en poudre : la chaleur du ghee suffit à le faire infuser.",
          timer: { minutes: 1, label: "Ail blond" },
          tip: "L’ail continue de dorer hors du feu. Retirez la poêle quand il est blond, pas quand il est brun.",
        },
        {
          title: "Verser et servir",
          text: "Versez aussitôt la tadka sur le dal chaud : il doit grésiller. Mélangez à moitié pour laisser des traînées de ghee épicé en surface. Ajoutez le jus de citron, goûtez, rectifiez le sel, parsemez de coriandre et servez avec le riz.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Des lentilles sans peau",
      text: "Les lentilles corail sont vendues décortiquées et cassées en deux. Sans l’enveloppe qui retient les graines entières, l’eau entre vite, l’amidon gonfle et les parois des cellules cèdent : elles se transforment en purée sans qu’on ait à les mixer.",
    },
    {
      title: "Les épices dans le gras chaud",
      text: "Une bonne partie des arômes du cumin, de l’ail et du piment se dissout dans les matières grasses plutôt que dans l’eau. Frits quelques secondes dans le ghee, ils se libèrent et prennent une note grillée ; le gras les transporte ensuite dans tout le dal.",
    },
    {
      title: "Pourquoi la moutarde doit éclater",
      text: "Crue, la graine de moutarde est piquante et un peu amère. La chaleur fait éclater la graine et détruit l’enzyme qui produit son piquant : frite jusqu’à crépiter, elle devient douce, avec un goût de noisette.",
    },
  ],
  tips: [
    "Le ghee supporte bien la forte chaleur de la tadka, parce qu’on en a retiré les protéines du lait. Le beurre ordinaire noircit avant que les graines de moutarde n’éclatent.",
    "Préparez la tadka à la dernière minute, quand tout le monde est à table : c’est le grésillement sur le dal chaud qui fait le parfum.",
    "Fouettez le dal quelques secondes avant de servir, pour une texture crémeuse sans mixeur.",
    "Pour réchauffer un dal de la veille, ajoutez de l’eau chaude par petites quantités en remuant, jusqu’à retrouver une texture qui coule de la cuillère.",
  ],
  mistakes: [
    "Brûler l’ail ou le cumin dans la tadka : tout le dal prend un goût âcre. Jetez la poêle et recommencez, ça coûte 2 minutes.",
    "Jeter les graines de moutarde dans un ghee tiède : elles n’éclatent pas et restent amères. Attendez que le ghee frémisse avant de les verser.",
    "Oublier de remuer en fin de cuisson : le dal attache et brûle au fond. Transvasez-le sans racler dans une casserole propre, le reste est sauvé.",
    "Ne pas rincer les lentilles : l’écume monte en masse et déborde au premier bouillon.",
  ],
  variations: [
    {
      title: "Au lait de coco",
      text: "Remplacez 20 cl d’eau par 20 cl de lait de coco, ajouté pour les 5 dernières minutes de cuisson. Le dal est plus rond et un peu sucré. Avec de l’huile de coco dans la tadka, il devient végane.",
    },
    {
      title: "Végane",
      text: "Remplacez le ghee par 2 cas d’huile neutre ou d’huile de coco. Le reste ne change pas, il manque seulement la petite note beurrée.",
    },
    {
      title: "Avec oignon et tomate",
      text: "Dans la tadka, après les graines, faites dorer 1 petit oignon finement haché 6 à 8 minutes, puis l’ail, puis 1 tomate en dés pendant 3 minutes, jusqu’à ce qu’elle se défasse. Le dal est plus épais et plus sucré.",
    },
    {
      title: "Aux épinards",
      text: "Ajoutez 150 g de pousses d’épinards dans le dal 2 minutes avant la fin de la cuisson, juste le temps qu’elles tombent, puis versez la tadka comme d’habitude.",
    },
  ],
  storage:
    "Le dal se garde 3 jours au réfrigérateur en boîte fermée, et 3 mois au congélateur ; il épaissit au froid, allongez-le d’eau chaude en le réchauffant. Le riz cuit doit être au réfrigérateur dans les 2 heures et se garde 24 heures au plus. Ne recongelez pas un dal décongelé.",
  pairing:
    "Du riz basmati, comme ici, ou des chapatis. Un yaourt nature et quelques rondelles d’oignon cru au citron rafraîchissent l’ensemble.",
  faq: [
    {
      q: "Faut-il faire tremper les lentilles corail pour un dal ?",
      a: "Non. Décortiquées et cassées, elles cuisent en 20 à 25 minutes sans trempage. Rincez-les seulement 3 ou 4 fois à l’eau froide pour enlever l’amidon de surface, qui fait mousser.",
    },
    {
      q: "Peut-on faire un dal sans ghee ?",
      a: "Oui. 2 cas d’huile neutre ou d’huile de coco font la tadka aussi bien, et le dal devient végane. Évitez le beurre ordinaire : il brûle à la chaleur nécessaire pour faire éclater la moutarde.",
    },
    {
      q: "Peut-on faire un dal avec des lentilles vertes ?",
      a: "Oui, mais elles ne se défont pas. Comptez 35 à 40 minutes de cuisson et écrasez-en une partie à la fin pour lier. Le goût est plus terreux, la texture moins crémeuse.",
    },
    {
      q: "Combien de temps se garde un dal ?",
      a: "3 jours au réfrigérateur, en boîte fermée, et 3 mois au congélateur. Il épaissit beaucoup au froid : réchauffez-le en ajoutant de l’eau chaude petit à petit. Le riz cuit, lui, va au réfrigérateur dans les 2 heures et se garde 24 heures au plus.",
    },
    {
      q: "Le dal est-il épicé ?",
      a: "Non, pas forcément. Les piments secs entiers parfument sans brûler tant qu’on ne les croque pas ; c’est le piment en poudre qui pique. Pour les enfants, remplacez-le par du paprika doux.",
    },
    {
      q: "Peut-on réchauffer le riz servi avec le dal ?",
      a: "Oui, une seule fois, s’il est passé au réfrigérateur dans les 2 heures après la cuisson. Réchauffez-le jusqu’à ce qu’il fume franchement, et jetez-le au-delà de 24 heures.",
    },
  ],
  nutrition: { calories: 495, protein: 20, fat: 9, saturatedFat: 5, carbs: 84, sugar: 2, fiber: 8, sodium: 880 },
  annotations: { hero: "ghee, piments frits, coriandre", detail: "avec un basmati bien égrainé" },
  images: {
    heroAlt:
      "Dal de lentilles corail dans un plat en métal, nappé d’une tadka de cumin, de piments rouges frits et de coriandre.",
    detailAlt:
      "Dal de lentilles dans une casserole en cuivre, servi avec du riz basmati parsemé de coriandre fraîche.",
    credits: {
      hero: {
        photographer: "Nosh Caterers",
        url: "https://www.pexels.com/photo/delicious-indian-dal-tadka-in-brass-bowl-30203314/",
      },
      detail: {
        photographer: "Kunal Lakhotia",
        url: "https://www.pexels.com/photo/indian-dal-and-rice-in-traditional-utensils-28674705/",
      },
    },
  },
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  hero,
  detail,
  theme: {
    accent: "#D98E04",
    onAccent: "#1B1712",
    ink: "#8A5600",
    tint: "#FCF1DC",
    deep: "#1A1206",
    focus: "50% 50%",
  },
});
