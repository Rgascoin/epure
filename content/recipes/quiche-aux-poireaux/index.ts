import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "quiche-aux-poireaux",
  title: "Quiche aux poireaux",
  seoTitle: "Quiche aux poireaux maison, sans une goutte d’eau",
  tagline: "Des poireaux fondus jusqu’à la dernière goutte.",
  description:
    "Quiche aux poireaux pour 6 : pâte brisée maison cuite à blanc, 800 g de poireaux fondus au beurre, œufs, crème et lait, 35 à 40 min à 170 °C.",
  summary:
    "Pour 6 personnes, faites fondre 800 g de poireaux émincés dans 40 g de beurre, 15 minutes à couvert puis 10 minutes à découvert, jusqu’à ce qu’il ne reste plus d’eau. Foncez un moule de 24 cm d’une pâte brisée maison (200 g de farine, 100 g de beurre), cuisez-la à blanc 25 minutes à 190 °C, garnissez de poireaux, versez 3 œufs battus avec 20 cl de crème et 15 cl de lait, puis enfournez 35 à 40 minutes à 170 °C. Comptez 2 h 35, repos compris.",
  intro: [
    "La quiche aux poireaux est une quiche douce : des poireaux fondus longuement au beurre, un appareil d’œufs, de crème et de lait, et une pâte brisée qui doit rester croustillante dessous. Le fromage est facultatif, les poireaux ont assez de goût pour porter la quiche seuls.",
    "Elle rate presque toujours pour la même raison : l’eau. Un poireau en contient beaucoup, et ce qu’il n’a pas rendu dans la sauteuse, il le rend dans le four. La quiche baigne, le fond ramollit.",
    "Laissez donc fondre les poireaux jusqu’à ce que la sauteuse soit sèche. Et sortez la quiche un peu avant qu’elle ait l’air prise : elle finit de cuire en tiédissant.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "quiche aux poireaux",
    "recette quiche aux poireaux",
    "quiche poireaux",
    "quiche aux poireaux facile",
    "quiche poireaux pâte brisée",
    "quiche aux poireaux sans lardons",
    "fondue de poireaux",
    "quiche poireaux comté",
  ],
  diet: ["vegetarian"],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 30, cook: 65, rest: 60 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Hiver", "Printemps"],
  tags: ["hiver", "printemps"],
  equipment: [
    "un moule à tarte de 24 cm",
    "un rouleau à pâtisserie",
    "une sauteuse avec couvercle",
    "des billes de cuisson ou des haricots secs",
    "un saladier et un fouet",
  ],
  ingredients: [
    {
      title: "La pâte brisée",
      items: [
        { qty: 200, unit: "g", name: "farine T55", step: 10 },
        { qty: 0.5, unit: "cac", name: "sel fin" },
        { qty: 100, unit: "g", name: "beurre doux", note: "très froid, en dés", step: 5 },
        { qty: 60, unit: "ml", name: "eau glacée", step: 5 },
      ],
    },
    {
      title: "La fondue de poireaux",
      items: [
        { qty: 800, unit: "g", name: "poireaux", note: "3 ou 4 moyens, soit 500 g environ une fois parés", step: 50 },
        { qty: 40, unit: "g", name: "beurre", note: "doux", step: 5 },
        { qty: 1, unit: "pincee", name: "sel", step: 1 },
      ],
    },
    {
      title: "L’appareil",
      items: [
        { qty: 3, name: "œuf", plural: "œufs", step: 1 },
        { qty: 20, unit: "cl", name: "crème liquide entière", step: 1 },
        { qty: 15, unit: "cl", name: "lait entier", step: 1 },
        { qty: 1, unit: "pincee", name: "noix de muscade", note: "râpée", step: 1 },
        { name: "poivre du moulin" },
        { qty: 60, unit: "g", name: "comté râpé", step: 5, optional: true },
      ],
    },
  ],
  method: [
    {
      title: "La pâte brisée",
      steps: [
        {
          title: "Pincer le beurre",
          text: "Mélangez la farine et le sel dans un saladier. Ajoutez le beurre froid et pincez-le dans la farine entre le pouce et l’index, sans traîner, jusqu’à obtenir des miettes de la taille d’un petit pois.",
        },
        {
          title: "Fraiser et laisser reposer",
          text: "Versez l’eau glacée et rassemblez la pâte à la fourchette. Posez-la sur le plan de travail et écrasez-la deux fois devant vous avec la paume, par petits morceaux, puis réunissez-la en disque. Filmez-la et laissez-la 30 minutes au réfrigérateur.",
          timer: { minutes: 30, label: "Repos de la pâte" },
          tip: "Deux passages de paume suffisent : au-delà, la pâte devient élastique et se rétracte à la cuisson.",
        },
      ],
    },
    {
      title: "La fondue de poireaux",
      steps: [
        {
          title: "Laver et émincer",
          text: "Pendant le repos, coupez la racine et le vert foncé des poireaux, en gardant le vert tendre. Fendez-les en deux dans la longueur et rincez-les sous l’eau en écartant les feuilles, là où la terre se cache. Émincez-les en demi-rondelles de 5 mm.",
        },
        {
          title: "Faire fondre les poireaux",
          text: "Faites mousser le beurre dans la sauteuse à feu moyen-doux, ajoutez les poireaux et le sel. Couvrez et laissez cuire 15 minutes en remuant deux fois, puis retirez le couvercle et poursuivez 10 minutes. C’est prêt quand les poireaux sont tendres et brillants, sans coloration, et qu’en les poussant sur le côté plus aucun liquide ne coule au fond.",
          timer: { minutes: 25, label: "Fondue de poireaux" },
          tip: "Le test de la sauteuse inclinée ne trompe pas : s’il reste une flaque, continuez quelques minutes.",
        },
      ],
    },
    {
      title: "Le fond de tarte",
      steps: [
        {
          title: "Foncer le moule",
          text: "Étalez la pâte sur 3 mm d’épaisseur et garnissez-en le moule en l’appuyant bien dans l’angle. Coupez l’excédent au ras du bord et piquez le fond à la fourchette. Mettez le moule 15 minutes au congélateur et préchauffez le four à 190 °C pendant ce temps.",
          timer: { minutes: 15, label: "Fond au congélateur" },
        },
        {
          title: "Cuire à blanc",
          text: "Couvrez la pâte de papier cuisson, remplissez-la de billes et enfournez 15 minutes. Retirez papier et billes, puis prolongez 8 minutes, jusqu’à ce que le fond soit sec et blond. Battez les œufs de l’appareil dans un saladier, badigeonnez-en le fond avec un pinceau et remettez 2 minutes au four.",
          timer: { minutes: 25, label: "Cuisson à blanc" },
          tip: "Cette fine couche d’œuf cuit en deux minutes et forme un vernis qui protège la pâte du liquide.",
        },
      ],
    },
    {
      title: "La garniture et la cuisson",
      steps: [
        {
          title: "Préparer l’appareil",
          text: "Ajoutez aux œufs battus la crème, le lait, la muscade et quelques tours de poivre. Fouettez juste assez pour mélanger, sans faire mousser. Goûtez et salez légèrement : les poireaux le sont déjà.",
        },
        {
          title: "Garnir et cuire",
          text: "Baissez le four à 170 °C. Étalez les poireaux sur le fond de tarte, parsemez de comté si vous en mettez, puis versez l’appareil doucement. Enfournez 35 à 40 minutes. La quiche est cuite quand elle est dorée par endroits, légèrement gonflée sur les bords, et que le centre tremble à peine quand on bouge le moule.",
          timer: { minutes: 38, label: "Cuisson de la quiche" },
        },
        {
          title: "Laisser tiédir",
          text: "Laissez reposer la quiche 15 minutes sur une grille avant de la couper. L’appareil finit de prendre avec la chaleur qui reste, et les parts sortent nettes. Servez tiède, avec une salade verte.",
          timer: { minutes: 15, label: "Repos avant découpe" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Où part l’eau des poireaux",
      text: "Le poireau est composé d’environ 90 % d’eau. La chaleur ramollit les parois de ses cellules, qui la libèrent. Sous le couvercle, cette eau cuit les poireaux ; à découvert, elle s’évapore. Ce qui n’est pas parti dans la sauteuse s’écoule dans l’appareil au four.",
    },
    {
      title: "Comment prend l’appareil",
      text: "Les protéines de l’œuf coagulent entre 62 et 70 °C. Diluées dans la crème et le lait, elles forment un réseau souple qui retient le liquide. Trop chauffé, ce réseau se resserre et chasse l’eau : l’appareil devient granuleux et la quiche rend du jus.",
    },
    {
      title: "Le vernis d’œuf sur la pâte",
      text: "Badigeonné sur la pâte chaude, l’œuf coagule en quelques minutes en une pellicule continue. Elle fait barrière entre l’appareil liquide et la pâte, qui reste sèche et croustillante dessous.",
    },
    {
      title: "Pourquoi fraiser plutôt que pétrir",
      text: "Écraser la pâte à la paume étale le beurre en fines couches dans la farine sans trop développer le gluten, ce réseau élastique qui se forme quand on pétrit. La pâte reste friable et se rétracte peu à la cuisson.",
    },
  ],
  tips: [
    "Gardez le vert foncé des poireaux pour un bouillon ou une soupe : il est trop fibreux pour la quiche.",
    "Une fois fondus, étalez les poireaux sur une assiette : ils tiédissent et finissent de sécher pendant que la pâte cuit.",
    "Faites cuire la quiche sur la grille du bas du four : la chaleur arrive plus directement sous le moule et le fond dore mieux.",
    "Le passage au congélateur après le fonçage fige le beurre de la pâte, qui se tasse moins le long des bords à la cuisson à blanc.",
    "Pour une quiche plus ferme, à emporter en pique-nique, remplacez le lait par la même quantité de crème.",
  ],
  mistakes: [
    "Arrêter les poireaux trop tôt : leur eau finit dans la quiche, qui baigne dans son jus. S’ils rendent encore du liquide, égouttez-les dans une passoire en les pressant avec une cuillère.",
    "Laver les poireaux entiers sans les fendre : la terre reste entre les feuilles et croque sous la dent. Fendez-les toujours avant de les rincer.",
    "Cuire la quiche jusqu’à ce que le centre soit ferme : l’appareil devient granuleux, se fissure et rend de l’eau. Sortez-la quand le centre tremble encore.",
    "Couper la quiche à la sortie du four : l’appareil coule et la part s’effondre. Les 15 minutes de repos ne sont pas du temps perdu.",
  ],
  variations: [
    {
      title: "Poireaux et saumon fumé",
      text: "Répartissez 150 g de saumon fumé en lanières sur les poireaux avant de verser l’appareil, et ne salez pas l’appareil. La cuisson reste la même.",
    },
    {
      title: "Poireaux et chèvre",
      text: "Remplacez le comté par 120 g de bûche de chèvre en rondelles posées sur l’appareil juste avant d’enfourner. Elles dorent sur le dessus pendant les 35 à 40 minutes.",
    },
    {
      title: "Poireaux, pommes de terre et lardons",
      text: "Dorez 100 g de lardons à sec et coupez 2 pommes de terre cuites à l’eau en rondelles de 5 mm. Répartissez-les avec les poireaux, ne salez pas l’appareil et ajoutez 5 minutes de cuisson.",
    },
  ],
  storage:
    "La quiche se garde 2 à 3 jours au réfrigérateur, couverte. Réchauffez-la 15 minutes au four à 160 °C plutôt qu’au micro-ondes, qui ramollit la pâte. Elle se congèle cuite et refroidie, 2 mois ; une fois décongelée, ne la recongelez pas.",
  pairing:
    "Une salade de mâche ou de jeunes pousses à l’huile de noix, et un blanc sec, un chablis ou un sancerre.",
  easy: {
    shortcut: "pâte brisée en rouleau du commerce",
    note: "On gagne la pâte, son repos et le passage au congélateur. Prenez une pâte pur beurre, sans huile de palme : elle a plus de goût et dore mieux. Elle est plus fine que la pâte maison, d’où une cuisson à blanc plus courte.",
    times: { prep: 15, cook: 65, rest: 15 },
    ingredients: [
      {
        title: "Le fond",
        items: [{ qty: 1, unit: "rouleau", name: "pâte brisée pur beurre", note: "230 g environ", step: 1, fixed: true }],
      },
      {
        title: "La garniture",
        items: [
          { qty: 800, unit: "g", name: "poireaux", note: "3 ou 4 moyens", step: 50 },
          { qty: 40, unit: "g", name: "beurre", note: "doux", step: 5 },
          { qty: 1, unit: "pincee", name: "sel", step: 1 },
          { qty: 3, name: "œuf", plural: "œufs", step: 1 },
          { qty: 20, unit: "cl", name: "crème liquide entière", step: 1 },
          { qty: 15, unit: "cl", name: "lait entier", step: 1 },
          { qty: 1, unit: "pincee", name: "noix de muscade", note: "râpée", step: 1 },
          { name: "poivre du moulin" },
          { qty: 60, unit: "g", name: "comté râpé", step: 5, optional: true },
        ],
      },
    ],
    method: [
      {
        title: "La quiche",
        steps: [
          {
            title: "Faire fondre les poireaux",
            text: "Lavez et émincez les poireaux en demi-rondelles de 5 mm. Faites-les fondre dans le beurre avec le sel, à feu moyen-doux : 15 minutes à couvert, puis 10 minutes à découvert, jusqu’à ce qu’il ne reste plus de liquide au fond de la sauteuse.",
            timer: { minutes: 25, label: "Fondue de poireaux" },
          },
          {
            title: "Cuire le fond à blanc",
            text: "Pendant ce temps, préchauffez le four à 190 °C. Déroulez la pâte dans le moule avec son papier, piquez le fond, couvrez de papier cuisson et de billes. Enfournez 12 minutes, retirez les billes et prolongez 5 minutes, jusqu’à ce que le fond soit sec.",
            timer: { minutes: 17, label: "Cuisson à blanc" },
          },
          {
            title: "Préparer l’appareil",
            text: "Fouettez les œufs avec la crème, le lait, la muscade et du poivre, sans faire mousser. Salez légèrement.",
          },
          {
            title: "Garnir et cuire",
            text: "Baissez le four à 170 °C. Étalez les poireaux sur le fond, ajoutez le comté si vous en mettez, versez l’appareil et enfournez 35 à 40 minutes, jusqu’à ce que le centre tremble à peine.",
            timer: { minutes: 38, label: "Cuisson de la quiche" },
          },
          {
            title: "Laisser tiédir",
            text: "Laissez reposer 15 minutes avant de couper, le temps que l’appareil finisse de prendre.",
            timer: { minutes: 15, label: "Repos avant découpe" },
          },
        ],
      },
    ],
  },
  faq: [
    {
      q: "Pourquoi ma quiche aux poireaux est pleine d’eau ?",
      a: "Parce que les poireaux n’étaient pas assez fondus, ou que la quiche a trop cuit. Les poireaux contiennent environ 90 % d’eau : faites-les cuire jusqu’à ce que plus aucun liquide ne coule au fond de la sauteuse. Et sortez la quiche quand le centre tremble encore, sinon l’appareil se resserre et rend du jus.",
    },
    {
      q: "Faut-il précuire la pâte d’une quiche aux poireaux ?",
      a: "Oui, 25 minutes à 190 °C pour une pâte maison : 15 minutes avec des billes, 8 sans, puis 2 minutes après l’avoir badigeonnée d’œuf. Sans cette cuisson à blanc, l’appareil détrempe la pâte avant qu’elle ait cuit.",
    },
    {
      q: "Quelle partie du poireau utiliser pour une quiche ?",
      a: "Le blanc et le vert tendre, soit environ les deux tiers du poireau. Le vert foncé, fibreux, reste filandreux même après une longue cuisson ; gardez-le pour un bouillon.",
    },
    {
      q: "Peut-on préparer la quiche aux poireaux la veille ?",
      a: "Oui. Faites-la cuire, laissez-la refroidir et gardez-la couverte au réfrigérateur. Réchauffez-la 15 minutes à 160 °C : la pâte retrouve son croquant. Vous pouvez aussi préparer seulement la fondue de poireaux la veille.",
    },
    {
      q: "Peut-on congeler une quiche aux poireaux ?",
      a: "Oui, cuite et refroidie, entière ou en parts, bien emballée, jusqu’à 2 mois. Décongelez-la une nuit au réfrigérateur, puis réchauffez-la 15 à 20 minutes à 160 °C. L’appareil est un peu moins lisse qu’au premier jour. Ne la recongelez pas.",
    },
    {
      q: "Comment savoir si une quiche est cuite ?",
      a: "Secouez doucement le moule : les bords sont pris, le centre tremble à peine, comme une gelée. Une lame plantée à mi-chemin entre le bord et le centre ressort propre. Si le centre ondule franchement, prolongez de 5 minutes.",
    },
  ],
  nutrition: {
    calories: 460,
    protein: 9,
    fat: 33,
    saturatedFat: 20,
    carbs: 30,
    sugar: 5,
    fiber: 4,
    sodium: 330,
  },
  annotations: { hero: "le centre tremblait encore à la sortie", detail: "le blanc et le vert tendre seulement" },
  images: {
    heroAlt:
      "Quiche aux poireaux et pommes de terre entamée sur une grille, dessus gratiné, poireaux fondus bien visibles dans la tranche",
    detailAlt: "Trois poireaux sur fond blanc : un entier, un paré, un dernier coupé en rondelles",
    credits: {
      hero: {
        photographer: "Katrin Gilger",
        url: "https://commons.wikimedia.org/wiki/File:Quiche_with_Potatoes,_Leek,_Bacon_%26_Wine_(4876354744).jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 2.0",
      },
      detail: { photographer: "Larisa P.", url: "https://www.pexels.com/photo/fresh-organic-leeks-on-white-surface-4965038/" },
    },
  },
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  hero,
  detail,
  theme: {
    accent: "#7E9B3A",
    onAccent: "#1B1712",
    ink: "#4F6420",
    tint: "#F1F4E4",
    deep: "#12160A",
    focus: "62% 55%",
  },
});
