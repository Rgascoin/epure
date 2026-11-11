import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "tarte-au-citron-meringuee",
  title: "Tarte au citron meringuée",
  seoTitle: "Tarte au citron meringuée maison, meringue suisse",
  tagline: "Assez acide pour tenir tête au sucre.",
  description:
    "Tarte au citron meringuée maison : pâte sablée cuite à blanc, crème au citron qui bout une minute et meringue suisse chauffée à 70 °C, dorée au chalumeau.",
  summary:
    "Pour une tarte au citron meringuée de 8 parts, cuisez à blanc une pâte sablée dans un moule de 24 cm, 30 minutes à 170 °C. Garnissez-la d’une crème cuite (150 ml de jus de citron, 140 g de sucre, 2 œufs, 3 jaunes, 80 g de beurre) et laissez prendre 2 heures au frais. Couvrez d’une meringue suisse (3 blancs et 170 g de sucre chauffés à 70 °C, puis fouettés) et dorez-la au chalumeau.",
  intro: [
    "La tarte au citron meringuée tient sur un équilibre : une pâte sablée qui croque, une crème au citron franchement acide, et une meringue sucrée, à peine brûlée, qui adoucit le tout. Si l’un des trois flanche, on ne sent plus que le sucre, ou plus que l’acidité.",
    "On a choisi une meringue suisse : les blancs et le sucre chauffent ensemble au bain-marie jusqu’à 70 °C, puis on les fouette. Elle est aussi stable qu’une meringue italienne, sans sirop brûlant à verser en filet, et on contrôle la température des blancs au thermomètre.",
    "C’est une recette en trois temps, avec de longues pauses : 1 heure de repos pour la pâte, 2 heures de prise pour la crème. Le plus délicat, c’est la cuisson de la crème ; on vous dit exactement quand l’arrêter.",
  ],
  category: "Dessert",
  cuisine: "Française",
  keywords: [
    "tarte au citron meringuée",
    "recette tarte au citron meringuée",
    "tarte au citron meringuée maison",
    "tarte citron meringuée pâte sablée",
    "crème au citron pour tarte",
    "meringue suisse",
    "meringue italienne ou suisse",
    "pourquoi ma meringue pleure",
  ],
  diet: ["vegetarian"],
  servings: 8,
  servingsLabel: { one: "part", other: "parts" },
  times: { prep: 60, cook: 45, rest: 195 },
  difficulty: "Exigeant",
  cost: "€",
  season: ["Toute l’année"],
  equipment: [
    "moule à tarte de 24 cm, idéalement à fond amovible",
    "rouleau à pâtisserie et papier sulfurisé",
    "billes de cuisson ou haricots secs",
    "casserole à fond épais et fouet",
    "batteur électrique",
    "thermomètre de cuisson",
    "chalumeau de cuisine, ou le gril du four",
  ],
  ingredients: [
    {
      title: "Pâte sablée",
      items: [
        { qty: 200, unit: "g", name: "farine T55", step: 10 },
        { qty: 75, unit: "g", name: "sucre glace", step: 5 },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 110, unit: "g", name: "beurre doux", note: "très froid, en dés", step: 5 },
        { qty: 1, name: "œuf", plural: "œufs", note: "battu", step: 1 },
        { qty: 10, unit: "g", name: "beurre mou", note: "pour le moule", step: 5, fixed: true },
      ],
    },
    {
      title: "Crème au citron",
      items: [
        { qty: 140, unit: "g", name: "sucre en poudre", step: 10 },
        {
          qty: 4,
          name: "citron jaune non traité",
          plural: "citrons jaunes non traités",
          note: "le zeste de 2, le jus des 4 (150 ml)",
          step: 1,
        },
        { qty: 15, unit: "g", name: "fécule de maïs", step: 5 },
        { qty: 2, name: "œuf", plural: "œufs", step: 1 },
        { qty: 3, name: "jaune d’œuf", plural: "jaunes d’œufs", note: "gardez les blancs pour la meringue", step: 1 },
        { qty: 80, unit: "g", name: "beurre doux", note: "en dés, à température ambiante", step: 5 },
      ],
    },
    {
      title: "Meringue suisse",
      items: [
        { qty: 3, name: "blanc d’œuf", plural: "blancs d’œufs", note: "ceux des jaunes, environ 100 g", step: 1 },
        { qty: 170, unit: "g", name: "sucre en poudre", step: 10 },
      ],
    },
  ],
  method: [
    {
      title: "La pâte sablée",
      steps: [
        {
          title: "Sabler la pâte",
          text: "Dans un saladier, mélangez la farine, le sucre glace et le sel. Ajoutez le beurre froid et frottez le tout entre vos doigts jusqu’à obtenir un sable fin, sans morceaux de beurre visibles.",
        },
        {
          title: "Fraiser et reposer",
          text: "Ajoutez l’œuf battu et rassemblez vite la pâte. Écrasez-la deux fois sous la paume, par petits morceaux, pour bien mélanger sans la pétrir. Aplatissez-la en disque de 2 cm, filmez et laissez-la 1 heure au réfrigérateur.",
          timer: { minutes: 60, label: "Repos de la pâte" },
        },
        {
          title: "Foncer le moule",
          text: "Étalez la pâte sur 3 mm entre deux feuilles de papier sulfurisé et foncez le moule beurré, en appuyant bien dans les angles. Coupez l’excédent, piquez le fond à la fourchette et mettez le moule 15 minutes au congélateur. Préchauffez le four à 170 °C, chaleur tournante.",
          timer: { minutes: 15, label: "Pâte au congélateur" },
        },
        {
          title: "Cuire à blanc",
          text: "Couvrez la pâte de papier sulfurisé, remplissez de billes de cuisson et enfournez 20 minutes. Retirez papier et billes, puis prolongez 8 à 10 minutes, jusqu’à ce que le fond soit sec et doré de façon uniforme. Laissez refroidir complètement sur une grille.",
          timer: { minutes: 30, label: "Cuisson à blanc" },
          tip: "Le fond doit être bien doré, pas seulement blond : une fois garni de crème, il ne cuira plus.",
        },
      ],
    },
    {
      title: "La crème au citron",
      steps: [
        {
          title: "Zester et presser",
          text: "Mettez le sucre dans une casserole et râpez finement par-dessus le zeste de 2 citrons, sans le blanc amer. Frottez sucre et zeste du bout des doigts pour en libérer le parfum. Pressez les 4 citrons : il vous faut 150 ml de jus.",
        },
        {
          title: "Cuire la crème",
          text: "Ajoutez la fécule au sucre, puis les œufs et les jaunes, et fouettez jusqu’à ce que ce soit lisse. Versez le jus. Chauffez à feu moyen-doux sans cesser de fouetter, 6 à 8 minutes : la crème épaissit d’un coup. Laissez-la alors bouillonner 1 minute en fouettant toujours, puis retirez du feu.",
          timer: { minutes: 9, label: "Cuisson de la crème" },
          tip: "Ce petit bouillon est indispensable : il finit de gonfler l’amidon et détruit une enzyme du jaune d’œuf qui, sinon, refluidifie la crème en quelques heures.",
        },
        {
          title: "Incorporer le beurre",
          text: "Hors du feu, ajoutez le beurre en dés et fouettez jusqu’à ce qu’il ait fondu et que la crème soit lisse et brillante. Pour une texture encore plus fine, donnez quelques secondes de mixeur plongeant.",
        },
        {
          title: "Garnir et laisser prendre",
          text: "Versez la crème encore chaude sur le fond de tarte refroidi et lissez-la à la spatule. Laissez tiédir, puis placez la tarte au moins 2 heures au réfrigérateur : la crème doit être prise et froide avant de recevoir la meringue.",
          timer: { minutes: 120, label: "Prise de la crème" },
        },
      ],
    },
    {
      title: "La meringue suisse",
      steps: [
        {
          title: "Chauffer les blancs",
          text: "Dans un bol résistant à la chaleur, mélangez les blancs et le sucre. Posez le bol sur une casserole d’eau frémissante, sans qu’il touche l’eau, et fouettez sans arrêt 5 à 8 minutes, jusqu’à 70 °C au thermomètre. Le sucre doit être fondu : un peu de mélange, tiédi sur une cuillère, ne crisse plus entre les doigts.",
          timer: { minutes: 7, label: "Blancs au bain-marie" },
        },
        {
          title: "Fouetter la meringue",
          text: "Retirez le bol du bain-marie et fouettez au batteur électrique, à vitesse maximale, 8 à 10 minutes : la meringue doit être épaisse et très brillante, former un bec ferme au bout des fouets, et le bol ne doit plus être que tiède.",
          timer: { minutes: 9, label: "Fouettage de la meringue" },
        },
        {
          title: "Meringuer et dorer",
          text: "Étalez la meringue sur la crème froide, en la soudant bien au bord de la pâte, puis soulevez-la par petites touches pour former des pointes. Dorez-les au chalumeau, flamme à 5 cm. Sans chalumeau, passez la tarte 1 à 2 minutes sous le gril bien chaud, porte ouverte, sans la quitter des yeux.",
          timer: { minutes: 2, label: "Coloration sous le gril" },
          tip: "Collez bien la meringue au bord de la pâte, sans laisser de jour : sinon elle se rétracte vers le centre et laisse voir la crème.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi la crème doit bouillir",
      text: "La fécule de maïs épaissit en gonflant d’eau, et ce gonflement ne s’achève que près de l’ébullition. Le jaune d’œuf contient aussi une enzyme, l’amylase, qui découpe l’amidon et refluidifie la crème au frais si la chaleur ne l’a pas détruite. Les œufs, eux, ne tournent pas : l’amidon les protège de la coagulation en grumeaux.",
    },
    {
      title: "Meringue suisse ou italienne",
      text: "Ce sont deux meringues cuites : le sucre y est entièrement dissous et les protéines du blanc en partie coagulées, ce qui donne une mousse dense et stable, qui ne retombe pas comme une meringue crue. L’italienne se fait en versant un sirop à 118 °C sur des blancs montés. La suisse chauffe blancs et sucre ensemble : plus simple à la maison, et tout aussi stable.",
    },
    {
      title: "Dorée dehors, moelleuse dedans",
      text: "La flamme du chalumeau porte la surface de la meringue bien au-delà de 150 °C en quelques secondes : le sucre caramélise et les protéines brunissent (réaction de Maillard). La chaleur n’a pas le temps de pénétrer, et l’intérieur reste souple. Sous le gril, elle descend plus profond, d’où les 2 minutes au maximum.",
    },
  ],
  tips: [
    "Faites la pâte la veille si vous voulez : elle se garde 2 jours au réfrigérateur, bien filmée, et le jour J il ne reste que la crème et la meringue.",
    "Roulez les citrons sous la paume sur le plan de travail avant de les presser : ils rendent leur jus plus facilement.",
    "Passez un essuie-tout imbibé de vinaigre dans le bol et sur les fouets avant la meringue. La moindre trace de gras ou de jaune l’empêche de monter.",
    "Pour des parts nettes, coupez avec un couteau trempé dans l’eau chaude et essuyé entre chaque part.",
  ],
  mistakes: [
    "Garnir un fond pâle ou encore tiède. Il ramollit sous la crème et devient pâteux.",
    "Retirer la crème du feu dès qu’elle épaissit. Sans sa minute d’ébullition, elle redevient liquide au réfrigérateur.",
    "Arrêter de fouetter la meringue quand elle est encore chaude. Elle reste coulante et s’affaisse sur la tarte.",
    "Poser la meringue sur une crème qui n’a pas pris. Elle glisse, et les deux couches se mélangent à la découpe.",
    "S’éloigner du four pendant que la meringue dore sous le gril. Elle passe du doré au noir en quelques secondes.",
  ],
  variations: [
    {
      title: "Avec une meringue italienne",
      text: "Cuisez les 170 g de sucre avec 50 ml d’eau jusqu’à 118 °C, et versez ce sirop en filet sur les 3 blancs montés en neige souple, batteur en marche. Fouettez jusqu’à refroidissement, une dizaine de minutes. Elle est un peu plus légère, mais demande un thermomètre et de l’assurance.",
    },
    {
      title: "Tarte au citron sans meringue",
      text: "Arrêtez-vous après la crème et décorez de quelques zestes. Sans la meringue pour l’adoucir, la tarte est plus acide : vous pouvez monter le sucre de la crème à 160 g.",
    },
    {
      title: "En tartelettes",
      text: "La même pâte garnit 8 moules à tartelettes de 9 cm. Cuisez-les à blanc 15 minutes avec les billes, puis 5 à 8 minutes sans, et partagez crème et meringue de la même façon.",
    },
  ],
  storage:
    "À cause de la meringue, gardez la tarte au réfrigérateur, sans film qui collerait dessus, et mangez-la dans les 24 heures. Sortez-la 15 minutes avant de servir : moins glacée, la crème est plus parfumée.",
  pairing: "Un jurançon moelleux, dont l’acidité tient tête au citron, ou un thé noir léger.",
  faq: [
    {
      q: "Meringue italienne ou suisse pour une tarte au citron ?",
      a: "Les deux tiennent très bien. À la maison, on préfère la suisse : blancs et sucre chauffent ensemble au bain-marie jusqu’à 70 °C, sans sirop brûlant à verser en filet. L’italienne, faite avec un sirop à 118 °C, est un peu plus légère, mais demande plus d’assurance.",
    },
    {
      q: "La tarte au citron meringuée convient-elle aux femmes enceintes ?",
      a: "Pas sans précaution. La crème bout, elle ne pose pas de problème. La meringue n’est que chauffée à 70 °C : par prudence, elle est déconseillée aux femmes enceintes, aux jeunes enfants, aux personnes âgées et immunodéprimées. Pour eux, faites-la avec des blancs d’œufs pasteurisés, vendus en brique au rayon frais. Dans tous les cas, mangez la tarte dans les 24 heures.",
    },
    {
      q: "Pourquoi ma crème au citron est-elle liquide ?",
      a: "Le plus souvent, elle n’a pas assez cuit. Elle doit épaissir, puis bouillonner 1 minute sans cesser de fouetter : sans ce bouillon, l’amidon ne gonfle pas complètement et une enzyme du jaune d’œuf la refluidifie au frais. Comptez aussi 2 heures de prise au réfrigérateur.",
    },
    {
      q: "Pourquoi ma meringue pleure-t-elle ?",
      a: "Les perles dorées en surface viennent d’un sucre mal dissous ou d’une coloration trop longue. Le liquide sous la meringue vient de l’humidité de la crème et du réfrigérateur. Vérifiez que le sucre a fondu à 70 °C, dorez vite, et servez la tarte le jour même.",
    },
    {
      q: "Peut-on faire une tarte au citron meringuée la veille ?",
      a: "En partie. Le fond peut être cuit la veille et garni de crème le soir même. La meringue se fait le jour J, quelques heures avant de servir : au réfrigérateur, elle ramollit et finit par rendre de l’eau.",
    },
    {
      q: "Comment dorer la meringue sans chalumeau ?",
      a: "Sous le gril du four, préchauffé au maximum, la tarte placée en haut : 1 à 2 minutes suffisent, porte ouverte et sans s’éloigner. La meringue chauffe un peu plus en profondeur qu’au chalumeau, mais le résultat est très proche.",
    },
    {
      q: "Peut-on congeler une tarte au citron meringuée ?",
      a: "Non, pas avec sa meringue, qui devient spongieuse et rend de l’eau en décongelant. Vous pouvez en revanche congeler la pâte crue, foncée dans son moule et bien emballée, jusqu’à 2 mois, et la cuire à blanc sans la décongeler, en ajoutant 5 minutes.",
    },
  ],
  nutrition: {
    calories: 490,
    protein: 7,
    fat: 21,
    saturatedFat: 12,
    carbs: 66,
    sugar: 48,
    fiber: 1,
    sodium: 80,
  },
  annotations: {
    hero: "la crème bout une minute",
    detail: "un fond doré, pas juste blond",
  },
  images: {
    heroAlt: "Tarte au citron meringuée entamée, meringue en pointes dorées au chalumeau, crème au citron visible à la coupe",
    detailAlt: "Part de tarte au citron meringuée de profil : pâte sablée, crème au citron jaune et épaisse meringue dorée",
    credits: {
      hero: {
        photographer: "Unaizat Abdulgamidova",
        url: "https://www.pexels.com/photo/golden-brown-meringue-topped-lemon-pie-slice-37174478/",
      },
      detail: {
        photographer: "Valeria Boltneva",
        url: "https://www.pexels.com/photo/close-up-of-cake-with-cream-17283922/",
      },
    },
  },
  datePublished: "2026-11-06",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#EDC33A",
    onAccent: "#1b1712",
    ink: "#7A5900",
    tint: "#FBF5E0",
    deep: "#17130A",
    focus: "50% 44%",
  },
});
