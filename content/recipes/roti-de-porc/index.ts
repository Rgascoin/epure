import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "roti-de-porc",
  title: "Rôti de porc",
  seoTitle: "Rôti de porc au four, juteux à 63 °C, et son jus",
  tagline: "Sorti à temps, il reste juteux.",
  description:
    "Rôti de porc de 1,2 kg doré puis cuit environ 55 minutes à 180 °C, sorti à 63 °C à cœur et reposé sous alu, avec ses légumes et un jus déglacé.",
  summary:
    "Pour 6 personnes, faites dorer un rôti de porc ficelé de 1,2 kg (échine pour le moelleux, filet ou longe pour le maigre) pendant 10 minutes, puis enfournez-le à 180 °C avec carottes, oignons et pommes de terre, à raison de 45 minutes par kilo. Sortez-le à 63 °C à cœur, laissez-le reposer 15 minutes sous aluminium et déglacez le plat avec 20 cl d’eau pour le jus. Comptez 1 h 40 en tout, dont 20 minutes de travail.",
  intro: [
    "Le rôti de porc fait partie des plats du dimanche qui demandent très peu de présence. On le colore, on l’enfourne avec quelques légumes autour, et le jus se prépare tout seul au fond du plat pendant la cuisson.",
    "Il rate presque toujours de la même façon : trop cuit. Par peur du rosé, on le laisse au four jusqu’à 75 °C et il ressort sec, en tranches qui s’effritent. Le porc est sûr à 63 °C à cœur, et une sonde plantée au centre évite de deviner.",
    "Le choix du morceau compte autant que la cuisson. L’échine, marbrée de gras, reste juteuse même avec quelques degrés de trop. Le filet ou la longe donnent des tranches maigres et nettes, mais pardonnent beaucoup moins.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "rôti de porc",
    "rôti de porc au four",
    "recette rôti de porc",
    "temps de cuisson rôti de porc",
    "rôti de porc juteux",
    "rôti de porc échine",
    "rôti de porc filet",
    "température à cœur rôti de porc",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 20, cook: 65, rest: 15 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Toute l’année"],
  tags: [],
  equipment: [
    "plat en fonte ou cocotte allant sur le feu et au four, d’environ 30 × 22 cm",
    "thermomètre-sonde",
    "ficelle de cuisine",
    "planche à découper",
    "papier aluminium",
  ],
  ingredients: [
    {
      title: "Le rôti",
      items: [
        {
          qty: 1.2,
          unit: "kg",
          name: "rôti de porc ficelé",
          note: "dans l’échine pour un rôti juteux, dans le filet ou la longe pour un rôti maigre",
          step: 0.1,
        },
        { qty: 1, unit: "cac", name: "sel fin", step: 0.5 },
        { qty: 2, unit: "cas", name: "huile de tournesol", step: 1 },
        { qty: 20, unit: "g", name: "beurre", step: 5 },
        { qty: 4, unit: "gousse", name: "ail", note: "en chemise, non épluchées", step: 1 },
        { qty: 3, unit: "brin", name: "thym", step: 1 },
        { qty: 1, unit: "feuille", name: "laurier", fixed: true },
        { name: "poivre noir" },
      ],
    },
    {
      title: "Les légumes autour (facultatif)",
      items: [
        { qty: 4, name: "carotte", plural: "carottes", note: "environ 400 g", step: 1 },
        {
          qty: 600,
          unit: "g",
          name: "pomme de terre à chair ferme",
          note: "type charlotte, coupées en deux",
          step: 50,
        },
        { qty: 2, name: "oignon", plural: "oignons", note: "coupés en quartiers", step: 1 },
        { qty: 1, unit: "cas", name: "huile de tournesol", step: 1 },
        { qty: 0.5, unit: "cac", name: "sel fin", step: 0.5 },
      ],
    },
    {
      title: "Le jus",
      items: [{ qty: 20, unit: "cl", name: "eau", note: "ou bouillon de volaille", step: 5 }],
    },
  ],
  method: [
    {
      title: "Le rôti",
      steps: [
        {
          title: "Préchauffer et préparer",
          text: "Préchauffez le four à 180 °C. Épongez le rôti avec du papier absorbant et salez-le sur toutes les faces. S’il n’est pas ficelé, faites-le vous-même : une boucle de ficelle tous les 3 cm, assez serrée pour lui donner une forme régulière, qui cuira de façon égale.",
        },
        {
          title: "Préparer les légumes",
          text: "Épluchez les carottes et coupez-les en tronçons de 4 cm. Coupez les pommes de terre en deux, ou en quatre si elles sont grosses, et les oignons en quartiers. Mélangez le tout avec 1 cas d’huile et une demi-cuillère à café de sel.",
        },
        {
          title: "Dorer le rôti",
          text: "Dans le plat posé sur feu moyen-vif, chauffez 2 cas d’huile et le beurre jusqu’à ce que le beurre mousse. Faites dorer le rôti sur toutes ses faces, 8 à 10 minutes en tout, en le tournant avec deux cuillères. Il est prêt quand la surface est brun doré et que ça sent la viande grillée.",
          timer: { minutes: 10, label: "Coloration du rôti" },
          tip: "Ne le piquez jamais avec une fourchette pour le retourner : chaque trou laisse filer du jus.",
        },
        {
          title: "Enfourner avec les légumes",
          text: "Disposez les légumes autour du rôti avec l’ail, le thym et le laurier, puis poivrez. Plantez la sonde au centre de la partie la plus épaisse. Enfournez à 180 °C en comptant 45 minutes par kilo, soit environ 55 minutes pour 1,2 kg. Arrosez le rôti de son jus et retournez les légumes à mi-cuisson.",
          timer: { minutes: 55, label: "Rôti au four" },
          tip: "Si le fond du plat brunit trop, versez-y 5 cl d’eau : ce sont les sucs du futur jus.",
        },
        {
          title: "Vérifier à cœur",
          text: "Le rôti est cuit quand la sonde indique 63 °C. Sans thermomètre, enfoncez une brochette au centre et laissez-la le temps de compter jusqu’à dix : le jus qui perle doit être clair, à peine rosé, et la brochette chaude sur les lèvres. S’il manque quelques degrés, remettez-le au four et vérifiez de nouveau un peu plus tard.",
        },
        {
          title: "Laisser reposer",
          text: "Posez le rôti sur la planche et couvrez-le d’une feuille d’aluminium, sans serrer. Laissez-le reposer 10 à 15 minutes. Gardez les légumes au chaud dans le four éteint, porte entrouverte.",
          timer: { minutes: 15, label: "Repos sous aluminium" },
          tip: "Pendant le repos, la température à cœur monte encore de quelques degrés. Inutile de le cuire plus longtemps.",
        },
        {
          title: "Déglacer le jus",
          text: "Pendant le repos, retirez l’excès de gras du plat à la cuillère en gardant 1 cas. Posez le plat sur feu moyen-vif, versez 20 cl d’eau et grattez les sucs avec une cuillère en bois. Écrasez les gousses d’ail pour en extraire la pulpe. Laissez bouillonner 3 à 4 minutes, jusqu’à ce que le jus ait réduit d’un tiers et ait pris une couleur ambrée.",
          timer: { minutes: 4, label: "Jus qui réduit" },
        },
        {
          title: "Trancher et servir",
          text: "Ajoutez au jus celui qui s’est écoulé sur la planche, goûtez, salez et poivrez, puis filtrez-le dans une saucière chaude. Retirez la ficelle et tranchez le rôti : 1 cm d’épaisseur pour l’échine, 5 mm pour le filet ou la longe. Servez avec les légumes et le jus bien chaud.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi le porc sèche au-delà de 70 °C",
      text: "En chauffant, les fibres musculaires se contractent et expulsent de l’eau. Vers 66 à 73 °C, l’actine, une des protéines du muscle, se dénature à son tour : les fibres se resserrent fortement et la viande perd une grande partie de son jus. Sorti à 63 °C, le rôti reste en deçà de ce seuil.",
    },
    {
      title: "Échine ou filet, une question de gras",
      text: "L’échine contient nettement plus de gras entre les fibres et plus de tissu conjonctif que le filet ou la longe. Ce gras fond à la cuisson et donne une sensation de jutosité, même quand la viande a un peu trop cuit. Le filet, maigre, n’a pas cette marge.",
    },
    {
      title: "Le repos avant de trancher",
      text: "À la sortie du four, l’extérieur du rôti est bien plus chaud que le centre, et cette chaleur continue de migrer vers le cœur. En refroidissant légèrement, les jus de la viande épaississent un peu : tranchée après 10 à 15 minutes, elle en perd moins sur la planche.",
    },
    {
      title: "Ce que contient le fond du plat",
      text: "Les sucs bruns collés au plat viennent des réactions de Maillard entre les protéines et les sucres du jus qui s’écoule. Ils sont solubles dans l’eau : en déglaçant, on les dissout, et c’est ce qui donne au jus sa couleur et son goût de rôti.",
    },
  ],
  tips: [
    "Demandez au boucher un rôti d’épaisseur régulière. Un bout fin et un bout épais ne cuisent pas au même rythme, et le fin est sec quand l’épais atteint 63 °C.",
    "Choisissez un plat à peine plus grand que le rôti et ses légumes. Trop grand, le jus s’étale, brûle au fond et le jus final a un goût amer.",
    "Si votre rôti de filet est bardé, laissez la barde pendant la cuisson et retirez-la au moment de trancher : elle protège la viande maigre du dessèchement.",
    "Tranchez le filet ou la longe plus fin que l’échine. Les viandes maigres paraissent plus tendres en tranches de 5 mm.",
  ],
  mistakes: [
    "Cuire jusqu’à ce qu’il ne soit « plus rose du tout » : le filet sort autour de 75 °C, sec et fibreux. Fiez-vous à la sonde et arrêtez à 63 °C.",
    "Trancher dès la sortie du four : le jus inonde la planche et les tranches sèchent dans l’assiette. 10 minutes sous l’aluminium suffisent à l’éviter.",
    "Faire dorer dans un plat pas assez chaud : le rôti grisaille et rend son eau au lieu de colorer. Attendez que le beurre mousse avant de le poser.",
    "Laisser le fond du plat noircir : le jus devient amer et rien ne le rattrape. Ajoutez un peu d’eau dès que les sucs foncent trop pendant la cuisson.",
  ],
  variations: [
    {
      title: "Directement au four",
      text: "Sans coloration préalable, enfournez le rôti huilé et salé à 210 °C pendant 15 minutes, puis baissez à 180 °C. Comptez environ 50 minutes par kilo au total, soit 1 h pour 1,2 kg, toujours jusqu’à 63 °C à cœur. La croûte est plus claire et le jus un peu moins brun.",
    },
    {
      title: "Aux pruneaux",
      text: "Faites tremper 150 g de pruneaux dénoyautés dans 20 cl d’eau chaude. Ajoutez-les dans le plat pour les 20 dernières minutes de cuisson et déglacez avec leur eau de trempage à la place de l’eau du jus.",
    },
    {
      title: "Échine en cocotte",
      text: "Après la coloration, ajoutez 10 cl de vin blanc sec, couvrez la cocotte et laissez cuire l’échine 1 h 30 à 160 °C. Elle dépasse alors largement les 63 °C et devient fondante, à la manière d’une viande braisée. Cette méthode ne convient pas au filet.",
    },
  ],
  storage:
    "Le rôti cuit se garde 2 à 3 jours au réfrigérateur, entier et bien emballé, le jus à part dans une boîte fermée. Tranché froid le lendemain, avec de la moutarde et des cornichons, il est aussi bon que chaud. Il se congèle 2 mois en tranches couvertes de jus ; ne recongelez jamais une viande décongelée.",
  pairing: "Un rouge souple et fruité, comme un saumur-champigny ou un beaujolais-villages, ou un riesling sec d’Alsace.",
  faq: [
    {
      q: "Quel morceau choisir pour un rôti de porc ?",
      a: "L’échine pour un rôti juteux et moelleux : elle est marbrée de gras et pardonne quelques degrés de trop. Le filet ou la longe pour un rôti maigre, aux tranches nettes, qui sèche en revanche vite au-delà de 63 °C. Le filet mignon, plus petit, se cuit autrement.",
    },
    {
      q: "Combien de temps cuire un rôti de porc par kilo ?",
      a: "45 minutes par kilo à 180 °C, après 10 minutes de coloration. Un rôti de 1,2 kg demande donc environ 55 minutes de four. L’épaisseur change beaucoup la donne : seule la sonde, à 63 °C à cœur, donne la réponse exacte.",
    },
    {
      q: "Quelle température à cœur pour un rôti de porc ?",
      a: "63 °C au centre de la partie la plus épaisse. Laissez-le ensuite reposer 10 à 15 minutes sous une feuille d’aluminium : la température monte encore de quelques degrés et la viande perd moins de jus à la découpe.",
    },
    {
      q: "Un rôti de porc peut-il être rosé à cœur ?",
      a: "Oui, légèrement. À 63 °C à cœur, la viande est cuite et peut garder une teinte à peine rosée au centre, surtout dans le filet. Elle doit en revanche être chaude jusqu’au centre, et le jus ne doit plus être rouge.",
    },
    {
      q: "Faut-il saisir le rôti de porc avant de l’enfourner ?",
      a: "Non, ce n’est pas obligatoire. La coloration donne une croûte plus brune et un jus plus foncé. Sans elle, démarrez le four à 210 °C pendant 15 minutes, puis baissez à 180 °C jusqu’à 63 °C à cœur.",
    },
    {
      q: "Comment manger les restes de rôti de porc ?",
      a: "Froids, le lendemain, en tranches fines avec de la moutarde et des cornichons, ou en sandwich. Gardez le rôti entier jusqu’au moment de le trancher : il sèche moins. Il se conserve 2 à 3 jours au réfrigérateur.",
    },
    {
      q: "Peut-on réchauffer un rôti de porc ?",
      a: "Oui, en tranches nappées de jus, 10 minutes à 150 °C sous une feuille d’aluminium. Réchauffé entier, il recuit à cœur et sèche. Pour un repas chaud, mieux vaut le cuire le jour même et garder les restes pour le froid.",
    },
  ],
  nutrition: {
    calories: 485,
    protein: 40.5,
    fat: 24.5,
    saturatedFat: 9,
    carbs: 25,
    sugar: 6,
    fiber: 4,
    sodium: 710,
  },
  annotations: { hero: "l’échine, persillée, reste juteuse", detail: "trancher après le repos" },
  images: {
    heroAlt:
      "Rôti de porc doré entamé en tranches épaisses sur une planche, avec oignon rouge, romarin et tomates cerises",
    detailAlt: "Rôti de porc tranché sur une planche en bois, à la chair claire et juteuse, un couteau posé devant",
    credits: {
      hero: {
        photographer: "Evgeniy Alekseyev",
        url: "https://www.pexels.com/photo/savory-grilled-meat-on-wooden-tray-7333173/",
      },
      detail: {
        photographer: "Evgeniy Alekseyev",
        url: "https://www.pexels.com/photo/sliced-meat-on-brown-wooden-chopping-board-7333172/",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#CF7A40",
    onAccent: "#1B1712",
    ink: "#8A4519",
    tint: "#F8EDE4",
    deep: "#1A0F09",
    focus: "56% 50%",
  },
});
