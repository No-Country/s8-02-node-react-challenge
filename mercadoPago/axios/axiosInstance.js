import axios from "axios";

export const baseUrl = axios.create({
  baseURL: "https://s8-02-node-react-challenge-api.onrender.com",
});
