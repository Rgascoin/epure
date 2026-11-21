import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "profiteroles",
  title: "Profiteroles",
  seoTitle: "Profiteroles maison, glace vanille et chocolat chaud",
  tagline: "La glace au tout dernier moment.",
  description:
    "Profiteroles maison : 24 choux croustillants garnis de glace vanille au dernier moment, nappés d’une sauce chaude au chocolat noir. Pour 6, en 2 heures.",
  summary:
    "Pour 6 personnes, faites une pâte à choux avec 12,5 cl d’eau, 12,5 cl de lait, 100 g de beurre, 150 g de farine et 4 à 5 œufs, pochez 24 boules et cuisez-les 25 à 30 minutes à 180 °C, porte fermée. Une fois les choux froids, garnissez-les de glace à la vanille et nappez-les d’une sauce faite de 200 g de chocolat noir et 25 cl de crème. Comptez 1 h 55, dont 40 minutes de travail.",
  intro: [
    "Des choux légers et secs, une boule de glace à la vanille dans chacun, et une sauce au chocolat chaude versée à table. Tout le plaisir des profiteroles tient dans ce face-à-face entre le froid de la glace et la chaleur du chocolat.",
    "La pâte à choux a mauvaise réputation, à tort. Elle demande deux attentions : bien dessécher la pâte dans la casserole, puis ajouter les œufs petit à petit, jusqu’à ce qu’elle forme un V sur la spatule. Ensuite, le four fait le travail, à condition de ne pas l’ouvrir.",
    "Les choux peuvent se faire la veille, et même se congeler. Le montage, lui, attend le dernier moment : sinon la glace fond et les choux ramollissent.",
  ],
  category: "Dessert",
  cuisine: "Française",
  diet: ["vegetarian"],
  keywords: [
    "profiteroles",
    "recette profiteroles",
    "profiteroles maison",
    "profiteroles glace vanille",
    "sauce chocolat pour profiteroles",
    "pâte à choux",
    "pâte à choux inratable",
    "profiteroles au chocolat",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 40, cook: 45, rest: 30 },
  difficulty: "Intermédiaire",
  cost: "€€",
  season: ["Toute l’année"],
  tags: [],
  equipment: [
    "casserole moyenne à fond épais",
    "spatule en bois ou maryse",
    "poche à douille avec douille lisse de 12 mm",
    "2 plaques de cuisson et papier cuisson",
    "grille à pâtisserie",
    "cuillère à glace de 4 cm",
    "couteau-scie",
  ],
  ingredients: [
    {
      title: "La pâte à choux",
      items: [
        { qty: 12.5, unit: "cl", name: "eau", step: 2.5 },
        { qty: 12.5, unit: "cl", name: "lait entier", step: 2.5 },
        { qty: 100, unit: "g", name: "beurre", note: "doux, en petits dés", step: 10 },
        { qty: 0.5, unit: "cac", name: "sel fin", step: 0.5 },
        { qty: 150, unit: "g", name: "farine", note: "T45 ou T55, tamisée", step: 10 },
        { qty: 5, name: "œuf", plural: "œufs", note: "battus, 4 à 5 selon la pâte", step: 1 },
      ],
    },
    {
      title: "La garniture et la sauce",
      items: [
        { qty: 75, unit: "cl", name: "glace à la vanille", step: 5 },
        { qty: 200, unit: "g", name: "chocolat noir", note: "60 à 70 % de cacao", step: 10 },
        { qty: 25, unit: "cl", name: "crème liquide entière", step: 5 },
        { qty: 40, unit: "g", name: "amandes effilées", note: "fruit à coque", step: 5, optional: true },
      ],
    },
  ],
  method: [
    {
      title: "Les choux",
      steps: [
        {
          title: "Préchauffer et préparer",
          text: "Préchauffez le four à 180 °C, chaleur tournante. Tamisez la farine, battez les œufs à la fourchette dans un bol et tapissez deux plaques de papier cuisson.",
        },
        {
          title: "Faire bouillir le liquide",
          text: "Dans la casserole, mettez l’eau, le lait, le beurre en dés et le sel. Chauffez à feu moyen : le beurre doit être entièrement fondu au moment où le liquide se met à bouillonner franchement.",
          tip: "Des dés de beurre trop gros fondent trop tard, et pendant ce temps le liquide s’évapore. La pâte manque alors d’eau, donc de vapeur pour gonfler.",
        },
        {
          title: "Verser la farine d’un coup",
          text: "Retirez du feu, versez toute la farine d’un coup et mélangez vivement à la spatule, jusqu’à obtenir une boule lisse qui se détache des parois.",
        },
        {
          title: "Dessécher la pâte",
          text: "Remettez sur feu moyen et remuez 2 à 3 minutes en écrasant la pâte contre le fond. Elle devient brillante, un peu grasse, et une fine pellicule se forme au fond de la casserole.",
          timer: { minutes: 3, label: "Dessécher la pâte" },
        },
        {
          title: "Ajouter les œufs",
          text: "Mettez la pâte dans un saladier et remuez-la 2 minutes pour la tiédir. Ajoutez les œufs battus en quatre ou cinq fois, en mélangeant énergiquement jusqu’à ce que la pâte redevienne lisse avant chaque ajout. Arrêtez-vous dès que la pâte, soulevée à la spatule, retombe en formant un V épais et souple. Il peut rester un peu d’œuf.",
          timer: { minutes: 2, label: "Tiédir la pâte" },
          tip: "Fiez-vous au V plutôt qu’au nombre d’œufs. Trop ferme, la pâte gonfle mal et craquelle ; trop liquide, elle s’étale à la cuisson.",
        },
        {
          title: "Pocher les choux",
          text: "Remplissez la poche à douille. Tenez-la bien verticale, à 1 cm de la plaque, et pochez 24 boules de 3,5 cm, espacées de 4 cm. Badigeonnez-les avec le reste d’œuf battu et aplatissez les pointes avec le dos d’une fourchette mouillée.",
        },
        {
          title: "Cuire sans ouvrir",
          text: "Enfournez les deux plaques pour 25 à 30 minutes sans ouvrir la porte. Les choux gonflent pendant le premier quart d’heure, puis dorent. Ils sont cuits quand ils sont brun doré jusque dans les fissures et légers dans la main.",
          timer: { minutes: 28, label: "Cuisson des choux" },
          tip: "Ouvrir la porte avant la fin fait chuter la vapeur et retomber les choux, définitivement. Allumez plutôt la lumière du four.",
        },
        {
          title: "Sécher puis refroidir",
          text: "Éteignez le four, coincez le manche d’une cuillère en bois dans la porte pour l’entrouvrir et laissez sécher les choux 10 minutes. Faites-les ensuite refroidir complètement sur une grille, 30 minutes, soit 40 minutes en tout.",
          timer: { minutes: 40, label: "Sécher et refroidir" },
        },
      ],
    },
    {
      title: "La sauce et le montage",
      steps: [
        {
          title: "Préparer les boules de glace",
          text: "Pendant que les choux refroidissent, façonnez 24 petites boules de glace avec la cuillère à glace. Posez-les sur une assiette froide tapissée de papier cuisson et remettez-les au congélateur jusqu’au service.",
        },
        {
          title: "Faire la sauce chocolat",
          text: "Hachez le chocolat et mettez-le dans un bol. Portez la crème à frémissement, versez-la sur le chocolat et laissez-le fondre quelques instants sans toucher. Mélangez à la spatule en partant du centre jusqu’à obtenir une sauce lisse et brillante. Gardez-la chaude au bain-marie, sans la faire bouillir.",
        },
        {
          title: "Griller les amandes",
          text: "Si vous en mettez, faites dorer les amandes 3 à 4 minutes dans une poêle sèche à feu moyen, en remuant, jusqu’à ce qu’elles soient blondes et sentent le grillé.",
          timer: { minutes: 4, label: "Griller les amandes" },
        },
        {
          title: "Garnir au dernier moment",
          text: "Juste avant de servir, coupez les choux aux deux tiers de leur hauteur avec le couteau-scie. Glissez une boule de glace sur chaque base et reposez le chapeau. Disposez 4 choux par assiette, nappez de sauce chaude à table et parsemez d’amandes.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi les choux gonflent",
      text: "La pâte contient beaucoup d’eau. Au four, cette eau se change en vapeur et pousse la pâte de l’intérieur, que les protéines de l’œuf et l’amidon cuit rendent souple et élastique. En séchant, la paroi se fige autour d’une cavité : le chou est creux, prêt à garnir.",
    },
    {
      title: "Le rôle du dessèchement",
      text: "Dans la casserole, l’amidon de la farine absorbe le liquide chaud et gonfle. Les minutes de dessèchement chassent l’eau en trop. Une pâte plus sèche absorbe davantage d’œufs, et ce sont eux qui donnent aux choux leur structure et leur volume.",
    },
    {
      title: "Une sauce qui reste coulante",
      text: "La crème chaude fait fondre le beurre de cacao, et le mélange en partant du centre lie la matière grasse du chocolat à l’eau de la crème. Avec 25 cl de crème pour 200 g de chocolat, la sauce coule à chaud et épaissit au contact de la glace sans durcir.",
    },
  ],
  tips: [
    "Formez les boules de glace à l’avance et gardez-les au congélateur : le montage prend 5 minutes et la glace ne fond pas dans les choux.",
    "Garnissez des choux complètement froids. Encore tièdes, ils font fondre la glace et ramollissent.",
    "Un chou qui cède sous le doigt à la sortie du four retombera en refroidissant : laissez la plaque 5 minutes de plus.",
    "S’il reste de la pâte, pochez de petites boules de 2 cm, parsemez-les de sucre en grains et cuisez-les 18 à 20 minutes : ce sont des chouquettes.",
  ],
  mistakes: [
    "Ouvrir le four pendant la cuisson : les choux retombent et ne remontent plus. Surveillez à travers la vitre.",
    "Verser tous les œufs d’un coup : la pâte devient trop liquide et les choux s’étalent. Ajoutez-les en plusieurs fois et arrêtez-vous au V.",
    "Sortir les choux encore pâles : ils ramollissent en refroidissant et s’affaissent. Ils doivent être brun doré, même dans les fissures.",
    "Faire bouillir la sauce chocolat : elle risque de graisser et de devenir granuleuse. Réchauffez-la doucement au bain-marie.",
    "Garnir les choux trop tôt : la glace fond et la pâte se détrempe. Le montage se fait au moment de servir.",
  ],
  variations: [
    {
      title: "Autre parfum de glace",
      text: "Gardez 75 cl de glace, mais prenez-la au café, à la pistache ou au caramel. Avec le caramel, un chocolat à 70 % équilibre mieux le sucre.",
    },
    {
      title: "À la chantilly",
      text: "Remplacez la glace par 40 cl de crème liquide entière très froide, fouettée en chantilly avec 30 g de sucre glace et les grains d’une demi-gousse de vanille. Garnissez les choux à la poche, et servez la sauce tiède plutôt que chaude.",
    },
    {
      title: "Sauce plus douce",
      text: "Remplacez 50 g de chocolat noir par 50 g de chocolat au lait, sans changer la quantité de crème. La sauce est plus sucrée et plus claire.",
    },
  ],
  storage:
    "Les choux vides se gardent 2 jours dans une boîte en métal fermée, à température ambiante, ou 1 mois au congélateur dans un sac fermé. Repassez-les 5 minutes au four à 160 °C, 8 à 10 minutes s’ils sortent du congélateur, et laissez-les refroidir avant de les garnir. La sauce se garde 3 jours au réfrigérateur et se réchauffe au bain-marie. Une fois garnies, les profiteroles se mangent tout de suite.",
  pairing:
    "Un café serré à côté. Pour un repas de fête, un vin doux naturel comme un maury ou un banyuls tient tête au chocolat.",
  easy: {
    shortcut: "choux nature prêts à garnir",
    note: "On en trouve en sachet au rayon pâtisserie, et parfois chez le boulanger. On perd le goût de beurre et le croustillant d’un chou du jour, on gagne plus d’une heure. Prenez-les nature, sans sucre ni garniture, et repassez-les au four pour les raffermir.",
    times: { prep: 15, cook: 10, rest: 10 },
    ingredients: [
      {
        title: "La garniture et la sauce",
        items: [
          { qty: 24, name: "chou nature", plural: "choux nature", note: "de 3 à 4 cm", step: 1 },
          { qty: 75, unit: "cl", name: "glace à la vanille", step: 5 },
          { qty: 200, unit: "g", name: "chocolat noir", note: "60 à 70 % de cacao", step: 10 },
          { qty: 25, unit: "cl", name: "crème liquide entière", step: 5 },
          { qty: 40, unit: "g", name: "amandes effilées", note: "fruit à coque", step: 5, optional: true },
        ],
      },
    ],
    method: [
      {
        title: "Les profiteroles",
        steps: [
          {
            title: "Raffermir les choux",
            text: "Préchauffez le four à 160 °C. Enfournez les choux 5 minutes, puis laissez-les refroidir 10 minutes sur une grille, soit 15 minutes : ils doivent être fermes et secs sous le doigt.",
            timer: { minutes: 15, label: "Choux au four et à refroidir" },
          },
          {
            title: "Préparer les boules de glace",
            text: "Pendant ce temps, façonnez 24 petites boules de glace, posez-les sur une assiette froide et gardez-les au congélateur jusqu’au service.",
          },
          {
            title: "Faire la sauce chocolat",
            text: "Versez la crème frémissante sur le chocolat haché, laissez-le fondre quelques instants, puis mélangez en partant du centre jusqu’à ce que la sauce soit lisse. Gardez-la chaude au bain-marie.",
          },
          {
            title: "Griller les amandes",
            text: "Si vous en mettez, faites-les dorer 3 à 4 minutes dans une poêle sèche, en remuant.",
            timer: { minutes: 4, label: "Griller les amandes" },
          },
          {
            title: "Garnir et servir",
            text: "Coupez les choux aux deux tiers, glissez une boule de glace dans chacun et reposez le chapeau. Servez 4 choux par personne, nappés de sauce chaude et parsemés d’amandes.",
          },
        ],
      },
    ],
  },
  faq: [
    {
      q: "Pourquoi mes choux retombent-ils à la sortie du four ?",
      a: "Parce qu’ils ne sont pas assez cuits, ou que la porte a été ouverte pendant la cuisson. La croûte doit avoir séché avant que la vapeur ne disparaisse. Cuisez-les jusqu’à ce qu’ils soient brun doré jusque dans les fissures, puis laissez-les sécher 10 minutes dans le four éteint, porte entrouverte.",
    },
    {
      q: "Comment savoir si la pâte à choux a assez d’œufs ?",
      a: "Quand elle forme un V. Soulevez-la avec la spatule : elle doit retomber lentement en formant une pointe épaisse, et un sillon tracé du doigt doit se refermer doucement. Trop ferme, ajoutez un peu d’œuf battu. Trop liquide, on ne peut plus la rattraper, d’où l’intérêt d’ajouter les œufs en plusieurs fois.",
    },
    {
      q: "Peut-on préparer les choux à l’avance ?",
      a: "Oui. Vides, ils se gardent 2 jours dans une boîte en métal fermée, ou 1 mois au congélateur. Repassez-les 5 minutes au four à 160 °C, 8 à 10 minutes s’ils sont congelés, et laissez-les refroidir avant de les garnir.",
    },
    {
      q: "La sauce chocolat des profiteroles se sert-elle chaude ?",
      a: "Oui, chaude, c’est tout l’intérêt face à la glace. Gardez-la au bain-marie, ou réchauffez-la par tranches de 20 secondes au micro-ondes en remuant entre chaque, sans jamais la faire bouillir.",
    },
    {
      q: "Les profiteroles contiennent-elles des fruits à coque ?",
      a: "Non, pas dans la recette de base. Les amandes effilées sont facultatives : si vous en mettez, prévenez vos invités et servez-les à part pour ceux qui sont allergiques. Vérifiez aussi l’étiquette de la glace et du chocolat, qui peuvent contenir des traces de fruits à coque.",
    },
    {
      q: "Peut-on congeler des profiteroles garnies ?",
      a: "Non, ce n’est pas une bonne idée : garnis de glace, les choux se détrempent au congélateur. Congelez les choux vides d’un côté, gardez la glace de l’autre, et montez les profiteroles au moment de servir.",
    },
  ],
  nutrition: { calories: 750, protein: 15, fat: 55, saturatedFat: 32, carbs: 49, sugar: 26, fiber: 5, sodium: 270 },
  annotations: { hero: "porte du four fermée jusqu’au bout", detail: "sauce chaude, glace froide, tout de suite" },
  images: {
    heroAlt: "Profiteroles sur une assiette bleue, nappées d’un filet de sauce au chocolat qui coule, sur fond sombre",
    detailAlt:
      "Gros plan sur une profiterole : glace à la vanille piquée de grains de vanille sous une sauce chocolat brillante",
    credits: {
      hero: { photographer: "saeed basseri", url: "https://www.pexels.com/photo/a-plate-of-profiterole-3961752/" },
      detail: {
        photographer: "Raphaël Labbé",
        url: "https://commons.wikimedia.org/wiki/File:Profiteroles_by_Leafar.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 2.0",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#C8863A",
    onAccent: "#1B1712",
    ink: "#7A4A16",
    tint: "#F8EEE2",
    deep: "#1E120B",
    focus: "52% 62%",
  },
});
