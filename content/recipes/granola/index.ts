import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "granola",
  title: "Granola maison",
  seoTitle: "Granola maison en grosses grappes, cuit à four doux",
  tagline: "Tassé, cuit, puis on n’y touche plus.",
  description:
    "Granola maison en grappes : 300 g de flocons d’avoine, amandes, noisettes et graines, miel et huile, tassés sur la plaque et cuits 35 minutes à 150 °C.",
  summary:
    "Pour 15 portions de 50 g, mélangez 300 g de flocons d’avoine, 150 g d’amandes et de noisettes, 80 g de graines et une pincée de sel avec 100 g de miel et 60 ml d’huile tiédis. Tassez le tout sur une plaque et faites cuire 35 minutes à 150 °C sans remuer. Laissez refroidir 45 minutes avant de casser en grappes, puis ajoutez 100 g de fruits secs. Comptez 1 h 35 en tout.",
  intro: [
    "Un granola, ce sont des flocons d’avoine, des fruits à coque et des graines enrobés de miel et d’huile, puis dorés au four. Fait maison, il est moins sucré que la plupart de ceux du commerce, et on y met ce qu’on aime.",
    "Ce qu’on cherche, ce sont les grappes, ces gros morceaux qui craquent. Elles se forment quand on tasse le mélange sur la plaque et qu’on n’y touche plus : ni pendant la cuisson, ni pendant le refroidissement. Le miel durcit en refroidissant et soude les flocons entre eux.",
    "Les fruits secs n’arrivent qu’à la fin. Au four, ils sèchent et brûlent.",
  ],
  category: "Goûter",
  cuisine: "Américaine",
  keywords: [
    "granola maison",
    "recette granola",
    "granola maison croustillant",
    "granola en grappes",
    "granola au miel",
    "granola sans fruits à coque",
    "granola au four",
    "comment faire du granola",
  ],
  diet: ["vegetarian"],
  servings: 15,
  servingsLabel: { one: "portion", other: "portions" },
  times: { prep: 15, cook: 35, rest: 45 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  tags: [],
  equipment: [
    "plaque à pâtisserie de 30 × 40 cm",
    "papier cuisson",
    "grand saladier",
    "spatule",
    "bocal hermétique de 1 l",
  ],
  ingredients: [
    {
      title: "Le mélange sec",
      items: [
        { qty: 300, unit: "g", name: "flocons d’avoine", note: "gros flocons", step: 10 },
        { qty: 100, unit: "g", name: "amandes", note: "entières, concassées grossièrement", step: 10 },
        { qty: 50, unit: "g", name: "noisettes", note: "concassées grossièrement", step: 10 },
        { qty: 50, unit: "g", name: "graines de courge", step: 10 },
        { qty: 30, unit: "g", name: "graines de tournesol", step: 10 },
        { qty: 1, unit: "cac", name: "cannelle en poudre" },
        { qty: 0.5, unit: "cac", name: "sel fin", fixed: true },
      ],
    },
    {
      title: "Le liant",
      items: [
        { qty: 100, unit: "g", name: "miel liquide", note: "ou sirop d’érable", step: 10 },
        { qty: 60, unit: "ml", name: "huile de colza", note: "ou de tournesol", step: 10 },
      ],
    },
    {
      title: "Après cuisson",
      items: [{ qty: 100, unit: "g", name: "fruits secs", note: "raisins, cranberries ou abricots coupés", step: 10 }],
    },
  ],
  method: [
    {
      title: "Granola maison",
      steps: [
        {
          title: "Préparer four et plaque",
          text: "Préchauffez le four à 150 °C en chaleur statique et couvrez la plaque de papier cuisson. Concassez les amandes et les noisettes au couteau, en gros morceaux : des moitiés ou des tiers, pas de la poudre.",
        },
        {
          title: "Mélanger les ingrédients secs",
          text: "Dans le grand saladier, mélangez les flocons d’avoine, les amandes, les noisettes, les graines de courge et de tournesol, la cannelle et le sel.",
        },
        {
          title: "Enrober de miel",
          text: "Faites tiédir le miel et l’huile dans une petite casserole à feu doux, juste assez pour que le miel devienne fluide. Versez sur le mélange sec et remuez à la spatule jusqu’à ce que tous les flocons brillent, sans aucune zone sèche au fond du saladier.",
        },
        {
          title: "Tasser sur la plaque",
          text: "Étalez le mélange sur la plaque en une couche régulière d’environ 1 cm, puis tassez-le fermement avec le dos de la spatule, partout, jusqu’à ce qu’il forme une seule plaque compacte.",
          tip: "Plus vous tassez, plus les grappes seront grosses : appuyez vraiment.",
        },
        {
          title: "Cuire sans remuer",
          text: "Enfournez pour 20 minutes, sans ouvrir la porte.",
          timer: { minutes: 20, label: "Première cuisson" },
        },
        {
          title: "Tourner la plaque",
          text: "Tournez la plaque d’un demi-tour, sans toucher au granola, et poursuivez 15 à 20 minutes. Il est prêt quand il est doré de partout et que la cuisine sent la noisette grillée. Le centre paraît encore un peu mou : il durcira en refroidissant.",
          timer: { minutes: 15, label: "Seconde cuisson" },
          tip: "Surveillez les 5 dernières minutes : le miel passe vite du doré au brûlé sur les bords.",
        },
        {
          title: "Laisser refroidir",
          text: "Posez la plaque sur une grille et laissez le granola refroidir au moins 45 minutes, sans y toucher, jusqu’à ce qu’il soit complètement froid et dur au toucher.",
          timer: { minutes: 45, label: "Refroidissement" },
          tip: "Cassé tiède, il s’effrite : le miel n’a pas encore durci.",
        },
        {
          title: "Casser et ajouter les fruits",
          text: "Cassez la plaque à la main en grappes de la taille qui vous plaît. Ajoutez les fruits secs, mélangez délicatement et versez dans le bocal.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Comment se forment les grappes",
      text: "Le miel est un sirop de sucres. Au four, il perd son eau et devient plus concentré ; en refroidissant, il durcit et colle les flocons là où ils se touchent. Tasser le mélange multiplie ces points de contact. Remuer pendant la cuisson ou casser à chaud les rompt avant qu’ils aient pris.",
    },
    {
      title: "Pourquoi un four à 150 °C",
      text: "Le miel est riche en fructose, un sucre qui brunit à plus basse température que le sucre blanc. À 180 °C, les bords et le miel noircissent avant que le cœur des grappes ait séché. À 150 °C, le séchage et la coloration avancent au même rythme, et le granola devient croustillant jusqu’au centre.",
    },
  ],
  tips: [
    "Prenez des gros flocons d’avoine : les petits flocons, plus fins, se cassent et donnent une texture de chapelure.",
    "Pesez le miel directement dans la casserole posée sur la balance : rien ne reste collé dans un récipient de plus.",
    "Rangez-le dans un bocal bien fermé, à l’abri de la chaleur : l’humidité de l’air le ramollit en quelques jours.",
    "Si votre four chauffe plus fort au fond, tournez la plaque à mi-cuisson, comme dans la recette, mais sans jamais remuer.",
  ],
  mistakes: [
    "Remuer le granola en cours de cuisson : on obtient des flocons séparés, sans grappes. Il reste bon, mais en vrac.",
    "Le casser encore tiède : les grappes s’effritent. Attendez qu’il soit complètement froid.",
    "Cuire les fruits secs avec le reste : ils deviennent durs comme des cailloux et brûlent. Ils s’ajoutent une fois le granola refroidi.",
    "Fermer le bocal sur un granola encore tiède : la vapeur se condense et il ramollit. Si c’est fait, repassez-le 5 minutes à 150 °C et laissez-le refroidir.",
  ],
  variations: [
    {
      title: "Sans fruits à coque",
      text: "Remplacez les amandes et les noisettes par 80 g de graines de courge et 70 g de graines de tournesol en plus. Vérifiez sur les paquets de graines et de flocons qu’il n’y a pas de mention de traces de fruits à coque.",
    },
    {
      title: "Au sirop d’érable",
      text: "Remplacez le miel par 100 ml de sirop d’érable : le granola devient vegan. Le sirop étant plus liquide, les grappes sont un peu moins solides ; prolongez la cuisson de 5 minutes.",
    },
    {
      title: "Au chocolat",
      text: "Ajoutez 80 g de chocolat noir haché ou en pépites avec les fruits secs, uniquement sur un granola complètement froid, sinon il fond et colle tout.",
    },
    {
      title: "En très grosses grappes",
      text: "Battez 1 blanc d’œuf à la fourchette jusqu’à ce qu’il mousse, mélangez-le au granola juste avant de l’étaler et tassez. Le blanc cuit en même temps et soude les flocons encore plus fort.",
    },
  ],
  storage:
    "Le granola se garde 2 à 3 semaines dans un bocal hermétique, à température ambiante et à l’abri de la chaleur. S’il a ramolli, repassez-le 5 minutes au four à 150 °C et laissez-le refroidir complètement.",
  pairing:
    "Sur un yaourt nature ou un fromage blanc, avec des fruits frais coupés, ou dans un bol de lait froid. Une poignée nature fait aussi un bon goûter.",
  faq: [
    {
      q: "Comment faire un granola avec de grosses grappes ?",
      a: "Tassez fermement le mélange sur la plaque, ne le remuez pas pendant la cuisson et laissez-le refroidir complètement avant de le casser. C’est le miel durci en refroidissant qui soude les flocons. Pour des grappes encore plus grosses, ajoutez un blanc d’œuf battu avant d’étaler.",
    },
    {
      q: "À quelle température cuire un granola maison ?",
      a: "150 °C, chaleur statique, pendant 35 à 40 minutes. Plus chaud, le miel brûle sur les bords avant que le centre soit sec. Le granola est cuit quand il est doré partout ; il paraît encore un peu mou à la sortie du four et durcit en refroidissant.",
    },
    {
      q: "Combien de temps se conserve le granola maison ?",
      a: "2 à 3 semaines dans un bocal hermétique, à température ambiante. Au-delà, les fruits à coque commencent à rancir et prennent un goût de vieux. S’il ramollit avant, 5 minutes au four à 150 °C lui rendent son croquant.",
    },
    {
      q: "Peut-on remplacer le miel par du sirop d’érable ?",
      a: "Oui, à poids égal ou avec 100 ml de sirop. Le granola devient vegan et les grappes sont un peu plus fragiles. Bon à savoir : le miel est déconseillé aux enfants de moins d’un an, le sirop d’érable n’a pas cette restriction.",
    },
    {
      q: "Comment faire un granola sans fruits à coque ?",
      a: "Remplacez les 150 g d’amandes et de noisettes par 150 g de graines de courge et de tournesol. Pour une allergie, vérifiez aussi que les flocons d’avoine et les graines ne portent pas la mention « traces de fruits à coque ».",
    },
    {
      q: "Quelle est la différence entre granola et muesli ?",
      a: "Le muesli est un mélange de flocons, de fruits secs et de fruits à coque crus, sans sucre ajouté ni cuisson. Le granola est enrobé de miel ou de sirop et d’huile, puis cuit au four : il est croustillant, plus sucré et plus calorique.",
    },
  ],
  nutrition: { calories: 240, protein: 6, fat: 13, saturatedFat: 1, carbs: 23, sugar: 10, fiber: 4, sodium: 80 },
  annotations: { hero: "des grappes, pas du vrac", detail: "tassé sur la plaque, pas remué" },
  images: {
    heroAlt:
      "Bocal en verre ouvert rempli de granola maison en grosses grappes, avec des graines et des fruits rouges séchés",
    detailAlt: "Plaque de granola maison doré, encore tassé sur le papier cuisson après la sortie du four",
    credits: {
      hero: { photographer: "Pincalo", url: "https://www.pexels.com/photo/healthy-homemade-granola-in-jar-33742595/" },
      detail: { photographer: "Antoni Shkraba", url: "https://www.pexels.com/photo/cereals-on-a-baking-tray-4397293/" },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#C28A3A",
    onAccent: "#1B1712",
    ink: "#7E561C",
    tint: "#F8F1E4",
    deep: "#19120A",
    focus: "45% 40%",
  },
});
