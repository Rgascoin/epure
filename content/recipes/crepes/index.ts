import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "crepes",
  title: "Pâte à crêpes",
  seoTitle: "Pâte à crêpes : la recette de base, sans grumeaux",
  tagline: "La première, on la mange debout.",
  description:
    "Pâte à crêpes classique pour 15 crêpes : 250 g de farine, 4 œufs, 55 cl de lait et du beurre noisette, sans grumeaux. Une heure de repos et c’est parti.",
  summary:
    "Pour 15 crêpes, la pâte à crêpes se fait avec 250 g de farine, une pincée de sel, 30 g de sucre, 4 œufs, 55 cl de lait versé petit à petit et 50 g de beurre noisette. Laissez-la reposer 1 heure, puis cuisez chaque crêpe dans une poêle de 24 cm bien chaude avec une petite louche de pâte : environ 1 minute sur la première face, 30 secondes sur la seconde.",
  intro: [
    "Une bonne pâte à crêpes, c’est 250 g de farine, 4 œufs, du lait, du beurre, et deux gestes. On verse le lait petit à petit pour éviter les grumeaux, puis on laisse la pâte reposer une heure. Elle devient fluide comme une crème liquide et donne des crêpes fines, qui se plient sans casser.",
    "On met du beurre noisette dans la pâte : il la parfume et empêche les crêpes de coller, si bien qu’on graisse à peine la poêle. Pour le reste, tout se joue sur la chaleur de la poêle, qu’on règle sur les deux premières crêpes.",
    "La première rate souvent. C’est normal, elle sert de test, et elle se mange très bien debout devant la cuisinière.",
  ],
  category: "Goûter",
  cuisine: "Française",
  keywords: [
    "pâte à crêpes",
    "recette crêpes",
    "pâte à crêpes facile",
    "pâte à crêpes sans grumeaux",
    "crêpes maison",
    "pâte à crêpes sans repos",
    "pâte à crêpes 250 g farine",
    "crêpes chandeleur",
  ],
  diet: ["vegetarian"],
  servings: 15,
  servingsLabel: { one: "crêpe", other: "crêpes" },
  times: { prep: 15, cook: 35, rest: 60 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  equipment: [
    "poêle à crêpes de 24 à 26 cm",
    "petite casserole",
    "grand saladier",
    "fouet",
    "petite louche (60 ml environ)",
    "spatule fine",
  ],
  ingredients: [
    {
      title: "La pâte",
      items: [
        { qty: 50, unit: "g", name: "beurre doux", step: 5 },
        { qty: 250, unit: "g", name: "farine", note: "T45 ou T55", step: 10 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 30, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 4, name: "œuf", plural: "œufs", note: "à température ambiante", step: 1 },
        {
          qty: 55,
          unit: "cl",
          name: "lait entier",
          note: "à température ambiante, dont 5 cl pour ajuster",
          step: 5,
        },
        { qty: 1, unit: "cas", name: "eau de fleur d’oranger", step: 0.5, optional: true },
      ],
    },
    {
      title: "La cuisson",
      items: [{ qty: 1, unit: "cas", name: "huile neutre", note: "tournesol ou colza", step: 0.5 }],
    },
  ],
  method: [
    {
      title: "La pâte",
      steps: [
        {
          title: "Faire un beurre noisette",
          text: "Faites fondre le beurre dans la petite casserole sur feu moyen. Il mousse, puis se colore : au bout de 3 à 4 minutes, il est blond doré, avec des petits points bruns au fond, et sent la noisette. Versez-le aussitôt dans un bol pour arrêter la cuisson et laissez tiédir.",
          timer: { minutes: 4, label: "Beurre noisette" },
        },
        {
          title: "Mélanger farine et œufs",
          text: "Dans le saladier, mélangez la farine, le sel et le sucre, puis creusez un puits. Cassez-y les œufs et fouettez au centre en ramenant la farine petit à petit, jusqu’à obtenir une pâte épaisse et parfaitement lisse.",
          tip: "On commence épais exprès : une pâte épaisse se fouette sans grumeaux. Si vous versez tout le lait d’un coup, la farine forme des boules qui ne se défont plus.",
        },
        {
          title: "Détendre au lait",
          text: "Versez 50 cl de lait en quatre ou cinq fois, en fouettant bien entre chaque ajout. Incorporez le beurre noisette tiède, puis la fleur d’oranger si vous en mettez. La pâte doit napper la louche comme une crème liquide ; si elle est plus épaisse, ajoutez le reste du lait.",
        },
        {
          title: "Laisser reposer",
          text: "Couvrez le saladier et laissez reposer 1 heure à température ambiante. Vous pouvez aussi la préparer jusqu’à 24 heures à l’avance et la garder au réfrigérateur : fouettez-la avant de vous en servir.",
          timer: { minutes: 60, label: "Repos de la pâte" },
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Chauffer la poêle",
          text: "Faites chauffer la poêle 2 minutes sur feu moyen-vif. Graissez-la avec un papier absorbant imbibé d’huile. Elle est à bonne température quand une goutte de pâte grésille aussitôt et se fige en quelques secondes.",
          timer: { minutes: 2, label: "Poêle" },
        },
        {
          title: "Cuire la première face",
          text: "Soulevez la poêle, versez une petite louche de pâte au centre et faites-la tourner tout de suite pour couvrir le fond en couche fine. Remettez sur le feu et laissez cuire environ 1 minute : la surface n’est plus brillante et les bords dorent et se décollent.",
          timer: { minutes: 1, label: "Première face" },
          tip: "Trop de pâte ? Reversez l’excédent dans le saladier dès que le fond est couvert. Vous aurez une crêpe fine et un bord un peu plus épais, ce n’est pas grave.",
        },
        {
          title: "Retourner et empiler",
          text: "Glissez la spatule sous la crêpe et retournez-la d’un geste. Laissez cuire 30 secondes, puis faites-la glisser sur une assiette. Empilez les crêpes les unes sur les autres, couvertes d’une assiette retournée, pour qu’elles restent chaudes et souples. Regraissez la poêle toutes les deux ou trois crêpes.",
          tip: "Si la crêpe colle, la poêle n’est pas assez chaude. Si elle prend avant d’être étalée, elle l’est trop : baissez un peu le feu.",
        },
        {
          title: "Garnir et servir",
          text: "Garnissez les crêpes encore chaudes : beurre et sucre, sucre et citron, confiture ou pâte à tartiner. Pliez-les en quatre et servez sans attendre.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi laisser reposer",
      text: "Pendant le repos, l’amidon de la farine absorbe le liquide, le gluten formé en fouettant se détend et les bulles d’air remontent. La pâte devient plus fluide et plus homogène. Les crêpes s’étalent plus finement et se déchirent moins. Sans repos, elles sont mangeables, mais un peu plus élastiques.",
    },
    {
      title: "Ce que fait le beurre noisette",
      text: "En chauffant, le beurre perd son eau, puis ses protéines de lait et son lactose brunissent : c’est la réaction de Maillard, qui donne l’odeur de noisette. Le gras du beurre, mêlé à la pâte, limite aussi l’adhérence à la poêle.",
    },
    {
      title: "Les taches brunes",
      text: "Là où la pâte touche le métal très chaud, les sucres et les protéines du lait et des œufs brunissent. Les petites bulles de vapeur qui se forment soulèvent la pâte par endroits, d’où ces taches en dentelle sur la première face.",
    },
  ],
  tips: [
    "Une poêle à crêpes en fonte ou en acier, bien culottée, donne des crêpes plus régulières qu’une poêle classique. Une bonne antiadhésive fait très bien l’affaire.",
    "Repérez le niveau de pâte sur votre louche pour la première crêpe réussie, puis gardez-le : toutes vos crêpes auront la même épaisseur.",
    "Si votre pâte a des grumeaux, passez-la au chinois, ou donnez 10 secondes de mixeur plongeant.",
    "Une pâte gardée au réfrigérateur épaissit : détendez-la avec un peu de lait le lendemain.",
    "Pour garder les crêpes au chaud plus longtemps, posez l’assiette sur une casserole d’eau frémissante.",
  ],
  mistakes: [
    "Verser tout le lait d’un coup sur la farine. La pâte fait des grumeaux qui ne se défont plus.",
    "Cuire dans une poêle tiède. La crêpe colle, reste pâle et devient caoutchouteuse.",
    "Mettre trop de pâte dans la poêle. On obtient une crêpe épaisse, plus proche du pancake.",
    "Retourner trop tôt. La crêpe n’a pas pris et se déchire.",
    "Graisser trop la poêle. Les bords frient et la crêpe devient grasse.",
  ],
  variations: [
    {
      title: "Au rhum",
      text: "Ajoutez 2 c. à soupe de rhum ambré dans la pâte avec le beurre. La cuisson très courte n’évapore pas tout l’alcool : réservez-les aux adultes, et évitez-les pour les femmes enceintes.",
    },
    {
      title: "Moitié lait, moitié eau",
      text: "Remplacez 25 cl de lait par 25 cl d’eau. Les crêpes sont plus légères, avec des bords plus croustillants.",
    },
    {
      title: "Sans lactose",
      text: "Prenez 55 cl de boisson d’avoine et remplacez le beurre noisette par 3 c. à soupe d’huile neutre. Elles ont moins de goût de beurre, mais se tiennent aussi bien.",
    },
  ],
  storage:
    "Les crêpes cuites se gardent 2 jours au réfrigérateur, filmées, et 2 mois au congélateur, séparées par du papier sulfurisé. Réchauffez-les 30 secondes par face à la poêle. La pâte crue se garde 24 heures au réfrigérateur, jamais plus de 2 heures à température ambiante.",
  pairing: "Un cidre brut bien frais pour les grands, un chocolat chaud ou un verre de lait pour les autres.",
  faq: [
    {
      q: "Faut-il laisser reposer la pâte à crêpes ?",
      a: "Ce n’est pas obligatoire, mais c’est mieux. Une heure de repos rend la pâte plus fluide et les crêpes plus fines et plus souples. Si vous êtes pressé, faites-les tout de suite : elles seront juste un peu plus élastiques.",
    },
    {
      q: "Comment faire une pâte à crêpes sans grumeaux ?",
      a: "Fouettez d’abord la farine avec les œufs pour obtenir une pâte épaisse et lisse, puis ajoutez le lait en plusieurs fois. S’il reste des grumeaux, passez la pâte au chinois ou donnez quelques secondes de mixeur plongeant.",
    },
    {
      q: "Combien de crêpes avec 250 g de farine ?",
      a: "Environ 15 crêpes dans une poêle de 24 cm, avec une petite louche de 60 ml de pâte par crêpe. Avec une poêle plus grande ou des crêpes plus épaisses, comptez plutôt 12.",
    },
    {
      q: "Combien de temps se garde la pâte à crêpes ?",
      a: "24 heures au réfrigérateur, couverte. Elle contient des œufs crus et du lait : ne la laissez pas plus de 2 heures à température ambiante. Fouettez-la avant usage et détendez-la avec un peu de lait si elle a épaissi.",
    },
    {
      q: "Pourquoi mes crêpes collent-elles à la poêle ?",
      a: "Le plus souvent, la poêle n’est pas assez chaude ou n’a pas été graissée. Chauffez-la 2 minutes sur feu moyen-vif, graissez-la, et sacrifiez la première crêpe pour régler le feu. Le beurre dans la pâte aide aussi.",
    },
    {
      q: "Peut-on congeler des crêpes ?",
      a: "Oui, 2 mois, cuites et séparées par du papier sulfurisé dans un sac fermé. Faites-les décongeler au réfrigérateur et réchauffez-les à la poêle. Ne recongelez pas des crêpes décongelées.",
    },
  ],
  nutrition: {
    calories: 140,
    protein: 4.5,
    fat: 6,
    saturatedFat: 3,
    carbs: 16,
    sugar: 4,
    fiber: 0.5,
    sodium: 60,
  },
  annotations: {
    hero: "fines, et tachetées de brun",
    detail: "une petite louche par crêpe",
  },
  images: {
    heroAlt: "Crêpes pliées en triangle, dorées et tachetées, avec des fraises coupées dans une assiette blanche",
    detailAlt: "Pile de crêpes fines aux bords dorés et froissés, vue de près",
    credits: {
      hero: {
        photographer: "Unaizat Abdulgamidova",
        url: "https://www.pexels.com/photo/a-plate-of-crepe-and-strawberries-with-dip-on-the-side-12412866/",
      },
      detail: {
        photographer: "Yuliia Lishchuk",
        url: "https://www.pexels.com/photo/close-up-of-freshly-made-crepes-on-plate-40758480/",
      },
    },
  },
  datePublished: "2026-11-09",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#D39B48",
    onAccent: "#1b1712",
    ink: "#82531A",
    tint: "#FBF2E4",
    deep: "#1D140B",
    focus: "55% 50%",
  },
});
