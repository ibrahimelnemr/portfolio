// components/certificationsSection/Certifications.tsx
import React from "react";
import Section from "../../components/section";
import CertificationCard from "./certificationCard";
import ISectionCard from "../../interfaces/ISectionCard";

interface CertificationsProps {
  cards?: ISectionCard[];
}

const Certifications: React.FC<CertificationsProps> = ({ cards }) => {
  return (
    <Section sectionName="Certifications">
      <div className="flex flex-wrap">
        {cards?.map((card, index) => (
          <CertificationCard
            key={index}
            title={card.title}
            bulletPoints={card.bulletPoints}
            link={card.link}
            linkText={card.linkText}
            isGithubLink={card.isGithubLink}
          />
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
