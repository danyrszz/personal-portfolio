//objeto de todos los proyectos para presentar en el portafolio
export type Projects = {
  id : number,
  name : string,
  shortDescription : string,
  tags : string[],
  siteURL : string | null,
  githubURL : string | null,
  more? : string[][] 
}

const projectsES : Projects[] = [
  {
    id : 1,
    name : "Portafolio de proyectos",
    shortDescription : "Este portafolio de proyectos 😄",
    tags : ['React', 'NextJS', 'Typescript'],
    siteURL : '/',
    githubURL : null,
  },
  {
    id : 2,
    name : "Control de ingresos y gastos para taxi",
    shortDescription : "Aplicación para llevar el control de los ingresos y gastos generados por unidad taxi (para uso personal).",
    tags : ['React', 'CSS', 'Express', 'MongoDB'],
    siteURL : null,
    githubURL : 'https://github.com/danyrszz/expenses-incomes-tracker-app---MERN-stack',
    more : [
      ['title', 'Control de ingresos y gastos para taxi.' ],
      ['text','Esta app nació de la necesidad de llevar a cabo la gestión de los gastos y los ingresos generados por una unidad de taxi.'],
      ['text','El proyecto está desarrollado como un sistema web bajo el stack "MERN", haciendo uso de las tecnologías MongoDB, ExpressJS y React.'],
      ['text',''],
      ['text',''],
      ['text',''],
      ['text',''],
      
    ]
  },
  {
    id : 3,
    name : "Aplicación de Clima",
    shortDescription : "Permite desplegar la información del clima de una ubicación determinada por el usuario.",
    tags : ['React', 'CSS', 'APIs'],
    siteURL : 'https://danyrszz.github.io/weather-app-reactjs/',
    githubURL : 'https://github.com/danyrszz/weather-app-reactjs',
  },
  {
    id : 4,
    name : "Juego de preguntas de países",
    shortDescription : "Quiz de países para devchallenges.io.",
    tags : ['React', 'CSS', 'APIs'],
    siteURL : 'https://danyrszz.github.io/country-quiz-react/',
    githubURL : 'https://github.com/danyrszz/country-quiz-react',
  },
  {
    id : 5,
    name : "Windbnb",
    shortDescription : "Un clon de la interfaz de airbnb reto de devchallenges.io.",
    tags : ['React', 'CSS'],
    siteURL : 'https://danyrszz.github.io/windbnb-reactJS-devchallenges/',
    githubURL : 'https://github.com/danyrszz/windbnb-reactJS-devchallenges',
  },
  {
    id : 6,
    name : "Generador aleatorio de consejos",
    shortDescription : "Aplicación que genera una frase aleatoria. Reto para frontendmentor.",
    tags : ['Javascript', 'HTML', 'SASS'],
    siteURL : 'https://danyrszz.github.io/FM-advice-generator-app/',
    githubURL : 'https://github.com/danyrszz/FM-advice-generator-app',
  },
  {
    id : 7,
    name : "Retos de Codewars",
    shortDescription : "Repositorio de algunos retos del sitio codewars.",
    tags : ['Javascript'],
    siteURL : null,
    githubURL : 'https://github.com/danyrszz/codewars',
  },
  {
    id : 8,
    name : "Conteo regresivo prelanzamiento",
    shortDescription : "Conteo regresivo previo a lanzamiento para sitio web. Desarrollado para frontendmentor.",
    tags : ['Javascript','HTML','CSS'],
    siteURL : 'https://danyrszz.github.io/FM-launch-countdown-timer/',
    githubURL : 'https://github.com/danyrszz/FM-launch-countdown-timer',
  },
  {
    id : 9,
    name : "Calculadora de propinas",
    shortDescription : "Calculadora interactiva de propinas basadas en un precio total. Diseño para frontendmentor.",
    tags : ['Javascript','HTML','CSS'],
    siteURL : 'https://danyrszz.github.io/tip-calculator-vanillaJS/',
    githubURL : 'https://github.com/danyrszz/tip-calculator-vanillaJS',
  },
  {
    id : 10,
    name : "Diseño de componente de precios",
    shortDescription : "Diseño para frontendmentor.",
    tags : ['Javascript','HTML','CSS'],
    siteURL : 'https://danyrszz.github.io/FM-interactive-pricing-component/',
    githubURL : 'https://github.com/danyrszz/tip-calculator-vanillaJS',
  },
]

