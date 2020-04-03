import * as serviceWorker from './serviceWorker';
import store from './redux/redax_store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireTree(store.getState())

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();

store.subscribe(()=>{
    let state=store.getState();
    rerenderEntireTree(state);
});
