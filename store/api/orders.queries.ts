import {axiosInstance} from "./axios";
import {Product} from "../../models/Product/Product";

export const fetchOrdersFromDb = () => {
    return axiosInstance.get("/orders.json")
}

export const saveOrderInDb = ({userId, purchases, date, price}:
                                  { userId: string, purchases: { product: Product, amount: number }[], date: Date, price: number }): any => {
    return axiosInstance.post("/orders.json", {userId, purchases, date, price})
}
