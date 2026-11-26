import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "mendiants",
  title: "Mendiants au chocolat",
  seoTitle: "Mendiants au chocolat : tempérage simple et fruits secs",
  tagline: "Garnir avant que le chocolat fige.",
  description:
    "30 mendiants au chocolat noir : 300 g de chocolat tempéré à 31–32 °C, en disques de 4 cm garnis d’amandes, noisettes, pistaches et fruits secs. Prêts en 2 h.",
  summary:
    "Pour 30 mendiants, faites fondre 200 g de chocolat noir à 50–55 °C, ajoutez 100 g de chocolat haché et remuez jusqu’à 31–32 °C. Formez des disques de 4 cm sur du papier cuisson, garnissez-les aussitôt d’amandes et de noisettes grillées, de pistaches, de raisins, d’abricots secs et d’orange confite, puis laissez cristalliser 1 h à température ambiante. Comptez 2 h en tout, dont 35 minutes de travail. Ils se gardent 2 à 3 semaines en boîte.",
  intro: [
    "Un mendiant, c’est un disque de chocolat de la taille d’une grosse pièce, avec dessus ce qu’on a de meilleur dans le placard : une amande, une noisette, quelques pistaches, un raisin, un bout d’abricot ou d’orange confite. Presque rien à cuire, et une jolie boîte à offrir en décembre.",
    "Ce qui se rate, c’est le chocolat. Simplement fondu puis refroidi, il reste mou, fond dans les doigts et se couvre de traces grises au bout de quelques jours. Tempéré, il brille, casse net et tient des semaines dans une boîte.",
    "Le tempérage fait peur, mais la méthode par ensemencement ne demande qu’un thermomètre : on fond les deux tiers du chocolat, on ajoute le dernier tiers haché, et on remue jusqu’à la bonne température. Ayez toutes les garnitures prêtes avant : une fois le chocolat posé, il reste une minute ou deux pour garnir.",
  ],
  category: "Goûter",
  cuisine: "Française",
  keywords: [
    "mendiants",
    "mendiants au chocolat",
    "recette mendiants",
    "mendiants chocolat noir",
    "mendiants de noël",
    "tempérer le chocolat",
    "tempérage chocolat noir",
    "chocolats maison à offrir",
  ],
  diet: ["vegetarian"],
  servings: 30,
  servingsLabel: { one: "mendiant", other: "mendiants" },
  times: { prep: 35, cook: 10, rest: 75 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Hiver"],
  tags: ["noel"],
  equipment: [
    "thermomètre de cuisine",
    "casserole et bol en inox ou en verre pour le bain-marie",
    "maryse",
    "plaque de cuisson",
    "2 feuilles de papier cuisson",
    "boîte en fer pour la conservation",
  ],
  ingredients: [
    {
      title: "Les garnitures",
      items: [
        { qty: 30, unit: "g", name: "amandes entières", step: 5 },
        { qty: 30, unit: "g", name: "noisettes", note: "entières", step: 5 },
        { qty: 20, unit: "g", name: "pistaches non salées", note: "décortiquées", step: 5 },
        { qty: 30, unit: "g", name: "abricots secs", note: "souples", step: 5 },
        { qty: 30, unit: "g", name: "écorce d’orange confite", step: 5 },
        { qty: 30, unit: "g", name: "raisins secs", step: 5 },
      ],
    },
    {
      title: "Le chocolat",
      items: [
        {
          qty: 300,
          unit: "g",
          name: "chocolat noir",
          note: "55 à 70 % de cacao, de couverture si possible",
          step: 10,
        },
      ],
    },
  ],
  method: [
    {
      title: "Les garnitures",
      steps: [
        {
          title: "Griller les fruits secs",
          text: "Préchauffez le four à 160 °C. Étalez les amandes et les noisettes sur la plaque et grillez-les 8 à 10 minutes, jusqu’à ce qu’elles sentent le grillé et que l’intérieur d’une amande coupée soit blond. Laissez les pistaches crues : elles garderaient moins bien leur vert.",
          timer: { minutes: 10, label: "Amandes et noisettes au four" },
        },
        {
          title: "Préparer les garnitures",
          text: "Frottez les noisettes chaudes dans un torchon pour ôter une partie des peaux, puis laissez refroidir le tout 15 minutes. Pendant ce temps, coupez les abricots en lamelles et l’écorce d’orange en dés de 5 mm. Rangez chaque garniture dans une coupelle, à portée de main.",
          timer: { minutes: 15, label: "Fruits secs refroidis" },
        },
        {
          title: "Préparer le chocolat",
          text: "Posez les feuilles de papier cuisson sur le plan de travail. Hachez finement 100 g de chocolat au couteau et cassez le reste en petits morceaux dans le bol du bain-marie.",
        },
      ],
    },
    {
      title: "Le tempérage et les disques",
      steps: [
        {
          title: "Fondre deux tiers",
          text: "Posez le bol sur la casserole d’eau à peine frémissante, sans que le fond touche l’eau, et faites fondre les 200 g de chocolat en remuant. Retirez le bol dès que le thermomètre marque 50 à 55 °C. Essuyez le dessous du bol : une goutte d’eau suffit à rendre le chocolat épais et granuleux.",
          tip: "Au micro-ondes, chauffez par séries de 30 secondes à puissance moyenne, en remuant entre chacune, et contrôlez la température.",
        },
        {
          title: "Ajouter le dernier tiers",
          text: "Versez les 100 g de chocolat haché et remuez sans arrêt à la maryse, en raclant les bords. Le chocolat haché fond en faisant baisser la température. Continuez jusqu’à 31–32 °C : la masse devient plus épaisse et plus brillante. S’il reste des morceaux à cette température, retirez-les.",
        },
        {
          title: "Tester le chocolat",
          text: "Trempez la pointe d’un couteau dans le chocolat et posez-la sur une assiette, dans une pièce fraîche. Au bout de 5 minutes, il doit être sec, brillant et sans traces grises. S’il reste mou ou se marbre, remuez encore et refaites le test.",
          timer: { minutes: 5, label: "Test sur la lame" },
          tip: "Faites ce test à chaque fois : il remplace tous les tableaux de températures et rassure avant de se lancer.",
        },
        {
          title: "Former les disques",
          text: "Déposez une cuillère à café de chocolat sur le papier et étalez-la d’un mouvement circulaire du dos de la cuillère, en un disque de 4 cm. Ne faites que 5 ou 6 disques à la fois, espacés de 2 cm : il faut les garnir avant qu’ils figent.",
        },
        {
          title: "Garnir aussitôt",
          text: "Posez sur chaque disque une amande, une noisette, quelques pistaches, une lamelle d’abricot, un dé d’orange et un raisin, en appuyant à peine. Enchaînez les séries. Si le chocolat épaissit dans le bol, remettez-le quelques secondes sur le bain-marie sans dépasser 32 °C.",
          tip: "Posez d’abord la pièce la plus grosse, l’amande ou l’abricot, et calez les petites autour : la garniture reste à plat.",
        },
        {
          title: "Laisser cristalliser",
          text: "Laissez les mendiants 1 h à température ambiante, dans une pièce à 18–20 °C, loin du four et du radiateur. Ne les mettez pas au réfrigérateur pour aller plus vite. Ils sont prêts quand ils se décollent seuls du papier et cassent net.",
          timer: { minutes: 60, label: "Cristallisation" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Ce que fait le tempérage",
      text: "Le beurre de cacao peut cristalliser sous plusieurs formes, et une seule donne un chocolat brillant qui casse net et ne fond pas au premier contact. À 50–55 °C, tous les cristaux disparaissent. Le chocolat haché, déjà tempéré, apporte des cristaux de la bonne forme, et en redescendant à 31–32 °C, le chocolat fondu se range sur eux.",
    },
    {
      title: "Les deux sortes de traces blanches",
      text: "Un chocolat mal tempéré, ou qui a eu chaud, laisse remonter son beurre de cacao, qui fige en voile gris en surface. À la sortie du réfrigérateur, c’est l’inverse : l’humidité de l’air se dépose, dissout un peu de sucre, qui recristallise en points blancs. Dans les deux cas, les mendiants se mangent sans souci.",
    },
    {
      title: "Pourquoi griller les fruits secs",
      text: "Au four, les sucres et les protéines des amandes et des noisettes réagissent ensemble (réaction de Maillard) et donnent des arômes de grillé. Les fruits secs perdent aussi un peu d’eau et deviennent plus croquants, ce qui tranche avec le fondant du chocolat.",
    },
  ],
  tips: [
    "Un chocolat de couverture, plus riche en beurre de cacao, est plus fluide une fois fondu : les disques s’étalent plus fins et plus réguliers.",
    "Pour des disques tous pareils, tracez des cercles de 4 cm au crayon sur le papier, puis retournez-le, trait dessous.",
    "Choisissez des abricots secs souples et brillants : un fruit sec déjà dur le reste dans le mendiant.",
    "Le chocolat qui reste dans le bol s’étale en plaque sur du papier : une fois figé, il se garde et se retempère une autre fois.",
  ],
  mistakes: [
    "Laisser entrer de l’eau ou de la vapeur dans le chocolat : il épaissit et devient granuleux. Il n’est plus bon pour les mendiants, mais il fait un très bon chocolat chaud avec du lait bien chaud.",
    "Chauffer trop fort : au-delà de 55 °C, le chocolat noir s’épaissit et finit par brûler. Bain-marie à peine frémissant, et on retire le bol tôt.",
    "Mettre les mendiants au réfrigérateur pour aller plus vite : à la sortie, l’humidité les couvre de points blancs. Laissez-les figer à température ambiante.",
    "Garnir trop tard : les fruits secs ne collent plus et tombent dès qu’on prend le mendiant. Travaillez par petites séries ; un fruit tombé se recolle avec une goutte de chocolat.",
  ],
  variations: [
    {
      title: "Sans tempérage",
      text: "Faites fondre les 300 g de chocolat ensemble jusqu’à 45 °C, formez et garnissez les disques, puis mettez-les 20 minutes au réfrigérateur. Ils seront plus mous, fondront vite dans les doigts et blanchiront souvent au bout de quelques jours. Gardez-les au réfrigérateur et mangez-les dans la semaine.",
    },
    {
      title: "Au chocolat au lait ou blanc",
      text: "Même méthode, avec d’autres températures. Chocolat au lait : fondu à 45–50 °C, travaillé à 29–30 °C. Chocolat blanc : fondu à 40–45 °C, travaillé à 28–29 °C. Chauffez très doucement, le blanc épaissit vite s’il a trop chaud. Pistaches et orange confite ressortent bien sur le blanc.",
    },
    {
      title: "Fleur de sel et zeste",
      text: "Sur le chocolat noir, ajoutez quelques grains de fleur de sel ou un peu de zeste d’orange non traitée râpé, en même temps que la garniture. Comptez une pincée de fleur de sel pour 10 mendiants.",
    },
  ],
  storage:
    "Les mendiants tempérés se gardent 2 à 3 semaines dans une boîte en fer bien fermée, à l’abri de la chaleur, de la lumière et de l’humidité, idéalement entre 15 et 18 °C. Séparez les couches par du papier cuisson. Pas de réfrigérateur ni de congélateur : ils en ressortent couverts de points blancs. Sans tempérage, gardez-les au réfrigérateur et mangez-les dans la semaine.",
  pairing: "Un café noir après le repas, ou un thé noir fumé à l’heure du goûter.",
  faq: [
    {
      q: "Combien de temps se conservent les mendiants ?",
      a: "2 à 3 semaines s’ils sont tempérés, dans une boîte en fer fermée, loin d’un radiateur ou d’une fenêtre au soleil. Sans tempérage, ils se gardent une semaine au réfrigérateur et ramollissent vite à température ambiante.",
    },
    {
      q: "Peut-on faire des mendiants sans tempérer le chocolat ?",
      a: "Oui, en le faisant simplement fondre jusqu’à 45 °C. Ils restent bons, mais ils seront moins brillants, plus mous et fondront dans les doigts. Ils blanchissent souvent au bout de quelques jours : gardez-les au réfrigérateur et mangez-les dans la semaine.",
    },
    {
      q: "Pourquoi mes mendiants ont-ils des traces blanches ?",
      a: "Parce que le chocolat n’était pas bien tempéré, qu’il a eu chaud, ou qu’il a pris l’humidité en sortant du réfrigérateur. Ces traces sont du beurre de cacao ou du sucre remontés en surface : elles se mangent sans crainte. La prochaine fois, faites le test de la pointe de couteau avant de former les disques.",
    },
    {
      q: "Quel chocolat choisir pour faire des mendiants ?",
      a: "Un chocolat noir de 55 à 70 % de cacao, de couverture si vous en trouvez. Plus riche en beurre de cacao, il est plus fluide et se tempère plus facilement. Un chocolat à pâtisser classique fonctionne aussi, avec des disques un peu plus épais.",
    },
    {
      q: "Les mendiants contiennent-ils des allergènes ?",
      a: "Oui : amandes, noisettes et pistaches sont des fruits à coque, et beaucoup de chocolats noirs contiennent de la lécithine de soja ou des traces de lait. Pour une personne allergique aux fruits à coque, gardez seulement les fruits secs et l’orange confite, et lisez l’étiquette du chocolat.",
    },
    {
      q: "Comment offrir des mendiants ?",
      a: "Dans une boîte en fer, en couches séparées par du papier cuisson, une fois qu’ils sont bien figés. Notez sur l’étiquette qu’ils contiennent des fruits à coque, et la date. Ils voyagent bien tant qu’ils ne restent pas au chaud, dans une voiture ou près d’un radiateur.",
    },
  ],
  nutrition: {
    calories: 81,
    protein: 1.3,
    fat: 5.4,
    saturatedFat: 2.5,
    carbs: 6,
    sugar: 5.1,
    fiber: 1.4,
    sodium: 2,
  },
  annotations: { hero: "au lait ou blanc, mêmes gestes", detail: "une amande, un raisin, et c’est tout" },
  images: {
    heroAlt:
      "Mendiants au chocolat blanc et au lait garnis d’amandes, de pistaches, de raisins et d’orange confite, sur papier cuisson",
    detailAlt:
      "Gros plan sur des mendiants au chocolat noir garnis d’amandes, de cranberries séchées et de raisins secs",
    credits: {
      hero: {
        photographer: "Pinklime Foody",
        url: "https://www.pexels.com/photo/flat-lay-shot-of-chocolate-candy-11074275/",
      },
      detail: {
        photographer: "Steven Depolo",
        url: "https://commons.wikimedia.org/wiki/File:Chocolate_Mendiants_12-20-09_--_20091220_0312jpg_(4201735363).jpg",
        source: "Wikimedia Commons",
        license: "CC BY 2.0",
      },
    },
  },
  datePublished: "2026-11-26",
  dateModified: "2026-11-26",
  hero,
  detail,
  theme: {
    accent: "#C27A3A",
    onAccent: "#1B1712",
    ink: "#7A4416",
    tint: "#F8EEE5",
    deep: "#1C110B",
    focus: "50% 50%",
  },
});
