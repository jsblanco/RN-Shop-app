import * as constants from '../constants/products.constants';

export const addToCart = (projectId: string) => {
    return {
        type: constants.ADD_TO_CART,
        payload: {projectId}
    }
}

export const removeFromCart = (projectId: string) => {
    return {
        type: constants.REMOVE_FROM_CART,
        payload: {projectId}
    }
}
