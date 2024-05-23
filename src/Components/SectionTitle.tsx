import React from "react";
import { Row, Col } from "react-bootstrap";

interface SectionTitleProps {
  sectionName: string;
}

const SectionTitle: React.FunctionComponent<SectionTitleProps> = (props) => {
  return (
      <Col xs={12}>
        <div className="text-center p-2 m-2 display-6">{props.sectionName}</div>
      </Col>
  );
};

export default SectionTitle;
