import React, { ReactNode } from "react";
import { Row, Col } from "react-bootstrap";
import SectionTitle from "./SectionTitle";

export default function Section({
  children,
  sectionName,
}: {
  children: ReactNode;
  sectionName: string;
}) {
  return (
    <Row className="p-5 m-0 bg-light g-4">
      <SectionTitle sectionName={sectionName} />
      {children}
    </Row>
  );
}
