import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "veloute-de-chataignes",
  title: "Velouté de châtaignes",
  seoTitle: "Velouté de châtaignes et lardons croustillants, en 45 min",
  tagline: "Mixez plus longtemps que vous ne pensez.",
  description:
    "Velouté de châtaignes pour 6 : 400 g de marrons cuits sous vide, 80 cl de bouillon, 15 cl de crème, mixé longuement et servi avec des lardons, en 45 min.",
  summary:
    "Pour 6 personnes, faites suer un oignon dans 20 g de beurre, ajoutez 400 g de marrons cuits sous vide, mouillez avec 80 cl de bouillon et laissez frémir 20 minutes. Mixez au moins 2 minutes avec 15 cl de crème, salez seulement à la fin, puis servez avec 100 g de lardons croustillants et quelques marrons dorés à la poêle. Il faut 45 minutes en tout, dont 15 minutes de travail.",
  intro: [
    "Le velouté de châtaignes est l’entrée de fête qui se prépare pendant que le reste du repas occupe le four. Des marrons déjà cuits, un oignon, du bouillon, un peu de crème : la châtaigne apporte son goût de noisette et son amidon, qui épaissit la soupe sans farine.",
    "Il rate rarement, mais toujours de la même façon. Granuleux, parce qu’on a mixé trop vite. Épais comme un plâtre une fois réchauffé. Ou trop salé, entre le bouillon et les lardons.",
    "D’où deux habitudes à prendre : mixer longtemps, au moins 2 minutes, et ne saler qu’à la toute fin, après avoir goûté. La garniture croustillante, elle, se pose au dernier moment.",
  ],
  category: "Entrée",
  cuisine: "Française",
  keywords: [
    "velouté de châtaignes",
    "velouté de marrons",
    "soupe de châtaignes",
    "velouté de châtaignes lardons",
    "velouté de marrons sous vide",
    "entrée de noël",
    "velouté de châtaignes champignons",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 15, cook: 30 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["noel", "hiver"],
  equipment: [
    "casserole de 3 l",
    "mixeur plongeant ou blender",
    "poêle",
    "papier absorbant",
    "passoire fine (facultatif)",
  ],
  ingredients: [
    {
      title: "Le velouté",
      items: [
        { qty: 20, unit: "g", name: "beurre", step: 5 },
        { qty: 1, name: "oignon", plural: "oignons", note: "ou 2 échalotes, émincé", step: 1 },
        {
          qty: 450,
          unit: "g",
          name: "marron cuit",
          plural: "marrons cuits",
          note: "au naturel, sous vide ou en bocal, dont 50 g pour la garniture",
          step: 10,
        },
        { qty: 80, unit: "cl", name: "bouillon de volaille", note: "ou de légumes, chaud", step: 5 },
        { qty: 15, unit: "cl", name: "crème liquide entière", step: 1 },
        { qty: 1, unit: "pincee", name: "noix de muscade râpée", optional: true },
        { name: "sel fin et poivre du moulin" },
      ],
    },
    {
      title: "La garniture",
      items: [
        { qty: 100, unit: "g", name: "lardons fumés", step: 10 },
        { qty: 5, unit: "g", name: "ciboulette", note: "ciselée", step: 1, optional: true },
      ],
    },
  ],
  method: [
    {
      title: "Le velouté",
      steps: [
        {
          title: "Faire suer l’oignon",
          text: "Faites fondre le beurre dans la casserole sur feu moyen et faites-y suer l’oignon 5 minutes, en remuant, jusqu’à ce qu’il soit translucide et tendre, sans le laisser colorer.",
          timer: { minutes: 5, label: "Oignon" },
        },
        {
          title: "Ajouter les marrons",
          text: "Mettez de côté 50 g des plus beaux marrons pour la garniture. Émiettez le reste dans la casserole et remuez 2 minutes dans le beurre, jusqu’à ce qu’ils commencent à sentir la noisette grillée.",
          timer: { minutes: 2, label: "Marrons" },
          tip: "Gardez des marrons entiers pour le dessus : dorés à la poêle, ils rappellent dans la bouche ce qu’il y a dans le bol.",
        },
        {
          title: "Mouiller et cuire",
          text: "Versez le bouillon chaud, portez à frémissement et laissez cuire 20 minutes à couvert, feu doux. Les marrons doivent s’écraser sans résistance contre la paroi avec le dos d’une cuillère.",
          timer: { minutes: 20, label: "Velouté" },
        },
        {
          title: "Mixer longuement",
          text: "Hors du feu, ajoutez la crème et mixez 2 à 3 minutes, jusqu’à ce que le velouté soit parfaitement lisse et brillant. Pour une texture de restaurant, passez-le ensuite à la passoire fine en pressant avec une louche.",
          timer: { minutes: 3, label: "Mixage" },
          tip: "Au blender, ne remplissez le bol qu’à moitié et tenez le couvercle sous un torchon : la vapeur d’une soupe brûlante peut le soulever.",
        },
        {
          title: "Ajuster et assaisonner",
          text: "Le velouté doit napper la cuillère et couler lentement. S’il est trop épais, ajoutez de l’eau chaude ou du bouillon, 5 cl à la fois. Goûtez seulement maintenant, puis salez, poivrez et ajoutez la muscade. Gardez-le au chaud à feu très doux.",
          tip: "Le bouillon est déjà salé, les lardons le seront aussi : il manque souvent moins de sel qu’on ne le croit.",
        },
      ],
    },
    {
      title: "La garniture",
      steps: [
        {
          title: "Griller les lardons",
          text: "Faites revenir les lardons dans la poêle sans matière grasse, sur feu moyen, 6 à 8 minutes, jusqu’à ce qu’ils soient dorés et croustillants. Égouttez-les sur du papier absorbant en laissant le gras dans la poêle.",
          timer: { minutes: 8, label: "Lardons" },
        },
        {
          title: "Dorer les marrons",
          text: "Cassez les marrons réservés en deux ou trois morceaux et faites-les sauter dans le gras des lardons, sur feu moyen, jusqu’à ce qu’ils soient bien dorés sur toutes les faces.",
        },
        {
          title: "Servir",
          text: "Versez le velouté brûlant dans des assiettes creuses ou des bols chauds. Posez au centre les lardons et les marrons dorés, ajoutez la ciboulette et un tour de poivre, et servez aussitôt, avant que la garniture ne ramollisse.",
        },
      ],
    },
  ],
  science: [
    {
      title: "La châtaigne épaissit seule",
      text: "Contrairement aux noix et aux noisettes, la châtaigne est pauvre en graisses et riche en amidon. Cet amidon, déjà gonflé par la cuisson, se disperse dans le liquide au mixage et lie le velouté : pas besoin de farine ni de pomme de terre.",
    },
    {
      title: "Il épaissit encore en refroidissant",
      text: "En refroidissant, l’amidon forme un gel de plus en plus ferme : un velouté parfait le soir peut devenir pâteux le lendemain. Il suffit d’ajouter un peu de liquide chaud au réchauffage pour lui rendre sa texture.",
    },
    {
      title: "Pourquoi mixer si longtemps",
      text: "La chair de la châtaigne contient des fibres qui, mixées 30 secondes, laissent une sensation farineuse sur la langue. Deux à trois minutes réduisent ces particules assez finement pour que la bouche ne les perçoive plus, et la passoire fine retient les dernières.",
    },
  ],
  tips: [
    "Prenez des marrons cuits au naturel, entiers : pas de crème de marrons ni de purée vanillée, qui sont sucrées.",
    "Avec un bouillon en cube, diluez un cube pour 1 litre d’eau plutôt que pour 50 cl : un bouillon trop concentré écrase le goût de la châtaigne.",
    "Préparez le velouté la veille si vous recevez : il se réchauffe très bien, à condition d’ajouter un peu de bouillon. Seule la garniture se fait au dernier moment.",
    "En apéritif, servez-le dans des verrines de 80 à 100 ml : la recette en remplit une douzaine.",
    "Chauffez les bols ou les assiettes quelques minutes dans le four tiède : un velouté épais refroidit vite.",
  ],
  mistakes: [
    "Prendre de la crème de marrons à la place des marrons cuits : elle est sucrée et vanillée, le velouté devient un dessert. Vérifiez l’étiquette, il ne doit y avoir que des châtaignes.",
    "Saler en début de cuisson : entre le bouillon et les lardons, le velouté finit trop salé. Goûtez seulement après le mixage, puis ajustez.",
    "Mixer 30 secondes : la texture reste granuleuse et farineuse. Mixez au moins 2 minutes, ou passez à la passoire fine.",
    "Réchauffer le velouté de la veille tel quel : il est devenu épais comme une purée. Ajoutez de l’eau chaude ou du bouillon, 5 cl à la fois, en fouettant.",
    "Mettre les lardons dans le velouté à l’avance : ils ramollissent et salent tout. Posez-les sur le dessus au moment de servir.",
  ],
  variations: [
    {
      title: "Aux champignons",
      text: "Remplacez les lardons par 150 g de pleurotes, de girolles ou de champignons de Paris émincés, saisis 5 minutes à feu vif dans 15 g de beurre et salés à la fin. Avec un bouillon de légumes, le velouté devient végétarien.",
    },
    {
      title: "Avec des châtaignes fraîches",
      text: "Comptez 550 g de châtaignes en coque. Incisez-les, plongez-les 5 minutes dans l’eau bouillante, puis pelez-les encore chaudes, écorce et peau brune. Faites-les cuire 30 à 35 minutes dans le bouillon au lieu de 20, jusqu’à ce qu’elles s’écrasent sous la fourchette.",
    },
    {
      title: "Plus léger",
      text: "Remplacez la crème par 15 cl de lait entier, ou réduisez-la à 5 cl et ajoutez 10 cl de bouillon. Le velouté reste lisse, simplement moins rond.",
    },
  ],
  storage:
    "Le velouté se garde 2 à 3 jours au réfrigérateur, dans une boîte fermée, une fois refroidi : mettez-le au frais dans les 2 heures. Il se congèle 3 mois, de préférence avant d’ajouter la crème ; décongelez-le au réfrigérateur et ne le recongelez pas. Gardez les lardons à part, ils ne se congèlent pas bien.",
  pairing:
    "Un blanc sec et rond, un chardonnay du Mâconnais ou un jurançon sec. En entrée d’un repas de fête, il précède bien une volaille rôtie.",
  faq: [
    {
      q: "Peut-on faire un velouté de châtaignes avec des marrons sous vide ?",
      a: "Oui, c’est ce que prévoit cette recette : 400 g de marrons cuits au naturel, sous vide ou en bocal. Ils sont déjà pelés et cuits, il suffit de les laisser frémir 20 minutes dans le bouillon pour qu’ils s’attendrissent et parfument le liquide.",
    },
    {
      q: "Quelle différence entre châtaigne et marron ?",
      a: "Pour ce velouté, aucune. Les deux viennent du châtaignier ; on appelle marrons les variétés dont le fruit n’est pas cloisonné, plus faciles à peler. Le marron d’Inde, lui, vient d’un autre arbre, le marronnier, et n’est pas comestible.",
    },
    {
      q: "Peut-on préparer le velouté de châtaignes la veille ?",
      a: "Oui. Gardez-le couvert au réfrigérateur, 2 à 3 jours au maximum. Il épaissit en refroidissant : réchauffez-le à feu doux en ajoutant un peu de bouillon ou d’eau chaude, et préparez la garniture au dernier moment.",
    },
    {
      q: "Peut-on congeler un velouté de châtaignes ?",
      a: "Oui, 3 mois au congélateur, de préférence sans la crème, que vous ajouterez au réchauffage. Décongelez-le au réfrigérateur, réchauffez-le en remuant et ne le recongelez pas.",
    },
    {
      q: "Quelle quantité de velouté prévoir par personne ?",
      a: "Environ 200 ml en assiette creuse, 80 à 100 ml en verrine pour l’apéritif. Cette recette donne à peu près 1,3 litre : six assiettes, ou une douzaine de verrines.",
    },
    {
      q: "Comment rendre un velouté de châtaignes moins épais ?",
      a: "Ajoutez du bouillon ou de l’eau chaude, 5 cl à la fois, en fouettant, jusqu’à ce qu’il nappe la cuillère et coule lentement. Goûtez ensuite : un velouté allongé à l’eau peut demander une pincée de sel.",
    },
  ],
  nutrition: {
    calories: 280,
    protein: 5,
    fat: 16,
    saturatedFat: 9,
    carbs: 28,
    sugar: 7,
    fiber: 4,
    sodium: 720,
  },
  annotations: { hero: "un trait d’huile, un peu de ciboulette", detail: "des marrons au naturel, jamais sucrés" },
  images: {
    heroAlt:
      "Velouté de châtaignes lisse dans une assiette creuse blanche, avec un filet d’huile et un peu de ciboulette ciselée",
    detailAlt: "Châtaignes entières dans leur écorce brune et brillante, l’ingrédient du velouté de châtaignes",
    credits: {
      hero: {
        photographer: "Alpha from Melbourne, Australia",
        url: "https://commons.wikimedia.org/wiki/File:Chestnut_and_parsnip_soup.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 2.0",
      },
      detail: {
        photographer: "Tijana Drndarski",
        url: "https://www.pexels.com/photo/close-up-photo-of-chestnuts-on-white-background-5474401/",
        source: "Pexels",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#B07A4A",
    onAccent: "#1B1712",
    ink: "#7A4E2A",
    tint: "#F8F1E9",
    deep: "#1A120C",
    focus: "50% 45%",
  },
});
