import axios from "axios";

const api = axios.create({
  baseURL: "https://api.example.com", // replace with your API base URL
});

export const getExampleData = async () => {
  const response = await api.get("/example-endpoint");
  return response.data;
};