import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "porridge",
  title: "Porridge",
  seoTitle: "Porridge crémeux aux flocons d’avoine, prêt en 15 minutes",
  tagline: "Une pincée de sel, toujours.",
  description:
    "Porridge crémeux : 80 g de flocons d’avoine pour 40 cl de lait, une pincée de sel, 9 minutes de cuisson en remuant. Framboises, amandes et miel.",
  summary:
    "Pour 2 bols, versez 80 g de gros flocons d’avoine, 40 cl de lait et une pincée de sel dans une casserole froide, portez à frémissement en 4 minutes, puis laissez cuire 5 minutes en remuant, jusqu’à une texture crémeuse. Laissez reposer 1 minute hors du feu et garnissez de framboises, d’amandes, de graines de chia et de miel. Comptez 15 minutes en tout.",
  intro: [
    "Le porridge, ce sont des flocons d’avoine cuits doucement dans du lait jusqu’à former une crème épaisse. Une petite casserole, une cuillère en bois et un quart d’heure : c’est un petit déjeuner d’hiver qui se prépare à moitié réveillé, et un goûter qui cale jusqu’au dîner.",
    "Il rate de deux façons. Trop cuit ou pas assez mouillé, il tourne à la colle ; sans sel, il reste fade, même couvert de miel. Le bon rapport, c’est 5 fois le poids des flocons en liquide, plus une pincée de sel.",
    "Remuez souvent, surtout au fond, et arrêtez quand la cuillère laisse une trace qui se referme lentement. Une minute de repos hors du feu, et il a juste la bonne épaisseur.",
  ],
  category: "Goûter",
  cuisine: "Britannique",
  keywords: [
    "porridge",
    "recette porridge",
    "porridge flocons d’avoine",
    "porridge au lait",
    "porridge crémeux",
    "porridge à l’eau",
    "quantité de lait pour un porridge",
    "overnight oats",
    "petit déjeuner flocons d’avoine",
  ],
  diet: ["vegetarian"],
  servings: 2,
  servingsLabel: { one: "bol", other: "bols" },
  times: { prep: 5, cook: 9, rest: 1 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: ["petite casserole à fond épais de 1,5 l", "cuillère en bois", "balance"],
  ingredients: [
    {
      title: "Le porridge",
      items: [
        { qty: 80, unit: "g", name: "flocons d’avoine", note: "gros flocons, dits traditionnels", step: 10 },
        { qty: 40, unit: "cl", name: "lait", note: "entier, ou boisson végétale", step: 5 },
        { qty: 1, unit: "pincee", name: "sel fin", fixed: true },
      ],
    },
    {
      title: "Pour garnir",
      items: [
        { qty: 100, unit: "g", name: "framboise", plural: "framboises", note: "fraîches ou surgelées", step: 10 },
        { qty: 20, unit: "g", name: "amandes effilées", note: "fruits à coque", step: 5 },
        { qty: 2, unit: "cac", name: "graines de chia", step: 1 },
        { qty: 2, unit: "cac", name: "miel", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "Le porridge",
      steps: [
        {
          title: "Tout mettre à froid",
          text: "Versez les flocons d’avoine, le lait et le sel dans la casserole froide, et mélangez. Si vous avez le temps, laissez-les tremper pendant que vous préparez le café : ils s’imbibent et le porridge sera plus crémeux.",
          tip: "Pesez les flocons : à l’œil, on en met presque toujours trop, et le porridge devient compact.",
        },
        {
          title: "Porter à frémissement",
          text: "Chauffez à feu moyen en remuant de temps en temps, environ 4 minutes, jusqu’à ce que de petites bulles apparaissent sur les bords et que le lait commence à épaissir.",
          timer: { minutes: 4, label: "Frémissement" },
        },
        {
          title: "Cuire en remuant",
          text: "Baissez à feu doux et laissez cuire 5 minutes en remuant souvent, en raclant bien le fond. C’est prêt quand les flocons ont gonflé, sont tendres sous la dent, et que la cuillère laisse dans la casserole une trace qui se referme lentement. Trop épais, ajoutez 5 cl de lait.",
          timer: { minutes: 5, label: "Cuisson en remuant" },
          tip: "Avec des petits flocons, 2 minutes suffisent à ce stade : au-delà, ils tournent en bouillie.",
        },
        {
          title: "Laisser reposer",
          text: "Retirez du feu, couvrez et laissez reposer 1 minute : les flocons finissent de boire le liquide et le porridge prend sa texture, souple et crémeuse, sans couler.",
          timer: { minutes: 1, label: "Repos" },
        },
        {
          title: "Garnir et servir",
          text: "Répartissez dans deux bols. Posez les framboises, parsemez d’amandes effilées et de graines de chia, puis arrosez de miel. Servez tout de suite, le porridge épaissit en refroidissant.",
        },
      ],
    },
  ],
  science: [
    {
      title: "L’amidon fait la crème",
      text: "Les flocons d’avoine contiennent de l’amidon qui gonfle et se gélifie dans un liquide chaud. Une partie passe dans le lait, surtout quand on remue : c’est elle qui donne la texture crémeuse. Trop cuit, cet amidon épaissit tout jusqu’à la colle.",
    },
    {
      title: "Les bêta-glucanes",
      text: "L’avoine est riche en bêta-glucanes, des fibres solubles qui forment un gel visqueux dans l’eau chaude. Elles expliquent pourquoi le porridge continue d’épaissir dans le bol, et pourquoi il fige en refroidissant.",
    },
    {
      title: "Pourquoi le sel",
      text: "Une pincée de sel ne rend pas le porridge salé. Elle atténue l’impression de fadeur et fait ressortir le goût de céréale et la douceur du lait, comme dans une pâte à crêpes.",
    },
  ],
  tips: [
    "Gardez le rapport de 5 fois le poids des flocons en liquide, quel que soit le nombre de bols : 40 g et 20 cl par personne.",
    "Faites griller les flocons à sec 3 minutes dans la casserole, jusqu’à ce qu’ils sentent le biscuit, avant de verser le lait.",
    "Les amandes sont des fruits à coque : pour une personne allergique, remplacez-les par des graines de courge.",
    "Ajoutez les fruits frais et le miel au dernier moment. Cuits dans le porridge, les fruits rendent leur jus et le grisent.",
  ],
  mistakes: [
    "Oublier le sel : le porridge reste fade, même très sucré. Une pincée dans le bol rattrape une partie du goût.",
    "Cuire à feu vif sans remuer : le lait attache au fond et donne un goût de brûlé à tout le porridge. Transvasez sans racler et recommencez le feu doux.",
    "Le laisser trop cuire : il devient compact et collant. Détendez-le hors du feu avec 5 à 10 cl de lait chaud, en remuant.",
    "Mettre trop de flocons pour la quantité de lait : même cuit juste, il est épais comme un mortier. Pesez, ou ajoutez du lait jusqu’à retrouver une texture qui coule lentement de la cuillère.",
  ],
  variations: [
    {
      title: "Overnight oats",
      text: "Sans cuisson : dans un bocal, mélangez 80 g de flocons, 15 cl de lait et 125 g de yaourt nature, fermez et laissez au moins 8 h au réfrigérateur. Le matin, c’est épais et frais ; mangez-le tel quel ou réchauffé 2 minutes à la casserole. Il se garde 2 jours au frais.",
    },
    {
      title: "À l’eau ou au lait végétal",
      text: "Remplacez le lait par la même quantité d’eau : le porridge est plus léger, avec un goût d’avoine plus net. Avec une boisson végétale non sucrée et du sirop d’érable au lieu du miel, il devient végétalien.",
    },
    {
      title: "Pomme et cannelle",
      text: "Râpez 1 pomme directement dans la casserole avec les flocons, ajoutez 0,5 cac de cannelle et 5 cl de lait en plus. Même cuisson ; la pomme fond et sucre le porridge, le miel devient facultatif.",
    },
  ],
  storage:
    "Le porridge cuit se garde 2 jours au réfrigérateur, en boîte fermée, une fois refroidi en moins de 2 h. Il fige au froid : réchauffez-le à feu doux avec 5 à 10 cl de lait en remuant. Les overnight oats se gardent aussi 2 jours au frais. Garnissez toujours au moment de servir.",
  pairing: "Un café ou un thé noir le matin, un chocolat chaud au goûter.",
  faq: [
    {
      q: "Quelle quantité de lait pour un porridge ?",
      a: "5 fois le poids des flocons : 40 cl de liquide pour 80 g de flocons, soit 2 bols. Pour un porridge plus épais, descendez à 4 fois ; plus coulant, montez à 6 fois. Le lait se remplace par de l’eau ou une boisson végétale, en même quantité.",
    },
    {
      q: "Gros ou petits flocons d’avoine pour un porridge ?",
      a: "Les gros flocons cuisent en 5 minutes de frémissement et gardent un peu de mâche ; les petits cuisent en 2 minutes et donnent un porridge plus lisse, presque une bouillie. L’avoine concassée, plus rare, demande 20 à 30 minutes et plus de liquide.",
    },
    {
      q: "Peut-on faire un porridge à l’eau ?",
      a: "Oui. Il est plus léger et un peu moins crémeux, avec un goût d’avoine plus franc. Gardez la même quantité, 40 cl pour 80 g de flocons, et n’oubliez pas la pincée de sel, qui compte encore plus à l’eau. Moitié lait, moitié eau fonctionne très bien aussi.",
    },
    {
      q: "Le porridge est-il sans gluten ?",
      a: "Non, pas forcément. L’avoine contient l’avénine, une protéine proche du gluten que la plupart des personnes cœliaques tolèrent, mais les flocons ordinaires sont souvent contaminés par du blé pendant la culture ou la transformation. Si besoin, prenez des flocons garantis sans gluten.",
    },
    {
      q: "Peut-on préparer le porridge la veille ?",
      a: "Oui, de deux façons. Cuit, il se garde 2 jours au réfrigérateur et se réchauffe avec 5 à 10 cl de lait, en remuant, car il fige au froid. Ou bien préparez des overnight oats, qui trempent toute la nuit sans cuisson.",
    },
    {
      q: "Pourquoi mon porridge est-il collant ?",
      a: "Il a trop cuit ou manqué de liquide : l’amidon libéré épaissit tout. Détendez-le hors du feu avec 5 cl de lait chaud en remuant. Avec des petits flocons, arrêtez la cuisson dès 2 minutes.",
    },
  ],
  nutrition: { calories: 380, protein: 15, fat: 17, saturatedFat: 5.5, carbs: 42, sugar: 18, fiber: 10, sodium: 190 },
  annotations: { hero: "framboises surgelées, posées au dernier moment", detail: "amandes effilées : des fruits à coque" },
  images: {
    heroAlt:
      "Bol de porridge crémeux vu du dessus, garni de framboises givrées, d’une cuillerée de yaourt et de graines de chia.",
    detailAlt:
      "Porridge crémeux dans un bol beige, garni d’amandes effilées et de fruits rouges séchés, une cuillère dorée posée à côté.",
    credits: {
      hero: {
        photographer: "Anna Tukhfatullina Food Photographer/Stylist",
        url: "https://www.pexels.com/photo/porridge-with-fresh-raspberries-11532336/",
      },
      detail: {
        photographer: "Nadin Sh",
        url: "https://www.pexels.com/photo/cereal-with-nuts-and-raisins-17780268/",
      },
    },
  },
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  hero,
  detail,
  theme: {
    accent: "#C2264B",
    onAccent: "#FFFFFF",
    ink: "#9A1C3B",
    tint: "#FBEAEE",
    deep: "#1A0A0F",
    focus: "50% 45%",
  },
});
