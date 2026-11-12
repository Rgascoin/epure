import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "veloute-de-champignons",
  title: "Velouté de champignons",
  seoTitle: "Velouté de champignons poêlés, crémeux, prêt en 1 h",
  tagline: "Tout se joue dans la poêle.",
  description:
    "Un velouté de champignons qui a le goût de la poêle : 900 g de champignons dorés en fournées, échalote, bouillon et crème, prêt en 1 heure pour 4.",
  summary:
    "Pour 4 personnes, faites dorer 750 g de champignons de Paris en trois fournées dans une grande poêle, ajoutez-les à 2 échalotes fondues, mouillez avec 75 cl de bouillon et laissez cuire 15 minutes. Mixez avec 20 cl de crème, puis servez avec 150 g de lamelles poêlées au beurre au dernier moment. Comptez 1 heure en tout, dont 20 minutes de préparation.",
  intro: [
    "Un velouté de champignons doit avoir le goût du champignon poêlé, pas celui du champignon bouilli. La différence se fait dans les vingt premières minutes, à la poêle, bien avant le mixeur.",
    "Un champignon de Paris, c’est plus de 90 % d’eau. Entassés dans une casserole, ils la rendent d’un coup et cuisent dedans : la soupe sera grise et fade. Étalés en une seule couche sur feu vif, par petites fournées, ils perdent leur eau, puis dorent et prennent une odeur de noisette.",
    "On garde une poignée de lamelles pour le dessus, poêlées juste avant de servir. Elles restent fermes et dorées sur le velouté lisse, et on sent la différence à chaque cuillerée.",
  ],
  category: "Entrée",
  cuisine: "Française",
  keywords: [
    "velouté de champignons",
    "recette velouté de champignons",
    "velouté de champignons de paris",
    "velouté de champignons à la crème",
    "soupe aux champignons",
    "soupe de champignons maison",
    "velouté de champignons des bois",
    "velouté champignons échalote",
  ],
  diet: ["vegetarian"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 20, cook: 40 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Automne", "Hiver"],
  tags: ["automne", "hiver"],
  equipment: ["grande poêle de 28 cm", "casserole ou cocotte de 3 l", "mixeur plongeant ou blender", "spatule en bois"],
  ingredients: [
    {
      title: "Le velouté",
      items: [
        {
          qty: 750,
          unit: "g",
          name: "champignons de Paris",
          note: "bruns de préférence, coupés en quartiers",
          step: 50,
        },
        { qty: 2, name: "échalote", plural: "échalotes", note: "ciselées finement", step: 1 },
        { qty: 1, unit: "gousse", name: "ail", note: "écrasée", step: 1 },
        { qty: 2, unit: "brin", name: "thym", step: 1 },
        { qty: 25, unit: "g", name: "beurre", step: 5 },
        { qty: 3, unit: "cas", name: "huile neutre", note: "tournesol ou colza", step: 1 },
        { qty: 75, unit: "cl", name: "bouillon de légumes", note: "chaud, ou de volaille", step: 5 },
        { qty: 20, unit: "cl", name: "crème liquide entière", note: "30 % de matière grasse", step: 5 },
        { name: "sel fin" },
        { name: "poivre du moulin" },
      ],
    },
    {
      title: "La garniture",
      items: [
        {
          qty: 150,
          unit: "g",
          name: "champignons",
          note: "de Paris, pleurotes ou girolles, en lamelles de 3 mm",
          step: 25,
        },
        { qty: 10, unit: "g", name: "beurre", step: 5 },
        { qty: 1, unit: "cas", name: "persil plat", note: "ciselé", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "Le velouté",
      steps: [
        {
          title: "Nettoyer les champignons",
          text: "Coupez le bout terreux des pieds et frottez les chapeaux avec un linge humide. S’ils sont très sales, passez-les vite sous l’eau et séchez-les aussitôt dans un torchon. Coupez les 750 g du velouté en quartiers, ou en lamelles de 5 mm pour les plus gros. Gardez 150 g des plus jolis à part pour la garniture.",
          tip: "Un champignon qui trempe boit l’eau comme une éponge, et il ne dorera plus.",
        },
        {
          title: "Faire fondre l’échalote",
          text: "Dans la casserole, faites fondre 10 g de beurre à feu moyen-doux. Ajoutez les échalotes, l’ail et le thym avec une pincée de sel. Laissez fondre 8 à 10 minutes en remuant de temps en temps : elles deviennent translucides et tendres, sans colorer. Pendant ce temps, passez à la poêle.",
          timer: { minutes: 10, label: "Échalotes fondues" },
        },
        {
          title: "Dorer en trois fournées",
          text: "Chauffez 1 cuillerée d’huile dans la poêle à feu vif. Étalez un tiers des champignons en une seule couche, sans saler, et n’y touchez pas pendant 3 minutes. Remuez, ajoutez 5 g de beurre et poursuivez 3 minutes. Ils sont prêts quand ils sont bien dorés et que la poêle grésille au lieu de bouillonner. Versez-les dans la casserole et recommencez deux fois.",
          timer: { minutes: 6, label: "Une fournée de champignons" },
          tip: "Si le fond de la poêle reste visible entre les morceaux, la quantité est bonne.",
        },
        {
          title: "Déglacer la poêle",
          text: "Versez 10 cl du bouillon dans la poêle encore chaude et grattez le fond avec la spatule pour décoller les sucs bruns. Ajoutez ce jus dans la casserole : une bonne partie du goût est là.",
        },
        {
          title: "Mijoter",
          text: "Versez le reste du bouillon dans la casserole et portez à frémissement. Couvrez et laissez cuire 15 minutes à petits bouillons. Un quartier de champignon doit s’écraser sans résistance contre la paroi.",
          timer: { minutes: 15, label: "Cuisson du velouté" },
        },
        {
          title: "Mixer avec la crème",
          text: "Retirez le thym, ajoutez la crème et mixez 2 minutes au mixeur plongeant, jusqu’à ce que le velouté soit lisse et nappe le dos d’une cuillère. Au blender, remplissez le bol à moitié et tenez le couvercle sous un torchon. Trop épais, allongez avec un peu d’eau chaude. Salez et poivrez.",
          timer: { minutes: 2, label: "Mixage" },
          tip: "Mixez plus longtemps que vous ne le pensez : les fibres du champignon cèdent tard.",
        },
      ],
    },
    {
      title: "La garniture et le service",
      steps: [
        {
          title: "Poêler la garniture",
          text: "Essuyez la poêle et remettez-la à feu vif avec 10 g de beurre. Quand il mousse, étalez les lamelles réservées et laissez-les dorer 4 à 5 minutes en les retournant une fois. Salez seulement à la fin, poivrez et ajoutez le persil.",
          timer: { minutes: 5, label: "Garniture dorée" },
        },
        {
          title: "Servir",
          text: "Réchauffez le velouté à feu doux s’il a refroidi, en remuant pour qu’il n’attache pas. Versez-le dans des bols chauds et déposez les lamelles au centre, avec un tour de moulin à poivre.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi les champignons entassés ne dorent pas",
      text: "Chauffé, un champignon rend son eau. Si elle s’accumule au fond de la poêle, il cuit dedans à 100 °C, pas plus. Les réactions de Maillard, qui donnent la couleur brune et les arômes grillés, ne démarrent vraiment qu’au-delà de 140 °C, une fois la surface sèche. En petites fournées, l’eau s’évapore aussitôt et la surface peut dépasser ce seuil.",
    },
    {
      title: "Le sel attend la fin",
      text: "Le sel tire l’eau des cellules par osmose. Salés dès le départ, les champignons rendent leur jus plus vite qu’il ne s’évapore et se mettent à bouillir. Salés une fois dorés, ils gardent leur croûte.",
    },
    {
      title: "Pourquoi la crème entière",
      text: "Une crème à 30 % de matière grasse supporte le frémissement sans se séparer. Une crème légère à 15 % contient plus de protéines par rapport au gras et peut grainer si on la fait bouillir.",
    },
  ],
  tips: [
    "Les champignons de Paris bruns, dits rosés, ont plus de goût que les blancs et rendent un peu moins d’eau.",
    "Préparez toute la garniture avant de lancer le velouté : à la fin, il ne reste que 5 minutes de poêle.",
    "Une poêle en inox ou en fer laisse plus de sucs qu’une poêle antiadhésive, et ce sont eux qui colorent le velouté.",
    "Pour un velouté très fin, passez-le au chinois après le mixage en pressant avec une louche.",
  ],
  mistakes: [
    "Tout mettre dans la poêle d’un coup : les champignons baignent dans leur eau et grisent. Laissez évaporer à feu vif avant d’ajouter quoi que ce soit, puis continuez en fournées plus petites.",
    "Saler en début de cuisson : les champignons rendent leur jus et bouillent au lieu de dorer. Le sel va à la fin de chaque fournée, ou dans le bouillon.",
    "Laisser la poêle sans la déglacer : les sucs bruns restent collés au fond et le velouté a un goût plat.",
    "Remplir le blender de soupe brûlante : la vapeur soulève le couvercle. Mixez en deux fois, bol à moitié plein.",
  ],
  variations: [
    {
      title: "Aux champignons des bois",
      text: "Remplacez 250 g de champignons de Paris par autant de cèpes, girolles ou pleurotes, dorés en dernière fournée. Avec 15 g de cèpes séchés trempés 20 minutes dans 20 cl d’eau chaude, ajoutez cette eau filtrée et réduisez le bouillon à 55 cl.",
    },
    {
      title: "Sans lait ni beurre",
      text: "Faites tout à l’huile d’olive et remplacez la crème par 20 cl de crème d’avoine. Pour plus de corps, ajoutez une pomme de terre de 150 g coupée en dés avec le bouillon, cuite les mêmes 15 minutes.",
    },
    {
      title: "À l’huile de noisette",
      text: "Au service, un filet d’huile de noisette et quelques noisettes torréfiées concassées sur chaque bol remplacent le persil. Signalez-les aux invités allergiques aux fruits à coque.",
    },
  ],
  storage:
    "Le velouté se garde 2 à 3 jours au réfrigérateur dans une boîte fermée, la garniture se fait au moment de servir. Pour le congeler, arrêtez-vous avant la crème : 3 mois au congélateur, puis réchauffez et ajoutez la crème à ce moment-là. Ne le recongelez pas.",
  pairing:
    "Une tranche de pain de campagne grillée frottée d’ail, et un vin blanc sec du Mâconnais. En entrée, il précède bien une volaille rôtie.",
  faq: [
    {
      q: "Faut-il laver les champignons de Paris ?",
      a: "Non, pas en les faisant tremper. Un linge humide ou une brosse suffit pour la terre. S’ils sont vraiment sales, rincez-les rapidement sous le robinet et séchez-les tout de suite dans un torchon : un champignon gorgé d’eau ne dore plus.",
    },
    {
      q: "Peut-on faire un velouté avec des champignons surgelés ?",
      a: "Oui. Mettez-les sans les décongeler dans la poêle très chaude et laissez l’eau s’évaporer entièrement avant qu’ils commencent à dorer. Ils colorent moins que des frais et le velouté est un peu moins parfumé, mais ça marche.",
    },
    {
      q: "Peut-on préparer le velouté de champignons la veille ?",
      a: "Oui, il se garde 2 à 3 jours au réfrigérateur. Il épaissit en refroidissant : allongez-le avec un peu d’eau en le réchauffant. Faites la garniture au dernier moment, réchauffées les lamelles deviennent molles.",
    },
    {
      q: "Peut-on congeler un velouté de champignons à la crème ?",
      a: "Oui, mais il vaut mieux le congeler avant d’ajouter la crème, qui peut se séparer à la décongélation. Il tient 3 mois. Réchauffez-le doucement, ajoutez la crème et mixez quelques secondes.",
    },
    {
      q: "Comment épaissir un velouté de champignons trop liquide ?",
      a: "Laissez-le réduire 5 à 10 minutes à découvert à petits bouillons, en remuant. La prochaine fois, ajoutez une petite pomme de terre en dés avec le bouillon : son amidon donne du corps sans changer le goût.",
    },
    {
      q: "Quels champignons choisir pour un velouté ?",
      a: "Les champignons de Paris bruns font une très bonne base, bon marché et disponibles toute l’année. Un quart de cèpes, de girolles ou de pleurotes ajoute un goût plus boisé. Gardez les champignons les plus chers pour la garniture, où on les voit.",
    },
  ],
  nutrition: {
    calories: 300,
    protein: 7,
    fat: 27,
    saturatedFat: 15,
    carbs: 7,
    sugar: 4,
    fiber: 4,
    sodium: 700,
  },
  annotations: { hero: "lisse, à peine moucheté", detail: "garniture poêlée à la dernière minute" },
  images: {
    heroAlt:
      "Velouté de champignons dans une assiette creuse blanche, un chapeau de champignon garni et du persil au centre",
    detailAlt:
      "Bol de velouté de champignons garni de lamelles de champignons poêlés et de persil, sur une table en bois",
    credits: {
      hero: {
        photographer: "alleksana",
        url: "https://www.pexels.com/photo/bowl-of-soup-with-mushroom-on-top-5950430/",
      },
      detail: {
        photographer: "Jahra Tasfia Reza",
        url: "https://www.pexels.com/photo/creamy-mushroom-soup-with-fresh-garnish-39927557/",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#B07A45",
    onAccent: "#1B1712",
    ink: "#7A4E22",
    tint: "#F7F0E6",
    deep: "#1A120B",
    focus: "48% 42%",
  },
});
