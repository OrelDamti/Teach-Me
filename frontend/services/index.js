import axios from "axios";
import config from "./config";

export const axiosApi = () => {
  axios.create({
    baseURL: config.SERVER_API,
  });
};
