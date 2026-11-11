import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "blanquette-de-veau",
  title: "Blanquette de veau à l’ancienne",
  seoTitle: "Blanquette de veau à l’ancienne, sauce liée à la crème",
  tagline: "Une sauce blanche qui nappe la cuillère.",
  description:
    "Blanquette de veau pour 6 : 1,5 kg d’épaule et de tendron cuits 1 h 30 dans leur bouillon, roux blanc, liaison crème et jaunes, champignons et oignons grelots.",
  summary:
    "Pour 6 personnes, blanchissez 1,5 kg d’épaule et de tendron de veau, puis cuisez-les 1 h 30 à frémissement avec carottes, poireau et oignon piqué. Montez un roux blanc avec 50 g de beurre et 50 g de farine, mouillez d’1 l de bouillon, ajoutez la viande, les champignons et les oignons grelots, puis liez hors du feu avec 20 cl de crème, 2 jaunes et un jus de citron. Comptez 2 h 30 en tout, dont 30 minutes de travail.",
  intro: [
    "La blanquette à l’ancienne, c’est du veau cuit dans un bouillon clair, sans jamais le faire dorer, puis servi dans une sauce faite avec ce même bouillon. Une sauce ivoire, liée au roux, puis enrichie de crème et de jaunes d’œufs.",
    "Le moment délicat arrive à la toute fin. Les jaunes épaississent la sauce entre 65 et 70 °C, mais s’ils bouillent, ils tournent en petits grains et la sauce devient granuleuse.",
    "D’où la règle : on lie toujours hors du feu, on tempère les jaunes avec une louche de sauce chaude, et on ne laisse plus rien bouillir.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "blanquette de veau",
    "recette blanquette de veau",
    "blanquette de veau à l’ancienne",
    "blanquette de veau traditionnelle",
    "quel morceau pour blanquette de veau",
    "sauce blanquette",
    "blanquette de veau crème jaune d’œuf",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 30, cook: 120 },
  difficulty: "Intermédiaire",
  cost: "€€€",
  season: ["Automne", "Hiver"],
  tags: ["hiver", "automne"],
  equipment: [
    "faitout de 6 l",
    "écumoire",
    "petite sauteuse avec couvercle",
    "passoire fine",
    "fouet",
  ],
  ingredients: [
    {
      title: "La viande et son bouillon",
      items: [
        { qty: 800, unit: "g", name: "épaule de veau", note: "en morceaux de 5 cm", step: 50 },
        { qty: 700, unit: "g", name: "tendron de veau", note: "en morceaux de 5 cm", step: 50 },
        { qty: 2, unit: "l", name: "eau froide", step: 0.5 },
        { qty: 2, name: "carotte", plural: "carottes", note: "coupées en tronçons de 4 cm", step: 1 },
        { qty: 1, name: "poireau", plural: "poireaux", note: "le blanc seulement, fendu en deux", step: 1 },
        { qty: 1, name: "branche de céleri", plural: "branches de céleri", step: 1 },
        { qty: 1, name: "oignon", plural: "oignons", note: "pelé, entier", fixed: true },
        { qty: 2, name: "clou de girofle", plural: "clous de girofle", fixed: true },
        { qty: 1, name: "bouquet garni", plural: "bouquets garnis", note: "thym, laurier, queues de persil", fixed: true },
        { qty: 1, unit: "cas", name: "gros sel", fixed: true },
        { qty: 10, name: "grain de poivre", plural: "grains de poivre", fixed: true },
      ],
    },
    {
      title: "La garniture",
      items: [
        { qty: 200, unit: "g", name: "oignons grelots", note: "pelés", step: 10 },
        { qty: 250, unit: "g", name: "petits champignons de Paris", note: "coupés en quatre s’ils sont gros", step: 10 },
        { qty: 20, unit: "g", name: "beurre", step: 5 },
      ],
    },
    {
      title: "La sauce",
      items: [
        { qty: 50, unit: "g", name: "beurre", step: 5 },
        { qty: 50, unit: "g", name: "farine", step: 5 },
        { qty: 20, unit: "cl", name: "crème fraîche épaisse", step: 1 },
        { qty: 2, name: "jaune d’œuf", plural: "jaunes d’œufs", step: 1 },
        { qty: 1, unit: "cas", name: "jus de citron", step: 0.5 },
        { name: "sel et poivre blanc" },
      ],
    },
  ],
  method: [
    {
      title: "Cuire la viande",
      steps: [
        {
          title: "Blanchir le veau",
          text: "Mettez la viande dans le faitout, couvrez largement d’eau froide et portez à ébullition sur feu vif. Dès que ça bout, laissez 2 minutes : une mousse grise remonte. Égouttez, rincez les morceaux sous l’eau froide et lavez le faitout.",
          timer: { minutes: 2, label: "Blanchiment" },
          tip: "Ce premier bouillon emporte le sang et les impuretés. C’est lui qui donne une viande et une sauce bien blanches, sans paillettes grises.",
        },
        {
          title: "Lancer le bouillon",
          text: "Remettez la viande dans le faitout avec les 2 l d’eau froide, les carottes, le poireau, le céleri, l’oignon piqué des clous de girofle, le bouquet garni, le gros sel et le poivre. Portez à frémissement, écumez, puis laissez cuire 1 h 30 à couvert, à tout petits bouillons. La viande est prête quand un couteau s’y enfonce sans résistance.",
          timer: { minutes: 90, label: "Cuisson du veau" },
        },
        {
          title: "Cuire la garniture",
          text: "Une demi-heure avant la fin, lancez la garniture (15 minutes en tout). Mettez les oignons grelots dans la petite sauteuse avec 20 g de beurre et une louche de bouillon, couvrez et laissez cuire 10 minutes à feu doux. Ajoutez les champignons et poursuivez 5 minutes à découvert, jusqu’à ce que le liquide ait presque disparu et que tout brille, sans colorer.",
          timer: { minutes: 15, label: "Grelots et champignons" },
        },
        {
          title: "Filtrer le bouillon",
          text: "Sortez la viande et les carottes à l’écumoire et gardez-les au chaud, à couvert. Passez le bouillon à la passoire fine et mesurez-en 1 l. Jetez le poireau, le céleri, l’oignon et le bouquet garni.",
        },
      ],
    },
    {
      title: "La sauce",
      steps: [
        {
          title: "Faire un roux blanc",
          text: "Dans le faitout rincé, faites fondre 50 g de beurre à feu moyen-doux, ajoutez la farine et fouettez 2 minutes. Le roux mousse et sent le biscuit, mais doit rester pâle.",
          timer: { minutes: 2, label: "Roux blanc" },
        },
        {
          title: "Mouiller au bouillon",
          text: "Versez le litre de bouillon chaud petit à petit en fouettant sans arrêt. Laissez frémir 10 minutes en remuant souvent, jusqu’à ce que la sauce nappe le dos d’une cuillère.",
          timer: { minutes: 10, label: "Sauce" },
        },
        {
          title: "Réunir le tout",
          text: "Ajoutez la viande, les carottes, les oignons grelots et les champignons dans la sauce. Réchauffez 5 minutes à feu doux, juste sous le frémissement.",
          timer: { minutes: 5, label: "Réchauffer" },
        },
        {
          title: "Lier hors du feu",
          text: "Dans un bol, mélangez la crème, les jaunes et le jus de citron. Retirez le faitout du feu. Versez une louche de sauce chaude dans le bol en fouettant, puis reversez le tout dans le faitout en remuant doucement. La sauce épaissit et devient brillante. Salez, poivrez et servez aussitôt, sans faire rebouillir.",
          tip: "Si la sauce est trop fluide, remettez sur feu très doux en remuant, sans jamais la laisser frémir. Au premier petit bouillon, les jaunes tournent.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi blanchir la viande",
      text: "Dans l’eau qui chauffe, les protéines solubles du sang et de la viande coagulent et remontent en écume grise. En les éliminant dans une première eau, on obtient un bouillon clair, donc une sauce blanche.",
    },
    {
      title: "Le roux, une liaison à l’amidon",
      text: "Cuite dans le beurre puis mouillée, la farine libère son amidon, qui gonfle autour de 60 à 70 °C et épaissit le bouillon. Un roux à peine cuit garde sa couleur pâle et son pouvoir liant.",
    },
    {
      title: "Les jaunes, une liaison fragile",
      text: "Les protéines du jaune d’œuf épaississent la sauce en coagulant vers 65 à 70 °C. Au-delà de 80 °C environ, elles se resserrent en grumeaux. La crème et l’amidon du roux les protègent un peu, mais pas d’une ébullition.",
    },
  ],
  tips: [
    "Mélangez deux morceaux : l’épaule apporte des morceaux nets, le tendron du moelleux et du gélatineux.",
    "Gardez le bouillon qui reste : il fait une excellente base de soupe, et il dépanne si la sauce épaissit trop au réchauffage.",
    "Préparez tout jusqu’à la sauce la veille, et ne faites la liaison crème et jaunes qu’au moment de servir.",
    "Le jus de citron se goûte à peine, mais il réveille la sauce. Ajoutez-en quelques gouttes de plus si elle vous semble plate.",
  ],
  mistakes: [
    "Faire bouillir la sauce après les jaunes : elle devient granuleuse. Si c’est arrivé, passez-la au mixeur plongeant hors du feu, elle redevient presque lisse.",
    "Laisser bouillir la viande à gros bouillons : elle se resserre, devient sèche et filandreuse, et le bouillon se trouble.",
    "Laisser blondir le roux : la sauce prend une teinte beige et un goût de noisette qui n’a rien à faire là.",
    "Verser les jaunes directement dans la sauce bouillante : ils cuisent instantanément en filaments. Il faut toujours les tempérer avec une louche de sauce d’abord.",
  ],
  variations: [
    {
      title: "Au four",
      text: "Après le blanchiment, faites cuire la viande et le bouillon à couvert au four à 150 °C pendant 1 h 45 au lieu d’1 h 30 sur le feu. Le frémissement reste régulier sans surveillance.",
    },
    {
      title: "Sans œufs",
      text: "Supprimez les jaunes et passez la crème à 30 cl. La sauce est un peu moins riche et moins jaune, mais elle supporte d’être réchauffée et même de frémir.",
    },
    {
      title: "Avec du tendron seul",
      text: "Prenez 1,6 kg de tendron, os compris, et prolongez la cuisson de 15 minutes. La viande est plus fondante et la sauce plus onctueuse grâce à la gélatine.",
    },
  ],
  storage:
    "Elle se garde 2 jours au réfrigérateur dans une boîte fermée, refroidie en moins de 2 heures. Réchauffez-la à feu très doux en remuant, sans la faire bouillir, avec un peu de bouillon si elle a épaissi. La congélation abîme la sauce liée aux jaunes : congelez plutôt la viande dans son bouillon (3 mois), faites la sauce le jour même et ne recongelez jamais un plat décongelé.",
  pairing:
    "Un riz blanc ou pilaf, cuit dans un peu du bouillon. Côté vin, un blanc sec et rond : un mâcon, un saint-véran ou un chablis.",
  faq: [
    {
      q: "Quel morceau de veau pour une blanquette ?",
      a: "L’épaule et le tendron, idéalement mélangés. On peut aussi utiliser le flanchet ou le collier. Ce sont des morceaux qui supportent une longue cuisson et restent moelleux. Évitez la noix et le quasi, trop maigres : ils sèchent.",
    },
    {
      q: "Faut-il blanchir la viande pour une blanquette ?",
      a: "Oui, si vous voulez une sauce bien blanche. Ce premier passage dans l’eau bouillante, 2 minutes seulement, élimine l’écume grise qui troublerait le bouillon.",
    },
    {
      q: "Pourquoi ma sauce blanquette a-t-elle tourné ?",
      a: "Parce qu’elle a bouilli après l’ajout des jaunes d’œufs. Ils coagulent en petits grains au-delà de 80 °C environ. Pour rattraper, mixez la sauce hors du feu au mixeur plongeant. La prochaine fois, liez hors du feu et ne laissez plus frémir.",
    },
    {
      q: "Combien de temps cuire une blanquette de veau ?",
      a: "1 h 30 à petit frémissement pour de l’épaule et du tendron en morceaux de 5 cm, un peu plus pour du tendron seul. La viande est prête quand un couteau la traverse sans résistance.",
    },
    {
      q: "Peut-on préparer une blanquette la veille ?",
      a: "Oui, en partie. Cuisez la viande et préparez la sauce jusqu’au roux mouillé, puis gardez le tout au frais. Le jour même, réchauffez doucement et faites la liaison crème et jaunes juste avant de servir.",
    },
    {
      q: "Peut-on faire une blanquette sans œufs ?",
      a: "Oui. Supprimez les jaunes et passez la crème à 30 cl. La sauce est un peu moins liée et moins dorée, mais elle se réchauffe sans risque de tourner.",
    },
  ],
  nutrition: { calories: 655, protein: 51, fat: 43, saturatedFat: 21, carbs: 15, sugar: 5, fiber: 2, sodium: 750 },
  annotations: { hero: "carottes fondantes, sauce ivoire", detail: "grelots et champignons restent pâles" },
  images: {
    heroAlt: "Assiette de blanquette de veau, morceaux de veau et dés de carotte nappés de sauce blanche crémeuse, riz blanc derrière",
    detailAlt: "Blanquette de veau en gros plan, veau, oignons, champignons et rondelles de carotte dans une sauce à la crème",
    credits: {
      hero: { photographer: "Dr. Bernd Gross", url: "https://commons.wikimedia.org/w/index.php?curid=72837783", source: "Wikimedia Commons", license: "CC BY-SA 3.0" },
      detail: { photographer: "Arnaud 25", url: "https://commons.wikimedia.org/w/index.php?curid=74032299", source: "Wikimedia Commons", license: "CC BY-SA 4.0" },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#E58A3A",
    onAccent: "#1B1712",
    ink: "#8A4A12",
    tint: "#FBF4EA",
    deep: "#1A120B",
    focus: "50% 50%",
  },
});
