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
    console.log(payload)
    let product: Product | undefined;
    let productIndex: number, updatedCart: { product: Product, amount: number }[];
    switch (type) {
        case constants.ADD_TO_CART:
            if (state.cart.length > 0) {
                productIndex = state.cart.findIndex(item => item.product.id === payload.productId);
                if (productIndex >= 0) {
                    updatedCart = [...state.cart];
                    updatedCart[productIndex].amount++;
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
            productIndex = state.cart.findIndex(item => item.product.id === payload.productId);
            if (productIndex < 0) return {...state};
            updatedCart = [...state.cart];
            (updatedCart[productIndex].amount > 1)
                ? updatedCart[productIndex].amount--
                : updatedCart.splice(productIndex, 1);
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
        case constants.CREATE_PRODUCT:
            product = new Product(new Date().getTime().toString(), 'u3', payload.title, payload.description, payload.imageUrl, (+payload.price - 0.01))
            return {
                ...state,
                availableProducts: [product, ...state.availableProducts],
                userProducts: [product, ...state.userProducts]
            }
        case constants.UPDATE_PRODUCT:
            productIndex = state.userProducts.findIndex(product => product.id === payload.id);
            product = new Product(payload.id, state.userProducts[productIndex].id, payload.title, payload.description, payload.imageUrl, state.userProducts[productIndex].price)
            return {
                ...state,
                availableProducts: [product, ...state.availableProducts.filter(product => product.id !== payload.id)],
                userProducts: [product, ...state.userProducts.filter(product => product.id !== payload.id)]
            }
        default:
            return {...state};
    }
}

export default productsReducer;
