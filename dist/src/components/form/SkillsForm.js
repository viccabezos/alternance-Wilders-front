"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_final_form_1 = require("react-final-form");
const requests_1 = require("../../API/requests");
const ButtonPlus_1 = __importDefault(require("./ButtonPlus"));
const onSubmit = async (values) => {
    console.log(JSON.stringify(values, 0, 2));
    requests_1.wildersRequest.create(values).then((res) => {
        console.log(res);
    });
};
const required = (value) => (value ? undefined : "Required");
function SkillsForm() {
    const [addInputList, setAddInputList] = (0, react_1.useState)([
        { skillName: "", skillVote: "" },
    ]);
    const handleAddInput = () => {
        setAddInputList([...addInputList], { skillName: "", skillVote: "" });
    };
    return (React.createElement("div", null, addInputList.map((x, i) => {
        return (React.createElement(react_final_form_1.Form, { onSubmit: onSubmit, render: ({ handleSubmit, submitting }) => (React.createElement("form", { onSubmit: handleSubmit },
                React.createElement("div", { className: "flex gap-5 " },
                    React.createElement(react_final_form_1.Field, { name: "skill name", validate: required }, ({ input, meta }) => (React.createElement("div", { className: "flex gap-5" },
                        React.createElement("label", null, "Skill name"),
                        React.createElement("input", { ...input, className: "border-b-2 border-red-300", type: "text", placeholder: "react.js" }),
                        meta.error && meta.touched && (React.createElement("span", null, meta.error))))),
                    React.createElement("div", { className: "flex gap-5" },
                        React.createElement("label", null, "Votes"),
                        React.createElement(react_final_form_1.Field, { name: "Votes", component: "select" },
                            React.createElement("option", null),
                            React.createElement("option", { value: "1" }, "1"),
                            React.createElement("option", { value: "2" }, "2"),
                            React.createElement("option", { value: "3" }, "3"),
                            React.createElement("option", { value: "3" }, "4"),
                            React.createElement("option", { value: "3" }, "5"))),
                    React.createElement("div", { className: "" }, addInputList.length - 1 === i && (React.createElement("button", { onClick: handleAddInput, className: "bg-red-300 rounded-md shadow-md hover:bg-red-200" }, "add new skill"))),
                    React.createElement("div", { className: "" }, addInputList.length !== 1 && (React.createElement("button", { type: "", onClick: handleAddInput, className: "bg-red-300 rounded-md shadow-md hover:bg-red-200" }, "remove skill")))),
                React.createElement("div", { className: "mt-20" },
                    "button plus comp",
                    React.createElement(ButtonPlus_1.default, null)),
                React.createElement("div", { className: "mt-10" },
                    React.createElement("button", { type: "submit", disabled: submitting, className: "border rounded-md px-4 py-2 shadow-md bg-gray-200 hover:bg-gray-300" }, "Register")))) }));
    })));
}
exports.default = SkillsForm;
