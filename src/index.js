import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import './index.css';
import App from './App';


import { requestQuestions, searchRobots } from './redux/reducers'


import * as serviceWorker from './serviceWorker';


const logger = createLogger()

const rootReducers = combineReducers({requestQuestions, searchRobots})

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))


ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();


/*


import 'tachyons';
import './index.css';


*/