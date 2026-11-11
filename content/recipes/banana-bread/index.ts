import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "banana-bread",
  title: "Banana bread",
  seoTitle: "Banana bread moelleux, avec des bananes bien noires",
  tagline: "Les bananes noires ont enfin un avenir.",
  description:
    "Banana bread moelleux aux bananes très mûres, beurre fondu et vergeoise, mélangé en 15 minutes à la fourchette et cuit 1 heure à 170 °C. Sans robot.",
  summary:
    "Pour un banana bread de 10 tranches, écrasez 3 bananes très mûres (350 g), mélangez-les avec 100 g de beurre fondu, 120 g de vergeoise, 2 œufs et la vanille, puis ajoutez 220 g de farine, 1 c. à café de bicarbonate et une pincée de sel. Faites cuire 55 à 65 minutes à 170 °C dans un moule à cake de 25 cm, et laissez refroidir au moins 1 heure avant de trancher.",
  intro: [
    "Le banana bread est un cake américain fait pour les bananes trop mûres, celles dont la peau est presque noire et que plus personne ne veut manger. Plus elles sont tachées, plus elles sont sucrées et parfumées, et plus le cake est moelleux.",
    "Il se fait sans batteur, à la fourchette et à la maryse, en 15 minutes. Le bicarbonate réagit avec l’acidité des bananes pour le faire lever, et lui donne sa croûte brun foncé.",
    "Ce qui peut rater : une pâte trop travaillée qui donne un cake dense et creusé de tunnels, ou un centre encore cru sous une croûte trop cuite. Et si vous ajoutez des noix, pensez à le dire à ceux qui sont allergiques aux fruits à coque.",
  ],
  category: "Goûter",
  cuisine: "Américaine",
  keywords: [
    "banana bread",
    "recette banana bread",
    "banana bread moelleux",
    "banana bread facile",
    "cake à la banane",
    "gâteau bananes trop mûres",
    "banana bread aux noix",
    "que faire avec des bananes trop mûres",
  ],
  diet: ["vegetarian"],
  servings: 10,
  servingsLabel: { one: "tranche", other: "tranches" },
  times: { prep: 15, cook: 60, rest: 75 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  equipment: ["moule à cake de 25 cm", "papier sulfurisé", "2 saladiers", "fourchette", "maryse", "grille"],
  ingredients: [
    {
      items: [
        {
          qty: 3,
          name: "banane très mûre",
          plural: "bananes très mûres",
          note: "peau tachée de noir, 350 g une fois pelées",
          step: 1,
        },
        { qty: 100, unit: "g", name: "beurre doux", note: "fondu et tiédi, plus un peu pour le moule", step: 10 },
        { qty: 120, unit: "g", name: "vergeoise blonde", note: "ou cassonade", step: 10 },
        { qty: 2, name: "œuf", plural: "œufs", note: "à température ambiante", step: 1 },
        { qty: 1, unit: "cac", name: "extrait de vanille", step: 0.5 },
        { qty: 220, unit: "g", name: "farine T55", step: 10 },
        { qty: 1, unit: "cac", name: "bicarbonate de soude", note: "rase, environ 5 g", step: 0.5 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 1, unit: "cac", name: "cannelle en poudre", step: 0.5, optional: true },
        { qty: 80, unit: "g", name: "cerneaux de noix", note: "concassés", step: 10, optional: true },
      ],
    },
  ],
  method: [
    {
      title: "Préparation",
      steps: [
        {
          title: "Préchauffer et chemiser",
          text: "Allumez le four à 170 °C, chaleur statique. Beurrez le moule et posez dedans une bande de papier sulfurisé qui dépasse des deux grands côtés : elle servira de poignées pour démouler.",
        },
        {
          title: "Écraser les bananes",
          text: "Pelez les bananes et écrasez-les à la fourchette dans un saladier. Laissez quelques petits morceaux : ils feront des poches fondantes dans la mie.",
          tip: "Pesez les bananes pelées : c’est le poids qui compte, pas le nombre. Entre 330 et 370 g, tout va bien.",
        },
        {
          title: "Mélanger beurre, sucre, œufs",
          text: "Ajoutez le beurre fondu tiède, la vergeoise, les œufs et la vanille, et mélangez à la fourchette jusqu’à ce que ce soit homogène. Le mélange est épais et un peu grumeleux, à cause de la banane.",
        },
        {
          title: "Incorporer la farine",
          text: "Dans le second saladier, mélangez la farine, le bicarbonate, le sel et la cannelle si vous en mettez. Versez-les sur les bananes et soulevez la pâte à la maryse, juste jusqu’à ce qu’il ne reste plus de farine sèche. Ajoutez les noix si vous en mettez, en deux tours de maryse.",
          tip: "Arrêtez-vous dès que la farine a disparu, même s’il reste quelques grumeaux. Plus vous mélangez, plus le cake devient dense et élastique.",
        },
      ],
    },
    {
      title: "Cuisson",
      steps: [
        {
          title: "Cuire le cake",
          text: "Versez la pâte dans le moule, lissez le dessus et enfournez 55 à 65 minutes. Si le dessus brunit trop vite, couvrez-le d’une feuille d’aluminium. Il est cuit quand il a bien bombé, qu’il sonne creux et qu’une lame plantée au centre ressort avec quelques miettes humides, mais sans pâte crue.",
          timer: { minutes: 60, label: "Cuisson du banana bread" },
        },
        {
          title: "Laisser refroidir",
          text: "Laissez-le 15 minutes dans le moule, puis démoulez-le en tirant sur le papier et laissez-le refroidir au moins 1 heure sur une grille. Chaud, la mie est encore trop humide : elle se tasse sous le couteau.",
          timer: { minutes: 75, label: "Refroidissement" },
        },
        {
          title: "Trancher",
          text: "Coupez-le en 10 tranches de 2,5 cm environ avec un couteau à pain, en sciant doucement. Il est encore meilleur le lendemain, bien emballé.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi des bananes noires",
      text: "En mûrissant, la banane transforme son amidon en sucres, et ses arômes s’intensifient. Une banane à peau noire est donc beaucoup plus sucrée et parfumée qu’une jaune, et sa chair, plus molle, s’écrase facilement et apporte de l’humidité au cake.",
    },
    {
      title: "Ce que fait le bicarbonate",
      text: "Le bicarbonate est une base : au contact d’un acide, ici surtout celui des bananes, il libère du gaz carbonique qui fait lever la pâte. Il rend aussi la pâte moins acide, ce qui accélère la réaction de Maillard : la croûte et la mie brunissent davantage.",
    },
    {
      title: "Mélanger le moins possible",
      text: "Dès que la farine est mouillée, chaque coup de maryse développe le gluten. Dans un pain, c’est utile. Dans un cake, trop de gluten donne une mie élastique et serrée, creusée de tunnels où le gaz s’est engouffré.",
    },
  ],
  tips: [
    "Pas de bananes assez mûres ? Mettez-les entières, dans leur peau, 15 à 20 minutes au four à 150 °C : la peau noircit et la chair ramollit. Elles ne seront pas aussi sucrées que des bananes mûries naturellement, mais ça dépanne.",
    "Des bananes noires en trop ? Pelez-les, congelez-les en sac, et gardez-les pour le prochain banana bread.",
    "Le lendemain, faites dorer une tranche à la poêle avec une noisette de beurre demi-sel : la croûte caramélise.",
    "Emballé dans du film dès qu’il est froid, il reste moelleux plusieurs jours : l’humidité se répartit dans la mie.",
  ],
  mistakes: [
    "Fouetter la pâte après avoir ajouté la farine. Le cake devient dense et élastique, avec des tunnels.",
    "Prendre des bananes encore jaunes. Le cake manque de goût, de sucre et de moelleux.",
    "Le couper chaud. La mie, encore humide, se tasse sous le couteau et paraît crue.",
    "Remplacer le bicarbonate par la même quantité de levure chimique. Elle est plusieurs fois moins puissante : le cake lève moins et reste plus pâle.",
  ],
  variations: [
    {
      title: "Aux noix ou au chocolat",
      text: "Ajoutez 80 g de cerneaux de noix concassés, ou 100 g de pépites de chocolat noir, à la fin du mélange. Gardez-en une poignée à parsemer sur le dessus avant d’enfourner.",
    },
    {
      title: "À l’huile",
      text: "Remplacez le beurre par 90 ml d’huile neutre, de colza par exemple. Le cake est encore plus moelleux et se garde mieux, mais il perd le goût du beurre.",
    },
    {
      title: "Moins sucré",
      text: "Avec des bananes vraiment noires, 80 g de vergeoise suffisent. Le cake est un peu moins brun et un peu moins moelleux, mais le goût de banane ressort davantage.",
    },
  ],
  storage:
    "Il se garde 4 jours à température ambiante, bien emballé dans du film ou dans une boîte hermétique. Il se congèle très bien en tranches, 2 mois ; décongelez-les à température ambiante ou directement au grille-pain.",
  pairing: "Un café filtre, un thé noir, ou un grand verre de lait froid.",
  faq: [
    {
      q: "Pourquoi utiliser des bananes très mûres pour un banana bread ?",
      a: "Parce qu’en mûrissant, la banane transforme son amidon en sucres et devient beaucoup plus parfumée. Avec des bananes jaunes, le cake est fade et plus sec. Plus la peau est tachée de noir, meilleur il sera.",
    },
    {
      q: "Comment savoir si le banana bread est cuit ?",
      a: "Plantez une lame au centre : elle doit ressortir avec quelques miettes humides, sans pâte crue. Le dessus est bombé, brun et ferme sous le doigt. Avec un thermomètre, visez environ 95 °C à cœur.",
    },
    {
      q: "Pourquoi mon banana bread est-il cru au milieu ?",
      a: "Le four était sans doute trop chaud : la croûte a cuit avant le centre. Ou le moule était plus étroit et plus haut. Couvrez d’aluminium et prolongez de 10 minutes, puis vérifiez à nouveau avec une lame.",
    },
    {
      q: "Peut-on utiliser des bananes congelées ?",
      a: "Oui. Laissez-les décongeler dans un bol et gardez le jus qu’elles rendent : il fait partie des 350 g. Elles sont molles et noires, c’est parfait pour un banana bread.",
    },
    {
      q: "Par quoi remplacer la vergeoise ?",
      a: "Par de la cassonade ou du sucre blond, au même poids. Avec du sucre blanc, le cake sera plus pâle et un peu moins moelleux, car la vergeoise apporte de l’humidité et un goût de caramel.",
    },
    {
      q: "Le banana bread contient-il des fruits à coque ?",
      a: "Pas dans la version de base. Mais on y ajoute souvent des noix ou des noix de pécan : si vous en mettez, prévenez vos invités, en particulier les personnes allergiques aux fruits à coque, car elles ne se voient pas toujours dans la mie.",
    },
    {
      q: "Peut-on congeler le banana bread ?",
      a: "Oui, très bien. Laissez-le refroidir complètement, coupez-le en tranches, emballez-les et congelez-les jusqu’à 2 mois. Elles décongèlent en une heure à température ambiante, ou passent directement au grille-pain.",
    },
  ],
  nutrition: {
    calories: 240,
    protein: 4,
    fat: 9,
    saturatedFat: 6,
    carbs: 36,
    sugar: 18,
    fiber: 2,
    sodium: 170,
  },
  annotations: {
    hero: "plus elles sont noires, mieux c’est",
    detail: "à la maryse, sans insister",
  },
  images: {
    heroAlt:
      "Banana bread coupé en tranches sur une planche en bois, mie dorée piquée de banane, une banane jaune en arrière-plan",
    detailAlt:
      "Banana bread à la croûte brun foncé, une tranche coupée qui montre la mie moelleuse, sur du papier sulfurisé",
    credits: {
      hero: {
        photographer: "Kerri Sam",
        url: "https://www.pexels.com/photo/delicious-homemade-banana-bread-slices-on-wooden-board-33739660/",
      },
      detail: {
        photographer: "ROMAN ODINTSOV",
        url: "https://www.pexels.com/photo/close-up-photo-of-sliced-bread-on-a-plate-5837001/",
      },
    },
  },
  datePublished: "2026-11-09",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#D9A23A",
    onAccent: "#1b1712",
    ink: "#7F5113",
    tint: "#FAF2E2",
    deep: "#1a120c",
    focus: "55% 60%",
  },
});
