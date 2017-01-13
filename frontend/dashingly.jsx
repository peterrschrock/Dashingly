import React from 'react';
import ReactDOM from 'react-dom';
// import {login, signup, logout} from './util/session_api_util.js';
import configureStore from './store/store';
import Root from './components/root';
require('font-awesome/css/font-awesome.css');


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if(window.currentUser){
    const preloadedState = { session: window.currentUser };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  // window.currentUser = store.getState().session.username;
  ReactDOM.render(<Root store={store}/>, root);
  // window.login = login;
  // window.signup = signup;
  // window.logout = logout;
  window.store = store;
});


// TODO delete commented out testing
