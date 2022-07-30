import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT_URL || "http://localhost:8080",
});
