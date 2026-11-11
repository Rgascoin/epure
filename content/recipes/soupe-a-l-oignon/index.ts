import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "soupe-a-l-oignon",
  title: "Soupe à l’oignon gratinée",
  seoTitle: "Soupe à l’oignon gratinée : oignons fondus et comté doré",
  tagline: "Les oignons ne se pressent pas.",
  description:
    "La soupe à l’oignon gratinée des bistrots : 1 kg d’oignons fondus près d’une heure au beurre, un bouillon de bœuf, du pain grillé et du comté doré au gril.",
  summary:
    "Pour 4 personnes, la soupe à l’oignon gratinée commence par 1 kg d’oignons émincés qu’on fait fondre puis caraméliser 55 minutes dans 40 g de beurre. Singez avec 20 g de farine, déglacez avec 15 cl de vin blanc sec, mouillez avec 1,2 l de bouillon de bœuf et laissez mijoter 25 minutes. Versez dans des bols allant au four, couvrez de pain grillé et de 200 g de comté râpé, puis gratinez 5 à 7 minutes sous le gril. Comptez 2 heures en tout.",
  intro: [
    "La soupe à l’oignon gratinée, c’est d’abord une affaire d’oignons. Un kilo, émincé fin, qui fond dans le beurre jusqu’à devenir une sorte de confiture brune. Le vin, le bouillon et le pain viennent ensuite, et le comté qui déborde des bols termine le travail sous le gril.",
    "Ce qui la fait rater, presque toujours, c’est l’impatience. Des oignons poussés à feu vif brûlent sur les bords et restent pâles au milieu, et la soupe a un goût d’eau sucrée. Il faut près d’une heure de cuisson douce en remuant de temps en temps. Ce n’est pas du travail, juste de la présence.",
    "Le reste est simple. Prenez du pain rassis, qui tient sous le fromage, et des bols qui vont au four. La soupe se prépare très bien la veille : il ne reste alors qu’à gratiner.",
  ],
  category: "Entrée",
  cuisine: "Française",
  keywords: [
    "soupe à l’oignon",
    "soupe à l’oignon gratinée",
    "recette soupe à l’oignon",
    "gratinée à l’oignon",
    "soupe à l’oignon traditionnelle",
    "soupe à l’oignon au comté",
    "soupe à l’oignon facile",
    "comment caraméliser des oignons",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 25, cook: 90 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Automne", "Hiver"],
  tags: ["hiver", "automne", "nouvel-an"],
  equipment: [
    "cocotte en fonte ou faitout à fond épais de 24 à 28 cm",
    "spatule en bois",
    "4 bols allant au four (40 cl environ)",
    "plaque de cuisson",
    "râpe à fromage",
  ],
  ingredients: [
    {
      title: "La soupe",
      items: [
        { qty: 1000, unit: "g", name: "oignons jaunes", note: "émincés finement", step: 50 },
        { qty: 40, unit: "g", name: "beurre doux", step: 5 },
        { qty: 1, unit: "cas", name: "huile neutre", note: "tournesol ou colza", step: 0.5 },
        { qty: 0.5, unit: "cac", name: "sel fin", note: "plus au goût en fin de cuisson", step: 0.5 },
        { qty: 20, unit: "g", name: "farine", step: 5 },
        { qty: 15, unit: "cl", name: "vin blanc sec", note: "un vin que vous boiriez", step: 1 },
        { qty: 120, unit: "cl", name: "bouillon de bœuf", note: "chaud et peu salé", step: 10 },
        { qty: 2, unit: "brin", name: "thym", step: 1 },
        { qty: 1, unit: "feuille", name: "laurier", step: 1 },
        { name: "poivre du moulin" },
      ],
    },
    {
      title: "Le gratin",
      items: [
        { qty: 12, unit: "tranche", name: "baguette", note: "de la veille, en tranches de 1,5 cm", step: 1 },
        { qty: 1, unit: "gousse", name: "ail", note: "pour frotter le pain", step: 1, optional: true },
        { qty: 200, unit: "g", name: "comté", note: "affiné 12 mois environ, râpé", step: 10 },
      ],
    },
  ],
  method: [
    {
      title: "Les oignons",
      steps: [
        {
          title: "Émincer les oignons",
          text: "Épluchez les oignons, coupez-les en deux de la racine à la tige, puis taillez chaque moitié en lamelles de 3 mm dans le même sens, en suivant les fibres. Un kilo, ça fait une montagne : c’est normal, ils vont perdre les trois quarts de leur volume.",
          tip: "Coupés dans le sens des fibres, les oignons gardent leur forme pendant la longue cuisson. Coupés en travers, ils finissent en purée.",
        },
        {
          title: "Faire fondre à couvert",
          text: "Dans la cocotte, faites fondre le beurre avec l’huile sur feu moyen. Ajoutez les oignons et le sel, remuez, couvrez et laissez cuire 10 minutes. Les oignons s’affaissent et rendent leur eau.",
          timer: { minutes: 10, label: "Oignons à couvert" },
        },
        {
          title: "Caraméliser lentement",
          text: "Retirez le couvercle et baissez sur feu moyen-doux. Laissez cuire 40 à 50 minutes en remuant toutes les 5 minutes et en grattant le fond. Si ça attache, versez une cuillerée d’eau et décollez les sucs. Les oignons sont prêts quand ils sont brun ambré, fondants, presque confits.",
          timer: { minutes: 45, label: "Caramélisation" },
          tip: "Les sucs bruns qui se forment au fond de la cocotte, c’est du goût. Tant qu’ils ne noircissent pas, laissez-les se former, puis décollez-les avec un peu d’eau.",
        },
        {
          title: "Singer et déglacer",
          text: "Saupoudrez la farine sur les oignons et remuez 2 minutes sur le feu, pour qu’elle perde son goût de cru. Versez le vin blanc, grattez le fond et laissez bouillir 2 minutes : il doit presque entièrement s’évaporer.",
          timer: { minutes: 4, label: "Farine et vin" },
        },
        {
          title: "Mijoter le bouillon",
          text: "Ajoutez le bouillon chaud, le thym et le laurier. Portez à frémissement et laissez cuire 25 à 30 minutes à couvert, en laissant une fente. Retirez les herbes, goûtez, puis salez et poivrez seulement maintenant : le bouillon a réduit et s’est concentré.",
          timer: { minutes: 25, label: "Mijotage" },
        },
      ],
    },
    {
      title: "Le gratin",
      steps: [
        {
          title: "Griller le pain",
          text: "Pendant que la soupe mijote, préchauffez le four à 200 °C. Posez les tranches de baguette sur la plaque et faites-les sécher 8 à 10 minutes, en les retournant à mi-cuisson : elles doivent être dorées et dures. Frottez-les d’ail si vous en mettez.",
          timer: { minutes: 9, label: "Pain grillé" },
        },
        {
          title: "Remplir les bols",
          text: "Allumez le gril du four. Posez les bols sur la plaque, qui recueillera ce qui déborde, et remplissez-les de soupe bien chaude jusqu’à 1 cm du bord. Couvrez chaque bol de 3 tranches de pain, puis de comté, en le laissant déborder sur le rebord.",
          tip: "Le fromage qui touche le bord du bol accroche à la porcelaine en cuisant. Il fait un couvercle qui garde la soupe chaude, et une croûte qu’on gratte à la cuillère.",
        },
        {
          title: "Gratiner sous le gril",
          text: "Glissez la plaque à 15 cm du gril environ et laissez gratiner 5 à 7 minutes, sans vous éloigner : le comté bouillonne et se colore de taches brunes. Servez tout de suite, en prévenant que les bols sont brûlants.",
          timer: { minutes: 6, label: "Gratin" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi si longtemps",
      text: "Tant que les oignons rendent de l’eau, la cocotte plafonne autour de 100 °C et ils ne font que cuire. Une fois l’eau évaporée, la température monte : les sucres de l’oignon caramélisent et réagissent avec ses acides aminés (réaction de Maillard). Ces composés bruns font la couleur et le goût de la soupe, bien plus que le bouillon.",
    },
    {
      title: "Ce que fait la farine",
      text: "Cuite 2 minutes dans le gras, la farine perd son goût de cru. Dans le bouillon chaud, son amidon gonfle et épaissit légèrement le liquide. La soupe gagne un peu de corps sans devenir un velouté.",
    },
    {
      title: "Pourquoi du pain rassis",
      text: "En rassissant puis en grillant, le pain perd son eau et sa mie devient rigide. Il absorbe le bouillon lentement et porte le fromage. Un pain frais se gorge de liquide en quelques secondes et s’effondre dans le bol.",
    },
  ],
  tips: [
    "Prenez des oignons jaunes ordinaires. Les oignons doux donnent une soupe nettement plus sucrée, et les rouges une couleur moins franche.",
    "Utilisez la cocotte la plus large que vous ayez. Plus il y a de surface, plus l’eau s’évapore vite et plus les oignons colorent.",
    "Avec un bouillon en cube, prenez-le peu salé, ou utilisez-en un seul pour 1,2 l. Il va réduire, et le comté est déjà salé.",
    "Râpez le comté vous-même. Pour plus de fils, mélangez-le moitié-moitié avec de l’emmental.",
    "Préparez la soupe la veille : elle a encore plus de goût le lendemain. Réchauffez-la jusqu’à ébullition avant de gratiner.",
  ],
  mistakes: [
    "Monter le feu pour gagner du temps. Les oignons brûlent sur les bords avant d’avoir caramélisé au cœur, et la soupe devient amère.",
    "Prendre du pain frais. Il se transforme en bouillie dès qu’il touche le bouillon.",
    "Saler en début de cuisson avec un bouillon du commerce. Après réduction, la soupe est souvent trop salée.",
    "Utiliser des bols qui ne vont pas au four. Ils peuvent se fêler sous le gril.",
    "Gratiner trop loin du gril. Le fromage fond mais ne dore pas, et le pain finit détrempé.",
  ],
  variations: [
    {
      title: "Au cidre",
      text: "Remplacez les 15 cl de vin blanc par 20 cl de cidre brut. La soupe est un peu plus douce, avec une note de pomme.",
    },
    {
      title: "Sans vin",
      text: "Remplacez le vin par 15 cl de bouillon en plus et 1 c. à café de vinaigre de cidre, ajouté en fin de cuisson. Il faut un peu d’acidité pour réveiller la douceur des oignons.",
    },
    {
      title: "Végétarienne",
      text: "Prenez un bouillon de légumes bien corsé et ajoutez 1 c. à soupe de sauce soja pour la profondeur. Le comté est fabriqué avec de la présure animale : pour une version strictement végétarienne, choisissez un fromage à pâte pressée sans présure animale.",
    },
  ],
  storage:
    "Sans le pain ni le fromage, la soupe se garde 3 jours au réfrigérateur en boîte fermée et 3 mois au congélateur. Réchauffez-la jusqu’à ébullition, puis gratinez au dernier moment : une soupe déjà gratinée se réchauffe mal.",
  pairing: "Le vin blanc qui a servi à la soupe, ou un côtes-du-jura blanc, qui va bien avec le comté.",
  faq: [
    {
      q: "Quel fromage pour une soupe à l’oignon gratinée ?",
      a: "Un fromage à pâte pressée cuite : comté, gruyère ou emmental. Le comté affiné une douzaine de mois a le plus de goût ; l’emmental file davantage. Un mélange des deux marche très bien.",
    },
    {
      q: "Combien de temps faut-il pour caraméliser des oignons ?",
      a: "Comptez 50 minutes à 1 heure pour 1 kg, dont 10 minutes à couvert puis le reste à découvert sur feu moyen-doux. Ils sont prêts quand ils sont brun ambré et fondants. À feu vif, ils brûlent avant de caraméliser.",
    },
    {
      q: "Peut-on préparer la soupe à l’oignon à l’avance ?",
      a: "Oui, la soupe se garde 3 jours au réfrigérateur et elle a même plus de goût le lendemain. Gardez le pain et le fromage à part, réchauffez la soupe jusqu’à ébullition et gratinez juste avant de servir.",
    },
    {
      q: "Peut-on congeler la soupe à l’oignon ?",
      a: "Oui, sans pain ni fromage, 3 mois en boîte fermée. Faites-la décongeler une nuit au réfrigérateur, réchauffez-la jusqu’à ébullition, puis gratinez. Ne recongelez pas une soupe décongelée.",
    },
    {
      q: "Peut-on faire la soupe à l’oignon sans vin ?",
      a: "Oui. Remplacez le vin par du bouillon et ajoutez 1 c. à café de vinaigre de cidre en fin de cuisson. Le vin bout puis mijote une demi-heure, mais il peut rester un peu d’alcool : pour des enfants ou une femme enceinte, faites-la sans.",
    },
    {
      q: "Comment gratiner sans bols qui vont au four ?",
      a: "Gratinez le pain à part : couvrez les tranches grillées de comté et passez-les 3 à 4 minutes sous le gril, sur la plaque. Posez-les sur la soupe bien chaude, dans les bols, au moment de servir.",
    },
  ],
  nutrition: {
    calories: 530,
    protein: 22,
    fat: 28,
    saturatedFat: 16,
    carbs: 43,
    sugar: 13,
    fiber: 5,
    sodium: 1200,
  },
  annotations: {
    hero: "le fromage déborde, c’est voulu",
    detail: "pain rassis, sinon c’est de la bouillie",
  },
  images: {
    heroAlt: "Soupe à l’oignon gratinée dans un bol blanc à têtes de lion, comté doré coulant sur le bord, pain à côté",
    detailAlt: "Soupe à l’oignon vue de dessus, croûtons grillés et fromage fondu dans un bol blanc",
    credits: {
      hero: {
        photographer: "Laura Paredis",
        url: "https://www.pexels.com/photo/close-up-of-a-meal-26424747/",
      },
      detail: {
        photographer: "Lisa Kostina",
        url: "https://www.pexels.com/photo/soup-with-cheese-and-meat-11865617/",
      },
    },
  },
  datePublished: "2026-11-03",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#A0612B",
    onAccent: "#ffffff",
    ink: "#7E4A1C",
    tint: "#F8EEE2",
    deep: "#1C120A",
    focus: "42% 48%",
  },
});
