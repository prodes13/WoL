import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';

import './index.css';
import App from './App';


import { requestQuestions, returnQuestion, returnGlobalIndex, saveQuestions} from './redux/reducers'


import * as serviceWorker from './serviceWorker';
import authReducer from './redux/authReducer';
import questionsReducer from './redux/questionsReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

// const logger = createLogger()

const rootReducers = combineReducers({
    requestQuestions, 
    returnQuestion, 
    returnGlobalIndex, 
    saveQuestions,
    auth: authReducer,
    questions: questionsReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;






// const store = createStore(rootReducers, composeEnhancer(applyMiddleware(thunkMiddleware, logger)))
const store = createStore(rootReducers, composeEnhancer(applyMiddleware(thunkMiddleware.withExtraArgument({getFirebase, getFirestore})),
reactReduxFirebase(fbConfig, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}),
reduxFirestore(fbConfig) // redux bindings for firestore
));

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
        <Provider store = {store}>
            <App />
        </Provider>, document.getElementById('root'));
    });
serviceWorker.unregister();


// import { createStore, applyMiddleware, compose } from 'redux'
// import rootReducer from './store/reducers/rootReducer'
// import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'NPM

// const store = createStore(rootReducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
//     reactReduxFirebase(fbConfig, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}),
//     reduxFirestore(fbConfig) // redux bindings for firestore
//   )
// );

// store.firebaseAuthIsReady.then(() => {
//   ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
//   registerServiceWorker();
// });


// npm uninstall react-redux react-redux-firebase redux-firestore firebase

// then i just installed exactly the same versions as on his github: 

// npm install react-redux@5.1.1 react-redux-firebase@2.1.6 redux-firestore@0.5.7 firebase@5.3.0


// https://github.com/iamshaunjp/React-Redux-Firebase-App/tree/lesson-31/marioplan/src/components/projects