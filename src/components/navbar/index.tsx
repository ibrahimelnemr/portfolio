import React from "react";
import { Row, Col } from "react-bootstrap";
import classes from "./style.module.scss";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light navbar-light">
        <div className="container">
          <a href="#" className={`${classes.navItem}  navbar-brand`}>
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
              <li className={classes.navItem}>
                <a href="#about" className={`${classes.navItem} nav-link`}>
                  About
                </a>
              </li>

              <li className={classes.navItem}>
                <a href="#projects" className={`${classes.navItem} nav-link`}>
                  Projects
                </a>
              </li>

              <li className={classes.navItem}>
                <a href="#skills" className={`${classes.navItem} nav-link`}>
                  Skills
                </a>
              </li>

              <li className={classes.navItem}>
                <a
                  href="#certifications"
                  className={`${classes.navItem} nav-link`}
                >
                  Certifications
                </a>
              </li>

              <li className={classes.navItem}>
                <a href="#contact" className={`${classes.navItem} nav-link`}>
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
