"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const im_1 = require("react-icons/im");
const Skills_1 = __importDefault(require("./Skills"));
const react_1 = require("react");
const wilders_1 = require("./../requests/wilders");
const react_router_dom_1 = require("react-router-dom");
const BackButton_1 = __importDefault(require("./BackButton"));
const PopInfo_1 = __importDefault(require("./PopInfo"));
const Wilder = (props) => {
    const [state, setState] = (0, react_1.useState)({});
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { wilderId } = (0, react_router_dom_1.useParams)();
    (0, react_1.useEffect)(() => {
        const findWilder = async () => {
            const wilder = await wilders_1.wildersRequest.find(wilderId);
            !wilder.data.success && navigate("/404");
            setState(wilder.data.result);
        };
        findWilder();
    }, [navigate, wilderId]);
    if (!Object.keys(state).length)
        return React.createElement(PopInfo_1.default, { message: "R\u00E9cup\u00E9ration des donn\u00E9es en cours" });
    return (React.createElement("div", { className: "max-w-md mx-auto px-4 mt-10" },
        React.createElement(BackButton_1.default, null),
        React.createElement("div", { className: "relative m-0 shadow-lg flex bg-white" },
            React.createElement("div", { className: "flex-no-shrink" },
                React.createElement("img", { alt: "", className: "w-64 h-64 block mx-auto", src: "/images/head.png" })),
            React.createElement("div", { className: "flex-1 card-block relative" },
                React.createElement("div", { className: "p-6" },
                    React.createElement("h4", { className: "font-medium text-2xl mb-3" }, state.name),
                    React.createElement("p", { className: "leading-normal" },
                        "Ville : ",
                        state.city),
                    state.skills.length ? (React.createElement(Skills_1.default, { skills: state.skills })) : (React.createElement("div", { className: "px-6 py-4 flex-1 " },
                        React.createElement("p", null, "Aucun Skills"))),
                    React.createElement(react_router_dom_1.NavLink, { className: "-m-4 w-12 h-12 flex items-center justify-center text-center no-underline rounded-full p-2 text-white bg-wildcolor absolute top-0 right-0", to: `/wilder/instance/1/${wilderId}` },
                        React.createElement(im_1.ImPencil, { className: "text-xl" })))))));
};
exports.default = Wilder;
