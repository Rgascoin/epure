import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "rillettes-de-saumon",
  title: "Rillettes de saumon",
  seoTitle: "Rillettes de saumon frais et fumé, à la crème et au citron",
  tagline: "Deux saumons, une fourchette, pas de mixeur.",
  description:
    "Rillettes de saumon pour 6 : 300 g de saumon frais poché 8 minutes, 150 g de saumon fumé, crème fraîche, citron, herbes. 25 minutes de travail, 2 h au frais.",
  summary:
    "Pour 6 personnes, pochez 300 g de saumon frais 8 minutes dans une eau frémissante, laissez-le refroidir, puis émiettez-le à la fourchette avec 150 g de saumon fumé en petits dés, 120 g de crème fraîche épaisse, le zeste et le jus d’un citron, une échalote, des câpres, de la ciboulette et de l’aneth. Deux heures au réfrigérateur pour raffermir. Comptez 3 h en tout, dont 25 minutes de travail. Elles se gardent 48 h.",
  intro: [
    "Les rillettes de saumon n’ont des rillettes que le nom et la texture : du poisson effiloché, lié par un peu de crème, qu’on tartine sur du pain grillé. On mélange du saumon frais poché, qui donne le volume et le moelleux, et du saumon fumé, qui apporte le sel et le goût.",
    "Elles ratent de deux façons : au mixeur, elles virent à la mousse rose et lisse ; avec un saumon frais trop cuit, elles sont sèches et farineuses.",
    "On poche donc le saumon dans une eau qui frémit à peine, juste le temps qu’il soit cuit à cœur, et on écrase tout à la fourchette.",
  ],
  category: "Entrée",
  cuisine: "Française",
  keywords: [
    "rillettes de saumon",
    "recette rillettes de saumon",
    "rillettes de saumon frais et fumé",
    "rillettes de saumon maison",
    "rillettes de saumon à la crème fraîche",
    "rillettes de saumon au fromage frais",
    "rillettes de saumon apéritif",
    "rillettes de saumon grossesse",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 25, cook: 15, rest: 140 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Toute l’année"],
  tags: ["apero", "noel", "nouvel-an"],
  equipment: [
    "une sauteuse ou une casserole large de 24 cm",
    "une écumoire",
    "un saladier",
    "une terrine de 500 ml ou deux petits bocaux",
  ],
  ingredients: [
    {
      title: "Le pochage",
      items: [
        { qty: 1, unit: "l", name: "eau", step: 0.25 },
        { qty: 1, unit: "feuille", name: "laurier", fixed: true },
        { qty: 1, unit: "cac", name: "grains de poivre", fixed: true },
        { qty: 1, unit: "cac", name: "gros sel", fixed: true },
        { qty: 300, unit: "g", name: "pavé de saumon frais", note: "sans peau ni arêtes", step: 10 },
      ],
    },
    {
      title: "Les rillettes",
      items: [
        { qty: 150, unit: "g", name: "saumon fumé", step: 10 },
        { qty: 120, unit: "g", name: "crème fraîche épaisse", note: "bien froide", step: 10 },
        { qty: 1, name: "citron", plural: "citrons", note: "non traité", step: 0.5 },
        { qty: 1, name: "échalote", plural: "échalotes", note: "finement ciselée", step: 1 },
        { qty: 1, unit: "cas", name: "câpres", note: "égouttées", step: 0.5 },
        { qty: 0.5, unit: "botte", name: "ciboulette", step: 0.5 },
        { qty: 4, unit: "brin", name: "aneth", step: 1 },
        { name: "poivre du moulin" },
      ],
    },
  ],
  method: [
    {
      title: "Pocher le saumon",
      steps: [
        {
          title: "Préparer le pochage",
          text: "Dans la sauteuse, portez l’eau à ébullition avec le laurier, les grains de poivre et le gros sel. Baissez aussitôt le feu au minimum : l’eau doit frémir à peine, avec de petites bulles qui montent sans faire de remous.",
        },
        {
          title: "Pocher doucement",
          text: "Plongez le pavé de saumon dans l’eau frémissante et laissez-le pocher 8 minutes sans faire bouillir. Il est cuit quand sa chair est opaque jusqu’au centre et se sépare en lamelles sous la pointe d’un couteau.",
          timer: { minutes: 8, label: "Saumon poché" },
          tip: "Une eau qui bout fait durcir et sécher la chair. Si de grosses bulles apparaissent, versez un peu d’eau froide et baissez le feu.",
        },
        {
          title: "Laisser refroidir",
          text: "Sortez le saumon à l’écumoire, égouttez-le sur une assiette et laissez-le refroidir 20 minutes, puis mettez-le au réfrigérateur s’il est encore tiède. Il doit être froid avant d’être mélangé à la crème.",
          timer: { minutes: 20, label: "Refroidir le saumon" },
        },
      ],
    },
    {
      title: "Assembler les rillettes",
      steps: [
        {
          title: "Préparer l’assaisonnement",
          text: "Râpez finement le zeste du citron, pressez-en le jus. Ciselez la ciboulette et l’aneth. Dans le saladier, mélangez la crème fraîche, le zeste, 2 cuillères à soupe de jus, l’échalote, les câpres et les herbes, puis poivrez généreusement.",
        },
        {
          title: "Couper le saumon fumé",
          text: "Taillez le saumon fumé en petits dés de 5 mm environ. Retirez les éventuelles parties brunes, plus grasses et au goût plus fort.",
        },
        {
          title: "Écraser à la fourchette",
          text: "Émiettez le saumon poché dans le saladier, en retirant les dernières arêtes et les parties grises. Ajoutez les dés de saumon fumé et mélangez à la fourchette, en écrasant juste assez pour que tout se tienne. On doit encore voir des filaments de poisson. Goûtez : le saumon fumé suffit souvent à saler.",
          tip: "N’utilisez pas de mixeur, même par impulsions : quelques secondes suffisent à transformer les rillettes en mousse.",
        },
        {
          title: "Tasser et raffermir",
          text: "Tassez les rillettes dans la terrine ou les bocaux, filmez au contact et laissez reposer 2 heures au réfrigérateur. Elles se raffermissent et le citron se mêle au poisson.",
          timer: { minutes: 120, label: "Rillettes au frais" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi pocher sans bouillir",
      text: "Les protéines du saumon se resserrent dès 50 °C et expulsent leur eau d’autant plus vite que la chaleur est forte. Dans une eau qui frémit à peine, autour de 80 à 90 °C, le cœur atteint sa cuisson pendant que l’extérieur reste juteux.",
    },
    {
      title: "Ce que fait le citron",
      text: "L’acidité du jus de citron raffermit un peu les protéines du poisson et coupe le gras de la crème. C’est pour cela qu’on le dose à la fin, en goûtant : trop de jus rend les rillettes aigres et un peu granuleuses.",
    },
    {
      title: "Pourquoi deux saumons",
      text: "Le saumon fumé a perdu de l’eau au salage et au fumage : il est dense, salé et très aromatique. Seul, il donne des rillettes compactes et trop salées. Le saumon poché, plus humide et neutre, apporte la texture effilochée.",
    },
  ],
  tips: [
    "Préparez les rillettes la veille si vous pouvez : le goût du fumé et du citron se répartit mieux, et vous n’avez plus qu’à les sortir.",
    "Sortez-les du réfrigérateur 10 minutes avant de servir : trop froides, elles se tartinent mal et la crème masque le goût du poisson.",
    "Pour un saumon poché sans arêtes, passez le doigt sur le pavé cru, dans le sens contraire des fibres, et retirez à la pince celles qui dépassent.",
    "Servez avec du pain de campagne grillé, des blinis ou des bâtonnets de concombre, qui gardent la fraîcheur.",
  ],
  mistakes: [
    "Mélanger un saumon encore tiède à la crème : elle fond, les rillettes rendent de l’eau. Attendez qu’il soit froid.",
    "Faire bouillir l’eau de pochage : la chair devient sèche et farineuse. Rattrapage : ajoutez une cuillère à soupe de crème de plus.",
    "Saler avant de goûter : le saumon fumé et les câpres apportent déjà beaucoup de sel. Salez seulement à la fin, si besoin.",
    "Couper le saumon fumé en lanières : elles s’emmêlent et ne se répartissent pas. Les petits dés se mélangent mieux.",
  ],
  variations: [
    {
      title: "Au fromage frais",
      text: "Remplacez la crème fraîche par 120 g de fromage frais nature ou de ricotta. Les rillettes sont plus fermes, plus faciles à tartiner sur des toasts, et un peu plus douces.",
    },
    {
      title: "Sans saumon fumé",
      text: "Pochez 450 g de saumon frais au lieu de 300 g et supprimez le saumon fumé. Ajoutez une pincée de sel fin et une pincée de paprika fumé pour retrouver un peu de profondeur.",
    },
    {
      title: "À la truite",
      text: "Remplacez les deux saumons par la même quantité de truite fraîche et de truite fumée. La truite fraîche poche en 6 minutes seulement.",
    },
  ],
  storage:
    "Les rillettes se gardent 48 h au maximum au réfrigérateur, entre 0 et 4 °C, dans un récipient fermé et filmées au contact. Ne les congelez pas : la crème rend de l’eau à la décongélation. Ne laissez pas le bol plus de 2 heures à température ambiante pendant l’apéritif.",
  pairing: "Un muscadet sur lie ou un sancerre blanc, servis bien frais.",
  faq: [
    {
      q: "Combien de temps se conservent des rillettes de saumon maison ?",
      a: "48 heures au maximum au réfrigérateur, dans un récipient fermé et filmées au contact. Elles contiennent du poisson cuit, du poisson fumé et de la crème : au-delà, mieux vaut s’abstenir.",
    },
    {
      q: "Peut-on manger des rillettes de saumon enceinte ?",
      a: "Non, pas avec du saumon fumé. Les autorités sanitaires déconseillent le poisson fumé aux femmes enceintes à cause du risque de listériose. Faites la version au saumon frais seul, poché à cœur, et conservez-la 24 heures au plus. Même précaution pour les personnes âgées, immunodéprimées et les jeunes enfants.",
    },
    {
      q: "Peut-on congeler des rillettes de saumon ?",
      a: "Non, ce n’est pas conseillé. La crème fraîche se sépare et rend de l’eau à la décongélation, et la texture devient granuleuse. Mieux vaut préparer la quantité nécessaire, la veille au plus tôt.",
    },
    {
      q: "Crème fraîche ou fromage frais pour les rillettes de saumon ?",
      a: "Les deux fonctionnent. La crème fraîche épaisse donne des rillettes plus souples et plus riches ; le fromage frais ou la ricotta les rend plus fermes et plus douces. Gardez la même quantité, 120 g pour 450 g de poisson.",
    },
    {
      q: "Combien de temps pocher un pavé de saumon ?",
      a: "8 minutes pour un pavé de 300 g et de 3 cm d’épaisseur, dans une eau qui frémit à peine. Il est cuit quand la chair est opaque jusqu’au centre et se sépare en lamelles.",
    },
    {
      q: "Peut-on faire des rillettes de saumon avec du saumon en boîte ?",
      a: "Oui, en dépannage. Remplacez le saumon poché par 300 g de saumon en conserve bien égoutté, sans la peau ni les arêtes. Le goût est plus marqué et la texture plus sèche : ajoutez une cuillère à soupe de crème.",
    },
  ],
  nutrition: {
    calories: 208,
    protein: 16,
    fat: 15,
    saturatedFat: 5.8,
    carbs: 1.6,
    sugar: 0.8,
    fiber: 0.1,
    sodium: 407,
  },
  annotations: { hero: "écrasées à la fourchette", detail: "on doit voir les filaments" },
  images: {
    heroAlt:
      "Rillettes de saumon aux câpres sur une assiette blanche, avec deux tranches de pain grillé, des cornichons et du chou kale frit",
    detailAlt:
      "Gros plan sur des rillettes de saumon effilochées, piquées de câpres et de petites feuilles d’herbes, à côté d’un pain grillé",
    credits: {
      hero: {
        photographer: "Valeria Boltneva",
        url: "https://www.pexels.com/photo/delicious-salmon-spread-with-pickles-and-bread-29692601/",
      },
      detail: {
        photographer: "Valeria Boltneva",
        url: "https://www.pexels.com/photo/delicious-salmon-spread-with-toast-and-pickles-29692603/",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#F0A08A",
    onAccent: "#1B1712",
    ink: "#A2422E",
    tint: "#FCF0EC",
    deep: "#1B0D0A",
    focus: "45% 50%",
  },
});
