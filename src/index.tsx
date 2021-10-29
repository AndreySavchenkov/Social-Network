
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {store} from './redux/redux-store'



let rerenderedEntireThree = (state: AppStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderedEntireThree(store.getState());


store.subscribe(() => {
    let state = store.getState();
    rerenderedEntireThree(state);
});



//API
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
