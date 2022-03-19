import axios from "axios";
import { Wilder } from "../types/index";

const API_URL = "http://localhost:3002/api";

export const wildersRequest = {
  getAll: () =>
    axios
      .get(`${API_URL}/wilder/all`)
      .then((res) => {
        console.log("GET ALL", res.data);
        return res.data;
      })
      .catch((err) => {
        console.log("error get all", err);
      }),

  getOne: (id: string | undefined) =>
    axios
      .get(`${API_URL}/wilder/find/${id}`)
      .then((res) => {
        console.log("GET ONE REQUEST", res.data);
        return res.data;
      })
      .catch((err) => {
        console.log("error get one", err);
      }),

  create: (wilder: Wilder) =>
    axios
      .post(`${API_URL}/wilder/create`, {
        name: wilder.name,
        city: wilder.city,
        description: wilder.description,
        skills: wilder.skills,
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log("error create wilder", err);
      }),

  update: (values: Wilder) =>
    axios
      .put(`${API_URL}/wilder/update`, values)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log("error update wilder", err);
      }),
  delete: (data: Wilder) =>
    axios
      .delete(`${API_URL}/wilder/delete`, { data: { ...data } })
      .then((res) => res)
      .catch((err) => {
        console.log("error deleting wilder", err);
      }),
};
