import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';

// import reducer from './reducers';
import { provider } from 'react-redux';

const store = createStore(
    () => ({}),
    createLogger
);

ReactDOM.render(
    <provider store={store} > <App /> </provider>  , 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
