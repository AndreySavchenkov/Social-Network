const SET_USER_DATA = 'SET_USER_DATA';

export type authReducerActionsTypes = ReturnType<typeof setUserData>

export type authType = {
    id: number,
    email: string,
    login: string
}

let initialState: authType = {
    id: 2,
    email: 'blabla@bla.bla',
    login: 'samurai',
}

export const authReducer = (state: authType = initialState, action: authReducerActionsTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export const setUserData = (id: number, email: string, login: string) => ({
    type: SET_USER_DATA, data: {
        id,
        email,
        login
    }

} as const)


