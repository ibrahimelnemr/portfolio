import React from "react";
import { Row, Col, Card } from "react-bootstrap";

interface CertificationCardProps {
  cardTitle: string;
  bulletPoints: string[];
  link: string;
}

const CertificationCard: React.FunctionComponent<CertificationCardProps> = (
  props
) => {
  return (
    <Col sm={12} md={6} lg={6}>
    {/* <div className="col-sm-12 col-md-6 col-lg-6"> */}
    <Card className="shadow-lg p-3 mb-5 rounded bg-light text-dark border">
      <Card.Body>
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
      </Card.Body>
    </Card>
      {/* <div className="card shadow-lg p-3 mb-5 rounded bg-light text-dark border">
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
      </div> */}
    {/* </div> */}
    </Col>
  );
};

export default CertificationCard;
