import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "gratin-de-chou-fleur",
  title: "Gratin de chou-fleur",
  seoTitle: "Gratin de chou-fleur à la béchamel, sans eau au fond du plat",
  tagline: "Le chou-fleur qui ne rend pas d’eau.",
  description:
    "Un chou-fleur en bouquets blanchis 6 minutes et bien séchés, une béchamel au comté, 25 minutes à 200 °C. Pour 6, prêt en 1 h 20, sans eau au fond.",
  summary:
    "Pour 6 personnes, détaillez un gros chou-fleur (environ 1,2 kg) en bouquets, blanchissez-les 5 à 6 minutes à l’eau bouillante salée puis laissez-les sécher 10 minutes à l’air. Nappez-les d’une béchamel de 40 g de beurre, 40 g de farine et 50 cl de lait, liée avec 60 g de comté, couvrez de 40 g de comté et gratinez 25 minutes à 200 °C. Comptez 1 h 20 en tout, dont 25 minutes de travail.",
  intro: [
    "Le gratin de chou-fleur accompagne un rôti, un poulet ou une tranche de jambon, et fait un dîner à lui seul avec une salade. Sous la croûte dorée, les bouquets restent tendres et la béchamel au comté les enrobe sans les noyer.",
    "Son défaut connu, c’est l’eau. Le chou-fleur en contient beaucoup et la rend au four : on sert alors des bouquets mous dans une sauce délavée, avec un fond de liquide dans le plat.",
    "La parade tient en deux gestes. Blanchir court, pour que les bouquets restent un peu fermes, puis les laisser fumer à l’air libre avant de les napper. Et une béchamel assez épaisse pour absorber ce qui reste.",
  ],
  category: "Accompagnement",
  cuisine: "Française",
  keywords: [
    "gratin de chou-fleur",
    "recette gratin de chou-fleur",
    "gratin de chou-fleur béchamel",
    "gratin de chou-fleur au fromage",
    "chou-fleur gratiné au four",
    "gratin de chou-fleur qui rend de l’eau",
    "cuisson chou-fleur pour gratin",
    "chou-fleur à la béchamel",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 25, cook: 40, rest: 15 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: [
    "plat à gratin de 30 × 20 cm",
    "grande casserole et écumoire",
    "casserole moyenne à fond épais",
    "fouet",
    "torchon propre ou grille",
  ],
  ingredients: [
    {
      title: "Le chou-fleur",
      items: [
        { qty: 1, name: "gros chou-fleur", plural: "gros choux-fleurs", note: "environ 1,2 kg", step: 0.5 },
        { qty: 30, unit: "g", name: "gros sel", note: "pour 3 l d’eau", fixed: true },
      ],
    },
    {
      title: "La béchamel",
      items: [
        { qty: 40, unit: "g", name: "beurre", step: 5 },
        { qty: 40, unit: "g", name: "farine", step: 5 },
        { qty: 50, unit: "cl", name: "lait entier", note: "froid", step: 5 },
        { qty: 0.5, unit: "cac", name: "sel fin", step: 0.5 },
        { name: "poivre", note: "du moulin" },
        { name: "noix de muscade", note: "râpée" },
        { qty: 100, unit: "g", name: "comté râpé", note: "60 g pour la sauce, 40 g pour le dessus", step: 10 },
      ],
    },
    {
      title: "Le plat",
      items: [{ qty: 10, unit: "g", name: "beurre", note: "pour le plat", step: 5 }],
    },
  ],
  method: [
    {
      title: "Le chou-fleur",
      steps: [
        {
          title: "Détailler le chou-fleur",
          text: "Retirez les feuilles et coupez le trognon. Détachez les bouquets et recoupez les plus gros en deux ou en quatre, en tranchant par la tige, pour obtenir des morceaux de 4 cm environ. Rincez-les à l’eau froide.",
        },
        {
          title: "Blanchir les bouquets",
          text: "Portez 3 l d’eau à ébullition avec le gros sel. Plongez les bouquets et comptez 5 à 6 minutes après la reprise de l’ébullition. La pointe d’un couteau doit entrer dans la tige avec une petite résistance : ils finiront de cuire au four.",
          timer: { minutes: 6, label: "Blanchiment" },
          tip: "Goûtez un bouquet : il doit être tendre en surface et encore ferme au cœur.",
        },
        {
          title: "Sécher à l’air",
          text: "Égouttez-les dans une passoire, puis étalez-les en une seule couche sur un torchon propre ou une grille. Laissez-les fumer 10 minutes : la vapeur emporte l’eau de surface. Préchauffez le four à 200 °C pendant ce temps.",
          timer: { minutes: 10, label: "Séchage des bouquets" },
          tip: "Ne les rafraîchissez pas à l’eau froide : encore chauds, ils sèchent bien plus vite.",
        },
      ],
    },
    {
      title: "La béchamel",
      steps: [
        {
          title: "Cuire le roux",
          text: "Dans la casserole moyenne, faites fondre 40 g de beurre sur feu moyen. Ajoutez la farine d’un coup et fouettez 2 minutes : le mélange mousse et sent le biscuit, sans prendre de couleur.",
          timer: { minutes: 2, label: "Roux" },
        },
        {
          title: "Monter la béchamel",
          text: "Versez le lait froid en une fois en fouettant vivement. Portez à ébullition sans cesser de fouetter, en raclant le fond, puis laissez cuire 5 minutes à feu doux. La sauce est prête quand elle nappe le dos d’une cuillère en couche épaisse et qu’un trait de doigt y reste net.",
          timer: { minutes: 5, label: "Cuisson de la béchamel" },
          tip: "Lait froid sur roux chaud : l’écart de température laisse à la farine le temps de se disperser avant d’épaissir, sans grumeaux.",
        },
        {
          title: "Assaisonner la sauce",
          text: "Hors du feu, ajoutez 60 g de comté, le sel, du poivre et une râpée de muscade. Mélangez jusqu’à ce que le fromage ait fondu. Goûtez : la sauce doit être franchement assaisonnée, car le chou-fleur reste doux.",
        },
      ],
    },
    {
      title: "Le gratin",
      steps: [
        {
          title: "Monter le gratin",
          text: "Beurrez le plat avec 10 g de beurre. Rangez les bouquets en une seule couche, tête vers le haut, sans les tasser. Versez la béchamel en la faisant couler entre les bouquets, puis parsemez du reste de comté.",
        },
        {
          title: "Gratiner",
          text: "Enfournez à mi-hauteur pour 25 minutes, jusqu’à ce que la sauce bouillonne sur les bords et que le dessus soit doré, brun par endroits.",
          timer: { minutes: 25, label: "Gratin au four" },
        },
        {
          title: "Laisser reposer",
          text: "Sortez le plat et attendez 5 minutes avant de servir : la sauce se raffermit un peu et se tient à la cuillère au lieu de couler.",
          timer: { minutes: 5, label: "Repos du gratin" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Un légume plein d’eau",
      text: "Le chou-fleur contient environ 90 % d’eau. Au four, ses cellules ramollies la libèrent dans la sauce. Un blanchiment court suivi d’un séchage à l’air chasse l’eau de surface et une partie de celle des tissus, avant que la béchamel ne s’en charge.",
    },
    {
      title: "L’épaississement de la béchamel",
      text: "Les grains d’amidon de la farine gonflent dans le lait chaud à partir de 60 °C environ et épaississent la sauce, avec un maximum près de l’ébullition. Le beurre du roux enrobe la farine et sépare les grains, ce qui limite les grumeaux.",
    },
    {
      title: "L’odeur de chou",
      text: "Les choux renferment des composés soufrés qui se décomposent à la chaleur. Plus la cuisson dure, plus ils dégagent cette odeur soufrée et un goût amer. Une cuisson courte à grande eau garde au chou-fleur un goût doux.",
    },
    {
      title: "La croûte dorée",
      text: "À 200 °C, le dessus sèche puis brunit : les protéines et le lactose du lait et du fromage réagissent ensemble, c’est la réaction de Maillard, et forment des arômes grillés.",
    },
  ],
  tips: [
    "Un comté de 12 mois ou plus donne plus de goût qu’un emmental, à quantité égale.",
    "Choisissez un chou-fleur lourd, aux bouquets serrés et bien blancs, sans taches brunes.",
    "Gardez les petites feuilles tendres du pied : blanchies avec les bouquets, elles se glissent dans le gratin.",
    "Pour une croûte plus croustillante, mélangez 20 g de chapelure au comté du dessus.",
  ],
  mistakes: [
    "Mettre les bouquets dans le plat dès la sortie de l’eau : l’eau retenue entre les fleurettes coule au fond pendant la cuisson. Si une flaque apparaît, inclinez le plat, retirez le liquide à la cuillère et remettez 5 minutes au four.",
    "Blanchir trop longtemps : les bouquets se défont et finissent en purée sous la sauce. Arrêtez dès qu’une pointe de couteau entre avec une petite résistance.",
    "Une béchamel trop liquide : elle file au fond au lieu d’enrober. Laissez-la cuire jusqu’à ce qu’elle nappe la cuillère en couche épaisse.",
    "Ajouter le fromage sur le feu, en pleine ébullition : il file et rend son gras. Incorporez-le toujours hors du feu.",
  ],
  variations: [
    {
      title: "Au jambon",
      text: "Ajoutez 150 g de jambon blanc en dés entre les bouquets : le gratin devient un plat complet pour 4.",
    },
    {
      title: "Chou-fleur et brocoli",
      text: "Remplacez la moitié du chou-fleur par 400 g de brocoli en bouquets, blanchis 3 minutes seulement dans la même eau, après le chou-fleur.",
    },
    {
      title: "À la moutarde",
      text: "Fouettez 1 cuillère à soupe de moutarde à l’ancienne dans la béchamel avec le comté. La sauce gagne du relief et les grains de moutarde se voient sous la croûte.",
    },
  ],
  storage:
    "2 jours au réfrigérateur, couvert. Réchauffez 20 minutes au four à 180 °C plutôt qu’au micro-ondes, qui ramollit la croûte. La congélation est déconseillée : le chou-fleur décongelé rend beaucoup d’eau et la béchamel se sépare.",
  pairing:
    "Un poulet rôti, une côte de porc, un rôti de veau ou une tranche de jambon à l’os. Seul avec une salade verte, il fait un dîner pour 4.",
  faq: [
    {
      q: "Faut-il cuire le chou-fleur avant de le mettre en gratin ?",
      a: "Oui, 5 à 6 minutes à l’eau bouillante salée. Cru, il ne cuirait pas en 25 minutes au four et la croûte brûlerait avant. Trop cuit, il se défait : il doit rester un peu ferme au cœur.",
    },
    {
      q: "Comment éviter qu’un gratin de chou-fleur rende de l’eau ?",
      a: "En séchant les bouquets 10 minutes à l’air après les avoir égouttés, étalés en une seule couche. Une béchamel épaisse, qui nappe la cuillère, absorbe ensuite le peu d’eau qu’ils rendent au four.",
    },
    {
      q: "Peut-on utiliser du chou-fleur surgelé ?",
      a: "Oui, sans le décongeler : plongez-le 4 minutes dans l’eau bouillante, égouttez-le et laissez-le sécher 15 minutes en une couche. Il rend plus d’eau que le frais, ne négligez pas le séchage.",
    },
    {
      q: "Peut-on préparer le gratin de chou-fleur la veille ?",
      a: "Oui. Montez-le, laissez-le refroidir, couvrez-le et gardez-le au réfrigérateur. Le lendemain, enfournez-le froid 35 minutes à 200 °C : la sauce doit bouillonner sur les bords avant de servir.",
    },
    {
      q: "Quel fromage mettre dans un gratin de chou-fleur ?",
      a: "Du comté ou du gruyère, qui fondent bien et ont du goût. L’emmental fond aussi mais en apporte moins. Un reste de bleu, 40 g émiettés dans la béchamel, va très bien avec le chou-fleur.",
    },
    {
      q: "Combien de temps cuire un gratin de chou-fleur au four ?",
      a: "25 minutes à 200 °C, avec des bouquets déjà blanchis. Le repère : la sauce bouillonne sur les bords et le dessus est doré, brun par endroits.",
    },
  ],
  nutrition: { calories: 225, protein: 10, fat: 15, saturatedFat: 10, carbs: 12, sugar: 6, fiber: 3, sodium: 340 },
  annotations: { hero: "brun par endroits, pas partout", detail: "bouquets bien secs, sauce épaisse" },
  images: {
    heroAlt:
      "Gratin de chou-fleur dans un bol en grès, béchamel au fromage dorée et brunie par endroits, une cuillère plantée dedans",
    detailAlt: "Gratin de chou-fleur doré dans un plat ovale rouge, posé sur une cuisinière à gaz",
    credits: {
      hero: {
        photographer: "Acabashi",
        url: "https://commons.wikimedia.org/wiki/File:Cauliflower_cheese_side_dish_for_Sunday_roast_at_The_Black_Bull,_Fyfield,_Essex,_England.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
      detail: {
        photographer: "Andy / Andrew Fogg from near Cambridge, UK",
        url: "https://commons.wikimedia.org/w/index.php?curid=5329673",
        source: "Wikimedia Commons",
        license: "CC BY 2.0",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#E2B54A",
    onAccent: "#1B1712",
    ink: "#7F5A0E",
    tint: "#FBF5E3",
    deep: "#17120A",
    focus: "50% 40%",
  },
});
