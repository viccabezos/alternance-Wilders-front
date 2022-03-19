"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const im_1 = require("react-icons/im");
const BackButton = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { className: "inline-flex items-center text-wildcolor mb-5", onClick: () => navigate(-1) },
            React.createElement(im_1.ImArrowLeft2, { className: "mr-2" }),
            " Revenir en arri\u00E8re")));
};
exports.default = BackButton;
