import {takeLatest, call, put} from "redux-saga/effects";
import * as constants from "../constants/auth.constants";
import {createUserInDb} from "../api/auth.queries"
import {signup} from "../actions/auth.actions";


function* signupEffect({payload}: {type: string, payload: { email: string, password: string }
}) {
    try {
        console.log(payload)
        const userToken = yield call(createUserInDb, payload);
        console.log(userToken)
        yield put(signup.success(userToken));
    } catch (e) {
        console.error(e);
        yield put(signup.failure(e));
    }
}

// function* loginEffect({payload}: { type: string, payload: { product: Product, amount: number }[] }) {
//     try {
//         const date = new Date();
//         let price = 0;
//         payload.map(item => price += item.product.price * item.amount)
//         const orderId = yield call(saveOrderInDb, {userId: 'u3', purchases: payload, date, price});
//         const order = orderAdapter.adapt({id: orderId.name, userId: 'u3', date, purchases: payload, price})
//         yield put(login.success(order));
//     } catch (e) {
//         console.error(e);
//         yield put(login.failure(e));
//     }
// }


function* authSagas() {
    yield takeLatest(constants.SIGNUP_REQUEST, signupEffect);
    // yield takeLatest(constants.LOGIN_REQUEST, loginEffect);
}

export default authSagas;
