"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Section_1 = __importDefault(require("../Components/Section"));
const CertificationCard_1 = __importDefault(require("../Components/CertificationCard"));
const Certifications = (props) => {
    return (react_1.default.createElement(Section_1.default, { sectionName: "Certifications" }, props.cards
        ? props.cards.map((card) => {
            var _a, _b;
            return (react_1.default.createElement(CertificationCard_1.default, { cardTitle: card.title, bulletPoints: (_a = card.bulletPoints) !== null && _a !== void 0 ? _a : [], link: (_b = card.link) !== null && _b !== void 0 ? _b : "" }));
        })
        : ""));
};
exports.default = Certifications;
