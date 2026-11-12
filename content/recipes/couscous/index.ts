import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "couscous",
  title: "Couscous au poulet et à l’agneau",
  seoTitle: "Couscous poulet agneau, semoule vapeur et légumes",
  tagline: "Les légumes arrivent chacun leur tour.",
  description:
    "Couscous familial pour 6 : agneau et poulet mijotés au ras el hanout, carottes, navets, courgettes et pois chiches, semoule passée deux fois à la vapeur.",
  summary:
    "Pour 6 personnes, faites dorer 800 g de collier d’agneau et laissez-le mijoter 40 minutes dans 2,5 l de bouillon au ras el hanout. Ajoutez 6 hauts de cuisse de poulet, les carottes et les navets pour 25 minutes, puis les courgettes et les pois chiches pour 15 minutes. Au-dessus, 600 g de semoule moyenne passent deux fois à la vapeur. Le poulet doit atteindre 74 °C à cœur. Comptez 2 h 20 en tout, dont 40 minutes de préparation.",
  intro: [
    "Un couscous de famille tient dans un seul couscoussier. En bas, l’agneau mijote longtemps dans un bouillon épicé, rejoint plus tard par le poulet et les légumes. En haut, la semoule gonfle dans la vapeur de ce bouillon.",
    "Il se rate de deux façons. Les légumes mis tous ensemble : quand les carottes sont enfin tendres, les courgettes ont fondu. Et la semoule arrosée d’un coup, qui fait des mottes et colle.",
    "La semoule du commerce est presque toujours précuite. Deux passages à la vapeur, en l’égrenant entre les deux avec les mains huilées, suffisent à la rendre légère. Le premier essai est souvent un peu collant, le deuxième beaucoup moins.",
  ],
  category: "Plat",
  cuisine: "Maghrébine",
  keywords: [
    "couscous",
    "recette couscous",
    "couscous poulet agneau",
    "couscous traditionnel",
    "couscous aux légumes et viande",
    "couscous au couscoussier",
    "bouillon de couscous",
    "cuire la semoule de couscous à la vapeur",
    "couscous au poulet",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 40, cook: 100 },
  difficulty: "Intermédiaire",
  cost: "€€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: [
    "couscoussier de 8 à 10 l",
    "grand plat creux pour travailler la semoule",
    "thermomètre à sonde",
    "bande de tissu humide pour la jonction",
  ],
  ingredients: [
    {
      title: "Le bouillon",
      items: [
        { qty: 3, unit: "cas", name: "huile d’olive", step: 1 },
        { qty: 800, unit: "g", name: "collier d’agneau", note: "en 6 morceaux, avec l’os", step: 50 },
        { qty: 2, name: "oignon", plural: "oignons", note: "300 g, émincés", step: 1 },
        { qty: 1, unit: "cas", name: "ras el hanout", step: 0.5 },
        { qty: 1, unit: "cac", name: "paprika doux", step: 0.5 },
        { qty: 1, unit: "cas", name: "concentré de tomate", step: 1 },
        { qty: 2, name: "tomate", plural: "tomates", note: "mûres, râpées", step: 1 },
        { qty: 250, unit: "cl", name: "eau", step: 10 },
        { qty: 0.5, unit: "botte", name: "coriandre fraîche", note: "ficelée avec le persil", step: 0.5 },
        { qty: 0.5, unit: "botte", name: "persil plat", step: 0.5 },
        { qty: 2, unit: "cac", name: "sel fin", step: 0.5 },
        { name: "poivre du moulin" },
        {
          qty: 6,
          name: "haut de cuisse de poulet",
          plural: "hauts de cuisse de poulet",
          note: "avec l’os, 900 g environ",
          step: 1,
        },
        { qty: 4, name: "carotte", plural: "carottes", note: "500 g, coupées en deux dans la longueur", step: 1 },
        { qty: 4, name: "navet", plural: "navets", note: "400 g, petits, en quartiers", step: 1 },
        { qty: 3, name: "courgette", plural: "courgettes", note: "500 g, en tronçons de 6 cm fendus en deux", step: 1 },
        { qty: 250, unit: "g", name: "pois chiches cuits", note: "égouttés, une boîte de 400 g", step: 50 },
        { name: "harissa", note: "pour servir", optional: true },
      ],
    },
    {
      title: "La semoule",
      items: [
        { qty: 600, unit: "g", name: "semoule moyenne", note: "précuite", step: 50 },
        { qty: 2, unit: "cas", name: "huile d’olive", step: 1 },
        { qty: 30, unit: "cl", name: "eau tiède", step: 5 },
        { qty: 1, unit: "cac", name: "sel fin", step: 0.5 },
        { qty: 40, unit: "g", name: "beurre", note: "en morceaux", step: 5 },
      ],
    },
  ],
  method: [
    {
      title: "Le bouillon",
      steps: [
        {
          title: "Dorer l’agneau",
          text: "Dans la marmite du couscoussier, chauffez 3 cuillerées d’huile à feu moyen-vif. Faites dorer l’agneau sur toutes les faces, 8 minutes environ, en deux fois si la marmite est étroite. Ajoutez les oignons et laissez-les fondre 5 minutes en grattant les sucs du fond.",
          timer: { minutes: 13, label: "Agneau et oignons" },
        },
        {
          title: "Lancer le bouillon",
          text: "Ajoutez le ras el hanout, le paprika et le concentré de tomate, remuez quelques secondes, puis les tomates râpées. Versez 2,5 l d’eau, ajoutez le bouquet d’herbes ficelé, le sel et le poivre. Portez à ébullition, écumez, puis couvrez et laissez frémir 40 minutes. Pendant ce temps, préparez la semoule.",
          timer: { minutes: 40, label: "Agneau seul dans le bouillon" },
        },
      ],
    },
    {
      title: "La semoule",
      steps: [
        {
          title: "Huiler la semoule",
          text: "Versez la semoule dans le grand plat, arrosez-la de 2 cuillerées d’huile et frottez-la entre vos paumes pour enrober chaque grain. Faites dissoudre le sel dans l’eau tiède. Versez-en la moitié en pluie, petit à petit, sans cesser de frotter, puis laissez gonfler 10 minutes.",
          timer: { minutes: 10, label: "Semoule qui gonfle" },
          tip: "Frottez sans presser, comme pour égrener du sable mouillé. Les grains doivent rester séparés.",
        },
        {
          title: "Premier passage à la vapeur",
          text: "Ôtez le couvercle de la marmite et posez le panier du couscoussier dessus. Si la vapeur s’échappe à la jonction, entourez-la de la bande de tissu humide. Versez la semoule dans le panier sans la tasser. Quand la vapeur traverse la surface, comptez 15 minutes, sans couvercle.",
          timer: { minutes: 15, label: "Premier passage" },
          tip: "Le bouillon ne doit jamais toucher le fond du panier : la semoule cuirait à l’eau.",
        },
        {
          title: "Égrener et arroser",
          text: "Renversez la semoule dans le plat et attendez qu’elle soit supportable au toucher. Écrasez les mottes à la fourchette, puis égrenez-la entre vos mains huilées en versant le reste de l’eau salée en pluie. Laissez reposer 10 minutes.",
          timer: { minutes: 10, label: "Semoule au repos" },
        },
      ],
    },
    {
      title: "Les légumes et le service",
      steps: [
        {
          title: "Ajouter poulet et légumes",
          text: "Au bout des 40 minutes de bouillon, ajoutez les hauts de cuisse, les carottes et les navets, qui doivent être couverts. Reposez le panier de semoule sur la marmite et laissez cuire 25 minutes à frémissement franc. La semoule fait son second passage pendant ce temps.",
          timer: { minutes: 25, label: "Poulet, carottes et navets" },
        },
        {
          title: "Ajouter les courgettes",
          text: "Retirez le panier, ajoutez les courgettes et les pois chiches, et poursuivez 15 minutes. Piquez le thermomètre dans le plus gros haut de cuisse, contre l’os : il doit indiquer 74 °C. L’agneau se détache à la fourchette, les carottes sont tendres sans s’écraser. Goûtez le bouillon et rectifiez le sel.",
          timer: { minutes: 15, label: "Courgettes et pois chiches" },
          tip: "Une courgette cuite plus de 20 minutes se défait dans le bouillon : elle passe toujours en dernier.",
        },
        {
          title: "Beurrer la semoule",
          text: "Renversez la semoule dans le plat, ajoutez le beurre en morceaux et égrenez-la à la fourchette jusqu’à ce qu’il ait fondu. Couvrez d’un torchon en attendant de servir.",
        },
        {
          title: "Servir",
          text: "Dressez la semoule en dôme dans un grand plat, disposez les viandes et les légumes dessus à l’écumoire, et servez le bouillon à part dans une soupière. Délayez la harissa dans une louche de bouillon pour ceux qui aiment le piquant.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi la vapeur plutôt que l’eau",
      text: "La semoule précuite a déjà été cuite puis séchée. À la vapeur, elle se réhydrate lentement, en surface d’abord, et l’huile qui enrobe chaque grain l’empêche de coller aux autres. Plongée d’un coup dans un liquide, elle absorbe vite et de façon inégale, d’où les mottes.",
    },
    {
      title: "L’agneau d’abord, le poulet ensuite",
      text: "Le collier d’agneau est riche en collagène, qui ne se transforme en gélatine qu’après une longue cuisson à frémissement : il lui faut 1 h 20 en tout. Un haut de cuisse de poulet atteint les 74 °C à cœur en 30 à 40 minutes de frémissement. Ajouté au début, il sécherait.",
    },
    {
      title: "Des légumes par densité",
      text: "Carottes et navets ont des tissus fermes, riches en pectines qui ne cèdent qu’après 40 minutes de frémissement environ. La courgette, bien plus tendre, ramollit en 15 minutes. Les ajouter par vagues donne des légumes cuits au même point.",
    },
  ],
  tips: [
    "Avec des pois chiches secs, comptez 150 g trempés 12 heures dans l’eau froide, et mettez-les dans le bouillon avec l’agneau dès le départ.",
    "Préparez tous les légumes pendant que l’agneau dore : ensuite, il ne reste qu’à les ajouter à l’heure.",
    "Le bouillon est encore meilleur réchauffé le lendemain. Pour un repas de midi, faites-le la veille et ne préparez que la semoule le jour même.",
    "Pour un bouillon moins gras, laissez-le refroidir, retirez la graisse figée en surface, puis réchauffez.",
    "Gardez une louche de bouillon dans un bol pour arroser la semoule de ceux qui l’aiment bien mouillée.",
  ],
  mistakes: [
    "Verser toute l’eau d’un coup sur la semoule : elle forme des mottes. Écrasez-les à la fourchette, puis frottez entre les mains huilées avant le passage à la vapeur.",
    "Couvrir le panier de semoule avec un couvercle : l’eau condensée retombe et la semoule colle par plaques. Laissez-le ouvert, ou posez un torchon propre dessus.",
    "Mettre les courgettes avec les carottes : elles se délitent et troublent le bouillon. Elles vont 15 minutes avant la fin, pas plus tôt.",
    "Servir le poulet sans vérifier la cuisson : près de l’os, la chair peut rester rosée. Le thermomètre doit indiquer 74 °C ; sinon, prolongez de 5 à 10 minutes.",
  ],
  variations: [
    {
      title: "Tout poulet",
      text: "Supprimez l’agneau et prenez 10 à 12 hauts de cuisse. Après les épices et l’eau, laissez frémir 10 minutes, puis mettez le poulet, les carottes et les navets pour 25 minutes, et finissez comme dans la recette. Le couscous est prêt en 1 h 30.",
    },
    {
      title: "Avec des merguez",
      text: "Faites griller 6 merguez à la poêle ou au gril, 10 minutes en les retournant, et posez-les sur le couscous au moment de servir. Ne les cuisez pas dans le bouillon, il deviendrait rouge et gras.",
    },
    {
      title: "Avec du potiron et du chou",
      text: "Ajoutez 300 g de potiron en gros cubes avec les courgettes et un quart de chou vert coupé en deux avec les carottes. Allongez le bouillon de 30 cl d’eau pour que tout reste couvert.",
    },
  ],
  storage:
    "Laissez refroidir et mettez au réfrigérateur dans les 2 heures. Le bouillon avec les viandes et les légumes se garde 2 à 3 jours, la semoule à part 2 jours ; réchauffez-la 10 minutes à la vapeur. Le bouillon et les viandes se congèlent 3 mois, mais les courgettes ramollissent. Ne recongelez jamais.",
  pairing:
    "De la harissa délayée dans le bouillon, des olives, et un rosé bien frais ou un thé à la menthe pour finir.",
  easy: {
    shortcut: "semoule moyenne précuite gonflée au bouillon",
    note: "La semoule gonfle en 5 minutes dans un saladier avec le bouillon brûlant, et une grande cocotte remplace le couscoussier. Les grains sont un peu plus serrés qu’après deux passages à la vapeur, mais prennent le goût du bouillon. Prenez une semoule moyenne : la fine devient vite pâteuse.",
    times: { prep: 25, cook: 95 },
    ingredients: [
      {
        title: "Le bouillon",
        items: [
          { qty: 3, unit: "cas", name: "huile d’olive", step: 1 },
          { qty: 800, unit: "g", name: "collier d’agneau", note: "en 6 morceaux, avec l’os", step: 50 },
          { qty: 2, name: "oignon", plural: "oignons", note: "300 g, émincés", step: 1 },
          { qty: 1, unit: "cas", name: "ras el hanout", step: 0.5 },
          { qty: 1, unit: "cas", name: "concentré de tomate", step: 1 },
          { qty: 250, unit: "cl", name: "eau", step: 10 },
          { qty: 2, unit: "cac", name: "sel fin", step: 0.5 },
          {
            qty: 6,
            name: "haut de cuisse de poulet",
            plural: "hauts de cuisse de poulet",
            note: "avec l’os, 900 g environ",
            step: 1,
          },
          { qty: 4, name: "carotte", plural: "carottes", note: "500 g, coupées en deux", step: 1 },
          { qty: 4, name: "navet", plural: "navets", note: "400 g, en quartiers", step: 1 },
          { qty: 3, name: "courgette", plural: "courgettes", note: "500 g, en tronçons de 6 cm", step: 1 },
          { qty: 250, unit: "g", name: "pois chiches cuits", note: "égouttés, une boîte de 400 g", step: 50 },
        ],
      },
      {
        title: "La semoule",
        items: [
          { qty: 600, unit: "g", name: "semoule moyenne précuite", step: 50 },
          { qty: 2, unit: "cas", name: "huile d’olive", step: 1 },
          { qty: 0.5, unit: "cac", name: "sel fin", step: 0.5 },
          { qty: 60, unit: "cl", name: "bouillon du couscous", note: "prélevé dans la cocotte, brûlant", step: 5 },
          { qty: 40, unit: "g", name: "beurre", step: 5 },
        ],
      },
    ],
    method: [
      {
        title: "Le couscous",
        steps: [
          {
            title: "Dorer l’agneau",
            text: "Dans une cocotte de 7 l, chauffez l’huile à feu moyen-vif et faites dorer l’agneau sur toutes les faces, 8 minutes environ. Ajoutez les oignons et laissez-les fondre 5 minutes.",
            timer: { minutes: 13, label: "Agneau et oignons" },
          },
          {
            title: "Mijoter l’agneau",
            text: "Ajoutez le ras el hanout et le concentré de tomate, remuez, versez l’eau et salez. Portez à ébullition, écumez, puis couvrez et laissez frémir 40 minutes.",
            timer: { minutes: 40, label: "Agneau seul" },
          },
          {
            title: "Ajouter poulet et légumes",
            text: "Ajoutez les hauts de cuisse, les carottes et les navets, et laissez frémir 25 minutes à couvert.",
            timer: { minutes: 25, label: "Poulet, carottes et navets" },
          },
          {
            title: "Finir avec les courgettes",
            text: "Ajoutez les courgettes et les pois chiches et poursuivez 15 minutes. Le poulet doit atteindre 74 °C à cœur contre l’os, et les carottes être tendres sans s’écraser.",
            timer: { minutes: 15, label: "Courgettes et pois chiches" },
          },
          {
            title: "Gonfler la semoule",
            text: "Dans un grand saladier, frottez la semoule avec l’huile et le sel entre vos paumes. Versez dessus 60 cl de bouillon brûlant prélevé dans la cocotte, couvrez d’une assiette et laissez gonfler 5 minutes.",
            timer: { minutes: 5, label: "Semoule qui gonfle" },
          },
          {
            title: "Égrener et servir",
            text: "Ajoutez le beurre et égrenez la semoule à la fourchette jusqu’à ce qu’elle soit légère et le beurre fondu. Servez-la avec les viandes et les légumes, et le bouillon à part.",
          },
        ],
      },
    ],
  },
  faq: [
    {
      q: "Quelle quantité de semoule par personne pour un couscous ?",
      a: "Comptez 80 à 100 g de semoule crue par personne en plat principal, soit 600 g pour 6. Elle triple à peu près de volume en gonflant. Pour de gros appétits ou des restes, montez à 120 g.",
    },
    {
      q: "Peut-on faire un couscous sans couscoussier ?",
      a: "Oui. Faites cuire le bouillon dans une grande cocotte et gonflez la semoule dans un saladier avec du bouillon brûlant, comme dans la version facile. Vous pouvez aussi poser une passoire métallique sur la cocotte et sceller la jonction avec du papier aluminium.",
    },
    {
      q: "Semoule fine, moyenne ou grosse pour le couscous ?",
      a: "Moyenne, dans la plupart des cas. Elle reste légère et absorbe bien le bouillon. La fine convient aux desserts et aux salades, elle devient vite pâteuse sous une sauce. La grosse demande plus d’eau et plus de vapeur.",
    },
    {
      q: "Comment savoir si le poulet du couscous est cuit ?",
      a: "74 °C à cœur, mesurés au thermomètre dans le plus gros morceau, contre l’os. Sans thermomètre, piquez la chair près de l’os : le jus doit couler clair, sans trace rosée. Si ce n’est pas le cas, prolongez la cuisson de 5 à 10 minutes.",
    },
    {
      q: "Peut-on préparer le couscous la veille ?",
      a: "Oui, le bouillon avec les viandes et les légumes se prépare la veille et se garde 2 à 3 jours au réfrigérateur. Réchauffez-le à frémissement. La semoule est meilleure faite le jour même, mais elle se réchauffe bien 10 minutes à la vapeur.",
    },
    {
      q: "Peut-on congeler un couscous ?",
      a: "Oui, 3 mois au congélateur, le bouillon avec les viandes d’un côté, la semoule de l’autre. Les courgettes ramollissent à la décongélation. Décongelez au réfrigérateur, réchauffez jusqu’à frémissement et ne recongelez jamais.",
    },
  ],
  nutrition: {
    calories: 960,
    protein: 54,
    fat: 41,
    saturatedFat: 14,
    carbs: 96,
    sugar: 12,
    fiber: 12,
    sodium: 1200,
  },
  annotations: { hero: "le collier d’agneau, fondant à l’os", detail: "les pois chiches en dernier" },
  images: {
    heroAlt:
      "Assiette de couscous garnie d’agneau, de pois chiches, de carottes et de courgettes en gros morceaux sur la semoule",
    detailAlt:
      "Couscous dans une assiette à motifs bleus, avec un morceau d’agneau, des pois chiches, une carotte et un piment vert",
    credits: {
      hero: {
        photographer: "Layla Azeroual",
        url: "https://www.pexels.com/photo/delicious-moroccan-couscous-with-vegetables-and-meat-29594950/",
      },
      detail: {
        photographer: "BOCHRA bouneb",
        url: "https://www.pexels.com/photo/traditional-moroccan-couscous-with-lamb-and-vegetables-36916123/",
      },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#E0862A",
    onAccent: "#1B1712",
    ink: "#94500F",
    tint: "#FBF0E2",
    deep: "#1E1208",
    focus: "50% 45%",
  },
});
