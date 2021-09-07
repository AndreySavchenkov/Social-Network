
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import state, {addPost, subscribe, updateNewPostText} from "./redux/state";


let rerenderedEntireThree = (state: any) => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} newPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}

rerenderedEntireThree(state);
subscribe(rerenderedEntireThree);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
