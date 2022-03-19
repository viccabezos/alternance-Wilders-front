"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function Profile(wilder) {
    let navigate = (0, react_router_dom_1.useNavigate)();
    let { id } = (0, react_router_dom_1.useParams)();
    return (react_1.default.createElement("div", null,
        `PROFILE of ${id}`,
        "HELLOOOOO",
        react_1.default.createElement("button", { onClick: () => navigate("/") }, "CHANGE TO HOME PAGE"),
        react_1.default.createElement("p", null, wilder.name),
        react_1.default.createElement("p", null, wilder.city),
        react_1.default.createElement("p", null, wilder.description)));
}
exports.default = Profile;
