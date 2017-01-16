import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import CreateSessionFormContainer from './create_session_form/create_session_form_container';
// import MyDashboardsContainer from './my_dashboards/my_dashboards_container';
// import MyChartsContainer from './my_charts/my_charts_container';
// import ChartFormContainer from './chart/single_chart_container';
import UploadPage from './upload_page';
// import ChartPage from './chart_page';

// <Route path="/dashboards/me" component={MyDashboardsContainer} onEnter={_redirectToLogin}></Route>
// <Route path="/charts" component={MyChartsContainer} onEnter={_redirectToLogin}></Route>
// <Route path="/charts/new" component={ChartFormContainer} onEnter={_redirectToLogin}></Route>



const Root = ({store}) => {
  const _redirectToHome= (nextState,replace) => {
    const currentUser = store.getState().session.username;
    if(store.getState().session.username){
      replace("/");
    }
  };

  const _redirectToLogin = (nextState, replace) => {
    if(!store.getState().session.username) {
      replace("/signup");
    }
  };

  // <Route path="/charts/new" component={ChartPage} onEnter={_redirectToLogin}></Route>
  return <Provider store={store}>
    <Router history={ hashHistory }>
      <Route path="/" component={App} >
        <Route path="/upload" component={UploadPage} onEnter={_redirectToLogin}></Route>
        <Route path="/login" component={CreateSessionFormContainer} onEnter={_redirectToHome}></Route>
        <Route path="/signup" component={CreateSessionFormContainer} onEnter={_redirectToHome}></Route>
      </Route>
    </Router>
  </Provider>;
};


export default Root;
