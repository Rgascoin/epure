import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "pommes-de-terre-duchesse",
  title: "Pommes de terre duchesse",
  seoTitle: "Pommes duchesse maison : rosettes qui se tiennent au four",
  tagline: "Une purée qui tient debout.",
  description:
    "Pommes duchesse pour 6 : 1,2 kg de pommes de terre farineuses à la vapeur, séchées, 50 g de beurre et 3 jaunes, pochées en rosettes, 18 minutes à 200 °C.",
  summary:
    "Pour 6 personnes, soit environ 24 rosettes, faites cuire à la vapeur 1,2 kg de pommes de terre farineuses, séchez-les 3 minutes dans une casserole sur le feu, puis passez-les chaudes au presse-purée. Ajoutez 50 g de beurre, 3 jaunes d’œufs, du sel et de la muscade, pochez des rosettes à la douille cannelée, laissez-les raffermir 20 minutes au frais, dorez-les à l’œuf et faites-les cuire 15 à 18 minutes à 200 °C. Comptez 1 h 40, dont 35 minutes de travail.",
  intro: [
    "Les pommes duchesse sont une purée très ferme, enrichie de jaunes d’œufs, qu’on poche en rosettes et qu’on dore au four. Les stries prennent couleur et croustillent un peu, le cœur reste souple. Avec une volaille ou un rôti de fête, elles ont l’avantage de se préparer à l’avance et même de se congeler crues.",
    "Elles ratent pour une seule raison : trop d’eau. Une purée humide s’étale sur la plaque et les rosettes s’affaissent dans le four. D’où des pommes de terre farineuses, cuites à la vapeur plutôt que dans l’eau, puis séchées quelques minutes dans la casserole avant de passer au presse-purée.",
    "Pas de lait ici, pas de mixeur non plus. Si la purée tient une pointe bien droite au bout de la spatule, elle tiendra aussi au four.",
  ],
  category: "Accompagnement",
  cuisine: "Française",
  keywords: [
    "pommes duchesse",
    "pommes de terre duchesse",
    "recette pommes duchesse",
    "pommes duchesse maison",
    "pommes duchesse au four",
    "pommes duchesse à l’avance",
    "congeler pommes duchesse",
    "accompagnement de noël",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 35, cook: 45, rest: 20 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["noel"],
  equipment: [
    "cuit-vapeur ou panier vapeur sur une grande casserole",
    "presse-purée à grille fine ou moulin à légumes",
    "poche à douille avec une douille cannelée de 12 à 14 mm",
    "plaque de four et papier cuisson",
    "pinceau souple",
  ],
  ingredients: [
    {
      title: "La purée",
      items: [
        {
          qty: 1200,
          unit: "g",
          name: "pommes de terre farineuses",
          note: "type bintje, environ 1 kg une fois épluchées",
          step: 100,
        },
        { qty: 50, unit: "g", name: "beurre doux", note: "en morceaux", step: 5 },
        { qty: 3, name: "jaune d’œuf", plural: "jaunes d’œufs", step: 1 },
        { qty: 1, unit: "cac", name: "sel fin", step: 0.25 },
        { qty: 2, unit: "pincee", name: "noix de muscade râpée", step: 1 },
      ],
    },
    {
      title: "La dorure",
      items: [
        { qty: 1, name: "jaune d’œuf", plural: "jaunes d’œufs", step: 1, fixed: true },
        { qty: 1, unit: "cas", name: "lait", step: 1, fixed: true },
      ],
    },
  ],
  method: [
    {
      title: "La purée",
      steps: [
        {
          title: "Cuire à la vapeur",
          text: "Épluchez les pommes de terre et coupez-les en morceaux de 4 cm, tous de la même taille. Faites-les cuire à la vapeur 20 à 25 minutes, au-dessus d’une eau qui bout franchement. Elles sont prêtes quand la pointe d’un couteau entre sans résistance et que le morceau glisse tout seul de la lame.",
          timer: { minutes: 25, label: "Cuisson vapeur" },
        },
        {
          title: "Sécher à la casserole",
          text: "Videz l’eau, essuyez la casserole et remettez-y les pommes de terre, sur feu doux. Secouez-la doucement 2 à 3 minutes : la vapeur s’échappe et la surface des morceaux devient blanche et farineuse. Arrêtez avant que le fond ne colore.",
          timer: { minutes: 3, label: "Sécher les pommes de terre" },
          tip: "C’est l’étape qui fait tenir les rosettes : moins d’eau dans la purée, moins d’affaissement au four.",
        },
        {
          title: "Passer au presse-purée",
          text: "Passez les pommes de terre encore brûlantes au presse-purée, au-dessus de la casserole, par petites quantités. Travaillez vite : refroidies, elles deviennent collantes. N’utilisez ni mixeur ni robot, qui donnent une pâte élastique.",
        },
        {
          title: "Ajouter beurre et jaunes",
          text: "Sur feu très doux, incorporez le beurre à la spatule jusqu’à ce qu’il disparaisse. Hors du feu, ajoutez les 3 jaunes un par un, en mélangeant vivement après chacun, puis le sel et la muscade. La purée doit être lisse, ferme, et garder une pointe droite quand on soulève la spatule.",
          tip: "Goûtez à ce stade : le sel ne se rattrape plus une fois les rosettes pochées.",
        },
      ],
    },
    {
      title: "Les rosettes",
      steps: [
        {
          title: "Pocher les rosettes",
          text: "Garnissez la poche tant que la purée est tiède : froide, elle devient dure à pousser. Tenez la poche bien droite, à 1 cm de la plaque couverte de papier cuisson, et poussez en traçant deux petits tours, sur 5 cm de diamètre. Relâchez la pression, puis levez d’un coup sec. Espacez-les de 3 cm.",
          tip: "Faites une rosette d’essai : si elle s’étale, la purée a besoin d’un passage de plus sur le feu.",
        },
        {
          title: "Raffermir au frais",
          text: "Glissez la plaque 20 minutes au réfrigérateur, sans couvrir : les rosettes se raffermissent et tiendront mieux sous le pinceau. Pendant ce temps, préchauffez le four à 200 °C, chaleur statique.",
          timer: { minutes: 20, label: "Raffermir au frais" },
        },
        {
          title: "Dorer à l’œuf",
          text: "Battez le dernier jaune avec le lait. Badigeonnez chaque rosette du bout du pinceau, en tapotant, sans écraser les stries. Ne laissez pas la dorure couler sur le papier : elle y brûlerait.",
        },
        {
          title: "Cuire au four",
          text: "Enfournez à mi-hauteur pour 15 à 18 minutes, jusqu’à ce que les crêtes soient bien dorées, presque brunes aux pointes, et la base blonde. Servez tout de suite : en refroidissant, les rosettes perdent un peu de leur tenue.",
          timer: { minutes: 18, label: "Cuisson au four" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi des pommes de terre farineuses",
      text: "Les variétés farineuses contiennent plus d’amidon et moins d’eau que les variétés à chair ferme. À la cuisson, leurs cellules gonflent et se séparent : écrasées, elles donnent une purée sèche et légère, qui se poche et garde son relief. Une variété ferme donne une purée plus humide et plus collante, qui s’étale.",
    },
    {
      title: "L’eau, ennemie des rosettes",
      text: "Au four, l’eau restée dans la purée se change en vapeur et ramollit la rosette de l’intérieur. C’est pour cela qu’on cuit à la vapeur, qu’on sèche les morceaux dans la casserole et qu’on n’ajoute pas de lait. Moins il y a d’eau, plus les stries restent nettes.",
    },
    {
      title: "Le presse-purée plutôt que le mixeur",
      text: "Le presse-purée sépare les cellules sans les briser. Les lames d’un mixeur les déchirent : l’amidon libéré forme une colle élastique. Les pommes de terre se passent chaudes, quand l’amidon est encore souple ; en refroidissant, il devient plus collant.",
    },
    {
      title: "Ce que font les jaunes",
      text: "Les jaunes lient la purée et enrobent le beurre. Au four, leurs protéines coagulent et fixent la forme des rosettes, tandis que la dorure brunit sur les crêtes sous l’effet des réactions de Maillard.",
    },
  ],
  tips: [
    "Pesez les pommes de terre une fois épluchées : 1 kg pour 50 g de beurre et 3 jaunes, c’est la proportion qui tient.",
    "Prenez une grosse douille cannelée, 12 mm au moins : plus petite, elle se bouche et les stries s’écrasent.",
    "Gardez les blancs : ils se congèlent et servent plus tard pour des financiers ou une meringue.",
    "Pour un repas de fête, pochez et congelez les rosettes la semaine d’avant : le jour J, il n’y a plus qu’à dorer et enfourner.",
  ],
  mistakes: [
    "Prendre des pommes de terre à chair ferme : la purée reste humide et élastique, les rosettes s’étalent. Ici, pas de rattrapage, servez-la en purée et changez de variété la prochaine fois.",
    "Sauter le séchage : les rosettes s’affaissent au four. Si la rosette d’essai s’étale, remettez la purée 3 à 4 minutes sur feu doux en remuant sans cesse.",
    "Passer les pommes de terre au mixeur : on obtient une pâte collante qui ne se poche pas proprement.",
    "Noyer les rosettes de dorure : elle coule, comble les stries et brûle sur le papier. Une couche fine, au bout du pinceau, suffit.",
  ],
  variations: [
    {
      title: "Au parmesan",
      text: "Ajoutez 40 g de parmesan finement râpé avec les jaunes et réduisez le sel à une demi-cuillère à café. Même cuisson.",
    },
    {
      title: "En bouchées pour l’apéritif",
      text: "Avec une douille cannelée de 10 mm, pochez des rosettes de 3 cm. Vous en obtiendrez une quarantaine ; comptez 10 à 12 minutes à 200 °C.",
    },
    {
      title: "En bordure de plat",
      text: "Pochez la purée en couronne sur le bord d’un plat à gratin pour encadrer un émincé de volaille ou des noix de Saint-Jacques en sauce. Dorez et passez 15 minutes à 200 °C.",
    },
  ],
  storage:
    "Crues, les rosettes se gardent 24 h au réfrigérateur, filmées, à cause des jaunes, ou 1 mois au congélateur : congelez-les 2 h à plat sur la plaque, puis rangez-les dans un sac. Cuites, elles se gardent 2 jours au réfrigérateur et se réchauffent 10 minutes au four à 180 °C. Ne recongelez jamais des rosettes décongelées.",
  pairing:
    "Avec une volaille rôtie, un rôti de bœuf ou un gibier en sauce. Le vin sera celui du plat qu’elles accompagnent.",
  faq: [
    {
      q: "Peut-on congeler des pommes duchesse ?",
      a: "Oui, crues. Congelez les rosettes 2 h à plat sur la plaque, puis rangez-les dans un sac : elles se gardent 1 mois. Le jour venu, posez-les sur du papier cuisson, dorez-les à l’œuf et enfournez-les encore congelées, 22 à 25 minutes à 200 °C. Ne les décongelez pas avant, elles s’affaisseraient.",
    },
    {
      q: "Peut-on préparer les pommes duchesse la veille ?",
      a: "Oui. Pochez-les, filmez la plaque et gardez-la au réfrigérateur 24 h au plus, puisque la purée contient des jaunes crus. Dorez-les au dernier moment et comptez 2 à 3 minutes de cuisson en plus.",
    },
    {
      q: "Peut-on faire des pommes duchesse avec des pommes de terre à chair ferme ?",
      a: "Non, pas de bonne façon. Les variétés fermes, comme la charlotte, donnent une purée trop humide et collante : les rosettes s’étalent au four et perdent leurs stries. Choisissez une pomme de terre farineuse, souvent vendue pour la purée ou les frites.",
    },
    {
      q: "Faut-il sécher les pommes de terre pour des pommes duchesse ?",
      a: "Oui, c’est l’étape la plus importante. Après la cuisson, 2 à 3 minutes dans la casserole sur feu doux chassent l’eau restée en surface. Sans cela, la purée est trop molle pour garder la forme de la douille.",
    },
    {
      q: "Peut-on faire des pommes duchesse sans poche à douille ?",
      a: "Oui. Glissez la douille cannelée dans un sac de congélation solide dont vous coupez un coin. Sans douille du tout, formez des quenelles avec deux cuillères : elles dorent aussi bien, mais sans les stries.",
    },
    {
      q: "Combien de pommes duchesse par personne ?",
      a: "4 rosettes de 5 cm par personne en accompagnement. 1 kg de pommes de terre épluchées en donne environ 24.",
    },
  ],
  nutrition: {
    calories: 225,
    protein: 5,
    fat: 10,
    saturatedFat: 5.5,
    carbs: 28,
    sugar: 1,
    fiber: 2.5,
    sodium: 400,
  },
  annotations: { hero: "crêtes brunes, base blonde", detail: "toujours brûlantes, jamais au mixeur" },
  images: {
    heroAlt:
      "Pommes de terre duchesse dorées en rosettes striées, empilées dans un saladier en verre sur une nappe rouge.",
    detailAlt:
      "Morceaux de pommes de terre cuites à la vapeur dans un bac perforé, passés au presse-purée pour les pommes duchesse.",
    credits: {
      hero: {
        photographer: "FakirNL",
        url: "https://commons.wikimedia.org/w/index.php?curid=64785030",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
      detail: { photographer: "Mateusz Feliksik", url: "https://www.pexels.com/photo/potatoes-and-a-potato-ricer-13422423/" },
    },
  },
  datePublished: "2026-11-26",
  dateModified: "2026-11-26",
  hero,
  detail,
  theme: {
    accent: "#E3A434",
    onAccent: "#1B1712",
    ink: "#7D520D",
    tint: "#FBF3E1",
    deep: "#1C1406",
    focus: "52% 50%",
  },
});
