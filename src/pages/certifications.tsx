import React from "react";
import BaseLayout from "../layouts/baseLayout";
import Certifications from "../components/certificationsSection";
import { GetStaticProps } from "next";
import { CertificationCards } from "../data/Data";

export default function CertificationsPage({ certificationsCards } : { certificationsCards: any[] }) {
  return (
    <BaseLayout>
      <Certifications cards={certificationsCards}/>
    </BaseLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
    return {
      props: {
        certificationsCards: CertificationCards,
      },
    };
  };