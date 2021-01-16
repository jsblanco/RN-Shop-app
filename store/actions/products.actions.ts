import * as constants from '../constants/products.constants';

export const action = (mealId: string) => {
    return {
        type: constants.CONSTANT_NAME,
        payload: {
            mealId
        }
    }
}
