import * as constants from '../constants/products.constants'
import PRODUCTS from '../../data/dummyData';
import {Product} from "../../models/Product";

type StateType = {
    availableProducts: Product[],
    userProducts: Product[]
}

const initialState: StateType = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(product=>product.ownersId==='u1')
}

const productsReducer = (state: StateType = initialState, {type, payload}: { type: string, payload: any }) => {
    switch (type) {
        case constants.CONSTANT_NAME:
            return {...state}
        default:
            return {...state};
    }
}

export default productsReducer;
