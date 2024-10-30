import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import ISectionCard from "../interfaces/ISectionCard";

interface ProjectsProps {
  cards?: ISectionCard[];
}

const Projects: React.FunctionComponent<ProjectsProps> = (props) => {
  return (
    <Section sectionName="Projects">
      <>
        {props.cards ?
        
        props.cards.map((card, index) => (
          <ProjectCard
            key={index}
            cardTitle={card.title}
            cardText={card.text ?? ""}
            githubLink={card.link ?? ""}
          />
        ))
        : ""
        }
      </>
    </Section>
  );
};

export default Projects;
