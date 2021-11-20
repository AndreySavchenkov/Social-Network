import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
});

export type AppStateType = ReturnType<typeof rootReducer> ;



export let store = createStore(rootReducer);

// @ts-ignore
window.store = store;
