import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "choucroute",
  title: "Choucroute garnie",
  seoTitle: "Choucroute garnie au riesling, viandes fumées et saucisses",
  tagline: "Chaque viande entre à son heure.",
  description:
    "Choucroute garnie pour 6 : 1,5 kg de chou cru au riesling et au genièvre, palette et lard fumés, échine, saucisses et pommes de terre. Prête en 2 h 40.",
  summary:
    "Pour 6 personnes, faites fondre 2 oignons dans du saindoux, ajoutez 1,5 kg de choucroute crue, rincée ou non selon son acidité, puis la palette et le lard fumés, le genièvre, 375 ml de riesling et 250 ml de bouillon. Laissez mijoter 2 h à couvert en ajoutant l’échine fraîche après 1 h, les saucisses de Montbéliard 20 minutes avant la fin et celles de Strasbourg pour les 10 dernières. Comptez 2 h 40 en tout, dont 30 minutes de travail.",
  intro: [
    "Une choucroute garnie, c’est du chou fermenté qui cuit doucement dans du vin blanc avec des viandes de porc, puis qu’on sert avec des pommes de terre et de la moutarde. Elle demande deux heures de cuisson, mais presque pas de travail.",
    "Tout se joue dans l’ordre. Les viandes fumées et crues ont besoin de longues heures, l’échine d’une heure, les saucisses de quelques minutes. Mettez tout ensemble au départ et vous aurez des saucisses éclatées sur une palette encore ferme.",
    "Avant de commencer, goûtez un filament de chou cru. C’est lui qui vous dira s’il faut le rincer.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "choucroute garnie",
    "recette choucroute garnie",
    "choucroute alsacienne",
    "choucroute au riesling",
    "faut-il rincer la choucroute",
    "temps de cuisson choucroute crue",
    "choucroute maison",
    "viandes pour choucroute",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 30, cook: 130 },
  difficulty: "Facile",
  cost: "€€€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: [
    "cocotte en fonte de 6 l avec couvercle",
    "casserole pour les pommes de terre",
    "grand saladier et passoire",
    "thermomètre de cuisson",
  ],
  ingredients: [
    {
      title: "La choucroute",
      items: [
        { qty: 1500, unit: "g", name: "choucroute crue", note: "chez le charcutier ou au rayon traiteur", step: 100 },
        { qty: 40, unit: "g", name: "saindoux", note: "ou graisse d’oie", step: 5 },
        { qty: 2, name: "oignon jaune", plural: "oignons jaunes", note: "émincés", step: 1 },
        { qty: 10, name: "baie de genièvre", plural: "baies de genièvre", note: "légèrement écrasées", step: 1 },
        { qty: 2, unit: "feuille", name: "laurier", step: 1 },
        { qty: 2, name: "clou de girofle", plural: "clous de girofle", step: 1 },
        { qty: 1, unit: "cac", name: "poivre noir en grains", step: 0.5 },
        { qty: 1, unit: "cac", name: "graines de carvi", optional: true, step: 0.5 },
        { qty: 375, unit: "ml", name: "riesling d’Alsace", note: "sec", step: 25 },
        { qty: 250, unit: "ml", name: "bouillon de volaille", note: "plus un peu pour ajuster", step: 25 },
      ],
    },
    {
      title: "Les viandes",
      items: [
        { qty: 800, unit: "g", name: "palette de porc fumée", note: "crue, avec l’os", step: 50 },
        { qty: 300, unit: "g", name: "poitrine de porc fumée", note: "en un morceau", step: 50 },
        {
          qty: 6,
          unit: "tranche",
          name: "échine de porc fraîche",
          note: "de 2 cm d’épaisseur, environ 600 g",
          step: 1,
        },
        { qty: 2, name: "saucisse de Montbéliard", plural: "saucisses de Montbéliard", step: 1 },
        { qty: 6, name: "saucisse de Strasbourg", plural: "saucisses de Strasbourg", step: 1 },
      ],
    },
    {
      title: "Les pommes de terre",
      items: [
        { qty: 1200, unit: "g", name: "pommes de terre à chair ferme", note: "charlotte ou ratte", step: 100 },
        { qty: 1, unit: "cas", name: "gros sel", step: 1, fixed: true },
        { name: "moutarde forte", note: "pour servir" },
      ],
    },
  ],
  method: [
    {
      title: "La choucroute",
      steps: [
        {
          title: "Goûter, puis rincer ou non",
          text: "Goûtez un filament de chou cru. S’il est franchement acide ou salé, plongez la choucroute une fois dans un grand saladier d’eau froide, égouttez-la et essorez-la à pleines mains. S’il est agréablement aigrelet, ne la rincez pas : démêlez simplement les filaments du bout des doigts.",
          tip: "Un seul rinçage, jamais plusieurs : l’eau emporte le sel, mais aussi le goût de fermentation.",
        },
        {
          title: "Faire fondre les oignons",
          text: "Faites fondre le saindoux dans la cocotte à feu moyen-doux. Ajoutez les oignons et laissez-les fondre 8 minutes en remuant, jusqu’à ce qu’ils soient translucides et souples, sans coloration.",
          timer: { minutes: 8, label: "Oignons fondus" },
        },
        {
          title: "Monter la cocotte",
          text: "Étalez la moitié de la choucroute sur les oignons. Posez dessus la palette et la poitrine fumées, parsemez de genièvre, laurier, girofle, poivre et carvi, puis couvrez du reste de chou. Versez le riesling et le bouillon, portez à frémissement, couvrez et laissez cuire 1 heure à feu doux.",
          timer: { minutes: 60, label: "Viandes fumées" },
        },
        {
          title: "Ajouter l’échine",
          text: "Glissez les tranches d’échine fraîche dans le chou, sans les laisser en surface. Vérifiez qu’il reste 2 cm de liquide au fond, sinon ajoutez 100 ml de bouillon. Couvrez et poursuivez 30 minutes à frémissement.",
          timer: { minutes: 30, label: "Échine dans le chou" },
        },
        {
          title: "Cuire les pommes de terre",
          text: "Pendant ce temps, épluchez les pommes de terre et mettez-les dans une casserole d’eau froide avec le gros sel. Portez à ébullition et laissez cuire 20 à 25 minutes à petits bouillons, jusqu’à ce que la lame d’un couteau y entre sans résistance. Égouttez et gardez au chaud.",
          timer: { minutes: 25, label: "Pommes de terre" },
        },
        {
          title: "Ajouter les Montbéliard",
          text: "Enfouissez les saucisses de Montbéliard entières dans le chou, sans les piquer. Couvrez et laissez cuire 20 minutes à feu doux.",
          timer: { minutes: 20, label: "Saucisses de Montbéliard" },
        },
        {
          title: "Réchauffer les Strasbourg",
          text: "Posez les saucisses de Strasbourg sur le chou, couvrez et laissez-les chauffer 10 minutes à la vapeur, à feu doux. Elles doivent gonfler légèrement sans éclater.",
          timer: { minutes: 10, label: "Saucisses de Strasbourg" },
          tip: "Elles sont déjà cuites. Dans un liquide qui bout, leur peau fine se fend en quelques minutes.",
        },
        {
          title: "Vérifier les cuissons",
          text: "La pointe d’un couteau doit traverser la palette sans résistance. Au thermomètre, l’échine dépasse 63 °C à cœur et les Montbéliard 70 °C. Leur chair reste rosée, c’est le sel de saumure, pas un manque de cuisson.",
        },
        {
          title: "Dresser",
          text: "Retirez laurier et clous de girofle. Égouttez légèrement la choucroute et dressez-la en dôme sur un plat chaud. Tranchez la palette, la poitrine et les Montbéliard, posez les viandes sur le chou, les pommes de terre autour, et servez avec la moutarde.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Un chou qui reste ferme",
      text: "La choucroute est du chou fermenté par des bactéries lactiques, qui l’ont rendu acide. En milieu acide, les pectines qui tiennent les parois des cellules se dégradent beaucoup plus lentement. C’est pour cela qu’après 2 heures de cuisson, les filaments gardent une légère tenue, quand un chou frais tomberait en purée.",
    },
    {
      title: "Rincer, c’est diluer",
      text: "Le sel et les acides de la fermentation sont solubles dans l’eau. Un rinçage en retire une bonne part, ce qui adoucit un chou trop agressif. Mais les arômes produits par la fermentation partent avec eux, d’où l’intérêt de goûter avant.",
    },
    {
      title: "Pourquoi les saucisses éclatent",
      text: "Une saucisse contient beaucoup d’eau. Dans un liquide qui bout, cette eau se dilate et se change en vapeur sous la peau, qui finit par céder. À feu doux, la chaleur arrive moins vite et la peau tient.",
    },
  ],
  tips: [
    "Achetez une choucroute crue, au poids, chez le charcutier ou au rayon traiteur. Celle vendue en bocal ou en sachet est souvent déjà cuite et ne supporte pas 2 heures de cocotte.",
    "Écrasez les baies de genièvre du plat d’un couteau avant de les ajouter : elles libèrent leur parfum résineux.",
    "Prenez un riesling sec. Un vin moelleux ou de vendanges tardives donnerait un chou sucré.",
    "Mettez les épices dans une boule à thé si vous ne voulez pas que vos invités croquent un clou de girofle.",
    "Elle est encore meilleure réchauffée le lendemain : le chou a eu le temps de prendre le goût des viandes fumées.",
  ],
  mistakes: [
    "Laver la choucroute à grande eau, plusieurs fois : elle perd son goût et devient fade. Un seul rinçage suffit, et seulement si elle est très acide.",
    "Mettre toutes les viandes en même temps : les saucisses éclatent et se dessèchent pendant que la palette reste ferme. Respectez l’ordre d’entrée.",
    "Faire bouillir à gros bouillons : le chou attache et les viandes durcissent. Un frémissement, couvercle fermé, du début à la fin.",
    "Laisser la cocotte s’assécher : le chou brunit au fond et prend un goût amer. Gardez 2 cm de liquide et rajoutez du bouillon chaud si besoin.",
  ],
  variations: [
    {
      title: "Sans vin",
      text: "Remplacez le riesling par la même quantité de bouillon de volaille, soit 625 ml de bouillon en tout. Le chou est plus doux et un peu moins parfumé. C’est la version à préparer pour les enfants et les femmes enceintes.",
    },
    {
      title: "À la bière",
      text: "Remplacez le riesling par 330 ml de bière blonde et gardez 250 ml de bouillon. La choucroute prend une légère amertume qui va bien avec les viandes fumées.",
    },
    {
      title: "Au four",
      text: "Après avoir monté la cocotte et porté à frémissement sur le feu, enfournez-la couverte à 160 °C. Gardez les mêmes temps et le même ordre pour les viandes : la chaleur est plus régulière et le fond n’attache pas.",
    },
  ],
  storage:
    "Mettez-la au réfrigérateur dans les 2 heures, dans une boîte fermée : elle se garde 3 jours, les pommes de terre à part. Choucroute et viandes se congèlent 3 mois, sans les pommes de terre, et ne se recongèlent pas. Réchauffez-les couvertes à feu doux 20 à 30 minutes avec 100 ml de bouillon, jusqu’à ce que les viandes soient brûlantes à cœur.",
  pairing:
    "Le même riesling sec que dans la cocotte, ou un sylvaner d’Alsace. Une bière blonde va très bien aussi.",
  faq: [
    {
      q: "Faut-il rincer la choucroute crue ?",
      a: "Pas toujours. Goûtez un filament : s’il est très acide ou très salé, rincez une seule fois à l’eau froide et essorez. S’il est agréablement aigrelet, contentez-vous de démêler le chou. Plusieurs rinçages la rendent fade.",
    },
    {
      q: "Combien de temps faut-il cuire une choucroute crue ?",
      a: "2 heures à couvert, à petit frémissement. Le chou devient tendre tout en gardant une légère tenue, et les viandes fumées crues ont le temps de cuire. Une choucroute déjà cuite n’a besoin que de 30 à 40 minutes avec des viandes déjà cuites.",
    },
    {
      q: "Quelle quantité de choucroute par personne ?",
      a: "250 g de choucroute crue, soit 1,5 kg pour 6. Elle perd peu de volume à la cuisson. Ajoutez 200 g de pommes de terre et environ 350 g de viandes, os compris, par personne.",
    },
    {
      q: "L’alcool du riesling s’évapore-t-il à la cuisson ?",
      a: "Non, pas entièrement. Après 2 heures de cuisson à couvert, une partie reste dans le chou. Pour des enfants, une femme enceinte ou quelqu’un qui ne boit pas d’alcool, remplacez le vin par du bouillon.",
    },
    {
      q: "Peut-on préparer la choucroute la veille ?",
      a: "Oui, elle y gagne même. Laissez-la refroidir, mettez-la au réfrigérateur dans les 2 heures, puis réchauffez-la couverte à feu doux 20 à 30 minutes avec un peu de bouillon. Cuisez les pommes de terre au dernier moment.",
    },
    {
      q: "Quelles saucisses mettre dans une choucroute ?",
      a: "Les saucisses de Strasbourg, déjà cuites, qu’on se contente de réchauffer, et des saucisses de Montbéliard, fumées, qui doivent cuire 20 minutes. On peut ajouter un cervelas, déjà cuit lui aussi, à réchauffer comme les Strasbourg.",
    },
  ],
  nutrition: {
    calories: 1110,
    protein: 64,
    fat: 75,
    saturatedFat: 27,
    carbs: 43,
    sugar: 5,
    fiber: 10,
    sodium: 3800,
  },
  annotations: {
    hero: "les saucisses entrent en dernier",
    detail: "rosée, la montbéliard est cuite",
  },
  images: {
    heroAlt:
      "Choucroute garnie dans une grande poêle, avec saucisses entières et coupées, jarret, viande fumée tranchée et pommes de terre sur le chou",
    detailAlt:
      "Assiette de choucroute garnie avec une tranche de viande fumée, deux saucisses, du chou et de la ciboulette",
    credits: {
      hero: {
        photographer: "Brücke-Osteuropa",
        url: "https://commons.wikimedia.org/w/index.php?curid=22527601",
        source: "Wikimedia Commons",
        license: "CC0",
      },
      detail: {
        photographer: "Sebleouf",
        url: "https://commons.wikimedia.org/w/index.php?curid=132293446",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#D6A21E",
    onAccent: "#1B1712",
    ink: "#7A5600",
    tint: "#FAF3DF",
    deep: "#1A1406",
    focus: "60% 55%",
  },
});
