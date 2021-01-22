import {takeLatest, call, put} from "redux-saga/effects";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as constants from "../constants/auth.constants";
import {createUserInDb, loginUserFromDb} from "../api/auth.queries"
import {login, signup} from "../actions/auth.actions";


function* signupEffect({payload}: { type: string, payload: { email: string, password: string } }) {
    try {
        const serverResponse = yield call(createUserInDb, payload);
        yield put(signup.success({token: serverResponse.idToken, userId: serverResponse.localId}));
        const expirationDate = new Date(new Date().getTime() + (+serverResponse.expiresIn * 1000));
        saveDataToStorage(serverResponse.idToken, serverResponse.localId, expirationDate);
    } catch (e) {
        console.error(e);
        yield put(signup.failure(e));
    }
}

function* loginEffect({payload}: { type: string, payload: { email: string, password: string } }) {
    try {
        const serverResponse = yield call(loginUserFromDb, payload);
        yield put(login.success({token: serverResponse.idToken, userId: serverResponse.localId}));
        const expirationDate = new Date(new Date().getTime() + (+serverResponse.expiresIn * 1000));
        saveDataToStorage(serverResponse.idToken, serverResponse.localId, expirationDate);
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


const saveDataToStorage = async (token: string, userId: string, expirationDate: Date) => {
    try {
        await AsyncStorage.setItem('userData', JSON.stringify({
            token: token,
            userId: userId,
            expirationDate: expirationDate.toISOString()
        }))
    } catch (e) {
        console.error(e);
    }
}
