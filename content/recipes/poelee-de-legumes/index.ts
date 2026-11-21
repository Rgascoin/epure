import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "poelee-de-legumes",
  title: "Poêlée de légumes",
  seoTitle: "Poêlée de légumes croquants, cuits dans le bon ordre",
  tagline: "Les plus durs passent en premier.",
  description:
    "Poêlée de légumes de saison : 800 g de légumes ajoutés du plus dur au plus tendre dans une poêle bien chaude, prêts en 40 minutes. Version hiver et été.",
  summary:
    "Pour 4 personnes, taillez 800 g de légumes à taille égale et faites-les cuire dans une grande poêle chaude, du plus dur au plus tendre : carottes et panais dorés 3 minutes puis étuvés 5 minutes avec un fond d’eau sous couvercle, brocoli 3 minutes à couvert, puis tout à découvert, et le poireau en dernier. Comptez 40 minutes, dont 20 de découpe. Une version d’été est donnée en variante.",
  intro: [
    "Une poêlée de légumes réussie, c’est une poêle où chaque légume est cuit juste : la carotte tendre mais pas molle, le brocoli encore vert vif, le poireau à peine fondu. Le tout doré par endroits et brillant d’un peu de beurre.",
    "Ce qui la fait rater, c’est de tout jeter dans la poêle en même temps. Les légumes n’ont pas la même dureté : quand les carottes sont enfin cuites, la courgette ou le brocoli sont déjà en bouillie. Et une poêle trop pleine cuit à la vapeur au lieu de dorer.",
    "La méthode tient en deux idées. On ajoute les légumes du plus dur au plus tendre, à quelques minutes d’intervalle. Et les plus durs ont droit à un fond d’eau et à un couvercle avant de finir à découvert. Elle marche avec à peu près tous les légumes, en hiver comme en été.",
  ],
  category: "Accompagnement",
  cuisine: "Française",
  diet: ["vegetarian", "glutenFree"],
  keywords: [
    "poêlée de légumes",
    "recette poêlée de légumes",
    "poêlée de légumes de saison",
    "légumes sautés à la poêle",
    "poêlée de légumes d’hiver",
    "poêlée de légumes d’été",
    "cuisson des légumes à la poêle",
    "poêlée de légumes croquants",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 20, cook: 20 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  tags: [],
  equipment: [
    "grande poêle ou sauteuse de 30 cm avec couvercle",
    "économe et couteau d’office",
    "planche à découper",
    "spatule en bois",
  ],
  ingredients: [
    {
      title: "Les légumes d’hiver",
      items: [
        { qty: 250, unit: "g", name: "carotte", plural: "carottes", note: "en rondelles de 5 mm, en biais", step: 10 },
        { qty: 150, unit: "g", name: "panais", note: "en rondelles de 5 mm", step: 10 },
        { qty: 250, unit: "g", name: "brocoli", note: "en bouquets de 3 cm, tige pelée et tranchée", step: 10 },
        { qty: 150, unit: "g", name: "poireau", note: "1 petit, en tronçons de 1 cm", step: 10 },
      ],
    },
    {
      title: "La cuisson",
      items: [
        { qty: 2, unit: "cas", name: "huile d’olive", step: 1 },
        { qty: 10, unit: "cl", name: "eau", note: "en deux fois", step: 5 },
        { qty: 15, unit: "g", name: "beurre", step: 5 },
        { qty: 1, unit: "gousse", name: "ail", note: "hachée", step: 1 },
        { qty: 1, unit: "cas", name: "persil plat", note: "ciselé", step: 1 },
        { name: "sel, poivre du moulin et fleur de sel" },
      ],
    },
  ],
  method: [
    {
      title: "La poêlée",
      steps: [
        {
          title: "Tailler à taille égale",
          text: "Pelez carottes et panais et taillez-les en rondelles de 5 mm, en biais. Détaillez le brocoli en bouquets de 3 cm et tranchez finement sa tige pelée. Coupez le poireau en tronçons de 1 cm, rincez-les et séchez tous les légumes. Gardez-les en tas séparés, dans l’ordre où ils iront dans la poêle.",
          tip: "Plus un légume est dur, plus on le taille fin. C’est ce qui permet à des légumes très différents de finir de cuire ensemble.",
        },
        {
          title: "Dorer les racines",
          text: "Chauffez l’huile à feu vif dans la grande poêle. Quand elle ondule, ajoutez carottes et panais en une seule couche, salez et laissez-les 3 minutes sans remuer, jusqu’à ce que le dessous soit bien doré.",
          timer: { minutes: 3, label: "Dorer les racines" },
        },
        {
          title: "Étuver à couvert",
          text: "Versez 5 cl d’eau, qui grésille aussitôt, couvrez et baissez à feu moyen. Laissez étuver 5 minutes : la pointe d’un couteau entre dans une rondelle de carotte avec encore une petite résistance.",
          timer: { minutes: 5, label: "Racines à couvert" },
          tip: "Le couvercle emprisonne la vapeur, qui attendrit le cœur des racines bien plus vite que la poêle seule.",
        },
        {
          title: "Ajouter le brocoli",
          text: "Ajoutez le brocoli et sa tige, versez les 5 cl d’eau restants et recouvrez 3 minutes. Le brocoli doit virer au vert vif, pas au kaki.",
          timer: { minutes: 3, label: "Brocoli à couvert" },
        },
        {
          title: "Finir à découvert",
          text: "Retirez le couvercle, remontez à feu vif et faites sauter 3 minutes, le temps que l’eau s’évapore et que les légumes reprennent des points dorés. Le fond de la poêle doit être sec et chanter de nouveau.",
          timer: { minutes: 3, label: "Évaporer l’eau" },
        },
        {
          title: "Ajouter le poireau",
          text: "Ajoutez le poireau et faites sauter 2 à 3 minutes, juste assez pour qu’il s’assouplisse en restant vert.",
          timer: { minutes: 3, label: "Poireau" },
        },
        {
          title: "Assaisonner et servir",
          text: "Hors du feu, ajoutez le beurre, l’ail et le persil et remuez 30 secondes : la chaleur de la poêle suffit à cuire l’ail sans le brûler. Goûtez, poivrez, ajoutez une pincée de fleur de sel et servez tout de suite.",
          tip: "L’ail arrive à la fin parce que, haché et à feu vif, il brûle en moins d’une minute et devient amer.",
        },
      ],
    },
  ],
  science: [
    {
      title: "D’abord la vapeur, ensuite la poêle",
      text: "Sous le couvercle, le fond d’eau se transforme en vapeur à 100 °C, qui transmet sa chaleur à tout le légume, cœur compris. Une fois le couvercle retiré, l’eau s’évapore, la surface dépasse de nouveau 100 °C et les sucres naturels des carottes et des panais peuvent dorer.",
    },
    {
      title: "Pourquoi une poêle trop pleine ne dore pas",
      text: "Chaque légume rend de l’eau en chauffant. En une seule couche, elle s’évapore aussitôt. Entassés, les légumes la gardent prisonnière : la poêle reste bloquée vers 100 °C, ils cuisent dans leur jus et ramollissent sans prendre de couleur.",
    },
    {
      title: "Le vert du brocoli",
      text: "Le vert vient de la chlorophylle. En cuisant, le légume libère des acides ; au bout de plusieurs minutes, surtout sous un couvercle qui les retient, ils transforment la chlorophylle en un pigment vert olive. Une étuvée courte, puis une fin à découvert, garde le brocoli vert vif.",
    },
  ],
  tips: [
    "La méthode vaut pour tous les légumes : classez-les du plus dur au plus tendre et ajoutez-les dans cet ordre, à 2 ou 5 minutes d’intervalle.",
    "Prenez la plus grande poêle que vous ayez. Si elle fait moins de 28 cm, faites deux poêlées plutôt qu’une.",
    "Séchez bien les légumes après les avoir lavés : l’eau en surface les empêche de dorer.",
    "Salez les racines dès le départ, mais goûtez à la fin avant de rajouter du sel : la réduction de l’eau concentre l’assaisonnement.",
  ],
  mistakes: [
    "Tout mettre dans la poêle en même temps : carottes croquantes et brocoli en bouillie. Respectez l’ordre de dureté.",
    "Remplir la poêle à ras bord : les légumes cuisent à la vapeur et grisaillent. Une seule couche, ou deux poêles.",
    "Garder le couvercle trop longtemps : le brocoli vire au kaki et tout ramollit. Le couvercle sert à attendrir le cœur, la fin se fait toujours à découvert.",
    "Verser trop d’eau : les légumes bouillent au lieu de dorer. 5 cl à la fois suffisent ; s’il en reste au fond, laissez-la s’évaporer avant d’ajouter le légume suivant.",
  ],
  variations: [
    {
      title: "Version d’été",
      text: "Faites dorer 200 g de haricots verts en tronçons de 4 cm et 150 g de carottes nouvelles en rondelles, 3 minutes, puis 5 minutes à couvert avec 5 cl d’eau. À découvert, ajoutez 200 g de poivron rouge en lanières de 1 cm pour 3 minutes, puis 250 g de courgettes en demi-rondelles de 1 cm pour 3 minutes. Basilic à la place du persil.",
    },
    {
      title: "Avec des champignons",
      text: "Ajoutez 200 g de champignons de Paris en quartiers juste après avoir retiré le couvercle, à feu vif : ils rendent leur eau puis dorent en 4 à 5 minutes.",
    },
    {
      title: "Sans beurre",
      text: "Pour une poêlée végétalienne, remplacez le beurre par 1 cuillerée à soupe d’huile d’olive ajoutée hors du feu, avec l’ail et le persil.",
    },
  ],
  storage:
    "Elle se garde 2 à 3 jours au réfrigérateur en boîte fermée. Réchauffez-la 3 à 4 minutes à feu vif dans une poêle chaude plutôt qu’au micro-ondes, pour qu’elle ne détrempe pas. La congélation ne lui réussit pas : les légumes ressortent mous.",
  pairing:
    "Elle accompagne un poulet rôti, une viande poêlée, un poisson blanc au four ou simplement deux œufs au plat. Avec un peu de fromage râpé et du pain, c’est un dîner léger.",
  faq: [
    {
      q: "Dans quel ordre cuire les légumes à la poêle ?",
      a: "Du plus dur au plus tendre : racines (carotte, panais, céleri) et haricots verts d’abord, puis brocoli, chou-fleur et poivron, ensuite courgette et champignons, enfin poireau, épinards et herbes. Espacez chaque ajout de 2 à 5 minutes, et taillez les plus durs plus fin.",
    },
    {
      q: "Faut-il blanchir les légumes avant de les poêler ?",
      a: "Non. Un fond d’eau de 5 cl et un couvercle pendant quelques minutes font le même travail dans la même poêle, sans casserole d’eau bouillante. L’eau s’évapore ensuite et les légumes dorent à découvert.",
    },
    {
      q: "Pourquoi mes légumes rendent-ils de l’eau dans la poêle ?",
      a: "Parce que la poêle est trop pleine ou pas assez chaude. Entassés, les légumes cuisent dans leur jus au lieu de dorer. Chauffez l’huile jusqu’à ce qu’elle ondule, étalez les légumes en une seule couche, et faites deux poêlées si nécessaire.",
    },
    {
      q: "Peut-on faire une poêlée avec des légumes surgelés ?",
      a: "Oui, sans les décongeler. Mettez-les directement dans la poêle chaude, à feu vif et sans eau puisqu’ils en rendent, et comptez 10 à 12 minutes en remuant souvent. Ils dorent moins que des légumes frais et restent plus tendres.",
    },
    {
      q: "Combien de légumes prévoir par personne ?",
      a: "200 g environ en accompagnement, soit 800 g pour 4. Comptez 300 g par personne si la poêlée fait le plat principal, avec des œufs, du fromage ou des légumineuses.",
    },
    {
      q: "Combien de temps se garde une poêlée de légumes ?",
      a: "2 à 3 jours au réfrigérateur, en boîte fermée. Réchauffez-la quelques minutes à feu vif dans une poêle chaude. Elle se congèle mal : les légumes ressortent mous.",
    },
  ],
  nutrition: { calories: 135, protein: 3, fat: 8, saturatedFat: 3, carbs: 12, sugar: 6, fiber: 6, sodium: 350 },
  annotations: { hero: "du plus dur au plus tendre", detail: "brocoli vert vif, pas kaki" },
  images: {
    heroAlt:
      "Poêlée de légumes dans une poêle noire : rondelles de carotte, pommes de terre, brocoli, haricots verts et poivron, spatule en bois",
    detailAlt: "Bouquets de brocoli et morceaux de carotte qui sautent dans une poêle, encore vert vif et orange",
    credits: {
      hero: {
        photographer: "Mateusz Feliksik",
        url: "https://www.pexels.com/photo/close-up-shot-of-delicious-cooked-vegetables-on-frying-pan-13376605/",
      },
      detail: {
        photographer: "Ravi Sharma",
        url: "https://www.pexels.com/photo/a-broccoli-and-carrots-on-the-frying-pan-7515373/",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#6DAE45",
    onAccent: "#1B1712",
    ink: "#3D6B22",
    tint: "#EEF5E6",
    deep: "#0F1A0A",
    focus: "45% 50%",
  },
});
