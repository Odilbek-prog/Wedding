import axios from "axios";

const api = axios.create({
  baseURL: "https://wedding-backend-8a8r.onrender.com/api",
});

export default api;
