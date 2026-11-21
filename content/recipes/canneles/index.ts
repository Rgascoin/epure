import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "canneles",
  title: "Cannelés bordelais",
  seoTitle: "Cannelés bordelais, croûte épaisse et cœur moelleux",
  tagline: "La pâte se fait la veille.",
  description:
    "Des cannelés bordelais à croûte brune et cœur moelleux : 50 cl de lait vanillé, une pâte reposée 24 h, puis 15 min à 250 °C et 1 h à 180 °C.",
  summary:
    "Pour 16 cannelés de 5,5 cm, faites infuser une gousse de vanille dans 50 cl de lait avec 50 g de beurre, versez-le sur 100 g de farine, 250 g de sucre, 2 œufs et 2 jaunes, ajoutez 5 cl de rhum, puis laissez reposer la pâte 24 à 48 h au réfrigérateur. La cuisson se fait en deux temps : 15 min à 250 °C, puis 50 à 60 min à 180 °C, jusqu’à une croûte brun acajou. Comptez un peu plus de 26 h en tout, dont 25 minutes de travail.",
  intro: [
    "Un cannelé réussi se reconnaît en mordant dedans : une croûte épaisse, presque noire sur les arêtes, qui craque, puis un intérieur jaune, humide et alvéolé, quelque part entre le flan et la crêpe. La pâte elle-même n’a rien de compliqué. Ce qui compte, c’est le temps et la chaleur.",
    "Ce qui fait rater les cannelés, c’est surtout l’impatience. Une pâte qui n’a pas reposé gonfle au four, sort du moule et ressort avec le dessus pâle et la croûte molle. Un four qui n’est pas assez chaud au départ donne le même résultat.",
    "Le moule compte aussi, autant le dire franchement. Le cuivre enduit de cire d’abeille donne la croûte la plus épaisse et la plus brillante. En silicone, la recette marche, mais la croûte reste plus fine et plus mate, et il faut pousser un peu la cuisson.",
  ],
  category: "Goûter",
  cuisine: "Française",
  keywords: [
    "cannelés",
    "recette cannelés",
    "cannelés bordelais",
    "recette cannelés bordelais",
    "pâte à cannelés",
    "cannelés maison",
    "cannelés moule silicone",
    "cannelés moule cuivre",
    "cuisson cannelés",
  ],
  servings: 16,
  servingsLabel: { one: "cannelé", other: "cannelés" },
  times: { prep: 25, cook: 75, rest: 1475 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Toute l’année"],
  tags: [],
  equipment: [
    "moules à cannelés de 5,5 cm (16 empreintes, silicone ou cuivre)",
    "casserole",
    "saladier",
    "maryse ou cuillère en bois",
    "pinceau de cuisine",
    "grille",
  ],
  ingredients: [
    {
      title: "La pâte, la veille",
      items: [
        { qty: 50, unit: "cl", name: "lait entier", step: 5 },
        { qty: 1, name: "gousse de vanille", plural: "gousses de vanille", step: 1 },
        { qty: 50, unit: "g", name: "beurre", step: 5 },
        { qty: 100, unit: "g", name: "farine", note: "type 45 ou 55", step: 5 },
        { qty: 250, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 2, name: "œuf", plural: "œufs", step: 1 },
        { qty: 2, name: "jaune d’œuf", plural: "jaunes d’œufs", step: 1 },
        { qty: 5, unit: "cl", name: "rhum ambré", step: 1, optional: true },
      ],
    },
    {
      title: "Les moules",
      items: [{ qty: 20, unit: "g", name: "beurre", note: "fondu", step: 5 }],
    },
  ],
  method: [
    {
      title: "La veille",
      steps: [
        {
          title: "Infuser le lait",
          text: "Fendez la gousse de vanille dans la longueur et grattez les graines avec la pointe d’un couteau. Mettez le lait, la gousse, les graines et 50 g de beurre dans une casserole, et portez à frémissement à feu moyen. Retirez du feu, couvrez et laissez infuser 15 min.",
          timer: { minutes: 15, label: "Infusion de la vanille" },
        },
        {
          title: "Mélanger sans fouetter",
          text: "Dans un saladier, mélangez la farine et le sucre. Ajoutez les œufs et les jaunes, et mélangez à la maryse ou à la cuillère en bois, sans chercher à faire mousser, jusqu’à obtenir une pâte épaisse et collante, sans traces de farine.",
        },
        {
          title: "Verser le lait chaud",
          text: "Retirez la gousse et gardez-la. Versez le lait chaud en trois fois sur le mélange, en remuant doucement à chaque ajout : la pâte devient fluide comme une pâte à crêpes. S’il reste des grumeaux, passez-la au chinois. Ajoutez le rhum et remettez la gousse dans la pâte.",
          tip: "Un fouet mené énergiquement fait entrer de l’air et travaille le gluten de la farine, et ce sont les deux causes des cannelés qui gonflent. On remue juste assez pour que la pâte soit lisse.",
        },
        {
          title: "Laisser reposer",
          text: "Versez la pâte dans un pichet ou une boîte, filmez au contact et placez-la au réfrigérateur pour 24 à 48 h, jamais à température ambiante. En reposant, elle épaissit légèrement et les bulles d’air remontent.",
          timer: { minutes: 1440, label: "Repos de la pâte" },
        },
      ],
    },
    {
      title: "Le jour de la cuisson",
      steps: [
        {
          title: "Préparer les moules",
          text: "Allumez le four à 250 °C, en chaleur statique, 20 min avant d’enfourner. Badigeonnez chaque empreinte de beurre fondu au pinceau, jusqu’au fond des cannelures. Posez le moule en silicone sur la plaque du four et gardez-le au réfrigérateur en attendant.",
          timer: { minutes: 20, label: "Préchauffage du four" },
        },
        {
          title: "Remuer et remplir",
          text: "Sortez la pâte, retirez la gousse et remuez doucement à la louche en raclant le fond, où la farine et le sucre se sont déposés. Remplissez les empreintes jusqu’à 1 cm du bord.",
          tip: "Si vous n’avez qu’une plaque de 8 empreintes, cuisez en deux fournées et remettez le reste de pâte au réfrigérateur pendant la première. Remuez-la de nouveau avant de remplir.",
        },
        {
          title: "Saisir à 250 °C",
          text: "Enfournez à mi-hauteur pour 15 min à 250 °C. C’est cette chaleur forte qui saisit la pâte contre le moule et commence la croûte. Les cannelés montent un peu, c’est normal.",
          timer: { minutes: 15, label: "Cuisson à 250 °C" },
          tip: "S’ils dépassent du moule de plus de 1 cm, sortez la plaque quelques instants : ils redescendent d’eux-mêmes. Remettez-la aussitôt au four.",
        },
        {
          title: "Finir à 180 °C",
          text: "Baissez le four à 180 °C sans l’ouvrir et poursuivez 50 à 60 min. Les cannelés sont cuits quand la croûte est brun acajou, presque noire sur les arêtes, et le dessus bien caramélisé. Démoulez-en un pour vérifier : s’il est encore blond sur les côtés, remettez-le dans son empreinte et prolongez.",
          timer: { minutes: 60, label: "Cuisson à 180 °C" },
        },
        {
          title: "Démouler tiède",
          text: "Laissez le moule 5 min hors du four, puis retournez-le sur une grille et poussez chaque empreinte par-dessous pour libérer les cannelés. Laissez-les refroidir au moins 30 min : la croûte durcit en refroidissant et le cœur finit de se raffermir.",
          timer: { minutes: 35, label: "Démoulage et refroidissement" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Ce que fait le repos",
      text: "Pendant les 24 heures au froid, l’amidon de la farine absorbe le lait, le gluten formé au mélange se détend et les bulles d’air remontent. Une pâte détendue et sans air gonfle beaucoup moins au four : elle reste au contact du moule, et c’est là que la croûte se forme.",
    },
    {
      title: "Deux températures, deux rôles",
      text: "À 250 °C, la fine couche de pâte contre le moule sèche vite et brunit : le sucre caramélise et les protéines du lait et des œufs réagissent avec les sucres (réactions de Maillard). À 180 °C, le cœur, beaucoup plus humide, cuit lentement sans que l’extérieur brûle.",
    },
    {
      title: "Cuivre ou silicone",
      text: "Le cuivre conduit très bien la chaleur : la paroi chauffe vite et partout pareil, la croûte devient épaisse et brillante, et la cire empêche d’accrocher. Le silicone isole au contraire : la chaleur passe mal, la croûte se forme plus lentement et reste plus fine. On compense en prolongeant la cuisson à 180 °C.",
    },
  ],
  tips: [
    "Pesez le sucre au gramme près. 250 g pour 50 cl de lait paraît beaucoup, mais c’est lui qui donne la croûte caramélisée.",
    "Vérifiez votre four avec un thermomètre indépendant. Un four peut afficher 250 °C sans les atteindre, et toute la croûte se joue dans le premier quart d’heure.",
    "Gardez la gousse de vanille dans la pâte pendant tout le repos : elle continue de parfumer. Rincée et séchée ensuite, elle peut encore aromatiser un bocal de sucre.",
    "Mangez-les dans la journée, quand la croûte craque encore. C’est un gâteau qui se prépare la veille mais se cuit le jour même.",
  ],
  mistakes: [
    "Enfourner une pâte qui n’a pas reposé : les cannelés gonflent, débordent et sortent avec le dessus blanc et la croûte molle. 24 h de repos au froid restent le minimum.",
    "Oublier de remuer la pâte avant de remplir : les premiers moules reçoivent un lait clair, les derniers une pâte épaisse de farine et de sucre tombés au fond. Raclez le fond à la louche, et recommencez entre deux fournées.",
    "Sortir les cannelés parce qu’ils semblent trop foncés : une croûte simplement dorée ramollit en une heure. Ils doivent être brun acajou, et des arêtes presque noires ne sont pas un défaut.",
    "Les ranger au réfrigérateur ou dans une boîte fermée : l’humidité ramollit la croûte en quelques heures. Gardez-les à l’air libre, et passez-les 5 min au four chaud le lendemain.",
  ],
  variations: [
    {
      title: "Dans des moules en cuivre",
      text: "Faites fondre 30 g de cire d’abeille alimentaire avec 30 g de beurre. Chauffez les moules 5 min au four, versez un peu du mélange chaud dans chacun, puis retournez-les aussitôt sur une grille : il ne doit rester qu’un voile. Laissez figer au congélateur avant de remplir. Comptez 15 min à 250 °C, puis 45 à 50 min à 180 °C, et démoulez dès la sortie du four.",
    },
    {
      title: "Sans rhum, à l’orange",
      text: "Supprimez les 5 cl de rhum et faites infuser le zeste d’une demi-orange non traitée avec la vanille dans le lait chaud. Filtrez-le avant de le verser sur le mélange. Le reste ne change pas.",
    },
    {
      title: "En mini-cannelés",
      text: "Avec des moules de 3,5 cm, la même pâte donne une quarantaine de petits cannelés. Remplissez à 5 mm du bord, puis comptez 10 min à 250 °C et 25 à 30 min à 180 °C, avec le même repère de couleur.",
    },
  ],
  storage:
    "Ils sont meilleurs le jour même : la croûte ramollit ensuite, à mesure que l’humidité du cœur la gagne. Gardez-les à température ambiante, à découvert ou sous une cloche, jamais au réfrigérateur. Le lendemain, 5 minutes dans un four à 200 °C leur rendent du croustillant. Cuits et refroidis, ils se congèlent 2 mois. La pâte crue se garde 48 h au réfrigérateur, pas plus.",
  pairing:
    "Un café serré ou un thé noir au goûter. Au dessert, à côté d’une glace à la vanille ou de quelques poires rôties, et pour les grands, un petit verre de vin blanc liquoreux.",
  faq: [
    {
      q: "Combien de temps doit reposer la pâte à cannelés ?",
      a: "24 heures au minimum, 48 heures au maximum, toujours au réfrigérateur. Plus court, les cannelés gonflent et la croûte reste pâle. Plus long, on ne gagne rien et la pâte contient des œufs crus : au-delà de 48 heures, elle ne se garde plus. Remuez-la bien en raclant le fond avant de remplir les moules.",
    },
    {
      q: "Pourquoi mes cannelés gonflent et ont le dessus blanc ?",
      a: "Parce que la pâte n’a pas assez reposé, qu’elle a été fouettée, ou que le four n’était pas assez chaud au départ. La pâte monte alors hors du moule et sa surface ne touche plus le métal chaud. Laissez-la 24 h au froid, mélangez-la sans faire de bulles, et vérifiez que le four atteint vraiment 250 °C.",
    },
    {
      q: "Peut-on faire des cannelés dans un moule en silicone ?",
      a: "Oui. Ils ont la forme et le cœur moelleux, mais la croûte est plus fine, plus mate et moins croquante qu’en cuivre, parce que le silicone conduit mal la chaleur. Beurrez quand même les empreintes, posez le moule sur la plaque du four et allez jusqu’au bout des 60 min à 180 °C pour obtenir une couleur bien brune.",
    },
    {
      q: "Faut-il de la cire d’abeille pour les cannelés ?",
      a: "Non, seulement avec des moules en cuivre. Mélangée à part égale avec du beurre, elle empêche la pâte d’accrocher et donne à la croûte son aspect brillant. En silicone ou dans un moule antiadhésif, un voile de beurre fondu suffit. Si vous en achetez, prenez de la cire d’abeille alimentaire, vendue pour cet usage.",
    },
    {
      q: "Peut-on faire des cannelés sans rhum ?",
      a: "Oui, supprimez-le simplement, la texture ne change pas. Le rhum est là pour le parfum. Une heure de cuisson en fait évaporer une bonne partie de l’alcool, mais pas tout : pour des enfants ou une femme enceinte, mieux vaut s’en passer, ou le remplacer par un zeste d’orange infusé dans le lait.",
    },
    {
      q: "Comment garder les cannelés croustillants ?",
      a: "En les mangeant le jour même, à température ambiante et à découvert. Dans une boîte fermée ou au réfrigérateur, la croûte ramollit en quelques heures. Le lendemain, passez-les 5 min dans un four à 200 °C, puis laissez-les tiédir un quart d’heure : la croûte durcit de nouveau en refroidissant.",
    },
    {
      q: "Peut-on congeler les cannelés ?",
      a: "Oui, 2 mois, une fois cuits et complètement refroidis, dans un sac bien fermé. Laissez-les décongeler 1 heure à température ambiante, puis passez-les 5 min dans un four à 200 °C pour raviver la croûte.",
    },
  ],
  nutrition: { calories: 155, protein: 3, fat: 6, saturatedFat: 3, carbs: 22, sugar: 17, fiber: 0, sodium: 25 },
  annotations: { hero: "brun acajou, pas blond", detail: "la croûte doit craquer sous la dent" },
  images: {
    heroAlt:
      "Cannelés bordelais à la croûte brun foncé et au dessus caramélisé, posés sur du papier cuisson",
    detailAlt:
      "Gros plan sur des cannelés bordelais brillants, aux cannelures caramélisées et à la croûte épaisse",
    credits: {
      hero: {
        photographer: "Geraud pfeiffer",
        url: "https://www.pexels.com/photo/sweet-caneles-on-baking-paper-6605306/",
      },
      detail: {
        photographer: "Atypeek Dgn",
        url: "https://www.pexels.com/photo/close-up-of-traditional-french-canele-pastries-38935843/",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#C06C2E",
    onAccent: "#1B1712",
    ink: "#7D3F14",
    tint: "#F8EEE6",
    deep: "#1A0E08",
    focus: "45% 55%",
  },
});
