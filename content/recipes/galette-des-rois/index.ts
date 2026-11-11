import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "galette-des-rois",
  title: "Galette des rois à la frangipane",
  seoTitle: "Galette des rois à la frangipane, pâte feuilletée achetée",
  tagline: "À partager en janvier, fève comprise.",
  description:
    "Une galette des rois pour 8 : deux disques de pâte feuilletée pur beurre achetée, une vraie frangipane maison, une fève, et 40 minutes de four.",
  summary:
    "Pour 8 personnes, préparez une frangipane avec 100 g de beurre, 100 g de sucre, 100 g de poudre d’amandes, 2 œufs et une petite crème pâtissière. Étalez-la sur un disque de pâte feuilletée pur beurre du commerce, glissez la fève, couvrez du second disque, dorez, rayez, puis faites cuire 10 minutes à 200 °C et 30 minutes à 180 °C. Comptez 2 h 45 en tout, dont 40 minutes de travail.",
  intro: [
    "Une galette des rois, c’est deux disques de pâte feuilletée et une frangipane au milieu. Ici, la pâte est achetée : une pâte feuilletée pur beurre, dont le seul corps gras est le beurre. Le temps gagné va à la garniture.",
    "La frangipane, au sens strict, mélange une crème d’amandes et un peu de crème pâtissière. C’est ce qui la rend plus souple et moins compacte qu’une crème d’amandes seule.",
    "Ce qui fait rater une galette, c’est une soudure mal faite : la frangipane s’échappe au four et la pâte se soulève d’un côté. On laisse donc 2 cm libres sur le bord, on les mouille, on appuie fermement, puis on met au froid avant de cuire.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "galette des rois",
    "recette galette des rois",
    "galette des rois frangipane",
    "frangipane maison",
    "galette des rois pâte feuilletée du commerce",
    "galette des rois facile",
    "dorure galette des rois",
    "comment rayer une galette",
  ],
  diet: ["vegetarian"],
  servings: 8,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 40, cook: 45, rest: 80 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Hiver"],
  tags: ["epiphanie"],
  equipment: [
    "plaque de cuisson et papier cuisson",
    "petite casserole",
    "fouet",
    "pinceau",
    "petit couteau pointu",
    "grille",
  ],
  ingredients: [
    {
      title: "La crème pâtissière",
      items: [
        { qty: 15, unit: "cl", name: "lait entier", step: 1 },
        { qty: 1, name: "jaune d’œuf", plural: "jaunes d’œufs", step: 1 },
        { qty: 25, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 12, unit: "g", name: "fécule de maïs", step: 1 },
      ],
    },
    {
      title: "La crème d’amandes",
      items: [
        { qty: 100, unit: "g", name: "beurre doux", note: "mou", step: 10 },
        { qty: 100, unit: "g", name: "sucre en poudre", step: 10 },
        { qty: 100, unit: "g", name: "poudre d’amandes", step: 10 },
        { qty: 2, name: "œuf", plural: "œufs", note: "à température ambiante", step: 1 },
        { qty: 1, unit: "cas", name: "rhum ambré", step: 0.5, optional: true },
      ],
    },
    {
      title: "Le montage",
      items: [
        {
          qty: 2,
          unit: "rouleau",
          name: "pâte feuilletée pur beurre",
          note: "ronde, du commerce, environ 230 g chacune",
          step: 1,
        },
        { qty: 1, name: "fève", plural: "fèves", fixed: true },
        { qty: 1, name: "jaune d’œuf", plural: "jaunes d’œufs", note: "pour la dorure", step: 1 },
        { qty: 1, unit: "cas", name: "lait entier", note: "pour la dorure", step: 0.5 },
        { qty: 20, unit: "g", name: "sucre en poudre", note: "pour le sirop", step: 5, optional: true },
        { qty: 2, unit: "cas", name: "eau", note: "pour le sirop", step: 0.5, optional: true },
      ],
    },
  ],
  method: [
    {
      title: "La frangipane",
      steps: [
        {
          title: "Cuire la crème pâtissière",
          text: "Faites chauffer le lait dans la casserole. Dans un bol, fouettez le jaune avec le sucre et la fécule. Versez le lait chaud dessus en fouettant, remettez le tout dans la casserole sur feu moyen et fouettez sans arrêt jusqu’à ce que la crème épaississe et fasse quelques bulles, puis encore 1 minute.",
          timer: { minutes: 1, label: "Crème à ébullition" },
        },
        {
          title: "Refroidir la crème",
          text: "Versez-la dans une assiette creuse, filmez au contact pour éviter qu’une peau se forme et mettez au réfrigérateur 30 minutes, jusqu’à ce qu’elle soit froide.",
          timer: { minutes: 30, label: "Crème pâtissière au froid" },
        },
        {
          title: "Faire la crème d’amandes",
          text: "Travaillez le beurre mou avec le sucre à la spatule, sans chercher à le faire mousser. Ajoutez la poudre d’amandes, puis les œufs un par un, en mélangeant bien entre chaque. Ajoutez le rhum si vous en mettez.",
          tip: "Évitez le batteur : l’air incorporé fait gonfler la frangipane au four, qui pousse sur la pâte et s’échappe par les bords.",
        },
        {
          title: "Assembler la frangipane",
          text: "Lissez la crème pâtissière froide au fouet, puis mélangez-la à la crème d’amandes jusqu’à ce que l’ensemble soit homogène. Gardez au réfrigérateur pendant que vous préparez la pâte.",
        },
      ],
    },
    {
      title: "Le montage",
      steps: [
        {
          title: "Garnir le premier disque",
          text: "Déroulez un disque de pâte sur la plaque, sur son papier. Étalez la frangipane au centre en un disque bombé, en laissant 2 cm libres sur tout le bord. Enfoncez la fève dans la frangipane, près du bord plutôt qu’au centre, pour que le couteau ne tombe pas dessus.",
        },
        {
          title: "Souder les bords",
          text: "Mouillez le bord libre au pinceau avec un peu d’eau. Posez le second disque par-dessus en chassant l’air du centre vers l’extérieur, et appuyez fermement sur tout le pourtour avec les doigts. Marquez le bord de petites entailles régulières avec le dos d’un couteau.",
          tip: "Une soudure qui tient, c’est 2 cm de pâte mouillée et bien pressée. Avec moins, la frangipane fuit à la cuisson.",
        },
        {
          title: "Dorer et refroidir",
          text: "Mélangez le jaune d’œuf avec le lait. Badigeonnez le dessus de la galette d’une première couche, sans en faire couler sur la tranche, et mettez au réfrigérateur 30 minutes. Préchauffez le four à 200 °C, chaleur statique, pendant ce temps.",
          timer: { minutes: 30, label: "Galette au froid" },
          tip: "La dorure qui coule sur la tranche colle les feuillets entre eux : la pâte ne gonfle plus de ce côté.",
        },
        {
          title: "Rayer",
          text: "Passez une seconde couche de dorure. Avec la pointe d’un petit couteau, tracez des arcs du centre vers le bord, sans traverser la pâte, comme les rayons d’une rosace. Percez trois ou quatre petits trous sur le dessus pour laisser sortir la vapeur.",
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Saisir à 200 °C",
          text: "Enfournez à mi-hauteur pour 10 minutes à 200 °C : la pâte commence à gonfler et à colorer.",
          timer: { minutes: 10, label: "Départ à 200 °C" },
        },
        {
          title: "Finir à 180 °C",
          text: "Baissez le four à 180 °C sans ouvrir la porte et poursuivez 25 à 30 minutes, jusqu’à ce que la galette soit bien gonflée et d’un brun doré profond, sur le dessus comme en dessous.",
          timer: { minutes: 28, label: "Fin de cuisson à 180 °C" },
        },
        {
          title: "Lustrer et tiédir",
          text: "Pour la faire briller, portez le sucre et l’eau à ébullition et badigeonnez ce sirop sur la galette dès la sortie du four. Laissez-la tiédir 20 minutes sur une grille avant de la couper.",
          timer: { minutes: 20, label: "Galette qui tiédit" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi la pâte feuilletée gonfle",
      text: "La pâte feuilletée alterne des centaines de fines couches de pâte et de beurre. Au four, l’eau qu’elles contiennent se change en vapeur et soulève les feuillets avant que la pâte ne fige. D’où le départ à 200 °C : il faut beaucoup de chaleur tout de suite.",
    },
    {
      title: "La crème pâtissière assouplit",
      text: "L’amidon de la fécule gélifie en cuisant dans le lait et retient l’eau. Mélangée à la crème d’amandes, la crème pâtissière apporte cette eau liée : la frangipane reste moelleuse au lieu de devenir compacte.",
    },
    {
      title: "Le passage au froid",
      text: "Le beurre de la pâte doit être bien froid quand la galette entre au four. Mou, il fond avant que la vapeur se forme et la pâte gonfle peu. Les 30 minutes au réfrigérateur raffermissent aussi la soudure.",
    },
  ],
  tips: [
    "Lisez l’étiquette de la pâte : « pur beurre » doit y figurer, et le beurre doit être le seul corps gras de la liste.",
    "Sortez la pâte du réfrigérateur 10 minutes avant de la dérouler : trop froide, elle se fend sur les bords.",
    "Prévenez les convives qu’il y a une fève, surtout les enfants : une fève en céramique se croque mal et s’avale encore plus mal.",
    "Une galette de la veille retrouve son croustillant en 10 minutes au four à 150 °C.",
  ],
  mistakes: [
    "Une frangipane trop fouettée gonfle, pousse sur la pâte et ressort par les bords. Mélangez à la spatule, sans incorporer d’air.",
    "Des rayures trop profondes ouvrent la pâte et la frangipane s’échappe. On raye la dorure et la surface, pas l’épaisseur.",
    "Une galette sortie trop tôt est blonde dessus et crue dans les feuillets du dessous. Soulevez-la avec une spatule : le dessous doit être doré aussi.",
    "Enfournée sans passage au froid, la galette gonfle de travers et se rétracte. Si vous êtes pressé, 15 minutes au congélateur font l’affaire.",
  ],
  variations: [
    {
      title: "À la pistache",
      text: "Remplacez 40 g de poudre d’amandes par 40 g de pistaches non salées mixées finement.",
    },
    {
      title: "Au chocolat",
      text: "Ajoutez 60 g de chocolat noir haché à la frangipane. La cuisson ne change pas.",
    },
    {
      title: "Crème d’amandes seule",
      text: "Sans crème pâtissière, passez directement à la crème d’amandes : la galette est plus dense et plus amandée, et vous gagnez 30 minutes.",
    },
  ],
  storage:
    "La galette cuite se garde 2 jours au réfrigérateur, filmée, à cause de la crème pâtissière ; réchauffez-la 10 minutes à 150 °C avant de la servir. Crue, montée et non dorée, elle se congèle 1 mois : dorez-la et faites-la cuire sans la décongeler, en ajoutant 10 minutes.",
  pairing: "Un cidre brut bien frais, ou un chocolat chaud pour les enfants.",
  faq: [
    {
      q: "La frangipane contient-elle de la crème pâtissière ?",
      a: "Oui. La frangipane est une crème d’amandes à laquelle on ajoute de la crème pâtissière, en général un tiers pour deux tiers. La crème d’amandes seule fonctionne aussi, mais elle est plus dense.",
    },
    {
      q: "Peut-on faire une galette des rois avec une pâte du commerce ?",
      a: "Oui, à condition de la choisir pur beurre : le beurre doit être le seul corps gras de la liste d’ingrédients. Prenez deux disques de même taille, de 28 à 32 cm, et gardez-les au froid jusqu’au dernier moment.",
    },
    {
      q: "Faut-il mettre la fève au centre de la galette ?",
      a: "Non. Placez-la près du bord, enfoncée dans la frangipane. Au centre, le couteau tombe dessus à chaque partage. Et prévenez les petits : une fève peut s’avaler de travers.",
    },
    {
      q: "Combien de temps cuire une galette des rois ?",
      a: "40 minutes environ : 10 minutes à 200 °C, puis 25 à 30 minutes à 180 °C. Elle est cuite quand elle est d’un brun doré profond dessus comme dessous ; une galette blonde a souvent les feuillets du dessous encore crus.",
    },
    {
      q: "Peut-on préparer la galette des rois la veille ?",
      a: "Oui. Montée et dorée une première fois, elle passe la nuit au réfrigérateur, filmée. Le lendemain, passez la seconde couche de dorure, rayez et enfournez directement.",
    },
    {
      q: "La galette des rois contient-elle des fruits à coque ?",
      a: "Oui, de la poudre d’amandes : 100 g pour 8 parts. Elle ne convient pas aux personnes allergiques aux fruits à coque. Le rhum, lui, cuit 40 minutes et s’évapore en bonne partie.",
    },
  ],
  nutrition: {
    calories: 510,
    protein: 9,
    fat: 34,
    saturatedFat: 17.5,
    carbs: 40.5,
    sugar: 17,
    fiber: 2.4,
    sodium: 285,
  },
  annotations: { hero: "dorée deux fois, rayée une seule", detail: "dorée dessous comme dessus" },
  images: {
    heroAlt: "Galette des rois à la frangipane entière, dorée et rayée en rosace, posée sur un plateau doré",
    detailAlt: "Part de galette des rois faite maison, pâte feuilletée dorée et brillante sur une table en bois",
    credits: {
      hero: {
        photographer: "Benh LIEU SONG (Flickr)",
        url: "https://commons.wikimedia.org/wiki/File:Galette_Frangipane_2021.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
      detail: {
        photographer: "Benoît Prieur",
        url: "https://commons.wikimedia.org/wiki/File:Part_de_galette_des_rois_faite_maison_(qui_a_la_f%C3%A8ve_en_plus).jpg",
        source: "Wikimedia Commons",
        license: "CC0",
      },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#D08A2E",
    onAccent: "#1B1308",
    ink: "#8C5514",
    tint: "#FBF1E2",
    deep: "#1B1206",
    focus: "50% 48%",
  },
});
