import axios from "axios";
import {Product} from "../../../models/Product/Product";

const baseUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBANhzKXlQjW3l1KXqGttm1DuswCGKVM5E";

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

// declare module 'axios' {
//     export interface AxiosRequestConfig {
//         email: string,
//         password: string,
//         returnSecureToken: true
//     }
// }
