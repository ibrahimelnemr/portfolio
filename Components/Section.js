"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SectionTitle_1 = __importDefault(require("./SectionTitle"));
const react_bootstrap_1 = require("react-bootstrap");
const Section = (props) => {
    return (react_1.default.createElement(react_bootstrap_1.Row, { className: "p-5 m-0 bg-light g-4" },
        react_1.default.createElement(SectionTitle_1.default, { sectionName: props.sectionName }),
        props.children));
};
exports.default = Section;
