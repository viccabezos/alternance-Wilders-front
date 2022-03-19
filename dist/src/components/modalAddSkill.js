"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_hook_form_1 = require("react-hook-form");
const im_1 = require("react-icons/im");
const rc_rate_1 = __importDefault(require("rc-rate"));
require("rc-rate/assets/index.css");
const ModalAddSkill = ({ addSkill, toggleModal }) => {
    const { register, handleSubmit, setValue, formState: { errors }, } = (0, react_hook_form_1.useForm)();
    const onSubmit = (data) => addSkill(data);
    const onRateChange = (vote) => {
        setValue("votes", vote);
    };
    return (React.createElement("div", { class: "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full", id: "my-modal" },
        React.createElement("div", { className: "relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" },
            React.createElement("button", { onClick: toggleModal, className: "-m-4 w-12 h-12 flex items-center justify-center text-center no-underline rounded-full p-2 text-white bg-wildcolor absolute top-0 right-0" },
                React.createElement(im_1.ImCross, { className: "text-xl" })),
            React.createElement("div", { className: "mt-3 text-center" },
                React.createElement("div", { className: "mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-wildcolorlight text-gray-600" },
                    React.createElement(im_1.ImTrophy, null)),
                React.createElement("h3", { className: "text-lg leading-6 font-medium text-gray-900" }, "Nouveau skill!"),
                React.createElement("div", { className: "mt-2 px-7 py-3" },
                    React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
                        React.createElement("input", { ...register("title", { required: true }), placeholder: "Titre du skill", className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center" }),
                        errors.title && (React.createElement("span", { className: "text-wildcolor font-medium" }, "Ce champs est obligatoire!")),
                        React.createElement(rc_rate_1.default, { defaultValue: 5, count: 10, character: ({ index }) => {
                                return index + 1;
                            }, className: "text-wildcolor", onChange: onRateChange }),
                        React.createElement("div", { className: "items-center px-4 py-3" },
                            React.createElement("button", { type: "submit", className: "px-4 py-2 bg-wildcolor text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-wildcolorlight focus:outline-none focus:ring-2 focus:ring-gray-300" }, "Ajouter"))))))));
};
exports.default = ModalAddSkill;
