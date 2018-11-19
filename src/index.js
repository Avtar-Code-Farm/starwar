import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import  searchSaga from './sagas/search';
 import reducer from './reducers';
 import { Provider } from 'react-redux';

const logger = createLogger();
const sagas = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(logger, sagas)
);

sagas.run(searchSaga);

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
