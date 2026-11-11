import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "riz-au-lait",
  title: "Riz au lait",
  seoTitle: "Riz au lait crémeux à la vanille, cuit à feu doux",
  tagline: "Celui qu’on mange tiède, à la casserole.",
  description:
    "Un riz au lait crémeux pour 6 : 100 g de riz rond cuit 45 minutes à feu très doux dans 1 l de lait entier vanillé, sucré à la fin.",
  summary:
    "Pour 6 personnes, faites frémir 1 l de lait entier avec une gousse de vanille, versez 100 g de riz rond non rincé et laissez cuire 40 à 45 minutes à feu très doux, en remuant toutes les 5 minutes. Sucrez avec 70 g de sucre hors du feu, puis laissez reposer 15 minutes. Comptez 1 h 15 en tout pour le servir tiède, et 2 heures de plus au réfrigérateur pour le servir froid.",
  intro: [
    "Le riz au lait, c’est du riz rond qui cuit très lentement dans du lait vanillé, jusqu’à ce que les grains soient fondants et que le lait soit devenu crème. Il n’y a presque rien dedans, ce qui laisse peu de place à l’à-peu-près.",
    "Ce qui le fait rater, c’est l’impatience. À feu vif, le lait attache au fond, prend un goût de brûlé et déborde. À feu très doux, avec une cuillère en bois qui racle le fond toutes les 5 minutes, il ne peut pas arriver grand-chose.",
    "Retirez-le quand il vous semble encore trop liquide : il épaissit beaucoup en refroidissant. Et gardez le sucre pour la fin.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "riz au lait",
    "recette riz au lait",
    "riz au lait crémeux",
    "riz au lait à la vanille",
    "riz au lait de grand-mère",
    "quel riz pour riz au lait",
    "temps de cuisson riz au lait",
    "riz au lait froid",
  ],
  diet: ["vegetarian", "glutenFree"],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 10, cook: 50, rest: 15 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  tags: ["fete-des-grands-meres", "hiver"],
  equipment: ["casserole à fond épais de 3 l", "cuillère en bois", "ramequins ou bocaux, pour le servir froid"],
  ingredients: [
    {
      items: [
        { qty: 1, unit: "l", name: "lait entier", step: 0.25 },
        { qty: 1, unit: "gousse", name: "vanille", note: "fendue et grattée", step: 1 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 100, unit: "g", name: "riz rond", note: "dit riz dessert, non rincé", step: 5 },
        { qty: 70, unit: "g", name: "sucre en poudre", step: 5 },
      ],
    },
  ],
  method: [
    {
      title: "Le riz au lait",
      steps: [
        {
          title: "Chauffer le lait vanillé",
          text: "Dans la casserole, mettez le lait, le sel, les graines de vanille et la gousse grattée. Portez doucement à frémissement, sans vous éloigner : le lait monte d’un coup.",
        },
        {
          title: "Verser le riz",
          text: "Versez le riz en pluie, sans le rincer, en remuant. Baissez aussitôt le feu au minimum : on ne doit voir que quelques bulles éclater de temps en temps à la surface.",
          tip: "Si votre plus petit feu reste trop vif, glissez un diffuseur ou décalez la casserole sur le bord du brûleur.",
        },
        {
          title: "Cuire très doucement",
          text: "Laissez cuire 40 à 45 minutes à découvert, en remuant toutes les 5 minutes avec la cuillère en bois et en raclant bien le fond. C’est prêt quand les grains sont tendres jusqu’au cœur et baignent dans une crème épaisse mais encore coulante.",
          timer: { minutes: 45, label: "Cuisson du riz" },
          tip: "En fin de cuisson, le lait a réduit et attache plus facilement : remuez plus souvent.",
        },
        {
          title: "Sucrer hors du feu",
          text: "Retirez la casserole du feu, ajoutez le sucre et mélangez jusqu’à ce qu’il ait fondu. Retirez la gousse de vanille.",
        },
        {
          title: "Laisser reposer",
          text: "Couvrez et laissez reposer 15 minutes. Le riz finit de boire le lait et la texture se resserre. Servez tiède, tel quel.",
          timer: { minutes: 15, label: "Repos du riz au lait" },
        },
        {
          title: "Ou le servir froid",
          text: "Pour le servir froid, répartissez-le dans des ramequins, laissez-le refroidir et mettez-le au réfrigérateur dans les 2 heures qui suivent la cuisson. Comptez au moins 2 heures de froid avant de le manger.",
          timer: { minutes: 120, label: "Riz au lait au réfrigérateur" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Le riz rond fait la crème",
      text: "Le riz rond est riche en amylopectine, un amidon qui se disperse dans le liquide en cuisant et le lie. C’est lui qui transforme le lait en crème. Un riz long, plus riche en amylose, garde des grains séparés. Rincer le riz enlèverait une partie de cet amidon de surface.",
    },
    {
      title: "Pourquoi le feu doit rester bas",
      text: "Chauffées trop fort, les protéines du lait se déposent au fond et attachent. En surface, la peau qui se forme retient la vapeur et fait déborder la casserole. Un frémissement à peine visible évite les deux.",
    },
    {
      title: "Le sucre à la fin",
      text: "Le sucre retient l’eau et retarde le gonflement de l’amidon. Ajouté au début, il ralentit la cuisson et les grains restent fermes au cœur, même après 45 minutes.",
    },
    {
      title: "Il épaissit en refroidissant",
      text: "En refroidissant, l’amidon dispersé dans le lait forme un gel. Un riz au lait qui semble juste à point dans la casserole devient compact une fois froid, d’où l’intérêt de l’arrêter encore coulant.",
    },
  ],
  tips: [
    "Prenez une casserole plus grande qu’il ne semble nécessaire : le lait monte vite, et une large surface l’aide à réduire régulièrement.",
    "Un riz au lait froid trop épais se détend avec 2 ou 3 cuillères à soupe de lait froid, mélangées juste avant de servir.",
    "Pour un goût plus rond, ajoutez une cuillère à soupe de crème fraîche épaisse en même temps que le sucre.",
    "Rincez et séchez la gousse de vanille après usage, puis glissez-la dans un bocal de sucre : il prendra son parfum en quelques jours.",
  ],
  mistakes: [
    "Un feu trop fort : le lait attache, déborde et prend un goût de brûlé. S’il a attaché, versez le riz dans une casserole propre sans racler le fond.",
    "Un riz long ou rincé : les grains restent séparés dans un lait clair. Il faut du riz rond, versé tel quel.",
    "Une cuisson poussée jusqu’à ce qu’il soit épais : une fois froid, il se tient en bloc. Arrêtez-le encore coulant.",
    "Le sucre ajouté au début : le riz reste ferme au cœur et la cuisson s’allonge. Sucrez hors du feu.",
  ],
  variations: [
    {
      title: "Aux agrumes",
      text: "Faites infuser avec la vanille le zeste d’une orange non traitée, prélevé en larges rubans à l’économe. Retirez-les avec la gousse, au moment de sucrer.",
    },
    {
      title: "Avec un caramel au beurre salé",
      text: "Faites un caramel à sec avec 80 g de sucre, ajoutez hors du feu 30 g de beurre demi-sel puis 8 cl de crème liquide chaude. Versez-le en filet sur le riz au lait tiède.",
    },
    {
      title: "Au four, comme la teurgoule normande",
      text: "Mélangez à froid 1 l de lait, 90 g de riz rond, 90 g de sucre et une demi-cuillère à café de cannelle dans un plat en terre. Faites cuire 4 à 5 heures à 140 °C sans remuer : une croûte brune se forme sur le dessus.",
    },
  ],
  storage:
    "Comme tout riz cuit, mettez-le au réfrigérateur moins de 2 heures après la cuisson, couvert, et mangez-le dans les 24 heures. Il se sert froid tel quel, ou réchauffé doucement avec un peu de lait.",
  pairing: "Une compote de pommes ou de coings, ou quelques fruits rouges pour l’acidité.",
  faq: [
    {
      q: "Quel riz utiliser pour un riz au lait ?",
      a: "Du riz rond, souvent vendu sous le nom de riz dessert. Son amidon se disperse dans le lait et le rend crémeux. Le riz pour risotto, comme l’arborio, donne un résultat proche. Évitez les riz longs et le basmati : leurs grains restent séparés.",
    },
    {
      q: "Faut-il rincer le riz pour un riz au lait ?",
      a: "Non. Le rinçage enlève l’amidon de surface, celui qui lie le lait. Versez le riz tel quel dans le lait frémissant.",
    },
    {
      q: "Combien de temps cuire un riz au lait ?",
      a: "40 à 45 minutes à feu très doux pour 100 g de riz rond dans 1 l de lait, puis 15 minutes de repos à couvert. Goûtez un grain : il doit être tendre jusqu’au cœur, sans rien de crayeux au centre.",
    },
    {
      q: "Pourquoi mon riz au lait est-il trop épais ?",
      a: "Il a cuit un peu trop longtemps, ou il a refroidi : l’amidon prend en gel au froid. Détendez-le avec quelques cuillères à soupe de lait, froid si vous le servez froid, chaud si vous le réchauffez.",
    },
    {
      q: "Combien de temps se conserve un riz au lait ?",
      a: "24 heures au réfrigérateur. Comme tout riz cuit, il doit y entrer moins de 2 heures après la cuisson, car une bactérie du riz, Bacillus cereus, se multiplie à température ambiante. Couvrez-le pour qu’il ne prenne pas les odeurs.",
    },
    {
      q: "Peut-on faire un riz au lait avec du lait demi-écrémé ?",
      a: "Oui, mais il sera moins crémeux et un peu plus long à épaissir. Pour compenser, ajoutez 10 cl de crème liquide en même temps que le sucre.",
    },
  ],
  nutrition: {
    calories: 215,
    protein: 7,
    fat: 6,
    saturatedFat: 4,
    carbs: 33,
    sugar: 20,
    fiber: 0,
    sodium: 100,
  },
  annotations: {
    hero: "les grains de vanille, bien visibles",
    detail: "quelques bulles, pas plus",
  },
  images: {
    heroAlt:
      "Riz au lait vanillé sur une assiette blanche, nappé d’un filet de caramel et de quelques morceaux de biscuit",
    detailAlt: "Riz au lait en cours de cuisson dans une casserole en inox, grains gonflés dans un lait crémeux",
    credits: {
      hero: {
        photographer: "Moïse Bedel",
        url: "https://commons.wikimedia.org/w/index.php?curid=196108119",
        source: "Wikimedia Commons",
        license: "CC BY 4.0",
      },
      detail: {
        photographer: "Rudi Riet from Washington, DC, United States",
        url: "https://commons.wikimedia.org/wiki/File:Rice_pudding_cooking.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 2.0",
      },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#C9955A",
    onAccent: "#1B1712",
    ink: "#7A5226",
    tint: "#F8F1E6",
    deep: "#1C140C",
    focus: "50% 50%",
  },
});
