// components/skillsSection/Skills.tsx
import React from "react";
import Section from "../../components/section";
import SkillsImage from "./skillsImage";

interface SkillsProps {
  imageUrls: string[];
}

const Skills: React.FC<SkillsProps> = ({ imageUrls }) => {
  return (
    <Section sectionName="Skills">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {imageUrls.map((url, index) => (
          <SkillsImage key={index} imageSrc={url} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
