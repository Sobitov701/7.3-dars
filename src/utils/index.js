import axios from "axios";

const Url = "https://dummyjson.com";

export const axiosInstance = axios.create({
  baseURL: Url,
});
