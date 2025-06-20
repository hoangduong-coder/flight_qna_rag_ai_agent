import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

export const postMessage = async (query: string) => {
  const response = await axios.post(`${API_BASE_URL}/chat`, {
    query: query,
    sendTime: new Date(),
  });
  return response.data;
};
