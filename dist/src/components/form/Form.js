"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_final_form_1 = require("react-final-form");
const requests_1 = require("../../API/requests");
const onSubmit = async (values) => {
    console.log(JSON.stringify(values, 0, 2));
    requests_1.wildersRequest.create(values).then((res) => {
        console.log(res);
    });
};
const required = (value) => (value ? undefined : "Required");
const MyForm = () => (React.createElement(react_final_form_1.Form, { onSubmit: onSubmit, render: ({ handleSubmit, submitting }) => (React.createElement("form", { onSubmit: handleSubmit },
        React.createElement(react_final_form_1.Field, { name: "name", validate: required }, ({ input, meta }) => (React.createElement("div", null,
            React.createElement("label", null, "Name"),
            React.createElement("input", { ...input, type: "text", placeholder: "Tom" }),
            meta.error && meta.touched && React.createElement("span", null, meta.error)))),
        React.createElement(react_final_form_1.Field, { name: "city", validate: required }, ({ input, meta }) => (React.createElement("div", null,
            React.createElement("label", null, "City"),
            React.createElement("input", { ...input, type: "text", placeholder: "Toronto" }),
            meta.error && meta.touched && React.createElement("span", null, meta.error)))),
        React.createElement(react_final_form_1.Field, { name: "description", validate: required }, ({ input, meta }) => (React.createElement("div", null,
            React.createElement("label", null, "Description"),
            React.createElement("input", { ...input, type: "text", placeholder: "lorem ipsum " }),
            meta.error && meta.touched && React.createElement("span", null, meta.error)))),
        React.createElement("div", null,
            React.createElement("button", { type: "submit", disabled: submitting, className: "border rounded-md px-4 py-2 shadow-md bg-gray-200 hover:bg-gray-300" }, "Register")))) }));
exports.default = MyForm;
