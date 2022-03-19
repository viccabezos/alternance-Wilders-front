"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Card_1 = __importDefault(require("../components/card/Card"));
const requests_1 = require("../API/requests");
Home.propTypes = {};
function Home() {
    const [cards, setCards] = (0, react_1.useState)([]);
    const [wilder, setWilder] = (0, react_1.useState)({});
    (0, react_1.useEffect)(() => {
        const recupData = async () => {
            await requests_1.wildersRequest.getAll().then((res) => {
                console.log(res.result);
                setCards(res.result);
            });
            console.log(cards);
            await requests_1.wildersRequest.getOne().then((res) => {
                console.log("one wilder", res.result);
                setWilder(res.result);
            });
        };
        recupData();
    }, []);
    console.log("CARDS", cards);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("p", null, "HOME PAGE"),
        react_1.default.createElement("div", { className: "mt-20" },
            react_1.default.createElement(Card_1.default, { cards: cards, wilder: wilder }))));
}
exports.default = Home;
