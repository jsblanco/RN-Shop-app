import {takeLatest, call, put} from "redux-saga/effects";
import * as constants from "../constants/products.constants";
//import { getTweetsByUsername, getTweetsByKeyword } from "../utils/server-queries";
import {
    fetchOrdersFailure,
    fetchOrdersRequest, fetchOrdersSuccess
} from "../actions/orders.actions";

function* createProductEffect({payload}: { type: string, payload: string }) {
    try {
        // yield call(fetchOrdersRequest)
        const tweets = yield call(createProductInDb, payload);
        yield put(fetchOrdersSuccess(tweets));
    } catch (e) {
        console.error(e);
        yield put(fetchOrdersFailure(e));
    }
}


function* orderSagas() {
    yield takeLatest(constants.CREATE_PRODUCT, getOrdersByUserIdEffect);
}

export default orderSagas;

