import React from "react";

interface ProjectCardProps {
  cardTitle: string;
  cardText: string;
  githubLink: string;
}

const ProjectCard: React.FunctionComponent<ProjectCardProps> = (
  props
) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-6">
      <div className="card shadow-lg p-3 mb-5 rounded bg-light text-dark border">
        <div className="card-body">
          <div className="h1 mb-3"></div>
          <h3 className="card-title mb-3">{props.cardTitle}</h3>
          <p className="card-text">{props.cardText}</p>
          <a href={props.githubLink}
          target="_blank"
          className="btn btn-outline-secondary"
          >
            <i className="fab fa-github"></i> View on Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;