import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

interface ProjectsSectionProps {}

const ProjectsSection: React.FunctionComponent<ProjectsSectionProps> = () => {
  return (
    <>
      <div className="row p-5 m-0 bg-light g-4">
        <div className="col-12">
          <div className="text-center p-2 m-2 display-6">Projects</div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="card shadow-lg p-3 mb-5 rounded bg-light text-dark border">
            <div className="card-body">
              <div className="h1 mb-3"></div>
              <h3 className="card-title mb-3">
                PropertyFinder Database Query Tool
              </h3>
              <p className="card-text">
                Web scraping, database creation and data access of a real estate
                website with BeautifulSoup, MySQL and Flask.
              </p>
              <a
                href="https://github.com/ibrahimelnemr/property-finder-db"
                target="_blank"
                className="btn btn-outline-secondary"
              >
                <i className="fab fa-github"></i> View on Github
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="card shadow-lg p-3 mb-5 rounded bg-light text-dark border">
            <div className="card-body">
              <div className="h1 mb-3"></div>
              <h3 className="card-title mb-3">Syllabus Analysis Query Tool</h3>
              <p className="card-text">
                A demo database query tool for course syllabi and the skills
                associated each course, as a tool intended for undergraduate
                students. Created with Angular, Postgresql, and Express.
              </p>
              <a
                href="https://github.com/ibrahimelnemr/syllabus-analysis-query-tool"
                target="_blank"
                className="btn btn-outline-secondary"
              >
                <i className="fab fa-github"></i> View on Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;
