import React from "react";
import python_logo from "../Images/python.png";
import javascript_logo from "../Images/javascript.png";
import javascript_logo2 from "../Images/javascript2.png";
import bootstrap_logo from "../Images/bootstrap.png";
import cpp_logo from "../Images/cpp.png";
import cpp_logo2 from "../Images/cpp2.png";
import flask_logo from "../Images/flask.png";
import git_logo from "../Images/git.png";
import css_logo from "../Images/css.png";
import html_logo from "../Images/html.png";
import node_logo from "../Images/node.png";
import r_logo from "../Images/r.png";
import react_logo from "../Images/react.png";
import sql_logo from "../Images/sql.png";
import typescript_logo from "../Images/typescript.png";
import typescript_logo2 from "../Images/typescript2.png";
import unity_logo from "../Images/unity.png";
import node_logo2 from "../Images/node2.png";
import angular_logo from "../Images/angular_logo.png";
import postgresql_logo from "../Images/postgresql_logo.png";
import express_logo from "../Images/express.png";
import django_logo from "../Images/django_logo3.png";

interface SkillsSectionProps {}

const SkillsSection: React.FunctionComponent<SkillsSectionProps> = () => {
  
  // const python_logo = "../Images/python.png";
  // const javascript_logo = "../Images/javascript.png";
  // const javascript_logo2 = "../Images/javascript2.png";
  // const bootstrap_logo = "../Images/bootstrap.png";
  // const cpp_logo = "../Images/cpp.png";
  // const cpp_logo2 = "../Images/cpp2.png";
  // const flask_logo = "../Images/flask.png";
  // const git_logo = "../Images/git.png";
  // const css_logo = "../Images/css.png";
  // const html_logo = "../Images/html.png";
  // const node_logo = "../Images/node.png";
  // const r_logo = "../Images/r.png";
  // const react_logo = "../Images/react.png";
  // const sql_logo = "../Images/sql.png";
  // const typescript_logo = "../Images/typescript.png";
  // const typescript_logo2 = "../Images/typescript2.png";
  // const unity_logo = "../Images/unity.png";
  // const node_logo2 = "../Images/node2.png";
  // const angular_logo = "../Images/angular_logo.png";
  // const postgresql_logo = "../Images/postgresql_logo.png";
  // const express_logo = "../Images/express.png";
  // const django_logo = "../Images/django_logo3.png";

  return (
    <>
      <div id="skills" className="row py-5 m-0 bg-light">
        <div className="col-12">
          <div className="text-center p-2 m-2 display-6">Skills</div>
        </div>

        <div className="col-12">
          <div className="row d-flex justify-content-center row-cols-auto m-3 g-5">
            <div className="col text-center d-flex align-items-center">
              <img className="img-fluid logo" src={postgresql_logo} alt="" />
            </div>

            <div className="col text-center d-flex align-items-center">
              <img className="img-fluid logo" src={angular_logo} alt="" />
            </div>

            <div className="col text-center d-flex align-items-center">
              <img className="img-fluid logo" src={express_logo} alt="" />
            </div>

            <div className="col text-center d-flex align-items-center">
              <img className="img-fluid logo" src={node_logo2} alt="" />
            </div>

            <div className="col text-center d-flex align-items-center">
              <img className="img-fluid logo" src={django_logo} alt="" />
            </div>

            <div className="col text-center d-flex align-items-center">
              <img className="img-fluid logo" src={sql_logo} alt="" />
            </div>

            <div className="col text-center d-flex align-items-center">
              <img className="img-fluid logo" src={react_logo} alt="" />
            </div>

            <div className="col text-center d-flex align-items-center">
              <img className="img-fluid logo" src={bootstrap_logo} alt="" />
            </div>

            <div className="col text-center d-flex align-items-center">
              <img className="img-fluid logo" src={python_logo} alt="" />
            </div>

            <div className="col text-center d-flex align-items-center">
              <img className="img-fluid logo" src={javascript_logo} alt="" />
            </div>
            <div className="col text-center d-flex align-items-center">
              <img className="img-fluid logo" src={typescript_logo2} alt="" />
            </div>

            <div className="col text-center d-flex align-items-center">
              <img className="img-fluid logo" src={cpp_logo2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsSection;
