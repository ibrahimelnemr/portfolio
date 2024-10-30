import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import Section from "../Components/Section";
import ProjectCard from "../Components/ProjectCard";
import ISectionCard from "../Interfaces/ISectionCard";

interface ProjectsProps {
  cards?: ISectionCard[];
}

const Projects: React.FunctionComponent<ProjectsProps> = (props) => {
  return (
    <Section sectionName="Projects">
      <>
        {props.cards ?
        
        props.cards.map((card) => (
          <ProjectCard
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
