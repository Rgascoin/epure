import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "filet-mignon-moutarde",
  title: "Filet mignon de porc à la moutarde",
  seoTitle: "Filet mignon à la moutarde, tendre et rosé à cœur",
  tagline: "Rosé au centre, et c’est voulu.",
  description:
    "Filet mignon de porc doré à la poêle, fini au four jusqu’à 63 °C à cœur, puis nappé d’une sauce crème et moutarde. Pour 4, prêt en 50 minutes.",
  summary:
    "Pour 4 personnes, parez 800 g de filet mignon de porc (deux filets), faites-le dorer 8 minutes sur toutes ses faces, puis finissez-le au four à 180 °C, 12 à 18 minutes, jusqu’à 63 °C à cœur. Pendant ses 8 minutes de repos, déglacez la sauteuse au vin blanc, ajoutez 20 cl de crème épaisse, puis 3 cuillerées de moutarde hors du feu. Comptez 50 minutes en tout.",
  intro: [
    "Le filet mignon est le morceau le plus tendre du porc, et l’un des plus maigres. C’est sa qualité et son piège : il cuit vite, et quelques degrés de trop suffisent à le rendre sec et fibreux, surtout aux extrémités.",
    "Ce qui le fait rater, c’est la peur du rose. On le laisse au four « encore cinq minutes » et il ressort gris jusqu’au centre. Or à 63 °C à cœur, suivis d’un repos, une pièce entière de porc est cuite et sans risque, même si le centre reste légèrement rosé.",
    "Un thermomètre à sonde règle la question une fois pour toutes. Pour la sauce, une seule règle : la moutarde arrive hors du feu, à la toute fin, parce qu’elle devient amère quand elle bout.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "filet mignon moutarde",
    "filet mignon de porc à la moutarde",
    "recette filet mignon de porc",
    "filet mignon sauce moutarde",
    "filet mignon au four",
    "cuisson filet mignon de porc",
    "filet mignon moutarde à l’ancienne",
    "température filet mignon de porc",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 15, cook: 35 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Toute l’année"],
  tags: [],
  equipment: [
    "sauteuse ou poêle de 28 cm allant au four",
    "thermomètre à sonde",
    "couteau fin et bien affûté",
    "ficelle de cuisine",
    "papier aluminium",
  ],
  ingredients: [
    {
      title: "La viande",
      items: [
        { qty: 800, unit: "g", name: "filet mignon de porc", note: "2 filets d’environ 400 g", step: 10 },
        { qty: 1, unit: "cas", name: "huile neutre", step: 1 },
        { qty: 20, unit: "g", name: "beurre", step: 5 },
        { name: "sel et poivre du moulin" },
      ],
    },
    {
      title: "La sauce",
      items: [
        { qty: 2, name: "échalote", plural: "échalotes", note: "finement ciselées", step: 1 },
        { qty: 10, unit: "cl", name: "vin blanc sec", step: 5 },
        { qty: 20, unit: "cl", name: "crème fraîche épaisse", note: "entière, 30 % de matière grasse", step: 5 },
        { qty: 2, unit: "cas", name: "moutarde de Dijon", step: 1 },
        { qty: 1, unit: "cas", name: "moutarde à l’ancienne", step: 1 },
        { qty: 1, unit: "cas", name: "ciboulette", note: "ciselée", step: 1, optional: true },
      ],
    },
  ],
  method: [
    {
      title: "La viande",
      steps: [
        {
          title: "Parer les filets",
          text: "Glissez la pointe d’un couteau fin sous la membrane nacrée qui court le long du filet, lame inclinée vers elle, et retirez-la par bandes. Ôtez aussi les petits amas de gras. Repliez la pointe fine du filet sous lui-même et maintenez-la avec deux tours de ficelle, pour une épaisseur régulière. Épongez la viande au papier absorbant.",
          tip: "Cette membrane ne fond pas à la cuisson. Laissée en place, elle se rétracte, fait vriller le filet et reste élastique sous la dent.",
        },
        {
          title: "Préchauffer et saler",
          text: "Préchauffez le four à 180 °C. Salez les filets sur toutes leurs faces juste avant de les cuire, et poivrez.",
        },
        {
          title: "Dorer sur toutes les faces",
          text: "Dans la sauteuse, chauffez l’huile à feu moyen-vif, puis ajoutez le beurre. Quand il mousse, posez les filets et laissez-les dorer sans y toucher 2 minutes par face, sur les quatre faces, soit 8 minutes en tout. Ils doivent être franchement bruns, pas beiges.",
          timer: { minutes: 8, label: "Dorer les filets" },
          tip: "Si la viande colle quand vous voulez la tourner, attendez encore un peu : la croûte se décolle d’elle-même quand elle est prise.",
        },
        {
          title: "Finir au four",
          text: "Enfournez la sauteuse telle quelle pour 12 à 18 minutes, selon l’épaisseur. Piquez la sonde par le bout du filet, dans l’axe, jusqu’au centre de la partie la plus épaisse. Sortez la viande dès qu’elle affiche 63 °C : elle résiste un peu sous le doigt et le jus qui perle est clair.",
          timer: { minutes: 15, label: "Filets au four" },
          tip: "La queue de la sauteuse sort brûlante du four et le reste longtemps. Posez un torchon dessus pour ne pas l’oublier.",
        },
        {
          title: "Laisser reposer",
          text: "Posez les filets sur une assiette, couvrez-les d’une feuille d’aluminium sans serrer et laissez reposer 8 minutes. Le centre gagne encore 2 ou 3 degrés et garde un rose pâle : à ce stade, la viande est cuite et sûre. Pendant ce temps, faites la sauce.",
          timer: { minutes: 8, label: "Repos de la viande" },
        },
      ],
    },
    {
      title: "La sauce",
      steps: [
        {
          title: "Faire fondre les échalotes",
          text: "Remettez la sauteuse sur feu moyen, en la tenant avec une manique. S’il reste beaucoup de gras, n’en gardez qu’une cuillerée. Faites fondre les échalotes 2 minutes en remuant, jusqu’à ce qu’elles soient translucides, sans les laisser colorer.",
          timer: { minutes: 2, label: "Échalotes" },
        },
        {
          title: "Déglacer au vin blanc",
          text: "Versez le vin blanc et grattez le fond à la cuillère en bois pour décoller les sucs bruns. Laissez réduire de moitié, 2 à 3 minutes, jusqu’à ce que l’odeur d’alcool ne pique plus le nez.",
          timer: { minutes: 3, label: "Réduire le vin" },
        },
        {
          title: "Ajouter la crème",
          text: "Ajoutez la crème et le jus que la viande a rendu sur l’assiette. Laissez frémir 3 minutes : la sauce doit napper le dos d’une cuillère, et un doigt passé dessus doit laisser une trace nette.",
          timer: { minutes: 3, label: "Sauce à la crème" },
        },
        {
          title: "Incorporer la moutarde",
          text: "Retirez la sauteuse du feu et attendez que les bulles cessent. Incorporez les deux moutardes au fouet, goûtez, salez peu, poivrez. À partir de là, la sauce ne doit plus bouillir : si elle a refroidi, réchauffez-la à feu très doux.",
          tip: "Bouillie, la moutarde perd son piquant et prend une note amère. C’est la seule erreur de cette recette qui ne se rattrape pas vraiment.",
        },
        {
          title: "Trancher et servir",
          text: "Retirez la ficelle. Taillez les filets en biais, en tranches de 1,5 cm, avec un couteau bien affûté. Disposez-les sur des assiettes chaudes, nappez de sauce et parsemez de ciboulette.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi le rosé est sans danger",
      text: "Dans une pièce de viande entière, les bactéries se trouvent en surface, et la surface a largement dépassé 100 °C pendant la saisie. À l’intérieur, 63 °C suivis du repos suffisent. Le rose pâle qui reste vient de la myoglobine, le pigment du muscle, qui n’est pas encore complètement dénaturée à cette température. C’est une affaire de couleur, pas de cuisson. Le porc haché, lui, doit être cuit à cœur.",
    },
    {
      title: "La croûte et les sucs",
      text: "Au-delà de 140 °C environ, les sucres et les acides aminés de la surface réagissent entre eux : c’est la réaction de Maillard, qui donne la croûte brune et les arômes grillés. Une partie accroche au fond de la sauteuse. Le vin blanc dissout ces sucs, et c’est eux qui donnent du goût à la sauce.",
    },
    {
      title: "La moutarde craint l’ébullition",
      text: "Le piquant de la moutarde vient surtout de l’isothiocyanate d’allyle, une molécule volatile qui se forme quand la graine broyée rencontre un liquide. La chaleur la fait partir. Une sauce bouillie après la moutarde perd son nez et laisse ressortir l’amertume des graines.",
    },
    {
      title: "Crème épaisse plutôt qu’allégée",
      text: "Une crème entière à 30 % de matière grasse supporte l’ébullition et l’acidité du vin et de la moutarde. Une crème allégée contient moins de gras pour protéger ses protéines : chauffées avec un acide, elles se resserrent en petits grumeaux et la sauce tranche.",
    },
  ],
  tips: [
    "Prenez deux filets de la même grosseur : ils cuisent au même rythme et vous n’avez pas à en sortir un avant l’autre.",
    "Piquez le thermomètre par le bout du filet, dans l’axe. Piqué par le dessus, il traverse vite la viande et mesure une zone plus cuite que le centre.",
    "Mélangez les deux moutardes : la Dijon apporte le piquant et lie la sauce, l’ancienne apporte des grains qui craquent sous la dent.",
    "Chauffez les assiettes quelques minutes dans le four éteint, porte entrouverte : une sauce à la crème fige vite sur une assiette froide.",
  ],
  mistakes: [
    "Laisser la membrane nacrée : le filet se tord à la cuisson et certaines bouchées restent caoutchouteuses. Elle se retire en deux minutes sur la viande crue.",
    "Prolonger la cuisson « pour être sûr » : au-delà de 70 °C, le filet mignon devient sec et farineux. Si c’est trop tard, tranchez-le plus fin et servez-le bien nappé de sauce.",
    "Faire bouillir la sauce après la moutarde : elle s’affadit et devient amère. Pour limiter les dégâts, ajoutez hors du feu une cuillerée de moutarde fraîche et 2 cuillerées de crème.",
    "Trancher la viande dès la sortie du four : le jus coule sur la planche au lieu de rester dans la tranche. Les 8 minutes de repos sont justement le temps de faire la sauce.",
    "Saisir dans une poêle tiède : la viande grise et rend son eau au lieu de dorer. Attendez que le beurre mousse avant de poser les filets.",
  ],
  variations: [
    {
      title: "Sans four, à couvert",
      text: "Après la saisie, baissez à feu doux, couvrez et laissez cuire 15 à 20 minutes en retournant les filets toutes les 5 minutes, jusqu’à 63 °C à cœur. La croûte ramollit un peu, mais les sucs restent au fond pour la sauce.",
    },
    {
      title: "Tout à l’ancienne",
      text: "Remplacez les deux moutardes par 3 cuillerées à soupe de moutarde à l’ancienne. La sauce est plus douce, moins piquante, et pleine de grains.",
    },
    {
      title: "Au cidre",
      text: "Déglacez avec 15 cl de cidre brut à la place du vin blanc et laissez réduire 4 minutes au lieu de 3. La sauce prend une note de pomme qui va très bien au porc.",
    },
  ],
  storage:
    "Il se garde 2 à 3 jours au réfrigérateur, la viande tranchée dans sa sauce, en boîte fermée. Réchauffez à feu très doux et à couvert, sans laisser bouillir à cause de la moutarde ; la viande sera un peu plus cuite que le premier jour. La sauce à la crème supporte mal la congélation.",
  pairing:
    "Des tagliatelles fraîches ou une purée de pommes de terre pour profiter de la sauce, et des haricots verts à côté. Dans le verre, un blanc sec qui a un peu de corps, un mâcon par exemple.",
  faq: [
    {
      q: "Le filet mignon de porc peut-il être rosé ?",
      a: "Oui. À 63 °C à cœur, suivis de quelques minutes de repos, une pièce entière de porc est cuite et sans risque, même si le centre garde une teinte rosée. Ce rose vient du pigment du muscle, pas d’un manque de cuisson. Cela ne vaut pas pour le porc haché ni pour la chair à saucisse, qui se cuisent à cœur, sans trace de rose.",
    },
    {
      q: "Combien de temps cuire un filet mignon au four ?",
      a: "12 à 18 minutes à 180 °C, après l’avoir saisi 8 minutes sur toutes ses faces, pour un filet de 400 g environ. Le temps dépend surtout de son épaisseur : fiez-vous au thermomètre, sortez-le à 63 °C à cœur et laissez-le reposer 8 minutes avant de le trancher.",
    },
    {
      q: "Pourquoi ma sauce à la moutarde est-elle amère ?",
      a: "Parce qu’elle a bouilli après l’ajout de la moutarde. La chaleur chasse les molécules piquantes et laisse ressortir l’amertume des graines. Ajoutez la moutarde hors du feu, à la toute fin, et réchauffez ensuite à feu très doux, sans jamais retrouver l’ébullition.",
    },
    {
      q: "Faut-il retirer la peau blanche du filet mignon ?",
      a: "Oui. Cette membrane nacrée ne fond pas à la cuisson : elle se rétracte, fait vriller la viande et reste élastique. Glissez un couteau fin dessous, lame inclinée vers la membrane plutôt que vers la chair, et retirez-la par bandes.",
    },
    {
      q: "Peut-on préparer le filet mignon à la moutarde à l’avance ?",
      a: "Oui, la veille au plus tôt, en acceptant une viande un peu plus cuite. Gardez filet et sauce à part au réfrigérateur. Au moment de servir, tranchez la viande froide, glissez-la dans la sauce et réchauffez le tout 5 minutes à feu très doux, à couvert, sans laisser bouillir.",
    },
    {
      q: "Peut-on remplacer la crème fraîche épaisse ?",
      a: "Oui, par de la crème liquide entière à 30 %, qui donne une sauce plus fluide : laissez-la frémir 1 ou 2 minutes de plus. Évitez la crème allégée, qui risque de trancher avec l’acidité du vin et de la moutarde.",
    },
  ],
  nutrition: { calories: 470, protein: 44, fat: 30, saturatedFat: 15, carbs: 5, sugar: 3, fiber: 1, sodium: 750 },
  annotations: { hero: "sortie à 63 °C, rosée au centre", detail: "la moutarde arrive hors du feu" },
  images: {
    heroAlt:
      "Filet mignon de porc à la moutarde en médaillons dorés, dans une sauce crème à la ciboulette, servi dans un bol mauve",
    detailAlt:
      "Gros plan sur les médaillons de filet mignon dorés, nappés de sauce à la moutarde à l’ancienne et de ciboulette",
    credits: {
      hero: {
        photographer: "Malakoff Médéric",
        url: "https://commons.wikimedia.org/w/index.php?curid=44352798",
        source: "Wikimedia Commons",
        license: "CC BY 2.0",
      },
      detail: {
        photographer: "Malakoff Médéric",
        url: "https://commons.wikimedia.org/w/index.php?curid=44352798",
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
    accent: "#C9971C",
    onAccent: "#1B1712",
    ink: "#755607",
    tint: "#FAF3DF",
    deep: "#17120A",
    focus: "56% 55%",
  },
});
