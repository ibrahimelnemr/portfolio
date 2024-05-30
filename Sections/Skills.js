"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Section_1 = __importDefault(require("../Components/Section"));
const SkillsImage_1 = __importDefault(require("../Components/SkillsImage"));
const ImageContainer_1 = __importDefault(require("../Components/ImageContainer"));
// import images
const python_png_1 = __importDefault(require("../Images/python.png"));
const javascript_png_1 = __importDefault(require("../Images/javascript.png"));
const bootstrap_png_1 = __importDefault(require("../Images/bootstrap.png"));
const cpp2_png_1 = __importDefault(require("../Images/cpp2.png"));
const react_png_1 = __importDefault(require("../Images/react.png"));
const sql_png_1 = __importDefault(require("../Images/sql.png"));
const typescript2_png_1 = __importDefault(require("../Images/typescript2.png"));
const node2_png_1 = __importDefault(require("../Images/node2.png"));
const angular_logo_png_1 = __importDefault(require("../Images/angular_logo.png"));
const postgresql_logo_png_1 = __importDefault(require("../Images/postgresql_logo.png"));
const express_png_1 = __importDefault(require("../Images/express.png"));
const django_logo3_png_1 = __importDefault(require("../Images/django_logo3.png"));
const Skills = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Section_1.default, { sectionName: "Skills" },
            react_1.default.createElement(ImageContainer_1.default, null,
                react_1.default.createElement(SkillsImage_1.default, { imageSrc: postgresql_logo_png_1.default }),
                react_1.default.createElement(SkillsImage_1.default, { imageSrc: angular_logo_png_1.default }),
                react_1.default.createElement(SkillsImage_1.default, { imageSrc: express_png_1.default }),
                react_1.default.createElement(SkillsImage_1.default, { imageSrc: node2_png_1.default }),
                react_1.default.createElement(SkillsImage_1.default, { imageSrc: django_logo3_png_1.default }),
                react_1.default.createElement(SkillsImage_1.default, { imageSrc: sql_png_1.default }),
                react_1.default.createElement(SkillsImage_1.default, { imageSrc: react_png_1.default }),
                react_1.default.createElement(SkillsImage_1.default, { imageSrc: bootstrap_png_1.default }),
                react_1.default.createElement(SkillsImage_1.default, { imageSrc: python_png_1.default }),
                react_1.default.createElement(SkillsImage_1.default, { imageSrc: javascript_png_1.default }),
                react_1.default.createElement(SkillsImage_1.default, { imageSrc: typescript2_png_1.default }),
                react_1.default.createElement(SkillsImage_1.default, { imageSrc: cpp2_png_1.default })))));
};
exports.default = Skills;
