import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "cassoulet",
  title: "Cassoulet",
  seoTitle: "Cassoulet maison au confit de canard et saucisse de Toulouse",
  tagline: "Commencez la veille, avec les haricots.",
  description:
    "Cassoulet pour 8 : haricots blancs trempés une nuit, couenne, échine, saucisse de Toulouse et confit de canard, puis 3 h de four en cassant la croûte.",
  summary:
    "Pour 8 personnes, faites tremper 800 g de haricots blancs une nuit, faites-les bouillir 10 minutes avec 250 g de couenne, puis cuire 1 h 30 avec les aromates. Dorez 600 g d’échine de porc, 600 g de saucisse de Toulouse et 4 cuisses de confit de canard du commerce, montez le tout en cassole et laissez cuire 3 h à 150 °C en cassant deux fois la croûte. Comptez 12 h de trempage, puis 5 h 45 le jour même, dont 45 minutes de travail.",
  intro: [
    "Le cassoulet, c’est des haricots blancs qui cuisent longtemps avec du porc et du canard, jusqu’à devenir fondants, presque crémeux, sous une croûte brune. Il se prépare sur deux jours et nourrit une grande tablée.",
    "Le confit de canard, on l’achète en bocal, comme la plupart des gens qui le font chez eux : faire confire soi-même des cuisses prend une journée de plus. Sa graisse sert ensuite à tout dorer.",
    "Ce qui le rate : des haricots encore fermes quand ils partent au four, ou un plat qui sèche. Cuisez-les jusqu’à ce qu’ils soient tendres, gardez tout leur jus, et arrosez à chaque fois que vous cassez la croûte.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "cassoulet",
    "recette cassoulet",
    "cassoulet maison",
    "cassoulet au confit de canard",
    "cassoulet traditionnel",
    "cassoulet saucisse de toulouse",
    "haricots pour cassoulet",
    "temps de cuisson cassoulet",
    "réchauffer un cassoulet",
  ],
  servings: 8,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 45, cook: 285, rest: 735 },
  difficulty: "Intermédiaire",
  cost: "€€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: [
    "grand saladier pour le trempage",
    "faitout de 6 l",
    "grande sauteuse",
    "cassole en terre de 30 cm ou plat à four profond de 5 l",
  ],
  ingredients: [
    {
      title: "Les haricots",
      items: [
        {
          qty: 800,
          unit: "g",
          name: "haricots blancs secs",
          note: "lingots ou tarbais, de la dernière récolte",
          step: 50,
        },
        { qty: 250, unit: "g", name: "couenne de porc fraîche", note: "demandée au boucher", step: 50 },
        { qty: 1, name: "oignon jaune", plural: "oignons jaunes", step: 1 },
        { qty: 1, name: "clou de girofle", plural: "clous de girofle", step: 1, fixed: true },
        { qty: 1, name: "carotte", plural: "carottes", step: 1 },
        { qty: 2, unit: "gousse", name: "ail", note: "épluchées", step: 1 },
        {
          qty: 1,
          name: "bouquet garni",
          plural: "bouquets garnis",
          note: "thym, laurier, persil",
          step: 1,
          fixed: true,
        },
        { qty: 3, unit: "l", name: "eau", note: "pour la cuisson, en plus de celle du trempage", step: 0.5 },
        { qty: 2, unit: "cac", name: "sel fin", step: 0.5 },
      ],
    },
    {
      title: "Les viandes",
      items: [
        {
          qty: 4,
          name: "cuisse de confit de canard",
          plural: "cuisses de confit de canard",
          note: "achetées en bocal ou en boîte, avec leur graisse",
          step: 1,
        },
        { qty: 4, unit: "cas", name: "graisse de canard", note: "prise dans le bocal de confit", step: 1 },
        { qty: 600, unit: "g", name: "échine de porc désossée", note: "en morceaux de 5 cm", step: 50 },
        { qty: 600, unit: "g", name: "saucisse de Toulouse", note: "en 8 tronçons", step: 75 },
        { qty: 1, name: "oignon jaune", plural: "oignons jaunes", note: "émincé", step: 1 },
        { qty: 2, unit: "gousse", name: "ail", note: "hachées", step: 1 },
        { name: "poivre noir" },
      ],
    },
  ],
  method: [
    {
      title: "La veille",
      steps: [
        {
          title: "Faire tremper les haricots",
          text: "Rincez les haricots, mettez-les dans un grand saladier et couvrez-les de trois fois leur volume d’eau froide. Laissez-les tremper 12 heures, au frais. Le lendemain, ils ont doublé de volume et leur peau est lisse.",
          timer: { minutes: 720, label: "Trempage des haricots" },
        },
      ],
    },
    {
      title: "Les haricots",
      steps: [
        {
          title: "Blanchir haricots et couenne",
          text: "Égouttez les haricots, mettez-les dans le faitout avec la couenne et couvrez largement d’eau froide. Portez à ébullition et laissez bouillir à gros bouillons 10 minutes, puis égouttez et rincez. Coupez la couenne en carrés de 4 cm.",
          timer: { minutes: 10, label: "Ébullition des haricots" },
          tip: "Ces 10 minutes à pleine ébullition ne sont pas négociables : elles détruisent une protéine toxique des haricots secs.",
        },
        {
          title: "Cuire les haricots",
          text: "Remettez haricots et couenne dans le faitout avec les 3 l d’eau, l’oignon piqué du clou de girofle, la carotte, l’ail et le bouquet garni. Laissez frémir sans couvrir 1 h à 1 h 30, en salant au bout de 45 minutes. Ils sont prêts quand un haricot s’écrase entre la langue et le palais, la peau encore entière.",
          timer: { minutes: 90, label: "Cuisson des haricots" },
          tip: "Ne remuez pas à la cuillère, les haricots éclatent : secouez le faitout par les anses.",
        },
      ],
    },
    {
      title: "Les viandes",
      steps: [
        {
          title: "Sortir le confit",
          text: "Pendant que les haricots cuisent, posez le bocal ou la boîte de confit ouvert 10 minutes dans une casserole d’eau chaude, jusqu’à ce que la graisse soit liquide. Sortez les cuisses, coupez-les en deux à l’articulation et gardez la graisse.",
          timer: { minutes: 10, label: "Graisse du confit fondue" },
        },
        {
          title: "Dorer le porc",
          text: "Préchauffez le four à 150 °C. Chauffez 2 cuillères à soupe de graisse de canard dans la sauteuse à feu vif et faites dorer l’échine sur toutes les faces 10 minutes, en deux fois. Elle finira de cuire au four. Réservez.",
          timer: { minutes: 10, label: "Échine dorée" },
        },
        {
          title: "Dorer saucisses et confit",
          text: "Dans la même graisse, faites dorer les tronçons de saucisse 5 minutes, puis les morceaux de confit côté peau 5 minutes, et réservez. Baissez le feu, faites fondre l’oignon émincé et l’ail haché 5 minutes, sans brûler. Au total, 15 minutes.",
          timer: { minutes: 15, label: "Saucisses et confit" },
        },
      ],
    },
    {
      title: "Au four",
      steps: [
        {
          title: "Monter le cassoulet",
          text: "Égouttez les haricots en gardant tout le jus de cuisson, retirez carotte, oignon et bouquet garni. Tapissez le fond de la cassole de couenne, côté gras contre la terre, puis alternez haricots, oignon fondu et viandes en finissant par des haricots. Versez du jus jusqu’à affleurer, poivrez et arrosez de 2 cuillères à soupe de graisse.",
        },
        {
          title: "Former la première croûte",
          text: "Enfournez à 150 °C pour 1 heure, sans couvrir. Une croûte brune et sèche se forme en surface, et le jus bouillonne doucement sur les bords.",
          timer: { minutes: 60, label: "Première croûte" },
        },
        {
          title: "Casser la croûte",
          text: "Enfoncez la croûte dans les haricots du dos d’une cuillère, sur toute la surface. Si le dessus paraît sec, ajoutez 2 à 3 louches de jus de cuisson. Remettez au four 45 minutes.",
          timer: { minutes: 45, label: "Deuxième croûte" },
        },
        {
          title: "Casser une deuxième fois",
          text: "Recommencez : cassez la nouvelle croûte, ajoutez du jus si les haricots ne baignent plus à moitié, et enfournez encore 45 minutes.",
          timer: { minutes: 45, label: "Troisième croûte" },
        },
        {
          title: "Laisser gratiner",
          text: "Laissez la dernière croûte se former 30 minutes sans y toucher. Vérifiez la cuisson d’un tronçon de saucisse en le coupant : la chair doit être grise à cœur, sans trace rosée, ou atteindre 70 °C au thermomètre.",
          timer: { minutes: 30, label: "Dernière croûte" },
        },
        {
          title: "Laisser reposer",
          text: "Sortez le cassoulet et laissez-le reposer 15 minutes avant de servir : le jus épaissit et se répartit entre les haricots.",
          timer: { minutes: 15, label: "Repos du cassoulet" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Dix minutes d’ébullition",
      text: "Les haricots secs, rouges surtout mais aussi blancs, contiennent une lectine, la phytohémagglutinine, qui provoque de violents troubles digestifs. Elle est détruite par une ébullition franche d’au moins 10 minutes. Une cuisson douce qui n’atteint jamais 100 °C ne suffit pas à l’éliminer.",
    },
    {
      title: "La couenne fait le moelleux",
      text: "La couenne est riche en collagène. Pendant les longues heures de cuisson, il se transforme en gélatine qui se dissout dans le jus. C’est elle qui rend le cassoulet onctueux et qui fait prendre le jus en gelée au réfrigérateur.",
    },
    {
      title: "Pourquoi casser la croûte",
      text: "En surface, l’amidon des haricots, la gélatine et la graisse sèchent et brunissent sous l’effet des réactions de Maillard. Enfoncer cette croûte la mêle aux haricots, qui prennent son goût grillé, et laisse une nouvelle surface brunir à son tour.",
    },
  ],
  tips: [
    "Préparez-le la veille du repas : réchauffé, il est plus fondu et le jus a eu le temps de se lier.",
    "Achetez des haricots de la dernière récolte. Les vieux haricots restent fermes même après 2 heures de cuisson.",
    "Une cassole large et peu profonde donne plus de surface, donc plus de croûte. Dans une cocotte haute, les haricots du fond restent pâles.",
    "Gardez tout le jus de cuisson des haricots dans une casserole au chaud : c’est lui qu’on rajoute à chaque croûte, jamais de l’eau froide.",
  ],
  mistakes: [
    "Enfourner des haricots encore fermes : au four, ils cuisent lentement et restent farineux. Ils doivent être tendres avant le montage.",
    "Laisser le cassoulet sécher : les haricots du dessus durcissent et la croûte brûle. Arrosez de jus chaud à chaque fois que vous cassez la croûte.",
    "Couvrir le plat de chapelure pour faire une croûte plus vite : elle sèche et devient sableuse. La vraie croûte vient de l’amidon et de la gélatine du plat lui-même.",
    "Saler l’eau des haricots comme celle des pâtes : saucisse, confit et couenne apportent déjà beaucoup de sel. Goûtez le jus avant d’ajouter quoi que ce soit.",
  ],
  variations: [
    {
      title: "Au confit d’oie",
      text: "Remplacez les cuisses de canard par 4 cuisses de confit d’oie, et la graisse de canard par celle de l’oie. Les morceaux sont plus gros : coupez-les en deux, comme les cuisses de canard.",
    },
    {
      title: "Avec de l’agneau",
      text: "Remplacez la moitié de l’échine par 300 g d’épaule d’agneau désossée en morceaux de 5 cm, dorée de la même façon pendant 8 minutes. Le goût est plus marqué, la cuisson au four ne change pas.",
    },
    {
      title: "En cocotte en fonte",
      text: "Sans cassole, prenez la cocotte la plus large que vous ayez et laissez-la ouverte. La croûte se forme un peu plus lentement : comptez 15 minutes de plus avant de la casser la première fois.",
    },
  ],
  storage:
    "Laissez-le tiédir puis mettez-le au réfrigérateur dans les 2 heures : il se garde 3 jours, couvert. Il se congèle 3 mois en portions, à décongeler une nuit au réfrigérateur, sans jamais le recongeler. Réchauffez-le au four à 150 °C, avec 200 ml d’eau ou de jus, jusqu’à ce qu’il bouillonne et atteigne 74 °C au centre.",
  pairing:
    "Un rouge du Sud-Ouest qui a de la mâche : un minervois, un corbières, un cahors ou un madiran. Et une salade verte bien vinaigrée à côté.",
  faq: [
    {
      q: "Faut-il faire tremper les haricots pour un cassoulet ?",
      a: "Oui, 12 heures dans trois fois leur volume d’eau froide. Réhydratés, ils cuisent de façon régulière, plus vite, et éclatent moins. Sans trempage, il faut au moins une heure de cuisson de plus et la texture est inégale.",
    },
    {
      q: "Quels haricots choisir pour un cassoulet ?",
      a: "Des haricots blancs qui deviennent fondants sans se défaire : lingots ou tarbais. Des haricots blancs ordinaires marchent aussi, avec une texture un peu moins crémeuse. Prenez-les de la dernière récolte, les vieux restent fermes.",
    },
    {
      q: "Peut-on préparer le cassoulet la veille ?",
      a: "Oui, et c’est même conseillé. Laissez-le refroidir, gardez-le au réfrigérateur, puis réchauffez-le 1 heure au four à 150 °C avec 200 ml d’eau. Il doit bouillonner et atteindre 74 °C au centre, à cause du confit.",
    },
    {
      q: "Peut-on faire un cassoulet avec des haricots en conserve ?",
      a: "Oui, en dépannage : environ 2 kg de haricots blancs égouttés pour 800 g de secs. Faites alors cuire la couenne 1 heure à part dans 1 l d’eau, et servez-vous de cette eau comme jus. Le cassoulet est moins fondant et la cuisson au four suffit à 2 heures.",
    },
    {
      q: "Faut-il mettre de la chapelure sur un cassoulet ?",
      a: "Non, pas dans cette version. La croûte se forme seule avec l’amidon des haricots, la gélatine de la couenne et la graisse de canard. La chapelure donne une surface plus sèche, qui croustille sans avoir le goût grillé du jus.",
    },
    {
      q: "Combien de temps se conserve un cassoulet ?",
      a: "3 jours au réfrigérateur, mis au frais dans les 2 heures qui suivent la cuisson. Au congélateur, 3 mois en portions. Une fois décongelé, il se réchauffe une seule fois et ne se recongèle pas.",
    },
  ],
  nutrition: {
    calories: 1060,
    protein: 71,
    fat: 63,
    saturatedFat: 21,
    carbs: 51,
    sugar: 4,
    fiber: 16,
    sodium: 1600,
  },
  annotations: {
    hero: "la croûte, cassée deux fois",
    detail: "le jus affleure, jamais plus",
  },
  images: {
    heroAlt:
      "Cassoulet gratiné dans une cassole en terre cuite, avec une croûte brune et dorée sur les haricots blancs",
    detailAlt:
      "Cassoulet dans une cassole en terre, saucisses et viandes posées sur des haricots blancs fondants dans leur jus",
    credits: {
      hero: {
        photographer: "Jacklee",
        url: "https://commons.wikimedia.org/wiki/File:Cassoulet_at_Les_Cinq_Sens,_Avignon,_France_-_20140714-01.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
      detail: {
        photographer: "BrokenSphere",
        url: "https://commons.wikimedia.org/w/index.php?curid=3580400",
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
    accent: "#CD6A3C",
    onAccent: "#1B1712",
    ink: "#8A3A18",
    tint: "#F8ECE5",
    deep: "#1E0F0A",
    focus: "62% 55%",
  },
});
