import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "coq-au-vin",
  title: "Coq au vin",
  seoTitle: "Coq au vin : la recette avec un poulet fermier",
  tagline: "Un poulet fermier fera très bien l’affaire.",
  description:
    "Coq au vin au poulet fermier : 75 cl de vin rouge, lardons, champignons et petits oignons, une heure de mijotage et une sauce liée au beurre manié.",
  summary:
    "Pour 6 personnes, faites dorer un poulet fermier de 2,2 kg coupé en morceaux après les lardons, les champignons et les petits oignons, puis faites-le mijoter à couvert dans 75 cl de vin rouge : 30 minutes pour les cuisses seules, 25 de plus avec les blancs et la garniture. La sauce réduite se lie au beurre manié. Comptez 2 h 20, dont 35 minutes de préparation ; la marinade de la veille est facultative.",
  intro: [
    "Le coq au vin se faisait avec un vieux coq, une bête ferme qu’il fallait mijoter des heures dans le vin pour l’attendrir. Aujourd’hui, en trouver un demande de passer commande chez un volailler. Un gros poulet fermier coupé en morceaux donne une sauce aussi sombre, en une heure de cuisson.",
    "Ce qui le fait rater, c’est de traiter tous les morceaux pareil. Les cuisses aiment mijoter, les blancs sèchent dès qu’on les oublie. On commence donc par les cuisses, et les blancs les rejoignent à mi-parcours avec les lardons, les champignons et les petits oignons.",
    "À la fin, on fait réduire la sauce et on la lie avec un peu de beurre manié. Elle devient brillante, elle nappe la cuillère, et c’est le moment de couper le pain.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "coq au vin",
    "recette coq au vin",
    "coq au vin traditionnel",
    "coq au vin avec un poulet",
    "coq au vin poulet fermier",
    "quel vin pour un coq au vin",
    "temps de cuisson coq au vin",
    "coq au vin en cocotte",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 35, cook: 105 },
  difficulty: "Intermédiaire",
  cost: "€€",
  season: ["Automne", "Hiver"],
  tags: ["hiver", "automne", "fete-des-peres"],
  equipment: [
    "cocotte en fonte de 5 à 6 l avec couvercle",
    "écumoire",
    "thermomètre à sonde",
    "saladier (pour la marinade)",
    "papier absorbant",
  ],
  ingredients: [
    {
      title: "Le poulet et ses aromates",
      items: [
        {
          qty: 2.2,
          unit: "kg",
          name: "poulet fermier",
          note: "coupé en 8 morceaux, ou un vrai coq (voir la FAQ)",
          step: 0.1,
        },
        { qty: 75, unit: "cl", name: "vin rouge", note: "fruité et peu boisé : bourgogne, côtes-du-rhône", step: 5 },
        { qty: 1, name: "carotte", plural: "carottes", note: "en rondelles", step: 1 },
        { qty: 1, name: "oignon", plural: "oignons", note: "émincé", step: 1 },
        { qty: 2, unit: "gousse", name: "ail", note: "écrasées", step: 1 },
        { qty: 1, name: "bouquet garni", plural: "bouquets garnis", note: "thym, laurier, queues de persil", step: 1 },
      ],
    },
    {
      title: "La garniture",
      items: [
        { qty: 200, unit: "g", name: "lardons fumés", step: 10 },
        { qty: 18, name: "petit oignon grelot", plural: "petits oignons grelots", note: "épluchés", step: 1 },
        { qty: 250, unit: "g", name: "champignons de Paris", note: "petits, entiers ou coupés en deux", step: 10 },
      ],
    },
    {
      title: "La cuisson et la sauce",
      items: [
        { qty: 2, unit: "cas", name: "huile neutre", step: 1 },
        { qty: 40, unit: "g", name: "beurre", note: "20 g pour dorer, 20 g mou pour la liaison", step: 5 },
        { qty: 25, unit: "cl", name: "bouillon de volaille", note: "peu salé", step: 5 },
        { qty: 20, unit: "g", name: "farine", step: 5 },
        { name: "sel et poivre du moulin" },
        { qty: 2, unit: "cas", name: "persil plat", note: "ciselé", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "La veille : la marinade (facultative)",
      steps: [
        {
          title: "Mariner le poulet",
          text: "Mettez les morceaux de poulet dans un saladier avec la carotte, l’oignon, l’ail et le bouquet garni, versez le vin par-dessus et laissez 6 à 12 heures au frigo. Le lendemain, égouttez en gardant le vin d’un côté, les légumes de l’autre.",
          timer: { minutes: 720, label: "Marinade (facultative)" },
        },
      ],
    },
    {
      title: "Dorer",
      steps: [
        {
          title: "Dorer la garniture",
          text: "Dans la cocotte à sec, sur feu moyen, faites rissoler les lardons 5 minutes. Ajoutez les petits oignons et les champignons et laissez-les dorer 8 à 10 minutes en remuant de temps en temps, jusqu’à ce que les oignons soient blonds par endroits. Réservez le tout dans une assiette en laissant le gras dans la cocotte.",
          timer: { minutes: 15, label: "Lardons et garniture" },
        },
        {
          title: "Sécher le poulet",
          text: "Épongez soigneusement chaque morceau au papier absorbant, surtout s’il sort de la marinade, puis salez et poivrez.",
          tip: "Une peau mouillée colle à la cocotte et ne dore pas : elle cuit dans sa vapeur. Prenez le temps de bien sécher.",
        },
        {
          title: "Saisir le poulet",
          text: "Ajoutez l’huile et 20 g de beurre au gras des lardons, sur feu moyen-vif. Posez les morceaux côté peau en dessous, en deux fournées, et laissez-les 5 minutes sans y toucher, puis 3 minutes de l’autre côté. La peau doit être dorée et se décoller seule.",
          timer: { minutes: 8, label: "Coloration (une fournée)" },
        },
        {
          title: "Aromates et vin",
          text: "Baissez le feu, ajoutez la carotte, l’oignon et l’ail et faites-les revenir 5 minutes. Versez le vin, grattez les sucs au fond et faites bouillir 5 minutes à découvert : l’odeur d’alcool s’atténue et le vin fonce.",
          timer: { minutes: 10, label: "Aromates et vin" },
        },
      ],
    },
    {
      title: "Mijoter et lier",
      steps: [
        {
          title: "Mijoter les cuisses",
          text: "Remettez dans la cocotte les cuisses et les hauts de cuisse avec le bouquet garni et le bouillon : le liquide doit presque les couvrir. Couvrez et laissez frémir 30 minutes sur feu doux, avec quelques bulles lentes en surface, pas plus.",
          timer: { minutes: 30, label: "Cuisses seules" },
          tip: "Les blancs attendent sur l’assiette. Ils cuisent plus vite que les cuisses et sèchent s’ils mijotent une heure.",
        },
        {
          title: "Ajouter blancs et garniture",
          text: "Ajoutez les blancs, les lardons, les oignons et les champignons, couvrez et poursuivez 25 minutes. Les cuisses sont prêtes quand la chair se détache de l’os ; les blancs, quand le thermomètre affiche 74 °C dans leur partie la plus épaisse.",
          timer: { minutes: 25, label: "Blancs et garniture" },
        },
        {
          title: "Réduire la sauce",
          text: "Sortez le poulet et la garniture à l’écumoire dans un plat chaud et couvrez. Retirez le bouquet garni. Faites bouillir la sauce à découvert 5 à 8 minutes, jusqu’à ce qu’elle ait réduit de moitié environ.",
          timer: { minutes: 8, label: "Réduction de la sauce" },
        },
        {
          title: "Lier au beurre manié",
          text: "Écrasez à la fourchette 20 g de beurre mou avec la farine. Fouettez cette pâte dans la sauce frémissante, par petits morceaux, et laissez cuire 2 minutes : la sauce devient brillante et nappe le dos d’une cuillère. Goûtez, salez, remettez le poulet et la garniture, parsemez de persil.",
          timer: { minutes: 2, label: "Liaison" },
          tip: "Ajoutez la pâte petit à petit et arrêtez quand la consistance vous plaît. Une sauce trop épaisse se rattrape avec un trait de bouillon.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Les cuisses et les blancs",
      text: "Les cuisses sont riches en collagène, qui se transforme lentement en gélatine quand il reste longtemps au-dessus de 70 °C environ : la chair devient fondante. Les blancs en contiennent très peu ; une fois cuits, ils ne font que perdre leur eau. D’où la cuisson en deux temps.",
    },
    {
      title: "Le beurre manié",
      text: "Enrober la farine de beurre sépare ses grains : ils se dispersent dans la sauce chaude sans faire de grumeaux. L’amidon gonfle et épaissit quand la sauce frémit, et deux minutes de cuisson suffisent à effacer le goût de farine crue.",
    },
    {
      title: "Ce qui reste de l’alcool",
      text: "Une partie de l’alcool s’évapore pendant l’ébullition et le mijotage, mais pas tout. D’après les tables de rétention de l’USDA, il en reste environ un quart après une heure de mijotage.",
    },
  ],
  tips: [
    "Demandez au volailler de couper le poulet et gardez la carcasse. Avec un oignon et une carotte, elle donne le bouillon de la recette.",
    "Choisissez un vin que vous boiriez volontiers. Le bois et les tanins se concentrent à la réduction et rendent la sauce âpre.",
    "Préparez-le la veille si vous pouvez. Au frigo, le gras remonte et fige : il s’enlève à la cuillère avant de réchauffer.",
    "Pour une sauce plus lisse, passez-la au chinois avant de la lier, en pressant bien les légumes.",
  ],
  mistakes: [
    "Mettre tout le poulet dans la cocotte d’un coup. La température chute, les morceaux rendent leur eau et bouillent au lieu de dorer ; travaillez en deux fournées.",
    "Laisser bouillir à gros bouillons. La chair se resserre et devient filandreuse ; un frémissement à peine visible suffit.",
    "Jeter le beurre manié d’un bloc dans la sauce. Il fait des grumeaux ; s’il y en a, passez la sauce au chinois et recommencez par petits morceaux.",
    "Saler au début. Les lardons et la réduction concentrent le sel : goûtez seulement après la liaison.",
  ],
  variations: [
    {
      title: "Avec un vrai coq",
      text: "Pour un coq de 3 kg, mariné une nuit, faites mijoter tous les morceaux ensemble 2 h à 2 h 30 avec 25 cl de bouillon en plus. La garniture rejoint la cocotte pour les 25 dernières minutes.",
    },
    {
      title: "Au riesling",
      text: "Remplacez le vin rouge par 75 cl de riesling et finissez la sauce avec 20 cl de crème au lieu du beurre manié. Elle sera blonde et plus douce.",
    },
    {
      title: "Avec des hauts de cuisse",
      text: "12 hauts de cuisse avec la peau remplacent le poulet entier. Ils mijotent tous ensemble 45 minutes, la garniture ajoutée pour les 25 dernières.",
    },
  ],
  storage:
    "Il se garde 2 jours au frigo dans une boîte fermée et 3 mois au congélateur. Réchauffez-le à couvert sur feu doux jusqu’à ce que la sauce frémisse et que le poulet soit chaud à cœur. Ne le recongelez pas.",
  pairing:
    "Des pommes de terre vapeur, des tagliatelles fraîches ou une purée pour la sauce. Dans le verre, le vin de la cuisson, ou un bourgogne rouge.",
  faq: [
    {
      q: "Peut-on faire un coq au vin avec un poulet ?",
      a: "Oui. Un vrai coq est rare et se commande chez un volailler. Un gros poulet fermier de 2 à 2,5 kg donne une sauce aussi riche et une chair plus tendre, en une heure de mijotage au lieu de deux à deux heures et demie.",
    },
    {
      q: "Quel vin choisir pour un coq au vin ?",
      a: "Un rouge fruité, peu tannique et peu boisé : un bourgogne, un côtes-du-rhône ou un vin de Loire comme un chinon. Les vins très boisés laissent une amertume que la réduction accentue.",
    },
    {
      q: "Combien de temps faut-il cuire un coq au vin ?",
      a: "55 minutes de mijotage pour un poulet fermier : 30 minutes pour les cuisses seules, puis 25 avec les blancs. Un vrai coq demande 2 h à 2 h 30.",
    },
    {
      q: "À quelle température le poulet est-il cuit ?",
      a: "74 °C à cœur, mesurés dans la partie la plus épaisse des blancs. Les cuisses, qui mijotent plus longtemps, dépassent largement cette température ; elles sont prêtes quand la chair se détache de l’os.",
    },
    {
      q: "Reste-t-il de l’alcool dans un coq au vin ?",
      a: "Oui, un peu. Environ un quart de l’alcool du vin reste après une heure de mijotage, selon les tables de l’USDA. Pour les jeunes enfants et les femmes enceintes, mieux vaut choisir un autre plat.",
    },
    {
      q: "Quelle différence entre le coq au vin et le bœuf bourguignon ?",
      a: "La viande, et donc le temps. Le coq au vin mijote environ une heure sur le feu, le bœuf bourguignon trois heures au four. Les deux partagent le vin rouge, les lardons, les champignons et les petits oignons.",
    },
    {
      q: "Peut-on préparer le coq au vin la veille ?",
      a: "Oui. Une nuit au frigo arrondit la sauce et permet de retirer le gras figé. Il se garde 2 jours ; réchauffez-le doucement, à couvert.",
    },
  ],
  nutrition: { calories: 575, protein: 48, fat: 38, saturatedFat: 13, carbs: 9, sugar: 4, fiber: 2, sodium: 950 },
  annotations: { hero: "les petits oignons arrivent à mi-cuisson", detail: "la cuisse se détache de l’os" },
  images: {
    heroAlt:
      "Coq au vin dans un plat blanc : morceaux de poulet en sauce brune, petits oignons, champignons et romarin",
    detailAlt:
      "Cuisse de coq au vin nappée de sauce dans un bol blanc, salade de roquette à côté sur une table en bois",
    credits: {
      hero: {
        photographer: "Beck from East Midlands, United Kingdon",
        url: "https://commons.wikimedia.org/wiki/File:Gourmet_coq_au_vin.jpg",
        source: "Wikimedia Commons",
        license: "CC BY 2.0",
      },
      detail: {
        photographer: "jules",
        url: "https://commons.wikimedia.org/wiki/File:Coq_au_vin_with_greens.jpg",
        source: "Wikimedia Commons",
        license: "CC BY 2.0",
      },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#7B2D4B",
    onAccent: "#ffffff",
    ink: "#7B2D4B",
    tint: "#F6ECF0",
    deep: "#1A0A11",
    focus: "45% 45%",
  },
});
