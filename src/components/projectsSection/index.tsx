import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import Section from "../../components/section";
import ProjectCard from "./projectCard";
import ISectionCard from "../../interfaces/ISectionCard";

export default function Projects({ cards }: { cards?: ISectionCard[] }) {
  return (
    <Section sectionName="Projects">
      <>
        {cards
          ? cards.map((card, index) => (
              <ProjectCard
                key={index}
                cardTitle={card.title}
                cardText={card.text ?? ""}
                githubLink={card.link ?? ""}
              />
            ))
          : ""}
      </>
    </Section>
  );
}
