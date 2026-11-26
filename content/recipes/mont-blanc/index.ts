import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "mont-blanc",
  title: "Mont-Blanc aux marrons",
  seoTitle: "Mont-Blanc aux marrons, meringue croquante et chantilly",
  tagline: "On le monte au dernier moment.",
  description:
    "Six Mont-Blanc individuels : une meringue cuite 1 h 30 à 100 °C, un dôme de chantilly et des vermicelles de marrons à la douille, montés au dernier moment.",
  summary:
    "Pour 6 Mont-Blanc individuels, cuisez des disques de meringue française (2 blancs, 120 g de sucre) 1 h 30 à 100 °C, puis laissez-les sécher 1 h dans le four éteint. Battez 250 g de purée de marrons nature avec 40 g de beurre et 250 g de crème de marrons, et poussez-la en fils fins sur un dôme de chantilly à 35 % de matière grasse. Comptez 3 h 15 en tout, dont 45 minutes de travail, et montez juste avant de servir.",
  intro: [
    "Un Mont-Blanc, ce sont trois textures qui ne se ressemblent pas : une meringue qui casse sous la cuillère, une chantilly à peine sucrée, et par-dessus des marrons poussés en fils fins, enroulés comme une pelote. Si la chantilly est si peu sucrée, c’est qu’elle doit calmer le sucre de la meringue et des marrons.",
    "Ce qui le fait rater, c’est l’humidité. Une meringue mal séchée reste collante au cœur, et même une meringue parfaite ramollit au contact de la crème en quelques heures. On peut cuire les disques plusieurs jours avant, mais on monte les Mont-Blanc au moment de passer à table.",
    "L’autre piège, c’est la douille. Une crème de marrons pleine de grumeaux bouche les petits trous et sort en miettes. Passez-la au tamis après l’avoir battue avec le beurre : les fils sortent alors lisses et réguliers, sans forcer.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "mont-blanc",
    "recette mont-blanc",
    "mont-blanc aux marrons",
    "mont-blanc dessert",
    "mont-blanc individuel",
    "mont-blanc crème de marrons",
    "mont-blanc meringue chantilly",
    "dessert à la crème de marrons",
  ],
  diet: ["vegetarian"],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 45, cook: 90, rest: 60 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["hiver", "noel"],
  equipment: [
    "batteur électrique",
    "plaque de cuisson et papier cuisson",
    "verre ou cercle de 8 cm pour tracer les disques",
    "2 poches à douille",
    "douille unie de 10 mm",
    "douille ronde de 2 à 3 mm, ou douille « vermicelle »",
    "tamis fin ou passoire",
  ],
  ingredients: [
    {
      title: "La meringue",
      items: [
        { qty: 2, name: "blanc d’œuf", plural: "blancs d’œufs", note: "environ 60 g, à température ambiante", step: 1 },
        { qty: 60, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 60, unit: "g", name: "sucre glace", step: 5 },
      ],
    },
    {
      title: "La crème de marrons",
      items: [
        { qty: 250, unit: "g", name: "purée de marrons nature", note: "non sucrée", step: 10 },
        { qty: 40, unit: "g", name: "beurre doux", note: "mou", step: 5 },
        { qty: 250, unit: "g", name: "crème de marrons", note: "sucrée et vanillée", step: 10 },
        { qty: 1, unit: "cas", name: "rhum brun", step: 1, optional: true },
      ],
    },
    {
      title: "La chantilly",
      items: [
        { qty: 30, unit: "cl", name: "crème liquide entière", note: "35 % de matière grasse, très froide", step: 5 },
        { qty: 20, unit: "g", name: "sucre glace", step: 5 },
      ],
    },
    {
      title: "Pour finir",
      items: [{ qty: 10, unit: "g", name: "sucre glace", note: "pour le sommet", step: 5 }],
    },
  ],
  method: [
    {
      title: "La meringue",
      steps: [
        {
          title: "Préparer la plaque",
          text: "Préchauffez le four à 100 °C, chaleur statique. Sur une feuille de papier cuisson, tracez au crayon six cercles de 8 cm à l’aide d’un verre, bien espacés, puis retournez la feuille sur la plaque, trait dessous.",
        },
        {
          title: "Monter les blancs",
          text: "Fouettez les blancs à vitesse moyenne jusqu’à ce qu’ils moussent et blanchissent. Passez à vitesse rapide et versez le sucre en poudre en trois fois. Continuez jusqu’à une meringue épaisse et brillante qui forme un bec ferme au bout du fouet. Frottez-en un peu entre deux doigts : le sucre ne doit plus crisser.",
          tip: "Une trace de jaune ou un bol gras empêche les blancs de monter : essuyez le bol et les fouets avec un papier imbibé de vinaigre.",
        },
        {
          title: "Ajouter le sucre glace",
          text: "Tamisez le sucre glace sur la meringue et incorporez-le à la maryse, en ramenant la masse du fond vers le haut, juste jusqu’à ce qu’il disparaisse. Une vingtaine de passages suffit ; au-delà, la meringue perd de l’air et s’étale à la cuisson.",
        },
        {
          title: "Pocher les disques",
          text: "Garnissez une poche munie de la douille de 10 mm. Pochez la meringue en spirale, du centre vers le bord de chaque cercle, sur 1 cm d’épaisseur. Lissez les petites pointes d’un doigt mouillé.",
        },
        {
          title: "Cuire à basse température",
          text: "Enfournez à mi-hauteur pour 1 h 30 à 100 °C. La meringue doit rester ivoire : si elle blondit, baissez à 90 °C. Elle est cuite quand elle se décolle seule du papier et sonne creux quand on tapote le dessous du bout de l’ongle.",
          timer: { minutes: 90, label: "Cuisson des meringues" },
        },
        {
          title: "Sécher dans le four",
          text: "Éteignez le four, coincez une cuillère en bois dans la porte et laissez sécher 1 h. Cassez le bord d’un disque : il doit être sec et cassant jusqu’au centre. Rangez aussitôt les disques dans une boîte hermétique.",
          timer: { minutes: 60, label: "Séchage, four éteint" },
        },
      ],
    },
    {
      title: "La crème de marrons",
      steps: [
        {
          title: "Battre les marrons",
          text: "Pendant la cuisson, battez la purée de marrons avec le beurre mou au batteur, jusqu’à une pâte lisse et un peu plus pâle. Ajoutez la crème de marrons, puis le rhum si vous en mettez, et battez encore. Le rhum ne cuit pas : faites-en une partie sans pour les enfants.",
        },
        {
          title: "Passer au tamis",
          text: "Écrasez la crème à la maryse à travers un tamis fin ou une passoire, par petites quantités. Elle doit tenir sur la cuillère sans couler, souple comme un beurre pommade. Trop ferme, détendez-la avec une cuillerée de la crème liquide prévue pour la chantilly.",
          tip: "C’est l’étape qu’on a envie de sauter, et c’est elle qui évite les grumeaux qui bouchent la petite douille.",
        },
      ],
    },
    {
      title: "Le montage",
      steps: [
        {
          title: "Fouetter la chantilly",
          text: "Au moment de servir, fouettez la crème très froide dans un bol froid, à vitesse moyenne puis rapide. Quand le fouet commence à laisser des traces, ajoutez le sucre glace et fouettez encore, jusqu’à ce qu’elle tienne en bec souple. Arrêtez-vous là : quelques tours de trop et elle devient granuleuse.",
        },
        {
          title: "Former les dômes",
          text: "Posez chaque disque de meringue sur son assiette, collé par un point de chantilly. Avec la douille de 10 mm, pochez au centre un dôme de chantilly de 5 à 6 cm de haut, en laissant 5 mm de meringue libre tout autour.",
        },
        {
          title: "Pocher les vermicelles",
          text: "Remplissez la seconde poche, munie de la petite douille, avec la crème de marrons. Partez du bas et tournez autour du dôme en montant, fils serrés, jusqu’à cacher toute la chantilly. Si les fils cassent, la crème est trop ferme : malaxez la poche entre vos mains pour la réchauffer un peu.",
          tip: "Tenez la douille à 2 cm du dôme et laissez les fils tomber d’eux-mêmes : collés de force, ils s’écrasent et perdent leur rondeur.",
        },
        {
          title: "Saupoudrer et servir",
          text: "Saupoudrez le sommet de sucre glace à travers une petite passoire et servez tout de suite, ou gardez au réfrigérateur jusqu’au dessert. Plus on attend, plus la meringue ramollit sous la crème.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Deux sucres dans la meringue",
      text: "Le sucre en poudre, versé pendant le fouettage, se dissout dans l’eau des blancs et forme un sirop qui rend les bulles plus stables. Le sucre glace, plié à la fin, se mélange sans fouetter et ne fait pas retomber la mousse. Avec deux fois plus de sucre que de blancs en poids, la meringue sèche en une coque friable.",
    },
    {
      title: "Cuire bas pour sécher",
      text: "À 100 °C, l’eau de la meringue s’évapore lentement et le sucre ne colore pas, parce qu’on reste loin des températures où il caramélise. Dans un four plus chaud, une croûte se forme vite à la surface, enferme l’humidité, et le cœur reste collant.",
    },
    {
      title: "La chantilly a besoin de froid",
      text: "Une crème bien froide, à 30 % de matière grasse au moins, monte parce que ses globules de gras, en partie solides, s’accrochent les uns aux autres autour des bulles d’air. Tiède, ce gras est liquide et ne retient plus rien : la crème reste coulante.",
    },
    {
      title: "Le beurre dans les marrons",
      text: "Seule, la purée de marrons est farineuse et se casse en sortant de la douille. Le beurre l’assouplit et la lie, ce qui donne des fils réguliers. Comme il durcit au froid, une crème qui sort du réfrigérateur casse : à température ambiante, elle file.",
    },
  ],
  tips: [
    "Cuisez les meringues jusqu’à une semaine à l’avance : dans une boîte en fer bien fermée, elles restent croquantes.",
    "Mettez le bol et les fouets 15 minutes au congélateur avant de fouetter la chantilly : elle monte plus vite et tient mieux.",
    "Goûtez la crème de marrons avant de la pocher : certaines crèmes de marrons sont plus sucrées que d’autres. Si c’est trop doux, ajoutez une cuillerée de purée nature.",
    "Pas de petite douille ? Un presse-ail ou un presse-purée à grille fine donne des fils plus courts, posés en tas sur la chantilly, tout aussi jolis.",
    "Si la crème de marrons a passé la nuit au réfrigérateur, sortez-la 30 minutes avant de la pocher et battez-la quelques secondes.",
  ],
  mistakes: [
    "Monter les Mont-Blanc le matin pour le soir : la meringue devient molle et collante. Préparez les éléments à l’avance, séparément, et ne montez qu’au moment de servir.",
    "Sortir la meringue trop tôt : elle reste collante au centre et ne craquera jamais. Remettez-la 30 minutes à 90 °C, puis laissez-la sécher dans le four éteint.",
    "Pocher une crème de marrons pleine de grumeaux : la douille se bouche et les fils cassent. Videz la poche et repassez la crème au tamis.",
    "Fouetter la chantilly trop longtemps : elle devient granuleuse. Ajoutez 2 cuillerées de crème liquide froide et mélangez au fouet à main, doucement, elle redevient lisse.",
    "Une meringue qui blondit : le four chauffe plus qu’il ne l’annonce. Baissez à 90 °C et entrouvrez la porte avec une cuillère en bois pendant la fin de cuisson.",
  ],
  variations: [
    {
      title: "Grand Mont-Blanc à partager",
      text: "Pochez un seul disque de 22 cm sur 1,5 cm d’épaisseur, cuisez-le 2 h à 100 °C et laissez-le sécher 1 h dans le four éteint. Montez un dôme de chantilly d’environ 10 cm de haut et couvrez-le de fils de marrons.",
    },
    {
      title: "Avec un cœur de cassis",
      text: "Déposez une cuillère à café de confiture de cassis au centre de chaque meringue avant la chantilly. Son acidité tranche avec le sucre des marrons.",
    },
    {
      title: "Avec un marron glacé",
      text: "Remplacez le sucre glace du sommet par un demi-marron glacé ou quelques brisures, soit 3 marrons glacés pour les 6 Mont-Blanc.",
    },
  ],
  storage:
    "Une fois monté, le Mont-Blanc se mange dans les 2 à 3 heures, gardé au réfrigérateur : la meringue ramollit ensuite et la chantilly ne supporte pas l’attente hors du froid. Les disques de meringue seuls se gardent 1 semaine dans une boîte hermétique, à l’abri de l’humidité. La crème de marrons au beurre se garde 3 jours au réfrigérateur, filmée au contact. Ne congelez pas les Mont-Blanc montés.",
  pairing: "Un café filtre, ou un thé noir pas trop infusé.",
  easy: {
    shortcut: "nids de meringue du commerce",
    note: "On gagne 2 h 30 de four. Les meringues achetées sont souvent plus sucrées et un peu plus dures, mais elles tiennent bien sous la crème. Prenez des nids ou de grosses meringues plates d’environ 8 cm, blanches et sèches ; évitez celles qui sont moelleuses au centre.",
    times: { prep: 30, cook: 0 },
    ingredients: [
      {
        title: "La base",
        items: [{ qty: 6, name: "nid de meringue", plural: "nids de meringue", note: "d’environ 8 cm", step: 1 }],
      },
      {
        title: "La crème de marrons",
        items: [
          { qty: 250, unit: "g", name: "purée de marrons nature", note: "non sucrée", step: 10 },
          { qty: 40, unit: "g", name: "beurre doux", note: "mou", step: 5 },
          { qty: 250, unit: "g", name: "crème de marrons", note: "sucrée et vanillée", step: 10 },
          { qty: 1, unit: "cas", name: "rhum brun", step: 1, optional: true },
        ],
      },
      {
        title: "La chantilly",
        items: [
          { qty: 30, unit: "cl", name: "crème liquide entière", note: "35 % de matière grasse, très froide", step: 5 },
          { qty: 20, unit: "g", name: "sucre glace", step: 5 },
        ],
      },
      {
        title: "Pour finir",
        items: [{ qty: 10, unit: "g", name: "sucre glace", note: "pour le sommet", step: 5 }],
      },
    ],
    method: [
      {
        title: "Les Mont-Blanc",
        steps: [
          {
            title: "Battre les marrons",
            text: "Battez la purée de marrons avec le beurre mou au batteur jusqu’à ce qu’elle soit lisse, puis ajoutez la crème de marrons et le rhum si vous en mettez. Le rhum ne cuit pas : faites-en une partie sans pour les enfants.",
          },
          {
            title: "Passer au tamis",
            text: "Écrasez la crème à la maryse à travers un tamis fin. Elle doit tenir sur la cuillère, souple comme un beurre pommade. Trop ferme, ajoutez une cuillerée de la crème liquide.",
          },
          {
            title: "Fouetter la chantilly",
            text: "Fouettez la crème très froide ; quand le fouet laisse des traces, ajoutez le sucre glace et continuez jusqu’à un bec souple, sans aller plus loin.",
          },
          {
            title: "Garnir les nids",
            text: "Posez les nids sur les assiettes. À la douille de 10 mm, remplissez-les de chantilly et montez un dôme de 5 cm au-dessus du bord.",
          },
          {
            title: "Pocher et servir",
            text: "Avec la petite douille, poussez la crème de marrons en fils serrés autour du dôme, du bas vers le haut, jusqu’à cacher la chantilly. Saupoudrez de sucre glace et servez aussitôt.",
          },
        ],
      },
    ],
  },
  faq: [
    {
      q: "Peut-on préparer le Mont-Blanc la veille ?",
      a: "Non, pas monté : la meringue boit l’humidité de la chantilly et ramollit en quelques heures. Préparez la veille les disques de meringue, gardés en boîte hermétique, et la crème de marrons, au réfrigérateur. Le jour même, il reste la chantilly à fouetter et le montage, une vingtaine de minutes.",
    },
    {
      q: "Le Mont-Blanc contient-il de l’alcool ?",
      a: "Oui, si vous ajoutez le rhum, qui est facultatif. Il n’est pas cuit, donc l’alcool reste dans la crème de marrons. Pour des enfants ou une femme enceinte, faites la recette sans rhum : la crème de marrons vanillée suffit à la parfumer.",
    },
    {
      q: "Quelle douille pour faire les vermicelles du Mont-Blanc ?",
      a: "Une douille ronde de 2 à 3 mm, ou une douille « vermicelle » percée de plusieurs trous, qui pousse plusieurs fils d’un coup. À défaut, un presse-ail ou un presse-purée à grille fine fonctionne, avec des fils plus courts.",
    },
    {
      q: "Quelle différence entre crème de marrons et purée de marrons ?",
      a: "Le sucre : la crème de marrons est sucrée, souvent vanillée, et assez coulante ; la purée nature n’est pas sucrée et elle est bien plus épaisse. Moitié-moitié avec un peu de beurre, on obtient une crème moins sucrée que la crème de marrons seule et assez ferme pour tenir en fils.",
    },
    {
      q: "Pourquoi ma meringue est-elle collante à l’intérieur ?",
      a: "Parce qu’elle n’a pas assez séché, ou qu’elle a repris l’humidité de l’air. Remettez-la 30 minutes à 90 °C, laissez-la refroidir dans le four éteint, puis rangez-la aussitôt dans une boîte hermétique.",
    },
    {
      q: "Peut-on utiliser des meringues du commerce ?",
      a: "Oui, c’est la version facile. Choisissez des nids ou de grosses meringues plates d’environ 8 cm, sèches et croquantes. Elles sont un peu plus sucrées : la chantilly peu sucrée compense.",
    },
    {
      q: "Peut-on congeler un Mont-Blanc ?",
      a: "Non, pas une fois monté : la meringue se détrempe à la décongélation. La crème de marrons au beurre, elle, se congèle 2 mois ; décongelez-la une nuit au réfrigérateur, puis battez-la de nouveau avant de la pocher.",
    },
  ],
  nutrition: {
    calories: 483,
    protein: 3.4,
    fat: 24,
    saturatedFat: 15.5,
    carbs: 61,
    sugar: 50,
    fiber: 3,
    sodium: 25,
  },
  annotations: { hero: "en fils, du bas vers le haut", detail: "un marron glacé, pour les grands jours" },
  images: {
    heroAlt:
      "Mont-Blanc individuel couvert de vermicelles de crème de marrons, sur un fond doré, posé sur une planche en bois",
    detailAlt: "Gros plan sur les fils de crème de marrons d’un Mont-Blanc, coiffé d’un marron glacé",
    credits: {
      hero: {
        photographer: "Meg Zimbeck",
        url: "https://commons.wikimedia.org/wiki/File:Mont_blanc_dessert_from_Patisserie_des_Reves.jpg",
        source: "Wikimedia Commons",
        license: "CC BY 2.0",
      },
      detail: {
        photographer: "Kappabashi",
        url: "https://commons.wikimedia.org/wiki/File:%E3%83%AD%E3%83%93%E3%83%BC%E3%82%AB%E3%83%95%E3%82%A7%E3%83%BB%E3%83%BB%E3%83%BB%E3%82%B8%E3%83%A3%E3%83%B3%E3%83%9C%E3%83%A2%E3%83%B3%E3%83%96%E3%83%A9%E3%83%B3.JPG",
        source: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
      },
    },
  },
  datePublished: "2026-11-26",
  dateModified: "2026-11-26",
  hero,
  detail,
  theme: {
    accent: "#B07A48",
    onAccent: "#1B1712",
    ink: "#7A4C22",
    tint: "#F7EEE3",
    deep: "#1E140C",
    focus: "50% 58%",
  },
});
