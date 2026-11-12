import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "financiers",
  title: "Financiers",
  seoTitle: "Financiers au beurre noisette, bords dorés et cœur moelleux",
  tagline: "Les blancs d’œufs ont enfin un emploi.",
  description:
    "16 financiers au beurre noisette, à la poudre d’amandes et aux blancs d’œufs, cuits 10 à 12 minutes à 200 °C après 1 h de repos de la pâte.",
  summary:
    "Pour 16 financiers, faites un beurre noisette avec 130 g de beurre, mélangez 150 g de sucre glace, 60 g de poudre d’amandes et 50 g de farine avec 150 g de blancs d’œufs (5 blancs environ), puis incorporez le beurre tiède. La pâte repose au moins 1 h au réfrigérateur avant de cuire 10 à 12 minutes à 200 °C dans des moules à financiers. Comptez 1 h 55 en tout, dont 20 minutes de travail.",
  intro: [
    "Un financier, c’est un petit gâteau rectangulaire aux blancs d’œufs, à la poudre d’amandes et au beurre noisette. Les bords sortent du four dorés et un peu croustillants, le cœur reste dense et humide. Pas de levure, pas de jaunes, pas de batteur.",
    "Le beurre fait le goût. Cuit jusqu’à la couleur noisette, il sent les fruits secs grillés ; quelques secondes de trop, il noircit et devient amer. Restez à côté de la casserole et versez-le dans un bol froid dès que la mousse se teinte.",
    "Laissez ensuite reposer la pâte au moins une heure au frais : elle épaissit et se dresse mieux dans les moules. Et prévenez vos invités, ces gâteaux contiennent des amandes.",
  ],
  category: "Goûter",
  cuisine: "Française",
  keywords: [
    "financiers",
    "recette financiers",
    "financier au beurre noisette",
    "financiers aux amandes",
    "financiers maison",
    "recette avec des blancs d’œufs",
    "moule à financiers",
    "repos pâte à financier",
  ],
  diet: ["vegetarian"],
  servings: 16,
  servingsLabel: { one: "financier", other: "financiers" },
  times: { prep: 20, cook: 20, rest: 75 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Toute l’année"],
  tags: [],
  equipment: [
    "moule à financiers de 8 × 4 cm",
    "casserole claire à fond épais",
    "tamis",
    "maryse",
    "pinceau et grille",
  ],
  ingredients: [
    {
      title: "Le beurre noisette",
      items: [{ qty: 130, unit: "g", name: "beurre doux", step: 10 }],
    },
    {
      title: "La pâte",
      items: [
        { qty: 150, unit: "g", name: "sucre glace", step: 10 },
        { qty: 60, unit: "g", name: "poudre d’amandes", note: "fruit à coque", step: 5 },
        { qty: 50, unit: "g", name: "farine T55", step: 5 },
        { qty: 1, unit: "pincee", name: "sel fin", fixed: true },
        { qty: 150, unit: "g", name: "blancs d’œufs", note: "environ 5 blancs, à température ambiante", step: 10 },
      ],
    },
    {
      title: "Les moules",
      items: [{ qty: 10, unit: "g", name: "beurre mou", note: "pour les moules en métal", step: 5 }],
    },
  ],
  method: [
    {
      title: "La pâte",
      steps: [
        {
          title: "Faire le beurre noisette",
          text: "Faites fondre le beurre dans la casserole sur feu moyen. Il mousse, crépite, puis se calme, et les petits dépôts blancs du fond commencent à brunir. Au bout de 5 à 7 minutes, quand il sent la noisette grillée et prend une couleur ambrée, versez-le aussitôt dans un bol froid, dépôts compris.",
          timer: { minutes: 6, label: "Beurre noisette" },
          tip: "Une casserole claire permet de suivre la couleur. Dans une poêle noire, on la voit trop tard.",
        },
        {
          title: "Laisser tiédir",
          text: "Laissez tiédir le beurre 15 minutes : il doit être tiède au doigt, autour de 40 °C, et encore bien liquide.",
          timer: { minutes: 15, label: "Beurre à tiédir" },
        },
        {
          title: "Mélanger les poudres",
          text: "Tamisez le sucre glace, la poudre d’amandes et la farine dans un saladier, puis ajoutez le sel. Versez dans le saladier les grains d’amande restés dans le tamis.",
        },
        {
          title: "Ajouter les blancs",
          text: "Versez les blancs non battus et mélangez à la maryse, sans fouetter, jusqu’à obtenir une pâte lisse et épaisse. Le but n’est pas d’incorporer de l’air.",
        },
        {
          title: "Incorporer le beurre",
          text: "Versez le beurre tiède en filet en mélangeant doucement. La pâte devient lisse et brillante, et tombe de la maryse en ruban épais.",
        },
        {
          title: "Reposer la pâte",
          text: "Couvrez d’un film au contact et placez au réfrigérateur au moins 1 h, et 24 h au plus.",
          timer: { minutes: 60, label: "Repos de la pâte" },
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Préparer les moules",
          text: "Préchauffez le four à 200 °C. Beurrez les moules en métal au pinceau, angles compris ; ceux en silicone n’en ont pas besoin. Posez-les sur la plaque du four.",
        },
        {
          title: "Garnir les moules",
          text: "Remplissez chaque empreinte aux trois quarts, à la cuillère ou à la poche, soit environ 30 g de pâte. Si le moule ne suffit pas pour tout, gardez le reste au frais pour une seconde fournée.",
        },
        {
          title: "Cuire les financiers",
          text: "Enfournez 10 à 12 minutes, jusqu’à ce que les bords soient bien dorés et que le centre, bombé, reprenne sa forme sous le doigt.",
          timer: { minutes: 12, label: "Cuisson des financiers" },
        },
        {
          title: "Démouler",
          text: "Laissez reposer 5 minutes hors du four, puis démoulez et laissez refroidir sur une grille.",
          timer: { minutes: 5, label: "Avant démoulage" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Le beurre noisette",
      text: "Le beurre contient environ 16 % d’eau. En chauffant, elle s’évapore, c’est la mousse qui crépite, puis les protéines et le lactose déposés au fond brunissent par réaction de Maillard. On perd du poids en route : 130 g de beurre donnent un peu plus de 100 g de beurre noisette.",
    },
    {
      title: "Les blancs font la structure",
      text: "Sans jaunes ni levure, ce sont les protéines du blanc qui tiennent le gâteau : elles coagulent à partir de 62 °C environ et forment son squelette. Le sucre et la poudre d’amandes, riche en matières grasses, le gardent dense et humide.",
    },
    {
      title: "Pourquoi la pâte repose",
      text: "Au froid, le beurre fige et la farine finit de s’hydrater : la pâte épaissit. Plus ferme, elle s’étale moins vite dans le moule chaud et cuit de façon plus régulière.",
    },
    {
      title: "Des bords croustillants",
      text: "Dans un moule en métal beurré, la pâte au contact des parois chauffe vite et caramélise : les bords dorent et croustillent. Le silicone conduit moins bien la chaleur et donne des bords plus pâles.",
    },
  ],
  tips: [
    "Pesez les blancs plutôt que de les compter : selon la taille des œufs, 5 blancs pèsent de 150 à 175 g.",
    "Gardez les jaunes sous film au réfrigérateur et utilisez-les dans les 24 heures.",
    "La poche à douille remplit les moules plus vite et plus proprement que la cuillère.",
    "Les bords croustillent surtout le jour même : faites-les cuire peu avant le goûter.",
  ],
  mistakes: [
    "Laisser noircir le beurre : les dépôts brûlés rendent toute la fournée amère. S’il est brun foncé et sent le brûlé, recommencez avec un beurre neuf.",
    "Verser le beurre encore chaud sur les blancs : il les cuit par endroits et la pâte graine. Attendez qu’il soit tiède au doigt.",
    "Fouetter les blancs : l’air fait gonfler puis retomber les financiers, qui deviennent secs et creux. Mélangez à la maryse.",
    "Trop remplir les moules : la pâte déborde et les financiers collent aux bords. Trois quarts suffisent.",
    "Démouler à la sortie du four : ils se cassent. Attendez 5 minutes, le temps qu’ils se raffermissent.",
  ],
  variations: [
    {
      title: "Aux framboises",
      text: "Enfoncez une framboise fraîche ou surgelée au centre de chaque financier avant d’enfourner, et prolongez la cuisson de 2 minutes.",
    },
    {
      title: "À la noisette",
      text: "Remplacez la poudre d’amandes par la même quantité de poudre de noisettes. Le goût du beurre noisette ressort encore davantage. C’est toujours un fruit à coque.",
    },
    {
      title: "Au miel",
      text: "Remplacez 20 g de sucre glace par 20 g de miel liquide, ajouté avec les blancs. Les bords brunissent plus vite : surveillez à partir de 9 minutes.",
    },
  ],
  storage:
    "3 jours dans une boîte hermétique, à température ambiante. 2 mois au congélateur, emballés un par un ; 10 minutes au four à 150 °C leur rendent du croustillant. La pâte crue se garde 24 h au réfrigérateur, pas plus, à cause des blancs crus.",
  pairing:
    "Un café, un thé noir, ou à côté d’une salade de fruits ou d’une glace à la vanille pour le dessert.",
  faq: [
    {
      q: "Faut-il faire reposer la pâte à financiers ?",
      a: "Oui, au moins 1 heure au réfrigérateur. La pâte épaissit en refroidissant, se dresse plus facilement et cuit de façon plus régulière. Vous pouvez la préparer jusqu’à 24 heures à l’avance.",
    },
    {
      q: "Combien de temps se garde la pâte à financiers au réfrigérateur ?",
      a: "24 heures au maximum, couverte au contact. Elle contient des blancs d’œufs crus : au-delà, mieux vaut la cuire. Les financiers cuits, eux, se gardent 3 jours dans une boîte hermétique.",
    },
    {
      q: "Que faire des jaunes d’œufs restants ?",
      a: "5 jaunes, c’est de quoi faire une crème brûlée, une crème anglaise ou une pâte sablée. Couverts d’un film au contact, ils se gardent 24 heures au réfrigérateur.",
    },
    {
      q: "Peut-on faire des financiers sans moule à financiers ?",
      a: "Oui, dans un moule à mini-muffins ou à madeleines, rempli aux trois quarts. Les petites empreintes rondes cuisent en 9 à 11 minutes ; fiez-vous à la couleur des bords.",
    },
    {
      q: "Les financiers contiennent-ils des fruits à coque ?",
      a: "Oui, la poudre d’amandes. Ils sont donc à éviter en cas d’allergie aux fruits à coque, tout comme les variantes à la noisette ou à la pistache.",
    },
    {
      q: "Peut-on utiliser des blancs d’œufs en brique ?",
      a: "Oui, les blancs pasteurisés vendus en brique conviennent : pesez-en 150 g et respectez la date indiquée une fois la brique ouverte.",
    },
    {
      q: "Peut-on congeler des financiers ?",
      a: "Oui, 2 mois, emballés un par un. Laissez-les décongeler 1 heure à température ambiante, puis passez-les 10 minutes au four à 150 °C pour raviver les bords.",
    },
  ],
  nutrition: { calories: 140, protein: 2, fat: 9, saturatedFat: 5, carbs: 12, sugar: 10, fiber: 1, sodium: 25 },
  annotations: { hero: "bords dorés, cœur encore humide", detail: "couleur noisette, jamais plus foncé" },
  images: {
    heroAlt: "Deux financiers rectangulaires bien dorés posés l’un contre l’autre sur une assiette blanche",
    detailAlt: "Financiers aux amandes dorés posés sur une plaque d’ardoise, sur fond clair",
    credits: {
      hero: {
        photographer: "Kikaineko",
        url: "https://commons.wikimedia.org/wiki/File:Two_rectangular_financiers.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
      },
      detail: {
        photographer: "Thesupermat",
        url: "https://commons.wikimedia.org/wiki/File:Financiers_-_Patisserie_-_002.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#D98B3A",
    onAccent: "#1B1712",
    ink: "#86501A",
    tint: "#FAF0E3",
    deep: "#1B1009",
    focus: "50% 50%",
  },
});
