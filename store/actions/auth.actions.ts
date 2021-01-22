import * as constants from '../constants/auth.constants';

export const signup = {

    request: (email: string, password: string) => {
        return {
            type: constants.SIGNUP_REQUEST,
            payload: {email: email, password: password}
        }
    },

    success: (token: any) => {
        return {
            type: constants.SIGNUP_SUCCESS,
            payload: {}
        }
    },

    failure: (error: any) => {
        return {
            type: constants.SIGNUP_FAILURE,
            payload: error
        }
    }
}
