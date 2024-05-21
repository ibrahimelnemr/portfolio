import React from 'react';
import About from '../Sections/AboutSection';
import Projects from '../Sections/Projects';
import Skills from '../Sections/SkillsSection';
import Certifications from '../Sections/Certifications';
import Resume from '../Sections/ResumeSection';
import Contact from '../Sections/ContactSection';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainPage = () => {
  return (
    <main id="main" className="container-fluid d-flex flex-column min-vh-100 p-0">
      <Navbar />
      <About />
      <Projects/>
      <Skills />
      <Certifications />

      {/* <Resume/>*/ }
      <Contact />
      {/* <Footer/> */ }

    </main>
  );
};

export default MainPage;