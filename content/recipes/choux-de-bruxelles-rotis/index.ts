import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "choux-de-bruxelles-rotis",
  title: "Choux de Bruxelles rôtis",
  seoTitle: "Choux de Bruxelles rôtis au four, bien caramélisés",
  tagline: "Face coupée contre la plaque brûlante.",
  description:
    "Choux de Bruxelles rôtis pour 4 : 600 g coupés en deux, posés face coupée sur une plaque brûlante, 20 à 25 minutes à 220 °C. Bruns, croustillants, doux.",
  summary:
    "Pour 4 personnes en accompagnement, parez et coupez en deux 600 g de choux de Bruxelles, enrobez-les de 3 cas d’huile d’olive et de sel, puis posez-les face coupée sur une plaque préchauffée à 220 °C. Laissez rôtir 20 à 25 minutes sans y toucher, jusqu’à ce que la face coupée soit brun profond et le cœur tendre. Comptez 40 minutes en tout. Lardons, miel et balsamique, parmesan ou noisettes pour finir, au choix.",
  intro: [
    "Rôtis à four très chaud, les choux de Bruxelles changent de caractère. La face coupée devient brune et croustillante, presque sucrée, les feuilles extérieures se transforment en chips et le cœur reste tendre. L’amertume est toujours là, mais en arrière-plan.",
    "Ils ratent quand ils cuisent à la vapeur au lieu de rôtir : plaque trop chargée, four pas assez chaud, choux encore mouillés. Ils ressortent alors vert pâle et mous, avec cette odeur de chou trop cuit.",
    "Posez donc chaque moitié face coupée contre une plaque déjà brûlante, et n’y touchez plus pendant 20 minutes. C’est le contact avec le métal qui fait la croûte.",
  ],
  category: "Accompagnement",
  cuisine: "Française",
  keywords: [
    "choux de bruxelles rôtis",
    "choux de bruxelles au four",
    "recette choux de bruxelles",
    "choux de bruxelles caramélisés",
    "choux de bruxelles sans amertume",
    "cuisson choux de bruxelles au four",
    "choux de bruxelles lardons",
    "choux de bruxelles miel balsamique",
  ],
  diet: ["vegan", "glutenFree"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 15, cook: 25 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: [
    "grande plaque de four en métal, environ 40 × 30 cm",
    "grand saladier",
    "couteau d’office",
    "spatule fine",
  ],
  ingredients: [
    {
      items: [
        {
          qty: 600,
          unit: "g",
          name: "choux de Bruxelles",
          note: "fermes, bien verts et de taille égale",
          step: 50,
        },
        { qty: 3, unit: "cas", name: "huile d’olive", step: 1 },
        { qty: 0.5, unit: "cac", name: "sel fin", step: 0.25 },
        { qty: 4, unit: "tour", name: "poivre", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "Les choux rôtis",
      steps: [
        {
          title: "Chauffer four et plaque",
          text: "Glissez la plaque vide au milieu du four et préchauffez à 220 °C en chaleur statique, ou 210 °C en chaleur tournante, pendant 15 minutes. Préparez les choux pendant ce temps.",
          timer: { minutes: 15, label: "Préchauffage avec la plaque" },
        },
        {
          title: "Parer les choux",
          text: "Coupez à ras la base sèche de chaque chou et retirez les feuilles extérieures jaunies ou abîmées. Rincez-les, puis séchez-les soigneusement dans un torchon : un chou mouillé fume sur la plaque au lieu de dorer.",
        },
        {
          title: "Couper en deux",
          text: "Coupez-les en deux dans la hauteur, en passant par le pied, pour que les feuilles restent attachées. Les plus gros, au-delà de 4 cm, se coupent en quatre. Gardez les feuilles qui se détachent.",
        },
        {
          title: "Enrober d’huile",
          text: "Dans le saladier, mélangez les choux et les feuilles détachées avec l’huile d’olive, le sel et le poivre, en les retournant à la main jusqu’à ce que chaque face coupée brille.",
        },
        {
          title: "Poser face coupée",
          text: "Sortez la plaque brûlante avec des gants et versez-y les choux : ça doit grésiller. Retournez rapidement chaque moitié face coupée contre le métal, en les espaçant. Enfournez 20 minutes sans ouvrir la porte et sans remuer.",
          timer: { minutes: 20, label: "Rôtir sans toucher" },
          tip: "Tout le goût se fait là où le chou touche la plaque. Face bombée en dessous, il cuit, mais il ne caramélise pas.",
        },
        {
          title: "Vérifier la couleur",
          text: "Retournez un chou. La face coupée doit être brun profond, presque noire sur les bords, et la pointe d’un couteau doit traverser le cœur sans forcer. Si elle est encore blonde, remettez 5 minutes.",
          timer: { minutes: 5, label: "Rôtir encore" },
          tip: "Ne les retournez pas pour dorer l’autre côté. La face bombée se dessèche, et la face coupée, la meilleure, perd son croustillant.",
        },
        {
          title: "Décoller et servir",
          text: "Décollez-les à la spatule fine, avec les feuilles devenues croustillantes. Goûtez, ajoutez une pincée de sel si besoin et servez tout de suite, tels quels ou avec l’une des finitions proposées plus bas.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi le rôti adoucit l’amertume",
      text: "L’amertume des choux vient surtout des glucosinolates, des composés soufrés propres à la famille du chou. Le four ne les fait pas disparaître. Mais à plus de 200 °C, les sucres naturels du chou caramélisent et la réaction de Maillard produit des arômes grillés et de noisette, qui équilibrent cette amertume : en bouche, le chou paraît plus doux.",
    },
    {
      title: "Pourquoi le chou bouilli sent fort",
      text: "Dans l’eau bouillante, les composés soufrés du chou se décomposent peu à peu en molécules volatiles, dont le sulfure d’hydrogène, à l’odeur d’œuf pourri. Plus l’ébullition se prolonge, plus il s’en forme. C’est pour ça qu’un chou trop cuit embaume la maison, alors qu’un chou rôti sent le grillé.",
    },
    {
      title: "Plaque chaude, choux espacés",
      text: "Le chou de Bruxelles contient plus de 85 % d’eau. Sur une plaque froide ou trop chargée, cette eau s’évapore lentement et reste entre les choux : ils cuisent à la vapeur. Une plaque déjà brûlante saisit la face coupée dès le contact, et l’espace entre les morceaux laisse la vapeur s’échapper.",
    },
  ],
  tips: [
    "Choisissez des choux fermes et compacts, de la même taille, pour qu’ils soient cuits en même temps.",
    "Si la plaque ne suffit pas à espacer tous les choux, prenez-en deux et intervertissez-les à mi-cuisson.",
    "Les feuilles détachées cuisent plus vite que les moitiés. Rassemblez-les sur un coin de la plaque, elles deviennent des chips en 15 minutes.",
    "Une plaque en métal nu colore mieux qu’une plaque couverte de papier cuisson, qui isole un peu la face coupée.",
  ],
  mistakes: [
    "Une plaque surchargée : les choux se touchent, cuisent à la vapeur et restent pâles. Étalez-les sur deux plaques plutôt que de les serrer.",
    "Les remuer ou les retourner après 10 minutes : la croûte n’a pas eu le temps de se former et ils accrochent. Attendez les 20 minutes.",
    "Un four à 180 °C : les choux ramollissent avant de dorer et prennent un goût de chou bouilli. Il faut 210 à 220 °C.",
    "Enfourner des choux encore humides après le rinçage : l’eau se change en vapeur et empêche la coloration. Séchez-les dans un torchon.",
  ],
  variations: [
    {
      title: "Aux lardons",
      text: "Faites revenir 150 g de lardons fumés à sec dans une poêle, 5 à 6 minutes, jusqu’à ce qu’ils soient dorés. Égouttez-les et mélangez-les aux choux à la sortie du four. Salez moins au départ.",
    },
    {
      title: "Miel et balsamique",
      text: "Mélangez 1 cas de miel et 2 cas de vinaigre balsamique. Versez sur les choux à la sortie du four et remuez-les 1 minute sur la plaque chaude : la sauce devient sirupeuse et les nappe.",
    },
    {
      title: "Au parmesan",
      text: "Parsemez 40 g de parmesan finement râpé sur les choux et remettez la plaque 2 minutes au four, juste le temps qu’il fonde et grille par endroits.",
    },
    {
      title: "Aux noisettes grillées",
      text: "Faites griller 40 g de noisettes à sec dans une poêle, 4 à 5 minutes à feu moyen, jusqu’à ce qu’elles sentent bon. Concassez-les et parsemez-les sur les choux. Ce sont des fruits à coque, un allergène : prévenez vos invités.",
    },
  ],
  storage:
    "Ils se gardent 2 à 3 jours au frigo dans une boîte fermée, mais perdent leur croustillant. Réchauffez-les 8 minutes au four à 200 °C plutôt qu’au micro-ondes, qui les ramollit. Une fois rôtis, ils ne se congèlent pas bien.",
  pairing:
    "Un poulet rôti, un rôti de porc ou un magret de canard, et une purée de pommes de terre à côté.",
  faq: [
    {
      q: "Comment enlever l’amertume des choux de Bruxelles ?",
      a: "En les rôtissant à 220 °C, face coupée contre une plaque brûlante : la caramélisation équilibre l’amertume. Évitez les longues cuissons à l’eau, qui la renforcent. Un peu de sucré ou de gras à la fin, miel, lardons ou parmesan, aide aussi.",
    },
    {
      q: "Combien de temps cuire des choux de Bruxelles au four ?",
      a: "20 à 25 minutes à 220 °C, ou 210 °C en chaleur tournante, coupés en deux sur une plaque préchauffée. Ils sont prêts quand la face coupée est brun profond et qu’une pointe de couteau traverse le cœur sans forcer.",
    },
    {
      q: "Faut-il blanchir les choux de Bruxelles avant de les rôtir ?",
      a: "Non. Coupés en deux, ils cuisent à cœur en 20 à 25 minutes au four. Blanchis, ils se gorgent d’eau et colorent beaucoup moins bien ensuite.",
    },
    {
      q: "Pourquoi les choux de Bruxelles sentent-ils mauvais à la cuisson ?",
      a: "À cause des composés soufrés qu’ils libèrent quand on les fait bouillir trop longtemps. Rôtis au four, ils sentent le grillé et la noisette bien plus que le chou.",
    },
    {
      q: "Peut-on rôtir des choux de Bruxelles surgelés ?",
      a: "Oui, sans les décongeler. Étalez-les sur la plaque chaude avec l’huile et comptez 30 à 35 minutes à 220 °C. Ils colorent moins que des choux frais, car ils rendent plus d’eau.",
    },
    {
      q: "Quelle est la saison des choux de Bruxelles ?",
      a: "D’octobre à mars en France. C’est un légume d’hiver, qu’on trouve frais sur les marchés pendant toute la saison froide.",
    },
  ],
  nutrition: {
    calories: 120,
    protein: 5,
    fat: 8,
    saturatedFat: 1.2,
    carbs: 7,
    sugar: 3,
    fiber: 6,
    sodium: 320,
  },
  annotations: {
    hero: "face coupée, bien brune",
    detail: "les feuilles deviennent des chips",
  },
  images: {
    heroAlt:
      "Choux de Bruxelles rôtis coupés en deux dans une poêle en fonte, faces coupées dorées, avec une cuillère en bois",
    detailAlt:
      "Gros plan sur des choux de Bruxelles rôtis, feuilles extérieures grillées et brunies, cœur tendre et doré",
    credits: {
      hero: {
        photographer: "Sebastian Coman Photography",
        url: "https://www.pexels.com/photo/cooked-vegetable-on-pan-3510155/",
      },
      detail: {
        photographer: "Vegan Feast Catering",
        url: "https://commons.wikimedia.org/wiki/File:Roasted_Brussel_Sprouts_(4070526401).jpg",
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
    accent: "#6F9A36",
    onAccent: "#1B1712",
    ink: "#47661E",
    tint: "#F1F5E6",
    deep: "#0E1509",
    focus: "52% 62%",
  },
});
