import React from "react";
import githubLogo from "../Images/github2.png";
import linkedinLogo from "../Images/linkedin.png";
import Section from "../Components/Section";
import { Row, Col } from "react-bootstrap";

interface ContactProps {}

const Contact: React.FunctionComponent<ContactProps> = () => {
  return (
    <>
      <Section sectionName="Contact">
        <Col
          xs={12}
          className="text-center d-flex align-items-center justify-content-center"
        >
          <div className="mx-3">
            <a
              href="https://www.linkedin.com/in/ibrahimelnemr/"
              target="_blank"
            >
              <img
                className="img-fluid contact-logo"
                src={linkedinLogo}
                alt=""
              />
            </a>
          </div>

          <div className="mx-3">
            <a href="https://github.com/ibrahimelnemr/" target="_blank">
              <img className="img-fluid contact-logo" src={githubLogo} alt="" />
            </a>
          </div>
        </Col>
        <Col xs={12}>
          <div className="text-center p-2 mb-5 m-2 fs-4 fw-light">
            I am currently searching for opportunities in full-stack or back-end
            development. If you'd like to get in touch, feel free to connect on
            Github or Linkedin!
            <br />
            <br />
            You can also reach me via email at{" "}
            <a href="mailto:ibrahimelnemr@aucegypt.edu">
              ibrahimelnemr@aucegypt.edu
            </a>
            .
          </div>
        </Col>
      </Section>
    </>
  );
};

export default Contact;
