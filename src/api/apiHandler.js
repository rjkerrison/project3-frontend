import axios from "axios";

console.log(process.env.REACT_APP_BACKEND_URL);

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true,
});

service.searchItineraries = async (q) => {
  try {
    const { data } = await service.get(`/itineraries?q=${q || ""}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default service;
