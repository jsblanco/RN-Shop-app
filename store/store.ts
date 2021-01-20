import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import productsReducer from "./reducers/products.reducers";
import ordersReducer from "./reducers/orders.reducer";
import createSagaMiddleware from "redux-saga";
import {all} from "redux-saga/effects";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    products: productsReducer,
    orders: ordersReducer
})
export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

function* rootSaga() {
    yield all([
        //    tweetsSaga()
    ]);
}

sagaMiddleware.run(rootSaga);
