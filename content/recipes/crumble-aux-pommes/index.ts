import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "crumble-aux-pommes",
  title: "Crumble aux pommes",
  seoTitle: "Crumble aux pommes croustillant, la bonne proportion",
  tagline: "Pas besoin de sortir le rouleau.",
  description:
    "Un crumble aux pommes pour 6 : 150 g de farine, 100 g de beurre froid et 100 g de cassonade sur 1 kg de pommes, 40 minutes au four à 180 °C.",
  summary:
    "Pour 6 personnes, sablez du bout des doigts 150 g de farine, 100 g de cassonade et 100 g de beurre très froid jusqu’à obtenir des grumeaux, puis gardez-les 15 minutes au frais. Coupez 6 pommes en cubes de 2 cm, mélangez-les avec 30 g de cassonade et un peu de citron, couvrez de crumble et faites cuire 35 à 40 minutes à 180 °C. Comptez 1 h 15 en tout, dont 25 minutes de travail.",
  intro: [
    "Le crumble aux pommes, c’est la tarte des jours où l’on n’a pas envie de sortir le rouleau. Des pommes en morceaux au fond d’un plat, une pâte sablée émiettée par-dessus, et le four fait le reste.",
    "Ce qui le fait rater, c’est presque toujours le beurre. Trop mou ou trop travaillé, il forme une pâte qui cuit en croûte dure et uniforme. Bien froid et à peine frotté dans la farine, il donne des grumeaux irréguliers, dorés dessus et un peu fondants dessous.",
    "Côté fruits, on mélange deux pommes : une qui fond en compote, une qui garde ses morceaux. Et la proportion du crumble, 3 parts de farine pour 2 de beurre et 2 de sucre, sert pour tous les fruits de l’année.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "crumble aux pommes",
    "recette crumble aux pommes",
    "crumble aux pommes facile",
    "pâte à crumble",
    "proportion pâte à crumble",
    "crumble croustillant",
    "crumble aux pommes cannelle",
    "crumble aux fruits de saison",
  ],
  diet: ["vegetarian"],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 25, cook: 40, rest: 10 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["automne"],
  equipment: ["plat à gratin de 20 × 28 cm ou moule rond de 26 cm", "grand saladier", "économe et couteau d’office"],
  ingredients: [
    {
      title: "Crumble",
      items: [
        { qty: 150, unit: "g", name: "farine T55", step: 5 },
        { qty: 100, unit: "g", name: "cassonade", step: 5 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        {
          qty: 100,
          unit: "g",
          name: "beurre doux",
          note: "sorti du réfrigérateur au dernier moment, en dés de 1 cm",
          step: 5,
        },
      ],
    },
    {
      title: "Pommes",
      items: [
        { qty: 10, unit: "g", name: "beurre doux", note: "pour le plat", step: 5, fixed: true },
        {
          qty: 6,
          name: "pomme",
          plural: "pommes",
          note: "environ 1 kg : moitié boskoop, moitié golden",
          step: 1,
        },
        { qty: 30, unit: "g", name: "cassonade", step: 5 },
        { qty: 1, unit: "cas", name: "jus de citron", step: 1 },
        { qty: 0.5, unit: "cac", name: "cannelle en poudre", step: 0.5, optional: true },
      ],
    },
  ],
  method: [
    {
      title: "Le crumble",
      steps: [
        {
          title: "Sabler le crumble",
          text: "Dans un saladier, mélangez la farine, la cassonade et le sel. Ajoutez le beurre froid. Du bout des doigts, pincez et frottez les dés dans la farine en soulevant le mélange, jusqu’à obtenir des grumeaux irréguliers, de la taille d’un petit pois à celle d’une noisette. Arrêtez-vous avant que ça ne se rassemble en pâte.",
          tip: "Travaillez vite, avec le bout des doigts seulement : la paume est trop chaude et fait fondre le beurre.",
        },
        {
          title: "Garder au froid",
          text: "Étalez les grumeaux sur une assiette et mettez-les 15 minutes au réfrigérateur pendant que vous préparez les pommes. Préchauffez le four à 180 °C.",
          timer: { minutes: 15, label: "Crumble au frais" },
        },
      ],
    },
    {
      title: "Les pommes",
      steps: [
        {
          title: "Couper les pommes",
          text: "Beurrez le plat. Épluchez les pommes, retirez le cœur et coupez-les en cubes de 2 cm. Mélangez-les directement dans le plat avec la cassonade, le jus de citron et la cannelle si vous en mettez. Les fruits doivent former une couche d’environ 4 cm.",
        },
        {
          title: "Couvrir de crumble",
          text: "Parsemez les grumeaux froids sur les pommes, jusqu’aux bords, sans jamais tasser. La surface doit rester irrégulière, avec des creux et des bosses : c’est ce relief qui dore et croustille.",
          tip: "Ne pressez pas le crumble pour l’égaliser. Tassé, il cuit en couvercle compact au lieu de rester en miettes.",
        },
        {
          title: "Cuire au four",
          text: "Posez le plat sur une plaque et enfournez 35 à 40 minutes à 180 °C. C’est cuit quand le dessus est doré franc, pas seulement blond, et que le jus des pommes bouillonne en sirop épais sur les bords.",
          timer: { minutes: 40, label: "Cuisson du crumble" },
        },
        {
          title: "Laisser tiédir",
          text: "Laissez reposer le crumble 10 minutes hors du four avant de le servir. Le jus épaissit un peu, et les pommes, brûlantes à la sortie, deviennent mangeables.",
          timer: { minutes: 10, label: "Crumble à tiédir" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Le beurre froid fait les miettes",
      text: "Froid, le beurre reste en petits morceaux enrobés de farine. Au four, il fond et l’eau qu’il contient, environ 16 %, s’évapore en laissant des grumeaux poreux et croustillants. Mou ou fondu, il se mélange à la farine en une pâte homogène qui cuit d’un bloc.",
    },
    {
      title: "Pas d’eau, pas de pâte élastique",
      text: "Le gluten de la farine ne se forme qu’avec de l’eau. Comme on n’en ajoute pas, le crumble reste friable et sablé, jamais caoutchouteux. C’est la même logique que pour une pâte sablée, sans l’œuf qui la lie.",
    },
    {
      title: "Deux pommes, deux textures",
      text: "La boskoop, acidulée, se défait en purée à la cuisson et fait le jus. La golden se tient mieux et garde des morceaux. Le citron, lui, ralentit le brunissement des fruits coupés, dû à une enzyme qui oxyde leurs polyphénols au contact de l’air.",
    },
  ],
  tips: [
    "Faites une double dose de crumble et congelez-en la moitié, à plat dans un sac. Parsemez-le encore congelé sur les fruits et ajoutez 5 minutes de cuisson.",
    "Au robot, actionnez la touche impulsion quelques secondes à la fois et arrêtez-vous dès que le mélange ressemble à du sable grossier.",
    "Un plat trop grand donne une couche de fruits trop fine, qui sèche avant que le dessus soit doré. Visez 4 cm de pommes.",
    "Pour plus de croquant, remplacez 30 g de farine par 30 g de flocons d’avoine ou de poudre d’amande.",
  ],
  mistakes: [
    "Du beurre mou ou fondu : le mélange fait une pâte qui cuit en croûte dure. Si c’est arrivé, émiettez-la grossièrement et mettez-la 20 minutes au congélateur avant de la parsemer.",
    "Un crumble trop travaillé : les grumeaux disparaissent et on obtient un biscuit. Arrêtez de frotter dès que le sable est grossier.",
    "Un crumble sorti trop tôt : blond dessus, il reste pâteux dessous, au contact du jus. Attendez un doré franc.",
    "Un plat rempli à ras bord : le jus déborde et brûle au fond du four. Laissez 1 cm de marge et posez le plat sur une plaque.",
  ],
  variations: [
    {
      title: "Au printemps, pommes et rhubarbe",
      text: "Remplacez 400 g de pommes par 400 g de rhubarbe en tronçons de 2 cm. Elle est très acide : passez à 60 g de cassonade sur les fruits.",
    },
    {
      title: "En été, abricots ou fruits rouges",
      text: "Prenez 1 kg d’abricots coupés en quatre, ou 800 g de framboises et de mûres. Ces fruits rendent beaucoup de jus : mélangez-les avec 1 cuillère à soupe de fécule de maïs et comptez 30 minutes de cuisson.",
    },
    {
      title: "En septembre, quetsches et cannelle",
      text: "Coupez 1 kg de quetsches en deux, dénoyautez-les et rangez-les serrées, peau contre le plat. Gardez la cannelle et 40 g de cassonade, et faites cuire 35 minutes.",
    },
    {
      title: "En hiver, poires et noisettes",
      text: "Utilisez 1 kg de poires fermes et remplacez 50 g de farine du crumble par 50 g de noisettes concassées. Attention aux allergies aux fruits à coque.",
    },
  ],
  storage:
    "Le crumble cuit se garde 2 jours au réfrigérateur, filmé. Réchauffez-le 10 à 15 minutes au four à 160 °C pour lui rendre son croquant ; au micro-ondes, il ramollit. Le crumble cru, sans les fruits, se garde 2 jours au frais ou 3 mois au congélateur.",
  pairing: "Une boule de glace vanille, de la crème fraîche épaisse ou un reste de crème anglaise froide.",
  faq: [
    {
      q: "Quelle est la proportion pour une pâte à crumble ?",
      a: "3 parts de farine pour 2 de beurre et 2 de sucre, soit ici 150 g, 100 g et 100 g. La version 1-1-1, à poids égal, est plus riche et plus fondante, mais elle a tendance à s’étaler en nappe au lieu de rester en grumeaux.",
    },
    {
      q: "Quelles pommes choisir pour un crumble ?",
      a: "Deux variétés si possible : une acidulée qui fond, comme la boskoop, et une qui se tient, comme la golden ou la reine des reinettes. Avec une seule variété ferme, le crumble manque de jus ; avec une seule fondante, il tourne en compote.",
    },
    {
      q: "Faut-il précuire les pommes pour un crumble ?",
      a: "Non, pas en cubes de 2 cm : elles cuisent en 35 à 40 minutes sous le crumble. Si vous coupez de gros quartiers ou si vos pommes sont très fermes, faites-les revenir 5 minutes à la poêle avec une noix de beurre avant de les mettre dans le plat.",
    },
    {
      q: "Pourquoi mon crumble n’est-il pas croustillant ?",
      a: "Le plus souvent, le beurre était trop mou ou le mélange trop travaillé. Il peut aussi avoir été tassé, ou sorti trop tôt. Gardez les grumeaux au froid, parsemez-les sans appuyer et attendez que le dessus soit franchement doré.",
    },
    {
      q: "Peut-on préparer un crumble aux pommes à l’avance ?",
      a: "Oui, en séparant les éléments. Le crumble cru se garde 2 jours au réfrigérateur ou 3 mois au congélateur. Assemblez au dernier moment : posé sur les fruits des heures avant la cuisson, il boit leur jus et perd son croquant.",
    },
    {
      q: "Peut-on faire un crumble sans gluten ?",
      a: "Oui. Remplacez la farine par 100 g de poudre d’amande et 50 g de farine de riz, en gardant le beurre et le sucre. Le crumble est plus friable et dore plus vite : surveillez-le à partir de 30 minutes. Il contient alors des fruits à coque.",
    },
  ],
  nutrition: {
    calories: 385,
    protein: 3,
    fat: 16,
    saturatedFat: 10,
    carbs: 57,
    sugar: 36,
    fiber: 4,
    sodium: 35,
  },
  annotations: {
    hero: "des grumeaux, jamais tassés",
    detail: "moitié fondantes, moitié fermes",
  },
  images: {
    heroAlt: "Crumble aux pommes doré dans un moule rond noir, posé sur une planche en bois",
    detailAlt: "Gros plan sur une part de crumble aux pommes : cubes de pommes fondants sous des grumeaux dorés",
    credits: {
      hero: {
        photographer: "Anastasia Shuraeva",
        url: "https://www.pexels.com/photo/baked-goods-on-black-ceramic-baking-tray-5495055/",
      },
      detail: {
        photographer: "Douglas Perkins",
        url: "https://commons.wikimedia.org/wiki/File:Apple_Crisp_Closeup.jpg",
        source: "Wikimedia Commons",
        license: "CC BY 4.0",
      },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#C98A3D",
    onAccent: "#1B1712",
    ink: "#7F5218",
    tint: "#F7EEDF",
    deep: "#1D140A",
    focus: "50% 72%",
  },
});
