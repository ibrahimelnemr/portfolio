import React from 'react';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Certifications from '../sections/Certifications';
import Resume from '../sections/Resume';
import Contact from '../sections/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ProjectCards, CertificationCards } from '../data/Data';
import { GetStaticProps } from 'next';

const MainPage = ({ projectCards, certificationCards }: {
  projectCards: any[];
  certificationCards: any[];
}) => {
  return (
    <main id="main" className="container-fluid d-flex flex-column min-vh-100 p-0">
      <Navbar />
      <About />
      {/* <Projects
        cards={ProjectCards}
      /> */}
      {/* <Skills /> */}
      {/* <Certifications 
      cards={CertificationCards}
      /> */}
      {/* <Resume/>
      {/* <Contact /> */}
      {/* <Footer/> */ }
      <button className='btn btn-primary'>
        butt'n
      </button>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projectCards: ProjectCards,
      certificationCards: CertificationCards,
    },
  };
};

export default MainPage;

