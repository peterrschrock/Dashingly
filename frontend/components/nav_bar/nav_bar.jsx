import React from 'react';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';

import Upload from 'react-icons/lib/fa/upload';
import Dashboard from 'react-icons/lib/fa/dashboard';
import SignOut from 'react-icons/lib/fa/sign-out';
import InsertChart from 'react-icons/lib/md/insert-chart';
import AllCharts from 'react-icons/lib/fa/list-ol';



class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.redirectToDashboards = this.redirectToDashboards.bind(this);
    this.redirectToAllCharts = this.redirectToAllCharts.bind(this);
    this.redirectToCreateChart = this.redirectToCreateChart.bind(this);
    this.redirectToUpload = this.redirectToUpload.bind(this);
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

  loggedInRender() {
    if(this.props.username) {
      return <div className="nav-bar-div">
        <ul className="navBarHeader">
          <h2 className="masthead">dashingly</h2>
          <button onClick={this.redirectToDashboards}><Dashboard className="nav-icon"/> My Dashboards</button>
          <button onClick={this.redirectToAllCharts}><AllCharts className="nav-icon"/> My Charts</button>
          <button onClick={this.redirectToCreateChart}><InsertChart className="nav-icon"/> Create Chart</button>
          <button onClick={this.redirectToUpload}><Upload className="nav-icon"/> Upload</button>
          <button onClick={this.handleLogout}><SignOut className="nav-icon"/> Logout</button>
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
