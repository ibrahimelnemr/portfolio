import React from 'react'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Certifications from './Certifications'
import Resume from './Resume'
import Contact from './Contact'
import Carousel2 from './Carousel2';

function Main() {
return(
<main id="main" class="container-fluid d-flex flex-column min-vh-100">
    <About/>
    <Projects/>
    <Skills/>
    <Certifications/>
    <Resume/>
    <Contact/>
  
  </main>
);
}

export default Main