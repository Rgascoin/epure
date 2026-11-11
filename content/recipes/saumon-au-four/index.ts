import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "saumon-au-four",
  title: "Pavé de saumon au four",
  seoTitle: "Saumon au four : pavés nacrés à cœur, 12 min à 200 °C",
  tagline: "Nacré au centre, jamais plâtreux.",
  description:
    "Le saumon au four en pavés : une fine couche de moutarde à l’ancienne et de miel, 12 minutes à 200 °C, et un centre nacré sorti à 48 °C à cœur.",
  summary:
    "Pour un saumon au four nacré pour 4 personnes, salez 4 pavés de 150 g et laissez-les 15 minutes. Badigeonnez-les d’un mélange de 2 cuillerées à soupe de moutarde à l’ancienne, 1 cuillerée à café de miel, d’huile d’olive et de zeste de citron, puis enfournez 10 à 14 minutes à 200 °C. Sortez-les à 48 °C à cœur : le centre reste translucide et fondant.",
  intro: [
    "Le saumon au four, c’est le plat du soir qu’on fait sans y penser, et c’est justement là que ça coince : 5 minutes de trop et la chair devient sèche et plâtreuse. Bien cuit, un pavé reste nacré au centre, presque translucide, et se défait en feuillets brillants.",
    "On le cuit à 200 °C sous une fine couche de moutarde à l’ancienne et de miel, qui dore et protège le dessus. On le sort à 48 °C à cœur. Le thermomètre ôte tout le doute ; sans lui, on vous dit quoi regarder.",
    "Comptez 10 minutes de préparation, 15 minutes de salage et une douzaine de minutes au four. Si vous cuisinez pour une femme enceinte ou de jeunes enfants, poussez la cuisson jusqu’à 63 °C : c’est expliqué dans la FAQ.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "saumon au four",
    "pavé de saumon au four",
    "temps de cuisson saumon au four",
    "pavé de saumon moutarde à l’ancienne",
    "saumon au four moutarde miel",
    "température à cœur saumon",
    "saumon au four facile",
    "cuisson pavé de saumon nacré",
  ],
  diet: ["glutenFree", "lowLactose"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 10, cook: 12, rest: 15 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Toute l’année"],
  equipment: [
    "plat à four en céramique ou en verre",
    "thermomètre de cuisson à sonde (conseillé)",
    "râpe fine pour le zeste",
    "papier absorbant",
    "spatule fine",
  ],
  ingredients: [
    {
      title: "Le saumon",
      items: [
        {
          qty: 4,
          name: "pavé de saumon",
          plural: "pavés de saumon",
          note: "150 g et 3 cm d’épaisseur, avec la peau",
          step: 1,
        },
        { name: "sel fin" },
        { qty: 1, unit: "cas", name: "huile d’olive", note: "pour le plat", step: 0.5 },
      ],
    },
    {
      title: "La moutarde au miel",
      items: [
        { qty: 1, name: "citron jaune non traité", plural: "citrons jaunes non traités", step: 1 },
        { qty: 2, unit: "cas", name: "moutarde à l’ancienne", step: 0.5 },
        { qty: 1, unit: "cac", name: "miel liquide", step: 0.5 },
        { qty: 1, unit: "cas", name: "huile d’olive", step: 0.5 },
        { name: "poivre noir du moulin" },
        { qty: 4, unit: "brin", name: "aneth", note: "pour servir", step: 1, optional: true },
      ],
    },
  ],
  method: [
    {
      title: "Préparation",
      steps: [
        {
          title: "Saler les pavés",
          text: "Épongez les pavés avec du papier absorbant et salez la chair sur toutes ses faces. Posez-les peau dessous sur une assiette et laissez-les 15 minutes, au frais si votre cuisine est chaude. Préchauffez le four à 200 °C, chaleur statique, pendant ce temps.",
          timer: { minutes: 15, label: "Salage du saumon" },
          tip: "Ce salage à l’avance assaisonne jusqu’au centre et limite la matière blanche qui perle à la cuisson.",
        },
        {
          title: "Mélanger la moutarde",
          text: "Râpez finement le zeste du citron, sans le blanc amer, puis coupez le citron en quartiers. Dans un bol, mélangez la moutarde à l’ancienne, le miel, 1 cuillerée à soupe d’huile d’olive, le zeste et deux ou trois tours de poivre.",
        },
        {
          title: "Badigeonner le saumon",
          text: "Huilez le plat avec le reste d’huile. Épongez de nouveau les pavés (le sel a fait perler un peu d’eau) et posez-les peau dessous, espacés de 3 cm. Étalez la moutarde au miel sur le dessus en couche fine, au dos d’une cuillère.",
        },
      ],
    },
    {
      title: "Cuisson",
      steps: [
        {
          title: "Enfourner",
          text: "Enfournez à mi-hauteur pour 10 à 14 minutes, selon l’épaisseur. Le saumon est prêt quand les côtés sont devenus rose pâle et opaques, alors que le centre reste plus foncé et brillant, et qu’une pointe de couteau y entre sans résistance.",
          timer: { minutes: 12, label: "Cuisson du saumon" },
        },
        {
          title: "Vérifier la température",
          text: "Piquez un thermomètre au cœur du pavé le plus épais : sortez le plat à 48 °C pour un centre nacré, à 55 °C pour une chair juste rosée. Sans thermomètre, écartez délicatement les feuillets au centre avec la pointe d’un couteau : ils doivent se séparer facilement et rester translucides au milieu.",
          tip: "La température monte encore de 2 ou 3 °C une fois le plat sorti du four. Visez toujours un peu en dessous.",
        },
        {
          title: "Reposer et servir",
          text: "Laissez reposer 2 minutes dans le plat. Si vous ne mangez pas la peau, glissez une spatule fine entre elle et la chair : le pavé s’en détache tout seul. Servez avec les quartiers de citron et l’aneth ciselé, si vous en mettez.",
          timer: { minutes: 2, label: "Repos avant service" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi le centre reste translucide",
      text: "Dans le poisson, les protéines des fibres commencent à coaguler dès 40 à 45 °C : la chair devient opaque et se raffermit. Vers 48 à 50 °C, le centre est tiède, fondant et encore nacré. Au-delà de 55 à 60 °C, les fibres se resserrent fort, chassent leur jus, et le saumon devient sec et friable.",
    },
    {
      title: "La matière blanche qui perle",
      text: "Ce dépôt blanc est de l’albumine, une protéine soluble chassée vers la surface quand les fibres se contractent, puis coagulée par la chaleur. Plus la cuisson est forte et longue, plus il y en a. Une cuisson courte et un salage préalable en limitent la quantité.",
    },
    {
      title: "Le poisson cuit encore hors du four",
      text: "À la sortie du four, l’extérieur du pavé est bien plus chaud que son centre, et la chaleur continue de migrer vers l’intérieur pendant quelques minutes. C’est pour cela qu’on sort le saumon 2 ou 3 °C avant la température voulue.",
    },
  ],
  tips: [
    "Demandez des pavés taillés au milieu du filet, de même épaisseur : ils cuisent tous à la même vitesse. Les morceaux côté queue, plus fins, sont cuits bien avant les autres.",
    "Un thermomètre à sonde change vraiment la vie pour le poisson. C’est le seul moyen de viser 48 °C sans ouvrir le pavé.",
    "Le saumon sauvage est plus maigre que le saumon d’élevage : il cuit plus vite et sèche plus facilement. Commencez à vérifier 2 minutes plus tôt.",
    "Pour un dessus plus doré, passez le plat 1 minute sous le gril en fin de cuisson, porte ouverte, sans le quitter des yeux : le miel brûle vite.",
  ],
  mistakes: [
    "Attendre que le centre soit opaque dans le four. Il continue de cuire en sortant et devient sec et friable.",
    "Étaler une couche épaisse de moutarde. Elle masque le poisson, et le miel brûle sur les bords du plat.",
    "Serrer les pavés dans un plat trop petit. Ils cuisent dans leur jus au lieu de rôtir, et les côtés restent pâles.",
    "Cuire des pavés d’épaisseurs très différentes ensemble. Les plus fins sont trop cuits quand les plus épais sont prêts.",
  ],
  variations: [
    {
      title: "Nature, citron et aneth",
      text: "Sans moutarde ni miel : badigeonnez les pavés de 2 cuillerées à soupe d’huile d’olive mélangées au zeste de citron et au poivre. Même cuisson, et l’aneth ciselé à la sortie du four.",
    },
    {
      title: "Avec les légumes dans le plat",
      text: "Faites d’abord rôtir 500 g de pommes de terre et un oignon en rondelles de 5 mm, arrosés d’huile d’olive, 25 minutes à 200 °C. Posez ensuite les pavés au milieu et poursuivez 10 à 14 minutes.",
    },
    {
      title: "En papillote",
      text: "Posez chaque pavé sur une feuille de papier sulfurisé avec deux rondelles de citron, un filet d’huile et l’aneth, puis fermez hermétiquement. Comptez 14 à 16 minutes à 200 °C : le papier ralentit un peu la cuisson. La chair est plus moelleuse, mais ne dore pas.",
    },
  ],
  storage:
    "Le saumon cuit se garde 2 jours au réfrigérateur, en boîte fermée. Il est meilleur froid, émietté dans une salade ; si vous le réchauffez, faites-le couvert, 10 minutes au four à 140 °C, jusqu’à ce qu’il soit chaud à cœur.",
  pairing: "Un blanc sec et vif, un muscadet ou un mâcon-villages, servi frais.",
  faq: [
    {
      q: "À quelle température cuire un pavé de saumon au four ?",
      a: "À 200 °C en chaleur statique, pendant 10 à 14 minutes pour un pavé de 3 cm d’épaisseur. À 180 °C, comptez 2 à 4 minutes de plus. Le repère le plus fiable reste la température à cœur : 48 °C pour un centre nacré.",
    },
    {
      q: "Comment savoir si le saumon est cuit à cœur ?",
      a: "Avec un thermomètre : 48 °C pour un centre nacré, 55 °C pour une chair juste rosée, 63 °C pour un saumon cuit à cœur. Sans thermomètre, écartez les feuillets au centre avec un couteau : ils se séparent facilement et restent un peu translucides au milieu.",
    },
    {
      q: "Le saumon nacré à cœur est-il sans danger ?",
      a: "Oui pour la plupart des gens, si le poisson est extra-frais ou s’il a été congelé (−20 °C pendant au moins 24 heures, ce qui tue les parasites éventuels). Pour les femmes enceintes, les jeunes enfants, les personnes âgées ou immunodéprimées, cuisez-le jusqu’à 63 °C à cœur : la chair est alors opaque partout.",
    },
    {
      q: "Faut-il enlever la peau du saumon avant de le cuire au four ?",
      a: "Non. Gardez-la : elle protège la chair du contact avec le plat et l’empêche de sécher par en dessous. Après cuisson, elle se détache toute seule en glissant une spatule entre la peau et la chair.",
    },
    {
      q: "Pourquoi du blanc sort du saumon à la cuisson ?",
      a: "C’est de l’albumine, une protéine du poisson chassée en surface quand les fibres se contractent, puis coagulée par la chaleur. Elle se mange sans problème. Pour en avoir moins, salez les pavés 15 minutes avant et ne dépassez pas 55 °C à cœur.",
    },
    {
      q: "Peut-on cuire des pavés de saumon surgelés au four ?",
      a: "Oui, mais le résultat est meilleur s’ils ont décongelé une nuit au réfrigérateur, dans leur emballage. Cuits encore congelés, il faut presque doubler le temps et l’extérieur sèche avant que le centre soit chaud. Épongez-les bien avant de les saler.",
    },
  ],
  nutrition: {
    calories: 380,
    protein: 31,
    fat: 27,
    saturatedFat: 5,
    carbs: 3,
    sugar: 2,
    fiber: 1,
    sodium: 470,
  },
  annotations: {
    hero: "sortir à 48 °C à cœur",
    detail: "il cuit encore hors du four",
  },
  images: {
    heroAlt: "Pavé de saumon au four laqué à la moutarde à l’ancienne, servi avec du riz vert, du basilic et un quartier de citron",
    detailAlt: "Plat en verre de pavés de saumon dorés sortant du four, avec des oignons et des pommes de terre",
    credits: {
      hero: { photographer: "Pexels", url: "https://www.pexels.com/photo/27672770/" },
      detail: { photographer: "Pexels", url: "https://www.pexels.com/photo/34624944/" },
    },
  },
  datePublished: "2026-11-03",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#E0703C",
    onAccent: "#1b1712",
    ink: "#A3421A",
    tint: "#FBEEE6",
    deep: "#1A0F0B",
    focus: "45% 55%",
  },
});
