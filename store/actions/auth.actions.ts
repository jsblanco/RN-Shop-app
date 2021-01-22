import * as constants from '../constants/auth.constants';

export const signup = {
    request: (email: string, password: string) => {
        console.log('signup')
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

export const login = {
    request: (email: string, password: string) => {
        console.log('login')
        return {
            type: constants.LOGIN_REQUEST,
            payload: {email: email, password: password}
        }
    },
    success: (token: any) => {
        return {
            type: constants.LOGIN_SUCCESS,
            payload: {}
        }
    },
    failure: (error: any) => {
        return {
            type: constants.LOGIN_FAILURE,
            payload: error
        }
    }
}
