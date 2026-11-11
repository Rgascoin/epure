import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "tiramisu",
  title: "Tiramisu",
  seoTitle: "Tiramisu : la recette italienne au mascarpone",
  tagline: "Une seconde dans le café, pas deux.",
  description:
    "Tiramisu à l’italienne : mascarpone, œufs, biscuits à la cuillère trempés dans un café fort, cacao. 30 minutes de travail et 6 heures au frais, pour 8.",
  summary:
    "Pour un tiramisu de 8 parts, fouettez 4 jaunes avec 80 g de sucre, ajoutez 500 g de mascarpone, puis incorporez les 4 blancs montés en neige avec 20 g de sucre. Trempez 300 g de biscuits à la cuillère une seconde de chaque côté dans 300 ml de café fort refroidi, montez deux couches de biscuits et de crème dans un plat de 20 × 30 cm et laissez prendre au moins 6 heures au frais. Poudrez de cacao au moment de servir.",
  intro: [
    "Le tiramisu, c’est quatre choses : du mascarpone, des œufs, des biscuits à la cuillère et du café fort. Le cacao arrive au dernier moment. Il n’y a rien à cuire, mais il faut du temps : 6 heures au frais au minimum, pour que les biscuits deviennent moelleux et que la crème se tienne à la coupe.",
    "Tout se joue au trempage. Une seconde de chaque côté dans un café froid : le biscuit est humide dehors, encore ferme au cœur, et finit de s’imbiber dans la crème. Trop trempé, il rend son café et le fond du plat baigne.",
    "Ce tiramisu contient des œufs crus. On le mange dans les 24 heures, et on prend des œufs pasteurisés pour les femmes enceintes, les jeunes enfants et les personnes fragiles (voir la FAQ). Le marsala est facultatif.",
  ],
  category: "Dessert",
  cuisine: "Italienne",
  keywords: [
    "tiramisu",
    "recette tiramisu",
    "tiramisu italien",
    "tiramisu facile",
    "tiramisu au mascarpone",
    "tiramisu traditionnel",
    "tiramisu sans alcool",
    "tiramisu au café",
  ],
  diet: ["vegetarian"],
  servings: 8,
  servingsLabel: { one: "part", other: "parts" },
  times: { prep: 30, cook: 0, rest: 360 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Toute l’année"],
  equipment: [
    "plat de 20 × 30 cm",
    "batteur électrique",
    "deux saladiers",
    "maryse",
    "assiette creuse",
    "petite passoire fine",
  ],
  ingredients: [
    {
      title: "Le café",
      items: [
        { qty: 300, unit: "ml", name: "café fort", note: "espresso ou café filtre serré", step: 10 },
        { qty: 3, unit: "cas", name: "marsala", note: "ou amaretto", step: 1, optional: true },
      ],
    },
    {
      title: "La crème au mascarpone",
      items: [
        { qty: 4, name: "œuf", plural: "œufs", note: "extra-frais", step: 1 },
        { qty: 100, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 500, unit: "g", name: "mascarpone", step: 25 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
      ],
    },
    {
      title: "Le montage",
      items: [
        {
          qty: 300,
          unit: "g",
          name: "biscuits à la cuillère",
          note: "une trentaine, des savoiardi si possible",
          step: 25,
        },
        { qty: 20, unit: "g", name: "cacao amer en poudre", step: 5 },
      ],
    },
  ],
  method: [
    {
      title: "Préparation",
      steps: [
        {
          title: "Préparer le café",
          text: "Préparez le café, versez-le dans une assiette creuse et ajoutez le marsala, si vous en mettez. Laissez-le refroidir complètement pendant que vous faites la crème.",
          tip: "Chaud, le café détrempe les biscuits en un instant et fait fondre la crème. Il doit être à température ambiante, ou froid.",
        },
        {
          title: "Séparer les œufs",
          text: "Cassez les œufs en mettant les jaunes dans un saladier et les blancs dans un autre, bien propre et sec. S’il tombe un peu de jaune dans les blancs, retirez-le avec un bout de coquille, sinon ils monteront mal.",
        },
        {
          title: "Blanchir les jaunes",
          text: "Ajoutez 80 g de sucre aux jaunes et fouettez au batteur 3 à 4 minutes : le mélange pâlit, double de volume et retombe en ruban épais quand vous soulevez le fouet.",
          timer: { minutes: 4, label: "Jaunes et sucre" },
        },
        {
          title: "Ajouter le mascarpone",
          text: "Ajoutez le mascarpone en deux fois et mélangez au batteur à vitesse lente, juste le temps d’obtenir une crème lisse et épaisse. Arrêtez dès qu’il n’y a plus de grumeaux.",
          tip: "Battu trop longtemps, le mascarpone tranche et devient granuleux, comme un beurre. Quelques secondes à vitesse lente suffisent.",
        },
        {
          title: "Monter les blancs",
          text: "Lavez et séchez les fouets. Montez les blancs avec le sel à vitesse moyenne ; quand ils moussent, versez les 20 g de sucre restants en pluie et continuez jusqu’à une neige ferme et brillante, qui forme un bec au bout du fouet.",
        },
        {
          title: "Incorporer les blancs",
          text: "Mélangez franchement un tiers des blancs à la crème au mascarpone pour l’assouplir. Ajoutez le reste et incorporez-le à la maryse, en soulevant la masse, jusqu’à ce qu’il n’y ait plus de traces blanches.",
        },
        {
          title: "Tremper les biscuits",
          text: "Trempez les biscuits un par un dans le café froid, une seconde de chaque côté, et rangez-les serrés au fond du plat, côté sucré vers le haut. Ils doivent être humides en surface et encore fermes au cœur.",
          tip: "Une seconde, pas deux. Le biscuit finit de s’imbiber au contact de la crème ; trop trempé, il rend son café au fond du plat.",
        },
        {
          title: "Monter les couches",
          text: "Étalez la moitié de la crème sur les biscuits. Faites une seconde couche de biscuits trempés, puis couvrez du reste de crème et lissez à la spatule. S’il reste un fond de café, c’est normal.",
        },
        {
          title: "Laisser prendre",
          text: "Filmez le plat et laissez-le au moins 6 heures au réfrigérateur, idéalement une nuit : les biscuits deviennent moelleux et la crème se raffermit.",
          timer: { minutes: 360, label: "Prise au froid" },
        },
        {
          title: "Poudrer de cacao",
          text: "Au moment de servir, tamisez le cacao à travers une petite passoire, en couche fine et régulière sur toute la surface. Plus tôt, il boit l’humidité de la crème et forme une pâte brune.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi blanchir les jaunes",
      text: "En fouettant les jaunes avec le sucre, on dissout le sucre et on incorpore de l’air. Les protéines et la lécithine du jaune entourent ces bulles et les stabilisent : la crème est plus légère, et elle se mélange au mascarpone sans grumeaux de sucre.",
    },
    {
      title: "Le rôle des blancs",
      text: "Le mascarpone contient environ 40 % de matière grasse. Les blancs montés allègent cette crème très riche : leurs protéines, dépliées par le fouet, forment un film autour des bulles d’air, et le sucre ajouté en cours de route renforce ce film.",
    },
    {
      title: "Ce qui se passe au frais",
      text: "Les biscuits à la cuillère sont secs et très poreux. Pendant les heures au réfrigérateur, ils absorbent lentement le café et l’humidité de la crème, et leur mie devient tendre comme une génoise. En même temps, la matière grasse du mascarpone fige au froid, et la crème se tient à la coupe.",
    },
  ],
  tips: [
    "Prenez des savoiardi, les biscuits à la cuillère italiens, plus gros et plus secs que la plupart des biscuits français : ils absorbent le café sans s’effondrer.",
    "Fouettez le mascarpone seul quelques secondes avant de l’ajouter aux jaunes : il s’assouplit et se mélange sans grumeaux.",
    "Faites-le le matin pour le soir, ou la veille au soir pour le lendemain midi. Il est meilleur après une nuit, mais il se mange dans les 24 heures.",
    "Un café vraiment fort compte plus que le marsala : c’est lui qui équilibre le sucre et la richesse du mascarpone.",
  ],
  mistakes: [
    "Tremper les biscuits trop longtemps. Ils se gorgent de café, s’effondrent, et le tiramisu baigne dans le jus.",
    "Utiliser un café encore chaud. Les biscuits se défont et la crème fond.",
    "Battre le mascarpone trop longtemps. Il tranche et devient granuleux.",
    "Le servir trop tôt. Sans ses heures au froid, la crème coule et les biscuits restent secs au centre.",
    "Mettre le cacao à l’avance. Il absorbe l’humidité et forme une croûte pâteuse.",
  ],
  variations: [
    {
      title: "Sans alcool",
      text: "Supprimez le marsala, sans rien changer d’autre. Le goût de café ressort davantage, et le dessert convient aux enfants (avec des œufs pasteurisés, voir la FAQ).",
    },
    {
      title: "Sans œufs crus",
      text: "Remplacez les œufs par 250 ml de crème liquide entière très froide, montée en chantilly ferme avec 80 g de sucre, puis mélangée au mascarpone. La crème est plus dense et se garde 2 jours au frigo ; ce n’est plus la recette italienne.",
    },
    {
      title: "En verrines",
      text: "Mêmes quantités, réparties dans 8 verrines de 200 ml, avec des biscuits cassés en deux pour qu’ils tiennent à plat. Comptez 4 heures de prise au lieu de 6 : les couches sont plus fines.",
    },
  ],
  storage:
    "Avec ses œufs crus, il se garde 24 heures maximum au réfrigérateur, filmé, à compter de sa préparation. Ne le laissez pas à température ambiante au-delà du temps du service.",
  pairing: "Un café serré, ou un verre de moscato d’Asti, léger et peu alcoolisé.",
  faq: [
    {
      q: "Le tiramisu est-il déconseillé aux femmes enceintes ?",
      a: "Oui, dans cette version : il contient des œufs crus. Il est déconseillé aux femmes enceintes, aux jeunes enfants, aux personnes âgées et aux personnes immunodéprimées, à cause du risque de salmonellose. Pour elles, prenez des œufs pasteurisés (en brique, au rayon frais), et supprimez le marsala.",
    },
    {
      q: "Combien de temps se conserve un tiramisu ?",
      a: "24 heures au réfrigérateur, filmé, à compter de sa préparation. Les œufs y sont crus : ne dépassez pas ce délai, et ne le laissez pas traîner à température ambiante.",
    },
    {
      q: "Faut-il mettre de l’alcool dans le tiramisu ?",
      a: "Non, c’est facultatif. Le marsala ou l’amaretto parfument le café, mais l’alcool ne cuit pas : avec, le tiramisu ne convient ni aux enfants ni aux femmes enceintes. Sans, il est tout aussi bon.",
    },
    {
      q: "Pourquoi mon tiramisu est-il liquide ?",
      a: "Les biscuits étaient trop trempés, les blancs pas assez fermes ou mélangés trop vivement, ou il n’est pas resté assez longtemps au froid. Trempez une seconde par face et comptez au moins 6 heures de prise.",
    },
    {
      q: "Par quoi remplacer le mascarpone dans un tiramisu ?",
      a: "Rien ne le remplace tout à fait. À défaut, mélangez 250 g de ricotta bien égouttée avec 250 ml de crème liquide entière fouettée : le tiramisu est plus léger, moins onctueux.",
    },
    {
      q: "Quels biscuits utiliser pour un tiramisu ?",
      a: "Des biscuits à la cuillère, idéalement des savoiardi italiens, plus gros et plus secs. Des biscuits plus fins marchent aussi, à condition de les tremper encore plus brièvement.",
    },
  ],
  nutrition: {
    calories: 520,
    protein: 9,
    fat: 32,
    saturatedFat: 20,
    carbs: 45,
    sugar: 30,
    fiber: 1,
    sodium: 125,
  },
  annotations: {
    hero: "une seconde par face, pas plus",
    detail: "le cacao au dernier moment",
  },
  images: {
    heroAlt:
      "Part de tiramisu poudrée de cacao sur une assiette grise, couches de biscuits et de crème au mascarpone bien nettes",
    detailAlt: "Cuillère soulevant une portion de tiramisu dans le plat, biscuits imbibés de café et crème",
    credits: {
      hero: { photographer: "Valeria Boltneva", url: "https://www.pexels.com/photo/27305272/" },
      detail: { photographer: "Ali Dashti", url: "https://www.pexels.com/photo/20586637/" },
    },
  },
  datePublished: "2026-11-08",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#8B5A3C",
    onAccent: "#ffffff",
    ink: "#6E4128",
    tint: "#F5EDE6",
    deep: "#150e0a",
    focus: "50% 55%",
  },
});
