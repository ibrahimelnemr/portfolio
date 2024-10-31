import React, { useEffect, useState } from "react";
import Section from "../../components/section";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import { ProfileImageUrl, AboutText } from "../../data/Data";

export default function About() {
  return (
    <>
      <Section sectionName="About">
        <Col xs={12} lg={3} className="d-flex my-auto d-lg-block d-none">
          <Image
            className="img-fluid"
            src={ProfileImageUrl}
            alt="logo"
            style={{ borderRadius: "15%" }}
            width={300}
            height={300}
          />
        </Col>

        <Col xs={12} lg={9} className="d-flex my-auto fs-4 d-flex text-center">
          <div className="m-5 fw-light">
            { AboutText }
          </div>
        </Col>
      </Section>
    </>
  );
};