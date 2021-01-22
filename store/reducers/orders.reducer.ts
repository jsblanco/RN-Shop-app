import * as constants from '../constants/orders.constants'
import {Order} from "../../models/Order/Order";
import {OrderAdapter} from "../../models/Order/Order.adapter";

type StateType = {
    orders: Order[]
    error: string
}

const initialState: StateType = {
    orders: [],
    error: ''
}
const orderAdaptor = new OrderAdapter()

const ordersReducer = (state: StateType = initialState, {type, payload}: { type: string, payload: any }) => {
    let order: Order;
    switch (type) {
        case constants.SAVE_ORDER_SUCCESS:
            return {...state, orders: [payload, ...state.orders], error: ''}
        case constants.FETCH_ORDERS_SUCCESS:
            return {...state, error: '', orders: payload}
        case constants.SAVE_ORDER_FAILURE:
        case constants.FETCH_ORDERS_FAILURE:
            return {...state, error: 'Orders could not be retrieved'}
        default:
            return {...state, error: ''};
    }
}

export default ordersReducer;
