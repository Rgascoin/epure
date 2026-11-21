import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "puree-de-patate-douce",
  title: "Purée de patate douce",
  seoTitle: "Purée de patate douce rôtie au four, sans lait",
  tagline: "Le four fait presque tout.",
  description:
    "La purée de patate douce pour 4 : 1 kg de patates douces rôties entières 45 à 60 minutes à 200 °C, écrasées avec 30 g de beurre et du sel. Pas de lait.",
  summary:
    "Pour 4 personnes, faites rôtir 1 kg de patates douces entières, dans leur peau, 45 à 60 minutes à 200 °C, jusqu’à ce qu’elles soient fondantes et que leur sirop caramélise. Videz-les, puis écrasez la chair à la fourchette ou au mixeur avec 30 g de beurre, du sel et, si vous voulez, une pincée de muscade, de cumin ou de gingembre. Pas besoin de lait. Comptez 1 h 20, dont 15 minutes de travail.",
  intro: [
    "Une purée orange, douce et dense, qui accompagne une volaille, un magret ou un poisson blanc. Elle ne se fait pas comme celle de pommes de terre : pas de lait, ou presque, et le mixeur est permis.",
    "La cuisson change tout. À la vapeur, en cubes, elle est prête en 20 minutes, mais la purée reste pâle et un peu aqueuse. Rôties entières au four, les patates douces mettent trois fois plus longtemps, perdent de l’eau et prennent un goût plus sucré, presque de marron.",
    "Le vrai risque, c’est de la noyer. Goûtez-la écrasée avec le beurre et le sel avant d’ajouter quoi que ce soit : elle est déjà crémeuse.",
  ],
  category: "Accompagnement",
  cuisine: "Française",
  keywords: [
    "purée de patate douce",
    "recette purée de patate douce",
    "purée de patates douces au four",
    "purée de patate douce sans lait",
    "purée de patate douce au mixeur",
    "patate douce au four pour purée",
    "purée de patate douce vapeur",
    "purée patate douce épices",
  ],
  diet: ["vegetarian", "glutenFree"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 15, cook: 55, rest: 10 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["automne"],
  equipment: ["plaque de cuisson et papier cuisson", "fourchette, presse-purée ou mixeur plongeant", "saladier"],
  ingredients: [
    {
      items: [
        {
          qty: 1,
          unit: "kg",
          name: "patate douce",
          plural: "patates douces",
          note: "à chair orange, de taille égale, 3 ou 4",
          step: 0.1,
        },
        { qty: 30, unit: "g", name: "beurre", note: "demi-sel ou doux ; ou 2 cas d’huile d’olive", step: 5 },
        { qty: 0.5, unit: "cac", name: "sel fin", note: "un peu moins avec du beurre demi-sel" },
        {
          name: "muscade, cumin ou gingembre moulu",
          note: "facultatif, une pincée d’une seule épice",
        },
        { qty: 5, unit: "cl", name: "lait entier", note: "seulement si la purée est trop ferme", step: 1 },
        { name: "poivre noir", note: "du moulin" },
      ],
    },
  ],
  method: [
    {
      title: "La purée",
      steps: [
        {
          title: "Préparer les patates douces",
          text: "Préchauffez le four à 200 °C. Brossez les patates douces sous l’eau, séchez-les et piquez chacune 4 ou 5 fois avec une fourchette. Posez-les sur la plaque couverte de papier cuisson, bien espacées.",
          tip: "Le papier n’est pas un luxe : le sirop qui s’échappe pendant la cuisson caramélise et colle à la plaque comme du sucre cuit.",
        },
        {
          title: "Rôtir",
          text: "Enfournez à mi-hauteur pour 45 à 60 minutes, selon leur grosseur. Elles sont cuites quand la pointe d’un couteau entre jusqu’au centre sans rencontrer de résistance, que la peau se fripe et qu’un peu de sirop brun perle et bulle sur le papier.",
          timer: { minutes: 55, label: "Patates douces au four" },
        },
        {
          title: "Laisser tiédir",
          text: "Sortez la plaque et laissez tiédir 10 minutes, le temps de pouvoir les tenir. Fendez-les en deux dans la longueur et videz la chair à la cuillère dans un saladier. La peau se détache seule ; jetez-la, ou grattez-en le sirop caramélisé pour l’ajouter à la purée.",
          timer: { minutes: 10, label: "Tiédir" },
        },
        {
          title: "Écraser",
          text: "Ajoutez le beurre en morceaux et le sel à la chair encore chaude. Écrasez à la fourchette pour une purée rustique, ou passez au mixeur plongeant 30 secondes pour une purée lisse et brillante. Le beurre doit avoir entièrement fondu et la purée doit tomber de la cuillère en ruban épais.",
          tip: "Ici, le mixeur ne fait pas de colle : la patate douce a perdu une grande partie de son amidon à la cuisson, il n’en reste pas assez pour devenir élastique.",
        },
        {
          title: "Goûter et ajuster",
          text: "Goûtez. Si la purée vous paraît fade ou trop sucrée, c’est souvent qu’il manque du sel. Ajoutez l’épice choisie, une petite pincée. Si elle est trop ferme pour vous, ce qui arrive avec de grosses patates douces très rôties, détendez-la avec le lait chaud, cuillerée par cuillerée.",
        },
        {
          title: "Servir",
          text: "Servez chaud, avec un tour de poivre et, si vous voulez, une noisette de beurre qui fond sur le dessus. Si elle a refroidi, réchauffez-la à feu doux dans une casserole en remuant, quelques minutes suffisent.",
        },
      ],
    },
  ],
  science: [
    {
      title: "L’amidon qui se change en sucre",
      text: "La patate douce contient une enzyme, la bêta-amylase, qui découpe l’amidon en maltose, un sucre. Elle travaille surtout autour de 70 °C, une fois l’amidon gonflé par la chaleur, et cesse quand la chair devient trop chaude. C’est pour cela qu’une patate douce cuite est bien plus sucrée qu’une crue.",
    },
    {
      title: "Four ou vapeur : la même patate, deux purées",
      text: "Au four, entière, la chair chauffe lentement et reste longtemps dans la zone où l’enzyme agit : elle produit plus de maltose. L’eau s’évapore et le jus caramélise. À la vapeur, en cubes, la chaleur arrive vite et humide : la purée est plus claire, plus douce en goût et plus mouillée.",
    },
    {
      title: "Pourquoi elle ne colle pas au mixeur",
      text: "Une purée de pommes de terre devient élastique quand les lames déchirent ses cellules gorgées d’amidon gonflé. Dans la patate douce cuite, une bonne partie de cet amidon a déjà été transformée en sucres solubles. Ces sucres rendent aussi la chair moelleuse, presque sirupeuse, ce qui explique qu’elle se passe de lait.",
    },
  ],
  tips: [
    "Choisissez des patates douces de taille égale, pour qu’elles soient prêtes en même temps. Une très grosse peut être coupée en deux dans la longueur, face coupée sur le papier.",
    "Ne les emballez pas dans du papier aluminium : elles cuiraient à l’étouffée, comme à la vapeur, sans caramélisation.",
    "Une seule épice à la fois, et une pincée : la muscade pour une volaille, le cumin pour l’agneau, le gingembre pour un poisson ou un canard.",
    "Le sel compte plus que dans une purée de pommes de terre : il équilibre le sucre naturel. Une pincée de fleur de sel au service fait ressortir le goût.",
  ],
  mistakes: [
    "Des patates douces pas assez cuites : la purée garde des fibres et des grumeaux fermes. Si le couteau résiste, remettez-les 10 minutes au four.",
    "Ajouter du lait d’office, comme pour une purée de pommes de terre : elle devient une soupe. Si c’est fait, faites-la sécher 3 à 5 minutes dans une casserole à feu doux, en remuant.",
    "Forcer sur les épices : la cannelle et le cumin couvrent vite le goût de la patate douce. Une pincée suffit pour 4.",
    "Oublier le sel : la purée paraît plate et écœurante, alors qu’il ne manque qu’une pincée.",
  ],
  variations: [
    {
      title: "À la vapeur, plus rapide",
      text: "Épluchez les patates douces, coupez-les en cubes de 3 cm et faites-les cuire 15 à 20 minutes à la vapeur. Laissez-les égoutter 2 minutes dans la passoire avant d’écraser. Pas de lait du tout : la purée est déjà plus mouillée et plus pâle.",
    },
    {
      title: "Huile d’olive et cumin",
      text: "Remplacez le beurre par 2 cuillères à soupe d’huile d’olive et ajoutez une demi-cuillère à café de cumin moulu. La purée devient végétalienne et accompagne très bien des côtelettes d’agneau ou des pois chiches rôtis.",
    },
    {
      title: "Gingembre et citron vert",
      text: "Ajoutez 1 cuillère à café de gingembre frais râpé et le zeste d’un demi-citron vert au moment d’écraser. Plus vive, elle va bien avec un poisson blanc ou un magret.",
    },
  ],
  storage:
    "3 jours au réfrigérateur dans une boîte fermée. Elle se congèle 3 mois sans perdre sa texture ; décongelez au réfrigérateur et réchauffez à feu doux avec une cuillerée d’eau, en remuant. Ne la recongelez pas.",
  pairing:
    "Un magret de canard, un poulet rôti, une côte de porc ou un poisson blanc au four. Elle aime les viandes un peu grasses et les jus courts.",
  faq: [
    {
      q: "Faut-il éplucher les patates douces pour faire une purée ?",
      a: "Non, au four. Elles cuisent entières dans leur peau, qui se retire toute seule une fois qu’elles sont cuites. À la vapeur ou à l’eau, en revanche, épluchez-les et coupez-les en cubes avant la cuisson.",
    },
    {
      q: "Combien de temps cuire des patates douces au four pour une purée ?",
      a: "45 à 60 minutes à 200 °C pour des patates douces de 250 à 300 g, entières et piquées. Elles sont prêtes quand un couteau entre sans résistance et qu’un peu de sirop brun perle à la surface.",
    },
    {
      q: "Peut-on mixer une purée de patate douce ?",
      a: "Oui, sans risque. Contrairement à la pomme de terre, elle ne devient pas collante : une grande partie de son amidon s’est transformée en sucres pendant la cuisson. 30 secondes au mixeur plongeant donnent une purée lisse et brillante.",
    },
    {
      q: "Faut-il mettre du lait dans une purée de patate douce ?",
      a: "Non, en général. La chair cuite est déjà moelleuse et la purée se tient avec le beurre seul. Si elle vous semble trop ferme, ajoutez du lait chaud par cuillerées, 5 cl au maximum pour 1 kg.",
    },
    {
      q: "Patate douce au four ou à la vapeur pour une purée ?",
      a: "Au four si vous avez le temps : 45 à 60 minutes, pour une purée plus sucrée et plus dense. À la vapeur si vous êtes pressé : 15 à 20 minutes en cubes, pour une purée plus claire, plus douce en goût et plus humide.",
    },
    {
      q: "Peut-on congeler la purée de patate douce ?",
      a: "Oui, jusqu’à 3 mois, dans une boîte fermée. Décongelez-la au réfrigérateur et réchauffez-la doucement avec une cuillerée d’eau. Ne la recongelez pas une fois décongelée.",
    },
  ],
  nutrition: {
    calories: 250,
    protein: 4,
    fat: 7,
    saturatedFat: 4,
    carbs: 44,
    sugar: 12,
    fiber: 7,
    sodium: 400,
  },
  annotations: { hero: "elle tombe de la cuillère, épaisse", detail: "un tour de poivre, pas plus" },
  images: {
    heroAlt:
      "Purée de patate douce orange vif dans un bol en grès sombre, une cuillère dorée plantée dedans et du poivre moulu",
    detailAlt: "Un bol de purée de patate douce avec une cuillère en bois sur une table de fête, entre d’autres plats",
    credits: {
      hero: { photographer: "kaboompics", url: "https://www.pexels.com/photo/close-up-of-a-cream-in-a-bowl-5718130/" },
      detail: { photographer: "kaboompics", url: "https://www.pexels.com/photo/close-up-of-meals-on-a-table-5718107/" },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#E07B1F",
    onAccent: "#1B1712",
    ink: "#9A4A0A",
    tint: "#FDF0E3",
    deep: "#1E1006",
    focus: "50% 55%",
  },
});
