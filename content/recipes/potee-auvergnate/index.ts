import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "potee-auvergnate",
  title: "Potée auvergnate",
  seoTitle: "Potée auvergnate au chou vert, palette et saucisse fumée",
  tagline: "Le chou passe d’abord à l’eau.",
  description:
    "Potée auvergnate pour 6 : palette demi-sel dessalée, lard fumé, saucisse de Morteau, chou vert blanchi et légumes d’hiver, 2 h 20 à petit frémissement.",
  summary:
    "Pour 6 personnes, dessalez 1 kg de palette demi-sel 2 h dans l’eau froide, puis faites-la frémir 1 h avec 250 g de lard fumé, un oignon piqué de girofle et un bouquet garni. Le chou vert blanchi 5 minutes, les carottes et les navets suivent pour 30 minutes, puis les saucisses piquées et les pommes de terre pour les 30 dernières. On ne sale qu’après avoir goûté. Comptez 4 h 50 en tout, dont 2 h de dessalage et 30 minutes de travail.",
  intro: [
    "La potée auvergnate, c’est un repas entier dans une seule marmite : du porc salé et fumé, une saucisse, un chou vert et des légumes racines qui cuisent dans le même bouillon. On boit d’abord le bouillon, versé sur une tranche de pain, puis on passe aux viandes et aux légumes.",
    "Elle se rate de deux façons. Trop salée, quand la palette n’a pas trempé et qu’on a salé l’eau par habitude. Ou avec cette odeur de chou bouilli qui tient aux rideaux, quand le chou a cuit cru pendant deux heures.",
    "La parade tient en cinq minutes : on blanchit le chou à part et il ne rejoint la marmite qu’à mi-cuisson. Il reste vert pâle, fondant, et garde un goût de chou plutôt que de cantine.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "potée auvergnate",
    "recette potée auvergnate",
    "potée auvergnate traditionnelle",
    "potée au chou",
    "potée chou saucisse",
    "potée palette demi-sel",
    "potée auvergnate saucisse de morteau",
    "temps de cuisson potée auvergnate",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 30, cook: 140, rest: 120 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: [
    "marmite ou faitout de 8 l",
    "grande casserole pour blanchir le chou",
    "écumoire",
    "aiguille fine ou pique à brochette",
  ],
  ingredients: [
    {
      title: "Les viandes",
      items: [
        { qty: 1, unit: "kg", name: "palette de porc demi-sel", note: "ou échine demi-sel, en un morceau", step: 0.1 },
        { qty: 250, unit: "g", name: "lard fumé", note: "poitrine fumée en un morceau", step: 10 },
        {
          qty: 2,
          name: "saucisse de Morteau",
          plural: "saucisses de Morteau",
          note: "ou saucisse fumée d’Auvergne à cuire, 300 g environ chacune",
          step: 1,
        },
      ],
    },
    {
      title: "Les légumes et les aromates",
      items: [
        { qty: 1, name: "oignon", plural: "oignons", step: 1 },
        { qty: 3, name: "clou de girofle", plural: "clous de girofle", step: 1 },
        { qty: 2, unit: "gousse", name: "ail", note: "écrasées", step: 1 },
        {
          qty: 1,
          name: "bouquet garni",
          plural: "bouquets garnis",
          note: "thym, laurier, queues de persil",
          fixed: true,
        },
        { qty: 10, name: "grain de poivre noir", plural: "grains de poivre noir", step: 1 },
        { qty: 1, name: "chou vert frisé", plural: "choux verts frisés", note: "environ 1,2 kg", step: 0.5 },
        { qty: 6, name: "carotte", plural: "carottes", note: "pelées, coupées en deux", step: 1 },
        { qty: 4, name: "navet", plural: "navets", note: "pelés, coupés en deux", step: 1 },
        { qty: 800, unit: "g", name: "pomme de terre à chair ferme", note: "pelées, de taille moyenne", step: 50 },
        { name: "sel", note: "seulement après avoir goûté" },
      ],
    },
    {
      title: "Pour servir",
      items: [
        { qty: 6, unit: "tranche", name: "pain de campagne", note: "rassis ou grillé", step: 1 },
        { name: "moutarde forte" },
      ],
    },
  ],
  method: [
    {
      title: "Lancer la marmite",
      steps: [
        {
          title: "Dessaler la viande",
          text: "Rincez la palette et le lard fumé, plongez-les dans un grand saladier d’eau froide et laissez-les 2 h au réfrigérateur, en changeant l’eau au bout d’une heure. Si le boucher vous dit que la pièce est très salée, prolongez jusqu’au lendemain et changez l’eau trois fois.",
          timer: { minutes: 120, label: "Dessalage de la palette" },
        },
        {
          title: "Partir à l’eau froide",
          text: "Égouttez les viandes, posez-les dans la marmite et couvrez-les de 4 l d’eau froide, sans sel. Chauffez à feu moyen : il faut environ 20 minutes pour atteindre le frémissement. Retirez au fur et à mesure la mousse grise qui monte, jusqu’à ce qu’elle devienne blanche et rare.",
          timer: { minutes: 20, label: "Montée au frémissement" },
        },
        {
          title: "Aromatiser et frémir",
          text: "Piquez l’oignon pelé avec les clous de girofle et ajoutez-le avec l’ail, le bouquet garni et le poivre. Baissez le feu pour que l’eau frémisse à peine, deux ou trois bulles paresseuses en surface, et laissez cuire 1 h, couvercle entrouvert.",
          timer: { minutes: 60, label: "Frémissement de la viande" },
          tip: "Si de grosses bulles crèvent la surface, c’est trop chaud : la palette va se resserrer et sécher.",
        },
        {
          title: "Blanchir le chou",
          text: "Pendant ce temps, ôtez les grandes feuilles abîmées du chou et coupez-le en six quartiers en gardant un morceau de trognon à chacun. Plongez-les 5 minutes dans une grande casserole d’eau bouillante, puis égouttez-les. L’eau vire au jaune et sent fort : autant d’odeur qui n’ira pas dans la potée.",
          timer: { minutes: 5, label: "Blanchiment du chou" },
          tip: "Le trognon tient les feuilles ensemble : sans lui, le quartier s’effeuille dans la marmite.",
        },
      ],
    },
    {
      title: "Finir et servir",
      steps: [
        {
          title: "Ajouter chou et racines",
          text: "Au bout de l’heure, glissez dans la marmite les quartiers de chou, les carottes et les navets. Ajoutez un peu d’eau chaude s’ils ne sont pas couverts. Reprenez le frémissement et comptez 30 minutes.",
          timer: { minutes: 30, label: "Chou, carottes et navets" },
        },
        {
          title: "Piquer les saucisses",
          text: "Piquez chaque saucisse 5 ou 6 fois avec l’aiguille, puis mettez-les dans la marmite avec les pommes de terre, bien enfoncées dans le bouillon. Laissez frémir encore 30 minutes, sans jamais laisser bouillir.",
          timer: { minutes: 30, label: "Saucisses et pommes de terre" },
          tip: "Au-delà du frémissement, la peau de la saucisse se fend et elle se vide de son jus.",
        },
        {
          title: "Vérifier et goûter",
          text: "La palette est cuite quand la pointe d’un couteau y entre sans résistance, et les pommes de terre quand elles glissent de la lame. Goûtez alors le bouillon et salez seulement s’il le demande. Bien souvent, il ne demande rien.",
        },
        {
          title: "Servir en deux temps",
          text: "Posez une tranche de pain au fond de chaque assiette creuse et versez dessus une louche de bouillon brûlant. Ensuite, tranchez la palette et le lard, coupez les saucisses en tronçons épais et dressez-les sur un grand plat avec les légumes égouttés, la moutarde à côté.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Le sel sort par l’eau",
      text: "Le dessalage repose sur la diffusion : le sel passe de la viande, très salée, vers l’eau qui l’est peu. Plus l’écart est grand, plus il sort vite, d’où l’intérêt de changer l’eau en cours de route plutôt que de laisser tremper plus longtemps dans la même.",
    },
    {
      title: "L’odeur du chou se forme en cuisant",
      text: "Le chou contient des composés soufrés solubles dans l’eau. Une longue cuisson les décompose en molécules très odorantes, comme le sulfure de diméthyle. Un blanchiment rapide dans beaucoup d’eau en emporte une partie, et le chou passe ensuite moins de temps dans la marmite.",
    },
    {
      title: "Les pommes de terre troublent le bouillon",
      text: "Quand une pomme de terre cuit trop longtemps, ses cellules se séparent et libèrent de l’amidon gonflé dans le liquide. Trente minutes suffisent à la cuire à cœur ; deux heures la défont et rendent le bouillon farineux.",
    },
  ],
  tips: [
    "Demandez au boucher depuis combien de temps la palette est au sel : c’est ce qui décide entre 2 h de dessalage et une nuit.",
    "Prenez du pain rassis pour le bouillon : il l’absorbe sans tourner en bouillie.",
    "Préparez la potée la veille si vous le pouvez. Une fois froide, la graisse fige en surface et se retire à la cuillère.",
    "Gardez le bouillon qui reste : avec quelques vermicelles, il fait le dîner du lendemain.",
  ],
  mistakes: [
    "Saler l’eau au départ : avec le porc demi-sel et le lard fumé, le bouillon devient vite trop salé. S’il l’est, allongez-le d’eau chaude au moment de servir.",
    "Laisser bouillir : la palette devient filandreuse, les saucisses éclatent et le bouillon se trouble.",
    "Mettre le chou cru dès le début : deux heures de cuisson le rendent gris et donnent au bouillon une odeur soufrée qui ne part plus.",
    "Ajouter les pommes de terre trop tôt : elles se délitent et leur amidon épaissit le bouillon.",
  ],
  variations: [
    {
      title: "Avec un jarret demi-sel",
      text: "Remplacez la palette par un jarret demi-sel d’environ 1,2 kg, dessalé de la même façon. Il frémit seul 1 h 30 au lieu d’une heure avant l’arrivée du chou.",
    },
    {
      title: "Avec des poireaux",
      text: "Ajoutez 3 blancs de poireaux ficelés ensemble en même temps que le chou. Ils cuisent dans les mêmes 30 minutes, puis restent dans la marmite jusqu’à la fin.",
    },
    {
      title: "Avec une saucisse fraîche",
      text: "Une saucisse à cuire non fumée remplace la Morteau. Piquez-la et mettez-la pour les 25 dernières minutes seulement : elle est cuite quand elle est ferme et que le cœur n’est plus rosé.",
    },
  ],
  storage:
    "Laissez tiédir, puis mettez au réfrigérateur dans les 2 heures, viandes et légumes dans leur bouillon, en boîte fermée. La potée se garde 2 à 3 jours. Réchauffez à feu doux, à couvert, jusqu’à ce que tout soit bien chaud au cœur. Viandes et bouillon se congèlent 3 mois, sans le chou ni les pommes de terre ; une fois décongelés, ne les recongelez pas.",
  pairing: "Un rouge léger servi frais, comme un côtes-d’auvergne à base de gamay, ou un cidre brut.",
  faq: [
    {
      q: "Faut-il dessaler la palette demi-sel pour une potée ?",
      a: "Oui. Deux heures dans l’eau froide au réfrigérateur, en changeant l’eau une fois, suffisent pour une palette demi-sel classique. Une pièce plus salée demande une nuit et trois changements d’eau. Sans dessalage, le sel passe dans le bouillon, puis dans le chou et les pommes de terre, et plus rien ne l’en retire.",
    },
    {
      q: "Pourquoi blanchir le chou avant de le mettre dans la potée ?",
      a: "Pour une potée plus légère et une maison qui sent moins le chou. Cinq minutes à l’eau bouillante emportent une partie de ses composés soufrés, que l’on jette avec l’eau. Il finit de cuire dans le bouillon, où il prend le goût du porc fumé.",
    },
    {
      q: "Quelle saucisse mettre dans une potée auvergnate ?",
      a: "Une saucisse fumée à cuire. La Morteau est la plus facile à trouver, une saucisse fumée d’Auvergne convient tout autant. Piquez-la et ajoutez-la pour les 30 dernières minutes. Une saucisse fraîche non fumée marche aussi, en 25 minutes.",
    },
    {
      q: "Comment savoir si le porc de la potée est cuit ?",
      a: "La pointe d’un couteau doit entrer dans la palette sans résistance. Après 2 h 20 à frémissement, le cœur dépasse largement les 63 °C recommandés pour le porc. Avec un thermomètre, vérifiez au centre de la pièce la plus épaisse.",
    },
    {
      q: "Quelle est la différence entre une potée et un pot-au-feu ?",
      a: "La viande. Le pot-au-feu se fait avec du bœuf frais, la potée avec du porc salé et fumé, des saucisses et du chou. Son bouillon est donc plus salé et plus fumé, et on ne le sale presque jamais.",
    },
    {
      q: "Peut-on préparer la potée auvergnate la veille ?",
      a: "Oui, et c’est même plus simple. Laissez tiédir, mettez au réfrigérateur dans les 2 heures, puis retirez la graisse figée le lendemain. Réchauffez à feu doux, à couvert, jusqu’à ce que tout soit bien chaud au cœur. Elle se garde 2 à 3 jours.",
    },
    {
      q: "Peut-on congeler une potée ?",
      a: "Oui, mais sans les pommes de terre ni le chou, qui deviennent spongieux. Viandes et bouillon se gardent 3 mois au congélateur. Décongelez au réfrigérateur, réchauffez jusqu’au frémissement et ne recongelez jamais.",
    },
  ],
  nutrition: {
    calories: 990,
    protein: 63,
    fat: 55,
    saturatedFat: 20,
    carbs: 60,
    sugar: 14,
    fiber: 12,
    sodium: 1900,
  },
  annotations: { hero: "le chou, blanchi avant d’entrer", detail: "la saucisse, la dernière demi-heure" },
  images: {
    heroAlt:
      "Potée auvergnate dans un plat en terre : saucisses fumées, carottes, navets, pommes de terre, chou vert et porc salé.",
    detailAlt:
      "Assiette de potée auvergnate avec une tranche de porc salé, des saucisses fumées, du chou vert frisé et des carottes.",
    credits: {
      hero: {
        photographer: "Arnaud 25",
        url: "https://commons.wikimedia.org/w/index.php?curid=85108027",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
      detail: {
        photographer: "Arnaud 25",
        url: "https://commons.wikimedia.org/w/index.php?curid=85108025",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#BC5126",
    onAccent: "#FFFFFF",
    ink: "#8C3A18",
    tint: "#F8ECE3",
    deep: "#1C110C",
    focus: "50% 50%",
  },
});
