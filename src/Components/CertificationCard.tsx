import React from "react";

interface CertificationCardProps {
  cardTitle: string;
  bulletPoints: string[];
  link: string;
}

const CertificationCard: React.FunctionComponent<CertificationCardProps> = (
  props
) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-6">
      <div className="card shadow-lg p-3 mb-5 rounded bg-light text-dark border">
        <div className="card-body">
          <div className="h1 mb-3"></div>
          <h3 className="card-title mb-3">{props.cardTitle}</h3>
          <p className="card-text">
            <>
            <ul>
              {props.bulletPoints.map((bulletPoint) => 
                <li>
                  {bulletPoint}
                  </li>
              )}
              </ul>
            </>
          </p>
          <a
            href={props.link}
            target="_blank"
            className="btn btn-outline-secondary"
          >
            View Certification
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
