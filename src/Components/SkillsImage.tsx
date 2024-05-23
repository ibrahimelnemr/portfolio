import React from "react";
import { Row, Col } from "react-bootstrap";

interface SkillsImageProps {
  imageSrc: string;
}

const SkillsImage: React.FunctionComponent<SkillsImageProps> = (props) => {
  return (
    <Col className="text-center d-flex align-items-center">
      <img className="img-fluid logo" src={props.imageSrc} alt="" />
    </Col>
  );
};

export default SkillsImage;
