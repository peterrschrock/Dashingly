import React from 'react';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import {bindAll} from 'lodash';

import CloudUpload from 'react-icons/lib/fa/cloud-upload';
import Dashboard from 'react-icons/lib/fa/dashboard';
import SignOut from 'react-icons/lib/fa/sign-out';
import InsertChart from 'react-icons/lib/md/insert-chart';
import AllCharts from 'react-icons/lib/fa/list-ol';



class NavBar extends React.Component {
  constructor(props){
    super(props);
    bindAll(this, 'handleLogout', 'redirectToDashboards', 'redirectToAllCharts', 'redirectToCreateChart', 'redirectToUpload');
  }

  handleLogout(e){
    e.preventDefault;
    this.props.logout();
  }

  componentDidUpdate() {
		this.redirectIfLoggedOut();
	}

	redirectIfLoggedOut() {
		if (!this.props.username) {
			hashHistory.push("/login");
		}
	}

  redirectToDashboards() {
    hashHistory.push("/dashboards");
  }
  redirectToAllCharts() {
    hashHistory.push("/charts");
  }
  redirectToCreateChart() {
    hashHistory.push("/charts/new");
  }
  redirectToUpload() {
    hashHistory.push("/upload");
  }

  renderLogo() {
    return <li id="masthead" className="nav-icon-button" >
      <img alt="logo" className="logo" height="40" width="" src="assets/logo.jpg"></img>
      <h2 className="logo-title">Dashingly</h2>
    </li>;
  }

  loggedInRender() {
    if(this.props.username) {
      return <div className="nav-bar-div">
        <ul className="navBarHeader">
          {this.renderLogo()}
          <button className="nav-icon-button" onClick={this.redirectToDashboards}><Dashboard className="nav-icon"/>My Dashboards</button>
          <button className="nav-icon-button" onClick={this.redirectToAllCharts}><AllCharts className="nav-icon"/>My Charts</button>
          <button className="nav-icon-button" onClick={this.redirectToCreateChart}><InsertChart className="nav-icon"/>Create Chart</button>
          <button className="nav-icon-button" onClick={this.redirectToUpload}><CloudUpload className="nav-icon"/>Upload Data</button>
          <button className="nav-icon-button" onClick={this.handleLogout}><SignOut className="nav-icon"/>Logout</button>
        </ul>
      </div>;
    } else {
      return <div></div>;
    }
  }

  render() {
    return this.loggedInRender();
  }
}

export default NavBar;
