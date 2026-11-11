import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "tian-provencal",
  title: "Tian provençal",
  seoTitle: "Tian provençal, le gratin de légumes d’été au four",
  tagline: "L’été qui confit au four.",
  description:
    "Le tian provençal : des rondelles de tomates, courgettes et aubergines serrées sur des oignons fondus, cuites 1 h 15 à 180 °C. Végétarien et sans gluten.",
  summary:
    "Pour 6 personnes, faites fondre 3 oignons 15 minutes dans l’huile d’olive et étalez-les au fond d’un plat. Par-dessus, serrez en spirale des rondelles de 3 mm de tomates, courgettes et aubergines, arrosez d’huile, ajoutez du thym, puis faites cuire 1 h 15 à 180 °C : 45 minutes couvert, et 30 minutes à découvert pour que le jus s’évapore.",
  intro: [
    "Le mot tian désigne d’abord le plat en terre dans lequel on le fait cuire. La recette, elle, tient en une image : des légumes d’été tranchés fin, serrés en spirale, qui confisent doucement au four dans l’huile d’olive.",
    "On ne fait rien frire. Ce qui compte, ce sont des tranches régulières, un lit d’oignons fondus qui boit le jus des légumes, et une cuisson assez longue pour que tout se concentre.",
    "Le montage de la spirale prend un quart d’heure et c’est plutôt agréable à faire. Ensuite, le tian se mange chaud, tiède ou froid, et souvent on le préfère le lendemain.",
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
  tags: ["ete"],
  equipment: [
    "plat rond à gratin de 26 à 28 cm, en terre ou en fonte",
    "mandoline",
    "grande poêle",
    "papier sulfurisé et papier aluminium",
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
          text: "Faites chauffer 3 cuillerées à soupe d’huile d’olive à feu doux dans une grande poêle. Ajoutez les oignons, l’ail, les feuilles de 2 brins de thym et le sel, et laissez cuire 15 minutes en remuant souvent. Ils doivent devenir fondants et blonds, sans brunir.",
          timer: { minutes: 15, label: "Oignons confits" },
        },
        {
          title: "Préchauffer le four",
          text: "Allumez le four à 180 °C et huilez légèrement un plat rond de 26 à 28 cm.",
        },
        {
          title: "Trancher les légumes",
          text: "Lavez et séchez les légumes, coupez les extrémités, puis taillez tomates, courgettes et aubergines en rondelles de 3 mm. À la mandoline, c’est plus rapide et beaucoup plus régulier.",
          tip: "Au marché, cherchez des courgettes et des aubergines à peu près du diamètre des tomates. La spirale sera plus jolie et tout cuira en même temps.",
        },
        {
          title: "Étaler le lit d’oignons",
          text: "Répartissez les oignons confits au fond du plat, en couche régulière. Ils vont boire le jus des légumes pendant la cuisson.",
        },
        {
          title: "Monter la spirale",
          text: "En partant du bord, posez les rondelles presque debout en alternant tomate, courgette et aubergine, chacune recouvrant la précédente aux deux tiers. Avancez en spirale jusqu’au centre, en serrant bien.",
          tip: "Serrez plus que ce qui vous paraît raisonnable. Les légumes perdent leur eau et se tassent, et une spirale lâche finit à moitié vide.",
        },
        {
          title: "Assaisonner",
          text: "Arrosez avec les 4 cuillerées à soupe d’huile d’olive, salez et poivrez. Effeuillez du thym par-dessus et glissez quelques brins entiers entre les légumes, avec le romarin si vous en avez.",
        },
        {
          title: "Cuire à couvert",
          text: "Couvrez d’une feuille de papier sulfurisé, puis de papier aluminium, et enfournez pour 45 minutes. Les légumes cuisent à l’étouffée et s’attendrissent.",
          timer: { minutes: 45, label: "Cuisson couverte" },
        },
        {
          title: "Finir à découvert",
          text: "Retirez les feuilles et continuez la cuisson 30 minutes. Le tian est prêt quand les légumes sont fondants, les bords un peu caramélisés et qu’il ne reste presque plus de jus au fond.",
          timer: { minutes: 30, label: "Cuisson à découvert" },
          tip: "S’il reste beaucoup de jus, prolongez la cuisson de 10 minutes ou retirez-en une partie à la cuillère.",
        },
        {
          title: "Laisser reposer",
          text: "Sortez-le du four et attendez 10 minutes. Servez avec un filet d’huile d’olive crue.",
          timer: { minutes: 10, label: "Repos" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi deux temps de cuisson",
      text: "Courgettes, aubergines et tomates contiennent plus de 90 % d’eau. Sous le couvercle, elles s’attendrissent dans leur propre vapeur. Une fois le plat découvert, cette eau s’évapore, les sucres se concentrent et les bords commencent à caraméliser.",
    },
    {
      title: "Les oignons font la sauce",
      text: "Cuits longtemps à feu doux, les oignons deviennent sucrés sans prendre l’amertume d’une cuisson vive. Au fond du plat, ils absorbent le jus des légumes et finissent par former une sorte de sauce.",
    },
    {
      title: "Pourquoi 3 mm partout",
      text: "Le temps de cuisson dépend surtout de l’épaisseur. À 3 mm partout, toutes les rondelles sont prêtes au bout de 1 h 15, sans que certaines restent fermes pendant que d’autres tombent en compote.",
    },
  ],
  tips: [
    "Une mandoline, même bon marché, donne des rondelles régulières. Attention aux doigts : utilisez le poussoir.",
    "Prenez des tomates charnues, des olivettes par exemple. Elles rendent moins d’eau que les grosses tomates rondes.",
    "Prenez une huile d’olive que vous aimez déjà sur une salade : on la sent vraiment dans le plat.",
    "Faites-le la veille si ça vous arrange. À température ambiante ou réchauffé, il a encore plus de goût.",
  ],
  mistakes: [
    "Couper les rondelles trop épaisses ou de travers. Certaines restent fermes, d’autres s’effondrent.",
    "Monter une spirale trop lâche. À la cuisson, tout s’affaisse et le plat a l’air à moitié vide.",
    "Le faire en plein hiver avec des légumes sans goût. Ils rendent beaucoup d’eau et le tian reste fade.",
    "Sauter la cuisson à découvert. Le tian reste noyé dans son jus.",
  ],
  variations: [
    {
      title: "Gratiné au parmesan",
      text: "Parsemez 40 g de parmesan râpé pour les 15 dernières minutes. Évidemment, il n’est plus végan.",
    },
    {
      title: "Avec des pommes de terre",
      text: "Glissez de fines rondelles de pommes de terre à chair ferme dans la spirale, et ajoutez 15 minutes à la cuisson couverte.",
    },
    {
      title: "En petites portions",
      text: "Montez de petites spirales dans des plats à œufs ou des moules individuels : comptez 30 minutes couvert et 25 minutes à découvert.",
    },
  ],
  storage:
    "Il se garde 3 jours au frigo, filmé. Servez-le froid, à température ambiante, ou réchauffé 15 minutes au four à 160 °C.",
  pairing: "Un rosé de Provence bien sec, un côtes-de-provence ou un bandol rosé.",
  faq: [
    {
      q: "Quelle est la différence entre un tian et une ratatouille ?",
      a: "La ratatouille mijote en cocotte, avec des légumes coupés en morceaux. Le tian est cuit au four, avec des légumes en rondelles, et il tient son nom du plat en terre dans lequel on le prépare.",
    },
    {
      q: "Faut-il faire dégorger les aubergines pour un tian ?",
      a: "Non. Les aubergines qu’on trouve aujourd’hui sont peu amères, et la cuisson à découvert s’occupe de leur eau.",
    },
    {
      q: "Comment éviter que le tian rende trop d’eau ?",
      a: "Coupez des rondelles fines, prenez des tomates charnues et finissez toujours la cuisson à découvert. S’il reste du jus, prolongez la cuisson de 10 minutes.",
    },
    {
      q: "À quelle température et combien de temps cuire un tian ?",
      a: "Comptez 1 h 15 à 180 °C : 45 minutes couvert pour attendrir les légumes, puis 30 minutes à découvert pour les confire et faire réduire le jus.",
    },
    {
      q: "Peut-on préparer le tian provençal à l’avance ?",
      a: "Oui, la veille sans problème. Réchauffé ou à température ambiante, il est même meilleur. Il se garde 3 jours au frigo.",
    },
    {
      q: "Avec quoi servir un tian provençal ?",
      a: "En plat, avec du riz, de la semoule ou une bonne tranche de pain de campagne. Ou à côté d’un gigot d’agneau, d’un poulet rôti ou d’un poisson grillé.",
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
  annotations: {
    hero: "serrez, puis serrez encore",
    detail: "3 mm, pas plus",
  },
  images: {
    heroAlt:
      "Tian provençal vu de dessus : spirale de tomates, courgettes et aubergines dans un plat rond sur un torchon de lin",
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
  featured: true,
  hero,
  detail,
  theme: {
    accent: "#4A7524",
    onAccent: "#ffffff",
    ink: "#41691F",
    tint: "#EFF4E8",
    deep: "#0D1608",
    focus: "50% 48%",
  },
});
