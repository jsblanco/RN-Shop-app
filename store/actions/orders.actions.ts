import * as constants from '../constants/orders.constants';
import {Order} from "../../models/Order/Order";
import {Product} from "../../models/Product/Product";

export const fetchOrders = {
    request: () => {
        return {
            type: constants.FETCH_ORDERS_REQUEST,
        }
    },

    success: (payload: Order[]) => {
        return {
            type: constants.FETCH_ORDERS_SUCCESS,
            payload:  payload
        }
    },

    failure: (e: any) => {
        return {
            type: constants.FETCH_ORDERS_FAILURE,
            payload: e
        }
    }
}

export const saveOrder = {
    request: (order: { product: Product, amount: number }[]) => {
        return {
            type: constants.SAVE_ORDER_REQUEST,
            payload: order
        }
    },

    success: (payload: Order) => {
        return {
            type: constants.SAVE_ORDER_SUCCESS,
            payload:  payload
        }
    },

    failure: (e: any) => {
        return {
            type: constants.SAVE_ORDER_FAILURE,
            payload: e
        }
    }
}
