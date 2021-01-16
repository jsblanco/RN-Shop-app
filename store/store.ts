import {combineReducers, createStore} from "redux";
import productsReducer from "./reducers/products.reducers";

const rootReducer = combineReducers({
    products: productsReducer
})
export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);
