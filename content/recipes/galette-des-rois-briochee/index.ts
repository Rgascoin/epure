import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "galette-des-rois-briochee",
  title: "Galette des rois briochée",
  seoTitle: "Gâteau des rois brioché, fleur d’oranger et fruits confits",
  tagline: "La version du Sud, sans frangipane.",
  description:
    "La couronne des rois du Sud : une brioche à la fleur d’oranger pour 8, garnie de fruits confits et de sucre perlé. 40 minutes de travail, 5 h de pousse en tout.",
  summary:
    "Pour 8 personnes, pétrissez 500 g de farine avec 3 œufs, 70 g de sucre, 20 g de levure fraîche, 3 cuillères à soupe de fleur d’oranger et un zeste d’orange, puis 125 g de beurre. Laissez lever 1 h 30, reposer 2 h au frais, façonnez la couronne, glissez la fève et laissez pousser encore 1 h 30. Sucre perlé, 25 minutes au four à 180 °C, puis nappage d’abricot et fruits confits. Comptez 6 h 35 en tout, dont 40 minutes de travail.",
  intro: [
    "Dans le Sud de la France, l’Épiphanie ne passe pas forcément par la frangipane. On y mange une couronne de brioche parfumée à la fleur d’oranger, couverte de fruits confits et de sucre en grains, avec la fève cachée dans la mie. On l’appelle gâteau des rois ou couronne des rois.",
    "C’est une brioche, donc une affaire de patience. Pressée, elle sort dense et sèche : la pâte doit doubler deux fois, et le beurre ne s’ajoute qu’une fois la pâte devenue élastique.",
    "Le reste se fait la veille ou le matin, selon votre organisation. Le passage au réfrigérateur rend la pâte bien plus facile à façonner.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "gâteau des rois",
    "galette des rois briochée",
    "couronne des rois",
    "brioche des rois",
    "gâteau des rois provençal",
    "recette gâteau des rois fleur d’oranger",
    "brioche des rois fruits confits",
    "couronne des rois maison",
  ],
  diet: ["vegetarian"],
  servings: 8,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 40, cook: 25, rest: 330 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Hiver"],
  tags: ["epiphanie"],
  equipment: [
    "robot pâtissier avec crochet pétrisseur",
    "plaque de four et papier cuisson",
    "un petit ramequin beurré de 7 à 8 cm",
    "un pinceau",
    "une grille",
  ],
  ingredients: [
    {
      title: "La brioche",
      items: [
        { qty: 80, unit: "ml", name: "lait entier", note: "tiède", step: 10 },
        { qty: 20, unit: "g", name: "levure de boulanger fraîche", note: "ou 7 g de levure sèche", step: 1 },
        { qty: 500, unit: "g", name: "farine de blé", note: "type 45", step: 10 },
        { qty: 70, unit: "g", name: "sucre", step: 5 },
        { qty: 8, unit: "g", name: "sel fin", step: 1 },
        { qty: 3, name: "œuf", plural: "œufs", note: "froids", step: 1 },
        { qty: 3, unit: "cas", name: "eau de fleur d’oranger", step: 0.5 },
        { qty: 1, name: "orange", plural: "oranges", note: "non traitée, pour le zeste", step: 1 },
        { qty: 125, unit: "g", name: "beurre doux", note: "mou, en morceaux", step: 5 },
        { qty: 1, name: "fève", plural: "fèves", fixed: true },
      ],
    },
    {
      title: "La dorure et le décor",
      items: [
        { qty: 1, name: "jaune d’œuf", plural: "jaunes d’œufs", step: 1 },
        { qty: 1, unit: "cas", name: "lait", step: 0.5 },
        { qty: 50, unit: "g", name: "sucre perlé", note: "en grains", step: 5 },
        { qty: 3, unit: "cas", name: "confiture d’abricot", step: 1 },
        { qty: 150, unit: "g", name: "fruits confits", note: "cerises, tranches d’orange, melon, angélique", step: 10 },
      ],
    },
  ],
  method: [
    {
      title: "La pâte à brioche",
      steps: [
        {
          title: "Délayer la levure",
          text: "Émiettez la levure dans le lait tiède et laissez reposer 5 minutes, jusqu’à ce qu’elle soit dissoute et que de petites bulles apparaissent.",
          timer: { minutes: 5, label: "Levure dans le lait" },
        },
        {
          title: "Pétrir la pâte",
          text: "Dans la cuve du robot, mettez la farine, puis le sucre et le sel d’un côté, la levure délayée de l’autre. Ajoutez les œufs, la fleur d’oranger et le zeste râpé de l’orange. Pétrissez 5 minutes à vitesse lente, puis 5 minutes à vitesse moyenne, soit 10 minutes : la pâte se décolle des parois et devient élastique.",
          timer: { minutes: 10, label: "Pétrissage" },
          tip: "Le sel en contact direct avec la levure fraîche la ralentit. On les dépose de part et d’autre de la farine.",
        },
        {
          title: "Incorporer le beurre",
          text: "Ajoutez le beurre mou en trois fois, en attendant que chaque ajout soit absorbé. Pétrissez encore 8 à 10 minutes, jusqu’à ce que la pâte soit lisse, brillante, et qu’un morceau étiré entre les doigts forme une fine membrane presque transparente sans se déchirer.",
          timer: { minutes: 10, label: "Pétrissage au beurre" },
          tip: "Si la pâte colle encore après 10 minutes, arrêtez le robot 5 minutes et reprenez : un robot qui chauffe fait fondre le beurre.",
        },
        {
          title: "Première levée",
          text: "Rassemblez la pâte en boule, mettez-la dans un saladier, couvrez et laissez lever 1 h 30 à température ambiante. Elle doit doubler de volume.",
          timer: { minutes: 90, label: "Première levée" },
        },
        {
          title: "Reposer au froid",
          text: "Rabattez la pâte du poing pour chasser le gaz, filmez au contact et placez-la 2 h au réfrigérateur, ou jusqu’au lendemain. Froide, elle colle beaucoup moins.",
          timer: { minutes: 120, label: "Pâte au réfrigérateur" },
        },
      ],
    },
    {
      title: "La couronne",
      steps: [
        {
          title: "Former la couronne",
          text: "Sur le plan fariné, formez une boule bien lisse en ramenant les bords dessous. Enfoncez les pouces au centre pour la percer, puis élargissez le trou en faisant tourner la pâte autour de vos mains, jusqu’à obtenir une couronne de 26 cm environ, avec un trou de 10 cm. Posez-la sur la plaque garnie de papier cuisson.",
          tip: "Placez le ramequin beurré au centre : sans lui, le trou se referme pendant la pousse et la cuisson.",
        },
        {
          title: "Cacher la fève",
          text: "Soulevez légèrement un côté de la couronne et enfoncez la fève dans la pâte par en dessous. Pincez pour refermer : on ne doit plus rien voir sur le dessus.",
        },
        {
          title: "Laisser pousser",
          text: "Couvrez d’un torchon et laissez pousser 1 h 30 à température ambiante. La couronne a presque doublé et une légère pression du doigt laisse une empreinte qui remonte lentement. Préchauffez le four à 180 °C, chaleur traditionnelle, 20 minutes avant la fin.",
          timer: { minutes: 90, label: "Pousse de la couronne" },
        },
      ],
    },
    {
      title: "Cuisson et décor",
      steps: [
        {
          title: "Dorer et sucrer",
          text: "Battez le jaune d’œuf avec la cuillère de lait et badigeonnez délicatement la couronne au pinceau, sans appuyer pour ne pas la faire retomber. Parsemez le sucre perlé en bandes sur le pourtour, en laissant des espaces pour les fruits.",
        },
        {
          title: "Cuire la brioche",
          text: "Enfournez à mi-hauteur pour 25 minutes. La couronne est brun doré et sonne creux quand on tapote le dessous. Si elle colore trop vite, couvrez-la d’une feuille d’aluminium après 15 minutes.",
          timer: { minutes: 25, label: "Cuisson de la couronne" },
        },
        {
          title: "Napper et décorer",
          text: "Faites tiédir la confiture d’abricot avec une cuillère à soupe d’eau, puis filtrez-la. Badigeonnez la couronne encore chaude entre les bandes de sucre, posez les fruits confits et nappez-les à leur tour pour qu’ils brillent.",
        },
        {
          title: "Laisser refroidir",
          text: "Retirez le ramequin et laissez refroidir 30 minutes sur une grille avant de couper : la mie finit de se fixer et se tranche sans s’écraser.",
          timer: { minutes: 30, label: "Refroidissement" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi le beurre arrive après",
      text: "Le pétrissage forme le gluten, un réseau élastique qui retiendra le gaz de la levure. Les matières grasses gênent la formation de ce réseau : ajoutées au début, elles donnent une pâte molle qui lève mal. Ajoutées une fois le réseau formé, elles l’enrobent et rendent la mie fondante.",
    },
    {
      title: "Le rôle du froid",
      text: "Au réfrigérateur, le beurre de la pâte durcit et la fermentation ralentit sans s’arrêter. La pâte devient ferme et peu collante, et cette fermentation lente développe des arômes plus ronds.",
    },
    {
      title: "Pourquoi la brioche sonne creux",
      text: "À la cuisson, l’eau de la mie s’évapore et l’amidon se fige autour des bulles de gaz. Quand la mie est cuite, le dessous est sec et rigide, et il résonne au tapotement. Une brioche encore lourde et sourde demande quelques minutes de plus.",
    },
  ],
  tips: [
    "Choisissez des fruits confits entiers ou en tranches plutôt qu’en petits dés : ils se voient mieux sur la couronne et restent moelleux.",
    "Dosez la fleur d’oranger selon la vôtre : certaines sont bien plus parfumées que d’autres. Goûtez-en une goutte avant de verser.",
    "Une cuisine fraîche allonge la pousse. Fiez-vous au volume de la pâte et au test du doigt, pas seulement à la durée.",
    "Pour servir le matin, façonnez la couronne la veille au soir et laissez-la pousser toute la nuit au réfrigérateur, couverte. Sortez-la 1 h avant de l’enfourner.",
  ],
  mistakes: [
    "Ajouter le beurre fondu au lieu de mou : la pâte devient grasse et ne monte plus. Le beurre doit être souple comme une pommade, pas liquide.",
    "Enfourner une couronne qui n’a pas assez poussé : elle se fend sur les côtés au four et la mie reste serrée. Attendez qu’elle ait presque doublé.",
    "Mettre les fruits confits avant la cuisson : ils sèchent et noircissent sur les bords. Posez-les à la sortie du four, sur le nappage.",
    "Couper la brioche brûlante : la mie se tasse sous le couteau et paraît pâteuse. Trente minutes de repos suffisent.",
  ],
  variations: [
    {
      title: "Fruits confits dans la mie",
      text: "Ajoutez 80 g de fruits confits en petits dés à la fin du pétrissage, juste mélangés 1 minute à vitesse lente. Gardez 100 g de fruits entiers pour le dessus.",
    },
    {
      title: "Sans fruits confits",
      text: "Remplacez les fruits confits par 40 g de sucre perlé de plus et quelques amandes effilées, parsemés avant la cuisson. Les amandes sont des fruits à coque : prévenez vos invités.",
    },
    {
      title: "Citron et rhum",
      text: "Remplacez la fleur d’oranger par 2 cuillères à soupe de rhum ambré et le zeste d’orange par celui de 2 citrons non traités. Le rhum est dans la pâte et cuit avec elle : il n’en reste que le parfum.",
    },
  ],
  storage:
    "La couronne se garde 2 jours à température ambiante, enveloppée dans un torchon ou dans un sac fermé. Rassise, elle se réchauffe 5 minutes au four à 150 °C, ou se coupe en tranches pour un pain perdu. Elle se congèle 1 mois, sans les fruits confits, bien emballée.",
  pairing: "Une clairette de Die ou un muscat doux, ou un chocolat chaud pour les enfants.",
  faq: [
    {
      q: "Quelle différence entre galette des rois et gâteau des rois ?",
      a: "La galette des rois est faite de deux disques de pâte feuilletée garnis de frangipane, surtout dans le Nord de la France. Le gâteau des rois, qu’on trouve dans le Sud, est une brioche en couronne parfumée à la fleur d’oranger, décorée de fruits confits et de sucre en grains.",
    },
    {
      q: "Où mettre la fève dans une brioche des rois ?",
      a: "Par en dessous, une fois la couronne façonnée et posée sur la plaque. On soulève légèrement un côté, on enfonce la fève dans la pâte et on pince pour refermer. Elle ne se voit pas et ne remonte pas à la cuisson.",
    },
    {
      q: "Peut-on préparer le gâteau des rois la veille ?",
      a: "Oui. Le plus pratique est de faire la pâte la veille et de la laisser au réfrigérateur toute la nuit après la première levée. Le lendemain, il reste à façonner, laisser pousser 1 h 30 et cuire. On peut aussi le cuire la veille : il reste moelleux 2 jours, bien enveloppé.",
    },
    {
      q: "Peut-on faire une brioche des rois sans robot ?",
      a: "Oui, mais comptez 20 à 25 minutes de pétrissage à la main. Pétrissez d’abord sans le beurre, en étirant et en rabattant la pâte sur le plan de travail, puis incorporez le beurre petit à petit. La pâte est prête quand elle se décolle du plan et forme une membrane fine.",
    },
    {
      q: "Pourquoi ma brioche des rois n’a pas levé ?",
      a: "Le plus souvent, la levure a été abîmée par un lait trop chaud, au-delà de 45 °C, ou la pièce était trop froide. Une levure périmée ou du sel versé directement dessus peuvent aussi l’affaiblir. Dans une cuisine fraîche, la pousse peut prendre 2 h 30 au lieu de 1 h 30.",
    },
    {
      q: "Quelle fleur d’oranger utiliser ?",
      a: "Une eau de fleur d’oranger de pâtisserie, vendue au rayon farine ou dans les épiceries orientales. Commencez par 3 cuillères à soupe pour 500 g de farine : le parfum s’atténue un peu à la cuisson, mais une dose trop forte devient amère.",
    },
  ],
  nutrition: {
    calories: 499,
    protein: 9.6,
    fat: 16,
    saturatedFat: 9.2,
    carbs: 77,
    sugar: 31.7,
    fiber: 2.3,
    sodium: 431,
  },
  annotations: { hero: "fruits posés à la sortie du four", detail: "sucre perlé sur le pourtour" },
  images: {
    heroAlt:
      "Gâteau des rois en couronne briochée, nappé et garni de cerises confites, de tranches d’orange et d’angélique, sur une assiette jaune",
    detailAlt:
      "Couronne des rois briochée vue de près, avec ses fruits confits brillants et son pourtour couvert de sucre perlé",
    credits: {
      hero: {
        photographer: "David Monniaux",
        url: "https://commons.wikimedia.org/wiki/File:Gateau_des_rois1.JPG",
        source: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
      },
      detail: {
        photographer: "Marianne Casamance",
        url: "https://commons.wikimedia.org/w/index.php?curid=30490726",
        source: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#E0892B",
    onAccent: "#1B1712",
    ink: "#8F4E0D",
    tint: "#FCF1E4",
    deep: "#1A0F06",
    focus: "50% 50%",
  },
});
