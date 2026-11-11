import type { RecipeContent } from "@/lib/types";

export const content: RecipeContent = {
  slug: "tarte-aux-pommes",
  title: "Tarte aux pommes",
  seoTitle: "Tarte aux pommes maison : la recette classique",
  tagline: "Une rosace, pomme après pomme.",
  description:
    "La tarte aux pommes classique : pâte brisée pur beurre, fond de compote maison et rosace de pommes fines, cuite 40 min à 180 °C. La recette pas à pas.",
  summary:
    "Pour une tarte aux pommes de 8 parts, précuisez 20 minutes à 190 °C une pâte brisée pur beurre (250 g de farine, 125 g de beurre), garnissez-la d’une compote maison puis d’une rosace de pommes en lamelles de 2 mm. Faites cuire 35 à 40 minutes à 180 °C et nappez de confiture d’abricot à la sortie du four.",
  intro: [
    "La tarte aux pommes est souvent la première pâtisserie que l’on apprend, et c’est précisément pour cela qu’elle mérite d’être faite avec soin : une pâte brisée pur beurre, croustillante et friable, une compote maison et une rosace de pommes fines.",
    "Le secret tient en deux variétés de pommes : l’une qui fond pour la compote, l’autre qui garde sa forme pour la rosace. Et une précuisson à blanc, pour que le fond reste croustillant sous la garniture.",
    "Une heure de travail, une heure de repos, et le plus beau classique de la pâtisserie familiale.",
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
    "Moule à tarte de 26 à 28 cm, idéalement à fond amovible",
    "Rouleau à pâtisserie",
    "Mandoline",
    "Papier sulfurisé et billes de cuisson",
    "Pinceau",
    "Casserole",
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
          text: "Mélangez la farine, le sucre et le sel. Ajoutez le beurre froid et frottez le mélange du bout des doigts jusqu’à obtenir une texture de sable grossier, sans gros morceaux de beurre.",
        },
        {
          title: "Rassembler et reposer",
          text: "Ajoutez le jaune et l’eau glacée, puis rassemblez rapidement la pâte en boule sans la pétrir. Écrasez-la une ou deux fois sous la paume pour l’homogénéiser, aplatissez-la en disque, filmez-la et laissez-la reposer au réfrigérateur.",
          timer: { minutes: 60, label: "Repos de la pâte" },
          tip: "Ne pétrissez pas : une pâte trop travaillée développe son gluten, devient élastique et se rétracte à la cuisson.",
        },
      ],
    },
    {
      title: "La compote",
      steps: [
        {
          title: "Cuire la compote",
          text: "Épluchez et coupez en dés les pommes à compote. Faites-les cuire à couvert sur feu doux avec le sucre, l’eau et la vanille pendant 15 minutes, puis 5 minutes à découvert pour dessécher. Écrasez à la fourchette et laissez refroidir.",
          timer: { minutes: 20, label: "Cuisson de la compote" },
        },
      ],
    },
    {
      title: "Le montage",
      steps: [
        {
          title: "Foncer le moule",
          text: "Étalez la pâte sur 3 mm d’épaisseur et foncez le moule beurré en pressant bien dans les angles. Piquez le fond à la fourchette et placez le moule 15 minutes au congélateur.",
          timer: { minutes: 15, label: "Raffermir le fond" },
        },
        {
          title: "Précuire à blanc",
          text: "Préchauffez le four à 190 °C. Couvrez la pâte de papier sulfurisé garni de billes de cuisson et enfournez 15 minutes. Retirez papier et billes, puis poursuivez 5 minutes jusqu’à ce que le fond soit sec et à peine blond.",
          timer: { minutes: 20, label: "Cuisson à blanc" },
          tip: "Cette précuisson est indispensable : sans elle, l’humidité de la compote détrempe le fond.",
        },
        {
          title: "Trancher les pommes",
          text: "Épluchez les pommes fermes, coupez-les en deux et retirez le cœur. Taillez-les en lamelles de 2 mm et arrosez-les de jus de citron au fur et à mesure.",
        },
        {
          title: "Former la rosace",
          text: "Baissez le four à 180 °C. Étalez la compote froide sur le fond de tarte. Disposez les lamelles en cercles concentriques serrés, de l’extérieur vers le centre, chacune recouvrant la précédente aux trois quarts. Terminez le cœur par quelques petites lamelles roulées.",
          tip: "Plus la rosace est serrée, plus la tarte est généreuse : les pommes se rétractent à la cuisson.",
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Beurrer et cuire",
          text: "Badigeonnez les pommes de beurre fondu et saupoudrez-les de sucre. Enfournez jusqu’à ce que les bords des lamelles soient dorés et la pâte bien blonde.",
          timer: { minutes: 40, label: "Cuisson de la tarte" },
        },
        {
          title: "Napper",
          text: "Faites chauffer la confiture avec l’eau, filtrez-la, puis badigeonnez la tarte encore chaude au pinceau, en tamponnant doucement.",
        },
        {
          title: "Laisser tiédir",
          text: "Laissez tiédir la tarte sur une grille avant de la démouler et de la découper.",
          timer: { minutes: 30, label: "Refroidissement" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Le beurre froid fait la friabilité",
      text: "En sablant la farine avec un beurre froid, on enrobe ses particules de matière grasse : elles absorbent moins d’eau et forment peu de gluten. Résultat : une pâte qui se brise net et fond en bouche, au lieu d’être dure et élastique.",
    },
    {
      title: "Deux pommes, deux comportements",
      text: "Toutes les pommes ne réagissent pas de la même façon à la chaleur. Certaines variétés, comme la boskoop ou la reine des reinettes, s’effondrent en purée ; d’autres, plus fermes, comme la golden ou la pink lady, gardent leur forme. On utilise donc les unes pour la compote, les autres pour la rosace.",
    },
    {
      title: "La précuisson à blanc",
      text: "Cuire la pâte seule fixe son amidon et assèche sa surface avant d’ajouter une garniture humide. Le fond reste ainsi croustillant au lieu d’absorber le jus de la compote.",
    },
  ],
  tips: [
    "Gardez tout froid pour la pâte : beurre, eau et même le saladier si votre cuisine est chaude.",
    "Utilisez une mandoline pour des lamelles fines et régulières, qui cuisent uniformément.",
    "Citronnez les pommes au fur et à mesure pour éviter qu’elles noircissent.",
    "Servez la tarte tiède, avec une cuillerée de crème fraîche épaisse.",
  ],
  mistakes: [
    "Pétrir la pâte : elle devient élastique et se rétracte dans le moule.",
    "Oublier la précuisson : le fond reste pâle et détrempé.",
    "Couper des lamelles trop épaisses : elles restent fermes en surface.",
    "Utiliser une compote trop liquide : elle détrempe la pâte et déborde.",
  ],
  variations: [
    {
      title: "Façon normande",
      text: "Remplacez la compote par un appareil de 2 œufs, 20 cl de crème et 40 g de sucre, versé sur les pommes à mi-cuisson, avec un trait de calvados.",
    },
    {
      title: "Sur pâte sablée",
      text: "Pour un fond plus biscuité, utilisez une pâte sablée enrichie de poudre d’amande. Surveillez la précuisson, plus rapide.",
    },
    {
      title: "Tarte fine feuilletée",
      text: "Sans compote, sur un disque de pâte feuilletée pur beurre piqué : disposez les lamelles, beurrez, sucrez et cuisez 25 minutes à 200 °C.",
    },
  ],
  storage:
    "La tarte se garde 2 jours à température ambiante sous une cloche, ou 3 jours au réfrigérateur, où la pâte ramollit un peu. Repassez-la 10 minutes au four à 150 °C pour lui rendre son croustillant.",
  pairing: "Un cidre brut fermier bien frais, ou un verre de pommeau de Normandie.",
  faq: [
    {
      q: "Quelles pommes choisir pour une tarte aux pommes ?",
      a: "Associez deux types : des pommes qui fondent pour la compote (boskoop, reine des reinettes) et des pommes fermes pour la rosace (golden, pink lady, chantecler).",
    },
    {
      q: "Faut-il précuire la pâte d’une tarte aux pommes ?",
      a: "Oui, dès qu’il y a une compote : 15 minutes à 190 °C avec des billes de cuisson, puis 5 minutes à nu. Sans précuisson, le fond reste détrempé.",
    },
    {
      q: "Comment empêcher les pommes de noircir ?",
      a: "Arrosez les lamelles de jus de citron au fur et à mesure du découpage : l’acidité ralentit l’oxydation qui les fait brunir.",
    },
    {
      q: "Combien de temps cuire une tarte aux pommes ?",
      a: "Après la précuisson, comptez 35 à 40 minutes à 180 °C, jusqu’à ce que les bords des pommes soient dorés et la pâte bien blonde.",
    },
    {
      q: "Peut-on utiliser une pâte brisée du commerce ?",
      a: "Oui, choisissez-la pur beurre et précuisez-la exactement de la même façon. La pâte maison reste plus friable et plus savoureuse.",
    },
    {
      q: "Comment faire briller une tarte aux pommes ?",
      a: "Avec un nappage : de la confiture d’abricot chauffée avec un peu d’eau, filtrée, puis appliquée au pinceau sur la tarte encore chaude.",
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
