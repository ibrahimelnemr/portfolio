"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.scss");
require("./Styles/theme.scss");
const MainPage_1 = __importDefault(require("./Pages/MainPage"));
const react_1 = __importDefault(require("react"));
function App() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(MainPage_1.default, null)));
}
exports.default = App;
