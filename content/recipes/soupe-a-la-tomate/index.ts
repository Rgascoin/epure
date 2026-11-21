import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "soupe-a-la-tomate",
  title: "Soupe à la tomate",
  seoTitle: "Soupe à la tomate maison, fraîches ou en conserve",
  tagline: "Avec les tomates de la saison.",
  description:
    "La soupe à la tomate maison pour 4 : 1,2 kg de tomates mûres (ou 800 g en conserve), un oignon fondu à l’huile d’olive, 20 minutes de mijotage, du basilic.",
  summary:
    "Pour 4 personnes (environ 1,2 l), faites fondre 150 g d’oignon et 2 gousses d’ail dans 3 cuillères à soupe d’huile d’olive, ajoutez 1,2 kg de tomates fraîches bien mûres, ou hors saison 800 g de tomates pelées entières en conserve, puis 30 à 40 cl d’eau. Laissez frémir 20 minutes, mixez, passez au tamis si vous voulez une soupe veloutée et finissez au basilic. Une pincée de sucre seulement si elle est acide. 55 minutes en tout.",
  intro: [
    "Une soupe de tomates cuites, mixée, servie chaude avec du basilic et un filet d’huile d’olive. Rien à voir avec le gaspacho, qui reste cru : ici la cuisson arrondit le fruit et l’oignon fondu lui donne du fond.",
    "Tout dépend des tomates. De juillet à septembre, prenez-les très mûres, lourdes, rouges jusqu’au cœur. Le reste de l’année, n’hésitez pas : une conserve de tomates pelées entières, cueillies à maturité, fait une bien meilleure soupe qu’une tomate de serre pâle en janvier.",
    "On goûte avant de sucrer. Une tomate mûre n’a besoin de rien, et une soupe sucrée par réflexe finit par rappeler le ketchup.",
  ],
  category: "Entrée",
  cuisine: "Française",
  keywords: [
    "soupe à la tomate",
    "soupe de tomates maison",
    "recette soupe à la tomate",
    "soupe tomate fraîche",
    "soupe tomate en conserve",
    "soupe de tomates au basilic",
    "velouté de tomates",
    "soupe tomate froide",
  ],
  diet: ["vegetarian", "vegan", "glutenFree"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 15, cook: 40 },
  difficulty: "Facile",
  cost: "€",
  season: ["Été", "Automne", "Toute l’année en conserve"],
  tags: ["ete", "automne"],
  equipment: [
    "faitout ou grande casserole de 3 l",
    "mixeur plongeant ou blender",
    "tamis ou passoire fine (facultatif)",
  ],
  ingredients: [
    {
      title: "La soupe",
      items: [
        { qty: 3, unit: "cas", name: "huile d’olive" },
        { qty: 150, unit: "g", name: "oignon jaune", note: "1 gros, émincé finement", step: 10 },
        { qty: 2, name: "gousse d’ail", plural: "gousses d’ail", note: "émincées", step: 1 },
        {
          qty: 1.2,
          unit: "kg",
          name: "tomate fraîche",
          plural: "tomates fraîches",
          note: "très mûres, de juillet à septembre ; hors saison, 800 g de tomates pelées entières en conserve, avec leur jus",
          step: 0.1,
        },
        { qty: 1, unit: "cac", name: "sel fin", note: "plus une pincée pour l’oignon" },
        { qty: 20, unit: "g", name: "basilic", note: "1 bouquet : les tiges cuisent, les feuilles finissent", step: 5 },
        { qty: 30, unit: "cl", name: "eau", note: "40 cl avec des tomates en conserve", step: 5 },
        { qty: 1, unit: "cac", name: "sucre en poudre", note: "seulement si la soupe est acide", fixed: true },
      ],
    },
    {
      title: "Pour servir",
      items: [
        { qty: 1, unit: "cas", name: "huile d’olive", note: "la plus fruitée que vous ayez" },
        { name: "poivre noir", note: "du moulin" },
      ],
    },
  ],
  method: [
    {
      title: "La soupe",
      steps: [
        {
          title: "Préparer les tomates",
          text: "Tomates fraîches : retirez le pédoncule et coupez-les en quartiers, sans les peler, la peau partira au tamis. Tomates en conserve : versez-les dans un saladier avec leur jus et écrasez-les à la main. Effeuillez le basilic, gardez les feuilles au frais sous un torchon humide et réservez les tiges.",
        },
        {
          title: "Faire fondre l’oignon",
          text: "Chauffez 3 cuillères à soupe d’huile d’olive à feu moyen-doux dans le faitout. Ajoutez l’oignon et une pincée de sel, et remuez de temps en temps pendant 10 minutes. Il doit devenir translucide et tendre, sans prendre de couleur. S’il commence à dorer sur les bords, baissez le feu.",
          timer: { minutes: 10, label: "Oignon fondu" },
          tip: "Une pincée de sel dès le départ fait sortir l’eau de l’oignon : il fond au lieu de griller.",
        },
        {
          title: "Ajouter l’ail",
          text: "Ajoutez l’ail et remuez sans vous éloigner, juste le temps qu’il sente bon. Il ne doit pas dorer : brun, il donnerait de l’amertume à toute la soupe.",
        },
        {
          title: "Faire compoter les tomates",
          text: "Versez les tomates, la cuillère à café de sel et les tiges de basilic. Montez à feu moyen et laissez cuire 10 minutes à découvert en remuant souvent. Les tomates fraîches s’effondrent et rendent leur jus ; c’est prêt quand on obtient une compote épaisse, sans morceaux fermes. En conserve, 5 minutes suffisent.",
          timer: { minutes: 10, label: "Tomates compotées" },
        },
        {
          title: "Mouiller et frémir",
          text: "Ajoutez l’eau, 30 cl avec des tomates fraîches, 40 cl avec la conserve. Portez à frémissement puis baissez le feu et laissez frémir 20 minutes, couvercle entrouvert. La surface doit à peine bouger. La soupe épaissit un peu et la couleur fonce.",
          timer: { minutes: 20, label: "Soupe qui frémit" },
        },
        {
          title: "Goûter avant de sucrer",
          text: "Retirez les tiges de basilic et goûtez une cuillerée. Si la soupe pique le bout de la langue, ajoutez la cuillère à café de sucre, remuez et regoûtez. Si elle est simplement ronde et fruitée, n’ajoutez rien.",
          tip: "Le sucre ne retire pas l’acidité, il la masque. Une cuillère à café suffit toujours ; au-delà, la soupe change de goût.",
        },
        {
          title: "Mixer",
          text: "Hors du feu, mixez au mixeur plongeant en tenant la tête bien au fond, jusqu’à ce que la soupe soit lisse et un peu brillante. Au blender, ne le remplissez qu’à moitié, retirez le bouchon central et couvrez-le d’un torchon plié : la vapeur doit pouvoir sortir.",
          tip: "Un blender plein de soupe bouillante, couvercle vissé, peut se déboucher sous la pression de la vapeur. Toujours à moitié, toujours entrouvert.",
        },
        {
          title: "Passer au tamis",
          text: "Pour une soupe veloutée, versez-la dans un tamis posé sur une casserole et poussez-la avec le dos d’une louche. Il reste dans le tamis une petite pâte de peaux et de pépins, à jeter. Avec une conserve ou un blender puissant, vous pouvez sauter cette étape.",
        },
        {
          title: "Servir",
          text: "Réchauffez doucement sans faire bouillir et rectifiez le sel. La soupe doit napper la cuillère sans être pâteuse : trop épaisse, détendez-la avec quelques cuillerées d’eau chaude. Servez avec les feuilles de basilic déchirées au dernier moment, un filet d’huile d’olive et un tour de poivre.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Le sucre masque l’acidité sans la retirer",
      text: "L’acidité d’une tomate vient surtout des acides citrique et malique, et elle baisse quand le fruit mûrit pendant que ses sucres augmentent. Une tomate peu mûre paraît donc plus acide. Le sucre ajouté ne neutralise aucun acide : il agit sur la perception, d’où l’intérêt d’en mettre très peu et seulement après avoir goûté.",
    },
    {
      title: "L’huile d’olive n’est pas là que pour le goût",
      text: "Le lycopène, le pigment rouge de la tomate, est soluble dans les graisses. La cuisson casse les parois des cellules et le libère, et la matière grasse aide l’organisme à l’absorber. Une soupe cuite avec de l’huile en apporte davantage qu’une tomate crue croquée seule.",
    },
    {
      title: "Fondre, ce n’est pas dorer",
      text: "À feu doux, l’oignon cuit dans sa propre eau, autour de 100 °C : il s’adoucit sans colorer. Les réactions de brunissement, qui demandent une surface sèche et une température bien plus haute, donneraient des notes grillées qui couvriraient le goût du fruit.",
    },
  ],
  tips: [
    "Hors saison, choisissez des tomates pelées entières plutôt que concassées ou en coulis : on les écrase soi-même et on voit ce que l’on achète.",
    "Pesez les tomates fraîches après avoir retiré les pédoncules et les parties abîmées : 1,2 kg net, c’est ce qui donne une soupe dense.",
    "Gardez les feuilles de basilic pour la fin. Les tiges, elles, ont autant de parfum et supportent très bien la cuisson.",
    "La soupe est encore meilleure le lendemain : les arômes se fondent pendant la nuit au réfrigérateur.",
    "Le sel s’ajuste à la toute fin, une fois la soupe à la bonne épaisseur : en réduisant, elle se concentre.",
  ],
  mistakes: [
    "Laisser dorer l’oignon ou l’ail : la soupe prend un goût de grillé, voire d’amer. Si l’ail a bruni, mieux vaut le retirer avant d’ajouter les tomates.",
    "Sucrer par habitude : avec des tomates mûres, le sucre rend la soupe plate et douceâtre. Goûtez toujours avant.",
    "Faire bouillir à gros bouillons : la soupe attache au fond et prend un goût de cuit. Un frémissement suffit.",
    "Mettre les feuilles de basilic en début de cuisson : elles noircissent et perdent leur parfum. Seules les tiges cuisent.",
    "Une soupe trop épaisse ou trop liquide : on la corrige à la fin, avec un peu d’eau chaude ou quelques minutes de réduction à découvert.",
  ],
  variations: [
    {
      title: "Froide, l’été",
      text: "Après le tamis, laissez refroidir puis placez au moins 3 heures au réfrigérateur. Ajoutez 2 cuillères à soupe d’huile d’olive en mixant une dernière fois et salez un peu plus : le froid atténue le goût. Elle reste une soupe cuite, plus ronde et plus douce qu’un gaspacho.",
    },
    {
      title: "Aux tomates rôties",
      text: "Coupez les tomates fraîches en deux, posez-les sur une plaque avec les gousses d’ail entières et 2 cuillères à soupe d’huile, et rôtissez 35 minutes à 200 °C. Elles remplacent l’étape de compotée ; le goût devient plus profond, presque confit.",
    },
    {
      title: "Plus crémeuse",
      text: "Ajoutez 10 cl de crème liquide après avoir mixé et réchauffez sans bouillir. La couleur tourne à l’orangé et l’acidité s’adoucit. La soupe n’est alors plus végétalienne.",
    },
  ],
  storage:
    "3 jours au réfrigérateur dans une boîte fermée, une fois refroidie. Elle se congèle très bien jusqu’à 3 mois, sans le basilic : décongelez-la une nuit au réfrigérateur et réchauffez-la doucement. Ne la recongelez pas.",
  pairing:
    "Des tartines de pain de campagne grillées et frottées d’ail, ou un croque-monsieur pour en faire un vrai repas. Un fromage de chèvre frais émietté dessus marche aussi très bien.",
  faq: [
    {
      q: "Faut-il éplucher les tomates pour faire une soupe ?",
      a: "Non. Si vous passez la soupe au tamis, les peaux restent dedans. Sans tamis, un blender puissant les réduit assez finement. Avec un petit mixeur plongeant, il vaut mieux les peler : incisez une croix à la base, plongez-les 30 secondes dans l’eau bouillante, puis dans l’eau froide, et la peau s’enlève toute seule.",
    },
    {
      q: "Tomates fraîches ou en conserve pour une soupe à la tomate ?",
      a: "Fraîches de juillet à septembre, quand elles sont très mûres : 1,2 kg pour 4. Le reste de l’année, prenez 800 g de tomates pelées entières en conserve, avec leur jus, et ajoutez 40 cl d’eau au lieu de 30. Elles ont été cueillies mûres et donnent une soupe plus franche que des tomates d’hiver.",
    },
    {
      q: "Pourquoi ma soupe à la tomate est-elle acide ?",
      a: "Parce que les tomates n’étaient pas assez mûres, ou que la conserve est acidulée : on y ajoute souvent de l’acide citrique. Ajoutez 1 cuillère à café de sucre, pas plus, et goûtez. Un peu plus d’huile d’olive ou une cuillerée de crème arrondit aussi le goût.",
    },
    {
      q: "Peut-on congeler la soupe à la tomate ?",
      a: "Oui, jusqu’à 3 mois, dans une boîte en laissant 2 cm de vide pour l’expansion. Congelez-la sans les feuilles de basilic, que vous ajouterez fraîches au service. Décongelez une nuit au réfrigérateur et ne la recongelez pas.",
    },
    {
      q: "Peut-on manger la soupe à la tomate froide ?",
      a: "Oui, l’été c’est même très bon. Laissez-la au moins 3 heures au réfrigérateur, ajoutez un filet d’huile d’olive en plus et salez un peu davantage, car le froid atténue les saveurs.",
    },
    {
      q: "Combien de tomates pour 1 litre de soupe ?",
      a: "Environ 1 kg de tomates fraîches, avec 25 cl d’eau, ou 650 g de tomates en conserve avec 35 cl d’eau. Les tomates fraîches rendent beaucoup de jus en cuisant ; la conserve en a déjà, mais elle est plus concentrée.",
    },
  ],
  nutrition: {
    calories: 140,
    protein: 3,
    fat: 9,
    saturatedFat: 1,
    carbs: 12,
    sugar: 9,
    fiber: 4,
    sodium: 520,
  },
  annotations: { hero: "le basilic au tout dernier moment", detail: "elle doit napper la louche" },
  images: {
    heroAlt:
      "Soupe à la tomate lisse dans une tasse blanche, trois feuilles de basilic et du poivre concassé, sur un torchon à carreaux",
    detailAlt: "Une louche verse la soupe à la tomate, épaisse et rouge, dans un bol blanc entouré de pain grillé",
    credits: {
      hero: { photographer: "Sacha Moreau", url: "https://www.pexels.com/photo/a-creamy-tomato-soup-17302314/" },
      detail: {
        photographer: "Kübra Doğu",
        url: "https://www.pexels.com/photo/person-pouring-red-soup-in-a-bowl-8755958/",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#C44A24",
    onAccent: "#ffffff",
    ink: "#9E3618",
    tint: "#FCEEE7",
    deep: "#1C0E08",
    focus: "52% 56%",
  },
});
