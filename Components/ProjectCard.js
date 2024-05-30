"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const ProjectCard = (props) => {
    return (react_1.default.createElement(react_bootstrap_1.Col, { sm: 12, md: 6, lg: 6 },
        react_1.default.createElement(react_bootstrap_1.Card, { className: "shadow-lg p-3 mb-5 rounded bg-light text-dark border" },
            react_1.default.createElement(react_bootstrap_1.Card.Body, null,
                react_1.default.createElement("div", { className: "h1 mb-3" }),
                react_1.default.createElement("h3", { className: "card-title mb-3" }, props.cardTitle),
                react_1.default.createElement("p", { className: "card-text" }, props.cardText),
                react_1.default.createElement("a", { href: props.githubLink, target: "_blank", className: "btn btn-outline-secondary" },
                    react_1.default.createElement("i", { className: "fab fa-github" }),
                    " View on Github")))));
};
exports.default = ProjectCard;
