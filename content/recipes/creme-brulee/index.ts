import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "creme-brulee",
  title: "Crème brûlée",
  seoTitle: "Crème brûlée à la vanille, cuite au bain-marie",
  tagline: "Une croûte fine qui casse net.",
  description:
    "La crème brûlée à la vanille : 6 jaunes, 50 cl de crème, une cuisson douce au bain-marie dans un four à 100 °C, puis un caramel fin passé au chalumeau.",
  summary:
    "Pour 6 ramequins de crème brûlée, infusez une gousse de vanille dans 50 cl de crème entière, versez-la sur 6 jaunes mélangés à 90 g de sucre, puis faites cuire 50 à 70 minutes au bain-marie dans un four à 100 °C, jusqu’à ce que le centre tremble encore. Après 4 heures au frais, saupoudrez 10 g de cassonade par crème et caramélisez au chalumeau.",
  intro: [
    "La crème brûlée, c’est une crème à la vanille juste prise, servie froide, sous une croûte de sucre caramélisé qu’on casse d’un coup de cuillère. Elle ne demande que quatre ingrédients : de la crème, des jaunes d’œufs, du sucre et de la vanille.",
    "Tout se joue à la cuisson. Dans un four à 100 °C et au bain-marie, la crème chauffe lentement et prend sans jamais bouillir : elle reste lisse, sans grains ni bulles. On la sort quand le centre tremble encore, et le froid finit le travail.",
    "Ce qui peut rater : une crème granuleuse si le four est trop chaud, liquide si elle n’a pas assez cuit, et un caramel mou si on le fait trop tôt. Comptez 25 minutes de préparation, environ 1 h 10 de cuisson et 4 h 30 de repos.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "crème brûlée",
    "recette crème brûlée",
    "crème brûlée vanille",
    "crème brûlée maison",
    "crème brûlée au four",
    "crème brûlée bain-marie",
    "crème brûlée sans chalumeau",
    "caraméliser une crème brûlée",
  ],
  diet: ["vegetarian", "glutenFree"],
  servings: 6,
  servingsLabel: { one: "ramequin", other: "ramequins" },
  times: { prep: 25, cook: 70, rest: 270 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Toute l’année"],
  equipment: [
    "6 ramequins de 9 à 10 cm de diamètre",
    "grand plat à bords hauts pour le bain-marie",
    "casserole",
    "fouet et passoire fine",
    "chalumeau de cuisine (sinon, le gril du four)",
    "thermomètre de cuisson (facultatif)",
  ],
  ingredients: [
    {
      title: "La crème",
      items: [
        { qty: 50, unit: "cl", name: "crème liquide entière", note: "30 % de matière grasse", step: 5 },
        { qty: 1, unit: "gousse", name: "vanille", note: "fendue et grattée", step: 1 },
        { qty: 6, name: "jaune d’œuf", plural: "jaunes d’œufs", note: "d’œufs moyens", step: 1 },
        { qty: 90, unit: "g", name: "sucre en poudre", step: 5 },
      ],
    },
    {
      title: "Le caramel",
      items: [{ qty: 60, unit: "g", name: "cassonade", note: "ou sucre roux en poudre", step: 5 }],
    },
  ],
  method: [
    {
      title: "La crème",
      steps: [
        {
          title: "Infuser la vanille",
          text: "Versez la crème dans une casserole et ajoutez la gousse de vanille fendue et ses graines. Portez juste à frémissement sur feu moyen, puis retirez du feu, couvrez et laissez infuser 15 minutes.",
          timer: { minutes: 15, label: "Infusion de la vanille" },
        },
        {
          title: "Préchauffer le four",
          text: "Allumez le four à 100 °C en chaleur statique (90 °C en chaleur tournante). Faites chauffer de l’eau à la bouilloire pour le bain-marie et posez les 6 ramequins dans le grand plat.",
        },
        {
          title: "Mélanger jaunes et sucre",
          text: "Dans un saladier, mélangez les 6 jaunes et 90 g de sucre au fouet, juste assez pour dissoudre le sucre. Ne fouettez pas énergiquement : on ne cherche pas à faire mousser.",
          tip: "Toute la mousse créée maintenant remontera à la surface des crèmes et cuira en une couche spongieuse.",
        },
        {
          title: "Ajouter la crème",
          text: "Retirez la gousse de vanille. Versez la crème chaude en filet sur les jaunes, en mélangeant doucement à la spatule. Filtrez le tout à travers une passoire fine, dans un pichet, puis retirez à la cuillère la mousse restée en surface.",
        },
        {
          title: "Remplir les ramequins",
          text: "Répartissez la crème dans les ramequins, sur environ 2 cm de hauteur. Versez l’eau chaude dans le grand plat jusqu’à mi-hauteur des ramequins, sans en faire tomber dedans.",
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Cuire au bain-marie",
          text: "Enfournez délicatement et laissez cuire 50 à 70 minutes, selon la profondeur des ramequins. Les crèmes sont prêtes quand les bords sont pris et que le centre tremble encore comme une gelée quand on secoue doucement le plat. Au thermomètre, le centre est à 80 °C.",
          timer: { minutes: 60, label: "Cuisson au bain-marie" },
          tip: "Vérifiez dès 45 minutes. Une crème trop cuite se creuse de petites bulles et devient granuleuse, et on ne peut pas revenir en arrière.",
        },
        {
          title: "Refroidir puis réserver",
          text: "Sortez les ramequins du bain-marie et laissez-les tiédir 30 minutes sur une grille. Filmez-les et mettez-les au moins 4 heures au réfrigérateur : la crème finit de prendre en refroidissant.",
          timer: { minutes: 240, label: "Prise au réfrigérateur" },
        },
      ],
    },
    {
      title: "Le caramel",
      steps: [
        {
          title: "Saupoudrer le sucre",
          text: "Au moment de servir, épongez délicatement la surface des crèmes avec du papier absorbant si de la condensation s’y est formée. Saupoudrez chacune de 5 g de cassonade, en couche fine, et inclinez le ramequin en le tapotant pour l’étaler jusqu’aux bords.",
        },
        {
          title: "Caraméliser au chalumeau",
          text: "Passez la flamme du chalumeau à 5 cm du sucre, en petits cercles, jusqu’à ce qu’il fonde, bouillonne et prenne une couleur ambre foncé. Ajoutez les 5 g de cassonade restants et recommencez. Laissez le caramel durcir quelques instants, puis servez aussitôt.",
          tip: "Deux couches fines valent mieux qu’une épaisse : le caramel est plus régulier et casse net sous la cuillère, sans grains de sucre cru.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi un four si doux",
      text: "Les protéines du jaune commencent à épaissir la crème vers 70 °C et la prennent vers 80 °C. Au-delà de 85 °C, elles se resserrent trop, chassent l’eau, et la crème devient granuleuse. Dans un four à 100 °C, l’eau du bain-marie ne bout pas : la crème monte lentement en température, avec une bonne marge.",
    },
    {
      title: "La cuisson continue hors du four",
      text: "À la sortie du four, la chaleur accumulée dans les ramequins continue de cuire la crème quelques minutes, puis le froid la raffermit. D’où la règle : on la sort quand le centre tremble, jamais quand il est ferme.",
    },
    {
      title: "Un caramel rapide et brûlant",
      text: "Le sucre ne caramélise qu’au-delà de 160 °C environ. Il faut donc une chaleur intense et brève, qui fait fondre et colorer le dessus avant que la crème en dessous ait le temps de chauffer. C’est le rôle du chalumeau, et la raison pour laquelle la crème doit sortir bien froide du réfrigérateur.",
    },
  ],
  tips: [
    "Préparez les crèmes la veille : elles seront bien froides, et il ne restera que le caramel à faire au moment du dessert.",
    "Des ramequins larges et peu profonds donnent plus de caramel par cuillerée et une cuisson plus régulière.",
    "Gardez les 6 blancs : ils se congèlent très bien en boîte fermée, et montent en neige normalement une fois décongelés.",
    "Rincez et séchez la gousse de vanille, puis glissez-la dans un bocal de sucre : il sera parfumé en quelques jours.",
  ],
  mistakes: [
    "Fouetter les jaunes jusqu’à ce qu’ils moussent : une couche de mousse cuit en surface et le caramel accroche mal.",
    "Cuire trop chaud ou trop longtemps : la crème se creuse de petits trous et devient granuleuse.",
    "Attendre que le centre soit ferme pour sortir les crèmes : elles continuent de cuire et seront trop prises.",
    "Caraméliser des crèmes tièdes, ou trop longtemps avant de servir : le caramel ramollit et colle aux dents.",
    "Verser une couche de sucre trop épaisse : le dessus brûle pendant que le dessous reste en grains.",
  ],
  variations: [
    {
      title: "Au café",
      text: "Remplacez la vanille par 20 g de grains de café concassés au rouleau. Laissez-les infuser 15 minutes dans la crème chaude, puis filtrez avant de verser sur les jaunes.",
    },
    {
      title: "À la lavande ou au thé",
      text: "Infusez 1 cuillerée à café de fleurs de lavande séchées, ou 2 cuillerées à café de thé noir, 10 minutes seulement : au-delà, l’infusion devient amère. Filtrez soigneusement.",
    },
    {
      title: "Plus légère",
      text: "Remplacez 20 cl de crème par 20 cl de lait entier. La crème est un peu moins onctueuse et prend plus vite : vérifiez la cuisson dès 40 minutes.",
    },
  ],
  storage:
    "Sans leur caramel, les crèmes se gardent 2 jours au réfrigérateur, filmées. Caramélisez-les au dernier moment : une fois brûlées, elles se mangent dans l’heure, sinon le caramel ramollit.",
  pairing: "Un sauternes ou un jurançon moelleux bien frais, ou un café serré.",
  faq: [
    {
      q: "Comment caraméliser une crème brûlée sans chalumeau ?",
      a: "Sous le gril du four, réglé au maximum et bien préchauffé, avec les ramequins au plus près de la résistance. Comptez 2 à 4 minutes en surveillant sans arrêt. La crème chauffe davantage qu’au chalumeau : sortez-la du réfrigérateur au dernier moment et remettez-la 10 minutes au frais ensuite.",
    },
    {
      q: "Pourquoi ma crème brûlée est restée liquide ?",
      a: "Elle n’a pas assez cuit ou pas assez refroidi. À la sortie du four, le centre doit trembler comme une gelée, pas onduler comme un liquide ; sinon, prolongez la cuisson de 10 minutes. Il lui faut ensuite au moins 4 heures au réfrigérateur pour se raffermir.",
    },
    {
      q: "Pourquoi ma crème brûlée a des trous ou des grains ?",
      a: "Elle a trop chauffé. Au-delà de 85 °C environ, les jaunes coagulent trop et rejettent de l’eau, ce qui forme des bulles et une texture granuleuse. Baissez le four, n’oubliez pas le bain-marie, et sortez les crèmes quand le centre tremble encore.",
    },
    {
      q: "Quelle est la différence entre crème brûlée et crème catalane ?",
      a: "La crème catalane se cuit à la casserole, avec du lait, des jaunes et de la fécule, et se parfume au citron et à la cannelle. La crème brûlée est faite avec de la crème et cuite au four. Les deux finissent sous une couche de sucre caramélisé.",
    },
    {
      q: "Peut-on préparer des crèmes brûlées la veille ?",
      a: "Oui, c’est même conseillé. Cuites et refroidies, elles se gardent 2 jours au réfrigérateur, filmées. Ne caramélisez qu’au moment de servir : au contact de la crème froide, le caramel ramollit en quelques heures.",
    },
    {
      q: "Quel sucre utiliser pour caraméliser une crème brûlée ?",
      a: "De la cassonade ou du sucre roux en poudre : il fond vite et prend une belle couleur ambrée. Le sucre blanc en poudre fonctionne aussi, avec un caramel plus clair. Dans tous les cas, en couche fine.",
    },
  ],
  nutrition: {
    calories: 400,
    protein: 5,
    fat: 30,
    saturatedFat: 18.5,
    carbs: 28,
    sugar: 27,
    fiber: 0,
    sodium: 40,
  },
  annotations: {
    hero: "le centre tremble, c’est cuit",
    detail: "deux couches fines de sucre",
  },
  images: {
    heroAlt: "Crème brûlée dans un ramequin blanc cannelé, caramel ambré et fruits rouges, sur une assiette en grès",
    detailAlt: "Chalumeau de cuisine caramélisant le sucre d’une crème brûlée dans un plat à anses",
    credits: {
      hero: { photographer: "Pexels", url: "https://www.pexels.com/photo/39440905/" },
      detail: { photographer: "Pexels", url: "https://www.pexels.com/photo/36295521/" },
    },
  },
  datePublished: "2026-11-06",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#B35A16",
    onAccent: "#ffffff",
    ink: "#8E4A10",
    tint: "#FAF0E3",
    deep: "#1A120B",
    focus: "50% 45%",
  },
});
