import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

// ***** Redux ***** //
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from '../src/reducers/reducers.js';

// ***** Store ***** // 
// create the store: 
const store = createStore(
    reducers,
    applyMiddleware(thunk)
);
// a database that is storing all of your information in one place



ReactDOM.render(
    <Provider store={store}>
        <App /> 
     </Provider> //whatever goes in between the provider is being provided the ability to use the store    
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
