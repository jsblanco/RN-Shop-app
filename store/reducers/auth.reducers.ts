import * as constants from '../constants/auth.constants'

type StateType = {
    isLoggedIn: boolean,
}

const initialState: StateType = {
    isLoggedIn: false
}

const authReducer = (state: StateType = initialState, {type, payload}: { type: string, payload: any }) => {
    switch (type) {
        case constants.SIGNUP_SUCCESS:
        case constants.LOGIN_SUCCESS:
            return {...state, isLoggedIn: true}
        default:
            return {...state};
    }
}

export default authReducer;
