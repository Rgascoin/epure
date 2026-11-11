import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "pot-au-feu",
  title: "Pot-au-feu",
  seoTitle: "Pot-au-feu traditionnel, bouillon clair et viande fondante",
  tagline: "Trois morceaux, un bouillon, beaucoup de patience.",
  description:
    "Pot-au-feu pour 6 : paleron, plat de côtes, gîte et os à moelle partis à l’eau froide, écumés, mijotés 3 h 15 avec carottes, navets, poireaux et céleri.",
  summary:
    "Pour 6 personnes, mettez 800 g de paleron, 800 g de plat de côtes et 600 g de gîte dans 4 l d’eau froide, portez doucement à frémissement et écumez 15 minutes. Ajoutez oignon piqué et bouquet garni, laissez trembler 2 h 30, puis ajoutez carottes, navets, poireaux, céleri-rave et os à moelle pour 45 minutes. Les pommes de terre cuisent à part dans un peu de bouillon. Comptez 4 h 30 en tout, dont 35 minutes de travail.",
  intro: [
    "Le pot-au-feu, c’est plusieurs morceaux de bœuf cuits très longtemps dans de l’eau, avec des légumes, et servis en deux temps : le bouillon d’abord, puis la viande et les légumes avec du gros sel, de la moutarde et des cornichons.",
    "Ce qui le rate, c’est l’ébullition. Un pot-au-feu qui bout à gros bouillons donne une viande sèche et un bouillon trouble et gras.",
    "Tout se joue dans la première demi-heure : départ à l’eau froide, montée en température lente, écumage patient. Ensuite, le bouillon doit à peine frissonner en surface, et il n’y a plus qu’à attendre.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "pot-au-feu",
    "recette pot-au-feu",
    "pot-au-feu traditionnel",
    "quels morceaux pour un pot-au-feu",
    "temps de cuisson pot-au-feu",
    "bouillon de pot-au-feu",
    "pot-au-feu os à moelle",
    "légumes du pot-au-feu",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 35, cook: 235 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Hiver"],
  tags: ["hiver"],
  equipment: [
    "marmite de 10 l",
    "écumoire",
    "ficelle de cuisine",
    "casserole de 3 l pour les pommes de terre",
  ],
  ingredients: [
    {
      title: "Les viandes et le bouillon",
      items: [
        { qty: 800, unit: "g", name: "paleron", note: "en un morceau, ficelé", step: 50 },
        { qty: 800, unit: "g", name: "plat de côtes", note: "avec os", step: 50 },
        { qty: 600, unit: "g", name: "gîte", note: "en un morceau, ficelé", step: 50 },
        { qty: 4, unit: "l", name: "eau froide", step: 0.5 },
        { qty: 1, name: "oignon", plural: "oignons", note: "non pelé, coupé en deux", fixed: true },
        { qty: 3, name: "clou de girofle", plural: "clous de girofle", fixed: true },
        { qty: 1, name: "bouquet garni", plural: "bouquets garnis", note: "thym, laurier, vert de poireau, queues de persil", fixed: true },
        { qty: 1, unit: "cas", name: "gros sel", step: 0.5 },
        { qty: 1, unit: "cac", name: "poivre en grains", fixed: true },
      ],
    },
    {
      title: "Les légumes",
      items: [
        { qty: 6, name: "carotte", plural: "carottes", note: "épluchées, entières", step: 1 },
        { qty: 3, name: "navet", plural: "navets", note: "épluchés, coupés en deux", step: 1 },
        { qty: 3, name: "poireau", plural: "poireaux", note: "le blanc et un peu de vert, ficelés en botte", step: 1 },
        { qty: 400, unit: "g", name: "céleri-rave", note: "en 4 gros morceaux", step: 50 },
        { qty: 4, name: "os à moelle", plural: "os à moelle", note: "tronçons de 4 à 5 cm", step: 1 },
        { qty: 800, unit: "g", name: "pomme de terre à chair ferme", plural: "pommes de terre à chair ferme", note: "épluchées", step: 100 },
      ],
    },
    {
      title: "Pour servir",
      items: [
        { name: "fleur de sel" },
        { name: "moutarde forte" },
        { name: "cornichons" },
        { qty: 6, name: "tranche de pain de campagne", plural: "tranches de pain de campagne", note: "grillées", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "Lancer le bouillon",
      steps: [
        {
          title: "Démarrer à froid",
          text: "Mettez le paleron, le plat de côtes et le gîte dans la marmite et couvrez avec les 4 l d’eau froide. Portez doucement à frémissement sur feu moyen, en 20 à 30 minutes, sans couvrir.",
          timer: { minutes: 25, label: "Montée en température" },
          tip: "En partant de l’eau froide, la viande lâche ses protéines solubles peu à peu, et elles remontent en écume qu’on peut retirer. À l’eau bouillante, elles coagulent d’un coup et restent en suspension : le bouillon se trouble.",
        },
        {
          title: "Écumer patiemment",
          text: "Quand l’écume grise monte, retirez-la à l’écumoire. Versez 10 cl d’eau froide pour casser le frémissement et faire remonter le reste, puis écumez encore. Continuez 15 minutes, jusqu’à ce que la mousse devienne blanche et rare.",
          timer: { minutes: 15, label: "Écumage" },
          tip: "Gardez un bol d’eau à côté pour rincer l’écumoire entre deux passages. C’est l’étape qui fait un bouillon clair : prenez-la au sérieux.",
        },
        {
          title: "Aromatiser",
          text: "Pendant ce temps, faites noircir les demi-oignons côté coupé, à sec, 3 minutes dans une poêle très chaude, puis piquez-les des clous de girofle. Mettez-les dans la marmite avec le bouquet garni, le gros sel et le poivre.",
          timer: { minutes: 3, label: "Oignon brûlé" },
        },
        {
          title: "Laisser frissonner",
          text: "Baissez le feu au minimum, couvrez aux trois quarts et laissez cuire 2 h 30. La surface doit à peine bouger, avec une bulle de temps en temps. Si ça bout franchement, baissez encore ou décalez la marmite sur le côté du brûleur.",
          timer: { minutes: 150, label: "Cuisson des viandes" },
        },
      ],
    },
    {
      title: "Les légumes",
      steps: [
        {
          title: "Ajouter les légumes",
          text: "Plongez les carottes, les navets, les poireaux, le céleri-rave et les os à moelle dans la marmite. Laissez cuire encore 45 minutes au même frémissement, jusqu’à ce que les carottes soient tendres sous la pointe d’un couteau et que la viande se laisse piquer sans résistance.",
          timer: { minutes: 45, label: "Légumes" },
          tip: "Frottez les extrémités des os à moelle avec du gros sel avant de les plonger : la moelle reste mieux en place.",
        },
        {
          title: "Cuire les pommes de terre",
          text: "En même temps, prélevez 1,5 l de bouillon dans une casserole et faites-y cuire les pommes de terre 25 minutes à petits bouillons, jusqu’à ce qu’un couteau les traverse facilement.",
          timer: { minutes: 25, label: "Pommes de terre" },
        },
        {
          title: "Servir en deux temps",
          text: "Dégraissez le bouillon à la louche, goûtez et rectifiez le sel. Servez-le d’abord bien chaud dans des bols. Ensuite, retirez les ficelles, tranchez les viandes et dressez-les sur un plat chaud avec les légumes, arrosés d’une louche de bouillon. Posez la moelle sur le pain grillé avec un peu de fleur de sel, et la moutarde et les cornichons sur la table.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi l’eau froide",
      text: "Les protéines solubles de la viande et du sang coagulent entre 60 et 80 °C. Avec une montée lente, elles se rassemblent en écume à la surface, qu’on retire. Avec une eau déjà bouillante, elles se dispersent en fines particules qui troublent le bouillon.",
    },
    {
      title: "Pourquoi un frémissement si léger",
      text: "Le collagène des morceaux à braiser se transforme en gélatine au-delà de 70 °C, à condition de lui laisser des heures. À gros bouillons, les fibres de la viande se contractent et expulsent leur jus avant que le collagène ait fondu : la viande devient sèche et filandreuse.",
    },
    {
      title: "L’oignon brûlé",
      text: "Les sucres de l’oignon caramélisent sur sa face coupée. Infusés dans le bouillon, ils lui donnent une couleur ambrée et un léger goût grillé, sans le troubler.",
    },
  ],
  tips: [
    "Mélangez les textures : le paleron est moelleux et gélatineux, le plat de côtes gras et fondant, le gîte plus maigre et facile à trancher.",
    "Préparez-le la veille et laissez refroidir la marmite au frais : le gras fige en surface et se retire d’un bloc. Il suffit ensuite de réchauffer doucement.",
    "Faites cuire les pommes de terre à part : leur amidon troublerait le bouillon de la marmite.",
    "Gardez tout le bouillon qui reste. Il sert de base à une soupe, à un risotto ou à un velouté, et la viande restante finit très bien en hachis parmentier.",
  ],
  mistakes: [
    "Mettre la viande dans l’eau bouillante : l’écume ne remonte plus et le bouillon reste trouble. Il n’y a pas de vrai rattrapage, à part le filtrer dans un linge fin.",
    "Laisser bouillir à gros bouillons : la viande se resserre et sèche. Gardez un frémissement à peine visible pendant toute la cuisson.",
    "Mettre les légumes dès le début : au bout de 3 heures, ils sont gorgés d’eau et se défont. Ils n’ont besoin que des 45 dernières minutes.",
    "Saler fort au départ : le bouillon réduit pendant 3 heures et le sel se concentre. Salez modérément et rectifiez à la fin.",
  ],
  variations: [
    {
      title: "Avec une queue de bœuf",
      text: "Ajoutez 800 g de queue de bœuf en tronçons avec les autres viandes, et 30 minutes de cuisson. Le bouillon devient plus gélatineux et plus corsé.",
    },
    {
      title: "À l’autocuiseur",
      text: "Après l’écumage, à couvercle ouvert, fermez l’autocuiseur et comptez 1 h 15 après la mise en rotation de la soupape, puis ajoutez les légumes et refermez pour 15 minutes. Le bouillon est un peu moins clair.",
    },
    {
      title: "Bouillon garni",
      text: "Pour un premier plat plus copieux, faites cuire 120 g de vermicelles 4 minutes dans 1,5 l de bouillon dégraissé, et servez-les dans les bols.",
    },
  ],
  storage:
    "Viande, légumes et bouillon se gardent 3 jours au réfrigérateur, refroidis en moins de 2 heures et rangés dans des boîtes fermées. Le bouillon dégraissé se congèle 3 mois, la viande dans un peu de bouillon aussi. Une fois décongelés, ne les recongelez pas.",
  pairing:
    "Un rouge léger et fruité, servi un peu frais : un beaujolais, un saumur-champigny ou un côtes-du-rhône.",
  faq: [
    {
      q: "Quels morceaux de viande pour un pot-au-feu ?",
      a: "Trois morceaux au minimum, pour mélanger les textures : un morceau gélatineux (paleron, macreuse, jarret), un morceau gras (plat de côtes, flanchet) et un morceau maigre (gîte, gîte à la noix). Ajoutez des os à moelle pour le goût du bouillon.",
    },
    {
      q: "Faut-il mettre la viande à l’eau froide ou chaude ?",
      a: "À l’eau froide, pour un bouillon clair. La montée lente fait remonter les impuretés en écume qu’on retire. L’eau chaude saisit la viande et donne un bouillon trouble.",
    },
    {
      q: "Combien de temps cuire un pot-au-feu ?",
      a: "3 h 15 environ à petit frémissement : 2 h 30 pour la viande seule, puis 45 minutes avec les légumes. La viande est prête quand une fourchette s’y enfonce sans résistance.",
    },
    {
      q: "Pourquoi mon bouillon de pot-au-feu est-il trouble ?",
      a: "Parce qu’il a bouilli trop fort, ou que la viande est partie dans de l’eau chaude, ou que l’écumage a été trop rapide. Pour le rattraper en partie, passez-le dans une passoire tapissée d’un linge fin.",
    },
    {
      q: "Quand mettre les légumes dans le pot-au-feu ?",
      a: "45 minutes avant la fin, quand la viande a déjà cuit 2 h 30. Les pommes de terre cuisent à part, dans un peu de bouillon, pour ne pas troubler la marmite.",
    },
    {
      q: "Peut-on préparer le pot-au-feu la veille ?",
      a: "Oui, et c’est plus facile à dégraisser. Laissez refroidir la marmite, rangez-la au frais, retirez le gras figé le lendemain et réchauffez à feu doux 30 minutes.",
    },
  ],
  nutrition: { calories: 715, protein: 61, fat: 34, saturatedFat: 14, carbs: 40, sugar: 10, fiber: 8, sodium: 1100 },
  annotations: { hero: "la viande se défait à la fourchette", detail: "trois morceaux, des os, des racines" },
  images: {
    heroAlt: "Pot-au-feu servi dans une assiette creuse blanche, plat de côtes sur l’os, pomme de terre, légumes et brin de persil",
    detailAlt: "Ingrédients du pot-au-feu sur papier kraft : jarret de bœuf avec son os à moelle, carottes, poireaux, céleri, navets et oignon",
    credits: {
      hero: { photographer: "[puamelia]", url: "https://commons.wikimedia.org/wiki/File:Pot-au-feu_au_plat_de_c%C3%B4te.jpg", source: "Wikimedia Commons", license: "CC BY-SA 2.0" },
      detail: { photographer: "Andrea_Nguyen", url: "https://commons.wikimedia.org/wiki/File:Pot-au-feu_ingr%C3%A9dients.jpg", source: "Wikimedia Commons", license: "CC BY 2.0" },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#D2702F",
    onAccent: "#1B1712",
    ink: "#87420F",
    tint: "#FAF1E8",
    deep: "#1C110A",
    focus: "50% 50%",
  },
});
