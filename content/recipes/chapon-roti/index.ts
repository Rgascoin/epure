import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "chapon-roti",
  title: "Chapon rôti au four",
  seoTitle: "Chapon rôti au four : temps de cuisson par kilo et jus",
  tagline: "Le four fait presque tout le travail.",
  description:
    "Un chapon de 3,5 kg rôti à 160 °C sur un flanc, l’autre, puis le dos, environ 45 minutes par kilo, jusqu’à 74 °C dans la cuisse. Pour 8 personnes.",
  summary:
    "Pour 8 personnes, comptez un chapon de 3,5 kg prêt à cuire, beurré sous la peau et rôti à 160 °C environ 45 minutes par kilo : 45 minutes sur chaque cuisse, 45 minutes sur le dos, puis 20 minutes à 220 °C pour dorer la peau. Il est cuit quand la sonde affiche 74 °C au cœur de la cuisse, puis il repose 30 minutes sous une feuille d’aluminium. Comptez 4 h 40 en tout, dont 1 h de mise à température et 30 minutes de travail.",
  intro: [
    "Le chapon est un coq castré et engraissé longtemps, plus gros et plus gras qu’un poulet, qu’on réserve aux fêtes. Il se cuisine comme un poulet rôti, mais plus lentement : un four modéré, du beurre, du jus et du temps.",
    "Ce qui le fait rater, c’est le blanc qui sèche pendant que les cuisses finissent de cuire. Pour l’éviter, on le fait rôtir couché sur un flanc, puis sur l’autre, et seulement à la fin sur le dos. Les cuisses prennent la chaleur du plat, le blanc reste à l’abri dans le jus.",
    "Et on se fie au thermomètre plutôt qu’à la montre : 74 °C au cœur de la cuisse, sans toucher l’os.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "chapon rôti",
    "recette chapon",
    "chapon au four",
    "temps de cuisson chapon",
    "cuisson chapon par kilo",
    "chapon de noël",
    "comment cuire un chapon",
    "température à cœur chapon",
  ],
  servings: 8,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 30, cook: 160, rest: 90 },
  difficulty: "Intermédiaire",
  cost: "€€€",
  season: ["Hiver"],
  tags: ["noel"],
  equipment: [
    "plat à rôtir à peine plus grand que le chapon",
    "thermomètre à sonde",
    "ficelle de cuisine",
    "grande cuillère pour arroser",
    "papier aluminium",
    "passoire fine",
  ],
  ingredients: [
    {
      title: "Le chapon",
      items: [
        { qty: 1, name: "chapon", plural: "chapons", note: "fermier, 3,5 kg prêt à cuire", step: 1, fixed: true },
        { qty: 2, unit: "cac", name: "sel fin", step: 0.5 },
        { name: "poivre noir du moulin" },
        { qty: 1, name: "oignon", plural: "oignons", note: "coupé en quatre", step: 1 },
        { qty: 4, unit: "gousse", name: "ail", note: "en chemise", step: 1 },
        { qty: 4, unit: "brin", name: "thym", step: 1 },
        { qty: 2, unit: "feuille", name: "laurier", step: 1 },
        { qty: 60, unit: "g", name: "beurre doux", note: "mou", step: 5 },
      ],
    },
    {
      title: "Le jus",
      items: [{ qty: 40, unit: "cl", name: "bouillon de volaille", note: "20 cl au départ, 20 cl pour déglacer", step: 5 }],
    },
  ],
  method: [
    {
      title: "Préparer",
      steps: [
        {
          title: "Sortir le chapon",
          text: "Sortez le chapon du réfrigérateur 1 h avant de le cuire, pas plus, et retirez son emballage. Épongez-le soigneusement, dedans et dehors, avec du papier absorbant : une peau sèche dore mieux.",
          timer: { minutes: 60, label: "Chapon à température" },
        },
        {
          title: "Garnir l’intérieur",
          text: "Préchauffez le four à 160 °C, chaleur statique. Salez et poivrez l’intérieur du chapon, puis glissez-y l’oignon, les gousses d’ail, le thym et le laurier. Ficelez les cuisses ensemble pour qu’il garde sa forme.",
        },
        {
          title: "Beurrer sous la peau",
          text: "Glissez les doigts entre la peau et les filets, en partant du cou, pour la décoller sans la déchirer. Répartissez dessous un tiers du beurre, puis massez le reste sur toute la peau. Salez et poivrez l’extérieur.",
          tip: "Le beurre sous la peau nourrit le blanc pendant toute la cuisson. Sur une grosse volaille, c’est le geste qui change le plus le résultat.",
        },
      ],
    },
    {
      title: "Rôtir",
      steps: [
        {
          title: "Cuire sur un flanc",
          text: "Couchez le chapon sur une cuisse dans le plat et versez 20 cl de bouillon au fond. Enfournez pour 45 minutes, en l’arrosant de son jus deux fois en cours de route.",
          timer: { minutes: 45, label: "Premier flanc" },
        },
        {
          title: "Cuire sur l’autre flanc",
          text: "Retournez-le sur l’autre cuisse, en vous aidant de deux grandes cuillères pour ne pas percer la peau. Arrosez et remettez 45 minutes au four, en arrosant encore deux fois. Si le fond attache, ajoutez quelques cuillères d’eau.",
          timer: { minutes: 45, label: "Second flanc" },
        },
        {
          title: "Finir sur le dos",
          text: "Posez-le sur le dos, filets vers le haut. Arrosez et poursuivez 45 minutes à 160 °C, en arrosant une fois à mi-parcours.",
          timer: { minutes: 45, label: "Sur le dos" },
          tip: "Couché sur le flanc, le chapon chauffe ses cuisses au contact du plat pendant que le blanc baigne à moitié dans le jus. Les cuisses atteignent 74 °C sans que les filets se dessèchent.",
        },
        {
          title: "Dorer la peau",
          text: "Montez le four à 220 °C et laissez encore 20 minutes, sans arroser cette fois, jusqu’à ce que la peau soit d’un brun doré et croustille sous l’ongle.",
          timer: { minutes: 20, label: "Peau dorée à 220 °C" },
        },
        {
          title: "Vérifier la cuisson",
          text: "Plantez la sonde dans la partie la plus épaisse de la cuisse, sans toucher l’os : elle doit afficher 74 °C. Le jus qui s’écoule quand on pique l’articulation est clair, sans trace rosée. Sinon, remettez le chapon au four et mesurez de nouveau un peu plus tard.",
          tip: "74 °C au cœur de la cuisse, c’est la règle pour toute volaille. On mesure là parce que c’est la partie qui cuit le plus lentement.",
        },
      ],
    },
    {
      title: "Reposer et servir",
      steps: [
        {
          title: "Laisser reposer",
          text: "Posez le chapon sur une planche, couvrez-le d’une feuille d’aluminium sans serrer et laissez-le reposer 30 minutes. La chair se détend et perd moins de jus à la découpe.",
          timer: { minutes: 30, label: "Repos du chapon" },
        },
        {
          title: "Faire le jus",
          text: "Pendant ce temps, inclinez le plat et retirez à la cuillère l’essentiel de la graisse. Posez le plat sur feu moyen, ou versez les sucs dans une casserole, ajoutez le reste du bouillon et grattez les sucs à la cuillère en bois. Laissez réduire 5 minutes, jusqu’à ce que le jus nappe légèrement la cuillère, puis filtrez.",
          timer: { minutes: 5, label: "Réduction du jus" },
        },
        {
          title: "Découper",
          text: "Retirez la ficelle. Détachez les cuisses en coupant la peau entre cuisse et filet, puis en écartant jusqu’à l’articulation. Séparez pilon et haut de cuisse. Levez chaque filet le long du bréchet et taillez-le en tranches épaisses. Servez avec le jus bien chaud.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi 74 °C dans la cuisse",
      text: "À 74 °C à cœur, les bactéries comme les salmonelles sont détruites presque instantanément dans la volaille. On mesure dans la cuisse parce que c’est la partie la plus épaisse et la plus lente à chauffer : si elle y est, le reste aussi.",
    },
    {
      title: "Le blanc et la cuisse ne cuisent pas pareil",
      text: "Le filet est maigre : vers 70 °C, ses fibres se contractent et expulsent leur eau, il sèche. La cuisse est riche en collagène, qui a besoin de chaleur prolongée pour se changer en gélatine et devenir tendre. Rôtir sur les flancs donne de l’avance aux cuisses.",
    },
    {
      title: "Une peau qui dore à la fin",
      text: "La peau sèche et beurrée brunit par la réaction de Maillard, entre protéines et sucres, qui s’accélère nettement au-dessus de 140 °C. Le passage final à 220 °C arrive quand la chair est presque cuite et que la peau a perdu son eau.",
    },
  ],
  tips: [
    "Demandez au volailler un chapon prêt à cuire, vidé et flambé. Comptez 3,5 à 4 kg pour 8 à 10 personnes.",
    "Pour un chapon d’un autre poids, gardez la règle de 45 minutes par kilo à 160 °C, réparties à parts égales entre les deux flancs et le dos, puis 20 minutes à 220 °C.",
    "Une sonde à affichage déporté, laissée dans la cuisse, évite d’ouvrir le four pour vérifier.",
    "Gardez la graisse retirée du plat : elle sert à rôtir des pommes de terre le lendemain.",
  ],
  mistakes: [
    "Un chapon enfourné à la sortie du réfrigérateur cuit mal à cœur : l’extérieur est prêt bien avant la cuisse. Laissez-le 1 h à température ambiante, pas plus.",
    "Un four trop chaud dès le départ brûle la peau et sèche le blanc avant que les cuisses soient cuites. Si la peau colore trop vite, couvrez-la d’une feuille d’aluminium.",
    "Découper le chapon dès la sortie du four fait couler le jus sur la planche. Les 30 minutes de repos n’abîment rien : il reste chaud sous l’aluminium.",
    "Dans un plat trop grand, les sucs brûlent au lieu de caraméliser. Prenez un plat à peine plus grand que le chapon et ajoutez un peu d’eau si le fond noircit.",
  ],
  variations: [
    {
      title: "Farci aux marrons",
      text: "Remplissez le chapon d’une farce de 400 g de chair à saucisse, 200 g de marrons cuits émiettés et 1 échalote hachée. Comptez 30 minutes de cuisson en plus et vérifiez que le centre de la farce atteint lui aussi 74 °C.",
    },
    {
      title: "Beurre aux herbes",
      text: "Mélangez le beurre avec 2 cuillères à soupe de persil et d’estragon hachés et 1 gousse d’ail râpée avant de le glisser sous la peau. La cuisson ne change pas.",
    },
    {
      title: "Une poularde pour 6",
      text: "Une poularde de 2,5 kg suffit pour 6. Même méthode : 30 minutes sur chaque flanc et sur le dos, puis 20 minutes à 220 °C, toujours jusqu’à 74 °C dans la cuisse.",
    },
  ],
  storage:
    "Mettez les restes au réfrigérateur dans les 2 heures, désossés, dans une boîte fermée : ils se gardent 2 à 3 jours. Ils se congèlent 2 mois ; une fois décongelés, ne les recongelez pas. Réchauffez-les dans un peu de jus jusqu’à ce qu’ils soient bien chauds à cœur.",
  pairing:
    "Une purée de céleri ou des pommes de terre rôties dans la graisse du plat, des marrons poêlés, et un bourgogne rouge ou un blanc du Jura.",
  faq: [
    {
      q: "Quel temps de cuisson pour un chapon de 3,5 kg ?",
      a: "2 h 35 environ, soit 45 minutes par kilo : 45 minutes sur chaque flanc et 45 minutes sur le dos à 160 °C, puis 20 minutes à 220 °C pour dorer. La seule vraie preuve reste la sonde : 74 °C au cœur de la cuisse.",
    },
    {
      q: "Quelle température à cœur pour un chapon ?",
      a: "74 °C, mesurés dans la partie la plus épaisse de la cuisse, sans toucher l’os. C’est la température de sécurité pour toute volaille. Le blanc est cuit plus tôt, d’où l’intérêt de la cuisson sur les flancs.",
    },
    {
      q: "Un chapon, c’est pour combien de personnes ?",
      a: "8 à 10 personnes pour un chapon de 3,5 à 4 kg prêt à cuire. Comptez environ 400 g de volaille crue par convive, os compris.",
    },
    {
      q: "Faut-il arroser le chapon pendant la cuisson ?",
      a: "Oui, deux fois par tranche de 45 minutes, avec le jus du plat. La peau reste souple, le blanc sèche moins, et les sucs du fond se dissolvent pour le jus. Arrêtez pendant les 20 dernières minutes à 220 °C, pour que la peau croustille.",
    },
    {
      q: "Faut-il couvrir le chapon au four ?",
      a: "Non, sauf si la peau colore trop vite. Dans ce cas, posez une feuille d’aluminium sur le dessus pendant la cuisson sur le dos et retirez-la pour les 20 dernières minutes à 220 °C.",
    },
    {
      q: "Peut-on cuire le chapon la veille ?",
      a: "Non, pas entier : il sèche au réchauffage et refroidit trop lentement pour être conservé dans de bonnes conditions. Vous pouvez en revanche le garnir et le beurrer la veille, le garder au réfrigérateur sous film, et le sortir 1 h avant de l’enfourner.",
    },
  ],
  nutrition: { calories: 540, protein: 48, fat: 38, saturatedFat: 13, carbs: 1, sugar: 0.5, fiber: 0, sodium: 650 },
  annotations: { hero: "45 minutes par kilo à 160 °C", detail: "74 °C dans la cuisse, pas moins" },
  images: {
    heroAlt: "Chapon rôti doré dans un plat en verre, entouré de citrons, d’oignons rouges, de carottes et de grenades",
    detailAlt: "Chapon rôti en cours de découpe sur une table de fête, entouré de ses garnitures",
    credits: {
      hero: { photographer: "Tim Douglas", url: "https://www.pexels.com/photo/grilled-whole-chicken-with-vegetables-and-fruits-in-glass-bowl-6210876/" },
      detail: { photographer: "Kaboompics.com", url: "https://www.pexels.com/photo/foods-on-the-table-5718025/" },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#C47A2C",
    onAccent: "#1B1209",
    ink: "#8A4E12",
    tint: "#FAF0E3",
    deep: "#1A1008",
    focus: "50% 50%",
  },
});
