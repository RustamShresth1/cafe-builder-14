import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api/cafes",
});

export const getCafes = () => API.get("/");
export const getCafeById = (id) => API.get(`/${id}`);
export const addReview = (id, data) => API.post(`/${id}/review`, data);
export const updatePlan = (id, plan) => API.put(`/${id}/plan`, { plan });
