import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "gateau-au-chocolat",
  title: "Gâteau au chocolat fondant",
  seoTitle: "Gâteau au chocolat fondant : le centre juste pris",
  tagline: "On le sort quand il tremble encore.",
  description:
    "Gâteau au chocolat fondant : 200 g de chocolat noir, 150 g de beurre, 4 œufs et très peu de farine, cuit 22 à 25 minutes à 180 °C. Dense et humide à cœur.",
  summary:
    "Pour 8 parts, ce gâteau au chocolat fondant se fait avec 200 g de chocolat noir fondu avec 150 g de beurre, 4 œufs fouettés avec 140 g de sucre et seulement 50 g de farine. Versez dans un moule de 22 cm et enfournez 22 à 25 minutes à 180 °C : sortez-le quand le centre tremble encore un peu. Il prend en refroidissant : comptez 1 heure de repos, soit 1 h 50 en tout.",
  intro: [
    "Le gâteau au chocolat fondant tient en quelques ingrédients du placard, et presque toute sa réussite se joue à la sortie du four. On l’arrête quand les bords sont pris et que le centre tremble encore, comme une gelée. En refroidissant, il se tient, et l’intérieur reste dense et humide, quelque part entre le gâteau et la truffe.",
    "Ce qui le rate, c’est la peur de ne pas assez cuire. Laissé au four jusqu’à ce que la lame ressorte sèche, il sera bon, mais ce sera un gâteau au chocolat ordinaire, un peu sec. Cinq minutes de trop font toute la différence.",
    "Il est encore meilleur le lendemain. On peut donc le faire la veille sans arrière-pensée.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "gâteau au chocolat fondant",
    "gâteau au chocolat",
    "recette gâteau au chocolat facile",
    "fondant au chocolat",
    "gâteau au chocolat moelleux",
    "gâteau chocolat peu de farine",
    "temps de cuisson gâteau au chocolat",
    "gâteau au chocolat 200 g chocolat",
  ],
  diet: ["vegetarian"],
  servings: 8,
  servingsLabel: { one: "part", other: "parts" },
  times: { prep: 20, cook: 30, rest: 60 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  tags: ["saint-valentin"],
  equipment: [
    "moule rond de 22 cm, à charnière de préférence",
    "papier sulfurisé",
    "batteur électrique",
    "saladier et casserole pour le bain-marie",
    "maryse",
    "grille",
  ],
  ingredients: [
    {
      items: [
        { qty: 10, unit: "g", name: "beurre", note: "pour le moule", step: 5 },
        { qty: 200, unit: "g", name: "chocolat noir pâtissier", note: "60 à 70 % de cacao", step: 10 },
        { qty: 150, unit: "g", name: "beurre doux", note: "en morceaux", step: 10 },
        { qty: 4, name: "œuf", plural: "œufs", note: "à température ambiante", step: 1 },
        { qty: 140, unit: "g", name: "sucre en poudre", step: 10 },
        { qty: 1, unit: "pincee", name: "fleur de sel", step: 1 },
        { qty: 50, unit: "g", name: "farine", note: "T45 ou T55", step: 5 },
        { qty: 10, unit: "g", name: "sucre glace", note: "pour le service", step: 5, optional: true },
      ],
    },
  ],
  method: [
    {
      title: "La pâte",
      steps: [
        {
          title: "Préparer moule et four",
          text: "Préchauffez le four à 180 °C, chaleur statique, grille au milieu. Beurrez le moule et tapissez le fond d’un disque de papier sulfurisé.",
        },
        {
          title: "Faire fondre le chocolat",
          text: "Hachez le chocolat et mettez-le dans un saladier avec le beurre doux. Posez le saladier sur une casserole d’eau qui frémit à peine, sans qu’il touche l’eau, et laissez fondre 5 minutes environ en remuant : le mélange doit être lisse et brillant. Retirez du feu et laissez tiédir pendant la suite.",
          timer: { minutes: 5, label: "Chocolat et beurre" },
          tip: "Au micro-ondes, ça marche aussi : par séries de 30 secondes à puissance moyenne, en remuant entre chaque. Le chocolat brûle vite et devient alors granuleux.",
        },
        {
          title: "Fouetter œufs et sucre",
          text: "Dans un autre saladier, fouettez les œufs, le sucre et la fleur de sel au batteur électrique, à vitesse moyenne, pendant 3 à 4 minutes. Le mélange doit blanchir, doubler de volume et retomber en ruban quand vous soulevez le fouet.",
          timer: { minutes: 4, label: "Œufs et sucre" },
        },
        {
          title: "Assembler la pâte",
          text: "Versez le chocolat tiède sur les œufs et mélangez à la maryse, en soulevant la pâte du fond vers le haut. Tamisez la farine par-dessus et incorporez-la de la même façon, juste jusqu’à ce qu’on ne la voie plus. Arrêtez-vous là.",
          tip: "Le chocolat doit être tiède au doigt, pas chaud. Trop chaud, il fait retomber la mousse d’œufs, et le gâteau perd sa fine croûte craquante.",
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Cuire sans trop cuire",
          text: "Versez la pâte dans le moule, lissez et enfournez pour 22 à 25 minutes. Il est prêt quand le dessus est craquelé sur les bords, et que le centre tremble encore d’un bloc quand vous secouez doucement le moule. Une lame plantée au centre ressort avec des miettes humides, pas avec de la pâte liquide.",
          timer: { minutes: 23, label: "Cuisson" },
          tip: "Commencez à vérifier à 20 minutes. Les fours varient, et deux ou trois minutes de trop suffisent à passer de fondant à sec.",
        },
        {
          title: "Laisser prendre",
          text: "Laissez le gâteau 20 minutes dans le moule sur une grille : il retombe un peu, c’est normal. Démoulez-le, puis laissez-le reposer encore 40 minutes, jusqu’à ce qu’il soit à peine tiède. Le centre finit de prendre en refroidissant.",
          timer: { minutes: 60, label: "Refroidissement" },
        },
        {
          title: "Saupoudrer et servir",
          text: "Au moment de servir, saupoudrez de sucre glace à travers une petite passoire, si vous en mettez. Coupez avec un couteau trempé dans l’eau chaude et essuyé entre chaque part.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi si peu de farine",
      text: "Avec 50 g de farine pour 200 g de chocolat, la structure du gâteau vient surtout des œufs, dont les protéines coagulent à la cuisson, et du beurre de cacao, qui fige en refroidissant. En arrêtant le four quand le centre vient de prendre, l’intérieur reste dense et humide au lieu de devenir une mie de gâteau.",
    },
    {
      title: "Pourquoi il retombe",
      text: "Les bulles d’air emprisonnées en fouettant les œufs se dilatent avec la chaleur et font gonfler le gâteau. En refroidissant, elles se contractent. Les bords, déjà bien cuits, tiennent ; le centre, plus tendre, s’affaisse. C’est ce qui lui donne sa texture serrée.",
    },
    {
      title: "Le gâteau prend en refroidissant",
      text: "Le beurre de cacao est liquide à chaud et redevient solide en dessous de 30 °C environ. Un gâteau fondant qui semble trop mou à la sortie du four se raffermit donc en une heure. C’est aussi pour ça qu’il se coupe mieux le lendemain.",
    },
  ],
  tips: [
    "Prenez du chocolat noir pâtissier entre 60 et 70 %. Au-delà, le gâteau devient plus amer et un peu plus ferme.",
    "Sortez les œufs du réfrigérateur une heure avant. Froids, ils montent moins bien et figent le chocolat en petits grains.",
    "Pesez tout, la farine surtout. Avec si peu de farine, 20 g de plus suffisent à changer la texture.",
    "Un moule à charnière évite de retourner le gâteau, qui est fragile à chaud.",
    "Faites-le la veille, gardez-le filmé, et sortez-le du réfrigérateur 30 minutes avant de servir.",
  ],
  mistakes: [
    "Attendre que la lame ressorte sèche. Une fois refroidi, le gâteau est sec et friable.",
    "Verser le chocolat chaud sur les œufs. La mousse retombe et le gâteau est lourd, avec une couche grasse au fond.",
    "Trop mélanger après avoir ajouté la farine. Vous cassez la mousse des œufs, et le dessus ne craque pas.",
    "Démouler à la sortie du four. Le centre n’a pas pris et le gâteau se casse en deux.",
    "Cuire trop chaud pour aller plus vite. Le dessus brûle avant que le centre ne soit pris.",
  ],
  variations: [
    {
      title: "Sans gluten",
      text: "Remplacez les 50 g de farine par 40 g de fécule de maïs. La texture reste la même, mais le gâteau est un peu plus fragile au démoulage.",
    },
    {
      title: "Au beurre salé",
      text: "Prenez du beurre demi-sel à la place du beurre doux et supprimez la fleur de sel. Le goût de chocolat paraît plus long.",
    },
    {
      title: "Aux noisettes",
      text: "Ajoutez 60 g de noisettes torréfiées et concassées à la pâte, avec la farine. Attention aux allergies aux fruits à coque si vous recevez.",
    },
    {
      title: "Cœur coulant",
      text: "Ce n’est plus le même gâteau : répartissez la pâte dans 8 ramequins beurrés et cuisez 10 à 12 minutes à 200 °C. Le cœur reste liquide, donc les œufs y sont peu cuits (voir la FAQ).",
    },
  ],
  storage:
    "Il se garde 3 jours sous une cloche ou bien filmé dans une pièce fraîche, ou 5 jours au réfrigérateur ; sortez-le 30 minutes avant de servir. Il se congèle 3 mois, en parts filmées.",
  pairing: "Un verre de lait froid, ou un vin doux naturel comme un banyuls ou un maury.",
  faq: [
    {
      q: "Comment savoir si un gâteau au chocolat fondant est cuit ?",
      a: "Les bords sont pris et craquelés, et le centre tremble encore d’un bloc quand on secoue le moule, comme une gelée. Une lame plantée au centre ressort avec des miettes humides, pas avec de la pâte liquide. Comptez 22 à 25 minutes à 180 °C pour un moule de 22 cm.",
    },
    {
      q: "Pourquoi mon gâteau au chocolat est-il sec ?",
      a: "Presque toujours parce qu’il a cuit trop longtemps. Sortez-le quand le centre tremble encore : il finit de prendre en refroidissant. Trop de farine ou un chocolat à plus de 70 % le rendent aussi plus sec.",
    },
    {
      q: "Pourquoi mon gâteau au chocolat retombe-t-il ?",
      a: "C’est normal pour un gâteau fondant : l’air des œufs fouettés se contracte en refroidissant et le centre, plus tendre, s’affaisse. S’il retombe beaucoup et reste liquide, il manquait quelques minutes de cuisson.",
    },
    {
      q: "Peut-on faire un gâteau au chocolat sans farine ?",
      a: "Oui. Remplacez les 50 g de farine par 40 g de fécule de maïs, ou par 50 g de poudre d’amande (attention aux allergies). Le gâteau est un peu plus fragile, laissez-le bien refroidir avant de le démouler.",
    },
    {
      q: "Quel chocolat choisir pour un gâteau au chocolat ?",
      a: "Un chocolat noir pâtissier entre 60 et 70 % de cacao, en tablette. Le chocolat au lait est trop sucré et le gâteau prend mal. Un chocolat à croquer de bonne qualité fonctionne aussi.",
    },
    {
      q: "Le gâteau au chocolat fondant convient-il aux femmes enceintes ?",
      a: "Oui, s’il est cuit comme ici, avec un centre pris et seulement humide. La version à cœur coulant, où les œufs restent peu cuits, est déconseillée aux femmes enceintes, aux jeunes enfants, aux personnes âgées et aux personnes immunodéprimées. Pour elles, prenez des œufs pasteurisés.",
    },
  ],
  nutrition: {
    calories: 410,
    protein: 6,
    fat: 28,
    saturatedFat: 17,
    carbs: 33,
    sugar: 27,
    fiber: 3,
    sodium: 65,
  },
  annotations: {
    hero: "le centre tremble encore à la sortie",
    detail: "il retombe un peu, c’est normal",
  },
  images: {
    heroAlt:
      "Part de gâteau au chocolat fondant au sucre glace, garnie de groseilles, le reste du gâteau en arrière-plan",
    detailAlt: "Gâteau au chocolat fondant entier dans son papier de cuisson, croûte craquelée et sucre glace",
    credits: {
      hero: {
        photographer: "Samanta Mary",
        url: "https://www.pexels.com/photo/a-piece-of-a-chocolate-cake-with-a-powder-sugar-and-red-currants-26999506/",
      },
      detail: {
        photographer: "Taras Chuiko",
        url: "https://www.pexels.com/photo/homemade-delicious-pie-11663198/",
      },
    },
  },
  datePublished: "2026-11-08",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#5E3426",
    onAccent: "#ffffff",
    ink: "#5E3426",
    tint: "#F5ECE8",
    deep: "#170D09",
    focus: "50% 62%",
  },
});
