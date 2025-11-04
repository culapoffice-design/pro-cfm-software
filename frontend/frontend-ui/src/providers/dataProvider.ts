import { DataProvider } from "@refinedev/core";
import axios from "axios";

const API_URL = "http://localhost:8000";

export const dataProvider: DataProvider = {
  getList: async ({ resource }) => {
    const { data } = await axios.get(`${API_URL}/${resource}`);
    return { data, total: data.length } as any;
  },
  create: async ({ resource, variables }) => {
    const { data } = await axios.post(`${API_URL}/${resource}`, variables);
    return { data } as any;
  },
  update: async ({ resource, id, variables }) => {
    const { data } = await axios.put(`${API_URL}/${resource}/${id}`, variables);
    return { data } as any;
  },
  deleteOne: async ({ resource, id }) => {
    const { data } = await axios.delete(`${API_URL}/${resource}/${id}`);
    return { data } as any;
  },
  getOne: async ({ resource, id }) => {
    const { data } = await axios.get(`${API_URL}/${resource}/${id}`);
    return { data } as any;
  },
} as unknown as DataProvider;
