import React from "react";
import {
  GithubLogoUrl,
  LinkedInLogoUrl,
  LinkedInUrl,
  GithubUrl,
  ContactText,
  ContactEmail,
} from "../data/Data";
import Section from "../components/Section";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Section sectionName="Contact">
        <Col
          xs={12}
          className="text-center d-flex align-items-center justify-content-center"
        >
          <div className="mx-3">
            <a href={LinkedInUrl} target="_blank">
              <Image
                className="img-fluid contact-logo"
                src={LinkedInLogoUrl}
                alt=""
                height={50}
                width={50}
              />
            </a>
          </div>

          <div className="mx-3">
            <a href={GithubUrl} target="_blank">
              <Image
                className="img-fluid contact-logo"
                src={GithubLogoUrl}
                alt=""
                height={50}
                width={50}
              />
            </a>
          </div>
        </Col>
        <Col xs={12}>
          <div className="text-center p-2 mb-5 m-2 fs-4 fw-light">
            {ContactText}
            <br />
            <br />
            You can also reach me via email at{" "}
            <a href={"mailto:" + ContactEmail}>{ContactEmail}</a>
          </div>
        </Col>
      </Section>
    </>
  );
}
