
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";
import {RootStateType} from "./redux/store";


let rerenderedEntireThree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App dispatch={store.dispatch.bind(store)} store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderedEntireThree(store.getState());

// @ts-ignore
store.subscribe(() => {
    let state = store.getState();
    rerenderedEntireThree(state);
});



//API
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
