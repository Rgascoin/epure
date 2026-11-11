import type { RecipeContent } from "@/lib/types";

export const content: RecipeContent = {
  slug: "tarte-aux-pommes",
  title: "Tarte aux pommes",
  seoTitle: "Tarte aux pommes maison, pâte brisée et compote",
  tagline: "Celle du goûter, en mieux.",
  description:
    "Une tarte aux pommes maison avec une pâte brisée pur beurre, un fond de compote et une rosace de pommes fines, cuite 35 à 40 minutes à 180 °C.",
  summary:
    "Pour une tarte de 8 parts, précuisez 20 minutes à 190 °C une pâte brisée pur beurre (250 g de farine, 125 g de beurre). Étalez dessus une compote maison, couvrez d’une rosace de pommes coupées à 2 mm, puis faites cuire 35 à 40 minutes à 180 °C. Un peu de confiture d’abricot au pinceau à la sortie du four, et c’est prêt.",
  intro: [
    "C’est souvent la première tarte qu’on apprend à faire, et elle vaut largement qu’on s’y applique : une pâte brisée au beurre qui se casse sous la fourchette, une compote maison, et une rosace de pommes fines bien serrée.",
    "L’astuce, c’est d’utiliser deux sortes de pommes. Une qui s’effondre pour la compote, une qui se tient pour le dessus. Et de cuire le fond seul avant de garnir, sinon la compote le détrempe.",
    "Comptez 50 minutes de travail et une heure de repos pour la pâte. La rosace demande un peu de patience la première fois, ensuite ça va vite.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "tarte aux pommes",
    "recette tarte aux pommes",
    "tarte aux pommes maison",
    "tarte aux pommes compote",
    "tarte aux pommes pâte brisée",
    "tarte aux pommes facile",
    "rosace de pommes",
    "quelles pommes pour une tarte",
  ],
  diet: ["vegetarian"],
  servings: 8,
  servingsLabel: { one: "part", other: "parts" },
  times: { prep: 50, cook: 75, rest: 60 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Automne", "Hiver"],
  equipment: [
    "moule à tarte de 26 à 28 cm, idéalement à fond amovible",
    "rouleau à pâtisserie",
    "mandoline",
    "papier sulfurisé et billes de cuisson",
    "pinceau",
    "casserole",
  ],
  ingredients: [
    {
      title: "Pâte brisée",
      items: [
        { qty: 250, unit: "g", name: "farine T55", step: 5 },
        { qty: 125, unit: "g", name: "beurre doux", note: "très froid, en dés", step: 5 },
        { qty: 20, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 1, name: "jaune d’œuf", plural: "jaunes d’œufs", step: 1 },
        { qty: 50, unit: "ml", name: "eau glacée", step: 5 },
      ],
    },
    {
      title: "Compote",
      items: [
        {
          qty: 4,
          name: "pomme à compote",
          plural: "pommes à compote",
          note: "boskoop ou reine des reinettes",
          step: 1,
        },
        { qty: 30, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 2, unit: "cas", name: "eau", step: 1 },
        { qty: 1, unit: "gousse", name: "vanille", note: "fendue et grattée", step: 1, optional: true },
      ],
    },
    {
      title: "Rosace et nappage",
      items: [
        {
          qty: 4,
          name: "pomme ferme",
          plural: "pommes fermes",
          note: "golden, pink lady ou chantecler",
          step: 1,
        },
        { qty: 0.5, name: "citron", plural: "citrons", note: "pour le jus", step: 0.5 },
        { qty: 30, unit: "g", name: "beurre doux", note: "fondu", step: 5 },
        { qty: 30, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 3, unit: "cas", name: "confiture d’abricot", note: "ou gelée de pommes", step: 1 },
        { qty: 1, unit: "cas", name: "eau", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "La pâte brisée",
      steps: [
        {
          title: "Sabler la pâte",
          text: "Mélangez la farine, le sucre et le sel. Ajoutez le beurre froid et frottez le tout entre vos doigts jusqu’à obtenir une sorte de sable grossier, sans gros morceaux de beurre.",
        },
        {
          title: "Rassembler et reposer",
          text: "Ajoutez le jaune et l’eau glacée, puis rassemblez vite la pâte en boule, sans la pétrir. Écrasez-la une ou deux fois sous la paume pour bien mélanger, aplatissez-la en galette, filmez et mettez-la au frigo.",
          timer: { minutes: 60, label: "Repos de la pâte" },
          tip: "Moins vous la travaillez, mieux c’est. Une pâte trop pétrie devient élastique et se rétracte dans le moule à la cuisson.",
        },
      ],
    },
    {
      title: "La compote",
      steps: [
        {
          title: "Cuire la compote",
          text: "Épluchez les pommes à compote et coupez-les en dés. Faites-les cuire à couvert sur feu doux avec le sucre, l’eau et la vanille pendant 15 minutes, puis 5 minutes à découvert pour que la compote sèche un peu. Retirez la gousse de vanille, écrasez à la fourchette et laissez refroidir.",
          timer: { minutes: 20, label: "Cuisson de la compote" },
        },
      ],
    },
    {
      title: "Le montage",
      steps: [
        {
          title: "Foncer le moule",
          text: "Étalez la pâte sur 3 mm d’épaisseur et posez-la dans le moule beurré, en appuyant bien dans les angles. Piquez le fond à la fourchette, mettez le moule 15 minutes au congélateur et allumez le four à 190 °C.",
          timer: { minutes: 15, label: "Passage au congélateur" },
        },
        {
          title: "Précuire à blanc",
          text: "Couvrez la pâte de papier sulfurisé, remplissez de billes de cuisson (ou de haricots secs) et enfournez 15 minutes. Retirez papier et billes, et laissez encore 5 minutes, jusqu’à ce que le fond soit sec et à peine blond.",
          timer: { minutes: 20, label: "Cuisson à blanc" },
          tip: "C’est l’étape qu’on a envie de sauter. Ne le faites pas : sans elle, la compote détrempe le fond et il reste pâle.",
        },
        {
          title: "Trancher les pommes",
          text: "Épluchez les pommes fermes, coupez-les en deux et retirez le cœur. Taillez-les en lamelles de 2 mm et arrosez-les de jus de citron au fur et à mesure.",
        },
        {
          title: "Former la rosace",
          text: "Baissez le four à 180 °C. Étalez la compote froide sur le fond de tarte. Posez les lamelles en cercles serrés, de l’extérieur vers le centre, chacune recouvrant la précédente aux trois quarts. Pour le cœur, roulez quelques petites lamelles en fleur.",
          tip: "Serrez plus que vous ne le pensez : les pommes se rétractent en cuisant, et une rosace lâche laisse voir la compote.",
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Beurrer et cuire",
          text: "Badigeonnez les pommes de beurre fondu et saupoudrez de sucre. Enfournez 35 à 40 minutes, jusqu’à ce que le bord des lamelles dore et que la pâte soit bien blonde.",
          timer: { minutes: 40, label: "Cuisson de la tarte" },
        },
        {
          title: "Napper",
          text: "Faites chauffer la confiture avec l’eau, passez-la au tamis, puis badigeonnez la tarte encore chaude au pinceau, en tapotant doucement pour ne pas déranger les pommes.",
        },
        {
          title: "Laisser tiédir",
          text: "Laissez-la tiédir sur une grille avant de la démouler. Si vous la coupez brûlante, la compote coule.",
          timer: { minutes: 30, label: "Refroidissement" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi le beurre doit être froid",
      text: "En frottant la farine avec du beurre froid, on enrobe ses grains de gras. Ils absorbent moins d’eau et forment peu de gluten. La pâte se casse net et fond en bouche, au lieu d’être dure et élastique.",
    },
    {
      title: "Deux pommes, deux usages",
      text: "Toutes les pommes ne réagissent pas pareil à la chaleur. La boskoop ou la reine des reinettes s’effondrent en purée. La golden ou la pink lady gardent leur forme. On met donc les premières dans la compote et les secondes sur le dessus.",
    },
    {
      title: "À quoi sert la cuisson à blanc",
      text: "Cuire la pâte seule fixe son amidon et sèche sa surface avant qu’on y mette quelque chose d’humide. Le fond reste croustillant au lieu de boire le jus de la compote.",
    },
  ],
  tips: [
    "Pour la pâte, gardez tout bien froid : le beurre, l’eau, et même le saladier si votre cuisine est chaude.",
    "Une mandoline donne des lamelles fines et régulières, qui cuisent toutes en même temps.",
    "Citronnez les pommes au fur et à mesure que vous les coupez, sinon elles brunissent.",
    "Servez-la tiède, avec une cuillerée de crème fraîche épaisse.",
  ],
  mistakes: [
    "Pétrir la pâte comme une pâte à pain. Elle devient élastique et se rétracte dans le moule.",
    "Oublier la précuisson. Le fond reste pâle et mou.",
    "Couper les lamelles trop épaisses. Elles restent fermes et sèches sur le dessus.",
    "Mettre une compote trop liquide. Elle détrempe la pâte et déborde au four.",
  ],
  variations: [
    {
      title: "Façon normande",
      text: "Sans compote. À mi-cuisson, versez sur les pommes un mélange de 2 œufs, 20 cl de crème et 40 g de sucre, avec un trait de calvados si vous en avez.",
    },
    {
      title: "Sur pâte sablée",
      text: "Pour un fond plus biscuité, prenez une pâte sablée avec un peu de poudre d’amande. Surveillez la précuisson, elle colore plus vite.",
    },
    {
      title: "Tarte fine feuilletée",
      text: "Sans compote non plus : une pâte feuilletée pur beurre piquée, les lamelles par-dessus, du beurre, du sucre, et 25 minutes à 200 °C.",
    },
  ],
  storage:
    "Elle se garde 2 jours à température ambiante sous une cloche, ou 3 jours au frigo (la pâte ramollit un peu). Dix minutes au four à 150 °C lui rendent son croustillant.",
  pairing: "Un cidre brut fermier bien frais, ou un petit verre de pommeau.",
  faq: [
    {
      q: "Quelles pommes choisir pour une tarte aux pommes ?",
      a: "Deux sortes : des pommes qui fondent pour la compote (boskoop, reine des reinettes) et des pommes fermes pour la rosace (golden, pink lady, chantecler).",
    },
    {
      q: "Faut-il précuire la pâte d’une tarte aux pommes ?",
      a: "Oui, dès qu’il y a de la compote : 15 minutes à 190 °C avec des billes de cuisson, puis 5 minutes sans. Sinon le fond reste mou.",
    },
    {
      q: "Comment empêcher les pommes de noircir ?",
      a: "Arrosez les lamelles de jus de citron au fur et à mesure que vous les coupez. L’acidité freine l’oxydation qui les fait brunir.",
    },
    {
      q: "Combien de temps cuire une tarte aux pommes ?",
      a: "Après la précuisson, comptez 35 à 40 minutes à 180 °C. Elle est cuite quand le bord des pommes dore et que la pâte est bien blonde.",
    },
    {
      q: "Peut-on utiliser une pâte brisée du commerce ?",
      a: "Oui, prenez-la pur beurre et précuisez-la de la même façon. La pâte maison reste plus friable, mais ça dépanne très bien.",
    },
    {
      q: "Comment faire briller une tarte aux pommes ?",
      a: "Avec de la confiture d’abricot chauffée avec un peu d’eau, filtrée, puis passée au pinceau sur la tarte encore chaude.",
    },
  ],
  nutrition: {
    calories: 380,
    protein: 4,
    fat: 17,
    saturatedFat: 11,
    carbs: 54,
    sugar: 28,
    fiber: 3,
    sodium: 60,
  },
  annotations: {
    hero: "deux pommes, deux usages",
    detail: "le fond cuit seul d’abord",
  },
  images: {
    heroAlt: "Tarte aux pommes vue de dessus, rosace serrée de fines lamelles de pommes dorées sur pâte brisée",
    detailAlt: "Tarte aux pommes en rosace de fines lamelles, posée sur une assiette grise",
    credits: {
      hero: {
        photographer: "Lucy Bryce",
        url: "https://www.pexels.com/photo/sweet-cake-with-apple-slices-20462704/",
      },
      detail: {
        photographer: "Clément Bruneau",
        url: "https://www.pexels.com/photo/delicious-homemade-apple-tart-on-a-plate-36340982/",
      },
    },
  },
  datePublished: "2026-10-23",
  dateModified: "2026-11-10",
};
