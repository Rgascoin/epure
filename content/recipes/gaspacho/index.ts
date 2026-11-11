import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "gaspacho",
  title: "Gaspacho andalou",
  seoTitle: "Gaspacho andalou, mixé à l’huile d’olive et bien glacé",
  tagline: "Les tomates les plus mûres du marché.",
  description:
    "Le gaspacho andalou : 1 kg de tomates très mûres, concombre, poivron, pain rassis et vinaigre de xérès, mixés à l’huile d’olive puis 2 h au frais.",
  summary:
    "Pour 4 personnes (environ 1,2 l), mixez 1 kg de tomates très mûres avec 150 g de concombre, 100 g de poivron vert, 1 gousse d’ail, 60 g de pain rassis trempé, 2 cuillères à soupe de vinaigre de xérès et du sel, puis émulsionnez avec 8 cl d’huile d’olive versée en filet. Passez au chinois et laissez 2 heures au réfrigérateur. 20 minutes de travail, 2 h 20 en tout.",
  intro: [
    "Le gaspacho andalou est une soupe froide de légumes crus mixés : beaucoup de tomate, un peu de concombre et de poivron, une gousse d’ail, du pain rassis, de l’huile d’olive et du vinaigre de xérès. Bien fait, il est d’un orange rosé, presque crémeux, et se boit aussi bien au verre qu’à la cuillère.",
    "Quand il déçoit, c’est presque toujours à cause des tomates. Fermes et pâles, elles donnent une eau acide que rien ne rattrape. Attendez l’été et prenez-les très mûres, celles qui cèdent sous le doigt.",
    "Le reste tient en deux gestes. L’huile arrive à la fin, en filet, moteur lancé, pour s’émulsionner au lieu de surnager. Et le sel se corrige seulement une fois le gaspacho bien froid, parce que le froid en atténue le goût.",
  ],
  category: "Entrée",
  cuisine: "Espagnole",
  keywords: [
    "gaspacho",
    "recette gaspacho",
    "gaspacho andalou",
    "gaspacho andalou recette traditionnelle",
    "gaspacho maison",
    "gaspacho tomate concombre poivron",
    "soupe froide de tomates",
    "gaspacho au vinaigre de xérès",
  ],
  diet: ["vegan"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 20, cook: 0, rest: 120 },
  difficulty: "Facile",
  cost: "€",
  season: ["Été", "Début d’automne"],
  tags: ["ete"],
  equipment: [
    "blender ou mixeur plongeant puissant",
    "chinois ou passoire fine",
    "grand saladier",
    "carafe ou bouteille de 1,5 l avec bouchon",
  ],
  ingredients: [
    {
      title: "Le gaspacho",
      items: [
        { qty: 60, unit: "g", name: "pain rassis", note: "mie de pain de campagne, sans la croûte", step: 10 },
        { qty: 1000, unit: "g", name: "tomates", note: "très mûres, de saison", step: 50 },
        { qty: 150, unit: "g", name: "concombre", note: "environ ½, épluché", step: 10 },
        { qty: 100, unit: "g", name: "poivron vert", note: "environ ½, épépiné", step: 10 },
        { qty: 1, unit: "gousse", name: "ail", note: "dégermée", step: 1 },
        { qty: 1, unit: "cac", name: "sel fin", step: 0.5 },
        { qty: 2, unit: "cas", name: "vinaigre de xérès", step: 0.5 },
        { qty: 8, unit: "cl", name: "huile d’olive vierge extra", step: 1 },
        { qty: 15, unit: "cl", name: "eau très froide", note: "selon la consistance", step: 5, optional: true },
      ],
    },
    {
      title: "Pour servir",
      items: [
        { qty: 50, unit: "g", name: "concombre", note: "en tout petits dés", step: 10 },
        { qty: 50, unit: "g", name: "poivron vert", note: "en tout petits dés", step: 10 },
        { qty: 1, unit: "cas", name: "huile d’olive vierge extra", step: 0.5 },
      ],
    },
  ],
  method: [
    {
      title: "Le gaspacho",
      steps: [
        {
          title: "Faire tremper le pain",
          text: "Déchirez la mie en morceaux dans un bol, couvrez d’eau froide et laissez-la tremper 10 minutes, le temps de couper les légumes. Elle doit être molle jusqu’au centre. Pressez-la ensuite dans la main pour l’essorer.",
          timer: { minutes: 10, label: "Pain qui trempe" },
        },
        {
          title: "Couper les légumes",
          text: "Ôtez le pédoncule des tomates et coupez-les en quartiers. Coupez le concombre épluché et le poivron épépiné en gros morceaux. Taillez à part en tout petits dés le concombre et le poivron de la garniture, et réservez-les au frais.",
        },
        {
          title: "Mixer longuement",
          text: "Mettez les tomates au fond du blender, puis le concombre, le poivron, l’ail, le pain essoré, le sel et le vinaigre. Mixez 2 minutes à pleine vitesse, jusqu’à une purée lisse sans morceaux visibles.",
          timer: { minutes: 2, label: "Mixage" },
          tip: "Les tomates en premier : leur jus fait tourner les lames et entraîne le reste.",
        },
        {
          title: "Émulsionner à l’huile",
          text: "Baissez à vitesse moyenne et versez l’huile d’olive en mince filet par l’orifice du couvercle. La couleur passe du rouge à un orange rosé et la texture devient crémeuse : c’est le signe que l’huile est bien prise.",
          tip: "Avec un mixeur plongeant, versez l’huile peu à peu en gardant la tête du mixeur au fond du récipient.",
        },
        {
          title: "Passer au chinois",
          text: "Versez le gaspacho dans le chinois posé sur le saladier et pressez avec le dos d’une louche pour ne laisser que les peaux et les pépins. S’il est trop épais, allongez-le avec l’eau très froide, peu à peu : il doit napper la cuillère sans la masquer.",
        },
        {
          title: "Mettre au frais",
          text: "Versez-le dans la carafe, fermez et laissez-le au réfrigérateur au moins 2 heures. Il doit être franchement froid, pas seulement frais.",
          timer: { minutes: 120, label: "Gaspacho au frais" },
        },
        {
          title: "Goûter et servir",
          text: "Secouez la carafe, goûtez et rectifiez le sel et le vinaigre : le froid les a adoucis. Servez dans des bols ou des verres bien froids, parsemez des dés de concombre et de poivron et finissez par un filet d’huile d’olive.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi il devient orange",
      text: "Versée moteur en marche, l’huile se divise en gouttelettes très fines que la pulpe de tomate et l’amidon du pain maintiennent en suspension. Ces gouttelettes diffusent la lumière, comme dans une mayonnaise : le rouge vif s’éclaircit en orange rosé et la soupe paraît plus épaisse.",
    },
    {
      title: "Le rôle du pain",
      text: "L’amidon de la mie gonflée d’eau épaissit le liquide et aide l’émulsion à tenir. Sans pain, le gaspacho est plus fluide et l’huile remonte plus vite à la surface au repos.",
    },
    {
      title: "Le froid atténue le sel",
      text: "Notre perception du salé et du sucré baisse quand un aliment est froid. Un gaspacho parfaitement assaisonné à température ambiante paraît fade à la sortie du frigo : on rectifie toujours après le repos.",
    },
  ],
  tips: [
    "Les tomates trop mûres pour une salade, un peu molles, voire fendues, sont exactement celles qu’il faut ici.",
    "Mettez les bols ou les verres 10 minutes au congélateur avant de servir : le gaspacho reste froid jusqu’à la dernière cuillère.",
    "Une seule gousse d’ail, dégermée : il prend de la force en reposant, et le lendemain il domine tout.",
    "Gardez une bouteille de vinaigre de xérès sur la table : chacun ajuste l’acidité de son bol.",
  ],
  mistakes: [
    "Mettre l’huile avec tout le reste dès le début : elle s’émulsionne moins bien et le gaspacho reste rouge et un peu gras. Ajoutez-la à la fin, en filet, moteur lancé.",
    "Servir à peine sorti du blender : tiède, il a un goût de sauce tomate crue. Les 2 heures au frais ne sont pas facultatives.",
    "Saler définitivement avant le repos : une fois froid, il paraît fade et on rajoute du sel au jugé. Goûtez après réfrigération.",
    "Forcer sur le pain : au-delà de 80 g pour 1 kg de tomates, la texture devient pâteuse et tire vers le salmorejo.",
  ],
  variations: [
    {
      title: "À la pastèque",
      text: "Remplacez 300 g de tomates par 300 g de chair de pastèque épépinée et ne mettez qu’une cuillère à soupe de vinaigre. Il est plus sucré et plus rose, servez-le très froid.",
    },
    {
      title: "Avec les garnitures à l’espagnole",
      text: "En plus des dés de concombre et de poivron, proposez 2 tranches de pain rissolées en petits croûtons dans 1 cuillère à soupe d’huile d’olive, ½ oignon nouveau haché et 1 œuf dur écrasé à la fourchette, chacun dans son bol.",
    },
    {
      title: "Sans pain",
      text: "Supprimez le pain et réduisez l’huile à 6 cl. Le gaspacho est plus fluide et l’huile remonte un peu au repos : secouez la carafe juste avant de servir. Il convient alors à un régime sans gluten.",
    },
  ],
  storage:
    "Il se garde 2 jours au réfrigérateur dans une carafe ou une bouteille fermée ; secouez-la avant de servir, l’eau se sépare un peu. Il se congèle 2 mois, mais l’émulsion se défait : remixez-le 1 minute après décongélation au frigo, sans jamais le recongeler.",
  pairing:
    "Avec un manchego en lamelles ou quelques tranches de jambon serrano à côté. Un fino de Jerez bien frais ou un rosé sec vont bien avec l’acidité de la tomate.",
  faq: [
    {
      q: "Faut-il éplucher les tomates pour le gaspacho ?",
      a: "Non, si vous le passez au chinois : la peau et les pépins restent dans la passoire. Sans chinois, ébouillantez les tomates 30 secondes, rafraîchissez-les et pelez-les, sinon de petites peaux restent en bouche.",
    },
    {
      q: "Combien de temps le gaspacho se garde-t-il au frigo ?",
      a: "2 jours, dans une bouteille ou une carafe fermée. L’ail se renforce avec le temps et un peu d’eau se sépare au fond : secouez ou remixez quelques secondes avant de servir.",
    },
    {
      q: "Quelle différence entre gaspacho et salmorejo ?",
      a: "Le salmorejo, la soupe froide de Cordoue, se limite à la tomate, au pain, à l’ail, à l’huile d’olive et au sel, avec beaucoup plus de pain : il est épais comme une crème et se garnit d’œuf dur et de jambon. Le gaspacho, plus liquide, ajoute concombre, poivron et vinaigre.",
    },
    {
      q: "Peut-on faire du gaspacho avec des tomates en hiver ?",
      a: "Non, pas vraiment. Les tomates de serre ou d’importation manquent de sucre et de jus, et le gaspacho devient acide et aqueux. Hors saison, une bonne passata en bouteille dépanne mieux que des tomates fraîches sans goût.",
    },
    {
      q: "Peut-on remplacer le vinaigre de xérès ?",
      a: "Oui, par un vinaigre de vin rouge de bonne qualité. Commencez par 1 cuillère à soupe et demie, il est plus piquant et moins rond que le xérès.",
    },
    {
      q: "Peut-on congeler le gaspacho ?",
      a: "Oui, 2 mois au congélateur. L’émulsion se casse au dégel et la soupe paraît granuleuse : laissez-la décongeler au réfrigérateur, puis remixez-la 1 minute avec un petit filet d’huile d’olive.",
    },
  ],
  nutrition: {
    calories: 290,
    protein: 4,
    fat: 22,
    saturatedFat: 3,
    carbs: 21,
    sugar: 9,
    fiber: 4,
    sodium: 650,
  },
  annotations: { hero: "l’huile en dernier, en filet", detail: "à servir franchement froid" },
  images: {
    heroAlt:
      "Bol blanc de gaspacho andalou orangé et crémeux, garni de petits dés de tomate et de poivron, une cuillère posée dedans",
    detailAlt: "Gaspacho servi dans une cazuela en terre cuite, sur une nappe à carreaux verts et blancs",
    credits: {
      hero: {
        photographer: "cyclonebill from Copenhagen, Denmark",
        url: "https://commons.wikimedia.org/wiki/File:Gazpacho_(8894306052).jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 2.0",
      },
      detail: {
        photographer: "Bocadorada",
        url: "https://commons.wikimedia.org/wiki/File:Gazpacho_Cazuela_Barro.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 2.0",
      },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#E2552B",
    onAccent: "#1B1712",
    ink: "#A3341A",
    tint: "#FCEDE6",
    deep: "#1F0D08",
    focus: "48% 50%",
  },
});
