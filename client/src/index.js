// import 'materialize-css/dist/css/materialize.min.css';
import './res/css/style.css';
import "./res/css/icon-font.css";

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import App from './App';
import reducers from './reducers';

//Dev HTTP request handler
import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk) );

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
  );

// console.log('key is ', process.env.REACT_APP_STRIPE_KEY);
// console.log('environment is ', process.env.NODE_ENV);