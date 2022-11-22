import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// landing screen
import Landing from './components/landing';
// Navbar
import Navbar from './components/navbar';
import Home from './components/home';

// Title component
import Title from './components/standalone/Title';

// Specialties
import Specialties from './components/specialties';

// skills
import Skills from './components/skills';

// My showcase
import Showcase from './components/showcase';
// Svg import for project showcase 
import rtbSvg from './img/showcase/rtb.svg'
import rtbStackSvg from './img/showcase/rtbStack.svg'


// Contact Import 
import Contact from './components/contact';

// Rating Import
import Rate from './components/rating';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Landing />
    <Navbar />
    <Home />

    <Title title="Specialties" id="specialties"/>
    <Specialties />

    <Title title="My Skills" id="mySkills"/>
    <Skills />

    <Title title="My Work" id="myWork"/>
    <Showcase 
      showcaseTitle="Roundtable Bookstore"
      showcaseLink="https://students.jccc.edu/omorales/main/index.html"
      showcaseLinkOriginal="https://www.roundtablebookstore.com/"
      showcaseLinkDescription="Roundtablebookstore.com"
      showcaseImg={rtbSvg}
      showcaseAlt="Round Table Bookstore Project Image"
      showcaseStack={rtbStackSvg}
      showcaseStackAlt= "Image of technologies used"
      showcaseDescription="This project was a redesign of a local book store. The site was updated to give a more modern feel mixed with animation to bring it to life. 
      Major improvements include: Best seller carousel, cta arrow animation, and responsive design.
      Visit Original: roundtablebookstore.com"
    
    />

    <Title title="Let's Get In Contact" id="contact"/>
    <Contact />

    <Rate />

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
