import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "aligot",
  title: "Aligot",
  seoTitle: "Aligot à la tome fraîche, qui file en longs rubans",
  tagline: "Dix minutes à battre, sans s’arrêter.",
  description:
    "Aligot pour 6 : 1,2 kg de pommes de terre farineuses, beurre, crème et ail, puis 600 g de tome fraîche battue sur feu doux jusqu’à filer en rubans. 1 heure.",
  summary:
    "Pour 6 personnes, faites cuire 1,2 kg de pommes de terre farineuses avec 2 gousses d’ail pendant 20 à 25 minutes, passez-les au presse-purée bien chaudes, puis ajoutez 50 g de beurre et 20 cl de crème fraîche sur feu doux. Incorporez 600 g de tome fraîche de l’Aubrac en trois fois, en battant en huit pendant une dizaine de minutes, jusqu’à ce que la pâte file en longs rubans. Servez aussitôt. Comptez 1 heure en tout.",
  intro: [
    "L’aligot est une purée de pommes de terre dans laquelle on bat de la tome fraîche jusqu’à obtenir une pâte lisse, qui file en longs rubans quand on lève la spatule. On le sert brûlant, à côté d’une saucisse grillée.",
    "Tout tient au fromage. La tome fraîche est un caillé pressé, non affiné, et c’est justement ce qui la fait filer. Un fromage affiné fond, mais ne file pas : il donne une purée grasse et granuleuse. Si vous ne trouvez pas de tome fraîche, la solution de dépannage est dans les variantes.",
    "Le reste demande surtout du bras : un feu doux, une spatule solide, et une dizaine de minutes à battre en huit sans s’arrêter.",
  ],
  category: "Accompagnement",
  cuisine: "Française",
  keywords: [
    "aligot",
    "recette aligot",
    "aligot de l’aubrac",
    "aligot maison",
    "aligot tome fraîche",
    "aligot sans tome fraîche",
    "aligot saucisse",
    "aligot mozzarella",
  ],
  diet: ["glutenFree"],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 20, cook: 40 },
  difficulty: "Intermédiaire",
  cost: "€€",
  season: ["Automne", "Hiver"],
  tags: ["montagne", "hiver"],
  equipment: [
    "grande casserole à fond épais de 4 à 5 l",
    "presse-purée ou moulin à légumes, grille fine",
    "spatule en bois solide",
    "passoire",
  ],
  ingredients: [
    {
      title: "La purée",
      items: [
        {
          qty: 1.2,
          unit: "kg",
          name: "pomme de terre farineuse",
          note: "type bintje ou agria",
          step: 0.1,
        },
        { qty: 2, unit: "gousse", name: "ail", note: "épluchées et dégermées", step: 1 },
        { qty: 1, unit: "cas", name: "gros sel", note: "pour l’eau de cuisson", step: 0.5 },
        { qty: 50, unit: "g", name: "beurre", note: "en morceaux", step: 5 },
        { qty: 20, unit: "cl", name: "crème fraîche épaisse", step: 1 },
        { name: "sel fin" },
        { name: "poivre blanc" },
      ],
    },
    {
      title: "Le fromage",
      items: [
        {
          qty: 600,
          unit: "g",
          name: "tome fraîche de l’Aubrac",
          note: "ou de Cantal, coupée en lamelles de 5 mm",
          step: 50,
        },
      ],
    },
  ],
  method: [
    {
      title: "L’aligot",
      steps: [
        {
          title: "Cuire les pommes de terre",
          text: "Épluchez les pommes de terre et coupez-les en morceaux de taille égale, d’environ 5 cm. Mettez-les avec les gousses d’ail dans la casserole, couvrez d’eau froide, ajoutez le gros sel et portez à ébullition. Laissez cuire 20 à 25 minutes à petits bouillons, jusqu’à ce que la pointe d’un couteau s’enfonce sans aucune résistance.",
          timer: { minutes: 25, label: "Pommes de terre" },
        },
        {
          title: "Préparer la tome",
          text: "Pendant la cuisson, coupez la tome fraîche en lamelles de 5 mm et laissez-la attendre hors du réfrigérateur. Plus les morceaux sont fins, plus ils fondent vite et de façon égale.",
        },
        {
          title: "Écraser bien chaud",
          text: "Égouttez les pommes de terre et l’ail, laissez-les fumer un instant dans la passoire pour qu’ils sèchent, puis passez-les au presse-purée directement dans la casserole vide. Faites-le tant qu’ils sont brûlants : refroidis, ils deviennent collants.",
          tip: "Jamais de mixeur : les lames font éclater l’amidon et la purée tourne à la colle.",
        },
        {
          title: "Ajouter beurre et crème",
          text: "Remettez la casserole sur feu doux. Incorporez le beurre morceau par morceau, puis la crème fraîche, en remuant à la spatule jusqu’à obtenir une purée lisse, souple et bien chaude. Salez légèrement et poivrez : la tome apportera aussi du sel.",
        },
        {
          title: "Battre la tome en huit",
          text: "Toujours sur feu doux, ajoutez un tiers de la tome et battez énergiquement en dessinant des huit avec la spatule, en soulevant la masse. Quand elle a fondu, ajoutez le deuxième tiers, puis le dernier. Comptez 8 à 10 minutes en tout. L’aligot est prêt quand il est lisse et brillant, se détache des parois et file en longs rubans élastiques, sans casser, quand vous levez la spatule.",
          timer: { minutes: 10, label: "Aligot à filer" },
          tip: "Ne vous arrêtez pas de battre : laissé au repos sur le feu, le fromage se dépose et attache au fond.",
        },
        {
          title: "Servir aussitôt",
          text: "Servez immédiatement dans des assiettes chaudes, en laissant tomber l’aligot de la spatule en rubans. Il raffermit en quelques minutes : c’est à table qu’on l’attend, pas l’inverse.",
          tip: "Si le gras commence à perler à la surface, retirez du feu, ajoutez une cuillerée de crème chaude et battez vivement.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi la tome fraîche file",
      text: "La tome fraîche est un caillé pressé qui n’a pas été affiné : son réseau de caséines, les protéines du lait, est encore intact. Chauffé et étiré, il s’aligne en longues fibres élastiques, comme celui de la mozzarella. Dans un fromage affiné, ces protéines ont été en partie découpées pendant la maturation : il fond, mais ne file plus.",
    },
    {
      title: "Le presse-purée plutôt que le mixeur",
      text: "La chair cuite de la pomme de terre est faite de cellules gonflées d’amidon. Le presse-purée les sépare sans les crever. Les lames d’un mixeur les déchirent et libèrent l’amidon gélatinisé, qui donne une texture élastique et collante, impossible à rattraper.",
    },
    {
      title: "Pourquoi le feu reste doux",
      text: "Trop chauffé, le réseau de protéines du fromage se resserre et expulse son gras et son eau. L’aligot tranche : de l’huile perle en surface et la pâte devient caoutchouteuse et granuleuse. À feu doux, le fromage fond progressivement et reste lié à la purée.",
    },
  ],
  tips: [
    "Prenez des pommes de terre farineuses. Leur chair sèche absorbe le beurre et la crème et donne une purée souple ; les variétés à chair ferme rendent l’aligot plus collant.",
    "Faites cuire l’ail avec les pommes de terre : passé au presse-purée avec elles, il parfume tout l’aligot sans piquer.",
    "Prévoyez une spatule en bois solide et, si possible, quelqu’un pour prendre le relais : la masse est lourde à battre.",
    "Chauffez les assiettes. L’aligot perd son élasticité en refroidissant, et sur une assiette froide il raffermit presque aussitôt.",
  ],
  mistakes: [
    "Passer les pommes de terre au mixeur : la purée devient une colle élastique, et aucun battage ne la rattrape. Utilisez un presse-purée ou un moulin à légumes.",
    "Chauffer trop fort : l’aligot tranche, le gras perle et la pâte devient granuleuse. Retirez du feu, ajoutez une cuillerée de crème chaude et battez vivement.",
    "Jeter toute la tome d’un coup, en gros morceaux froids : elle forme un bloc qui fond mal et attache au fond. Coupez-la en lamelles et ajoutez-la en trois fois.",
    "Utiliser un fromage affiné, comme un cantal vieux ou un comté : il fond sans filer et donne une purée grasse. Il faut un caillé frais.",
    "Préparer l’aligot à l’avance : il durcit en attendant et se réchauffe mal. Lancez-le quand les convives sont à table.",
  ],
  variations: [
    {
      title: "Sans tome fraîche",
      text: "Remplacez la tome par 400 g de mozzarella de vache bien égouttée, épongée et coupée en dés, et 200 g de cantal jeune râpé. Le mélange file bien, mais le goût est plus doux et moins lactique. C’est un dépannage honnête, pas tout à fait un aligot.",
    },
    {
      title: "Pommes de terre à la vapeur",
      text: "Faites cuire les pommes de terre et l’ail 25 à 30 minutes à la vapeur au lieu de l’eau. La purée est plus sèche et absorbe mieux la crème : prévoyez 2 à 3 cuillerées de crème en plus si elle paraît ferme.",
    },
    {
      title: "Plus aillé",
      text: "Faites cuire 4 gousses d’ail au lieu de 2 avec les pommes de terre, ou ajoutez une petite gousse crue, râpée très fin, juste avant la tome. L’ail cru donne un goût nettement plus vif.",
    },
  ],
  storage:
    "L’aligot se mange à la minute : il supporte mal l’attente et le réchauffage, qui le rendent caoutchouteux. Les restes se gardent 2 jours au réfrigérateur dans une boîte fermée. Le mieux est de les façonner en galettes et de les dorer 3 à 4 minutes par face dans une poêle beurrée. Ne le congelez pas.",
  pairing: "Un rouge du Sud-Ouest, comme un marcillac, produit en Aveyron.",
  faq: [
    {
      q: "Par quoi remplacer la tome fraîche dans l’aligot ?",
      a: "Par une autre tome fraîche, de Cantal par exemple, qui donne un résultat très proche. À défaut, un mélange de 400 g de mozzarella bien égouttée et de 200 g de cantal jeune râpé file correctement, avec un goût plus doux. C’est un dépannage, pas tout à fait un aligot.",
    },
    {
      q: "Pourquoi mon aligot ne file pas ?",
      a: "Le plus souvent, parce qu’il n’a pas encore été assez battu. Continuez à travailler en huit sur feu doux quelques minutes : les rubans finissent par se former. Si le fromage était affiné, comme un cantal vieux, il ne filera jamais, quel que soit le temps passé.",
    },
    {
      q: "Peut-on réchauffer l’aligot ?",
      a: "Non, pas vraiment. Réchauffé, il devient caoutchouteux et le gras se sépare. Les restes se gardent 2 jours au réfrigérateur ; aplatis en galettes et dorés à la poêle, ils font un très bon accompagnement le lendemain.",
    },
    {
      q: "Quelles pommes de terre pour un aligot ?",
      a: "Des pommes de terre à chair farineuse, comme la bintje ou l’agria. Leur chair sèche absorbe le beurre et la crème et donne une purée souple. Les variétés à chair ferme rendent l’aligot plus collant.",
    },
    {
      q: "Combien de tome fraîche par personne pour un aligot ?",
      a: "100 g de tome fraîche pour 200 g de pommes de terre, soit un rapport de un pour deux. Pour 6 personnes, comptez 600 g de tome et 1,2 kg de pommes de terre.",
    },
    {
      q: "Avec quoi servir l’aligot ?",
      a: "Avec une saucisse grillée, c’est le service le plus courant. Il accompagne aussi très bien un rôti de porc, une côte de bœuf ou un magret. Prévoyez une salade verte à côté : l’aligot est riche.",
    },
  ],
  nutrition: {
    calories: 615,
    protein: 24.5,
    fat: 41,
    saturatedFat: 27,
    carbs: 36,
    sugar: 2.5,
    fiber: 3,
    sodium: 780,
  },
  annotations: { hero: "brûlant, à côté d’une saucisse", detail: "le ruban qui ne casse pas" },
  images: {
    heroAlt: "Bol d’aligot lisse décoré d’une feuille de persil, servi avec une saucisse grillée et un peu de salade",
    detailAlt: "Gros plan sur un bol d’aligot lisse et brillant, où l’on voit les fils de fromage étirés à la surface",
    credits: {
      hero: {
        photographer: "Slastic",
        url: "https://commons.wikimedia.org/wiki/File:Bol_d%27aligot.jpg",
        source: "Wikimedia Commons",
        license: "Public domain",
      },
      detail: {
        photographer: "Slastic",
        url: "https://commons.wikimedia.org/wiki/File:Bol_de_aligot..jpg",
        source: "Wikimedia Commons",
        license: "Public domain",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#D8B24A",
    onAccent: "#1B1712",
    ink: "#7A5E12",
    tint: "#FBF5E3",
    deep: "#17130A",
    focus: "52% 35%",
  },
});
