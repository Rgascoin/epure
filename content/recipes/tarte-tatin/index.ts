import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "tarte-tatin",
  title: "Tarte tatin",
  seoTitle: "Tarte tatin maison, pommes confites au caramel",
  tagline: "On la retourne encore tiède.",
  description:
    "Une tarte tatin pour 8 : 1,6 kg de pommes confites 25 minutes dans un caramel au beurre, une pâte brisée par-dessus, 30 minutes à 200 °C.",
  summary:
    "Pour 8 parts, faites un caramel à sec avec 150 g de sucre et 80 g de beurre demi-sel dans une poêle de 24 cm allant au four. Rangez-y 8 grosses pommes coupées en deux, très serrées, et laissez-les confire 20 à 25 minutes sur le feu. Couvrez d’une pâte brisée maison, enfournez 25 à 30 minutes à 200 °C, puis retournez la tarte après 10 minutes de repos. Comptez 2 heures en tout, dont 35 minutes de travail.",
  intro: [
    "La tarte tatin se fait à l’envers. Les pommes cuisent d’abord dans un caramel au beurre, sur le feu, jusqu’à devenir brunes et presque translucides. La pâte vient ensuite les couvrir comme un couvercle, et on retourne le tout au moment de servir.",
    "Elle rate pour deux raisons : un caramel trop timide, qui donne une tarte pâle et seulement sucrée, ou des pommes trop peu serrées, qui s’affaissent et laissent des trous. Il faut en ranger plus qu’on ne croit, elles perdent un bon tiers de leur volume.",
    "Le dernier conseil tient en une phrase : retournez-la tiède. Froide, le caramel colle au fond de la poêle et garde la moitié des pommes.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "tarte tatin",
    "recette tarte tatin",
    "tarte tatin maison",
    "tarte tatin pâte brisée",
    "caramel tarte tatin",
    "quelles pommes pour une tarte tatin",
    "rattraper un caramel cristallisé",
    "démouler une tarte tatin",
  ],
  diet: ["vegetarian"],
  servings: 8,
  servingsLabel: { one: "part", other: "parts" },
  times: { prep: 35, cook: 65, rest: 20 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["automne", "hiver"],
  equipment: [
    "poêle ou sauteuse de 24 cm allant au four, idéalement en inox",
    "rouleau à pâtisserie",
    "spatule en bois ou en silicone",
    "plat de service plus large que la poêle",
    "gants de cuisine épais",
  ],
  ingredients: [
    {
      title: "Pâte brisée",
      items: [
        { qty: 200, unit: "g", name: "farine T55", step: 5 },
        { qty: 15, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 110, unit: "g", name: "beurre doux", note: "très froid, en dés", step: 5 },
        { qty: 50, unit: "ml", name: "eau glacée", step: 5 },
      ],
    },
    {
      title: "Pommes au caramel",
      items: [
        {
          qty: 8,
          name: "grosse pomme",
          plural: "grosses pommes",
          note: "environ 1,6 kg, fermes et acidulées : reine des reinettes, boskoop ou golden",
          step: 1,
        },
        { qty: 150, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 80, unit: "g", name: "beurre demi-sel", note: "froid, en morceaux", step: 5 },
      ],
    },
  ],
  method: [
    {
      title: "La pâte",
      steps: [
        {
          title: "Sabler la pâte",
          text: "Mélangez la farine, le sucre et le sel dans un saladier. Ajoutez le beurre froid et frottez-le entre vos doigts jusqu’à obtenir un sable grossier, où quelques paillettes de beurre restent visibles. Versez l’eau glacée, rassemblez la pâte en boule sans la pétrir, aplatissez-la en disque et laissez-la 30 minutes au réfrigérateur, filmée.",
          timer: { minutes: 30, label: "Pâte au réfrigérateur" },
        },
      ],
    },
    {
      title: "Les pommes au caramel",
      steps: [
        {
          title: "Préparer les pommes",
          text: "Épluchez les pommes, coupez-les en deux de haut en bas et retirez le cœur et les pépins avec une petite cuillère. Gardez les demi-pommes à portée de main : une fois le caramel prêt, il faut aller vite.",
        },
        {
          title: "Cuire le caramel",
          text: "Versez le sucre en couche régulière dans la poêle, sur feu moyen, sans remuer. Quand il fond sur les bords, inclinez la poêle pour répartir le liquide. Au bout de 6 à 8 minutes, dès qu’il a la couleur d’un miel très foncé, retirez du feu et ajoutez le beurre en morceaux. Mélangez à la spatule : ça mousse et ça crépite, puis la sauce redevient lisse.",
          timer: { minutes: 8, label: "Caramel à sec" },
          tip: "S’il masse en grains blancs, ajoutez 3 cuillères à soupe d’eau et laissez-le refondre à feu doux, sans remuer. S’il fume et sent l’amer, il est brûlé : recommencez, il donnerait son goût à toute la tarte.",
        },
        {
          title: "Ranger les pommes",
          text: "Posez les demi-pommes debout sur la tranche, serrées les unes contre les autres en cercle le long du bord, puis remplissez le centre. Forcez un peu : elles doivent tenir seules. Gardez une ou deux moitiés de côté pour boucher les trous pendant la cuisson.",
          tip: "Le caramel brûlant colle à la peau : posez les pommes avec une fourchette, jamais avec les doigts.",
        },
        {
          title: "Confire sur le feu",
          text: "Remettez sur feu moyen 20 à 25 minutes. Les pommes rendent leur jus, le caramel se dilue, puis réduit. Arrosez-les de temps en temps à la cuillère et glissez les moitiés gardées dans les vides. C’est prêt quand elles sont brunes à la base, tendres sous la pointe d’un couteau, et que le jus fait de grosses bulles épaisses. Préchauffez le four à 200 °C.",
          timer: { minutes: 25, label: "Pommes au caramel" },
        },
      ],
    },
    {
      title: "Cuisson et démoulage",
      steps: [
        {
          title: "Couvrir de pâte",
          text: "Laissez tiédir les pommes 10 minutes hors du feu. Pendant ce temps, étalez la pâte sur 3 mm en un disque de 28 cm. Posez-la sur les pommes et rentrez le bord entre les fruits et la paroi avec le dos d’une cuillère. Percez 4 ou 5 trous au couteau pour laisser sortir la vapeur.",
          timer: { minutes: 10, label: "Pommes à tiédir" },
        },
        {
          title: "Cuire au four",
          text: "Posez la poêle sur une plaque, qui recueillera les débordements, et enfournez 25 à 30 minutes à 200 °C. La pâte doit être bien dorée et le caramel bouillonner sur les bords.",
          timer: { minutes: 30, label: "Cuisson au four" },
        },
        {
          title: "Retourner la tarte",
          text: "Laissez reposer 10 minutes, pas plus. Passez une lame le long du bord, posez le plat de service à l’envers sur la poêle et, avec des gants, retournez d’un geste franc. Soulevez la poêle doucement. Si une pomme est restée collée, remettez-la en place à la spatule.",
          timer: { minutes: 10, label: "Repos avant démoulage" },
          tip: "Si le caramel a déjà pris, remettez la poêle 2 minutes sur feu doux avant de retourner : il se détache tout seul.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Le caramel : une question de couleur",
      text: "Vers 160 °C, le sucre fondu commence à se décomposer en centaines de molécules aromatiques. Plus le caramel fonce, moins il est sucré et plus il est amer. On vise l’ambre foncé : au-delà, l’amertume l’emporte, et elle ne disparaît plus.",
    },
    {
      title: "Pourquoi un caramel cristallise",
      text: "Un caramel à sec est une solution de sucre très concentrée. Un grain resté sur la paroi, une cuillère qui remue trop tôt, et les molécules se rangent à nouveau en cristaux. L’eau ajoutée les redissout. Quelques gouttes de jus de citron font la même chose en prévention : à chaud, l’acide coupe une partie du saccharose en glucose et fructose, qui gênent la cristallisation.",
    },
    {
      title: "Le jus qui devient laque",
      text: "Les pommes rendent beaucoup d’eau, chargée de pectine. Tant qu’elle n’a pas réduit, la tarte baigne dans un sirop clair qui détrempe la pâte et coule au démoulage. Une fois évaporée, pectine et sucre forment une gelée brillante qui fige en refroidissant.",
    },
  ],
  tips: [
    "Une poêle en inox permet de voir la couleur du caramel. Dans la fonte noire, déposez-en une goutte sur une assiette blanche pour juger.",
    "Choisissez des pommes qui se tiennent à la cuisson. Celles qui tournent en compote donnent une tarte plate et pleine de jus.",
    "Arrêtez le caramel un ton avant la couleur voulue : la chaleur de la poêle continue de le foncer pendant que vous ajoutez le beurre.",
    "Servez-la tiède, avec une cuillère de crème fraîche épaisse bien froide. Le contraste fait la moitié du plaisir.",
  ],
  mistakes: [
    "Un caramel trop clair : la tarte sort blonde et n’a que le goût du sucre. Allez jusqu’à l’ambre foncé, quitte à sortir la poêle du feu quelques secondes pour juger.",
    "Des pommes pas assez serrées : elles s’effondrent et la tarte a des trous. Comblez les vides pendant la cuisson avec les moitiés gardées.",
    "Un jus pas assez réduit : il déborde au démoulage et la pâte reste molle. Laissez les pommes sur le feu jusqu’aux grosses bulles épaisses.",
    "Un démoulage à froid : le caramel colle au fond. Réchauffez la poêle 2 minutes sur feu doux et retournez.",
  ],
  variations: [
    {
      title: "Avec une pâte feuilletée",
      text: "Remplacez la pâte brisée par 230 g de pâte feuilletée pur beurre, étalée sur 3 mm. Elle cuit en 25 minutes à 200 °C et donne une tarte plus légère, moins sablée.",
    },
    {
      title: "Aux poires",
      text: "Prenez 7 poires fermes, de type conférence, coupées en deux. Elles rendent plus de jus que les pommes : laissez-les 25 minutes sur le feu, jusqu’à ce que le sirop soit bien épais.",
    },
    {
      title: "Vanille ou cannelle",
      text: "Ajoutez les graines d’une gousse de vanille, ou une demi-cuillère à café de cannelle, dans le caramel en même temps que le beurre.",
    },
  ],
  storage:
    "La tarte tatin se garde 2 jours au réfrigérateur, couverte. Réchauffez-la 10 minutes au four à 150 °C avant de la servir : le caramel redevient souple. Elle supporte mal la congélation, les pommes rendent leur eau.",
  pairing: "De la crème fraîche épaisse, et un cidre brut ou un pommeau bien frais.",
  easy: {
    shortcut: "pâte brisée pur beurre du commerce",
    note: "La pâte en rouleau épargne le sablage, le repos et un saladier : une dizaine de minutes de travail en moins, pas plus, car le temps de la tatin est dans le caramel et les pommes. Plus fine que la maison, elle cuit un peu plus vite. Prenez-la pur beurre : à l’huile, elle paraît fade sous le caramel.",
    times: { prep: 25, cook: 60, rest: 20 },
    ingredients: [
      {
        title: "Pâte",
        items: [
          {
            qty: 1,
            unit: "rouleau",
            name: "pâte brisée pur beurre",
            note: "ronde, du commerce, environ 230 g",
            step: 1,
          },
        ],
      },
      {
        title: "Pommes au caramel",
        items: [
          {
            qty: 8,
            name: "grosse pomme",
            plural: "grosses pommes",
            note: "environ 1,6 kg, fermes et acidulées : reine des reinettes, boskoop ou golden",
            step: 1,
          },
          { qty: 150, unit: "g", name: "sucre en poudre", step: 5 },
          { qty: 80, unit: "g", name: "beurre demi-sel", note: "froid, en morceaux", step: 5 },
        ],
      },
    ],
    method: [
      {
        title: "Les pommes au caramel",
        steps: [
          {
            title: "Préparer les pommes",
            text: "Épluchez les pommes, coupez-les en deux de haut en bas et retirez le cœur et les pépins avec une petite cuillère. Gardez les demi-pommes à portée de main : une fois le caramel prêt, il faut aller vite.",
          },
          {
            title: "Cuire le caramel",
            text: "Versez le sucre en couche régulière dans la poêle, sur feu moyen, sans remuer. Quand il fond sur les bords, inclinez la poêle pour répartir le liquide. Au bout de 6 à 8 minutes, dès qu’il a la couleur d’un miel très foncé, retirez du feu et ajoutez le beurre en morceaux. Mélangez à la spatule : ça mousse et ça crépite, puis la sauce redevient lisse.",
            timer: { minutes: 8, label: "Caramel à sec" },
            tip: "S’il masse en grains blancs, ajoutez 3 cuillères à soupe d’eau et laissez-le refondre à feu doux, sans remuer. S’il fume et sent l’amer, il est brûlé : recommencez.",
          },
          {
            title: "Ranger les pommes",
            text: "Posez les demi-pommes debout sur la tranche, serrées les unes contre les autres en cercle le long du bord, puis remplissez le centre. Forcez un peu : elles doivent tenir seules. Gardez une ou deux moitiés de côté pour boucher les trous pendant la cuisson.",
            tip: "Le caramel brûlant colle à la peau : posez les pommes avec une fourchette, jamais avec les doigts.",
          },
          {
            title: "Confire sur le feu",
            text: "Remettez sur feu moyen 20 à 25 minutes. Les pommes rendent leur jus, le caramel se dilue, puis réduit. Arrosez-les de temps en temps à la cuillère et glissez les moitiés gardées dans les vides. C’est prêt quand elles sont brunes à la base, tendres sous la pointe d’un couteau, et que le jus fait de grosses bulles épaisses. Préchauffez le four à 200 °C.",
            timer: { minutes: 25, label: "Pommes au caramel" },
          },
        ],
      },
      {
        title: "Cuisson et démoulage",
        steps: [
          {
            title: "Couvrir de pâte",
            text: "Laissez tiédir les pommes 10 minutes hors du feu. Pendant ce temps, déroulez la pâte et découpez-y un disque de 28 cm. Posez-le sur les pommes, retirez le papier et rentrez le bord entre les fruits et la paroi avec le dos d’une cuillère. Percez 4 ou 5 trous au couteau pour laisser sortir la vapeur.",
            timer: { minutes: 10, label: "Pommes à tiédir" },
          },
          {
            title: "Cuire au four",
            text: "Posez la poêle sur une plaque, qui recueillera les débordements, et enfournez 20 à 25 minutes à 200 °C. La pâte doit être bien dorée et le caramel bouillonner sur les bords.",
            timer: { minutes: 25, label: "Cuisson au four" },
          },
          {
            title: "Retourner la tarte",
            text: "Laissez reposer 10 minutes, pas plus. Passez une lame le long du bord, posez le plat de service à l’envers sur la poêle et, avec des gants, retournez d’un geste franc. Soulevez la poêle doucement. Si une pomme est restée collée, remettez-la en place à la spatule.",
            timer: { minutes: 10, label: "Repos avant démoulage" },
            tip: "Si le caramel a déjà pris, remettez la poêle 2 minutes sur feu doux avant de retourner : il se détache tout seul.",
          },
        ],
      },
    ],
  },
  faq: [
    {
      q: "Quelles pommes choisir pour une tarte tatin ?",
      a: "Des pommes fermes et un peu acides, qui gardent leur forme : reine des reinettes, boskoop ou golden pas trop mûres. Évitez les variétés farineuses, qui tournent en compote et noient la tarte dans leur jus.",
    },
    {
      q: "Comment rattraper un caramel qui a cristallisé ?",
      a: "Ajoutez 3 cuillères à soupe d’eau et remettez sur feu doux sans remuer : les cristaux se redissolvent, puis l’eau s’évapore et le caramel reprend sa cuisson. Pour l’éviter, partez d’une poêle propre et ne touchez pas au sucre avant qu’il ait fondu, contentez-vous d’incliner la poêle.",
    },
    {
      q: "Que faire si le caramel a brûlé ?",
      a: "Le jeter et recommencer. Un caramel noir, qui fume et sent l’amer, ne se rattrape pas, et le beurre ni les pommes ne masqueront son goût. Laissez-le refroidir avant de le vider, puis remplissez la poêle d’eau chaude : il se dissout tout seul.",
    },
    {
      q: "Pâte brisée ou feuilletée pour une tarte tatin ?",
      a: "Les deux se font. La pâte brisée tient mieux sous le poids des pommes et boit un peu de jus sans ramollir. La feuilletée est plus légère et plus croustillante, mais elle supporte moins bien d’attendre.",
    },
    {
      q: "Peut-on faire une tarte tatin dans un moule à manqué ?",
      a: "Oui, s’il est en métal plein, sans fond amovible, et qu’il va sur votre plaque de cuisson. Sinon, faites le caramel dans une casserole, versez-le dans le moule, rangez les pommes et faites-les cuire 30 minutes au four à 200 °C avant d’ajouter la pâte.",
    },
    {
      q: "Peut-on préparer une tarte tatin la veille ?",
      a: "Oui. Gardez-la dans sa poêle au réfrigérateur, sans la retourner. Le lendemain, chauffez la poêle 2 à 3 minutes sur feu doux pour ramollir le caramel, puis 10 minutes au four à 160 °C, et démoulez.",
    },
  ],
  nutrition: {
    calories: 450,
    protein: 3,
    fat: 21,
    saturatedFat: 13,
    carbs: 61,
    sugar: 39,
    fiber: 4,
    sodium: 110,
  },
  annotations: {
    hero: "serrer les pommes, elles fondent",
    detail: "un caramel acajou, pas noir",
  },
  images: {
    heroAlt:
      "Tarte tatin entière démoulée sur un plat blanc, demi-pommes caramélisées serrées en rosace, vue de dessus",
    detailAlt: "Petite tarte tatin individuelle sur une assiette carrée, pommes laquées d’un caramel brun acajou",
    credits: {
      hero: {
        photographer: "Djenghisz",
        url: "https://commons.wikimedia.org/wiki/File:Franse_tarte_tatin.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
      },
      detail: {
        photographer: "Marianne Casamance",
        url: "https://commons.wikimedia.org/wiki/File:Chez_Claudette_-_tarte_tatin.JPG",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#C0702A",
    onAccent: "#1B1712",
    ink: "#8A4712",
    tint: "#F8ECDF",
    deep: "#1E1008",
    focus: "42% 50%",
  },
});
