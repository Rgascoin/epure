import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "terrine-de-campagne",
  title: "Terrine de campagne",
  seoTitle: "Terrine de campagne maison, cuite au bain-marie",
  tagline: "À faire deux jours avant.",
  description:
    "Terrine de campagne maison : échine, gorge et foies de volaille, 16 g de sel par kilo, cuite au bain-marie jusqu’à 70 °C à cœur, puis 48 h de repos.",
  summary:
    "Pour 12 personnes, hachez 500 g d’échine et 400 g de gorge de porc, mixez 300 g de foies de volaille et salez à 16 g par kilo de viande. Tassez la farce dans une terrine de 1,5 l chemisée de crépine et cuisez-la environ 1 h 45 au bain-marie à 160 °C, jusqu’à 70 °C à cœur à la sonde. Pressez-la, puis laissez-la reposer 48 h au réfrigérateur avant de trancher. Comptez 45 minutes de travail et un peu plus de 2 jours en tout.",
  intro: [
    "La terrine de campagne, c’est du porc haché, du foie, du sel et du poivre, tassés dans un moule et cuits doucement au bain-marie. Rien de sorcier, mais tout tient aux proportions : assez de gras pour qu’elle reste moelleuse, et un sel pesé au gramme.",
    "Elle rate de deux façons. Trop cuite, elle sèche et s’émiette. Pas assez, le centre reste cru, ce qui ne pardonne pas avec du porc et du foie. D’où la sonde : on la sort à 70 °C à cœur, pas à l’heure.",
    "Le reste est affaire de patience. Pressée puis oubliée 48 h au réfrigérateur, elle se tient, se tranche net et prend son goût.",
  ],
  category: "Entrée",
  cuisine: "Française",
  keywords: [
    "terrine de campagne",
    "recette terrine de campagne",
    "terrine de campagne maison",
    "pâté de campagne maison",
    "terrine de porc",
    "terrine de campagne au foie de volaille",
    "température à cœur terrine",
    "terrine au bain-marie",
  ],
  servings: 12,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 45, cook: 105, rest: 2940 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Toute l’année"],
  tags: ["pique-nique", "noel"],
  equipment: [
    "terrine de 1,5 l avec couvercle",
    "hachoir à viande avec grille de 8 mm",
    "mixeur",
    "plat à four assez grand pour le bain-marie",
    "thermomètre à sonde",
    "planchette à la taille de la terrine et un poids d’environ 1 kg",
  ],
  ingredients: [
    {
      title: "La farce",
      items: [
        { qty: 10, unit: "g", name: "beurre", step: 5 },
        { qty: 2, name: "échalote", plural: "échalotes", note: "environ 60 g, hachées", step: 1 },
        { qty: 1, name: "gousse d’ail", plural: "gousses d’ail", note: "hachée", step: 1 },
        { qty: 500, unit: "g", name: "échine de porc", note: "désossée, sans couenne, bien froide", step: 10 },
        { qty: 400, unit: "g", name: "gorge de porc", note: "ou poitrine fraîche sans couenne, bien froide", step: 10 },
        { qty: 300, unit: "g", name: "foie de volaille", note: "ou foie de porc", step: 10 },
        { qty: 1, name: "œuf", plural: "œufs", step: 1 },
        { qty: 4, unit: "cl", name: "cognac", note: "ou armagnac", step: 1, optional: true },
        { qty: 2, unit: "cas", name: "persil plat", note: "ciselé", step: 1 },
        { qty: 19, unit: "g", name: "sel fin", note: "16 g par kilo de viande", step: 1 },
        { qty: 3, unit: "g", name: "poivre noir", note: "fraîchement moulu", step: 0.5 },
        { qty: 0.5, unit: "cac", name: "quatre-épices", step: 0.25 },
      ],
    },
    {
      title: "Le montage",
      items: [
        {
          qty: 1,
          name: "crépine de porc",
          plural: "crépines de porc",
          note: "environ 30 × 40 cm, ou 200 g de barde fine",
          step: 1,
        },
        { qty: 2, name: "brin de thym", plural: "brins de thym", step: 1 },
        { qty: 2, name: "feuille de laurier", plural: "feuilles de laurier", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "La farce",
      steps: [
        {
          title: "Fondre les échalotes",
          text: "Faites fondre le beurre à feu doux dans une petite poêle. Ajoutez les échalotes et l’ail hachés et laissez-les suer 5 minutes en remuant, jusqu’à ce qu’ils soient translucides, sans la moindre coloration. Étalez-les sur une assiette pour qu’ils refroidissent.",
          timer: { minutes: 5, label: "Échalotes à feu doux" },
        },
        {
          title: "Hacher les viandes",
          text: "Coupez l’échine et la gorge en cubes de 3 cm et passez-les au hachoir, grille de 8 mm, en alternant gras et maigre. Retirez des foies les filaments blancs et les éventuelles traces vertes, qui sont amères, puis mixez-les une dizaine de secondes en purée grossière. Réunissez le tout dans un grand saladier.",
          tip: "Viande, foies et pièces du hachoir doivent être froids. Un gras qui tiédit graisse la farce au lieu de s’y mêler, et la terrine devient grasse et friable.",
        },
        {
          title: "Pétrir la farce",
          text: "Ajoutez les échalotes refroidies, l’œuf, le cognac, le persil, le sel, le poivre et le quatre-épices. Pétrissez à pleine main, comme une pâte, jusqu’à ce que la farce devienne collante et file légèrement quand vous soulevez les doigts.",
        },
        {
          title: "Goûter une galette",
          text: "Prélevez une cuillerée de farce, aplatissez-la et faites-la cuire 4 minutes dans une poêle à feu moyen, en la retournant à mi-temps, jusqu’à ce qu’elle soit cuite au centre, sans trace rose. Goûtez-la : elle doit paraître franchement assaisonnée, le froid atténuera le sel. Ajustez poivre et épices si besoin.",
          timer: { minutes: 4, label: "Galette de test" },
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Chemiser la terrine",
          text: "Préchauffez le four à 160 °C et faites chauffer une bouilloire d’eau. Rincez la crépine à l’eau froide, essorez-la doucement et tapissez-en la terrine en la laissant largement déborder sur les côtés.",
        },
        {
          title: "Remplir et couvrir",
          text: "Versez la farce dans la terrine en tassant bien avec le dos d’une cuillère, puis tapotez le fond sur le plan de travail pour chasser l’air. Lissez en léger dôme, rabattez la crépine par-dessus, coupez l’excédent et posez le thym et le laurier. Couvrez.",
        },
        {
          title: "Cuire au bain-marie",
          text: "Posez la terrine dans le plat à four et versez l’eau chaude jusqu’à mi-hauteur de la terrine. Enfournez pour 1 h 15, couvercle fermé. À mi-cuisson, vérifiez le niveau d’eau et complétez avec de l’eau chaude si besoin.",
          timer: { minutes: 75, label: "Cuisson couverte" },
        },
        {
          title: "Finir à découvert",
          text: "Retirez le couvercle et poursuivez la cuisson 20 à 40 minutes, jusqu’à ce que le dessus soit doré, que la terrine baigne dans un jus clair et que la sonde, plantée au centre, affiche 70 °C. Si elle n’y est pas, remettez au four et vérifiez de nouveau toutes les 10 minutes.",
          timer: { minutes: 30, label: "Cuisson à découvert" },
          tip: "Plantez la sonde au centre exact et à mi-profondeur : c’est le dernier point à cuire. Le jus clair est un bon signe, mais seule la sonde fait foi.",
        },
      ],
    },
    {
      title: "Le repos",
      steps: [
        {
          title: "Presser",
          text: "Sortez la terrine du four et du bain-marie. Posez sur la farce une planchette ou un carton coupé à sa taille, enveloppé de film, puis un poids d’environ 1 kg, deux boîtes de conserve par exemple. Laissez tiédir 1 h à température ambiante, pas davantage.",
          timer: { minutes: 60, label: "Terrine sous presse" },
        },
        {
          title: "Laisser reposer",
          text: "Glissez la terrine au réfrigérateur, toujours sous son poids. Retirez le poids le lendemain, couvrez, et attendez 48 h en tout avant de l’entamer. Le jus prend en gelée et la terrine devient ferme sous le doigt.",
          timer: { minutes: 2880, label: "Repos au réfrigérateur" },
          tip: "Ne coupez rien avant les 48 h : tranchée trop tôt, la terrine s’émiette et paraît fade au centre.",
        },
        {
          title: "Trancher",
          text: "Servez la terrine dans son moule, ou démoulez-la en passant une lame fine le long des parois. Taillez des tranches de 1,5 cm d’un geste franc, sans scier, et servez-les fraîches avec un peu de gelée.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Le sel fait tenir la farce",
      text: "Le sel dissout une partie des protéines de la viande, surtout la myosine. Pétrie, la farce devient collante ; à la cuisson, ces protéines forment un réseau qui lie les morceaux et retient le jus et le gras. Avec 16 g par kilo, la terrine est assaisonnée et se tient à la coupe.",
    },
    {
      title: "Pourquoi 70 °C à cœur",
      text: "Les protéines de la viande coagulent entre 60 et 70 °C. À 70 °C au centre, le porc haché et le foie sont cuits dans toute leur épaisseur et les bactéries courantes, comme les salmonelles, sont détruites. Le bain-marie, qui ne dépasse pas 100 °C, ménage les bords pendant que le centre monte.",
    },
    {
      title: "Le froid soude les tranches",
      text: "En refroidissant, le gras fige et le jus, riche en gélatine, prend en gelée entre les morceaux. La presse chasse les poches d’air tant que la farce est encore souple. Ensemble, ils donnent une tranche compacte qui ne se défait pas.",
    },
  ],
  tips: [
    "Commandez la gorge et la crépine chez le boucher quelques jours avant : on ne les trouve pas toujours en vitrine.",
    "Pesez le sel : 16 g par kilo de viande, foie compris, soit 19 g ici. À la cuillère, on se trompe vite de plusieurs grammes.",
    "Mettez la grille et la vis du hachoir 30 minutes au congélateur avant de hacher : la viande passe proprement, sans s’écraser.",
    "Gardez la gelée et le gras qui entourent la terrine : ils protègent la viande de l’air au réfrigérateur.",
  ],
  mistakes: [
    "Une farce trop maigre, faite seulement d’échine ou de filet, donne une terrine sèche qui s’effrite. Gardez environ un tiers de gorge ou de poitrine.",
    "Se fier à la montre plutôt qu’à la sonde : selon la forme de la terrine, le centre peut rester sous 70 °C. Remettez-la au four, sonde en place, jusqu’à ce qu’elle y arrive.",
    "Laisser le bain-marie s’évaporer : les bords cuisent trop vite et sèchent. Complétez avec de l’eau chaude à mi-cuisson.",
    "Laisser la terrine tiédir des heures sur le plan de travail. Au-delà de 1 h sous presse, elle doit partir au réfrigérateur.",
  ],
  variations: [
    {
      title: "Aux pistaches",
      text: "Ajoutez 60 g de pistaches décortiquées non salées au moment de pétrir la farce. Elles restent croquantes et font des points verts à la coupe. Prévenez les personnes allergiques aux fruits à coque.",
    },
    {
      title: "Au foie de porc",
      text: "Remplacez les foies de volaille par 300 g de foie de porc, nettoyé et mixé de la même façon. La terrine est plus sombre et son goût plus marqué.",
    },
    {
      title: "À la chair à saucisse",
      text: "Remplacez l’échine et la gorge par 900 g de chair à saucisse, déjà salée par le boucher, et ne salez que le foie, soit 5 g. Faites cuire la galette de test : la teneur en sel varie d’une boutique à l’autre.",
    },
    {
      title: "Deux petites terrines",
      text: "Répartissez la farce dans deux terrines de 750 ml. La cuisson est plus courte, autour de 1 h 15 en tout : retirez le couvercle au bout de 50 minutes et surveillez la sonde jusqu’à 70 °C à cœur.",
    },
  ],
  storage:
    "Couverte, la terrine se garde 5 jours au réfrigérateur, entre 0 et 4 °C, à compter du jour de la cuisson, les 48 h de repos comprises. Une fois entamée, filmez la coupe au contact. Elle se congèle 2 mois en tranches épaisses bien emballées : décongelez-la au réfrigérateur et ne la recongelez jamais.",
  pairing:
    "Du pain de campagne, des cornichons, quelques petits oignons au vinaigre et une moutarde forte. Côté verre, un rouge léger servi frais, comme un beaujolais ou un chinon.",
  faq: [
    {
      q: "Quelle température à cœur pour une terrine de campagne ?",
      a: "70 °C, mesurés au centre de la terrine avec une sonde. C’est ce qui garantit un porc et un foie cuits dans toute leur épaisseur. Sortez-la dès que la sonde l’affiche : plus haut, elle sèche sans rien gagner.",
    },
    {
      q: "Combien de sel par kilo de viande pour une terrine ?",
      a: "16 g par kilo de viande, foie compris, soit 19 g pour les 1,2 kg de cette recette. Ajoutez environ 2,5 g de poivre par kilo. Pesez l’un et l’autre : à la cuillère, l’écart dépasse vite plusieurs grammes.",
    },
    {
      q: "Pourquoi attendre 48 h avant de manger une terrine de campagne ?",
      a: "48 h, c’est le temps qu’il faut pour que la terrine se raffermisse, que le jus prenne en gelée et que le sel et les épices se répartissent. Entamée le lendemain, elle se tient moins bien à la coupe et paraît plus fade.",
    },
    {
      q: "Peut-on faire une terrine de campagne sans hachoir ?",
      a: "Oui. Demandez au boucher de hacher l’échine et la gorge à la grille moyenne, ou taillez-les au couteau en dés de 3 à 4 mm, viande très froide. Évitez le mixeur pour la viande, il en fait une pâte ; il reste parfait pour le foie.",
    },
    {
      q: "Combien de temps se conserve une terrine de campagne maison ?",
      a: "5 jours au réfrigérateur, entre 0 et 4 °C, à compter du jour de la cuisson, repos compris. Couvrez-la bien et filmez la coupe une fois entamée. À table, ne la laissez pas plus de 2 h hors du froid.",
    },
    {
      q: "Peut-on congeler une terrine de campagne ?",
      a: "Oui, 2 mois, en tranches épaisses ou en morceaux bien emballés. Décongelez-la une nuit au réfrigérateur. La gelée rend un peu d’eau et la tranche est un peu moins nette. Ne recongelez jamais une terrine décongelée.",
    },
    {
      q: "Peut-on emporter une terrine de campagne en pique-nique ?",
      a: "Oui, dans sa terrine ou en tranches, dans une glacière avec des pains de glace, et sortez-la au moment de manger. Au soleil, la gelée fond et le gras ramollit. Jetez ce qui est resté plus de 2 h hors du froid.",
    },
  ],
  nutrition: {
    calories: 250,
    protein: 17,
    fat: 19.5,
    saturatedFat: 7,
    carbs: 1.5,
    sugar: 0.5,
    fiber: 0.2,
    sodium: 640,
  },
  annotations: { hero: "tranchée après 48 h de repos", detail: "une baguette, et c’est tout" },
  images: {
    heroAlt: "Tranche de terrine de campagne aux pistaches sur une assiette, avec une salade verte et des cornichons",
    detailAlt: "Tranche de terrine de campagne à la texture grossière, posée près d’une baguette et d’un couteau",
    credits: {
      hero: {
        photographer: "lazy fri13th",
        url: "https://commons.wikimedia.org/w/index.php?curid=111087874",
        source: "Wikimedia Commons",
        license: "CC BY 2.0",
      },
      detail: {
        photographer: "Julien Bertrand",
        url: "https://commons.wikimedia.org/wiki/File:Camp_pat.JPG",
        source: "Wikimedia Commons",
        license: "Public domain",
      },
    },
  },
  datePublished: "2026-11-13",
  dateModified: "2026-11-13",
  hero,
  detail,
  theme: {
    accent: "#B8705A",
    onAccent: "#1B1712",
    ink: "#8C4632",
    tint: "#F7ECE7",
    deep: "#1C100C",
    focus: "72% 50%",
  },
});
