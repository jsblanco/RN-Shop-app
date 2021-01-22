import {axiosAuthInstance} from "./axios/axiosAuth";

export const createUserInDb = async ({email, password}: { email: string, password: string, }) => {
    console.log('signing in')
    return axiosAuthInstance.post("/accounts:signUp?key=AIzaSyBANhzKXlQjW3l1KXqGttm1DuswCGKVM5E", {email: email, password: password, returnSecureToken: true })
}

export const loginUserFromDb = async ({email, password}: { email: string, password: string, }) => {
    console.log('logging in')
    return axiosAuthInstance.post("/accounts:signInWithPassword?key=AIzaSyBANhzKXlQjW3l1KXqGttm1DuswCGKVM5E", {email: email, password: password, returnSecureToken: true })
}
