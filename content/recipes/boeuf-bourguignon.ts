import type { RecipeContent } from "@/lib/types";

export const content: RecipeContent = {
  slug: "boeuf-bourguignon",
  title: "Bœuf bourguignon",
  seoTitle: "Bœuf bourguignon : la recette traditionnelle au four",
  tagline: "Le temps fait le reste.",
  description:
    "Le bœuf bourguignon traditionnel : paleron mijoté 3 h au four à 150 °C dans le pinot noir, avec lardons, champignons et oignons glacés. Les gestes pas à pas.",
  summary:
    "Pour un bœuf bourguignon pour 6, saisissez 1,5 kg de paleron en cubes, singez-le de farine, mouillez avec 75 cl de pinot noir et 30 cl de bouillon, puis laissez cuire 3 h au four à 150 °C en cocotte fermée. Ajoutez en fin de cuisson les lardons, les champignons et les petits oignons glacés : comptez un peu plus de 4 h au total, dont 40 minutes de travail.",
  intro: [
    "Le bœuf bourguignon ne demande pas de talent, il demande du temps. Trois heures à couvert, dans un four doux, transforment un morceau ferme et nerveux en une viande qui se défait à la cuillère, nappée d’une sauce sombre et brillante.",
    "Tout se joue au début et à la fin : une coloration franche et patiente de la viande, puis une garniture préparée à part — lardons, champignons, petits oignons glacés — ajoutée au dernier moment pour garder sa tenue.",
    "Préparez-le la veille si vous le pouvez : il n’en sera que meilleur.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "bœuf bourguignon",
    "recette bœuf bourguignon",
    "bœuf bourguignon traditionnel",
    "bœuf bourguignon au four",
    "bœuf bourguignon en cocotte",
    "quel morceau pour bœuf bourguignon",
    "quel vin pour bœuf bourguignon",
    "temps de cuisson bœuf bourguignon",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 40, cook: 210 },
  difficulty: "Intermédiaire",
  cost: "€€",
  season: ["Automne", "Hiver"],
  equipment: [
    "Cocotte en fonte de 5 à 6 l avec couvercle",
    "Grande poêle ou sauteuse",
    "Papier absorbant",
    "Papier sulfurisé",
    "Saladier (pour la marinade)",
  ],
  ingredients: [
    {
      title: "La viande et ses aromates",
      items: [
        {
          qty: 1500,
          unit: "g",
          name: "bœuf à braiser",
          note: "paleron, joue ou macreuse, en cubes de 5 cm",
          step: 10,
        },
        { qty: 75, unit: "cl", name: "vin rouge de Bourgogne", note: "pinot noir, soit une bouteille", step: 5 },
        { qty: 1, name: "carotte", plural: "carottes", note: "en rondelles épaisses", step: 1 },
        { qty: 1, name: "oignon", plural: "oignons", note: "émincé", step: 1 },
        { qty: 2, unit: "gousse", name: "ail", note: "écrasées", step: 1 },
        { qty: 1, name: "bouquet garni", plural: "bouquets garnis", note: "thym, laurier, queues de persil", step: 1 },
      ],
    },
    {
      title: "La cuisson",
      items: [
        { qty: 3, unit: "cas", name: "huile neutre", note: "tournesol ou pépins de raisin", step: 1 },
        { qty: 30, unit: "g", name: "beurre", step: 5 },
        { qty: 30, unit: "g", name: "farine", step: 5 },
        { qty: 1, unit: "cas", name: "concentré de tomate", step: 0.5, optional: true },
        { qty: 30, unit: "cl", name: "bouillon de bœuf", note: "ou fond de veau, peu salé", step: 5 },
        { name: "sel et poivre du moulin" },
      ],
    },
    {
      title: "La garniture",
      items: [
        { qty: 200, unit: "g", name: "lardons fumés", note: "ou poitrine fumée en bâtonnets", step: 10 },
        { qty: 250, unit: "g", name: "champignons de Paris", note: "petits, entiers ou coupés en quatre", step: 10 },
        {
          qty: 18,
          name: "petit oignon grelot",
          plural: "petits oignons grelots",
          note: "épluchés",
          step: 1,
        },
        { qty: 20, unit: "g", name: "beurre", step: 5 },
        { qty: 1, unit: "cac", name: "sucre en poudre", step: 0.5 },
        { qty: 2, unit: "cas", name: "persil plat", note: "ciselé", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "La veille : la marinade (facultatif)",
      steps: [
        {
          title: "Mariner la viande",
          text: "Réunissez dans un saladier le bœuf, la carotte, l’oignon, l’ail et le bouquet garni, puis couvrez de vin. Filmez et laissez 12 heures au réfrigérateur. Le lendemain, égouttez la viande en conservant le vin et les aromates séparément.",
          tip: "La marinade parfume surtout la surface de la viande : elle est pratique pour s’organiser, mais la longue cuisson fait l’essentiel.",
        },
      ],
    },
    {
      title: "Saisir",
      steps: [
        {
          title: "Préchauffer et sécher",
          text: "Préchauffez le four à 150 °C. Épongez soigneusement chaque morceau de viande au papier absorbant, puis salez-les.",
          tip: "Une viande humide ne colore pas : elle bout. Séchez-la parfaitement, c’est la condition d’une belle croûte.",
        },
        {
          title: "Dorer la viande",
          text: "Chauffez l’huile à feu vif dans la cocotte. Saisissez la viande en trois ou quatre fois, sans serrer les morceaux, 3 à 4 minutes par face, jusqu’à une croûte brun foncé. Réservez au fur et à mesure.",
          timer: { minutes: 15, label: "Coloration de la viande" },
        },
        {
          title: "Faire suer les aromates",
          text: "Baissez le feu, ajoutez le beurre, la carotte et l’oignon, et faites-les suer 5 minutes en grattant le fond. Ajoutez l’ail et le concentré de tomate, et poursuivez 1 minute.",
          timer: { minutes: 6, label: "Aromates" },
        },
        {
          title: "Singer et déglacer",
          text: "Remettez la viande et son jus, saupoudrez de farine et mélangez 2 minutes pour la torréfier légèrement. Versez le vin, grattez les sucs au fond de la cocotte et laissez bouillir 2 minutes.",
          timer: { minutes: 4, label: "Singer et réduire" },
        },
      ],
    },
    {
      title: "Mijoter",
      steps: [
        {
          title: "Mouiller et enfourner",
          text: "Ajoutez le bouillon jusqu’à couvrir presque la viande, puis le bouquet garni et un tour de poivre. Portez à frémissement, couvrez et enfournez pour 3 heures.",
          timer: { minutes: 180, label: "Cuisson au four" },
          tip: "Au four, la chaleur enveloppe la cocotte : la sauce frémit sans attacher, sans surveillance.",
        },
        {
          title: "Vérifier la cuisson",
          text: "La viande est prête lorsqu’elle se défait sous la pression d’une cuillère. Si la sauce est trop liquide, retirez la viande et faites réduire la sauce à découvert sur le feu, jusqu’à ce qu’elle nappe la cuillère.",
          timer: { minutes: 10, label: "Réduction de la sauce" },
        },
      ],
    },
    {
      title: "La garniture",
      steps: [
        {
          title: "Glacer les oignons",
          text: "Pendant la dernière heure de cuisson, placez les oignons grelots dans une sauteuse avec 10 g de beurre, le sucre, une pincée de sel et de l’eau à mi-hauteur. Couvrez d’un disque de papier sulfurisé et cuisez jusqu’à évaporation complète, puis roulez-les dans le jus caramélisé.",
          timer: { minutes: 20, label: "Oignons glacés" },
        },
        {
          title: "Dorer lardons et champignons",
          text: "Faites revenir les lardons à sec dans une poêle 5 minutes. Ajoutez 10 g de beurre et les champignons, et faites-les sauter à feu vif jusqu’à ce qu’ils soient bien dorés.",
          timer: { minutes: 8, label: "Lardons et champignons" },
        },
        {
          title: "Assembler",
          text: "Retirez le bouquet garni, ajoutez la garniture dans la cocotte et laissez mijoter 10 minutes ensemble. Rectifiez l’assaisonnement et parsemez de persil au moment de servir.",
          timer: { minutes: 10, label: "Mijotage final" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Le collagène devient gélatine",
      text: "Les morceaux à braiser comme le paleron ou la joue sont riches en tissu conjonctif. Maintenu longtemps au-delà d’environ 70 °C en milieu humide, son collagène se transforme en gélatine : la viande devient fondante et la sauce prend du corps.",
    },
    {
      title: "La réaction de Maillard d’abord",
      text: "La croûte brune formée à forte chaleur résulte de la réaction entre sucres et acides aminés, qui produit des centaines de composés aromatiques. Une viande mouillée plafonne à 100 °C et ne dore pas : d’où l’importance de la sécher et de ne pas surcharger la cocotte.",
    },
    {
      title: "Frémir, jamais bouillir",
      text: "À 150 °C, le liquide de la cocotte frémit doucement. Une ébullition franche contracte les fibres musculaires, qui expulsent leur jus : la viande devient sèche et filandreuse, même immergée dans la sauce.",
    },
  ],
  tips: [
    "Mélangez deux morceaux, par exemple paleron et joue : l’un se tient, l’autre fond.",
    "Coupez des cubes généreux de 5 cm : ils restent moelleux pendant les trois heures de cuisson.",
    "Choisissez un vin que vous aimeriez boire : la cuisson concentre ses qualités comme ses défauts.",
    "Préparez-le la veille : refroidi une nuit, le plat gagne en goût et le gras figé se retire facilement.",
    "Servez avec des pommes vapeur, une purée ou des tagliatelles fraîches pour profiter de la sauce.",
  ],
  mistakes: [
    "Saisir toute la viande d’un coup : la température chute, la viande rend son eau et bout au lieu de dorer.",
    "Laisser bouillir à gros bouillons : la viande se dessèche malgré la sauce.",
    "Ajouter champignons et oignons dès le début : ils se délitent et perdent leur goût.",
    "Couper la viande en petits dés : elle se dessèche avant d’être tendre.",
  ],
  variations: [
    {
      title: "Tout en joue de bœuf",
      text: "Plus riche en collagène, la joue donne une texture encore plus fondante. Prolongez la cuisson de 30 minutes.",
    },
    {
      title: "À l’autocuiseur",
      text: "Après les étapes de coloration et de déglaçage, comptez environ 50 minutes de cuisson sous pression, puis réduisez la sauce à découvert si nécessaire.",
    },
    {
      title: "Façon bistrot, aux carottes",
      text: "Ajoutez trois carottes en tronçons épais pour la dernière heure de cuisson : elles s’imprègnent de la sauce sans se défaire.",
    },
  ],
  storage:
    "Le bœuf bourguignon se conserve 3 jours au réfrigérateur dans un récipient fermé et 3 mois au congélateur. Réchauffez-le doucement, à couvert, sur feu doux ou au four à 140 °C.",
  pairing:
    "Le vin de la sauce ou l’un de ses voisins : un bourgogne rouge de pinot noir, comme un Hautes-Côtes-de-Nuits ou un Givry.",
  faq: [
    {
      q: "Quel morceau de bœuf choisir pour un bœuf bourguignon ?",
      a: "Des morceaux riches en collagène, faits pour les cuissons longues : paleron, joue, macreuse ou gîte. Mélanger deux morceaux donne une texture plus intéressante.",
    },
    {
      q: "Quel vin utiliser pour un bœuf bourguignon ?",
      a: "Un pinot noir de Bourgogne fruité et peu tannique, de qualité correcte, comme un bourgogne rouge ou une appellation de la côte chalonnaise. Évitez les vins très boisés, dont l’amertume se concentre à la cuisson.",
    },
    {
      q: "Faut-il faire mariner le bœuf la veille ?",
      a: "Ce n’est pas indispensable. La marinade parfume surtout la surface de la viande ; la longue cuisson dans le vin apporte l’essentiel du goût.",
    },
    {
      q: "Combien de temps faut-il cuire un bœuf bourguignon ?",
      a: "Environ 3 heures au four à 150 °C en cocotte fermée, ou 2 h 30 à 3 heures à frémissement sur le feu. Il est prêt quand la viande se défait à la cuillère.",
    },
    {
      q: "Peut-on préparer le bœuf bourguignon à l’avance ?",
      a: "Oui, c’est même recommandé : une nuit au réfrigérateur lui donne plus de goût et une sauce mieux liée. Il se garde 3 jours au frais.",
    },
    {
      q: "Comment épaissir la sauce du bœuf bourguignon ?",
      a: "Faites-la réduire à découvert après avoir retiré la viande, ou incorporez en fouettant un beurre manié de 10 g de beurre et 10 g de farine, puis laissez frémir 2 minutes.",
    },
  ],
  nutrition: {
    calories: 680,
    protein: 58,
    fat: 36,
    saturatedFat: 14,
    carbs: 16,
    sugar: 7,
    fiber: 3,
    sodium: 1100,
  },
  images: {
    heroAlt:
      "Bœuf bourguignon mijoté dans une petite cocotte en fonte orange tenue à deux mains, avec un brin de romarin",
    detailAlt: "Morceaux de bœuf braisé nappés de sauce au vin, champignons et ciboulette sur une purée",
    credits: {
      hero: {
        photographer: "furkanfdemir",
        url: "https://www.pexels.com/photo/person-holding-orange-pot-with-cooked-food-7239431/",
      },
      detail: {
        photographer: "Shameel Mukkath",
        url: "https://www.pexels.com/photo/close-up-of-meat-dish-on-plate-5638533/",
      },
    },
  },
  datePublished: "2026-10-09",
  dateModified: "2026-11-10",
};
