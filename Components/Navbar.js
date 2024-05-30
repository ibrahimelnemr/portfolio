"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const Navbar = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_bootstrap_1.Row, null,
            react_1.default.createElement("nav", { className: "navbar navbar-expand-lg bg-light navbar-light" },
                react_1.default.createElement("div", { className: "container" },
                    react_1.default.createElement("a", { href: "#", className: "navbar-brand nav-item" }, "Ibrahim El Nemr | Portfolio"),
                    react_1.default.createElement("button", { className: "navbar-toggler", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navmenu" },
                        react_1.default.createElement("span", { className: "navbar-toggler-icon" })),
                    react_1.default.createElement("div", { className: "collapse navbar-collapse", id: "navmenu" },
                        react_1.default.createElement("ul", { className: "navbar-nav ms-auto" },
                            react_1.default.createElement("li", { className: "nav-item" },
                                react_1.default.createElement("a", { href: "#about", className: "nav-link nav-item" }, "About")),
                            react_1.default.createElement("li", { className: "nav-item" },
                                react_1.default.createElement("a", { href: "#projects", className: "nav-link nav-item" }, "Projects")),
                            react_1.default.createElement("li", { className: "nav-item" },
                                react_1.default.createElement("a", { href: "#skills", className: "nav-link nav-item" }, "Skills")),
                            react_1.default.createElement("li", { className: "nav-item" },
                                react_1.default.createElement("a", { href: "#certifications", className: "nav-link nav-item" }, "Certifications")),
                            react_1.default.createElement("li", { className: "nav-item" },
                                react_1.default.createElement("a", { href: "#contact", className: "nav-link nav-item" }, "Contact")))))))));
};
exports.default = Navbar;
