import React from "react";
interface CertificationsSectionProps {}
const CertificationsSection: React.FunctionComponent<CertificationsSectionProps> = () => {
  return (
    <>
      <div id="certifications" className="row p-5 m-0 bg-light g-4">
        <div className="col-12">
          <div className="text-center p-2 m-2 display-6">Certifications</div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="card shadow-lg p-3 mb-5 rounded bg-light text-dark border">
            <div className="card-body">
              <div className="h1 mb-3"></div>
              <h3 className="card-title mb-3">
                Udacity Front-End Web Development Certification
              </h3>
              <p className="card-text">
                Created blog website with HTML and CSS Flexbox & Grid Layout
                <br />
                Used JavaScript for dynamically creating UI for a landing page
                <br />
                Utilized NodeJS for retrieving data from an external weather API
                and displaying on a weather journal app.
              </p>
              <a
                href="https://graduation.udacity.com/confirm/PJ42XA24"
                target="_blank"
                className="btn btn-outline-secondary"
              >
                View Certification
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="card shadow-lg p-3 mb-5 rounded bg-light text-dark border">
            <div className="card-body">
              <div className="h1 mb-3"></div>
              <h3 className="card-title mb-3">
                Meta Django Web Framework Certification
              </h3>
              <p className="card-text">
                Implement the HTTP request response cycle by creating views,
                routes and templates.
                <br />
                Describe and build a data model to create database tables and
                dynamic web forms.
                <br />
              </p>
              <a
                href="https://www.coursera.org/account/accomplishments/certificate/6RXT3N82AMWS"
                target="_blank"
                className="btn btn-outline-secondary"
              >
                View Certification
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="card shadow-lg p-3 mb-5 rounded bg-light text-dark border">
            <div className="card-body">
              <div className="h1 mb-3"></div>
              <h3 className="card-title mb-3">
                Udacity Full-Stack JavaScript Certification
              </h3>
              <p className="card-text">
                Built an image processing API using Node, Typescript, and
                Express, and used Jasmine for unit testing
                <br />
                Developed a storefront backend using Express and Postgresql with
                JWT authentication and authorization
                <br />
                Created a single page Angular ecommerce storefront app
                <br />
                Deployed a full stack app with AWS Elastic Beanstalk CLI, RDS,
                S3, and CircleCI
              </p>
              <a
                href="https://graduation.udacity.com/confirm/e/f5e9b23e-094a-11ee-9036-0f71d7d20cd8"
                target="_blank"
                className="btn btn-outline-secondary"
              >
                View Certification
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CertificationsSection;
