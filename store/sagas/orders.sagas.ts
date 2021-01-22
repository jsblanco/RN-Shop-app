import {takeLatest, call, put, select} from "redux-saga/effects";
import * as constants from "../constants/orders.constants";
import {fetchOrders, saveOrder} from "../actions/orders.actions";
import {Product} from "../../models/Product/Product";
import {fetchOrdersFromDb, saveOrderInDb} from "../api/orders.queries";
import {OrderAdapter} from "../../models/Order/Order.adapter";
import {RootState} from "../store";

const orderAdapter = new OrderAdapter();
const getToken = (state: RootState) => state.auth.token
const getUserId = (state: RootState) => state.auth.userId

function* fetchOrdersEffect() {
    try {
        const orderArr = [];
        const fetchedOrders = yield call(fetchOrdersFromDb);
        for (let key in fetchedOrders) {
            const order = orderAdapter.adapt({id: key, userId: 'u3', ...fetchedOrders[key]})
            orderArr.unshift(order)
        }
        yield put(fetchOrders.success(orderArr));
    } catch (e) {
        console.error(e);
        yield put(fetchOrders.failure(e));
    }
}

function* saveOrderEffect({payload}: { type: string, payload: { product: Product, amount: number }[] }) {
    try {
        const date = new Date();
        let price = 0;
        payload.map(item => price += item.product.price * item.amount)
        const orderId = yield call(saveOrderInDb, {userId: 'u3', purchases: payload, date, price});
        const order = orderAdapter.adapt({id: orderId.name, userId: 'u3', date, purchases: payload, price})
        yield put(saveOrder.success(order));
    } catch (e) {
        console.error(e);
        yield put(saveOrder.failure(e));
    }
}


function* orderSagas() {
    yield takeLatest(constants.SAVE_ORDER_REQUEST, saveOrderEffect);
    yield takeLatest(constants.FETCH_ORDERS_REQUEST, fetchOrdersEffect);
}

export default orderSagas;

