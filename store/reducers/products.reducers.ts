import * as constants from '../constants/products.constants'
import * as orderConstants from '../constants/orders.constants'
import PRODUCTS from '../../data/dummyData';
import {Product} from "../../models/Product";

type StateType = {
    availableProducts: Product[],
    userProducts: Product[],
    cart: { product: Product, amount: number }[]
}

const initialState: StateType = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(product => product.ownersId === 'u3'),
    cart: [],
}

const productsReducer = (state: StateType = initialState, {type, payload}: { type: string, payload?: any }) => {
    let product: Product | undefined;
    let productCartIndex: number, updatedCart: { product: Product, amount: number }[];
    switch (type) {
        case constants.ADD_TO_CART:
            if (state.cart.length > 0) {
                productCartIndex = state.cart.findIndex(item => item.product.id === payload.productId);
                if (productCartIndex >= 0) {
                    updatedCart = [...state.cart];
                    updatedCart[productCartIndex].amount++;
                    return {...state, cart: updatedCart}
                }
            }
            product = state.availableProducts.find(item => item.id === payload.productId);
            if (!!product) {
                return {
                    ...state,
                    cart: [...state.cart, {product: product, amount: 1}]
                }
            }
            return {...state};
        case constants.REMOVE_FROM_CART:
            productCartIndex = state.cart.findIndex(item => item.product.id === payload.productId);
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
        case orderConstants.ADD_ORDER:
            return {...state, cart: []}
        case constants.DELETE_PRODUCT:
            return {
                ...state,
                cart: state.cart.filter(item => item.product.id !== payload.productId),
                availableProducts: state.availableProducts.filter(product => product.id !== payload.productId),
                userProducts: state.userProducts.filter(product => product.id !== payload.productId),
            };
        default:
            return {...state};
    }
}

export default productsReducer;
