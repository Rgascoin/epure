import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "gnocchis-maison",
  title: "Gnocchis maison",
  seoTitle: "Gnocchis maison au beurre noisette et à la sauge",
  tagline: "Le moins de farine possible.",
  description:
    "Gnocchis de pomme de terre maison : pommes de terre cuites au four, 200 g de farine pour 800 g de pulpe, puis beurre noisette et sauge. 4 parts, 2 h.",
  summary:
    "Pour 4 personnes, cuisez 1 kg de pommes de terre farineuses entières au four à 200 °C, environ 1 heure, puis passez la chair encore chaude au presse-purée. Incorporez peu à peu 200 g de farine (250 g par kilo de pulpe au maximum), roulez, coupez, pochez les gnocchis jusqu’à ce qu’ils remontent, plus 30 secondes, et faites-les dorer dans 80 g de beurre noisette à la sauge. Comptez 2 heures, dont 45 minutes de travail.",
  intro: [
    "Un gnocchi réussi est léger, presque fondant, et tient juste assez pour passer de l’eau à la poêle. Il ne demande que des pommes de terre, de la farine et du sel, mais il ne pardonne pas l’excès de farine.",
    "C’est l’eau qui fait tout rater. Des pommes de terre bouillies en sont gorgées, la pâte colle, on rajoute de la farine, et on finit avec des petites balles compactes. Cuites entières au four dans leur peau, elles sèchent au lieu de se mouiller, et la pâte se contente de peu.",
    "Ensuite, on pèse la pulpe, on ajoute la farine petit à petit et on s’arrête dès que la pâte se tient. Les gnocchis passent dans l’eau bouillante, puis dans un beurre noisette où grésillent quelques feuilles de sauge.",
  ],
  category: "Plat",
  cuisine: "Italienne",
  keywords: [
    "gnocchis maison",
    "recette gnocchis maison",
    "gnocchi de pomme de terre",
    "gnocchis beurre sauge",
    "gnocchis beurre noisette",
    "pâte à gnocchis",
    "combien de farine pour des gnocchis",
    "congeler des gnocchis maison",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 45, cook: 75 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["automne"],
  equipment: [
    "presse-purée ou moulin à légumes, grille fine",
    "balance de cuisine",
    "grande casserole de 5 l",
    "écumoire",
    "grande poêle de 30 cm",
    "plaque de four",
  ],
  ingredients: [
    {
      title: "La pâte",
      items: [
        {
          qty: 1000,
          unit: "g",
          name: "pomme de terre farineuse",
          plural: "pommes de terre farineuses",
          note: "bintje ou agria, de taille égale",
          step: 50,
        },
        { qty: 1, unit: "cac", name: "sel fin", step: 0.5 },
        { name: "noix de muscade", note: "râpée", optional: true },
        { qty: 1, name: "jaune d’œuf", plural: "jaunes d’œufs", step: 1, optional: true },
        {
          qty: 200,
          unit: "g",
          name: "farine",
          note: "T45 ou T55, 250 g par kilo de pulpe au maximum, plus un peu pour le plan de travail",
          step: 10,
        },
      ],
    },
    {
      title: "La cuisson et le beurre de sauge",
      items: [
        { qty: 40, unit: "g", name: "gros sel", note: "pour 4 l d’eau", step: 5 },
        { qty: 1, unit: "cas", name: "huile d’olive", step: 1 },
        { qty: 80, unit: "g", name: "beurre", note: "doux", step: 10 },
        { qty: 12, name: "feuille de sauge", plural: "feuilles de sauge", note: "fraîches", step: 1 },
        { qty: 40, unit: "g", name: "parmesan", note: "râpé", step: 5 },
        { name: "poivre du moulin" },
      ],
    },
  ],
  method: [
    {
      title: "La pâte",
      steps: [
        {
          title: "Cuire les pommes de terre",
          text: "Préchauffez le four à 200 °C. Lavez et séchez les pommes de terre, piquez-les trois fois à la fourchette et posez-les directement sur la grille. Cuisez-les 50 à 70 minutes selon leur taille : la peau est sèche et un peu ridée, et la lame d’un couteau entre jusqu’au cœur sans aucune résistance.",
          timer: { minutes: 60, label: "Pommes de terre au four" },
          tip: "Au four, la pomme de terre perd de l’eau au lieu d’en prendre. Moins d’eau dans la pulpe, c’est moins de farine dans la pâte, et des gnocchis plus légers.",
        },
        {
          title: "Passer la pulpe chaude",
          text: "Coupez-les en deux dès la sortie du four, tenez-les dans un torchon et videz la chair à la cuillère. Passez-la aussitôt au presse-purée dans un saladier posé sur la balance : vous devez avoir environ 800 g de pulpe. Étalez-la en couche lâche sur le plan de travail et laissez-la fumer 5 minutes.",
          timer: { minutes: 5, label: "Laisser fumer la pulpe" },
        },
        {
          title: "Incorporer la farine",
          text: "Salez la pulpe, ajoutez la muscade et le jaune d’œuf si vous en mettez. Parsemez 150 g de farine et rassemblez du bout des doigts, sans pétrir. Ajoutez le reste par cuillerées, seulement tant que la pâte colle franchement aux doigts. Elle est prête quand elle est souple, à peine collante, et se tient en boule.",
          tip: "Ne pétrissez pas. Plus on travaille la farine, plus elle forme de gluten, et plus les gnocchis deviennent élastiques sous la dent.",
        },
        {
          title: "Tester un gnocchi",
          text: "Portez 4 l d’eau à ébullition avec le gros sel. Pochez une boulette de pâte de la taille d’une noix pendant 2 minutes : elle doit remonter à la surface et garder sa forme. Si elle se délite, ajoutez 20 g de farine à la pâte et refaites le test. Baissez ensuite le feu pendant le façonnage.",
          timer: { minutes: 2, label: "Gnocchi test" },
        },
        {
          title: "Rouler et couper",
          text: "Farinez légèrement le plan de travail. Partagez la pâte en quatre et roulez chaque part sous vos paumes en un boudin de 2 cm d’épaisseur. Coupez-le en tronçons de 2 cm avec un couteau fariné et posez-les sur une plaque farinée, sans qu’ils se touchent.",
        },
        {
          title: "Strier à la fourchette",
          text: "C’est facultatif. Roulez chaque tronçon du pouce sur le dos d’une fourchette, en appuyant à peine : il se creuse d’un côté et se strie de l’autre. Ces creux retiennent le beurre.",
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Pocher en deux fois",
          text: "Remettez l’eau à gros bouillon et plongez la moitié des gnocchis. Ils coulent, puis remontent à la surface au bout de 1 à 2 minutes : laissez-les encore 30 secondes, soit 2 à 3 minutes en tout. Sortez-les à l’écumoire sur un plat huilé, sans les empiler, puis faites cuire la seconde moitié.",
          timer: { minutes: 3, label: "Une fournée de gnocchis" },
          tip: "Pas plus de la moitié à la fois : l’eau doit reprendre l’ébullition tout de suite, sinon les gnocchis ramollissent avant de remonter.",
        },
        {
          title: "Faire le beurre noisette",
          text: "Dans la grande poêle, faites fondre le beurre à feu moyen. Il mousse, puis la mousse retombe et de petits points bruns se forment au fond : au bout de 3 à 4 minutes, il sent la noisette grillée. Jetez-y les feuilles de sauge, elles grésillent et deviennent croustillantes en 30 secondes.",
          timer: { minutes: 4, label: "Beurre noisette" },
          tip: "Restez devant la poêle. Le beurre passe du blond au brûlé en moins d’une minute, et l’odeur de noisette prévient juste avant.",
        },
        {
          title: "Dorer et servir",
          text: "Ajoutez les gnocchis en une seule couche. Laissez-les 2 minutes sans y toucher, puis faites-les sauter 1 minute, soit 3 minutes en tout : ils doivent être dorés par endroits et brillants de beurre. Poivrez, parsemez de parmesan et servez aussitôt.",
          timer: { minutes: 3, label: "Gnocchis à la poêle" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Le four plutôt que l’eau",
      text: "Une pomme de terre cuite à l’eau absorbe un peu d’eau et garde toute la sienne. Au four, sa propre eau s’échappe en vapeur à travers la peau. La pulpe est plus sèche, elle a besoin de moins de farine pour se tenir, et c’est la farine en trop qui rend les gnocchis lourds.",
    },
    {
      title: "Pourquoi travailler la pulpe chaude",
      text: "Chaude, la pulpe libère encore sa vapeur et ses grains d’amidon gonflés restent souples. En refroidissant, cet amidon se réorganise (on parle de rétrogradation) : la pulpe durcit, devient collante et réclame davantage de farine.",
    },
    {
      title: "Le signal de la surface",
      text: "En chauffant, l’air et la vapeur emprisonnés dans la pâte se dilatent et le gnocchi devient moins dense que l’eau : il remonte. À ce moment, l’extérieur est pris, mais le centre a besoin d’encore 30 secondes pour que l’amidon de la farine soit cuit.",
    },
    {
      title: "Ce qui brunit dans le beurre",
      text: "Le beurre contient environ 16 % d’eau. Tant qu’elle s’évapore, il mousse et reste vers 100 °C. Quand la mousse retombe, la température grimpe et les protéines et le lactose du petit-lait brunissent au fond de la poêle : c’est la réaction de Maillard qui donne le goût de noisette.",
    },
  ],
  tips: [
    "Choisissez des pommes de terre de même taille : elles cuisent ensemble, et aucune ne reste ferme au centre pendant que les autres sèchent.",
    "Pesez la pulpe, pas les pommes de terre crues : c’est elle qui fixe la farine. 250 g par kilo de pulpe est un plafond, pas un objectif.",
    "Le jaune d’œuf rend la pâte plus facile à rouler et les gnocchis plus fermes. Sans lui, ils sont plus fondants mais plus fragiles.",
    "Cuisez les gnocchis dans l’heure qui suit le façonnage, ou congelez-les tout de suite : crus, ils ramollissent et collent à la plaque en attendant.",
  ],
  mistakes: [
    "Cuire les pommes de terre à l’eau : la pulpe humide réclame beaucoup plus de farine et les gnocchis deviennent lourds. Si c’est fait, faites sécher la purée 3 minutes dans une casserole sur feu doux, en remuant, avant d’ajouter la farine.",
    "Verser toute la farine d’un coup : on dépasse la bonne dose sans s’en rendre compte, et les gnocchis sortent compacts. Gardez-en toujours un quart de côté.",
    "Pétrir la pâte comme une pâte à pain : le gluten se développe et les gnocchis deviennent caoutchouteux. Rassemblez, sans plus.",
    "Laisser refroidir les pommes de terre avant de les écraser : la pulpe devient collante et boit la farine. Passez-les au presse-purée encore brûlantes.",
    "Entasser les gnocchis égouttés : ils se soudent en une seule masse. Étalez-les sur un plat huilé, en une couche.",
  ],
  variations: [
    {
      title: "Sauce tomate",
      text: "Au lieu du beurre de sauge, roulez les gnocchis pochés dans 40 cl de sauce tomate chaude et laissez-les 2 minutes sur feu doux. Finissez avec quelques feuilles de basilic et le parmesan.",
    },
    {
      title: "Au gorgonzola",
      text: "Faites fondre 150 g de gorgonzola dans 15 cl de crème liquide, 3 minutes à feu doux, puis enrobez-y les gnocchis pochés, sans les faire dorer. Poivrez généreusement.",
    },
    {
      title: "Au thym",
      text: "Remplacez la sauge par 6 brins de thym frais : égrenez les feuilles dans le beurre noisette au moment d’ajouter les gnocchis, pour qu’elles ne brûlent pas.",
    },
  ],
  storage:
    "Crus, les gnocchis ne se gardent pas au réfrigérateur : ils ramollissent et collent. Congelez-les 2 heures sur une plaque farinée, sans qu’ils se touchent, puis en sac, 1 mois maximum, et cuisez-les sans les décongeler. Pochés, refroidis et huilés, ils tiennent 2 jours au réfrigérateur en boîte fermée. Ne recongelez jamais des gnocchis décongelés.",
  pairing:
    "Une salade un peu amère, endives ou trévise, assaisonnée à l’huile de noix, pour répondre au beurre. Dans le verre, un blanc sec et vif.",
  faq: [
    {
      q: "Combien de farine pour 1 kg de pommes de terre ?",
      a: "200 g environ pour 1 kg de pommes de terre crues, qui donnent à peu près 800 g de pulpe. La vraie mesure, c’est la pulpe : 250 g de farine par kilo de pulpe au maximum. Ajoutez-la petit à petit et arrêtez dès que la pâte ne colle plus franchement aux doigts.",
    },
    {
      q: "Pourquoi mes gnocchis se défont-ils dans l’eau ?",
      a: "Parce que la pâte manque de tenue : pulpe trop humide ou pas tout à fait assez de farine. Pochez toujours un gnocchi test avant de façonner le reste. S’il se délite, ajoutez 20 g de farine à la pâte et recommencez le test.",
    },
    {
      q: "Pourquoi mes gnocchis sont-ils durs ?",
      a: "Parce qu’ils contiennent trop de farine, ou que la pâte a été pétrie. Les deux viennent souvent de pommes de terre cuites à l’eau, trop humides. Cuisez-les au four, ajoutez la farine par petites quantités et rassemblez la pâte sans la travailler.",
    },
    {
      q: "Quelles pommes de terre choisir pour faire des gnocchis ?",
      a: "Des farineuses, comme la bintje ou l’agria. Leur chair sèche et riche en amidon se tient avec peu de farine. Les variétés à chair ferme, comme la charlotte, donnent une pulpe collante qui en réclame beaucoup plus.",
    },
    {
      q: "Peut-on congeler des gnocchis maison ?",
      a: "Oui, crus. Étalez-les sur une plaque farinée sans qu’ils se touchent et laissez-les durcir 2 heures au congélateur, puis rassemblez-les dans un sac. Ils se gardent 1 mois. Plongez-les encore congelés dans l’eau bouillante et comptez environ 1 minute de plus.",
    },
    {
      q: "Faut-il mettre un œuf dans la pâte à gnocchis ?",
      a: "Non, ce n’est pas obligatoire. Un jaune rend la pâte plus facile à façonner et les gnocchis plus fermes. Sans œuf, ils sont plus tendres, mais il faut les manipuler avec plus de douceur.",
    },
    {
      q: "Peut-on préparer les gnocchis à l’avance ?",
      a: "Oui. Crus, congelez-les dès qu’ils sont façonnés. Pochés, égouttés et légèrement huilés, ils se gardent 2 jours au réfrigérateur en boîte fermée : il suffit de les faire dorer 4 à 5 minutes dans le beurre au moment de servir.",
    },
  ],
  nutrition: { calories: 550, protein: 14, fat: 23, saturatedFat: 13, carbs: 72, sugar: 3, fiber: 5, sodium: 660 },
  annotations: { hero: "dorés par endroits, pas partout", detail: "les stries retiennent le beurre" },
  images: {
    heroAlt:
      "Gnocchis de pomme de terre dorés au beurre dans une poêle noire, parsemés de thym, soulevés par une spatule en bois",
    detailAlt: "Gnocchis maison crus, striés à la fourchette, posés sur un plan de travail fariné avant la cuisson",
    credits: {
      hero: { photographer: "kaboompics", url: "https://www.pexels.com/photo/a-close-up-shot-of-a-gnocchi-6659692/" },
      detail: {
        photographer: "Erna Daalman",
        url: "https://www.pexels.com/photo/close-up-of-ingredients-for-cooking-5451005/",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#E09A2D",
    onAccent: "#1B1712",
    ink: "#7E4F0B",
    tint: "#FBF1DE",
    deep: "#1A1208",
    focus: "58% 50%",
  },
});
