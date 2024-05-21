import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import Section from "../Components/Section";
import ProjectCard from "../Components/ProjectCard";

interface ProjectsProps {}

const Projects: React.FunctionComponent<ProjectsProps> = () => {

  return (
    <Section sectionName="Projects">
        <ProjectCard
        cardTitle="PropertyFinder Database Query Tool"
        cardText="Web scraping, database creation and data access of a real estate website with BeautifulSoup, MySQL and Flask."
        githubLink="https://github.com/ibrahimelnemr/property-finder-db"
        />

        <ProjectCard
            cardTitle="Syllabus Analysis Query Tool"
            cardText="A demo database query tool for course syllabi and the skills associated each course, as a tool intended for undergraduate students. Created with Angular, Postgresql, and Express."
            githubLink="https://github.com/ibrahimelnemr/syllabus-analysis-query-tool"
        />
        
    </Section>
  );
};

export default Projects;