import axios from "axios";

const Url = "https://dummyjson.com";

export const AxiosInstance = axios.create({
  Url,
});
