import * as constants from '../constants/products.constants'
import * as orderConstants from '../constants/orders.constants'
// import PRODUCTS from '../../data/dummyData';
import {Product} from "../../models/Product/Product";

type StateType = {
    error: string,
    availableProducts: Product[],
    userProducts: Product[],
    cart: { product: Product, amount: number }[]
}

const initialState: StateType = {
    error: '',
    availableProducts: [], // PRODUCTS,
    userProducts: [], //PRODUCTS.filter(product => product.userId === 'u3'),
    cart: [],
}

const productsReducer = (state: StateType = initialState, {type, payload}: { type: string, payload?: any }) => {
    let product: Product | undefined, productIndex: number, updatedCart: { product: Product, amount: number }[],
        updatedProducts: Product[], updatedUserProducts: Product[];
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
        case orderConstants.SAVE_ORDER_SUCCESS:
            return {...state, cart: []}
        case constants.CREATE_PRODUCT_SUCCESS:
            return {
                ...state,
                error: '',
                availableProducts: [payload, ...state.availableProducts],
                userProducts: [payload, ...state.userProducts]
            }
        case constants.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                error: '',
                availableProducts: payload,
                userProducts: payload.filter((product: Product) => product.userId === 'u3')
            }
        case constants.UPDATE_PRODUCT_SUCCESS:
            productIndex = state.userProducts.findIndex(product => product.id === payload.id);
            product = new Product(payload.id, state.userProducts[productIndex].userId, payload.title, payload.description, payload.imageUrl, state.userProducts[productIndex].price);
            updatedUserProducts = [...state.userProducts];
            updatedUserProducts[productIndex] = product;

            productIndex = state.availableProducts.findIndex(product => product.id === payload.id);
            updatedProducts = [...state.availableProducts];
            updatedProducts[productIndex] = product;

            updatedCart = [...state.cart];
            productIndex = updatedCart.findIndex(item=> item.product.id === payload.id)
            if (productIndex>=0){
                updatedCart[productIndex].product = product;
            }

            return {
                ...state,
                error: '',
                availableProducts: updatedProducts,
                userProducts: updatedUserProducts,
                car: updatedCart,
            }
        case constants.DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                cart: state.cart.filter(purchase => purchase.product.id !== payload.id),
                userProducts: state.userProducts.filter(product => product.id !== payload.id),
                availableProducts: state.availableProducts.filter(product => product.id !== payload.id)
            }
        case constants.CREATE_PRODUCT_REQUEST:
        case constants.UPDATE_PRODUCT_REQUEST:
        case constants.DELETE_PRODUCT_REQUEST:
        case constants.FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                error: '',
            }
        case constants.CREATE_PRODUCT_FAILURE:
        case constants.UPDATE_PRODUCT_FAILURE:
        case constants.DELETE_PRODUCT_FAILURE:
        case constants.FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                error: 'Server could not be reached'
            }
        default:
            return {...state};
    }
}

export default productsReducer;
