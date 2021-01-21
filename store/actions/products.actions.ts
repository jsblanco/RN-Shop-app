import * as constants from '../constants/products.constants';
import {Order} from "../../models/Order/Order";
import {Product} from "../../models/Product/Product";

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

export const emptyCart = () => {
    return {
        type: constants.EMPTY_CART
    }
}

export const fetchProducts = {
    request: {
        type: constants.FETCH_PRODUCTS_REQUEST,
    },

    success: (payload: Product[]) => {
        return {
            type: constants.FETCH_PRODUCTS_SUCCESS,
            payload: payload
        }
    },
    failure: (error: any) => {
        return {
            type: constants.FETCH_PRODUCTS_FAILURE,
            payload: error
        }
    }
}

export const createProduct = {
    request: (title: string, userId: string, description: string, price: string, imageUrl: string) => {
        return {
            type: constants.CREATE_PRODUCT_REQUEST,
            payload: {title, userId, description, price, imageUrl}
        }
    },
    success: (payload: Product) => {
        return {
            type: constants.CREATE_PRODUCT_SUCCESS,
            payload: payload
        }
    },
    failure: (error: any) => {
        return {
            type: constants.CREATE_PRODUCT_FAILURE,
            payload: error
        }
    }
}

export const updateProduct = {
    request: (id: string, title: string, description: string, imageUrl: string) => {
        return {
            type: constants.UPDATE_PRODUCT_REQUEST,
            payload: {id, title, description, imageUrl}
        }
    },
    success: (payload: {id: string, title: string, description: string, imageUrl: string}) => {
        return {
            type: constants.UPDATE_PRODUCT_SUCCESS,
            payload: payload
        }
    },
    failure: (error: any) => {
        return {
            type: constants.UPDATE_PRODUCT_FAILURE,
            payload: error
        }
    }
}

export const deleteProduct = {
    request: (id: string) => {
        return {
            type: constants.DELETE_PRODUCT_REQUEST,
            payload: {id: id}
        }
    },
    success: (id: string) => {
        return {
            type: constants.DELETE_PRODUCT_SUCCESS,
            payload: {id: id}
        }
    },
    failure: (error: any) => {
        return {
            type: constants.DELETE_PRODUCT_FAILURE,
            payload: error
        }
    }
}
