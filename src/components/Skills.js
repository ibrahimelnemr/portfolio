import React from 'react'
import python_logo from '../images/python.png';
import javascript_logo from '../images/javascript.png';
import javascript_logo2 from '../images/javascript2.png';
import bootstrap_logo from '../images/bootstrap.png';
import cpp_logo from '../images/cpp.png';
import cpp_logo2 from '../images/cpp2.png';
import flask_logo from '../images/flask.png';
import git_logo from '../images/git.png';
import css_logo from '../images/css.png';
import html_logo from '../images/html.png';
import node_logo from '../images/node.png';
import r_logo from '../images/r.png';
import react_logo from '../images/react.png';
import sql_logo from '../images/sql.png';
import typescript_logo from '../images/typescript.png';
import typescript_logo2 from '../images/typescript2.png';
import unity_logo from '../images/unity.png';
import node_logo2 from '../images/node2.png';
import angular_logo from '../images/angular_logo.png';
import postgresql_logo from '../images/postgresql_logo.png';
import express_logo from '../images/express.png';
import django_logo from '../images/django_logo3.png';

function Skills()
{

  return (

    <>
      <div id="skills" class="row py-5 m-0 bg-light">
        <div class="col-12">
          <div class="text-center p-2 m-2 display-6">
            Skills
          </div>
        </div>

        <div class="col-12">

          <div className="row d-flex justify-content-center row-cols-auto m-3 g-5">

            <div className="col text-center d-flex align-items-center">
              <img class="img-fluid logo" src={ postgresql_logo } alt="" />
            </div>

            <div className="col text-center d-flex align-items-center">
              <img class="img-fluid logo" src={ angular_logo } alt="" />
            </div>


            <div className="col text-center d-flex align-items-center">
              <img class="img-fluid logo" src={ express_logo } alt="" />
            </div>

            <div className="col text-center d-flex align-items-center">
              <img class="img-fluid logo" src={ node_logo2 } alt="" />
            </div>

            <div className="col text-center d-flex align-items-center">
              <img class="img-fluid logo" src={ django_logo } alt="" />
            </div>

            <div className="col text-center d-flex align-items-center">
              <img class="img-fluid logo" src={ sql_logo } alt="" />
            </div>

            <div className="col text-center d-flex align-items-center">
              <img class="img-fluid logo" src={ react_logo } alt="" />
            </div>

            <div className="col text-center d-flex align-items-center">
              <img class="img-fluid logo" src={ bootstrap_logo } alt="" />
            </div>

            <div className="col text-center d-flex align-items-center">
              <img class="img-fluid logo" src={ python_logo } alt="" />
            </div>

            <div className="col text-center d-flex align-items-center">
              <img class="img-fluid logo" src={ javascript_logo } alt="" />
            </div>
            <div className="col text-center d-flex align-items-center">
              <img class="img-fluid logo" src={ typescript_logo2 } alt="" />
            </div>

            <div className="col text-center d-flex align-items-center">
              <img class="img-fluid logo" src={ cpp_logo2 } alt="" />
            </div>
          </div>
        </div>
      </div>

    </>

  );

}

export default Skills
