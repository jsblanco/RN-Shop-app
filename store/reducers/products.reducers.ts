import * as constants from '../constants/products.constants'
import PRODUCTS from '../../data/dummyData';
import {Product} from "../../models/Product";

type StateType = {
    availableProducts: Product[],
    userProducts: Product[],
    cart: { product: Product, amount: number }[]
}

const initialState: StateType = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(product => product.ownersId === 'u1'),
    cart: [],
}

const productsReducer = (state: StateType = initialState, {type, payload}: { type: string, payload?: any }) => {
    let product: Product | undefined;
    let productCartIndex: number, updatedCart: { product: Product, amount: number }[];
    switch (type) {
        case constants.ADD_TO_CART:
            if (state.cart.length > 0) {
                productCartIndex = state.cart.findIndex(item => item.product.id === payload.projectId);
                if (productCartIndex >= 0) {
                    updatedCart = [...state.cart];
                    updatedCart[productCartIndex].amount++;
                    return {...state, cart: updatedCart}
                }
            }
            product = state.availableProducts.find(item => item.id === payload.projectId);
            if (!!product) return {
                ...state,
                cart: [...state.cart, {product: product, amount: 1}]
            };
            return {...state};
        case constants.REMOVE_FROM_CART:
            productCartIndex = state.cart.findIndex(item => item.product.id === payload.projectId);
            if (productCartIndex < 0) return {...state};
            updatedCart = [...state.cart];
            (updatedCart[productCartIndex].amount > 1)
                ? updatedCart[productCartIndex].amount--
                : updatedCart.splice(productCartIndex, 1);
            return {
                ...state,
                cart: updatedCart
            }
        case constants.EMPTY_CART:
            return {...state, cart: []}
        default:
            return {...state};
    }
}

export default productsReducer;
