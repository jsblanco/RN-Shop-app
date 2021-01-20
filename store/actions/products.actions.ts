import * as constants from '../constants/products.constants';
import {Order} from "../../models/Order";

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

export const updateProduct = (id: string, title: string, description: string, imageUrl: string) => {
    return {
        type: constants.UPDATE_PRODUCT,
        payload: {
            id,
            title,
            description,
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


export const createProductSuccess = (payload: { title: string, description: string, price: string, imageUrl: string }) => {
    return {
        type: constants.CREATE_PRODUCT_SUCCESS,
        payload: {
            id: new Date().getTime().toString(),
            ...payload
        }
    }
}

export const createProductFailure = (error: any) => {
    return {
        type: constants.CREATE_PRODUCT_FAILURE,
        payload: error
    }
}
