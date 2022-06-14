import axios from "axios";

export default axios.create({
  baseURL: process.env.API_ENDPOINT_URL || "http://localhost:8080",
});
