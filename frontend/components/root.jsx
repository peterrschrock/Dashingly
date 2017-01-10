import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import CreateSessionFormContainer from './create_session_form/create_session_form_container';




const Root = ({store}) => {
  const _redirectToHome= (nextState,replace) => {
    const currentUser = store.getState().session.username;
    if(store.getState().session.username){
      replace("/");
    }
  };

  const _redirectToLogin = (nextState, replace) => {
    const currentUser = store.getState().session.username;
    if(!store.getState().session.username) {
      replace("/signup");
    }
  };

  return <Provider store={store}>
    <Router history={ hashHistory }>
      <Route path="/" component={App} >
        <Route path="/login" component={CreateSessionFormContainer} onEnter={_redirectToHome}></Route>
        <Route path="/signup" component={CreateSessionFormContainer} onEnter={_redirectToHome}></Route>
      </Route>
    </Router>
  </Provider>;
};


export default Root;
