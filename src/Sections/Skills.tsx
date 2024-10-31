import React from "react";
import Section from "../components/Section";
import SkillsImage from "../components/SkillsImage";
import ImageContainer from "../components/ImageContainer";

export default function Skills({
  imageUrls
}:{
  imageUrls: string[]
}) {

  return (
    <>
     <Section sectionName="Skills">
        <ImageContainer>
          {imageUrls.map((url, index) => (
            <SkillsImage key={index} imageSrc={url} />
          ))}
        </ImageContainer>
      </Section>
    </>
  );
};
