import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

export type authReducerActionsTypes = ReturnType<typeof setAuthUserData>

export type authType = {
    id: number,
    email: string,
    login: string
    isAuth: boolean
}

let initialState: authType = {
    id: 2,
    email: 'blabla@bla.bla',
    login: 'samurai',
    isAuth: false,
}

export const authReducer = (state: authType = initialState, action: authReducerActionsTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id: number, email: string, login: string) => ({
    type: SET_USER_DATA, data: {
        id,
        email,
        login
    }

} as const)

export const getAuthUserData = () => (dispatch: any) => {
    authAPI.me().then(response => {
        if(response.data.resultCode == 0) {
            let {id, email,login} = response.data.data;
            dispatch(setAuthUserData(id, email, login))
        }
    });
}


