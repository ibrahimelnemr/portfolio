"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const About_1 = __importDefault(require("../Sections/About"));
const Projects_1 = __importDefault(require("../Sections/Projects"));
const Skills_1 = __importDefault(require("../Sections/Skills"));
const Certifications_1 = __importDefault(require("../Sections/Certifications"));
const Contact_1 = __importDefault(require("../Sections/Contact"));
const Navbar_1 = __importDefault(require("../Components/Navbar"));
const Data_1 = require("../Data/Data");
const MainPage = () => {
    return (react_1.default.createElement("main", { id: "main", className: "container-fluid d-flex flex-column min-vh-100 p-0" },
        react_1.default.createElement(Navbar_1.default, null),
        react_1.default.createElement(About_1.default, null),
        react_1.default.createElement(Projects_1.default, { cards: Data_1.ProjectCards }),
        react_1.default.createElement(Skills_1.default, null),
        react_1.default.createElement(Certifications_1.default, { cards: Data_1.CertificationCards }),
        react_1.default.createElement(Contact_1.default, null)));
};
exports.default = MainPage;
