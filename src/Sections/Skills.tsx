import React from "react";
import Section from "../components/Section";
import SkillsImage from "../components/SkillsImage";
import ImageContainer from "../components/ImageContainer";

// import images
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

interface SkillsProps {}

const Skills: React.FunctionComponent<SkillsProps> = () => {

  return (
    <>
      <Section sectionName="Skills">
        <ImageContainer>
          <SkillsImage imageSrc={postgresql_logo} />
          <SkillsImage imageSrc={angular_logo} />
          <SkillsImage imageSrc={express_logo} />
          <SkillsImage imageSrc={node_logo2} />
          <SkillsImage imageSrc={django_logo} />
          <SkillsImage imageSrc={sql_logo} />
          <SkillsImage imageSrc={react_logo} />
          <SkillsImage imageSrc={bootstrap_logo} />
          <SkillsImage imageSrc={python_logo} />
          <SkillsImage imageSrc={javascript_logo} />
          <SkillsImage imageSrc={typescript_logo2} />
          <SkillsImage imageSrc={cpp_logo2} />
        </ImageContainer>
      </Section>
    </>
  );
};

export default Skills;
