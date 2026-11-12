import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "minestrone",
  title: "Minestrone",
  seoTitle: "Minestrone aux haricots blancs, prêt en 1 h 20",
  tagline: "Plus de légumes que de bouillon.",
  description:
    "Un minestrone pour 6 : légumes en dés, haricots blancs, tomate et 100 g de petites pâtes cuites dans la soupe. Prêt en 1 h 20, dont 25 minutes de coupe.",
  summary:
    "Pour 6 personnes, faites suer oignon, carotte et céleri dans l’huile d’olive, ajoutez pomme de terre, courgette et chou, puis 400 g de tomates et 1,5 l d’eau avec une croûte de parmesan. Après 30 minutes de frémissement, les haricots blancs et 100 g de petites pâtes cuisent directement dans la soupe pendant 10 minutes. Comptez 1 h 20 en tout, dont 25 minutes de découpe.",
  intro: [
    "Le minestrone est une soupe italienne épaisse où chaque cuillerée ramasse un peu de tout : des légumes coupés petit, des haricots, de la tomate et des pâtes. Il change avec les saisons et d’une famille à l’autre. Celui-ci est une version d’automne, avec du chou et de la pomme de terre.",
    "Ce qui le rate presque toujours, ce sont les pâtes. Ajoutées trop tôt, elles gonflent, boivent le bouillon et la soupe tourne à la bouillie. Elles entrent dans la marmite dix minutes avant de servir, pas avant, et on remue souvent pour qu’elles n’attachent pas au fond.",
    "Si une croûte de parmesan traîne dans le réfrigérateur, c’est le moment de la sortir. Elle donne à l’eau un goût de bouillon qu’elle n’aurait pas toute seule.",
  ],
  category: "Entrée",
  cuisine: "Italienne",
  keywords: [
    "minestrone",
    "recette minestrone",
    "soupe minestrone",
    "minestrone italien",
    "minestrone aux haricots blancs",
    "minestrone aux pâtes",
    "minestrone maison",
    "soupe italienne aux légumes",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 25, cook: 55 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["automne", "hiver"],
  equipment: ["faitout ou grande casserole de 4 à 5 l", "planche et couteau de chef", "cuillère en bois"],
  ingredients: [
    {
      title: "La soupe",
      items: [
        { qty: 3, unit: "cas", name: "huile d’olive", step: 1 },
        { qty: 1, name: "oignon", plural: "oignons", note: "150 g environ", step: 1 },
        { qty: 2, name: "carotte", plural: "carottes", note: "200 g environ", step: 1 },
        { qty: 2, unit: "branche", name: "céleri", note: "120 g environ", step: 1 },
        { qty: 2, unit: "gousse", name: "ail", step: 1 },
        { qty: 250, unit: "g", name: "pomme de terre", note: "1 grosse, en dés de 1 cm", step: 25 },
        { qty: 200, unit: "g", name: "courgette", note: "1 petite, en dés de 1 cm", step: 25 },
        { qty: 150, unit: "g", name: "chou vert", note: "4 ou 5 feuilles, en lanières", step: 25 },
        { qty: 400, unit: "g", name: "tomates concassées en conserve", step: 50 },
        { qty: 1500, unit: "ml", name: "eau", step: 100 },
        {
          qty: 1,
          name: "croûte de parmesan",
          plural: "croûtes de parmesan",
          note: "facultative, 5 à 8 cm",
          step: 1,
          fixed: true,
        },
        { qty: 1, unit: "cac", name: "sel fin", step: 1 },
        {
          qty: 250,
          unit: "g",
          name: "haricots blancs cuits",
          note: "1 boîte de 400 g égouttée, cannellini ou borlotti",
          step: 25,
        },
        { qty: 100, unit: "g", name: "petites pâtes", note: "ditalini, coquillettes ou spaghetti cassés", step: 10 },
        { name: "poivre noir" },
      ],
    },
    {
      title: "Pour servir",
      items: [
        { qty: 40, unit: "g", name: "parmesan râpé", step: 5 },
        { qty: 2, unit: "cas", name: "huile d’olive vierge extra", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "La soupe",
      steps: [
        {
          title: "Tailler les légumes",
          text: "Coupez l’oignon, les carottes et le céleri en dés de 5 mm, la pomme de terre et la courgette en dés de 1 cm. Retirez la grosse côte des feuilles de chou et taillez-les en lanières de 1 cm. Hachez l’ail. Gardez chaque légume dans son tas : ils n’entrent pas tous en même temps.",
        },
        {
          title: "Faire suer la base",
          text: "Chauffez 3 cuillerées d’huile d’olive dans le faitout, à feu moyen-doux. Ajoutez oignon, carotte et céleri avec une pincée du sel, et laissez fondre 10 minutes en remuant de temps en temps. L’oignon doit devenir translucide et mou, sans dorer. Ajoutez l’ail pour la dernière minute.",
          timer: { minutes: 10, label: "Oignon, carotte, céleri" },
          tip: "Si ça grésille fort, baissez le feu : une base brunie rend la soupe amère.",
        },
        {
          title: "Ajouter les légumes",
          text: "Versez la pomme de terre, la courgette et le chou. Remuez 5 minutes à feu moyen, jusqu’à ce que le chou s’affaisse et brille d’huile.",
          timer: { minutes: 5, label: "Légumes dans l’huile" },
        },
        {
          title: "Mouiller et laisser frémir",
          text: "Ajoutez les tomates, l’eau, la croûte de parmesan grattée et le reste du sel. Portez à ébullition, puis baissez pour un simple frémissement, couvercle entrouvert, pendant 30 minutes. C’est prêt pour la suite quand un dé de pomme de terre s’écrase contre la paroi avec le dos de la cuillère.",
          timer: { minutes: 30, label: "Frémissement" },
        },
        {
          title: "Cuire les pâtes dedans",
          text: "Rincez les haricots et ajoutez-les. Écrasez une louche de légumes contre la paroi pour lier la soupe. Remontez à ébullition, versez les pâtes et laissez cuire à petits bouillons 10 minutes environ, le temps du paquet plus une minute, en raclant le fond toutes les deux minutes. Si elle devient trop épaisse, ajoutez 10 cl d’eau bouillante.",
          timer: { minutes: 10, label: "Pâtes dans la soupe" },
          tip: "Les pâtes attachent au fond dès qu’on les oublie : gardez la cuillère à portée de main.",
        },
        {
          title: "Goûter et servir",
          text: "Retirez la croûte de parmesan. Goûtez, rectifiez le sel et donnez quelques tours de poivre. Servez aussitôt, avec le parmesan râpé et un filet d’huile d’olive dans chaque assiette.",
          tip: "Le minestrone se sert chaud, pas brûlant : le goût de l’huile d’olive ressort mieux.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi faire suer dans l’huile",
      text: "Une bonne part des arômes de l’oignon, de la carotte et du céleri se dissout dans la matière grasse plutôt que dans l’eau. Dix minutes à feu doux dans l’huile les libèrent ; l’eau ajoutée ensuite les répartit dans toute la soupe.",
    },
    {
      title: "Les pâtes épaississent le bouillon",
      text: "En cuisant, les pâtes libèrent de l’amidon dans le liquide. Cuites dans la soupe plutôt qu’à part, elles la lient légèrement, comme le fait la louche de légumes écrasés. C’est aussi pour ça qu’elle épaissit encore en refroidissant.",
    },
    {
      title: "Ce que donne la croûte de parmesan",
      text: "Le parmesan affiné est riche en glutamate libre, la molécule du goût umami. La croûte en cède une partie au bouillon pendant les 40 minutes de cuisson, sans fondre ni filer.",
    },
  ],
  tips: [
    "Coupez les légumes à peu près à la taille des haricots : chaque cuillerée en ramasse un peu de tout.",
    "Gardez vos croûtes de parmesan au congélateur dans un sachet. Elles vont directement dans la soupe, sans décongeler.",
    "Si vous prévoyez des restes, faites cuire seulement la quantité de pâtes que vous allez servir. Le reste de soupe se garde mieux sans elles.",
    "Rincez les haricots en boîte : leur jus épais trouble le bouillon et le sale.",
  ],
  mistakes: [
    "Ajouter les pâtes dès le début : elles gonflent et éclatent, la soupe devient une bouillie. Elles cuisent les 10 dernières minutes seulement.",
    "Faire revenir la base à feu vif : l’oignon brunit et donne de l’amertume. À feu moyen-doux, il doit rester blond.",
    "Ne plus remuer après les pâtes : elles collent au fond et attachent. Raclez le fond toutes les deux minutes.",
    "Saler une seule fois au départ : avec de l’eau plutôt qu’un bouillon, la soupe a souvent besoin d’une pincée de plus à la fin. Goûtez toujours avant de servir.",
  ],
  variations: [
    {
      title: "Alla genovese",
      text: "Déposez une cuillerée à soupe de pesto dans chaque assiette au moment de servir, à la place de l’huile d’olive. Le pesto contient des pignons : prévenez si un convive est allergique aux fruits à coque.",
    },
    {
      title: "Version de printemps",
      text: "Remplacez le chou et la pomme de terre par 150 g de haricots verts en tronçons de 2 cm, ajoutés à l’étape 3, et 150 g de petits pois, ajoutés en même temps que les pâtes.",
    },
    {
      title: "Au riz",
      text: "Remplacez les pâtes par 100 g de riz rond. Il demande 15 à 18 minutes dans la soupe au lieu de 10, et un peu plus d’eau.",
    },
    {
      title: "À la pancetta",
      text: "Faites fondre 80 g de pancetta en petits dés dans l’huile 4 minutes avant d’ajouter l’oignon, la carotte et le céleri. Salez moins à l’étape 4.",
    },
  ],
  storage:
    "Jusqu’à 3 jours au réfrigérateur dans une boîte fermée, rangé dans les 2 heures, de préférence sans les pâtes. Au congélateur, 3 mois sans les pâtes. Réchauffez à feu doux avec un peu d’eau, car la soupe épaissit en refroidissant, et ne la recongelez pas.",
  pairing:
    "Des tranches de pain de campagne grillées et frottées d’ail. Côté verre, un rouge léger qu’on peut servir frais, comme un valpolicella ou un gamay.",
  faq: [
    {
      q: "Quelles pâtes mettre dans un minestrone ?",
      a: "Des petites pâtes courtes : ditalini, tubetti, coquillettes, ou des spaghetti cassés en tronçons de 2 cm. Elles doivent tenir dans la cuillère avec les légumes. Comptez 100 g pour 6, pas plus : elles gonflent et boivent le bouillon.",
    },
    {
      q: "Peut-on préparer le minestrone la veille ?",
      a: "Oui, mais sans les pâtes. Gardez la soupe au réfrigérateur, puis faites cuire les pâtes dedans au moment de la réchauffer, en ajoutant un peu d’eau. Avec les pâtes déjà dedans, la soupe s’épaissit beaucoup pendant la nuit et les pâtes deviennent molles.",
    },
    {
      q: "Faut-il mettre du bouillon dans le minestrone ?",
      a: "Non, de l’eau suffit avec une base bien fondue et une croûte de parmesan. Un bouillon de légumes donne un goût plus rond ; dans ce cas, réduisez le sel de départ, car la plupart des bouillons sont déjà salés.",
    },
    {
      q: "La croûte de parmesan se mange-t-elle ?",
      a: "Oui, celle du parmesan est une croûte naturelle, sans cire. Grattez-la au couteau avant de la plonger dans la soupe. Après 40 minutes, elle est devenue tendre : retirez-la, ou coupez-la en petits dés et remettez-la dans les assiettes.",
    },
    {
      q: "Le minestrone est-il végétarien ?",
      a: "Oui, sans la pancetta, mais avec une réserve : le parmesan AOP est fabriqué avec de la présure animale. Pour un repas strictement végétarien, remplacez-le par un fromage à pâte dure fait avec une présure végétale et oubliez la croûte.",
    },
    {
      q: "Peut-on congeler le minestrone ?",
      a: "Oui, 3 mois, de préférence sans les pâtes. La pomme de terre devient un peu plus farineuse, ce qui ne gêne pas dans une soupe. Décongelez au réfrigérateur, réchauffez jusqu’au frémissement et ajoutez les pâtes à ce moment-là. Ne recongelez pas.",
    },
    {
      q: "Peut-on utiliser des haricots secs ?",
      a: "Oui : 100 g de haricots secs donnent environ 250 g de haricots cuits. Faites-les tremper une nuit dans l’eau froide, puis cuire 1 h à 1 h 30 dans de l’eau non salée, jusqu’à ce qu’ils s’écrasent facilement entre deux doigts.",
    },
  ],
  nutrition: {
    calories: 280,
    protein: 10,
    fat: 11,
    saturatedFat: 2.5,
    carbs: 34,
    sugar: 6,
    fiber: 7,
    sodium: 530,
  },
  annotations: { hero: "un peu de tout dans chaque cuillère", detail: "les pâtes cuisent dans la soupe" },
  images: {
    heroAlt:
      "Bol vert de minestrone : dés de carotte, haricots blancs, poireau et pâtes fines dans un bouillon à la tomate",
    detailAlt:
      "Faitout de minestrone en fin de cuisson, avec des pâtes courtes, des dés de carotte, de courgette et de céleri",
    credits: {
      hero: {
        photographer: "Katrin Morenz from Aachen, Deutschland",
        url: "https://commons.wikimedia.org/wiki/File:Minestrone_soup.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 2.0",
      },
      detail: {
        photographer: "Arnaud 25",
        url: "https://commons.wikimedia.org/wiki/File:Minestrone_001.JPG",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#D8673A",
    onAccent: "#1B1712",
    ink: "#9A3A17",
    tint: "#FBEEE7",
    deep: "#1A0D08",
    focus: "68% 50%",
  },
});
