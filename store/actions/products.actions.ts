import * as constants from '../constants/products.constants';

export const addToCart = (productId: string) => {
    return {
        type: constants.ADD_TO_CART,
        payload: {productId}
    }
}

export const removeFromCart = (productId: string) => {
    return {
        type: constants.REMOVE_FROM_CART,
        payload: {productId}
    }
}

export const emptyCart = () =>{
    return {
        type: constants.EMPTY_CART
    }
}

export const deleteProduct = (productId: string) => {
    return {
        type: constants.DELETE_PRODUCT,
        payload: {productId}
    }
}
