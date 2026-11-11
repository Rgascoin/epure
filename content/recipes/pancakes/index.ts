import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "pancakes",
  title: "Pancakes moelleux",
  seoTitle: "Pancakes moelleux : la recette facile et bien épaisse",
  tagline: "Le premier rate souvent, c’est normal.",
  description:
    "Des pancakes moelleux et épais, à l’américaine : 250 g de farine, 2 œufs, 300 ml de lait et de la levure. 12 pancakes en 50 minutes, repos compris.",
  summary:
    "Pour 12 pancakes moelleux, mélangez 250 g de farine, 11 g de levure chimique, 30 g de sucre et une pincée de sel, puis ajoutez 2 œufs battus avec 300 ml de lait et 40 g de beurre fondu, sans trop fouetter. Laissez reposer 15 minutes, puis cuisez des louches de 50 ml dans une poêle à peine graissée, à feu moyen : 2 minutes, jusqu’à ce que des bulles éclatent, puis 1 à 2 minutes sur l’autre face. Comptez 50 minutes en tout.",
  intro: [
    "Les pancakes sont de petites galettes épaisses, gonflées à la levure chimique, qu’on empile et qu’on arrose de sirop d’érable. Leur pâte ressemble à une pâte à crêpes, avec beaucoup moins de lait : elle est épaisse et tombe de la louche en ruban lourd.",
    "Pour qu’ils soient moelleux, deux règles. On mélange la pâte le moins possible : quelques grumeaux restent, c’est voulu. Et on cuit à feu moyen, pas plus, en attendant que des bulles éclatent à la surface avant de retourner.",
    "Le premier pancake sert de test : il sort souvent trop pâle ou trop doré, le temps de régler le feu. Les onze suivants sont les bons.",
  ],
  category: "Goûter",
  cuisine: "Américaine",
  keywords: [
    "pancakes",
    "recette pancakes",
    "pancakes moelleux",
    "pancakes faciles",
    "pâte à pancakes",
    "pancakes épais",
    "pancakes américains",
    "pancakes sans babeurre",
  ],
  diet: ["vegetarian"],
  servings: 12,
  servingsLabel: { one: "pancake", other: "pancakes" },
  times: { prep: 15, cook: 20, rest: 15 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  tags: ["chandeleur"],
  equipment: [
    "grand saladier et un bol",
    "fouet",
    "grande poêle antiadhésive (ou plancha)",
    "louche de 50 ml (ou verre doseur)",
    "spatule large et fine",
  ],
  ingredients: [
    {
      title: "La pâte",
      items: [
        { qty: 250, unit: "g", name: "farine T45 ou T55", step: 10 },
        { qty: 11, unit: "g", name: "levure chimique", note: "1 sachet", step: 1 },
        { qty: 30, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 2, name: "œuf", plural: "œufs", note: "à température ambiante", step: 1 },
        { qty: 300, unit: "ml", name: "lait entier", step: 10 },
        { qty: 40, unit: "g", name: "beurre doux", note: "fondu et tiédi", step: 5 },
      ],
    },
    {
      title: "Pour la cuisson et le service",
      items: [
        { qty: 10, unit: "g", name: "beurre doux", note: "pour graisser la poêle", step: 5 },
        { name: "sirop d’érable", optional: true },
        { name: "fruits frais", note: "fraises, myrtilles, banane", optional: true },
      ],
    },
  ],
  method: [
    {
      title: "La pâte",
      steps: [
        {
          title: "Mélanger les ingrédients secs",
          text: "Dans un grand saladier, mélangez au fouet la farine, la levure, le sucre et le sel, pour bien répartir la levure. Creusez un puits au centre.",
        },
        {
          title: "Mélanger les liquides",
          text: "Dans un bol, fouettez les œufs avec le lait, puis versez le beurre fondu tiédi en filet, sans cesser de fouetter.",
        },
        {
          title: "Assembler sans trop mélanger",
          text: "Versez les liquides dans le puits et mélangez au fouet, juste le temps que la farine disparaisse. Il doit rester quelques petits grumeaux, et la pâte doit être épaisse : elle tombe du fouet en ruban lourd.",
          tip: "Arrêtez-vous avant que la pâte soit lisse. Plus on fouette, plus le gluten se développe, et plus les pancakes sont élastiques et plats.",
        },
        {
          title: "Laisser reposer",
          text: "Couvrez le saladier d’un torchon et laissez reposer la pâte 15 minutes à température ambiante. Elle épaissit un peu et quelques bulles apparaissent en surface. Ne la remélangez pas ensuite.",
          timer: { minutes: 15, label: "Repos de la pâte" },
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Chauffer la poêle",
          text: "Faites chauffer la poêle à feu moyen pendant 2 minutes, puis graissez-la avec un essuie-tout imbibé d’un peu de beurre. Elle est prête quand une goutte d’eau y grésille et roule.",
          timer: { minutes: 2, label: "Poêle" },
        },
        {
          title: "Cuire la première face",
          text: "Versez une louche de 50 ml de pâte par pancake, au centre, sans l’étaler : elle s’étale seule en un disque de 11 cm. Laissez cuire 2 à 3 minutes sans y toucher : des bulles montent, éclatent en laissant de petits trous, et les bords deviennent mats.",
          timer: { minutes: 2, label: "Première face" },
          tip: "Retournez quand les trous laissés par les bulles ne se referment plus. Avant, la pâte encore liquide coule sous la spatule.",
        },
        {
          title: "Retourner et finir",
          text: "Glissez la spatule dessous et retournez le pancake d’un geste franc. Cuisez 1 à 2 minutes de plus : il gonfle encore et le dessous est doré. Ne l’écrasez pas avec la spatule.",
          timer: { minutes: 2, label: "Seconde face" },
        },
        {
          title: "Cuire toute la pâte",
          text: "Gardez les pancakes cuits au chaud sous un torchon propre, ou dans le four à 90 °C, et cuisez le reste de la pâte par trois ou quatre, en regraissant légèrement la poêle tous les deux tours. S’ils dorent trop vite, baissez un peu le feu.",
        },
        {
          title: "Servir en pile",
          text: "Servez les pancakes empilés et chauds, avec du sirop d’érable et des fruits frais, si vous en avez.",
        },
      ],
    },
  ],
  science: [
    {
      title: "D’où vient le moelleux",
      text: "La levure chimique associe du bicarbonate et un acide. Mouillés, ils réagissent et libèrent du gaz carbonique, une première fois dans la pâte, puis surtout à la chaleur de la poêle. Les bulles gonflent la pâte, qui fige autour d’elles en cuisant. Une pâte épaisse retient mieux ce gaz : c’est pour ça qu’elle contient beaucoup moins de lait qu’une pâte à crêpes.",
    },
    {
      title: "Pourquoi garder des grumeaux",
      text: "Mélanger farine et liquide développe le gluten, un réseau de protéines élastique. Un peu, c’est utile pour retenir les bulles ; trop, et les pancakes deviennent caoutchouteux et gonflent moins. Les petits grumeaux s’hydratent pendant le repos et disparaissent à la cuisson.",
    },
    {
      title: "Les bulles, signal pour retourner",
      text: "Quand les bulles qui éclatent laissent des trous qui ne se referment plus, la pâte a pris sur une bonne épaisseur : le pancake se tient et peut être retourné. Le dessous, lui, a eu le temps de dorer grâce à la réaction de Maillard entre les sucres et les protéines du lait et des œufs.",
    },
  ],
  tips: [
    "Graissez la poêle avec un essuie-tout à peine beurré, pas avec un morceau de beurre : trop de gras fait frire les bords et marbre la surface.",
    "Versez la pâte d’un peu de hauteur, au centre, toujours avec la même louche : les pancakes sont ronds et de la même taille.",
    "Ne remélangez pas la pâte après le repos. Vous chasseriez les bulles déjà formées.",
    "Si la pâte est trop épaisse pour couler de la louche, ajoutez 1 ou 2 cuillerées à soupe de lait, pas plus.",
  ],
  mistakes: [
    "Fouetter la pâte jusqu’à ce qu’elle soit parfaitement lisse. Le gluten se développe et les pancakes sont plats et élastiques.",
    "Cuire à feu vif. Le dessous brûle avant que le cœur soit cuit, et l’intérieur reste pâteux.",
    "Retourner trop tôt. La pâte encore liquide coule et le pancake s’écrase.",
    "Allonger la pâte avec du lait pour la rendre fluide. Les pancakes s’étalent comme des crêpes et ne gonflent pas.",
  ],
  variations: [
    {
      title: "Encore plus épais, aux blancs montés",
      text: "Séparez les œufs : les jaunes vont avec le lait et le beurre, les blancs sont montés en neige souple et incorporés à la maryse, en dernier. Pas de repos dans ce cas : cuisez aussitôt, avant que les blancs ne retombent.",
    },
    {
      title: "Au lait ribot",
      text: "Remplacez le lait par 350 ml de lait ribot (babeurre) et ajoutez une demi-cuillerée à café de bicarbonate de soude à la farine. L’acidité du lait ribot réagit avec le bicarbonate : les pancakes sont plus gonflés, avec une pointe d’acidité.",
    },
    {
      title: "Aux myrtilles",
      text: "Dès que la pâte est versée dans la poêle, parsemez 6 à 8 myrtilles sur chaque pancake, 150 g en tout, puis cuisez normalement. Mélangées à la pâte, elles éclatent et la colorent en violet.",
    },
  ],
  storage:
    "Ils se gardent 2 jours au réfrigérateur dans une boîte fermée, ou 2 mois au congélateur, séparés par du papier cuisson. Réchauffez-les au grille-pain ou quelques minutes au four à 160 °C.",
  pairing: "Un café au lait, ou un chocolat chaud pour les enfants.",
  faq: [
    {
      q: "Quelle est la différence entre une pâte à pancakes et une pâte à crêpes ?",
      a: "La levure et l’épaisseur. Pour 250 g de farine, la pâte à pancakes contient de la levure chimique et 300 ml de lait, contre environ 500 ml pour des crêpes. Elle est épaisse, gonfle à la cuisson et donne des galettes de 1 cm.",
    },
    {
      q: "Pourquoi mes pancakes ne gonflent pas ?",
      a: "Le plus souvent, la pâte est trop liquide ou trop fouettée, ou la levure est éventée (vérifiez la date). Un feu trop doux joue aussi : la pâte s’étale avant d’avoir le temps de prendre.",
    },
    {
      q: "Peut-on préparer la pâte à pancakes la veille ?",
      a: "Oui, filmée au réfrigérateur jusqu’au lendemain. Les pancakes gonflent un peu moins, car une partie de la levure a déjà réagi. Ne la remélangez pas, prélevez-la délicatement à la louche.",
    },
    {
      q: "Peut-on faire des pancakes sans levure ?",
      a: "Pas vraiment : sans levure, vous obtenez de petites crêpes épaisses. À défaut, montez les blancs en neige et incorporez-les juste avant la cuisson, ils apportent un peu de gonflant.",
    },
    {
      q: "Par quoi remplacer le lait dans les pancakes ?",
      a: "Une boisson végétale non sucrée, avoine ou soja, à volume égal. Le lait ribot donne les pancakes les plus moelleux, avec une demi-cuillerée à café de bicarbonate en plus (voir les variantes).",
    },
    {
      q: "Combien de pancakes avec 250 g de farine ?",
      a: "Environ 12 pancakes de 11 cm, avec une louche de 50 ml par pancake. Pour un goûter à quatre, cela fait 3 pancakes chacun.",
    },
    {
      q: "Peut-on congeler des pancakes ?",
      a: "Oui, cuits et refroidis, séparés par du papier cuisson, jusqu’à 2 mois. Réchauffez-les sans les décongeler, au grille-pain ou quelques minutes au four à 160 °C.",
    },
  ],
  nutrition: {
    calories: 145,
    protein: 4,
    fat: 5,
    saturatedFat: 3,
    carbs: 19,
    sugar: 4,
    fiber: 1,
    sodium: 140,
  },
  annotations: {
    hero: "quelques grumeaux, c’est voulu",
    detail: "retourner quand les bulles éclatent",
  },
  images: {
    heroAlt: "Pile de pancakes moelleux surmontée de fraises coupées, sur une assiette blanche et une table en bois",
    detailAlt: "Pancakes empilés en gros plan, nappés de sirop avec un morceau de beurre qui fond",
    credits: {
      hero: { photographer: "Tochukwu Ekeh", url: "https://www.pexels.com/photo/37648015/" },
      detail: { photographer: "Jahra Tasfia Reza", url: "https://www.pexels.com/photo/38929325/" },
    },
  },
  datePublished: "2026-11-09",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#D4934A",
    onAccent: "#1b1712",
    ink: "#85501C",
    tint: "#FAF1E6",
    deep: "#1c120b",
    focus: "50% 50%",
  },
});
