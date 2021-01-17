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

export const updateProduct = (id: string, title: string, description: string, price: string, imageUrl: string) => {
    return {
        type: constants.UPDATE_PRODUCT,
        payload: {
            id,
            title,
            description,
            price,
            imageUrl
        }
    }
}

export const createProduct = (title: string, description: string, price: string, imageUrl: string) => {
    return {
        type: constants.CREATE_PRODUCT,
        payload: {
            title,
            description,
            price,
            imageUrl
        }
    }
}
