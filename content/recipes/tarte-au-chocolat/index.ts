import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "tarte-au-chocolat",
  title: "Tarte au chocolat",
  seoTitle: "Tarte au chocolat, pâte sablée et ganache sans cuisson",
  tagline: "Le four ne sert qu’à la pâte.",
  description:
    "Tarte au chocolat pour 8 : pâte sablée cuite à blanc, ganache de 250 g de chocolat noir et 30 cl de crème prise 2 h au frais. La garniture ne cuit pas.",
  summary:
    "Pour 8 parts, préparez une pâte sablée avec 200 g de farine, 100 g de beurre, 70 g de sucre glace et un œuf, laissez-la reposer 1 heure, puis cuisez-la à blanc 25 minutes environ à 170 °C dans un moule de 24 cm. Versez dessus une ganache de 250 g de chocolat noir, 30 cl de crème et 40 g de beurre, et laissez prendre 2 heures au réfrigérateur. Comptez 5 h 20 en tout, dont 40 minutes de travail.",
  intro: [
    "Une tarte au chocolat ne demande que deux choses bien faites : un fond sablé cuit jusqu’au bout et une ganache lisse qui fond sur la langue. La garniture ne voit jamais le four, elle prend au réfrigérateur.",
    "Le fond est le point faible. Pâle ou à peine cuit, il ramollit sous la ganache et la part s’effondre dans l’assiette. Il doit sortir du four doré partout, centre compris, et refroidir avant d’être garni.",
    "Pour la ganache, la crème chaude se verse en trois fois et on mélange en petits cercles, sans fouetter. Et on sort la tarte du réfrigérateur 20 minutes avant de servir : froide, la ganache reste dure et terne.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "tarte au chocolat",
    "recette tarte au chocolat",
    "tarte au chocolat ganache",
    "tarte au chocolat sans cuisson",
    "tarte au chocolat pâte sablée",
    "tarte au chocolat noir",
    "ganache pour tarte au chocolat",
    "tarte au chocolat facile",
  ],
  diet: ["vegetarian"],
  servings: 8,
  servingsLabel: { one: "part", other: "parts" },
  times: { prep: 40, cook: 27, rest: 250 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Toute l’année"],
  tags: ["saint-valentin"],
  equipment: [
    "moule à tarte de 24 cm à fond amovible",
    "rouleau à pâtisserie et papier cuisson",
    "billes de cuisson ou légumes secs",
    "spatule souple",
  ],
  ingredients: [
    {
      title: "La pâte sablée",
      items: [
        { qty: 200, unit: "g", name: "farine", note: "type 55", step: 10 },
        { qty: 70, unit: "g", name: "sucre glace", step: 5 },
        { qty: 1, unit: "pincee", name: "sel fin", fixed: true },
        { qty: 100, unit: "g", name: "beurre doux", note: "froid, en dés", step: 5 },
        { qty: 1, name: "œuf", plural: "œufs", note: "battu", step: 1 },
      ],
    },
    {
      title: "La ganache",
      items: [
        { qty: 250, unit: "g", name: "chocolat noir", note: "64 à 70 % de cacao", step: 10 },
        { qty: 30, unit: "cl", name: "crème liquide entière", note: "30 % de matière grasse", step: 5 },
        { qty: 40, unit: "g", name: "beurre doux", note: "mou, en dés", step: 5 },
      ],
    },
  ],
  method: [
    {
      title: "Le fond de tarte",
      steps: [
        {
          title: "Sabler la pâte",
          text: "Dans un saladier, mélangez la farine, le sucre glace et le sel. Ajoutez le beurre froid et frottez le tout entre vos doigts jusqu’à obtenir un sable fin, sans morceau de beurre visible. Versez l’œuf battu et rassemblez à la corne ou à la fourchette, sans pétrir, jusqu’à ce que la pâte forme une boule.",
          tip: "Moins vous la travaillez, plus elle sera friable et moins elle rétrécira à la cuisson.",
        },
        {
          title: "Laisser reposer",
          text: "Aplatissez la pâte en un disque de 2 cm d’épaisseur, emballez-le dans du film et laissez-le 1 heure au réfrigérateur. Elle doit être ferme sous le doigt, sans être dure.",
          timer: { minutes: 60, label: "Repos de la pâte" },
        },
        {
          title: "Foncer le moule",
          text: "Étalez la pâte entre deux feuilles de papier cuisson sur 3 mm d’épaisseur. Foncez le moule beurré en appuyant bien dans les angles, coupez l’excédent au ras du bord et piquez le fond à la fourchette. Remettez 30 minutes au réfrigérateur, et préchauffez le four à 170 °C pendant ce temps.",
          timer: { minutes: 30, label: "Fond au froid" },
          tip: "Entre deux papiers, la pâte ne colle pas et ne prend pas de farine en plus.",
        },
        {
          title: "Cuire à blanc",
          text: "Couvrez le fond de papier cuisson, remplissez-le de billes de cuisson ou de légumes secs jusqu’en haut des bords, et enfournez 15 minutes à 170 °C.",
          timer: { minutes: 15, label: "Cuisson à blanc" },
        },
        {
          title: "Dorer le fond",
          text: "Retirez le papier et les billes, puis remettez au four 10 à 12 minutes, jusqu’à ce que le fond soit doré partout, centre compris, et sente le biscuit.",
          timer: { minutes: 12, label: "Fond qui dore" },
          tip: "Un fond encore pâle au centre ramollira sous la ganache : mieux vaut 2 minutes de trop qu’une de moins.",
        },
        {
          title: "Laisser refroidir",
          text: "Laissez refroidir le fond 20 minutes dans le moule, sur une grille. Pendant ce temps, hachez finement le chocolat et mettez-le dans un saladier.",
          timer: { minutes: 20, label: "Fond qui refroidit" },
        },
      ],
    },
    {
      title: "La ganache",
      steps: [
        {
          title: "Verser la crème",
          text: "Portez la crème à frémissement. Versez-en un tiers sur le chocolat et mélangez à la spatule, en petits cercles partant du centre. Ajoutez le reste en deux fois. Au début, le mélange semble granuleux ; au troisième ajout, il devient lisse, brillant et élastique.",
          tip: "Ne fouettez pas : l’air reste prisonnier et la surface de la tarte sera criblée de petits trous.",
        },
        {
          title: "Ajouter le beurre",
          text: "Quand la ganache n’est plus que tiède, entre 35 et 40 °C, incorporez le beurre mou en mélangeant doucement jusqu’à ce qu’il ait disparu.",
        },
        {
          title: "Garnir et laisser prendre",
          text: "Versez la ganache dans le fond refroidi, jusqu’à 2 mm du bord. Tapotez le moule sur le plan de travail pour faire remonter les bulles, puis laissez prendre 2 heures au réfrigérateur. La surface doit être ferme et mate au toucher.",
          timer: { minutes: 120, label: "Prise de la ganache" },
        },
        {
          title: "Servir",
          text: "Sortez la tarte du réfrigérateur 20 minutes avant de servir : la ganache retrouve son brillant et devient fondante. Coupez-la avec un couteau passé sous l’eau chaude et essuyé entre chaque part.",
          timer: { minutes: 20, label: "Tarte à température" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi sabler la pâte",
      text: "En frottant le beurre dans la farine avant d’ajouter l’œuf, on enrobe les grains de farine de gras. Le gluten a alors du mal à former un réseau élastique, et la pâte cuite reste friable au lieu d’être dure. Le repos au froid détend le peu de gluten formé, ce qui limite le retrait à la cuisson.",
    },
    {
      title: "Une ganache est une émulsion",
      text: "La ganache disperse le beurre de cacao et la matière grasse de la crème en fines gouttelettes dans l’eau de la crème. En mélangeant à partir du centre, on construit cette émulsion petit à petit. Si elle se sépare et devient huileuse, une cuillerée de crème tiède et quelques secondes de mixeur plongeant la rattrapent.",
    },
    {
      title: "Pourquoi elle prend au froid",
      text: "Le beurre de cacao fond vers 34 °C, juste en dessous de la température de la bouche. Au réfrigérateur, il se solidifie et la ganache se tient ; à température ambiante, elle s’assouplit, et elle fond sur la langue.",
    },
  ],
  tips: [
    "Prenez un chocolat noir entre 64 et 70 % de cacao. En dessous, la ganache prend moins bien ; au-dessus, elle devient sèche et amère.",
    "Le chocolat en pistoles se passe de hachage et fond plus régulièrement.",
    "Une pincée de fleur de sel sur la ganache au moment de servir fait ressortir le chocolat.",
    "La tarte est encore meilleure faite la veille : la ganache a le temps de prendre à cœur et se coupe plus net.",
  ],
  mistakes: [
    "Étaler la pâte sans la laisser reposer : elle se rétracte au four et les bords s’affaissent. Une heure au froid avant, 30 minutes dans le moule ensuite.",
    "Garder un fond pâle : il ramollit au contact de la ganache. Remettez-le au four tant que le centre n’est pas doré.",
    "Verser une crème qui bout à gros bouillons sur des morceaux de chocolat trop gros : la ganache tranche ou garde des grains. Mixez-la quelques secondes au mixeur plongeant, lame immergée.",
    "Servir la tarte à la sortie du réfrigérateur : la ganache est dure, terne, et les arômes sont muets. Comptez 20 minutes à température ambiante.",
  ],
  variations: [
    {
      title: "Ganache cuite",
      text: "Faites chauffer 20 cl de crème et 10 cl de lait, versez sur 200 g de chocolat, puis ajoutez 1 œuf battu. Versez dans le fond cuit et enfournez 20 à 25 minutes à 150 °C, jusqu’à ce que le bord soit pris et que le centre tremble à peine. Laissez refroidir 1 heure avant de couper.",
    },
    {
      title: "Aux framboises",
      text: "Répartissez 125 g de framboises sur le fond refroidi avant de verser la ganache. Elles restent entières sous le chocolat et apportent de l’acidité à chaque bouchée.",
    },
    {
      title: "Au chocolat au lait",
      text: "Remplacez la ganache par 300 g de chocolat au lait et 20 cl de crème, sans beurre. Elle est plus sucrée et plus souple : comptez 3 heures au réfrigérateur au lieu de 2.",
    },
  ],
  storage:
    "La tarte se garde 2 à 3 jours au réfrigérateur, sous une cloche ou dans une boîte, à l’écart des aliments odorants. Elle se congèle 2 mois, emballée une fois bien prise ; décongelez-la une nuit au réfrigérateur, la surface sera un peu moins brillante. Ne la recongelez pas.",
  pairing:
    "Une boule de glace à la vanille ou quelques framboises à côté, et un café serré. Côté vin, un banyuls ou un maury tiennent tête au chocolat.",
  easy: {
    shortcut: "pâte sablée pur beurre du commerce",
    note: "Une pâte sablée pur beurre en rouleau évite le sablage et l’heure de repos. Elle est un peu plus sucrée et se casse plus facilement : déroulez-la bien froide, sans l’étirer. Lisez l’étiquette et prenez-la au beurre, sans autre matière grasse.",
    times: { prep: 20, cook: 25, rest: 175 },
    ingredients: [
      {
        title: "Le fond",
        items: [{ qty: 1, unit: "rouleau", name: "pâte sablée pur beurre", note: "230 g environ", step: 1 }],
      },
      {
        title: "La ganache",
        items: [
          { qty: 250, unit: "g", name: "chocolat noir", note: "64 à 70 % de cacao", step: 10 },
          { qty: 30, unit: "cl", name: "crème liquide entière", note: "30 % de matière grasse", step: 5 },
          { qty: 40, unit: "g", name: "beurre doux", note: "mou, en dés", step: 5 },
        ],
      },
    ],
    method: [
      {
        title: "La tarte",
        steps: [
          {
            title: "Foncer le moule",
            text: "Déroulez la pâte sur son papier dans le moule de 24 cm, appuyez dans les angles et coupez l’excédent. Piquez le fond et mettez 15 minutes au congélateur. Préchauffez le four à 180 °C pendant ce temps.",
            timer: { minutes: 15, label: "Fond au froid" },
          },
          {
            title: "Cuire à blanc",
            text: "Couvrez de papier cuisson, remplissez de billes de cuisson et enfournez 15 minutes. Retirez les billes et poursuivez 8 à 10 minutes, jusqu’à ce que le fond soit doré partout.",
            timer: { minutes: 25, label: "Cuisson du fond" },
          },
          {
            title: "Laisser refroidir",
            text: "Laissez refroidir le fond 20 minutes sur une grille, et hachez finement le chocolat pendant ce temps.",
            timer: { minutes: 20, label: "Fond qui refroidit" },
          },
          {
            title: "Faire la ganache",
            text: "Portez la crème à frémissement et versez-la en trois fois sur le chocolat, en mélangeant en petits cercles à partir du centre. Quand la ganache est lisse et tiède, incorporez le beurre.",
          },
          {
            title: "Garnir et laisser prendre",
            text: "Versez la ganache dans le fond, tapotez le moule pour chasser les bulles et laissez prendre 2 heures au réfrigérateur.",
            timer: { minutes: 120, label: "Prise de la ganache" },
          },
          {
            title: "Servir",
            text: "Sortez la tarte 20 minutes avant de servir, puis coupez-la avec un couteau passé sous l’eau chaude.",
            timer: { minutes: 20, label: "Tarte à température" },
          },
        ],
      },
    ],
  },
  faq: [
    {
      q: "Pourquoi ma pâte sablée rétrécit-elle à la cuisson ?",
      a: "Parce qu’elle a été trop travaillée ou pas assez reposée. Le gluten, tendu, se rétracte à la chaleur. Laissez-la 1 heure au froid avant de l’étaler, puis 30 minutes dans le moule, et ne l’étirez pas en fonçant : poussez-la dans les angles.",
    },
    {
      q: "Pourquoi ma ganache a-t-elle tranché ?",
      a: "Parce que l’émulsion s’est rompue, souvent à cause d’une crème trop chaude ou d’un mélange trop énergique. Ajoutez une cuillerée de crème tiède et passez quelques secondes au mixeur plongeant, lame bien immergée : elle redevient lisse.",
    },
    {
      q: "Combien de temps faut-il pour que la ganache prenne ?",
      a: "2 heures au réfrigérateur au minimum, 4 heures pour des parts très nettes. Elle est prise quand la surface est mate et ferme au toucher. Sortez ensuite la tarte 20 minutes avant de la servir.",
    },
    {
      q: "Peut-on faire la tarte au chocolat la veille ?",
      a: "Oui, c’est même conseillé. Gardez-la au réfrigérateur dans une boîte, elle se conserve 2 à 3 jours. Le fond reste croustillant le premier jour et s’assouplit un peu ensuite.",
    },
    {
      q: "Peut-on congeler une tarte au chocolat ?",
      a: "Oui, 2 mois, une fois la ganache bien prise et la tarte emballée hermétiquement. Décongelez-la une nuit au réfrigérateur. La surface perd un peu de son brillant. Ne la recongelez pas.",
    },
    {
      q: "La tarte au chocolat convient-elle aux femmes enceintes ?",
      a: "Oui, dans cette version : la ganache ne contient pas d’œuf et celui de la pâte est cuit. La variante à la ganache cuite garde un centre peu cuit ; pour les femmes enceintes, les jeunes enfants, les personnes âgées ou immunodéprimées, prolongez la cuisson jusqu’à 71 °C au centre ou préférez cette recette.",
    },
    {
      q: "Quel chocolat choisir pour une tarte au chocolat ?",
      a: "Un chocolat noir de 64 à 70 % de cacao, à pâtisser ou à croquer. Avec un chocolat moins riche en cacao, la ganache prend moins bien. Au-delà de 70 %, augmentez la crème de 5 cl pour qu’elle reste souple.",
    },
  ],
  nutrition: {
    calories: 540,
    protein: 7,
    fat: 40,
    saturatedFat: 25,
    carbs: 39,
    sugar: 19,
    fiber: 4,
    sodium: 40,
  },
  annotations: { hero: "un fond doré jusqu’au centre", detail: "la ganache brille à température ambiante" },
  images: {
    heroAlt:
      "Part de tarte au chocolat sur une assiette à motifs bleus, ganache lisse sur un fond de pâte sablée dorée",
    detailAlt:
      "Gros plan d’une tarte au chocolat, ganache brillante bordée de crème au chocolat pochée sur la pâte",
    credits: {
      hero: { photographer: "Canto Photography", url: "https://www.pexels.com/photo/slice-of-cake-on-a-plate-7679508/" },
      detail: {
        photographer: "Nano Erdozain",
        url: "https://www.pexels.com/photo/cake-with-chocolate-cream-20009382/",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#8A4A2B",
    onAccent: "#FFFFFF",
    ink: "#6B3519",
    tint: "#F6ECE6",
    deep: "#1A0E09",
    focus: "52% 68%",
  },
});
