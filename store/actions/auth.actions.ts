import * as constants from '../constants/auth.constants';

type authResponse = {
    kind: "identitytoolkit#VerifyPasswordResponse"
    localId: "LJJr5w4ISuZa5rekRs7775Q1obk1"
    email: "jorge@promo.com"
    displayName: ""
    idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyYjkxODJiMWI0NmNiN2ZjN2MzMTFlZTgwMjFhZDY1MmVlMjc2MjIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vam9yZ2Utc2hvcC1hcHAiLCJhdWQiOiJqb3JnZS1zaG9wLWFwcCIsImF1dGhfdGltZSI6MTYxMTM1MjMyNCwidXNlcl9pZCI6IkxKSnI1dzRJU3VaYTVyZWtSczc3NzVRMW9iazEiLCJzdWIiOiJMSkpyNXc0SVN1WmE1cmVrUnM3Nzc1UTFvYmsxIiwiaWF0IjoxNjExMzUyMzI0LCJleHAiOjE2MTEzNTU5MjQsImVtYWlsIjoiam9yZ2VAcHJvbW8uY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImpvcmdlQHByb21vLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A96HSdu8a__R0Io7JUm67sI4npmmar33VwD4pS-KRYxNPCfXkSHDmexVR0FfgF9MpwWbh2BGZrNc2rZpmO0uDtEfdyz5RdBOKHB6ux3Kg9Tuqhf9Z86sYJW29GNJLXstWqPV6gKtH4d6VTtnzNM4rT3jY4mV0jNazOdlJJ_pIkdEC_fE3cR5HzRZBfniRQcrM4E_wPDrjrrarjUTmFi7wdR7NCT1udvow_fESg3rY-XyO-R06t6rxi_4xWyszikN1RTZKdL5j2VkKJLpTaTEbSz8PDbENHWIh9MqRXKSiw4BFfqYYxxUWQue4RywFwAkTN-B-L-1RpoVoNScPuYZTQ"
    registered: true
    refreshToken: "AOvuKvQwUmJB23IwR_YdHjzSLmSybJ-PiUTnjr9XFbfE-S_3XPZji9TUXapWILflpIiEkgCtij9n7GnjxV-EQpjrKjDAT9LQP9_wHAIOMUwQp7yPigGeO3zb6AN68hqG4NpSeoNjZohuWOijUkFKfoHCDuq-Px84v7Hb5sH6q1kXzmXg5g4-_ZOMYwC8J_J0KRD7PtFgs2kcSkqMKcAbQ8ylbI5ZOPXWfg"
    expiresIn: "3600"
}

export const signup = {
    request: (email: string, password: string) => {
        return {
            type: constants.SIGNUP_REQUEST,
            payload: {email: email, password: password}
        }
    },
    success: (payload: { userId: string, token: string }) => {
        return {
            type: constants.SIGNUP_SUCCESS,
            payload: payload
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
        return {
            type: constants.LOGIN_REQUEST,
            payload: {email: email, password: password}
        }
    },
    success: (payload: { userId: string, token: string }) => {
        return {
            type: constants.LOGIN_SUCCESS,
            payload: payload
        }
    },
    failure: (error: any) => {
        return {
            type: constants.LOGIN_FAILURE,
            payload: error
        }
    }
}

export const logout = () => {
    return {
        type: constants.LOGOUT
    }
}
