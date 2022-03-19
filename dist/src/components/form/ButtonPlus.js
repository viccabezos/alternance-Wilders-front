"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
function ButtonPlus() {
    const [inputList, setInputList] = (0, react_1.useState)([
        { skillName: " ", skillVote: " " },
    ]);
    // const [valueSelector, setValueSelector] = useState();
    const handleAddInput = () => {
        setInputList([...inputList, { skillName: " ", skillVote: " " }]);
    };
    const handleRemoveClick = (index) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };
    return (react_1.default.createElement("div", { className: "App bg-red-300 p-2" },
        inputList.map((x, i) => {
            return (react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: "flex gap-5" },
                    react_1.default.createElement("label", { htmlFor: "" }, "skill name"),
                    react_1.default.createElement("input", { name: "skillName", value: x.skillName, placeholder: "Node.js " }),
                    react_1.default.createElement("label", { htmlFor: "" }, "skill Vote"),
                    react_1.default.createElement("select", { name: "skillvote", id: "", defaultValue: 1 },
                        react_1.default.createElement("option", { value: "1" }, "1"),
                        react_1.default.createElement("option", { value: "2" }, "2"),
                        react_1.default.createElement("option", { value: "3" }, "3"),
                        react_1.default.createElement("option", { value: "4" }, "4"),
                        react_1.default.createElement("option", { value: "5" }, "5")),
                    react_1.default.createElement("div", { className: "btn-box" }, inputList.length !== 1 && (react_1.default.createElement("button", { className: "mr10", onClick: () => handleRemoveClick(i) }, "Remove -")))),
                react_1.default.createElement("div", null, inputList.length - 1 === i && (react_1.default.createElement("button", { onClick: handleAddInput }, "Add +")))));
        }),
        react_1.default.createElement("div", { className: "mt-20" }, JSON.stringify(inputList))));
}
exports.default = ButtonPlus;
