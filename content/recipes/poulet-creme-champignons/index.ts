import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "poulet-creme-champignons",
  title: "Poulet à la crème et aux champignons",
  seoTitle: "Poulet à la crème et champignons, en une seule poêle",
  tagline: "Tout se passe dans la même poêle.",
  description:
    "Des blancs de poulet dorés puis finis dans 25 cl de crème, 400 g de champignons poêlés à part, une sauce qui nappe : 55 minutes pour 4 personnes.",
  summary:
    "Pour 4 personnes, faites dorer 400 g de champignons de Paris à feu vif jusqu’à ce qu’ils aient rendu toute leur eau, puis saisissez 4 filets de poulet (600 g) au beurre. Échalotes, 10 cl de vin blanc pour déglacer, 25 cl de crème fraîche entière : le poulet y finit sa cuisson jusqu’à 74 °C à cœur, puis la sauce réduit seule jusqu’à napper la cuillère. Comptez 55 minutes, dont 15 de préparation.",
  intro: [
    "On le fait avec des blancs, pour une raison simple : ils cuisent vite et se tranchent net. Leur défaut est connu, ils sèchent dès qu’on les oublie. D’où la méthode : on les saisit fort, on les finit doucement dans la crème, et on les sort dès que le thermomètre affiche 74 °C.",
    "Ce qui rate le plus souvent, ce sont les champignons. Jetés crus dans la sauce, ils rendent leur eau et la crème devient grise et liquide. Cuits à part, à feu vif, jusqu’à ce que la poêle soit sèche et qu’ils dorent, ils gardent du goût et de la tenue.",
    "Dernier point : la sauce se réduit sans le poulet. Pendant que la viande attend sur la planche, la crème bouillonne quelques minutes et épaissit jusqu’à napper la cuillère. Les blancs, eux, ne recuisent pas.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "poulet à la crème",
    "poulet crème champignons",
    "recette poulet à la crème et aux champignons",
    "poulet aux champignons",
    "blanc de poulet à la crème",
    "filet de poulet sauce champignons",
    "poulet champignons crème fraîche",
    "poulet à la crème à la poêle",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 15, cook: 40 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Automne", "Hiver"],
  tags: ["automne"],
  equipment: ["grande poêle ou sauteuse de 28 cm", "thermomètre de cuisson", "spatule en bois", "planche à découper"],
  ingredients: [
    {
      title: "Les champignons",
      items: [
        {
          qty: 400,
          unit: "g",
          name: "champignon de Paris",
          plural: "champignons de Paris",
          note: "fermes et blancs, ou en partie des champignons des bois",
          step: 50,
        },
        { qty: 15, unit: "g", name: "beurre", step: 5 },
        { name: "sel fin" },
      ],
    },
    {
      title: "Le poulet et la sauce",
      items: [
        { qty: 4, name: "filet de poulet", plural: "filets de poulet", note: "environ 150 g chacun", step: 1 },
        { qty: 1, unit: "cas", name: "huile neutre", note: "tournesol ou colza", step: 1 },
        { qty: 15, unit: "g", name: "beurre", step: 5 },
        { qty: 2, name: "échalote", plural: "échalotes", step: 1 },
        { qty: 2, name: "brin de thym", plural: "brins de thym", step: 1 },
        { qty: 10, unit: "cl", name: "vin blanc sec", note: "ou bouillon de volaille", step: 5 },
        {
          qty: 25,
          unit: "cl",
          name: "crème fraîche entière",
          note: "épaisse ou liquide, 30 % de matière grasse",
          step: 5,
        },
        { name: "poivre noir" },
        { qty: 4, name: "brin de persil plat", plural: "brins de persil plat", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "Les champignons",
      steps: [
        {
          title: "Préparer les champignons",
          text: "Coupez le bout terreux des pieds. Essuyez les champignons avec un papier absorbant humide, ou rincez-les très vite sous l’eau froide sans les laisser tremper, puis séchez-les. Coupez-les en quatre, en deux pour les plus petits. Pelez et ciselez finement les échalotes, effeuillez et hachez le persil.",
        },
        {
          title: "Dorer les champignons",
          text: "Faites chauffer 15 g de beurre dans une grande poêle à feu vif. Étalez les champignons en une seule couche et salez-les légèrement. Ils rendent vite leur eau : ne couvrez pas, remuez de temps en temps et laissez-la s’évaporer complètement, 8 à 10 min. C’est prêt quand le fond de la poêle est sec, que le clapotis laisse place à un grésillement et que les champignons sont dorés. Réservez-les dans un bol.",
          timer: { minutes: 10, label: "Champignons à dorer" },
          tip: "Si la poêle est trop petite, faites deux fournées. Entassés, les champignons cuisent dans leur eau et restent gris et mous.",
        },
      ],
    },
    {
      title: "Le poulet et la sauce",
      steps: [
        {
          title: "Saisir le poulet",
          text: "Séchez les filets au papier absorbant et salez-les sur les deux faces. Dans la même poêle, sans la laver, chauffez l’huile et 15 g de beurre à feu moyen-vif. Quand le beurre mousse, posez les filets côté bombé en dessous et n’y touchez plus pendant 5 min : ils se décollent seuls quand la croûte est prise. Retournez-les pour 3 min, puis réservez-les sur une assiette. Ils ne sont pas cuits à cœur, c’est normal.",
          timer: { minutes: 8, label: "Saisie du poulet" },
          tip: "Un filet qui dépasse 3 cm à l’endroit le plus épais cuit mal. Glissez-le entre deux feuilles de papier cuisson et tapotez la partie épaisse avec le fond d’une casserole pour égaliser.",
        },
        {
          title: "Fondre les échalotes",
          text: "Baissez à feu moyen. Mettez les échalotes et le thym dans la graisse restante et remuez 2 à 3 min, jusqu’à ce qu’elles soient translucides et à peine blondes. Si le fond brunit trop vite, ajoutez une cuillerée d’eau.",
          timer: { minutes: 3, label: "Échalotes" },
        },
        {
          title: "Déglacer au vin blanc",
          text: "Versez le vin blanc et grattez le fond avec la spatule en bois pour décoller les sucs bruns laissés par le poulet. Laissez bouillonner 2 min, jusqu’à ce que le liquide ait réduit de moitié et que l’odeur piquante de l’alcool soit partie.",
          timer: { minutes: 2, label: "Vin à réduire" },
        },
        {
          title: "Cuire dans la crème",
          text: "Ajoutez la crème et portez à frémissement. Remettez les filets dans la poêle avec le jus rendu dans l’assiette, couvrez à moitié et laissez cuire à feu doux 8 à 10 min, en les retournant à mi-cuisson. La crème doit frémir, pas bouillir fort. Piquez le thermomètre dans la partie la plus épaisse : il faut 74 °C à cœur. S’il manque quelques degrés, prolongez un peu et mesurez de nouveau.",
          timer: { minutes: 10, label: "Poulet dans la crème" },
          tip: "Sans thermomètre, entaillez le filet le plus épais en son milieu : la chair doit être blanche et opaque jusqu’au centre, sans zone rosée et translucide, et le jus qui perle doit être clair.",
        },
        {
          title: "Réduire la sauce",
          text: "Sortez les filets sur la planche et couvrez-les d’une feuille d’aluminium. Montez le feu et laissez la crème bouillonner 3 à 4 min en remuant, jusqu’à ce qu’elle nappe le dos d’une cuillère : un doigt passé dessus laisse une trace nette qui ne se referme pas. Retirez le thym, remettez les champignons le temps de les réchauffer, goûtez, salez si besoin et poivrez.",
          timer: { minutes: 4, label: "Sauce à réduire" },
        },
        {
          title: "Trancher et servir",
          text: "Coupez les filets en biais, en tranches de 1,5 cm. Versez dans la sauce le jus qu’ils ont rendu sur la planche. Servez les tranches nappées de sauce et de champignons, parsemées de persil, avec du riz, des tagliatelles ou une purée.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi les champignons cuisent à part",
      text: "Un champignon de Paris contient environ 90 % d’eau. Tant qu’elle s’évapore, la poêle reste bloquée autour de 100 °C et rien ne dore. Une fois le fond sec, la surface des champignons dépasse cette température, les réactions de Maillard démarrent et apportent la couleur et le goût grillé. Dans la crème, ils n’atteindraient jamais ce stade.",
    },
    {
      title: "Les sucs, c’est la sauce",
      text: "En dorant, le poulet laisse au fond de la poêle une fine couche brune de protéines et de sucres transformés par la chaleur. Le vin chaud les dissout quand on gratte : ils passent dans la sauce et lui donnent sa couleur ivoire et son goût de rôti.",
    },
    {
      title: "Pourquoi une crème entière",
      text: "Une crème à 30 % de matière grasse supporte l’ébullition : le gras abondant protège ses protéines, qui ne s’agglomèrent pas en grains. Une crème allégée contient moins de gras pour autant de protéines et tranche plus facilement, surtout avec l’acidité du vin.",
    },
    {
      title: "74 °C, pas davantage",
      text: "À 74 °C à cœur, les bactéries de la volaille comme les salmonelles et Campylobacter sont détruites. Au-delà, les fibres du blanc continuent de se resserrer et expulsent leur jus. D’où l’intérêt de sortir les filets avant de faire réduire la sauce.",
    },
  ],
  tips: [
    "Choisissez des champignons fermes, au chapeau bien fermé sur le pied : ils sont plus frais et gardent mieux leur tenue à la cuisson que ceux dont les lamelles brunes sont visibles.",
    "Sortez la crème du réfrigérateur en commençant la recette. Versée glacée dans la poêle chaude, elle met plus longtemps à revenir au frémissement et le poulet cuit moins régulièrement.",
    "Avec des tagliatelles, gardez une louche de leur eau de cuisson : quelques cuillerées détendent la sauce si elle a trop réduit, et l’amidon l’aide à tenir sur les pâtes.",
    "Ne lavez pas la poêle entre les champignons et le poulet. Le peu de beurre et de jus qui reste au fond fait partie du goût.",
  ],
  mistakes: [
    "Mettre les champignons crus directement dans la crème : ils rendent leur eau dans la sauce, qui devient grise et liquide. Cuisez-les toujours à part, jusqu’à ce que la poêle soit sèche.",
    "Faire réduire la sauce avec le poulet dedans : la crème épaissit, mais les blancs dépassent largement 74 °C et deviennent secs et filandreux. On sort la viande avant de monter le feu.",
    "Retourner les filets trop tôt : la chair accroche et la croûte reste collée à la poêle. Attendez qu’ils se décollent seuls, au bout de 5 min.",
    "Réduire la sauce trop longtemps : elle devient pâteuse et le gras perle en surface. Hors du feu, ajoutez 2 à 3 cas d’eau chaude ou de bouillon en fouettant, elle redevient lisse.",
  ],
  variations: [
    {
      title: "Avec des hauts de cuisse",
      text: "Remplacez les filets par environ 700 g de hauts de cuisse désossés. Saisissez-les 6 à 7 min sur la première face et 3 min sur l’autre, puis comptez 15 à 20 min dans la crème, toujours jusqu’à 74 °C à cœur. Plus gras, ils restent fondants même s’ils cuisent un peu trop.",
    },
    {
      title: "Aux champignons des bois",
      text: "En automne, remplacez la moitié des champignons de Paris par 200 g de cèpes, girolles ou pleurotes. Brossez-les ou essuyez-les au lieu de les laver, coupez les plus gros, et faites-les dorer comme les autres, jusqu’à ce que la poêle soit sèche.",
    },
    {
      title: "Moutarde et estragon",
      text: "Ajoutez 1 cas de moutarde à l’ancienne en même temps que la crème, et remplacez le persil par 2 cas d’estragon haché. La sauce prend une pointe piquante qui va très bien avec le riz.",
    },
  ],
  storage:
    "2 à 3 jours au réfrigérateur, dans une boîte fermée, après l’avoir mis au frais dans les 2 heures qui suivent la cuisson. Réchauffez à feu doux, à couvert, avec deux cuillerées d’eau, jusqu’à ce que ce soit bien chaud au cœur des filets. Au congélateur, 2 mois si le poulet n’avait pas été congelé cru ; décongelez au réfrigérateur et ne recongelez jamais. Le riz cuit qui l’accompagne va au frais dans les 2 heures et se garde 24 heures au plus.",
  pairing:
    "Un vin blanc sec et rond, comme un mâcon ou un autre chardonnay, ou simplement le reste de la bouteille ouverte pour la sauce. À côté : riz blanc, tagliatelles fraîches ou purée de pommes de terre, pour ne pas laisser de sauce dans l’assiette.",
  faq: [
    {
      q: "Peut-on faire le poulet à la crème avec des cuisses ?",
      a: "Oui, et c’est même plus facile à réussir. Les hauts de cuisse désossés sont plus gras que les blancs et restent moelleux s’ils dépassent un peu 74 °C. Comptez environ 700 g pour 4, une saisie un peu plus longue et 15 à 20 min dans la crème. On garde ici les blancs parce qu’ils cuisent vite et se tranchent net.",
    },
    {
      q: "Quelle température à cœur pour le poulet à la crème ?",
      a: "74 °C, mesurés au thermomètre dans la partie la plus épaisse du filet : c’est ce qui garantit que les bactéries de la volaille sont détruites. Sans thermomètre, coupez le filet le plus épais en son milieu. La chair doit être blanche et opaque jusqu’au centre, et le jus clair. Sinon, remettez-le quelques minutes dans la crème frémissante.",
    },
    {
      q: "Par quoi remplacer le vin blanc dans le poulet à la crème ?",
      a: "Par 10 cl de bouillon de volaille, avec un trait de jus de citron pour retrouver un peu d’acidité. Le vin bouillonne puis mijote une quinzaine de minutes : une partie de son alcool s’évapore, pas la totalité. Pour des enfants ou une femme enceinte, le bouillon règle la question.",
    },
    {
      q: "Pourquoi ma sauce à la crème reste liquide ?",
      a: "Parce que les champignons ont été ajoutés avant d’avoir rendu toute leur eau, ou que la crème n’a pas assez réduit. Sortez le poulet et laissez bouillonner la sauce 2 à 3 min de plus, en remuant, jusqu’à ce qu’elle nappe le dos d’une cuillère.",
    },
    {
      q: "Peut-on utiliser de la crème légère ?",
      a: "Non, pas pour une sauce qu’on fait réduire. À 15 % de matière grasse, la crème épaissit mal et risque de trancher au contact du vin et d’une ébullition prolongée. Prenez une crème entière à 30 %, épaisse ou liquide, les deux marchent.",
    },
    {
      q: "Peut-on préparer le poulet à la crème à l’avance ?",
      a: "Oui, la veille. Mettez-le au réfrigérateur dans les 2 heures et gardez-le 2 à 3 jours au plus. Réchauffez à feu doux, à couvert, avec deux cuillerées d’eau, jusqu’à ce que ce soit bien chaud au centre des filets. Les blancs perdent un peu de moelleux ; avec des cuisses, ça ne se remarque pas.",
    },
    {
      q: "Peut-on congeler le poulet à la crème ?",
      a: "Oui, 2 mois, à condition que le poulet n’ait pas déjà été congelé cru. Décongelez-le au réfrigérateur pendant une nuit, puis réchauffez doucement en remuant : si la sauce se sépare un peu, un coup de fouet la remet en place. Une fois décongelé, il ne se recongèle jamais.",
    },
  ],
  nutrition: { calories: 455, protein: 39, fat: 31, saturatedFat: 17, carbs: 5, sugar: 3, fiber: 2, sodium: 420 },
  annotations: { hero: "sorti à 74 °C, pas plus", detail: "poêle sèche, champignons dorés" },
  images: {
    heroAlt:
      "Poulet à la crème et aux champignons : blanc de poulet doré et tranché sur une sauce crème aux champignons, avec une salade",
    detailAlt:
      "Champignons bien dorés dans une poêle noire, saisis à feu vif comme pour le poulet à la crème et aux champignons",
    credits: {
      hero: {
        photographer: "Farhad Ibrahimzade",
        url: "https://www.pexels.com/photo/cooked-chicken-and-salad-on-creamy-mushrooms-5713768/",
      },
      detail: {
        photographer: "Geraud pfeiffer",
        url: "https://www.pexels.com/photo/fried-mushrooms-on-frying-pan-6605636/",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#C98A3B",
    onAccent: "#1B1712",
    ink: "#7A5016",
    tint: "#F8F1E4",
    deep: "#17110A",
    focus: "60% 55%",
  },
});
