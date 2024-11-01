import React from "react";
import BaseLayout from "../layouts/baseLayout";
import Skills from "../components/skillsSection";
import { GetStaticProps } from "next";
import {
  ProjectCards,
  CertificationCards,
  SkillsImagesUrls,
} from "../data/Data";

export default function SkillsPage({ imageUrls }: { imageUrls: string[] }) {
  return (
    <BaseLayout>
      <Skills imageUrls={imageUrls} />
    </BaseLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      imageUrls: SkillsImagesUrls,
    },
  };
};
