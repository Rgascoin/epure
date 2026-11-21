import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "veloute-de-chou-fleur",
  title: "Velouté de chou-fleur",
  seoTitle: "Velouté de chou-fleur soyeux, sans goût de chou",
  tagline: "On l’arrête avant qu’il sente le chou.",
  description:
    "Un velouté de chou-fleur blanc et soyeux pour 4 : 750 g de chou-fleur, une pomme de terre, à peine de crème, 20 minutes de frémissement et un long mixage.",
  summary:
    "Pour 4 personnes, faites suer un oignon dans 20 g de beurre sans le colorer, ajoutez 750 g de chou-fleur et 150 g de pomme de terre, couvrez de 80 cl d’eau et laissez frémir 15 à 20 minutes, pas plus. Mixez 3 minutes, finissez avec 10 cl de crème (facultative) et de la muscade, puis servez avec des bouquets rôtis à 200 °C et des noisettes grillées. Comptez 50 minutes en tout.",
  intro: [
    "Un bon velouté de chou-fleur est blanc, lisse comme une crème, avec un goût doux, presque sucré. Il demande peu de choses : un chou-fleur, une pomme de terre pour lui donner du corps, un oignon et de l’eau. La crème devient presque une option.",
    "Ce qui le fait rater, c’est la cuisson trop longue. Passé une vingtaine de minutes, le chou-fleur se met à sentir le chou, puis la cantine. On coupe le feu dès que la pointe d’un couteau traverse un morceau de tige sans résister.",
    "Le reste se joue au mixeur, qu’on laisse tourner bien plus longtemps qu’on ne le croit. Sur le dessus, quelques bouquets rôtis au four et des noisettes grillées, pour avoir quelque chose sous la dent.",
  ],
  category: "Entrée",
  cuisine: "Française",
  keywords: [
    "velouté de chou-fleur",
    "recette velouté de chou-fleur",
    "soupe de chou-fleur",
    "velouté de chou-fleur pomme de terre",
    "velouté de chou-fleur sans crème",
    "crème de chou-fleur",
    "soupe chou-fleur mixée",
  ],
  diet: ["vegetarian", "glutenFree"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 20, cook: 30 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: ["casserole de 3 l avec couvercle", "blender ou mixeur plongeant", "plaque de cuisson", "petite poêle"],
  ingredients: [
    {
      title: "Le velouté",
      items: [
        { qty: 20, unit: "g", name: "beurre", step: 5 },
        { qty: 1, name: "oignon", plural: "oignons", note: "environ 100 g, émincé", step: 0.5 },
        {
          qty: 750,
          unit: "g",
          name: "chou-fleur",
          note: "bouquets et tige pelée, pris sur un chou d’environ 1,2 kg",
          step: 50,
        },
        {
          qty: 150,
          unit: "g",
          name: "pomme de terre farineuse",
          note: "type bintje, épluchée, en cubes de 2 cm",
          step: 10,
        },
        { qty: 1, unit: "cac", name: "sel fin", step: 0.5 },
        { qty: 80, unit: "cl", name: "eau", note: "ou bouillon de légumes", step: 5 },
        { qty: 10, unit: "cl", name: "crème liquide entière", note: "facultative", step: 1 },
        { qty: 2, unit: "pincee", name: "noix de muscade râpée", step: 1 },
        { name: "poivre blanc" },
      ],
    },
    {
      title: "Pour servir",
      items: [
        { qty: 150, unit: "g", name: "petits bouquets de chou-fleur", note: "pris sur le même chou", step: 10 },
        { qty: 2, unit: "cas", name: "huile d’olive", note: "1 pour rôtir, 1 pour servir", step: 1 },
        { qty: 1, unit: "pincee", name: "fleur de sel", step: 1 },
        { qty: 30, unit: "g", name: "noisette", plural: "noisettes", note: "décortiquées", step: 5 },
      ],
    },
  ],
  method: [
    {
      title: "Le velouté",
      steps: [
        {
          title: "Préparer le chou-fleur",
          text: "Préchauffez le four à 200 °C. Retirez les feuilles du chou-fleur, détachez les bouquets et gardez-en 150 g parmi les plus petits pour le dessus. Pelez la tige au couteau pour ôter la partie fibreuse, puis coupez-la en rondelles de 5 mm. Taillez les autres bouquets en morceaux de 3 cm.",
          tip: "La tige pelée a le même goût que les bouquets. Coupée fin, elle cuit au même rythme.",
        },
        {
          title: "Rôtir les petits bouquets",
          text: "Étalez les petits bouquets sur la plaque, arrosez-les d’1 cas d’huile d’olive, ajoutez la fleur de sel et mélangez avec les mains. Enfournez pour 20 à 25 minutes en les retournant à mi-cuisson. Ils sont prêts quand les bords sont bien dorés, presque bruns, et que le cœur reste un peu ferme.",
          timer: { minutes: 25, label: "Bouquets rôtis au four" },
        },
        {
          title: "Faire suer l’oignon",
          text: "Pendant ce temps, faites fondre le beurre dans la casserole sur feu doux. Ajoutez l’oignon, couvrez et laissez cuire 8 minutes en remuant deux fois. Il doit devenir translucide et fondant, sans la moindre trace de doré. S’il commence à colorer, baissez le feu et ajoutez une cuillerée d’eau.",
          timer: { minutes: 8, label: "Oignon à couvert" },
        },
        {
          title: "Ajouter les légumes",
          text: "Ajoutez le chou-fleur et la pomme de terre, salez avec la cuillère à café de sel et remuez le temps d’enrober le tout de beurre. Versez les 80 cl d’eau : elle doit arriver juste à hauteur des légumes, quitte à laisser dépasser quelques bouquets.",
        },
        {
          title: "Cuire juste à point",
          text: "Portez à ébullition, couvrez en laissant un petit espace, puis baissez le feu pour garder un simple frémissement pendant 15 à 20 minutes. Vérifiez sur un morceau de tige : la pointe d’un couteau doit le traverser sans résister, et un cube de pomme de terre s’écraser contre la paroi. À ce stade, coupez le feu.",
          timer: { minutes: 20, label: "Cuisson du chou-fleur" },
          tip: "Au-delà de 30 minutes, l’odeur de chou s’installe et le velouté tire sur le gris.",
        },
        {
          title: "Griller les noisettes",
          text: "Faites griller les noisettes dans la petite poêle, à sec, sur feu moyen, 4 à 5 minutes en secouant souvent. Elles sont prêtes quand elles sentent le grillé et que leur peau se fendille. Frottez-les dans un torchon pour retirer les peaux, puis concassez-les grossièrement au couteau.",
          timer: { minutes: 5, label: "Noisettes à la poêle" },
        },
        {
          title: "Mixer longtemps",
          text: "Mixez le velouté avec tout son liquide : 3 minutes au blender à pleine vitesse, en deux fois si le bol est petit, ou 5 bonnes minutes au mixeur plongeant. Il est prêt quand il nappe le dos d’une cuillère en couche lisse et brillante, sans un grain sous la langue.",
          timer: { minutes: 3, label: "Mixage au blender" },
          tip: "Au blender, remplissez le bol à moitié au plus et tenez le couvercle avec un torchon : la vapeur peut le soulever.",
        },
        {
          title: "Assaisonner et ajuster",
          text: "Remettez le velouté dans la casserole sur feu doux. Ajoutez la crème si vous en mettez, la muscade et un peu de poivre blanc, puis goûtez et rectifiez le sel. Trop épais, allongez-le d’eau chaude par petites louches ; trop fluide, laissez-le réduire à découvert. Réchauffez-le sans jamais le laisser bouillir fort.",
        },
        {
          title: "Servir bien chaud",
          text: "Versez le velouté dans des bols chauds. Posez au centre quelques bouquets rôtis, parsemez de noisettes concassées et finissez par un filet d’huile d’olive. Servez tout de suite, tant que les bouquets sont encore croustillants sur les bords.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi il finit par sentir le chou",
      text: "Comme tous les choux, le chou-fleur contient des glucosinolates. À la chaleur, ils se décomposent en composés soufrés, et leur quantité augmente avec le temps passé dans l’eau chaude. Une cuisson courte, arrêtée dès que la tige est tendre, garde un goût doux ; une cuisson longue libère l’odeur qui envahit la cuisine.",
    },
    {
      title: "La pomme de terre lie sans farine",
      text: "L’amidon d’une pomme de terre farineuse gonfle à partir d’environ 60 °C en absorbant l’eau. Au mixage, ces grains gonflés se dispersent dans le liquide et l’épaississent. 150 g suffisent à donner de la tenue au velouté sans goût de purée, ce qui permet de réduire la crème ou de s’en passer.",
    },
    {
      title: "Pas de coloration, pas de goût grillé",
      text: "Dans un oignon qui dore, les réactions de Maillard et la caramélisation produisent des arômes grillés et des pigments bruns. Ils masqueraient la douceur du chou-fleur et donneraient un velouté beige. À feu doux et à couvert, l’oignon cuit dans sa propre vapeur et reste blanc.",
    },
  ],
  tips: [
    "Versez l’eau juste à hauteur des légumes. On peut toujours allonger un velouté après le mixage, jamais retirer de l’eau.",
    "Choisissez un chou-fleur bien blanc et serré, lourd pour sa taille, avec des feuilles fermes. Les taches brunes se retirent au couteau, mais un chou mou a déjà perdu de son goût.",
    "Râpez la muscade au dernier moment et goûtez entre deux pincées : elle passe vite de discrète à envahissante.",
    "Pour un velouté vraiment blanc, poivrez au poivre blanc, ou ne poivrez qu’au moment de servir.",
  ],
  mistakes: [
    "Laisser cuire 40 minutes « pour être sûr » : le velouté sent le chou et prend une teinte grise. Arrêtez dès que le couteau traverse la tige.",
    "Laisser dorer l’oignon : le velouté vire au beige et prend un goût grillé. Si quelques morceaux ont bruni, retirez-les avant d’ajouter le chou-fleur.",
    "Mixer 30 secondes et s’arrêter : il reste granuleux en bouche. Relancez le mixeur, ce n’est jamais trop tard, même une fois la crème ajoutée.",
    "Le réchauffer à gros bouillons : il attache au fond de la casserole et prend un goût de brûlé. Feu doux et cuillère en bois.",
  ],
  variations: [
    {
      title: "Au poireau",
      text: "Remplacez l’oignon par le blanc de 2 poireaux (environ 200 g), lavé et émincé, et faites-le suer 10 minutes à couvert au lieu de 8. Le velouté est plus doux et un peu plus végétal.",
    },
    {
      title: "Éclats de jambon cru",
      text: "À la place des noisettes, posez 4 tranches fines de jambon cru sur une plaque et passez-les 8 à 10 minutes au four à 200 °C, jusqu’à ce qu’elles soient sèches et cassantes. Laissez-les refroidir, puis brisez-les en éclats sur les bols. Le velouté n’est alors plus végétarien.",
    },
    {
      title: "Au bleu d’Auvergne",
      text: "Remplacez la crème par 60 g de bleu d’Auvergne émietté, ajouté juste avant le mixage. Ne salez qu’après avoir goûté : le fromage apporte déjà beaucoup de sel.",
    },
    {
      title: "Sans crème",
      text: "Remplacez les 10 cl de crème par 10 cl de lait entier, ou par rien du tout : la pomme de terre suffit pour la tenue. Comptez alors environ 75 kcal de moins par bol.",
    },
  ],
  storage:
    "Il se garde 2 à 3 jours au réfrigérateur dans une boîte fermée, ou 2 mois au congélateur. Gardez les noisettes à part dans un bocal et refaites les bouquets rôtis au moment de servir. Réchauffez le velouté à feu doux en remuant ; s’il a un peu tranché après congélation, un coup de mixeur le rend lisse.",
  pairing: "Un blanc sec et vif, comme un muscadet sur lie ou un petit chablis.",
  faq: [
    {
      q: "Faut-il mettre de la pomme de terre dans un velouté de chou-fleur ?",
      a: "Non, mais elle aide beaucoup. Une pomme de terre farineuse de 150 g donne du corps et permet de réduire la crème, voire de s’en passer. Sans elle, le velouté reste plus fluide : réduisez alors l’eau à 60 cl.",
    },
    {
      q: "Combien de temps cuire le chou-fleur pour un velouté ?",
      a: "15 à 20 minutes à petit frémissement, à couvert, après l’ébullition. Le repère est la tige : la pointe d’un couteau doit la traverser sans résister. Au-delà de 30 minutes, l’odeur de chou s’installe.",
    },
    {
      q: "Pourquoi mon velouté de chou-fleur sent le chou ?",
      a: "Parce qu’il a cuit trop longtemps. Les composés soufrés du chou-fleur se forment avec la durée de cuisson. Coupez le feu dès que la tige est tendre, et ne laissez pas le velouté mijoter pendant que vous faites autre chose.",
    },
    {
      q: "Le velouté de chou-fleur est-il végétarien ?",
      a: "Oui, avec de l’eau ou un bouillon de légumes. Attention en revanche aux noisettes, qui sont des fruits à coque : pour une personne allergique, remplacez-les par des graines de courge grillées ou par davantage de bouquets rôtis.",
    },
    {
      q: "Peut-on faire un velouté avec du chou-fleur surgelé ?",
      a: "Oui. Mettez 750 g de bouquets surgelés directement dans la casserole, sans les décongeler, et comptez 12 à 15 minutes de frémissement. Le goût est un peu plus plat. Les bouquets rôtis réussissent moins bien avec du surgelé, qui rend de l’eau sur la plaque.",
    },
    {
      q: "Peut-on congeler le velouté de chou-fleur ?",
      a: "Oui, jusqu’à 2 mois, dans une boîte hermétique remplie aux trois quarts. Décongelez-le une nuit au réfrigérateur, puis réchauffez-le à feu doux. Ne le recongelez pas une fois décongelé.",
    },
  ],
  nutrition: {
    calories: 270,
    protein: 7,
    fat: 19.5,
    saturatedFat: 8.5,
    carbs: 16.5,
    sugar: 8,
    fiber: 7,
    sodium: 620,
  },
  annotations: { hero: "un filet d’huile au dernier moment", detail: "des bouquets rôtis pour croquer" },
  images: {
    heroAlt:
      "Deux bols de velouté de chou-fleur garnis d’éclats de jambon cru, de persil et d’un filet d’huile d’olive",
    detailAlt: "Mains tenant un bol noir de velouté de chou-fleur bien blanc, garni de bouquets rôtis et de persil",
    credits: {
      hero: {
        photographer: "Zehra Yılmaz",
        url: "https://www.pexels.com/photo/two-bowls-of-cauliflower-soup-19367737/",
      },
      detail: {
        photographer: "Lionel Ntasano",
        url: "https://www.pexels.com/photo/hands-holding-creamy-cauliflower-soup-in-black-bowl-37099928/",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#C99A3E",
    onAccent: "#1B1712",
    ink: "#7A5716",
    tint: "#FAF4E5",
    deep: "#16120A",
    focus: "50% 30%",
  },
});
