"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Form_1 = __importDefault(require("../components/form/Form"));
const SkillsForm_1 = __importDefault(require("../components/form/SkillsForm"));
function NewWilder(props) {
    return (react_1.default.createElement("div", { className: "px-20 flex flex-col items-center" },
        react_1.default.createElement("p", { className: "mt-20" }, "NEW WILDER FORM"),
        react_1.default.createElement("div", { className: "mt-10" },
            react_1.default.createElement(Form_1.default, null)),
        react_1.default.createElement("div", { className: "mt-20" },
            react_1.default.createElement(SkillsForm_1.default, null))));
}
exports.default = NewWilder;
