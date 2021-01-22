import {axiosInstance} from "./axios/axios";
import {Product} from "../../models/Product/Product";

export const fetchOrdersFromDb = ({userId}: {userId: string}) => {
    return axiosInstance.get(`/orders/${userId}.json`)
}

export const saveOrderInDb = ({userId, purchases, date, price, token}:
                                  { userId: string, purchases: { product: Product, amount: number }[], date: Date, price: number, token: string }) => {
    return axiosInstance.post(`/orders.json?auth=${token}`, {userId, purchases, date, price})
}
