import api from "./api.js";

// Placeholder
export const fetchPosts = () => api.get("/posts");
export const createPost = (data) => api.post("/posts", data);
export const likePost = (id) => api.post(`/posts/${id}/like`);
