import React, { ReactNode } from "react";
import { Row, Col } from "react-bootstrap";

export default function ImageContainer({ children }: { children: ReactNode }) {
  return (
    <>
      <Col xs={12}>
        <Row className="d-flex justify-content-center row-cols-auto g-5">
          {/* m-3 */}
          {children}
        </Row>
      </Col>
    </>
  );
}