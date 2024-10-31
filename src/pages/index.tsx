import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import About from "../sections/About";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Certifications from "../sections/Certifications";
import Resume from "../sections/Resume";
import Contact from "../sections/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  ProjectCards,
  CertificationCards,
  SkillsImagesUrls,
} from "../data/Data";
import { GetStaticProps } from "next";

export default function MainPage({
  projectCards,
  certificationCards,
  skillsImagesUrls,
}: {
  skillsImagesUrls: any[];
  projectCards: any[];
  certificationCards: any[];
}) {
  useEffect(() => {
    // ensure typeof document is not undefined when importing bootstrap js
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);

  return (
    <main
      id="main"
      className="container-fluid d-flex flex-column min-vh-100 p-0"
    >
      <Navbar />
      <About />
      <Projects cards={projectCards} />
      <Skills imageUrls={skillsImagesUrls} />
      <Certifications cards={certificationCards} />
      {/* <Resume /> */}
      <Contact />
      {/* <Footer/> */}
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      skillsImagesUrls: SkillsImagesUrls,
      projectCards: ProjectCards,
      certificationCards: CertificationCards,
    },
  };
};
