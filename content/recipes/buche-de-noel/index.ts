import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "buche-de-noel",
  title: "Bûche de Noël au chocolat",
  seoTitle: "Bûche de Noël au chocolat : biscuit roulé qui ne casse pas",
  tagline: "Le biscuit se roule encore chaud.",
  description:
    "Une bûche de Noël au chocolat pour 8 : un biscuit roulé cuit 9 minutes, une ganache au chocolat noir dedans et dessus, puis 2 h au frais avant de servir.",
  summary:
    "Pour 8 personnes, préparez d’abord une ganache avec 250 g de chocolat noir et 25 cl de crème, qui épaissit 1 h. Pendant ce temps, cuisez un biscuit de 4 œufs 9 minutes à 200 °C sur une plaque de 30 × 40 cm et roulez-le encore chaud dans un torchon. Garnissez-le d’un tiers de la ganache, couvrez la bûche du reste, striez à la fourchette et laissez prendre 2 h au réfrigérateur. Comptez 3 h 30 en tout, dont 50 minutes de travail.",
  intro: [
    "La bûche roulée, c’est un biscuit très fin, une ganache au chocolat et un peu d’aplomb au moment de rouler. Rien de compliqué, mais un ordre à respecter : la ganache d’abord, le biscuit ensuite.",
    "Ce qui la fait rater, c’est presque toujours le biscuit. Trop cuit, il se fend au premier tour. Laissé à plat jusqu’à refroidir, il garde la forme de la plaque et casse aussi. On le sort donc dès qu’il est blond et on le roule tout de suite dans un torchon humide, pendant qu’il est souple.",
    "La ganache demande seulement de la patience. Il faut qu’elle épaississe à température ambiante jusqu’à la tenue d’une pâte à tartiner : trop liquide, elle coule ; sortie du réfrigérateur, elle ne s’étale plus.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "bûche de noël",
    "bûche de noël au chocolat",
    "recette bûche de noël",
    "bûche roulée",
    "bûche de noël facile",
    "biscuit roulé",
    "ganache chocolat bûche",
    "comment rouler une bûche",
  ],
  diet: ["vegetarian"],
  servings: 8,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 50, cook: 12, rest: 150 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Hiver"],
  tags: ["noel"],
  equipment: [
    "plaque de cuisson de 30 × 40 cm",
    "papier cuisson",
    "batteur électrique",
    "torchon propre",
    "maryse",
    "spatule coudée",
  ],
  ingredients: [
    {
      title: "La ganache",
      items: [
        { qty: 250, unit: "g", name: "chocolat noir", note: "60 à 70 % de cacao", step: 10 },
        { qty: 25, unit: "cl", name: "crème liquide entière", note: "30 % de matière grasse", step: 1 },
        { qty: 30, unit: "g", name: "beurre doux", note: "mou, en dés", step: 5 },
      ],
    },
    {
      title: "Le biscuit roulé",
      items: [
        { qty: 4, name: "œuf", plural: "œufs", note: "à température ambiante", step: 1 },
        { qty: 100, unit: "g", name: "sucre en poudre", note: "en deux fois", step: 5 },
        { qty: 1, unit: "pincee", name: "sel", step: 1 },
        { qty: 90, unit: "g", name: "farine", note: "type 45 ou 55", step: 5 },
      ],
    },
    {
      title: "La finition",
      items: [{ qty: 1, unit: "cas", name: "sucre glace", step: 0.5 }],
    },
  ],
  method: [
    {
      title: "La ganache",
      steps: [
        {
          title: "Faire la ganache",
          text: "Hachez finement le chocolat et mettez-le dans un saladier. Chauffez la crème jusqu’aux premiers frémissements, puis versez-la sur le chocolat en trois fois, en mélangeant au centre avec une maryse. Quand la ganache est lisse et brillante, ajoutez le beurre en dés et mélangez jusqu’à ce qu’il disparaisse.",
        },
        {
          title: "Laisser épaissir",
          text: "Couvrez et laissez reposer à température ambiante, vers 20 °C, pendant 1 h environ, le temps de préparer le biscuit. Elle est prête quand elle a la consistance d’une pâte à tartiner : une trace de cuillère reste nette à sa surface.",
          timer: { minutes: 60, label: "Ganache qui épaissit" },
          tip: "Ne la mettez pas au réfrigérateur pour gagner du temps : elle durcit sur les bords et reste liquide au centre.",
        },
      ],
    },
    {
      title: "Le biscuit",
      steps: [
        {
          title: "Préparer la plaque",
          text: "Préchauffez le four à 200 °C, chaleur statique. Tapissez la plaque de papier cuisson. Séparez les blancs des jaunes dans deux grands saladiers, sans laisser tomber la moindre trace de jaune dans les blancs.",
        },
        {
          title: "Blanchir les jaunes",
          text: "Fouettez les jaunes avec la moitié du sucre au batteur pendant 3 minutes, jusqu’à ce que le mélange pâlisse, double de volume et retombe en ruban épais quand on soulève le fouet.",
          timer: { minutes: 3, label: "Jaunes et sucre" },
        },
        {
          title: "Monter les blancs",
          text: "Lavez et séchez les fouets. Montez les blancs avec le sel. Dès qu’ils moussent et blanchissent, versez le reste du sucre en pluie et continuez jusqu’à une neige ferme et brillante, qui forme un bec droit au bout du fouet.",
          tip: "Des fouets gras ou une goutte de jaune, et les blancs ne montent pas : la matière grasse empêche la mousse de se former.",
        },
        {
          title: "Incorporer la farine",
          text: "Mélangez un quart des blancs aux jaunes pour les détendre. Tamisez la farine par-dessus, puis ajoutez le reste des blancs. Incorporez à la maryse en soulevant la masse du fond vers le haut et en tournant le saladier, juste jusqu’à ce qu’il ne reste plus de traînée blanche.",
        },
        {
          title: "Étaler et cuire",
          text: "Versez la pâte sur la plaque et étalez-la à la spatule coudée en une couche régulière d’environ 1 cm, jusque dans les coins. Enfournez 8 à 10 minutes : le biscuit est blond, sa surface revient quand on l’effleure du doigt et il se décolle des bords.",
          timer: { minutes: 9, label: "Cuisson du biscuit" },
          tip: "Mieux vaut un biscuit un peu pâle qu’un biscuit trop cuit. Une minute de trop suffit à le rendre cassant.",
        },
        {
          title: "Rouler à chaud",
          text: "Mouillez le torchon, essorez-le bien et étalez-le sur le plan de travail. Retournez le biscuit dessus, décollez le papier, puis roulez biscuit et torchon ensemble en partant d’un petit côté. Laissez refroidir ainsi, roulé, pendant 30 minutes.",
          timer: { minutes: 30, label: "Biscuit roulé qui refroidit" },
          tip: "Le torchon humide garde le biscuit souple. Roulé chaud, il refroidit déjà courbé et ne se fend pas au montage.",
        },
      ],
    },
    {
      title: "Le montage",
      steps: [
        {
          title: "Garnir et rouler",
          text: "Déroulez doucement le biscuit sur son torchon. Étalez dessus un bon tiers de la ganache, environ 180 g, en couche fine et régulière, en laissant 2 cm libres sur le bord du bout. Roulez de nouveau, sans le torchon, en serrant légèrement, et posez la bûche sur le plat de service, la soudure dessous.",
        },
        {
          title: "Couvrir et strier",
          text: "Coupez les deux extrémités en biais pour les égaliser. Couvrez toute la bûche avec le reste de la ganache à la spatule coudée, puis tirez des stries sur la longueur avec les dents d’une fourchette pour imiter l’écorce.",
        },
        {
          title: "Laisser prendre",
          text: "Placez la bûche au réfrigérateur pendant au moins 2 h, jusqu’à ce que la ganache soit ferme au toucher. Juste avant de servir, saupoudrez-la d’un voile de sucre glace à travers une petite passoire.",
          timer: { minutes: 120, label: "Bûche au réfrigérateur" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Un biscuit qui refroidit déjà roulé",
      text: "À la sortie du four, le biscuit est chaud et encore humide, donc souple. En refroidissant à plat, il sèche en surface et se raffermit dans cette forme. Roulé chaud dans un torchon humide, il garde son eau et fige directement courbé : on le déroule et on le roule de nouveau sans le forcer.",
    },
    {
      title: "Des blancs qui font lever",
      text: "Ce biscuit ne contient pas de levure. C’est l’air emprisonné dans les blancs montés, stabilisé par le sucre, qui se dilate à la chaleur et fait gonfler la pâte. Chaque mouvement brusque au moment d’incorporer la farine chasse des bulles, d’où la maryse.",
    },
    {
      title: "Une ganache, c’est une émulsion",
      text: "La crème apporte de l’eau et de la matière grasse, le chocolat du beurre de cacao et des particules de cacao. Versée en plusieurs fois et mélangée au centre, la crème forme avec le chocolat une émulsion lisse. En refroidissant, le beurre de cacao cristallise et la ganache épaissit.",
    },
  ],
  tips: [
    "Préparez la ganache en premier : elle a besoin d’une heure pour épaissir, juste le temps de faire le biscuit.",
    "Sortez la bûche du réfrigérateur 20 minutes avant de la servir : trop froide, la ganache est dure et le chocolat a moins de goût.",
    "Gardez les extrémités coupées en biais : posées sur la bûche et couvertes de ganache, elles font une branche coupée.",
    "Pour des stries nettes, tirez la fourchette d’un seul geste par sillon, sans revenir dessus, et essuyez-la de temps en temps.",
  ],
  mistakes: [
    "Un biscuit trop cuit se fend au premier tour. S’il casse un peu, continuez : la ganache recolle tout et les stries cachent les fissures.",
    "Une ganache trop liquide coule du biscuit au montage. Attendez encore 15 à 20 minutes à température ambiante, en remuant de temps en temps.",
    "Une ganache granuleuse et luisante de gras a tranché. Ajoutez 2 cuillères à soupe de crème chaude et mélangez vivement au centre : elle redevient lisse.",
    "Des blancs mal incorporés laissent des traînées blanches et un biscuit qui se déchire. Ne sortez pas le fouet pour rattraper : continuez à la maryse, en soulevant.",
  ],
  variations: [
    {
      title: "Biscuit au cacao",
      text: "Remplacez 20 g de farine par 20 g de cacao en poudre non sucré, tamisé avec la farine. Le biscuit est plus fragile : sortez-le du four dès 8 minutes.",
    },
    {
      title: "Ganache au chocolat au lait",
      text: "Prenez 300 g de chocolat au lait pour 20 cl de crème, sans beurre. Elle est plus douce et met un peu plus longtemps à épaissir, comptez 1 h 30.",
    },
    {
      title: "Biscuit imbibé au rhum",
      text: "Portez 50 g de sucre et 5 cl d’eau à ébullition, laissez refroidir et ajoutez 2 cuillères à soupe de rhum. Badigeonnez le biscuit avant de le garnir. L’alcool n’est pas cuit : cette version n’est pas pour les enfants.",
    },
  ],
  storage:
    "La bûche se garde 3 jours au réfrigérateur, sous une cloche ou dans une boîte, à l’écart des aliments qui sentent fort. Elle se congèle entière et sans sucre glace jusqu’à 1 mois : décongelez-la une nuit au réfrigérateur et ne la recongelez pas.",
  pairing: "Un café serré, ou un vin doux naturel comme un banyuls, qui tient tête au chocolat.",
  faq: [
    {
      q: "Peut-on préparer la bûche de Noël la veille ?",
      a: "Oui, et c’est même plus confortable. Montée la veille, elle passe la nuit au réfrigérateur sous une cloche et la ganache a le temps de bien se raffermir. Ajoutez seulement le sucre glace et les décorations au moment de servir.",
    },
    {
      q: "Faut-il rouler le biscuit encore chaud ?",
      a: "Oui, dès la sortie du four. Chaud et roulé dans un torchon humide, il refroidit en prenant sa forme. Laissé à plat, il durcit et se fend quand on le roule. S’il se fissure quand même un peu, la ganache comblera les fentes.",
    },
    {
      q: "Quelle taille de plaque pour une bûche roulée ?",
      a: "30 × 40 cm, la taille d’une plaque de four standard. Avec 4 œufs, le biscuit fait environ 1 cm d’épaisseur, de quoi rouler une bûche d’une trentaine de centimètres pour 8 personnes.",
    },
    {
      q: "Quel chocolat choisir pour la ganache d’une bûche ?",
      a: "60 à 70 % de cacao, en tablette pâtissière. Au-delà de 70 %, la ganache devient plus ferme et plus amère. Avec un chocolat au lait, il faut davantage de chocolat pour la même tenue.",
    },
    {
      q: "Peut-on congeler une bûche de Noël ?",
      a: "Oui, jusqu’à 1 mois, entière, sans décor et bien emballée. Décongelez-la une nuit au réfrigérateur, puis ajoutez le sucre glace. Une fois décongelée, ne la recongelez pas.",
    },
    {
      q: "Combien de temps se garde une bûche au chocolat ?",
      a: "3 jours au réfrigérateur, couverte. La ganache protège le biscuit, qui reste moelleux, mais elle prend vite les odeurs : éloignez-la du fromage.",
    },
  ],
  nutrition: { calories: 415, protein: 7, fat: 27, saturatedFat: 16, carbs: 36, sugar: 25, fiber: 3, sodium: 70 },
  annotations: { hero: "roulée pendant qu’il est chaud", detail: "la spirale, sans une fissure" },
  images: {
    heroAlt: "Bûche de Noël roulée au chocolat sur une planche en bois, le bout coupé montrant la spirale du biscuit",
    detailAlt: "Tranche de bûche de Noël vue de près, la spirale de biscuit au chocolat et de crème bien visible",
    credits: {
      hero: { photographer: "Mitantig", url: "https://commons.wikimedia.org/wiki/File:Buche_de_Noel_(Yule_Log).jpg", source: "Wikimedia Commons", license: "CC BY-SA 4.0" },
      detail: { photographer: "HarshLight from San Jose, CA, USA", url: "https://commons.wikimedia.org/wiki/File:Yule_Log_(35531614301).jpg", source: "Wikimedia Commons", license: "CC BY 2.0" },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#8B4A2B",
    onAccent: "#FFF7EE",
    ink: "#6B3519",
    tint: "#F6ECE4",
    deep: "#1C0F09",
    focus: "30% 55%",
  },
});
