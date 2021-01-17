import * as constants from '../constants/orders.constants'
import {Order} from "../../models/Order";

type StateType = {
    orders: Order[]
}

const initialState: StateType = {
    orders: []
}

const ordersReducer = (state: StateType = initialState, {type, payload}: { type: string, payload: any }) => {
    let order: Order;
    switch (type) {
        case constants.ADD_ORDER:
            const id = new Date().getTime().toString();
            order = new Order(id, payload.orderItems, new Date())
            return {...state, orders: [...state.orders, order]}
        default:
            return {...state};
    }
}

export default ordersReducer;
