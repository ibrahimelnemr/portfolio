// components/projectsSection/Projects.tsx
import React from "react";
import Section from "../../components/section";
import ProjectCard from "./projectCard";
import ISectionCard from "../../interfaces/ISectionCard";

interface ProjectsProps {
  cards?: ISectionCard[];
}

const Projects: React.FC<ProjectsProps> = ({ cards = [] }) => {
  return (
    <Section sectionName="Projects">
      <div className="flex flex-wrap">
        {cards.length > 0 ? (
          cards.map((card, index) => (
            <ProjectCard
              key={index}
              title={card.title}
              text={card.text}
              link={card.link}
              linkText={card.linkText} // Optional custom link text
              isGithubLink={card.isGithubLink} // Optional flag for GitHub styling
            />
          ))
        ) : (
          <p>No projects available.</p>
        )}
      </div>
    </Section>
  );
};

export default Projects;
