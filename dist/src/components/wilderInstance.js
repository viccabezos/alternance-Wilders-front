"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_hook_form_1 = require("react-hook-form");
const react_router_dom_1 = require("react-router-dom");
const wilders_1 = require("../requests/wilders");
const react_1 = require("react");
const im_1 = require("react-icons/im");
const BackButton_1 = __importDefault(require("./BackButton"));
const PopInfo_1 = __importDefault(require("./PopInfo"));
const ModalAddSkill_1 = __importDefault(require("./ModalAddSkill"));
const react_notify_toast_1 = require("react-notify-toast");
const WilderInstance = () => {
    const { wilderId, editing } = (0, react_router_dom_1.useParams)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [wilderData, setWilderData] = (0, react_1.useState)({});
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [modal, setModal] = (0, react_1.useState)(false);
    const toggleModal = () => {
        setModal(!modal);
    };
    const { control, register, handleSubmit, setValue, formState: { errors }, } = (0, react_hook_form_1.useForm)();
    const { fields, append, update } = (0, react_hook_form_1.useFieldArray)({
        control,
        name: "skills",
    });
    (0, react_1.useEffect)(() => {
        const findWilder = async () => {
            const wilder = await wilders_1.wildersRequest.find(wilderId);
            !wilder.data.success && navigate("/404");
            setLoading(false);
            setWilderData(wilder.data.result);
        };
        if (editing !== "0") {
            findWilder();
        }
        else {
            setLoading(false);
        }
    }, [navigate, wilderId, editing]);
    (0, react_1.useEffect)(() => {
        const { name, city } = wilderData;
        setValue("name", name);
        setValue("city", city);
        wilderData.skills?.map((skill) => {
            return !fields.find((e) => e._id === skill._id) && append(skill);
        });
    }, [wilderData, append, fields, setValue]);
    const onSubmit = async (data) => {
        let updateWilder;
        if (editing !== "0") {
            updateWilder = await wilders_1.wildersRequest.update({ _id: wilderId, ...data });
        }
        else {
            updateWilder = await wilders_1.wildersRequest.create(data);
        }
        if (updateWilder.data.success) {
            if (editing !== "0") {
                react_notify_toast_1.notify.show("Wilder édité avec succès!");
            }
            else {
                react_notify_toast_1.notify.show("Le wilder a été créé avec succès!");
                navigate(`/wilder/instance/1/${updateWilder.data.result._id}`);
            }
        }
        else {
            react_notify_toast_1.notify.show(`Une erreur s'est produite : ${updateWilder.data.result}`);
        }
    };
    const removeSkill = (skillId) => {
        setWilderData((wilderData) => {
            let newSkillsList = wilderData.skills.filter((e) => e._id !== skillId);
            setValue("skills", newSkillsList);
            return { ...wilderData, skills: newSkillsList };
        });
    };
    const addSkill = (skill) => {
        delete skill["_id"];
        let index = fields.findIndex((e) => e.title === skill.title);
        index !== -1 ? update(index, skill) : append(skill);
        toggleModal();
    };
    loading && React.createElement(PopInfo_1.default, { message: "R\u00E9cup\u00E9ration des donn\u00E9es en cours" });
    return (React.createElement("div", { className: "sm:w-full md:w-96 p-8 mx-auto" },
        React.createElement(BackButton_1.default, null),
        React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
            React.createElement("div", { className: "mb-6" },
                React.createElement("label", { htmlFor: "large-input", className: "block mb-2 text-sm font-medium text-gray-900 " }, "Nom du wilder"),
                React.createElement("input", { type: "text", "aria-invalid": errors.name ? "true" : "false", ...register("name", { required: true }), className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" }),
                errors.name && (React.createElement("span", { className: "text-wildcolor font-medium" }, "Ce champs est obligatoire!"))),
            React.createElement("div", { className: "mb-6" },
                React.createElement("label", { htmlFor: "base-input", className: "block mb-2 text-sm font-medium text-gray-900" }, "Ville du Wilder"),
                React.createElement("input", { type: "text", ...register("city"), className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" })),
            React.createElement("div", null,
                React.createElement("label", { htmlFor: "skills-list", className: "flex mb-2 text-sm font-medium text-gray-900 dark:text-gray-900 justify-between" },
                    "Skills du Wilder",
                    React.createElement("button", { onClick: toggleModal, type: "button", className: " w-8 h-8 flex items-center  o-underline rounded-full p-2 text-white bg-wildcolor" },
                        React.createElement(im_1.ImPlus, { className: "text-xl" }))),
                React.createElement("div", { name: "skills-list", className: "flex flex-row flex-wrap overflow-auto max-h-64" }, fields.length ? (fields.map((field, index) => (React.createElement("div", { className: "flex flex-wrap justify-center space-x-2 mr-2", key: index, onClick: () => removeSkill(field._id) },
                    React.createElement("span", { className: "px-4 py-2 rounded-full text-gray-500 border border-gray-300 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease" },
                        field.title,
                        React.createElement("button", { type: "button", ...register(`skills.${index}.title`), className: "bg-transparent hover focus:outline-none" },
                            React.createElement(im_1.ImCross, { className: "ml-2" }))))))) : (React.createElement(PopInfo_1.default, { className: "mx-auto", message: "Aucun skills pour ce wilder" })))),
            React.createElement("button", { className: "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 mt-4 px-4 rounded inline-flex items-center w-full justify-center", type: "submit" },
                React.createElement(im_1.ImCheckmark2, { className: "mr-2" }),
                " Valider")),
        modal && React.createElement(ModalAddSkill_1.default, { addSkill: addSkill, toggleModal: toggleModal })));
};
exports.default = WilderInstance;