//ENGLISH CONTENT



const projectsEN : Projects[] = [
  {
    id : 1,
    name : "Project portfolio",
    shortDescription : "This very portfolio 😄",
    tags : ['React', 'NextJS', 'Typescript'],
    siteURL : '/',
    githubURL : null,
    more : [
      ['title', 'EN INGLES'],
      ['text','all text content here omfg.'],
      ['text','more text come on motherfucker.'],
      ['subtitle','title example'],
      ['image','/blog-img/1/mac.png'],
      ['caption','this is caption']
    ]
  },
  {
    id : 2,
    name : "Expenses/Incomes taxi tracker",
    shortDescription : "app to keep track of the expenses and incomes of a taxi unit (for personal use)",
    tags : ['React', 'CSS', 'Express', 'MongoDB'],
    siteURL : null,
    githubURL : 'https://github.com/danyrszz/expenses-incomes-tracker-app---MERN-stack',
  },
  {
    id : 3,
    name : "Weather app",
    shortDescription : "Displays weather information of a determined location.",
    tags : ['React', 'CSS', 'APIs'],
    siteURL : 'https://danyrszz.github.io/weather-app-reactjs/',
    githubURL : 'https://github.com/danyrszz/weather-app-reactjs',
  },
  {
    id : 4,
    name : "Country Quiz",
    shortDescription : "Quiz game challenge for devchallenges.io",
    tags : ['React', 'CSS', 'APIs'],
    siteURL : 'https://danyrszz.github.io/country-quiz-react/',
    githubURL : 'https://github.com/danyrszz/country-quiz-react',
  },
  {
    id : 5,
    name : "Windbnb",
    shortDescription : "An Airbnb interface clone. A challenge for devchallenges.io.",
    tags : ['React', 'CSS'],
    siteURL : 'https://danyrszz.github.io/windbnb-reactJS-devchallenges/',
    githubURL : 'https://github.com/danyrszz/windbnb-reactJS-devchallenges',
  },
  {
    id : 6,
    name : "Advice generator",
    shortDescription : "A random advice generator app. Challenge for frontendmentor.",
    tags : ['Javascript', 'HTML', 'SASS'],
    siteURL : 'https://danyrszz.github.io/FM-advice-generator-app/',
    githubURL : 'https://github.com/danyrszz/FM-advice-generator-app',
  },
  {
    id : 7,
    name : "Codewars challenges",
    shortDescription : "Some codewars challenges repository.",
    tags : ['Javascript'],
    siteURL : null,
    githubURL : 'https://github.com/danyrszz/codewars',
  },
  {
    id : 8,
    name : "Countdown screen",
    shortDescription : "A countdown screen challenge for frontendmentor.",
    tags : ['Javascript','HTML','CSS'],
    siteURL : 'https://danyrszz.github.io/FM-launch-countdown-timer/',
    githubURL : 'https://github.com/danyrszz/FM-launch-countdown-timer',
  },
  {
    id : 9,
    name : "Tip Calculator",
    shortDescription : "A tip calculator app. Challenge for frontendmentor.",
    tags : ['Javascript','HTML','CSS'],
    siteURL : 'https://danyrszz.github.io/tip-calculator-vanillaJS/',
    githubURL : 'https://github.com/danyrszz/tip-calculator-vanillaJS',
  },
  {
    id : 10,
    name : "Price component design",
    shortDescription : "Design challenge for frontendmentor.",
    tags : ['Javascript','HTML','CSS'],
    siteURL : 'https://danyrszz.github.io/FM-interactive-pricing-component/',
    githubURL : 'https://github.com/danyrszz/tip-calculator-vanillaJS',
  },
]

export {projectsES, projectsEN}

