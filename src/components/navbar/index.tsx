import React from "react";
import { Row, Col } from "react-bootstrap";
import classes from "./style.module.scss";
import Link from "next/link";

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
                <Link href="/about" className={`${classes.navItem} nav-link`}>
                  About
                </Link>
              </li>

              <li className={classes.navItem}>
                <Link
                  href="/projects"
                  className={`${classes.navItem} nav-link`}
                >
                  Projects
                </Link>
              </li>

              <li className={classes.navItem}>
                <Link href="/skills" className={`${classes.navItem} nav-link`}>
                  Skills
                </Link>
              </li>

              <li className={classes.navItem}>
                <Link
                  href="/certifications"
                  className={`${classes.navItem} nav-link`}
                >
                  Certifications
                </Link>
              </li>

              <li className={classes.navItem}>
                <Link href="/contact" className={`${classes.navItem} nav-link`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
