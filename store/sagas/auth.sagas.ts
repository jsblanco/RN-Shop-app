import {takeLatest, call, put} from "redux-saga/effects";
import * as constants from "../constants/auth.constants";
import {createUserInDb, loginUserFromDb} from "../api/auth.queries"
import {login, signup} from "../actions/auth.actions";


function* signupEffect({payload}: { type: string, payload: { email: string, password: string } }) {
    try {
        const userToken = yield call(createUserInDb, payload);
        console.log(userToken)
        yield put(signup.success(userToken));
    } catch (e) {
        console.error(e);
        yield put(signup.failure(e));
    }
}

function* loginEffect({payload}: { type: string, payload: { email: string, password: string } }) {
    try {
        const userToken = yield call(loginUserFromDb, payload);
        console.log(userToken)
        yield put(login.success(userToken));
    } catch (e) {
        console.error(e);
        yield put(login.failure(e));
    }
}


function* authSagas() {
    yield takeLatest(constants.SIGNUP_REQUEST, signupEffect);
    yield takeLatest(constants.LOGIN_REQUEST, loginEffect);
}

export default authSagas;
