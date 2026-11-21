import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "potage-saint-germain",
  title: "Potage Saint-Germain",
  seoTitle: "Potage Saint-Germain aux pois cassés, sans trempage",
  tagline: "Un sachet de pois cassés suffit.",
  description:
    "Potage Saint-Germain pour 4 : 250 g de pois cassés verts cuits sans trempage avec oignon, carotte et lard fumé facultatif, puis mixés. Prêt en 1 h 25.",
  summary:
    "Pour 4 personnes, rincez 250 g de pois cassés verts, sans trempage, et lancez-les à l’eau froide (1,5 l) avec un oignon, une carotte, du thym, du laurier et, si vous voulez, 120 g de lard fumé. Écumez, laissez frémir 50 minutes à 1 heure jusqu’à ce que les pois s’effondrent, mixez, puis salez à la fin. Des croûtons au beurre par-dessus. Comptez 1 h 25 en tout, dont 15 minutes de travail.",
  intro: [
    "Le potage Saint-Germain, c’est la soupe de pois cassés passée au mixeur : un velouté vert-de-gris, épais, qui sent le laurier et, quand on en met, le lard fumé. Il ne coûte presque rien et se fait avec ce qu’il y a dans le placard.",
    "Il rate de deux façons. Trop salé, parce qu’on a salé l’eau au départ alors que le lard rend son sel en cuisant. Ou granuleux, parce qu’on a mixé des pois encore entiers. On attend qu’ils s’écrasent tout seuls contre la paroi, et on sale à la toute fin.",
    "Pas de trempage la veille : les pois cassés n’en ont pas besoin. Un rinçage, de l’eau froide, et le reste se passe à petit feu.",
  ],
  category: "Entrée",
  cuisine: "Française",
  keywords: [
    "potage saint-germain",
    "recette potage saint-germain",
    "soupe de pois cassés",
    "velouté de pois cassés",
    "soupe de pois cassés au lard",
    "pois cassés sans trempage",
    "temps de cuisson pois cassés",
    "soupe de pois cassés végétarienne",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 15, cook: 70 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: ["cocotte ou faitout de 4 l", "écumoire", "mixeur plongeant ou blender", "poêle"],
  ingredients: [
    {
      title: "Le potage",
      items: [
        { qty: 250, unit: "g", name: "pois cassés verts", step: 10 },
        { qty: 1, name: "oignon", plural: "oignons", note: "environ 120 g", step: 1 },
        { qty: 1, name: "carotte", plural: "carottes", note: "environ 100 g", step: 1 },
        {
          qty: 120,
          unit: "g",
          name: "lard fumé",
          note: "en un morceau, sans couenne",
          step: 10,
          optional: true,
        },
        { qty: 20, unit: "g", name: "beurre", step: 5 },
        { qty: 2, unit: "brin", name: "thym", step: 1 },
        { qty: 1, unit: "feuille", name: "laurier", step: 1 },
        { qty: 1.5, unit: "l", name: "eau froide", step: 0.1 },
        { name: "sel fin" },
        { qty: 4, unit: "tour", name: "poivre noir", step: 1 },
      ],
    },
    {
      title: "Les croûtons",
      items: [
        { qty: 2, unit: "tranche", name: "pain de campagne", note: "rassis, environ 100 g", step: 1 },
        { qty: 20, unit: "g", name: "beurre", step: 5 },
      ],
    },
  ],
  method: [
    {
      title: "Le potage",
      steps: [
        {
          title: "Rincer les pois",
          text: "Versez les pois cassés dans une passoire et rincez-les sous l’eau froide en les brassant à la main, jusqu’à ce que l’eau coule claire. Pas de trempage : décortiqués et fendus, ils cuisent très bien sans. Retirez au passage les pois noircis ou les petits cailloux.",
        },
        {
          title: "Préparer les légumes",
          text: "Pelez et émincez l’oignon. Pelez la carotte et coupez-la en rondelles de 5 mm. Si vous mettez du lard, coupez-le en trois gros morceaux : on le repêchera avant de mixer.",
        },
        {
          title: "Faire suer",
          text: "Faites fondre 20 g de beurre dans la cocotte à feu moyen. Ajoutez l’oignon, la carotte et le lard, et remuez 5 minutes, jusqu’à ce que l’oignon devienne translucide sans prendre de couleur.",
          timer: { minutes: 5, label: "Oignon translucide" },
        },
        {
          title: "Lancer à l’eau froide",
          text: "Ajoutez les pois, le thym, le laurier et 1,5 l d’eau froide. Ne salez pas. Portez à ébullition à feu vif, environ 10 minutes : en chauffant doucement avec les pois, l’eau fait remonter la mousse au fur et à mesure.",
          timer: { minutes: 10, label: "Montée à ébullition" },
        },
        {
          title: "Écumer",
          text: "Aux premiers bouillons, une mousse grisâtre couvre la surface. Retirez-la à l’écumoire pendant 3 à 4 minutes, jusqu’à ce qu’il n’en revienne presque plus, puis baissez à feu doux.",
          timer: { minutes: 4, label: "Écumer" },
          tip: "Un frémissement, pas un bouillon : à gros bouillons, les pois débordent et attachent.",
        },
        {
          title: "Laisser frémir",
          text: "Couvrez aux trois quarts et laissez frémir 50 minutes à 1 heure, en raclant le fond à la cuillère toutes les 10 minutes. C’est prêt quand les pois s’écrasent sans résistance contre la paroi et que le bouillon est devenu trouble et épais.",
          timer: { minutes: 50, label: "Pois qui s’effondrent" },
          tip: "Des pois encore entiers au bout d’une heure sont souvent des pois anciens : continuez par tranches de 10 minutes.",
        },
      ],
    },
    {
      title: "Les croûtons et le service",
      steps: [
        {
          title: "Dorer les croûtons",
          text: "Pendant que le potage frémit, coupez le pain en dés de 1 cm. Faites-les dorer dans une poêle avec 20 g de beurre à feu moyen pendant 5 à 6 minutes, en les retournant souvent, jusqu’à ce qu’ils soient blonds et qu’ils sonnent sec. Égouttez-les sur du papier absorbant.",
          timer: { minutes: 6, label: "Croûtons dorés" },
        },
        {
          title: "Mixer",
          text: "Retirez le thym, le laurier et le lard. Mixez le potage pendant 2 minutes au mixeur plongeant, jusqu’à ce qu’il soit lisse et brillant, sans grains contre le palais.",
          timer: { minutes: 2, label: "Mixage" },
        },
        {
          title: "Ajuster et saler",
          text: "S’il est trop épais, allongez-le d’eau chaude, 10 cl à la fois : il doit napper la cuillère et couler lentement. Salez seulement maintenant. Avec le lard, goûtez avant tout, une demi-cuillère à café suffit souvent ; sans lard, comptez environ 1,5 cuillère à café. Poivrez.",
          tip: "Servez-le un peu plus fluide que voulu : il épaissit dans l’assiette.",
        },
        {
          title: "Servir",
          text: "Coupez le lard en petits dés et remettez-le dans le potage ou parsemez-en les bols. Ajoutez les croûtons au dernier moment, à table : dans le potage chaud, ils ramollissent très vite.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi pas de trempage",
      text: "Le trempage sert à réhydrater les légumineuses entières, protégées par leur peau. Les pois cassés sont décortiqués et fendus en deux : l’eau entre directement dans la graine, qui cuit en moins d’une heure sans préparation.",
    },
    {
      title: "Les pois qui s’effondrent",
      text: "En cuisant, l’amidon des pois gonfle et la pectine qui soude les cellules se dissout. La graine perd sa forme, se délite dans l’eau et l’épaissit. C’est pour ça qu’on attend l’effondrement avant de mixer : des pois encore fermes donnent une texture farineuse.",
    },
    {
      title: "Le potage qui prend au frais",
      text: "En refroidissant, l’amidon dissous se réorganise et retient l’eau : c’est la rétrogradation. Le potage du lendemain se tient presque comme une purée. Il retrouve sa texture en le chauffant avec un peu d’eau.",
    },
    {
      title: "Saler à la fin",
      text: "Le lard fumé est salé et rend son sel dans l’eau pendant l’heure de cuisson, pendant que le liquide réduit. Saler au départ, c’est saler sans savoir où l’on arrivera.",
    },
  ],
  tips: [
    "Raclez le fond de la cocotte régulièrement : les pois défaits tombent au fond, attachent, et un goût de brûlé passe dans tout le potage.",
    "Pour un potage très fin, passez-le au chinois après le mixage en appuyant avec une louche.",
    "Une noix de beurre froid ou 2 cuillerées de crème fraîche fouettées dans le potage chaud, hors du feu, lui donnent du brillant.",
    "Gardez les croûtons dans un bol à part : chacun en met au moment de manger, ils restent croustillants.",
  ],
  mistakes: [
    "Saler l’eau au départ avec le lard : le potage finit trop salé. Allongez-le d’eau chaude non salée et d’un peu de crème, puis rectifiez l’épaisseur en le laissant réduire à découvert.",
    "Cuire à gros bouillons : la mousse déborde, les pois attachent au fond. Gardez un frémissement, couvercle entrouvert.",
    "Mixer trop tôt : les pois encore fermes laissent une texture granuleuse. Remettez sur le feu 10 à 15 minutes et mixez de nouveau.",
    "Juger l’épaisseur à la sortie du feu : il épaissit en tiédissant. Arrêtez-vous quand il nappe encore la cuillère en coulant.",
  ],
  variations: [
    {
      title: "Sans lard",
      text: "Faites suer les légumes dans 2 cuillerées à soupe d’huile d’olive au lieu du beurre, ajoutez une branche de céleri émincée et une demi-cuillère à café de paprika fumé avec les pois. Salez à 1,5 cuillère à café environ.",
    },
    {
      title: "Avec une saucisse fumée",
      text: "Remplacez le lard par une saucisse de Morteau ou de Montbéliard, piquée et plongée dans le potage pour les 30 dernières minutes. Retirez-la avant de mixer et servez-la en rondelles dans les bols.",
    },
    {
      title: "En version rustique",
      text: "Ne mixez pas : écrasez seulement les pois au presse-purée, gardez les rondelles de carotte et le lard en dés. Le potage reste plus épais, avec de la mâche.",
    },
    {
      title: "Aux pois cassés jaunes",
      text: "Même poids, même temps de cuisson. Le potage est doré au lieu de vert, avec un goût un peu plus doux.",
    },
  ],
  storage:
    "Le potage se garde 3 jours au réfrigérateur dans une boîte fermée et 3 mois au congélateur, sans les croûtons. Il épaissit beaucoup au froid : réchauffez-le à feu doux en ajoutant de l’eau et en remuant. Ne le recongelez pas. Les croûtons tiennent 2 jours dans une boîte en métal, à température ambiante.",
  pairing:
    "Un blanc sec et simple, comme un mâcon-villages. En plat du soir, une salade verte et un morceau de comté suffisent à faire un repas.",
  faq: [
    {
      q: "Faut-il faire tremper les pois cassés ?",
      a: "Non. Les pois cassés sont déjà décortiqués et fendus, ils cuisent en 50 minutes à 1 heure sans trempage. Rincez-les simplement à l’eau froide pour retirer la poussière et vérifiez qu’il ne reste pas de petits cailloux.",
    },
    {
      q: "Combien de temps faut-il pour cuire des pois cassés ?",
      a: "50 minutes à 1 heure à petit frémissement, départ à l’eau froide. Des pois stockés longtemps peuvent demander 15 minutes de plus. Le bon repère est l’effondrement : ils s’écrasent sans résistance contre la paroi de la cocotte.",
    },
    {
      q: "Pourquoi ma soupe de pois cassés est-elle devenue épaisse comme une purée ?",
      a: "C’est l’amidon des pois qui prend en refroidissant. Rien n’est raté : réchauffez le potage à feu doux en ajoutant de l’eau chaude, 10 cl à la fois, et en remuant, jusqu’à ce qu’il nappe de nouveau la cuillère.",
    },
    {
      q: "Peut-on faire le potage Saint-Germain sans lard ?",
      a: "Oui. Sans lard, il est végétarien et se cuit de la même façon ; il demande seulement plus de sel à la fin, environ 1,5 cuillère à café. Un peu de paprika fumé avec les pois rappelle le goût du lard.",
    },
    {
      q: "Peut-on congeler le potage Saint-Germain ?",
      a: "Oui, 3 mois au congélateur, sans les croûtons. Faites-le décongeler une nuit au réfrigérateur, puis réchauffez-le à feu doux avec un peu d’eau, car il ressort très épais. Une fois décongelé, ne le recongelez pas.",
    },
    {
      q: "Quelle différence entre potage Saint-Germain et soupe de petits pois ?",
      a: "Les pois. Le potage Saint-Germain de tous les jours se fait avec des pois cassés secs, qui donnent un vert grisé et un goût de légume sec. Le même nom sert aussi pour des potages de petits pois frais, plus verts et plus sucrés.",
    },
  ],
  nutrition: {
    calories: 430,
    protein: 22,
    fat: 18,
    saturatedFat: 9,
    carbs: 45,
    sugar: 4,
    fiber: 11,
    sodium: 900,
  },
  annotations: { hero: "croûtons au tout dernier moment", detail: "non mixée, version rustique" },
  images: {
    heroAlt:
      "Bol de potage Saint-Germain lisse couvert de croûtons dorés, avec quelques rondelles de saucisse et des dés de carotte",
    detailAlt:
      "Soupe de pois cassés non mixée, garnie de jambon effiloché et de crème, servie avec des tranches de pain",
    credits: {
      hero: {
        photographer: "Tiia Monto",
        url: "https://commons.wikimedia.org/wiki/File:Pea_soup_with_sausage.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
      },
      detail: {
        photographer: "jeffreyw",
        url: "https://commons.wikimedia.org/wiki/File:Mmm..._split_pea_soup_(8139761028).jpg",
        source: "Wikimedia Commons",
        license: "CC BY 2.0",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#9AAA3C",
    onAccent: "#1B1712",
    ink: "#4E5A12",
    tint: "#F3F5E2",
    deep: "#13160A",
    focus: "42% 50%",
  },
});
