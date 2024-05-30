"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const ImageContainer = (props) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_bootstrap_1.Col, { xs: 12 },
            react_1.default.createElement(react_bootstrap_1.Row, { className: "d-flex justify-content-center row-cols-auto g-5" }, props.children))));
};
exports.default = ImageContainer;
