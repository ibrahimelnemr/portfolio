import React from "react";
import Section from "../components/Section";
import CertificationCard from "../components/CertificationCard";
import ISectionCard from "../interfaces/ISectionCard";

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
