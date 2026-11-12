import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "muffins-aux-myrtilles",
  title: "Muffins aux myrtilles",
  seoTitle: "Muffins aux myrtilles bombés, fraîches ou surgelées",
  tagline: "Des grumeaux, et c’est voulu.",
  description:
    "12 muffins aux myrtilles bien bombés : une pâte à peine mélangée, 200 g de myrtilles fraîches ou surgelées, 5 minutes à 220 °C puis 18 à 180 °C.",
  summary:
    "Pour 12 muffins, mélangez à part 300 g de farine, 150 g de sucre et la levure, puis 2 œufs, 20 cl de lait et 100 g de beurre fondu. Réunissez-les en une dizaine de coups de spatule, grumeaux compris, ajoutez 200 g de myrtilles et remplissez les caissettes à ras. Cuisez 5 minutes à 220 °C, puis 15 à 18 minutes à 180 °C. Comptez environ 45 minutes en tout, dont 15 minutes de préparation.",
  intro: [
    "Un muffin aux myrtilles se reconnaît à son chapeau : un dôme qui déborde de la caissette, craquelé, avec des myrtilles qui éclatent en surface. Dessous, une mie légère et un peu humide, qui ne ressemble pas à celle d’un cake.",
    "Ce qui les rend durs et plats, c’est de trop mélanger. On verse les liquides sur les ingrédients secs et on s’arrête dès que la farine sèche a disparu, grumeaux compris. Une dizaine de coups de spatule suffisent.",
    "Le four fait le reste : 5 minutes à 220 °C pour lancer la pousse, puis 180 °C pour cuire le cœur sans brûler le dessus.",
  ],
  category: "Goûter",
  cuisine: "Américaine",
  keywords: [
    "muffins aux myrtilles",
    "recette muffins aux myrtilles",
    "muffins myrtilles moelleux",
    "muffins myrtilles surgelées",
    "muffins aux myrtilles faciles",
    "muffin myrtille",
    "blueberry muffins",
    "muffins américains aux myrtilles",
  ],
  diet: ["vegetarian"],
  servings: 12,
  servingsLabel: { one: "muffin", other: "muffins" },
  times: { prep: 15, cook: 23, rest: 5 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  tags: [],
  equipment: [
    "moule à muffins de 12 alvéoles",
    "12 caissettes en papier",
    "deux saladiers et un fouet",
    "maryse",
    "grille à pâtisserie",
  ],
  ingredients: [
    {
      title: "Les secs",
      items: [
        { qty: 300, unit: "g", name: "farine", note: "type 55", step: 10 },
        { qty: 150, unit: "g", name: "sucre en poudre", step: 10 },
        { qty: 1, unit: "sachet", name: "levure chimique", note: "11 g", step: 1 },
        { qty: 0.5, unit: "cac", name: "sel fin", step: 0.5 },
        { qty: 1, name: "citron non traité", plural: "citrons non traités", note: "le zeste seulement", step: 1 },
      ],
    },
    {
      title: "Les liquides",
      items: [
        { qty: 100, unit: "g", name: "beurre", note: "fondu et tiédi", step: 10 },
        { qty: 2, name: "œuf", plural: "œufs", note: "à température ambiante", step: 1 },
        { qty: 200, unit: "ml", name: "lait entier", note: "à température ambiante", step: 10 },
      ],
    },
    {
      title: "La garniture",
      items: [
        { qty: 200, unit: "g", name: "myrtilles", note: "fraîches, ou surgelées sans décongeler", step: 10 },
        { qty: 20, unit: "g", name: "cassonade", note: "pour le dessus", step: 5 },
      ],
    },
  ],
  method: [
    {
      title: "Les muffins",
      steps: [
        {
          title: "Préchauffer le four",
          text: "Préchauffez le four à 220 °C, en chaleur statique, pendant 15 minutes. Garnissez les 12 alvéoles du moule de caissettes en papier. Faites fondre le beurre et laissez-le tiédir.",
          timer: { minutes: 15, label: "Préchauffage à 220 °C" },
        },
        {
          title: "Mélanger les secs",
          text: "Dans le grand saladier, fouettez la farine, le sucre, la levure, le sel et le zeste de citron. Prélevez une cuillerée à soupe de ce mélange et roulez-y les myrtilles dans un bol. Surgelées, elles sortent du congélateur à ce moment-là, pas avant.",
        },
        {
          title: "Mélanger les liquides",
          text: "Dans le second saladier, battez les œufs à la fourchette, puis ajoutez le lait et le beurre fondu tiède. Mélangez juste assez pour que ce soit homogène.",
        },
        {
          title: "Réunir en quelques coups",
          text: "Versez les liquides sur les secs. Avec la maryse, ramenez la pâte du fond vers le dessus en tournant le saladier, une dizaine de fois, jusqu’à ce qu’il n’y ait plus de farine sèche visible. La pâte est épaisse et pleine de grumeaux. Ajoutez les myrtilles en deux ou trois coups de spatule et arrêtez-vous là.",
          tip: "Les grumeaux disparaissent à la cuisson. Une pâte lisse, elle, donnera des muffins élastiques.",
        },
        {
          title: "Remplir les caissettes",
          text: "Répartissez la pâte à la cuillère dans les 12 caissettes, en les remplissant presque à ras. Parsemez de cassonade.",
        },
        {
          title: "Démarrer à 220 °C",
          text: "Enfournez à mi-hauteur et laissez cuire 5 minutes à 220 °C : les muffins commencent à gonfler au centre.",
          timer: { minutes: 5, label: "Démarrage à 220 °C" },
          tip: "Ce coup de chaleur fait monter le centre avant que les bords ne figent : c’est lui qui fait le dôme.",
        },
        {
          title: "Finir à 180 °C",
          text: "Sans ouvrir la porte, baissez le thermostat à 180 °C et poursuivez 15 à 18 minutes, 2 à 3 minutes de plus avec des myrtilles surgelées. Ils sont cuits quand le dessus est doré et rebondit sous le doigt, et qu’une pique plantée à côté d’une myrtille ressort sans pâte crue.",
          timer: { minutes: 18, label: "Cuisson à 180 °C" },
        },
        {
          title: "Démouler",
          text: "Laissez les muffins 5 minutes dans le moule, puis posez-les sur une grille. Plus longtemps dans le moule, la vapeur ramollit le dessous et la caissette se décolle.",
          timer: { minutes: 5, label: "Repos dans le moule" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Mélanger peu, pour une mie tendre",
      text: "Dès que la farine rencontre le lait, le gluten commence à se former, et chaque coup de spatule le renforce. Peu travaillée, la pâte reste tendre ; trop mélangée, elle donne une mie élastique, creusée de longs tunnels, et un dessus pointu.",
    },
    {
      title: "Le dôme vient du four chaud",
      text: "À 220 °C, l’eau de la pâte se vaporise et la levure libère son gaz très vite : le centre, encore liquide, monte pendant que les bords figent déjà. Baisser ensuite à 180 °C laisse le cœur cuire sans brûler le dessus.",
    },
    {
      title: "Pourquoi la pâte verdit parfois",
      text: "Les pigments des myrtilles, les anthocyanes, changent de couleur avec l’acidité : rouges en milieu acide, ils virent au bleu-vert en milieu alcalin, par exemple avec trop de bicarbonate. Des myrtilles décongelées perdent leur jus et tachent toute la pâte.",
    },
  ],
  tips: [
    "Myrtilles surgelées : directement du congélateur à la pâte, sans décongeler, et 2 à 3 minutes de cuisson en plus.",
    "Remplissez les caissettes presque à ras : c’est ce qui donne un chapeau qui déborde.",
    "Œufs et lait à température ambiante : le beurre fondu ne fige pas en petits grains au contact.",
    "Une cuillère à glace de 6 cm donne des muffins de la même taille, qui cuisent tous ensemble.",
    "Pour vérifier la cuisson, plantez la pique à côté d’une myrtille, pas dedans : son jus ressemble à de la pâte crue.",
  ],
  mistakes: [
    "Fouetter jusqu’à obtenir une pâte lisse : les muffins sont durs et pleins de tunnels. Arrêtez dès que la farine sèche a disparu.",
    "Décongeler les myrtilles : elles éclatent et teintent toute la pâte en gris-violet. Gardez-les surgelées jusqu’au dernier moment.",
    "Enfourner dans un four pas assez chaud : les muffins restent plats. Préchauffez 15 minutes à 220 °C.",
    "Laisser les muffins refroidir dans le moule : le dessous devient humide et le papier se décolle. Cinq minutes, puis sur la grille.",
  ],
  variations: [
    {
      title: "Avec un crumble",
      text: "Remplacez la cassonade par un crumble : sablez du bout des doigts 40 g de farine, 30 g de beurre froid et 30 g de cassonade, et répartissez sur la pâte avant d’enfourner.",
    },
    {
      title: "Aux framboises",
      text: "Remplacez les myrtilles par 200 g de framboises surgelées, ajoutées au dernier moment en un seul coup de spatule, car elles s’écrasent plus vite.",
    },
    {
      title: "Au yaourt",
      text: "Remplacez 100 ml de lait par un yaourt nature de 125 g. La mie est plus serrée et reste moelleuse un jour de plus.",
    },
  ],
  storage:
    "2 jours à température ambiante dans une boîte fermée, avec une feuille de papier absorbant au fond. Évitez le réfrigérateur, où ils rassissent plus vite. Au congélateur, 2 mois, emballés un par un.",
  pairing: "Un verre de lait froid, un café allongé ou un thé noir.",
  faq: [
    {
      q: "Peut-on utiliser des myrtilles surgelées pour des muffins ?",
      a: "Oui, sans les décongeler. Sortez-les du congélateur au dernier moment, roulez-les dans une cuillerée du mélange sec et incorporez-les en deux ou trois coups de spatule. Comptez 2 à 3 minutes de cuisson en plus.",
    },
    {
      q: "Faut-il mélanger la pâte à muffins jusqu’à ce qu’elle soit lisse ?",
      a: "Non. Des grumeaux de farine doivent rester visibles. Une pâte lisse est une pâte trop travaillée : le gluten se développe et les muffins deviennent élastiques, avec des tunnels dans la mie.",
    },
    {
      q: "Pourquoi mes muffins ne gonflent-ils pas ?",
      a: "Le plus souvent, le four n’était pas assez chaud au départ ou la pâte a été trop mélangée. Démarrez à 220 °C après 15 minutes de préchauffage, remplissez les caissettes presque à ras et vérifiez la date de la levure.",
    },
    {
      q: "Peut-on remplacer le beurre par de l’huile dans les muffins ?",
      a: "Oui, par 90 ml d’huile neutre, tournesol ou colza. Les muffins sont un peu plus moelleux le lendemain, avec le goût de beurre en moins.",
    },
    {
      q: "Peut-on utiliser des myrtilles sauvages ?",
      a: "Oui. Leur chair est violette, alors que celle des myrtilles cultivées vendues en barquette est claire : elles teintent davantage la pâte autour d’elles. Elles sont aussi plus petites ; 200 g restent la bonne quantité.",
    },
    {
      q: "Peut-on congeler des muffins aux myrtilles ?",
      a: "Oui, 2 mois, une fois complètement refroidis, emballés un par un. Laissez-les décongeler 1 heure à température ambiante, ou passez-les 5 minutes au four à 160 °C pour retrouver un dessus croustillant.",
    },
  ],
  nutrition: {
    calories: 238,
    protein: 4,
    fat: 8.5,
    saturatedFat: 5,
    carbs: 35,
    sugar: 17,
    fiber: 1,
    sodium: 170,
  },
  annotations: { hero: "un dôme qui déborde de la caissette", detail: "mie légère, myrtilles entières" },
  images: {
    heroAlt:
      "Muffins aux myrtilles dans des caissettes en papier sulfurisé, le dessus doré et bombé, piqué de myrtilles",
    detailAlt: "Muffins aux myrtilles sur une grille, l’un coupé en deux montrant une mie pâle parsemée de myrtilles",
    credits: {
      hero: {
        photographer: "Mia Millane",
        url: "https://www.pexels.com/photo/close-up-shot-of-muffins-13425585/",
      },
      detail: {
        photographer: "eat kubba",
        url: "https://www.pexels.com/photo/blueberry-muffins-on-black-mesh-steel-7935282/",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#6F7FD0",
    onAccent: "#1B1712",
    ink: "#3A4690",
    tint: "#EEF0FA",
    deep: "#0F1226",
    focus: "68% 62%",
  },
});
