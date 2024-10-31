import React from "react";
import { Row, Col } from "react-bootstrap";

export default function SectionTitle({ sectionName }: { sectionName: string }) {
  return (
    <Col xs={12}>
      <div className="text-center p-2 m-2 display-6">{sectionName}</div>
    </Col>
  );
}
