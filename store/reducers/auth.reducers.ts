import * as constants from '../constants/auth.constants'

type StateType = {
    isLoggedIn: boolean,
    token: string,
    userId: string
}

const initialState: StateType = {
    isLoggedIn: false,
    token: '',
    userId: ''
}

const authReducer = (state: StateType = initialState, {type, payload}: { type: string, payload: any }) => {
    switch (type) {
        case constants.SIGNUP_SUCCESS:
        case constants.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: payload.token,
                userId: payload.userId,
            };
        case constants.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                token: '',
                userId: ''
            }
        default:
            return {...state};
    }
}

export default authReducer;
