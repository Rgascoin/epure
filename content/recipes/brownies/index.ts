import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "brownies",
  title: "Brownies",
  seoTitle: "Brownies fondants au chocolat, croûte fine et craquelée",
  tagline: "Le cure-dent doit ressortir un peu sale.",
  description:
    "Des brownies fondants au chocolat noir, sous une croûte fine et brillante : 200 g de chocolat, 3 œufs bien fouettés et 24 minutes à 180 °C. Pour 16 carrés.",
  summary:
    "Pour 16 carrés de brownie, faites fondre 200 g de chocolat noir avec 150 g de beurre. Fouettez 3 œufs avec 200 g de sucre et 50 g de vergeoise pendant 3 minutes, versez le chocolat tiède, puis incorporez 80 g de farine et 20 g de cacao. Faites cuire 22 à 26 minutes à 180 °C dans un moule de 20 cm : un cure-dent doit ressortir avec des miettes humides. Laissez refroidir 2 heures avant de couper.",
  intro: [
    "Un brownie fondant, c’est un gâteau au chocolat qui a gardé la densité d’une ganache : beaucoup de chocolat et de beurre, peu de farine, pas de levure. Le dessus forme une fine croûte brillante et craquelée, le dessous reste dense et humide.",
    "Deux choses comptent. Les œufs et le sucre sont fouettés longtemps, c’est ce qui donne la croûte. Et on sort le moule du four quand le centre semble encore un peu trop tendre : il finit de prendre en refroidissant.",
    "Ce qui peut rater, c’est surtout la cuisson : 5 minutes de trop et le brownie devient sec. Attendez aussi qu’il soit froid pour le couper, sinon les carrés s’écrasent sous le couteau.",
  ],
  category: "Goûter",
  cuisine: "Américaine",
  keywords: [
    "brownies",
    "brownie",
    "recette brownie",
    "brownie fondant",
    "brownie au chocolat",
    "brownies maison",
    "brownie facile",
    "brownie croûte craquelée",
    "brownie moelleux",
  ],
  diet: ["vegetarian"],
  servings: 16,
  servingsLabel: { one: "carré", other: "carrés" },
  times: { prep: 20, cook: 30, rest: 120 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  equipment: [
    "moule carré de 20 cm, en métal",
    "papier sulfurisé",
    "casserole et bol résistant à la chaleur (bain-marie)",
    "batteur électrique",
    "maryse",
    "tamis ou passoire fine",
    "cure-dent ou pique en bois",
    "grand couteau",
  ],
  ingredients: [
    {
      items: [
        { qty: 200, unit: "g", name: "chocolat noir 70 %", note: "pâtissier, haché", step: 10 },
        { qty: 150, unit: "g", name: "beurre doux", note: "en dés", step: 5 },
        { qty: 3, name: "œuf", plural: "œufs", note: "à température ambiante", step: 1 },
        { qty: 200, unit: "g", name: "sucre en poudre", step: 10 },
        { qty: 50, unit: "g", name: "vergeoise brune", note: "ou cassonade", step: 5 },
        { qty: 1, unit: "cac", name: "extrait de vanille", step: 0.5 },
        { qty: 0.5, unit: "cac", name: "sel fin", step: 0.25 },
        { qty: 80, unit: "g", name: "farine T55", step: 5 },
        { qty: 20, unit: "g", name: "cacao en poudre non sucré", step: 5 },
      ],
    },
  ],
  method: [
    {
      title: "Préparation",
      steps: [
        {
          title: "Préparer le moule",
          text: "Préchauffez le four à 180 °C, chaleur statique, grille au milieu. Tapissez le moule de papier sulfurisé en laissant dépasser deux bords : ils serviront de poignées pour sortir le brownie.",
        },
        {
          title: "Fondre chocolat et beurre",
          text: "Faites fondre le chocolat et le beurre au bain-marie, sur une eau qui frémit à peine, environ 5 minutes, en remuant jusqu’à ce que ce soit lisse et brillant. Retirez du feu et laissez tiédir pendant que vous fouettez les œufs.",
          timer: { minutes: 5, label: "Fonte du chocolat" },
        },
        {
          title: "Fouetter œufs et sucres",
          text: "Dans un saladier, fouettez les œufs avec le sucre, la vergeoise, la vanille et le sel au batteur, à vitesse moyenne, pendant 3 minutes. Le mélange doit pâlir, épaissir et former un ruban qui reste visible un instant à la surface.",
          timer: { minutes: 3, label: "Œufs et sucres" },
          tip: "Ne raccourcissez pas ce fouettage : c’est lui qui donne la fine croûte brillante et craquelée du dessus.",
        },
        {
          title: "Ajouter le chocolat",
          text: "Versez le chocolat sur les œufs quand il n’est plus chaud au doigt, juste tiède. Mélangez au fouet, doucement, jusqu’à ce que la pâte soit homogène et brillante.",
        },
        {
          title: "Incorporer la farine",
          text: "Tamisez la farine et le cacao au-dessus du saladier. Mélangez à la maryse, en soulevant la pâte, juste jusqu’à ce qu’il ne reste plus de traces de farine.",
        },
        {
          title: "Cuire le brownie",
          text: "Versez la pâte dans le moule et lissez-la. Enfournez 22 à 26 minutes : la surface est craquelée et brillante, les bords se décollent à peine, et un cure-dent planté au centre ressort avec des miettes humides collées, mais sans pâte liquide.",
          timer: { minutes: 24, label: "Cuisson du brownie" },
          tip: "Commencez à vérifier à 22 minutes. Un brownie un peu trop fondant vaut mieux qu’un brownie sec : il continue de cuire en refroidissant.",
        },
        {
          title: "Laisser refroidir",
          text: "Laissez refroidir le brownie dans son moule, sur une grille, pendant 2 heures. Il finit de cuire, puis se raffermit à mesure que le chocolat refroidit.",
          timer: { minutes: 120, label: "Refroidissement" },
        },
        {
          title: "Découper en carrés",
          text: "Soulevez le brownie par les bords du papier et posez-le sur une planche. Coupez 16 carrés de 5 cm avec un grand couteau trempé dans l’eau chaude, essuyé entre chaque coupe.",
          tip: "Pour des carrés très nets, passez d’abord le brownie froid au réfrigérateur une demi-heure.",
        },
      ],
    },
  ],
  science: [
    {
      title: "D’où vient la croûte brillante",
      text: "En fouettant longtemps les œufs avec le sucre, on dissout une bonne partie des cristaux. À la cuisson, ce sucre dissous et les protéines du blanc forment en surface une fine pellicule, proche d’une meringue, qui sèche, brille et se craquelle.",
    },
    {
      title: "Fondant ou gâteux",
      text: "Tout dépend du rapport entre les matières grasses (beurre et beurre de cacao) et la farine. Avec peu de farine et sans levure, il se forme peu de gluten et peu de bulles : la texture reste dense. Plus de farine, ou un peu de levure, et on obtient un gâteau au chocolat aéré.",
    },
    {
      title: "Pourquoi attendre deux heures",
      text: "À la sortie du four, le centre est encore très chaud et continue de cuire. En refroidissant, le beurre de cacao du chocolat se solidifie : c’est ce qui donne au brownie sa texture dense et fondante, et ce qui permet de le couper proprement.",
    },
  ],
  tips: [
    "Prenez un moule en métal plutôt qu’en verre ou en céramique. Le verre chauffe lentement puis garde la chaleur, et les bords surcuisent avant que le centre soit pris.",
    "Sortez les œufs du frigo une heure avant : froids, ils figent le chocolat, et la pâte devient épaisse et terne.",
    "Utilisez un chocolat pâtissier à 70 % : il donne plus de goût qu’une tablette à croquer et le brownie est moins sucré.",
    "On le trouve encore meilleur le lendemain, plus dense et plus fondant. Gardez-le entier, filmé, et coupez au dernier moment.",
  ],
  mistakes: [
    "Attendre que le cure-dent ressorte sec. Le brownie est alors trop cuit, et il sera sec et friable une fois froid.",
    "Verser le chocolat encore chaud sur les œufs. Ils commencent à cuire et la pâte graine.",
    "Trop mélanger après la farine. Le brownie devient élastique et gonfle comme un gâteau.",
    "Le couper chaud. Le centre coule et les carrés s’écrasent.",
  ],
  variations: [
    {
      title: "Aux noix de pécan",
      text: "Faites griller 100 g de noix de pécan 8 minutes à 170 °C, concassez-les et ajoutez-les avec la farine. Ce sont des fruits à coque : prévenez vos invités allergiques.",
    },
    {
      title: "Plus gâteau",
      text: "Si vous préférez une texture aérée, passez à 120 g de farine et ajoutez une demi-cuillère à café de levure chimique, et comptez 25 à 28 minutes de cuisson. Ce n’est plus un brownie fondant, mais il a ses amateurs.",
    },
    {
      title: "Sans gluten",
      text: "Remplacez la farine par 80 g de farine de riz : avec si peu de farine, la différence se sent à peine. Vérifiez que le chocolat et le cacao sont garantis sans gluten.",
    },
  ],
  storage:
    "Dans une boîte hermétique, 4 jours à température ambiante, ou au frais s’il fait chaud. Il se congèle très bien en carrés filmés, 3 mois : laissez-les revenir 1 heure à température ambiante.",
  pairing:
    "Un café serré, ou pour les adultes un porto tawny, dont les notes de noix et de caramel vont bien avec le chocolat.",
  faq: [
    {
      q: "Comment savoir si un brownie est cuit ?",
      a: "Un cure-dent planté au centre doit ressortir avec des miettes humides collées, mais sans pâte liquide. La surface est craquelée et brillante, et les bords se décollent à peine du moule. S’il ressort sec, le brownie est déjà trop cuit.",
    },
    {
      q: "Pourquoi mon brownie n’a-t-il pas de croûte brillante ?",
      a: "Les œufs et le sucre n’ont pas été fouettés assez longtemps. Il faut 3 minutes au batteur pour dissoudre le sucre : c’est lui qui forme la croûte. Un chocolat trop froid, qui épaissit la pâte, peut aussi jouer.",
    },
    {
      q: "Quel moule utiliser pour des brownies ?",
      a: "Un moule carré de 20 cm, en métal, pour ces quantités. Dans un moule de 24 cm, le brownie sera plus fin : retirez 3 à 5 minutes de cuisson. Évitez le verre, qui fait surcuire les bords.",
    },
    {
      q: "Pourquoi mon brownie est-il sec ?",
      a: "Il a trop cuit, même de quelques minutes. Sortez-le quand le cure-dent ressort encore avec des miettes humides. Un moule en verre ou trop de farine donnent aussi un brownie sec.",
    },
    {
      q: "Peut-on congeler des brownies ?",
      a: "Oui, très bien : 3 mois, en carrés filmés un par un. Laissez-les revenir 1 heure à température ambiante, ou mangez-les encore frais, comme une truffe.",
    },
    {
      q: "Peut-on goûter la pâte à brownie crue ?",
      a: "Non, mieux vaut s’en abstenir : elle contient des œufs crus et de la farine crue, qui peuvent porter des salmonelles et des bactéries E. coli. C’est à éviter pour les femmes enceintes, les jeunes enfants, les personnes âgées et les personnes immunodéprimées. Une fois cuit, il n’y a plus de risque.",
    },
  ],
  nutrition: {
    calories: 240,
    protein: 3,
    fat: 14,
    saturatedFat: 9,
    carbs: 24,
    sugar: 19,
    fiber: 2,
    sodium: 90,
  },
  annotations: {
    hero: "on le coupe froid",
    detail: "la croûte fine qui craque",
  },
  images: {
    heroAlt:
      "Carrés de brownie au chocolat fondant empilés dans une assiette, sur un napperon en dentelle, une théière orange derrière",
    detailAlt: "Deux carrés de brownie superposés, croûte brillante et craquelée, cœur dense et fondant",
    credits: {
      hero: {
        photographer: "Ana Lobo",
        url: "https://www.pexels.com/photo/brownie-on-plate-15033468/",
      },
      detail: {
        photographer: "Isabella Mendes",
        url: "https://www.pexels.com/photo/brown-bread-on-the-table-4655032/",
      },
    },
  },
  datePublished: "2026-11-09",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#8A4B2D",
    onAccent: "#ffffff",
    ink: "#6E3A22",
    tint: "#F6EEE8",
    deep: "#170e0a",
    focus: "55% 40%",
  },
});
