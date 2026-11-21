import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "manalas",
  title: "Manalas",
  seoTitle: "Manalas : les bonshommes briochés de la Saint-Nicolas",
  tagline: "Huit petits bonshommes pour le 6 décembre.",
  description:
    "Manalas alsaciens pour la Saint-Nicolas : une pâte briochée au lait et au beurre, 8 bonshommes taillés aux ciseaux, cuits 16 à 18 minutes à 170 °C.",
  summary:
    "Pour 8 manalas, pétrissez 500 g de farine avec 20 cl de lait tiède, 2 œufs, 70 g de sucre, 20 g de levure fraîche et 8 g de sel, puis ajoutez 80 g de beurre mou. Après 1 h 30 de pousse, façonnez 8 bonshommes de 120 g, entaillés aux ciseaux pour les bras et les jambes, avec des raisins secs pour les yeux. Dorez, laissez pousser 45 minutes, sucrez et faites cuire 16 à 18 minutes à 170 °C. Environ 3 h 30 en tout, dont 45 minutes de travail.",
  intro: [
    "Les manalas, qu’on appelle aussi mannele, sont de petits bonshommes en pâte briochée qu’on prépare pour la Saint-Nicolas, le 6 décembre, en Alsace et en Lorraine. Une pâte au lait et au beurre, deux raisins pour les yeux, du sucre perlé sur le ventre.",
    "La pâte n’a rien de difficile, elle demande surtout de la patience : riche en sucre et en beurre, elle lève lentement. Ce qui fait rater les manalas, c’est plutôt le façonnage. Des bras trop serrés se recollent au corps pendant la pousse, et le bonhomme finit en boudin.",
    "Entaillez franchement aux ciseaux, écartez bras et jambes d’un bon centimètre, et sortez-les du four dès qu’ils sont bien dorés. Deux minutes de trop et la mie sèche.",
  ],
  category: "Goûter",
  cuisine: "Française",
  keywords: [
    "manala",
    "manalas",
    "recette manala",
    "mannele",
    "recette mannele",
    "manala saint-nicolas",
    "manala alsacien",
    "bonhomme brioche saint-nicolas",
  ],
  diet: ["vegetarian"],
  servings: 8,
  servingsLabel: { one: "manala", other: "manalas" },
  times: { prep: 45, cook: 18, rest: 145 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Hiver"],
  tags: ["hiver", "noel"],
  equipment: [
    "robot pâtissier avec crochet",
    "2 plaques de four et papier cuisson",
    "ciseaux de cuisine",
    "pinceau souple",
    "balance",
  ],
  ingredients: [
    {
      title: "La pâte",
      items: [
        { qty: 20, unit: "cl", name: "lait entier", note: "tiède, 35 °C au plus", step: 1 },
        { qty: 20, unit: "g", name: "levure fraîche de boulanger", note: "ou 7 g de levure sèche", step: 1 },
        { qty: 500, unit: "g", name: "farine", note: "T45 ou T55", step: 10 },
        { qty: 70, unit: "g", name: "sucre", step: 5 },
        { qty: 8, unit: "g", name: "sel fin", step: 1 },
        { qty: 2, name: "œuf", plural: "œufs", note: "battus", step: 1 },
        { qty: 80, unit: "g", name: "beurre", note: "mou, en morceaux", step: 5 },
      ],
    },
    {
      title: "Le décor",
      items: [
        { qty: 30, unit: "g", name: "raisins secs", note: "ou pépites de chocolat", step: 5 },
        { qty: 1, name: "jaune d’œuf", plural: "jaunes d’œufs", step: 1, fixed: true },
        { qty: 1, unit: "cas", name: "lait", step: 1, fixed: true },
        { qty: 30, unit: "g", name: "sucre perlé", step: 5 },
      ],
    },
  ],
  method: [
    {
      title: "La pâte",
      steps: [
        {
          title: "Délayer la levure",
          text: "Faites tiédir le lait à 35 °C au plus : il doit sembler à peine tiède au doigt. Émiettez la levure dedans et remuez jusqu’à ce qu’elle soit dissoute.",
        },
        {
          title: "Pétrir sans le beurre",
          text: "Dans le bol du robot, mettez la farine, le sucre et le sel, puis les œufs battus et le lait à la levure. Pétrissez au crochet 5 minutes à vitesse lente, puis 5 minutes à vitesse moyenne. La pâte, d’abord collante, se décolle peu à peu des parois.",
          timer: { minutes: 10, label: "Pétrissage" },
          tip: "Ne rajoutez pas de farine si elle colle au début : c’est normal pour une pâte briochée. Elle se tient d’elle-même en fin de pétrissage.",
        },
        {
          title: "Incorporer le beurre",
          text: "Ajoutez le beurre mou en trois fois, en attendant qu’il soit absorbé avant d’en remettre, puis pétrissez encore 5 minutes à vitesse moyenne. La pâte est prête quand elle est lisse, brillante, se décolle entièrement du bol, et qu’un petit morceau étiré entre les doigts forme une membrane fine sans se déchirer.",
          timer: { minutes: 5, label: "Pétrissage avec le beurre" },
        },
        {
          title: "Laisser pousser",
          text: "Formez une boule, posez-la dans un saladier, couvrez d’un torchon et laissez pousser 1 h 30 à 2 h, vers 22 à 25 °C, à l’abri des courants d’air. Elle doit doubler de volume : un doigt fariné enfoncé laisse un creux qui remonte lentement.",
          timer: { minutes: 90, label: "Première pousse" },
        },
      ],
    },
    {
      title: "Le façonnage et la cuisson",
      steps: [
        {
          title: "Diviser en pâtons",
          text: "Dégazez la pâte en l’aplatissant de la paume, puis divisez-la en 8 pâtons de 120 g. Roulez chacun en boudin de 15 cm, un peu plus épais à un bout pour la tête. Couvrez et laissez reposer 10 minutes : la pâte se détend et se façonne mieux.",
          timer: { minutes: 10, label: "Détente des pâtons" },
        },
        {
          title: "Marquer la tête",
          text: "Posez les boudins sur les plaques garnies de papier cuisson, quatre par plaque, bien espacés. Avec le tranchant de la main, marquez un cou au quart de la longueur, côté épais, par petits allers-retours, sans couper. Arrondissez la tête du bout des doigts.",
        },
        {
          title: "Couper bras et jambes",
          text: "Avec les ciseaux, faites de chaque côté, juste sous le cou, une entaille en biais de 4 cm vers le bas pour les bras. Fendez le bas du corps sur 6 cm pour les jambes. Écartez bras et jambes d’au moins 1 cm.",
          tip: "Les membres se rapprochent en gonflant. Trop serrés au départ, ils se recollent au corps pendant la cuisson.",
        },
        {
          title: "Poser les yeux, dorer",
          text: "Enfoncez profondément 2 raisins secs pour les yeux et 2 ou 3 pour les boutons. Mélangez le jaune d’œuf avec la cuillère de lait et badigeonnez les bonshommes au pinceau, sans faire couler la dorure sur le papier.",
          tip: "Un raisin posé en surface saute pendant la pousse et brûle au four. Enfoncez-le jusqu’à ce qu’il disparaisse presque.",
        },
        {
          title: "Deuxième pousse",
          text: "Laissez pousser à découvert 45 minutes à 1 h, loin des courants d’air. Les manalas doivent gonfler d’environ moitié, et la pâte, pressée du doigt, revenir lentement. Pendant ce temps, préchauffez le four à 170 °C en chaleur tournante.",
          timer: { minutes: 45, label: "Deuxième pousse" },
        },
        {
          title: "Dorer et sucrer",
          text: "Repassez une fine couche de dorure, d’une main légère pour ne pas dégonfler la pâte, puis parsemez de sucre perlé sur le ventre et la tête.",
        },
        {
          title: "Cuire",
          text: "Enfournez les deux plaques ensemble pour 16 à 18 minutes. Les manalas sont prêts quand ils sont d’un brun doré soutenu sur le dessus et que le dessous, tapoté du doigt, sonne creux.",
          timer: { minutes: 18, label: "Cuisson des manalas" },
          tip: "Sans chaleur tournante, cuisez une plaque à la fois à 180 °C, le même temps, en gardant la seconde dans un endroit frais.",
        },
        {
          title: "Laisser tiédir",
          text: "Faites-les glisser sur une grille et laissez-les tiédir avant de croquer dedans : la mie finit de se tenir en refroidissant.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Le beurre arrive en second",
      text: "Le gluten se forme quand les protéines de la farine s’hydratent et qu’on les travaille. Le beurre les enrobe et freine la formation de ce réseau. On pétrit donc d’abord sans lui, puis on l’ajoute à une pâte déjà élastique, qui garde sa capacité à retenir le gaz produit par la levure.",
    },
    {
      title: "Pourquoi la pâte lève lentement",
      text: "Avec 70 g de sucre pour 500 g de farine, la pâte est riche. Le sucre attire l’eau dont la levure a besoin pour travailler, et le beurre ralentit encore les choses. C’est pour ça qu’on met plus de levure que dans un pain et qu’il faut 1 h 30 à 2 h de première pousse.",
    },
    {
      title: "Ce que fait la dorure",
      text: "Le jaune d’œuf apporte des protéines et un peu de sucre, le lait du lactose. À la cuisson, ils brunissent par la réaction de Maillard et donnent cette croûte brillante, brun doré, qu’une pâte nue n’aurait pas.",
    },
  ],
  tips: [
    "Pesez les pâtons. Des bonshommes de même poids cuisent ensemble et dorent de la même façon.",
    "Si la cuisine est fraîche, posez le saladier dans le four éteint à côté d’un bol d’eau très chaude : la pâte y lève plus vite.",
    "Gardez une petite boule de pâte pour faire un bonnet ou une écharpe aux plus réussis, collés avec un peu de dorure.",
    "Le lait ne doit jamais dépasser 35 °C. Au-delà de 50 °C environ, la levure meurt et la pâte ne lève plus.",
  ],
  mistakes: [
    "Un lait trop chaud : la levure est tuée et la pâte reste plate après une heure. Délayez une nouvelle dose de levure dans 2 cas de lait tiède et repétrissez-la dans la pâte.",
    "Un pétrissage trop court : la pâte se déchire au façonnage et les manalas restent denses. Continuez jusqu’à ce qu’elle forme une membrane fine.",
    "Ajouter de la farine parce que la pâte colle : elle devient ferme et les manalas sortent secs. Huilez-vous légèrement les mains plutôt.",
    "Des entailles timides : bras et jambes se ressoudent pendant la pousse. Coupez franchement et écartez d’au moins 1 cm.",
    "Prolonger la cuisson pour plus de couleur : la mie sèche vite. Sortez-les dès que le dessous sonne creux.",
  ],
  variations: [
    {
      title: "Aux pépites de chocolat",
      text: "Remplacez les raisins par des pépites de chocolat pour les yeux et les boutons, et ajoutez 80 g de pépites à la pâte à la fin du pétrissage. Enfoncez-les bien, elles fondent si elles restent en surface.",
    },
    {
      title: "Parfumés",
      text: "Ajoutez le zeste d’un citron non traité ou 1 cas d’eau de fleur d’oranger avec le lait. Le reste de la recette ne change pas.",
    },
    {
      title: "Petits manalas",
      text: "Divisez la pâte en 16 pâtons de 60 g, faites des entailles de 2 cm pour les bras et de 3 cm pour les jambes, et comptez 10 à 12 minutes de cuisson.",
    },
  ],
  storage:
    "Ils se gardent 2 jours à température ambiante, dans une boîte hermétique ou un sac bien fermé. Au-delà, congelez-les emballés un par un, 2 mois au plus. Décongelez-les 2 h à température ambiante, puis passez-les 5 minutes au four à 150 °C.",
  pairing:
    "Un chocolat chaud au goûter, ou un café au lait le matin, avec une clémentine.",
  faq: [
    {
      q: "Quand mange-t-on les manalas ?",
      a: "Autour de la Saint-Nicolas, le 6 décembre, en Alsace et en Lorraine. On les mange au goûter ou au petit-déjeuner, nature ou avec un chocolat chaud.",
    },
    {
      q: "Peut-on faire des manalas avec de la levure sèche ?",
      a: "Oui : 7 g de levure sèche de boulanger remplacent 20 g de levure fraîche. La levure instantanée se mélange directement à la farine. La levure sèche active se délaye 10 minutes dans le lait tiède avant d’être ajoutée.",
    },
    {
      q: "Peut-on pétrir la pâte à manalas à la main ?",
      a: "Oui, comptez 15 minutes au total sur le plan de travail, en étirant et en repliant la pâte. Elle colle au début : ne rajoutez pas de farine. Ajoutez le beurre en morceaux après 10 minutes et pétrissez jusqu’à ce que la pâte redevienne lisse.",
    },
    {
      q: "Peut-on préparer la pâte des manalas la veille ?",
      a: "Oui. Après le pétrissage, couvrez la pâte et laissez-la pousser une nuit au réfrigérateur, 8 à 12 h. Façonnez-la froide le lendemain, c’est même plus facile, puis comptez 1 h à 1 h 30 de seconde pousse.",
    },
    {
      q: "Comment savoir si la pâte a assez poussé ?",
      a: "Elle a doublé de volume, et un doigt fariné enfoncé de 1 cm laisse un creux qui remonte lentement. S’il remonte aussitôt, attendez encore. S’il ne remonte plus du tout, la pâte a trop poussé : façonnez sans attendre.",
    },
    {
      q: "Pourquoi mes manalas sont-ils secs ?",
      a: "Le plus souvent, ils sont trop cuits : deux ou trois minutes de trop suffisent. Trop de farine ajoutée pendant le pétrissage ou le façonnage donne aussi une mie sèche.",
    },
  ],
  nutrition: {
    calories: 390,
    protein: 9,
    fat: 12,
    saturatedFat: 6.5,
    carbs: 61,
    sugar: 17,
    fiber: 2,
    sodium: 430,
  },
  annotations: {
    hero: "avec des pommes et des noix",
    detail: "bras bien écartés avant la pousse",
  },
  images: {
    heroAlt:
      "Trois manalas dorés aux yeux de raisins secs sur une assiette fleurie, avec deux pommes vertes et des noix",
    detailAlt:
      "Un manala en pâte briochée bien doré, vu de dessus sur fond blanc, avec sa tête ronde, ses bras et ses jambes",
    credits: {
      hero: {
        photographer: "Sol Octobris",
        url: "https://commons.wikimedia.org/wiki/File:Weckm%C3%A4nnerL1200172_(2).jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
      detail: {
        photographer: "Nicolas Herrmann",
        url: "https://commons.wikimedia.org/wiki/File:Mannele.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#C77A32",
    onAccent: "#1B1712",
    ink: "#7E4513",
    tint: "#FAEEE3",
    deep: "#1E1009",
    focus: "52% 50%",
  },
});
