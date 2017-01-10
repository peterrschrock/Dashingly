import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import CreateSessionFormContainer from './create_session_form/create_session_form_container';




const Root = ({store}) => {
  const _redirect_to_home= (nextState,replace) => {
    const currentUser = store.getState().session.username;
    if(currentUser){
      replace("/");
    }
  };

  return <Provider store={store}>
    <Router history={ hashHistory }>
      <Route path="/" component={App}>
        <Route path="/login" component={CreateSessionFormContainer} onEnter={_redirect_to_home}></Route>
        <Route path="/signup" component={CreateSessionFormContainer} onEnter={_redirect_to_home}></Route>
      </Route>
    </Router>
  </Provider>;
};


export default Root;
