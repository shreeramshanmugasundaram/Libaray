import axios from "axios";

const API = axios.create({ baseURL: "" });

export const contact = (formData) => API.post("/contact", formData);
export const email = (formData) => API.post("/email", formData);
// shreeram
