import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type authReducerActionsTypes = ReturnType<typeof initializedSuccess>

export type authType = {
    initialized: boolean,
}

let initialState: authType = {
    initialized: false,
}

export const appReducer = (state: authType = initialState, action: authReducerActionsTypes) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
               initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
} as const)

export const initizlizeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(()=> {
        dispatch(initializedSuccess())
    });


}







