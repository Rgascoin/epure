import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "avocat-crevettes",
  title: "Avocat aux crevettes",
  seoTitle: "Avocat aux crevettes, sauce cocktail maison en 25 min",
  tagline: "La vieille gloire des réveillons, assumée.",
  description:
    "Avocat aux crevettes pour 4 : deux avocats mûrs à point, 200 g de crevettes roses et une sauce cocktail maison montée au fouet. Prêt en 25 minutes.",
  summary:
    "Pour 4 personnes, montez une mayonnaise avec 1 jaune d’œuf et 8 cl d’huile, relevez-la de ketchup, d’un trait de cognac et de piment d’Espelette, puis enrobez-en 200 g de crevettes décortiquées. Ouvrez 2 avocats mûrs au dernier moment, citronnez-les et garnissez chaque moitié. Comptez 25 minutes en tout, sans aucune cuisson.",
  intro: [
    "L’avocat aux crevettes a régné sur les tables de fête, puis on l’a trouvé ringard. On le ressort quand même, parce qu’une demi-coque d’avocat fondant, des crevettes bien froides et une sauce rose qui pique juste ce qu’il faut, ça ouvre un repas sans fatiguer personne. Rien à cuire.",
    "Il rate de deux façons. Un avocat pas assez mûr, ferme et sans goût, qu’aucune sauce ne rattrape. Ou un avocat ouvert trop tôt, qui grisaille sur la planche pendant qu’on décortique.",
    "Préparez donc la sauce et les crevettes en avance, gardez-les au froid, et n’ouvrez les avocats qu’au moment de passer à table, pinceau de citron à la main.",
  ],
  category: "Entrée",
  cuisine: "Française",
  keywords: [
    "avocat crevette",
    "avocat aux crevettes",
    "recette avocat crevette",
    "avocat crevette sauce cocktail",
    "sauce cocktail maison",
    "avocat farci aux crevettes",
    "entrée de noël facile",
    "comment savoir si un avocat est mûr",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 25, cook: 0 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Hiver"],
  tags: ["noel"],
  equipment: ["un fouet et un bol à fond rond", "un couteau d’office", "un pinceau de cuisine", "du papier absorbant"],
  ingredients: [
    {
      title: "La sauce cocktail",
      items: [
        { qty: 1, name: "jaune d’œuf", plural: "jaunes d’œufs", note: "très frais, à température ambiante", step: 1 },
        { qty: 1, unit: "cac", name: "moutarde de Dijon", step: 1 },
        { name: "sel fin" },
        { qty: 8, unit: "cl", name: "huile de tournesol", note: "ou de colza", step: 1 },
        { qty: 1.5, unit: "cas", name: "ketchup", note: "ou 1 cac de concentré de tomate", step: 0.5 },
        { qty: 1, unit: "cac", name: "cognac", note: "il reste cru", step: 0.5, optional: true },
        { qty: 1, unit: "pincee", name: "piment d’Espelette", note: "ou 3 gouttes de Tabasco", step: 1 },
      ],
    },
    {
      title: "La garniture",
      items: [
        {
          qty: 200,
          unit: "g",
          name: "crevettes roses cuites",
          note: "décortiquées, ou 450 g entières",
          step: 10,
        },
        { qty: 2, name: "avocat", plural: "avocats", note: "mûrs, de préférence Hass", step: 1 },
        { qty: 1, name: "citron jaune", plural: "citrons jaunes", note: "pour le jus", step: 1 },
        { qty: 4, unit: "brin", name: "aneth", note: "ou quelques brins de ciboulette", step: 1, optional: true },
      ],
    },
  ],
  method: [
    {
      title: "La sauce cocktail",
      steps: [
        {
          title: "Monter la mayonnaise",
          text: "Calez un bol sur un torchon humide. Fouettez le jaune d’œuf, la moutarde et une pincée de sel, puis versez l’huile goutte à goutte en fouettant sans vous arrêter. Dès que le mélange épaissit, passez à un mince filet. La mayonnaise est prête quand elle est ferme, brillante, et qu’elle tient sur le fouet.",
          tip: "Les vingt premières gouttes décident de tout : tant que le mélange n’a pas épaissi, l’huile arrive une goutte à la fois.",
        },
        {
          title: "Relever la sauce",
          text: "Incorporez le ketchup, le cognac et le piment d’Espelette. Goûtez : la sauce doit être rose saumon, ronde, avec une chaleur qui arrive après coup. Rectifiez le sel, couvrez et gardez au réfrigérateur jusqu’au service.",
        },
      ],
    },
    {
      title: "La garniture",
      steps: [
        {
          title: "Préparer les crevettes",
          text: "Si elles sont entières, retirez la tête puis la carapace. Fendez le dos à la pointe du couteau et ôtez le petit boyau noir quand il y en a un. Mettez de côté 4 belles crevettes pour le dessus, coupez les plus grosses en deux et épongez le tout dans du papier absorbant.",
          tip: "Des crevettes bien sèches gardent la sauce nappante. Mouillées, elles la détendent et elle finit au fond de l’assiette.",
        },
        {
          title: "Lier crevettes et sauce",
          text: "Mélangez les crevettes coupées avec les deux tiers de la sauce, sans écraser. Couvrez et remettez au réfrigérateur avec le reste de sauce : tout doit être bien froid au moment de garnir.",
        },
      ],
    },
    {
      title: "Au moment de servir",
      steps: [
        {
          title: "Ouvrir les avocats",
          text: "Coupez chaque avocat en deux dans la longueur en faisant tourner la lame autour du noyau, puis faites pivoter les deux moitiés. Retirez le noyau à la cuillère. Badigeonnez aussitôt la chair de jus de citron au pinceau. Si une moitié roule, ôtez une fine lamelle de peau dessous pour qu’elle tienne à plat.",
          tip: "Pas de lame plantée dans le noyau avec l’avocat dans la paume : le couteau ripe, et c’est la main qui prend.",
        },
        {
          title: "Garnir et servir",
          text: "Remplissez le creux de chaque demi-avocat de crevettes en sauce, en formant un dôme qui déborde un peu sur la chair. Posez une crevette entière dessus, une pincée d’Espelette et un brin d’aneth. Servez tout de suite, le reste de sauce à part, avec des petites cuillères pour creuser la chair.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi l’avocat brunit",
      text: "Une fois la chair coupée, une enzyme de l’avocat, la polyphénol oxydase, transforme au contact de l’oxygène ses composés phénoliques en pigments bruns. L’acidité du citron freine cette enzyme sans la bloquer tout à fait : elle fait gagner du temps, d’où l’intérêt d’ouvrir les avocats en dernier.",
    },
    {
      title: "Ce qui tient une mayonnaise",
      text: "Le jaune d’œuf apporte de la lécithine, une molécule qui s’accroche à la fois à l’eau et à l’huile. Le fouet découpe l’huile en gouttelettes minuscules que la lécithine enrobe et empêche de se ressouder. Si l’huile arrive trop vite, les gouttes restent grosses, se regroupent, et la sauce tranche.",
    },
    {
      title: "Un fruit qui mûrit après la cueillette",
      text: "L’avocat ne ramollit pas sur l’arbre : il mûrit une fois cueilli. C’est un fruit climactérique, qui produit de l’éthylène, l’hormone qui déclenche son mûrissement. Enfermé dans un sac en papier avec une pomme ou une banane, qui en dégagent aussi, il avance plus vite.",
    },
  ],
  tips: [
    "Pour choisir les avocats, pressez doucement près du pédoncule : la chair doit céder un peu sans garder la marque du doigt. Retirez ce petit bout de tige : vert dessous, l’avocat est à point ; brun, il est trop avancé.",
    "Achetez les avocats trois ou quatre jours avant le repas et laissez-les mûrir hors du réfrigérateur. Une fois à point, ils patientent encore deux jours au frais.",
    "Des crevettes entières à décortiquer vous-même ont souvent plus de goût que celles vendues déjà décortiquées. Comptez un peu plus du double du poids net.",
    "Avec du concentré de tomate à la place du ketchup, mettez-en moitié moins : la sauce est moins sucrée et plus franche en tomate.",
    "Servez le reste de sauce dans une coupelle : à table, chacun en rajoute à mesure qu’il creuse l’avocat.",
  ],
  mistakes: [
    "Ouvrir les avocats une heure avant le repas : la surface grisaille, même citronnée. Si c’est fait, grattez la fine couche brune à la cuillère juste avant de garnir, la chair dessous est intacte.",
    "Verser l’huile trop vite : la mayonnaise tranche et devient liquide. Mettez une cuillère à café de moutarde dans un bol propre et ajoutez-y la sauce ratée cuillère par cuillère, en fouettant : elle reprend.",
    "Laisser les crevettes humides : leur eau dilue la sauce, qui coule dans l’assiette. Épongez-les toujours avant de les mélanger.",
    "Prendre un avocat encore ferme en se disant que ça passera : il reste dur et fade, et le citron n’y change rien. Mieux vaut le laisser mûrir un jour de plus et servir autre chose.",
  ],
  variations: [
    {
      title: "Chair mélangée à la garniture",
      text: "Évidez les demi-avocats à la cuillère en laissant 5 mm de chair contre la peau. Coupez la chair en dés, mélangez-la avec les crevettes, 2 tomates cerises en quartiers et la sauce, puis remplissez les coques à ras bord.",
    },
    {
      title: "Avec une mayonnaise en pot",
      text: "Remplacez la mayonnaise maison par 6 cas de mayonnaise du commerce et passez directement à l’assaisonnement. La sauce est prête en 2 minutes, un peu plus sucrée : ajoutez quelques gouttes de citron.",
    },
    {
      title: "Plus légère",
      text: "Allongez la sauce avec 3 cas de fromage blanc ou de yaourt grec. Elle devient plus fraîche et un peu moins tenue ; servez-la très froide.",
    },
    {
      title: "Au pamplemousse",
      text: "Ajoutez aux crevettes les suprêmes d’un pamplemousse rose coupés en trois, bien égouttés. Leur amertume réveille la sauce ; gardez le jus pour un autre usage.",
    },
  ],
  storage:
    "La sauce cocktail se garde 24 heures au réfrigérateur, bien couverte, puisqu’elle contient un jaune d’œuf cru. Les crevettes cuites tiennent 1 à 2 jours au frais. Un avocat ouvert ne se garde pas : garnissez-le et servez-le aussitôt.",
  pairing:
    "Un blanc sec et vif, comme un muscadet sur lie ou un picpoul-de-pinet, ou une coupe de champagne brut si l’avocat ouvre le réveillon. Du pain de seigle beurré à côté.",
  faq: [
    {
      q: "Comment savoir si un avocat est mûr ?",
      a: "Il cède légèrement sous le pouce, surtout près du pédoncule, sans rester marqué. Retirez ce petit bout de tige : vert dessous, l’avocat est prêt ; brun, il est trop avancé. Pour le Hass, la peau qui fonce est un bon indice, pas pour les variétés à peau lisse.",
    },
    {
      q: "Peut-on préparer l’avocat aux crevettes à l’avance ?",
      a: "Oui, en partie. La sauce et les crevettes se préparent jusqu’à 24 heures avant et attendent au réfrigérateur, mélangées ou non. Les avocats s’ouvrent au moment de servir : même citronnée, leur chair brunit vite à l’air.",
    },
    {
      q: "La mayonnaise maison convient-elle à une femme enceinte ?",
      a: "Non, pas avec un jaune d’œuf cru. Pour les femmes enceintes, les jeunes enfants, les personnes âgées ou immunodéprimées, prenez une mayonnaise du commerce, faite avec des œufs pasteurisés. Pour les autres, utilisez un œuf très frais, gardez la sauce au réfrigérateur et consommez-la dans les 24 heures.",
    },
    {
      q: "Le cognac de la sauce cocktail est-il cuit ?",
      a: "Non, il est ajouté cru, donc l’alcool reste dans la sauce. Une cuillère à café pour quatre, c’est peu, mais supprimez-le pour les enfants et les femmes enceintes : quelques gouttes de jus de citron le remplacent.",
    },
    {
      q: "Quelles crevettes choisir pour un avocat crevettes ?",
      a: "Des crevettes roses cuites de taille moyenne, entières ou décortiquées. Les grosses gambas se coupent mal et dominent l’avocat ; les crevettes grises ont beaucoup de goût, mais il en faut près d’un kilo pour 200 g décortiqués.",
    },
    {
      q: "Comment empêcher l’avocat de noircir ?",
      a: "Citronnez la chair dès qu’elle est coupée et ouvrez les avocats en tout dernier. Le citron ralentit le brunissement sans l’arrêter. Garder le noyau dans une moitié ne protège que la partie qu’il touche.",
    },
  ],
  nutrition: {
    calories: 380,
    protein: 13,
    fat: 35,
    saturatedFat: 4,
    carbs: 3,
    sugar: 2,
    fiber: 4,
    sodium: 470,
  },
  annotations: { hero: "les crevettes entières vont dessus", detail: "il doit céder sous le pouce" },
  images: {
    heroAlt:
      "Deux demi-avocats garnis à ras bord d’une farce crémeuse aux crevettes, coiffés de crevettes roses entières, sur une assiette blanche",
    detailAlt: "Un avocat mûr coupé en deux sur une ardoise, la chair vert tendre, le noyau encore dans une moitié",
    credits: {
      hero: {
        photographer: "Luca Nebuloni",
        url: "https://commons.wikimedia.org/wiki/File:Shrimp_and_Avocado_Salad_(13329194373).jpg",
        source: "Wikimedia Commons",
        license: "CC BY 2.0",
      },
      detail: { photographer: "Foodie Factor", url: "https://www.pexels.com/photo/sliced-avocado-fruit-557659/" },
    },
  },
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  hero,
  detail,
  theme: {
    accent: "#E0703A",
    onAccent: "#1B1712",
    ink: "#9C421A",
    tint: "#FBEEE6",
    deep: "#1A0E08",
    focus: "40% 50%",
  },
});
