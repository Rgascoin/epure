import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "pommes-de-terre-roties",
  title: "Pommes de terre rôties au four",
  seoTitle: "Pommes de terre rôties au four, vraiment croustillantes",
  tagline: "Il faut les secouer un peu.",
  description:
    "Pommes de terre rôties au four croustillantes : précuites 8 min, secouées pour écorner les bords, puis 45 min à 220 °C dans la graisse de canard, ail et thym.",
  summary:
    "Pour 6 personnes, coupez 1,5 kg de petites pommes de terre en deux, précuisez-les 8 minutes à l’eau salée, puis secouez-les dans la casserole pour écorner leurs bords. Versez-les dans 80 g de graisse de canard déjà brûlante et rôtissez-les 45 minutes à 220 °C, en les retournant une fois et en ajoutant l’ail en chemise et le thym à mi-cuisson. Comptez 1 h 20 en tout, dont 20 minutes de travail.",
  intro: [
    "Des pommes de terre crues passées au four avec un filet d’huile, c’est bon, mais rarement croustillant. Pour obtenir une vraie croûte, celle qui résiste sous la fourchette, on les fait d’abord bouillir 8 minutes, puis on les secoue dans la casserole jusqu’à ce que leurs bords s’écornent.",
    "Cette surface abîmée, couverte d’une fine pâte d’amidon, va frire dans la graisse brûlante : c’est elle qui fait la croûte. Le reste tient à un four à 220 °C et à de la place sur la plaque. Serrées, les pommes de terre cuisent dans leur propre vapeur et restent pâles.",
    "Pour Noël, on les fait à la graisse de canard, à côté d’une volaille ou d’un rôti. L’ail et le thym n’arrivent qu’à mi-cuisson : plus tôt, l’ail brûle et devient amer.",
  ],
  category: "Accompagnement",
  cuisine: "Française",
  keywords: [
    "pommes de terre rôties au four",
    "pommes de terre rôties",
    "pommes de terre au four croustillantes",
    "recette pommes de terre rôties",
    "pommes de terre grenaille au four",
    "pommes de terre à la graisse de canard",
    "pommes de terre rôties ail et thym",
    "temps de cuisson pommes de terre au four",
  ],
  diet: ["glutenFree"],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 20, cook: 60 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["noel"],
  equipment: [
    "grand plat à rôtir ou plaque à bords d’environ 40 × 30 cm",
    "grande casserole avec couvercle",
    "passoire",
    "spatule large en métal",
  ],
  ingredients: [
    {
      items: [
        {
          qty: 1500,
          unit: "g",
          name: "pommes de terre",
          note: "grenaille ou petites pommes de terre de 4 à 5 cm, non épluchées",
          step: 50,
        },
        { qty: 80, unit: "g", name: "graisse de canard", step: 10 },
        { qty: 1, unit: "cas", name: "gros sel", note: "pour l’eau de cuisson", step: 0.5 },
        { qty: 8, unit: "gousse", name: "ail", note: "non épluchées", step: 1 },
        { qty: 6, unit: "brin", name: "thym", step: 1 },
        { name: "fleur de sel" },
        { name: "poivre du moulin" },
      ],
    },
  ],
  method: [
    {
      title: "La précuisson",
      steps: [
        {
          title: "Chauffer la graisse",
          text: "Allumez le four à 220 °C, ou 200 °C en chaleur tournante. Mettez la graisse de canard dans le plat à rôtir et glissez-le dans le four pendant qu’il chauffe. Elle doit être brûlante, presque fumante, quand les pommes de terre y entreront.",
        },
        {
          title: "Couper les pommes de terre",
          text: "Lavez les pommes de terre en frottant la peau, sans les éplucher. Coupez-les en deux dans la longueur. Si certaines dépassent 5 cm, coupez-les en quatre, pour que tous les morceaux aient à peu près la taille d’une grosse noix.",
        },
        {
          title: "Précuire 8 minutes",
          text: "Mettez-les dans la casserole, couvrez d’eau froide et ajoutez le gros sel. Portez à ébullition, puis laissez frémir 8 minutes. Elles sont prêtes quand leurs arêtes s’arrondissent et que la pointe d’un couteau entre facilement sur 1 cm, puis bute au centre.",
          timer: { minutes: 8, label: "Précuisson à l’eau" },
          tip: "Ne les laissez pas cuire jusqu’au bout. Encore fermes au cœur, elles tiendront le secouage et le four sans s’effondrer.",
        },
        {
          title: "Égoutter et secouer",
          text: "Égouttez-les dans la passoire et laissez-les fumer 3 minutes : la surface doit sécher. Remettez-les dans la casserole, couvercle tenu, et secouez énergiquement trois ou quatre fois. Les bords s’écornent et se couvrent d’une fine couche farineuse, presque pâteuse.",
          timer: { minutes: 3, label: "Séchage à la vapeur" },
          tip: "C’est le geste qui fait tout. Plus la surface est abîmée et duveteuse, plus la croûte sera épaisse et craquante.",
        },
      ],
    },
    {
      title: "Le rôtissage",
      steps: [
        {
          title: "Enrober de graisse brûlante",
          text: "Sortez le plat du four et posez-le sur une surface qui ne craint pas la chaleur. Versez-y les pommes de terre avec une cuillère, elles doivent grésiller. Retournez-les pour les enrober, puis placez-les face coupée contre le fond, en une seule couche, avec 1 cm d’écart. Poivrez.",
        },
        {
          title: "Rôtir sans y toucher",
          text: "Enfournez à mi-hauteur pour 25 minutes, sans ouvrir le four. Le dessous doit être bien doré et se décoller tout seul quand vous glissez la spatule dessous.",
          timer: { minutes: 25, label: "Première face" },
          tip: "Si elles accrochent, laissez-les 5 minutes de plus : une croûte formée se détache d’elle-même, une croûte pas finie se déchire.",
        },
        {
          title: "Retourner avec ail et thym",
          text: "Retournez les pommes de terre à la spatule. Écrasez légèrement les gousses d’ail du plat de la main, sans les éplucher, et glissez-les entre les pommes de terre avec les brins de thym. Remettez au four 20 minutes, jusqu’à ce que la croûte soit dorée partout et sonne sous la spatule.",
          timer: { minutes: 20, label: "Seconde face, ail et thym" },
        },
        {
          title: "Saler et servir",
          text: "Égouttez-les un instant sur du papier absorbant si elles baignent dans la graisse, parsemez de fleur de sel et servez tout de suite, avec l’ail à presser hors de sa peau sur chaque bouchée.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Une croûte d’amidon",
      text: "La précuisson gélifie l’amidon en surface. Quand on secoue les pommes de terre, cette couche ramollie s’arrache par endroits et forme une pâte fine, pleine de petites aspérités. Dans la graisse chaude, elle sèche, frit et durcit : c’est une surface bien plus grande et plus rugueuse que celle d’une pomme de terre crue.",
    },
    {
      title: "Pourquoi la graisse doit être brûlante",
      text: "Au contact d’une graisse très chaude, l’eau de surface s’évapore aussitôt et la croûte commence à se former. Dans une graisse froide, les pommes de terre absorbent le gras, collent au fond et ramollissent avant de dorer.",
    },
    {
      title: "La place sur la plaque",
      text: "Une pomme de terre rejette beaucoup de vapeur en cuisant. Si les morceaux se touchent, cette vapeur reste piégée, la surface ne dépasse pas 100 °C et la réaction de Maillard, qui dore et donne le goût de rôti, ne démarre pas vraiment. Espacées, elles sèchent et brunissent.",
    },
  ],
  tips: [
    "Salez l’eau de précuisson comme pour des pâtes : c’est le seul moment où le sel entre au cœur.",
    "Pour un repas de fête, faites la précuisson et le secouage le matin. Gardez-les sur une assiette au réfrigérateur, sans film, puis rôtissez-les au dernier moment : la surface, plus sèche, croustille encore mieux.",
    "Si le four est pris par une volaille à 180 °C, rôtissez-les après, pendant que la viande repose sous l’aluminium : elles ont besoin des 220 °C.",
    "Gardez la graisse de canard qui reste au fond du plat dans un bocal au réfrigérateur. Elle resservira pour la prochaine fournée.",
  ],
  mistakes: [
    "Tasser 1,5 kg de pommes de terre sur une petite plaque : elles cuisent à la vapeur et restent molles. Prenez deux plaques plutôt qu’une.",
    "Verser les pommes de terre dans une graisse tiède : elles s’en imbibent et attachent. Laissez le plat chauffer avec le four, au moins 10 minutes.",
    "Précuire trop longtemps : elles s’effondrent au secouage. Rôtissez-les quand même, elles feront des morceaux irréguliers mais très croustillants.",
    "Mettre l’ail dès le début : il noircit et donne un goût amer à tout le plat. Il n’a besoin que des 20 dernières minutes.",
  ],
  variations: [
    {
      title: "À l’huile d’olive et au romarin",
      text: "Remplacez la graisse de canard par 6 cas d’huile d’olive, chauffée de la même façon, et le thym par 3 branches de romarin. La croûte est un peu moins épaisse, et la recette devient végétalienne.",
    },
    {
      title: "Avec de grosses pommes de terre",
      text: "Prenez des pommes de terre farineuses ou polyvalentes, épluchez-les et coupez-les en morceaux de 5 cm. Précuisez-les 10 minutes et rôtissez-les 50 minutes en tout. Épluchées, elles s’écornent davantage et la croûte est plus épaisse.",
    },
    {
      title: "Sans précuisson",
      text: "Pour une soirée pressée : enrobez la grenaille coupée en deux de 4 cas d’huile et rôtissez-la 40 à 45 minutes à 220 °C, face coupée contre la plaque. La peau dore bien, mais la croûte reste fine.",
    },
  ],
  storage:
    "Elles se gardent 3 jours au réfrigérateur dans une boîte fermée, une fois refroidies. Réchauffez-les 10 à 15 minutes à 200 °C sur une plaque, pas au micro-ondes, qui les ramollit. Elles supportent mal la congélation.",
  pairing:
    "Avec un poulet ou un chapon rôti, un gigot d’agneau, un magret de canard ou une côte de bœuf.",
  faq: [
    {
      q: "Faut-il précuire les pommes de terre avant de les rôtir au four ?",
      a: "Non, ce n’est pas obligatoire, mais c’est ce qui les rend vraiment croustillantes. 8 minutes à l’eau salée puis un bon secouage dans la casserole créent une surface rugueuse qui frit dans la graisse. Crues, elles dorent, mais leur croûte reste fine.",
    },
    {
      q: "À quelle température cuire des pommes de terre rôties ?",
      a: "220 °C, ou 200 °C en chaleur tournante. En dessous, elles cuisent mais dorent lentement et sèchent avant d’avoir une croûte. Le plat et la graisse doivent chauffer avec le four.",
    },
    {
      q: "Combien de temps cuire des pommes de terre grenaille au four ?",
      a: "45 minutes à 220 °C après 8 minutes de précuisson, en les retournant à mi-parcours. Sans précuisson, comptez 40 à 45 minutes pour de la grenaille coupée en deux. Elles sont prêtes quand la croûte est dorée partout et qu’un couteau entre sans résistance.",
    },
    {
      q: "Pourquoi mes pommes de terre au four ne sont pas croustillantes ?",
      a: "Le plus souvent, la plaque était trop chargée : les pommes de terre cuisent dans leur vapeur. Un four pas assez chaud, une graisse froide ou des pommes de terre encore humides donnent le même résultat. Espacez-les, séchez-les et mettez-les dans une graisse brûlante.",
    },
    {
      q: "Peut-on préparer des pommes de terre rôties à l’avance ?",
      a: "Oui, en partie. Précuisez-les et secouez-les jusqu’à 8 heures à l’avance, puis gardez-les au réfrigérateur, sans les couvrir. Rôtissez-les au dernier moment : déjà cuites, elles ramollissent en attendant.",
    },
    {
      q: "Graisse de canard ou huile pour les pommes de terre rôties ?",
      a: "Les deux marchent. La graisse de canard supporte bien la chaleur et donne un goût de rôti très net. L’huile d’olive ou de tournesol donne une croûte un peu plus fine et une version végétale.",
    },
  ],
  nutrition: {
    calories: 280,
    protein: 5,
    fat: 10,
    saturatedFat: 3,
    carbs: 42,
    sugar: 2,
    fiber: 4,
    sodium: 400,
  },
  annotations: {
    hero: "dorées côté coupe, contre le plat",
    detail: "les bords écornés font la croûte",
  },
  images: {
    heroAlt: "Pommes de terre grenaille rôties au four, coupées en deux et dorées sur leur face coupée, dans un plat clair",
    detailAlt: "Gros morceaux de pommes de terre rôties avec leur peau, assaisonnés d’herbes, à la croûte dorée et craquante",
    credits: {
      hero: {
        photographer: "Ellie Burgin",
        url: "https://www.pexels.com/photo/golden-crispy-roast-potatoes-on-a-plate-29640883/",
        source: "Pexels",
      },
      detail: {
        photographer: "Terrance Barksdale",
        url: "https://www.pexels.com/photo/close-up-of-seasoned-roasted-potatoes-38702060/",
        source: "Pexels",
      },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#C8812A",
    onAccent: "#1B1712",
    ink: "#7E4A12",
    tint: "#FAF0E2",
    deep: "#1C1009",
    focus: "50% 50%",
  },
});
