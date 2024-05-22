import React from "react";
import Section from "../Components/Section";
import CertificationCard from "../Components/CertificationCard";
import ISectionCard from "../Interfaces/ISectionCard";

interface CertificationsProps {
  cards?: ISectionCard[];
}

const Certifications: React.FC<CertificationsProps> = (props) => {
  return (
    <Section sectionName="Certifications">
      {props.cards
        ? props.cards.map((card) => (
            <CertificationCard
              cardTitle={card.title}
              bulletPoints={card.bulletPoints ?? []}
              link={card.link ?? ""}
            />
          ))
        : ""}
    </Section>
  );
};

export default Certifications;
