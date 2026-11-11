import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "pain-d-epices",
  title: "Pain d’épices au miel",
  seoTitle: "Pain d’épices au miel et à la farine de seigle",
  tagline: "Encore meilleur le surlendemain.",
  description:
    "Pain d’épices moelleux pour un moule de 26 cm : 250 g de miel, farine de seigle, cannelle, gingembre et anis vert, 1 heure de cuisson à 160 °C.",
  summary:
    "Pour un moule à cake de 26 cm, soit 10 tranches, faites tiédir 250 g de miel avec 80 g de cassonade, 15 cl de lait et 60 g de beurre, puis mélangez-les à 125 g de farine de seigle, 125 g de farine de blé, la levure, les épices et 2 œufs. Cuisez 55 minutes à 1 heure à 160 °C. Comptez 2 h 45 avec le refroidissement ; il est encore meilleur le lendemain, emballé dans du film.",
  intro: [
    "Le pain d’épices est un gâteau de miel plus qu’un pain : une mie dense et brune, parfumée de cannelle et d’anis, qu’on tranche épais et qu’on beurre volontiers. La farine de seigle lui donne sa texture serrée et son petit goût de céréale.",
    "Il rate surtout par impatience. Les œufs versés dans le miel trop chaud cuisent en filaments, et un four trop fort brûle le dessus avant que le centre soit cuit, parce que le miel colore très vite.",
    "Le plus difficile vient après : ne pas le couper tout de suite. Emballé dans du film, il devient plus moelleux et plus parfumé au fil des jours.",
  ],
  category: "Goûter",
  cuisine: "Française",
  keywords: [
    "pain d’épices",
    "recette pain d’épices",
    "pain d’épices maison",
    "pain d’épices au miel",
    "pain d’épices moelleux",
    "pain d’épices farine de seigle",
    "épices pour pain d’épices",
    "pain d’épices de noël",
  ],
  servings: 10,
  servingsLabel: { one: "tranche", other: "tranches" },
  times: { prep: 20, cook: 65, rest: 80 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["noel"],
  equipment: ["moule à cake de 26 cm", "casserole", "grand saladier", "fouet", "papier cuisson", "grille"],
  ingredients: [
    {
      items: [
        { qty: 250, unit: "g", name: "miel liquide", note: "châtaignier, sapin ou toutes fleurs", step: 10 },
        { qty: 80, unit: "g", name: "cassonade", step: 5 },
        { qty: 15, unit: "cl", name: "lait entier", step: 1 },
        { qty: 60, unit: "g", name: "beurre", note: "plus un peu pour le moule", step: 5 },
        { qty: 125, unit: "g", name: "farine de seigle", step: 5 },
        { qty: 125, unit: "g", name: "farine de blé", note: "type 55", step: 5 },
        { qty: 11, unit: "g", name: "levure chimique", note: "1 sachet", step: 1 },
        { qty: 2, unit: "cac", name: "cannelle moulue", step: 0.5 },
        { qty: 1, unit: "cac", name: "gingembre moulu", step: 0.5 },
        { qty: 1, unit: "cac", name: "anis vert moulu", step: 0.5 },
        { qty: 1, unit: "cac", name: "quatre-épices", step: 0.5 },
        { qty: 1, unit: "pincee", name: "sel", step: 1 },
        { qty: 1, name: "orange non traitée", plural: "oranges non traitées", note: "le zeste", step: 1 },
        { qty: 2, name: "œuf", plural: "œufs", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "La pâte",
      steps: [
        {
          title: "Préchauffer et chemiser",
          text: "Allumez le four à 160 °C. Beurrez le moule à cake et tapissez-le d’une bande de papier cuisson qui dépasse des deux grands côtés, pour démouler facilement.",
        },
        {
          title: "Tiédir le miel",
          text: "Dans la casserole, sur feu doux, chauffez le miel, la cassonade, le lait et le beurre 5 minutes en remuant, jusqu’à ce que le beurre ait fondu et que le sucre ne crisse plus sous la cuillère. Ne laissez pas bouillir. Hors du feu, laissez tiédir 10 minutes.",
          timer: { minutes: 15, label: "Miel chauffé puis tiédi" },
          tip: "Le mélange doit être tiède au doigt avant d’y mettre les œufs. Trop chaud, il les cuit en filaments.",
        },
        {
          title: "Mélanger les poudres",
          text: "Dans le saladier, mélangez les deux farines, la levure, la cannelle, le gingembre, l’anis vert, le quatre-épices, le sel et le zeste d’orange.",
        },
        {
          title: "Assembler la pâte",
          text: "Fouettez les œufs dans le miel tiède, puis versez le tout sur les poudres. Mélangez au fouet juste le temps d’obtenir une pâte lisse, épaisse et brillante, qui retombe en ruban lourd. Arrêtez dès qu’il n’y a plus de farine visible.",
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Cuire doucement",
          text: "Versez la pâte dans le moule et enfournez à mi-hauteur pour 55 minutes à 1 heure. Si le dessus fonce trop au bout de 35 minutes, posez une feuille d’aluminium dessus. Il est cuit quand une lame plantée au centre ressort sèche.",
          timer: { minutes: 60, label: "Cuisson à 160 °C" },
          tip: "Le miel colore très vite. Une croûte brun foncé est normale ; noire, c’est que le four est trop chaud.",
        },
        {
          title: "Refroidir",
          text: "Laissez-le 10 minutes dans le moule, démoulez-le en tirant sur le papier, puis laissez-le refroidir 1 heure sur la grille, jusqu’à ce qu’il soit froid au toucher.",
          timer: { minutes: 70, label: "Refroidissement" },
        },
        {
          title: "Emballer et patienter",
          text: "Emballez-le serré dans du film alimentaire. Vous pouvez le couper dès qu’il est froid, mais il gagne à attendre le lendemain : la mie devient plus souple et les épices plus rondes.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Le miel retient l’eau",
      text: "Le miel est riche en fructose, un sucre qui attire l’humidité et la retient. C’est pour ça qu’un pain d’épices bien emballé devient plus moelleux après un ou deux jours, au lieu de rassir comme un cake ordinaire.",
    },
    {
      title: "Pourquoi il brunit si vite",
      text: "Le fructose caramélise à plus basse température que le sucre de table et participe activement à la réaction de Maillard. D’où un four modéré à 160 °C, et l’aluminium si le dessus fonce trop tôt.",
    },
    {
      title: "Ce que fait le seigle",
      text: "La farine de seigle forme peu de gluten élastique et contient des fibres, les pentosanes, qui retiennent beaucoup d’eau. La mie est plus dense et plus serrée qu’avec du blé seul, et reste humide plus longtemps.",
    },
  ],
  tips: [
    "Prenez un miel qui a du caractère, châtaignier ou sapin. Un miel d’acacia, très doux, donne un pain d’épices bien sage.",
    "Moulez l’anis vert vous-même au moulin à café : fraîchement moulu, il a bien plus de parfum qu’une poudre ouverte depuis des mois.",
    "Ne travaillez pas la pâte une fois la farine ajoutée. Trop fouettée, elle développe le gluten du blé et la mie devient élastique.",
    "Tranchez-le au couteau à pain, en tranches de 1,5 cm, et beurrez-les au beurre demi-sel.",
  ],
  mistakes: [
    "Verser les œufs dans le miel encore chaud. Ils coagulent en filaments ; attendez que le mélange soit tiède au doigt.",
    "Cuire trop chaud. Le dessus brûle et le centre reste cru ; à 160 °C, couvrez d’aluminium dès que la croûte est bien brune.",
    "Le couper chaud. La mie colle au couteau et paraît pâteuse ; elle se tranche net une fois froide, et mieux encore le lendemain.",
    "Le laisser à l’air libre. Il sèche en deux jours, alors qu’emballé dans du film il tient plus d’une semaine.",
  ],
  variations: [
    {
      title: "Aux écorces d’orange",
      text: "Ajoutez à la pâte 80 g d’écorces d’orange confites en petits dés, roulées dans une cuillerée de farine pour qu’elles ne tombent pas au fond.",
    },
    {
      title: "Sans seigle",
      text: "Remplacez la farine de seigle par la même quantité de farine de blé. La mie est plus claire et plus légère, et sèche un peu plus vite.",
    },
    {
      title: "En petits pains",
      text: "Répartissez la pâte dans 12 moules à muffins beurrés et cuisez 20 à 25 minutes à 160 °C.",
    },
  ],
  storage:
    "Emballé dans du film alimentaire ou dans une boîte hermétique, il se garde 10 jours à température ambiante et s’améliore les premiers jours. Il se congèle 3 mois, en tranches.",
  pairing:
    "Une tranche avec du beurre demi-sel au goûter, ou toastée avec du foie gras à Noël. Un thé noir, un chocolat chaud ou un vin chaud.",
  faq: [
    {
      q: "Pourquoi attendre le lendemain pour manger le pain d’épices ?",
      a: "Ce n’est pas obligatoire, mais il y gagne. Emballé, il s’humidifie grâce au miel qui retient l’eau, et les épices se fondent. Le lendemain, la mie est plus souple et le goût plus rond.",
    },
    {
      q: "Peut-on faire un pain d’épices sans farine de seigle ?",
      a: "Oui, avec 250 g de farine de blé type 55. La mie sera plus claire et plus légère, et elle sèchera un peu plus vite.",
    },
    {
      q: "Quel miel choisir pour un pain d’épices ?",
      a: "Un miel liquide qui a du goût : châtaignier, sapin, forêt ou toutes fleurs. Le châtaignier apporte une pointe d’amertume qui équilibre le sucre ; l’acacia est trop discret.",
    },
    {
      q: "Combien de temps se garde le pain d’épices maison ?",
      a: "10 jours à température ambiante, bien emballé dans du film alimentaire. Il se congèle aussi 3 mois, en tranches.",
    },
    {
      q: "Quelles épices mettre dans un pain d’épices ?",
      a: "Ici, cannelle, gingembre, anis vert et quatre-épices. Vous pouvez y ajouter de la badiane moulue, de la cardamome ou plus de zeste d’orange, selon vos goûts.",
    },
    {
      q: "Comment savoir si le pain d’épices est cuit ?",
      a: "55 minutes à 1 heure à 160 °C pour un moule de 26 cm. Une lame plantée au centre ressort sèche, et le dessus, brun foncé, reprend sa forme quand on l’appuie du doigt.",
    },
  ],
  nutrition: { calories: 265, protein: 4, fat: 7, saturatedFat: 4, carbs: 47, sugar: 29, fiber: 2, sodium: 150 },
  annotations: { hero: "la croûte brune vient du miel", detail: "une mie serrée, grâce au seigle" },
  images: {
    heroAlt: "Pain d’épices entamé sur fond blanc, croûte brune et bosselée, mie dorée et alvéolée",
    detailAlt: "Tranche de pain d’épices vue de près, mie brune et alvéolée sous une fine croûte",
    credits: {
      hero: { photographer: "David Monniaux", url: "https://commons.wikimedia.org/wiki/File:Pain_depices_p1050129.jpg", source: "Wikimedia Commons", license: "CC BY-SA 3.0" },
      detail: { photographer: "David Monniaux", url: "https://commons.wikimedia.org/wiki/File:Pain_depices_p1050134.jpg", source: "Wikimedia Commons", license: "CC BY-SA 3.0" },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#B8732A",
    onAccent: "#1B1712",
    ink: "#7E4A12",
    tint: "#FAF0E3",
    deep: "#1D1208",
    focus: "45% 50%",
  },
});
