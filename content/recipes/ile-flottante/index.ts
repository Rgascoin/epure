import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "ile-flottante",
  title: "Île flottante",
  seoTitle: "Île flottante maison, crème anglaise et caramel",
  tagline: "Une crème cuite au degré près.",
  description:
    "Une île flottante pour 6 : crème anglaise à la vanille cuite à 83 °C, 4 blancs en neige pochés 4 minutes et un caramel versé au dernier moment.",
  summary:
    "Pour 6 personnes, faites infuser une gousse de vanille dans 75 cl de lait entier, puis cuisez-le avec 6 jaunes et 100 g de sucre jusqu’à 82–84 °C, à la nappe, et laissez la crème refroidir 2 heures. Montez 4 blancs avec 60 g de sucre, pochez-les 4 minutes dans une eau frémissante et nappez de caramel au moment de servir. Comptez 3 h 15 en tout, dont 2 heures de froid.",
  intro: [
    "L’île flottante, ce sont des blancs en neige pochés, posés sur une crème anglaise froide à la vanille, avec un filet de caramel qui durcit en fils cassants. Trois préparations simples, mais chacune a son point.",
    "Celui qui compte le plus, c’est la cuisson de la crème. Elle épaissit entre 82 et 84 °C ; quelques degrés de plus et les jaunes forment des grains. On la cuit à feu doux, sans la quitter, et on l’arrête dès qu’elle nappe la spatule.",
    "Pour les îles, l’eau doit frémir à peine. Si elle bout, les meringues gonflent comme des ballons, puis retombent en caoutchouc.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "île flottante",
    "recette île flottante",
    "îles flottantes",
    "île flottante facile",
    "crème anglaise maison",
    "œufs à la neige",
    "île flottante au micro-ondes",
    "rattraper une crème anglaise",
  ],
  diet: ["vegetarian", "glutenFree"],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 30, cook: 30, rest: 135 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Toute l’année"],
  tags: ["fete-des-grands-meres"],
  equipment: [
    "casserole à fond épais de 2 l",
    "thermomètre de cuisson",
    "batteur électrique",
    "grande sauteuse et écumoire",
    "chinois ou passoire fine",
  ],
  ingredients: [
    {
      title: "Crème anglaise",
      items: [
        { qty: 750, unit: "ml", name: "lait entier", step: 10 },
        { qty: 1, unit: "gousse", name: "vanille", note: "fendue et grattée", step: 1 },
        { qty: 6, name: "jaune d’œuf", plural: "jaunes d’œufs", note: "gardez 4 blancs pour les îles", step: 1 },
        { qty: 100, unit: "g", name: "sucre en poudre", step: 5 },
      ],
    },
    {
      title: "Îles",
      items: [
        { qty: 4, name: "blanc d’œuf", plural: "blancs d’œufs", note: "à température ambiante", step: 1 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1, fixed: true },
        { qty: 60, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 1.5, unit: "l", name: "eau", note: "pour pocher", fixed: true },
      ],
    },
    {
      title: "Caramel",
      items: [
        { qty: 80, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 2, unit: "cas", name: "eau", step: 1 },
        {
          qty: 20,
          unit: "g",
          name: "amandes effilées",
          note: "grillées à sec, fruits à coque",
          step: 5,
          optional: true,
        },
      ],
    },
  ],
  method: [
    {
      title: "La crème anglaise",
      steps: [
        {
          title: "Infuser la vanille",
          text: "Mettez le lait, les graines de vanille et la gousse grattée dans la casserole. Portez à frémissement, puis couvrez hors du feu et laissez infuser 15 minutes.",
          timer: { minutes: 15, label: "Infusion de la vanille" },
        },
        {
          title: "Mélanger les jaunes",
          text: "Fouettez les jaunes et le sucre dans un saladier, juste assez pour que le mélange pâlisse, sans le faire mousser. Retirez la gousse, réchauffez le lait jusqu’au frémissement et versez-en un tiers sur les jaunes en fouettant. Reversez le tout dans la casserole.",
        },
        {
          title: "Cuire à la nappe",
          text: "Sur feu doux, remuez sans arrêt avec une spatule en dessinant des huit, sans jamais laisser bouillir, pendant 8 à 10 minutes. La crème est cuite à 82–84 °C : elle a un peu épaissi, la mousse a disparu et, sur la spatule, un trait tracé au doigt reste net.",
          timer: { minutes: 10, label: "Cuisson de la crème" },
          tip: "Gardez un saladier froid et un mixeur plongeant à portée de main. Au premier grain, versez la crème dans le saladier et mixez : si elle n’a pas trop tranché, elle redevient lisse.",
        },
        {
          title: "Refroidir rapidement",
          text: "Filtrez aussitôt la crème dans un saladier posé dans un bain d’eau glacée et remuez de temps en temps jusqu’à ce qu’elle soit tiède. Filmez au contact et laissez-la au moins 2 heures au réfrigérateur.",
          timer: { minutes: 120, label: "Crème au réfrigérateur" },
        },
      ],
    },
    {
      title: "Les îles",
      steps: [
        {
          title: "Monter les blancs",
          text: "Dans un bol propre et sec, fouettez les blancs avec le sel au batteur, à vitesse moyenne. Quand ils sont mousseux, ajoutez le sucre en trois fois, puis passez à pleine vitesse. Arrêtez quand la meringue est ferme et brillante, et forme un bec d’oiseau au bout du fouet.",
        },
        {
          title: "Pocher les îles",
          text: "Chauffez l’eau dans la sauteuse jusqu’à un frémissement léger, sans bouillons, vers 80 à 90 °C. Formez 6 grosses boules de meringue avec deux grandes cuillères et pochez-les par trois, 4 minutes en tout, 2 minutes de chaque côté, en les retournant à l’écumoire. Elles sont prêtes quand elles ont gonflé et restent fermes sous le doigt. Égouttez-les sur un torchon propre.",
          timer: { minutes: 4, label: "Pochage d’une fournée" },
          tip: "Au micro-ondes, déposez chaque île dans un bol passé sous l’eau froide et faites-la cuire 20 à 30 secondes à 800 W, jusqu’à ce qu’elle soit ferme au centre.",
        },
      ],
    },
    {
      title: "Caramel et service",
      steps: [
        {
          title: "Cuire le caramel",
          text: "Dans une petite casserole, mettez le sucre et l’eau sur feu moyen, sans remuer. Au bout de 5 à 7 minutes, quand le caramel est ambré, trempez le fond de la casserole deux secondes dans l’eau froide pour arrêter la cuisson.",
          timer: { minutes: 7, label: "Cuisson du caramel" },
        },
        {
          title: "Dresser",
          text: "Versez la crème anglaise froide dans six assiettes creuses ou coupes, posez une île sur chacune et faites couler le caramel en fils fins avec une cuillère. Parsemez d’amandes grillées si vous en mettez, et servez aussitôt, avant que le caramel ne fonde dans la crème.",
        },
      ],
    },
  ],
  science: [
    {
      title: "La nappe, entre 82 et 84 °C",
      text: "Les protéines du jaune d’œuf commencent à coaguler vers 65 °C et épaississent la crème. Le sucre et le lait les diluent et repoussent le moment où elles se resserrent : on peut monter jusqu’à 82–84 °C sans grains. Au-delà de 85 °C environ, elles forment des grumeaux et la crème tranche.",
    },
    {
      title: "Pourquoi les îles gonflent puis retombent",
      text: "Le fouet déplie les protéines du blanc, qui s’assemblent en film autour des bulles d’air ; le sucre stabilise ce film. Dans l’eau chaude, l’air se dilate et les protéines coagulent, ce qui fige la mousse. Si l’eau bout, l’eau contenue dans la meringue se vaporise, les bulles éclatent et l’île se tasse en devenant élastique.",
    },
    {
      title: "Un caramel en verre",
      text: "Versé sur une crème froide, le caramel refroidit trop vite pour que le sucre recristallise : il se fige en verre, d’où ces fils qui cassent sous la cuillère. L’humidité de la crème les fait ensuite fondre, d’où l’intérêt de servir tout de suite.",
    },
  ],
  tips: [
    "Un thermomètre de cuisson enlève tout le stress de la crème anglaise. Sans lui, fiez-vous au trait sur la spatule, et retirez la casserole du feu à la moindre hésitation.",
    "Pour les blancs, un bol sans aucune trace de gras ni de jaune : la matière grasse empêche la mousse de monter.",
    "Les 2 blancs qui restent se congèlent très bien dans une petite boîte, pour des financiers ou une autre meringue.",
    "Pochez les îles pendant que la crème refroidit : elles attendent sans souci au réfrigérateur, sur leur torchon, jusqu’à 3 heures.",
  ],
  mistakes: [
    "Une crème qui bout : les jaunes coagulent en grains. Mixez-la aussitôt dans un récipient froid ; si elle a tourné en œufs brouillés, il faut recommencer.",
    "Une crème pas assez cuite : elle reste liquide comme du lait et n’a pas de goût. Allez jusqu’à 82 °C, quitte à prolonger de quelques instants.",
    "Une eau de pochage trop chaude : les îles gonflent, puis retombent et deviennent caoutchouteuses. Baissez le feu dès que des bouillons apparaissent.",
    "Un caramel versé trop tôt : il fond dans la crème et disparaît. Faites-le en dernier, au moment de servir.",
  ],
  variations: [
    {
      title: "Îles pochées dans le lait",
      text: "Pochez d’abord les îles dans le lait vanillé frémissant, 4 minutes chacune, puis filtrez ce lait, complétez-le à 750 ml et faites la crème anglaise avec. Elle a un peu plus de goût, mais les îles attendent plus longtemps.",
    },
    {
      title: "Caramel qui reste liquide",
      text: "Hors du feu, versez 3 cuillères à soupe d’eau chaude dans le caramel ambré, en reculant : ça crache. Remuez, il reste coulant au lieu de durcir en fils.",
    },
    {
      title: "Au pralin",
      text: "Remplacez les amandes effilées par 30 g de pralin concassé, parsemé au dernier moment sur les îles. Il contient des fruits à coque.",
    },
  ],
  storage:
    "Gardez la crème anglaise et les îles séparément au réfrigérateur, filmées, et mangez-les dans les 24 heures. Le caramel se fait au moment de servir. Ni la crème ni les îles ne se congèlent.",
  pairing: "Quelques tuiles aux amandes ou des langues-de-chat, et un café.",
  faq: [
    {
      q: "L’île flottante convient-elle aux femmes enceintes ?",
      a: "Oui, si tout est bien cuit. La crème anglaise monte à 82–84 °C, une température qui détruit les salmonelles, et les îles doivent être fermes jusqu’au centre, pas seulement saisies en surface. Pour les femmes enceintes, les jeunes enfants, les personnes âgées et immunodéprimées, soyez strict sur ces deux points et servez dans les 24 heures.",
    },
    {
      q: "Comment savoir si une crème anglaise est cuite sans thermomètre ?",
      a: "Trempez la spatule, retournez-la et tracez un trait au doigt. S’il reste net, sans que la crème coule dedans, elle est à la nappe, soit 82–84 °C. La mousse de surface a aussi disparu. Tant que la crème ruisselle comme du lait, elle n’est pas cuite.",
    },
    {
      q: "Comment rattraper une crème anglaise qui a tourné ?",
      a: "Si elle commence juste à grainer, versez-la tout de suite dans un récipient froid et mixez-la au mixeur plongeant : elle redevient lisse, un peu plus fluide. Si elle a franchement tourné en œufs brouillés, avec du liquide séparé, elle ne se rattrape pas.",
    },
    {
      q: "Peut-on cuire les îles flottantes au micro-ondes ?",
      a: "Oui. Déposez chaque île dans un bol passé sous l’eau froide et faites-la cuire 20 à 30 secondes à 800 W. Elle gonfle, puis se raffermit. Vérifiez qu’elle est ferme jusqu’au centre, et prolongez de 10 secondes si ce n’est pas le cas.",
    },
    {
      q: "Pourquoi mes îles flottantes retombent-elles ?",
      a: "Parce que l’eau bouillait ou qu’elles ont cuit trop longtemps. La meringue gonfle trop vite, puis se tasse et rend de l’eau. Pochez dans une eau qui frémit à peine, entre 80 et 90 °C, avec des blancs bien fermes, montés avec leur sucre.",
    },
    {
      q: "Quelle différence entre île flottante et œufs à la neige ?",
      a: "À l’origine, l’île flottante est une seule grosse meringue cuite au bain-marie dans un moule caramélisé, servie en tranches sur la crème anglaise. Les œufs à la neige sont des blancs pochés par cuillerées. Aujourd’hui, on dit île flottante pour les deux, et c’est la version pochée que l’on fait ici.",
    },
    {
      q: "Peut-on préparer l’île flottante la veille ?",
      a: "En partie. La crème anglaise peut se faire la veille, filmée au contact et gardée au réfrigérateur, à condition de la servir dans les 24 heures. Les îles se pochent le jour même, jusqu’à 3 heures avant, et le caramel au dernier moment.",
    },
  ],
  nutrition: {
    calories: 305,
    protein: 9,
    fat: 9,
    saturatedFat: 4,
    carbs: 46,
    sugar: 46,
    fiber: 0,
    sodium: 115,
  },
  annotations: {
    hero: "arrêter à la nappe, vers 83 °C",
    detail: "une eau qui frémit, jamais bouillante",
  },
  images: {
    heroAlt:
      "Île flottante dans une coupe en verre : meringue pochée nappée de caramel et d’amandes effilées sur la crème anglaise",
    detailAlt: "Coupe d’îles flottantes : plusieurs meringues pochées couvertes de fils de caramel doré",
    credits: {
      hero: {
        photographer: "Arnaud 25",
        url: "https://commons.wikimedia.org/w/index.php?curid=150687895",
        source: "Wikimedia Commons",
        license: "CC0",
      },
      detail: {
        photographer: "Arnaud 25",
        url: "https://commons.wikimedia.org/w/index.php?curid=150690373",
        source: "Wikimedia Commons",
        license: "CC0",
      },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#D9A441",
    onAccent: "#1B1712",
    ink: "#80590F",
    tint: "#FAF3E1",
    deep: "#1C1508",
    focus: "50% 40%",
  },
});
