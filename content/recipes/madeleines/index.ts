import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "madeleines",
  title: "Madeleines",
  seoTitle: "Madeleines maison : la recette pour une belle bosse",
  tagline: "Toute l’affaire est dans la bosse.",
  description:
    "Des madeleines maison avec leur bosse : une pâte au beurre et au miel reposée 3 heures au froid, puis un choc thermique à 220 °C. 24 pièces, 11 minutes au four.",
  summary:
    "Pour 24 madeleines, fouettez 3 œufs avec 130 g de sucre, 20 g de miel et le zeste d’un citron, puis ajoutez 150 g de farine, 5 g de levure chimique et 125 g de beurre fondu tiède. Laissez reposer la pâte au moins 3 heures au réfrigérateur. Remplissez aux trois quarts un moule beurré et fariné, enfournez 4 minutes à 220 °C, puis 6 à 7 minutes à 180 °C : la bosse se forme dans les premières minutes.",
  intro: [
    "Une madeleine réussie a un dos bombé, une bosse qui se fend un peu, des bords dorés et une mie serrée et moelleuse qui sent le beurre et le citron. La pâte, elle, est simple : des œufs, du sucre, de la farine, du beurre fondu et une cuillerée de miel.",
    "La bosse vient d’un choc thermique. Une pâte très froide, qui a reposé plusieurs heures au réfrigérateur, entre dans un four à 220 °C : les bords prennent tout de suite, et le centre, encore liquide, n’a pas d’autre choix que de monter. On baisse ensuite la température pour finir la cuisson.",
    "Comptez 20 minutes de travail, au moins 3 heures de repos et deux fournées de 11 minutes. Faites la pâte la veille si vous pouvez : les madeleines n’en sont que meilleures.",
  ],
  category: "Goûter",
  cuisine: "Française",
  keywords: [
    "madeleines",
    "recette madeleines",
    "madeleines maison",
    "madeleines avec bosse",
    "bosse des madeleines",
    "madeleines moelleuses",
    "madeleines au miel",
    "madeleines au citron",
    "pourquoi mes madeleines n’ont pas de bosse",
  ],
  diet: ["vegetarian"],
  servings: 24,
  servingsLabel: { one: "madeleine", other: "madeleines" },
  times: { prep: 20, cook: 22, rest: 180 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  equipment: [
    "moule à madeleines en métal de 12 empreintes",
    "saladier et fouet",
    "petite casserole",
    "tamis ou passoire fine",
    "pinceau",
    "poche à douille ou sac de congélation (facultatif)",
    "grille",
  ],
  ingredients: [
    {
      title: "La pâte",
      items: [
        { qty: 125, unit: "g", name: "beurre doux", step: 5 },
        { qty: 3, name: "œuf", plural: "œufs", note: "à température ambiante", step: 1 },
        { qty: 130, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 20, unit: "g", name: "miel liquide", note: "acacia ou toutes fleurs", step: 5 },
        { qty: 1, name: "citron jaune non traité", plural: "citrons jaunes non traités", note: "pour le zeste", step: 1 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 150, unit: "g", name: "farine T55", step: 5 },
        { qty: 5, unit: "g", name: "levure chimique", note: "1 c. à café rase", step: 1 },
      ],
    },
    {
      title: "Le moule",
      items: [
        { qty: 15, unit: "g", name: "beurre mou", step: 5, fixed: true },
        { qty: 1, unit: "cas", name: "farine", step: 0.5, fixed: true },
      ],
    },
  ],
  method: [
    {
      title: "La pâte",
      steps: [
        {
          title: "Fondre le beurre",
          text: "Faites fondre le beurre à feu doux dans une petite casserole, puis retirez-le du feu et laissez-le tiédir. Il doit être liquide mais à peine tiède quand vous l’ajouterez, autour de 40 °C.",
        },
        {
          title: "Fouetter œufs et sucre",
          text: "Dans un saladier, fouettez les œufs avec le sucre, le miel, le zeste du citron râpé finement et le sel, 2 à 3 minutes, jusqu’à ce que le mélange pâlisse et mousse légèrement. Inutile de le monter comme une génoise.",
          timer: { minutes: 3, label: "Fouettage œufs et sucre" },
        },
        {
          title: "Ajouter farine et beurre",
          text: "Tamisez la farine et la levure au-dessus du saladier et mélangez au fouet, juste le temps qu’il ne reste plus de traces sèches. Versez le beurre tiède en filet en mélangeant doucement : la pâte devient lisse et brillante.",
        },
        {
          title: "Reposer au froid",
          text: "Filmez la pâte au contact et laissez-la au réfrigérateur au moins 3 heures, une nuit si vous pouvez. Elle doit être bien froide et épaisse, presque comme une pâte à tartiner.",
          timer: { minutes: 180, label: "Repos de la pâte au froid" },
          tip: "Ce repos n’est pas négociable : c’est l’écart entre une pâte glacée et un four brûlant qui fait pousser la bosse.",
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Préparer le moule",
          text: "Préchauffez le four à 220 °C, chaleur statique, 20 minutes avant la fin du repos. Beurrez les empreintes au pinceau avec le beurre mou, farinez-les, puis retournez le moule et tapotez-le pour retirer l’excès de farine. Mettez-le au réfrigérateur jusqu’à la cuisson.",
          timer: { minutes: 20, label: "Préchauffage du four" },
        },
        {
          title: "Garnir les empreintes",
          text: "Sortez la pâte et le moule du froid au dernier moment. Déposez une bonne cuillerée à soupe de pâte, environ 25 g, au centre de chaque empreinte, sans l’étaler : elles doivent être remplies aux trois quarts. La pâte s’étalera seule en cuisant.",
        },
        {
          title: "Cuire avec un choc",
          text: "Enfournez à 220 °C pour 4 minutes : la bosse commence à pousser. Baissez à 180 °C sans ouvrir la porte et poursuivez 6 à 7 minutes, jusqu’à ce que les bords soient dorés et que la bosse, bien gonflée, reprenne sa forme quand on appuie dessus.",
          timer: { minutes: 11, label: "Cuisson des madeleines" },
          tip: "N’ouvrez pas la porte pendant les 4 premières minutes. La chaleur chute d’un coup, et la bosse aussi.",
        },
        {
          title: "Démouler aussitôt",
          text: "Démoulez tout de suite en tapant le moule sur le plan de travail, et laissez tiédir les madeleines sur une grille, bosse en l’air. Pour la deuxième fournée, laissez refroidir le moule, beurrez-le, farinez-le, remettez-le au froid avec la pâte, et remontez le four à 220 °C.",
        },
      ],
    },
  ],
  science: [
    {
      title: "D’où vient la bosse",
      text: "Dans un four très chaud et un moule en métal, la pâte prend d’abord sur les bords et le fond, au contact du moule. Le centre, plus épais et resté froid, est encore liquide quand la levure et la vapeur font gonfler la pâte. Bloquée sur les côtés, l’expansion n’a qu’une sortie : vers le haut, au milieu. On baisse ensuite à 180 °C pour cuire le cœur sans brûler les bords.",
    },
    {
      title: "Pourquoi le repos au froid",
      text: "Au froid, le beurre fige et la farine finit de s’hydrater : la pâte épaissit nettement. Une pâte épaisse et froide s’étale moins vite dans le moule, et l’écart de température avec le four est le plus grand possible au moment d’enfourner.",
    },
    {
      title: "Le rôle du miel",
      text: "Le miel contient beaucoup de fructose, un sucre qui retient l’eau et brunit à plus basse température que le sucre blanc. Les madeleines restent moelleuses plus longtemps et dorent mieux, en 11 minutes à peine.",
    },
  ],
  tips: [
    "Un moule en métal donne une bosse plus nette et des bords plus dorés qu’un moule en silicone, qui conduit mal la chaleur.",
    "Garnissez les empreintes avec une poche à douille ou un sac de congélation dont vous coupez un coin : c’est plus propre et les madeleines sont toutes de la même taille.",
    "Faites la pâte la veille au soir : une nuit au froid est ce qui marche le mieux pour la bosse, et le matin il n’y a plus qu’à cuire.",
    "Les madeleines sont meilleures tièdes, dans l’heure qui suit. Le lendemain, elles restent très bonnes, un peu moins moelleuses.",
  ],
  mistakes: [
    "Enfourner la pâte sans l’avoir laissée reposer au froid. Elle s’étale à plat et la bosse se forme à peine.",
    "Ouvrir la porte du four au début de la cuisson. La chaleur chute et la bosse retombe.",
    "Verser le beurre encore chaud. Il cuit les œufs par endroits et la pâte devient grasse.",
    "Remplir les empreintes à ras bord. La pâte déborde et les madeleines perdent leur forme de coquille.",
    "Les laisser refroidir dans le moule. La vapeur ramollit le dessous et elles collent.",
  ],
  variations: [
    {
      title: "Au beurre noisette",
      text: "Faites cuire le beurre à feu moyen 5 à 6 minutes, jusqu’à ce qu’il soit couleur noisette et sente le biscuit, puis laissez-le tiédir avant de l’ajouter. Les madeleines prennent un goût plus profond, légèrement grillé.",
    },
    {
      title: "Vanille ou fleur d’oranger",
      text: "Remplacez le zeste de citron par 1 cuillerée à café d’extrait de vanille, ou par 1 cuillerée à soupe d’eau de fleur d’oranger, ajoutée avec les œufs.",
    },
    {
      title: "Mini-madeleines",
      text: "Dans un moule à mini-madeleines, garnissez chaque empreinte d’une cuillerée à café de pâte. Comptez 3 minutes à 220 °C, puis 3 à 4 minutes à 180 °C. La pâte donne environ 60 pièces.",
    },
  ],
  storage:
    "Les madeleines se gardent 3 jours dans une boîte en fer bien fermée, à température ambiante. Elles se congèlent bien jusqu’à 2 mois : 5 minutes au four à 150 °C leur rendent leur croûte.",
  pairing: "Un thé noir, ou un verre de lait froid.",
  faq: [
    {
      q: "Comment faire la bosse des madeleines ?",
      a: "Avec un choc thermique : une pâte très froide, reposée au moins 3 heures au réfrigérateur, dans un moule froid, enfournée à 220 °C. Les bords prennent d’un coup, et le centre, encore liquide, gonfle vers le haut. On baisse ensuite à 180 °C pour finir la cuisson.",
    },
    {
      q: "Pourquoi mes madeleines n’ont-elles pas de bosse ?",
      a: "Le plus souvent, la pâte n’était pas assez froide ou le four pas assez chaud. Laissez reposer la pâte au moins 3 heures au froid, préchauffez 20 minutes à 220 °C, garnissez le moule au dernier moment, et n’ouvrez pas la porte pendant les premières minutes.",
    },
    {
      q: "Combien de temps laisser reposer la pâte à madeleines ?",
      a: "Au moins 3 heures au réfrigérateur, idéalement une nuit. La pâte se garde jusqu’à 2 jours au froid, filmée au contact. Au-delà, la levure perd de sa force.",
    },
    {
      q: "Moule en silicone ou en métal pour les madeleines ?",
      a: "En métal si vous pouvez. Il conduit mieux la chaleur : les bords dorent et la bosse se forme plus franchement. Le silicone marche aussi, posé sur une plaque bien chaude, en comptant 1 à 2 minutes de plus.",
    },
    {
      q: "Peut-on congeler des madeleines ?",
      a: "Oui, jusqu’à 2 mois, une fois refroidies, dans un sac de congélation bien fermé. Laissez-les décongeler 1 heure à température ambiante, puis passez-les 5 minutes au four à 150 °C pour leur rendre leur croûte.",
    },
    {
      q: "Par quoi remplacer le miel dans les madeleines ?",
      a: "Par le même poids de sucre, ou de sirop d’érable. Le miel n’est pas indispensable, mais il garde les madeleines moelleuses plus longtemps et les aide à dorer.",
    },
  ],
  nutrition: {
    calories: 95,
    protein: 2,
    fat: 5,
    saturatedFat: 3,
    carbs: 11,
    sugar: 6,
    fiber: 0,
    sodium: 35,
  },
  annotations: {
    hero: "pâte glacée, four brûlant",
    detail: "la bosse pousse en 4 minutes",
  },
  images: {
    heroAlt: "Madeleines dorées alignées dans un plateau en bois garni de papier dentelle",
    detailAlt: "Gros plan sur des madeleines nature et leur bosse dorée, posées sur une plaque perforée",
    credits: {
      hero: { photographer: "Pexels", url: "https://www.pexels.com/photo/25067703/" },
      detail: { photographer: "Pexels", url: "https://www.pexels.com/photo/16521869/" },
    },
  },
  datePublished: "2026-11-09",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#E5A350",
    onAccent: "#1b1712",
    ink: "#875012",
    tint: "#FBF2E5",
    deep: "#1A120C",
    focus: "50% 62%",
  },
});
