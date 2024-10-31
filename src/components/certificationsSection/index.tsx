import React from "react";
import Section from "../../components/section";
import CertificationCard from "./certificationCard";
import ISectionCard from "../../interfaces/ISectionCard";

export default function Certifications({ cards }: { cards?: ISectionCard[] }) {
  return (
    <Section sectionName="Certifications">
      {cards
        ? cards.map((card, index) => (
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
}
