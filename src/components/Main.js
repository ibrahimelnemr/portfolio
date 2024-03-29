import React from 'react'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Certifications from './Certifications'
import Resume from './Resume'
import Contact from './Contact'
import Navbar from './Navbar';
import Footer from './Footer';

function Main() {
return(
<main id="main" class="container-fluid d-flex flex-column min-vh-100 p-0">
    <Navbar/>
    <About/>
    <Projects/>
    <Skills/>
    <Certifications/>

    {/* <Resume/>*/}
    <Contact/> 
    {/* <Footer/> */}
  
  </main>
);
}

export default Main