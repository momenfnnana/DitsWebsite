// this project using reactBootstrap, material ui library
import React from 'react';
import ReactDOM from 'react-dom';
// add reactBootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// add fonts
import './constant/fonts/din-next-lt-w23-medium.ttf'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
