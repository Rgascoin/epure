import type { RecipeContent } from "@/lib/types";

export const content: RecipeContent = {
  slug: "mousse-au-chocolat",
  title: "Mousse au chocolat",
  seoTitle: "Mousse au chocolat maison, légère et sans crème",
  tagline: "Meilleure le lendemain, promis.",
  description:
    "Une mousse au chocolat maison avec 200 g de chocolat noir 70 %, 6 œufs, une pincée de sel et très peu de sucre. 25 minutes de travail, 6 heures au frais.",
  summary:
    "Pour six, faites fondre 200 g de chocolat noir à 70 % au bain-marie, ajoutez les 6 jaunes, puis incorporez les 6 blancs montés en neige souple avec une pincée de sel et 30 g de sucre. Mélangez doucement à la maryse, répartissez dans des verrines et laissez prendre au moins 6 heures au frigo, une nuit si vous pouvez.",
  intro: [
    "Des mousses au chocolat, il en existe des centaines. Celle-ci est la plus simple qu’on connaisse : du chocolat noir, des œufs, une pincée de sel et à peine de sucre. On n’ajoute ni crème ni gélatine. Elle tient parce que le beurre de cacao fige au froid, et elle est légère grâce à l’air des blancs.",
    "Deux choses comptent vraiment. Le chocolat doit être à peine tiède quand on le mélange. Et les blancs s’incorporent doucement, en soulevant, pour garder un maximum de bulles.",
    "Faites-la le matin pour le soir, ou la veille. Le lendemain, elle est encore plus fondante.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "mousse au chocolat",
    "recette mousse au chocolat",
    "mousse au chocolat facile",
    "mousse au chocolat maison",
    "mousse au chocolat noir",
    "mousse au chocolat sans crème",
    "mousse au chocolat aérienne",
    "mousse au chocolat inratable",
  ],
  diet: ["vegetarian", "glutenFree"],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 25, cook: 5, rest: 360 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  equipment: [
    "Casserole et bol résistant à la chaleur (bain-marie)",
    "Batteur électrique",
    "Maryse",
    "Grand saladier propre et sec",
    "6 verrines ou un plat de service",
  ],
  ingredients: [
    {
      items: [
        { qty: 200, unit: "g", name: "chocolat noir 70 %", note: "pâtissier ou de couverture, haché", step: 10 },
        { qty: 6, name: "œuf", plural: "œufs", note: "très frais, à température ambiante", step: 1 },
        { qty: 30, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 20, unit: "g", name: "beurre doux", note: "pour plus de rondeur", step: 5, optional: true },
        { name: "fleur de sel ou éclats de cacao", note: "pour servir", optional: true },
      ],
    },
  ],
  method: [
    {
      title: "Préparation",
      steps: [
        {
          title: "Fondre le chocolat",
          text: "Faites fondre le chocolat haché et le beurre au bain-marie, sur une eau qui frémit à peine. Le bol ne doit pas toucher l’eau. Remuez jusqu’à ce que ce soit lisse, puis retirez du feu.",
          timer: { minutes: 5, label: "Fonte du chocolat" },
          tip: "Attention à l’eau et à la vapeur : une seule goutte dans le chocolat et il devient épais et granuleux.",
        },
        {
          title: "Séparer les œufs",
          text: "Cassez les œufs en mettant les jaunes dans un bol et les blancs dans un grand saladier bien propre et sec. S’il tombe un peu de jaune dans les blancs, retirez-le avec un bout de coquille : sinon ils ne monteront pas.",
        },
        {
          title: "Incorporer les jaunes",
          text: "Attendez que le chocolat soit juste tiède quand vous y trempez le doigt, entre 35 et 40 °C. Ajoutez les jaunes un par un en fouettant. Le mélange doit rester lisse et brillant.",
        },
        {
          title: "Monter les blancs",
          text: "Battez les blancs avec le sel à vitesse moyenne. Quand ils moussent, versez le sucre en pluie et continuez jusqu’à obtenir une neige brillante qui fait un petit bec souple au bout du fouet.",
          tip: "Arrêtez-vous à ce bec souple. Des blancs trop fermes deviennent granuleux et se mélangent mal au chocolat.",
        },
        {
          title: "Détendre le chocolat",
          text: "Prenez un quart des blancs et mélangez-les franchement au chocolat avec un fouet. Ce premier ajout sert à assouplir la masse, ne vous inquiétez pas des bulles perdues.",
        },
        {
          title: "Incorporer délicatement",
          text: "Ajoutez le reste des blancs en deux fois. À la maryse, passez sous la masse et ramenez-la vers le haut en tournant le saladier d’un quart de tour à chaque geste. Arrêtez dès qu’il n’y a plus de traces blanches.",
          tip: "Chaque tour de trop casse des bulles. Mieux vaut une petite trace blanche qu’une mousse qui retombe.",
        },
        {
          title: "Laisser prendre",
          text: "Répartissez la mousse dans les verrines ou un plat, filmez et laissez au frigo au moins 6 heures. Une nuit, c’est encore mieux.",
          timer: { minutes: 360, label: "Prise au froid" },
        },
        {
          title: "Servir",
          text: "Sortez-la 10 minutes avant de servir, avec quelques grains de fleur de sel ou des éclats de cacao.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Ce qui se passe dans les blancs",
      text: "En fouettant, on déplie les protéines du blanc. Elles s’organisent en un film souple autour d’une multitude de bulles d’air. Le sucre, ajouté quand les blancs moussent déjà, renforce ce film et rend la neige plus stable.",
    },
    {
      title: "Pourquoi six heures au frigo",
      text: "Au froid, le beurre de cacao du chocolat durcit et fige les bulles là où elles sont. C’est ce qui donne de la tenue à la mousse, et ça prend plusieurs heures.",
    },
    {
      title: "Le chocolat à la bonne température",
      text: "Trop chaud, il fait éclater les bulles et la mousse retombe. Trop froid, il durcit au contact des blancs et fait des grains. Entre 35 et 40 °C, avec des œufs qui ne sortent pas du frigo, le mélange reste souple.",
    },
  ],
  tips: [
    "Prenez un chocolat noir pâtissier entre 64 et 70 % de cacao. C’est lui qui fait le goût, ne lésinez pas.",
    "Sortez les œufs du frigo une heure avant. Les blancs montent mieux, et le chocolat ne fige pas au contact des jaunes.",
    "Passez un essuie-tout imbibé de vinaigre dans le saladier et sur les fouets. La moindre trace de gras empêche les blancs de monter.",
    "Quelques grains de fleur de sel au moment de servir font ressortir l’amertume du chocolat.",
    "Une cuillerée d’espresso serré ou un zeste d’orange dans le chocolat fondu, et vous avez une autre mousse.",
  ],
  mistakes: [
    "Battre les blancs trop fermes. Ils laissent des grumeaux blancs dans la mousse.",
    "Mélanger en tournant comme une pâte à gâteau. Les bulles éclatent et la mousse devient dense.",
    "Mélanger avec un chocolat trop chaud ou trop froid. Elle retombe, ou elle fait des grains.",
    "La servir trop tôt. Sans ses heures au frais, elle n’a aucune tenue.",
  ],
  variations: [
    {
      title: "Au café",
      text: "Ajoutez 2 cuillerées à soupe d’espresso serré dans le chocolat fondu, avant les jaunes.",
    },
    {
      title: "À l’orange",
      text: "Râpez le zeste d’une orange non traitée dans le chocolat fondu, et gardez-en un peu pour le dessus.",
    },
    {
      title: "Végane, à l’aquafaba",
      text: "Remplacez les œufs par 150 ml de jus de cuisson de pois chiches, monté en neige avec le sucre, puis mélangé au chocolat tiède. La mousse est plus légère, et un peu plus fragile.",
    },
  ],
  storage:
    "Comme elle contient des œufs crus, elle se garde 24 heures au frigo, filmée, 48 heures grand maximum. Ne la laissez pas traîner à température ambiante.",
  pairing:
    "Un vin doux naturel du Roussillon, un banyuls ou un maury : leurs notes de cacao et de fruits secs vont très bien avec.",
  faq: [
    {
      q: "La mousse au chocolat est-elle déconseillée aux femmes enceintes ?",
      a: "Oui, car elle contient des œufs crus. Elle est déconseillée aux femmes enceintes, aux jeunes enfants, aux personnes âgées et aux personnes immunodéprimées, à cause du risque de salmonellose. Pour eux, prenez des œufs pasteurisés (blancs et jaunes vendus en brique au rayon frais) : la recette marche de la même façon.",
    },
    {
      q: "Combien de temps faut-il laisser prendre une mousse au chocolat ?",
      a: "Au moins 6 heures au frigo, et idéalement une nuit. C’est le temps qu’il faut au beurre de cacao pour figer et faire tenir la mousse.",
    },
    {
      q: "Pourquoi ma mousse au chocolat est-elle granuleuse ?",
      a: "Le plus souvent, le chocolat était trop froid au moment du mélange et a durci au contact des blancs. Ou alors les blancs étaient trop fermes. Visez un chocolat entre 35 et 40 °C et une neige souple.",
    },
    {
      q: "Pourquoi ma mousse au chocolat est-elle restée liquide ?",
      a: "Les blancs n’étaient sans doute pas assez montés, ou ils ont été mélangés trop vigoureusement. Un temps de repos trop court au froid peut aussi jouer.",
    },
    {
      q: "Quel chocolat choisir pour une mousse au chocolat ?",
      a: "Un chocolat noir pâtissier, entre 64 et 70 % de cacao. Il contient plus de beurre de cacao qu’une tablette ordinaire, donc la mousse a plus de goût et tient mieux.",
    },
    {
      q: "Peut-on faire une mousse au chocolat sans sucre ?",
      a: "Oui. Le sucre sert surtout à stabiliser les blancs. Sans lui, la mousse est un peu plus fragile, mais avec un chocolat à 70 % elle reste très bonne.",
    },
  ],
  nutrition: {
    calories: 310,
    protein: 9,
    fat: 21,
    saturatedFat: 12,
    carbs: 16,
    sugar: 15,
    fiber: 4,
    sodium: 100,
  },
  annotations: {
    hero: "le chocolat juste tiède",
    detail: "soulever, ne pas tourner",
  },
  images: {
    heroAlt: "Mousse au chocolat dans un verre à pied sur fond noir, entourée d’éclats de cacao et de truffes",
    detailAlt: "Mousses au chocolat en verrines, garnies de graines de grenade",
    credits: {
      hero: {
        photographer: "Eva Bronzini",
        url: "https://www.pexels.com/photo/chocolate-mousse-in-tall-glass-6261274/",
      },
      detail: {
        photographer: "Ella Olsson",
        url: "https://www.pexels.com/photo/close-up-photo-of-chocolate-mousse-3026810/",
      },
    },
  },
  datePublished: "2026-11-02",
  dateModified: "2026-11-10",
};
