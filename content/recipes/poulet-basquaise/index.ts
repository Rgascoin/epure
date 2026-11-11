import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "poulet-basquaise",
  title: "Poulet basquaise",
  seoTitle: "Poulet basquaise aux poivrons et piment d’Espelette",
  tagline: "Quand les poivrons sont au marché.",
  description:
    "Poulet basquaise pour 4 : hauts de cuisse dorés, poivrons, tomates et piment d’Espelette, 40 minutes de mijotage et une sauce réduite qui se tient.",
  summary:
    "Pour 4 personnes, faites dorer 8 hauts de cuisse de poulet côté peau, puis faites fondre 4 poivrons et 2 oignons dans leur gras. Ajoutez 800 g de tomates et 1 cuillère à café de piment d’Espelette, remettez le poulet et laissez mijoter 30 minutes à couvert, puis 10 minutes à découvert pour réduire la sauce. Le poulet doit atteindre 74 °C à cœur. Comptez 1 h 35 en tout, dont 25 minutes de préparation.",
  intro: [
    "Le poulet basquaise, c’est un poulet qui mijote dans une piperade : poivrons, tomates et oignons fondus ensemble, relevés de piment d’Espelette. Un plat d’été, quand les poivrons coûtent peu et que les tomates ont du goût.",
    "Le piège, ce sont les poivrons. Ils rendent beaucoup d’eau, et une sauce qui n’a pas réduit ressemble à une soupe. On finit donc la cuisson couvercle ouvert, jusqu’à ce que la sauce se tienne.",
    "Et on prend des hauts de cuisse. Ils supportent le mijotage sans sécher, et leur peau dorée au départ donne du goût à toute la sauteuse.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "poulet basquaise",
    "recette poulet basquaise",
    "poulet basquaise traditionnel",
    "poulet basquaise piment d’espelette",
    "poulet basquaise hauts de cuisse",
    "poulet aux poivrons",
    "poulet piperade",
    "poulet basquaise facile",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 25, cook: 70 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Été", "Automne"],
  tags: ["ete"],
  equipment: ["grande sauteuse de 28 cm avec couvercle", "casserole (pour peler les tomates)", "thermomètre à sonde"],
  ingredients: [
    {
      items: [
        { qty: 800, unit: "g", name: "tomates mûres", note: "environ 6", step: 50 },
        { qty: 2, name: "poivron rouge", plural: "poivrons rouges", step: 1 },
        { qty: 2, name: "poivron vert", plural: "poivrons verts", note: "ou 4 piments doux des Landes", step: 1 },
        { qty: 2, name: "oignon", plural: "oignons", step: 1 },
        { qty: 3, unit: "gousse", name: "ail", step: 1 },
        {
          qty: 8,
          name: "haut de cuisse de poulet",
          plural: "hauts de cuisse de poulet",
          note: "avec la peau et l’os, environ 1,2 kg",
          step: 1,
        },
        { qty: 2, unit: "cas", name: "huile d’olive", step: 1 },
        { qty: 10, unit: "cl", name: "vin blanc sec", step: 5, optional: true },
        { qty: 2, unit: "brin", name: "thym", step: 1 },
        { qty: 1, unit: "feuille", name: "laurier", step: 1 },
        { qty: 1, unit: "cac", name: "piment d’Espelette", note: "plus une pincée pour servir", step: 0.5 },
        { name: "sel" },
      ],
    },
  ],
  method: [
    {
      title: "Préparer la piperade",
      steps: [
        {
          title: "Peler les tomates",
          text: "Portez une casserole d’eau à ébullition. Incisez la base des tomates en croix, plongez-les 30 secondes, puis passez-les sous l’eau froide : la peau se retire toute seule. Coupez-les en quartiers, retirez les graines et concassez la chair.",
        },
        {
          title: "Tailler les légumes",
          text: "Épépinez les poivrons et coupez-les en lanières de 1 cm de large. Émincez les oignons et hachez l’ail.",
        },
      ],
    },
    {
      title: "Cuire",
      steps: [
        {
          title: "Dorer le poulet",
          text: "Salez les hauts de cuisse. Chauffez l’huile dans la sauteuse sur feu moyen-vif et posez-les côté peau en dessous. Laissez 8 minutes sans y toucher, jusqu’à ce que la peau soit dorée et croustillante, puis retournez-les 2 minutes. Réservez sur une assiette.",
          timer: { minutes: 10, label: "Peau dorée" },
          tip: "Attendez que l’huile frémisse avant de poser le poulet, puis n’y touchez plus. La peau se décolle seule quand elle est prête.",
        },
        {
          title: "Fondre oignons et poivrons",
          text: "Ne gardez que 2 cuillerées de gras dans la sauteuse. Faites-y fondre les oignons et les poivrons 12 minutes sur feu moyen, en remuant : ils deviennent souples et se colorent légèrement sur les bords. Ajoutez l’ail pour la dernière minute.",
          timer: { minutes: 12, label: "Oignons et poivrons" },
        },
        {
          title: "Ajouter tomates et piment",
          text: "Versez le vin blanc et laissez-le s’évaporer à moitié. Ajoutez les tomates, le thym, le laurier et 1 cuillère à café de piment d’Espelette, salez et laissez bouillotter 5 minutes : les tomates commencent à s’effondrer.",
          timer: { minutes: 5, label: "Tomates" },
        },
        {
          title: "Mijoter à couvert",
          text: "Remettez le poulet côté peau vers le haut, enfoncé à moitié dans la sauce, la peau au-dessus du liquide. Couvrez et laissez mijoter 30 minutes sur feu doux.",
          timer: { minutes: 30, label: "Mijotage à couvert" },
        },
        {
          title: "Réduire à découvert",
          text: "Retirez le couvercle et laissez réduire 10 minutes à petits bouillons. La sauce est prête quand une cuillère tirée au fond laisse un sillon qui ne se remplit pas d’eau. Vérifiez le poulet : 74 °C à cœur, mesurés près de l’os sans le toucher.",
          timer: { minutes: 10, label: "Réduction à découvert" },
          tip: "Les poivrons rendent beaucoup d’eau. Sans cette réduction, la sauce reste claire et le goût dilué.",
        },
        {
          title: "Servir",
          text: "Goûtez et rectifiez le sel, retirez le thym et le laurier. Servez avec une pincée de piment d’Espelette sur le dessus.",
        },
      ],
    },
  ],
  science: [
    {
      title: "L’eau des poivrons",
      text: "Les poivrons contiennent plus de 90 % d’eau. En cuisant, leurs cellules se rompent et la libèrent dans la sauce. À couvert, cette eau reste ; à découvert, elle s’évapore et les sucres des légumes se concentrent.",
    },
    {
      title: "Pourquoi dorer d’abord",
      text: "À feu vif, la peau du poulet développe des arômes grillés par la réaction de Maillard, impossibles à obtenir dans une sauce qui ne dépasse pas 100 °C. Le gras qu’elle rend sert ensuite à cuire les légumes.",
    },
    {
      title: "Le piment à la fin aussi",
      text: "Le piment d’Espelette chauffe modérément et sent le poivron séché. Une partie de ses arômes s’évapore pendant le mijotage : la pincée ajoutée au moment de servir apporte ce parfum frais.",
    },
  ],
  tips: [
    "Mélangez poivrons rouges et verts. Les rouges sont doux et sucrés, les verts, cueillis avant maturité, plus herbacés : c’est cet équilibre qui fait la piperade.",
    "Choisissez des poivrons lourds, à la peau tendue et brillante. Ils sont plus charnus.",
    "Hors saison, 800 g de tomates pelées en conserve valent mieux que des tomates d’hiver sans goût.",
    "Préparez-le la veille. Les saveurs se fondent, et le gras qui remonte au frais s’enlève à la cuillère.",
  ],
  mistakes: [
    "Poser le poulet dans une huile pas assez chaude. La peau colle, se déchire et reste pâle ; si c’est fait, finissez la coloration côté peau en fin de cuisson, sous le gril du four.",
    "Garder le couvercle jusqu’au bout. La sauce reste liquide : dix minutes à découvert, et elle se tient.",
    "Couper les poivrons trop fin. Ils se défont en purée ; des lanières de 1 cm gardent un peu de tenue.",
    "Prendre seulement des blancs. Ils sèchent en 30 minutes de mijotage ; si vous y tenez, ajoutez-les pour les 15 dernières minutes.",
  ],
  variations: [
    {
      title: "Avec un poulet entier",
      text: "Un poulet de 1,6 kg coupé en 8 remplace les hauts de cuisse. Dorez tous les morceaux, mais ne remettez les blancs dans la sauce que pour les 15 dernières minutes du mijotage.",
    },
    {
      title: "Avec du jambon de Bayonne",
      text: "Faites revenir 4 tranches de jambon de Bayonne en lanières avec les oignons et les poivrons. Salez moins, le jambon s’en charge.",
    },
  ],
  storage:
    "Il se garde 2 jours au frigo dans une boîte fermée et 3 mois au congélateur. Réchauffez-le à couvert sur feu doux, jusqu’à ce que la sauce frémisse. Ne le recongelez pas.",
  pairing:
    "Du riz blanc pour la sauce, ou des pommes de terre vapeur. Dans le verre, un irouléguy rouge ou un rosé bien frais.",
  faq: [
    {
      q: "Quel morceau de poulet pour un poulet basquaise ?",
      a: "Des hauts de cuisse avec la peau et l’os. Ils restent moelleux après 40 minutes de mijotage et leur peau dorée parfume la sauce. Un poulet entier coupé en morceaux convient aussi, à condition d’ajouter les blancs plus tard.",
    },
    {
      q: "Par quoi remplacer le piment d’Espelette ?",
      a: "Par 1 cuillère à café de paprika doux et une petite pincée de piment de Cayenne. Le goût sera moins fruité, mais l’équilibre entre douceur et chaleur reste.",
    },
    {
      q: "Faut-il peler les poivrons pour un poulet basquaise ?",
      a: "Non. En lanières et mijotés 40 minutes, ils deviennent fondants avec leur peau. Les tomates, elles, gagnent à être pelées : leur peau se détache à la cuisson et roule en petits copeaux dans la sauce.",
    },
    {
      q: "À quelle température le poulet basquaise est-il cuit ?",
      a: "74 °C à cœur, mesurés près de l’os sans le toucher. Les hauts de cuisse l’atteignent avant la fin du mijotage ; la suite rend la chair plus fondante.",
    },
    {
      q: "Peut-on faire un poulet basquaise avec des tomates en conserve ?",
      a: "Oui. 800 g de tomates pelées en boîte, égouttées et concassées, remplacent les fraîches. Hors saison, elles ont souvent plus de goût.",
    },
    {
      q: "Avec quoi servir le poulet basquaise ?",
      a: "Le riz blanc est le plus classique : il boit la sauce. Des pommes de terre vapeur ou du pain de campagne conviennent aussi.",
    },
    {
      q: "Peut-on congeler le poulet basquaise ?",
      a: "Oui, 3 mois dans une boîte fermée. Décongelez-le au frigo la veille et réchauffez-le à couvert jusqu’à ce que la sauce frémisse.",
    },
  ],
  nutrition: { calories: 510, protein: 36, fat: 34, saturatedFat: 9, carbs: 14, sugar: 10, fiber: 4, sodium: 700 },
  annotations: { hero: "la sauce a réduit à découvert", detail: "des lanières, pas des dés" },
  images: {
    heroAlt:
      "Poulet basquaise dans un plat en terre jaune : morceaux de poulet, poivrons rouges et verts, tomates et oignons fondus",
    detailAlt:
      "Assiette de poulet basquaise : morceaux de poulet posés sur des poivrons rouges et verts et une sauce tomate",
    credits: {
      hero: {
        photographer: "Arnaud 25",
        url: "https://commons.wikimedia.org/wiki/File:Poulet_basquaise_01.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
      detail: {
        photographer: "Arnaud 25",
        url: "https://commons.wikimedia.org/wiki/File:Poulet_basquaise_02.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#C2361F",
    onAccent: "#ffffff",
    ink: "#9E2A16",
    tint: "#FBEDE8",
    deep: "#220B06",
    focus: "45% 50%",
  },
});
