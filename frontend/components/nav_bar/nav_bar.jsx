import React from 'react';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';


class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
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

  loggedInRender() {
    if(this.props.username) {
      return <div>
        <ul>
          <li>dashingly</li>
          <li><Link to="/dashboards">My Dashboards</Link></li>
          <li><Link to="/charts">My Charts</Link></li>
          <li><Link to="/charts/new">Create Charts</Link></li>
          <li><Link to="/upload">Upload</Link></li>
          <li><button onClick={this.handleLogout}>Logout</button></li>
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
