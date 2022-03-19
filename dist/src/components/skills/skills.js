"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Skills({ skills }) {
    return (React.createElement("div", { className: "flex flex-col items-center  bg-red-200 text-center" }, skills.map((skill) => (React.createElement("div", { key: skill._id, className: "flex gap-4 " },
        React.createElement("p", null, skill.title),
        React.createElement("p", null, skill.votes))))));
}
exports.default = Skills;
