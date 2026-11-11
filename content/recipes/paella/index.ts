import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "paella",
  title: "Paella aux fruits de mer",
  seoTitle: "Paella aux fruits de mer maison, avec son socarrat",
  tagline: "Une fois mouillé, on ne touche plus.",
  description:
    "Paella aux fruits de mer maison : gambas, moules, encornets et riz bomba au safran, cuit sans remuer jusqu’au socarrat. Prête en 1 h 20 pour 4.",
  summary:
    "Pour 4 personnes, faites revenir 300 g d’encornets et un poivron rouge dans une poêle à paella de 34 à 38 cm, puis un sofrito d’ail, de tomates râpées et de paprika. Nacrez 320 g de riz bomba, versez 1,2 l de fumet chaud au safran et ne remuez plus : 10 minutes à feu vif, puis 8 minutes à feu doux avec 8 gambas, 4 langoustines et 500 g de moules. Finissez par 2 minutes à feu vif pour le socarrat et 5 minutes de repos. Comptez 1 h 20 en tout.",
  intro: [
    "Une paella aux fruits de mer, c’est un riz qui a bu un fumet safrané jusqu’à la dernière goutte, avec des gambas, des moules et des encornets posés dessus. À Valence, la paella d’origine se fait au poulet et au lapin ; la version de la mer, la paella de marisco, est une recette à part entière. C’est elle qu’on fait ici, sans poulet.",
    "Elle est réussie quand le riz se tient grain à grain, et qu’une fine croûte caramélisée accroche au fond de la poêle : le socarrat. Pour l’obtenir, on fait l’inverse d’un risotto. Une fois le bouillon versé, on ne touche plus au riz.",
    "Ce qui peut rater : un riz pâteux si vous remuez ou si vous le noyez, un fond brûlé si le feu vif dure trop à la fin. On vous dit quoi écouter et quoi sentir pour couper au bon moment.",
  ],
  category: "Plat",
  cuisine: "Espagnole",
  keywords: [
    "paella",
    "paella aux fruits de mer",
    "recette paella",
    "paella maison",
    "paella de marisco",
    "socarrat paella",
    "riz bomba paella",
    "comment faire une paella",
    "paella sans poulet",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 30, cook: 45, rest: 5 },
  difficulty: "Intermédiaire",
  cost: "€€€",
  season: ["Toute l’année"],
  equipment: [
    "poêle à paella de 34 à 38 cm (ou grande sauteuse de 32 cm)",
    "casserole avec couvercle",
    "casserole pour le fumet",
    "râpe à gros trous",
    "passoire fine",
    "torchon propre ou papier aluminium",
  ],
  ingredients: [
    {
      title: "Les fruits de mer",
      items: [
        { qty: 500, unit: "g", name: "moules", note: "vivantes, bien fermées", step: 50 },
        { qty: 50, unit: "ml", name: "eau", step: 10 },
        { qty: 8, name: "gamba", plural: "gambas", note: "crues et entières, environ 40 g pièce", step: 1 },
        {
          qty: 4,
          name: "langoustine",
          plural: "langoustines",
          note: "crues, ou 4 gambas de plus",
          step: 1,
          optional: true,
        },
        { qty: 300, unit: "g", name: "encornets", note: "nettoyés, coupés en anneaux de 1 cm", step: 10 },
      ],
    },
    {
      title: "Le riz",
      items: [
        {
          qty: 1400,
          unit: "ml",
          name: "fumet de poisson",
          note: "maison ou en bocal ; 1,2 l pour la cuisson, 200 ml en réserve",
          step: 50,
        },
        { qty: 0.2, unit: "g", name: "safran en filaments", note: "2 dosettes", step: 0.1 },
        { qty: 5, unit: "cas", name: "huile d’olive", step: 1 },
        { qty: 1, name: "poivron rouge", plural: "poivrons rouges", note: "en lanières de 1 cm", step: 1 },
        { qty: 3, unit: "gousse", name: "ail", note: "hachées finement", step: 1 },
        { qty: 2, name: "tomate mûre", plural: "tomates mûres", note: "environ 200 g, râpées", step: 1 },
        { qty: 1, unit: "cac", name: "paprika doux", note: "pimentón dulce, de préférence fumé", step: 0.5 },
        { qty: 320, unit: "g", name: "riz bomba", note: "ou autre riz rond espagnol à paella", step: 10 },
        { name: "sel fin" },
        { qty: 1, name: "citron", plural: "citrons", note: "en quartiers, pour le service", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "Préparation",
      steps: [
        {
          title: "Préparer les fruits de mer",
          text: "Grattez et ébarbez les moules sous l’eau froide. Jetez celles qui sont cassées, et celles qui restent ouvertes quand vous les tapotez sur le plan de travail. Épongez les gambas, les langoustines et les anneaux d’encornets avec du papier absorbant : sèches, elles saisissent au lieu de bouillir.",
        },
        {
          title: "Infuser le safran",
          text: "Faites chauffer le fumet dans une casserole jusqu’à frémissement, émiettez-y le safran et laissez infuser 10 minutes sur feu très doux, le temps de préparer le reste. Le fumet doit rester chaud jusqu’au bout.",
          timer: { minutes: 10, label: "Infusion du safran" },
        },
        {
          title: "Ouvrir les moules",
          text: "Mettez les moules dans une casserole avec l’eau, couvrez et faites-les ouvrir 3 à 4 minutes à feu vif en secouant la casserole. Retirez-les dès qu’elles s’ouvrent, jetez celles qui restent fermées. Filtrez leur jus à la passoire fine, versez-le dans le fumet, puis goûtez le fumet et salez-le : il doit être un peu trop salé.",
          timer: { minutes: 4, label: "Ouverture des moules" },
        },
      ],
    },
    {
      title: "La paella",
      steps: [
        {
          title: "Saisir les crustacés",
          text: "Chauffez l’huile dans la poêle à paella à feu vif. Saisissez les gambas et les langoustines 1 minute par face, 2 minutes en tout, juste le temps qu’elles rosissent, puis réservez-les sur une assiette : elles finiront de cuire sur le riz.",
          timer: { minutes: 2, label: "Saisie des gambas" },
        },
        {
          title: "Faire revenir l’encornet",
          text: "Dans la même huile, à feu moyen-vif, faites revenir les encornets 2 minutes. Ajoutez le poivron et laissez-le 5 minutes en remuant, jusqu’à ce qu’il ramollisse et que ses bords commencent à dorer.",
          timer: { minutes: 7, label: "Encornets et poivron" },
        },
        {
          title: "Préparer le sofrito",
          text: "Ajoutez l’ail, remuez quelques secondes, puis la pulpe de tomate râpée et le paprika. Laissez cuire 8 à 10 minutes à feu moyen en remuant souvent : la tomate fonce, épaissit en pâte et l’huile se sépare sur les bords.",
          timer: { minutes: 9, label: "Sofrito" },
          tip: "Coupez les tomates en deux et râpez-les côté chair sur une râpe à gros trous : la peau reste dans votre main et la pulpe fond vite.",
        },
        {
          title: "Nacrer le riz",
          text: "Versez le riz et remuez 1 à 2 minutes pour l’enrober de sofrito : les grains deviennent brillants et légèrement translucides sur les bords.",
          timer: { minutes: 2, label: "Nacrage du riz" },
        },
        {
          title: "Mouiller et étaler",
          text: "Versez 1,2 l de fumet bouillant d’un coup, en gardant le reste au chaud. Répartissez le riz en couche régulière avec une cuillère, d’un bord à l’autre. C’est la dernière fois que vous le touchez.",
        },
        {
          title: "Cuire sans remuer",
          text: "Laissez bouillir franchement 10 minutes à feu vif, sans remuer. Si la poêle dépasse du brûleur, tournez-la d’un quart de tour toutes les 2 minutes pour que les bords cuisent aussi. Le riz affleure peu à peu à la surface.",
          timer: { minutes: 10, label: "Cuisson à feu vif" },
          tip: "Le riz doit bouillir à gros bouillons sur toute la surface. Si le centre bout et pas les bords, tournez la poêle plus souvent.",
        },
        {
          title: "Poser les fruits de mer",
          text: "Baissez à feu doux. Enfoncez à moitié les gambas, les langoustines et les moules dans le riz et laissez cuire 8 minutes. Le liquide disparaît et de petits trous se forment à la surface. Si le riz est encore croquant alors qu’il n’y a plus de liquide, arrosez-le du fumet gardé en réserve, sans remuer.",
          timer: { minutes: 8, label: "Cuisson à feu doux" },
        },
        {
          title: "Faire le socarrat",
          text: "Montez à feu vif 1 à 2 minutes. Écoutez : le riz crépite, comme une friture légère, et ça sent le pain grillé. Grattez le fond au bord avec une cuillère : s’il accroche en croûte dorée, coupez le feu. À la première odeur de brûlé, coupez tout de suite.",
          timer: { minutes: 2, label: "Socarrat" },
        },
        {
          title: "Laisser reposer",
          text: "Couvrez la poêle d’un torchon propre ou d’une feuille d’aluminium et laissez reposer 5 minutes hors du feu : le riz finit de gonfler. Servez dans la poêle, avec les quartiers de citron.",
          timer: { minutes: 5, label: "Repos" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi on ne remue pas",
      text: "Remuer frotte les grains les uns contre les autres et fait passer l’amidon de leur surface dans le bouillon, qui épaissit en sauce. C’est ce qu’on cherche dans un risotto, et exactement ce qu’on évite ici. Sans remuer, les grains restent séparés et le liquide s’évapore de façon régulière sur toute la surface de la poêle.",
    },
    {
      title: "Le socarrat, c’est de la réaction de Maillard",
      text: "Tant qu’il reste du liquide, le fond de la poêle ne dépasse guère 100 °C. Quand tout est absorbé, la couche de riz au contact du métal chauffe bien au-delà dans l’huile restante : les sucres et les protéines du fumet et du sofrito brunissent. Le crépitement, c’est la dernière eau qui s’évapore.",
    },
    {
      title: "Le riz bomba",
      text: "C’est un riz rond qui absorbe beaucoup de liquide, environ trois fois son volume, sans éclater ni devenir collant. Il pardonne une minute de trop, là où un riz à risotto deviendrait crémeux.",
    },
    {
      title: "Le safran se dissout dans l’eau",
      text: "Sa couleur vient de la crocine, une molécule soluble dans l’eau, pas dans l’huile. Infusé dans le fumet chaud, il colore et parfume tout le riz. Jeté dans l’huile chaude, une partie de son arôme, très volatil, part en fumée.",
    },
  ],
  tips: [
    "Achetez des gambas crues et entières : leurs têtes parfument le riz pendant la cuisson. À table, pressez-les, c’est là qu’est le goût.",
    "La couche de riz doit être fine, pas plus de 1,5 cm. Si votre poêle fait moins de 34 cm, réduisez toutes les quantités d’un quart, ou prenez deux poêles.",
    "Le fumet en bocal fait l’affaire, mais choisissez-le peu salé : le jus des moules apporte déjà beaucoup de sel.",
    "Si votre plaque est petite, posez la poêle à cheval sur deux feux, ou finissez la cuisson à feu doux au four à 200 °C.",
    "Les moules de bouchot sont à leur meilleur de l’été au début de l’hiver. Le reste de l’année, des moules surgelées en coquille dépannent très bien.",
  ],
  mistakes: [
    "Remuer après avoir versé le fumet. L’amidon se libère et la paella devient pâteuse, comme un risotto raté.",
    "Prendre un riz long ou un riz à risotto. Le premier n’absorbe pas assez de fumet, le second devient crémeux.",
    "Faire la paella dans une cocotte. Le riz s’empile sur plusieurs centimètres, cuit mal et ne fait jamais de socarrat.",
    "Laisser les gambas sur le feu du début à la fin. Elles deviennent fermes et cotonneuses.",
    "Pousser le feu vif trop longtemps à la fin. Le socarrat passe de doré à brûlé en moins d’une minute : fiez-vous à l’odeur.",
  ],
  variations: [
    {
      title: "Paella mixte, poulet et fruits de mer",
      text: "Faites d’abord dorer 400 g de hauts de cuisse de poulet désossés, en morceaux, 10 minutes dans l’huile, puis ajoutez les encornets et suivez la recette avec un bouillon de volaille. C’est la version qu’on sert souvent en France ; elle n’est ni valencienne, ni de la mer.",
    },
    {
      title: "Arroz negro",
      text: "Ajoutez 8 g d’encre de seiche (2 sachets) au fumet et supprimez le safran. Gardez les encornets, laissez de côté gambas et moules si vous voulez, et servez avec un aïoli. Ce n’est plus une paella, mais la technique est la même.",
    },
    {
      title: "Avec des petits pois",
      text: "Jetez 150 g de petits pois surgelés sur le riz juste après avoir versé le fumet. Ils cuisent en même temps, sans rien changer aux temps.",
    },
  ],
  storage:
    "Elle se mange tout de suite. S’il en reste, mettez-la en boîte fermée au réfrigérateur dans les 2 heures et consommez-la sous 24 heures ; réchauffez une seule fois, à la poêle avec un trait de fumet, jusqu’à ce qu’elle soit brûlante à cœur.",
  pairing: "Un blanc sec et vif, un albariño ou un picpoul-de-pinet, bien frais.",
  faq: [
    {
      q: "Quel riz pour une paella ?",
      a: "Un riz rond espagnol : le bomba est le plus tolérant, le sénia et les riz de Calasparra marchent aussi. On les trouve en épicerie espagnole ou au rayon riz des grandes surfaces. Évitez le riz long, qui n’absorbe pas assez, et le riz à risotto, qui devient crémeux.",
    },
    {
      q: "Faut-il remuer la paella pendant la cuisson ?",
      a: "Non, plus du tout une fois le fumet versé. Vous étalez le riz en couche régulière, puis vous le laissez tranquille jusqu’à la fin. C’est ce qui garde les grains séparés et permet au socarrat de se former.",
    },
    {
      q: "Comment réussir le socarrat ?",
      a: "Quand tout le liquide est absorbé, montez à feu vif 1 à 2 minutes. Le riz doit crépiter et sentir le pain grillé. Grattez le fond au bord avec une cuillère : s’il accroche en croûte dorée, c’est prêt. À la moindre odeur de brûlé, coupez.",
    },
    {
      q: "Peut-on faire une paella sans poêle à paella ?",
      a: "Oui, dans la plus grande sauteuse ou poêle que vous ayez, idéalement 32 cm, en gardant une couche de riz de 1,5 cm au plus. Pas de cocotte : trop haute, elle empile le riz, qui cuit mal et ne fait pas de socarrat.",
    },
    {
      q: "Comment savoir si les moules sont fraîches ?",
      a: "Elles sentent la mer, pas l’ammoniaque, et sont fermées, ou se referment quand on les tapote. Jetez les coquilles cassées et celles qui restent ouvertes, puis, après cuisson, celles qui ne se sont pas ouvertes. Achetez-les en dernier, gardez-les au frais et cuisinez-les le jour même.",
    },
    {
      q: "Peut-on utiliser des fruits de mer surgelés ?",
      a: "Oui. Décongelez-les une nuit au réfrigérateur, jamais à température ambiante, et séchez-les bien avant de les saisir. Les moules surgelées déjà cuites se posent sur le riz pendant les 3 dernières minutes, juste pour les réchauffer. Et on ne recongèle jamais un produit décongelé.",
    },
    {
      q: "Combien de temps se garde une paella ?",
      a: "24 heures au réfrigérateur, pas plus. Le riz cuit peut contenir des spores de Bacillus cereus qui résistent à la cuisson : refroidissez vite, mettez au frais dans les 2 heures, et réchauffez une seule fois, jusqu’à ce que ce soit brûlant à cœur.",
    },
  ],
  nutrition: {
    calories: 580,
    protein: 37,
    fat: 17,
    saturatedFat: 3,
    carbs: 70,
    sugar: 4,
    fiber: 3,
    sodium: 900,
  },
  annotations: {
    hero: "les têtes, c’est là qu’est le goût",
    detail: "le socarrat s’écoute, il crépite",
  },
  images: {
    heroAlt:
      "Paella aux fruits de mer dans sa poêle noire : gambas, langoustines, moules et lanières de poivron rouge sur riz safrané",
    detailAlt: "Paella aux gambas dans sa poêle sur le feu, riz jaune au safran, cuillère en bois et torchon à carreaux bleus",
    credits: {
      hero: { photographer: "Pexels", url: "https://www.pexels.com/photo/16743489/" },
      detail: { photographer: "Pexels", url: "https://www.pexels.com/photo/36878063/" },
    },
  },
  datePublished: "2026-11-03",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#E07A2A",
    onAccent: "#1b1712",
    ink: "#9A4410",
    tint: "#FBEFE3",
    deep: "#1a120c",
    focus: "50% 50%",
  },
});
