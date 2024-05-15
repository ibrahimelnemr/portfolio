import React from "react";

interface ContactSectionProps {}

const ContactSection: React.FunctionComponent<ContactSectionProps> = () => {

    const githubLogoPath = "../images/github2.png";
    const linkedinLogoPath = "../images/linkedin.png";

  return (
    <>
      <div
        id="contact"
        className="row m-0  bg-light bg-opacity-75 text-dark d-flex align-items-center"
      >
        <div className="col-12">
          <div className="text-center p-2 mb-5 m-2 display-6">Contact</div>
        </div>

        <div className="col-12 text-center d-flex align-items-center justify-content-center">
          <div className="mx-3">
            <a
              href="https://www.linkedin.com/in/ibrahimelnemr/"
              target="_blank"
            >
              <img
                className="img-fluid contact-logo"
                src={linkedinLogoPath}
                alt=""
              />
            </a>
          </div>

          <div className="mx-3">
            <a href="https://github.com/ibrahimelnemr/" target="_blank">
              <img
                className="img-fluid contact-logo"
                src={githubLogoPath}
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="col-12">
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
        </div>

        <div className="col-12 mb-4"></div>
      </div>
    </>
  );
};

export default ContactSection;
