import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "panna-cotta",
  title: "Panna cotta",
  seoTitle: "Panna cotta vanille et coulis de fruits rouges, à démouler",
  tagline: "Elle doit trembler, pas rebondir.",
  description:
    "6 panna cotta à la vanille prises avec 4 feuilles de gélatine (8 g), servies avec un coulis de fruits rouges. 25 minutes de travail, 6 heures au frais.",
  summary:
    "Pour 6 panna cotta, faites infuser une gousse de vanille dans 50 cl de crème entière, 10 cl de lait et 70 g de sucre, puis faites-y fondre 4 feuilles de gélatine de 2 g (8 g) ramollies dans l’eau froide. Versez dans 6 ramequins de 12 cl et laissez prendre au moins 6 heures au réfrigérateur. Le coulis se fait avec 300 g de fruits rouges et 40 g de sucre. Comptez 7 h en tout, dont 25 minutes de travail.",
  intro: [
    "La panna cotta est une crème vanillée tout juste prise, qui tremble quand on pose l’assiette. Elle demande peu de travail : chauffer, infuser, verser, puis laisser le froid faire le reste.",
    "Tout se joue à la gélatine. Trop peu, la crème s’affaisse au démoulage ; trop, elle rebondit sous la cuillère comme un flan en sachet. Avec 8 g pour 60 cl de liquide, elle se démoule et reste souple. Et la gélatine ne supporte pas l’ébullition : on l’ajoute hors du feu.",
    "Faites-la la veille. Les 6 heures de prise sont un minimum, et une nuit au frais lui donne une tenue plus nette.",
  ],
  category: "Dessert",
  cuisine: "Italienne",
  keywords: [
    "panna cotta",
    "recette panna cotta",
    "panna cotta vanille",
    "panna cotta coulis fruits rouges",
    "panna cotta gélatine",
    "panna cotta agar-agar",
    "combien de feuilles de gélatine pour une panna cotta",
    "panna cotta à démouler",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 25, cook: 10, rest: 385 },
  difficulty: "Facile",
  cost: "€",
  season: ["Printemps", "Été"],
  tags: ["printemps"],
  equipment: [
    "6 ramequins ou darioles de 12 cl",
    "casserole moyenne",
    "petite casserole",
    "saladier d’eau glacée",
    "mixeur plongeant et passoire fine",
  ],
  ingredients: [
    {
      title: "La crème",
      items: [
        { qty: 4, unit: "feuille", name: "gélatine", note: "feuilles de 2 g, soit 8 g", step: 1 },
        { qty: 50, unit: "cl", name: "crème liquide entière", note: "30 % de matières grasses minimum", step: 5 },
        { qty: 10, unit: "cl", name: "lait entier", step: 1 },
        { qty: 70, unit: "g", name: "sucre", step: 5 },
        { qty: 1, unit: "gousse", name: "vanille", step: 1 },
        { qty: 1, unit: "cac", name: "huile neutre", note: "pour les ramequins", step: 1 },
      ],
    },
    {
      title: "Le coulis",
      items: [
        {
          qty: 300,
          unit: "g",
          name: "fruits rouges",
          note: "framboises, fraises, mûres, frais ou surgelés",
          step: 25,
        },
        { qty: 40, unit: "g", name: "sucre", step: 5 },
        { qty: 2, unit: "cas", name: "eau", step: 1 },
        { qty: 1, unit: "cac", name: "jus de citron", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "La panna cotta",
      steps: [
        {
          title: "Ramollir la gélatine",
          text: "Plongez les feuilles une à une dans un grand bol d’eau très froide, pour qu’elles ne collent pas entre elles. Laissez-les tremper 10 minutes : elles deviennent molles et souples comme un tissu mouillé.",
          timer: { minutes: 10, label: "Gélatine à tremper" },
        },
        {
          title: "Infuser la vanille",
          text: "Fendez la gousse en deux et grattez les graines. Dans la casserole moyenne, mettez la crème, le lait, le sucre, la gousse et ses graines. Chauffez sur feu moyen en remuant jusqu’au frémissement, quand de petites bulles apparaissent au bord. Retirez du feu, couvrez et laissez infuser 10 minutes.",
          timer: { minutes: 10, label: "Infusion" },
        },
        {
          title: "Fondre la gélatine",
          text: "Retirez la gousse. La crème doit être encore bien chaude, sans bouillir. Essorez les feuilles entre vos mains et ajoutez-les en remuant jusqu’à ce qu’il ne reste plus aucun filament translucide.",
          tip: "Si la crème a trop refroidi pour faire fondre la gélatine, réchauffez-la doucement quelques instants, sans la porter à ébullition.",
        },
        {
          title: "Refroidir en remuant",
          text: "Posez la casserole dans le saladier d’eau glacée et remuez pendant 15 minutes, jusqu’à ce que la crème soit froide au doigt et commence à peine à napper la cuillère. Les graines de vanille restent alors en suspension au lieu de tomber au fond.",
          timer: { minutes: 15, label: "Refroidissement" },
        },
        {
          title: "Remplir les ramequins",
          text: "Huilez très légèrement l’intérieur des ramequins avec un papier absorbant imbibé d’huile. Remuez une dernière fois la crème et répartissez-la dans les ramequins.",
        },
        {
          title: "Laisser prendre",
          text: "Couvrez de film et placez au réfrigérateur au moins 6 heures, idéalement une nuit. La panna cotta est prise quand elle tremble d’un bloc si l’on penche le ramequin, sans surface liquide.",
          timer: { minutes: 360, label: "Prise au réfrigérateur" },
        },
      ],
    },
    {
      title: "Le coulis et le service",
      steps: [
        {
          title: "Cuire le coulis",
          text: "Mettez les fruits, le sucre et l’eau dans la petite casserole. Faites frémir 5 minutes, jusqu’à ce que les fruits s’effondrent. Mixez, passez à la passoire fine en pressant avec le dos d’une cuillère pour retenir les pépins, ajoutez le jus de citron et laissez refroidir.",
          timer: { minutes: 5, label: "Coulis" },
          tip: "Faites le coulis pendant la prise : il doit être froid au moment de servir.",
        },
        {
          title: "Démouler et servir",
          text: "Trempez chaque ramequin 5 secondes dans l’eau chaude, passez la pointe d’un couteau tout autour et retournez-le sur l’assiette. Une petite secousse, et la panna cotta glisse. Versez le coulis autour, au dernier moment.",
          tip: "Si elle résiste, retrempez 3 secondes, pas plus : l’extérieur fondrait et perdrait sa forme.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Ce que fait la gélatine",
      text: "La gélatine vient du collagène. Dans la crème chaude, ses longues chaînes se déroulent et se dispersent. En refroidissant, elles se réassocient en un réseau qui emprisonne le liquide : c’est le gel. Ce réseau fond vers 35 °C, un peu en dessous de la température de la bouche, d’où cette crème qui fond sur la langue.",
    },
    {
      title: "Pourquoi ne pas la faire bouillir",
      text: "Une ébullition prolongée coupe les chaînes de gélatine en morceaux plus courts, qui forment un gel plus faible. On la fait donc fondre hors du feu, dans une crème chaude mais pas bouillante.",
    },
    {
      title: "L’agar-agar, un autre gel",
      text: "L’agar-agar est un polysaccharide tiré d’algues rouges. Il ne se dissout qu’à ébullition, prend dès 35 à 40 °C et ne refond qu’autour de 85 °C. La crème prend donc vite, mais elle est plus ferme et ne fond pas en bouche comme avec la gélatine.",
    },
    {
      title: "Les fruits qui défont le gel",
      text: "L’ananas, le kiwi, la papaye ou la figue crus contiennent des enzymes qui découpent les protéines, gélatine comprise. Un coulis de ces fruits crus liquéfie la panna cotta en surface ; cuit quelques minutes, il ne pose plus de problème.",
    },
  ],
  tips: [
    "Le poids des feuilles de gélatine varie selon les marques : pesez-les, ce qui compte est le total de 8 g.",
    "Pour servir en verrines sans démouler, 3 feuilles (6 g) suffisent : la crème sera plus tremblante.",
    "Huilez à peine les ramequins : un voile suffit, l’excès laisse un goût.",
    "Gardez la gousse de vanille : rincée et séchée, elle parfume un bocal de sucre.",
  ],
  mistakes: [
    "Mettre la gélatine dans une crème bouillante, ou faire rebouillir le mélange : le gel sera mou. Retirez toujours la casserole du feu avant.",
    "Ajouter la gélatine dans une crème tiède : elle ne fond pas et laisse des filaments caoutchouteux. Réchauffez doucement en remuant jusqu’à ce qu’ils disparaissent.",
    "Démouler avant 6 heures : la panna cotta s’affaisse dans l’assiette. Si vous êtes pressé, servez-la dans son ramequin.",
    "Forcer sur la gélatine par prudence : la crème devient élastique et rebondit sous la cuillère. Restez à 8 g pour 60 cl.",
    "Verser la crème chaude dans les ramequins sans la refroidir : toute la vanille tombe au fond et forme une couche grise.",
  ],
  variations: [
    {
      title: "À l’agar-agar",
      text: "Pour une version végétarienne, remplacez la gélatine par 2 g d’agar-agar. Délayez-le dans la crème froide avec le lait et le sucre, portez à ébullition et faites bouillir 2 minutes en fouettant. Versez aussitôt dans les ramequins : la crème prend en 2 heures au réfrigérateur, avec une texture plus ferme.",
    },
    {
      title: "Au lait de coco",
      text: "Remplacez 30 cl de crème par 30 cl de lait de coco, gardez la même dose de gélatine et servez avec la pulpe de 4 fruits de la passion à la place du coulis.",
    },
    {
      title: "Au café",
      text: "Ajoutez 2 cuillères à soupe de café moulu dans la crème au moment de l’infusion, sans vanille, et filtrez à la passoire fine avant d’ajouter la gélatine. Servez avec quelques copeaux de chocolat noir.",
    },
  ],
  storage:
    "2 jours au réfrigérateur, ramequins couverts de film, coulis à part dans un bocal fermé. Ne se congèle pas : à la décongélation, la crème se sépare et rend de l’eau.",
  pairing:
    "Quelques fruits rouges frais et un sablé ou une tuile pour le croquant. Elle termine bien un repas de printemps, après un agneau ou un poisson.",
  faq: [
    {
      q: "Combien de feuilles de gélatine pour une panna cotta ?",
      a: "4 feuilles de 2 g, soit 8 g, pour 50 cl de crème et 10 cl de lait, si vous voulez la démouler. En verrines, 3 feuilles (6 g) suffisent et donnent une crème plus tremblante. Vérifiez le poids sur la boîte : il varie selon les marques.",
    },
    {
      q: "Combien de temps faut-il pour qu’une panna cotta prenne ?",
      a: "6 heures au minimum au réfrigérateur, une nuit pour une tenue nette au démoulage. Avec de l’agar-agar, 2 heures suffisent.",
    },
    {
      q: "Peut-on remplacer la gélatine par de l’agar-agar ?",
      a: "Oui, 2 g d’agar-agar pour la même quantité de crème. Il doit bouillir 2 minutes pour agir, contrairement à la gélatine. La texture sera plus ferme et plus cassante, moins fondante.",
    },
    {
      q: "La panna cotta est-elle végétarienne ?",
      a: "Non, pas avec de la gélatine, fabriquée à partir de peau ou d’os de porc ou de bœuf. Pour un dessert végétarien, prenez la variante à l’agar-agar, tiré d’une algue.",
    },
    {
      q: "Ma panna cotta n’a pas pris, peut-on la rattraper ?",
      a: "Oui. Reversez la crème dans une casserole, réchauffez-la doucement sans la faire bouillir, ajoutez 1 feuille de gélatine ramollie et remuez jusqu’à ce qu’elle fonde. Refroidissez en remuant, remplissez les ramequins et comptez de nouveau 6 heures.",
    },
    {
      q: "Peut-on préparer la panna cotta à l’avance ?",
      a: "Oui, jusqu’à 2 jours, couverte au réfrigérateur. Gardez le coulis à part et démoulez au dernier moment.",
    },
  ],
  nutrition: { calories: 350, protein: 4, fat: 26, saturatedFat: 16, carbs: 25, sugar: 24, fiber: 2, sodium: 40 },
  annotations: { hero: "elle doit trembler d’un bloc", detail: "le coulis, au dernier moment" },
  images: {
    heroAlt:
      "Panna cotta démoulée coiffée de menthe, entourée de fruits rouges écrasés et de lamelles de fraises sur une assiette blanche",
    detailAlt: "Panna cotta démoulée sur une grande assiette blanche, cercles de coulis rouge, fraises et myrtilles",
    credits: {
      hero: { photographer: "Daniel Udrescu", url: "https://www.pexels.com/photo/sweet-food-with-fruit-12443812/" },
      detail: { photographer: "Mattia Marcassoli", url: "https://www.pexels.com/photo/baked-dessert-3301907/" },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#C2263F",
    onAccent: "#FFFFFF",
    ink: "#A11F35",
    tint: "#FBEDEF",
    deep: "#1C0A0E",
    focus: "50% 55%",
  },
});
