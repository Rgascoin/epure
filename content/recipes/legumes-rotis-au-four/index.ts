import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "legumes-rotis-au-four",
  title: "Légumes rôtis au four",
  seoTitle: "Légumes rôtis au four, bien dorés sur les bords",
  tagline: "Deux plaques valent mieux qu’une.",
  description:
    "Légumes rôtis au four : 1,7 kg de carottes, panais, butternut, betteraves et oignons rouges, 40 minutes à 220 °C sur deux plaques pour qu’ils dorent.",
  summary:
    "Pour 6 personnes, coupez 1,7 kg de légumes racines à la taille qui convient à chacun : 2 cm pour les betteraves, 2 à 3 cm pour les carottes et le panais, 3 cm pour la butternut, des quartiers pour les oignons rouges. Enrobez-les de 4 cas d’huile d’olive, de sel et de thym, étalez-les sur deux plaques sans qu’ils se touchent et rôtissez-les 35 à 45 minutes à 220 °C, en les retournant une fois. Comptez 1 h 05 en tout.",
  intro: [
    "Une plaque de légumes rôtis, c’est ce qu’on fait en novembre des carottes, du panais, d’un morceau de courge et des deux betteraves qui traînent au fond du bac à légumes. Au four très chaud, leurs sucres caramélisent sur les bords, et ils prennent un goût qu’ils n’ont jamais à la vapeur.",
    "Le raté le plus courant : des légumes mous et pâles qui baignent dans leur jus. Ils étaient trop serrés. Un légume est fait surtout d’eau, et s’il n’a pas la place de la laisser s’échapper, il cuit à l’étouffée.",
    "Il faut donc deux plaques, des morceaux qui ne se touchent pas, et une taille adaptée à chaque légume. Plus il est dur, plus on le coupe petit, pour que tout soit prêt en même temps.",
  ],
  category: "Accompagnement",
  cuisine: "Française",
  keywords: [
    "légumes rôtis au four",
    "légumes racines rôtis",
    "recette légumes rôtis",
    "légumes d’hiver au four",
    "carottes panais rôtis",
    "butternut rôtie au four",
    "temps de cuisson légumes au four",
    "plaque de légumes rôtis",
  ],
  diet: ["vegetarian", "vegan", "glutenFree"],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 25, cook: 40 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["automne", "hiver"],
  equipment: [
    "deux plaques de four d’environ 40 × 30 cm",
    "papier cuisson",
    "grand saladier",
    "spatule large",
  ],
  ingredients: [
    {
      items: [
        { qty: 400, unit: "g", name: "carottes", step: 50 },
        { qty: 300, unit: "g", name: "panais", step: 50 },
        {
          qty: 450,
          unit: "g",
          name: "courge butternut",
          note: "pesée épluchée et épépinée",
          step: 50,
        },
        { qty: 300, unit: "g", name: "betteraves crues", step: 50 },
        { qty: 2, name: "oignon rouge", plural: "oignons rouges", step: 1 },
        { qty: 4, unit: "cas", name: "huile d’olive", step: 1 },
        { qty: 1, unit: "cac", name: "sel fin", step: 0.5 },
        { name: "poivre du moulin" },
        { qty: 6, unit: "brin", name: "thym", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "Les légumes",
      steps: [
        {
          title: "Préchauffer à 220 °C",
          text: "Allumez le four à 220 °C, ou 200 °C en chaleur tournante, avec une grille au tiers inférieur et une autre au tiers supérieur. Couvrez les deux plaques de papier cuisson.",
        },
        {
          title: "Couper selon la dureté",
          text: "Épluchez tous les légumes. Coupez les betteraves, les plus dures, en cubes de 2 cm. Taillez les carottes et le panais en tronçons de 2 à 3 cm, en fendant d’abord les gros bouts en deux. Coupez la butternut en cubes de 3 cm et les oignons en six quartiers, sans retirer la base qui les tient.",
          tip: "Lavez et épongez bien les légumes avant de les couper. Une surface humide doit d’abord sécher avant de pouvoir dorer.",
        },
        {
          title: "Enrober d’huile",
          text: "Dans le saladier, mélangez carottes, panais, butternut et oignons avec 3 cas d’huile, le sel, du poivre et les feuilles de 4 brins de thym. Retournez-les à la main jusqu’à ce que chaque morceau brille. Enrobez les betteraves à part, avec la dernière cas d’huile.",
          tip: "Les betteraves en dernier et à part : mélangées aux autres, elles teintent tout en rose.",
        },
        {
          title: "Étaler en une couche",
          text: "Répartissez les légumes sur les deux plaques, en une seule couche, avec 1 à 2 cm entre chaque morceau. Posez-les sur leur face la plus plate. Regroupez les betteraves dans un coin et glissez les 2 brins de thym restants entre les légumes.",
          tip: "Si les morceaux se touchent, c’est qu’il manque une plaque. C’est le point qui fait la différence entre rôti et bouilli.",
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Rôtir sans toucher",
          text: "Enfournez les deux plaques et laissez rôtir 20 minutes sans ouvrir le four. Les bords des oignons et de la courge doivent commencer à brunir.",
          timer: { minutes: 20, label: "Première face" },
        },
        {
          title: "Retourner et intervertir",
          text: "Retournez les morceaux à la spatule, puis échangez la place des plaques : celle du haut passe en bas. Remettez au four 15 à 25 minutes. Les légumes sont prêts quand ils sont dorés sur deux faces et qu’un couteau traverse un cube de betterave sans résistance.",
          timer: { minutes: 20, label: "Seconde face" },
        },
        {
          title: "Servir chaud",
          text: "Goûtez, ajoutez un tour de poivre et un peu de sel si besoin, et servez directement sur la plaque ou dans un plat chaud. Retirez les tiges de thym en servant.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Où se fait le goût",
      text: "Carottes, panais, courge et oignons contiennent des sucres. Une fois la surface sèche, elle dépasse largement 100 °C : les sucres caramélisent et la réaction de Maillard entre sucres et protéines brunit les bords. C’est ce qui donne le goût grillé et un peu sucré, absent d’un légume cuit à l’eau.",
    },
    {
      title: "Pourquoi l’espace compte",
      text: "Les légumes racines sont faits à 80 ou 90 % d’eau. Serrés, ils libèrent une vapeur qui ne s’échappe pas : la surface reste humide, bloquée autour de 100 °C, et rien ne dore. Espacés, l’eau s’évapore aussitôt et la surface peut chauffer bien au-delà.",
    },
    {
      title: "Une taille par légume",
      text: "Tous les légumes ne cuisent pas au même rythme. La betterave et la carotte, denses et fermes, mettent plus longtemps à s’attendrir que la courge ou l’oignon. En coupant les plus durs plus petits, on égalise les temps de cuisson sur la plaque.",
    },
  ],
  tips: [
    "Une plaque en métal nu dore mieux que le papier cuisson, mais les légumes y accrochent davantage. Si vous vous en passez, huilez légèrement la plaque.",
    "Avec un potimarron à la place de la butternut, inutile de l’éplucher : sa peau devient tendre au four.",
    "Coupez les légumes la veille si vous voulez gagner du temps, et gardez-les au réfrigérateur dans une boîte fermée, betteraves à part. Assaisonnez-les au dernier moment.",
    "Les restes font une très bonne soupe : mixez-les avec du bouillon chaud, environ 50 cl pour 500 g de légumes.",
  ],
  mistakes: [
    "Tout entasser sur une seule plaque : les légumes cuisent dans leur jus et restent mous. Si vous n’avez qu’une plaque, cuisez en deux fois ou prévoyez moins de légumes.",
    "Couper tous les légumes à la même taille : la courge s’effondre pendant que les betteraves restent dures.",
    "Ouvrir le four toutes les cinq minutes pour remuer : la température chute et les morceaux n’ont pas le temps de colorer. Une seule fois suffit.",
    "Mettre trop peu d’huile : les légumes sèchent et prennent une peau dure au lieu de dorer. Chaque morceau doit briller avant d’aller au four.",
  ],
  variations: [
    {
      title: "Au miel et à la moutarde",
      text: "Mélangez 1 cas de miel et 1 cac de moutarde à l’ancienne. Badigeonnez-en les légumes au moment de les retourner. Le miel colore vite : surveillez les 10 dernières minutes.",
    },
    {
      title: "En plat complet",
      text: "Ajoutez 240 g de pois chiches cuits et bien égouttés sur les plaques au moment de retourner les légumes, puis 150 g de feta émiettée à la sortie du four. Comptez 4 parts au lieu de 6. La recette reste végétarienne mais n’est plus végétalienne.",
    },
    {
      title: "Aux épices",
      text: "Remplacez le thym par 1 cac de cumin en poudre et 1 cac de paprika fumé, mélangés à l’huile. Servez avec un yaourt grec citronné.",
    },
  ],
  storage:
    "Ils se gardent 3 jours au réfrigérateur dans une boîte fermée, une fois refroidis. Réchauffez-les 10 minutes à 200 °C sur une plaque. Ils se congèlent 3 mois, mais ramollissent : gardez-les alors pour une soupe.",
  pairing:
    "Avec un poulet rôti, un rôti de porc, des saucisses, un filet de poisson ou un bol de céréales pour un repas sans viande.",
  faq: [
    {
      q: "À quelle température faire rôtir des légumes au four ?",
      a: "220 °C, ou 200 °C en chaleur tournante. En dessous de 200 °C, les légumes cuisent mais dorent mal : ils perdent leur eau trop lentement et finissent plus mous que rôtis.",
    },
    {
      q: "Combien de temps cuire des légumes racines au four ?",
      a: "35 à 45 minutes à 220 °C pour des morceaux de 2 à 3 cm, en les retournant une fois à mi-cuisson. La betterave est la plus lente : quand un couteau la traverse sans résistance, le reste est prêt.",
    },
    {
      q: "Faut-il éplucher la courge butternut pour la rôtir ?",
      a: "Non, ce n’est pas obligatoire. Sa peau se mange une fois rôtie, mais elle reste un peu ferme. Épluchée, la courge est plus fondante. Avec un potimarron, la peau devient tendre et on la garde toujours.",
    },
    {
      q: "Pourquoi mes légumes rôtis sont mous ?",
      a: "Parce qu’ils étaient trop serrés sur la plaque, ou que le four n’était pas assez chaud. Les légumes ont cuit dans leur propre vapeur. Espacez-les de 1 à 2 cm, prenez deux plaques et préchauffez bien le four à 220 °C.",
    },
    {
      q: "Peut-on préparer des légumes rôtis à l’avance ?",
      a: "Oui. Coupez-les la veille et gardez-les au réfrigérateur dans une boîte fermée. Une fois rôtis, ils se réchauffent 10 minutes à 200 °C, mais ils sont meilleurs à la sortie du four.",
    },
  ],
  nutrition: {
    calories: 195,
    protein: 3,
    fat: 9,
    saturatedFat: 1,
    carbs: 25,
    sugar: 14,
    fiber: 7,
    sodium: 400,
  },
  annotations: {
    hero: "chaque légume coupé à sa taille",
    detail: "la courge dore sur sa face plate",
  },
  images: {
    heroAlt: "Légumes racines rôtis au four, betteraves, navets, carottes et oignons dorés sur les bords, parsemés de thym",
    detailAlt: "Tranches de courge rôties au four sur papier cuisson, bords caramélisés et herbes séchées",
    credits: {
      hero: {
        photographer: "Gloria Cabada-Leman",
        url: "https://commons.wikimedia.org/wiki/File:Neon_root_veggies_(roasted_beets,_turnips,_rutabaga,_carrots_and_onions)_(6893015819).jpg",
        source: "Wikimedia Commons",
        license: "CC BY 2.0",
      },
      detail: {
        photographer: "Alesia Kozik",
        url: "https://www.pexels.com/photo/baked-food-on-black-tray-6065696/",
        source: "Pexels",
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
    ink: "#8A4512",
    tint: "#FBEFE3",
    deep: "#1D0F07",
    focus: "50% 50%",
  },
});
