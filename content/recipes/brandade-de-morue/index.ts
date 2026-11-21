import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "brandade-de-morue",
  title: "Brandade de morue",
  seoTitle: "Brandade de morue au four, avec pommes de terre et gratinée",
  tagline: "On la commence deux jours avant.",
  description:
    "Brandade de morue au four pour 6 : 600 g de morue dessalée 24 à 36 h, pochée sans bouillir, montée à l’huile d’olive et au lait, puis gratinée 20 minutes.",
  summary:
    "Pour 6 personnes, dessalez 600 g de morue 24 à 36 heures au réfrigérateur en changeant l’eau 3 ou 4 fois. Pochez-la 10 minutes sans bouillir, effeuillez-la, puis montez-la avec 150 ml d’huile d’olive à l’ail et 200 ml de lait tièdes. Ajoutez 600 g de pommes de terre écrasées et faites gratiner 20 minutes à 200 °C. Comptez 24 h de dessalage, puis 1 h 30 le jour même.",
  intro: [
    "La brandade est une purée de morue montée à l’huile d’olive, à l’ail et au lait. Celle de Nîmes s’en tient là. À la maison, on y ajoute presque toujours des pommes de terre, qui l’adoucissent et demandent moins d’huile : c’est cette version qu’on fait ici, passée au four jusqu’à ce que le dessus dore.",
    "Deux choses la font rater. Une morue mal dessalée, et tout le plat est trop salé. Une morue qui bout au lieu de frémir, et sa chair devient ferme et filandreuse.",
    "Le reste est une affaire de température : l’huile et le lait tièdes, versés petit à petit, sur une morue encore chaude.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "brandade de morue",
    "recette brandade de morue",
    "brandade de morue au four",
    "brandade de morue pommes de terre",
    "brandade de morue maison",
    "dessaler la morue",
    "combien de temps dessaler la morue",
    "brandade de nîmes",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 40, cook: 50, rest: 1440 },
  difficulty: "Intermédiaire",
  cost: "€€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: [
    "grand saladier pour le dessalage",
    "sauteuse",
    "deux petites casseroles",
    "presse-purée",
    "plat à gratin de 20 × 28 cm",
  ],
  ingredients: [
    {
      title: "La morue",
      items: [
        { qty: 600, unit: "g", name: "morue salée", note: "un morceau épais, avec la peau", step: 50 },
        { qty: 1, name: "feuille de laurier", plural: "feuilles de laurier", fixed: true },
        { qty: 2, name: "branche de thym", plural: "branches de thym", fixed: true },
      ],
    },
    {
      title: "La brandade",
      items: [
        { qty: 600, unit: "g", name: "pommes de terre", note: "farineuses, type bintje", step: 50 },
        { qty: 3, name: "gousse d’ail", plural: "gousses d’ail", step: 1 },
        { qty: 150, unit: "ml", name: "huile d’olive", note: "fruitée mais douce", step: 10 },
        { qty: 200, unit: "ml", name: "lait entier", step: 10 },
        { name: "poivre" },
        { name: "noix de muscade" },
        { name: "sel", note: "seulement si besoin" },
      ],
    },
    {
      title: "Le gratin",
      items: [
        { qty: 2, unit: "cas", name: "huile d’olive" },
        { qty: 2, unit: "cas", name: "chapelure" },
      ],
    },
  ],
  method: [
    {
      title: "Deux jours avant",
      steps: [
        {
          title: "Dessaler la morue",
          text: "Rincez la morue sous l’eau froide pour retirer le sel de surface et coupez-la en 4 morceaux. Plongez-les dans un grand saladier d’eau froide, couvrez et laissez 24 à 36 heures au réfrigérateur selon l’épaisseur. Changez l’eau 3 ou 4 fois, par exemple matin et soir.",
          timer: { minutes: 1440, label: "Dessalage, 24 h minimum" },
          tip: "Pour savoir où vous en êtes, pochez un petit bout 2 minutes et goûtez-le : il doit être à peine salé, comme un jambon blanc.",
        },
      ],
    },
    {
      title: "Le jour même",
      steps: [
        {
          title: "Pocher sans bouillir",
          text: "Égouttez la morue, mettez-la dans la sauteuse avec le laurier et le thym, et couvrez d’eau froide. Chauffez à feu moyen jusqu’aux premiers frémissements, puis baissez au plus doux : l’eau doit trembler, jamais bouillir. Laissez pocher 8 à 10 minutes, jusqu’à ce que la chair se sépare en lamelles nacrées sous la fourchette.",
          timer: { minutes: 10, label: "Pochage de la morue" },
          tip: "À gros bouillons, la morue se rétracte et durcit : restez près du feu.",
        },
        {
          title: "Cuire les pommes de terre",
          text: "Pendant ce temps, épluchez les pommes de terre, coupez-les en quatre et couvrez-les d’eau froide sans sel : la morue en apportera bien assez. Portez à ébullition et comptez 20 minutes, jusqu’à ce que la pointe d’un couteau y entre sans résistance. Égouttez-les et passez-les au presse-purée.",
          timer: { minutes: 20, label: "Pommes de terre" },
        },
        {
          title: "Effeuiller la morue",
          text: "Égouttez la morue et jetez l’eau. Retirez la peau, puis effeuillez la chair du bout des doigts en faisant glisser chaque lamelle entre le pouce et l’index pour sentir les arêtes. Préchauffez le four à 200 °C.",
        },
        {
          title: "Tiédir l’huile et le lait",
          text: "Hachez l’ail finement et mettez-le dans une petite casserole avec les 150 ml d’huile. Chauffez 5 minutes à feu très doux : l’ail doit parfumer l’huile sans prendre de couleur. Faites tiédir le lait dans l’autre casserole. Les deux doivent être chauds au doigt, pas brûlants.",
          timer: { minutes: 5, label: "Huile à l’ail" },
        },
        {
          title: "Monter la brandade",
          text: "Essuyez la sauteuse, mettez-y la morue et posez-la sur feu très doux. Écrasez-la à la cuillère en bois, puis versez l’huile à l’ail en filet, en alternant avec le lait et en battant fort. Gardez 3 cas de lait pour la fin. La morue doit blanchir et devenir crémeuse avant chaque nouvel ajout.",
          tip: "Si l’huile perle en surface, arrêtez de verser et battez avec une cuillerée de lait chaud jusqu’à ce que tout se lie de nouveau.",
        },
        {
          title: "Ajouter les pommes de terre",
          text: "Incorporez la purée de pommes de terre en deux fois. Poivrez, râpez un peu de muscade, puis goûtez avant de saler : souvent, il n’y a rien à ajouter. La brandade doit être souple et tenir à la cuillère. Si elle est trop ferme, détendez-la avec le lait gardé de côté.",
        },
        {
          title: "Gratiner au four",
          text: "Huilez le plat avec 1 cas d’huile, étalez la brandade et tracez des sillons à la fourchette. Parsemez de chapelure, arrosez avec la dernière cuillerée d’huile et enfournez 20 minutes à 200 °C, jusqu’à ce que le dessus soit doré et que les bords frémissent. Servez aussitôt.",
          timer: { minutes: 20, label: "Gratin au four" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Le dessalage, une affaire de diffusion",
      text: "Le sel de la chair passe dans l’eau jusqu’à ce que les deux soient aussi salées l’une que l’autre. Changer l’eau relance le mouvement, d’où les 3 ou 4 renouvellements. Plus le morceau est épais, plus le sel met de temps à sortir du centre. Et une fois dessalée, la morue n’est plus protégée par son sel : elle se conserve comme un poisson frais, au froid.",
    },
    {
      title: "Pourquoi la morue ne doit pas bouillir",
      text: "Les protéines du poisson coagulent dès 50 °C. Chauffées plus fort, à gros bouillons, les fibres se contractent et expulsent leur eau : la chair devient sèche et caoutchouteuse, et se défait en filaments au lieu de lamelles. Un simple frémissement suffit à cuire un poisson déjà ferme comme la morue.",
    },
    {
      title: "Une émulsion qui a besoin de chaleur",
      text: "La brandade est une émulsion : de fines gouttes d’huile dispersées dans la chair, le lait et, ici, l’amidon des pommes de terre, qui aident à la tenir. Tiède, l’huile se fractionne facilement sous la cuillère. Froide ou versée d’un coup, elle reste en flaques et la brandade graisse.",
    },
  ],
  tips: [
    "Choisissez un morceau épais, pris dans le dos : il donne de belles lamelles et moins d’arêtes que la queue.",
    "Ne salez pas l’eau des pommes de terre ni la brandade avant d’avoir goûté : la morue reste toujours un peu salée.",
    "Si votre huile d’olive est très ardente, remplacez-en un tiers par de l’huile de tournesol, sinon l’amertume prend le dessus.",
    "Travaillez la morue à la cuillère en bois et les pommes de terre au presse-purée. Au mixeur, la purée devient collante comme de la colle à papier peint.",
  ],
  mistakes: [
    "Une brandade trop salée : la morue n’a pas assez dessalé. Ajoutez 200 g de pommes de terre écrasées et un peu de lait chaud, la prochaine fois laissez-la 12 heures de plus.",
    "Une chair dure et filandreuse : l’eau a bouilli. On ne revient pas en arrière, mais battre plus longtemps avec un peu plus de lait chaud adoucit le résultat.",
    "Une brandade qui graisse : l’huile était froide ou versée trop vite. Ajoutez une cuillerée de lait chaud et battez fort, elle se reprend.",
    "Une arête sous la dent : effeuillez la morue à la main, jamais à la fourchette, pour sentir chaque arête.",
  ],
  variations: [
    {
      title: "Brandade de Nîmes, sans pommes de terre",
      text: "Pour 500 g de morue dessalée et pochée, montez 250 ml d’huile d’olive et 150 ml de lait sur feu très doux, toujours en alternant. Elle est plus dense et plus riche : servez-la tiède, sans passer au four, avec des croûtons frottés d’ail.",
    },
    {
      title: "Au cabillaud frais",
      text: "Remplacez la morue par 700 g de dos de cabillaud, sans dessalage. Pochez-le 5 minutes seulement, et salez la brandade à la fin, environ 6 g de sel. Le goût est plus doux, moins marqué.",
    },
    {
      title: "En parmentier",
      text: "Doublez la quantité de pommes de terre (1,2 kg) et étalez la moitié de la purée au fond du plat, la brandade au-dessus. Prévoyez 25 minutes au four.",
    },
  ],
  storage:
    "La brandade se garde 2 jours au réfrigérateur, couverte, rangée dans les 2 heures après la cuisson. Réchauffez-la au four à 180 °C pendant 20 à 25 minutes, jusqu’à ce qu’elle soit brûlante au centre. On évite de la congeler : au dégel, les pommes de terre deviennent granuleuses.",
  pairing:
    "Une salade verte bien vinaigrée, frisée ou mâche, qui coupe le gras de l’huile. Côté vin, un blanc sec du Languedoc, comme un costières-de-nîmes blanc.",
  faq: [
    {
      q: "Combien de temps faut-il dessaler la morue ?",
      a: "24 à 36 heures, dans un grand volume d’eau froide changée 3 ou 4 fois, au réfrigérateur. Un filet fin est prêt en 24 heures, un dos épais demande plutôt 36 heures. Pour vérifier, pochez un petit morceau 2 minutes et goûtez : il doit être à peine salé.",
    },
    {
      q: "Pourquoi dessaler la morue au réfrigérateur ?",
      a: "Parce qu’en perdant son sel, la morue perd aussi sa protection. Elle redevient un poisson frais qui se dégrade vite à température ambiante. Au frais, elle dessale un peu plus lentement, mais en toute sécurité.",
    },
    {
      q: "Faut-il faire bouillir la morue pour une brandade ?",
      a: "Non. On la met dans l’eau froide, on chauffe jusqu’aux premiers frémissements, puis on baisse et on la laisse pocher 8 à 10 minutes dans une eau qui tremble à peine. À gros bouillons, elle durcit et devient filandreuse.",
    },
    {
      q: "La vraie brandade de Nîmes contient-elle des pommes de terre ?",
      a: "Non. La brandade nîmoise est faite de morue, d’huile d’olive, d’ail et de lait, sans pommes de terre. La version avec pommes de terre est celle que l’on fait le plus souvent à la maison : plus douce, moins riche en huile, elle se prête bien au gratin.",
    },
    {
      q: "Peut-on faire une brandade avec du cabillaud frais ?",
      a: "Oui. Prenez 700 g de dos de cabillaud, pochez-le 5 minutes et salez la brandade à la fin. Le résultat est bon, plus doux, mais il lui manque le goût affirmé et la texture en lamelles de la morue salée.",
    },
    {
      q: "Combien de temps se conserve une brandade de morue ?",
      a: "2 jours au réfrigérateur, bien couverte. Réchauffez-la au four à 180 °C pendant 20 à 25 minutes, jusqu’à ce qu’elle soit brûlante au centre. Mieux vaut ne pas la congeler : les pommes de terre deviennent granuleuses au dégel.",
    },
  ],
  nutrition: { calories: 440, protein: 26, fat: 27, saturatedFat: 5, carbs: 21, sugar: 2, fiber: 2, sodium: 700 },
  annotations: { hero: "le dessus doré, les bords qui frémissent", detail: "des lamelles, pas de la pâte" },
  images: {
    heroAlt:
      "Brandade de morue gratinée dans un plat rond en terre cuite, entourée de tranches de pain grillé sur une nappe blanche",
    detailAlt: "Assiette de brandade de morue servie en quenelles avec des pommes de terre et des feuilles de persil",
    credits: {
      hero: {
        photographer: "Mover el Bigote",
        url: "https://commons.wikimedia.org/wiki/File:Zaragoza_Restaurante_Alberto_Brandada_de_bacalao_-_moverelbigote.jpg",
        source: "Wikimedia Commons",
        license: "CC BY 2.0",
      },
      detail: {
        photographer: "Scott Dexter from Brooklyn, US",
        url: "https://commons.wikimedia.org/wiki/File:Plate_of_rustic_brandade_(7326417970).jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 2.0",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#C08A3E",
    onAccent: "#1B1712",
    ink: "#7C5520",
    tint: "#F8F0E2",
    deep: "#18110A",
    focus: "57% 45%",
  },
});
