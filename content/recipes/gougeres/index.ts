import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "gougeres",
  title: "Gougères au comté",
  seoTitle: "Gougères au comté : la pâte à choux pas à pas",
  tagline: "Le fromage dans la pâte, et dessus.",
  description:
    "Des gougères au comté pour l’apéritif : une pâte à choux au lait et au beurre, 60 g de fromage, 25 minutes à 200 °C. Elles se congèlent crues.",
  summary:
    "Pour 4 personnes (environ 20 gougères), préparez une pâte à choux avec 12 cl d’eau et de lait, 50 g de beurre, 75 g de farine et 2 œufs, puis ajoutez 50 g de comté râpé. Dressez des boules de 3 cm, parsemez des 10 g de fromage restants et faites cuire 22 à 25 minutes à 200 °C sans ouvrir le four. Elles se congèlent crues. Comptez 1 h 05 en tout.",
  intro: [
    "Une gougère, c’est un petit chou salé : de la pâte à choux dans laquelle on a mélangé du comté ou du gruyère râpé. Elle sort du four gonflée, creuse, avec une croûte qui craque et un goût de fromage grillé. C’est une spécialité de Bourgogne, où on la sert volontiers avec un verre de vin.",
    "La pâte à choux a une réputation pire qu’elle ne le mérite. Elle demande deux choses : bien dessécher la panade sur le feu, puis ajouter les œufs peu à peu en regardant la texture plutôt que la liste. Ensuite, on laisse la porte du four tranquille.",
    "Pour les fêtes, elles ont un autre avantage : elles se congèlent crues, dressées sur la plaque, et passent directement du congélateur au four.",
  ],
  category: "Entrée",
  cuisine: "Française",
  keywords: [
    "gougères",
    "recette gougères",
    "gougères au comté",
    "gougères au gruyère",
    "gougères apéritif",
    "pâte à choux salée",
    "congeler des gougères crues",
    "gougères bourguignonnes",
  ],
  diet: ["vegetarian"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 30, cook: 35 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Toute l’année"],
  tags: ["noel", "nouvel-an", "apero"],
  equipment: [
    "casserole à fond épais de 1,5 l",
    "spatule en bois",
    "poche à douille unie de 10 à 12 mm",
    "plaque de cuisson et papier cuisson",
    "râpe fine",
  ],
  ingredients: [
    {
      title: "Le fromage",
      items: [{ qty: 60, unit: "g", name: "comté", note: "affiné environ 12 mois, ou gruyère, râpé finement", step: 10 }],
    },
    {
      title: "La pâte à choux",
      items: [
        { qty: 6, unit: "cl", name: "eau", step: 1 },
        { qty: 6, unit: "cl", name: "lait entier", note: "plus 1 cuillère à soupe pour dorer", step: 1 },
        { qty: 50, unit: "g", name: "beurre", note: "en dés", step: 5 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 75, unit: "g", name: "farine", note: "type 55, tamisée", step: 5 },
        { qty: 2, name: "œuf", plural: "œufs", note: "gros, battus en omelette", step: 1 },
        { name: "poivre", note: "du moulin" },
        { qty: 1, unit: "pincee", name: "noix de muscade râpée", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "La pâte à choux",
      steps: [
        {
          title: "Préchauffer et râper",
          text: "Préchauffez le four à 200 °C, chaleur statique, et tapissez la plaque de papier cuisson. Râpez finement le comté et mettez-en 10 g de côté pour le dessus.",
        },
        {
          title: "Faire bouillir le liquide",
          text: "Dans la casserole, mettez l’eau, le lait, le beurre en dés et le sel. Chauffez à feu moyen jusqu’à ce que le beurre soit entièrement fondu et que le mélange bouille à gros bouillons.",
          tip: "Le beurre doit être fondu avant l’ébullition : coupé en petits dés, il fond à temps et le liquide ne s’évapore pas trop.",
        },
        {
          title: "Ajouter la farine",
          text: "Retirez du feu et versez toute la farine d’un coup. Mélangez vigoureusement à la spatule en bois jusqu’à obtenir une pâte lisse et homogène, qui forme une boule.",
        },
        {
          title: "Dessécher la panade",
          text: "Remettez sur feu moyen et remuez sans arrêt 2 minutes, en écrasant la pâte contre les parois. Elle est prête quand elle se détache en boule et qu’un fin voile se forme au fond de la casserole.",
          timer: { minutes: 2, label: "Dessécher la panade" },
          tip: "Ce voile au fond de la casserole est le signe que l’eau en trop est partie : la pâte pourra absorber les œufs.",
        },
        {
          title: "Laisser tiédir",
          text: "Transférez la panade dans un saladier et étalez-la avec la spatule. Laissez-la tiédir 5 minutes, pour que les œufs ne cuisent pas à son contact.",
          timer: { minutes: 5, label: "Panade qui tiédit" },
        },
        {
          title: "Incorporer les œufs",
          text: "Versez les œufs battus en quatre fois, en battant énergiquement à la spatule jusqu’à ce que chaque ajout soit absorbé. La pâte est prête quand elle est lisse, brillante, et tombe de la spatule en formant un V épais. Il peut rester un peu d’œuf : n’insistez pas.",
          tip: "Tracez un sillon au doigt dans la pâte : s’il se referme lentement, la consistance est bonne.",
        },
        {
          title: "Ajouter le fromage",
          text: "Incorporez 50 g de comté râpé, deux tours de moulin à poivre et la muscade. Mélangez juste ce qu’il faut pour répartir le fromage.",
        },
      ],
    },
    {
      title: "Dressage et cuisson",
      steps: [
        {
          title: "Dresser les gougères",
          text: "Remplissez la poche à douille et dressez des boules de 3 cm de diamètre sur la plaque, en laissant 3 cm entre elles. Badigeonnez-les d’un peu de lait au pinceau, aplatissez la pointe avec le dos d’une fourchette mouillée et parsemez du comté gardé de côté.",
        },
        {
          title: "Cuire sans ouvrir",
          text: "Enfournez la plaque au milieu du four et faites cuire 22 à 25 minutes, sans ouvrir la porte pendant les 15 premières. Elles sont cuites quand elles sont bien gonflées, dorées jusque dans les creux, et légères dans la main.",
          timer: { minutes: 25, label: "Cuisson des gougères" },
          tip: "Une gougère pâle dans les plis n’est pas cuite : elle retombera en refroidissant. Mieux vaut 2 minutes de trop.",
        },
        {
          title: "Sécher dans le four",
          text: "Éteignez le four, entrouvrez la porte en la calant avec une cuillère en bois et laissez les gougères 5 minutes : la croûte se raffermit. Servez tiède.",
          timer: { minutes: 5, label: "Gougères qui sèchent" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi elles gonflent",
      text: "La pâte contient beaucoup d’eau, apportée par le lait, l’eau et les œufs. Au four, cette eau se transforme en vapeur et pousse la pâte de l’intérieur. Les protéines de l’œuf et l’amidon gélifié lui donnent assez d’élasticité pour se dilater sans se déchirer, puis figent en croûte autour d’une cavité creuse.",
    },
    {
      title: "À quoi sert le desséchage",
      text: "Remuer la panade sur le feu chasse une partie de son eau et achève de gélifier l’amidon de la farine. Plus sèche, elle accepte davantage d’œufs, et ce sont eux qui donnent la vapeur et la structure qui font gonfler la gougère.",
    },
    {
      title: "Pourquoi ne pas ouvrir le four",
      text: "Tant que la croûte n’a pas figé, la gougère ne tient que par la pression de la vapeur. Une bouffée d’air froid fait chuter cette pression et elle s’affaisse. Après une quinzaine de minutes, les parois sont rigides et elle ne bouge plus.",
    },
  ],
  tips: [
    "Râpez le fromage finement : il se répartit dans la pâte sans l’alourdir, et les gougères gonflent plus régulièrement.",
    "Le lait colore la croûte plus vite que l’eau seule, grâce à ses sucres et à ses protéines. Avec de l’eau uniquement, elles sont plus pâles mais plus croustillantes.",
    "Pour dresser, tenez la poche bien verticale, à 1 cm de la plaque, et terminez chaque boule d’un petit mouvement de côté.",
    "Pour 8 personnes, doublez les quantités et faites cuire les deux plaques l’une après l’autre, au milieu du four : à deux étages, celle du bas cuit mal et les gougères gonflent inégalement.",
    "Pour congeler, dressez-les sans les dorer, puis passez la plaque 2 heures au congélateur avant de les mettre en sac.",
  ],
  mistakes: [
    "Verser tous les œufs d’un coup : la pâte devient trop liquide et les gougères s’étalent au lieu de monter. Elle ne se rattrape pas ; ajoutez toujours l’œuf en plusieurs fois.",
    "Sauter le desséchage : la pâte reste collante, refuse les œufs et gonfle peu.",
    "Ouvrir le four pendant les 15 premières minutes : elles retombent et ne remontent plus.",
    "Les sortir trop tôt, encore blondes : elles s’affaissent en refroidissant et l’intérieur reste humide. Attendez une couleur dorée franche, même dans les plis.",
  ],
  variations: [
    {
      title: "En couronne, à la bourguignonne",
      text: "Dressez toute la pâte en couronne de boules qui se touchent, sur un cercle de 18 cm de diamètre, dorez au lait et parsemez de fromage. Faites cuire 30 à 35 minutes à 190 °C, sans ouvrir le four pendant les 20 premières, et servez-la à partager.",
    },
    {
      title: "Au jambon cru",
      text: "Ajoutez 30 g de jambon cru haché très finement avec le fromage et supprimez le sel. Le jambon dore légèrement à la cuisson.",
    },
    {
      title: "Au comté et aux noix",
      text: "Incorporez 25 g de cerneaux de noix hachés grossièrement avec le fromage. Attention, la recette contient alors des fruits à coque : prévenez vos invités.",
    },
  ],
  storage:
    "Cuites, elles se gardent 2 jours dans une boîte hermétique et se raniment 5 minutes au four à 180 °C. Crues et dressées, elles se gardent 2 mois au congélateur et se cuisent sans décongélation ; ne recongelez jamais des gougères décongelées.",
  pairing:
    "Un verre de bourgogne blanc, chablis ou aligoté, ou un kir. Avec un crémant de Bourgogne pour les fêtes.",
  faq: [
    {
      q: "Peut-on congeler les gougères crues ?",
      a: "Oui, c’est la meilleure façon de les préparer à l’avance. Dressez-les sur une plaque, congelez-les 2 heures jusqu’à ce qu’elles soient dures, puis mettez-les en sac. Elles se gardent 2 mois. Enfournez-les encore congelées, dorées au lait, à 200 °C et comptez 5 minutes de cuisson en plus.",
    },
    {
      q: "Pourquoi mes gougères retombent-elles à la sortie du four ?",
      a: "Le plus souvent, elles ne sont pas assez cuites : leur croûte n’est pas assez rigide pour tenir sans la vapeur. Laissez-les jusqu’à ce qu’elles soient dorées dans les creux, puis 5 minutes dans le four éteint, porte entrouverte. Une porte ouverte trop tôt ou une pâte trop riche en œufs donnent le même résultat.",
    },
    {
      q: "Quel fromage choisir pour les gougères ?",
      a: "Un fromage à pâte pressée cuite qui a du goût : comté d’environ 12 mois, gruyère ou beaufort. L’emmental fonctionne mais manque de caractère. Évitez les fromages trop gras ou trop humides, qui alourdissent la pâte.",
    },
    {
      q: "Comment savoir si la pâte à choux a assez d’œufs ?",
      a: "Quand elle tombe de la spatule en formant un V épais et qu’un sillon tracé au doigt se referme lentement. Trop ferme, elle gonfle peu et se fendille ; trop molle, elle s’étale. Les œufs varient en taille : ajoutez le dernier petit à petit.",
    },
    {
      q: "Peut-on préparer les gougères la veille ?",
      a: "Oui. Cuites la veille, gardez-les dans une boîte hermétique et passez-les 5 minutes au four à 180 °C avant de servir, elles retrouvent leur croustillant. Pour un résultat de sortie du four, mieux vaut les congeler crues et les cuire au dernier moment.",
    },
    {
      q: "Combien de gougères prévoir par personne ?",
      a: "5 à l’apéritif, s’il y a d’autres bouchées à côté. Cette recette en donne une vingtaine, pour 4 personnes ; doublez-la pour 8.",
    },
  ],
  nutrition: {
    calories: 265,
    protein: 10,
    fat: 19,
    saturatedFat: 11,
    carbs: 14,
    sugar: 1,
    fiber: 0.5,
    sodium: 170,
  },
  annotations: { hero: "dorées jusque dans les plis", detail: "le four fermé, au moins 15 minutes" },
  images: {
    heroAlt:
      "Gougères au fromage bien dorées, empilées dans une corbeille garnie d’un torchon rayé, posée sur un plateau en argent",
    detailAlt: "Gros plan sur un tas de gougères au fromage bien dorées, à la croûte légèrement craquelée",
    credits: {
      hero: {
        photographer: "Luigi Anzivino",
        url: "https://commons.wikimedia.org/w/index.php?curid=1024520",
        source: "Wikimedia Commons",
        license: "CC BY-SA 2.0",
      },
      detail: {
        photographer: "Jules Morgan from Montreal, Canada",
        url: "https://commons.wikimedia.org/wiki/File:Goug%C3%A8res_(6253065360).jpg",
        source: "Wikimedia Commons",
        license: "CC BY 2.0",
      },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#C9772B",
    onAccent: "#1B1712",
    ink: "#8F4A12",
    tint: "#F8EBDD",
    deep: "#1C1008",
    focus: "52% 40%",
  },
});
