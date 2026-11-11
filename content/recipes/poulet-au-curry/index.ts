import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "poulet-au-curry",
  title: "Poulet au curry",
  seoTitle: "Poulet au curry à l’indienne, sauce au yaourt",
  tagline: "Les oignons font la moitié du travail.",
  description:
    "Un poulet au curry à l’indienne, crémeux grâce au yaourt : épices grillées dans l’huile, oignons bien dorés et 20 minutes de mijotage à feu doux.",
  summary:
    "Pour un poulet au curry à l’indienne pour 4 personnes, faites mariner 800 g de hauts de cuisse dans 200 g de yaourt entier épicé pendant 30 minutes. Faites grésiller cumin, cardamome et cannelle dans l’huile, dorez 2 oignons 15 à 20 minutes, ajoutez ail, gingembre, épices moulues et 400 g de tomates, puis le poulet. Laissez mijoter 20 minutes à couvert, jusqu’à 74 °C à cœur.",
  intro: [
    "Ce poulet au curry n’est pas la version à la crème et au curry en poudre qu’on connaît en France. C’est un curry à l’indienne, dans le style des currys maison du nord du pays : des épices entières grillées dans l’huile, beaucoup d’oignon bien doré, de la tomate, et du yaourt qui rend la sauce crémeuse sans une goutte de crème.",
    "Tout se joue dans la cocotte avant que le poulet n’y entre. Les épices doivent embaumer sans brûler, les oignons prendre une vraie couleur de caramel, et la sauce réduire jusqu’à ce que l’huile perle sur les bords. Ensuite, le poulet mijote tranquillement.",
    "Comptez 30 minutes de marinade et un peu moins d’une heure de cuisson, dont 20 minutes où vous n’avez rien à faire. La version au lait de coco et celle au curry en poudre sont dans les variantes.",
  ],
  category: "Plat",
  cuisine: "Indienne",
  keywords: [
    "poulet au curry",
    "recette poulet au curry",
    "poulet au curry indien",
    "curry de poulet maison",
    "poulet curry yaourt",
    "poulet au curry facile",
    "curry de poulet sans lait de coco",
    "chicken curry maison",
  ],
  diet: ["glutenFree"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 20, cook: 55, rest: 30 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Toute l’année"],
  equipment: [
    "cocotte ou sauteuse à fond épais de 24 cm, avec couvercle",
    "saladier",
    "râpe fine",
    "thermomètre de cuisson (conseillé)",
  ],
  ingredients: [
    {
      title: "Le poulet mariné",
      items: [
        {
          qty: 800,
          unit: "g",
          name: "hauts de cuisse de poulet",
          note: "désossés, sans peau, en morceaux de 4 cm",
          step: 50,
        },
        { qty: 200, unit: "g", name: "yaourt nature au lait entier", note: "pas allégé", step: 10 },
        { qty: 1, unit: "cac", name: "sel fin", step: 0.5 },
        { qty: 0.5, unit: "cac", name: "curcuma en poudre", step: 0.25 },
        {
          qty: 1,
          unit: "cac",
          name: "piment du Cachemire en poudre",
          note: "ou paprika doux",
          step: 0.5,
        },
      ],
    },
    {
      title: "Les épices entières",
      items: [
        { qty: 3, unit: "cas", name: "huile de tournesol", note: "ou 40 g de ghee", step: 1 },
        { qty: 1, unit: "cac", name: "graines de cumin", step: 0.5 },
        { qty: 4, unit: "gousse", name: "cardamome verte", note: "légèrement écrasées", step: 1 },
        { qty: 1, name: "bâton de cannelle", plural: "bâtons de cannelle", note: "de 5 cm", step: 1, fixed: true },
        { qty: 3, name: "clou de girofle", plural: "clous de girofle", step: 1 },
        { qty: 2, unit: "feuille", name: "laurier", step: 1 },
      ],
    },
    {
      title: "La sauce",
      items: [
        { qty: 2, name: "oignon jaune", plural: "oignons jaunes", note: "environ 300 g, émincés finement", step: 0.5 },
        { name: "sel fin" },
        { qty: 4, unit: "gousse", name: "ail", step: 1 },
        { qty: 20, unit: "g", name: "gingembre frais", note: "pelé", step: 5 },
        { qty: 2, unit: "cac", name: "coriandre moulue", step: 0.5 },
        { qty: 1, unit: "cac", name: "cumin moulu", step: 0.5 },
        {
          qty: 400,
          unit: "g",
          name: "tomates concassées",
          note: "en conserve, ou 3 tomates bien mûres râpées",
          step: 50,
        },
        { qty: 150, unit: "ml", name: "eau", step: 10 },
        { qty: 1, unit: "cac", name: "garam masala", step: 0.5 },
        { qty: 0.5, unit: "botte", name: "coriandre fraîche", note: "ciselée", step: 0.5 },
      ],
    },
  ],
  method: [
    {
      title: "La marinade",
      steps: [
        {
          title: "Mariner le poulet",
          text: "Dans un saladier, mélangez le poulet avec le yaourt, 1 cuillerée à café de sel, le curcuma et le piment, jusqu’à ce que chaque morceau soit bien enrobé. Couvrez et laissez au réfrigérateur au moins 30 minutes, ou jusqu’au lendemain si vous vous y prenez la veille.",
          timer: { minutes: 30, label: "Marinade du poulet" },
        },
        {
          title: "Préparer les aromates",
          text: "Pendant ce temps, émincez finement les oignons. Râpez l’ail et le gingembre à la râpe fine. Mesurez la coriandre et le cumin moulus dans un petit bol, à portée de main : une fois les épices dans l’huile, tout va très vite.",
        },
      ],
    },
    {
      title: "La sauce",
      steps: [
        {
          title: "Faire grésiller les épices",
          text: "Faites chauffer l’huile à feu moyen dans la cocotte. Ajoutez le cumin en graines, la cardamome, la cannelle, les clous de girofle et le laurier. Laissez grésiller 30 à 45 secondes, jusqu’à ce que le cumin brunisse légèrement et sente le pain grillé.",
          tip: "Si le cumin noircit ou fume, recommencez avec de l’huile propre : des épices brûlées rendent toute la sauce amère.",
        },
        {
          title: "Dorer les oignons",
          text: "Ajoutez les oignons et une pincée de sel. Faites-les cuire 15 à 20 minutes à feu moyen en remuant souvent, jusqu’à ce qu’ils soient d’un brun doré uniforme, couleur caramel blond. S’ils attachent, versez une cuillerée à soupe d’eau, prise sur les 150 ml, et grattez le fond.",
          timer: { minutes: 18, label: "Oignons dorés" },
          tip: "C’est l’étape qui fait la sauce. Juste fondus, les oignons donnent un curry pâle et sucré ; bien dorés, ils lui donnent sa couleur et son épaisseur.",
        },
        {
          title: "Cuire les épices moulues",
          text: "Ajoutez l’ail et le gingembre et remuez une petite minute, jusqu’à ce que l’odeur crue disparaisse. Baissez à feu doux, versez la coriandre et le cumin moulus et remuez 30 secondes : les épices doivent embaumer sans attacher.",
        },
        {
          title: "Réduire les tomates",
          text: "Ajoutez les tomates concassées, remontez à feu moyen et laissez cuire 8 à 10 minutes en remuant, jusqu’à ce que la sauce épaississe et que l’huile se sépare sur les bords, en petites gouttes orangées.",
          timer: { minutes: 10, label: "Réduction des tomates" },
          tip: "Ce filet d’huile qui se détache montre que l’eau des tomates s’est évaporée et que les épices cuisent dans le gras : c’est le moment d’ajouter le poulet.",
        },
      ],
    },
    {
      title: "La cuisson du poulet",
      steps: [
        {
          title: "Saisir le poulet",
          text: "Ajoutez le poulet avec toute sa marinade. Remuez 5 minutes à feu moyen, jusqu’à ce que les morceaux blanchissent en surface et que le yaourt se fonde dans la sauce. Ne laissez pas bouillir fort.",
          timer: { minutes: 5, label: "Poulet saisi" },
        },
        {
          title: "Laisser mijoter",
          text: "Versez l’eau, portez à petits frémissements, couvrez et laissez mijoter 20 minutes à feu doux en remuant de temps en temps. Le poulet est cuit quand il atteint 74 °C à cœur, et que le plus gros morceau, coupé en deux, est blanc jusqu’au centre avec un jus clair.",
          timer: { minutes: 20, label: "Mijotage du poulet" },
        },
        {
          title: "Rectifier et finir",
          text: "Goûtez et salez si besoin. Si la sauce est trop liquide, laissez-la réduire 3 à 5 minutes à découvert ; trop épaisse, ajoutez un peu d’eau. Hors du feu, saupoudrez de garam masala, mélangez, parsemez de coriandre fraîche et servez aussitôt.",
          timer: { minutes: 5, label: "Réduction finale (si besoin)" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi griller les épices dans l’huile",
      text: "Une grande partie des molécules aromatiques des épices se dissout dans les graisses plutôt que dans l’eau. Chauffées quelques secondes dans l’huile, les épices libèrent ces arômes, que l’huile transporte ensuite dans toute la sauce. La chaleur en crée aussi de nouveaux, plus grillés ; trop longtemps, elles brûlent et deviennent amères.",
    },
    {
      title: "Pourquoi le yaourt peut trancher",
      text: "Quand le yaourt chauffe vite ou bout fort, ses protéines coagulent et se séparent du petit-lait en petits grains. Un yaourt entier résiste mieux qu’un yaourt allégé, car son gras protège les protéines. L’ajouter avec le poulet, à feu moyen, puis mijoter doucement suffit à garder une sauce lisse.",
    },
    {
      title: "Des cuisses plutôt que des blancs",
      text: "Le haut de cuisse contient plus de gras et de collagène que le blanc. Le collagène se transforme en gélatine pendant le mijotage, et la viande reste juteuse même bien au-delà de 74 °C. Le blanc, très maigre, se dessèche dès qu’il dépasse cette température.",
    },
  ],
  tips: [
    "Préparez et mesurez tout avant d’allumer le feu : les épices entières grillent en moins d’une minute, et vous n’aurez pas le temps de chercher le cumin.",
    "Écrasez les gousses de cardamome du plat d’un couteau pour qu’elles s’ouvrent. Prévenez vos invités : comme la cannelle, le laurier et les clous de girofle, elles ne se mangent pas.",
    "Servez-le avec du riz basmati (60 à 70 g cru par personne) ou des naans, et un peu de yaourt nature à côté pour ceux qui craignent le piment.",
    "Comme beaucoup de plats mijotés, il est encore meilleur le lendemain : les épices ont eu le temps de se fondre dans la sauce.",
  ],
  mistakes: [
    "Verser les épices moulues à feu vif. Elles brûlent en quelques secondes et toute la sauce devient amère.",
    "Arrêter les oignons quand ils sont juste fondus. La sauce reste pâle, liquide et trop sucrée.",
    "Faire bouillir fort après avoir ajouté le yaourt. Il tranche en petits grains blancs.",
    "Remplacer les cuisses par des blancs sans changer la cuisson. Après 20 minutes de mijotage, ils sont secs et filandreux.",
  ],
  variations: [
    {
      title: "Au lait de coco",
      text: "Gardez la marinade au yaourt, mais remplacez les 150 ml d’eau par 200 ml de lait de coco, versés au moment du mijotage. La sauce est plus douce et plus ronde, un peu moins acidulée.",
    },
    {
      title: "À la française, au curry en poudre et à la crème",
      text: "La version qu’on mange souvent en France : 1,5 cuillerée à soupe de curry en poudre à la place de la coriandre, du cumin moulu et du garam masala, et 20 cl de crème liquide à la place du yaourt, ajoutée pour le mijotage. Ce n’est plus un curry indien, mais c’est un bon plat de semaine.",
    },
    {
      title: "Avec des blancs de poulet",
      text: "Gardez la marinade, mais laissez d’abord mijoter la sauce seule 10 minutes avec l’eau. Ajoutez ensuite les blancs en morceaux et comptez 10 à 12 minutes à couvert, jusqu’à 74 °C à cœur, pas plus.",
    },
  ],
  storage:
    "Il se garde 3 jours au réfrigérateur en boîte fermée (3 mois au congélateur) et se réchauffe à feu doux, à couvert, jusqu’à être bien chaud à cœur. Si vous le servez avec du riz, mettez le reste de riz au frais moins de 2 heures après la cuisson, mangez-le sous 24 heures et ne le réchauffez qu’une fois.",
  pairing: "Une bière blonde bien fraîche, ou un riesling d’Alsace pas trop sec.",
  faq: [
    {
      q: "Comment savoir si le poulet au curry est cuit ?",
      a: "Coupez le plus gros morceau en deux : la chair doit être blanche jusqu’au centre et le jus clair, sans trace rosée. Avec un thermomètre, visez au moins 74 °C à cœur. Avec des hauts de cuisse, 20 minutes de mijotage à couvert suffisent largement.",
    },
    {
      q: "Peut-on faire un poulet au curry avec du curry en poudre ?",
      a: "Oui. Remplacez la coriandre, le cumin moulu et le garam masala par 1,5 cuillerée à soupe de curry en poudre, versé à feu doux comme les épices moulues. Le goût est plus uniforme, moins nuancé, mais c’est bon.",
    },
    {
      q: "Lait de coco ou yaourt dans un poulet au curry ?",
      a: "Les deux se font. On a choisi le yaourt, qui marine le poulet et donne une sauce légèrement acidulée, dans l’esprit des currys du nord de l’Inde. Le lait de coco donne une sauce plus douce et plus ronde : la variante explique comment l’utiliser.",
    },
    {
      q: "Pourquoi la sauce de mon curry a-t-elle tranché ?",
      a: "Le yaourt a trop chauffé : à gros bouillons, ses protéines coagulent et se séparent du petit-lait. Prenez un yaourt entier, ajoutez-le avec le poulet à feu moyen, puis mijotez doucement. Une sauce un peu grainée reste bonne à manger ; un coup de fouet hors du feu la rend plus lisse.",
    },
    {
      q: "Par quoi remplacer le piment du Cachemire ?",
      a: "Par du paprika doux, en même quantité, avec une pincée de piment de Cayenne si vous aimez quand ça pique. Le piment du Cachemire apporte surtout de la couleur et assez peu de piquant : le paprika fait le même travail.",
    },
    {
      q: "Peut-on congeler un poulet au curry ?",
      a: "Oui, jusqu’à 3 mois en boîte hermétique. Décongelez-le une nuit au réfrigérateur et réchauffez-le à feu doux, à couvert, jusqu’à ce qu’il soit bien chaud à cœur. La sauce peut grainer un peu à cause du yaourt : un coup de fouet suffit. Ne le recongelez pas.",
    },
  ],
  nutrition: {
    calories: 430,
    protein: 42,
    fat: 22,
    saturatedFat: 5,
    carbs: 14,
    sugar: 9,
    fiber: 3,
    sodium: 900,
  },
  annotations: {
    hero: "les oignons bien dorés, pas fondus",
    detail: "yaourt entier, sinon il tranche",
  },
  images: {
    heroAlt: "Poulet au curry dans un bol en terre, sauce orangée et crémeuse parsemée de coriandre fraîche",
    detailAlt: "Poulet au curry à la sauce au yaourt dans un bol blanc, un petit pot de sauce verte à côté",
    credits: {
      hero: { photographer: "Pexels", url: "https://www.pexels.com/photo/35629938/" },
      detail: { photographer: "Pexels", url: "https://www.pexels.com/photo/38400477/" },
    },
  },
  datePublished: "2026-11-04",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#D9862A",
    onAccent: "#1b1712",
    ink: "#8C4A0E",
    tint: "#FAF0E1",
    deep: "#1A120C",
    focus: "50% 60%",
  },
});
