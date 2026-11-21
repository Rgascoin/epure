import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "saint-jacques-poelees",
  title: "Saint-Jacques poêlées",
  seoTitle: "Saint-Jacques poêlées : croûte dorée et cœur nacré",
  tagline: "Il faut une poêle vraiment très chaude.",
  description:
    "Saint-Jacques poêlées pour 4 : 12 noix bien séchées, saisies 1 min 30 à 2 min par face à feu vif, sur une fondue de poireaux au beurre. 40 minutes.",
  summary:
    "Pour 4 personnes en entrée, comptez 12 noix de Saint-Jacques, soit 3 par assiette. On retire le petit muscle, on les sèche longuement, puis on les saisit 1 min 30 à 2 min par face dans une poêle brûlante avec un peu d’huile avant de les arroser de beurre. Elles se posent sur une fondue de poireaux cuite 20 minutes. Il faut 40 minutes en tout, dont 4 minutes pour les noix.",
  intro: [
    "Une Saint-Jacques bien poêlée, c’est une croûte brune, presque croustillante, et juste dessous une chair nacrée, encore translucide au centre, qui fond sous la fourchette. Tout se joue en moins de quatre minutes.",
    "Ce qui la fait rater, c’est presque toujours l’eau. Une noix humide ou une poêle trop tiède, et elle se met à bouillir dans son jus : elle blanchit, rétrécit, devient élastique et ne dore jamais.",
    "Alors on sèche les noix longtemps, on chauffe la poêle plus fort que ce qui semble raisonnable, et on ne les touche plus. La fondue de poireaux se prépare avant : une fois les noix dans la poêle, on n’a plus le temps de rien.",
  ],
  category: "Entrée",
  cuisine: "Française",
  keywords: [
    "saint-jacques poêlées",
    "recette saint-jacques",
    "noix de saint-jacques poêlées",
    "cuisson saint-jacques à la poêle",
    "temps de cuisson saint-jacques",
    "saint-jacques surgelées à la poêle",
    "saint-jacques fondue de poireaux",
    "entrée de noël saint-jacques",
  ],
  diet: ["glutenFree"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 15, cook: 25 },
  difficulty: "Intermédiaire",
  cost: "€€€",
  season: ["Automne", "Hiver", "Printemps"],
  tags: ["noel", "nouvel-an"],
  equipment: [
    "grande poêle de 28 cm en inox ou en fonte",
    "sauteuse de 24 cm avec couvercle",
    "papier absorbant",
    "pince ou spatule fine",
  ],
  ingredients: [
    {
      title: "La fondue de poireaux",
      items: [
        { qty: 2, name: "poireau", plural: "poireaux", note: "le blanc et le vert tendre, environ 400 g", step: 1 },
        { qty: 20, unit: "g", name: "beurre", step: 5 },
        { qty: 5, unit: "cl", name: "eau", step: 1 },
        { qty: 2, unit: "cas", name: "crème fraîche épaisse", step: 1 },
        { qty: 1, unit: "pincee", name: "sel", fixed: true },
      ],
    },
    {
      title: "Les Saint-Jacques",
      items: [
        {
          qty: 12,
          name: "noix de Saint-Jacques",
          plural: "noix de Saint-Jacques",
          note: "sans corail, fraîches ou décongelées une nuit au frigo",
          step: 1,
        },
        { qty: 1, unit: "cas", name: "huile neutre", note: "tournesol ou pépins de raisin", step: 1 },
        { qty: 20, unit: "g", name: "beurre", step: 5 },
        { name: "fleur de sel" },
        { qty: 4, unit: "tour", name: "poivre", step: 1 },
        { qty: 0.5, name: "citron", plural: "citrons", step: 0.5 },
      ],
    },
  ],
  method: [
    {
      title: "La fondue de poireaux",
      steps: [
        {
          title: "Émincer les poireaux",
          text: "Fendez les poireaux en deux dans la longueur et rincez-les sous l’eau froide en écartant les feuilles, la terre se cache entre elles. Émincez-les en demi-rondelles de 5 mm.",
        },
        {
          title: "Faire fondre doucement",
          text: "Faites fondre 20 g de beurre dans la sauteuse à feu moyen-doux. Ajoutez les poireaux, la pincée de sel et 5 cl d’eau, couvrez et laissez fondre 20 minutes en remuant de temps en temps. Ils doivent devenir tendres et brillants, sans prendre de couleur. Ajoutez la crème, mélangez et gardez au chaud, couvercle posé.",
          timer: { minutes: 20, label: "Fondue de poireaux" },
        },
      ],
    },
    {
      title: "Les Saint-Jacques",
      steps: [
        {
          title: "Parer et sécher",
          text: "Pendant que les poireaux cuisent, retirez le petit muscle blanc et dur collé sur le flanc de chaque noix : il se détache d’un coup d’ongle. Posez les noix sur une double épaisseur de papier absorbant, couvrez d’une autre feuille et pressez doucement. Laissez-les ainsi au frigo jusqu’à la cuisson.",
          tip: "Une noix humide ne dore pas, elle poche dans son eau. Si le papier est trempé au bout de 10 minutes, changez-le : la croûte se gagne ici.",
        },
        {
          title: "Chauffer la poêle",
          text: "Préparez les assiettes chaudes avec la fondue avant de commencer. Faites chauffer la poêle à feu vif pendant 2 minutes, puis versez 1 cas d’huile : elle doit onduler et lâcher un premier filet de fumée.",
          timer: { minutes: 2, label: "Chauffer la poêle" },
        },
        {
          title: "Saisir sans toucher",
          text: "Salez les noix, puis posez-les une à une, dans le sens des aiguilles d’une montre, à 2 cm les unes des autres. Ne les bougez plus pendant 1 min 30 à 2 min. Elles sont prêtes à retourner quand un liseré doré remonte sur le bord et qu’elles se décollent toutes seules.",
          timer: { minutes: 2, label: "Première face" },
          tip: "Une poêle de 28 cm reçoit 12 noix. Plus petite, cuisez en deux fois : trop serrées, elles refroidissent la poêle et rendent leur jus.",
        },
        {
          title: "Arroser au beurre",
          text: "Retournez-les dans le même ordre et ajoutez 20 g de beurre. Quand il mousse, inclinez la poêle et arrosez les noix à la cuillère pendant 1 min 30 à 2 min. Retirez-les quand les flancs sont encore nacrés et que la noix, pressée du doigt, reste souple.",
          timer: { minutes: 2, label: "Seconde face au beurre" },
          tip: "Dans le doute, coupez-en une : le centre doit rester translucide sur un bon tiers de l’épaisseur. Blanche et opaque jusqu’au cœur, elle est déjà trop cuite.",
        },
        {
          title: "Servir aussitôt",
          text: "Posez 3 noix sur chaque lit de poireaux, face dorée dessus. Un peu de fleur de sel, un tour de poivre, quelques gouttes de citron, et à table sans attendre.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi une noix humide ne dore pas",
      text: "La réaction de Maillard, qui donne la croûte brune et son goût grillé, demande une surface bien au-dessus de 100 °C. Tant qu’il reste de l’eau, elle s’évapore et bloque la température autour de 100 °C : la noix cuit à la vapeur. La Saint-Jacques contient un peu de glycogène, un sucre de réserve, ce qui l’aide à brunir très vite une fois sèche.",
    },
    {
      title: "Translucide, nacrée, caoutchouteuse",
      text: "Les protéines du muscle se resserrent avec la chaleur. Vers 45 à 50 °C à cœur, la chair reste nacrée et fondante. Au-delà, elles se contractent, chassent leur eau, et la noix devient opaque, ferme puis élastique. Ce passage prend moins d’une minute dans une poêle très chaude.",
    },
    {
      title: "L’huile d’abord, le beurre ensuite",
      text: "Le beurre contient des protéines de lait et du lactose qui brûlent vers 150 °C, bien avant la température utile pour saisir. On saisit donc à l’huile, et on ajoute le beurre au retournement : il a le temps de mousser et de sentir la noisette sans noircir.",
    },
  ],
  tips: [
    "Choisissez des noix de taille égale, elles cuiront ensemble. S’il y a une petite parmi les grosses, posez-la en dernier.",
    "Salez juste avant de poser les noix dans la poêle. Salées 10 minutes à l’avance, elles font perler de l’eau à leur surface.",
    "Une poêle épaisse en inox ou en fonte garde mieux sa chaleur quand les noix froides arrivent. Une antiadhésive fine marche aussi, mais la croûte est plus pâle.",
    "Sortez les noix de la poêle dès qu’elles sont prêtes : elles continuent de cuire quelques secondes dans le beurre chaud.",
  ],
  mistakes: [
    "Poêle pas assez chaude : les noix blanchissent et baignent dans un jus laiteux. Sortez-les, essuyez la poêle, faites-la chauffer de nouveau et remettez-les 30 secondes par face.",
    "Décongeler au micro-ondes ou dans l’eau tiède : les noix cuisent en surface et rendent toute leur eau. Une nuit au frigo, rien d’autre.",
    "Les bouger ou les retourner trop tôt : la croûte n’a pas le temps de se former et la chair accroche. Attendez qu’elles se décollent seules.",
    "Oublier le petit muscle sur le flanc : il reste dur et nerveux sous la dent. Il s’enlève en une seconde avant la cuisson.",
    "Trop cuire : les noix deviennent blanches, sèches et élastiques. Pas de rattrapage, sinon les trancher finement sur la fondue avec un peu plus de beurre.",
  ],
  variations: [
    {
      title: "Beurre blanc aux agrumes",
      text: "À la place de la fondue, faites réduire 1 échalote ciselée avec 5 cl de vin blanc sec et 5 cl de jus d’orange jusqu’à 1 cas de liquide. À feu très doux, incorporez 80 g de beurre froid en dés, petit à petit, en fouettant. Ajoutez le zeste d’un demi-citron vert et nappez les noix.",
    },
    {
      title: "Sur une purée de panais",
      text: "Faites cuire 400 g de panais en rondelles 20 minutes à l’eau salée, puis mixez-les avec 30 g de beurre et 5 cl de lait chaud. Une purée douce et un peu sucrée qui remplace la fondue.",
    },
    {
      title: "En plat",
      text: "Comptez 5 ou 6 noix par personne, doublez la fondue de poireaux et ajoutez un riz pilaf. Cuisez les noix en deux fournées pour garder la poêle bien chaude.",
    },
  ],
  storage:
    "Elles se mangent dès la sortie de la poêle : réchauffées, elles durcissent. Les noix crues se gardent 24 h au frigo, à cuire le jour même si elles ont été décongelées, et ne se recongèlent jamais. La fondue de poireaux tient 2 jours au frais.",
  pairing:
    "Un blanc sec et vif : un muscadet sur lie, un chablis ou un pouilly-fumé.",
  faq: [
    {
      q: "Combien de Saint-Jacques par personne ?",
      a: "Trois en entrée, cinq ou six en plat. Le calibre change un peu la donne : avec de petites noix surgelées, prévoyez-en une de plus par assiette.",
    },
    {
      q: "Combien de temps cuire des Saint-Jacques à la poêle ?",
      a: "1 min 30 à 2 min par face à feu vif, pour des noix d’environ 3 cm d’épaisseur. Elles sont prêtes quand la croûte est dorée et que le centre reste translucide.",
    },
    {
      q: "Comment décongeler des Saint-Jacques surgelées ?",
      a: "Au réfrigérateur, une nuit, étalées sur une assiette couverte de papier absorbant et filmées. Séchez-les ensuite avec soin. Jamais au micro-ondes ni dans l’eau tiède, et une fois décongelées, cuisez-les dans la journée sans les recongeler.",
    },
    {
      q: "Pourquoi mes Saint-Jacques rendent de l’eau à la cuisson ?",
      a: "Trois raisons possibles : elles étaient humides, la poêle n’était pas assez chaude, ou elles étaient trop serrées. Certaines noix surgelées contiennent aussi des polyphosphates (E451, E452 sur l’étiquette) qui retiennent l’eau : préférez-les sans additif.",
    },
    {
      q: "Faut-il enlever le corail des Saint-Jacques ?",
      a: "Non, il se mange. Mais il cuit plus vite que la noix et son goût est plus marqué, donc on le retire souvent pour la poêle. Faites-le revenir à part 30 secondes par face, ou mixez-le dans une sauce. Le petit muscle du flanc, lui, s’enlève toujours.",
    },
    {
      q: "Quelle est la saison de la coquille Saint-Jacques ?",
      a: "D’octobre à mai en France, pendant l’ouverture de la pêche. Le reste de l’année, on trouve des noix surgelées ou importées.",
    },
    {
      q: "Peut-on manger des Saint-Jacques encore translucides au centre ?",
      a: "Oui, si elles sont très fraîches ou ont été congelées, et conservées au froid. Pour une femme enceinte, un jeune enfant, une personne âgée ou immunodéprimée, cuisez-les à cœur : environ 3 minutes par face, jusqu’à ce qu’elles soient blanches et opaques au centre.",
    },
  ],
  nutrition: {
    calories: 230,
    protein: 18,
    fat: 14,
    saturatedFat: 7,
    carbs: 8,
    sugar: 4,
    fiber: 3,
    sodium: 600,
  },
  annotations: {
    hero: "trois noix par assiette",
    detail: "la croûte se fait sans bouger",
  },
  images: {
    heroAlt:
      "Trois Saint-Jacques poêlées à la croûte dorée sur un lit de légumes fondus, avec une sauce au beurre et de la ciboulette",
    detailAlt:
      "Gros plan sur une noix de Saint-Jacques poêlée, sa croûte brun doré bien marquée, avec un trait de sauce orangée",
    credits: {
      hero: {
        photographer: "Ralph Daily from Birmingham, United States",
        url: "https://commons.wikimedia.org/wiki/File:Met_Scallops_(6766466185).jpg",
        source: "Wikimedia Commons",
        license: "CC BY 2.0",
      },
      detail: {
        photographer: "H. Alexander Talbot",
        url: "https://commons.wikimedia.org/wiki/File:ScallopPassionfruitOnionBrownButter_(8319960414).jpg",
        source: "Wikimedia Commons",
        license: "CC BY 2.0",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#D08A3C",
    onAccent: "#1B1712",
    ink: "#85501A",
    tint: "#FBF2E6",
    deep: "#1B120A",
    focus: "50% 45%",
  },
});
