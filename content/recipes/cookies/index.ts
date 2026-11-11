import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "cookies",
  title: "Cookies aux pépites de chocolat",
  seoTitle: "Cookies aux pépites de chocolat, moelleux au cœur",
  tagline: "Le cœur encore mou, c’est voulu.",
  description:
    "Des cookies aux pépites de chocolat croustillants au bord et moelleux au cœur : beurre fondu (noisette si vous voulez), 2 h de repos, 11 minutes au four.",
  summary:
    "Pour 16 cookies, mélangez 170 g de beurre fondu tiède avec 150 g de vergeoise brune et 100 g de sucre, puis 1 œuf, 1 jaune et la vanille. Ajoutez 225 g de farine, une demi-cuillère à café de bicarbonate et autant de sel, puis 200 g de pépites de chocolat. Façonnez des boules de 55 g, laissez-les au moins 2 heures au réfrigérateur et faites-les cuire 10 à 12 minutes à 180 °C.",
  intro: [
    "Un bon cookie aux pépites de chocolat a deux textures : un bord doré qui croque et un cœur encore tendre, presque pâteux. Pour y arriver, on utilise du beurre fondu, un sucre brun bien humide et un peu de bicarbonate, et on sort la plaque quand le centre a l’air de ne pas être tout à fait cuit.",
    "Le geste qui change le plus le résultat, c’est le repos de la pâte au frais : 2 heures au minimum, 24 heures si vous avez la patience. Le beurre noisette est facultatif, mais il ajoute un goût de noisette grillée qu’on aime beaucoup.",
    "Ce qui peut rater : des cookies qui s’étalent en galettes fines, parce que la pâte était trop chaude, ou qui sortent secs, parce qu’ils ont cuit 2 minutes de trop. Les repères des étapes évitent les deux.",
  ],
  category: "Goûter",
  cuisine: "Américaine",
  keywords: [
    "cookies",
    "recette cookies",
    "cookies aux pépites de chocolat",
    "cookies moelleux",
    "cookies maison",
    "cookies au beurre noisette",
    "cookies américains",
    "pâte à cookies",
    "cookies chocolat facile",
  ],
  diet: ["vegetarian"],
  servings: 16,
  servingsLabel: { one: "cookie", other: "cookies" },
  times: { prep: 20, cook: 25, rest: 130 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  equipment: [
    "petite casserole à fond clair (pour surveiller le beurre)",
    "saladier et maryse",
    "fouet",
    "cuillère à glace ou balance, pour des boules régulières",
    "boîte hermétique pour le repos au frais",
    "deux plaques de cuisson et du papier sulfurisé",
    "grille de refroidissement",
  ],
  ingredients: [
    {
      items: [
        { qty: 170, unit: "g", name: "beurre doux", note: "fondu, ou noisette", step: 5 },
        {
          qty: 150,
          unit: "g",
          name: "vergeoise brune",
          note: "ou sucre muscovado ; à défaut, cassonade",
          step: 5,
        },
        { qty: 100, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 1, name: "œuf", plural: "œufs", note: "à température ambiante", step: 1 },
        { qty: 1, name: "jaune d’œuf", plural: "jaunes d’œufs", step: 1 },
        { qty: 1, unit: "cac", name: "extrait de vanille", step: 0.5 },
        { qty: 225, unit: "g", name: "farine T55", step: 5 },
        { qty: 0.5, unit: "cac", name: "bicarbonate de soude", step: 0.25 },
        { qty: 0.5, unit: "cac", name: "sel fin", step: 0.25 },
        {
          qty: 200,
          unit: "g",
          name: "pépites de chocolat noir",
          note: "ou chocolat noir à 60 ou 70 % haché au couteau",
          step: 10,
        },
      ],
    },
  ],
  method: [
    {
      title: "La pâte",
      steps: [
        {
          title: "Fondre le beurre",
          text: "Faites fondre le beurre dans une petite casserole à feu moyen-doux, 2 à 3 minutes. Pour un beurre noisette (facultatif), prolongez de 4 à 5 minutes en remuant : il mousse, puis des grains bruns se déposent au fond et ça sent la noisette grillée. Versez aussitôt dans un saladier, grains compris.",
          timer: { minutes: 3, label: "Fonte du beurre" },
          tip: "Le beurre noisette passe au brûlé en quelques secondes. Dès que les grains sont couleur noisette, versez-le dans le saladier : la casserole chaude continuerait de le cuire.",
        },
        {
          title: "Laisser tiédir",
          text: "Laissez tiédir le beurre 10 minutes. Il doit être juste tiède quand vous y trempez le doigt : trop chaud, il cuirait l’œuf et ferait fondre les pépites.",
          timer: { minutes: 10, label: "Beurre qui tiédit" },
        },
        {
          title: "Ajouter sucres et œufs",
          text: "Ajoutez la vergeoise et le sucre au beurre et fouettez une trentaine de secondes, jusqu’à ce que le mélange soit homogène. Ajoutez l’œuf, le jaune et la vanille, puis fouettez encore jusqu’à obtenir une pâte lisse et brillante, comme un caramel épais.",
        },
        {
          title: "Incorporer la farine",
          text: "Mélangez la farine, le bicarbonate et le sel dans un bol, puis versez-les dans le saladier. Mélangez à la maryse juste assez pour qu’il ne reste plus de farine sèche. Ajoutez les pépites, en gardant une petite poignée de côté, et donnez trois ou quatre tours.",
        },
        {
          title: "Façonner les boules",
          text: "Formez 16 boules de 55 g environ, une cuillère à glace bien pleine. Posez-les serrées dans une boîte, enfoncez sur le dessus les pépites gardées de côté et fermez la boîte.",
        },
        {
          title: "Laisser reposer au frais",
          text: "Laissez reposer les boules au réfrigérateur au moins 2 heures. Vous pouvez aller jusqu’à 72 heures : après une nuit, les bords sont plus dorés et le goût de caramel plus marqué.",
          timer: { minutes: 120, label: "Repos de la pâte" },
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Préchauffer le four",
          text: "Vers la fin du repos, préchauffez le four à 180 °C, chaleur statique, grille au milieu, pendant 20 minutes. Tapissez les deux plaques de papier sulfurisé.",
          timer: { minutes: 20, label: "Préchauffage du four" },
        },
        {
          title: "Cuire les cookies",
          text: "Posez 8 boules par plaque, encore froides, espacées de 6 cm. Enfournez une seule plaque à la fois, 10 à 12 minutes : les bords sont dorés et pris, le centre est encore pâle, gonflé et brillant. Il a l’air presque cru, c’est le bon moment pour les sortir.",
          timer: { minutes: 11, label: "Cuisson des cookies" },
          tip: "Ils finissent de cuire sur la plaque chaude et se raffermissent en refroidissant. Une minute de trop, et le cœur moelleux devient sec.",
        },
        {
          title: "Laisser raffermir",
          text: "Laissez les cookies 10 minutes sur la plaque, le temps qu’ils se tiennent, puis faites-les glisser sur une grille. Pendant ce temps, enfournez la deuxième plaque.",
          timer: { minutes: 10, label: "Repos sur la plaque" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi le repos de la pâte",
      text: "Pendant le repos, la farine absorbe lentement l’eau de l’œuf et du beurre, et une partie du sucre se dissout. La pâte, plus ferme, s’étale moins au four ; le sucre dissous caramélise mieux en surface. Les bords dorent davantage et le goût de caramel est plus marqué.",
    },
    {
      title: "Beurre fondu, cookie dense",
      text: "Un beurre crémé avec le sucre emprisonne des bulles d’air qui font gonfler la pâte, comme un gâteau. Le beurre fondu n’en apporte pas : le cookie est plus dense et plus moelleux au centre.",
    },
    {
      title: "Ce que fait le bicarbonate",
      text: "Le bicarbonate réagit avec l’acidité de la vergeoise et dégage du gaz carbonique, qui soulève la pâte. Il rend aussi la pâte moins acide, ce qui favorise la réaction de Maillard : les cookies dorent plus et s’étalent un peu.",
    },
    {
      title: "Le goût du beurre noisette",
      text: "Tant qu’il contient de l’eau, le beurre reste vers 100 °C. Une fois l’eau évaporée, la température monte et les protéines et le lactose du beurre, ce dépôt blanc qui tombe au fond, brunissent par réaction de Maillard. Ce sont eux qui sentent la noisette grillée : versez-les dans la pâte.",
    },
  ],
  tips: [
    "Pesez la farine plutôt que de la mesurer à la tasse : à la tasse, on en met facilement trop, et les cookies sortent secs et bombés.",
    "Cuisez une seule plaque à la fois, au milieu du four, et posez toujours la pâte sur une plaque froide : sur une plaque encore chaude, elle s’étale avant de cuire.",
    "Pour des cookies parfaitement ronds, posez un verre un peu plus large que le cookie sur chacun à la sortie du four et faites-le tourner en rond quelques secondes.",
    "Quelques grains de fleur de sel sur les boules juste avant d’enfourner font ressortir le chocolat et le caramel.",
    "Des boules congelées se cuisent sans décongélation : comptez 2 minutes de plus.",
  ],
  mistakes: [
    "Mélanger le beurre encore chaud avec l’œuf. Il le cuit en partie, fait fondre les pépites, et la pâte devient grasse.",
    "Trop travailler la pâte après la farine. Les cookies deviennent durs et élastiques.",
    "Attendre que le centre soit doré pour les sortir. Ils durcissent en refroidissant et finissent secs.",
    "Sauter le repos au frais. La pâte s’étale en galettes fines qui brunissent trop vite sur les bords.",
  ],
  variations: [
    {
      title: "Façon boulangerie",
      text: "Formez 8 grosses boules de 110 g au lieu de 16, posez-en 4 par plaque et faites-les cuire 14 à 16 minutes à 180 °C. Le centre reste encore plus moelleux.",
    },
    {
      title: "Aux noix de pécan",
      text: "Remplacez 50 g de pépites par 80 g de noix de pécan grillées 8 minutes à 170 °C puis concassées. Attention, elles font partie des fruits à coque : prévenez vos invités allergiques.",
    },
    {
      title: "Double chocolat",
      text: "Remplacez 30 g de farine par 30 g de cacao en poudre non sucré, tamisé avec le reste. Sortez-les à 10 minutes : sur une pâte brune, la couleur des bords ne sert plus de repère.",
    },
  ],
  storage:
    "Dans une boîte hermétique, 4 à 5 jours à température ambiante. La pâte crue se garde 72 heures au réfrigérateur, ou 3 mois au congélateur en boules, à cuire sans décongélation.",
  pairing: "Un grand verre de lait froid, ou un café filtre pour les adultes.",
  faq: [
    {
      q: "Pourquoi mes cookies s’étalent-ils trop ?",
      a: "La pâte était trop chaude. Elle n’a pas assez reposé au froid, le beurre était encore chaud au moment du mélange, ou les boules ont été posées sur une plaque sortant du four. Trop peu de farine, mesurée à la tasse, donne le même résultat.",
    },
    {
      q: "Faut-il laisser reposer la pâte à cookies ?",
      a: "Oui, au moins 2 heures au réfrigérateur. La farine s’hydrate, la pâte s’étale moins et dore mieux. Après 24 heures, le goût de caramel est encore plus marqué ; au-delà de 72 heures, on ne gagne plus rien.",
    },
    {
      q: "Peut-on manger de la pâte à cookies crue ?",
      a: "Non, pas cette pâte : elle contient de l’œuf cru et de la farine crue, qui peuvent porter des salmonelles et des bactéries E. coli. C’est particulièrement déconseillé aux femmes enceintes, aux jeunes enfants, aux personnes âgées et aux personnes immunodéprimées. Goûtez-les cuits.",
    },
    {
      q: "Peut-on congeler la pâte à cookies ?",
      a: "Oui, façonnée en boules, 3 mois au congélateur dans un sac bien fermé. Faites-les cuire directement, sans décongélation, en ajoutant 2 minutes de cuisson.",
    },
    {
      q: "Pourquoi mes cookies sont-ils durs ?",
      a: "Ils ont trop cuit. Sortez-les quand le centre est encore pâle et semble à peine cuit : il se raffermit en refroidissant. Une pâte trop travaillée après la farine ou des cookies laissés à l’air libre durcissent aussi.",
    },
    {
      q: "Par quoi remplacer la vergeoise brune dans des cookies ?",
      a: "Par du sucre muscovado, qui est aussi humide. La cassonade marche, mais ses gros cristaux secs donnent des cookies moins moelleux et plus craquants.",
    },
  ],
  nutrition: {
    calories: 265,
    protein: 3,
    fat: 15,
    saturatedFat: 9,
    carbs: 31,
    sugar: 20,
    fiber: 2,
    sodium: 125,
  },
  annotations: {
    hero: "sortir quand le centre semble cru",
    detail: "le chocolat encore fondant",
  },
  images: {
    heroAlt:
      "Cookies aux pépites de chocolat dorés sur une plaque de cuisson, l’un cassé en deux sur son cœur fondant",
    detailAlt: "Pile de cookies aux pépites de chocolat et cookie cassé montrant le chocolat fondu",
    credits: {
      hero: { photographer: "Pexels", url: "https://www.pexels.com/photo/20558711/" },
      detail: { photographer: "Pexels", url: "https://www.pexels.com/photo/20558713/" },
    },
  },
  datePublished: "2026-11-08",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#C8964A",
    onAccent: "#1b1712",
    ink: "#7A5520",
    tint: "#F8F0E2",
    deep: "#1d140c",
    focus: "50% 50%",
  },
});
