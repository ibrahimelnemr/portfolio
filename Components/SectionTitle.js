"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const SectionTitle = (props) => {
    return (react_1.default.createElement(react_bootstrap_1.Col, { xs: 12 },
        react_1.default.createElement("div", { className: "text-center p-2 m-2 display-6" }, props.sectionName)));
};
exports.default = SectionTitle;
