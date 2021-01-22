import * as constants from '../constants/auth.constants'

type StateType = {
    key: any,
}

const initialState: StateType = {
    key: undefined
}

const authReducer = (state: StateType = initialState, {type, payload}: { type: string, payload: any }) => {
    switch (type) {
        case constants.SIGNUP_SUCCESS:
            return {...state}
        default:
            return {...state};
    }
}

export default authReducer;
