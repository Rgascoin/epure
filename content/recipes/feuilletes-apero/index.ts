import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "feuilletes-apero",
  title: "Feuilletés apéritif maison",
  seoTitle: "Feuilletés apéritif : 3 garnitures avec une pâte du commerce",
  tagline: "Trois rouleaux, trois garnitures, un plateau.",
  description:
    "Escargots lardons et fromage frais, roulés à la saucisse, torsades au comté : 70 feuilletés apéritif avec 3 rouleaux de pâte feuilletée pur beurre, en 1 h 55.",
  summary:
    "Pour 10 personnes, soit environ 70 bouchées, on garnit 3 rouleaux de pâte feuilletée pur beurre du commerce : un en escargots au fromage frais et aux lardons, un en roulés à la chair à saucisse, un en torsades au comté. 30 minutes au réfrigérateur avant de couper, puis four à 190 °C en chaleur tournante : 14 minutes pour les torsades, 25 pour les roulés, 18 pour les escargots, en deux fournées. Comptez 1 h 55 en tout.",
  intro: [
    "Les feuilletés de l’apéritif, ce sont ces bouchées qui disparaissent du plateau avant qu’on ait servi le deuxième verre. Ici, la pâte est achetée : une pâte feuilletée pur beurre, c’est-à-dire sans autre matière grasse que le beurre. On la reconnaît à la liste d’ingrédients, et elle gonfle mieux.",
    "Ce qui rate un feuilleté, c’est une pâte tiède. Le beurre ramollit, les couches se collent entre elles et la bouchée cuit à plat, grasse au lieu d’être croustillante.",
    "D’où la règle : on façonne vite, on remet au froid 30 minutes, et on coupe au dernier moment, avec un couteau bien aiguisé.",
  ],
  category: "Entrée",
  cuisine: "Française",
  keywords: [
    "feuilletés apéritif",
    "feuilletés apéro maison",
    "bouchées feuilletées apéritif",
    "escargots feuilletés apéritif",
    "roulés feuilletés à la saucisse",
    "torsades feuilletées au fromage",
    "apéritif pâte feuilletée",
    "feuilletés apéro à l’avance",
  ],
  servings: 10,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 40, cook: 43, rest: 30 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  tags: ["apero", "noel", "nouvel-an"],
  equipment: [
    "deux plaques de four de 30 x 40 cm",
    "papier cuisson",
    "un couteau-scie bien aiguisé",
    "un pinceau",
    "une poêle",
  ],
  ingredients: [
    {
      title: "La pâte et la dorure",
      items: [
        {
          qty: 3,
          unit: "rouleau",
          name: "pâte feuilletée pur beurre",
          note: "du commerce, 230 g chacun, rectangulaire de préférence",
          step: 1,
        },
        { qty: 1, name: "œuf", plural: "œufs", note: "battu avec une pincée de sel", step: 1 },
      ],
    },
    {
      title: "Escargots au fromage frais et aux lardons",
      items: [
        { qty: 150, unit: "g", name: "lardons fumés", note: "en allumettes fines", step: 10 },
        { qty: 100, unit: "g", name: "fromage frais nature", note: "à température ambiante", step: 10 },
        { name: "poivre du moulin" },
      ],
    },
    {
      title: "Roulés à la saucisse",
      items: [
        { qty: 250, unit: "g", name: "chair à saucisse", step: 10 },
        { qty: 2, unit: "cac", name: "moutarde de Dijon", step: 1 },
        { qty: 2, unit: "brin", name: "thym frais", note: "effeuillé", step: 1 },
        { qty: 1, unit: "cac", name: "graines de fenouil", optional: true, step: 0.5 },
      ],
    },
    {
      title: "Torsades au comté",
      items: [
        { qty: 60, unit: "g", name: "comté", note: "finement râpé", step: 10 },
        { qty: 0.5, unit: "cac", name: "paprika doux", step: 0.25 },
      ],
    },
  ],
  method: [
    {
      title: "Préparer les garnitures",
      steps: [
        {
          title: "Revenir les lardons",
          text: "Faites revenir les lardons dans la poêle sans matière grasse, sur feu moyen, 5 minutes, jusqu’à ce que leur gras devienne translucide et qu’ils commencent à dorer. Égouttez-les sur du papier absorbant et laissez-les refroidir.",
          timer: { minutes: 5, label: "Lardons à la poêle" },
        },
        {
          title: "Assaisonner la saucisse",
          text: "Dans un bol, écrasez la chair à saucisse à la fourchette avec la moutarde et le thym. Sortez les rouleaux de pâte du réfrigérateur 10 minutes avant de les dérouler : froide mais souple, la pâte ne casse pas.",
          timer: { minutes: 10, label: "Pâte hors du frigo" },
        },
      ],
    },
    {
      title: "Façonner",
      steps: [
        {
          title: "Rouler les escargots",
          text: "Déroulez un premier rouleau sur son papier. Tartinez le fromage frais en laissant 2 cm nus le long d’un grand côté, parsemez de lardons froids et poivrez. Roulez serré vers le bord nu, mouillez-le d’un peu d’eau et pressez pour souder. Enveloppez le boudin dans son papier.",
          tip: "Des lardons encore chauds font fondre le beurre de la pâte avant même la cuisson. Attendez qu’ils soient froids.",
        },
        {
          title: "Former les roulés",
          text: "Coupez le deuxième rouleau en deux bandes dans la longueur. Posez un boudin de chair à saucisse de 2 cm de diamètre le long de chaque bande, badigeonnez le bord libre d’œuf battu, puis roulez pour enfermer la farce, soudure dessous.",
        },
        {
          title: "Torsader au comté",
          text: "Déroulez le troisième rouleau, badigeonnez-le d’œuf battu et couvrez la moitié de comté et de paprika. Rabattez l’autre moitié par-dessus et appuyez au rouleau. Coupez des bandes de 1 cm, torsadez chacune en tournant les deux bouts en sens inverse et posez-les sur une plaque garnie de papier cuisson.",
        },
        {
          title: "Raffermir au froid",
          text: "Placez les deux boudins et la plaque de torsades 30 minutes au réfrigérateur : la pâte doit redevenir ferme sous le doigt. Pendant ce temps, préchauffez le four à 190 °C, chaleur tournante.",
          timer: { minutes: 30, label: "Feuilletés au froid" },
          tip: "Une pâte froide se coupe net et ses couches restent séparées : c’est ce qui la fait gonfler au four.",
        },
      ],
    },
    {
      title: "Cuire",
      steps: [
        {
          title: "Couper les roulés",
          text: "Au couteau-scie, coupez les roulés en tronçons de 3 cm et entaillez-les deux fois sur le dessus. Posez-les sur la seconde plaque garnie de papier cuisson, espacés de 3 cm. Dorez le dessus des roulés et des torsades à l’œuf battu, puis parsemez les roulés de graines de fenouil.",
        },
        {
          title: "Cuire roulés et torsades",
          text: "Enfournez les deux plaques sur deux niveaux pour 14 minutes. Les torsades sont dorées et le comté forme de petites dentelles brunes sur les bords : sortez-les et faites-les glisser sur une grille avec leur papier. Chaudes, elles cassent ; laissez-les durcir en refroidissant.",
          timer: { minutes: 14, label: "Roulés et torsades" },
        },
        {
          title: "Finir les roulés",
          text: "Laissez les roulés 11 minutes de plus, soit 25 minutes en tout. La pâte est brun doré, la farce grésille et n’est plus rosée au centre quand on en ouvre un. Pendant ce temps, coupez le boudin d’escargots en tranches de 1 cm et posez-les à plat sur une feuille de papier cuisson, espacés de 3 cm.",
          timer: { minutes: 11, label: "Fin des roulés" },
          tip: "Le boudin d’escargots attend au réfrigérateur jusqu’à ce moment : plus il est froid, plus les spirales restent nettes.",
        },
        {
          title: "Cuire les escargots",
          text: "Faites glisser la feuille d’escargots sur la plaque libérée, dorez le dessus à l’œuf et enfournez 18 minutes. Ils sont prêts quand ils ont gonflé, que le dessus est doré et que le dessous est sec et blond.",
          timer: { minutes: 18, label: "Escargots au four" },
          tip: "Ne badigeonnez pas les côtés coupés : l’œuf colle les couches entre elles et la pâte ne monte plus.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi la pâte feuilletée gonfle",
      text: "La pâte feuilletée superpose des centaines de couches de pâte et de beurre. Au four, l’eau de la pâte et du beurre se transforme en vapeur et écarte les couches, que la chaleur fige ensuite. Si le beurre a fondu avant d’entrer au four, les couches se soudent et rien ne se soulève.",
    },
    {
      title: "La dorure à l’œuf",
      text: "Les protéines et les sucres de l’œuf brunissent à la chaleur par la réaction de Maillard, ce qui donne au dessus sa couleur brillante. Une pincée de sel fluidifie l’œuf battu, qui s’étale plus finement au pinceau.",
    },
    {
      title: "Pourquoi le comté fait des dentelles",
      text: "Un fromage à pâte pressée cuite comme le comté contient peu d’eau. Au four, sa matière grasse fond et ses protéines dorent sans détremper la pâte, ce qui donne ces bords croustillants.",
    },
  ],
  tips: [
    "Lisez l’étiquette : une pâte « pur beurre » n’a pas d’autre matière grasse que le beurre. Les autres contiennent de la margarine ou des huiles végétales, et ont moins de goût.",
    "Si la pâte ramollit pendant le façonnage, remettez-la 10 minutes au réfrigérateur plutôt que de forcer. Elle se travaille mieux froide.",
    "Pour des escargots bien ronds, roulez le boudin dans son papier et serrez-le comme un bonbon avant de le mettre au froid.",
    "Si votre four chauffe inégalement, intervertissez les deux plaques à mi-cuisson.",
  ],
  mistakes: [
    "Couper les boudins tièdes : le couteau écrase les spirales, qui s’ouvrent au four. Trente minutes de froid suffisent.",
    "Trop garnir les escargots : le fromage déborde, brûle sur la plaque et la pâte reste molle au centre. Une couche fine suffit.",
    "Sortir les roulés à la saucisse trop tôt parce que la pâte est dorée : la farce doit être cuite à cœur, sans rose au centre. Ouvrez-en un pour vérifier.",
    "Empiler les feuilletés encore chauds dans une boîte : la vapeur les ramollit. Laissez-les refroidir à plat, sur une grille.",
  ],
  variations: [
    {
      title: "Escargots au pesto",
      text: "Remplacez le fromage frais et les lardons par 80 g de pesto au basilic et 30 g de parmesan râpé. Même façonnage, même cuisson de 18 minutes.",
    },
    {
      title: "Allumettes à l’anchois",
      text: "À la place des torsades, étalez 50 g de tapenade ou une dizaine de filets d’anchois émiettés sur la moitié du rouleau, rabattez, coupez en bâtonnets de 1 x 8 cm sans les torsader et cuisez 12 minutes.",
    },
    {
      title: "Version végétarienne",
      text: "Remplacez la chair à saucisse par 200 g de chèvre frais mélangé à 50 g de noix concassées et une cuillère à café de miel. Les roulés cuisent alors en 18 minutes, comme les escargots. Les noix sont des fruits à coque : prévenez vos invités.",
    },
  ],
  storage:
    "Cuits, les feuilletés se gardent 2 jours au réfrigérateur dans une boîte hermétique ; réchauffez-les 6 à 8 minutes au four à 180 °C, jamais au micro-ondes. Crus et façonnés, les boudins d’escargots et de roulés se congèlent 2 mois : coupez-les encore gelés et ajoutez 5 minutes de cuisson.",
  pairing: "Un vin blanc sec et vif, comme un mâcon ou un chablis, ou un crémant d’Alsace.",
  faq: [
    {
      q: "Peut-on préparer les feuilletés apéritif la veille ?",
      a: "Oui, de deux façons. Soit vous les façonnez la veille et gardez les boudins au réfrigérateur, bien filmés, pour les couper et les cuire le jour même. Soit vous les cuisez la veille et les réchauffez 6 à 8 minutes à 180 °C juste avant de servir.",
    },
    {
      q: "Comment réchauffer des feuilletés apéritif ?",
      a: "6 à 8 minutes au four à 180 °C, sur une plaque, sans les couvrir. Le micro-ondes les rend mous et élastiques en quelques secondes.",
    },
    {
      q: "Peut-on congeler des feuilletés apéritif ?",
      a: "Oui, de préférence crus. Congelez les boudins entiers, bien emballés, jusqu’à 2 mois. Coupez-les encore gelés, dorez-les et ajoutez 5 minutes à la cuisson. Cuits puis congelés, ils perdent un peu de croustillant.",
    },
    {
      q: "Quelle température de four pour une pâte feuilletée ?",
      a: "190 °C en chaleur tournante, ou 200 °C en chaleur traditionnelle. En dessous, le beurre fond avant que la vapeur ait soulevé les couches et la pâte reste grasse.",
    },
    {
      q: "Pâte feuilletée ronde ou rectangulaire pour les feuilletés ?",
      a: "Rectangulaire si vous avez le choix : les boudins sont réguliers d’un bout à l’autre. Avec une pâte ronde, recoupez un grand carré et utilisez les chutes pour les torsades.",
    },
    {
      q: "Combien de feuilletés prévoir par personne ?",
      a: "6 à 8 bouchées par personne quand il y a d’autres choses à grignoter. Cette recette en donne environ 70, de quoi servir 10 personnes.",
    },
  ],
  nutrition: {
    calories: 446,
    protein: 12.9,
    fat: 31.6,
    saturatedFat: 17.4,
    carbs: 26,
    sugar: 0.8,
    fiber: 1,
    sodium: 715,
  },
  annotations: { hero: "couper la pâte bien froide", detail: "farce cuite à cœur" },
  images: {
    heroAlt:
      "Escargots feuilletés au fromage frais et aux lardons, bien dorés, montrant leurs spirales de pâte feuilletée en gros plan",
    detailAlt:
      "Roulés feuilletés à la chair à saucisse parsemés de graines, alignés sur une plaque, la farce visible à chaque bout",
    credits: {
      hero: {
        photographer: "Pixabay",
        url: "https://www.pexels.com/photo/baked-breads-263070/",
      },
      detail: {
        photographer: "Rachel Claire",
        url: "https://www.pexels.com/photo/close-up-photo-of-croissant-5864610/",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#D9A04A",
    onAccent: "#1B1712",
    ink: "#855614",
    tint: "#FAF1E1",
    deep: "#18110A",
    focus: "55% 50%",
  },
});
