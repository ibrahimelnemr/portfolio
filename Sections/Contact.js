"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const github2_png_1 = __importDefault(require("../Images/github2.png"));
const linkedin_png_1 = __importDefault(require("../Images/linkedin.png"));
const Section_1 = __importDefault(require("../Components/Section"));
const react_bootstrap_1 = require("react-bootstrap");
const Contact = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Section_1.default, { sectionName: "Contact" },
            react_1.default.createElement(react_bootstrap_1.Col, { xs: 12, className: "text-center d-flex align-items-center justify-content-center" },
                react_1.default.createElement("div", { className: "mx-3" },
                    react_1.default.createElement("a", { href: "https://www.linkedin.com/in/ibrahimelnemr/", target: "_blank" },
                        react_1.default.createElement("img", { className: "img-fluid contact-logo", src: linkedin_png_1.default, alt: "" }))),
                react_1.default.createElement("div", { className: "mx-3" },
                    react_1.default.createElement("a", { href: "https://github.com/ibrahimelnemr/", target: "_blank" },
                        react_1.default.createElement("img", { className: "img-fluid contact-logo", src: github2_png_1.default, alt: "" })))),
            react_1.default.createElement(react_bootstrap_1.Col, { xs: 12 },
                react_1.default.createElement("div", { className: "text-center p-2 mb-5 m-2 fs-4 fw-light" },
                    "I am currently searching for opportunities in full-stack or back-end development. If you'd like to get in touch, feel free to connect on Github or Linkedin!",
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("br", null),
                    "You can also reach me via email at",
                    " ",
                    react_1.default.createElement("a", { href: "mailto:ibrahimelnemr@aucegypt.edu" }, "ibrahimelnemr@aucegypt.edu"),
                    ".")))));
};
exports.default = Contact;
