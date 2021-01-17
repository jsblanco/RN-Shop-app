import {combineReducers, createStore} from "redux";
import productsReducer from "./reducers/products.reducers";
import ordersReducer from "./reducers/orders.reducer";

const rootReducer = combineReducers({
    products: productsReducer,
    orders: ordersReducer
})
export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);
