import React, { ReactNode } from "react";
import { Row, Col } from "react-bootstrap";

interface ImageContainerProps {
  children: ReactNode;
}

const ImageContainer: React.FunctionComponent<ImageContainerProps> = (
  props
) => {
  return (
    <>
      <Col xs={12}>
        <Row className="d-flex justify-content-center row-cols-auto m-3 g-5">
          {props.children}
        </Row>
      </Col>
    </>
  );
};

export default ImageContainer;
