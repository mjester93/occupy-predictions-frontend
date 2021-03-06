import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';

import './index.css';
import App from './App';

import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

// Checking if a user is logged in on refreshes
const token = localStorage.getItem('token');
if (token === "undefined") {
  store.dispatch( {type: 'LOG_USER_OUT'} );
}
else if (token !== null) {
  store.dispatch({ type: 'LOG_USER_IN', token });
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
