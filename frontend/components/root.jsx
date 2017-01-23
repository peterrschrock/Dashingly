import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import CreateSessionFormContainer from './create_session_form/create_session_form_container';
// import MyDashboardsContainer from './my_dashboards/my_dashboards_container';
// import MyChartsContainer from './my_charts/my_charts_container';
// import ChartFormContainer from './chart/single_chart_container';
import UploadPage from './upload_page';
import ChartPage from './chart_page';
import ChartsIndexPage from './my_charts/my_charts_container';
import SharedChartsIndexPage from './charts_to_me/charts_to_me_container';
import SharePage from './share_page/share_page_container';

// <Route path="/dashboards/me" component={MyDashboardsContainer} onEnter={_redirectToLogin}></Route>
// <Route path="/charts" component={MyChartsContainer} onEnter={_redirectToLogin}></Route>
// <Route path="/charts/new" component={ChartFormContainer} onEnter={_redirectToLogin}></Route>



const Root = ({store}) => {
  const _redirectToHome= (nextState,replace) => {
    const currentUser = store.getState().session.username;
    if(store.getState().session.username){
      replace("/charts");
    }
  };

  const _redirectToLogin = (nextState, replace) => {
    if(!store.getState().session.username) {
      replace("/login");
    }
  };
  
  return <Provider store={store}>
    <Router history={ hashHistory }>
      <Route path="/" component={App} onEnter={_redirectToLogin}>
        <Route path="/charts/:chartId/share" component={SharePage} onEnter={_redirectToLogin}></Route>
        <Route path="/charts" component={ChartsIndexPage} onEnter={_redirectToLogin}></Route>
        <Route path="/charts/shared" component={SharedChartsIndexPage} onEnter={_redirectToLogin}></Route>
        <Route path="/charts/new" component={ChartPage} onEnter={_redirectToLogin}></Route>
        <Route path="/charts/:chartId/edit" component={ChartPage} onEnter={_redirectToLogin}></Route>
        <Route path="/upload" component={UploadPage} onEnter={_redirectToLogin}></Route>
      </Route>
      <Route path="/login" component={CreateSessionFormContainer} onEnter={_redirectToHome}></Route>
      <Route path="/signup" component={CreateSessionFormContainer} onEnter={_redirectToHome}></Route>
    </Router>
  </Provider>;
};


export default Root;
