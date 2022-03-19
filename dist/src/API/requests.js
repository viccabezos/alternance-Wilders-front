"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wildersRequest = void 0;
const axios_1 = __importDefault(require("axios"));
const API_URL = "http://localhost:3002/api";
exports.wildersRequest = {
    getAll: () => axios_1.default
        .get(`${API_URL}/wilder/all`)
        .then((res) => {
        console.log("GET ALL", res.data);
        return res.data;
    })
        .catch((err) => {
        console.log("error get all", err);
    }),
    getOne: (id) => axios_1.default
        .get(`${API_URL}/wilder/find/${id}`)
        .then((res) => {
        console.log("GET ONE", res.data);
        return res.data;
    })
        .catch((err) => {
        console.log("error get one", err);
    }),
    create: (values) => axios_1.default
        .post(`${API_URL}/wilder/create`, values)
        .then((res) => {
        return res.data;
    })
        .catch((err) => {
        console.log("error create wilder", err);
    }),
    update: (values) => axios_1.default
        .put(`${API_URL}/wilder/update`, values)
        .then((res) => {
        return res.data;
    })
        .catch((err) => {
        console.log("error update wilder", err);
    }),
    delete: (data) => axios_1.default
        .delete(`${API_URL}/wilder/delete`, { data: { ...data } })
        .then((res) => res)
        .catch((err) => {
        console.log("error deleting wilder", err);
    }),
};
