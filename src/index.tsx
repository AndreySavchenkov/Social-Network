import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: "Hello everybody!!!)", likesCount: 12},
    {id: 2, message: "Yeah!", likesCount: 16},
    {id: 3, message: "Zzzzz...", likesCount: 2},
    {id: 4, message: "You're interesting man but I want to sleep", likesCount: 10},
    {id: 5, message: "It's my first post", likesCount: 22},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
