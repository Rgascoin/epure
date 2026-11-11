import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "pizza-margherita",
  title: "Pizza margherita maison",
  seoTitle: "Pizza margherita maison et sa pâte à pizza 24 h",
  tagline: "La pâte se fait la veille.",
  description:
    "Pizza margherita maison : une pâte à pizza reposée 24 heures au frigo, cuite 8 minutes sur une pierre dans un four à fond. Bord gonflé, dessous croustillant.",
  summary:
    "Pour 4 pizzas margherita, pétrissez 600 g de farine type 00, 390 ml d’eau, 3 g de levure fraîche et 15 g de sel, laissez pointer 2 heures puis boulez 4 pâtons et mettez-les 24 à 48 heures au frigo. Le jour J, sortez-les 2 à 3 heures avant, chauffez le four à fond 45 minutes avec une pierre, étalez à la main, garnissez de 400 g de tomates pelées et 500 g de mozzarella, et cuisez chaque pizza 7 à 9 minutes. Basilic et huile d’olive à la sortie.",
  intro: [
    "Une pizza margherita, c’est une pâte, de la tomate, de la mozzarella, du basilic et un filet d’huile d’olive. Avec si peu de choses, tout tient à la pâte. On la prépare la veille et elle repose 24 heures au frigo : elle prend du goût et devient assez souple pour s’étirer à la main sans se rétracter.",
    "Un four de maison ne monte pas à 450 °C comme un four à bois. On compense avec une pierre ou un acier à pizza chauffé 45 minutes au maximum : le dessous croustille, le bord gonfle et se tache de brun en 7 à 9 minutes.",
    "Ce qui rate le plus souvent : une pâte étalée au rouleau qui ne gonfle plus, un four pas assez chaud, une mozzarella mal égouttée qui noie le centre. Chaque étape dit comment l’éviter.",
  ],
  category: "Plat",
  cuisine: "Italienne",
  keywords: [
    "pizza margherita",
    "pizza margherita maison",
    "pâte à pizza",
    "pâte à pizza maison",
    "pâte à pizza 24h",
    "pâte à pizza farine 00",
    "pizza napolitaine maison",
    "pizza au four maison",
    "pizza sans pierre à pizza",
  ],
  servings: 4,
  servingsLabel: { one: "pizza", other: "pizzas" },
  times: { prep: 40, cook: 45, rest: 1680 },
  difficulty: "Intermédiaire",
  cost: "€€",
  season: ["Toute l’année"],
  equipment: [
    "pierre ou acier à pizza (ou plaque épaisse retournée)",
    "pelle à pizza (ou planche fine sans rebord)",
    "grand saladier",
    "boîte hermétique assez grande pour 4 pâtons",
    "balance précise au gramme",
  ],
  ingredients: [
    {
      title: "Pâte à pizza (la veille)",
      items: [
        { qty: 390, unit: "ml", name: "eau", note: "à température ambiante, vers 20 °C", step: 10 },
        {
          qty: 3,
          unit: "g",
          name: "levure de boulanger fraîche",
          note: "ou 1 g de levure sèche",
          step: 1,
        },
        { qty: 600, unit: "g", name: "farine type 00", note: "spéciale pizza, ou T65", step: 10 },
        { qty: 15, unit: "g", name: "sel fin", step: 1 },
        { qty: 1, unit: "cas", name: "huile d’olive", note: "pour la boîte", step: 1 },
      ],
    },
    {
      title: "Garniture",
      items: [
        { qty: 500, unit: "g", name: "mozzarella", note: "fior di latte, 4 boules de 125 g", step: 25 },
        {
          qty: 400,
          unit: "g",
          name: "tomates pelées en conserve",
          note: "entières, idéalement san marzano",
          step: 20,
        },
        { qty: 1, unit: "pincee", name: "sel fin", step: 1 },
        { qty: 30, unit: "g", name: "semoule fine de blé dur", note: "pour la pelle", step: 5 },
        { qty: 16, unit: "feuille", name: "basilic", step: 1 },
        { qty: 4, unit: "cas", name: "huile d’olive vierge extra", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "La pâte, la veille",
      steps: [
        {
          title: "Délayer la levure",
          text: "Dans le saladier, émiettez la levure dans l’eau et remuez pour la dissoudre. Ajoutez la moitié de la farine et mélangez à la cuillère jusqu’à obtenir une pâte à crêpes épaisse.",
        },
        {
          title: "Pétrir la pâte",
          text: "Ajoutez le sel, puis le reste de la farine, et mélangez jusqu’à ce qu’il ne reste plus de farine sèche. Pétrissez 10 minutes à la main sur le plan de travail : la pâte devient lisse, un peu collante, et reprend sa forme quand on l’enfonce du doigt.",
          timer: { minutes: 10, label: "Pétrissage" },
          tip: "Au robot, pétrissez à vitesse lente, crochet monté, jusqu’à ce que la pâte se décolle des parois. Elle chauffe vite : ne la laissez pas dépasser 25 °C.",
        },
        {
          title: "Laisser pointer",
          text: "Couvrez le saladier d’un torchon et laissez pointer 2 heures à température ambiante. La pâte gonfle d’environ un tiers et quelques bulles apparaissent à la surface.",
          timer: { minutes: 120, label: "Pointage" },
        },
        {
          title: "Bouler et réfrigérer",
          text: "Divisez la pâte en 4 pâtons d’environ 250 g. Rabattez les bords de chacun vers le centre, retournez-le et roulez-le sous la paume pour former une boule bien tendue. Posez-les, espacés, dans la boîte huilée, fermez et mettez au frigo 24 à 48 heures.",
          timer: { minutes: 1440, label: "Repos au frigo" },
        },
      ],
    },
    {
      title: "La cuisson, le jour J",
      steps: [
        {
          title: "Remettre à température",
          text: "Sortez la boîte du frigo 2 à 3 heures avant de cuire, sans ouvrir. Les pâtons s’étalent un peu et deviennent souples, presque mous.",
          timer: { minutes: 120, label: "Remise à température" },
        },
        {
          title: "Préchauffer le four",
          text: "Posez la pierre ou l’acier sur la grille placée au tiers supérieur du four, et chauffez à la température maximale, 250 à 280 °C selon votre four, en chaleur statique, pendant 45 minutes. La pierre doit chauffer à cœur, pas seulement l’air du four.",
          timer: { minutes: 45, label: "Préchauffage" },
        },
        {
          title: "Préparer la garniture",
          text: "Pendant que le four chauffe, déchirez la mozzarella en morceaux de 2 cm et laissez-la égoutter dans une passoire. Écrasez les tomates à la main ou à la fourchette, sans les mixer ni les cuire, et salez-les d’une pincée de sel.",
        },
        {
          title: "Étaler le pâton",
          text: "Sur le plan de travail saupoudré de semoule, aplatissez un pâton du bout des doigts en partant du centre, en laissant un bord de 2 cm intact. Étirez-le ensuite sur le dos des mains jusqu’à 28 à 30 cm. Pas de rouleau.",
          tip: "Si la pâte se rétracte, couvrez-la et laissez-la se détendre quelques instants, puis reprenez.",
        },
        {
          title: "Garnir la pizza",
          text: "Posez le disque sur la pelle saupoudrée de semoule. Étalez un quart des tomates (environ 100 g) en spirale, sans toucher le bord, puis un quart de la mozzarella bien égouttée. Secouez la pelle : la pizza doit glisser librement.",
        },
        {
          title: "Cuire la pizza",
          text: "Faites glisser la pizza sur la pierre d’un coup sec du poignet et faites cuire 7 à 9 minutes. Elle est prête quand le bord a gonflé et se tache de brun, et que la mozzarella bouillonne. Si votre four a un gril, allumez-le pour la dernière minute.",
          timer: { minutes: 8, label: "Cuisson de la pizza" },
        },
        {
          title: "Finir et recommencer",
          text: "Posez 4 feuilles de basilic, versez 1 cuillerée à soupe d’huile d’olive et servez aussitôt. Avant d’enfourner la suivante, laissez la pierre reprendre sa chaleur 5 minutes, porte fermée.",
          timer: { minutes: 5, label: "La pierre reprend sa chaleur" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Ce que fait le repos au froid",
      text: "À 4 °C, la levure travaille lentement, mais les enzymes de la farine continuent leur travail : les amylases coupent l’amidon en sucres, les protéases détendent le réseau de gluten. La pâte gagne des arômes de fermentation, s’étire sans se rétracter, et ses sucres libres la font mieux dorer.",
    },
    {
      title: "Pourquoi le four à fond, et une pierre",
      text: "Le bord gonfle parce que l’eau de la pâte se transforme brutalement en vapeur avant que la croûte ne fige. Il faut donc beaucoup de chaleur, très vite. Une pierre ou un acier préchauffés stockent cette chaleur et la transmettent directement au dessous de la pâte, bien plus fort que l’air du four ou qu’une plaque fine.",
    },
    {
      title: "La sauce reste crue",
      text: "Les tomates cuisent sur la pizza, dans la chaleur du four. Une sauce déjà réduite réduirait une deuxième fois et prendrait un goût de concentré. Crue, elle garde son acidité, qui équilibre le gras de la mozzarella.",
    },
  ],
  tips: [
    "Pesez la levure. À 3 g pour 600 g de farine, quelques grammes de trop et la pâte sent l’alcool au bout de 24 heures.",
    "Égouttez la mozzarella pendant que le four chauffe, et épongez-la au besoin : une mozzarella mouillée fait des flaques et détrempe le centre.",
    "Sans pierre ni acier, chauffez une plaque à pâtisserie épaisse retournée en même temps que le four. Le dessous sera moins croustillant, mais bien meilleur que sur une plaque froide.",
    "Saupoudrez la pelle de semoule plutôt que de farine : elle roule sous la pâte comme des billes et brûle moins vite.",
    "Le basilic va sur la pizza à la sortie du four. Enfourné, il noircit en quelques minutes à cette température.",
  ],
  mistakes: [
    "Étaler la pâte au rouleau. Il chasse les bulles du bord, qui ne gonfle plus : la pizza ressemble à une galette.",
    "Enfourner après 10 minutes de préchauffage. L’air est chaud, pas la pierre, et le dessous reste blanc et mou.",
    "Trop garnir. La tomate et la mozzarella détrempent le centre, qui ne cuit jamais.",
    "Étaler une pâte qui sort du frigo. Froide, elle se rétracte à chaque étirement et finit par se déchirer.",
  ],
  variations: [
    {
      title: "Pâte le jour même",
      text: "Doublez la levure (6 g de fraîche), laissez pointer 2 heures, boulez, puis laissez les pâtons 4 à 6 heures à température ambiante, sous un torchon. La pâte est moins parfumée et un peu moins souple, mais ça marche.",
    },
    {
      title: "Marinara",
      text: "Sans mozzarella : la sauce tomate, 2 gousses d’ail en fines lamelles, une pincée d’origan séché et un bon filet d’huile d’olive avant d’enfourner. Ce n’est plus une margherita, mais la pâte et la cuisson sont les mêmes.",
    },
    {
      title: "À la mozzarella di bufala",
      text: "Remplacez le fior di latte par de la mozzarella de bufflonne, plus crémeuse. Elle rend plus d’eau : ajoutez-la à mi-cuisson, après 4 minutes, sur la pizza déjà couverte de tomate.",
    },
  ],
  storage:
    "Les pâtons se gardent 48 heures au frigo, ou 1 mois au congélateur, chacun dans un sac huilé. Les pizzas cuites se gardent 2 jours au réfrigérateur, emballées ; réchauffez-les à la poêle, couvercle posé, jusqu’à ce que le fromage refonde.",
  pairing: "Un rouge léger servi un peu frais, un lambrusco sec ou un gamay, ou une bière blonde.",
  faq: [
    {
      q: "Quelle farine pour une pâte à pizza ?",
      a: "Une farine italienne type 00 pour pizza, riche en protéines (11 à 13 %), qui donne une pâte souple et élastique. À défaut, une T65 fait une très bonne pâte, un peu plus rustique. Évitez la farine à gâteaux, trop faible pour un repos de 24 heures.",
    },
    {
      q: "Combien de temps laisser reposer une pâte à pizza ?",
      a: "Pour cette recette, 2 heures de pointage, puis 24 à 48 heures au frigo, et 2 à 3 heures à température ambiante avant de cuire. Une pâte du jour même marche, mais elle a moins de goût et se rétracte davantage.",
    },
    {
      q: "À quelle température cuire une pizza au four ?",
      a: "À la température maximale de votre four, 250 à 280 °C, en chaleur statique, après 45 minutes de préchauffage avec une pierre ou un acier. La pizza cuit alors en 7 à 9 minutes.",
    },
    {
      q: "Pourquoi ma pâte à pizza se rétracte-t-elle ?",
      a: "Parce que le gluten est encore tendu : la pâte est trop froide, ou elle n’a pas assez reposé. Couvrez-la et attendez un peu, elle se détend. Une pâte qui a passé 24 heures au frigo et 2 heures à température ambiante se rétracte très peu.",
    },
    {
      q: "Peut-on faire une pizza sans pierre à pizza ?",
      a: "Oui. Retournez une plaque à pâtisserie épaisse, mettez-la dans le four froid et chauffez-la 45 minutes avec lui, puis faites glisser la pizza dessus. Le dessous sera moins croustillant qu’avec une pierre, mais bien meilleur que sur une plaque froide.",
    },
    {
      q: "Peut-on congeler la pâte à pizza ?",
      a: "Oui, une fois boulée et après son repos au frigo. Congelez chaque pâton dans un sac huilé, 1 mois au plus. Décongelez-le une nuit au réfrigérateur, puis laissez-le 2 à 3 heures à température ambiante. Ne le recongelez pas.",
    },
    {
      q: "Quelle mozzarella pour une pizza margherita ?",
      a: "Du fior di latte, la mozzarella au lait de vache, en boule. Elle fond bien et rend peu d’eau une fois égouttée. La mozzarella di bufala est plus crémeuse mais plus humide : ajoutez-la à mi-cuisson.",
    },
  ],
  nutrition: {
    calories: 950,
    protein: 40,
    fat: 34,
    saturatedFat: 16,
    carbs: 116,
    sugar: 5,
    fiber: 6,
    sodium: 1800,
  },
  annotations: {
    hero: "pas de rouleau, les doigts",
    detail: "la mozzarella bien égouttée",
  },
  images: {
    heroAlt:
      "Pizza margherita vue de dessus, bord gonflé tacheté de brun, mozzarella fondue et basilic ciselé, sur du bois blanc",
    detailAlt: "Gros plan d’une pizza margherita : mozzarella fondue en flaques blanches sur la tomate, feuilles de basilic",
    credits: {
      hero: { photographer: "Pexels", url: "https://www.pexels.com/photo/16890470/" },
      detail: { photographer: "Pexels", url: "https://www.pexels.com/photo/13310433/" },
    },
  },
  datePublished: "2026-11-07",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#C8381E",
    onAccent: "#ffffff",
    ink: "#A52A14",
    tint: "#FBEDE8",
    deep: "#1a0f0c",
    focus: "50% 50%",
  },
});
