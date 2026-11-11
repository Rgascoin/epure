import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "clafoutis-aux-cerises",
  title: "Clafoutis aux cerises",
  seoTitle: "Clafoutis aux cerises : la recette limousine, avec noyaux",
  tagline: "Les noyaux restent, on s’explique.",
  description:
    "Clafoutis aux cerises à la limousine, avec les noyaux : 600 g de cerises noires, un appareil souple au lait entier, 35 à 40 minutes de four à 180 °C.",
  summary:
    "Pour un clafoutis aux cerises de 6 parts, étalez 600 g de cerises lavées, non dénoyautées, dans un plat de 24 cm beurré et sucré. Fouettez 3 œufs avec 90 g de sucre et une pincée de sel, ajoutez 80 g de farine, 350 ml de lait entier et 20 g de beurre fondu, versez sur les cerises et enfournez 35 à 40 minutes à 180 °C. Laissez tiédir 30 minutes : il retombe, c’est normal.",
  intro: [
    "Le clafoutis aux cerises vient du Limousin, où l’on ne dénoyaute traditionnellement pas les cerises. C’est un flan épais, peu sucré, cuit sur des cerises entières qui gardent leur jus à l’intérieur. Le bord gonfle et dore, le centre reste souple.",
    "Sur les noyaux, soyons honnêtes. Les garder empêche la cerise de saigner dans l’appareil : ça se vérifie en faisant les deux. Le léger goût d’amande qu’ils donneraient à la cuisson est plus discret, certains le sentent, d’autres non. Le prix à payer, c’est de prévenir vos convives, et de dénoyauter pour les jeunes enfants.",
    "Ce qui peut rater : un appareil trop cuit qui devient caoutchouteux, ou pas assez, qui reste liquide au centre. Le repère, c’est un centre qui tremble à peine quand on bouge le plat.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "clafoutis aux cerises",
    "recette clafoutis aux cerises",
    "clafoutis limousin",
    "clafoutis cerises avec noyaux",
    "faut-il dénoyauter les cerises du clafoutis",
    "clafoutis traditionnel",
    "clafoutis facile",
    "clafoutis cerises surgelées",
  ],
  diet: ["vegetarian"],
  servings: 6,
  servingsLabel: { one: "part", other: "parts" },
  times: { prep: 15, cook: 40, rest: 30 },
  difficulty: "Facile",
  cost: "€",
  season: ["Mai", "Juin", "Juillet"],
  equipment: [
    "plat à four de 24 cm de diamètre (ou rectangulaire de 20 × 25 cm), en porcelaine ou en verre",
    "saladier",
    "fouet",
    "petite casserole",
    "grille",
  ],
  ingredients: [
    {
      title: "Le plat et les cerises",
      items: [
        { qty: 10, unit: "g", name: "beurre doux", note: "mou, pour le plat", step: 5 },
        { qty: 1, unit: "cas", name: "sucre en poudre", note: "pour le plat", step: 1 },
        {
          qty: 600,
          unit: "g",
          name: "cerises noires",
          note: "bien mûres, burlat ou guignes, avec leurs noyaux",
          step: 50,
        },
      ],
    },
    {
      title: "L’appareil",
      items: [
        { qty: 20, unit: "g", name: "beurre doux", note: "fondu", step: 5 },
        { qty: 3, name: "œuf", plural: "œufs", note: "à température ambiante", step: 1 },
        { qty: 90, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 80, unit: "g", name: "farine T55", step: 5 },
        { qty: 350, unit: "ml", name: "lait entier", step: 10 },
        { qty: 1, unit: "cac", name: "extrait de vanille", step: 0.5, optional: true },
      ],
    },
    {
      title: "Au service",
      items: [{ qty: 1, unit: "cas", name: "sucre glace", step: 1, optional: true }],
    },
  ],
  method: [
    {
      title: "Préparation",
      steps: [
        {
          title: "Préparer le plat",
          text: "Allumez le four à 180 °C, chaleur statique, grille au milieu. Beurrez généreusement le plat avec le beurre mou, versez la cuillerée de sucre et tournez le plat pour en couvrir le fond et les bords.",
        },
        {
          title: "Étaler les cerises",
          text: "Lavez les cerises, équeutez-les et séchez-les soigneusement dans un torchon. Gardez-les entières, avec leur noyau, et étalez-les en une seule couche serrée dans le plat.",
          tip: "Des cerises mouillées diluent l’appareil au fond du plat, qui reste pâteux. Prenez le temps de bien les sécher.",
        },
        {
          title: "Fouetter œufs et sucre",
          text: "Faites fondre le beurre de l’appareil dans la petite casserole et laissez-le tiédir. Dans le saladier, fouettez les œufs avec le sucre et le sel, juste assez pour que le mélange soit homogène et un peu plus pâle. Inutile de le faire mousser.",
        },
        {
          title: "Ajouter farine et lait",
          text: "Tamisez la farine sur les œufs et fouettez jusqu’à obtenir une pâte lisse et épaisse. Versez le lait petit à petit en fouettant, pour éviter les grumeaux, puis le beurre fondu et la vanille si vous en mettez. L’appareil est fluide, comme une pâte à crêpes.",
          tip: "Commencez par une pâte épaisse, et détendez-la ensuite : la farine se délaie sans grumeaux. Versé d’un coup, le lait laisse des grumeaux qu’il faut ensuite filtrer au tamis.",
        },
      ],
    },
    {
      title: "Cuisson",
      steps: [
        {
          title: "Verser et enfourner",
          text: "Versez l’appareil doucement sur les cerises : certaines remontent à la surface, c’est normal. Enfournez 35 à 40 minutes, sans ouvrir la porte pendant la première demi-heure. Le clafoutis est cuit quand il a gonflé, que les bords sont dorés et que le centre tremble à peine. Une lame plantée entre deux cerises ressort presque sèche.",
          timer: { minutes: 40, label: "Cuisson du clafoutis" },
        },
        {
          title: "Laisser tiédir",
          text: "Posez le plat sur une grille et laissez tiédir 30 minutes. Le clafoutis retombe en refroidissant : c’est normal, c’est la vapeur qui s’en va. Saupoudrez de sucre glace si vous en mettez, et servez tiède, en prévenant pour les noyaux.",
          timer: { minutes: 30, label: "Refroidissement" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi le noyau garde le jus",
      text: "Une cerise entière est fermée : sa peau retient le jus, qui chauffe et se met sous pression sans couler. Dénoyautée, elle a un trou, et le jus s’échappe dans l’appareil, qui se colore de violet et reste humide autour des fruits.",
    },
    {
      title: "Et le goût d’amande ?",
      text: "L’amande du noyau contient de l’amygdaline. En se dégradant, elle libère du benzaldéhyde, la molécule qui donne son odeur à l’amande amère. Mais la coque est dure et reste fermée à la cuisson : ce qui passe dans l’appareil est forcément discret. On ne vous promettra pas que vous le sentirez.",
    },
    {
      title: "Comment l’appareil prend",
      text: "Diluées dans le lait sucré, les protéines des œufs coagulent vers 80 °C et figent l’appareil en flan, pendant que l’amidon de la farine gonfle et épaissit l’ensemble. Au four, l’eau se change en vapeur et fait gonfler le clafoutis ; en refroidissant, la vapeur se condense et il retombe.",
    },
  ],
  tips: [
    "Choisissez des cerises noires, mûres et sucrées : des burlat en début de saison, des guignes si vous en trouvez. Avec des griottes, plus acides, ajoutez 20 g de sucre.",
    "Un plat en porcelaine ou en verre chauffe plus doucement qu’un moule en métal : le bord dore sans brûler avant que le centre soit pris.",
    "Servez-le tiède ou à température ambiante. Brûlant, l’appareil est encore trop mou ; froid du frigo, il durcit et les cerises perdent leur goût.",
    "Si vous le faites pour des enfants, dénoyautez : le jus colorera un peu l’appareil, et personne ne s’en plaindra.",
  ],
  mistakes: [
    "Trop cuire le clafoutis. L’appareil devient caoutchouteux et rend du liquide au fond du plat.",
    "Ouvrir le four pendant la première demi-heure. Le clafoutis retombe avant d’avoir pris.",
    "Forcer sur la farine. On obtient un gâteau compact, plus un clafoutis.",
    "Verser l’appareil sur des cerises encore mouillées. Le fond reste détrempé.",
    "Oublier de prévenir pour les noyaux. Un convive qui mord dedans sans s’y attendre peut s’abîmer une dent.",
  ],
  variations: [
    {
      title: "Cerises dénoyautées",
      text: "Dénoyautez au dénoyauteur, par la queue, pour garder les cerises entières, et ajoutez 10 g de farine à l’appareil pour absorber le jus en plus. L’appareil se teinte de violet autour des fruits. C’est la version à faire pour les jeunes enfants.",
    },
    {
      title: "Flognarde aux pommes ou aux poires",
      text: "Avec d’autres fruits que les cerises, on parle plutôt de flognarde. Remplacez les cerises par 3 pommes ou 3 poires en lamelles, dorées 5 minutes au beurre à la poêle. Même appareil, même cuisson.",
    },
    {
      title: "Plus fondant",
      text: "Remplacez 100 ml de lait par 100 ml de crème liquide entière. L’appareil est plus riche et plus proche d’un flan, un peu moins limousin.",
    },
  ],
  storage:
    "Il se garde 2 jours au réfrigérateur, couvert. Sortez-le une demi-heure avant de le servir : froid, l’appareil est ferme et les cerises n’ont plus de goût.",
  pairing: "Un cidre doux bien frais, ou un petit verre de muscat de Rivesaltes.",
  faq: [
    {
      q: "Faut-il dénoyauter les cerises du clafoutis ?",
      a: "Non, dans la recette limousine. Entières, les cerises gardent leur jus et l’appareil reste jaune et ferme autour d’elles. Le goût d’amande que donneraient les noyaux est discret. Dénoyautez si vous servez de jeunes enfants ou des convives que vous ne pourrez pas prévenir.",
    },
    {
      q: "Les noyaux de cerise sont-ils dangereux dans un clafoutis ?",
      a: "Entiers, non : l’amande qu’ils contiennent reste enfermée dans la coque. Ne les croquez pas, c’est là que se trouve l’amygdaline. Le vrai risque est mécanique : une dent abîmée, ou un enfant qui avale de travers. Prévenez à table, et dénoyautez pour les jeunes enfants.",
    },
    {
      q: "Peut-on faire un clafoutis avec des cerises surgelées ?",
      a: "Oui, hors saison. Prenez des cerises surgelées, en général déjà dénoyautées, décongelez-les une nuit au réfrigérateur dans une passoire, et séchez-les bien. Ajoutez 10 g de farine à l’appareil, et comptez 5 minutes de cuisson en plus. Des griottes au sirop bien égouttées marchent aussi, avec 20 g de sucre en moins.",
    },
    {
      q: "Pourquoi mon clafoutis retombe-t-il ?",
      a: "C’est normal. Au four, l’eau de l’appareil se change en vapeur et le fait gonfler ; en refroidissant, la vapeur se condense et il retombe. Un clafoutis qui s’effondre d’un coup à la sortie, en revanche, manquait sans doute de cuisson.",
    },
    {
      q: "Pourquoi mon clafoutis est-il liquide au centre ?",
      a: "Il n’est pas assez cuit, ou les cerises ont rendu trop de jus (dénoyautées, surgelées ou mal séchées). Remettez-le 5 à 10 minutes au four : le centre doit trembler à peine, et une lame doit ressortir presque sèche.",
    },
    {
      q: "Combien de temps se garde un clafoutis ?",
      a: "2 jours au réfrigérateur, couvert. Il contient des œufs et du lait : ne le laissez pas plus de quelques heures à température ambiante. Sortez-le une demi-heure avant de le servir.",
    },
  ],
  nutrition: {
    calories: 270,
    protein: 7,
    fat: 9,
    saturatedFat: 5,
    carbs: 40,
    sugar: 30,
    fiber: 2,
    sodium: 90,
  },
  annotations: {
    hero: "servez-le tiède, pas brûlant",
    detail: "prévenez pour les noyaux",
  },
  images: {
    heroAlt:
      "Part de clafoutis aux cerises dorée sur une assiette à liseré bleu, une cuillère à côté, le plat en verre derrière",
    detailAlt:
      "Clafoutis aux cerises vu de près, saupoudré de sucre glace, cerises entières dont quelques queues dépassent",
    credits: {
      hero: {
        photographer: "Popo le Chien",
        url: "https://commons.wikimedia.org/wiki/File:Clafoutis_cerises.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
      detail: {
        photographer: "Orf3us",
        url: "https://commons.wikimedia.org/wiki/File:Clafoutis_i_Telemarken.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
    },
  },
  datePublished: "2026-11-08",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#9E1B32",
    onAccent: "#ffffff",
    ink: "#8A1A2C",
    tint: "#F9ECEE",
    deep: "#1a0d10",
    focus: "95% 50%",
  },
});
