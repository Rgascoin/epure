import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "salade-d-endives",
  title: "Salade d’endives aux noix et au roquefort",
  seoTitle: "Salade d’endives aux noix et roquefort, avec une poire",
  tagline: "Les endives se coupent au dernier moment.",
  description:
    "Salade d’endives pour 4 : 4 endives, une poire, 100 g de roquefort et 50 g de noix grillées, vinaigrette à l’huile de noix et au cidre. Prête en 20 minutes.",
  summary:
    "Pour 4 personnes en entrée, faites griller 50 g de cerneaux de noix 5 minutes à sec, émiettez 100 g de roquefort et montez une vinaigrette avec 1,5 cuillère à soupe de vinaigre de cidre et 3 cuillères d’huile, dont 2 d’huile de noix. Les 4 endives, débarrassées de leur cône amer, et la poire ne se coupent qu’au moment de servir. Comptez 20 minutes en tout.",
  intro: [
    "Une salade d’hiver qui joue avec l’amertume. L’endive crue croque et rend un jus frais, le bleu apporte le sel, la poire le sucre, et les noix grillées le gras. Selon ce que la fourchette attrape, chaque bouchée tombe un peu autrement.",
    "Elle rate de deux façons. Coupée une heure trop tôt, l’endive roussit sur les tranches et pleure dans le saladier. Gardée avec son trognon, elle laisse un fond franchement amer à chaque morceau du bas.",
    "On prépare donc avant tout ce qui peut attendre : les noix, la vinaigrette au fond du saladier, le fromage émietté. Les endives passent sous le couteau quand tout le monde s’assoit. Attention, les noix et l’huile de noix sont des fruits à coque.",
  ],
  category: "Entrée",
  cuisine: "Française",
  keywords: [
    "salade d’endives",
    "salade d’endives aux noix",
    "salade endives roquefort noix",
    "salade d’endives poire roquefort",
    "salade d’endives pomme noix",
    "vinaigrette salade d’endives",
    "enlever l’amertume des endives",
    "entrée d’hiver facile",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 15, cook: 5 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: ["un grand saladier", "une poêle", "un petit couteau bien aiguisé"],
  ingredients: [
    {
      title: "La garniture",
      items: [
        { qty: 50, unit: "g", name: "cerneaux de noix", step: 5 },
        { qty: 100, unit: "g", name: "roquefort", note: "ou bleu d’Auvergne, bien froid", step: 10 },
      ],
    },
    {
      title: "La vinaigrette",
      items: [
        { qty: 1, unit: "pincee", name: "sel fin", fixed: true },
        { qty: 1.5, unit: "cas", name: "vinaigre de cidre", note: "ou 1 cas de vinaigre de xérès", step: 0.5 },
        { qty: 1, unit: "cac", name: "moutarde de Dijon", step: 0.5 },
        { qty: 2, unit: "cas", name: "huile de noix", step: 0.5 },
        { qty: 1, unit: "cas", name: "huile de colza", step: 0.5 },
        { name: "poivre du moulin" },
      ],
    },
    {
      title: "La salade",
      items: [
        { qty: 4, name: "endive", plural: "endives", note: "bien fermes, blanches ou en partie rouges (500 g)", step: 1 },
        { qty: 1, name: "poire", plural: "poires", note: "ferme, type conférence, ou une pomme acidulée", step: 1 },
        { qty: 6, unit: "brin", name: "ciboulette", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "Préparation",
      steps: [
        {
          title: "Griller les noix",
          text: "Versez les cerneaux dans une poêle sèche sur feu moyen et remuez souvent pendant 4 à 5 minutes. Arrêtez dès qu’ils sentent le grillé et que leur peau fonce d’un ton : une minute de plus et ils deviennent âcres. Faites-les glisser sur une assiette pour stopper la cuisson, puis cassez-les grossièrement entre vos doigts une fois tièdes.",
          timer: { minutes: 5, label: "Noix à la poêle" },
          tip: "La poêle chaude continue de les cuire : sortez-les tout de suite.",
        },
        {
          title: "Émietter le fromage",
          text: "Sortez le roquefort du réfrigérateur au dernier moment : froid, il s’émiette proprement. Cassez-le à la fourchette en morceaux d’un bon centimètre, sans l’écraser en pâte. On veut tomber dessus en mangeant, pas qu’il nappe les feuilles. Gardez-le au frais.",
        },
        {
          title: "Monter la vinaigrette",
          text: "Au fond du grand saladier, faites fondre la pincée de sel dans le vinaigre en remuant, puis ajoutez la moutarde. Versez les deux huiles en fouettant à la fourchette jusqu’à ce que la sauce épaississe un peu et devienne opaque. Poivrez. Goûtez sur un bout d’endive : elle doit piquer légèrement, le fromage arrondira.",
          tip: "Le sel ne fond pas dans l’huile : il passe toujours d’abord dans le vinaigre.",
        },
        {
          title: "Évider les endives",
          text: "Juste avant de servir, retirez la première feuille si elle est abîmée et essuyez les endives sans les faire tremper. Avec la pointe du couteau, creusez à la base un cône de 2 à 3 cm en tournant autour du trognon. Coupez-les en tronçons de 2 cm, ou détachez les feuilles entières, et mettez-les aussitôt dans le saladier.",
          tip: "Couteau incliné, on tourne autour du trognon comme pour équeuter une fraise.",
        },
        {
          title: "Trancher la poire",
          text: "Coupez la poire en quatre sans l’éplucher, retirez le cœur et taillez des lamelles de 3 à 4 mm. Ajoutez-les tout de suite sur les endives : l’acidité de la vinaigrette ralentit leur brunissement.",
        },
        {
          title: "Mélanger et servir",
          text: "Mélangez délicatement avec deux cuillères, en remontant du fond, jusqu’à ce que chaque morceau brille. Répartissez sur les assiettes, parsemez de roquefort, de noix et de ciboulette ciselée. Servez sans attendre, tant que l’endive craque sous la dent.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi l’endive roussit",
      text: "Une endive coupée brunit pour la même raison qu’une pomme : les cellules tranchées libèrent une enzyme, la polyphénol oxydase, qui oxyde leurs polyphénols au contact de l’air. L’acidité de la vinaigrette freine la réaction sans l’arrêter, d’où la coupe au tout dernier moment.",
    },
    {
      title: "D’où vient l’amertume",
      text: "Elle vient de lactones sesquiterpéniques, dont la lactucopicrine, présentes dans toutes les chicorées et plus abondantes vers la base. Le sel, le gras du fromage et le sucre de la poire ne les retirent pas, mais ils atténuent leur perception en bouche.",
    },
    {
      title: "Le goût du grillé",
      text: "À sec dans la poêle, la surface des cerneaux dépasse 140 °C : sucres et protéines réagissent entre eux (réaction de Maillard) et forment des arômes grillés. La fine peau de la noix, riche en tanins, est la première à brûler, d’où l’âcreté d’une noix trop poussée.",
    },
  ],
  tips: [
    "Choisissez des endives bien blanches aux pointes jaune pâle. Celles qui ont verdi ont vu la lumière et sont plus amères.",
    "Coupez avec une lame bien aiguisée : un couteau émoussé écrase les cellules, et la tranche brunit plus vite.",
    "Gardez l’huile de noix au réfrigérateur une fois ouverte. Elle rancit vite à température ambiante, et une huile rance gâche toute la salade.",
    "Si vos endives sont très amères ou si des enfants sont à table, ajoutez une demi-cuillère à café de miel dans la vinaigrette.",
  ],
  mistakes: [
    "Couper les endives une heure à l’avance : elles roussissent et rendent de l’eau. Si c’est fait, gardez-les nature, couvertes au frais, et n’assaisonnez qu’au moment de servir.",
    "Oublier le trognon : chaque tronçon du bas reste amer et fibreux. On le rattrape en retirant le petit disque dur au centre des rondelles, à la pointe du couteau.",
    "Griller les noix à feu vif : la peau noircit avant que l’intérieur soit doré, et le goût tourne à l’âcre. Mieux vaut recommencer que les servir.",
    "Saler la vinaigrette comme pour une laitue : le roquefort est déjà très salé. Une pincée suffit, on corrige après avoir goûté avec le fromage.",
  ],
  variations: [
    {
      title: "Avec une pomme",
      text: "Remplacez la poire par une pomme acidulée, granny smith ou reinette, en lamelles de 3 mm. Elle croque davantage et brunit plus vite : coupez-la en tout dernier.",
    },
    {
      title: "Au bleu d’Auvergne",
      text: "Même poids de bleu d’Auvergne à la place du roquefort. Au lait de vache, il est plus doux et se trouve facilement au lait pasteurisé.",
    },
    {
      title: "Au vinaigre de xérès",
      text: "1 cuillère à soupe de vinaigre de xérès au lieu de 1,5 de cidre. Plus acide et plus boisé, il tient tête à un bleu puissant.",
    },
    {
      title: "Avec des noix caramélisées",
      text: "Une fois les noix grillées, ajoutez 15 g de sucre dans la poêle, laissez-le fondre en caramel blond, enrobez les noix 1 minute en remuant et étalez-les sur du papier cuisson. Elles durcissent en refroidissant.",
    },
  ],
  storage:
    "Une fois assaisonnée, la salade ne se garde pas : les endives ramollissent et brunissent en quelques heures. La vinaigrette se conserve 1 semaine au réfrigérateur dans un bocal fermé, les noix grillées 1 semaine dans une boîte hermétique, le roquefort entamé 1 semaine dans son papier, au frais.",
  pairing:
    "Un vin blanc moelleux, jurançon ou coteaux-du-layon, ou un cidre brut bien frais. Elle ouvre bien un repas de plat mijoté.",
  faq: [
    {
      q: "Peut-on préparer une salade d’endives à l’avance ?",
      a: "Non, pas entièrement. La vinaigrette, les noix grillées et le fromage émietté se préparent plusieurs heures avant. Les endives et la poire se coupent au moment de servir : en une demi-heure, les tranches commencent à roussir, et une fois assaisonnées, les feuilles ramollissent.",
    },
    {
      q: "Une femme enceinte peut-elle manger du roquefort ?",
      a: "Non. Le roquefort est toujours fabriqué au lait cru, qui peut porter la listeria. Il est déconseillé aux femmes enceintes, aux jeunes enfants, aux personnes âgées ou immunodéprimées. Prenez un bleu au lait pasteurisé, bleu d’Auvergne, fourme d’Ambert ou gorgonzola, en vérifiant la mention sur l’étiquette, et retirez la croûte.",
    },
    {
      q: "Faut-il enlever le cœur des endives ?",
      a: "Oui, pour une salade crue. Le petit cône dur à la base concentre l’amertume et reste fibreux. Creusez-le sur 2 à 3 cm avec la pointe d’un couteau en tournant autour. Les feuilles se détachent ensuite toutes seules.",
    },
    {
      q: "Pourquoi ma salade d’endives est amère ?",
      a: "Parce que le trognon est resté, ou que les endives ont verdi à la lumière. Retirez le cône de la base, choisissez des endives bien blanches gardées dans leur papier, et laissez faire la poire et le fromage. Une demi-cuillère à café de miel dans la vinaigrette aide aussi.",
    },
    {
      q: "Peut-on faire cette salade sans noix ?",
      a: "Oui. Les noix et l’huile de noix sont des fruits à coque, un allergène majeur : prévenez vos invités. Remplacez les cerneaux par 40 g de graines de courge grillées de la même façon, 3 minutes suffisent, et l’huile de noix par de l’huile de colza.",
    },
    {
      q: "Quelle huile mettre dans une salade d’endives ?",
      a: "L’huile de noix, coupée d’un tiers d’huile de colza. Seule, elle domine tout. Mélangée, elle reprend le goût des cerneaux grillés sans écraser le fromage. L’huile d’olive marche aussi, mais elle tire la salade vers un autre registre.",
    },
  ],
  nutrition: {
    calories: 310,
    protein: 8,
    fat: 26,
    saturatedFat: 7,
    carbs: 9,
    sugar: 6,
    fiber: 4,
    sodium: 470,
  },
  annotations: { hero: "le bleu sale, la poire sucre", detail: "le cône amer, à jeter" },
  images: {
    heroAlt:
      "Salade d’endives rouges et blanches avec noix caramélisées, morceaux de bleu et lamelles de poire sur une assiette blanche",
    detailAlt:
      "Feuilles d’endive rouge détachées dans un bol, à côté d’un couteau et des trognons coniques retirés",
    credits: {
      hero: {
        photographer: "Neil Conway from Oakland, USA",
        url: "https://commons.wikimedia.org/wiki/File:Endive_%26_Watercress_Salad_(5026734694).jpg",
        source: "Wikimedia Commons",
        license: "CC BY 2.0",
      },
      detail: {
        photographer: "Micheile Henderson",
        url: "https://www.pexels.com/photo/chicory-leaves-in-bowl-7098659/",
        source: "Pexels",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#B23A52",
    onAccent: "#FFFFFF",
    ink: "#8C2A3E",
    tint: "#FBEEF1",
    deep: "#1C0B10",
    focus: "52% 45%",
  },
});
