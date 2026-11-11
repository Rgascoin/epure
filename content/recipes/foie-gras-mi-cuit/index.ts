import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "foie-gras-mi-cuit",
  title: "Foie gras mi-cuit en terrine",
  seoTitle: "Foie gras mi-cuit maison au four, cuit à 55 °C à cœur",
  tagline: "À préparer trois jours avant.",
  description:
    "Une terrine de foie gras mi-cuit pour 8 : un lobe de 500 g déveiné et salé, cuit au bain-marie à 100 °C jusqu’à 55 °C à cœur, puis 2 jours au frais.",
  summary:
    "Pour 8 personnes, déveinez un lobe de foie gras de canard cru de 500 g, assaisonnez-le de 6 g de sel et 1 g de poivre, tassez-le dans une terrine et faites-le cuire au bain-marie dans un four à 100 °C, environ 40 minutes, jusqu’à 55 °C à cœur. La terrine repose ensuite 48 h au réfrigérateur avant d’être tranchée. Comptez 45 minutes de travail, 40 minutes de cuisson, 2 h d’attente le jour même, puis 2 jours au réfrigérateur.",
  intro: [
    "Un foie gras mi-cuit fait maison, c’est un lobe de canard, du sel, du poivre et un thermomètre. Le reste est une affaire de température, et de patience pour les deux jours de repos.",
    "Ce qui le fait rater, c’est la chaleur. Trop forte ou trop longue, elle fait fondre la graisse du foie, qui ressort dans la terrine et laisse une tranche plus sèche, granuleuse. On cuit donc doucement, au bain-marie, et on sort la terrine dès que la sonde affiche 55 °C à cœur.",
    "Le déveinage fait peur, à tort. Un foie à température ambiante devient souple comme de la pâte à modeler, et les veines se tirent presque seules.",
  ],
  category: "Entrée",
  cuisine: "Française",
  keywords: [
    "foie gras mi-cuit",
    "foie gras maison",
    "recette foie gras mi-cuit",
    "terrine de foie gras",
    "foie gras au four",
    "foie gras au bain-marie",
    "température à cœur foie gras",
    "comment déveiner un foie gras",
  ],
  servings: 8,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 45, cook: 40, rest: 3000 },
  difficulty: "Intermédiaire",
  cost: "€€",
  season: ["Hiver"],
  tags: ["noel", "nouvel-an"],
  equipment: [
    "terrine de 600 ml avec couvercle",
    "plat à four pour le bain-marie",
    "thermomètre à sonde",
    "petit couteau pointu",
    "planchette ou carton à la taille de la terrine",
  ],
  ingredients: [
    {
      items: [
        { qty: 500, unit: "g", name: "foie gras de canard cru", note: "un lobe entier, qualité extra", step: 50 },
        { qty: 6, unit: "g", name: "sel fin", note: "12 g par kilo de foie", step: 0.5 },
        { qty: 1, unit: "g", name: "poivre blanc moulu", note: "environ ½ cuillère à café", step: 0.5 },
        { qty: 2, unit: "cas", name: "armagnac", note: "ou cognac", step: 0.5, optional: true },
      ],
    },
  ],
  method: [
    {
      title: "Préparer le foie",
      steps: [
        {
          title: "Tempérer le foie",
          text: "Sortez le foie du réfrigérateur 1 h avant de commencer et laissez-le dans son emballage, à température ambiante. Il est prêt quand il cède sous le doigt comme de la pâte à modeler, sans être mou ni huileux.",
          timer: { minutes: 60, label: "Foie à température" },
          tip: "Froid, le foie casse en mille morceaux au déveinage ; trop chaud, il fond sous les doigts. Ne dépassez pas 1 h 30 hors du réfrigérateur.",
        },
        {
          title: "Séparer les lobes",
          text: "Posez le foie sur une planche, face lisse dessous. Écartez doucement à la main le grand lobe et le petit. Retirez au couteau les éventuelles traces vertes de fiel, qui sont amères, et les petites taches de sang.",
        },
        {
          title: "Déveiner",
          text: "Ouvrez chaque lobe en deux dans l’épaisseur avec les pouces, en suivant le sillon central. Repérez la veine principale à la base, soulevez-la avec la pointe du couteau et tirez-la doucement vers la pointe du lobe, avec ses ramifications. Inutile de fouiller tout le foie : la grosse veine et ses branches suffisent.",
          tip: "Tirez la veine plutôt que de la découper : elle vient avec ses ramifications et le foie reste en grandes pièces.",
        },
        {
          title: "Assaisonner",
          text: "Mélangez le sel et le poivre. Saupoudrez-en l’intérieur et l’extérieur des lobes ouverts, sur toutes les faces, puis arrosez d’armagnac si vous en mettez. Refermez les lobes comme un livre.",
        },
      ],
    },
    {
      title: "Cuire",
      steps: [
        {
          title: "Tasser en terrine",
          text: "Placez le grand lobe dans la terrine, face lisse contre le fond. Comblez les vides avec les morceaux détachés, posez le petit lobe par-dessus et tassez fermement du plat de la main pour chasser l’air. Le foie doit arriver à 1 cm sous le bord. Couvrez.",
        },
        {
          title: "Préparer le bain-marie",
          text: "Préchauffez le four à 100 °C, chaleur statique. Posez la terrine dans le plat et versez de l’eau à 70 °C environ jusqu’aux deux tiers de sa hauteur. Plantez la sonde au centre du foie.",
        },
        {
          title: "Cuire au bain-marie",
          text: "Enfournez pour 35 à 45 minutes. Surveillez la sonde plutôt que la montre : sortez la terrine dès qu’elle affiche 55 °C à cœur. La graisse jaune qui remonte en surface est normale.",
          timer: { minutes: 40, label: "Cuisson au bain-marie" },
          tip: "Au-delà de 60 °C, le foie perd beaucoup de graisse et rétrécit. Sortez-le à 55 °C : la chaleur résiduelle finit le travail.",
        },
      ],
    },
    {
      title: "Reposer",
      steps: [
        {
          title: "Presser",
          text: "Retirez la sonde et sortez la terrine du bain-marie. Versez la graisse fondue dans un bol. Posez sur le foie la planchette enveloppée de film, avec un poids d’environ 500 g, et laissez tiédir 1 h à température ambiante.",
          timer: { minutes: 60, label: "Terrine sous presse" },
        },
        {
          title: "Couvrir de graisse",
          text: "Ôtez le poids. Faites tiédir la graisse réservée si elle a figé et versez-la sur le foie en couche fine, pour le protéger de l’air. Couvrez la terrine et mettez-la au réfrigérateur.",
        },
        {
          title: "Laisser reposer",
          text: "Attendez 48 h avant d’entamer la terrine. Le sel diffuse jusqu’au centre et le foie se raffermit, ce qui permet des tranches nettes.",
          timer: { minutes: 2880, label: "Repos au réfrigérateur" },
        },
        {
          title: "Trancher",
          text: "Grattez la graisse de surface, démoulez si vous le souhaitez, et taillez des tranches de 1 cm avec un couteau fin trempé dans l’eau chaude et essuyé entre chaque tranche. Servez aussitôt, bien frais.",
        },
      ],
    },
  ],
  science: [
    {
      title: "La graisse fond avant que le foie cuise",
      text: "Le foie gras est surtout fait de graisse, qui commence à fondre bien avant que ses protéines ne coagulent. Plus la température monte, plus il en perd. C’est pour ça qu’on cuit à four doux et qu’on s’arrête à 55 °C à cœur : au-delà, le foie rétrécit et sa texture devient granuleuse.",
    },
    {
      title: "Le bain-marie lisse la chaleur",
      text: "L’eau autour de la terrine ne dépasse pas 100 °C et chauffe les parois de façon régulière. Le foie cuit doucement de l’extérieur vers le centre, sans zone surcuite au contact du fond.",
    },
    {
      title: "Le repos fait la tranche",
      text: "Pendant les 48 h au froid, le sel gagne le cœur de la terrine et la graisse figée lie les morceaux entre eux. Tranchée trop tôt, la terrine est fade au centre et s’émiette sous le couteau.",
    },
  ],
  tips: [
    "Choisissez un foie de qualité extra, d’une couleur homogène, sans taches ni traces vertes, souple sous le doigt à travers l’emballage.",
    "Pesez le sel au gramme près : 12 g par kilo de foie. À l’œil, on sale presque toujours trop.",
    "Gardez la graisse qui reste dans le bol : filtrée, elle sert à faire sauter des pommes de terre.",
    "Pour des tranches nettes, utilisez un couteau à lame fine trempé dans l’eau chaude, ou un fil à beurre.",
  ],
  mistakes: [
    "Un four trop chaud fait fondre le foie : la terrine baigne dans la graisse et le foie a rétréci. Il reste bon, mais plus sec ; servez-le avec un chutney de figues.",
    "Un foie déveiné à la sortie du réfrigérateur se brise en petits morceaux. Si c’est fait, tassez-les bien dans la terrine : la cuisson et la presse les ressoudent.",
    "Entamer la terrine le lendemain de la cuisson donne une tranche fade au centre et friable. Les 48 h de repos ne sont pas du luxe.",
    "Cuire sans thermomètre, c’est se fier à la montre, alors que la durée change avec la forme de la terrine et le poids du foie. Une sonde coûte moins cher qu’un lobe raté.",
  ],
  variations: [
    {
      title: "Au sauternes",
      text: "Remplacez l’armagnac par 4 cuillères à soupe de sauternes et laissez le foie assaisonné 12 h au réfrigérateur, filmé, avant de le tasser. Le goût est plus doux, un peu fruité.",
    },
    {
      title: "Aux épices",
      text: "Ajoutez au sel ½ cuillère à café de quatre-épices ou une pincée de piment d’Espelette. Gardez la même quantité de sel.",
    },
    {
      title: "Grande terrine pour 12",
      text: "Pour un foie de 750 g, prenez une terrine de 900 ml, 9 g de sel et 1,5 g de poivre, et comptez 50 à 60 minutes au bain-marie, toujours jusqu’à 55 °C à cœur.",
    },
  ],
  storage:
    "Couverte de sa graisse et de son couvercle, la terrine se garde 5 jours au réfrigérateur, entre 0 et 4 °C, à compter du jour de la cuisson, repos compris. Une fois entamée, filmez la tranche au contact et finissez-la sous 2 jours. La congélation abîme la texture : on ne la conseille pas.",
  pairing:
    "Du pain de campagne grillé ou une brioche peu sucrée, quelques grains de fleur de sel, et un liquoreux comme un sauternes ou un jurançon, ou un blanc sec si vous préférez moins de sucre.",
  faq: [
    {
      q: "Quelle température à cœur pour un foie gras mi-cuit ?",
      a: "55 °C, mesurés au centre avec une sonde. Plus bas, le foie reste très rosé et fragile à trancher ; au-delà de 60 °C, il perd beaucoup de graisse et devient sec. Sortez la terrine du four dès que la sonde affiche 55 °C.",
    },
    {
      q: "Combien de temps de repos avant de manger un foie gras mi-cuit ?",
      a: "48 h au réfrigérateur au minimum. Le sel a le temps de gagner le centre et le foie se raffermit, ce qui permet des tranches nettes. Mangez-le ensuite dans les 5 jours qui suivent la cuisson.",
    },
    {
      q: "Peut-on manger du foie gras mi-cuit enceinte ?",
      a: "Non. Les recommandations sanitaires déconseillent le foie gras pendant la grossesse à cause du risque de listeria, et la cuisson douce du mi-cuit ne l’élimine pas avec certitude. La même prudence vaut pour les personnes immunodéprimées, les personnes âgées fragiles et les jeunes enfants.",
    },
    {
      q: "Faut-il déveiner le foie gras ?",
      a: "Oui, au moins la veine principale et ses grosses ramifications : elles restent dures après cuisson et se voient dans les tranches. Laissez le foie 1 h à température ambiante avant de commencer. Souple, il s’ouvre sans se briser et les veines se tirent au lieu de se couper.",
    },
    {
      q: "Combien de foie gras prévoir par personne en entrée ?",
      a: "50 à 60 g, soit une tranche d’un bon centimètre. Un lobe cru de 500 g donne 8 parts, en tenant compte de la graisse perdue à la cuisson.",
    },
    {
      q: "Combien de temps se conserve un foie gras mi-cuit maison ?",
      a: "5 jours au réfrigérateur à partir de la cuisson, repos compris, tant que la terrine reste couverte de sa graisse. Une fois entamée, finissez-la sous 2 jours, la tranche filmée au contact.",
    },
    {
      q: "Peut-on faire un foie gras mi-cuit sans alcool ?",
      a: "Oui, le sel et le poivre suffisent. L’armagnac parfume, mais à 55 °C l’alcool ne s’évapore pas : si des enfants en mangent, ne mettez pas d’alcool.",
    },
  ],
  nutrition: { calories: 265, protein: 4, fat: 27, saturatedFat: 11, carbs: 1, sugar: 0.5, fiber: 0, sodium: 330 },
  annotations: { hero: "sortie du four à 55 °C", detail: "l’eau du bain-marie à 70 °C" },
  images: {
    heroAlt: "Terrine de foie gras mi-cuit maison dans un plat ovale bleu, entamée, sous une fine couche de graisse jaune",
    detailAlt: "Terrine de foie gras mi-cuit posée dans son bain-marie au moment d’entrer au four",
    credits: {
      hero: { photographer: "DC", url: "https://commons.wikimedia.org/wiki/File:Foie_gras_mi-cuit_%22maison%22.JPG", source: "Wikimedia Commons", license: "CC BY-SA 3.0" },
      detail: { photographer: "Alpes de Haute Provence", url: "https://commons.wikimedia.org/wiki/File:23_Foie_gras_mi-cuit.jpg", source: "Wikimedia Commons", license: "CC BY 2.0" },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#C8735F",
    onAccent: "#1A100D",
    ink: "#8E4636",
    tint: "#F8ECE8",
    deep: "#1B0F0C",
    focus: "45% 50%",
  },
});
