import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import productsReducer from "./reducers/products.reducers";
import ordersReducer from "./reducers/orders.reducer";
import createSagaMiddleware from "redux-saga";
import {all} from "redux-saga/effects";
import productSagas from "./sagas/products.sagas";
import orderSagas from "./sagas/orders.sagas";
import authReducer from "./reducers/auth.reducers";
import authSagas from "./sagas/auth.sagas";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    products: productsReducer,
    orders: ordersReducer,
    auth: authReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

function* rootSaga() {
    yield all([
        productSagas(),
        orderSagas(),
        authSagas()
    ]);
}

sagaMiddleware.run(rootSaga);
