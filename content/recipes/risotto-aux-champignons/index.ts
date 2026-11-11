import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "risotto-aux-champignons",
  title: "Risotto aux champignons",
  seoTitle: "Risotto aux champignons crémeux, sans crème",
  tagline: "Crémeux sans une goutte de crème.",
  description:
    "Risotto aux champignons de Paris et cèpes séchés, crémeux sans crème grâce à la mantecatura au beurre froid et au parmesan. Al dente, en 1 heure.",
  summary:
    "Pour 4 personnes, un risotto aux champignons demande 320 g de riz carnaroli, 400 g de champignons poêlés à part, 15 g de cèpes séchés et 1,2 l de bouillon frémissant. Nacrez le riz avec 2 échalotes, déglacez avec 120 ml de vin blanc, puis versez le bouillon louche après louche pendant 16 à 18 minutes en remuant souvent. Hors du feu, battez 60 g de beurre froid et 50 g de parmesan : c’est la mantecatura. Comptez 1 heure en tout.",
  intro: [
    "Un risotto aux champignons réussi s’étale doucement dans l’assiette, comme une vague, et chaque grain reste un peu ferme sous la dent. Il n’y a pas de crème dedans. Le crémeux vient de l’amidon du riz, puis du beurre froid et du parmesan battus hors du feu à la fin : la mantecatura.",
    "On poêle les champignons à part, à feu vif, pour qu’ils dorent au lieu de bouillir. Et on ajoute 15 g de cèpes séchés, dont l’eau de trempage donne au bouillon un goût de sous-bois que les champignons de Paris n’ont pas seuls.",
    "Ce qui rate le plus souvent : un bouillon froid qui casse la cuisson, un riz trop cuit qui colle, une mantecatura faite sur le feu qui tranche. Rien de grave, et chaque étape dit quoi surveiller.",
  ],
  category: "Plat",
  cuisine: "Italienne",
  keywords: [
    "risotto aux champignons",
    "recette risotto aux champignons",
    "risotto champignons de paris",
    "risotto aux cèpes",
    "risotto crémeux",
    "risotto champignons parmesan",
    "comment faire un risotto",
    "mantecatura risotto",
    "risotto sans crème",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 25, cook: 35 },
  difficulty: "Intermédiaire",
  cost: "€€",
  season: ["Toute l’année"],
  tags: ["automne"],
  equipment: [
    "sauteuse large à fond épais",
    "grande poêle",
    "casserole pour le bouillon",
    "louche",
    "cuillère en bois",
    "filtre à café ou papier absorbant",
  ],
  ingredients: [
    {
      title: "Les champignons",
      items: [
        { qty: 15, unit: "g", name: "cèpes séchés", step: 5 },
        { qty: 250, unit: "ml", name: "eau chaude", note: "pour le trempage", step: 10 },
        {
          qty: 400,
          unit: "g",
          name: "champignons de Paris bruns",
          note: "en lamelles de 5 mm",
          step: 20,
        },
        { qty: 2, unit: "cas", name: "huile d’olive", step: 1 },
        { qty: 15, unit: "g", name: "beurre doux", step: 5 },
        { qty: 1, unit: "gousse", name: "ail", note: "hachée", step: 1 },
      ],
    },
    {
      title: "Le risotto",
      items: [
        {
          qty: 1200,
          unit: "ml",
          name: "bouillon de volaille",
          note: "ou de légumes, peu salé",
          step: 50,
        },
        { qty: 2, unit: "cas", name: "huile d’olive", step: 1 },
        { qty: 2, name: "échalote", plural: "échalotes", note: "finement ciselées", step: 1 },
        { qty: 320, unit: "g", name: "riz carnaroli", note: "ou arborio, non lavé", step: 10 },
        { qty: 120, unit: "ml", name: "vin blanc sec", step: 10 },
        { qty: 60, unit: "g", name: "beurre doux", note: "très froid, en dés", step: 5 },
        {
          qty: 70,
          unit: "g",
          name: "parmigiano reggiano",
          note: "râpé finement ; 50 g pour la mantecatura, le reste au service",
          step: 5,
        },
        { qty: 3, unit: "brin", name: "persil plat", note: "haché", step: 1 },
        { name: "sel fin" },
        { name: "poivre noir" },
      ],
    },
  ],
  method: [
    {
      title: "Les champignons",
      steps: [
        {
          title: "Réhydrater les cèpes",
          text: "Couvrez les cèpes séchés d’eau chaude, pas bouillante, et laissez-les tremper 20 minutes, le temps d’émincer les champignons de Paris et les échalotes. Sortez-les en les pressant, hachez-les grossièrement, puis filtrez l’eau de trempage à travers un filtre à café : le sable reste au fond.",
          timer: { minutes: 20, label: "Trempage des cèpes" },
        },
        {
          title: "Chauffer le bouillon",
          text: "Versez le bouillon et l’eau de trempage filtrée dans une casserole, portez à frémissement et gardez-la sur feu très doux, à côté, jusqu’à la fin. Goûtez : le bouillon doit être assaisonné mais pas salé, il va réduire.",
        },
        {
          title: "Poêler les champignons",
          text: "Chauffez l’huile dans la grande poêle à feu vif, étalez les champignons de Paris en une seule couche et laissez-les 3 minutes sans y toucher, jusqu’à ce qu’ils dorent dessous. Ajoutez le beurre, l’ail, les cèpes hachés et une pincée de sel, puis faites sauter 2 minutes de plus. Réservez.",
          timer: { minutes: 5, label: "Champignons" },
          tip: "Si votre poêle est petite, faites deux fournées. Entassés, les champignons rendent leur eau et bouillent au lieu de dorer.",
        },
      ],
    },
    {
      title: "Le risotto",
      steps: [
        {
          title: "Suer les échalotes",
          text: "Dans la sauteuse, chauffez l’huile à feu moyen-doux et faites suer les échalotes avec une pincée de sel 4 à 5 minutes, en remuant : elles deviennent translucides, sans colorer.",
          timer: { minutes: 5, label: "Échalotes" },
        },
        {
          title: "Nacrer le riz",
          text: "Versez le riz et remuez 2 minutes à feu moyen-vif. Les grains chauffent, deviennent translucides sur les bords avec un point blanc au centre, et crépitent légèrement contre la sauteuse.",
          timer: { minutes: 2, label: "Nacrage" },
        },
        {
          title: "Déglacer au vin blanc",
          text: "Versez le vin blanc et remuez 1 à 2 minutes, jusqu’à ce qu’il soit entièrement absorbé et que l’odeur d’alcool ait disparu.",
          timer: { minutes: 2, label: "Vin blanc" },
        },
        {
          title: "Mouiller louche après louche",
          text: "Ajoutez une louche de bouillon chaud et remuez souvent à feu moyen : ça doit frémir franchement. Quand la cuillère laisse une trace nette au fond, ajoutez la louche suivante. Comptez 16 à 18 minutes. À mi-cuisson, ajoutez les trois quarts des champignons poêlés.",
          timer: { minutes: 17, label: "Cuisson du riz" },
          tip: "Le bouillon doit rester frémissant dans sa casserole. Une louche froide fait retomber la cuisson, et le riz cuit de façon inégale.",
        },
        {
          title: "Vérifier la cuisson",
          text: "Goûtez un grain : il est tendre, avec un petit cœur encore ferme, sans goût de farine. Le risotto doit rester souple, presque coulant ; ajoutez une dernière demi-louche si besoin. Salez et poivrez.",
        },
        {
          title: "Battre hors du feu",
          text: "Retirez la sauteuse du feu et attendez quelques secondes. Ajoutez le beurre froid et 50 g de parmesan, puis battez vivement à la cuillère en bois en secouant la sauteuse d’avant en arrière : le risotto devient brillant et nappant. Couvrez et laissez reposer 2 minutes.",
          timer: { minutes: 2, label: "Repos du risotto" },
          tip: "C’est la mantecatura. Faite sur le feu, le beurre tourne à l’huile et le parmesan file en grumeaux.",
        },
        {
          title: "Servir à plat",
          text: "Versez dans des assiettes creuses chaudes et tapotez le dessous de l’assiette : le risotto doit s’étaler tout seul. Posez dessus le reste des champignons, le persil, le parmesan restant et un tour de poivre.",
        },
      ],
    },
  ],
  science: [
    {
      title: "D’où vient le crémeux",
      text: "Le carnaroli et l’arborio sont des riz ronds dont la surface libère beaucoup d’amidon en cuisant. Remuer frotte les grains les uns contre les autres et fait passer cet amidon dans le bouillon, qui épaissit en sauce. C’est le riz qui fabrique sa propre crème.",
    },
    {
      title: "Pourquoi le beurre doit être froid",
      text: "La mantecatura est une émulsion : le gras du beurre se disperse en fines gouttelettes dans le liquide chargé d’amidon. Froid et ajouté hors du feu, le beurre fond lentement et reste lié. Trop chaud, il fond d’un coup et se sépare, et les protéines du parmesan se resserrent en fils.",
    },
    {
      title: "Saisir les champignons à part",
      text: "Un champignon contient environ 90 % d’eau. Entassés, ils la rendent et cuisent à 100 °C, comme dans un bouillon. En une seule couche à feu vif, l’eau s’évapore vite, la surface dépasse largement cette température et brunit par réaction de Maillard : c’est là que naît le goût de grillé.",
    },
  ],
  tips: [
    "Prenez du carnaroli si vous le trouvez : il garde mieux son cœur ferme que l’arborio et pardonne une minute de trop.",
    "Ne lavez pas le riz. L’amidon de surface, c’est justement ce qui va lier la sauce.",
    "Gardez une demi-louche de bouillon pour la fin : un risotto épaissit dans l’assiette, mieux vaut le servir un peu trop souple.",
    "Pour une tuile comme sur la photo, étalez 20 g de parmesan râpé en disque dans une poêle antiadhésive à feu moyen, retirez-le quand il dore, et laissez-le durcir à plat.",
    "Chauffez les assiettes au four tiède : sur une assiette froide, le risotto fige en quelques minutes.",
  ],
  mistakes: [
    "Verser tout le bouillon d’un coup. Le riz cuit sans frotter, l’amidon reste dans les grains et la sauce reste claire.",
    "Utiliser un bouillon froid. Chaque louche coupe la cuisson, et le riz finit pâteux dehors et cru dedans.",
    "Faire la mantecatura sur le feu. Le beurre tourne à l’huile et le parmesan fait des fils.",
    "Trop cuire le riz. Les grains éclatent et le risotto devient une bouillie collante.",
    "Mettre les champignons crus dans le riz. Ils rendent leur eau et ont un goût de bouilli.",
  ],
  variations: [
    {
      title: "Aux champignons des bois",
      text: "En automne, remplacez la moitié des champignons de Paris par 200 g de girolles ou de cèpes frais, nettoyés au pinceau et poêlés à part 4 à 5 minutes. Gardez les cèpes séchés pour le bouillon.",
    },
    {
      title: "Végétarien",
      text: "Prenez un bouillon de légumes, et remplacez le parmigiano reggiano, fait avec de la présure animale, par un fromage à pâte dure affiné avec une présure d’origine non animale. Le reste ne change pas.",
    },
    {
      title: "Sans vin",
      text: "Remplacez le vin par 100 ml de bouillon, et ajoutez 1 c. à café de jus de citron juste avant la mantecatura pour retrouver un peu d’acidité.",
    },
  ],
  storage:
    "Il se mange tout de suite. Les restes vont au réfrigérateur dans les 2 heures, en boîte fermée, et se gardent 24 heures. Réchauffez-les une seule fois, à la poêle avec un peu de bouillon, jusqu’à ce qu’ils soient brûlants à cœur.",
  pairing: "Un blanc sec et rond, un soave ou un mâcon, ou un rouge léger comme un pinot noir d’Alsace.",
  faq: [
    {
      q: "Quel riz pour un risotto aux champignons ?",
      a: "Un riz rond italien pour risotto : carnaroli, arborio ou vialone nano. Le carnaroli garde le mieux son cœur ferme. Le riz long, basmati ou thaï, ne libère pas assez d’amidon et ne donnera jamais une texture crémeuse.",
    },
    {
      q: "Faut-il remuer un risotto sans arrêt ?",
      a: "Non, souvent mais pas en permanence : quelques tours de cuillère toutes les 30 secondes environ suffisent. Il faut surtout garder un frémissement franc et ajouter la louche suivante quand la précédente est presque absorbée.",
    },
    {
      q: "Pourquoi mon risotto est-il collant ?",
      a: "Parce qu’il a trop cuit, ou trop attendu. Au-delà de 18 à 20 minutes, les grains éclatent et l’amidon colle. Et un risotto qui patiente épaissit : servez-le dès la mantecatura faite, encore un peu coulant.",
    },
    {
      q: "Peut-on faire un risotto aux champignons sans vin blanc ?",
      a: "Oui. Remplacez le vin par la même quantité de bouillon, et ajoutez un trait de jus de citron juste avant la mantecatura : le vin apporte surtout de l’acidité, qui équilibre le beurre et le parmesan.",
    },
    {
      q: "Peut-on préparer un risotto à l’avance ?",
      a: "Oui, en deux temps. Arrêtez la cuisson après 10 minutes de bouillon, étalez le riz sur une plaque pour qu’il refroidisse vite, et mettez-le au réfrigérateur dans les 2 heures. Le lendemain au plus tard, finissez-le 6 à 8 minutes avec du bouillon chaud, puis faites la mantecatura.",
    },
    {
      q: "Quels champignons mettre dans un risotto ?",
      a: "Des champignons de Paris bruns, plus parfumés que les blancs, et quelques cèpes séchés pour le goût. En saison, des girolles ou des cèpes frais, poêlés à part, font la différence.",
    },
    {
      q: "Peut-on réchauffer un risotto ?",
      a: "Oui, une seule fois et dans les 24 heures. Réchauffez-le à la poêle avec un peu de bouillon, en remuant, jusqu’à ce qu’il soit brûlant à cœur. Il sera moins crémeux que le jour même.",
    },
  ],
  nutrition: {
    calories: 640,
    protein: 17,
    fat: 31,
    saturatedFat: 15,
    carbs: 70,
    sugar: 3,
    fiber: 3,
    sodium: 850,
  },
  annotations: {
    hero: "hors du feu, le beurre froid",
    detail: "des girolles, en saison",
  },
  images: {
    heroAlt:
      "Risotto aux champignons garni de champignons poêlés et d’une tuile de parmesan, dans une assiette rayée noir et blanc",
    detailAlt:
      "Risotto aux champignons parsemé de girolles et d’herbes ciselées, dans une assiette creuse blanche sur une table en bois",
    credits: {
      hero: {
        photographer: "Max Griss",
        url: "https://www.pexels.com/photo/photo-of-risotto-on-a-black-and-white-plate-6406460/",
      },
      detail: {
        photographer: "Nadin Sh",
        url: "https://www.pexels.com/photo/a-bowl-of-rice-and-vegetables-on-a-table-27298481/",
      },
    },
  },
  datePublished: "2026-11-05",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#A87D52",
    onAccent: "#1b1712",
    ink: "#6E4E2E",
    tint: "#F6EFE6",
    deep: "#16140F",
    focus: "60% 55%",
  },
});
