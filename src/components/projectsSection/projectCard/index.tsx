import React from "react";
import { Row, Col, Card } from "react-bootstrap";

export default function ProjectCard({
  cardTitle,
  cardText,
  githubLink,
  key,
}: {
  cardTitle: string;
  cardText: string;
  githubLink: string;
  key: number;
}) {
  return (
    <Col sm={12} md={6} lg={6}>
      <Card
        className="shadow-lg p-3 mb-5 rounded bg-light text-dark border"
        key={key}
      >
        <Card.Body>
          <div className="h1 mb-3"></div>
          <h3 className="card-title mb-3">{cardTitle}</h3>
          <p className="card-text">{cardText}</p>
          <a
            href={githubLink}
            target="_blank"
            className="btn btn-outline-secondary"
          >
            <i className="fab fa-github"></i> View on Github
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
}
