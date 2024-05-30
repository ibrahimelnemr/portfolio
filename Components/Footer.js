"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Footer = () => {
    return (react_1.default.createElement("footer", { className: "row border container-fluid p-0 m-0" },
        react_1.default.createElement("div", { className: "col-12" },
            react_1.default.createElement("div", { className: "text-center p-2 m-2 fw-lighter fs-5" }, "Built with React and Boostrap"))));
};
exports.default = Footer;
