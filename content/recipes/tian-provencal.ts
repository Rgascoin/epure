import type { RecipeContent } from "@/lib/types";

export const content: RecipeContent = {
  slug: "tian-provencal",
  title: "Tian provençal",
  seoTitle: "Tian provençal : la recette du gratin de légumes au four",
  tagline: "Trois légumes. Une spirale.",
  description:
    "Le tian provençal : tomates, courgettes et aubergines en rosace sur un lit d’oignons confits, cuit 1 h 15 à 180 °C. Végétarien, fondant et sans gluten.",
  summary:
    "Pour un tian provençal pour 6, faites confire 3 oignons 15 minutes dans l’huile d’olive, puis disposez dessus, en rosace serrée, des rondelles de 3 mm de tomates, courgettes et aubergines. Arrosez d’huile, parsemez de thym et faites cuire 1 h 15 à 180 °C : 45 minutes couvert, puis 30 minutes à découvert.",
  intro: [
    "En Provence, le tian désigne d’abord le plat en terre dans lequel on le cuit. Le principe tient en une image : des légumes d’été tranchés fin, serrés en spirale, qui confisent lentement au four dans l’huile d’olive.",
    "Rien n’est frit, rien n’est compliqué. Tout repose sur la régularité des tranches, un lit d’oignons fondus qui boit les jus, et la patience d’une cuisson longue qui concentre les saveurs.",
    "Il se mange chaud, tiède ou froid, et il est encore meilleur le lendemain.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "tian provençal",
    "recette tian provençal",
    "tian de légumes",
    "tian courgette tomate aubergine",
    "tian provençal au four",
    "tian de légumes facile",
    "gratin de légumes provençal",
    "recette végétarienne provençale",
  ],
  diet: ["vegetarian", "vegan", "glutenFree", "lowLactose"],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 30, cook: 90 },
  difficulty: "Facile",
  cost: "€",
  season: ["Été", "Début d’automne"],
  equipment: [
    "Plat rond à gratin de 26 à 28 cm, en terre ou en fonte",
    "Mandoline",
    "Grande poêle",
    "Papier sulfurisé et papier aluminium",
  ],
  ingredients: [
    {
      title: "Le lit d’oignons",
      items: [
        { qty: 3, name: "oignon jaune", plural: "oignons jaunes", note: "émincés finement", step: 1 },
        { qty: 2, unit: "gousse", name: "ail", note: "dégermées et hachées", step: 1 },
        { qty: 3, unit: "cas", name: "huile d’olive vierge extra", step: 1 },
        { qty: 2, unit: "brin", name: "thym frais", step: 1 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
      ],
    },
    {
      title: "Les légumes",
      items: [
        { qty: 6, name: "tomate", plural: "tomates", note: "olivettes ou roma, mûres mais fermes", step: 1 },
        { qty: 3, name: "courgette", plural: "courgettes", note: "fines, du diamètre des tomates", step: 1 },
        { qty: 2, name: "aubergine", plural: "aubergines", note: "longues et fines", step: 1 },
        { qty: 4, unit: "cas", name: "huile d’olive vierge extra", step: 1 },
        { qty: 4, unit: "brin", name: "thym frais", step: 1 },
        { qty: 1, unit: "brin", name: "romarin", step: 1, optional: true },
        { name: "fleur de sel et poivre du moulin" },
      ],
    },
  ],
  method: [
    {
      title: "Préparation",
      steps: [
        {
          title: "Confire les oignons",
          text: "Chauffez 3 cuillerées d’huile d’olive à feu doux dans une grande poêle. Ajoutez les oignons, l’ail, les feuilles de 2 brins de thym et le sel, et laissez cuire en remuant souvent, jusqu’à ce que les oignons soient fondants et blonds, sans brunir.",
          timer: { minutes: 15, label: "Oignons confits" },
        },
        {
          title: "Préchauffer le four",
          text: "Préchauffez le four à 180 °C. Huilez légèrement un plat rond de 26 à 28 cm.",
        },
        {
          title: "Trancher les légumes",
          text: "Lavez et séchez les légumes. Retirez les extrémités, puis taillez tomates, courgettes et aubergines en rondelles régulières de 3 mm, idéalement à la mandoline.",
          tip: "Choisissez des légumes de diamètre proche : la rosace sera plus régulière et tous cuiront en même temps.",
        },
        {
          title: "Étaler le lit d’oignons",
          text: "Répartissez les oignons confits en couche uniforme au fond du plat. Ils serviront de base aromatique et absorberont les jus des légumes.",
        },
        {
          title: "Monter la rosace",
          text: "En partant du bord, disposez les rondelles presque à la verticale en alternant tomate, courgette et aubergine, chacune recouvrant la précédente aux deux tiers. Avancez en spirale jusqu’au centre, en serrant bien.",
          tip: "Serrez davantage que vous ne le pensez : les légumes perdent leur eau et se tassent à la cuisson.",
        },
        {
          title: "Assaisonner",
          text: "Arrosez de 4 cuillerées d’huile d’olive, salez et poivrez. Parsemez de thym effeuillé et glissez quelques brins entiers, ainsi que le romarin, entre les légumes.",
        },
        {
          title: "Cuire à couvert",
          text: "Couvrez le plat d’une feuille de papier sulfurisé puis de papier aluminium, et enfournez. Les légumes cuisent à l’étouffée et deviennent tendres.",
          timer: { minutes: 45, label: "Cuisson couverte" },
        },
        {
          title: "Finir à découvert",
          text: "Retirez la couverture et poursuivez la cuisson jusqu’à ce que les légumes soient fondants, les bords légèrement caramélisés et le jus presque entièrement évaporé.",
          timer: { minutes: 30, label: "Cuisson à découvert" },
          tip: "S’il reste beaucoup de jus, prolongez de 10 minutes ou retirez-en une partie à la cuillère.",
        },
        {
          title: "Laisser reposer",
          text: "Laissez reposer 10 minutes hors du four avant de servir, avec un filet d’huile d’olive crue.",
          timer: { minutes: 10, label: "Repos" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Évaporer pour concentrer",
      text: "Courgettes, aubergines et tomates contiennent plus de 90 % d’eau. La cuisson couverte les attendrit à la vapeur ; la cuisson à découvert évapore ensuite cette eau et concentre sucres et arômes, jusqu’à une légère caramélisation des bords.",
    },
    {
      title: "Le pouvoir des oignons confits",
      text: "Cuits longuement à feu doux, les oignons s’attendrissent et révèlent leur douceur sans développer l’amertume d’une cuisson vive. Au fond du plat, ils absorbent les jus des légumes et les transforment en sauce.",
    },
    {
      title: "Des tranches égales, une cuisson égale",
      text: "La vitesse de cuisson dépend de l’épaisseur. Des rondelles régulières de 3 mm confisent toutes en même temps en 1 h 15, sans que certaines restent fermes pendant que d’autres se défont.",
    },
  ],
  tips: [
    "Utilisez une mandoline : c’est la clé de rondelles parfaitement régulières.",
    "Préférez des tomates charnues, type olivettes : elles rendent moins d’eau que les tomates rondes.",
    "Choisissez une huile d’olive que vous aimez goûter crue : elle fait partie du goût final.",
    "Préparez-le la veille : à température ambiante ou réchauffé, le tian gagne en saveur.",
  ],
  mistakes: [
    "Des rondelles épaisses ou irrégulières : la cuisson devient inégale.",
    "Une rosace trop lâche : les légumes s’affaissent et le plat paraît à moitié vide.",
    "Des légumes hors saison : ils manquent de goût et rendent beaucoup d’eau.",
    "Sauter la cuisson à découvert : le tian reste noyé dans son jus.",
  ],
  variations: [
    {
      title: "Gratiné au parmesan",
      text: "Parsemez 40 g de parmesan râpé pour les 15 dernières minutes. La version n’est alors plus végane.",
    },
    {
      title: "Avec des pommes de terre",
      text: "Intercalez de fines rondelles de pommes de terre à chair ferme et prolongez la cuisson couverte de 15 minutes.",
    },
    {
      title: "En portions individuelles",
      text: "Montez des rosaces dans des plats à œuf ou de petits moules et réduisez la cuisson d’environ 20 minutes.",
    },
  ],
  storage:
    "Le tian se conserve 3 jours au réfrigérateur, filmé. Servez-le froid, à température ambiante, ou réchauffé 15 minutes au four à 160 °C.",
  pairing: "Un rosé de Provence sec et salin, comme un côtes-de-provence ou un bandol rosé.",
  faq: [
    {
      q: "Quelle est la différence entre un tian et une ratatouille ?",
      a: "La ratatouille est un mijoté de légumes coupés en morceaux, cuits à la cocotte. Le tian est un plat de légumes tranchés en rondelles et cuits au four, qui tire son nom du plat en terre provençal.",
    },
    {
      q: "Faut-il faire dégorger les aubergines pour un tian ?",
      a: "Ce n’est pas nécessaire : les aubergines du commerce sont aujourd’hui peu amères, et la cuisson longue à découvert évacue leur eau.",
    },
    {
      q: "Comment éviter que le tian rende trop d’eau ?",
      a: "Taillez des rondelles fines, choisissez des tomates charnues et terminez toujours la cuisson à découvert. S’il reste du jus, prolongez de 10 minutes.",
    },
    {
      q: "À quelle température et combien de temps cuire un tian ?",
      a: "Comptez 1 h 15 à 180 °C : 45 minutes couvert pour attendrir les légumes, puis 30 minutes à découvert pour les confire et réduire le jus.",
    },
    {
      q: "Peut-on préparer le tian provençal à l’avance ?",
      a: "Oui, la veille : il est même meilleur réchauffé ou servi à température ambiante. Il se garde 3 jours au réfrigérateur.",
    },
    {
      q: "Avec quoi servir un tian provençal ?",
      a: "En plat végétarien avec du riz, de la semoule ou du pain de campagne, ou en accompagnement d’un gigot d’agneau, d’un poulet rôti ou d’un poisson grillé.",
    },
  ],
  nutrition: {
    calories: 225,
    protein: 4,
    fat: 16,
    saturatedFat: 2.5,
    carbs: 16,
    sugar: 9,
    fiber: 5,
    sodium: 300,
  },
  images: {
    heroAlt:
      "Tian provençal vu de dessus : rosace de tomates, courgettes et aubergines dans un plat rond sur un torchon de lin",
    detailAlt: "Tian de légumes en rondelles de courgettes, aubergines et tomates dans un plat ovale, vu de dessus",
    credits: {
      hero: {
        photographer: "Coach Mohab",
        url: "https://www.pexels.com/photo/a-pan-filled-with-sliced-vegetables-on-a-cloth-27809264/",
      },
      detail: {
        photographer: "Merve Gülhan",
        url: "https://www.pexels.com/photo/colorful-ratatouille-in-rustic-baking-dish-36863876/",
      },
    },
  },
  datePublished: "2026-10-16",
  dateModified: "2026-11-10",
};
