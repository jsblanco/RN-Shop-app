import {axiosAuthInstance} from "./axios/axiosAuth";

export const createUserInDb = async ({email, password}: { email: string, password: string, }) => {
    return axiosAuthInstance.post("", {email: email, password: password, returnSecureToken: true })
}
