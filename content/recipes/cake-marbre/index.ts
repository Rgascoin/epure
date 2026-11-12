import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "cake-marbre",
  title: "Cake marbré",
  seoTitle: "Cake marbré chocolat vanille, un marbrage bien net",
  tagline: "Celui qu’on coupe en tranches au goûter.",
  description:
    "Cake marbré pour 10 parts : une pâte au beurre partagée en deux, vanille d’un côté, cacao de l’autre, marbrée au couteau et cuite 55 minutes à 170 °C.",
  summary:
    "Pour 10 parts, travaillez 200 g de beurre mou avec 200 g de sucre, ajoutez 4 œufs un à un, puis 250 g de farine, 10 g de levure et 6 cl de lait. Partagez la pâte en deux : vanille d’un côté, 25 g de cacao et 3 cl de lait de l’autre. Alternez les cuillerées dans un moule à cake de 26 cm, tracez un seul zigzag au couteau et faites cuire 50 à 55 minutes à 170 °C. Comptez 2 h 30 avec le refroidissement, dont 25 minutes de travail.",
  intro: [
    "Le cake marbré, c’est une pâte au beurre toute simple partagée en deux : une moitié reste blonde et vanillée, l’autre prend du cacao. Le dessin vient de la façon de les déposer dans le moule, puis d’un seul passage de couteau.",
    "Le raté le plus courant, c’est un marbré sans marbrure, beige d’un bout à l’autre. Il a deux causes : une pâte au cacao plus épaisse que l’autre, qui reste en paquets, ou un couteau qui tourne trop longtemps. On ajoute donc un peu de lait au cacao pour que les deux pâtes aient la même consistance, et on ne fait qu’un zigzag.",
    "Il se garde plusieurs jours bien emballé, et se tranche plus net le lendemain.",
  ],
  category: "Goûter",
  cuisine: "Française",
  keywords: [
    "cake marbré",
    "recette cake marbré",
    "cake marbré chocolat vanille",
    "gâteau marbré",
    "marbré au chocolat",
    "cake marbré moelleux",
    "comment marbrer un cake",
    "cake marbré facile",
  ],
  servings: 10,
  servingsLabel: { one: "part", other: "parts" },
  times: { prep: 25, cook: 55, rest: 70 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  tags: ["fete-des-grands-meres"],
  equipment: [
    "moule à cake de 26 cm",
    "papier cuisson",
    "batteur électrique",
    "maryse",
    "balance de cuisine",
    "couteau à lame longue",
    "grille à pâtisserie",
  ],
  ingredients: [
    {
      title: "La pâte",
      items: [
        { qty: 200, unit: "g", name: "beurre doux", note: "mou, en pommade", step: 10 },
        { qty: 200, unit: "g", name: "sucre en poudre", step: 10 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1, fixed: true },
        { qty: 4, name: "œuf", plural: "œufs", note: "à température ambiante", step: 1 },
        { qty: 250, unit: "g", name: "farine", note: "type 45 ou 55", step: 10 },
        { qty: 10, unit: "g", name: "levure chimique", note: "environ 1 sachet", step: 1 },
        { qty: 6, unit: "cl", name: "lait entier", note: "à température ambiante", step: 1 },
      ],
    },
    {
      title: "Moitié vanille",
      items: [{ qty: 1, unit: "cac", name: "extrait de vanille", note: "ou les graines d’une gousse", step: 1 }],
    },
    {
      title: "Moitié cacao",
      items: [
        { qty: 25, unit: "g", name: "cacao en poudre non sucré", note: "tamisé", step: 5 },
        { qty: 3, unit: "cl", name: "lait entier", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "Le cake",
      steps: [
        {
          title: "Préparer four et moule",
          text: "Préchauffez le four à 170 °C, chaleur statique, grille au milieu, pendant 15 minutes. Chemisez le moule de papier cuisson en laissant dépasser les bords sur la longueur : ils serviront de poignées pour démouler.",
          timer: { minutes: 15, label: "Préchauffage à 170 °C" },
        },
        {
          title: "Crémer beurre et sucre",
          text: "Fouettez le beurre mou, le sucre et le sel au batteur, vitesse moyenne, pendant 3 à 4 minutes. Le mélange doit devenir pâle, presque blanc, et gonfler comme une crème épaisse.",
          timer: { minutes: 4, label: "Beurre et sucre" },
          tip: "Le beurre doit être mou comme une pommade, pas fondu : fondu, il ne retient plus l’air et le cake sera lourd.",
        },
        {
          title: "Ajouter les œufs",
          text: "Ajoutez les œufs un par un, en fouettant une trentaine de secondes entre chaque, jusqu’à ce que le précédent soit absorbé. Si la pâte prend un aspect granuleux, ajoutez une cuillerée de la farine pesée : elle se lisse aussitôt.",
        },
        {
          title: "Incorporer la farine",
          text: "Tamisez la farine avec la levure. Incorporez-la à la maryse en deux fois, en alternant avec les 6 cl de lait, et arrêtez dès que la pâte est lisse et qu’il ne reste plus de traces de farine.",
        },
        {
          title: "Partager la pâte",
          text: "Pesez la pâte et partagez-la en deux parts égales, environ 450 g chacune. Ajoutez la vanille dans la première. Dans la seconde, mélangez le cacao tamisé puis les 3 cl de lait : les deux pâtes doivent tomber de la maryse de la même façon, en ruban épais.",
          tip: "Le cacao boit le liquide. Sans le lait en plus, la pâte brune serait plus ferme que l’autre et ne se marbrerait pas.",
        },
        {
          title: "Marbrer au couteau",
          text: "Déposez les deux pâtes en grosses cuillerées alternées dans le moule, comme un damier, puis faites une seconde couche en mettant le cacao sur la vanille et inversement. Plongez la lame du couteau jusqu’au fond et tracez un seul zigzag sur toute la longueur. Lissez à peine le dessus.",
          tip: "Un seul passage. Chaque aller-retour de plus mélange les pâtes et efface le dessin.",
        },
        {
          title: "Cuire",
          text: "Enfournez 50 à 55 minutes. Si le dessus colore trop vite au bout de 35 minutes, couvrez-le d’une feuille d’aluminium. Le cake est cuit quand il est bien doré, que sa fente est sèche et qu’une lame plantée au centre ressort sans pâte collée.",
          timer: { minutes: 55, label: "Cake au four" },
        },
        {
          title: "Démouler",
          text: "Laissez le cake 10 minutes dans son moule, le temps qu’il se raffermisse, puis soulevez-le par le papier et posez-le sur une grille.",
          timer: { minutes: 10, label: "Repos dans le moule" },
        },
        {
          title: "Laisser refroidir",
          text: "Laissez-le refroidir complètement sur la grille, 1 heure environ, avant de le trancher au couteau à lame longue. Tiède, la mie s’écrase et colle à la lame.",
          timer: { minutes: 60, label: "Refroidissement" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Le crémage",
      text: "En fouettant le beurre mou avec le sucre, les cristaux de sucre creusent de minuscules poches d’air dans la matière grasse. Au four, le gaz de la levure vient gonfler ces bulles déjà présentes : c’est ce qui donne une mie fine et légère.",
    },
    {
      title: "Deux pâtes de même consistance",
      text: "Le cacao est une poudre sèche qui absorbe une partie du liquide de la pâte. Avec 3 cl de lait en plus, les deux pâtes retrouvent la même fluidité : elles s’étalent ensemble sous la lame et restent distinctes au lieu de former des blocs.",
    },
    {
      title: "La fente du dessus",
      text: "Le dessus du cake, au contact de l’air chaud, forme une croûte avant que le centre ait fini de gonfler. Le cœur continue de monter, pousse la croûte et l’ouvre : c’est la fente caractéristique des cakes.",
    },
  ],
  tips: [
    "Sortez le beurre, les œufs et le lait 1 heure à l’avance : des œufs froids figent le beurre et la pâte tranche.",
    "Pour une fente bien droite, entaillez le dessus sur la longueur avec une lame trempée dans du beurre fondu, après 10 minutes de cuisson.",
    "Plantez la lame du test au centre de la fente : c’est l’endroit qui cuit en dernier.",
    "Emballé dans du film encore à peine tiède, il garde son moelleux et se tranche plus net le lendemain.",
  ],
  mistakes: [
    "Tourner le couteau plusieurs fois dans la pâte : les deux couleurs se fondent et le cake devient beige uniforme. Un zigzag suffit.",
    "Oublier le lait dans la pâte au cacao : elle reste en paquets et laisse des trous dans la mie.",
    "Ouvrir le four avant 35 minutes : la structure n’est pas encore prise et le cake retombe au centre.",
    "Trancher le cake tiède : la mie s’écrase et colle au couteau. Attendez qu’il soit froid.",
  ],
  variations: [
    {
      title: "Au chocolat noir",
      text: "Remplacez le cacao et les 3 cl de lait par 80 g de chocolat noir fondu et tiède : la partie brune est plus fondante et plus foncée.",
    },
    {
      title: "En zèbre",
      text: "Dans un moule rond de 24 cm, versez 2 cuillerées à soupe de chaque pâte à tour de rôle, toujours au centre : elles s’étalent en cercles. Comptez 40 à 45 minutes de cuisson.",
    },
    {
      title: "Vanille et orange",
      text: "Ajoutez le zeste finement râpé d’une orange non traitée dans la moitié vanille.",
    },
  ],
  storage:
    "Il se garde 4 jours à température ambiante, emballé dans du film ou dans une boîte hermétique. Il se congèle bien en tranches, séparées par du papier cuisson, 2 mois au congélateur ; décongelez-les à température ambiante en 1 heure.",
  pairing: "Un verre de lait froid, un chocolat chaud ou un café crème.",
  faq: [
    {
      q: "Comment réussir le marbrage d’un cake marbré ?",
      a: "En donnant aux deux pâtes la même consistance, en les alternant par grosses cuillerées en damier sur deux couches, puis en traçant un seul zigzag au couteau sur la longueur. Chaque passage de plus mélange les pâtes et brouille le dessin.",
    },
    {
      q: "Comment savoir si un cake marbré est cuit ?",
      a: "Plantez une lame au centre de la fente : elle doit ressortir sèche, sans pâte collée. Le dessus est bien doré et la fente ne brille plus. Au thermomètre, le cœur atteint 95 à 98 °C. Comptez 50 à 55 minutes à 170 °C.",
    },
    {
      q: "Pourquoi mon cake marbré est-il sec ?",
      a: "Parce qu’il a cuit trop longtemps, ou dans un four plus chaud que son affichage. Faites le test de la lame dès 45 minutes, et emballez le cake dans du film dès qu’il a refroidi pour qu’il ne sèche pas à l’air.",
    },
    {
      q: "Peut-on remplacer le cacao par du chocolat en poudre ?",
      a: "Non, pas tel quel. Le chocolat en poudre sucré contient surtout du sucre et colore peu : la partie brune serait pâle et trop sucrée. Prenez du cacao non sucré, ou du chocolat noir fondu comme dans la variante.",
    },
    {
      q: "Combien de temps se garde un cake marbré ?",
      a: "4 jours à température ambiante, bien emballé dans du film ou une boîte hermétique. En tranches, il se garde 2 mois au congélateur.",
    },
  ],
  nutrition: {
    calories: 355,
    protein: 6,
    fat: 19,
    saturatedFat: 11,
    carbs: 39,
    sugar: 21,
    fiber: 1,
    sodium: 130,
  },
  annotations: { hero: "un seul zigzag, pas plus", detail: "même consistance pour les deux pâtes" },
  images: {
    heroAlt: "Tranche de cake marbré chocolat vanille sur une assiette ovale, à côté d’une tasse de café crème",
    detailAlt:
      "Deux tranches de cake marbré sur une assiette verte, la pâte au cacao dessinant une volute dans la mie vanillée",
    credits: {
      hero: {
        photographer: "Salim Virji",
        url: "https://commons.wikimedia.org/wiki/File:Cortado_and_marble_cake_(6836431945)_(2).jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 2.0",
      },
      detail: {
        photographer: "Mythe",
        url: "https://commons.wikimedia.org/wiki/File:G%C3%A2teau_marbr%C3%A9.JPG",
        source: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#8A5A3C",
    onAccent: "#ffffff",
    ink: "#6B4229",
    tint: "#F8F0E8",
    deep: "#160E09",
    focus: "38% 68%",
  },
});
