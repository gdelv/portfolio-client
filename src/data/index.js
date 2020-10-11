/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const groceryGif = require('../images/test.gif');
const recetaGif = require('../images/receta.gif');
const fusionGif = require('../images/fusionWireless.gif');
const duckGif = require('../images/duckClick.gif');
const nikeGif = require('../images/nikeClone.gif');
const mealGif = require('../images/mealPrep.gif');
const fixItGif = require('../images/phoneFixIt.gif');
const HTMLLogo = require('../images/icons/rsz_htmllogo.png');
const cssLogo = require('../images/icons/rsz_cssLogo.png');
const jsLogo = require('../images/icons/rsz_jsLogo.png');
const nodejsLogo = require('../images/icons/rsz_nodejs-logo.png');
const reactLogo = require('../images/icons/rsz_reactLogo.png');
const rubyLogo = require('../images/icons/rsz_rubyLogo.png');
const postgresqlLogo = require('../images/icons/rsz_postgresqlLogo.png');
const expressLogo = require('../images/icons/rsz_expressLogo.png');
const sassLogo = require('../images/icons/rsz_sassLogo.png');
const firebaseLogo = require('../images/icons/rsz_firebaseLogo.png');
const bootstrap = require('../images/icons/rsz_bootstrap.png');
const jqueryLogo = require('../images/icons/rsz_jqueryLogo.png');
const mongodb = require('../images/icons/rsz_mongodb.png');
const railsLogo = require('../images/icons/rsz_railsLogo.png');
const adobeXD = require('../images/icons/rsz_adobeXDlogo.png');

const iconStyle = {
  fontSize: '80px',
  textAlign: 'center',
};

