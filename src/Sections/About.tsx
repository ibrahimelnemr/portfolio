import React, { useEffect, useState } from "react";
import profileImg from "../Images/profile.jpg";
import Section from "../Components/Section";

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => {
  return (
    <>
      <Section sectionName="About">
        <div className="col-12 d-flex my-auto col-lg-3 d-lg-block d-none">
          <img
            src={profileImg}
            className="img-fluid"
            style={{ borderRadius: "15%" }}
            alt="logo"
          />
        </div>

        <div className="col-12 d-flex my-auto col-lg-9 fs-4 d-flex text-center">
          <div className="m-5 fw-light">
            Hi! I'm Ibrahim and I am currently doing undergraduate studies at
            the American University in Cairo. I am passionate about full-stack
            development and currently looking for opportunities in the industry.
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
