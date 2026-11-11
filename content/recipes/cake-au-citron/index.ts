import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "cake-au-citron",
  title: "Cake au citron",
  seoTitle: "Cake au citron moelleux, imbibé de sirop et glacé",
  tagline: "Encore meilleur le lendemain.",
  description:
    "Un cake au citron moelleux : zestes frottés dans le sucre, 50 minutes à 170 °C, un sirop de citron sur le cake chaud et un glaçage au sucre glace.",
  summary:
    "Pour 8 personnes (un moule de 24 cm), fouettez 3 œufs avec 170 g de sucre parfumé aux zestes de 2 citrons, ajoutez 8 cl de crème, 180 g de farine, la levure et 90 g de beurre fondu, puis faites cuire 45 à 50 minutes à 170 °C. Imbibez le cake chaud d’un sirop de 6 cl de jus de citron et 60 g de sucre, puis nappez-le une fois froid d’un glaçage au sucre glace. 2 h 45 en tout, dont 20 minutes de travail.",
  intro: [
    "Le cake au citron du goûter : une mie serrée mais tendre, jaune pâle, qui sent franchement le citron, un sirop qui la garde humide plusieurs jours et, si on veut, un glaçage blanc qui craque un peu sous la dent.",
    "Quand il est sec, c’est qu’il a trop cuit ou qu’il n’a pas été imbibé. Ici, on le sort du four dès que la lame d’un couteau ressort sèche, pas cinq minutes après, et le sirop part sur le cake encore chaud, qui l’absorbe jusqu’au centre.",
    "Le parfum vient des zestes plus que du jus. Frottez-les dans le sucre du bout des doigts avant de commencer : le sucre devient humide et jaune, et l’huile du citron passe dans toute la pâte.",
  ],
  category: "Goûter",
  cuisine: "Française",
  keywords: [
    "cake au citron",
    "recette cake au citron",
    "cake au citron moelleux",
    "cake au citron glaçage",
    "cake au citron avec sirop",
    "glaçage citron sucre glace",
    "gâteau au citron",
    "cake citron facile",
  ],
  diet: ["vegetarian"],
  servings: 8,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 20, cook: 50, rest: 95 },
  difficulty: "Facile",
  cost: "€",
  season: ["Hiver", "Printemps"],
  tags: ["printemps"],
  equipment: [
    "moule à cake de 24 cm",
    "papier cuisson",
    "batteur électrique ou fouet",
    "râpe fine type microplane",
    "petite casserole",
    "pique en bois et grille",
  ],
  ingredients: [
    {
      title: "Le cake",
      items: [
        { qty: 90, unit: "g", name: "beurre", step: 5 },
        { qty: 2, name: "citron non traité", plural: "citrons non traités", note: "zestes ici, jus pour le sirop", step: 1 },
        { qty: 170, unit: "g", name: "sucre en poudre", step: 10 },
        { qty: 3, name: "œuf", plural: "œufs", note: "à température ambiante", step: 1 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 8, unit: "cl", name: "crème liquide entière", step: 1 },
        { qty: 180, unit: "g", name: "farine", note: "type 45 ou 55", step: 10 },
        { qty: 1.5, unit: "cac", name: "levure chimique", step: 0.5 },
      ],
    },
    {
      title: "Le sirop",
      items: [
        { qty: 6, unit: "cl", name: "jus de citron", note: "pressé des citrons zestés", step: 1 },
        { qty: 60, unit: "g", name: "sucre en poudre", step: 5 },
      ],
    },
    {
      title: "Le glaçage",
      items: [
        { qty: 100, unit: "g", name: "sucre glace", step: 10, optional: true },
        { qty: 2, unit: "cas", name: "jus de citron", note: "le reste du jus", step: 0.5, optional: true },
      ],
    },
  ],
  method: [
    {
      title: "Le cake",
      steps: [
        {
          title: "Préparer four et moule",
          text: "Préchauffez le four à 170 °C, chaleur statique, et chemisez le moule de papier cuisson. Faites fondre le beurre à feu doux et laissez-le tiédir.",
        },
        {
          title: "Parfumer le sucre",
          text: "Brossez les citrons sous l’eau chaude et séchez-les. Râpez leur zeste directement au-dessus des 170 g de sucre, sans attaquer la peau blanche. Frottez zeste et sucre entre vos doigts jusqu’à ce que le sucre soit humide, jaune pâle et très parfumé.",
        },
        {
          title: "Fouetter œufs et sucre",
          text: "Ajoutez les œufs et le sel au sucre parfumé et fouettez 3 minutes au batteur, jusqu’à ce que le mélange ait pâli et nettement gonflé.",
          timer: { minutes: 3, label: "Œufs et sucre au batteur" },
        },
        {
          title: "Ajouter crème et farine",
          text: "Incorporez la crème au fouet. Tamisez la farine et la levure au-dessus du saladier et mélangez à la spatule, juste jusqu’à ce qu’il ne reste plus de farine visible.",
          tip: "Arrêtez de mélanger dès que la farine a disparu : plus on travaille la pâte, plus le cake devient dense et élastique.",
        },
        {
          title: "Ajouter le beurre",
          text: "Gardez 1 cuillère à café de beurre fondu. Versez le reste dans la pâte en deux fois en mélangeant doucement : elle doit être lisse, brillante, et tomber de la spatule en ruban épais.",
        },
        {
          title: "Cuire le cake",
          text: "Versez la pâte dans le moule. Trempez la lame d’un couteau dans le beurre réservé et tracez une ligne au centre, sur toute la longueur. Enfournez 45 à 50 minutes : le cake est doré, fendu au milieu, et la lame d’un couteau plantée au centre ressort sèche.",
          timer: { minutes: 50, label: "Cuisson du cake" },
          tip: "Si le dessus colore trop vite, posez une feuille d’aluminium dessus, sans serrer, après 30 minutes de cuisson.",
        },
      ],
    },
    {
      title: "Le sirop et le glaçage",
      steps: [
        {
          title: "Préparer le sirop",
          text: "Pendant la cuisson, pressez les citrons. Chauffez 6 cl de jus avec 60 g de sucre dans la petite casserole jusqu’à ce que le sucre soit dissous et que le sirop frémisse. Gardez le reste du jus pour le glaçage.",
        },
        {
          title: "Imbiber le cake chaud",
          text: "Laissez le cake 5 minutes dans le moule, puis démoulez-le sur la grille. Piquez le dessus tous les 2 cm avec la pique en bois, profondément, et versez le sirop chaud cuillère par cuillère, en laissant chacune s’absorber avant la suivante.",
          timer: { minutes: 5, label: "Cake dans le moule" },
          tip: "Allez lentement : versé d’un coup, le sirop ruisselle sur les côtés au lieu d’entrer dans la mie.",
        },
        {
          title: "Laisser refroidir",
          text: "Laissez refroidir complètement sur la grille, au moins 1 heure. Le dessous du cake ne doit plus être tiède au toucher.",
          timer: { minutes: 60, label: "Cake qui refroidit" },
        },
        {
          title: "Glacer le cake",
          text: "Mélangez le sucre glace et 2 cuillères à soupe de jus de citron jusqu’à un glaçage lisse et épais, qui coule lentement comme un miel froid. Versez-le sur le dessus du cake et laissez-le couler sur les côtés. Laissez prendre 30 minutes avant de couper.",
          timer: { minutes: 30, label: "Glaçage qui prend" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Le zeste frotté dans le sucre",
      text: "Le parfum du citron est surtout dans les huiles essentielles de son zeste, enfermées dans de minuscules poches de l’écorce. Les cristaux de sucre les déchirent et absorbent cette huile, qui se répartit ensuite dans toute la pâte au lieu de rester dans quelques brins de zeste.",
    },
    {
      title: "Pourquoi imbiber à chaud",
      text: "À la sortie du four, la mie est souple et la vapeur s’en échappe encore : le sirop prend sa place. Le sucre du sirop retient ensuite l’eau, ce qui garde le cake humide plusieurs jours.",
    },
    {
      title: "Ce qui fait prendre le glaçage",
      text: "Le sucre glace se dissout en partie dans le jus de citron. En séchant à l’air, l’eau s’évapore et le sucre recristallise en une fine croûte blanche. Sur un cake encore tiède, il fond au lieu de sécher et devient transparent.",
    },
  ],
  tips: [
    "Ne râpez que la partie jaune du zeste : la peau blanche en dessous est amère.",
    "La ligne tracée au couteau beurré guide la fente du cake au centre, bien droite, au lieu de le laisser craquer au hasard.",
    "Pour un cake encore plus moelleux, emballez-le dans du film alimentaire dès qu’il est froid, sans le glacer, et glacez-le le lendemain.",
    "Faites le test du couteau dès 45 minutes : 5 minutes de trop suffisent à dessécher les bords.",
  ],
  mistakes: [
    "Ajouter le beurre encore très chaud : il cuit les œufs par endroits et graisse la pâte. Il doit être tiède, à peine plus chaud que le doigt.",
    "Battre longuement après avoir ajouté la farine : le cake est compact et creusé de tunnels. Mélangez juste assez.",
    "Glacer un cake tiède : le glaçage fond, devient translucide et coule au pied du cake. Attendez qu’il soit complètement froid.",
    "Démouler à la sortie du four : le cake brûlant se casse. Laissez-le 5 minutes dans le moule, pas plus, sinon la vapeur le rend humide en dessous.",
  ],
  variations: [
    {
      title: "Citron et graines de pavot",
      text: "Ajoutez 15 g de graines de pavot avec la farine. Elles apportent un léger croquant ; le reste ne change pas.",
    },
    {
      title: "Au citron vert",
      text: "Remplacez les citrons jaunes par 3 citrons verts, plus petits et plus juteux en proportion. Le sirop et le glaçage se font avec leur jus, et le parfum est plus vif.",
    },
    {
      title: "Sans glaçage, au sucre perlé",
      text: "Parsemez le dessus de la pâte de 30 g de sucre perlé juste avant d’enfourner, et gardez le sirop. Le cake est moins sucré et le dessus croustille.",
    },
  ],
  storage:
    "Il se garde 4 jours à température ambiante, emballé dans du film alimentaire ou dans une boîte hermétique. Sans glaçage, il se congèle 3 mois bien emballé ; décongelez-le 3 heures à température ambiante dans son film, sans le recongeler.",
  pairing: "Avec un thé noir ou un earl grey, ou quelques fraises au printemps.",
  faq: [
    {
      q: "Comment garder un cake au citron moelleux ?",
      a: "En l’imbibant de sirop à la sortie du four et en l’emballant dans du film alimentaire dès qu’il est froid. Le sucre du sirop retient l’humidité, le film l’empêche de s’évaporer. Il reste moelleux 4 jours à température ambiante.",
    },
    {
      q: "Peut-on faire le cake au citron la veille ?",
      a: "Oui, il est même meilleur le lendemain. Imbibez-le, laissez-le refroidir, emballez-le dans du film et gardez-le à température ambiante. Glacez-le le jour même, 30 minutes avant de servir, pour un glaçage bien net.",
    },
    {
      q: "Pourquoi mon cake au citron est-il sec ?",
      a: "Le plus souvent, parce qu’il a cuit trop longtemps. Faites le test du couteau dès 45 minutes et sortez-le dès que la lame ressort sèche. Un four trop chaud ou un cake non imbibé donnent le même résultat.",
    },
    {
      q: "Combien de citrons faut-il pour un cake au citron ?",
      a: "2 citrons non traités suffisent : les zestes vont dans la pâte, le jus dans le sirop (6 cl) et le glaçage (2 cuillères à soupe). S’ils sont petits ou peu juteux, prévoyez-en un troisième pour le jus.",
    },
    {
      q: "Peut-on congeler un cake au citron ?",
      a: "Oui, 3 mois, de préférence sans glaçage. Emballez-le entier ou en tranches dans du film, puis dans un sac congélation. Décongelez-le 3 heures à température ambiante sans le déballer, et ne le recongelez pas.",
    },
    {
      q: "Comment réussir le glaçage au citron ?",
      a: "100 g de sucre glace pour 2 cuillères à soupe de jus de citron, sur un cake bien froid. S’il coule trop, ajoutez du sucre glace ; s’il ne s’étale pas, quelques gouttes de jus. Il doit couler lentement, comme un miel froid.",
    },
  ],
  nutrition: {
    calories: 385,
    protein: 5,
    fat: 14,
    saturatedFat: 8.5,
    carbs: 59,
    sugar: 42,
    fiber: 1,
    sodium: 120,
  },
  annotations: { hero: "le glaçage, sur un cake bien froid", detail: "les zestes frottés dans le sucre" },
  images: {
    heroAlt:
      "Cake au citron recouvert d’un glaçage blanc qui coule sur les côtés, coupé en tranches et décoré d’écorces de citron confites",
    detailAlt:
      "Tranches de cake au citron à la mie jaune et serrée, posées sur du papier cuisson entre des rondelles de citron",
    credits: {
      hero: {
        photographer: "Jaxie Jia",
        url: "https://www.pexels.com/photo/close-up-photograph-of-slices-of-bread-8876154/",
        source: "Pexels",
      },
      detail: {
        photographer: "Fer Strange",
        url: "https://www.pexels.com/photo/freshly-baked-lemon-cake-slices-on-parchment-34996431/",
        source: "Pexels",
      },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#E9CF3A",
    onAccent: "#1B1712",
    ink: "#655E00",
    tint: "#FBF6DA",
    deep: "#17150A",
    focus: "55% 55%",
  },
});
