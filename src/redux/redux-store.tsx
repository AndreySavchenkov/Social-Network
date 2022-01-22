import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import {appReducer} from "./app-reducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
});

export type AppStateType = ReturnType<typeof rootReducer> ;



export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;
