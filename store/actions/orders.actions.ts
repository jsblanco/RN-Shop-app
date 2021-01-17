import * as constants from '../constants/orders.constants';
import {Product} from "../../models/Product";

export const addOrder = (payload: { product: Product, amount: number }[]) => {
    return {
        type: constants.ADD_ORDER,
        payload: {
            orderItems: payload
        }
    }
}
