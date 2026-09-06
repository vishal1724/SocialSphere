import api from "./api.js";

// Placeholder
export const fetchUser = (id) => api.get(`/users/${id}`);
export const updateUser = (id, data) => api.put(`/users/${id}`, data);
export const followUser = (id) => api.post(`/users/${id}/follow`);
