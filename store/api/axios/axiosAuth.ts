import axios from "axios";
import {Product} from "../../../models/Product/Product";

const baseUrl = "https://identitytoolkit.googleapis.com/v1";

export const axiosAuthInstance = axios.create({
    baseURL: baseUrl,
// @ts-ignore
    "Content-Type": "application/json"
});

axiosAuthInstance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

