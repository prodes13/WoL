import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';

import './index.css';
import App from './App';


import { requestQuestions, returnQuestion, returnGlobalIndex, saveQuestions} from './redux/reducers'


import * as serviceWorker from './serviceWorker';


// const logger = createLogger()

const rootReducers = combineReducers({requestQuestions, returnQuestion, returnGlobalIndex, saveQuestions})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducers, composeEnhancer(applyMiddleware(thunkMiddleware, logger)))
const store = createStore(rootReducers, composeEnhancer(applyMiddleware(thunkMiddleware)));

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();