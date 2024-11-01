import React from "react";
import BaseLayout from "../layouts/baseLayout";
import Projects from "../components/projectsSection";
import { GetStaticProps } from "next";
import { ProjectCards } from "../data/Data";

export default function ProjectsPage({ projectCards } : { projectCards: any[] }) {
  return (
    <BaseLayout>
      <Projects cards={projectCards}/>
    </BaseLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
    return {
      props: {
        projectCards: ProjectCards,
      },
    };
  };