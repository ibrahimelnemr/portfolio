"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const SkillsImage = (props) => {
    return (react_1.default.createElement(react_bootstrap_1.Col, { className: "text-center d-flex align-items-center" },
        react_1.default.createElement("img", { className: "img-fluid logo", src: props.imageSrc, alt: "" })));
};
exports.default = SkillsImage;
