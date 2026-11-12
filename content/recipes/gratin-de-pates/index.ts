import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "gratin-de-pates",
  title: "Gratin de pâtes",
  seoTitle: "Gratin de pâtes au jambon et béchamel, croûte dorée",
  tagline: "De quoi nourrir une tablée affamée.",
  description:
    "Gratin de pâtes pour 4 : 300 g de penne, une béchamel au fromage, 200 g de jambon et une croûte d’emmental dorée 25 minutes au four. Prêt en 1 heure.",
  summary:
    "Pour 4 personnes, faites cuire 300 g de pâtes courtes 2 minutes de moins que le temps du paquet, mélangez-les à une béchamel de 60 cl de lait relevée de 50 g de fromage et à 200 g de jambon en lanières. Couvrez de 100 g d’emmental râpé et faites gratiner 20 à 25 minutes à 200 °C, puis laissez reposer 5 minutes. Comptez 1 heure en tout, dont 20 minutes de préparation.",
  intro: [
    "Des pâtes courtes, une béchamel au fromage, des lanières de jambon et une couche d’emmental qui dore et bouillonne au four. Rien de compliqué, et c’est le genre de plat qu’on refait ensuite de mémoire.",
    "Un gratin de pâtes rate presque toujours de la même façon : il sort sec, avec des pâtes trop cuites. Au four, elles continuent de boire la sauce. Il faut donc les égoutter 2 minutes avant la fin du temps indiqué et prévoir une béchamel plus fluide qu’on ne le croit, presque trop liquide au moment d’enfourner.",
    "Pour un soir pressé, la version facile remplace la béchamel par de la crème fraîche et du fromage.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "gratin de pâtes",
    "recette gratin de pâtes",
    "gratin de pâtes au jambon",
    "gratin de pâtes béchamel",
    "gratin de macaronis",
    "gratin de pâtes sans béchamel",
    "gratin de pâtes à la crème fraîche",
    "gratin de pâtes facile",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 20, cook: 35, rest: 5 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: [
    "plat à gratin de 20 × 30 cm",
    "grande casserole de 4 l et une passoire",
    "casserole moyenne et fouet",
  ],
  ingredients: [
    {
      title: "Les pâtes",
      items: [
        { qty: 10, unit: "g", name: "beurre", note: "pour le plat", step: 5 },
        { qty: 1, unit: "cas", name: "gros sel", step: 1 },
        { qty: 300, unit: "g", name: "pâtes courtes", note: "penne, macaronis ou coquillettes", step: 25 },
      ],
    },
    {
      title: "La béchamel",
      items: [
        { qty: 40, unit: "g", name: "beurre", step: 5 },
        { qty: 40, unit: "g", name: "farine", step: 5 },
        { qty: 600, unit: "ml", name: "lait entier", note: "froid", step: 50 },
        { qty: 1, unit: "pincee", name: "noix de muscade râpée", step: 1 },
        { name: "sel fin" },
        { name: "poivre" },
        { qty: 50, unit: "g", name: "emmental ou comté râpé", step: 10 },
      ],
    },
    {
      title: "Le montage",
      items: [
        { qty: 200, unit: "g", name: "jambon blanc", note: "4 tranches, en lanières de 1 cm", step: 25 },
        { qty: 100, unit: "g", name: "emmental râpé", note: "pour le dessus", step: 10 },
      ],
    },
  ],
  method: [
    {
      title: "Le gratin",
      steps: [
        {
          title: "Préparer four et plat",
          text: "Préchauffez le four à 200 °C. Beurrez le plat à gratin. Mettez 3 l d’eau à bouillir dans la grande casserole avec le gros sel.",
        },
        {
          title: "Cuire les pâtes",
          text: "Plongez les pâtes dans l’eau bouillante et comptez 2 minutes de moins que le temps du paquet, soit 8 minutes pour des penne qui en demandent 10. Elles doivent rester fermes sous la dent. Égouttez-les sans les rincer.",
          timer: { minutes: 8, label: "Pâtes à peine cuites" },
          tip: "Les pâtes finissent de cuire au four : à ce stade, elles doivent sembler pas tout à fait prêtes.",
        },
        {
          title: "Faire le roux",
          text: "Pendant ce temps, faites fondre 40 g de beurre dans la casserole moyenne à feu moyen. Ajoutez la farine d’un coup et fouettez 2 minutes : le mélange mousse et sent le biscuit, sans prendre de couleur.",
          timer: { minutes: 2, label: "Roux" },
        },
        {
          title: "Monter la béchamel",
          text: "Versez le lait froid en trois fois, en fouettant bien entre chaque ajout. Portez à frémissement sans cesser de fouetter, puis laissez cuire 5 minutes à feu doux : la sauce nappe le dos d’une cuillère et un trait de doigt y reste net. Hors du feu, ajoutez la muscade, un peu de sel, du poivre et 50 g de fromage.",
          timer: { minutes: 5, label: "Béchamel" },
          tip: "Lait froid dans un roux chaud : l’écart de température évite les grumeaux.",
        },
        {
          title: "Mélanger et remplir",
          text: "Remettez les pâtes égouttées dans leur casserole, ajoutez le jambon et toute la béchamel, mélangez. Le mélange doit paraître trop liquide : c’est normal, les pâtes vont en absorber une bonne partie. Versez dans le plat et égalisez.",
        },
        {
          title: "Gratiner",
          text: "Parsemez les 100 g d’emmental sur toute la surface, jusqu’aux bords. Enfournez 20 à 25 minutes, jusqu’à ce que la sauce bouillonne sur les côtés et que le dessus soit doré, avec des taches plus brunes par endroits.",
          timer: { minutes: 25, label: "Gratin au four" },
        },
        {
          title: "Laisser reposer",
          text: "Laissez le plat 5 minutes sur la table avant de servir. La sauce se raffermit un peu et les parts se tiennent au lieu de s’étaler dans l’assiette.",
          timer: { minutes: 5, label: "Repos du gratin" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi le roux épaissit",
      text: "Dans le roux, chaque grain de farine est enrobé de beurre et se disperse dans le lait sans former de grumeaux. En chauffant, l’amidon absorbe l’eau et gonfle : la sauce épaissit, et ne prend toute sa consistance qu’après quelques minutes de frémissement, qui font aussi disparaître le goût de farine crue.",
    },
    {
      title: "Les pâtes boivent la sauce",
      text: "Des pâtes égouttées 2 minutes trop tôt ont encore un cœur sec. Au four, elles absorbent le liquide de la béchamel et terminent leur cuisson dedans. Bien cuites dès le départ, elles en absorbent autant mais deviennent molles.",
    },
    {
      title: "D’où vient la croûte",
      text: "À 200 °C, la surface sèche vite et dépasse les 140 °C : les protéines et les sucres du fromage et du lait réagissent entre eux (réaction de Maillard) et donnent ces taches brunes au goût grillé.",
    },
  ],
  tips: [
    "Une béchamel trop épaisse donne un gratin sec : si elle ressemble à une purée, détendez-la avec 10 cl de lait.",
    "Salez peu la béchamel : le jambon et le fromage apportent déjà beaucoup de sel.",
    "Pour plus de goût sur le dessus, remplacez 30 g d’emmental par du parmesan, qui dore plus vite.",
    "Pour une croûte qui craque, mélangez 2 cuillerées à soupe de chapelure au fromage du dessus.",
    "S’il manque de couleur après 25 minutes, passez-le 2 minutes sous le gril, sans le quitter des yeux.",
  ],
  mistakes: [
    "Cuire les pâtes jusqu’au bout avant le four : elles sortent molles. Égouttez-les 2 minutes avant le temps du paquet.",
    "Une béchamel épaisse comme une purée : le gratin sort sec et compact. Elle doit napper la cuillère, pas tenir dessus.",
    "Des grumeaux dans la sauce : fouettez énergiquement hors du feu, ou passez-la au chinois ou au mixeur plongeant.",
    "Servir à la sortie du four : la sauce coule et les parts s’effondrent. Cinq minutes de repos suffisent.",
  ],
  variations: [
    {
      title: "Sans jambon",
      text: "Remplacez le jambon par 250 g de champignons de Paris émincés, poêlés 8 minutes dans 10 g de beurre jusqu’à ce qu’ils n’aient plus d’eau. Salez un peu plus la béchamel.",
    },
    {
      title: "Aux lardons",
      text: "Remplacez le jambon par 150 g de lardons fumés, revenus 5 minutes à la poêle sans matière grasse et égouttés. Ne salez presque pas la béchamel.",
    },
    {
      title: "Au brocoli",
      text: "Ajoutez 300 g de fleurettes de brocoli dans l’eau des pâtes pour les 3 dernières minutes de cuisson, puis égouttez le tout ensemble.",
    },
  ],
  storage:
    "Jusqu’à 2 jours au réfrigérateur dans le plat couvert, rangé dans les 2 heures après la cuisson. Réchauffez 15 à 20 minutes au four à 180 °C avec un trait de lait, jusqu’à ce que le centre soit brûlant. Il se congèle cuit, en portions, 2 mois ; décongelez au réfrigérateur et ne recongelez pas.",
  pairing:
    "Une salade verte ou une salade d’endives bien relevée de moutarde, pour couper le côté riche. Un verre de blanc du Jura ou de Savoie si l’envie vous prend.",
  easy: {
    shortcut: "crème fraîche épaisse et fromage râpé",
    note: "On saute la béchamel : de la crème fraîche détendue d’un peu de lait nappe les pâtes et gratine aussi bien. Le plat est plus riche et moins moelleux, sans le goût de noisette du roux. Prenez une crème entière épaisse à 30 % de matières grasses : la crème allégée a tendance à trancher au four.",
    times: { prep: 10, cook: 30, rest: 5 },
    ingredients: [
      {
        title: "Les pâtes",
        items: [
          { qty: 10, unit: "g", name: "beurre", note: "pour le plat", step: 5 },
          { qty: 1, unit: "cas", name: "gros sel", step: 1 },
          { qty: 300, unit: "g", name: "pâtes courtes", note: "penne, macaronis ou coquillettes", step: 25 },
        ],
      },
      {
        title: "La crème",
        items: [
          { qty: 200, unit: "g", name: "crème fraîche épaisse", note: "entière, 30 % de matières grasses", step: 25 },
          { qty: 150, unit: "ml", name: "lait entier", step: 25 },
          { qty: 1, unit: "pincee", name: "noix de muscade râpée", step: 1 },
          { name: "poivre" },
          { qty: 200, unit: "g", name: "jambon blanc", note: "4 tranches, en lanières de 1 cm", step: 25 },
          { qty: 150, unit: "g", name: "emmental râpé", note: "50 g dans la crème, 100 g dessus", step: 10 },
        ],
      },
    ],
    method: [
      {
        title: "Le gratin",
        steps: [
          {
            title: "Préparer four et plat",
            text: "Préchauffez le four à 200 °C, beurrez le plat et mettez 3 l d’eau salée au gros sel à bouillir.",
          },
          {
            title: "Cuire les pâtes",
            text: "Faites cuire les pâtes 2 minutes de moins que le temps du paquet, soit 8 minutes pour des penne qui en demandent 10. Égouttez-les sans les rincer.",
            timer: { minutes: 8, label: "Pâtes à peine cuites" },
          },
          {
            title: "Mélanger la crème",
            text: "Dans la casserole vide, fouettez la crème, le lait, la muscade, du poivre et 50 g d’emmental. Ne salez pas : le jambon et le fromage suffisent. Ajoutez les pâtes et le jambon, mélangez, versez dans le plat.",
          },
          {
            title: "Gratiner",
            text: "Couvrez avec les 100 g d’emmental restants et enfournez 20 minutes, jusqu’à ce que les bords bouillonnent et que le dessus soit bien doré.",
            timer: { minutes: 20, label: "Gratin au four" },
          },
          {
            title: "Laisser reposer",
            text: "Attendez 5 minutes avant de servir, le temps que la crème se raffermisse.",
            timer: { minutes: 5, label: "Repos du gratin" },
          },
        ],
      },
    ],
  },
  faq: [
    {
      q: "Faut-il cuire les pâtes avant de faire un gratin ?",
      a: "Oui, mais 2 minutes de moins que le temps indiqué sur le paquet. Elles finissent de cuire au four en absorbant la sauce. Entièrement cuites avant d’enfourner, elles sortent molles.",
    },
    {
      q: "Quelles pâtes choisir pour un gratin de pâtes ?",
      a: "Des pâtes courtes et creuses : penne, macaronis, coquillettes ou rigatoni. La sauce entre dans les tubes et les parts se servent facilement. Les pâtes longues se prêtent mal au gratin et se coupent en morceaux inégaux.",
    },
    {
      q: "Comment éviter un gratin de pâtes sec ?",
      a: "Prévoyez assez de béchamel, et assez fluide : 60 cl de lait pour 300 g de pâtes. Au moment d’enfourner, le mélange doit paraître trop liquide, puisque les pâtes en boivent une bonne partie au four.",
    },
    {
      q: "Peut-on préparer le gratin de pâtes à l’avance ?",
      a: "Oui, jusqu’à la veille. Assemblez le plat sans le fromage du dessus, laissez-le refroidir et gardez-le couvert au réfrigérateur. Ajoutez le fromage au moment d’enfourner et comptez 35 à 40 minutes à 190 °C, jusqu’à ce que le centre soit brûlant.",
    },
    {
      q: "Quel fromage pour gratiner des pâtes ?",
      a: "L’emmental fond et file, le comté a plus de goût, le parmesan dore vite et fait une croûte plus sèche. Un mélange d’emmental et de 30 g de parmesan sur le dessus donne un peu des deux.",
    },
    {
      q: "Peut-on faire un gratin de pâtes sans béchamel ?",
      a: "Oui, c’est la version facile : 200 g de crème fraîche épaisse, 15 cl de lait et 50 g de fromage mélangés aux pâtes. Prenez une crème entière, l’allégée a tendance à trancher à la cuisson.",
    },
  ],
  nutrition: {
    calories: 685,
    protein: 36,
    fat: 29,
    saturatedFat: 17,
    carbs: 69,
    sugar: 10,
    fiber: 3,
    sodium: 740,
  },
  annotations: { hero: "la sauce bouillonne encore sur les bords", detail: "crémeux dessous, doré dessus" },
  images: {
    heroAlt:
      "Gratin de pâtes dans un plat en céramique, la croûte de fromage dorée et tachée de brun, parsemée de persil",
    detailAlt: "Gratin de pâtes à la béchamel servi dans un plat rond blanc, sur une serviette, avec cuillère et fourchette",
    credits: {
      hero: {
        photographer: "Hilal Diken",
        url: "https://www.pexels.com/photo/baked-cheesy-pasta-with-fresh-parsley-38103947/",
      },
      detail: {
        photographer: "bams awey",
        url: "https://www.pexels.com/photo/creamy-baked-pasta-dish-on-white-napkin-35622190/",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#E0A040",
    onAccent: "#1B1712",
    ink: "#865210",
    tint: "#FBF2E2",
    deep: "#1A1208",
    focus: "50% 50%",
  },
});
