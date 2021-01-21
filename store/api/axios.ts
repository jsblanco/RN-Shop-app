import axios from "axios";
import {Product} from "../../models/Product/Product";

const baseUrl = 'https://jorge-shop-app-default-rtdb.europe-west1.firebasedatabase.app';

export const axiosInstance = axios.create({
    baseURL: baseUrl,
// @ts-ignore
    "Content-Type": "application/json"
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

declare module 'axios' {
    export interface AxiosRequestConfig {
        title?: string,
        userId?: string,
        description?: string,
        imageUrl?: string,
        price?: string | number
        id?: string
        purchases?: { product: Product; amount: number;}[]
        date?: Date
    }
}
