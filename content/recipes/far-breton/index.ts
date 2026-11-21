import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "far-breton",
  title: "Far breton aux pruneaux",
  seoTitle: "Far breton aux pruneaux, ferme et fondant",
  tagline: "Il doit encore trembler en sortant.",
  description:
    "Le far breton aux pruneaux pour 8 parts : 1 l de lait, 250 g de farine, 5 œufs, une pâte qui repose 1 h, puis 55 minutes au four, 210 °C puis 180 °C.",
  summary:
    "Pour 8 parts, fouettez 250 g de farine, 180 g de sucre, 5 œufs, 1 l de lait entier, 40 g de beurre demi-sel fondu et, si vous voulez, 4 cl de rhum. Laissez reposer la pâte 1 h au réfrigérateur, versez-la sur 300 g de pruneaux dans un plat beurré et faites cuire 10 minutes à 210 °C puis 45 minutes à 180 °C. Il se raffermit en refroidissant pendant 1 h. Comptez 3 h 10 en tout, dont 15 minutes de travail.",
  intro: [
    "Le far est un flan épais et dense, plus proche d’une crème cuite à la farine que d’un gâteau. Une croûte brune et un peu caramélisée, un cœur fondant qui se tient à la découpe, et des pruneaux qui tombent au fond.",
    "Il se rate de deux façons : trop cuit, il devient caoutchouteux et se fend ; pas assez, il reste liquide au centre. Le bon moment, c’est quand il a gonflé, bien bruni, et que le centre tremble encore un peu quand on secoue le plat.",
    "Faites la pâte à l’avance. Une heure de repos au frais suffit à la rendre plus lisse, et le far n’en est que plus fondant.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "far breton",
    "far breton aux pruneaux",
    "recette far breton",
    "far breton traditionnel",
    "far breton sans rhum",
    "far breton moelleux",
    "cuisson far breton",
  ],
  diet: ["vegetarian"],
  servings: 8,
  servingsLabel: { one: "part", other: "parts" },
  times: { prep: 15, cook: 55, rest: 120 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  tags: [],
  equipment: [
    "plat à gratin en céramique de 24 × 32 cm (ou moule rond de 28 cm)",
    "grand saladier et fouet",
    "pinceau pour beurrer le plat",
  ],
  ingredients: [
    {
      title: "La pâte",
      items: [
        { qty: 250, unit: "g", name: "farine", note: "type 55", step: 10 },
        { qty: 180, unit: "g", name: "sucre en poudre", step: 10 },
        { qty: 1, unit: "pincée", name: "sel fin", fixed: true },
        { qty: 5, name: "œuf", plural: "œufs", step: 1 },
        { qty: 1, unit: "l", name: "lait entier", step: 0.1 },
        { qty: 40, unit: "g", name: "beurre demi-sel", note: "fondu et tiédi", step: 5 },
        { qty: 4, unit: "cl", name: "rhum brun", note: "facultatif", step: 1 },
      ],
    },
    {
      title: "Le plat",
      items: [
        { qty: 15, unit: "g", name: "beurre demi-sel", note: "mou, pour le plat", step: 5 },
        {
          qty: 300,
          unit: "g",
          name: "pruneau",
          plural: "pruneaux",
          note: "d’Agen, dénoyautés pour les enfants",
          step: 25,
        },
      ],
    },
  ],
  method: [
    {
      title: "Le far",
      steps: [
        {
          title: "Faire la pâte",
          text: "Dans un grand saladier, mélangez la farine, le sucre et le sel. Creusez un puits, cassez-y les œufs et fouettez depuis le centre en ramenant la farine petit à petit. Arrêtez-vous quand vous obtenez une pâte épaisse, lisse et brillante, sans un seul grumeau.",
          tip: "C’est maintenant, pendant que la pâte est épaisse, qu’on chasse les grumeaux. Une fois le lait versé, ils ne partent plus au fouet.",
        },
        {
          title: "Détendre au lait",
          text: "Versez le lait en quatre ou cinq fois, en fouettant à chaque ajout jusqu’à ce que la pâte soit de nouveau homogène. Ajoutez le beurre fondu tiédi et le rhum. La pâte est très liquide, plus fluide qu’une pâte à crêpes : c’est normal.",
        },
        {
          title: "Laisser reposer",
          text: "Couvrez le saladier et laissez reposer 1 heure au réfrigérateur. Vous pouvez aussi la préparer la veille, mais pas plus de 24 heures à l’avance : elle contient des œufs crus. Pendant ce temps, si les pruneaux sont secs et durs, faites-les tremper dans de l’eau chaude, puis épongez-les bien.",
          timer: { minutes: 60, label: "Repos de la pâte" },
        },
        {
          title: "Préparer le plat",
          text: "Préchauffez le four à 210 °C, chaleur statique. Beurrez généreusement le plat au pinceau, coins et bords compris, avec le beurre mou. Répartissez les pruneaux au fond en une seule couche.",
        },
        {
          title: "Verser la pâte",
          text: "Fouettez la pâte une dernière fois : la farine s’est déposée au fond du saladier. Versez-la doucement sur les pruneaux, en la faisant couler le long d’une cuillère pour ne pas les déplacer.",
        },
        {
          title: "Saisir à 210 °C",
          text: "Enfournez à mi-hauteur pour 10 minutes à 210 °C. Les bords commencent à prendre et à se colorer, le centre est encore liquide.",
          timer: { minutes: 10, label: "Far à 210 °C" },
        },
        {
          title: "Finir à 180 °C",
          text: "Baissez à 180 °C sans ouvrir la porte et poursuivez 45 minutes. Le far est cuit quand il a bien gonflé, que la surface est brun doré avec des taches plus foncées et qu’il tremble encore légèrement au centre si vous secouez le plat, comme un flan. Une lame plantée au centre ressort humide mais sans pâte liquide.",
          timer: { minutes: 45, label: "Far à 180 °C" },
          tip: "Ne le laissez pas jusqu’à ce que le centre soit ferme : il continue de prendre en refroidissant, et un far ferme à la sortie du four sera sec une fois froid.",
        },
        {
          title: "Laisser prendre",
          text: "Sortez le plat et laissez refroidir au moins 1 heure. Le far retombe, c’est normal, et sa texture se resserre. Coupez-le en carrés au couteau, directement dans le plat. Servez-le tiède ou froid.",
          timer: { minutes: 60, label: "Refroidissement" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi la pâte repose",
      text: "Pendant le repos, les grains d’amidon et les protéines de la farine absorbent le lait, et les bulles d’air introduites au fouet remontent et s’échappent. La pâte est plus homogène et le far cuit plus régulièrement, avec une texture serrée plutôt que spongieuse.",
    },
    {
      title: "Ce qui fait prendre le far",
      text: "Deux choses en même temps : l’amidon de la farine gonfle et épaissit à partir de 60 °C environ, et les protéines des œufs coagulent entre 62 et 70 °C. Trop chauffées, ces protéines se resserrent et expulsent l’eau : le far devient caoutchouteux et rend du liquide. D’où le départ chaud, pour la croûte, puis une cuisson plus douce.",
    },
    {
      title: "Pourquoi il gonfle, puis retombe",
      text: "L’eau du lait se transforme en vapeur dans la pâte qui chauffe et la fait gonfler. En refroidissant, la vapeur se condense et le far s’affaisse, pendant que l’amidon gélifié se raffermit. C’est pour cela qu’on le coupe froid ou tiède, jamais brûlant.",
    },
  ],
  tips: [
    "Prenez du lait entier : avec du demi-écrémé, le far est plus sec et moins fondant.",
    "Un plat en céramique ou en terre cuite donne des bords plus fondants qu’un moule en métal fin, qui chauffe vite et dessèche les côtés.",
    "Le beurre demi-sel, dans la pâte et sur le plat, sale à peine la croûte : c’est ce petit contraste qui fait le goût du far.",
    "Pour des carrés nets, coupez le far froid avec un couteau trempé dans l’eau chaude et essuyé entre chaque coupe.",
  ],
  mistakes: [
    "Verser tout le lait d’un coup : la pâte se remplit de grumeaux. Pour rattraper, passez-la au tamis ou donnez quelques secondes de mixeur plongeant.",
    "Attendre que le centre soit ferme pour le sortir : il devient sec et caoutchouteux en refroidissant. Il doit trembler légèrement.",
    "Le sortir trop tôt : le centre reste liquide sous la croûte. S’il ondule franchement quand on secoue le plat, remettez-le 10 minutes à 180 °C.",
    "Le couper chaud : il s’effondre et coule. Une heure de patience, au minimum.",
    "Oublier les coins en beurrant le plat : le far y attache et se déchire au démoulage des carrés.",
  ],
  variations: [
    {
      title: "Far nature",
      text: "Sans pruneaux, avec la même pâte et la même cuisson. On le trouve aussi en Bretagne, simplement parfumé à la vanille : ajoutez les graines d’une gousse au lait.",
    },
    {
      title: "Aux raisins secs",
      text: "Remplacez les pruneaux par 150 g de raisins secs gonflés 20 minutes dans de l’eau chaude, ou dans le rhum, et bien égouttés. Ils se répartissent mieux dans la pâte.",
    },
    {
      title: "Aux pommes",
      text: "Remplacez les pruneaux par 3 pommes en quartiers, dorées 8 minutes à la poêle dans 20 g de beurre demi-sel. Ajoutez 5 minutes à la cuisson à 180 °C : les pommes rendent un peu de jus.",
    },
  ],
  storage:
    "3 jours au réfrigérateur, filmé ou dans son plat couvert. Sortez-le 30 minutes avant de le servir, ou tiédissez les parts 10 minutes au four à 150 °C. La pâte crue se garde 24 heures au réfrigérateur, pas plus.",
  pairing:
    "Un cidre brut ou un café. Il n’a besoin de rien d’autre, mais une cuillerée de crème fraîche épaisse sur une part tiède ne gâche rien.",
  faq: [
    {
      q: "Faut-il dénoyauter les pruneaux du far breton ?",
      a: "Non, ce n’est pas obligatoire : beaucoup de recettes bretonnes gardent les pruneaux entiers avec leur noyau. Mais si des enfants en mangent, prenez des pruneaux dénoyautés. Un noyau dans un dessert fondant passe facilement inaperçu, et le risque de s’étouffer ou de se casser une dent n’en vaut pas la peine.",
    },
    {
      q: "Peut-on faire un far breton sans rhum ?",
      a: "Oui, sans rien changer d’autre. Le rhum parfume, il ne joue aucun rôle dans la texture. Vous pouvez le remplacer par les graines d’une gousse de vanille ou par 1 cuillère à café d’extrait de vanille.",
    },
    {
      q: "L’alcool du rhum s’évapore-t-il à la cuisson du far ?",
      a: "Non, pas entièrement. Une partie reste dans le far après 55 minutes de four, surtout au cœur, qui chauffe moins. Pour des enfants, une femme enceinte ou quelqu’un qui ne boit pas d’alcool, faites-le sans rhum.",
    },
    {
      q: "À quelle température cuire un far breton ?",
      a: "210 °C pendant 10 minutes pour saisir les bords, puis 180 °C pendant 45 minutes, en chaleur statique. Dans un moule rond plus profond, prévoyez 5 à 10 minutes de plus à 180 °C.",
    },
    {
      q: "Pourquoi mon far breton est-il liquide au centre ?",
      a: "Parce qu’il n’a pas assez cuit, ou qu’il a été coupé trop chaud. À la sortie du four, il doit trembler légèrement mais pas onduler. S’il est encore liquide après refroidissement, remettez-le 10 à 15 minutes à 180 °C.",
    },
    {
      q: "Le far breton se mange-t-il chaud ou froid ?",
      a: "Les deux, mais jamais brûlant. Tiède, 1 heure après la sortie du four, il est fondant. Froid, le lendemain, il est plus ferme et plus dense, et beaucoup le préfèrent ainsi.",
    },
  ],
  nutrition: {
    calories: 480,
    protein: 12,
    fat: 14,
    saturatedFat: 8,
    carbs: 76,
    sugar: 43,
    fiber: 3,
    sodium: 270,
  },
  annotations: { hero: "brun foncé par endroits, c’est voulu", detail: "les pruneaux tombent au fond" },
  images: {
    heroAlt:
      "Un far breton entier dans son moule rond, la croûte brun doré et caramélisée, quelques pruneaux affleurant à la surface",
    detailAlt:
      "Une part de far breton sur une assiette blanche, la mie jaune pâle et dense, les pruneaux noirs au fond sous la croûte brune",
    credits: {
      hero: {
        photographer: "Arnaud 25",
        url: "https://commons.wikimedia.org/w/index.php?curid=120412895",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
      detail: {
        photographer: "paiprou",
        url: "https://www.flickr.com/photos/124233432@N05/14143415735",
        source: "Flickr",
        license: "CC BY-SA 2.0",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#C0732F",
    onAccent: "#1B1712",
    ink: "#7E4515",
    tint: "#FAF0E4",
    deep: "#1B0F07",
    focus: "50% 50%",
  },
});
