import * as constants from '../constants/orders.constants';
import {Product} from "../../models/Product";
import {Order} from "../../models/Order";

export const addOrder = (payload: { product: Product, amount: number }[]) => {
    return {
        type: constants.ADD_ORDER,
        payload: {
            orderItems: payload
        }
    }
}

export const fetchOrdersRequest = () => {
    return {
        type: constants.FETCH_ORDERS_FAILURE,
    }
}

export const fetchOrdersSuccess = (payload: Order[]) => {
    return {
        type: constants.FETCH_ORDERS_SUCCESS,
        payload: {
            orderItems: payload
        }
    }
}

export const fetchOrdersFailure = (e: any) => {
    return {
        type: constants.FETCH_ORDERS_FAILURE,
        payload: e
    }
}
