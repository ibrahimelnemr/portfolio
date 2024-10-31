import React from "react";
import { Row } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="row border container-fluid p-0 m-0">
      <div className="col-12">
        <div className="text-center p-2 m-2 fw-lighter fs-5">
          Built with React and Boostrap
        </div>
      </div>
    </footer>
  );
}