import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
});

export type AppStateType = ReturnType<typeof rootReducer> ;

export let store = createStore(rootReducer);