import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "sables-de-noel",
  title: "Sablés de Noël à la cannelle",
  seoTitle: "Sablés de Noël à la cannelle, découpés à l’emporte-pièce",
  tagline: "À étaler avant de refroidir.",
  description:
    "Une quarantaine de sablés de Noël à la cannelle et au gingembre, découpés à l’emporte-pièce et cuits 11 minutes à 170 °C, avec un glaçage au citron facultatif.",
  summary:
    "Pour 40 sablés, crémez 125 g de beurre mou avec 100 g de sucre roux, ajoutez 1 œuf, puis 250 g de farine, 2 cuillères à café de cannelle, du gingembre et du quatre-épices. Étalez la pâte à 4 mm entre deux feuilles de papier cuisson, laissez-la durcir 1 h au réfrigérateur, découpez à l’emporte-pièce et faites cuire 10 à 12 minutes à 170 °C. Comptez 2 h 30 en tout, glaçage non compris.",
  intro: [
    "Ces sablés aux épices se découpent en étoiles, en sapins ou en bonshommes, et se gardent deux semaines dans une boîte en fer. Une pâte au beurre, du sucre roux, de la cannelle et un peu de gingembre : on est du côté des bredele alsaciens.",
    "Ce qui les fait rater, c’est une pâte trop molle. Elle colle au rouleau, les formes se déchirent et s’étalent au four. On l’étale donc tout de suite, entre deux feuilles de papier cuisson, puis on la met au froid à plat : elle se découpe ensuite proprement.",
    "Le glaçage est facultatif. Du sucre glace et du jus de citron suffisent, sans blanc d’œuf cru.",
  ],
  category: "Goûter",
  cuisine: "Française",
  keywords: [
    "sablés de noël",
    "recette sablés de noël",
    "biscuits de noël",
    "sablés à la cannelle",
    "bredele",
    "biscuits à l’emporte-pièce",
    "sablés de noël glaçage",
    "petits gâteaux de noël",
  ],
  diet: ["vegetarian"],
  servings: 40,
  servingsLabel: { one: "sablé", other: "sablés" },
  times: { prep: 45, cook: 24, rest: 80 },
  difficulty: "Facile",
  cost: "€",
  season: ["Hiver"],
  tags: ["noel"],
  equipment: [
    "rouleau à pâtisserie",
    "papier cuisson",
    "emporte-pièces de 5 à 6 cm",
    "2 plaques de cuisson",
    "grille",
    "petite poche ou sac de congélation",
  ],
  ingredients: [
    {
      title: "La pâte",
      items: [
        { qty: 125, unit: "g", name: "beurre doux", note: "mou", step: 5 },
        { qty: 100, unit: "g", name: "sucre roux", note: "cassonade ou vergeoise blonde", step: 5 },
        { qty: 1, unit: "pincee", name: "sel", step: 1 },
        { qty: 1, name: "œuf", plural: "œufs", note: "à température ambiante", step: 1 },
        { qty: 250, unit: "g", name: "farine", note: "type 45 ou 55", step: 10 },
        { qty: 2, unit: "cac", name: "cannelle moulue", step: 0.5 },
        { qty: 1, unit: "cac", name: "gingembre moulu", step: 0.5 },
        { qty: 0.5, unit: "cac", name: "quatre-épices", step: 0.5 },
      ],
    },
    {
      title: "Le glaçage (facultatif)",
      items: [
        { qty: 100, unit: "g", name: "sucre glace", step: 10, optional: true },
        { qty: 1, unit: "cas", name: "jus de citron", note: "environ, à ajuster", step: 0.5, optional: true },
      ],
    },
  ],
  method: [
    {
      title: "La pâte",
      steps: [
        {
          title: "Crémer le beurre",
          text: "Dans un saladier, travaillez le beurre mou avec le sucre roux et le sel, à la spatule ou au batteur, jusqu’à obtenir une crème lisse, sans morceaux de beurre.",
        },
        {
          title: "Ajouter l’œuf et la farine",
          text: "Incorporez l’œuf. Mélangez la farine avec la cannelle, le gingembre et le quatre-épices, ajoutez-les, puis mélangez juste assez pour que la pâte se rassemble en boule. Si elle reste friable, pressez-la à la main sans la pétrir.",
          tip: "Plus on travaille la pâte après la farine, plus les sablés sont durs. Arrêtez dès qu’il n’y a plus de farine visible.",
        },
        {
          title: "Étaler puis refroidir",
          text: "Coupez la pâte en deux. Étalez chaque moitié au rouleau entre deux feuilles de papier cuisson, sur 4 mm d’épaisseur. Glissez les feuilles à plat sur une plaque et mettez au réfrigérateur 1 h, jusqu’à ce que la pâte soit ferme et cassante au toucher.",
          timer: { minutes: 60, label: "Pâte au froid" },
          tip: "Étalée tant qu’elle est souple, la pâte ne se fendille pas. Froide, elle se découpe net et garde sa forme au four.",
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Découper",
          text: "Préchauffez le four à 170 °C, chaleur statique. Retirez la feuille du dessus, découpez les formes en les serrant au maximum et posez-les sur une plaque garnie de papier cuisson, à 2 cm d’écart. Rassemblez les chutes, étalez-les de nouveau et remettez-les au froid 15 minutes.",
          timer: { minutes: 15, label: "Chutes au froid" },
        },
        {
          title: "Cuire",
          text: "Faites cuire une plaque à la fois, à mi-hauteur, 10 à 12 minutes : les bords foncent à peine et le dessus est mat, encore un peu souple sous le doigt. Les sablés durcissent en refroidissant.",
          timer: { minutes: 11, label: "Cuisson d’une plaque" },
          tip: "Ne vous fiez pas à la couleur : avec le sucre roux et la cannelle, la pâte est déjà brune. Regardez les bords et touchez le centre.",
        },
        {
          title: "Refroidir sur grille",
          text: "Faites glisser les sablés sur une grille et laissez-les refroidir complètement, 20 minutes environ, avant de les glacer ou de les ranger.",
          timer: { minutes: 20, label: "Refroidissement" },
        },
      ],
    },
    {
      title: "Le glaçage (facultatif)",
      steps: [
        {
          title: "Glacer",
          text: "Versez le sucre glace dans un bol et ajoutez le jus de citron cuillère à café par cuillère à café, en mélangeant, jusqu’à une pâte épaisse qui retombe en ruban lent. Mettez-la dans une petite poche ou un sac de congélation dont vous coupez un tout petit coin, tracez des lignes et des points sur les sablés, puis laissez sécher 1 h à l’air.",
          timer: { minutes: 60, label: "Séchage du glaçage" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi « sablé »",
      text: "Le beurre enrobe les grains de farine et limite la formation du gluten, ce réseau élastique qui rend une pâte à pain souple. Peu de gluten, c’est un biscuit qui se brise net sous la dent au lieu de s’étirer. D’où la consigne de ne pas pétrir.",
    },
    {
      title: "Le froid fixe les formes",
      text: "Un beurre bien froid met plus longtemps à fondre dans le four. La surface des sablés a le temps de prendre avant que le beurre ne coule, et les contours de l’emporte-pièce restent nets.",
    },
    {
      title: "Le sucre roux et la couleur",
      text: "Le sucre roux garde un peu de mélasse, qui apporte de l’humidité, un goût de caramel et favorise le brunissement. Les sablés sont plus foncés et un peu moins secs qu’avec du sucre blanc.",
    },
  ],
  tips: [
    "Préparez la pâte la veille si vous voulez : étalée entre ses feuilles et filmée, elle attend 2 jours au réfrigérateur.",
    "Farinez l’emporte-pièce entre deux découpes pour qu’il se dégage net.",
    "Pour suspendre des sablés au sapin, percez un petit trou avec une paille avant la cuisson.",
    "Mélangez les épices à la farine avant de l’ajouter : elles se répartissent mieux et la pâte a une couleur égale.",
  ],
  mistakes: [
    "Une pâte étalée trop fine, sous 3 mm, donne des sablés qui brûlent sur les bords. Gardez 4 mm et des formes de taille proche sur une même plaque.",
    "Des sablés qui s’étalent au four sortaient d’une pâte trop molle. Remettez la plaque découpée 10 minutes au congélateur avant d’enfourner.",
    "Un glaçage trop liquide dégouline sur les bords. Ajoutez du sucre glace, une cuillère à soupe à la fois, jusqu’à ce qu’il tienne.",
    "Rangés tièdes dans une boîte, les sablés ramollissent. Attendez qu’ils soient froids jusqu’au centre.",
  ],
  variations: [
    {
      title: "À l’orange",
      text: "Ajoutez au beurre le zeste finement râpé d’une orange non traitée et remplacez le quatre-épices par une pincée de cardamome moulue.",
    },
    {
      title: "Façon spéculoos",
      text: "Remplacez le sucre roux par 100 g de vergeoise brune et ajoutez ½ cuillère à café de clou de girofle moulu et autant de muscade. Les sablés sont plus sombres et plus épicés.",
    },
    {
      title: "Sablés fourrés",
      text: "Découpez des formes identiques, évidez le centre de la moitié d’entre elles avec un petit emporte-pièce, et collez-les deux à deux après cuisson avec 1 cuillère à café de confiture de framboise.",
    },
  ],
  storage:
    "Les sablés se gardent 2 semaines dans une boîte en fer bien fermée, à température ambiante, à l’abri de l’humidité. Glacés, attendez que le glaçage soit sec avant de les empiler. La pâte crue se congèle 3 mois, étalée entre ses feuilles de papier : découpez-la à peine sortie du congélateur.",
  pairing: "Un thé noir, un chocolat chaud ou un verre de vin chaud, en fin d’après-midi.",
  faq: [
    {
      q: "Faut-il mettre la pâte à sablés au frais ?",
      a: "Oui, 1 h au minimum, étalée à plat. Froide, elle se découpe proprement et les sablés gardent leur forme à la cuisson. Une pâte molle colle à l’emporte-pièce et les formes s’affaissent.",
    },
    {
      q: "Combien de temps se gardent les sablés de Noël ?",
      a: "2 semaines dans une boîte en fer bien fermée, à température ambiante. Ne les mélangez pas avec des biscuits moelleux, qui leur cèdent leur humidité.",
    },
    {
      q: "Peut-on faire un glaçage sans blanc d’œuf ?",
      a: "Oui, c’est celui de cette recette : du sucre glace et un peu de jus de citron. Il sèche moins dur qu’une glace royale, mais il tient en une heure et ne contient pas d’œuf cru.",
    },
    {
      q: "Quelle épaisseur pour des sablés à l’emporte-pièce ?",
      a: "4 mm. Plus fins, les bords brûlent avant que le centre cuise ; plus épais, il faut 2 à 3 minutes de cuisson en plus et ils sont moins croquants.",
    },
    {
      q: "Peut-on congeler la pâte à sablés ?",
      a: "Oui, jusqu’à 3 mois, étalée entre ses deux feuilles de papier cuisson et emballée à plat. Découpez-la à peine sortie du congélateur, quand elle est encore ferme, et comptez 1 à 2 minutes de cuisson en plus.",
    },
  ],
  nutrition: { calories: 57, protein: 0.8, fat: 2.8, saturatedFat: 1.7, carbs: 7, sugar: 2.5, fiber: 0.3, sodium: 7 },
  annotations: { hero: "4 mm, ni plus ni moins", detail: "sortis du four, encore souples" },
  images: {
    heroAlt: "Sablés de Noël aux épices glacés de blanc, en forme de sapins, de maisons et de bonshommes, sur une table grise",
    detailAlt: "Sablés de Noël découpés à l’emporte-pièce et tout juste cuits, étalés sur une planche avant le glaçage",
    credits: {
      hero: { photographer: "Katrin Bolovtsova", url: "https://www.pexels.com/photo/homemade-christmas-cookies-5702980/" },
      detail: { photographer: "Pethrus", url: "https://commons.wikimedia.org/wiki/File:Fr_Alsace_Plaque_bredele_2.jpg", source: "Wikimedia Commons", license: "CC BY-SA 4.0" },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#B06A32",
    onAccent: "#1C120A",
    ink: "#7A4519",
    tint: "#F8EEE4",
    deep: "#1C120A",
    focus: "50% 50%",
  },
});
