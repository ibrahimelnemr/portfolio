import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light navbar-light">
          <div className="container">
            <a href="#" className="navbar-brand nav-item">
              Ibrahim El Nemr | Portfolio
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navmenu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navmenu">
              <ul className="navbar-nav ms-auto">

                <li className="nav-item">
                  <a href="#about" className="nav-link nav-item">
                    About
                  </a>
                </li>


                <li className="nav-item">
                  <a href="#projects" className="nav-link nav-item">
                    Projects
                  </a>
                </li>


                <li className="nav-item">
                  <a href="#skills" className="nav-link nav-item">
                    Skills
                  </a>
                </li>


                <li className="nav-item">
                  <a href="#certifications" className="nav-link nav-item">
                    Certifications
                  </a>
                </li>


                <li className="nav-item">
                  <a href="#contact" className="nav-link nav-item">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  );
}
