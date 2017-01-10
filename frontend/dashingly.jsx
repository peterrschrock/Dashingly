import React from 'react';
import ReactDOM from 'react-dom';
import {login, signup, logout} from './util/session_api_util.js';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Testing...</h1>, root);
  const store = configureStore();
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.store = store;
});
