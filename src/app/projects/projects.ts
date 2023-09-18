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
      ['text','El proyecto está desarrollado como un sistema web bajo el stack "MERN", haciendo uso de las tecnologías MongoDB, ExpressJS y React. Este sistema está desarrollado para uso personal. El frontend del proyecto se encuentra desplegado en render y el backend en vercel.'],
      ['text','Debido a que maneja información personal no está disponible su enlace, sin embargo muestro aquí algunas capturas del sistema que muestren su funcionamiento, y el código, por supuesto, se encuentra en Github.'],
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
  },
  {
    id : 2,
    name : "Expenses/Incomes taxi tracker",
    shortDescription : "app to keep track of the expenses and incomes of a taxi unit (for personal use)",
    tags : ['React', 'CSS', 'Express', 'MongoDB'],
    siteURL : null,
    githubURL : 'https://github.com/danyrszz/expenses-incomes-tracker-app---MERN-stack',
    more : [
      ['title', 'Expenses/Incomes taxi tracker.' ],
      ['text','The idea of this app was conceived under the need of managing the incomes and expenses generated by a taxi car.'],
      ['text',`This project is developed as a web system under the MERN stack. It was made using web technolies such as expressJS, MongoDB and React. The system is intended for personal use. Project's fronted is deployed on render and backend is deployed on vercel.`],
      ['text',`Since this application handles personal information is not available for anyone to visit, however I show here some screenshots of the system and explain its behaviour. The code, of course, it's available on github.`],
      ['title','Sections of the app.'],
      ['subtitle','Dashboard'],
      ['text','The home page. This shows some general information, and the last 5 spends and bills.'],
      ['subtitle','Add Bill and Add Spends'],
      ['text','These are the sections that allows to record information on the database through a user-friendly form.'],
      ['subtitle','History > Bills'],
      ['text','This shows the recorded bills, allows the user to filter by month and year. A bill can be modified or deleted.'],
      ['subtitle','History > Spends'],
      ['text','Starter page of spends shows the last 10 spends, but the user can filter the information provided with several ways to filter the data. A clicked spend redirects the user to the form so it can be edited or deleted.'],
      ['subtitle','Spends filter'],
      ['text','This window allows the user to select one or more up to three different filters to show the spends.'],

    ]
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

