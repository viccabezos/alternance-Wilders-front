"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function NavBar() {
    return (react_1.default.createElement("div", { className: "bg-gray-500 text-white text-2xl p-4 text-center" },
        react_1.default.createElement("p", { className: "text-white" }, "Wilder's Book"),
        react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "Home"),
        react_1.default.createElement(react_router_dom_1.Link, { to: "/profile" }, "profile"),
        react_1.default.createElement(react_router_dom_1.Link, { to: "/register" }, "Register")));
}
exports.default = NavBar;
