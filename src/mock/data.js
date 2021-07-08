import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Liva .R portfolio', // e.g: 'Name | Developer'
  lang: 'fr', // e.g: en, es, fr, jp
  description: 'Bienvenue sur mon portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Bonjour, mon nom est',
  name: 'Liva Rakotoarinia',
  subtitle: 'Developeur web et web mobile',
  cta: 'En savoir plus',
};

// ABOUT DATA
export const aboutData = {
  img: 'my_img.png',
  paragraphOne:
    'Développeur passionné par l’apprentissage des nouveaux langages, je mets et fait évoluer mes compétences au service des clients et des différents projets effectuer dans la société. Je travaille actuellement sur le développement du côté front (côté client) d’une application',
  paragraphTwo:
    'Mais je ne fais pas que développement, pour évacuer le stress du travail, j’aime lire des fanfictions et aller au cinéma.',
  paragraphThree:
    'Apprendre la langue et la culture Japonaise est une autre de mes passions. Refaire un voyage là bas serait une de mes ambitions.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'eatzee.png',
    title: 'Eatzee',
    info:
      "Création d'une application hybrid mobile, téléchargeable sur android et ios, de type Marmitton, qui regroupe différentes recettes de cuisine simple à faire en fonction du choix des ingrédients de l'utilisateur",
    info2: '',
    url: 'https://eatzee.fr/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'netflix.png',
    title: 'Netflix Clone',
    info:
      'Un petit clone de netflix, développer avec Angular, qui regroupe les différents films du moment avec les trailers.',
    info2: '',
    url: 'https://netflix-clone-ce1d3.web.app/',
    repo: 'https://github.com/livarakotoarinia/netflixClone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'covid19.png',
    title: 'Covid19 Tracker',
    info: 'Un site en Angular permettant de recensé les cas répertoriés du Covid 19 dans le monde.',
    info2: '',
    url: 'https://covid-19-tracker-a4934.web.app/',
    repo: 'https://github.com/livarakotoarinia/covid19tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'amazon.png',
    title: 'Amazon Clone',
    info:
      "Un petit clone d'amazon en React qui permet de montrer quelques fonctionnalités telles que l'ajout de produit dans un panier, la connexion grâce à firebase, suivi du panier, suppression de produit dans le panier ...",
    info2: '',
    url: 'https://clone-36d9e.web.app/',
    repo: 'https://github.com/livarakotoarinia/amazon-clone', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Vous voulez me contacter ? Super!',
  btn: 'Envoyer moi un mail',
  email: 'liva@ichtus-it.eu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/livarakotoarinia',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/livarakotoarinia',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
