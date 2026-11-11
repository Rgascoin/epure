import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "veloute-de-potimarron",
  title: "Velouté de potimarron",
  seoTitle: "Velouté de potimarron : recette facile, sans éplucher",
  tagline: "La peau reste, le mixeur s’en charge.",
  description:
    "Velouté de potimarron maison, sans éplucher la courge : un oignon, du bouillon, 100 ml de crème et 2 minutes de mixeur. Pour 6, prêt en 50 minutes.",
  summary:
    "Pour 6 personnes, le velouté de potimarron se prépare en 50 minutes : faites suer un oignon dans 30 g de beurre, ajoutez 1,2 kg de potimarron en cubes, avec la peau, et couvrez de 900 ml de bouillon de légumes. Laissez frémir 20 à 25 minutes, ajoutez 100 ml de crème et une pincée de muscade, puis mixez au moins 2 minutes, jusqu’à ce que ce soit parfaitement lisse.",
  intro: [
    "Le velouté de potimarron est la soupe d’automne la plus simple qu’on connaisse : une courge, un oignon, du bouillon et un peu de crème. Le potimarron fait presque tout le travail. Sa chair est dense, peu aqueuse, avec un goût de châtaigne, et sa peau fine cuit en même temps qu’elle. Inutile de l’éplucher.",
    "Ce qui fait un bon velouté, c’est la texture. Juste assez de bouillon pour couvrir les cubes, pas plus, et un mixage plus long que vous ne l’imaginez : au moins deux minutes au mixeur plongeant, jusqu’à ce que la peau ait complètement disparu.",
    "Deux choses peuvent rater : un velouté trop liquide si on noie les légumes, et un goût âcre si l’oignon colore. La seconde s’évite en restant à feu doux, la première se rattrape en laissant réduire.",
  ],
  category: "Entrée",
  cuisine: "Française",
  keywords: [
    "velouté de potimarron",
    "soupe de potimarron",
    "velouté de potimarron facile",
    "velouté potimarron sans éplucher",
    "velouté de potimarron à la crème",
    "soupe potimarron mixeur",
    "velouté de courge",
    "potimarron recette soupe",
  ],
  diet: ["vegetarian"],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 15, cook: 35 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["automne", "hiver", "halloween"],
  equipment: [
    "cocotte ou faitout de 4 l avec couvercle",
    "mixeur plongeant (ou blender)",
    "grand couteau de chef",
    "brosse à légumes",
    "petite poêle",
  ],
  ingredients: [
    {
      title: "Le velouté",
      items: [
        { qty: 1200, unit: "g", name: "potimarron", note: "un petit potimarron entier, lavé, avec la peau", step: 100 },
        { qty: 1, name: "oignon jaune", plural: "oignons jaunes", note: "émincé", step: 0.5 },
        { qty: 30, unit: "g", name: "beurre doux", step: 5 },
        { name: "sel fin" },
        {
          qty: 900,
          unit: "ml",
          name: "bouillon de légumes",
          note: "chaud ; maison, ou un cube délayé dans l’eau",
          step: 50,
        },
        { qty: 100, unit: "ml", name: "crème liquide entière", note: "30 % de matière grasse", step: 10 },
        { qty: 1, unit: "pincee", name: "noix de muscade", note: "râpée", step: 1 },
        { name: "poivre du moulin" },
      ],
    },
    {
      title: "Pour servir",
      items: [
        { qty: 30, unit: "g", name: "graines de courge", note: "décortiquées", step: 5, optional: true },
        { qty: 50, unit: "ml", name: "crème liquide entière", step: 10, optional: true },
      ],
    },
  ],
  method: [
    {
      title: "Préparation",
      steps: [
        {
          title: "Préparer le potimarron",
          text: "Lavez le potimarron en frottant la peau à la brosse, puis posez-le sur un torchon pour qu’il ne roule pas. Coupez le pédoncule, tranchez-le en deux de haut en bas et retirez graines et filaments à la cuillère. Taillez-le en cubes de 3 cm, sans l’éplucher : sa peau cuit aussi vite que la chair. Coupez seulement les parties abîmées ou terreuses.",
          tip: "S’il résiste au couteau, piquez-le de quelques coups de pointe et passez-le entier 2 minutes au micro-ondes. La peau s’assouplit et la lame entre sans forcer.",
        },
        {
          title: "Faire suer l’oignon",
          text: "Dans la cocotte, faites fondre le beurre à feu moyen-doux. Ajoutez l’oignon émincé et une pincée de sel, et laissez-le suer 5 minutes en remuant de temps en temps : il devient translucide et tendre, sans prendre de couleur.",
          timer: { minutes: 5, label: "Oignon" },
        },
        {
          title: "Cuire le potimarron",
          text: "Ajoutez les cubes de potimarron, remuez pour les enrober de beurre, puis versez le bouillon chaud : il doit tout juste les couvrir. Portez à ébullition à feu vif, baissez à feu moyen, couvrez et laissez frémir 20 à 25 minutes. C’est cuit quand la pointe d’un couteau traverse la peau sans résistance.",
          timer: { minutes: 22, label: "Cuisson du potimarron" },
          tip: "Juste couvrir, pas plus. Un velouté trop épais s’allonge en dix secondes ; un velouté trop liquide demande de le faire réduire.",
        },
        {
          title: "Mixer longuement",
          text: "Hors du feu, ajoutez 100 ml de crème et la muscade. Mixez au mixeur plongeant au moins 2 minutes, en promenant la tête dans toute la cocotte, jusqu’à ce que le velouté soit parfaitement lisse et qu’on ne voie plus aucun éclat de peau.",
          timer: { minutes: 2, label: "Mixage" },
          tip: "Au blender, mixez en deux fois, bol rempli à moitié, couvercle tenu avec un torchon : la vapeur du velouté brûlant peut le soulever.",
        },
        {
          title: "Rectifier la texture",
          text: "Goûtez, puis salez et poivrez. Le velouté doit napper le dos d’une cuillère. Trop épais, ajoutez de l’eau chaude ou du bouillon, 50 ml à la fois. Trop liquide, laissez-le réduire à découvert sur feu doux, en remuant. Gardez-le ensuite au chaud sur feu très doux.",
        },
        {
          title: "Griller les graines",
          text: "Si vous servez des graines de courge, faites-les griller dans une petite poêle sans matière grasse, à feu moyen, 3 à 4 minutes en secouant la poêle : elles gonflent, crépitent et sentent la noisette. Versez-les aussitôt dans une assiette pour arrêter la cuisson.",
          timer: { minutes: 3, label: "Graines de courge" },
        },
        {
          title: "Servir bien chaud",
          text: "Répartissez le velouté dans des bols chauds. Au moment de servir, ajoutez un filet de crème et les graines grillées, si vous en mettez, puis un tour de poivre.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi on garde la peau",
      text: "La peau du potimarron est fine, faite des mêmes fibres (cellulose et pectines) que la chair, en plus serré. En 20 minutes de frémissement, les pectines se dissolvent en partie et la peau s’attendrit comme le reste. Une fois mixée longuement, elle se disperse en particules trop fines pour être senties.",
    },
    {
      title: "D’où vient le velouté",
      text: "Le potimarron contient plus d’amidon et moins d’eau qu’un potiron. À la cuisson, cet amidon gonfle et les cellules se ramollissent ; le mixeur les fait éclater, et l’amidon libéré épaissit le liquide. La crème ajoute des gouttelettes de matière grasse qui donnent cette sensation lisse en bouche.",
    },
    {
      title: "Suer, pas dorer",
      text: "À feu doux, l’oignon cuit dans son eau et dans le beurre : tant qu’il rend de l’humidité, sa surface reste autour de 100 °C. Il s’adoucit et perd son piquant. À feu vif, il brunit par réaction de Maillard et caramélisation, ce qui donne un goût grillé et une teinte terne au velouté.",
    },
  ],
  tips: [
    "Choisissez un potimarron lourd pour sa taille, à la peau orange vif, sans taches molles, avec un pédoncule bien sec. Entier, il se garde plusieurs semaines dans un endroit frais et sec.",
    "Avec un bouillon en cube, ne salez qu’à la fin, après avoir goûté : le cube l’est déjà beaucoup.",
    "Une pincée de muscade, pas plus. Elle souligne le goût de châtaigne du potimarron ; au-delà, elle le masque.",
    "Pour une texture de restaurant, passez le velouté mixé au chinois ou dans une passoire fine en appuyant avec une louche.",
  ],
  mistakes: [
    "Éplucher le potimarron. C’est un quart d’heure de perdu et une lame qui glisse sur une peau dure, pour un velouté qui n’en sera pas plus lisse.",
    "Noyer les cubes sous le bouillon. Le velouté est clair, aqueux, et il faut ensuite le faire réduire longtemps.",
    "Laisser colorer l’oignon. Le velouté prend un goût de brûlé et une couleur brunâtre.",
    "Mixer trente secondes et s’arrêter. Il reste des fibres et des éclats de peau, et la texture est granuleuse.",
  ],
  variations: [
    {
      title: "Coco et gingembre",
      text: "Faites suer 15 g de gingembre frais râpé avec l’oignon et remplacez la crème par 150 ml de lait de coco (100 ml dans le velouté, 50 ml au service). Le goût s’éloigne de la recette française, mais l’accord est très bon.",
    },
    {
      title: "Avec des châtaignes",
      text: "Ajoutez 150 g de châtaignes cuites (en bocal ou sous vide) en même temps que le potimarron, et 100 ml de bouillon en plus. Le velouté est plus épais, plus boisé.",
    },
    {
      title: "Végétalien",
      text: "Remplacez le beurre par 2 cuillerées à soupe d’huile d’olive et la crème par de la crème d’avoine ou du lait de coco, en mêmes quantités. Vérifiez que votre bouillon ne contient aucun produit animal.",
    },
    {
      title: "Avec une butternut",
      text: "Elle remplace le potimarron à poids égal, mais épluchez-la : sa peau reste coriace. Elle est plus sucrée et plus aqueuse, alors commencez avec 700 ml de bouillon seulement.",
    },
  ],
  storage:
    "Il se garde 3 jours au réfrigérateur dans une boîte fermée, ou 3 mois au congélateur. Réchauffez-le à feu doux en remuant, jusqu’à ce qu’il frémisse, et allongez-le d’un peu d’eau s’il a épaissi.",
  pairing: "Un blanc sec et rond, un mâcon-villages ou un chenin de Loire, comme un vouvray sec.",
  faq: [
    {
      q: "Faut-il éplucher le potimarron pour faire un velouté ?",
      a: "Non. Sa peau est fine et cuit aussi vite que la chair. Lavez-la bien à la brosse, coupez seulement les parties abîmées, et mixez au moins 2 minutes : elle disparaît complètement et donne au velouté sa couleur orange vif.",
    },
    {
      q: "Comment couper un potimarron facilement ?",
      a: "Posez-le sur un torchon pour qu’il ne roule pas, coupez d’abord le pédoncule, puis enfoncez un grand couteau au centre et appuyez des deux mains sur le dos de la lame. S’il résiste, piquez-le et passez-le 2 minutes au micro-ondes : la peau s’attendrit.",
    },
    {
      q: "Mon velouté de potimarron est trop liquide, que faire ?",
      a: "Laissez-le réduire à découvert, sur feu doux, en remuant souvent, jusqu’à ce qu’il nappe la cuillère. La prochaine fois, versez juste assez de bouillon pour couvrir les cubes : on peut toujours allonger après le mixage.",
    },
    {
      q: "Le velouté de potimarron est-il végétarien ?",
      a: "Oui, avec un bouillon de légumes. Lisez quand même la liste d’ingrédients du cube : certains bouillons, même présentés comme « aux légumes », contiennent de la graisse ou de l’extrait de viande.",
    },
    {
      q: "Peut-on congeler un velouté de potimarron ?",
      a: "Oui, jusqu’à 3 mois, dans une boîte hermétique remplie aux trois quarts (il gonfle en gelant). Décongelez-le une nuit au réfrigérateur et réchauffez-le à feu doux. S’il a un peu tranché, un coup de mixeur le rend lisse.",
    },
    {
      q: "Quelle différence entre un velouté et une soupe ?",
      a: "Le velouté est mixé jusqu’à être parfaitement lisse et enrichi de crème (en cuisine classique, on le liait aussi au jaune d’œuf). Une soupe peut rester plus rustique, avec des morceaux.",
    },
    {
      q: "Peut-on remplacer le potimarron par du potiron ?",
      a: "Oui, mais épluchez le potiron, dont la peau est épaisse, et réduisez le bouillon d’environ 200 ml : sa chair est plus aqueuse. Le goût est plus doux, sans la note de châtaigne du potimarron.",
    },
  ],
  nutrition: {
    calories: 220,
    protein: 5,
    fat: 14,
    saturatedFat: 8,
    carbs: 16,
    sugar: 8,
    fiber: 4,
    sodium: 450,
  },
  annotations: {
    hero: "la peau, on la garde",
    detail: "mixer au moins deux minutes",
  },
  images: {
    heroAlt:
      "Velouté de potimarron orange vif dans un bol en grès, sur une table en bois sombre entourée de petits potimarrons",
    detailAlt: "Velouté de potimarron lisse en gros plan, avec des graines de courge et une cuillère dans le bol",
    credits: {
      hero: { photographer: "KATRIN BOLOVTSOVA", url: "https://www.pexels.com/photo/5662180/" },
      detail: { photographer: "Valeria Boltneva", url: "https://www.pexels.com/photo/1277483/" },
    },
  },
  datePublished: "2026-11-03",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#E8950F",
    onAccent: "#1b1712",
    ink: "#8A4B00",
    tint: "#FCF1DE",
    deep: "#1c1309",
    focus: "60% 57%",
  },
});
