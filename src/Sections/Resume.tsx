import React from "react";
import { Row, Col } from "react-bootstrap";

interface ResumeProps {}

const Resume: React.FunctionComponent<ResumeProps> = () => {
  return (
    <>
      <Row id="resume" className="p-0 m-0">
        <Col xs={12}>
          <div className="text-center p-2 m-2 display-4">Resume</div>
        </Col>
      </Row>
    </>
  );
};

export default Resume;
