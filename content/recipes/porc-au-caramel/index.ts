import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "porc-au-caramel",
  title: "Porc au caramel",
  seoTitle: "Porc au caramel vietnamien, laqué au nuoc-mâm",
  tagline: "Le caramel doit frôler l’amertume.",
  description:
    "Porc au caramel façon thịt kho : 800 g de poitrine en cubes, caramel brun, nuoc-mâm, ail et échalotes, mijotés 1 h 20 en sauce laquée. Avec du riz.",
  summary:
    "Pour 4 personnes, faites un caramel à sec avec 70 g de sucre jusqu’à la couleur acajou, enrobez-y 800 g de poitrine de porc en cubes, puis ajoutez échalotes, ail, 4 cuillerées à soupe de nuoc-mâm et 40 cl d’eau. Laissez mijoter 45 minutes à couvert, puis 35 minutes à découvert, jusqu’à une sauce sirupeuse et brillante. Servez avec du riz jasmin. Comptez 1 h 55, dont 20 minutes de travail.",
  intro: [
    "Le porc au caramel, dans l’esprit du thịt kho vietnamien, tient en peu de choses : de la poitrine de porc, du sucre caramélisé, du nuoc-mâm, de l’ail, des échalotes et beaucoup de poivre. Après une heure et demie de cuisson, la viande se coupe à la cuillère et la sauce nappe chaque morceau comme un vernis.",
    "Tout se joue dans les cinq premières minutes. Un caramel trop clair donne un plat simplement sucré. Il faut le pousser jusqu’à l’acajou, quand il fume un peu et sent légèrement l’amer : c’est cette pointe d’amertume qui tient tête au sel du nuoc-mâm. Une minute de plus, en revanche, et il brûle.",
    "Préparez donc tout avant d’allumer le feu et gardez la viande à portée de main. Ensuite, la cocotte travaille seule.",
  ],
  category: "Plat",
  cuisine: "Vietnamienne",
  keywords: [
    "porc au caramel",
    "recette porc au caramel",
    "porc au caramel vietnamien",
    "porc au caramel nuoc mam",
    "thit kho",
    "poitrine de porc au caramel",
    "porc au caramel et œufs durs",
    "porc caramélisé",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 20, cook: 95 },
  difficulty: "Intermédiaire",
  cost: "€€",
  season: ["Toute l’année"],
  tags: [],
  equipment: [
    "cocotte à fond épais de 24 cm avec couvercle",
    "casserole moyenne avec couvercle",
    "cuillère en bois",
    "petite louche ou écumoire",
  ],
  ingredients: [
    {
      title: "Le porc au caramel",
      items: [
        { qty: 800, unit: "g", name: "poitrine de porc", note: "sans os, avec la couenne", step: 50 },
        { qty: 3, name: "échalote", plural: "échalotes", note: "finement émincées", step: 1 },
        { qty: 4, unit: "gousse", name: "ail", note: "hachées", step: 1 },
        { qty: 70, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 4, unit: "cas", name: "nuoc-mâm", note: "sauce de poisson", step: 1 },
        { qty: 1, unit: "cac", name: "poivre noir", note: "fraîchement moulu", step: 0.5 },
        { qty: 40, unit: "cl", name: "eau chaude", step: 5 },
        { qty: 2, name: "oignon nouveau", plural: "oignons nouveaux", note: "émincés, pour servir", step: 1 },
      ],
    },
    {
      title: "Le riz",
      items: [
        { qty: 300, unit: "g", name: "riz jasmin", step: 10 },
        { qty: 45, unit: "cl", name: "eau", step: 5 },
      ],
    },
  ],
  method: [
    {
      title: "Le porc",
      steps: [
        {
          title: "Tout préparer",
          text: "Coupez la poitrine en cubes de 3 à 4 cm, en gardant sur chacun la couenne, le gras et le maigre. Épongez-les au papier absorbant. Émincez les échalotes, hachez l’ail, mesurez le nuoc-mâm et l’eau chaude, et posez le tout près du feu : une fois lancé, le caramel n’attend pas.",
        },
        {
          title: "Faire un caramel à sec",
          text: "Répartissez le sucre en couche régulière dans la cocotte, sur feu moyen. N’y touchez pas jusqu’à ce qu’il fonde sur les bords, puis faites tourner la cocotte pour égaliser. En 5 à 7 minutes, il passe du blond à l’acajou : une fumée légère monte et l’odeur devient un peu amère. C’est le moment.",
          timer: { minutes: 6, label: "Caramel à sec" },
          tip: "Fiez-vous à la couleur, pas à la montre : il doit ressembler à un thé très infusé. S’il noircit et sent l’âcre, il est brûlé, et rien ne le rattrape.",
        },
        {
          title: "Enrober le porc",
          text: "Jetez aussitôt la viande dans la cocotte, en reculant d’un pas à cause des projections. Le caramel durcit au contact, c’est normal. Remuez sur feu moyen-vif pendant 5 minutes : il refond et chaque morceau se couvre d’une couche brune et brillante.",
          timer: { minutes: 5, label: "Enrober le porc" },
        },
        {
          title: "Ajouter les aromates",
          text: "Ajoutez les échalotes et l’ail et remuez 2 minutes, jusqu’à ce qu’ils s’assouplissent et sentent bon. Versez le nuoc-mâm, ajoutez le poivre et mélangez encore 1 minute, soit 3 minutes en tout : l’odeur forte du nuoc-mâm s’adoucit presque tout de suite.",
          timer: { minutes: 3, label: "Aromates et nuoc-mâm" },
        },
        {
          title: "Mijoter à couvert",
          text: "Versez l’eau chaude : elle doit presque couvrir la viande. Portez à frémissement, retirez l’écume grise qui monte, puis couvrez et laissez cuire 45 minutes à feu doux, en remuant une ou deux fois.",
          timer: { minutes: 45, label: "Mijoter à couvert" },
        },
        {
          title: "Réduire à découvert",
          text: "Retirez le couvercle et laissez bouillonner doucement 30 à 40 minutes, en remuant de temps en temps. La sauce fonce et devient sirupeuse : elle nappe la viande, forme de grosses bulles brillantes, et le gras remonte en surface. La pointe d’un couteau entre dans le maigre sans résistance.",
          timer: { minutes: 35, label: "Réduire la sauce" },
          tip: "Remuez plus souvent sur la fin : quand la sauce épaissit, le sucre peut accrocher au fond. Si ça attache, ajoutez 5 cl d’eau chaude et décollez à la cuillère.",
        },
      ],
    },
    {
      title: "Le riz et le service",
      steps: [
        {
          title: "Cuire le riz",
          text: "Pendant que la sauce réduit, rincez le riz dans plusieurs eaux, jusqu’à ce qu’elle soit presque claire. Mettez-le dans la casserole avec 45 cl d’eau, portez à ébullition, couvrez et laissez cuire 12 minutes à feu très doux, puis 10 minutes hors du feu sans soulever le couvercle, soit 22 minutes.",
          timer: { minutes: 22, label: "Riz jasmin" },
        },
        {
          title: "Rectifier et servir",
          text: "Retirez une partie du gras à la cuillère si vous le souhaitez. Goûtez : une pincée de sucre si c’est trop salé, quelques gouttes de nuoc-mâm si c’est un peu plat. Poivrez généreusement, parsemez d’oignon nouveau et servez avec le riz.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Un caramel qui doit être amer",
      text: "Chauffé à sec, le sucre fond puis se décompose vers 170 °C en centaines de composés aromatiques. Plus il fonce, moins il est sucré et plus il devient amer. Autour de 180 °C, couleur acajou, l’équilibre est bon pour un plat salé ; au-delà, il carbonise et l’amertume devient âcre.",
    },
    {
      title: "Le nuoc-mâm, sel et profondeur",
      text: "Le nuoc-mâm est obtenu en faisant fermenter du poisson, souvent de l’anchois, avec du sel. Il apporte à la fois le sel du plat et beaucoup de glutamate, la molécule du goût umami. Son odeur forte vient de composés volatils, qui s’évaporent en partie dès qu’il touche la cocotte chaude.",
    },
    {
      title: "D’où vient la sauce laquée",
      text: "La couenne et le gras de la poitrine contiennent beaucoup de collagène. Après plus d’une heure de mijotage, il se transforme en gélatine. En réduisant, l’eau s’évapore et la gélatine se concentre avec le caramel : c’est ce mélange qui rend la sauce collante et brillante. À ce stade, la viande est cuite à cœur depuis longtemps.",
    },
  ],
  tips: [
    "Choisissez une poitrine où le maigre et le gras sont à peu près à parts égales : trop grasse, le plat devient lourd ; trop maigre, la sauce ne laque pas.",
    "Une cocotte à fond clair, en inox ou émaillée, aide beaucoup : on juge bien mieux la couleur du caramel que sur une fonte noire.",
    "Ne salez pas : le nuoc-mâm s’en charge. Goûtez seulement à la fin, quand la sauce a réduit.",
    "Faites-le la veille si vous pouvez. Au réfrigérateur, le gras fige en surface et se retire d’un coup de cuillère, et la sauce gagne en rondeur.",
  ],
  mistakes: [
    "Arrêter le caramel trop tôt, encore blond : le plat est sucré et plat, sans la pointe amère qui équilibre le nuoc-mâm. Attendez la couleur acajou et la première fumée.",
    "Le laisser brûler : noir et âcre, il rend tout le plat amer. Il n’y a pas de rattrapage, lavez la cocotte et recommencez, cela ne coûte que 70 g de sucre.",
    "Remuer le sucre à la cuillère pendant qu’il fond : il cristallise en grumeaux. Faites plutôt tourner la cocotte.",
    "Garder le couvercle jusqu’au bout : la sauce reste liquide comme un bouillon. La dernière demi-heure se fait à découvert.",
  ],
  variations: [
    {
      title: "Avec des œufs durs",
      text: "Faites cuire 4 œufs 9 minutes à l’eau bouillante, refroidissez-les et écalez-les. Ajoutez-les avec l’eau chaude et retournez-les de temps en temps : ils prennent la couleur du caramel. Ajoutez alors 5 cl d’eau.",
    },
    {
      title: "À l’eau de coco",
      text: "Remplacez l’eau par 40 cl d’eau de coco nature, pas de lait de coco. La sauce est plus douce et plus ronde ; goûtez avant de rectifier, elle peut demander une goutte de nuoc-mâm en plus.",
    },
    {
      title: "Avec de l’échine",
      text: "Remplacez la poitrine par 800 g d’échine en cubes de 4 cm, pour un plat moins gras. La sauce laque un peu moins ; gardez les mêmes temps de cuisson.",
    },
    {
      title: "Relevé",
      text: "Ajoutez 1 ou 2 piments oiseaux fendus en même temps que l’ail et les échalotes, et retirez-les avant de servir.",
    },
  ],
  storage:
    "Il se garde 2 à 3 jours au réfrigérateur en boîte fermée, et il est souvent meilleur le lendemain. Il se congèle 3 mois, sans les œufs dont le blanc devient caoutchouteux ; ne le recongelez pas. Réchauffez-le à feu doux avec 2 cuillerées d’eau. Le riz cuit va au réfrigérateur dans les 2 heures et se mange dans les 24 heures.",
  pairing:
    "Le riz jasmin nature, et quelque chose de frais et croquant à côté : concombre en bâtonnets, pousses de soja, coriandre ou basilic thaï. Dans le verre, un thé vert ou une bière légère.",
  faq: [
    {
      q: "Quel morceau de porc pour le porc au caramel ?",
      a: "De la poitrine, idéalement, pour son alternance de gras et de maigre qui fond pendant la cuisson. L’échine fonctionne aussi, en version moins grasse. Évitez le filet et la longe, trop maigres : ils sèchent pendant une cuisson aussi longue.",
    },
    {
      q: "Comment savoir si le caramel est assez foncé ?",
      a: "Il doit avoir la couleur de l’acajou ou d’un thé très infusé, avec une légère fumée et une odeur qui commence à tirer vers l’amer. Comptez 5 à 7 minutes sur feu moyen. S’il devient noir et sent l’âcre, il est brûlé.",
    },
    {
      q: "Peut-on remplacer le nuoc-mâm ?",
      a: "Non, pas vraiment : c’est lui qui donne au plat son sel et sa profondeur. Avec de la sauce soja claire, en même quantité, on obtient un porc braisé bon mais différent, plus proche d’un plat chinois.",
    },
    {
      q: "Pourquoi ma sauce reste-t-elle liquide ?",
      a: "Parce qu’elle n’a pas assez réduit. Laissez bouillonner doucement à découvert 10 à 15 minutes de plus, en remuant : elle est prête quand elle nappe la viande et forme de grosses bulles brillantes.",
    },
    {
      q: "Combien de temps se garde le porc au caramel ?",
      a: "2 à 3 jours au réfrigérateur, en boîte fermée, et 3 mois au congélateur sans les œufs. Réchauffez-le à feu doux avec un peu d’eau. Le riz cuit, lui, se range au frais dans les 2 heures et se mange dans les 24 heures.",
    },
    {
      q: "Peut-on ajouter des œufs durs ?",
      a: "Oui. Ajoutez 4 œufs durs écalés en même temps que l’eau, avec 5 cl d’eau en plus, et retournez-les de temps en temps pendant la cuisson : ils se teintent d’ambre et prennent le goût de la sauce.",
    },
  ],
  nutrition: { calories: 790, protein: 40, fat: 35, saturatedFat: 12, carbs: 80, sugar: 18, fiber: 2, sodium: 1150 },
  annotations: { hero: "caramel couleur acajou, pas noir", detail: "l’œuf dur prend la couleur du caramel" },
  images: {
    heroAlt:
      "Porc au caramel : cubes de poitrine de porc laqués dans une sauce ambrée et brillante, servis dans une assiette creuse",
    detailAlt: "Bol de porc au caramel avec un morceau de poitrine fondante et un œuf dur coloré par la sauce ambrée",
    credits: {
      hero: {
        photographer: "Vietnam Hidden Light",
        url: "https://www.pexels.com/photo/deliciously-braised-pork-belly-in-rich-sauce-34474143/",
      },
      detail: {
        photographer: "Baoothersks",
        url: "https://commons.wikimedia.org/w/index.php?curid=98667336",
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
    accent: "#D4772E",
    onAccent: "#1B1712",
    ink: "#8A3F0C",
    tint: "#FAEDE3",
    deep: "#1C0E07",
    focus: "45% 55%",
  },
});
