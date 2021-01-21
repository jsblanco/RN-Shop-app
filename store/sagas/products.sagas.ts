import {takeLatest, call, put} from "redux-saga/effects";
import * as constants from "../constants/products.constants";
import {createProductInDb} from "../api/products.queries"
import {createProductFailure, createProductSuccess} from "../actions/products.actions";

function* createProductEffect({payload}: { type: string, payload: any }) {
    try {
        const productId = yield call(createProductInDb, payload);
        yield put(createProductSuccess({...payload, id: productId}));
    } catch (e) {
        console.error(e);
        yield put(createProductFailure(e));
    }
}


function* productSagas() {
    yield takeLatest(constants.CREATE_PRODUCT, createProductEffect);
}

export default productSagas;

