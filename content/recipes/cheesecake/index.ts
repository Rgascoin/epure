import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "cheesecake",
  title: "Cheesecake",
  seoTitle: "Cheesecake new-yorkais au Philadelphia, sans fissure",
  tagline: "À faire la veille, sans tricher.",
  description:
    "Un cheesecake new-yorkais au Philadelphia, cuit doucement au bain-marie à 160 °C puis pris une nuit au frais : une texture dense et une surface sans fissure.",
  summary:
    "Pour un cheesecake de 12 parts, tassez 200 g de biscuits mixés avec 80 g de beurre fondu dans un moule de 23 cm et cuisez 12 minutes à 160 °C. Battez à vitesse lente 900 g de Philadelphia, 200 g de sucre, 20 g de farine, 4 œufs et 150 g de crème aigre, puis faites cuire 65 à 75 minutes au bain-marie. Laissez-le 1 heure dans le four éteint, 2 heures à température ambiante, puis au moins 8 heures au réfrigérateur.",
  intro: [
    "Le cheesecake new-yorkais est un gâteau dense et crémeux : du fromage frais type Philadelphia, du sucre, des œufs et un peu de crème aigre, sur une base de biscuits au beurre. La liste est courte. Tout se joue à la cuisson et au refroidissement.",
    "On le cuit doucement, au bain-marie à 160 °C, et on l’arrête quand le centre tremble encore comme une gelée. Il finit de prendre en refroidissant, d’abord dans le four éteint, puis une nuit au réfrigérateur. Prévoyez-le donc la veille.",
    "Ce qui peut rater : une surface fendue, une texture granuleuse, un cœur trop mou. Les trois viennent presque toujours d’un four trop chaud, d’un appareil trop battu ou d’un démoulage trop pressé.",
  ],
  category: "Dessert",
  cuisine: "Américaine",
  keywords: [
    "cheesecake",
    "recette cheesecake",
    "cheesecake new york",
    "cheesecake philadelphia",
    "cheesecake au four",
    "cheesecake bain-marie",
    "cheesecake facile",
    "cheesecake sans fissure",
    "cheesecake crémeux",
  ],
  diet: ["vegetarian"],
  servings: 12,
  servingsLabel: { one: "part", other: "parts" },
  times: { prep: 30, cook: 85, rest: 660 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Toute l’année"],
  equipment: [
    "moule à charnière de 23 cm",
    "papier aluminium large et papier sulfurisé",
    "grand plat à rôtir (pour le bain-marie)",
    "batteur électrique ou robot, utilisé à vitesse lente",
    "maryse",
    "bouilloire",
    "thermomètre de cuisson (facultatif)",
  ],
  ingredients: [
    {
      title: "Base biscuitée",
      items: [
        { qty: 80, unit: "g", name: "beurre doux", note: "fondu, un peu pour le moule", step: 5 },
        { qty: 200, unit: "g", name: "biscuits digestive", note: "ou petits-beurre", step: 10 },
      ],
    },
    {
      title: "Appareil au fromage",
      items: [
        {
          qty: 900,
          unit: "g",
          name: "cream cheese",
          note: "type Philadelphia nature, entier, à température ambiante",
          step: 50,
        },
        { qty: 200, unit: "g", name: "sucre en poudre", step: 10 },
        { qty: 20, unit: "g", name: "farine T55", step: 5 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 4, name: "œuf", plural: "œufs", note: "à température ambiante", step: 1 },
        {
          qty: 150,
          unit: "g",
          name: "crème aigre",
          note: "ou crème fraîche épaisse, à température ambiante",
          step: 10,
        },
        { qty: 2, unit: "cac", name: "extrait de vanille", step: 0.5 },
        {
          qty: 1,
          name: "citron jaune non traité",
          plural: "citrons jaunes non traités",
          note: "zeste râpé et 1 c. à soupe de jus",
          step: 1,
        },
      ],
    },
    {
      title: "Coulis (facultatif)",
      items: [
        {
          qty: 300,
          unit: "g",
          name: "fruits rouges",
          note: "framboises, myrtilles, frais ou surgelés",
          step: 10,
          optional: true,
        },
        { qty: 40, unit: "g", name: "sucre en poudre", step: 5, optional: true },
      ],
    },
  ],
  method: [
    {
      title: "La base",
      steps: [
        {
          title: "Préparer le moule",
          text: "Préchauffez le four à 160 °C, chaleur statique. Faites fondre le beurre et badigeonnez-en les parois du moule au pinceau, puis posez un disque de papier sulfurisé au fond. Enveloppez l’extérieur du moule de trois couches de papier aluminium large, bien remontées sur les côtés : c’est ce qui empêche l’eau du bain-marie d’entrer.",
        },
        {
          title: "Cuire la base",
          text: "Mixez les biscuits en sable fin, mélangez-les avec le reste du beurre fondu et tassez au fond du moule avec le dos d’un verre. Enfournez 12 minutes : la base est légèrement dorée et sent le biscuit grillé. Laissez-la refroidir pendant que vous préparez l’appareil.",
          timer: { minutes: 12, label: "Cuisson de la base" },
        },
      ],
    },
    {
      title: "L’appareil",
      steps: [
        {
          title: "Lisser le fromage",
          text: "Dans un grand saladier, battez le cream cheese à vitesse lente avec le sucre, la farine et le sel, jusqu’à ce que ce soit parfaitement lisse. Arrêtez le batteur deux ou trois fois pour racler le fond et les parois à la maryse : c’est là que se cachent les grumeaux.",
          tip: "Le fromage doit être à température ambiante, sorti du frigo 2 heures avant. Froid, il fait des grumeaux qu’on n’arrive plus à rattraper, et on est tenté de battre plus fort.",
        },
        {
          title: "Ajouter les œufs",
          text: "Ajoutez les œufs un par un, toujours à vitesse lente, en attendant que chacun soit absorbé avant le suivant. Arrêtez dès que le mélange est homogène : on veut une crème lisse, pas une mousse.",
        },
        {
          title: "Finir l’appareil",
          text: "Incorporez à la maryse la crème aigre, la vanille, le zeste et 1 c. à soupe de jus de citron. Versez sur la base refroidie, lissez, puis tapotez le moule sur le plan de travail pour faire remonter les bulles d’air.",
        },
      ],
    },
    {
      title: "Cuisson et repos",
      steps: [
        {
          title: "Cuire au bain-marie",
          text: "Posez le moule dans le plat à rôtir et versez de l’eau bouillante jusqu’à mi-hauteur du moule. Enfournez 65 à 75 minutes à 160 °C : les bords sont pris et légèrement bombés, la surface est mate et ivoire, et le centre tremble encore comme une gelée sur 8 à 10 cm quand vous secouez doucement le plat.",
          timer: { minutes: 70, label: "Cuisson au bain-marie" },
          tip: "Avec un thermomètre, arrêtez la cuisson quand le centre atteint 65 °C. Au-delà de 70 °C, le cheesecake risque de se fendre et de devenir granuleux.",
        },
        {
          title: "Refroidir dans le four",
          text: "Éteignez le four, coincez une cuillère en bois dans la porte pour l’entrouvrir et laissez le cheesecake 1 heure à l’intérieur, dans son bain-marie. Le centre finit de prendre doucement, sans choc de température.",
          timer: { minutes: 60, label: "Repos dans le four éteint" },
        },
        {
          title: "Décoller et laisser tiédir",
          text: "Sortez le moule de l’eau, retirez l’aluminium et passez une lame fine entre le gâteau et la paroi. Laissez refroidir 2 heures sur une grille, jusqu’à ce que le moule soit froid au toucher.",
          timer: { minutes: 120, label: "Refroidissement" },
          tip: "En refroidissant, le cheesecake se rétracte. Décollé des parois, il se resserre librement au lieu de se fendre au milieu.",
        },
        {
          title: "Laisser prendre au froid",
          text: "Couvrez le moule d’une assiette, sans toucher la surface, et laissez-le au réfrigérateur au moins 8 heures, idéalement une nuit. Il devient dense et se tranche net.",
          timer: { minutes: 480, label: "Prise au froid" },
        },
        {
          title: "Préparer le coulis",
          text: "Si vous faites le coulis, chauffez les fruits rouges avec le sucre à feu moyen pendant 5 minutes, jusqu’à ce qu’ils éclatent et que le jus devienne sirupeux. Passez-le au tamis si vous n’aimez pas les pépins de framboise, puis gardez-le au frais.",
          timer: { minutes: 5, label: "Coulis" },
        },
        {
          title: "Démouler et servir",
          text: "Ouvrez la charnière et faites glisser le cheesecake sur un plat à l’aide du papier. Coupez-le au grand couteau trempé dans l’eau chaude et essuyé entre chaque part. Servez bien froid, avec le coulis sur le dessus ou à part.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi le bain-marie",
      text: "L’eau ne dépasse pas 100 °C : elle protège les bords et entretient une atmosphère humide dans le four. Les protéines des œufs coagulent alors lentement et uniformément. Sans cette protection, les bords surcuisent, se resserrent et rejettent de l’eau, d’où une texture granuleuse et des fissures.",
    },
    {
      title: "Battre lentement",
      text: "Chaque bulle d’air incorporée se dilate à la chaleur : le gâteau gonfle comme un soufflé, puis retombe en refroidissant et se fend. À vitesse lente, on mélange sans aérer, et la texture reste dense et lisse.",
    },
    {
      title: "Ce que fait la nuit au froid",
      text: "Le cream cheese et la crème contiennent beaucoup de matière grasse laitière, qui se solidifie au froid. Tiède, l’appareil est encore souple et colle au couteau ; après plusieurs heures au réfrigérateur, il se raffermit et prend sa texture dense.",
    },
    {
      title: "Un centre qui tremble",
      text: "Le gâteau continue de cuire après la sortie du four grâce à la chaleur accumulée. Un centre qui tremble à 65 °C finit de prendre en refroidissant ; un centre déjà ferme dans le four sera trop cuit une fois froid.",
    },
  ],
  tips: [
    "Sortez le cream cheese, les œufs et la crème 2 heures avant : des ingrédients à la même température se mélangent sans grumeaux et sans qu’on ait besoin de battre fort.",
    "Prenez du cream cheese entier en barquette, jamais allégé : il contient plus d’eau et donne un gâteau mou et granuleux.",
    "Si votre moule à charnière n’est pas étanche, posez-le dans un moule à manqué de 26 cm avant de le mettre dans le bain-marie : aucune eau ne passera.",
    "Pour des parts nettes, trempez la lame dans l’eau chaude et essuyez-la entre chaque coupe.",
    "Une petite fissure n’est pas grave : le coulis la cache très bien.",
  ],
  mistakes: [
    "Battre à grande vitesse. L’air incorporé fait gonfler le gâteau, qui retombe et se fend.",
    "Attendre que le centre soit ferme au four. Il continue de cuire en refroidissant et devient sec et fissuré.",
    "Oublier l’aluminium autour du moule. L’eau du bain-marie s’infiltre et détrempe la base.",
    "Le couper le jour même. Encore tiède, il s’affaisse et colle au couteau.",
  ],
  variations: [
    {
      title: "Sans bain-marie, four doux",
      text: "Baissez le four à 130 °C et posez un plat d’eau chaude sur la grille du dessous pour l’humidité. Le cheesecake, sans aluminium, cuit sur la grille du milieu 1 h 30 à 1 h 50, jusqu’à ce que le centre tremble comme indiqué. Le refroidissement ne change pas.",
    },
    {
      title: "Base au spéculoos",
      text: "Remplacez les biscuits digestive par 200 g de spéculoos et réduisez le beurre à 70 g, car ces biscuits sont déjà gras. Le goût de cannelle va très bien avec un coulis de fruits rouges.",
    },
    {
      title: "Plus citronné",
      text: "Mettez le zeste de 2 citrons et 2 c. à soupe de jus dans l’appareil, et servez avec un coulis de myrtilles. La texture ne change pas.",
    },
  ],
  storage:
    "Au réfrigérateur, couvert, 4 jours maximum. Il se congèle bien, entier ou en parts filmées, 2 mois : décongelez-le une nuit au réfrigérateur, jamais à température ambiante. Le coulis se garde 3 jours au frais.",
  pairing: "Un café filtre, ou un muscat de Beaumes-de-Venise bien frais si vous le servez avec le coulis.",
  faq: [
    {
      q: "Pourquoi mon cheesecake s’est-il fendu ?",
      a: "Le plus souvent, il a trop cuit : le centre ne tremblait plus à la sortie du four. Les autres causes sont un appareil battu trop vite, qui a pris de l’air, un refroidissement trop brutal, ou un gâteau resté collé aux parois du moule.",
    },
    {
      q: "Comment savoir si un cheesecake est cuit ?",
      a: "Les bords sont pris et légèrement bombés, la surface est mate, et le centre tremble encore comme une gelée sur 8 à 10 cm quand on secoue le moule. Avec un thermomètre, visez 65 °C au centre.",
    },
    {
      q: "Peut-on faire un cheesecake sans bain-marie ?",
      a: "Oui, à four plus doux : 130 °C, avec un plat d’eau chaude sur la grille du dessous, pendant 1 h 30 à 1 h 50. La texture est un peu moins lisse sur les bords, mais le résultat est très proche.",
    },
    {
      q: "Par quoi remplacer le Philadelphia dans un cheesecake ?",
      a: "Par un autre cream cheese nature et entier, en barquette : les marques de distributeur font très bien l’affaire. Évitez les versions allégées et les fromages frais trop humides comme la faisselle, qui donnent un gâteau mou.",
    },
    {
      q: "Pourquoi mon cheesecake est-il liquide au centre ?",
      a: "Il n’a pas assez cuit ou pas assez reposé au froid. Un centre qui tremble à la sortie du four est normal, un centre liquide ne l’est pas. S’il est encore coulant après une nuit au réfrigérateur, la cuisson était trop courte.",
    },
    {
      q: "Combien de temps se conserve un cheesecake ?",
      a: "Quatre jours au réfrigérateur, couvert. Il se congèle aussi très bien pendant 2 mois, entier ou en parts : décongelez-le une nuit au réfrigérateur.",
    },
  ],
  nutrition: {
    calories: 430,
    protein: 8,
    fat: 29,
    saturatedFat: 18,
    carbs: 32,
    sugar: 23,
    fiber: 1,
    sodium: 345,
  },
  annotations: {
    hero: "le centre doit encore trembler",
    detail: "une lame chaude pour couper",
  },
  images: {
    heroAlt:
      "Part de cheesecake new-yorkais sur base de biscuits, nappée de coulis de fruits rouges, de framboises et de myrtilles",
    detailAlt: "Part de cheesecake crémeux à la surface dorée, avec un trait de coulis de fruits rouges",
    credits: {
      hero: {
        photographer: "Gizem Gökce",
        url: "https://www.pexels.com/photo/delicious-berry-topped-cheesecake-on-patio-table-37678304/",
      },
      detail: {
        photographer: "Pablo Rodríguez",
        url: "https://www.pexels.com/photo/delicious-basque-cheesecake-slice-with-jam-32517227/",
      },
    },
  },
  datePublished: "2026-11-06",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#B8243A",
    onAccent: "#ffffff",
    ink: "#9A1C30",
    tint: "#FAEDEF",
    deep: "#1C0C0F",
    focus: "50% 60%",
  },
});
