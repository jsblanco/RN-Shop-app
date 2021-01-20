import {takeLatest, call, put} from "redux-saga/effects";
import * as constants from "../constants/orders.constants";
//import { getTweetsByUsername, getTweetsByKeyword } from "../utils/server-queries";
import {
    fetchOrdersFailure,
    fetchOrdersRequest, fetchOrdersSuccess
} from "../actions/orders.actions";

function* getOrdersByUserIdEffect({payload}: { type: string, payload: string }) {
    try {
        yield call(fetchOrdersRequest)
        const tweets = yield call(fetchUserOrders, payload);
        yield put(fetchOrdersSuccess(tweets));
    } catch (e) {
        console.error(e);
        yield put(fetchOrdersFailure(e));
    }
}


function* orderSagas() {
    yield takeLatest(constants.FETCH_ORDERS_REQUEST, getOrdersByUserIdEffect);
}

export default orderSagas;

