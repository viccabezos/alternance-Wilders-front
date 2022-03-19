"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const react_router_dom_1 = require("react-router-dom");
const Profile_1 = __importDefault(require("./pages/Profile"));
const NewWilder_1 = __importDefault(require("./pages/NewWilder"));
const navbar_1 = __importDefault(require("./components/navbar/navbar"));
const Home_1 = __importDefault(require("./pages/Home"));
function App() {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(navbar_1.default, null),
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(Home_1.default, null) }),
            React.createElement(react_router_dom_1.Route, { path: "/register", element: React.createElement(NewWilder_1.default, null) }),
            React.createElement(react_router_dom_1.Route, { path: "/profile/:id", element: React.createElement(Profile_1.default, null) }))));
}
exports.default = App;
