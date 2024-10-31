import React from "react";
import Section from "../../components/section";
import SkillsImage from "./skillsImage";
import ImageContainer from "../../components/imageContainer";

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