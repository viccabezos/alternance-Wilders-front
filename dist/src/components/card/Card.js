"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const Avatar_png_1 = __importDefault(require("../../img/Avatar.png"));
const skills_1 = __importDefault(require("../skills/skills"));
function Card({ cards, wilder }) {
    let navigate = (0, react_router_dom_1.useNavigate)();
    return (React.createElement("div", { className: "flex gap-5  " }, cards.map((wilder) => (React.createElement("div", { key: wilder._id, className: "flex flex-col border border-black  rounded-md" },
        React.createElement("div", null,
            React.createElement("img", { alt: "avatar", src: Avatar_png_1.default })),
        React.createElement("div", { className: "text-center" },
            React.createElement("p", null, wilder.name),
            React.createElement("p", null, wilder.city)),
        React.createElement("div", null,
            React.createElement("p", null, wilder.description)),
        React.createElement(skills_1.default, { ...wilder }),
        React.createElement("div", null,
            React.createElement("button", { onClick: () => navigate("wilder/:id") }, "See more")))))));
}
exports.default = Card;
