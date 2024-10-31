import React from "react";
import { Row, Col, Card } from "react-bootstrap";

export default function CertificationCard({
  cardTitle,
  bulletPoints,
  link,
  key,
}: {
  cardTitle: string;
  bulletPoints: string[];
  link: string;
  key: number;
}) {
  return (
    <Col sm={12} md={6} lg={6}>
      <Card className="shadow-lg p-3 mb-5 bg-light border" key={key}>
        <Card.Body>
          <div className="h1 mb-3"></div>
          <h3 className="card-title mb-3">{cardTitle}</h3>
          <ul className="card-text">
            {bulletPoints.map((bulletPoint, index) => (
              <li key={index}>{bulletPoint}</li>
            ))}
          </ul>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-secondary"
          >
            View Certification
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
}
