import * as constants from '../constants/products.constants'
import PRODUCTS from '../../data/dummyData';
import {Product} from "../../models/Product";

type StateType = {
    availableProducts: Product[],
    userProducts: Product[],
    cart: { productId: string, amount: number }[]
}

const initialState: StateType = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(product => product.ownersId === 'u1'),
    cart: []
}

const productsReducer = (state: StateType = initialState, {type, payload}: { type: string, payload: any }) => {
    let productCartIndex: number, updatedCart: { productId: string, amount: number }[];
    switch (type) {
        case constants.ADD_TO_CART:
            productCartIndex = state.cart.findIndex(item => item.productId === payload.projectId);
            if (productCartIndex >= 0) {
                updatedCart = [...state.cart];
                updatedCart[productCartIndex].amount++;
                return {...state, cart: updatedCart}
            } else {
                return {
                    ...state,
                    cart: [...state.cart, {productId: payload.projectId, amount: 1}]
                }
            }
        case constants.REMOVE_FROM_CART:
            productCartIndex = state.cart.findIndex(item => item.productId === payload.projectId);
            if (productCartIndex < 0) return {...state};
            updatedCart = [...state.cart];
            (updatedCart[productCartIndex].amount > 1)
                ?
                updatedCart[productCartIndex].amount--
                :
                updatedCart.splice(productCartIndex, 1);
            return {
                ...state,
                cart: updatedCart
            }
        default:
            return {...state};
    }
}

export default productsReducer;
