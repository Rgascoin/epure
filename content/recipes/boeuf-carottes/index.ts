import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "boeuf-carottes",
  title: "Bœuf carottes",
  seoTitle: "Bœuf carottes sans vin, mijoté 2 h 30 en cocotte",
  tagline: "Le bourguignon, sans la bouteille.",
  description:
    "Bœuf carottes pour 6, sans vin : 1,2 kg de paleron mijoté 2 h 30 dans un bouillon, avec 1,2 kg de carottes en gros tronçons. Une cocotte, 30 minutes de travail.",
  summary:
    "Pour 6 personnes, faites dorer 1,2 kg de paleron ou de macreuse en cubes de 5 cm, puis les oignons, saupoudrez de farine et mouillez avec 1 l de bouillon. Laissez frémir 1 h à couvert, ajoutez 1,2 kg de carottes en gros tronçons et poursuivez 1 h 30, avant de réduire la sauce 10 minutes. Comptez 3 h 35 en tout, dont 30 minutes de travail, le tout dans une seule cocotte sur le feu.",
  intro: [
    "Du paleron qui mijote dans un bouillon avec des oignons, puis de grosses carottes qui finissent la cuisson avec lui et prennent le goût de la viande. Pas de vin, pas de marinade, pas de garniture à cuire à part : c’est un plat plus simple que le bœuf bourguignon, et tout se passe dans une seule cocotte.",
    "Ce qui le rate, c’est un feu trop fort. Un bouillon qui bout franchement durcit la viande, qui reste filandreuse même après trois heures. Il faut un frémissement à peine visible, une bulle ici, une bulle là.",
    "Les carottes n’arrivent qu’au bout d’une heure. Coupées en tronçons de 5 cm, elles deviennent fondantes sans tomber en purée.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "bœuf carottes",
    "recette bœuf carottes",
    "bœuf aux carottes",
    "bœuf carottes sans vin",
    "bœuf carottes en cocotte",
    "bœuf carottes paleron",
    "quel morceau pour bœuf carottes",
    "temps de cuisson bœuf carottes",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 30, cook: 185 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: ["cocotte en fonte de 5 l avec couvercle", "planche et grand couteau", "spatule en bois"],
  ingredients: [
    {
      title: "La viande",
      items: [
        { qty: 1200, unit: "g", name: "paleron ou macreuse de bœuf", note: "en cubes de 5 cm", step: 100 },
        { qty: 2, unit: "cas", name: "huile de tournesol", step: 1 },
        { qty: 2, name: "oignon", plural: "oignons", note: "300 g environ, émincés", step: 1 },
        { qty: 2, unit: "gousse", name: "ail", note: "écrasées", step: 1 },
        { qty: 1, unit: "cas", name: "concentré de tomate", step: 1 },
        { qty: 1, unit: "cas", name: "farine", step: 1 },
        { qty: 1000, unit: "ml", name: "bouillon de bœuf", note: "chaud, maison ou d’un cube peu salé", step: 100 },
        { qty: 1, name: "bouquet garni", plural: "bouquets garnis", note: "thym, laurier, queues de persil", step: 1, fixed: true },
        { name: "sel fin" },
        { name: "poivre noir" },
      ],
    },
    {
      title: "Les carottes",
      items: [
        { qty: 1200, unit: "g", name: "carotte", plural: "carottes", note: "en tronçons de 5 cm, les grosses fendues en deux", step: 100 },
        { qty: 4, unit: "brin", name: "persil plat", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "Le bœuf carottes",
      steps: [
        {
          title: "Préparer la viande",
          text: "Coupez la viande en cubes de 5 cm en gardant le gras et les nerfs, qui fondront à la cuisson. Séchez-les bien avec du papier absorbant : une viande humide bout au lieu de dorer. Épluchez les carottes et taillez-les en tronçons de 5 cm.",
        },
        {
          title: "Saisir en trois fois",
          text: "Chauffez l’huile dans la cocotte à feu vif. Faites dorer le tiers de la viande 4 à 5 minutes, sans la toucher pendant les deux premières, puis retournez les morceaux quand ils se décollent seuls. Réservez sur une assiette, salez, et recommencez avec le reste.",
          timer: { minutes: 5, label: "Une fournée de viande" },
          tip: "Une couche, pas plus : si les morceaux se touchent, ils rendent leur jus et grisent.",
        },
        {
          title: "Faire fondre les oignons",
          text: "Baissez à feu moyen. Mettez les oignons dans la graisse restante et raclez le fond avec la spatule pour décoller les sucs. Laissez fondre 8 minutes, jusqu’à ce qu’ils soient tendres et blonds, puis ajoutez l’ail et le concentré de tomate pour la dernière minute.",
          timer: { minutes: 8, label: "Oignons" },
        },
        {
          title: "Singer et mouiller",
          text: "Remettez la viande et son jus dans la cocotte, saupoudrez de farine et remuez 2 minutes pour la cuire. Versez le bouillon chaud en raclant le fond, ajoutez le bouquet garni et du poivre. Le liquide doit presque couvrir la viande. Portez à ébullition.",
          timer: { minutes: 2, label: "Farine" },
        },
        {
          title: "Laisser frémir",
          text: "Couvrez et baissez au plus doux. Laissez cuire 1 heure à petit frémissement : la surface doit à peine trembler, avec une bulle de temps en temps. Si ça bout, baissez encore ou glissez un diffuseur sous la cocotte.",
          timer: { minutes: 60, label: "Viande seule" },
          tip: "Un frémissement, pas une ébullition : c’est ce qui fait la différence entre une viande fondante et une viande sèche.",
        },
        {
          title: "Ajouter les carottes",
          text: "Ajoutez les carottes en les enfonçant dans le liquide, recouvrez et poursuivez 1 h 30 au même frémissement. C’est cuit quand une fourchette entre dans la viande sans résistance et qu’un morceau se défait à la pression, et que les carottes sont tendres mais gardent leur forme.",
          timer: { minutes: 90, label: "Viande et carottes" },
        },
        {
          title: "Réduire la sauce",
          text: "Retirez le bouquet garni. Si la sauce est trop liquide, laissez bouillonner 10 minutes à découvert à feu moyen, jusqu’à ce qu’elle nappe la cuillère. Goûtez, salez, poivrez, et parsemez de persil ciselé au moment de servir.",
          timer: { minutes: 10, label: "Réduction de la sauce" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Du collagène à la gélatine",
      text: "Le paleron et la macreuse sont des muscles de l’épaule riches en collagène. Au-delà de 70 °C environ, et pendant plusieurs heures, ce collagène se transforme en gélatine : la viande se défait et la sauce devient soyeuse. À gros bouillons, les fibres se contractent et expulsent leur jus plus vite que le collagène ne fond.",
    },
    {
      title: "Pourquoi saisir par petites fournées",
      text: "La coloration de la viande vient de la réaction de Maillard, qui démarre vers 140 °C. Une cocotte trop chargée se remplit de jus, la température reste bloquée autour de 100 °C et la viande bout sans dorer.",
    },
    {
      title: "Des carottes qui tiennent",
      text: "La pectine qui soude les cellules de la carotte se dissout peu à peu à la cuisson. Après 1 h 30, les tronçons sont tendres ; après 2 h 30, ils s’écrasent. Le carotène, soluble dans les graisses, teinte la sauce en orangé.",
    },
  ],
  tips: [
    "Prenez du paleron avec son nerf central : ce ruban gélatineux fond complètement et nourrit la sauce.",
    "Avec un bouillon de cube, salez seulement à la fin, après la réduction : il est souvent déjà très salé.",
    "Préparez-le la veille. Le lendemain, la graisse figée en surface s’enlève à la cuillère, et la sauce a plus de goût.",
    "Si vos feux ne descendent pas assez bas, mettez la cocotte fermée au four à 150 °C pour les mêmes durées.",
  ],
  mistakes: [
    "Saisir toute la viande d’un coup : elle rend son jus et devient grise. Trois fournées, avec une cocotte bien chaude à chaque fois.",
    "Laisser bouillir au lieu de frémir : la viande devient sèche et filandreuse. Baissez au minimum, ou passez au four.",
    "Mettre les carottes dès le début : elles se défont en purée. Elles arrivent après une heure.",
    "Choisir un morceau maigre à griller, comme le rumsteck : il sèche en mijotant. Il faut un morceau à braiser, paleron, macreuse, gîte ou joue.",
  ],
  variations: [
    {
      title: "À la joue de bœuf",
      text: "Remplacez le paleron par 1,2 kg de joues coupées en 4. Laissez frémir 1 h 30 avant d’ajouter les carottes au lieu d’une heure, soit 3 h de cuisson en tout.",
    },
    {
      title: "Avec des pommes de terre",
      text: "Ajoutez 600 g de pommes de terre à chair ferme, coupées en gros morceaux, 40 minutes avant la fin, et 20 cl de bouillon en plus.",
    },
    {
      title: "Au four",
      text: "Après l’étape 4, mettez la cocotte fermée au four à 150 °C : 1 h, puis 1 h 30 avec les carottes. La chaleur est plus régulière et le frémissement se surveille tout seul.",
    },
  ],
  storage:
    "Jusqu’à 3 jours au réfrigérateur, dans la cocotte ou une boîte fermée, rangé dans les 2 heures après la cuisson. Au congélateur, 3 mois ; les carottes deviennent un peu plus molles. Réchauffez à feu doux, couvert, jusqu’à ce que la sauce frémisse, et ne recongelez pas.",
  pairing:
    "Des pommes de terre vapeur, une purée ou des tagliatelles fraîches pour la sauce. Côté verre, un rouge souple, un côtes-du-rhône ou un saumur-champigny.",
  faq: [
    {
      q: "Quel morceau de bœuf pour un bœuf carottes ?",
      a: "Du paleron ou de la macreuse, deux morceaux de l’épaule riches en collagène. Le gîte et la joue conviennent aussi. Comptez 200 g de viande crue par personne et évitez les morceaux à griller, qui sèchent en mijotant.",
    },
    {
      q: "Quelle différence entre bœuf carottes et bœuf bourguignon ?",
      a: "Le vin et la garniture. Le bourguignon cuit dans du vin rouge, avec des lardons, des champignons et des petits oignons préparés à part. Le bœuf carottes cuit dans un bouillon, sans vin, et les carottes sont sa seule garniture : le goût est plus doux, et tout se fait dans la même cocotte.",
    },
    {
      q: "Combien de temps faut-il cuire un bœuf carottes ?",
      a: "2 h 30 à petit frémissement, dont 1 h 30 avec les carottes. La viande est prête quand une fourchette y entre sans résistance et qu’un morceau se défait à la pression. Un paleron épais peut demander 30 minutes de plus.",
    },
    {
      q: "Peut-on faire un bœuf carottes au four ?",
      a: "Oui, à 150 °C, cocotte fermée, pour les mêmes durées : 1 h pour la viande seule, puis 1 h 30 avec les carottes. La chaleur du four est plus régulière, vous n’avez pas à surveiller le frémissement.",
    },
    {
      q: "Peut-on préparer le bœuf carottes la veille ?",
      a: "Oui, et la sauce y gagne. Laissez refroidir, rangez au réfrigérateur dans les 2 heures, et retirez le lendemain la graisse figée en surface. Réchauffez 20 minutes à feu doux, à couvert, jusqu’à ce que la sauce frémisse.",
    },
    {
      q: "Peut-on congeler le bœuf carottes ?",
      a: "Oui, jusqu’à 3 mois dans une boîte fermée. Les carottes ressortent un peu plus molles, la viande ne bouge pas. Décongelez au réfrigérateur, réchauffez à feu doux jusqu’au frémissement et ne recongelez pas.",
    },
  ],
  nutrition: {
    calories: 430,
    protein: 42,
    fat: 20,
    saturatedFat: 7,
    carbs: 20,
    sugar: 12,
    fiber: 6,
    sodium: 670,
  },
  annotations: { hero: "les carottes gardent leur forme", detail: "bien doré avant de mijoter" },
  images: {
    heroAlt:
      "Bœuf carottes en assiette creuse : morceaux de bœuf, gros bâtonnets de carotte, quartier d’oignon fondant, haricots verts et persil",
    detailAlt: "Cubes de viande saisis et bien dorés dans une cocotte sur le feu, avant le mijotage du bœuf carottes",
    credits: {
      hero: {
        photographer: "tomateoignons",
        url: "https://www.pexels.com/photo/cooked-food-on-white-ceramic-plate-3981486/",
      },
      detail: {
        photographer: "Caleb Oquendo",
        url: "https://www.pexels.com/photo/delicious-tender-cooked-meat-in-a-large-pot-34837746/",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#E07A33",
    onAccent: "#1B1712",
    ink: "#9C4310",
    tint: "#FCEEE3",
    deep: "#1C0E07",
    focus: "50% 55%",
  },
});
