import React from 'react';
import About from '../Sections/About';
import Projects from '../Sections/Projects';
import Skills from '../Sections/Skills';
import Certifications from '../Sections/Certifications';
import Resume from '../Sections/Resume';
import Contact from '../Sections/Contact';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { ProjectCards, CertificationCards } from '../Data/Data';

const MainPage = () => {
  return (
    <main id="main" className="container-fluid d-flex flex-column min-vh-100 p-0">
      <Navbar />
      <About />
      <Projects
        cards={ProjectCards}
      />
      <Skills />
      <Certifications 
      cards={CertificationCards}
      />

      {/* <Resume/>*/ }
      <Contact />
      {/* <Footer/> */ }

    </main>
  );
};

export default MainPage;