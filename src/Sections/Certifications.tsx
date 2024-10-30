import React from "react";
import Section from "../components/Section";
import CertificationCard from "../components/CertificationCard";
import ISectionCard from "../interfaces/ISectionCard";

interface CertificationsProps {
  cards?: ISectionCard[];
}

const Certifications: React.FC<CertificationsProps> = (props) => {
  return (
    <Section sectionName="Certifications">
      {props.cards
        ? props.cards.map((card, index) => (
            <CertificationCard
              key={index}
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
