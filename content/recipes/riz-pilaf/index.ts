import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "riz-pilaf",
  title: "Riz pilaf",
  seoTitle: "Riz pilaf : riz nacré au beurre, grains bien séparés",
  tagline: "Chaque grain reste à sa place.",
  description:
    "Riz pilaf pour 4 : 250 g de riz long nacré au beurre avec un oignon, 45 cl de bouillon chaud, 15 minutes à couvert et 10 minutes de repos sans ouvrir.",
  summary:
    "Pour 4 personnes, faites fondre un oignon ciselé dans 30 g de beurre, ajoutez 250 g de riz long et remuez 2 à 3 minutes jusqu’à ce qu’il devienne nacré. Versez d’un coup 45 cl de bouillon bouillant, soit 1,5 volume de liquide pour 1 volume de riz, couvrez et laissez cuire 15 minutes sur feu très doux. Laissez reposer 10 minutes sans ouvrir, puis égrenez à la fourchette. Comptez 45 minutes en tout.",
  intro: [
    "Le riz pilaf, c’est la façon française de cuire un riz aux grains bien séparés. On l’enrobe de beurre chaud, on le mouille d’une quantité exacte de bouillon et on le laisse tranquille sous son couvercle. Il accompagne une volaille rôtie, un poisson en sauce ou une blanquette.",
    "Il rate de deux façons. Trop de liquide, et il tourne à la bouillie. Le couvercle soulevé pour voir, et il cuit de travers, collé au fond et ferme en surface. On mesure donc au volume, 1 de riz pour 1,5 de bouillon, et le couvercle reste fermé jusqu’à la fin du repos.",
  ],
  category: "Accompagnement",
  cuisine: "Française",
  keywords: [
    "riz pilaf",
    "recette riz pilaf",
    "riz pilaf maison",
    "riz pilaf proportion eau",
    "riz pilaf au bouillon",
    "comment nacrer le riz",
    "riz pilaf basmati",
    "riz pilaf à la casserole",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 10, cook: 25, rest: 10 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  tags: [],
  equipment: [
    "casserole à fond épais de 20 cm avec couvercle",
    "petite casserole",
    "verre doseur",
    "spatule en bois",
    "fourchette",
  ],
  ingredients: [
    {
      items: [
        { qty: 45, unit: "cl", name: "bouillon de volaille ou de légumes", note: "maison ou en cube", step: 5 },
        { qty: 30, unit: "g", name: "beurre", step: 5 },
        { qty: 1, name: "oignon", plural: "oignons", note: "environ 80 g, finement ciselé", step: 1 },
        { qty: 250, unit: "g", name: "riz long", note: "basmati ou long grain, soit 30 cl en volume", step: 25 },
        { qty: 1, unit: "feuille", name: "laurier", step: 1 },
        { qty: 2, unit: "brin", name: "thym", step: 1 },
        { name: "sel fin" },
        { qty: 10, unit: "g", name: "beurre froid", note: "pour finir", step: 5, optional: true },
      ],
    },
  ],
  method: [
    {
      title: "Le riz",
      steps: [
        {
          title: "Chauffer le bouillon",
          text: "Versez le bouillon dans la petite casserole et portez-le à frémissement, environ 5 minutes, puis gardez-le sur feu doux. Goûtez-le : s’il est fait avec un cube, il est déjà salé et vous n’ajouterez rien.",
          timer: { minutes: 5, label: "Bouillon à frémissement" },
        },
        {
          title: "Fondre l’oignon",
          text: "Faites fondre les 30 g de beurre dans la casserole à fond épais, à feu moyen-doux. Ajoutez l’oignon et laissez-le cuire 4 à 5 minutes en remuant de temps en temps, jusqu’à ce qu’il soit translucide et tendre, sans prendre de couleur.",
          timer: { minutes: 5, label: "Oignon" },
        },
        {
          title: "Nacrer le riz",
          text: "Versez le riz et remuez 2 à 3 minutes à feu moyen, pour que chaque grain s’enrobe de beurre. Il est nacré quand les grains deviennent translucides sur les bords avec un point blanc au centre, et qu’ils crissent légèrement sous la spatule.",
          timer: { minutes: 3, label: "Nacrer le riz" },
          tip: "Ne cherchez pas à le dorer : il doit rester blanc. Un riz qui colore prend un goût de grillé et cuit moins régulièrement.",
        },
        {
          title: "Mouiller au bouillon",
          text: "Versez le bouillon bouillant d’un seul coup, attention à la vapeur. Ajoutez le laurier, le thym et une pincée de sel seulement si le bouillon n’est pas salé. Remuez une fois pour décoller les grains du fond et laissez reprendre l’ébullition.",
        },
        {
          title: "Cuire à couvert",
          text: "Couvrez hermétiquement, baissez sur le feu le plus doux et laissez cuire 15 minutes sans soulever le couvercle ni remuer. À la fin, le liquide a disparu et de petits trous de vapeur se sont formés à la surface du riz.",
          timer: { minutes: 15, label: "Riz à couvert" },
          tip: "Si le couvercle ferme mal, glissez une feuille de papier aluminium entre la casserole et lui : la vapeur doit rester dedans.",
        },
        {
          title: "Laisser reposer",
          text: "Retirez la casserole du feu sans ouvrir et laissez reposer 10 minutes. La vapeur termine la cuisson et l’humidité se répartit : les grains du fond sèchent, ceux du dessus finissent de gonfler.",
          timer: { minutes: 10, label: "Repos à couvert" },
        },
        {
          title: "Égrener",
          text: "Retirez le laurier et le thym, posez le beurre froid en petits morceaux et égrenez le riz à la fourchette, en soulevant depuis les bords plutôt qu’en tournant. Servez aussitôt : les grains sont tendres, brillants et se détachent les uns des autres.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Ce que fait le nacrage",
      text: "Chauffé dans le beurre, l’amidon de la surface des grains commence à se transformer et forme un film enrobé de gras. Pendant la cuisson, ce film limite la quantité d’amidon qui s’échappe dans le liquide : les grains ne se collent pas entre eux.",
    },
    {
      title: "Une quantité exacte de liquide",
      text: "Sous un couvercle bien fermé, très peu de vapeur s’échappe : presque tout le bouillon finit dans le grain. C’est pourquoi le dosage est précis, et pourquoi un couvercle soulevé change le résultat.",
    },
    {
      title: "Le riz cuit et Bacillus cereus",
      text: "Le riz cru porte souvent des spores de Bacillus cereus, qui survivent à la cuisson. Dans un riz qui tiédit lentement, elles germent et produisent une toxine que le réchauffage ne détruit pas. D’où la règle : au réfrigérateur dans les 2 heures, et consommé dans les 24 heures.",
    },
  ],
  tips: [
    "Mesurez au volume, c’est plus simple pour changer les quantités : 1 verre doseur de riz pour 1,5 de bouillon, quelle que soit la quantité.",
    "Prenez une casserole à fond épais : sur un fond fin, le riz du fond accroche avant que celui du dessus soit cuit.",
    "Le bouillon doit être bouillant : versé froid, il arrête la cuisson et décale tous les temps.",
    "Pour un service comme au restaurant, tassez légèrement le riz dans un bol beurré et retournez-le sur l’assiette.",
  ],
  mistakes: [
    "Soulever le couvercle ou remuer pendant la cuisson : la vapeur s’échappe et le riz colle. Fiez-vous au minuteur et aux trous de vapeur à la fin.",
    "Mettre trop de bouillon : le riz devient pâteux. S’il reste du liquide au bout de 15 minutes, recouvrez et prolongez de 2 à 3 minutes.",
    "Sauter le repos : le fond est encore mouillé et les grains se brisent quand on les égrène. Les 10 minutes à couvert font partie de la cuisson.",
    "Laisser le riz cuit refroidir sur la cuisinière jusqu’au lendemain : il devient dangereux, même réchauffé. Mettez les restes au frais dans les 2 heures.",
  ],
  variations: [
    {
      title: "Au four",
      text: "Après l’ébullition du bouillon, couvrez et enfournez 17 minutes à 180 °C dans une cocotte qui passe au four, puis laissez reposer 10 minutes. La chaleur vient de tous côtés et le fond n’attache jamais.",
    },
    {
      title: "Aux épices douces",
      text: "Faites revenir avec l’oignon 1 bâton de cannelle, 3 gousses de cardamome écrasées et 2 clous de girofle, à la place du thym et du laurier.",
    },
    {
      title: "Aux vermicelles",
      text: "Faites dorer 50 g de vermicelles cassés dans le beurre pendant 2 minutes avant d’ajouter le riz, et augmentez le bouillon de 10 cl.",
    },
  ],
  storage:
    "Mettez les restes au réfrigérateur dans les 2 heures, étalés dans une boîte peu profonde pour qu’ils refroidissent vite, et mangez-les dans les 24 heures. Réchauffez-les une seule fois, avec 1 cuillerée à soupe d’eau, jusqu’à ce qu’ils soient fumants. Au congélateur, 1 mois ; ne recongelez jamais.",
  pairing: "Une volaille rôtie, un poisson en sauce, une blanquette ou un curry.",
  faq: [
    {
      q: "Quelle quantité de liquide pour un riz pilaf ?",
      a: "1,5 volume de bouillon pour 1 volume de riz long, soit 45 cl de bouillon pour 250 g de riz, qui occupent environ 30 cl dans un verre doseur. Le couvercle doit fermer bien, sinon le compte n’est plus juste.",
    },
    {
      q: "Faut-il rincer le riz pour un pilaf ?",
      a: "Non, ce n’est pas indispensable : le nacrage suffit à garder les grains séparés. Si vous le rincez, égouttez-le au moins 10 minutes, sinon il ne nacre pas et l’eau qu’il retient fausse la quantité de liquide.",
    },
    {
      q: "Quel riz utiliser pour un riz pilaf ?",
      a: "Un riz long, basmati ou long grain classique. Le riz thaï fonctionne mais colle un peu plus. Évitez le riz rond, fait pour le risotto et le riz au lait : il libère beaucoup d’amidon et donne un pilaf collant.",
    },
    {
      q: "Combien de temps se garde le riz pilaf cuit ?",
      a: "24 heures au réfrigérateur, pas plus, à condition de l’y mettre dans les 2 heures après la cuisson. Réchauffez-le une seule fois, jusqu’à ce qu’il soit fumant à cœur.",
    },
    {
      q: "Pourquoi ne faut-il pas laisser le riz cuit à température ambiante ?",
      a: "Parce que le riz porte des spores de Bacillus cereus qui résistent à la cuisson. En tiédissant, elles germent et produisent une toxine qui provoque des vomissements, et que le réchauffage ne détruit pas. Au frais dans les 2 heures, le risque est maîtrisé.",
    },
    {
      q: "Peut-on congeler du riz pilaf ?",
      a: "Oui, 1 mois au congélateur, s’il a été refroidi vite et congelé dans les 2 heures après la cuisson. Réchauffez-le sans décongeler, à la poêle couverte avec un peu d’eau, jusqu’à ce qu’il soit fumant, et ne le recongelez pas.",
    },
  ],
  nutrition: {
    calories: 310,
    protein: 5,
    fat: 9,
    saturatedFat: 5,
    carbs: 51,
    sugar: 1,
    fiber: 1,
    sodium: 400,
  },
  annotations: { hero: "tassé dans un bol, puis retourné", detail: "chaque grain bien détaché" },
  images: {
    heroAlt: "Riz pilaf moulé en dôme sur une assiette bleu-vert, décoré d’un brin de persil et d’un morceau de tomate",
    detailAlt: "Gros plan sur des grains de riz pilaf cuits, longs, blancs et bien détachés les uns des autres",
    credits: {
      hero: {
        photographer: "AHMED AQEELY",
        url: "https://www.pexels.com/photo/rice-on-a-plate-14518996/",
      },
      detail: {
        photographer: "Dereckson",
        url: "https://commons.wikimedia.org/wiki/File:Riz_pilaf.jpg",
        source: "Wikimedia Commons",
        license: "CC BY 3.0",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#C99A3B",
    onAccent: "#1B1712",
    ink: "#7A5A16",
    tint: "#FAF4E6",
    deep: "#17120A",
    focus: "52% 50%",
  },
});
