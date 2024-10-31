import Image from "next/image";
import React from "react";
import { Row, Col } from "react-bootstrap";

export default function SkillsImage({ imageSrc }: { imageSrc: string }) {
  return (
    <Col className="text-center d-flex align-items-center">
      <Image
        className="img-fluid logo"
        src={imageSrc}
        alt="Skill Logo"
        width={100}
        height={100}
      />
    </Col>
  );
}
