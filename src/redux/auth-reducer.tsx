import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

export type authReducerActionsTypes = ReturnType<typeof setAuthUserData>

export type authType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}

let initialState: authType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state: authType = initialState, action: authReducerActionsTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA, payload: {
        id,
        email,
        login,
        isAuth
    }

} as const)

export const getAuthUserData = () => (dispatch: any) => {
    authAPI.me().then(response => {
        if(response.data.resultCode === 0) {
            let {id, email,login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true))
        }
    });
}

export const login = (email:string, password:string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email,password,rememberMe).then(response => {
        if(response.data.resultCode === 0) {
           dispatch(getAuthUserData())
        }
    });
}

export const logout = () => (dispatch: any) => {
    authAPI.logout().then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setAuthUserData(null,null,null,false))
        }
    });
}


