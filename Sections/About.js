"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const profile_jpg_1 = __importDefault(require("../Images/profile.jpg"));
const Section_1 = __importDefault(require("../Components/Section"));
const react_bootstrap_1 = require("react-bootstrap");
const About = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Section_1.default, { sectionName: "About" },
            react_1.default.createElement(react_bootstrap_1.Col, { xs: 12, lg: 3, className: "d-flex my-auto d-lg-block d-none" },
                react_1.default.createElement("img", { src: profile_jpg_1.default, className: "img-fluid", style: { borderRadius: "15%" }, alt: "logo" })),
            react_1.default.createElement(react_bootstrap_1.Col, { xs: 12, lg: 9, className: "d-flex my-auto fs-4 d-flex text-center" },
                react_1.default.createElement("div", { className: "m-5 fw-light" }, "Hi! I'm Ibrahim and I am currently doing undergraduate studies at the American University in Cairo. I am passionate about full-stack development and currently looking for opportunities in the industry.")))));
};
exports.default = About;
