"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("@fortawesome/fontawesome-free/css/all.css");
const Section_1 = __importDefault(require("../Components/Section"));
const ProjectCard_1 = __importDefault(require("../Components/ProjectCard"));
const Projects = (props) => {
    return (react_1.default.createElement(Section_1.default, { sectionName: "Projects" },
        react_1.default.createElement(react_1.default.Fragment, null, props.cards ?
            props.cards.map((card) => {
                var _a, _b;
                return (react_1.default.createElement(ProjectCard_1.default, { cardTitle: card.title, cardText: (_a = card.text) !== null && _a !== void 0 ? _a : "", githubLink: (_b = card.link) !== null && _b !== void 0 ? _b : "" }));
            })
            : "")));
};
exports.default = Projects;
