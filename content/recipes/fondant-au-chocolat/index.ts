import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "fondant-au-chocolat",
  title: "Fondant au chocolat, cœur coulant",
  seoTitle: "Fondant au chocolat coulant : 10 minutes de four",
  tagline: "Le cœur coule à la première cuillère.",
  description:
    "Fondants au chocolat coulants pour 4 : 120 g de chocolat noir, 100 g de beurre, 2 œufs et 2 jaunes, 10 minutes à 210 °C. Les ramequins se préparent la veille.",
  summary:
    "Pour 4 fondants, faites fondre 120 g de chocolat noir avec 100 g de beurre, fouettez 2 œufs et 2 jaunes avec 50 g de sucre, puis réunissez le tout avec 25 g de farine. Répartissez dans 4 ramequins de 8 cm beurrés et poudrés de cacao, et enfournez 10 minutes à 210 °C : les bords sont pris, le centre reste liquide. Les ramequins remplis se gardent 24 heures au réfrigérateur et cuisent alors 12 minutes. Comptez 30 minutes en tout.",
  intro: [
    "Le fondant coulant est un petit gâteau individuel, cuit très vite et très chaud. En dix minutes, l’extérieur prend et forme une croûte tendre, pendant que le centre reste une crème de chocolat tiède qui s’échappe à la première cuillère.",
    "Tout se joue à une minute près. Une de trop, et le cœur a pris : c’est bon, mais ce n’est plus un coulant. Comme chaque four chauffe à sa façon, faites un fondant test la première fois et notez le bon temps.",
    "Pour un dîner, il a un vrai avantage : les ramequins se remplissent jusqu’à 24 heures à l’avance et passent du réfrigérateur au four pendant qu’on débarrasse la table.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "fondant au chocolat",
    "fondant au chocolat coulant",
    "recette fondant au chocolat",
    "fondant chocolat cœur coulant",
    "mi-cuit au chocolat",
    "fondant au chocolat individuel",
    "temps de cuisson fondant au chocolat",
    "fondant au chocolat préparé la veille",
  ],
  servings: 4,
  servingsLabel: { one: "fondant", other: "fondants" },
  times: { prep: 20, cook: 10 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Toute l’année"],
  tags: ["saint-valentin"],
  equipment: [
    "4 ramequins de 8 cm (15 cl)",
    "casserole et bol pour le bain-marie",
    "fouet",
    "pinceau de cuisine",
    "petit couteau",
  ],
  ingredients: [
    {
      title: "Les moules",
      items: [
        { qty: 10, unit: "g", name: "beurre mou", step: 5 },
        { qty: 1, unit: "cas", name: "cacao en poudre non sucré", step: 1 },
      ],
    },
    {
      title: "L’appareil",
      items: [
        { qty: 120, unit: "g", name: "chocolat noir", note: "60 à 70 % de cacao, en morceaux", step: 10 },
        { qty: 100, unit: "g", name: "beurre doux", note: "en dés", step: 10 },
        { qty: 2, name: "œuf", plural: "œufs", note: "à température ambiante", step: 1 },
        { qty: 2, name: "jaune d’œuf", plural: "jaunes d’œufs", step: 1 },
        { qty: 50, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1, fixed: true },
        { qty: 25, unit: "g", name: "farine", note: "type 45 ou 55, tamisée", step: 5 },
      ],
    },
    {
      title: "Pour servir",
      items: [{ qty: 1, unit: "cac", name: "sucre glace", step: 1, optional: true }],
    },
  ],
  method: [
    {
      title: "Les fondants",
      steps: [
        {
          title: "Préchauffer le four",
          text: "Préchauffez le four à 210 °C, chaleur statique, grille au milieu, pendant 15 minutes. Si vous préparez les fondants à l’avance, ne l’allumez qu’au moment de les cuire.",
          timer: { minutes: 15, label: "Préchauffage à 210 °C" },
        },
        {
          title: "Chemiser les ramequins",
          text: "Badigeonnez l’intérieur des ramequins de beurre mou au pinceau, fond et parois, sans oublier l’arête du fond. Versez le cacao dans le premier, faites-le tourner pour en couvrir toute la surface, puis versez l’excédent dans le suivant. Tapotez le dernier à l’envers au-dessus de l’évier.",
          tip: "Le cacao plutôt que la farine : il fait aussi bien glisser le fondant, sans laisser de traces blanches.",
        },
        {
          title: "Fondre le chocolat",
          text: "Faites fondre le chocolat et le beurre au bain-marie, le fond du bol sans toucher l’eau frémissante, en remuant doucement. Retirez dès que le mélange est lisse et brillant, puis laissez-le tiédir 5 minutes : il doit être chaud au doigt, sans brûler.",
          timer: { minutes: 5, label: "Chocolat qui tiédit" },
        },
        {
          title: "Fouetter les œufs",
          text: "Dans un saladier, fouettez les œufs, les jaunes, le sucre et le sel pendant 2 à 3 minutes, jusqu’à ce que le mélange pâlisse et épaississe légèrement. Inutile de le monter davantage : trop d’air ferait gonfler puis retomber les fondants.",
          timer: { minutes: 3, label: "Œufs et sucre" },
        },
        {
          title: "Assembler l’appareil",
          text: "Versez le chocolat tiède sur les œufs en fouettant doucement, puis ajoutez la farine en une fois et mélangez juste jusqu’à ce qu’il n’y ait plus de grumeaux. L’appareil est épais, lisse et brillant, et coule en ruban de la spatule.",
        },
        {
          title: "Remplir les ramequins",
          text: "Répartissez l’appareil dans les ramequins, aux trois quarts de leur hauteur, et posez-les sur une plaque. Pour les cuire plus tard, filmez-les et gardez-les au réfrigérateur jusqu’au lendemain au plus tard.",
        },
        {
          title: "Cuire 10 minutes",
          text: "Enfournez 10 minutes, ou 12 minutes si les ramequins sortent du réfrigérateur. Les fondants sont prêts quand ils ont gonflé, que leurs bords sont mats et pris, et que le centre, encore un peu bombé et brillant, tremble quand on secoue la plaque.",
          timer: { minutes: 10, label: "Fondants au four" },
          tip: "La première fois, cuisez un fondant seul pour régler le temps de votre four, et notez-le.",
        },
        {
          title: "Démouler",
          text: "Laissez reposer 1 minute à la sortie du four, pas plus. Passez la lame d’un petit couteau entre le fondant et la paroi, posez une assiette à l’envers sur le ramequin et retournez d’un geste net. Soulevez le ramequin, poudrez de sucre glace si vous aimez et servez aussitôt.",
          timer: { minutes: 1, label: "Repos avant démoulage" },
          tip: "Tenez le ramequin avec un torchon plié : il est brûlant, et c’est au moment de retourner qu’on hésite.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Un cœur qui reste liquide",
      text: "À 210 °C, la chaleur traverse l’appareil de l’extérieur vers le centre. Les protéines des œufs coagulent entre 62 et 70 °C environ : en 10 minutes, les bords ont dépassé ces températures et se sont figés, alors que le centre est resté en dessous. On arrête la cuisson à ce moment précis.",
    },
    {
      title: "Pourquoi des jaunes en plus",
      text: "Les jaunes apportent des graisses et des émulsifiants, comme la lécithine, qui rendent le cœur crémeux plutôt que simplement liquide. Ils prennent aussi à une température un peu plus haute que les blancs, ce qui laisse plus de marge au centre.",
    },
    {
      title: "Cuire froid",
      text: "Un appareil sorti du réfrigérateur part de 4 à 5 °C. Le centre met plus longtemps à chauffer pendant que les bords cuisent : l’écart entre croûte et cœur se creuse. D’où les 2 minutes de plus, et un coulant souvent plus régulier.",
    },
  ],
  tips: [
    "Les ramequins en céramique épaisse cuisent plus lentement que les cercles ou les moules en métal : avec du métal, retirez 1 à 2 minutes.",
    "Ne remplissez pas au-delà des trois quarts : l’appareil gonfle et déborderait sur la plaque.",
    "Servez avec quelque chose de froid pour le contraste : une boule de glace vanille, une crème anglaise ou une cuillerée de crème fraîche épaisse.",
    "Sucrez au sucre glace juste avant de servir, au tamis : posé sur un fondant chaud trop tôt, il fond et disparaît.",
  ],
  mistakes: [
    "Cuire une ou deux minutes de trop : le centre a pris et le fondant devient un petit gâteau moelleux. Sortez-les quand le centre tremble encore.",
    "Démouler tout de suite : le fondant s’effondre. Attendre 5 minutes : le cœur fige. Une minute de repos, c’est le bon compromis.",
    "Beurrer à la va-vite : un coin oublié suffit pour que le fondant reste collé et se déchire au démoulage.",
    "Verser le chocolat brûlant sur les œufs : ils commencent à cuire et l’appareil devient granuleux. Laissez-le tiédir 5 minutes.",
  ],
  variations: [
    {
      title: "Cœur garanti",
      text: "Remplissez les ramequins à moitié, posez au centre 1 carré de chocolat noir de 5 g et recouvrez d’appareil. Même cuit 1 minute de trop, le centre reste coulant.",
    },
    {
      title: "Cœur caramel",
      text: "Remplacez le carré de chocolat par 1 cuillerée à café de caramel au beurre salé bien froid, déposée au centre de la même façon.",
    },
    {
      title: "Sans gluten",
      text: "Remplacez les 25 g de farine par 20 g de fécule de maïs. La texture de la croûte est un peu plus fine, la cuisson ne change pas.",
    },
  ],
  storage:
    "Les fondants crus, en ramequins filmés, se gardent 24 heures au réfrigérateur au maximum. Une fois cuits, ils se mangent tout de suite : refroidis, ils restent bons, mais le cœur a pris et ne coule plus.",
  pairing: "Une boule de glace vanille, une crème anglaise froide ou quelques framboises.",
  faq: [
    {
      q: "Combien de temps faut-il cuire un fondant au chocolat coulant ?",
      a: "10 minutes à 210 °C pour des ramequins de 8 cm remplis aux trois quarts, 12 minutes s’ils sortent du réfrigérateur. Sortez-les quand le dessus a gonflé et que les bords sont mats, mais que le centre tremble encore quand on secoue la plaque.",
    },
    {
      q: "Peut-on préparer les fondants au chocolat la veille ?",
      a: "Oui, jusqu’à 24 heures à l’avance. Remplissez les ramequins, filmez-les et gardez-les au réfrigérateur. Enfournez-les directement, sans les laisser revenir à température ambiante, en comptant 12 minutes au lieu de 10.",
    },
    {
      q: "Peut-on servir un fondant coulant à une femme enceinte ou à un jeune enfant ?",
      a: "Non, pas avec un cœur coulant : il contient des œufs peu cuits. Pour les femmes enceintes, les jeunes enfants, les personnes âgées ou immunodéprimées, prolongez la cuisson de 4 à 5 minutes, jusqu’à ce qu’une lame plantée au centre ressorte presque sèche.",
    },
    {
      q: "Pourquoi mon fondant au chocolat n’est-il pas coulant ?",
      a: "Parce qu’il a cuit trop longtemps, souvent d’une minute ou deux seulement. Un four plus chaud que son affichage, des moules en métal ou un appareil à température ambiante raccourcissent la cuisson. Faites un fondant test et ajustez le temps.",
    },
    {
      q: "Quelle différence avec un gâteau au chocolat fondant ?",
      a: "Le fondant coulant cuit en portions individuelles, très vite et très chaud, et se mange aussitôt avec un centre liquide. Le gâteau au chocolat fondant cuit en grand moule, plus longtemps, et prend en refroidissant : il est dense et humide, pas coulant.",
    },
    {
      q: "Peut-on congeler des fondants au chocolat ?",
      a: "Oui, crus, dans leurs ramequins filmés, 1 mois au congélateur. Laissez-les décongeler une nuit au réfrigérateur, puis enfournez-les 12 minutes comme des fondants préparés la veille. Ne recongelez pas.",
    },
  ],
  nutrition: {
    calories: 490,
    protein: 7,
    fat: 38,
    saturatedFat: 23,
    carbs: 27,
    sugar: 20,
    fiber: 3,
    sodium: 80,
  },
  annotations: { hero: "on démoule après une minute", detail: "le centre doit encore trembler" },
  images: {
    heroAlt:
      "Fondant au chocolat poudré de sucre glace, ouvert sur son cœur coulant qui s’étale dans l’assiette, vu du dessus",
    detailAlt:
      "Fondant au chocolat entamé dont le cœur liquide s’échappe sur l’assiette, fruits rouges en arrière-plan",
    credits: {
      hero: {
        photographer: "Aida Shukuhi",
        url: "https://www.pexels.com/photo/chocolate-lava-cake-sprinkled-with-powdered-sugar-20377567/",
      },
      detail: {
        photographer: "Valeria Boltneva",
        url: "https://www.pexels.com/photo/delicious-molten-chocolate-lava-cake-on-plate-36183209/",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#7A3B2A",
    onAccent: "#ffffff",
    ink: "#6A3122",
    tint: "#F7ECE8",
    deep: "#170C08",
    focus: "50% 66%",
  },
});
