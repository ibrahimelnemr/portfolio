import React, { useEffect, useState } from "react";
import profileImg from "../Images/profile.jpg";
import Section from "../Components/Section";
import { Row, Col } from "react-bootstrap";

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => {
  return (
    <>
      <Section sectionName="About">
        <Col xs={12} lg={3} className="d-flex my-auto d-lg-block d-none">
          <img
            src={profileImg}
            className="img-fluid"
            style={{ borderRadius: "15%" }}
            alt="logo"
          />
        </Col>

        <Col xs={12} lg={9} className="d-flex my-auto fs-4 d-flex text-center">
          <div className="m-5 fw-light">
            Hi! I'm Ibrahim and I am currently doing undergraduate studies at
            the American University in Cairo. I am passionate about full-stack
            development and currently looking for opportunities in the industry.
          </div>
        </Col>
      </Section>
    </>
  );
};

export default About;
