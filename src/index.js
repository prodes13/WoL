import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';

import './index.css';
import App from './App';


import { requestQuestions, returnQuestion, returnGlobalIndex, saveQuestions} from './redux/reducers'


import * as serviceWorker from './serviceWorker';
import { firebaseConfig } from './config/fbConfig';

// const logger = createLogger()

const rootReducers = combineReducers({requestQuestions, returnQuestion, returnGlobalIndex, saveQuestions})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


firebase.initializeApp(firebaseConfig);

console.log(firebase.database().ref().child('questions'));





// const store = createStore(rootReducers, composeEnhancer(applyMiddleware(thunkMiddleware, logger)))
const store = createStore(rootReducers, composeEnhancer(applyMiddleware(thunkMiddleware)));

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();


// for database firebase

// https://firebase.google.com/docs/database/web/structure-data