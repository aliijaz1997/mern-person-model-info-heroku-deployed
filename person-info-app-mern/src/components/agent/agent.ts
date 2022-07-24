import axios, { AxiosResponse } from "axios";
import { Person } from "../types/person";
axios.defaults.baseURL = "/api/v1";

const responseBody = <T>(response: AxiosResponse<T>): T => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
};

export const PersonsApis = {
  list: () => requests.get<Person[]>("/persons"),
  create: (payload: Omit<Person, "_id">) =>
    requests.post<void>(`/persons/add`, payload),
};
