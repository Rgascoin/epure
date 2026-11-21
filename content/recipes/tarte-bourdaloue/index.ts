import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "tarte-bourdaloue",
  title: "Tarte Bourdaloue",
  seoTitle: "Tarte Bourdaloue aux poires et crème d’amande maison",
  tagline: "Des poires couchées dans l’amande.",
  description:
    "Tarte Bourdaloue pour 8 : pâte sucrée précuite, 4 poires pochées à la vanille et une crème d’amande, 35 à 40 minutes à 170 °C jusqu’à belle dorure.",
  summary:
    "Pour 8 personnes, pochez 4 poires dans un sirop vanillé pendant que la pâte sucrée repose, précuisez le fond 20 minutes à 180 °C, puis garnissez-le d’une crème d’amande (100 g de beurre, de sucre et de poudre d’amande, 2 œufs) et des demi-poires tranchées. La tarte cuit 35 à 40 minutes à 170 °C, jusqu’à ce que la crème soit gonflée et dorée. Comptez 3 h 40 en tout, dont 40 minutes de travail.",
  intro: [
    "La Bourdaloue doit son nom à une rue du 9e arrondissement de Paris. C’est une tarte de pâtissier faite de trois choses : un fond de pâte sucrée, une crème d’amande, et des demi-poires pochées couchées dedans en étoile. Au four, la crème gonfle autour des fruits et dore, les poires restent pâles et fondantes.",
    "Le danger vient du dessous. Entre l’humidité des poires et celle de la crème, un fond cru reste mou et blanc. On le précuit donc à blanc, et on éponge les poires une par une avant de les poser.",
    "Pochez les poires pendant que la pâte repose : les deux attentes se recouvrent, et le travail réel tient en quarante minutes.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "tarte bourdaloue",
    "recette tarte bourdaloue",
    "tarte poires amandes",
    "tarte aux poires crème d’amande",
    "tarte amandine aux poires",
    "tarte bourdaloue poires au sirop",
    "tarte poire frangipane",
    "crème d’amande pour tarte",
  ],
  diet: ["vegetarian"],
  servings: 8,
  servingsLabel: { one: "part", other: "parts" },
  times: { prep: 40, cook: 60, rest: 120 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["automne"],
  equipment: [
    "moule à tarte de 24 cm à fond amovible",
    "rouleau à pâtisserie",
    "billes de cuisson ou légumes secs",
    "casserole de 20 cm",
    "grille à pâtisserie",
  ],
  ingredients: [
    {
      title: "La pâte sucrée",
      items: [
        { qty: 100, unit: "g", name: "beurre", note: "mou, plus un peu pour le moule", step: 5 },
        { qty: 75, unit: "g", name: "sucre glace", step: 5 },
        { qty: 1, unit: "pincee", name: "sel fin", fixed: true },
        { qty: 25, unit: "g", name: "poudre d’amande", step: 5 },
        { qty: 1, name: "œuf", plural: "œufs", note: "à température ambiante", step: 1 },
        { qty: 200, unit: "g", name: "farine", note: "type 55", step: 10 },
      ],
    },
    {
      title: "Les poires pochées",
      items: [
        { qty: 750, unit: "ml", name: "eau", step: 50 },
        { qty: 150, unit: "g", name: "sucre en poudre", step: 10 },
        { qty: 0.5, unit: "gousse", name: "vanille", step: 0.5 },
        { qty: 1, name: "citron", plural: "citrons", step: 1 },
        { qty: 4, name: "poire", plural: "poires", note: "williams ou conférence, mûres mais fermes", step: 1 },
      ],
    },
    {
      title: "La crème d’amande",
      items: [
        { qty: 100, unit: "g", name: "beurre", note: "mou", step: 5 },
        { qty: 100, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 100, unit: "g", name: "poudre d’amande", step: 5 },
        { qty: 2, name: "œuf", plural: "œufs", note: "à température ambiante", step: 1 },
        { qty: 20, unit: "g", name: "amandes effilées", step: 5 },
      ],
    },
  ],
  method: [
    {
      title: "La pâte et les poires",
      steps: [
        {
          title: "Faire la pâte",
          text: "Dans un saladier, écrasez le beurre mou avec le sucre glace et le sel à la spatule jusqu’à obtenir une pommade lisse. Ajoutez la poudre d’amande, puis l’œuf. Versez la farine d’un coup et travaillez du bout des doigts, juste assez pour que la pâte se rassemble en boule. Elle doit rester un peu collante, jamais élastique.",
          tip: "Ne pétrissez pas : plus on travaille la farine, plus la pâte durcit et se rétracte à la cuisson.",
        },
        {
          title: "Reposer la pâte",
          text: "Aplatissez-la en un disque de 2 cm d’épaisseur, filmez-la et laissez-la reposer 1 heure au réfrigérateur.",
          timer: { minutes: 60, label: "Repos de la pâte" },
        },
        {
          title: "Préparer le sirop",
          text: "Pendant ce temps, portez l’eau à ébullition dans la casserole avec le sucre, la vanille fendue et grattée et le jus du citron. Pelez les poires, coupez-les en deux et retirez le cœur et la tige avec une petite cuillère.",
        },
        {
          title: "Pocher les poires",
          text: "Plongez les demi-poires dans le sirop, baissez à frémissement et laissez cuire 12 à 20 minutes selon leur maturité. Elles sont prêtes quand la pointe d’un couteau y entre sans résistance, comme dans du beurre mou.",
          timer: { minutes: 15, label: "Pochage des poires" },
        },
        {
          title: "Refroidir dans le sirop",
          text: "Retirez la casserole du feu et laissez les poires refroidir dans leur sirop au moins 30 minutes. Elles finissent de s’imprégner et se tiennent mieux au découpage.",
          timer: { minutes: 30, label: "Poires dans le sirop" },
        },
      ],
    },
    {
      title: "Le fond de tarte",
      steps: [
        {
          title: "Foncer le moule",
          text: "Beurrez le moule. Étalez la pâte sur un plan fariné à 3 mm d’épaisseur, en la tournant d’un quart de tour de temps en temps. Garnissez le moule en appuyant bien dans les angles, coupez l’excédent et piquez le fond à la fourchette. Placez 30 minutes au réfrigérateur et préchauffez le four à 180 °C, chaleur statique.",
          timer: { minutes: 30, label: "Fond au réfrigérateur" },
        },
        {
          title: "Cuire à blanc",
          text: "Couvrez le fond de papier cuisson, remplissez de billes ou de légumes secs et enfournez 15 minutes. Retirez papier et poids, puis remettez 5 minutes : le fond doit être sec et mat, à peine blond. Baissez le four à 170 °C.",
          timer: { minutes: 20, label: "Cuisson à blanc" },
          tip: "Ne sautez pas cette précuisson : la crème et les poires sont humides, et un fond cru dessous resterait pâteux.",
        },
      ],
    },
    {
      title: "La crème et la cuisson",
      steps: [
        {
          title: "Faire la crème d’amande",
          text: "Mélangez le beurre mou et le sucre au fouet jusqu’à ce que le mélange soit lisse, sans chercher à le faire mousser. Ajoutez la poudre d’amande, puis les œufs un par un, en mélangeant bien entre chaque. La crème doit être homogène et souple.",
          tip: "Trop d’air battu dans la crème la fait gonfler au four puis retomber, et elle soulève les poires en se rétractant.",
        },
        {
          title: "Trancher les poires",
          text: "Égouttez les demi-poires sur du papier absorbant et épongez-les bien. Posez-en une sur la planche, face bombée vers le haut, et taillez-la en tranches de 3 mm dans la largeur sans les déplacer. Glissez la lame dessous et appuyez légèrement pour l’étaler en éventail. Recommencez avec les autres.",
        },
        {
          title: "Garnir la tarte",
          text: "Étalez la crème d’amande sur le fond précuit, en couche régulière. Disposez les huit demi-poires en étoile, pointe vers le centre, en les enfonçant à peine dans la crème. Parsemez d’amandes effilées entre les poires.",
        },
        {
          title: "Cuire la tarte",
          text: "Enfournez 35 à 40 minutes à 170 °C. La tarte est cuite quand la crème a gonflé autour des poires, qu’elle est bien dorée et ferme au centre : la pointe d’un couteau plantée entre deux poires ressort sèche.",
          timer: { minutes: 35, label: "Cuisson de la tarte" },
        },
        {
          title: "Laisser refroidir",
          text: "Laissez tiédir 30 minutes dans le moule, puis démoulez sur une grille. Servez tiède ou à température ambiante.",
          timer: { minutes: 30, label: "Refroidissement" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi précuire le fond",
      text: "Tant qu’une pâte contient de l’eau, elle ne dépasse guère 100 °C : l’énergie du four part dans l’évaporation, et le fond ne peut ni sécher ni dorer. Sous une garniture humide, il reste dans cet état presque toute la cuisson. La précuisson à blanc évapore d’abord l’eau de la pâte et fige son amidon, avant que la crème ne vienne la couvrir.",
    },
    {
      title: "Une crème qui gonfle puis prend",
      text: "Dans la crème d’amande, les œufs font tout le travail de structure. En chauffant, l’eau qu’elle contient se transforme en vapeur et la fait gonfler, puis les protéines de l’œuf coagulent et figent cette forme. La poudre d’amande et le beurre, riches en gras, gardent l’ensemble moelleux plutôt que spongieux.",
    },
    {
      title: "Des poires qui se tiennent",
      text: "Un sirop sucré attendrit moins vite la poire que de l’eau pure : le sucre limite la sortie de l’eau des cellules et aide les parois du fruit à garder leur tenue. Les poires cuisent sans se défaire, et elles arrivent dans la tarte déjà tendres, ce qu’une poire crue n’aurait pas le temps de devenir en 40 minutes de four.",
    },
  ],
  tips: [
    "Pochez les poires la veille et gardez-les dans leur sirop au réfrigérateur : elles prennent le goût de la vanille et s’égouttent mieux.",
    "Sortez le beurre et les œufs une heure avant. Froids, ils se mélangent mal et la crème d’amande prend un aspect granuleux.",
    "Gardez le sirop de pochage : réduit de moitié à feu vif, il sert à lustrer la tarte au pinceau à la sortie du four.",
    "La tarte est meilleure quelques heures après la cuisson, quand la crème a fini de se raffermir. Elle se prépare très bien le matin pour le soir.",
  ],
  mistakes: [
    "Mal égoutter les poires : leur sirop détrempe la crème autour d’elles, qui reste pâle et humide. Épongez-les une à une, dessus et dessous.",
    "Enfoncer les poires jusqu’au fond : la crème ne peut plus gonfler autour et les fruits disparaissent sous une croûte dorée. Posez-les, appuyez à peine.",
    "Sortir la tarte quand la crème est seulement blonde : le centre n’a pas pris et retombe en refroidissant. Attendez une couleur dorée franche.",
    "Démouler tout de suite : chaude, la pâte sucrée est cassante et la crème fragile. La demi-heure de repos dans le moule évite la casse.",
  ],
  variations: [
    {
      title: "En frangipane",
      text: "Mélangez à la crème d’amande 150 g de crème pâtissière froide et bien lissée. La garniture est plus souple et moins dense ; la cuisson reste de 35 à 40 minutes.",
    },
    {
      title: "Avec un trait d’alcool",
      text: "Ajoutez 1 cuillerée à soupe d’eau-de-vie de poire ou de rhum brun à la crème d’amande. L’alcool ne s’évapore pas entièrement à la cuisson : évitez cette version pour les enfants et les femmes enceintes.",
    },
    {
      title: "En tartelettes",
      text: "Foncez 8 moules de 10 cm, une demi-poire par tartelette. Précuisez 12 minutes au lieu de 20, puis comptez 20 à 25 minutes à 170 °C une fois garnies.",
    },
  ],
  storage:
    "La tarte Bourdaloue se garde 2 jours au réfrigérateur, couverte, à cause des œufs de la crème. Sortez-la 30 minutes avant de servir. Elle se congèle 1 mois, entière ou en parts, et se décongèle une nuit au réfrigérateur ; une fois décongelée, ne la recongelez pas.",
  pairing:
    "Une crème fouettée peu sucrée ou une boule de glace à la vanille. Côté vin, un coteaux-du-layon ou un muscat, servis frais.",
  easy: {
    shortcut: "pâte sucrée du commerce et poires au sirop en conserve",
    note: "On gagne plus de deux heures : ni pâte à faire reposer, ni pochage. Choisissez une pâte pur beurre, sucrée ou brisée, et des demi-poires au sirop léger. On perd un peu de croustillant et le parfum de la vanille, mais la crème d’amande reste maison, et c’est elle qui fait la tarte.",
    times: { prep: 20, cook: 40, rest: 30 },
    ingredients: [
      {
        title: "La base",
        items: [
          { qty: 1, unit: "rouleau", name: "pâte sucrée", note: "ou pâte brisée, pur beurre, environ 230 g", fixed: true },
          {
            qty: 820,
            unit: "g",
            name: "demi-poires au sirop en conserve",
            note: "1 boîte, environ 480 g égouttés, soit 8 demi-poires",
            fixed: true,
          },
        ],
      },
      {
        title: "La crème d’amande",
        items: [
          { qty: 100, unit: "g", name: "beurre", note: "mou", step: 5 },
          { qty: 100, unit: "g", name: "sucre en poudre", step: 5 },
          { qty: 100, unit: "g", name: "poudre d’amande", step: 5 },
          { qty: 2, name: "œuf", plural: "œufs", note: "à température ambiante", step: 1 },
          { qty: 20, unit: "g", name: "amandes effilées", step: 5 },
        ],
      },
    ],
    method: [
      {
        title: "La tarte",
        steps: [
          {
            title: "Préchauffer et égoutter",
            text: "Glissez une plaque de cuisson sur la grille du bas et préchauffez le four à 180 °C, chaleur statique, pendant 15 minutes. Versez les poires dans une passoire et laissez-les s’égoutter tout ce temps.",
            timer: { minutes: 15, label: "Préchauffage et égouttage" },
          },
          {
            title: "Foncer le moule",
            text: "Déroulez la pâte dans le moule avec son papier, appuyez dans les angles et coupez l’excédent. Piquez le fond à la fourchette et gardez le moule au réfrigérateur le temps de préparer la crème.",
          },
          {
            title: "Faire la crème d’amande",
            text: "Mélangez le beurre mou et le sucre au fouet jusqu’à obtenir une pommade lisse, sans faire mousser. Ajoutez la poudre d’amande, puis les œufs un par un.",
          },
          {
            title: "Garnir",
            text: "Épongez les demi-poires sur du papier absorbant et taillez-les en tranches de 3 mm sans les déplacer. Étalez la crème sur la pâte, posez les poires en étoile en les écrasant légèrement en éventail, et parsemez d’amandes effilées.",
          },
          {
            title: "Cuire",
            text: "Posez le moule directement sur la plaque chaude et faites cuire 35 à 40 minutes. La tarte est prête quand la crème est gonflée, bien dorée et ferme au centre, et que le bord de la pâte est doré.",
            timer: { minutes: 35, label: "Cuisson de la tarte" },
          },
          {
            title: "Laisser tiédir",
            text: "Laissez reposer 30 minutes dans le moule avant de démouler sur une grille.",
            timer: { minutes: 30, label: "Refroidissement" },
          },
        ],
      },
    ],
  },
  faq: [
    {
      q: "Faut-il précuire la pâte d’une tarte Bourdaloue ?",
      a: "Oui, 20 minutes à 180 °C, dont 15 avec des poids, pour une pâte sucrée maison. La crème d’amande et les poires sont humides ; sans précuisson, le fond reste pâle et mou. Avec une pâte du commerce, plus fine, une plaque chaude glissée sous le moule suffit.",
    },
    {
      q: "Quelles poires choisir pour une tarte Bourdaloue ?",
      a: "Des williams ou des conférence, mûres mais encore fermes, pochées dans un sirop vanillé. Les demi-poires au sirop en conserve conviennent aussi, à condition de les égoutter longuement et de les éponger avant de les trancher.",
    },
    {
      q: "Quelle différence entre crème d’amande et frangipane ?",
      a: "La crème d’amande associe à poids égal beurre, sucre, poudre d’amande et œufs. La frangipane, c’est cette crème mélangée à de la crème pâtissière, ce qui la rend plus souple. La Bourdaloue se fait avec l’une ou l’autre ; cette recette utilise la crème d’amande, plus simple.",
    },
    {
      q: "Comment savoir si la tarte Bourdaloue est cuite ?",
      a: "Après 35 à 40 minutes à 170 °C, la crème a gonflé autour des poires, elle est bien dorée et ne tremble plus au centre. Une pointe de couteau plantée entre deux poires doit ressortir sèche.",
    },
    {
      q: "La tarte Bourdaloue contient-elle des fruits à coque ?",
      a: "Oui, 145 g d’amandes en tout, dans la pâte, la crème et le décor. Elle ne convient pas aux personnes allergiques aux fruits à coque, et remplacer l’amande par une autre poudre de noix ou de noisette ne règle rien : ce sont aussi des fruits à coque.",
    },
    {
      q: "Peut-on préparer la tarte Bourdaloue la veille ?",
      a: "Oui. Couverte, elle se garde 2 jours au réfrigérateur et la crème est même plus fondante le lendemain. Sortez-la 30 minutes avant de servir pour que la pâte retrouve son croquant.",
    },
  ],
  nutrition: {
    calories: 560,
    protein: 9,
    fat: 32,
    saturatedFat: 14,
    carbs: 56,
    sugar: 34,
    fiber: 4.5,
    sodium: 80,
  },
  annotations: { hero: "la crème gonfle entre les poires", detail: "bien dorée, pas seulement blonde" },
  images: {
    heroAlt:
      "Tarte Bourdaloue entière vue du dessus : demi-poires en étoile dans une crème d’amande dorée, amandes effilées",
    detailAlt: "Tarte Bourdaloue sortie du four, demi-poires tranchées enfoncées dans une crème d’amande bien dorée",
    credits: {
      hero: {
        photographer: "Jebulon",
        url: "https://commons.wikimedia.org/wiki/File:Tarte_aux_poires_2a.jpg",
        source: "Wikimedia Commons",
        license: "Public domain",
      },
      detail: {
        photographer: "Joel Bez",
        url: "https://www.flickr.com/photos/21458229@N00/5051989570",
        source: "Flickr",
        license: "CC BY 2.0",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#C58B2E",
    onAccent: "#1B1712",
    ink: "#855710",
    tint: "#FAF1E1",
    deep: "#1D150B",
    focus: "50% 50%",
  },
});