export const languages = [
  {
    id: 11,
    name: 'HTML',
    logo: <i className="devicon-html5-plain colored" style={iconStyle} />,
    image: HTMLLogo,
  },
  {
    id: 12,
    name: 'CSS',
    logo: <i className="devicon-css3-plain colored" style={iconStyle} />,
    image: cssLogo,

  },
  {
    id: 1,
    name: 'JavaScript',
    logo: <i className="devicon-javascript-plain colored" style={iconStyle} />,
    image: jsLogo,
  },
  {
    id: 2,
    name: 'Node.js',
    logo: <i className="devicon-nodejs-plain-wordmark colored" style={iconStyle} />,
    image: nodejsLogo,
  },
  {
    id: 3,
    name: 'React.js',
    logo: <i className="devicon-react-original colored" style={iconStyle} />,
    image: reactLogo,
  },
  {
    id: 4,
    name: 'React Native',
    logo: <i className="devicon-react-original colored" style={iconStyle} />,
    image: reactLogo,
  },
  {
    id: 5,
    name: 'Ruby',
    logo: <i className="devicon-ruby-plain colored" style={iconStyle} />,
    image: rubyLogo,
  },
  {
    id: 6,
    name: 'Ruby on Rails',
    logo: <i className="devicon-rails-plain colored" style={iconStyle} />,
    image: railsLogo,
  },
  {
    id: 7,
    name: 'PostgreSQL',
    logo: <i className="devicon-postgresql-plain colored" style={iconStyle} />,
    image: postgresqlLogo,
  },
  {
    id: 8,
    name: 'Express.js',
    logo: <i className="devicon-express-original-wordmark colored" style={iconStyle} />,
    image: expressLogo,
  },
  {
    id: 9,
    name: 'Sass',
    logo: <i className="devicon-sass-original colored" style={iconStyle} />,
    image: sassLogo,
  },
  {
    id: 10,
    name: 'Bootstrap',
    logo: <i className="devicon-bootstrap-plain colored" style={iconStyle} />,
    image: bootstrap,
  },
  {
    id: 13,
    name: 'Firebase',
    logo: <img src={firebaseLogo} alt="icon" height={iconStyle.fontSize} />,
    image: firebaseLogo,
  }, {
    id: 14,
    name: 'JQuery',
    logo: <img src={jqueryLogo} alt="icon" height={iconStyle.fontSize} />,
    image: jqueryLogo,
  },
  {
    id: 15,
    name: 'MongoDB',
    logo: <img src={mongodb} alt="icon" height={iconStyle.fontSize} />,
    image: mongodb,
  },
  {
    id: 16,
    name: 'AdobeXD',
    logo: <img src={adobeXD} alt="icon" height={iconStyle.fontSize} />,
    image: adobeXD,
  },
];
export const projects = [
  {
    id: 8,
    title: 'Vagner Studio',
    description: 'Portfolio created for local studio.',
    img: fixItGif,
    webLink: 'https://phonefixit.netlify.app/',
    repoLink: 'https://github.com/gdelv/phoneFixIt-Client',
    techUsed: [
      {
        name: 'React',
        logo: <i className="devicon-react-original colored" style={iconStyle} />,
      },
      {
        name: 'JavaScript',
        logo: <i className="devicon-javascript-plain colored" style={iconStyle} />,
      },
      {
        name: 'Bootstrap',
        logo: <i className="devicon-bootstrap-plain colored" style={iconStyle} />,

      },
    ],
  }, {
    id: 9,
    title: 'Rabanal Realty',
    description: 'Blog created for real estate client.',
    img: fixItGif,
    webLink: 'https://phonefixit.netlify.app/',
    repoLink: 'https://github.com/gdelv/phoneFixIt-Client',
    techUsed: [
      {
        name: 'React',
        logo: <i className="devicon-react-original colored" style={iconStyle} />,
      },
      {
        name: 'JavaScript',
        logo: <i className="devicon-javascript-plain colored" style={iconStyle} />,
      },
      {
        name: 'Bootstrap',
        logo: <i className="devicon-bootstrap-plain colored" style={iconStyle} />,

      },
    ],
  },
  {
    id: 1,
    title: 'Phone Fix It Repair Store',
    description: 'Local repair store website completed in collaboration for a client.',
    img: fixItGif,
    webLink: 'https://phonefixit.netlify.app/',
    repoLink: 'https://github.com/gdelv/phoneFixIt-Client',
    techUsed: [
      {
        name: 'React',
        logo: <i className="devicon-react-original colored" style={iconStyle} />,
      },
      {
        name: 'JavaScript',
        logo: <i className="devicon-javascript-plain colored" style={iconStyle} />,
      },
      {
        name: 'Bootstrap',
        logo: <i className="devicon-bootstrap-plain colored" style={iconStyle} />,

      },
    ],
  },
  {
    id: 2,
    title: 'Fusion Wireless Clone',
    description: 'A project completed in collaboration to create a clone of a company made website.',
    img: fusionGif,
    webLink: 'https://fusionwireless.netlify.com/',
    repoLink: 'https://github.com/gdelv/fusionWireless',
    techUsed: [
      {
        name: 'React.js',
        logo: <i className="devicon-react-original colored" style={iconStyle} />,
      },
      {
        name: 'JavaScript',
        logo: <i className="devicon-javascript-plain colored" style={iconStyle} />,
      },
    ],
  },
  {
    id: 3,
    title: 'Duck Click',
    description: 'My own spinoff of the classic game duck hunt but using Express for the backend server and HTML, CSS and JavaScript.',
    img: duckGif,
    webLink: 'https://duck-click.herokuapp.com/',
    repoLink: 'https://github.com/gdelv/duckHunt',
    techUsed: [
      {
        name: 'Express.js',
        logo: <i className="devicon-express-original-wordmark colored" style={iconStyle} />,
      },
      {
        name: 'JavaScript',
        logo: <i className="devicon-javascript-plain colored" style={iconStyle} />,
      },
      {
        name: 'HTML',
        logo: <i className="devicon-html5-plain colored" style={iconStyle} />,
      },
      {
        name: 'CSS',
        logo: <i className="devicon-css3-plain colored" style={iconStyle} />,
      },
    ],
  },
  {
    id: 4,
    title: 'Nike Jordan Clone',
    description: 'A full stack cloned Nike Jordan website built from scratch using React and Ruby on Rails.',
    img: nikeGif,
    webLink: 'https://nikejordan.netlify.com/',
    repoLink: 'https://github.com/gdelv/jordanFrontend',
    techUsed: [
      {
        name: 'React.js',
        logo: <i className="devicon-react-original colored" style={iconStyle} />,
      },
      {
        name: 'JavaScript',
        logo: <i className="devicon-javascript-plain colored" style={iconStyle} />,
      },
      {
        name: 'Ruby',
        logo: <i className="devicon-ruby-plain colored" style={iconStyle} />,
      },
      {
        name: 'Ruby on Rails',
        logo: <i className="devicon-rails-plain colored" style={iconStyle} />,
      },
    ],
  },

  {
    id: 5,
    title: 'Receta',
    description: 'A full stack website to show my latest recipes.',
    img: recetaGif,
    webLink: 'https://recetasbyg.netlify.com/',
    repoLink: 'https://github.com/gdelv/recipe_application_frontend',
    techUsed: [
      {
        name: 'React.js',
        logo: <i className="devicon-react-original colored" style={iconStyle} />,
      },
      {
        name: 'JavaScript',
        logo: <i className="devicon-javascript-plain colored" style={iconStyle} />,
      },
      {
        name: 'Ruby',
        logo: <i className="devicon-ruby-plain colored" style={iconStyle} />,
      },
      {
        name: 'Ruby on Rails',
        logo: <i className="devicon-rails-plain colored" style={iconStyle} />,
      },
    ],
  },
  {
    id: 6,
    title: 'Meal Prep',
    description: 'Built with a team of 2 UX/UI designers and 2 other software engineers, a website where a user can browse through meals per different weeks and choose which they would like delivered.',
    img: mealGif,
    webLink: 'http://mealprep.surge.sh/',
    repoLink: 'https://github.com/gdelv/CollabProject',
    techUsed: [
      {
        name: 'React',
        logo: <i className="devicon-react-original colored" style={iconStyle} />,
      },
      {
        name: 'JavaScript',
        logo: <i className="devicon-javascript-plain colored" style={iconStyle} />,
      },
      {
        name: 'Bootstrap',
        logo: <i className="devicon-bootstrap-plain colored" style={iconStyle} />,

      },
    ],
  },
  {
    id: 7,
    title: 'Grocery World',
    description: 'Got tired of using notes to remember what groceries to buy during the week, so I created my own website so my wife and I can see what\'s needed at anytime.',
    img: groceryGif,
    webLink: 'http://shoppinglist2019.surge.sh/',
    repoLink: 'https://github.com/gdelv/shopping_list_client',
    techUsed: [
      {
        name: 'React.js',
        logo: <i className="devicon-react-original colored" style={iconStyle} />,
      },
      {
        name: 'JavaScript',
        logo: <i className="devicon-javascript-plain colored" style={iconStyle} />,
      },
    ],
  },
];

export const detailProject = [
  {
    id: 1,
    title: 'Phone Fix It Repair Store',
    description: 'React website completed for local repair store',
    img: fixItGif,
    webLink: 'https://duck-click.herokuapp.com/',
    repoLink: 'https://duck-click.herokuapp.com/',
    techUsed: [
      {
        name: 'Express.js',
        logo: <i className="devicon-express-original-wordmark colored" style={iconStyle} />,
      },
    ],
  },
];
