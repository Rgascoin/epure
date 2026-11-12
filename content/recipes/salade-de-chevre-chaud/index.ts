import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "salade-de-chevre-chaud",
  title: "Salade de chèvre chaud",
  seoTitle: "Salade de chèvre chaud, toasts gratinés en 5 minutes",
  tagline: "L’entrée de bistrot qu’on refait chez soi.",
  description:
    "Salade de chèvre chaud pour 4 : 8 toasts de baguette, 200 g de bûche de chèvre passés 5 minutes sous le gril, noix grillées et vinaigrette à l’huile de noix.",
  summary:
    "Pour 4 personnes en entrée, coupez 200 g de bûche de chèvre en 8 rondelles et posez-les sur 8 tranches de baguette déjà grillées d’un côté. Passez-les 4 à 5 minutes sous le gril à 240 °C, à 10 cm de la résistance. Pendant ce temps, faites griller 40 g de cerneaux de noix et préparez une vinaigrette moutarde à l’huile de noix. Servez les toasts brûlants sur 150 g de salade assaisonnée au dernier moment. Comptez 25 minutes en tout.",
  intro: [
    "Une salade verte bien assaisonnée, des noix grillées et des toasts où le chèvre a juste commencé à fondre. Tout tient dans le contraste entre la salade froide qui croque et le fromage chaud, crémeux, posé sur un pain qui craque encore.",
    "Ce qui la rate, ce sont des toasts mous dessous et un chèvre qui s’est effondré sur la plaque. On fait donc griller le pain seul d’abord, et le fromage ne reste sous le gril que le temps de dorer par endroits. Cinq minutes, rarement plus.",
    "Elle contient des noix, en cerneaux et dans l’huile de la vinaigrette. Pensez-y si vous recevez.",
  ],
  category: "Entrée",
  cuisine: "Française",
  keywords: [
    "salade de chèvre chaud",
    "recette salade de chèvre chaud",
    "toast de chèvre chaud",
    "chèvre chaud au four",
    "salade de chèvre chaud au miel",
    "salade de chèvre chaud aux noix",
    "temps de cuisson chèvre chaud",
    "vinaigrette salade de chèvre chaud",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 15, cook: 10 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["automne", "hiver"],
  equipment: [
    "four avec fonction gril",
    "plaque de cuisson",
    "poêle de 24 cm",
    "grand saladier",
    "couteau à lame fine",
  ],
  ingredients: [
    {
      title: "Vinaigrette et salade",
      items: [
        { qty: 40, unit: "g", name: "cerneaux de noix", step: 5 },
        { qty: 1, unit: "cac", name: "moutarde de Dijon", step: 1 },
        { qty: 1, unit: "cas", name: "vinaigre de vin rouge", note: "ou de cidre", step: 1 },
        { qty: 3, unit: "cas", name: "huile de noix", note: "ou moitié huile de colza", step: 1 },
        { name: "sel fin" },
        { name: "poivre du moulin" },
        {
          qty: 150,
          unit: "g",
          name: "mesclun",
          note: "ou frisée, mâche, feuille de chêne, lavé et bien essoré",
          step: 10,
        },
      ],
    },
    {
      title: "Toasts de chèvre",
      items: [
        { qty: 8, unit: "tranche", name: "baguette", note: "coupées en biais, 1 cm d’épaisseur", step: 1 },
        { qty: 1, unit: "cas", name: "huile d’olive", step: 1 },
        {
          qty: 200,
          unit: "g",
          name: "bûche de chèvre",
          note: "demi-affinée, sortie du réfrigérateur au moment de la couper",
          step: 10,
        },
        { qty: 2, unit: "brin", name: "thym frais", step: 1, optional: true },
        { qty: 2, unit: "cac", name: "miel liquide", step: 1, optional: true },
      ],
    },
  ],
  method: [
    {
      title: "Salade et toasts",
      steps: [
        {
          title: "Allumer le gril",
          text: "Placez une grille en position haute, à environ 10 cm de la résistance, et allumez le four en mode gril à 240 °C, ou au maximum. Laissez-le chauffer 5 minutes pendant que vous préparez les noix.",
          timer: { minutes: 5, label: "Préchauffage du gril" },
        },
        {
          title: "Griller les noix",
          text: "Faites chauffer les cerneaux dans une poêle sèche, à feu moyen, 3 à 4 minutes, en remuant souvent. Arrêtez dès qu’ils sentent le grillé et foncent un peu sur les bords. Versez-les aussitôt dans une assiette, sinon la poêle continue de les cuire, puis concassez-les grossièrement.",
          timer: { minutes: 4, label: "Noix à la poêle" },
        },
        {
          title: "Préparer la vinaigrette",
          text: "Dans le saladier, mélangez la moutarde, le vinaigre, une pincée de sel et deux tours de poivre jusqu’à ce que le sel ait fondu. Versez l’huile de noix en fouettant à la fourchette : la vinaigrette devient opaque et épaissit un peu. Posez la salade par-dessus, sans mélanger.",
          tip: "Le sel ne se dissout pas dans l’huile : faites-le fondre dans le vinaigre avant d’ajouter l’huile.",
        },
        {
          title: "Couper le chèvre",
          text: "Coupez la bûche bien froide en 8 rondelles d’environ 1,5 cm, avec un couteau à lame fine passé sous l’eau chaude et essuyé entre chaque tranche. Froid, le chèvre se tranche net ; tiède, il s’écrase et colle à la lame.",
        },
        {
          title: "Griller le pain",
          text: "Arrosez les tranches de baguette d’un filet d’huile d’olive, posez-les sur la plaque et passez-les 2 minutes sous le gril, jusqu’à ce qu’elles soient blondes. Retournez-les : la face grillée, dessous, restera croustillante sous le fromage.",
          timer: { minutes: 2, label: "Pain sous le gril" },
        },
        {
          title: "Gratiner le chèvre",
          text: "Posez une rondelle de chèvre sur chaque toast, poivrez, effeuillez un peu de thym et, si vous aimez, ajoutez quelques gouttes de miel. Glissez sous le gril 4 à 5 minutes. Sortez la plaque quand le chèvre a gonflé, qu’il dore par endroits et qu’il plie sous la pointe d’un couteau sans couler.",
          timer: { minutes: 5, label: "Chèvre sous le gril" },
          tip: "Restez devant le four : sous le gril, une minute sépare le doré du brûlé.",
        },
        {
          title: "Assaisonner et servir",
          text: "Mélangez la salade et la vinaigrette au dernier moment, jusqu’à ce que chaque feuille brille. Répartissez-la dans les assiettes, parsemez de noix et posez deux toasts brûlants sur chacune. Servez tout de suite, le chèvre se raffermit vite en refroidissant.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Un chèvre qui fond sans couler",
      text: "Une bûche de chèvre est un caillé lactique, très acide. À ce pH, les caséines ont perdu une bonne partie de leur calcium et restent soudées entre elles : la chaleur assouplit la pâte et la rend crémeuse, mais elle ne file pas comme un emmental. Chauffée trop longtemps, elle se dessèche en surface et rend du gras.",
    },
    {
      title: "Les noix à sec",
      text: "Dans la poêle sèche, la surface des cerneaux dépasse vite 140 °C. Leurs sucres et leurs protéines réagissent ensemble (réaction de Maillard) et donnent des arômes de grillé, tandis que l’humidité restante s’évapore : les noix croquent davantage.",
    },
    {
      title: "Pourquoi assaisonner au dernier moment",
      text: "L’huile traverse la fine couche cireuse qui protège les feuilles, et le sel en tire l’eau par osmose. Assaisonnée dix minutes trop tôt, la salade ramollit et s’affaisse au fond du saladier.",
    },
  ],
  tips: [
    "Choisissez une bûche demi-affinée, avec sa croûte : trop fraîche, elle s’étale sur le pain ; la croûte aide la rondelle à garder sa forme.",
    "Le pain de la veille grille plus vite et reste croustillant plus longtemps que la baguette du jour.",
    "Le miel se dépose avant le gril pour caraméliser un peu. Ajouté à la sortie, il reste liquide et plus parfumé : les deux se défendent.",
    "Sans fonction gril, enfournez à 220 °C, chaleur tournante, sur la grille du haut, 6 à 8 minutes : le chèvre fond davantage mais dore moins.",
  ],
  mistakes: [
    "Laisser le chèvre trop longtemps sous le gril : il s’affaisse, coule sur la plaque et durcit en refroidissant. Sortez-le dès qu’il dore par endroits.",
    "Poser le chèvre sur du pain cru : le dessous reste mou et s’imbibe. Faites toujours griller une face d’abord et mettez-la dessous.",
    "Assaisonner la salade à l’avance : elle est flétrie au moment de servir. Gardez la vinaigrette au fond du saladier et mélangez à la dernière minute.",
    "Couper le chèvre tiède : les rondelles s’écrasent et collent au couteau. Remettez la bûche 15 minutes au congélateur si elle a pris la chaleur.",
  ],
  variations: [
    {
      title: "Avec des crottins",
      text: "Remplacez la bûche par 4 crottins de chèvre d’environ 60 g, coupés en deux dans l’épaisseur. Plus épaisses, les moitiés demandent 5 à 6 minutes sous le gril.",
    },
    {
      title: "Pomme et lardons",
      text: "Ajoutez à la salade 1 pomme acidulée en fines lamelles et 100 g de lardons fumés dorés 5 minutes à la poêle sans matière grasse. Avec 3 toasts par personne, cela fait un dîner.",
    },
    {
      title: "Sans fruits à coque",
      text: "Remplacez les noix par 40 g de graines de courge grillées 3 minutes à la poêle, et l’huile de noix par de l’huile de colza.",
    },
  ],
  storage:
    "Elle se mange tout de suite : les toasts ne se réchauffent pas, ils durcissent. Le chèvre entamé se garde 5 jours au réfrigérateur, bien emballé. La vinaigrette tient 1 semaine au frais dans un bocal fermé, à secouer avant de s’en servir.",
  pairing: "Un sauvignon de Loire, sancerre ou touraine, dont l’acidité répond à celle du chèvre.",
  faq: [
    {
      q: "Combien de temps faut-il passer le chèvre chaud au four ?",
      a: "4 à 5 minutes sous le gril à 240 °C, la grille à 10 cm de la résistance, sur un pain déjà grillé d’un côté. Sans gril, comptez 6 à 8 minutes à 220 °C en haut du four. Le chèvre est prêt quand il a gonflé, qu’il dore par endroits et qu’il plie sous la lame sans couler.",
    },
    {
      q: "Quel chèvre choisir pour une salade de chèvre chaud ?",
      a: "Une bûche demi-affinée, facile à trancher en rondelles régulières, ou des crottins coupés en deux. Évitez le chèvre frais en faisselle, qui fond en flaque, et les chèvres très secs, qui chauffent sans s’assouplir.",
    },
    {
      q: "Peut-on manger du chèvre chaud quand on est enceinte ?",
      a: "Oui, si le fromage est au lait pasteurisé, ce qu’indique l’étiquette. Les fromages au lait cru sont déconseillés pendant la grossesse à cause de la listeria, et quelques minutes de gril ne suffisent pas toujours à chauffer la rondelle à cœur.",
    },
    {
      q: "Peut-on préparer les toasts de chèvre à l’avance ?",
      a: "Oui, jusqu’au passage sous le gril : pain grillé d’un côté, chèvre posé, plaque filmée au réfrigérateur 2 heures au plus. Enfournez au dernier moment en comptant 1 minute de plus, le fromage partant froid.",
    },
    {
      q: "Par quoi remplacer les noix en cas d’allergie ?",
      a: "Par des graines de courge ou de tournesol, grillées 3 minutes à la poêle sèche. Remplacez aussi l’huile de noix de la vinaigrette par de l’huile de colza ou de tournesol.",
    },
    {
      q: "Faut-il mettre du miel sur le chèvre chaud ?",
      a: "Non, c’est facultatif. Un quart de cuillère à café par toast adoucit l’acidité du chèvre et caramélise un peu sous le gril. Sans miel, un peu de thym et un tour de poivre suffisent.",
    },
  ],
  nutrition: {
    calories: 460,
    protein: 15,
    fat: 33,
    saturatedFat: 10,
    carbs: 28,
    sugar: 5,
    fiber: 2,
    sodium: 650,
  },
  annotations: { hero: "le pain grillé dessous, d’abord", detail: "on assaisonne au dernier moment" },
  images: {
    heroAlt:
      "Salade de chèvre chaud : deux toasts au chèvre gratiné encadrent une salade aux carottes râpées et aux pignons",
    detailAlt:
      "Toasts de chèvre chaud servis sur une ardoise avec du mesclun et de petites brochettes de légumes grillés",
    credits: {
      hero: {
        photographer: "cyclonebill",
        url: "https://commons.wikimedia.org/wiki/File:Flickr_-_cyclonebill_-_Salat_med_gedeost.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 2.0",
      },
      detail: {
        photographer: "DocteurCosmos",
        url: "https://commons.wikimedia.org/wiki/File:Salade_mesclun_et_ch%C3%A8vre_chaud_sur_toasts.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#7C9A3C",
    onAccent: "#14180B",
    ink: "#4C6121",
    tint: "#F3F6EA",
    deep: "#11160A",
    focus: "55% 50%",
  },
});
