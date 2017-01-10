import React from 'react';
import ReactDOM from 'react-dom';
// import {login, signup, logout} from './util/session_api_util.js';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
  // window.login = login;
  // window.signup = signup;
  // window.logout = logout;
  // window.store = store;
});


// TODO delete commented out testing